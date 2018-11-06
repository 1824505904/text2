var txyx_nav=document.getElementsByClassName('txyx-nav')[0];
var otop=document.getElementsByClassName("top")[0];
var con=document.getElementById('con');
console.log(txyx_nav);
console.log(otop);
console.log(con);
window.onscroll=function(){
    if(scroll().top>txyx_nav.offsetHeight){
        otop.className="top fixed";
        con.style.paddingTop=top.offsetHeight+"px";
    }else {
        otop.className="top";
        con.style.paddingTop=0;
    }
};
function scroll(){
    return{
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}





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

