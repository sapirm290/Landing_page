var i = 0;
var txt = 'The fastest way to inspect CSS';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


$('.descriptionLink').click(function(){
  $('#description').addClass("highlight");
  $('#description').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {$(this).removeClass("highlight");
  });
});
$('.reviewsLink').click(function(){
  $('#reviews').addClass("highlight");
  $('#reviews').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {$(this).removeClass("highlight");
  });
});
$('.purchaseLink').click(function(){
  $('#purchase').addClass("highlight");
  $('#purchase').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {$(this).removeClass("highlight");
  });
});
$('.contactUsLink').click(function(){
  $('#contactUs').addClass("highlight");
  $('#contactUs').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {$(this).removeClass("highlight");
  });
});