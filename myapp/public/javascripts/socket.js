
  var socketio = io();
  socketio.on("publish", function (data) {});
  function publishMessage() {
    socketio.emit("publish",{});
  }
