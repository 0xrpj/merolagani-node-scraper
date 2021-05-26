const request = require("request-promise");
const cheerio = require("cheerio");

const url = "http://nepalstock.com/stocklive";

(async () => {
    console.log("Processing...")
    let stockData = [];
    const response = await request({
        uri: url,
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9,ne;q=0.8"
        },
        gzip: true
    })

    let $ = cheerio.load(response);
    let totalrows = $('.table tr').length;

    //Scrap every row!!!
    for (var i = 1; i <= totalrows; i++) {
        let symbol = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2)").text().trim();
        let LTP = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(3)").text().trim();
        let LTV = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(4)").text().trim();
        let pointChange = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(5)").text().trim();
        let percentChange = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(6)").text().trim();
        let open = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(7)").text().trim();
        let high = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(8)").text().trim();
        let low = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(9)").text().trim();
        let volume = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(10)").text().trim();
        let prevClose = $("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table > tbody > tr:nth-child(" + i + ") > td:nth-child(11)").text().trim();
        stockData.push({symbol, LTP, LTV, pointChange, percentChange, open, high, low, volume, prevClose});
        console.log(symbol, LTP, LTV, pointChange, percentChange, open, high, low, volume, prevClose)
        console.log("\n")
    }
})();

