// NodeJS Core
import fs from 'fs';
import chromium from 'chrome-aws-lambda';
import {getMinecraftUser} from "../../../../core/minecraftUser";

export default async function generateUserImage(req, res) {
    const userName = req.query.username.replace('.jpg', '');
    const CURRENT_SEASON = process.env.NEXT_PUBLIC_CURRENT_SEASON;

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
                <div class="userCard">
                    <div style="width: 100%; display: flex; align-items: center">
                        <img style="border-radius: 5px" height="125px" width="125px" src=${`https://cravatar.eu/helmavatar/${userName}/150`} alt="User Bust" />
                        <div style="margin-left: 20px;">
                            <h1 style="font-size: 50px">
                                ${userName}
                            </h1>
                        </div>
                    </div>
                    <div>
                        <h2>Global Stats:</h2>
                        <ul>
                            <li>
                                <b>Joined</b>: ${new Date(user.joined).toDateString()}
                            </li>
                            <li>
                                <b>Playtime</b>: ${new Date(user.joined).toDateString()}
                            </li>
                            <li>
                                <b>Land</b>: ${user.land || "No land"}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Season Stats:</h2>
                        <ul>
                            <li>
                                <b>Level</b>: ${user.seasons[CURRENT_SEASON]?.level}
                            </li>
                            <li>
                                <b>Balance</b>: ${user.seasons[CURRENT_SEASON]?.balance}
                            </li>
                        </ul>
                    </div>
                    <img height="50px" width="50px" class="absolute top-1 right-1" src="${base64LogoURL}" alt="preview"/>
                </div>
            </body>
            <style>
                html, body {
                    height: 100%;
                    background-color: #16181C;
                }
            
                body {
                    align-items: center;
                    display: flex;
                    height: 600px;
                    justify-content: center;
                    margin: 0;
                    width: 1128px;
                    background-color: #16181C;
                }
            
                .userCard {
                    border-radius: 5px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    height: calc(100% - 80px);
                    margin: 40px;
                    padding: 30px;
                    width: calc(100% - 80px);
                    position: relative;
                    background-color: #363944;
                }
                * {
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    font-weight: 600;
                    color: #cbcbcb;
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
