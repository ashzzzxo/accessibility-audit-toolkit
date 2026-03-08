const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const TARGET_URL =
  process.env.TARGET_URL || 'http://127.0.0.1:8080/keyboard/sample-keyboard-broken.html';

function getKeyboardReportName(url) {
  if (url.includes('sample-keyboard-broken')) return 'keyboard-broken-report.md';
  if (url.includes('sample-keyboard-fixed')) return 'keyboard-fixed-report.md';

  try {
    const parsed = new URL(url);
    const host = parsed.hostname
      .replace(/^www\./, '')
      .replace(/[^a-zA-Z0-9]/g, '-');
    return `${host}-keyboard-report.md`;
  } catch {
    return 'keyboard-report.md';
  }
}

test('keyboard navigation should reach the main interactive control', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto(TARGET_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.keyboard.press('Tab');

  const activeInfo = await page.evaluate(() => {
    const el = document.activeElement;
    return {
      tag: el?.tagName || 'None',
      text: el?.textContent?.trim() || '',
      role: el?.getAttribute?.('role') || '',
      id: el?.id || ''
    };
  });

  const passed =
    activeInfo.tag === 'BUTTON' ||
    activeInfo.tag === 'A' ||
    activeInfo.role === 'button';

  const reportsDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  let md = `# Keyboard Accessibility Report\n\n`;
  md += `**URL:** ${TARGET_URL}\n\n`;
  md += `**Status:** ${passed ? 'Pass' : 'Fail'}\n\n`;
  md += `**First focused element tag:** ${activeInfo.tag}\n\n`;
  md += `**First focused element text:** ${activeInfo.text || 'None'}\n\n`;
  md += `**First focused element role:** ${activeInfo.role || 'None'}\n\n`;
  md += `**First focused element id:** ${activeInfo.id || 'None'}\n\n`;

  if (!passed) {
    md += `## Finding\n\n`;
    md += `The first Tab key press did not land on a keyboard-accessible interactive control.\n`;
    md += `This suggests the primary interactive element may not be reachable or properly semantic for keyboard users.\n`;
  } else {
    md += `## Result\n\n`;
    md += `The first Tab key press reached a keyboard-accessible interactive control.\n`;
  }

  const reportPath = path.join(reportsDir, getKeyboardReportName(TARGET_URL));
  fs.writeFileSync(reportPath, md, 'utf8');

  expect(passed).toBeTruthy();
});