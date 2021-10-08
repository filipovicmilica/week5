var btnmode=document.getElementById('btnmode');
var body=document.querySelector('body');
var devfinder=document.getElementById('devfinder');
var srch=document.getElementById('srch');
var info=document.getElementById('info');
var h1=document.getElementById('h1');
var footerElems=document.getElementsByClassName('elem');

btnmode.onclick=function(){

    body.classList.toggle('dark-mode');//ubacuje/izbacuje ovu klasu ako je nema/ima
    btnmode.classList.toggle('btn-light');
    btnmode.classList.toggle('btn-dark');

    srch.classList.toggle('div-dark-mode');
    info.classList.toggle('div-dark-mode');
    for(let i=0;i<footerElems.length;i++){
        footerElems[i].classList.toggle('white-mode');
    }

    if(btnmode.classList.contains('btn-light')){
        btnmode.textContent="light";
        devfinder.style.color="#FFFFFF";
        h1.style.color="#FFFFFF";
    }
    else{
        btnmode.textContent="dark";
        devfinder.style.color="#222731";
        h1.style.color="#2B3442";
    }
    
}

//search

var allUsernames=['nakica','rale123','masamasnica'];

var searchtext=document.getElementById('searchtext');
var searchmsg=document.getElementById('searchmsg');
function search(){
    alert(allUsernames.length);
    for(let i=0;i<allUsernames.length;i++){
        if(allUsernames[i]==searchtext.value){
            searchmsg.style.display='none';
            return;
        }
    }
    searchmsg.style.display='inline-block';
}