window.addEventListener("load", () => {
  for (let cites of document.querySelectorAll(".cit")) {
    cites.addEventListener("click", () => {
      switch (cites.id) {
        case cites.id == 1:
          console.log("1");
          break;
        case cites.id == 2:
          console.log("2");
          break;
        case cites.id == 3:
          console.log("3");
          break;
        default:
          break;
      }
    });
  }
});
