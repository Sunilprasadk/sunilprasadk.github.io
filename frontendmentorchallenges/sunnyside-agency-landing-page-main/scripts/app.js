//Responsible Navbar - FUNCTIONALITY

const hamburgerIcon = document.querySelector(".header_hamburger-icon");
const headerLinks =  document.querySelector(".header_links");
const headerLinksBox =  document.querySelector(".header_links-boxSupport");



hamburgerIcon.addEventListener("click", ()=>{
    headerLinks.classList.toggle("links_box-toggle");
    headerLinksBox.classList.toggle("links_boxSupport-toggle");
})