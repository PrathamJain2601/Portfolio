const nav = document.getElementById("nav");
const exp = document.getElementById("exp");
const edu = document.getElementById("edu");
const experience = document.getElementById("experience");
const education = document.getElementById("education");
let i = 1;
let flag = 0;
let flag2 = 1;
let bars = document.querySelectorAll('.myBar');
let barFill;

exp.addEventListener("click", ()=>{
    exp.style.backgroundColor = "#4e369e";
    exp.style.color = "white";
    edu.style.backgroundColor = "#EFEFEF";
    edu.style.color = "black";    
    experience.style.display = "block";
    education.style.display = "none";
});
edu.addEventListener("click", ()=>{
    edu.style.backgroundColor = "#4e369e";
    edu.style.color = "white";
    exp.style.backgroundColor = "#EFEFEF";    
    exp.style.color = "black";
    experience.style.display = "none";
    education.style.display = "block";
});
window.onscroll = function(){
    if (document.documentElement.scrollTop > 200) {
        nav.style.animation = "1s ease-in-out 0s 1 navbarIn";
        nav.style.height = "82px";
        flag = 1;
    }
    else {
        if(flag){
            nav.style.height = "0px";
            nav.style.animation = "1s ease-in-out 0s 1 navbarOut";
        }
    }

    if (document.documentElement.scrollTop > 650) {
        if(flag2){
            barFill = setInterval(fill, 10);
            flag2 = 0;
        }
    }
};

function fill(){
    if(i == 95){
        clearInterval(barFill);
    }
    let s = i + '%';
    if(i <= 95){
        bars[0].style.width = s;
        bars[4].style.width = s;
    }
    if(i <= 90){
        bars[1].style.width = s;
        bars[2].style.width = s;
        bars[5].style.width = s;
    }
    if(i <= 85){
        bars[3].style.width = s;
    }
    i++;
}
