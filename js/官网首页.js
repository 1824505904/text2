/**
 * Created by Administrator on 2018/9/12.
 */

    //点击播放音乐
var music=document.getElementById('music'),
    music1=document.getElementById('music1'),
    music2=document.getElementById('music2'),
    bgmusic=document.getElementById('bgmusic');
music.onclick=function(){
    if(music1.style.display=='block'){
        music1.style.display='none';
        music2.style.display='block';
        bgmusic.pause();    //关闭音乐
    }else{
        music2.style.display='none';
        music1.style.display='block';
        bgmusic.play();    //打开音乐

    }
};
window.onload=function(){
    bgmusic.play();
};


//点击播放视频
var play=document.getElementById('play'),
    dian=document.getElementById('dian'),
    close=document.getElementById('close'),
    oVideo=document.getElementById('video'),
    zzc=document.getElementById('zzc');
play.onclick=function(){
    dian.style.display='block';
    zzc.style.display='block';
    oVideo.play();
    bgmusic.pause();
};
close.onclick=function(){
    dian.style.display='none';
    zzc.style.display='none';
    oVideo.currentTime=0;
    oVideo.pause();
    bgmusic.play();
};

//选项卡切换
var newsTab=document.querySelectorAll('.newsTab'),
    newsWrap=document.querySelectorAll('.newsWrap');
for (var i = 0; i < newsTab.length; i++) {
        newsTab[i].index=i;
        newsTab[i].onclick=function(){
        for (var j = 0; j < newsWrap.length; j++) {
            newsTab[j].classList.remove('on');
            newsWrap[j].classList.remove('on');
        }
        newsTab[this.index].classList.add('on');
        newsWrap[this.index].classList.add('on');
    }
}

//自动轮播图
var lb=document.getElementById('lb'),
    tits=document.querySelectorAll('.banner-right ol li'),
    conts=document.querySelectorAll('.banner-right ul li'),
    timer=null;
var index=0;
for (var i = 0; i < tits.length; i++) {
    conts[i].index=i;
    conts[i].onclick=function(){
        for (var j = 0; j < conts.length; j++) {
            tits[j].style.display='none';
            conts[j].classList.remove('now');
        }
        conts[this.index].classList.add('now');
        tits[this.index].style.display='block';
    }
}
function right(){
    index++;
    if(index>tits.length-1){
        index=0;
    }
    for (var j = 0; j < conts.length; j++) {
        tits[j].style.display='none';
        conts[j].classList.remove('now');
    }
    conts[this.index].classList.add('now');
    tits[this.index].style.display='block';
}

timer=setInterval(right,1000);
lb.onmouseover=function(){
    clearInterval(timer);
};
lb.onmouseout=function(){
    timer=setInterval(right,1000);
};


//攻略中心选项卡
var list=document.getElementsByClassName('listed'),
    tab=document.getElementsByClassName('tabs');
for (var i = 0; i < list.length; i++) {
    list[i].index=i;
    list[i].onclick=function(){
        for (var j = 0; j < tab.length; j++) {
            list[j].classList.remove('on');
            tab[j].style.display='none';
        }
        list[this.index].classList.add('on');
        tab[this.index].style.display='block';
    }
}

//同人专区选项卡
var tabcos=document.querySelectorAll('.tab-cos li'),
    listcos=document.getElementsByClassName('list-cos');
for (var i = 0; i < tabcos.length; i++) {
    tabcos[i].index=i;
    tabcos[i].onclick=function(){
        for (var j = 0; j < listcos.length; j++) {
            tabcos[j].classList.remove('on');
            listcos[j].style.display='none';
        }
        tabcos[this.index].classList.add('on');
        listcos[this.index].style.display='block';
    }
}

//大选项卡
//var mainLists=document.getElementsByClassName('main-lists'),
//    mainTab=document.getElementsByClassName('main-tab');
//for (var i = 0; i < mainLists.length; i++) {
//    mainLists[i].index=i;
//    mainLists[i].onclick=function(){
//        for (var j = 0; j < mainLists.length; j++) {
//            mainTab[j].style.display='none';
//        }
//        mainTab[this.index].style.display='block';
//    }
//}


var myzz=document.getElementById('myzz'),
    myzz1=document.getElementById('myzz1'),
    myzz2=document.getElementById('myzz2'),
    tztj=document.getElementById('tztj'),
    tztj1=document.getElementById('tztj1'),
    tztj2=document.getElementById('tztj2'),
    oli1=document.querySelectorAll('.myzz-list li'),
    oli2=document.querySelectorAll('.myzz-tab li'),
    mainTab1=document.getElementById('main-tab1'),
    mainTab2=document.getElementById('main-tab2');
