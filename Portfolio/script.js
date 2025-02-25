document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("fade-in");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
