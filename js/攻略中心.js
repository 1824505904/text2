/**
 * Created by Administrator on 2018/9/26.
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
