
class MenuList {
    constructor() {
        this.menuToggle();
    }
    menuToggle() {
        let menu = document.querySelector(".header__navigation");
        console.log(menu)
        let btnMenu = document.querySelector("#header-btn");
        btnMenu.addEventListener("click", () => {
            menu.classList.toggle("visually-hidden")
        })
    }
}
const menuListener = new MenuList;
