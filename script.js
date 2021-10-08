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
//initial state
fetch("https://api.github.com/users/octocat")
    .then(res=>res.json())
    .then(user=>{
        if(isNaN(user)){//if usr exist
            //set img
            //avatar_url
            var img=document.getElementById('profile-img').innerHTML=`<img src=${user.avatar_url}>`;

            //set Name:
            var name=document.getElementById('name');
            name.textContent=user.name;

            //set mini header-blue:
            var login=document.getElementById('login');
            login.textContent="@"+user.login;

            //set Joined:
            var date=document.getElementById('date');
            let d=new Date(user.created_at);
            date.textContent="Joined "+ d.getUTCDate()+" " +months[d.getUTCMonth()]+" "+d.getUTCFullYear();
            
            //set Bio:
            var bio=document.getElementById('bio');
            if(isNaN(user.bio)){
                bio.textContent=bio;
            }else{bio.textContent="This profile has no bio."}

            //set Repos:
            var repos=document.getElementById('repos');
            repos.textContent=user.public_repos;

            //set Followers:
            var followers=document.getElementById('followers');
            followers.textContent=user.followers;

            //set Following:
            var following=document.getElementById('following');
            following.textContent=user.following;

            //set Location:
            var location=document.getElementById('location');
            location.textContent=user.location;

            //set Twitter:
            var twitter=document.getElementById('twitter');
            if(isNaN(user.twitter_username)){
                twitter.textContent=user.twitter_username;
            }
            else{
                twitter.textContent="Not avalable";
                //izbledi
            }
            
            //set blog:
            var blog=document.getElementById('blog');
            blog.textContent=user.blog;

            //set company:
            var company=document.getElementById('company');
            if(isNaN(user.company)){
                company.textContent=user.company;
            }else{
                company.textContent="Has no company";
                }
            }

        else{//user not exist
            searchmsg.style.display='inline-block';
        }
    }).catch(e=>console.log(e))

//search
var months=['Jan', 'Feb', 'Mar', 'Apr','May','Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];
var searchtext=document.getElementById('searchtext');
var searchmsg=document.getElementById('searchmsg');

function search(){

    fetch("https://api.github.com/users/"+searchtext.value)
    .then(res=>res.json())
    .then(user=>{
        if(user.message=="Not Found"){//user not exist
            searchmsg.style.display='inline-block';
            return;
        }
        else{//if user exist
            //set img
            searchmsg.style.display='none';
            var img=document.getElementById('profile-img').innerHTML=`<img src=${user.avatar_url}>`;

            //set Name:
            var name=document.getElementById('name');
            name.textContent=user.name;

            //set mini header-blue:
            var login=document.getElementById('login');
            login.textContent="@"+user.login;

            //set Joined:
            var date=document.getElementById('date');
            let d=new Date(user.created_at);
            date.textContent="Joined "+ d.getUTCDate()+" " +months[d.getUTCMonth()]+" "+d.getUTCFullYear();
            
            //set Bio:
            var bio=document.getElementById('bio');
            if(user.bio){
                bio.textContent=bio;
            }else{bio.textContent="This profile has no bio."}

            //set Repos:
            var repos=document.getElementById('repos');
            repos.textContent=user.public_repos;

            //set Followers:
            var followers=document.getElementById('followers');
            followers.textContent=user.followers;

            //set Following:
            var following=document.getElementById('following');
            following.textContent=user.following;

            //set Location:
            var location=document.getElementById('location');
            location.textContent=user.location;

            //set Twitter:
            var twitter=document.getElementById('twitter');
            if(user.twitter_username){
                twitter.textContent=user.twitter_username;
            }
            else{
                twitter.textContent="Not avalable";
                //izbledi
            }
            //set blog:
            var blog=document.getElementById('blog');
            if(user.blog){
                blog.textContent="Not avalible.";
                //izbledi
            }else{blog.textContent=user.blog;}
            

            //set company:
            var company=document.getElementById('company');
            if(user.company){
                company.textContent=user.company;
            }else{
                company.textContent="Not avalible.";
                //izbledi
                }
            }
    }).catch(e=>console.log(e))
}