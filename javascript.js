document.addEventListener("DOMContentLoaded", function() {
    let mbtn = document.querySelector(".toggle-ball");
    let cmode = "light";
    let mode = document.querySelector("body");
    let posters = document.querySelectorAll(".posters .poster1 p");
    let htag=document.querySelectorAll(".posters .poster1 h1");
    let images = document.querySelectorAll(".posters .poster1 img");
    mbtn.addEventListener("click", () => {
        if (cmode == "light") {
            cmode = "dark";
            mode.style.backgroundColor = "#4dbf00";
            mode.style.color = "black";
            mbtn.style.transform = "translateX(-20px)";
            posters.forEach(p => p.style.color = "black");
            htag.forEach(h1 => h1.style.color="black");
            images.forEach(img => img.classList.add("hover-dark"));
        } else {
            cmode = "light";
            mode.style.backgroundColor = "black";
            mode.style.color = "white";
            mbtn.style.transform = "translateX(0)";
            posters.forEach(p => p.style.color = "white");
            htag.forEach(h1 => h1.style.color="yellow");
            images.forEach(img => img.classList.remove("hover-dark"));
        }
    });
});
