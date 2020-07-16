let menu = document.querySelector("#menuMobile");
let menu_list = document.querySelector(".menu_list");
let fundo_menu = document.querySelector(".menu aside");

menu.addEventListener("click", () => {


    if (menu.classList[0] === "closed") {

        menu.src = "./img/icon-close.svg";

        menu.classList.add("opend")
        menu.classList.remove("closed")
        menu_list.style.display = "flex";
        menu_list.style.animation = "anima_menu .5s forwards";

        // fundo_menu.style.animation = "anima_menu 0s forwards";
        fundo_menu.style.display = "block";
        
    }
    else if (menu.classList[0] === "opend") {
        
        menu.src = "./img/icon-hamburger.svg";
        
        menu.classList.add("closed")
        menu.classList.remove("opend")
        
        menu_list.style.animation = "anima_menu_fechar .5s forwards";
        
        setTimeout(()=>{
            
            fundo_menu.style.display = "none";
        },300)

        
        // fundo_menu.style.display = "none";
        // alert("asdasd")
    }
    

})

