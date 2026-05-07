const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        const filePath = path.join(__dirname, 'sample_health_report.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: 'Sample_Health_Report.pdf',
            format: 'Letter',
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });
        
        console.log('Sample Health Report PDF generated successfully!');
        await browser.close();
    } catch (err) {
        console.error('Error generating PDF:', err);
    }
})();
