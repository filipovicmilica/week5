btnmode.onclick = function () {
    let btnmode = document.getElementById('btnmode');
    const body = document.querySelector('body');
    let devfinder = document.getElementById('devfinder');
    let srch = document.getElementById('srch');
    let info = document.getElementById('info');
    let h1 = document.getElementById('h1');
    let footerElems = document.getElementsByClassName('elem');
    let center = document.getElementById('center');
    let centerNumbers = document.getElementsByClassName('elem-center');
    let bio = document.getElementById('bio');
    let date = document.getElementById('date');
    let h4s = document.getElementsByTagName('h4');
    var searchtext = document.getElementById('searchtext');

    body.classList.toggle('dark-mode');//ubacuje/izbacuje ovu klasu ako je nema/ima
    center.classList.toggle('dark-mode');
    btnmode.classList.toggle('btn-light');
    btnmode.classList.toggle('btn-dark');
    date.classList.toggle('white-color');
    bio.classList.toggle('white-color');
    searchtext.classList.toggle('white-color');

    srch.classList.toggle('div-dark-mode');
    info.classList.toggle('div-dark-mode');
    for (let i = 0; i < footerElems.length; i++) {
        footerElems[i].classList.toggle('white-mode');
    }
    for (let i = 0; i < centerNumbers.length; i++) {
        centerNumbers[i].classList.toggle('white-color');
    }
    for (let i = 0; i < h4s.length; i++) {
        h4s[i].classList.toggle('white-color');
    }

    if (btnmode.classList.contains('btn-light')) {
        btnmode.textContent = "light";
        devfinder.style.color = "#FFFFFF";
        h1.style.color = "#FFFFFF";
    }
    else {
        btnmode.textContent = "dark";
        devfinder.style.color = "#222731";
        h1.style.color = "#2B3442";
    }

}
//initial state
fetch("https://api.github.com/users/octocat")
    .then(res => res.json())
    .then(user => {
        if (user.message == "Not Found") {//user not exist
            searchmsg.style.display = 'inline-block';
            return;
        }
        else {//if user exist
            //set img
            searchmsg.style.display = 'none';
            let img = document.getElementById('profile-img').innerHTML = `<img src=${user.avatar_url}>`;

            //set Name:
            let name = document.getElementById('name');
            name.textContent = user.name;

            //set mini header-blue:
            let login = document.getElementById('login');
            login.textContent = "@" + user.login;

            //set Joined:
            // var date=document.getElementById('date');
            let d = new Date(user.created_at);
            date.textContent = "Joined " + d.getUTCDate() + " " + months[d.getUTCMonth()] + " " + d.getUTCFullYear();

            //set Bio:
            // var bio=document.getElementById('bio');
            if(user.bio) {
                bio.textContent = user.bio;
            } else { bio.textContent = "This profile has no bio" }

            //set Repos:
            let repos = document.getElementById('repos');
            repos.textContent = user.public_repos;

            //set Followers:
            let followers = document.getElementById('followers');
            followers.textContent = user.followers;

            //set Following:
            let following = document.getElementById('following');
            following.textContent = user.following;

            //set Location:
            let location = document.getElementById('location');
            if (user.location) {
                location.textContent = user.location;
            }
            else {
                location.textContent= "Not Available";
                // location.classList.toggle('not-available');
            }

            //set Twitter:
            let twitter = document.getElementById('twitter');
            let linkt = document.getElementById('linkTwitter');
            if (user.twitter_username) {
                twitter.textContent = user.twitter_username;
                linkt.setAttribute("href","https://twitter.com/"+user.twitter_username);
                linkt.setAttribute('aria-disabled','false'); 
            }
            else {
                twitter.textContent = "Not Available";
                linkt.setAttribute("href",'');
                linkt.setAttribute('aria-disabled','true');
            }
            //set blog:
            let blog = document.getElementById('blog');
            let linkb = document.getElementById('linkBlog');
            if (user.blog) {
                blog.textContent = user.blog;
                linkb.setAttribute("href",user.blog);
                linkb.setAttribute('aria-disabled','false'); 
            } else {
                 blog.textContent = "Not Available";
                 linkb.setAttribute("href",'');
                 linkb.setAttribute('aria-disabled','true');
                }

            //set company:
            let company = document.getElementById('company');
            let linkc = document.getElementById('linkCompany');
            if (user.company) {
                company.textContent = user.company;
                if(user.company.includes('@',0)){
                    linkc.setAttribute("href","https://github.com/"+user.company.substr(1,user.company.length));
                    linkc.setAttribute('aria-disabled','false');
                }else{
                    linkc.setAttribute("href",'');
                    linkc.setAttribute('aria-disabled','true');
                }
            } else {
                company.textContent = "Not Available";
                linkc.setAttribute("href",'');
                linkc.setAttribute('aria-disabled','true');
            }
        }
    }).catch(e => console.log(e))

