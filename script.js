    // 🌸 Floating bubbles background animation
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.width = Math.random() * 25 + 10 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = Math.random() * 10 + 's';
        bubble.style.animationDuration = 10 + Math.random() * 10 + 's';
        particlesContainer.appendChild(bubble);
    }
    }

    // 💫 Button click feedback
    const ctaBtn = document.getElementById('ctaBtn');
    if (ctaBtn) {
    ctaBtn.addEventListener('click', function () {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
        this.style.transform = 'scale(1)';
        }, 150);
    });
    }

    // 🌈 Floating parallax elements
    document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((el, i) => {
        const speed = (i + 1) * 0.03;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
    });

    // 👁️ Fade-in when scrolled into view
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        }
    });
    }, observerOptions);

    // ✨ Page transition overlay (soft fade + upward slide)
    document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("page-transition");
    document.body.appendChild(overlay);

    // Entrance animation (reveal)
    setTimeout(() => {
        overlay.classList.remove("active");
    }, 300);

    // Handle outgoing animation
    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
        link.addEventListener("click", e => {
        const target = link.getAttribute("href");
        if (target && !target.startsWith("#") && !target.startsWith("mailto:")) {
            e.preventDefault();
            overlay.classList.add("active");
            setTimeout(() => {
            window.location.href = target;
            }, 700);
        }
        });
    });
    });