function dianji(main,one,two,three,four,tab1,tab2){
    main.onclick=function(){
        if(one.style.display=='block'){
            one.style.display='none';
            two.style.display='block';
            three.style.display='none';
            four.style.display='block';
            tab2.style.display='none';
            tab1.style.display='block';
        }
        else {
            two.style.display='none';
            one.style.display='block';
            three.style.display='block';
            four.style.display='none';
            tab1.style.display='none';
            tab2.style.display='block';
        }
    }
}
dianji(myzz,myzz1,myzz2,tztj1,tztj2,mainTab2,mainTab1);
dianji(tztj,tztj1,tztj2,myzz1,myzz2,mainTab2,mainTab1);






var people3=document.getElementsByClassName('people3'),
    tit3=document.getElementsByClassName('tit3'),
    pinks3=document.getElementsByClassName('pinks3'),
    pink3=document.getElementsByClassName('pink3');
var people4=document.getElementsByClassName('people4'),
    tit4=document.getElementsByClassName('tit4'),
    pinks4=document.getElementsByClassName('pinks4'),
    pink4=document.getElementsByClassName('pink4');
function dianji1(tit,pinks,pink,people){
    for (var i = 0; i < tit.length; i++) {
        tit[i].index=i;
        tit[i].onclick=function(){
            for (var j = 0; j < tit.length; j++) {
                tit[j].classList.remove('now');
                people[j].classList.remove('on');
                pinks[j].classList.remove('now');
                pink[j].classList.remove('on');
            }
            tit[this.index].classList.add('now');
            people[this.index].classList.add('on');
            pinks[this.index].classList.add('now');
            pink[this.index].classList.add('on');
        }
    }
}
function dianji2(pinks,pink,tit,people){
    for (var i = 0; i < pinks.length; i++) {
        pinks[i].index=i;
        pinks[i].onclick=function(){
            for (var j = 0; j < pinks.length; j++) {
                pinks[j].classList.remove('now');
                pink[j].classList.remove('on');
                tit[j].classList.remove('now');
                people[j].classList.remove('on');
            }
            pinks[this.index].classList.add('now');
            pink[this.index].classList.add('on');
            tit[this.index].classList.add('now');
            people[this.index].classList.add('on');
        }
    }
}
dianji1(tit3,pinks3,pink3,people3);
dianji2(pinks3,pink3,tit3,people3);
dianji1(tit4,pinks4,pink4,people4);
dianji2(pinks4,pink4,tit4,people4);

var peopleTab21=document.getElementsByClassName('people21'),
    peopleList21=document.getElementsByClassName('people-lists21');
var peopleTab22=document.getElementsByClassName('people22'),
    peopleList22=document.getElementsByClassName('people-lists22');
var peopleTab23=document.getElementsByClassName('people23'),
    peopleList23=document.getElementsByClassName('people-lists23');
var peopleTab24=document.getElementsByClassName('people24'),
    peopleList24=document.getElementsByClassName('people-lists24');



function qiehuan(peopleTab,peopleList){
    for (var i = 0; i < peopleList.length; i++) {
        peopleList[i].index=i;
        peopleList[i].onclick=function(){
            for (var j = 0; j < peopleList.length; j++) {
                peopleList[j].classList.remove('now');
                peopleTab[j].style.display='none';
            }
            peopleList[this.index].classList.add('now');
            peopleTab[this.index].style.display='block';
        }
    }
}
qiehuan(peopleTab21,peopleList21);
qiehuan(peopleTab22,peopleList22);
qiehuan(peopleTab23,peopleList23);
qiehuan(peopleTab24,peopleList24);











//section2选项卡
var tabsTese=document.getElementsByClassName('tabs-tese'),
    num=document.getElementsByClassName('num');
    for (var i = 0; i < num.length; i++) {
        num[i].index=i;
        num[i].onmouseover=function(){
            for (var j = 0; j < num.length; j++) {
                tabsTese[j].classList.remove('on');
            }
            tabsTese[this.index].classList.add('on');
        }
    }



//返回顶部
var aReturn=document.getElementById('return');
window.onscroll=function(){
    if(scroll().top>1000){
        aReturn.style.display='block';
    }else {
        aReturn.style.display='none';
    }
    leader=scroll().top;
};
var timer=null;
var target=0;
var leader=0;
aReturn.onclick=function(){
    clearInterval(timer);
    timer=setInterval(function(){
        var step=(target-leader)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        leader=leader+step;
        window.scrollTo(0,leader);
        if(leader===0){
            clearInterval(timer);
        }
    },25);
};
//动画
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },25);
}

function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


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

