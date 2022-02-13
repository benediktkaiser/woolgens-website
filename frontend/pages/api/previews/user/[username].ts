// NodeJS Core
import fs from 'fs';
import chromium from 'chrome-aws-lambda';
import {getMinecraftUser} from "../../../../core/minecraftUser";

export default async function generateUserImage(req, res) {
    const userName = req.query.username.replace('.jpg', '');

    // Get the WoolGens Logo
    const logo = fs.readFileSync('./public/logo.png');
    const base64Logo = Buffer.from(logo).toString('base64');
    const base64LogoURL = 'data:image/jpeg;base64,' + base64Logo;

    // Get the User Data
    const user = await getMinecraftUser("6fc34392-2261-4c1b-be56-9b34e7b8d8f0");

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
    await page.setViewport({width: 1128, height: 600});
    await page.setContent(`<html lang="en">
            <body>
                <div class="social-image-content">
                    <h1>
                        ${userName}
                    </h1>
                    <h2>
                        Joined: ${new Date(user.joined).toDateString()}
                    </h2>
                    <h2>
                        Level: ${user.seasons['Closed_Beta'].level}
                    </h2>
                    <div class="social-image-footer">
                        <div class="social-image-footer-left">
                            <img src="${base64LogoURL}" alt="preview" />
                            <span>WoolGens</span>
                        </div>
                        <div class="social-image-footer-right">
                            View User Profile!
                        </div>
                    </div>
                </div>
            </body>
            <style>
                html, body {
                    height : 100%;
                }
                body {
                    align-items : center;
                    display : flex;
                    height : 600px;
                    justify-content : center;
                    margin: 0;
                    width : 1128px;
                    background-color: #e2e2e2;
                }
                .social-image-content {
                    border : 2px solid black;
                    border-radius : 5px;
                    box-sizing: border-box;
                    display : flex;
                    flex-direction : column;
                    height : calc(100% - 80px);
                    margin : 40px;
                    padding : 20px;
                    width : calc(100% - 80px);
                    position: relative;
                    background-color: white;
                }
                .social-image-content::after {
                    content: ' ';
                    position: absolute;
                    top: 7px;
                    left: 7px;
                    width: 100%;
                    background-color: black;
                    height: 100%;
                    z-index: -1;
                    border-radius: 5px;
                }
                .social-image-content h1 {
                    font-size: 72px;
                    margin-top: 90px;
                }
                .social-image-footer {
                    display : flex;
                    flex-direction : row;
                    margin-top : auto;
                }
                .social-image-footer-left {
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    font-size : 28px;
                    font-weight : 600;
                    justify-content: center;
                    line-height: 40px;
                }
                .social-image-footer-left img {
                    border : 2px solid black;
                    border-radius : 50%;
                    height : 40px;
                    margin-right : 10px;
                    width : 40px;
                }
                .social-image-footer-right {
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    height : 40px;
                    justify-content: center;
                    margin-left : auto;
                    font-size : 28px;
                }
                * {
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    font-weight : 600;
                }
            </style>
        </html>`);
    const screenShotBuffer = await page.screenshot();
    res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": Buffer.byteLength(screenShotBuffer),
    })
    res.end(screenShotBuffer);
}
