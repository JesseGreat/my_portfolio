const projects= [
  { id: 1, projectName: "Restaurant ordering API", projectBackground: "images/backgrounds/API.png" , link: "https://github.com/JesseGreat/API", videoSrc: "https://www.youtube.com/embed/kiMDtGt0lQM?autoplay=1&mute=1si=93_r_s0MIIjWxnIx"},
  { id: 2, projectName: "Restaurant app", projectBackground: "images/backgrounds/restaurant.png" , link: "https://github.com/JesseGreat/Little_Lemon/tree/main/littlelemon", videoSrc: "https://www.youtube.com/embed/7Tkbot5sb9E?autoplay=1&mute=1si=8kPLXdmYUOQSpB8v"},
  { id: 3, projectName: "Todo list app", projectBackground: "images/backgrounds/todo-list.png" , link: "https://github.com/JesseGreat/Codsoft/tree/main/To_do_list", videoSrc: "https://www.youtube.com/embed/XyKMphpO9sg?autoplay=1&mute=1si=seUafdEuK5mjMO7b"},
  { id: 4, projectName: "Contact list app", projectBackground: "images/backgrounds/contactlist.png" , link: "https://github.com/JesseGreat/Codsoft/tree/main/ContactBook", videoSrc: "https://www.youtube.com/embed/kNyMMOzBR5E?autoplay=1&mute=1si=TgjxoUeevlgwpIfa"},
  { id: 5, projectName: "Portfolio website", projectBackground: "images/backgrounds/portfolio.png" , link: "https://github.com/JesseGreat/JesseGreat", videoSrc: "https://www.youtube.com/embed/"},
  { id: 6, projectName: "tuneflix", projectBackground: "images/backgrounds/streaming.png" , link: "https://github.com/JesseGreat/audio_player", videoSrc: "https://www.youtube.com/embed/cA-nFV3qs4w?autoplay=1&mute=1si=660ndSFNsIsTpYku"},
  { id: 7, projectName: "JJ-Lingua", projectBackground: "images/backgrounds/jj-lingua.png" , link: "https://github.com/JesseGreat/JJ-Lingua", videoSrc: "https://www.youtube.com/embed/qAnrNlHga3s?autoplay=1&mute=1si=XEUe0NHmmir54J1M"}
];
const videoSection = document.querySelector(".videoContainer");
const videoPlayback = document.querySelector(".videoPlayback");
const projectLink = document.querySelector(".projectLink");
const exitIcon = document.querySelector(".exitIcon");

const textElement = document.getElementById("heroName");
const phrases = ["Oluwatobiloba Okunogbe"];
let phraseIndex = 0;

setInterval(() => {
  const currentPhrase = phrases[phraseIndex];
  const textLength = currentPhrase.length;
  let i = 0;

  const typingInterval = setInterval(() => {
    const newText = currentPhrase.substring(0, i);
    textElement.textContent = newText;
    i++;

    if (i > textLength) {
      clearInterval(typingInterval);
      phraseIndex++;

      if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
      }

      setTimeout(() => {
        textElement.classList.add("typing");
      }, 500);
    }
  }, 100);
}, 5000);

const textObserver = new IntersectionObserver((entries) => entries.forEach(entry =>entry.isIntersecting? entry.target.classList.replace("headingHide", "headingShow") : entry.target.classList.replace("headingShow", "headingHide")));
document.querySelectorAll(".hiddenText").forEach(element => textObserver.observe(element));

const imageObserver = new IntersectionObserver((entries) => entries.forEach(entry =>entry.isIntersecting? entry.target.classList.replace("imageHide", "imageShow") : entry.target.classList.replace("imageShow", "imageHide")));
document.querySelectorAll(".hiddenImage").forEach(element => imageObserver.observe(element));

window.addEventListener("DOMContentLoaded", () => {
  displayWorks (projects);
  playVideo(projects);
});

function displayWorks (works) {
  let displayWorks = works.map((work) => {
    return `<div class="jobCard">
        <img class="background" src=${work.projectBackground} alt="">
        <span id=${work.id} class="overlay"></span>
        <div class="detaile">
          <span class="dash top"></span>
          <span class="dash bottom"></span>
          <h5 class="workName">${work.projectName}</h5>
        </div>
        <img class="link" src="images/icons/link-45deg.svg" alt="">
      </div>`;
  });
  displayWorks = displayWorks.join(""), document.querySelector(".works").innerHTML = displayWorks;
}
//The function that plays  video from TOP VIDEOS Section
function playVideo (video) {
  let index = 0;
  Array.from(document.getElementsByClassName("jobCard")).forEach((element)=>{
    element.addEventListener("click", (event) => {
      index = event.target.id;
      videoSection.classList.replace("hideItem", "showItem");
      index -= 1;
      videoPlayback.src = video[index].videoSrc;
      projectLink.setAttribute("href", video[index].link);
    });
  });
}
exitIcon.onclick=()=>{
  videoSection.classList.replace("showItem", "hideItem");
  videoPlayback.src = "";
  projectLink.setAttribute("href", "");
};

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