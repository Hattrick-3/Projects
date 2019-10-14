$(function(){
  var MIN = 0;
  var MAX = 1000;
  var ball = $('.ball');
  var field = $('.field');
  var D = ball.width();//диаметр мяча
  var L = field.width();//длина поля
  var H = field.height();//ширина поля
  var S = 1.5*D //ширина ворот

  function getRandomNumber(MIN, MAX){
    return Math.floor(Math.random() * (MAX - MIN)) + MIN;
  }
  function Score(){
    if(ball.position().left==0){
      var text_right = parseInt($('.right_score p').text());
      $('.right_score p').text(text_right += 1)
    }
    else{
      var text_left = parseInt($('.left_score p').text());
      $('.left_score p').text(text_left += 1)
    }
  }
  function checkGoal(){
    if (ball.position().top >=(H-S)/2 && ball.position().top<=(H+S)/2){
      Score();
      alert('Гол!')
    }
  }
  ball.on('click', function () {
    var random = getRandomNumber(MIN, MAX);
    $(this).animate({
            left: ball.position().left ==0?L-D:0,
            top : random
          }, 500, checkGoal)
})
});
