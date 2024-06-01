window.addEventListener("load", (event) => {
    /* menu - RWD */
    var menu = document.querySelector("nav");
    var menuIcon = document.querySelector("header #menu-icon");
    var closeIcon = document.querySelector("header nav #close-icon");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
    closeIcon.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    /* Theme button */
    // var themeBtn = document.querySelector("#chng-theme button");
    // themeBtn.addEventListener("click", () => {
    //     console.log("Theme changed");

    // })
});
var themeBtn = document.querySelector(".chng-theme");
var body = document.querySelector("body");
var btnPoint = document.querySelector(".btn-point");
var btnIcon = document.querySelector(".btn__icon");
var writeAnim = document.querySelector(".write-anim span")

// zapisanie stanu motywu
function storeTheme(mode) {
    localStorage.setItem("lightmode", mode);
}

//zmiana motywu na ostatni zapisany
function load() {
    const lightmode = localStorage.getItem("lightmode");

    //jeśli jasny motyw nigdy nie był włączony
    if (!lightmode) {
        storeTheme(false);
        btnIcon.classList.add("fa-sun");
    } else if (lightmode == "true") {
        body.classList.toggle("lightmode");
        btnPoint.classList.toggle("lightmode");
        themeBtn.classList.toggle("lightmode");
        btnIcon.classList.add("fa-moon");
        writeAnim.classList.toggle("lightmode");
    } else if(lightmode == "false") {
        btnIcon.classList.add("fa-sun");
    }
}

load();

themeBtn.addEventListener("click", () => {
    body.classList.toggle("lightmode");
    btnPoint.classList.toggle("lightmode");
    btnIcon.classList.add("anim");
    themeBtn.classList.toggle("lightmode");
    writeAnim.classList.toggle("lightmode");
    console.log("Theme cahnged");

    // zapisz stan
    storeTheme(body.classList.contains("lightmode"));

    if(body.classList.contains("lightmode")) {
        btnIcon.classList.remove("fa-sun");
        btnIcon.classList.add("fa-moon");
        btnIcon.style.color = "#000";
    } else {
        btnIcon.classList.remove("fa-moon");
        btnIcon.classList.add("fa-sun");
        btnIcon.style.color = "#fff";
    }

    setTimeout( () => {
        btnIcon.classList.remove("anim");
    }, 500 );
});
