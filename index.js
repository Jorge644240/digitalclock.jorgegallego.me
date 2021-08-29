const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let fullDate = new Date();
let day = days[fullDate.getDay()];
let time = `${fullDate.toLocaleString().split(",")[1].trim()}`;
let clock = `${day} ${time}`;
document.querySelector(".clock p").innerHTML = clock;

setInterval(() => {
    fullDate = new Date();
    day = days[fullDate.getDay()];
    time = `${fullDate.toLocaleString().split(",")[1].trim()}`;
    clock = `${day} ${time}`;
    document.querySelector(".clock p").innerHTML = clock;
}, 1000);