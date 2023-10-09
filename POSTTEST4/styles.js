document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-button");
    const container = document.querySelector(".container");
    const cards = document.querySelectorAll(".card");
    const fleet = document.querySelector(".fleet")
    const services = document.querySelector(".services")
    const hc1 = document.querySelector(".HC1")
    const hc2 = document.querySelector(".HC2")
    const hc3 = document.querySelector(".HC3")
    const hc4 = document.querySelector(".HC4")
    const pc1 = document.querySelector(".PC1")
    const pc2 = document.querySelector(".PC2")
    const pc3 = document.querySelector(".PC3")
    const pc4 = document.querySelector(".PC4")
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

    if(hc1)
    hc1.addEventListener("click", function(){
        if(pc1.style.display == "none"){
            pc1.style.display = "block";
        }
        else{
            pc1.style.display = "none"
        }
        
    })

    if(hc2)
    hc2.addEventListener("click", function(){
        if(pc2.style.display == "none"){
            pc2.style.display = "block";
        }
        else{
            pc2.style.display = "none"
        }
        
    })

    if(hc3)
    hc3.addEventListener("click", function(){
        if(pc3.style.display == "none"){
            pc3.style.display = "block";
        }
        else{
            pc3.style.display = "none"
        }
        
    })

    if(hc4)
    hc4.addEventListener("click", function(){
        if(pc4.style.display == "none"){
            pc4.style.display = "block";
        }
        else{
            pc4.style.display = "none"
        }
        
    })

    if(profileImage)
    profileImage.addEventListener("click", function(){
        if (body.style.backgroundImage === 'url("global-express.jpg")') {
            body.style.backgroundImage = 'url("bombardier-global-7500.jpg")';
        } else {
            body.style.backgroundImage = 'url("global-express.jpg")';
        }


    });
});
