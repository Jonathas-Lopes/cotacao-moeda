const mongoose = require("mongoose")
const connection = require('../../../.env.json').mongo


const connect = function () {
    mongoose.connect(`${connection.Server}:${connection.DB_PORT}/${connection.Database}`);
    mongoose.connection.on("error", (error) => console.log(error));
}
module.exports = connect;