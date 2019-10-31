const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {


  let divSelector = randomDivId();
  $(divSelector).addClass("target");


  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
  $('.page-wrapper').css('display', 'none');
}

function losingGame() {
  $("#lose-message").removeClass("d-none");
}

function handleClick(event) {

  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  } else {
    $(this).addClass("miss");
     hits = hits - 1;
     losingGame();
     $('.page-wrapper').css('display', 'none');
  }
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
