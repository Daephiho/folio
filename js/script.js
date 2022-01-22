
// 각 프로젝트 div
const prj1_div = document.querySelector("#prj1_div");
const prj2_div = document.querySelector("#prj2_div");
const prj3_div = document.querySelector("#prj3_div");

// 각 프로젝트 pdf div
const prj1 = document.querySelector("#prj_1");
const prj2 = document.querySelector("#prj_2");
const prj3 = document.querySelector("#prj_3");
const prj_divs = document.querySelector("#prj_divs");

// 나이 계산
const date = new Date();
const age = document.querySelector("#age");
const myAge = date.getFullYear() - 1996 + 1;
age.innerHTML = "("+myAge+")";

// 1번 프로젝트로 스크롤 이동
function to_prj1() {
    window.scrollTo(0, 680)
}

// 1번 프로젝트로부터 멀어질 때 
window.addEventListener("scroll", function() {
     let value = window.scrollY;
     if(value>=630) {
        prj1_div.style.animation = "prj_appe 1.5s ease-in-out forwards";
     } 
     
     if(value>900) {
        prj1_div.style.animation = "prj_dis 1.5s ease-in-out forwards";
        prj1_dis(); 
     }

});

// 2번 프로젝트로 스크롤 이동
function to_prj2() {
    window.scrollTo(0, 1290)
}
btn2.addEventListener("click", to_prj2)

// 2번 프로젝트로부터 멀어질 때 
window.addEventListener("scroll", function() {
    let value = window.scrollY;
    if(value>1100) {
       prj2_div.style.animation = "prj_appe 1.5s ease-in-out forwards";
    } else if(value<1100) {
        prj2_div.style.animation = "prj_dis 1.5s ease-in-out forwards";
        prj2_dis();
    } 
    
    if(value>1600) {
        prj2_div.style.animation = "prj_dis 1.5s ease-in-out forwards";
        prj2_dis();
    }
});

// 3번 프로젝트로 스크롤 이동
function to_prj3() {
    window.scrollTo(0, 1858)
}
btn3.addEventListener("click", to_prj3)

// 3번 프로젝트로부터 멀어질 때 
window.addEventListener("scroll", function() {
    let value = window.scrollY;
    if(value>1600) {
       prj3_div.style.animation = "prj_appe 1.5s ease-in-out forwards";
    } 
    
    if(value<1700) {
        prj3_div.style.animation = "prj_dis 1.5s ease-in-out forwards";
        prj3_dis();
     } 
});

//
function prj1_show() {
    prj1.style.display = "block";
}

function prj1_dis() {
    prj1.style.display = "none";
}

//
function prj2_show() {
    prj2.style.display = "block";
}

function prj2_dis() {
    prj2.style.display = "none";
}

//
function prj3_show() {
    prj3.style.display = "block";
}

function prj3_dis() {
    prj3.style.display = "none";
}

function to_top() {
    window.scrollTo(0, 0)
}

function scroll_top() {
    window.scrollBy(0, -600)
}

function scroll_bottom() {
    window.scrollBy(0, 630)
}
