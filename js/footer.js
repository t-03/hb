
var move = document.getElementsByClassName('move_box')[0];
var move_w = document.getElementsByClassName('move_word')[0];



move.onmouseover = function(){
  move_w.style.animation = 'moveup 5s ease 0s 1 normal';
}
move.onmouseout = function(){
  move_w.style.animation = '';
}
