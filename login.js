window.addEventListener("load", () => {
    let loginPageBtn = document.querySelector(".login");
    let regPageBtn = document.querySelector(".register");
    let loginPage = document.querySelector(".login-box");
    let regPage = document.querySelector(".register-box");
    let info = document.querySelector("#info");

    if(!loginPage.classList.contains("active")) {
        loginPage.classList.toggle("active");
        loginPageBtn.style.backgroundColor = "aqua";
        info.innerHTML = "";
    } else if (regPage.classList.contains("active")) {
        regPage.classList.toggle("active");
        loginPage.classList.toggle("active");
        info.innerHTML = "";
    }

    loginPageBtn.addEventListener("click", () => {
        if(!loginPage.classList.contains("active")){
            loginPage.classList.toggle("active");
            regPage.classList.toggle("active");
            loginPageBtn.style.backgroundColor = "aqua";
            regPageBtn.style.backgroundColor = "#fff";
            info.innerHTML = "";
        }
    })
    regPageBtn.addEventListener("click", () => {
        if(!regPage.classList.contains("active")){
            regPage.classList.toggle("active");
            loginPage.classList.toggle("active");
            regPageBtn.style.backgroundColor = "aqua";
            loginPageBtn.style.backgroundColor = "#fff";
            info.innerHTML = "";
        }

    })
})