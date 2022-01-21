const puppeteer = require('puppeteer-extra');
puppeteer.use(require('puppeteer-extra-plugin-angular')());
const cron = require('node-cron')

var i = 0;
var start = '';
const Screenshot = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox','--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding']
    });    
  
    const page = await browser.newPage();        

    await page.goto('https://www.jbbodds.com/vi-vn/live', {waitUntil: 'networkidle2'});
    await page.waitForTimeout(2000)
    await page.type('input[type="text"]', 'binhbui9516');
    await page.type('input[type="password"]', 'binh1102');
    await page.click('button.toggle-login-desktop');
    await page.waitForTimeout(2000)
    const page2 = await browser.newPage();        // open new tab
    await page2.goto('https://www.jbbodds.com/vi-vn/live/lobby?partnerId=9&partnerName=Grand-Suite&playfor=real&&category=Baccarat&gameType',{waitUntil :"networkidle2"});
    await page2.bringToFront();                   // make the tab active
    await page2.waitForSelector('.scrollbarContainer', {
        visible: true,
    });
    await page2.waitForTimeout(3000)
    let scrollBar = await page2.$('.scrollbarContainer');
    await scrollBar.evaluate((el) => el.style.height = 100 + '%');
    await page2.waitForTimeout(1000);

    const session = await page2.target().createCDPSession();
    await session.send('Page.enable');
    await session.send('Page.setWebLifecycleState', {state: 'active'});
    

    cron.schedule('1 * * * * *', async () => {
        let cookies = await page2.cookies();
        limitCookies = cookies.map((item) => {
            item.expires = -1;
            return item;
        })
        await page2.setCookie(...limitCookies);
    
        if(i == 0){
            start = new Date();
        }
        let now = new Date();
        if(now.getTime() / 1000 - start.getTime() / 1000 >= 900){
            page2.click('#Balance');
            await page2.mouse.click(0, 0);
            await page2.bringToFront();
        }
        let current = now.toLocaleTimeString().split(' ');
        page2.screenshot({

            path: `./screenshot${current[0]}.png`,

            fullPage: true

            });

        i++;
    });
 }

 Screenshot();