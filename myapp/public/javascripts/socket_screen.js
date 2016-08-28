  var socketio = io();
  socketio.on("publish", function (data) { alertMessage(); });
  function publishMessage() {
    socketio.emit("publish",{});
  }
  function alertMessage(){
    var jsonPath = './data.json';
    var jqXHR = $.getJSON(jsonPath);

    jqXHR.done(function(json) {
      var vue = new Vue({
        el: '.app',
        data: {
          message: json
        }
      });
    });  
  }
