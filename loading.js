window.addEventListener("load", () => {
    var load = document.querySelector(".onload");

    if(load.classList.contains("load-anim")) {
        load.classList.remove("load-anim");

        setTimeout(() => {
            load.classList.toggle("load-anim");
            setTimeout(() => {
                load.style.display = "none";
            }, 300)
        }, 2000);
    } else {
        setTimeout(() => {
            load.classList.toggle("load-anim");
            setTimeout(() => {
                load.style.display = "none";
            }, 300)
        }, 2000);
    }
})