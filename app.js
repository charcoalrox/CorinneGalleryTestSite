function expandBurger(y) {

    // Fade burger into "x"
    y.classList.toggle("change");

    // Toggle between displaying overlay and hiding it
    var x = document.getElementById("burger-contents");

    if (getComputedStyle(x).display === "none") {
        x.style.display="block";
    } else {
        x.style.display = "none";
    }
} 

async function displayArt(self) {

    var displayed = document.getElementById("displayBlock")

    title = self.src;
    description = self.src

    title = title.split("/").pop().split('?')[0]; // separate file path from source
    title = title.replaceAll("%20", " "); // turn spaces into proper white space
    title = title.split(".").slice(0, -1).join(); // Remove file extension from filepath

    // Aquire description from labeled text file
    description = description.split(".").slice(0, -1).join() + ".txt";

    

    fetch(description)
        .then((res) => res.text())
        .then((text) => {
            if (text){
                displayed.getElementsByClassName("displayDescriptionText")[0].textContent = text;
            } else {
                displayed.getElementsByClassName("displayDescriptionText")[0].textContent = "poop"
            }
        })
        .catch((e) => console.error(e));

    displayed.getElementsByClassName("displayImg")[0].src=self.src; // popup to display gallery item in full resolution
    displayed.getElementsByClassName("displayTitleText")[0].textContent = title;

    displayed.style.display="block";
}

function hideElement(self){
    self.style.display="none";
}