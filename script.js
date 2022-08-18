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
const collapsibleButtonThree = document.querySelector(
  "#collapsible-button-three"
);
const collapsibleButtonFour = document.querySelector(
  "#collapsible-button-four"
);
const collapsibleButtonFive = document.querySelector(
  "#collapsible-button-five"
);
const collapsibleButtonSix = document.querySelector("#collapsible-button-six");

const handleCollapsibleToggleOne = () => {
  if (collapsibleOne.style.display === "block") {
    collapsibleOne.style.display = "none";
    collapsibleButtonOne.src = "./images/ant-design_plus-outlined.png";
  } else {
    collapsibleOne.style.display = "block";
    collapsibleButtonOne.src = "./images/vector-2.png";
    
  }
};

const handleCollapsibleToggleTwo = () => {
  if (collapsibleTwo.style.display === "block") {
    collapsibleTwo.style.display = "none";
    collapsibleButtonTwo.src = "./images/ant-design_plus-outlined.png";
  } else {
    collapsibleTwo.style.display = "block";
    collapsibleButtonTwo.src = "./images/vector-2.png";
  }
};

const handleCollapsibleToggleThree = () => {
  if (collapsibleThree.style.display === "block") {
    collapsibleThree.style.display = "none";
    collapsibleButtonThree.src = "./images/ant-design_plus-outlined.png";
  } else {
    collapsibleThree.style.display = "block";
    collapsibleButtonThree.src = "./images/vector-2.png";
  }
};

const handleCollapsibleToggleFour = () => {
  if (collapsibleFour.style.display === "block") {
    collapsibleFour.style.display = "none";
    collapsibleButtonFour.src = "./images/ant-design_plus-outlined.png";
  } else {
    collapsibleFour.style.display = "block";
    collapsibleButtonFour.src = "./images/vector-2.png";
  }
};

const handleCollapsibleToggleFive = () => {
  if (collapsibleFive.style.display === "block") {
    collapsibleFive.style.display = "none";
    collapsibleButtonFive.src = "./images/ant-design_plus-outlined.png";
  } else {
    collapsibleFive.style.display = "block";
    collapsibleButtonFive.src = "./images/vector-2.png";
  }
};

const handleCollapsibleToggleSix = () => {
  if (collapsibleSix.style.display === "block") {
    collapsibleSix.style.display = "none";
    collapsibleButtonSix.src = "./images/ant-design_plus-outlined.png";
  } else {
    collapsibleSix.style.display = "block";
    collapsibleButtonSix.src = "./images/vector-2.png";
  }
};

collapsibleButtonOne.parentElement.addEventListener("click", handleCollapsibleToggleOne);
collapsibleButtonTwo.addEventListener("click", handleCollapsibleToggleTwo);
collapsibleButtonThree.addEventListener("click", handleCollapsibleToggleThree);
collapsibleButtonFour.addEventListener("click", handleCollapsibleToggleFour);
collapsibleButtonFive.addEventListener("click", handleCollapsibleToggleFive);
collapsibleButtonSix.addEventListener("click", handleCollapsibleToggleSix);
