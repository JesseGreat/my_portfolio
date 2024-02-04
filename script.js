const projects= [
  { projectName: "Restaurant ordering API", projectBackground: "images/backgrounds/API.png" , link: "https://github.com/JesseGreat/API"},
  { projectName: "Restaurant app", projectBackground: "images/backgrounds/restaurant.png" , link: "https://github.com/JesseGreat/Little_Lemon/tree/main/littlelemon"},
  { projectName: "Todo list app", projectBackground: "images/backgrounds/todo-list.png" , link: "https://github.com/JesseGreat/Codsoft/tree/main/To_do_list"},
  { projectName: "Contact list app", projectBackground: "images/backgrounds/contactlist.png" , link: "https://github.com/JesseGreat/Codsoft/tree/main/ContactBook"},
  { projectName: "Portfolio website", projectBackground: "images/backgrounds/portfolio.png" , link: "https://github.com/Elvis-rozy/Jesse-Great"},
  { projectName: "tuneflix", projectBackground: "images/backgrounds/streaming.png" , link: "https://github.com/JesseGreat/audio_player"},
  { projectName: "JJ-Lingua", projectBackground: "images/backgrounds/jj-lingua.png" , link: "https://github.com/JesseGreat/JJ-Lingua"}
];

const textObserver = new IntersectionObserver((entries) => entries.forEach(entry =>entry.isIntersecting? entry.target.classList.replace("headingHide", "headingShow") : entry.target.classList.replace("headingShow", "headingHide")));
document.querySelectorAll(".hiddenText").forEach(element => textObserver.observe(element));

const imageObserver = new IntersectionObserver((entries) => entries.forEach(entry =>entry.isIntersecting? entry.target.classList.replace("imageHide", "imageShow") : entry.target.classList.replace("imageShow", "imageHide")));
document.querySelectorAll(".hiddenImage").forEach(element => imageObserver.observe(element));

window.addEventListener("DOMContentLoaded", () => displayWorks (projects));

function displayWorks (works) {
  let displayWorks = works.map((work) => {
    return `<a href=${work.link} class="jobCard">
        <img class="background" src=${work.projectBackground} alt="">
        <span class="overlay"></span>
        <div class="detaile">
          <span class="dash top"></span>
          <span class="dash bottom"></span>
          <h5 class="workName">${work.projectName}</h5>
        </div>
        <img class="link" src="images/icons/link-45deg.svg" alt="">
      </a>`;
  });
  displayWorks = displayWorks.join(""), document.querySelector(".works").innerHTML = displayWorks;
}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobileMenu");
hamburger.addEventListener("click", ()=>{
  if(!hamburger.classList.contains("hamburgerToggle")){
    hamburger.classList.add("hamburgerToggle");
    mobileMenu.classList.replace("mobileMenuClosed", "mobileMenuOpen");
  } else{
    hamburger.classList.remove("hamburgerToggle");
    mobileMenu.classList.replace("mobileMenuOpen", "mobileMenuClosed");
  }
});

const mobileLink= document.querySelectorAll(".mobilelink");
mobileLink.forEach((link)=>{
  link.addEventListener("click", ()=>{
    hamburger.classList.remove("hamburgerToggle");
    mobileMenu.classList.replace("mobileMenuOpen", "mobileMenuClosed");
  });
});