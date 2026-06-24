// Smooth Animation on Page Load

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 0 20px rgba(212,175,55,0.4)";
    }
    else{
        header.style.boxShadow = "none";
    }

});

// Service Cards Hover Effect

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// Welcome Message

console.log("Welcome to Babar Web Agency");
