const canvas = document.getElementById('sandCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sandParticles = [];
const numberOfParticles = 900; // Número de partículas de areia

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 0.1 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 2 + 1;
        this.color = 'rgba(96, 64, 32, 0.8)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;


        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


function initParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
        sandParticles.push(new Particle());
    }
}


function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sandParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initParticles();
animateParticles();
