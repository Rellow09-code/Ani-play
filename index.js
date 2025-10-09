function goTo(fileName){
    try{
        window.location.href = fileName;
    }catch(error){
        console.log(error);
        alert("corrupted fileName")
    };
}

function enableHeaderScrollEffect() {
    const header = document.querySelector(".header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        // Scrolling down → hide
        if (window.scrollY > lastScrollY) {
            header.classList.add("header--hidden");
        } 
        // Scrolling up → show
        else {
            header.classList.remove("header--hidden");
        }

        lastScrollY = window.scrollY;
    });
}

// Call the function after everything is loaded
document.addEventListener("DOMContentLoaded", enableHeaderScrollEffect);
