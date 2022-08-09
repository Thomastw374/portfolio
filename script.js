const collapsible = document.querySelector(".main__experience-dropdown");
const collapsibleButton = document.querySelector("#collapsible-button");


const handleCollapsibleToggle = () => {

    if (collapsible.style.display === "block") {
        collapsible.style.display = "none";
    } else {
        collapsible.style.display = "block"
    }
}


collapsibleButton.addEventListener("click", handleCollapsibleToggle)