var bodyWidth = $(".slide-show-container").width();
var bodyMargin = $(".slide-show-container").position();
var cardHeight = $(".card").height();
var bxhCardHeight = $(".bxh-card").height();


$("#main-body .list-container").css({ 'width': 'calc( ' + bodyWidth + 'px - 27%)' });
$("#main-body .sub-infor").css({ 'width': 'calc( ' + bodyWidth + 'px - 50%)' });

$("#main-body .list-container").css('margin-left', bodyMargin);
$("#main-body .main-list").css({ 'max-height': 'calc( ' + cardHeight + 'px * 2 - 4rem - 5px)' });

$(".bxh-list").css({ 'max-height': 'calc( ' + bxhCardHeight + 'px * 4 - 10px)' });
