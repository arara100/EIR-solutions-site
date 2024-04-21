document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".menu-overlay");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });


    const menuItems = document.querySelectorAll(".menu__link");
    menuItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
});






