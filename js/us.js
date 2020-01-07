var color_bg = document.getElementById('color_bg');
var spin_tree = document.getElementById('spin_tree');
var ru_btn = document.getElementById('ru_btn');
var right_down = document.getElementsByClassName('right_down')[0];
var rd_pic = document.getElementsByClassName('rd_pic')[0];
var left_word = document.getElementById('left_word');
var right_word = document.getElementById('right_word');
/*
*实现点击行动按钮；
*   1、color_bg颜色由棕色转换为绿色；
*       切换animatio属性
*   2、spin_tree由180旋转为0
*   3、定时切换回棕色
*
*footer素材来源需要更新；
*
*
*/

ru_btn.onclick = function(){
  color_bg.style.animation = 'color 2s';
  color_bg.style.animationFillMode = 'forwards';
  spin_tree.style.animation = 'rorate 2s cubic-bezier(0.16, 0.36, 0.7, 1.19) 0s 1 normal forwards running';
  spin_tree.style.animationFillMode = 'forwards';
  left_word.style.animation = ' word 2s cubic-bezier(0.49, 0.76, 0.71, 1.13) 0s 1 normal forwards running,word_opa 2s ease 10s 1 normal forwards running';
  t = setTimeout(restore,10000);
}

function restore(){
  color_bg.style.animation = 'color_restore 2s';
  color_bg.style.animationFillMode = 'forwards';
  spin_tree.style.animation = 'rorate_restore 3s cubic-bezier(0.16, 0.36, 0.7, 1.19) 0s 1 normal forwards running';
  spin_tree.style.animationFillMode = 'forwards';
  right_word.style.display = 'block';
  right_word.style.animation = 'right_blur 2s ease 0s 1 normal forwards,word_opa 2s ease 10s 1 normal forwards running';
  clearTimeout(t);
}

right_down.onmouseover = function(){
  rd_pic.style.animation = 'pic_big 1s';
  rd_pic.style.animationFillMode = 'forwards';
}

right_down.onmouseout = function(){
  rd_pic.style.animation = 'pic_restore 2s';
  rd_pic.style.animationFillMode = 'forwards';
}
