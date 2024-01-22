const projects= [
  { projectName: "job1", projectBackground: "images/backgrounds/html-test1.png" },
  { projectName: "job2", projectBackground: "images/backgrounds/html-test1.png" },
  { projectName: "job3", projectBackground: "images/backgrounds/html-test1.png" },
  { projectName: "job4", projectBackground: "images/backgrounds/html-test1.png" },
  { projectName: "job5", projectBackground: "images/backgrounds/html-test1.png" }
];

const textObserver = new IntersectionObserver((entries) => entries.forEach(entry =>entry.isIntersecting? entry.target.classList.replace("headingHide", "headingShow") : entry.target.classList.replace("headingShow", "headingHide")));
document.querySelectorAll(".hiddenText").forEach(element => textObserver.observe(element));

const imageObserver = new IntersectionObserver((entries) => entries.forEach(entry =>entry.isIntersecting? entry.target.classList.replace("imageHide", "imageShow") : entry.target.classList.replace("imageShow", "imageHide")));
document.querySelectorAll(".hiddenImage").forEach(element => imageObserver.observe(element));

window.addEventListener("DOMContentLoaded", () => displayWorks (projects));

function displayWorks (works) {
  let displayWorks = works.map((work) => {
    return `<a href="#" class="jobCard">
        <img class="background" src=${work.projectBackground} alt="">
        <div class="detaile">
          <span class="dash top"></span>
          <span class="dash bottom"></span>
          <h5>${work.projectName}</h5>
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