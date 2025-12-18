// ✅ Use latest EmailJS CDN
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
document.head.appendChild(script);

script.onload = () => {

    // Initialize EmailJS
    emailjs.init("O8N2SEVXgeqBeQ4Pw");

    // Photo Upload
    const photoInput = document.getElementById('photoInput');
    const profilePhoto = document.getElementById('profilePhoto');
    const placeholder = document.getElementById('placeholder');

    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                placeholder.style.display = 'none';

                let img = profilePhoto.querySelector('img');
                if (!img) {
                    img = document.createElement('img');
                    profilePhoto.insertBefore(img, profilePhoto.firstChild);
                }
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Skill Bar Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                    bar.style.width = bar.style.width;
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

    // ✅ CONTACT FORM WORKING CODE
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_izju7xl",        // Your Service ID
            "template_vrd8jms",       // Your Template ID
            this
        ).then(() => {
            alert("✅ Message Sent Successfully!");
            document.getElementById('contactForm').reset();
        }).catch((error) => {
            alert("❌ Error: " + JSON.stringify(error));
        });
    });
};

