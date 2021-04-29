const sharebtn = document.querySelector("#share-custom-btn");
const leftpane = document.querySelector(".left");

const shareData = {
  url: "https://frosty-hoover-71d955.netlify.app/",
};

window.addEventListener("load", () => {
  // leftpane.style.display = "none";
  if (!navigator.share) {
    sharebtn.style.display = "none";
  }
});

sharebtn.addEventListener("click", async () => {
  navigator.share(shareData);
});

let scrollFunc = () => {
  let y = window.scrollY;

  if (y > 800 && screen.width > 1440) {
    leftpane.style.display = "block";
  } else {
    leftpane.style.display = "none";
  }
};

document.addEventListener("scroll", scrollFunc);
