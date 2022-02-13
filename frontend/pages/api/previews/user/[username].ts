// NodeJS Core
import chromium from 'chrome-aws-lambda';

export default async function generateUserImage(req, res) {
    const userName = req.query.username.replace('.jpg', '');

    // Instantiate the Chromium Browser
    const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });

    // Generate the Page
    const page = await browser.newPage();
    await page.setViewport({width: 1550, height: 600});
    await page.goto(`https://staging.woolgens.net/profile/${userName}`);
    await page.waitForSelector('main > div');
    const main = await page.$('main > div');

    const screenShotBuffer = await main.screenshot();
    res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": Buffer.byteLength(screenShotBuffer),
    })
    res.end(screenShotBuffer);
}
