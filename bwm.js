//放大镜

var contect11 = document.getElementById('contect11');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var slider = document.getElementById('slider');
var Aimg = document.getElementById('Aimg');

img1.onmouseover = function () {
    slider.style.display = 'block';
    img2.style.display = 'block';
}
img1.onmouseout = function () {
    slider.style.display = 'none';
    img2.style.display = 'none';
}
img1.onmousemove = function (ev) {
    var ev = ev || window.event;

    var oL = ev.clientX - contect11.offsetLeft - slider.offsetWidth / 2;
    var oT = ev.clientY - contect11.offsetTop - slider.offsetHeight / 2;

    var oMaxw = img1.offsetWidth - slider.offsetWidth;
    var oMaxh = img1.offsetHeight - slider.offsetHeight;
    oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
    oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
    slider.style.left = oL + 'px';
    slider.style.top = oT + 'px';
    var scale = img2.offsetWidth / slider.offsetWidth;
    Aimg.style.left = -scale * oL +22 + 'px'
    Aimg.style.top = -scale * oT +22 + 'px'
}
// 点击显示
var contect121 = document.getElementById('contect121');
var contect122 = document.getElementById('contect122');
var contect123 = document.getElementById('contect123');
var contect124 = document.getElementById('contect124');
var contect11t = document.getElementById('contect11t');

contect122.onmouseover = function(){
	contect122.style.border = "1px solid #ff9003";
	contect123.style.border = "1px solid #ffffff";
	contect11t.src = "img/pp0.jpeg";
	Aimg.src = "img/pp0.jpeg";
}
contect123.onmouseover = function(){
	contect123.style.border = "1px solid #ff9003";
	contect122.style.border = "1px solid #ffffff";
	contect11t.src = "img/pp1.jpeg";
	Aimg.src = "img/pp1.jpeg";
}

contect121.onclick = function(){
	contect122.style.border = "1px solid #ff9003";
	contect123.style.border = "1px solid #ffffff";
	contect11t.src = "img/pp0.jpeg";
	Aimg.src = "img/pp0.jpeg";
}
contect124.onclick = function(){
	contect123.style.border = "1px solid #ff9003";
	contect122.style.border = "1px solid #ffffff";
	contect11t.src = "img/pp1.jpeg";
	Aimg.src = "img/pp1.jpeg";
}


// var contect121 = document.getElementById('contect121');
// var contect122 = document.getElementById('contect122');
// var contect123 = document.getElementById('contect123');
// var contect124 = document.getElementById('contect124');
// var contect11t = document.getElementById('contect11t');

// contect121.onclick = function(){
// 	contect122.style.border = "1px solid #ff9003";
// 	contect123.style.border = "1px solid #ffffff";
// 	contect11t.src = "img/pp0.jpeg";
// 	Aimg.src = "img/pp0.jpeg";
// }

// contect124.onclick = function(){
// 	contect123.style.border = "1px solid #ff9003";
// 	contect122.style.border = "1px solid #ffffff";
// 	contect11t.src = "img/pp1.jpeg";
// 	Aimg.src = "img/pp1.jpeg";
// }

// var contect252 = document.getElementById('contect252');
// var contect253 = document.getElementById('contect253');
// var contect282 = document.getElementById('contect282');
// var contect252t = document.getElementById('contect252t');
// var five253t = document.getElementById('contect253t');
// contect252.style.border = "1px solid #ff0754";
// contect252.style.borderRadius = "2px";
// contect253.style.border = "1px solid #ffffff";

// contect252.onclick = function(){
// 	contect252.style.border = "1px solid #ff0754";
// 	contect252.style.borderRadius = "2px";
// 	contect253.style.border = "1px solid #ffffff";
// 	contect282.innerHTML = "150ml";
// 	contect252t.src = "img/duigou.png";
// 	contect253t.src = "img/duigou2.png";
// }

// contect253.onclick = function(){
// 	contect252.style.border = "1px solid #ffffff";
// 	contect253.style.border = "1px solid #ff0754";
// 	contect253.style.borderRadius = "2px";
// 	contect282.innerHTML = "200ml";
// 	contect253t.src = "img/duigou.png";
// 	contect252t.src = "img/duigou2.png";
// }

// var contect262 = document.getElementById('contect262');
// var contect263 = document.getElementById('contect263');
// var contect264 = document.getElementById('contect264');
// var i = 1;
// contect262.onclick = function(){
// 	if(i>0){
// 		--i;
// 		contect263.innerHTML = i;
// 	}else{
// 		contect263.innerHTML = 0;
// 	}
// }

// contect262.onmouseover = function(){
// 	if(i>0){
// 		contect262.style.cursor = "pointer";
// 	}else{
// 		contect262.style.cursor = "not-allowed";
// 	}
// }

// contect264.onclick = function(){
// 	if(i<5){
// 		++i;
// 		contect263.innerHTML = i;
// 	}else{
// 		contect263.innerHTML = 5;
// 	}
// }

// contect264.onmouseover = function(){
// 	if(i>4){
// 		contect264.style.cursor = "not-allowed";
// 	}else{
// 		contect264.style.cursor = "pointer";
// 	}
// }

// var img1 = document.getElementById('img1');
// var img2 = document.getElementById('img2');
// var slider = document.getElementById('slider');
// var Aimg = document.getElementById('Aimg');
// var contect11 = document.getElementById('contect11');

// img1.onmouseover = function () {
//     slider.style.display = 'block';
//     img2.style.display = 'block';
// }
// img1.onmouseout = function () {
//     slider.style.display = 'none';
//     img2.style.display = 'none';
// }
// img1.onmousemove = function (a) {
//     var a = a || window.event;
//     var l = a.clientX - contect11.offsetLeft - slider.offsetWidth / 2;

//     var t = a.clientY - contect11.offsetTop - slider.offsetHeight / 2;
//     var oMaxw = img1.offsetWidth - slider.offsetWidth;
//     var oMaxh = img1.offsetHeight - slider.offsetHeight;
//     l = l > oMaxw ? oMaxw : l < 0 ? 0 : l;
//     t = t > oMaxh ? oMaxh : t < 0 ? 0 : t;
//     slider.style.left = l + 'px';
//     slider.style.top = t + 'px';
//     var scale = img2.offsetWidth / slider.offsetWidth;
//     Aimg.style.left = -scale * l +22 + 'px'
//     Aimg.style.top = -scale * t +22 + 'px'
// }

// var contect292 = document.getElementById('contect292');

		
		
// 加入购物车
var jiagou = document.getElementById('jiagou');
var jg = document.getElementById('jg');
var jg11 = document.getElementById('jg11');
contect292.onclick = function(){
    jiagou.setAttribute('class', 'tjgw0');
    jg.setAttribute('class', 'tjgw1');
}
jg11.onclick = function(){
    jiagou.setAttribute('class', 'jiagou');
    jg.setAttribute('class', 'jg');
}