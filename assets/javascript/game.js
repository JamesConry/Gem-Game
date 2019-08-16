var randomTotal;
var userTotal=0;
var wins = 0;
var losses = 0;


randomTotal = Math.floor(Math.random() * 102) + 19;
$("#target").text(randomTotal);
$("#winText").text("Wins: " + wins);
$("#loseText").text("Losses: " + losses);
$("#total").text(userTotal);

function reset() {
    randomTotal = Math.floor(Math.random() * 102) + 19;
    userTotal = 0;
    $("#button1").attr("value", "-1");
    $("#button2").attr("value", "-1");
    $("#button3").attr("value", "-1");
    $("#button4").attr("value", "-1");
}

$(document).ready(function() {

    $(".crystal").on("click", function() {
      if(parseInt(this.value) === -1){
        this.value = Math.floor(Math.random() * 12) + 1;
      }
      userTotal += parseInt(this.value);
      if(userTotal === randomTotal){
        wins++;
        reset();
      }
      else if(userTotal>randomTotal){
        losses++;
        reset();
      }

      $("#target").text(randomTotal);
      $("#winText").text("Wins: " + wins);
      $("#loseText").text("Losses: " + losses);
      $("#total").text(userTotal);

    });

});