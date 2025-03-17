 // DARK MODE TOGGLE
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const logoImg = document.getElementById("logo-img");

    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add("dark-mode");
            logoImg.src = "images/bsdesignr.png"; 
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            logoImg.src = "images/bsdesign.png"; 
            localStorage.setItem("theme", "light");
        }
    }

//navigation
    // Load theme from local storage
    setDarkMode(localStorage.getItem("theme") === "dark");

    darkModeToggle.addEventListener("click", function () {
        setDarkMode(!body.classList.contains("dark-mode"));
    });

    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");
    
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    
        // Close menu when clicking outside (for mobile users)
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("show");
            }
        });
    });
