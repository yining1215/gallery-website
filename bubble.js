let bubbles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-container');
    for (let i = 0; i < 20; i++) { // Adjust number of bubbles
        bubbles.push(new Bubble());
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    bubbles.forEach(bubble => {
        bubble.move();
        bubble.show();
        bubble.avoidMouse(mouseX, mouseY);
    });
}

class Bubble {
    constructor() {
        this.size = random(50, 100); // Adjust size range as needed
        this.x = random(this.size / 2, width - this.size / 2);
        this.y = random(this.size / 2, height - this.size / 2);
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reverse direction if bubble hits the edge, considering its size
        if (this.x <= this.size / 2 || this.x >= width - this.size / 2) {
            this.speedX *= -1;
            this.x += this.speedX; // Move bubble back in bounds to prevent sticking
        }
        if (this.y <= this.size / 2 || this.y >= height - this.size / 2) {
            this.speedY *= -1;
            this.y += this.speedY; // Move bubble back in bounds to prevent sticking
        }
    }

    show() {
        noStroke();
        fill(255, 255, 255, 20); // Light color with transparency
        circle(this.x, this.y, this.size);
    }

    avoidMouse(mx, my) {
        let d = dist(mx, my, this.x, this.y);
        if (d < 150) { // Mouse avoidance distance
            this.x += this.speedX * 5;
            this.y += this.speedY * 5;
        }
    }
}
