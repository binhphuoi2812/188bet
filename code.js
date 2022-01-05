const puppeteer = require('puppeteer');         
 
const url = "https://www.jbbodds.com/vi-vn/live";           

var i = 0;
const Screenshot = async () => {    


    // const cookies = {
    //     name: 'io',
    //     value: 'lXnqtPHF8c1wfQWFACDL', 
    //     domain: 'ld3-gc-wss-188.prdaldb18a1.com',
    //     url: 'https://ld3-gc-188.prdaldb18a1.com/desktop?bucode=188bet&token=BswdS7b2wMLWhG-J5QdfzraAV0oedRlPRpp-ZIEPCVI.&language=vi-vn&buDomain=www.jbbodds.com&table=1997',
    //     path: '/',
    //     httpOnly: true,
    //     // secure: true,
    //   };

    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });    
  
    const page = await browser.newPage();        

    // await Promise.all([
       await page.goto('https://www.jbbodds.com/vi-vn/live', {waitUntil: 'networkidle2'}),
        // this.page.waitFor('body')
    //   ])
    await page.type('input[type="text"]', 'binhbui9516');
    await page.type('input[type="password"]', 'binh1102');
    await page.click('button.toggle-login-desktop');
    
    await page.focus('li.casino-item:nth-child(1)', '1234');
    await page.waitForSelector('.game-popup');
    await page.focus('.game-popup');
    await page.focus('.game-popup', '1234', {delay: 5});
    // await page.waitForSelector('game-popup > popup-content > table > tbody >  tr:nth-child(1) >  td:nth-child(3) >  a', { visible: true });
    await page.click('game-popup > popup-content > table > tbody >  tr:nth-child(1) >  td:nth-child(3) >  a');

    // await page.evaluate(() => {
    //     [...document.querySelectorAll('.menu-products a')].find(element => element.textContent === 'Casino Trực Tuyến').click();
    //   });
    // await page.evaluate(() => {
    //     document.querySelector("a[href='/vi-vn/live/lobby?partnerId=9&amp;partnerName=Grand-Suite&amp;playfor=real&amp;&amp;category=Baccarat&amp;gameType=']").click();
    //   });

    // await page.waitForNavigation({waitUntil: 'domcontentloaded'});

    // const cookies = await page.cookies();

    // const page2 = await browser.newPage();  
    // await page.setDefaultNavigationTimeout(0);
    // await page2.setCookie(...cookies);

    // await page.close(); 
    // page2.evaluate(() => window.open('https://ld3-gc-188.prdaldb18a1.com/desktop?bucode=188bet&token=BswdS7b2wMLWhG-J5QdfzraAV0oedRlPRpp-ZIEPCVI.&language=vi-vn&buDomain=www.jbbodds.com&table=1997'))
    // await page2.goto("https://ld3-gc-188.prdaldb18a1.com/desktop?bucode=188bet&token=BswdS7b2wMLWhG-J5QdfzraAV0oedRlPRpp-ZIEPCVI.&language=vi-vn&buDomain=www.jbbodds.com&table=1997",{waitUntil: 'networkidle0'});
    // await page.waitForNavigation({waitUntil: 'load'});             
    // await page.waitForNavigation({waitUntil: 'domcontentloaded'}); 
    // await page.waitForNavigation({waitUntil: 'networkidle0'});     
    // await page.waitForNavigation({waitUntil: 'networkidle2'});     
    
    await page.screenshot({                      
  
     path: `./screenshot${i}.png`,                 
  
     fullPage: true                         
  
   });
//    i++;
   await page.close();                   
  
   await browser.close();
  
 }

// setInterval(() => {
      Screenshot();   
// }, 3000);
