const collapsible = document.querySelector(".main__experience-dropdown");
const collapsibleButton = document.querySelector("#collapsible-button");


const handleCollapsibleToggle = () => {

    
}


collapsibleButton.addEventListener("click", function() {
    if (collapsible.style.display === "none") {
      collapsible.style.display = "block";
    } else {
      collapsible.style.display = "none";
    }
})