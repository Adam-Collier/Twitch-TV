var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

for (x = 0; x < arr.length; x++) {

  $.when($.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + arr[x] + "?callback=?"), $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + arr[x] + "?callback=?")).done(function(data, stream) {

    if (stream[0].stream == null) {
      var r = "<span>Offline</span>"
    } else {
      var r = "Streaming: " + stream[0].stream.game;
    }
    if (data[0].status == "404") {
      var n = data[0].message
      var l = "<div class = 'closed'</div>";
      var st = "This account is closed";
    } else {
      var n = data[0]["display_name"];
      var l = "<img src =" + data[0].logo + ">";
      var st = data[0].status;
    };

    $(".container").append("<li><a target= _blank href =" + data[0].url + ">" + "<div class = 'avatar'>" + l + "</div><div class = 'channels'><h2>" + n + "</h2><h4>" + st + "</h4><h5>" + r + "</h5></div></a></li>")

  });

};