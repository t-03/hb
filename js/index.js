var week = document.getElementById('week');
var day = document.getElementById('day');
var year = document.getElementById('year');
var sentense = document.getElementById('sentense');
var author_name = document.getElementById('author_name');
console.log(new Date());
/*
*实现从网页获取时间
*将时间分割成不同块
*显示在不同区域
*/
var localtime = [];
var date = new Date();//获取当前日期
var d1 = date.toString(date);//转换时间格式；
var w,m,d,y;

localtime = d1.split(' ');//将日期拆分为字符串数组

console.log(localtime);

w = localtime[0];
m = localtime[1];
d = localtime[2];
y = localtime[3];

week.innerHTML = w;
day.innerHTML = d;
year.innerHTML = m + "  " + y;


/*
*使用json存储不同句子；
*刷新网页时显示不同的句子
*/


var json = '{"value":['+
'{"word":"草堂少花今欲栽，不问绿李与黄梅。","author_n":"杜甫"},'+
'{"word":"如果我们放弃这片土地，转让给你们，你们一定要记住：这片土地是神圣的。","author_n":"《这片土地是神圣的》"},'+
'{"word":"For a living planet.","author_n":"WWF（世界自然基金会）"},'+
'{"word":"只有一个地球、人类应该同舟共济。","author_n":"佚名"},'+
'{"word":"淘汰约98%的消耗臭氧层物质，每年成功避免了约200万人罹患皮肤癌。","author_n":"蒙特利尔议定书"},'+
'{"word":"每年有800万吨塑料流入海洋，因误食塑料垃圾致死的海鸟🐦已达100万只。","author_n":"联合国环境规划署"},'+
'{"word":"全国共完成造林707.4万公顷，森林抚育851.9万公顷，治理退化草原666万公顷以上。","author_n":"2018年中国国土绿化状况公报"},'+
'{"word":"如果全球1/3被浪费的食物被追回，能够解决8.7亿人的温饱问题🌏。","author_n":"联合国环境规划署"},'+
'{"word":"在我们保护自然的同时，自然也保护着我们。","author_n":"联合国环境规划署"},'+
'{"word":"未来10年全球碳排放量每年须下降7.6％ 以实现《巴黎协定》1.5℃温控目标。","author_n":"联合国报告"}]}';

obj = JSON.parse(json);

var i =Math.floor(Math.random()*(10-0)+0);
sentense.innerHTML = obj.value[i].word;
author_name.innerHTML = obj.value[i].author_n;
//sentense.style.animation = 'blur 2s ease 3s 1 none';
// console.log(i);
// console.log(Math.random());
// console.log(typeof Math.random());

setInterval(change,10000);
setInterval(blur,10000);

function change(){
  //sentense.style.animation = 'blur 2s ease 3s 1 none';
  var i =Math.floor(Math.random()*(10-0)+0);
  sentense.innerHTML = obj.value[i].word;
  author_name.innerHTML = obj.value[i].author_n;
  sentense.classList.toggle('word_stc0');
  sentense.classList.toggle('word_stc1');
}


//渐隐渐显动画显示函数
//参数：e表示元素，t表示速度，值越大速度越慢
//io表示显示方式，true表示渐显，false表示渐隐
// function fade (e, t, io) {
//     var t = t || 100;  //初始化渐隐渐显速度
//     if (io) { var i = 0; }  //初始化渐隐渐显方式
//     else { var i = 100; }
//     var out = setInterval (function () {  //设计定时器
//         setOpacity (e, i);  //调用setOpacity()函数
//         if (io) {  //根据渐隐或渐显方式决定执行效果
//             i ++;
//             if (i >= 100) clearTimeout(out);
//         } else {
//             i --;
//             if (i <= 0) clearTimeout(out);
//         }
//     }, t);
// }
