/**
 * Created by 19509 on 2018/9/9.
 */
var float, content, banner;
float = document.getElementById('float');
content = document.getElementById('content');
banner = document.getElementsByClassName('banner')[0];

content.onmouseover=function(){
    float.style.display='block';
};
banner.onmouseover=function(){
    float.style.display='none';
};

//鼠标移到块上  list变背景色





//以上侧导航
//旋转木马轮播图
window.onload = function () {
    var flag = true;//将flag初始值设置为true，表示节流阀是打开的

    //config是配置单，规定了每张图片的大小位置层级透明度
    var config = [
        {
            "width": 196,
            "top": 20,
            "left": 200,
            "opacity": 0,
            "zIndex": 2
        },//0
        {
            "width": 340,
            "top": 100,
            "left": 128,
            "opacity": 1,
            "zIndex": 3
        },//1
        {
            "width": 396,
            "top": 70,
            "left": 333,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 340,
            top: 100,
            left: 600,
            opacity: 1,
            zIndex: 3
        },//3
        {
            "width": 196,
            "top": 20,
            "left": 400,
            "opacity": 0,
            "zIndex": 2
        }//4
    ];

    //找人
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    //鼠标经过盒子，让arrow箭头渐渐地显示出来
    //wrap.onmouseover = function () {
    //    animate(arrow, {"opacity": 1});
    //};
    //鼠标离开盒子，让arrow箭头渐渐地隐藏
    //wrap.onmouseout = function () {
    //    animate(arrow, {"opacity": 0});
    //};

    function assign() {
        //让所有的li按照config配置单渐渐地各就各位
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//当动画执行完成后，将flag设置为true，打开节流阀
            });
        }
    }

    assign();

    //点击右箭头，将配置单中最前面的元素放到最后面
    arrRight.onclick = function () {
        if (flag) {//当flag为true即节流阀是打开的状态时，才能执行动画
            flag = false;//当动画执行时，将flag设置为false，关闭节流阀
            config.push(config.shift());//把最前面的元素放到最后面
            //config.unshift(config.pop());//把最后面的元素放到最前面
            //让所有的li按照新生成的config配置单渐渐地各就各位
            assign();
        }

    };
    //点击左箭头，将配置单中最后面的元素放到最前面
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//把最后面的元素放到最前面

            //config.push(config.shift());//把最前面的元素放到最后面
            assign();
        }
    };
};
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                obj.style.opacity = json[k];

                //var leader = getStyle(obj, k) * 100;
                //var target = json[k] * 100;
                //var step = (target - leader) / 10;
                //step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //leader = leader + step;
                //obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}




//飞出来
var part1=document.getElementById('part1'),
    list1=document.getElementById('list1'),
    people=document.getElementById('people'),
    tits1=document.getElementById('tit1'),
    tips1=document.getElementById('tip1'),
    sx1=document.getElementById('sx1');
part1.onmouseover=function(){
    list1.classList.add('now');

    people.style.transform='translateX(200px)';
    people.style.opacity='1';

    tits1.style.transform='translateX(90px)';
    tits1.style.opacity='1';

    tips1.style.transform='translateX(-30px)';
    tips1.style.opacity='1';

    sx1.style.transform='translateY(-70px)';
    sx1.style.opacity='1';
};
part1.onmouseout=function() {
    list1.classList.remove('now');
};
var part2=document.getElementById('part2'),
    list2=document.getElementById('list2'),
    tits2=document.getElementById('tit2'),
    tips2=document.getElementById('tip2'),
    sx2=document.getElementById('sx2');
part2.onmouseover=function(){
    list2.classList.add('now');

    tits2.style.transform='translateX(90px)';
    tits2.style.opacity='1';

    tips2.style.transform='translateX(-30px)';
    tips2.style.opacity='1';

    sx2.style.transform='translateY(-70px)';
    sx2.style.opacity='1';
};
part2.onmouseout=function() {
    list2.classList.remove('now');
};

