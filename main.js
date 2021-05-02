const leftpane = document.querySelector(".left");
const contactbtn = document.querySelector("#contact-btn");
const bottomsheet = document.querySelector("#bottomsheet");
const closebtn = document.querySelector("#close-btn");
const bodySubmit = document.querySelector("#submit-btn-1");
const bsSubmit = document.querySelector("#submit-btn-2");
const supabaseUrl = "https://lyliffbmhhvimuzgksoe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTI2Nzk4OSwiZXhwIjoxOTM0ODQzOTg5fQ.oa1UaK4R6_ibd1fMHNvK2rCZ-mJMlcDeW2lTnaRiflA";

const { createClient } = supabase;
supabase = createClient(supabaseUrl, supabaseKey);

bodySubmit.addEventListener("click", async () => {
  let email = document.querySelector("#email-1").value;
  let option = "";
  let time = new Date().toISOString();
  for (let radios of document.querySelectorAll(".ir-1")) {
    if (radios.checked) {
      option = radios.value;
    }
  }
  const { data, error } = await supabase.from("test-everyone").insert([
    {
      email: email,
      reason: option,
      createdon: time,
    },
  ]);
  console.log(data, error);
  bodySubmit.disabled = true;
  bodySubmit.value = "Processing..";
  bodySubmit.style.backgroundColor = "#000000";
  setTimeout(() => {
    bodySubmit.value = "Thank You";
  }, 500);
  setTimeout(() => {
    bodySubmit.value = "Submit";
    bodySubmit.disabled = false;
  }, 5000);
});

bsSubmit.addEventListener("click", async () => {
  let email = document.querySelector("#email-2").value;
  let option = "";
  let time = new Date().toISOString();
  for (let radios of document.querySelectorAll(".ir-2")) {
    if (radios.checked) {
      option = radios.value;
    }
  }
  const { data, error } = await supabase.from("test-everyone").insert([
    {
      email: email,
      reason: option,
      createdon: time,
    },
  ]);
  console.log(data, error);
  bsSubmit.disabled = true;
  bsSubmit.value = "Processing..";
  bsSubmit.style.backgroundColor = "#000000";
  setTimeout(() => {
    bsSubmit.value = "Thank You";
  }, 200);
  setTimeout(() => {
    hideBottomsheet();
    bsSubmit.disabled = false;
  }, 600);
});

const shareData = {
  url: "https://frosty-hoover-71d955.netlify.app/",
};

window.addEventListener("load", () => {
  // leftpane.style.display = "none";
  if (!navigator.share) {
    for (let sharebtn of document.querySelectorAll(".share-custom-btn")) {
      sharebtn.style.display = "none";
    }
  } else {
    for (let sharebtn of document.querySelectorAll(".share-custom-btn")) {
      sharebtn.style.display = "block";
      sharebtn.addEventListener("click", async () => {
        navigator.share(shareData);
      });
    }
  }
});

function hideBottomsheet() {
  bottomsheet.classList.add("bottomsheet-hide-div");
  bottomsheet.classList.remove("bottomsheet-summon-div");
  setTimeout(() => {
    bottomsheet.style.display = "none";
  }, 500);
}

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

  if (y > 500 && window.innerWidth > 1400) {
    leftpane.style.display = "block";
  } else {
    leftpane.style.display = "none";
  }
};

document.addEventListener("scroll", scrollFunc);
