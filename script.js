document.addEventListener("DOMContentLoaded", function () {

    //   welcome message based on the time
    const welcome = document.querySelector("h2");
    const hour = new Date().getHours();

    if (welcome) {
        if (hour < 12) {
            welcome.textContent = "Good morning! Welcome to my website";
        } else if (hour < 17) {
            welcome.textContent = "Good afternoon! Welcome to my website";
        } else {
            welcome.textContent = "Good evening! Welcome to my website";
        }
    }

    // profile picture when clicked
    const picture = document.querySelector("img");

    if (picture) {
        picture.style.cursor = "pointer";

        picture.addEventListener("click", function () {
            if (picture.style.width === "500px") {
                picture.style.width = "300px";
                picture.style.height = "200px";
            } else {
                picture.style.width = "300px";
                picture.style.height = "300px";
            }
        });
    }

});