//search
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];

function search() {
    let searchmsg = document.getElementById('searchmsg');
    fetch("https://api.github.com/users/" + searchtext.value)
        .then(res => res.json())
        .then(user => {
            if (user.message == "Not Found") {//user not exist
                searchmsg.style.display = 'inline-block';
                return;
            }
            else {//if user exist
                //set img
                searchmsg.style.display = 'none';
                let img = document.getElementById('profile-img').innerHTML = `<img src=${user.avatar_url}>`;

                //set Name:
                let name = document.getElementById('name');
                name.textContent = user.name;

                //set mini header-blue:
                let login = document.getElementById('login');
                login.textContent = "@" + user.login;

                //set Joined:
                // var date=document.getElementById('date');
                let d = new Date(user.created_at);
                date.textContent = "Joined " + d.getUTCDate() + " " + months[d.getUTCMonth()] + " " + d.getUTCFullYear();

                //set Bio:
                // var bio=document.getElementById('bio');
                if(user.bio) {
                    bio.textContent = user.bio;
                } else { bio.textContent = "This profile has no bio" }

                //set Repos:
                let repos = document.getElementById('repos');
                repos.textContent = user.public_repos;

                //set Followers:
                let followers = document.getElementById('followers');
                followers.textContent = user.followers;

                //set Following:
                let following = document.getElementById('following');
                following.textContent = user.following;

                //set Location:
                let location = document.getElementById('location');
               
                if (user.location) {
                    location.textContent = user.location;
                }
                else {
                    location.textContent= "Not Available";
                    // location.classList.toggle('not-available');
                }

                //set Twitter:
                let twitter = document.getElementById('twitter');
                let linkt = document.getElementById('linkTwitter');
                if (user.twitter_username) {
                    twitter.textContent = user.twitter_username;
                    linkt.setAttribute("href","https://twitter.com/"+user.twitter_username);
                    linkt.setAttribute('aria-disabled','false');
                }
                else {
                    twitter.textContent = "Not Available";
                    linkt.setAttribute("href","");
                    linkt.setAttribute('aria-disabled','true');
                }
                //set blog:
                let blog = document.getElementById('blog');
                let linkb = document.getElementById('linkBlog');
                if (user.blog) {
                    blog.textContent = user.blog;
                    linkb.setAttribute("href",user.blog);
                    linkb.setAttribute('aria-disabled','false');
                } else {
                     blog.textContent = "Not Available"; 
                     linkb.setAttribute("href","");
                     linkb.setAttribute('aria-disabled','true');
                    }


                //set company:
                let company = document.getElementById('company');
                let linkc = document.getElementById('linkCompany');
                if (user.company) {
                    company.textContent = user.company;
                    if(user.company.includes('@',0)){
                        linkc.setAttribute('aria-disabled','false');
                        linkc.setAttribute("href","https://github.com/"+user.company.substr(1,user.company.length));
                    }else{
                        linkc.setAttribute("href",'');
                        linkc.setAttribute('aria-disabled','true');
                    }
                } else {
                    company.textContent = "Not Available";
                    linkc.setAttribute("href",'');
                    linkc.setAttribute('aria-disabled','true');
                }
            }
        }).catch(e => console.log(e))
}