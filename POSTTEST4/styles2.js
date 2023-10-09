document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-button");
    const container = document.querySelector(".container");
    const cards = document.querySelectorAll(".card");
    const fleet = document.querySelector(".fleet")
    const services = document.querySelector(".services")
    const contact = document.querySelector(".contact")
    const profileImage = document.getElementById("profile-image");
    const body = document.body;

    themeButton.addEventListener("click", function () {
        container.classList.toggle("dark-theme-container");
        for (var card of cards) {
            card.classList.toggle("dark-theme-card");            
        }
    });

    fleet.addEventListener("click", function(){
        alert("Feature is not available at the moment. Coming soon...");
    });

    services.addEventListener("click", function(){
        alert("Feature is not available at the moment. Coming soon...");
    });

    contact.addEventListener("click", function(){
        alert("Feature is not available at the moment. Coming soon...");
    });

    profileImage.addEventListener("click", function(){
        if (body.style.backgroundImage === 'url("global-express.jpg")') {
            body.style.backgroundImage = 'url("bombardier-global-7500.jpg")'; // Change to the original background image URL
        } else {
            body.style.backgroundImage = 'url("global-express.jpg")'; // Change to the new background image URL
        }


    });
});
