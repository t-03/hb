var lk = window.location.href;
var l1 = lk.split('/');
var link =l1[l1.length-1].toString(l1[l1.length-1]);//保存当前文件名字；
var a_attrt = document.getElementsByClassName('header_banner_a');
var a_href = [];

/*
*获取a标签中的href属性并于link对比
*如果一样   说明访问的是该标签下的文件
*1、添加第二个类名
*    第二个类名拥有after伪元素的样式
*2、获取其当前节点的宽度并存储在last_width中；
*   将获取到的宽度设置为伪元素设置该宽度
*/

for(var j = 0;j <= a_attrt.length - 1;j++){//使用数组保存a标签中的href值；
  a_href[j] = a_attrt[j].getAttribute('href');
}

for(var i = 0;i <= a_attrt.length - 1;i++){//当访问的是当前网页就将<span>中的文字颜色修改；
  a_attrt[i].index = i;
  if (a_href[i] === link) {
    a_attrt[i].style.color = '#2f2f2f';
    a_attrt[i].classList.add('header_banner_a1');
    var a_bro = a_attrt[i].offsetWidth;
    a_attrt[i].style.borderBottom = "2px solid";
    var this_a = window.getComputedStyle(a_attrt[i],'::after');//使用get方法获取对应伪元素
    //this_a.setAttribute(width,a_bro + 'px');
    //console.log(this_a);
    //this_a.style.width = a_bro+"px";
    // this_a.style.width = ;
    // console.log(a_bro);
    // console.log(window.getComputedStyle(a_attrt[i], '::after'));
    // console.log(typeof window.getComputedStyle(a_attrt[i], '::after'));
  }
}
