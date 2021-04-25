const citation = document.querySelector("#opened-citation");
const bottomsheet = document.querySelector("#bottomsheet");
const closebtn = document.querySelector("#close-btn");

document.body.addEventListener("click", () => {
  hideBottomsheet();
});

window.addEventListener("load", () => {
  for (let cites of document.querySelectorAll(".cit")) {
    cites.addEventListener("click", (e) => {
      switch (cites.id) {
        case "1":
          showBottomSheet();
          citation.textContent =
            "Mudit Kapoor, “Rs. 40,000 Crore: Cost of Maharashtra Lockdown,” Business Today, 8 April 2021: https://www.businesstoday.in/current/graphics/rs-40000-crore-cost-of-maharashtra-lockdown/story/436118";
          e.stopPropagation();
          break;
        case "2":
          showBottomSheet();
          citation.textContent =
            "Press Information Bureau Public Tweet, 8 April 2021: https://twitter.com/PIBMumbai/status/1380178867487264775";
          e.stopPropagation();
          break;
        case "3":
          showBottomSheet();
          citation.textContent =
            "'Maharashtra Records 56,286 new COVID cases,'New Indian Express, 9 April 2021: https://www.newindianexpress.com/nation/2021/apr/09/maharashtra-records-56286-new-covidcases-state -faces-severe-vaccine-remdesivir-shortage-2287835.html";
          e.stopPropagation();
          break;
        case "4":
          showBottomSheet();
          citation.textContent =
            "Soham Sankaran '113 Billion COVID Tests for India,' https://soh.am/writes/113_billion_covid_tests_for_india/";
          e.stopPropagation();
          break;
        case "5":
          showBottomSheet();
          citation.textContent =
            "Paul Romer and Rajiv Shah, 'Testing Is Our Way Out,' Wall Street Journal, 2 April 2020: https://www.wsj.com/articles/testing-is-our-way-out-11585869705";
          e.stopPropagation();
          break;
        case "6":
          console.log("6");
          break;
        case "7":
          console.log("7");
          break;
        case "8":
          console.log("8");
          break;
        case "9":
          console.log("9");
          break;
        case "10":
          console.log("10");
          break;
        case "11":
          console.log("10");
          break;
        case "12":
          console.log("10");
          break;
        case "13":
          console.log("10");
          break;
        case "14":
          console.log("10");
          break;
        case "15":
          console.log("10");
          break;
        case "16":
          console.log("10");
          break;
        case "17":
          console.log("10");
          break;
        case "18":
          console.log("10");
          break;
        case "19":
          console.log("10");
          break;
        case "20":
          console.log("10");
          break;
        default:
          console.log("sd");
          break;
      }
    });
  }
});

function showBottomSheet() {
  //   bottomsheet.style.display == "block";
  bottomsheet.classList.add("bottomsheet-summon-div");
  bottomsheet.classList.remove("bottomsheet-hide-div");
}

closebtn.addEventListener("click", () => {
  hideBottomsheet();
});

function hideBottomsheet() {
  bottomsheet.classList.add("bottomsheet-hide-div");
  bottomsheet.classList.remove("bottomsheet-summon-div");
  //   setTimeout(() => {
  //     bottomsheet.style.display == "none";
  //   }, 500);
}
