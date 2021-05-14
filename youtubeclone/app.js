const menu = document.getElementById("menubar"); //Menu icon
const contentSidebar = document.getElementById("sidebarContent"); //Sidebar navigation
const contentVideos = document.getElementById("maincontent"); //Top categories
const contentVideoAlign = document.getElementById("mainlayout"); //Videos overall
const navNone = document.getElementById("sidenavnone"); //Unwanted sidebar navigation items
const overlayBody = document.getElementById("overlaybody"); //Overlay 
const searchButton = document.getElementById("searchbutton"); //Searchbar button
const fieldSearch = document.getElementById("fieldsearch"); //Searchbar input field
const searchbarSmallLogo = document.getElementById("searchbarsmalllogo"); //Searchbar YouTube logo and menu
const searchbarSmallProfile = document.getElementById("searchbarsmallprofile"); //Searchbar profile and bell icon 
const searchbarSearchArea = document.getElementById("searchbarsearcharea"); //Searchbar input field and microphone

/*This is for the video play - If the mouse over the video, it will play. If the mouse remove from hover it will back to original state*/


const clip = document.querySelectorAll(".clip");

for(let i=0; i<clip.length; i++)
{
  clip[i].addEventListener('mouseover',
  function(e){
      clip[i].play()
  })
  clip[i].addEventListener('mouseout',
  function(e){
      clip[i].load()
  })
}

/*If the device width greater than 969px, then the Sidebar navigation width reduced - Videos grid width enlarged - Videos aligned to center - Unwanted sidebar navigation item eliminated
Else the overlay gets displayed above all the items and below the sidebar navigation from left to right (Happens when menu icon clicked)*/

function myFunction() {
    if (window.matchMedia("(min-width: 969px)").matches) {
        contentSidebar.classList.toggle("small");
        contentVideos.classList.toggle("videosgrid");
        contentVideoAlign.classList.toggle("videoslayout");
        navNone.classList.toggle("sidenone");
    }else{
      overlayBody.classList.toggle("overlay");
      contentSidebar.classList.toggle("sidebarside");
    }
}

/*If the device width upto 583px, then the top header items eliminated except the search field and microphone(Happens when search button when clicked) Else nothing happend*/

function anotherFunction() {
  if (window.matchMedia("(max-width: 583px)").matches) {
    fieldSearch.classList.toggle("searchsmall");
    searchbarSmallLogo.classList.toggle("searchbarlogonone");
    searchbarSmallProfile.classList.toggle("searchbarprofilenone");
    searchbarSearchArea.classList.toggle("searchbarsearchareasmall");
  }else{
    return;
  }
}






/*Event listeners for the menu and search button*/

menu.addEventListener("click",myFunction);
searchButton.addEventListener("click", anotherFunction);