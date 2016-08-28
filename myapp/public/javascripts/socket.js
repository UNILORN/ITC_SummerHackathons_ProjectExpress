
  var socketio = io();
  socketio.on("publish", function (data) {});
  function publishMessage() {
    var moji = $(".naiyo").val();
    var jasoo = JSON.stringify(moji);
    socketio.emit("publish",function(jasoo){});
  }
