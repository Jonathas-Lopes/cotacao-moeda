let socket = (io) => {
  io.on("connection", function (socket) {
    // active(socket);
    // users(socket);
    console.log("A user connected");

    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
  });
  //active(io);
};
module.exports = socket;
