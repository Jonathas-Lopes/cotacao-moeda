const fetch = require("node-fetch");
const scheduler = require("node-cron")
const currency = require("../../db/model/currencyModel");


const getCurrencies = async function integration(currencies, socket) {

    scheduler.schedule('* * * * *', async function () {

        
        const response = await fetch(`https://economia.awesomeapi.com.br/last/${currencies}`);
        const data = await response.json()
        currency.insert(Object.keys(data), data)

        console.log('listen')
        socket.emit("currencies", await currency.find({}));


    });


}





module.exports = getCurrencies;