  var socketio = io();
  socketio.on("publish", function (data) { alertMessage(); });
  function publishMessage() {
    socketio.emit("publish",{});
  }
  function alertMessage(){
    document.write("<h1>Hellooooooooooooooo</h1>");
  }
