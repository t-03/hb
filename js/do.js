var intro = document.getElementsByClassName('organtial');
var mouse = document.getElementsByClassName('mouse');

for (var i = 0; i < intro.length; i++) {
  mouse[i].index = i;
  mouse[i].onmouseover = function(){
    intro[this.index].className = "bg_box0 organtial";
    intro = document.getElementsByClassName('organtial');
  }
}
for (var i = 0; i < intro.length; i++) {
  mouse[i].index = i;
  mouse[i].onmouseout = function(){
    intro[this.index].className = "bg_box1 organtial";
    intro = document.getElementsByClassName('organtial');
  }
}
