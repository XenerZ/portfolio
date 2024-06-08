window.addEventListener("load", () => {
    var load = document.querySelector(".onload");
    var body = document.querySelector("body");

    if(load.classList.contains("load-anim")) {
        load.classList.remove("load-anim");
        body.classList.remove("body-onload");

        body.classList.toggle("body-onload");
        setTimeout(() => {
            load.classList.toggle("load-anim");
            setTimeout(() => {
                load.style.display = "none";
                body.classList.toggle("body-onload");
            }, 300)
        }, 2000);
    } else {
        body.classList.toggle("body-onload");
        setTimeout(() => {
            load.classList.toggle("load-anim");
            setTimeout(() => {
                load.style.display = "none";
                body.classList.toggle("body-onload");
            }, 300)
        }, 2000);
    }
})