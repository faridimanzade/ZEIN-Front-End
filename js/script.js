let input = document.querySelectorAll(".inputField input");
let icons = document.querySelectorAll(".inputField i");


// ================================================ CHECKS INPUTS AND DEFINES ICONS TO THEM
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function () {

        if (input[i].value.length > 0) {
            icons[i].style.display = "block";

            icons[i].classList.remove("fa-times");
            icons[i].classList.remove("fal");
            icons[i].classList.add("fa-check");
            icons[i].classList.add("fas");
        }else{
            icons[i].classList.add("fa-times");
            icons[i].classList.add("fal");
            icons[i].classList.remove("fa-check");
            icons[i].classList.remove("fas");
        }
    });
}