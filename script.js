
let btnmode=document.getElementById('btnmode');
let body=document.querySelector('body');
let  devfinder=document.getElementById('devfinder');
btnmode.onclick=function(){

    body.classList.toggle('dark-mode');//ubacuje/izbacuje ovu klasu ako je nema/ima
    btnmode.classList.toggle('btn-light');
    
    if(btnmode.classList.contains('btn-light')){
        btnmode.textContent="light";
        devfinder.style.color="#FFFFFF";
    }
    else{
        btnmode.textContent="dark";
        devfinder.style.color="#222731";
    }
    
}

function search(){
    alert("serching...");
}