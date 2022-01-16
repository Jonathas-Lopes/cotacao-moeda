const currency = require('../db/model/currencyModel');

const socket = (io) => {
  io.once('connection', async (socket) => {
    socket.emit('currencies', await currency.listCurrencies());

    socket.on('disconnect', () => {

    });
  });
};
module.exports = socket;
