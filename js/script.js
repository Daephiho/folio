const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const img1 = btn1.querySelector("img");
    const img2 = btn2.querySelector("img");
    const img3 = btn3.querySelector("img");
    const prj1 = document.querySelector("#prj_1");
    const prj2 = document.querySelector("#prj_2");
    const prj3 = document.querySelector("#prj_3");

    const date = new Date();
    const age = document.querySelector("#age");
    const myAge = date.getFullYear() - 1996 + 1;
    age.innerHTML = "("+myAge+")";

    function show_prj_1() {
        prj2.style.display = "none";
        prj3.style.display = "none";
        prj1.style.display = "block";
        img2.style.border = "none";
        img3.style.border = "none";
        img1.style.border = "2px solid black";
    }

    function show_prj_2() {
        prj1.style.display = "none";
        prj3.style.display = "none";
        prj2.style.display = "block";
        img1.style.border = "none";
        img3.style.border = "none";
        img2.style.border = "2px solid black";
    }

    function show_prj_3() {
        prj1.style.display = "none";
        prj2.style.display = "none";
        prj3.style.display = "block";
        img1.style.border = "none";
        img2.style.border = "none";
        img3.style.border = "2px solid black";
    }

    btn1.addEventListener("click", show_prj_1);
    btn2.addEventListener("click", show_prj_2);
    btn3.addEventListener("click", show_prj_3);