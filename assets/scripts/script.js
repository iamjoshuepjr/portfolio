// This function let me know when I'm choosing a option
function chosen(link) {
    let option = document.querySelectorAll('#links a');
    option[0].className = "";
    option[1].className = "";
    option[2].className = "";
    option[3].className = "";
    option[4].className = "";
    option[5].className = "";
    links.className = "chosen";

    // responsive menu will hidden when click on an option
    let x = document.getElementById("nav");
    x.className = "";
}

// This function let me show the responsive menu
function menuResponsive(){
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// progress bar animation
window.scroll = function() {
    skillsEfect();
}

function skillsEfect() {
    let skills = document.getElementById("skills");
    let skillDistance = window.innerHeight = skills.getBoundingClientRect().top;
    
    if(skillDistance == 300){
        document.getElementById("html").classList.add("progress-bar1");
        document.getElementById("javascript").classList.add("progress-bar2");
        document.getElementById("java").classList.add("progress-bar3");        
        document.getElementById("python").classList.add("progress-bar4");
        document.getElementById("ddbb").classList.add("progress-bar5");
        document.getElementById("react").classList.add("progress-bar6");
    }
}
