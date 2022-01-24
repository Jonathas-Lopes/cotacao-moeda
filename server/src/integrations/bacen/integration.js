require('dotenv').config();
const fetch = require('node-fetch');
const scheduler = require('node-cron');
const currency = require('../../db/model/currencyModel');

const { ECONOMY_ENDPOINT } = process.env;
const getCurrencies = async function integration(currencies, socket) {
  scheduler.schedule('* * * * *', async () => {
    const response = await fetch(`${ECONOMY_ENDPOINT}/last/${currencies}`);
    const data = await response.json();
    await currency.insertCurrency(data);

    socket.emit('currenciesUpdated', await currency.listCurrencies(true));
  });
};

module.exports = getCurrencies;
