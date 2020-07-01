const blogBtnEl = document.querySelector("#blog");
const contentWrapperEl = document.querySelector(".content-wrapper");
const headerEl = document.querySelector("header");

blogBtnEl.addEventListener("click", () => {
    if(!headerEl.classList.contains("side")) {
        headerEl.classList.add("side");
        contentWrapperEl.classList.remove("hide");
    }
    
});


