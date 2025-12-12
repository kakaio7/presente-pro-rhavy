const btn = document.getElementById("openBtn");
const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");
const confettiContainer = document.getElementById("confetti");

let opened = false;

btn.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    giftBox.classList.add("open");

    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 600);

    createConfetti();
});

/* CONFETES */
function createConfetti() {
    const colors = ["#ffea00", "#ff1744", "#00e5ff", "#b388ff", "#69f0ae"];

    for (let i = 0; i < 200; i++) {
        const conf = document.createElement("div");

        const size = Math.random() * 8 + 4;
        conf.style.position = "absolute";
        conf.style.width = size + "px";
        conf.style.height = size + "px";
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.top = "-10px";
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.opacity = Math.random();
        conf.style.transition = "top 3s linear, transform 3s linear";

        confettiContainer.appendChild(conf);

        setTimeout(() => {
            conf.style.top = window.innerHeight + "px";
            conf.style.transform = "rotate(720deg)";
        }, 10);

        setTimeout(() => conf.remove(), 3100);
    }
}

/* FUNDO COM PARTÍCULAS */
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * 1 + 0.5
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();

        p.y += p.d;
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();
