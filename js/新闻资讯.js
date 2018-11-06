/**
 * Created by Administrator on 2018/9/23.
 */
var h2=document.getElementsByClassName('h2'),
    listed=document.getElementsByClassName('listed'),
    maintab=document.getElementsByClassName('main-tab');
for (var i = 0; i < listed.length; i++) {
    listed[i].index=i;
    listed[i].onclick=function(){
        for (var j = 0; j < maintab.length; j++) {
            h2[j].classList.remove('now');
            listed[j].classList.remove('bottom');
            maintab[j].classList.remove('on');
            otherTab[j].style.display='none';
        }
        h2[this.index].classList.add('now');
        listed[this.index].classList.add('bottom');
        maintab[this.index].classList.add('on');
        //otherTab[i].style.display='none';
    }
}

var otherTab=document.getElementsByClassName('other-tab');
var next=document.getElementsByClassName('next');
var prev=document.getElementsByClassName('prev');
for (let i = 0; i < next.length; i++) {
    next[i].onclick=function(){
        for (var j = 0; j < next.length; j++) {
            maintab[j].classList.remove('on');
            otherTab[j].style.display='none';
        }
        otherTab[i].style.display='block';
    }
}

for (let i = 0; i < prev.length; i++) {
    prev[i].onclick=function(){
        for (var j = 0; j < prev.length; j++) {
            otherTab[j].style.display='none';
            maintab[j].classList.remove('on');
        }
        maintab[i].classList.add('on');
    }
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

