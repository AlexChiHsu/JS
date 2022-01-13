const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const second = ((seconds / 60) * 360) + 90;
    sec.style.transform = `rotate(${second}deg)`;


    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    min.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
