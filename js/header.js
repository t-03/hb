var muc = document.getElementById('muc');
var muc_p = document.getElementsByClassName('header_p')[0];
var audio = document.getElementById('audio');
var muc_pic = document.getElementsByClassName('header_muc_pic')[0];
var spin = document.getElementById('spin');
var h_slo = document.getElementsByClassName('hide_slogan')[0];
var index = document.getElementsByClassName('logo')[0];
/*
*点击播放开始播放音乐
*开始播放时：
*   文字显示歌曲名；
*   图片切换为动图；
*暂停播放时：
*   文字切换为播放背景音乐；
*   图片切换为静态图片；
*鼠标悬浮时；
*   音乐正在播放：
*       文字切换为“关闭背景音乐”；
*   音乐未播放：
*       不变；
*/

function muc_sta(){
  if (flag == 0) {
    flag++;
    audio.play();
  }else{
    flag--;
    audio.pause();
  }
}

if(audio.paused == true){
  flag = 0;
}
//console.log(audio.paused);
muc.onclick = function(){
  if (audio.paused) {
      muc_p.value = "The Armstrongs - Justin Hurwitz";
      muc_p.innerHTML = muc_p.value;
      muc_sta();
      muc_pic.style.backgroundImage = 'url(../media/img/mic_player.gif)';
  }else {
      muc_p.value = '播放背景音乐';
      muc_p.innerHTML = muc_p.value;
      muc_sta();
      muc_pic.style.backgroundImage = 'url(../media/img/mic_player.png)';
  }
}

muc.onmouseover = function(){
  if (!audio.paused) {
      muc_p.value = '关闭背景音乐';
      muc_p.innerHTML = muc_p.value;
  }
}

muc.onmouseout = function(){
  if (!audio.paused) {
      muc_p.value = "The Armstrongs - Justin Hurwitz";
      muc_p.innerHTML = muc_p.value;
  }
}

h_slo.onmouseover = function(){
  spin.style.animation = 'spin 1s';
}

h_slo.onmouseout = function(){
  spin.style.animation = '';
}


index.onclick = function(){
  window.location.href = "index.html";
}
// muc.paused;
// if (muc.paused == undefined) {
//   flag = -1;
//   muc.paused = false;
//   console.log(flag);
// }
// if (muc.paused = true) {
//   flag =
// }
//
//
// muc.onclick = function (){
//   console.log(muc.paused);
//   mucsta = muc_status();
//   if (!muc.paused) {//播放音乐
//     muc_p.value = "The Armstrongs - Justin Hurwitz";
//     muc_p.innerHTML = muc_p.value;
//     audio.play();
//     console.log(muc.paused);
//     muc_pic.style.backgroundImage = 'url(../media/img/mic_player.gif)';
//   }else {//暂停音乐
//     muc_p.value = '播放背景音乐';
//     muc_p.innerHTML = muc_p.value;
//     audio.pause();
//     muc_pic.style.backgroundImage = 'url(../media/img/mic_player.png)';
//   }
// }
