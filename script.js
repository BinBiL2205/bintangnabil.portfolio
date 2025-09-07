// Smooth scrolling dan navbar aktif otomatis
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