var part3=document.getElementById('part3'),
    list3=document.getElementById('list3'),
    tits3=document.getElementById('tit3'),
    tips3=document.getElementById('tip3'),
    sx3=document.getElementById('sx3'),
    tits4=document.getElementById('tit4'),
    tips4=document.getElementById('tip4'),
    tips5=document.getElementById('tip5'),
    sx4=document.getElementById('sx4');
part3.onmouseover=function(){
    list3.classList.add('now');

    tits3.style.transform='translateX(90px)';
    tits3.style.opacity='1';

    tips3.style.transform='translateX(-30px)';
    tips3.style.opacity='1';

    sx3.style.transform='translateY(-70px)';
    sx3.style.opacity='1';

    tits4.style.transform='translateX(90px)';
    tits4.style.opacity='1';

    tips4.style.transform='translateX(-30px)';
    tips4.style.opacity='1';

    tips5.style.transform='translateX(-30px)';
    tips5.style.opacity='1';

    sx4.style.transform='translateY(-70px)';
    sx4.style.opacity='1';
};
part3.onmouseout=function() {
    list3.classList.remove('now');
};

var part4=document.getElementById('part4'),
    list4=document.getElementById('list4'),
    tits5=document.getElementById('tit5'),
    tips6=document.getElementById('tip6'),
    sx5=document.getElementById('sx5'),
    you=document.getElementById('you'),
    zuo=document.getElementById('zuo');
part4.onmouseover=function(){
    list4.classList.add('now');

    tits5.style.transform='translateX(90px)';
    tits5.style.opacity='1';

    tips6.style.transform='translateX(-30px)';
    tips6.style.opacity='1';

    sx5.style.transform='translateY(-70px)';
    sx5.style.opacity='1';

    you.style.transform='translateX(30px)';
    you.style.opacity='1';

    zuo.style.transform='translateX(-30px)';
    zuo.style.opacity='1';
};
part4.onmouseout=function() {
    list4.classList.remove('now');
};








//头部
var aTu1=document.querySelectorAll('.txyx-nav .zuo .li3 img');
var aBiao1=document.querySelectorAll('.txyx-nav .zuo .li3 .kk');
var aZi1=document.querySelectorAll('.txyx-nav .zuo .li3 span');
var aD1=document.querySelectorAll('.txyx-nav .zuo  .li3 .zz');
var aL1=document.querySelectorAll('.txyx-nav .zuo .li3');



var aL2=document.querySelectorAll('.txyx-nav .zhong .li3');
var aTu2=document.querySelectorAll('.txyx-nav .zhong .li3 img');
var aBiao2=document.querySelectorAll('.txyx-nav .zhong .li3 .kk');
var aZi2=document.querySelectorAll('.txyx-nav .zhong .li3 span');
var aD2=document.querySelectorAll('.txyx-nav .zhong  .li3 .zz');

var aL3=document.querySelectorAll('.txyx-nav .you .li3');
var aTu3=document.querySelectorAll('.txyx-nav .you .li3 img');
var aBiao3=document.querySelectorAll('.txyx-nav .you .li3 .kk');
var aZi3=document.querySelectorAll('.txyx-nav .you .li3 span');
var aD3=document.querySelectorAll('.txyx-nav .you  .li3 .zz');





function a(x,y,z,m,n) {
    for (let i = 0; i < x.length; i++) {
        x[i].onmouseover = function () {

            for (let j = 0; j < y.length; j++) {
                x[j].classList.remove('now');
                y[j].classList.remove('now');
                z[j].classList.remove('now');
                m[j].classList.remove('now');
                n[j].classList.remove('now');
            }
            x[i].classList.add('now');
            y[i].classList.add('now');
            z[i].classList.add('now');
            m[i].classList.add('now');
            n[i].classList.add('now');
        }

    }
}
    a(aL1, aTu1, aBiao1, aZi1, aD1);
    a(aL2, aTu2, aBiao2, aZi2, aD2);
    a(aL3, aTu3, aBiao3, aZi3, aD3);







