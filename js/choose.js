var chobox = document.getElementsByClassName('choose_box1');
var pic1 = document.getElementById('box_pic1');
var pic2 = document.getElementById('box_pic2');
var pic3 = document.getElementById('box_pic3');
var down_title = document.getElementsByClassName('down_title')[0];
var down_intro = document.getElementsByClassName('down_intro')[0];
/*
*鼠标移入当前盒子：
*设置当前css为“changing”
*更新chobox的值使其能够重新使用
*
*备注：14、16、38行console可以输出移入信息；
*/

for (var i = 0; i < chobox.length; i++) {
  chobox[i].index = i;
  chobox[i].onmouseover = function(){//鼠标移入盒子变大
    if(chobox[this.index].classList.contains('original') == true){
    //console.log(chobox[this.index].className);
      chobox[this.index].className = 'choose_box1 changing';
      //console.log(chobox[this.index].className);
      chobox = document.getElementsByClassName('choose_box1');//更新chobox的值
    }
  }
}

for (var i = 0; i < chobox.length; i++) {
  chobox[i].index = i;
  chobox[i].onmouseout = function(){//鼠标移出盒子恢复
    if(chobox[this.index].classList.contains('changing') == true){
      chobox[this.index].className ="choose_box1 original";
      //console.log(chobox[this.index].classList);
      chobox = document.getElementsByClassName('choose_box1');
     }
  }
}
var json = '{"value":['+
'{"organization":"<a>联合国环境规划署</a>","intro":"&nbsp;&nbsp;&nbsp;&nbsp;联合国环境规划署（简称联合国环境署）是全球领先的环境机构，负责制定全球环境议程，促进联合国系统内连贯一致地实施可持续发展环境层面相关政策，并承担全球环境权威倡导者的角色。","url":"https://www.unenvironment.org/zh-hans/guanyulianheguohuanjingshu"},'+
'{"organization":"<a>世界自然基金会(WWF)</a>","intro":"&nbsp;&nbsp;&nbsp;&nbsp;世界自然基金会（WWF）是在全球享有盛誉的、最大的独立性非政府环境保护组织之一，总部位于瑞士格朗。WWF在全世界超过100个国家有办公室、拥有5000名全职员工，并有超过500万名志愿者。是第一个受中国政府邀请来华开展保护工作的国际非政府组织。","url":"http://www.wwfchina.org/aboutus.php"},'+
'{"organization":"<a>世界自然保护联盟(IUCN)</a>","intro":"&nbsp;&nbsp;&nbsp;&nbsp;IUCN是一个由政府和民间社会组织组成的会员联盟。 它利用其1,300多个会员组织以及15,000多个专家投入的经验，资源和影响力，成为全球在自然状况及其保护措施方面的权威。","url":"https://www.iucn.org/about"}]}';

var obj = JSON.parse(json);
console.log(obj.value[0].organization);
console.log(obj.value[0].intro);
console.log(obj.value[0].url);
/*
pic1.onclick = function(){
  down_title.innerHTML = obj.value[0].organization;
  down_intro.innerHTML = obj.value[0].intro;
}*/

for (var i = 0; i < chobox.length; i++) {
  chobox[i].index = i;
  chobox[i].onclick = function(){
    down_title.innerHTML = obj.value[this.index].organization;
    down_intro.innerHTML = obj.value[this.index].intro;
    //var title = document.getElementById('title').setAttribute('href',obj.value[this.index].url);
    var dt_a = down_title.firstElementChild;
    dt_a.setAttribute('href',obj.value[this.index].url);
    dt_a.className = 'down_title_a';
    console.log(down_title.childElementCount);
    console.log(down_title.firstElementChild);
  }
}
