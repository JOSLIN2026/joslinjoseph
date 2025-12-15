document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Effect for Subtitle ---
    const subtitleElement = document.getElementById('typing-subtitle');
    const textToType = "ENGINEER • INTELLIGENT MAN";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            subtitleElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }

    // Start typing after a small delay
    setTimeout(typeText, 500);


    // --- Motivation Bar Animation ---
    // We use Intersection Observer to trigger animation when scrolled into view
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const barFill = entry.target;
                const targetWidth = barFill.getAttribute('data-width');
                barFill.style.width = targetWidth;
                observer.unobserve(barFill); // Only animate once
            }
        });
    }, observerOptions);

    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        bar.style.width = '0%'; // Reset to 0 initially
        observer.observe(bar);
    });

    // --- Live HUD Background Injection ---
    const hudContainer = document.createElement("div");
    hudContainer.className = "hud-background-container";

    // Create 3 rings
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement("div");
        ring.className = "hud-ring";
        hudContainer.appendChild(ring);
    }

    document.body.prepend(hudContainer);

});
