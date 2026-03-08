const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');
const path = require('path');

const TARGET_URL =
  process.env.TARGET_URL || 'http://127.0.0.1:8080/sample-broken.html';

function getReportName(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '').replace(/[^a-zA-Z0-9]/g, '-');
    return `${host}-report.md`;
  } catch {
    return 'latest-a11y-report.md';
  }
}

test('page should not have serious or critical accessibility violations', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto(TARGET_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const results = await new AxeBuilder({ page }).analyze();

  const seriousOrCritical = results.violations.filter(
    (v) => v.impact === 'serious' || v.impact === 'critical'
  );

  const reportsDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  let md = `# Accessibility Report\n\n`;
  md += `**URL:** ${TARGET_URL}\n\n`;
  md += `**Status:** ${seriousOrCritical.length ? 'Fail' : 'Pass'}\n\n`;
  md += `**Serious/Critical Violations:** ${seriousOrCritical.length}\n\n`;

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

  const reportPath = path.join(reportsDir, getReportName(TARGET_URL));
  fs.writeFileSync(reportPath, md, 'utf8');

  expect(seriousOrCritical).toEqual([]);
});