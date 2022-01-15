const currency = require('../db/model/currencyModel');
let socket = (io) => {
  io.once('connection', async function (socket) {
    socket.emit('currencies', await currency.listCurrencies());

    console.log('A user connected');

    socket.on('disconnect', function () {
      console.log('A user disconnected');
    });
  });

};
module.exports = socket;
