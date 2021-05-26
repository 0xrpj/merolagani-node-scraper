const request = require("request-promise");
const cheerio = require("cheerio");

const symbol = "ruru";

const url = "https://www.merolagani.com/CompanyDetail.aspx?symbol=" + symbol;

(async () => {
    console.log("Processing...")

    const response = await request({
        uri: url,
    })

    let $ = cheerio.load(response);
    let sharesOutstanding = $("table > tbody:nth-child(2)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let marketPrice = $("table > tbody:nth-child(3)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let percentChange = $("table > tbody:nth-child(4)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let lastTradedOn = $("table > tbody:nth-child(5)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let highLow52weeks = $("table > tbody:nth-child(6)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let avg120days = $("table > tbody:nth-child(8)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let yearYield = $("table > tbody:nth-child(9)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let EPS = $("table > tbody:nth-child(10)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let PERatio = $("table > tbody:nth-child(11)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let bookValue = $("table > tbody:nth-child(12)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let PBV = $("table > tbody:nth-child(13)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let percentDividend = $("table > tbody:nth-child(14)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let percentBonus = $("table > tbody:nth-child(15)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let rightShare = $("table > tbody:nth-child(16)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let avgVolume30days = $("table > tbody:nth-child(17)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];
    let marketCapitalization = $("table > tbody:nth-child(18)").text().replace(/\s\s+/g, '  ').trim().split("  ")[1];

    var data = { sharesOutstanding, marketPrice, percentChange, lastTradedOn, highLow52weeks, avg120days, yearYield, EPS, PERatio, bookValue, PBV, percentDividend, percentBonus, rightShare, avgVolume30days, marketCapitalization }
    console.log(data);
})();