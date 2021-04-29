const sharebtn = document.querySelector("#share-custom-btn");
const leftpane = document.querySelector(".left");
const contactbtn = document.querySelector("#contact-btn");
const bottomsheet = document.querySelector("#bottomsheet");
const closebtn = document.querySelector("#close-btn");
const sharefabbtn = document.querySelector("#share-btn");

const shareData = {
  url: "https://frosty-hoover-71d955.netlify.app/",
};

window.addEventListener("load", () => {
  // leftpane.style.display = "none";
  if (!navigator.share) {
    sharebtn.style.display = "none";
    sharefabbtn.style.display = "none";
    contactbtn.style.width = "100%";
  }
});

sharebtn.addEventListener("click", async () => {
  navigator.share(shareData);
});

sharefabbtn.addEventListener("click", async () => {
  navigator.share(shareData);
});

function hideBottomsheet() {
  bottomsheet.classList.add("bottomsheet-hide-div");
  bottomsheet.classList.remove("bottomsheet-summon-div");
  setTimeout(() => {
    bottomsheet.style.display = "none";
  }, 500);
}

// document.body.addEventListener("click", (e) => {
//   hideBottomsheet();
// });

contactbtn.addEventListener("click", (e) => {
  bottomsheet.classList.add("bottomsheet-summon-div");
  bottomsheet.classList.remove("bottomsheet-hide-div");
  bottomsheet.style.display = "block";
  e.stopPropagation();
});

closebtn.addEventListener("click", (e) => {
  hideBottomsheet();
});

let scrollFunc = () => {
  let y = window.scrollY;

  if (y > 700 && screen.width > 1740) {
    leftpane.style.display = "block";
  } else {
    leftpane.style.display = "none";
  }
};

document.addEventListener("scroll", scrollFunc);
