const burger = document.querySelector(".burger");
const devices = document.querySelector(".devices-mobile");

burger.addEventListener("click", () => {
  devices.classList.toggle("active");
});

const toggleBtn = document.querySelector(".grid-2-icon");
const toggles = document.querySelector(".first-div-mobile .mobile-options .nest-div .toggles")
const mobileOptions = document.querySelector(".mobile-options");

toggleBtn.addEventListener("click", () => {
  mobileOptions.classList.toggle("active");
  toggles.style.display = " none"

});

let icon = document.querySelector(".settings-toggle")
let list = document.querySelector("aside")
let overlay = document.querySelector(".overlay")

icon.addEventListener("click",()=>{
    list.classList.toggle("open")
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto" 
})
overlay.addEventListener("click", () => {
  list.classList.remove("open")
  overlay.style.opacity = "0"
  overlay.style.pointerEvents = "none"   // ← منع الكليك لما يختفي
})

let devicesDesc = document.querySelector(".devices")
let devicesDescH3 = document.querySelectorAll(".devices h3")
function handleResize() {
  if (window.innerWidth >= 1024) {
    list.classList.remove("open");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    devicesDesc.style.overflow = "auto"
    devicesDesc.style.height = "8.3vh"
  }
}

window.addEventListener("resize", handleResize);





