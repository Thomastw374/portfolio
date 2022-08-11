const collapsibleOne = document.querySelector(
  ".main__experience-dropdown--one"
);
const collapsibleTwo = document.querySelector(
  ".main__experience-dropdown--two"
);
const collapsibleThree = document.querySelector(
  ".main__experience-dropdown--three"
);
const collapsibleFour = document.querySelector(
  ".main__experience-dropdown--four"
);
const collapsibleFive = document.querySelector(
  ".main__experience-dropdown--five"
);
const collapsibleSix = document.querySelector(
  ".main__experience-dropdown--six"
);
const collapsibleButtonOne = document.querySelector("#collapsible-button-one");
const collapsibleButtonTwo = document.querySelector("#collapsible-button-two");
const collapsibleButtonThree = document.querySelector("#collapsible-button-three");
const collapsibleButtonFour = document.querySelector("#collapsible-button-four");
const collapsibleButtonFive = document.querySelector("#collapsible-button-five");
const collapsibleButtonSix = document.querySelector("#collapsible-button-six");

const handleCollapsibleToggleOne = () => {
  if (collapsibleOne.style.display === "block") {
    collapsibleOne.style.display = "none";
  } else {
    collapsibleOne.style.display = "block";
  }
};

const handleCollapsibleToggleTwo = () => {
  if (collapsibleTwo.style.display === "block") {
    collapsibleTwo.style.display = "none";
  } else {
    collapsibleTwo.style.display = "block";
  }
};

const handleCollapsibleToggleThree = () => {
  if (collapsibleThree.style.display === "block") {
    collapsibleThree.style.display = "none";
  } else {
    collapsibleThree.style.display = "block";
  }
};

const handleCollapsibleToggleFour = () => {
  if (collapsibleFour.style.display === "block") {
    collapsibleFour.style.display = "none";
  } else {
    collapsibleFour.style.display = "block";
  }
};

const handleCollapsibleToggleFive = () => {
  if (collapsibleFive.style.display === "block") {
    collapsibleFive.style.display = "none";
  } else {
    collapsibleFive.style.display = "block";
  }
};

const handleCollapsibleToggleSix = () => {
  if (collapsibleSix.style.display === "block") {
    collapsibleSix.style.display = "none";
  } else {
    collapsibleSix.style.display = "block";
  }
};

collapsibleButtonOne.addEventListener("click", handleCollapsibleToggleOne);
collapsibleButtonTwo.addEventListener("click", handleCollapsibleToggleTwo);
collapsibleButtonThree.addEventListener("click", handleCollapsibleToggleThree);
collapsibleButtonFour.addEventListener("click", handleCollapsibleToggleFour);
collapsibleButtonFive.addEventListener("click", handleCollapsibleToggleFive);
collapsibleButtonSix.addEventListener("click", handleCollapsibleToggleSix);
