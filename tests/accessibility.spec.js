const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');
const path = require('path');

const TARGET_URL =
  process.env.TARGET_URL || 'http://127.0.0.1:8080/sample-broken.html';

function getBaseName(url) {
  if (url.includes('sample-broken')) return 'broken-page';
  if (url.includes('sample-fixed')) return 'fixed-page';
  if (url.includes('sample-form-broken')) return 'form-broken';
  if (url.includes('sample-form-fixed')) return 'form-fixed';
  if (url.includes('sample-aria-broken')) return 'aria-broken';
  if (url.includes('sample-aria-fixed')) return 'aria-fixed';
  if (url.includes('sample-contrast-broken')) return 'contrast-broken';
  if (url.includes('sample-contrast-fixed')) return 'contrast-fixed';

  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, '').replace(/[^a-zA-Z0-9]/g, '-');
  } catch {
    return 'latest-a11y';
  }
}

test('page should not have serious or critical accessibility violations', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto(TARGET_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page.locator('body')).toBeVisible();

  const results = await new AxeBuilder({ page }).analyze();

  const seriousOrCritical = results.violations.filter(
    (v) => v.impact === 'serious' || v.impact === 'critical'
  );

  const reportsDir = path.join(process.cwd(), 'reports');
  const screenshotsDir = path.join(reportsDir, 'screenshots');

  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

  const baseName = getBaseName(TARGET_URL);
  const reportPath = path.join(reportsDir, `${baseName}-report.md`);
  const screenshotPath = path.join(screenshotsDir, `${baseName}.png`);

  await page.screenshot({ path: screenshotPath, fullPage: true });

  let md = `# Accessibility Report\n\n`;
  md += `**URL:** ${TARGET_URL}\n\n`;
  md += `**Status:** ${seriousOrCritical.length ? 'Fail' : 'Pass'}\n\n`;
  md += `**Serious/Critical Violations:** ${seriousOrCritical.length}\n\n`;
  md += `**Screenshot:** screenshots/${baseName}.png\n\n`;

  if (seriousOrCritical.length) {
    md += `## Violations\n\n`;

    seriousOrCritical.forEach((violation, index) => {
      md += `### ${index + 1}. ${violation.id}\n`;
      md += `- Impact: ${violation.impact}\n`;
      md += `- Help: ${violation.help}\n`;
      md += `- Description: ${violation.description}\n`;
      md += `- Help URL: ${violation.helpUrl}\n`;
      md += `- Affected nodes: ${violation.nodes.length}\n`;

      violation.nodes.forEach((node, nodeIndex) => {
        md += `  - Node ${nodeIndex + 1}: \`${node.html}\`\n`;
      });

      md += `\n`;
    });
  } else {
    md += `## Result\n\nNo serious or critical accessibility violations were found.\n`;
  }

  fs.writeFileSync(reportPath, md, 'utf8');

  expect(seriousOrCritical).toEqual([]);
});