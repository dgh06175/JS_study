// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("body h2");
function setWindowColor() {
    if (window.innerWidth >= 900) {
        document.body.bgColor = "gold";
    }
    else if (window.innerWidth >= 600) {
        document.body.bgColor = "#9370d8";
    }
    else {
        document.body.bgColor = "#6495ed";
    }
}

title.style.color = "white";
setWindowColor();
window.addEventListener("resize", setWindowColor);