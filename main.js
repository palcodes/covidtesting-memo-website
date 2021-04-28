const sharebtn = document.querySelector("#share-custom-btn");

const shareData = {
  url: "https://frosty-hoover-71d955.netlify.app/",
};

window.addEventListener("load", () => {
  if (!navigator.share) {
    sharebtn.style.display = "none";
  }
});

sharebtn.addEventListener("click", async () => {
  navigator.share(shareData);
});
