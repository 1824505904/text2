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


//登陆入口
var tougao=document.getElementById('tougao'),
    login=document.getElementById('login'),
    zzc=document.getElementById('zzc'),
    login_btn=document.getElementById('login_btn'),
    login_box=document.getElementById('login_box'),
    close=document.getElementById('close');

function log(btn){
    btn.onclick=function(){
        zzc.style.display='block';
        login_box.style.display='block';
    };
}
log(tougao);
log(login);
log(login_btn);
close.onclick=function(){
    zzc.style.display='none';
    login_box.style.display='none';
};

var qq=document.getElementById('qq');
var wx=document.getElementById('wx');
var qq_login=document.getElementById('qq_login');
function open(qqwx){
    qqwx.onclick=function(){
        zzc.style.backgroundColor='rgb(230, 245, 255)';
        login_box.style.display='none';
        qq_login.style.display='block'
    };
}
open(qq);
open(wx);

var close1=document.getElementById('close1');
close1.addEventListener("click",function(event){
    zzc.style.display='none';
    qq_login.style.display='none';
    zzc.style.backgroundColor='rgb(0, 0, 0)';
    zzc.style.opacity='0.6';
    var event=event||window.event;
    if(event&&event.stopPropagation){
        event.stopPropagation();
    }else {
        event.cancelBubble=true;
    }
});
zzc.addEventListener("click",function(event){
    event=event||window.event;
    var ele=event.target||event.srcElement;
    if(ele.id!=="close1"){
        zzc.style.display='none';
        qq_login.style.display='none';
        zzc.style.backgroundColor='rgb(0, 0, 0)';
        zzc.style.opacity='0.6';
        login_box.style.display='none';
    }
});


//返回顶部
var rtop=document.getElementById('top');
window.onscroll = function () {
    leader = scroll().top;
};
var timer = null;
var target = 0; //目标位置
var leader = 0; //显示区域自身的位置
rtop.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        var step = (target-leader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader +step;
        window.scrollTo(0,leader);
        if(leader === 0){
            clearInterval(timer);
        }
    },25);
};


//账号登录
var number=document.getElementById('number');
var password=document.getElementById('password');
var number1=document.getElementById('number1');
var password1=document.getElementById('password1');
var input1=document.querySelector('#number input');
var input2=document.querySelector('#password input');
var label1=document.querySelector('#number label');
var label2=document.querySelector('#password label');
function focus(zhArea,input,label){
    input.onfocus=function(){
        zhArea.style.backgroundPosition='-1px -45px';
        label.style.opacity='0';
    };
    input.onblur=function(){
        zhArea.style.backgroundPosition='-1px -1px';
        if(input.value){
            label.style.opacity='0';
        }else {
            label.style.opacity='1';
            aler.style.opacity='0';
        }
    }
}
focus(number,input1,label1);
focus(password,input2,label2);


var aler=document.getElementsByClassName('aler')[0];
var dl=document.getElementsByClassName('dl')[0];
dl.onclick= function () {
    var reg = /^1\d{10}$/;
    var str1=input1.value;
    if(!str1){
        aler.style.opacity='0';
    }else {
        if(!reg.test(str1)){
            aler.style.opacity='1';
        }else {
            aler.style.opacity='0';
        }
    }
};


//算法
//选项卡切换
var tits=document.getElementsByClassName('tits'),
    show_table=document.getElementsByClassName('show_table'),
    show_table1=document.getElementsByClassName('show_table1')[0],
    show_table2=document.getElementsByClassName('show_table2')[0];
var item=document.getElementsByClassName('item');
var item1=document.getElementsByClassName('item1');
var item2=document.getElementsByClassName('item2');
var show=document.getElementById('show');
function posi(item){
    for (let i = 0; i < item.length; i++) {
        if(i<4){
            item[i].style.left = (function(){
                var left = 0;
                for (var j = i; j >0; j--) {
                    left +=item[j-1].offsetWidth;

                } console.log(left);
                return (left+'px');
            })()
        }else {
            var index = parseInt(i/4);   //2
            item[i].style.left = (function(){    //8
                var left = 0;
                for (var j = i-4*index; j >0; j--) {
                    left +=item[j-1].offsetWidth;
                }
                return (left+'px');
            })()
        }
        if(i>3){
            item[i].style.top=item[i-4].offsetHeight+item[i-4].offsetTop+20+'px';
        }else {
            item[i].style.top=20+'px';
        }
    }
}
posi(item1);
tits[0].onclick=function(){
    tits[1].classList.remove('on');
    show_table2.classList.remove('now');
    tits[0].classList.add('on');
    show_table1.classList.add('now');
    //posi(item1);
};
tits[1].onclick=function(){
    tits[0].classList.remove('on');
    show_table1.classList.remove('now');
    tits[1].classList.add('on');
    show_table2.classList.add('now');
    posi(item2);
};

//json引入数据
/*ajax("listData.json",function(strr) {
    var arr = eval(strr);
    console.log(arr);
    let str = ``;
    for (var i = 0; i < arr[0].show_table1.length; i++) {
        var {creatImg,creatTitle,creatHot,creatNews,creatToux,creatName,creatCont}=arr[0].show_table1[i];
        str += `
        <div class="item item1">
                    <div class="item_inner clear">
                        <div class="img">
                            <img src="${creatImg}">
                            <span>${creatTitle}</span>
                        </div>
                        <p>
                        <span class="eyes">
                        <i></i>
                        <em>${creatHot}</em>
                    </span>
                        <span class="news">
                        <i></i>
                        <em>${creatNews}</em>
                    </span>
                        </p>
                        <div class="user">
                            <div class="toux">
                            <img src="${creatToux}">
                            </div>
                            <a href="javascript:;">${creatName}</a>
                            ${creatCont}
                        </div>
                    </div>
                </div>
        `
    }
    show_table1.innerHTML=str;
},function(){
    alert(1)
});*/


show_table1.style.height=item1[item1.length-1].offsetTop+item1[item1.length-1].offsetHeight+150+"px";
show_table2.style.height=item1[item2.length-1].offsetTop+item1[item2.length-1].offsetHeight+150+"px";





