const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const scoreSpan = document.querySelector('#scoreSpan');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const car = {
    x: 270,
    y: 400,
    w: 70,
    h: 15,
    dx: 5,
}

function game() {
    update();
    render();
    requestAnimationFrame(game);
}
requestAnimationFrame(game);

function update() {

}

// -------------------RENDER----------------------
function renderCar() {
    context.beginPath();

    context.rect(car.x, car.y, car.w, car.h);
    context.fillStyle = "black";
    context.fill();

    context.closePath();
}

function render() {
    renderCar();
}