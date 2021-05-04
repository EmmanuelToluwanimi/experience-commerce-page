let bars = document.querySelector(".bar_btn");
let sdnav = document.querySelector(".header");
let cart_btn = document.querySelector(".cart_btn");
let cartnav = document.querySelector(".sidebar");

bars.onclick = function () {
    bars.classList.toggle("change");
    if (bars.classList.contains("change")) {
        sdnav.style.display = "block";
    } else {
        sdnav.style.display = "none";
    }
}

cart_btn.onclick = function () {
    cartnav.classList.toggle("sidebarshow");
}