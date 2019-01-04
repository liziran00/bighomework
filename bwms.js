//页首悬浮
window.onload=function(){
  var cover=document.getElementsByClassName("all")[0];
  window.onscroll=function(){
    var st=document.documentElement.scrollTop || document.body.scrollTop;
    if(st>100){
      cover.style.position="fixed";
    }
    else{
      cover.style.position="static";
    }
  }
}

// 大轮播图
var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1; 
var timer;
var isMoving = false;

box.onmouseover = function () {
    animate(left, {
        opacity: 0.6
    })
    animate(right, {
        opacity: 0.6
    })
    clearInterval(timer); 
}

box.onmouseout = function () {
    animate(left, {
        opacity: 0
    })
    animate(right, {
        opacity: 0
    })
    timer = setInterval(next, 100); 
}

right.onclick = next;
left.onclick = prev;

function next() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(slider, {
        left: -800 * index
        }, function () {
            if (index == 7) {
            slider.style.left = '-800px';
            index = 1;
            }
    isMoving = false;
    });
}

function prev() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index--;
    navmove();
    animate(slider, {
        left: -800 * index
    }, function () {
        if (index == 0) {
          slider.style.left = '-4000px';
          index = 6;
        }
        isMoving = false;
    });
}

for (var i = 0; i < oNavlist.length; i++) {
    oNavlist[i].index = i;
    oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(slider, {
          left: -800 * index
        });
    }
}

function navmove() {
    for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
    }
    if (index > 6) {
        oNavlist[0].className = "active";
    } else if (index <= 0) {
        oNavlist[5].className = "active";
    } else {
        oNavlist[index - 1].className = "active";
    }
}

timer = setInterval(next, 100);
    
function getStyle(obj, attr) { //返回值带有单位px
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            (function (attr) {
                if (attr == "opacity") {
                    var now = parseInt(getStyle(obj, attr) * 100);
                    var dest = json[attr] * 100;
                } else {
                    var now = parseInt(getStyle(obj, attr));
                    var dest = json[attr];
                }
                var speed = (dest - now) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (now != dest) {
                    flag = false;
                    if (attr == "opacity") {
                        obj.style[attr] = (now + speed) / 100;
                    } else {
                        obj.style[attr] = now + speed + "px";
                    }
                }
            })(attr);
        }
        if (flag) {
            clearInterval(obj.timer);
            callback && callback(); 
        }
    }, 30);
}



//公告轮播
var ul = document.getElementById("ul");
console.log(ul.getBoundingClientRect())
console.log(ul.offsetHeight)
console.log(ul.offsetWidth)
console.log(ul.offsetLeft)
console.log(ul.offsetTop)

function show() {
    var top = ul.offsetTop - 1;//获取top值
    ul.style.top = top + "px";//设置top值

    //走完一半再返回
    if (-1 * ul.offsetTop >= ul.offsetHeight-30) {
        ul.style.top = 0;
    }
}
var t = setInterval(show, 10);

//li添加鼠标移入移出事件
var li = document.getElementsByClassName("li");
for (var i = 0; i < li.length; i++) {
    console.log(li[i]);
    //移出事件
    li[i].onmouseout = function () {
        //不能加 var
        t = setInterval(show, 10);
    };
    //移入事件
    li[i].onmouseover = function () {
        clearInterval(t);
    };
} 


// 充值钱数
 var op1 = document.getElementById('op1');
        var dsq = document.getElementById('dsq');
        dsq.innerHTML = op1.children[0].innerHTML;
        op1.onclick = function(){
            for(var i=0;i<op1.children.length;i++){
                if(this.value == i){
                    dsq.innerHTML = op1.children[i].innerHTML;
                }
            }
        }



// 右侧悬浮框
var float1 = document.getElementById('float1');

float1.onmouseover = function(){
    animate(float1,{right:0,top:82,opacity:100});
}

float1.onmouseout = function(){
    animate(float1,{right:-83,top:82,opacity:100});
}

var float2 = document.getElementById('float2');

float2.onmouseover = function(){
    animate(float2,{right:0,top:191,opacity:100});
}

float2.onmouseout = function(){
    animate(float2,{right:-83,top:191,opacity:100});
}

var float3 = document.getElementById('float3');
var float31t = document.getElementById('float31t');

float3.onmouseover = function(){
    animate(float3,{right:0,top:336,opacity:100});
    float31t.src = "img/erwei.png";
    float31t.style.marginTop = "3px";
}

float3.onmouseout = function(){
    animate(float3,{right:-83,top:336,opacity:100});
    float31t.src = "img/serwei.png";
    float31t.style.marginTop = "36px";
}

var float4 = document.getElementById('float4');

float4.onmouseover = function(){
    animate(float4,{right:0,top:491,opacity:100});
}

float4.onmouseout = function(){
    animate(float4,{right:-83,top:491,opacity:100});
}     






// var big=document.getElementById('big');
// var box=document.getElementById('box');
// var img;
// for(var num=1;num<=box.children.length;num++){
//     (function(i){
//         box.children[i-1].onmouseover=function(){
//             img=document.createElement('img');
//             big.style.display='block';
//             img.setAttribute('src','shirt_'+i+'_big.jpg');
//             big.appendChild(img);
//             box.children[i-1].className="active";
//         }
//     })(num);
// }

// for(var num=1;num<=box.children.length;num++){
//     (function(i){
//         box.children[i-1].onmouseout=function(){
//             big.style.display='none';
//             img.style.display='none';
//             box.children[i-1].className="";
//         }
//     })(num);
// }

// for(var num=1;num<=box.children.length;num++){
//     (function(i){
//         box.children[i-1].onmousemove=function(ev){
//             var ev=ev||window.event;
//             var oL = ev.clientX - box.offsetLeft;
//             var oT = ev.clientY - box.offsetTop;
//             big.style.left = oL+box.offsetLeft+10 + 'px';
//             big.style.top = oT+box.offsetTop+10+ 'px';
//         }
//     })(num);
// }


