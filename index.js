const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocuse();
        item.classList.add ('selected');
    })
    removeFocuse = () => {
        items.forEach(item => {
            item.classList.remove ('selected');
        })
    }

})

function openingCountdown() {
    const christmasDate = new Date ("September 25, 2026 8:00");
    const nowDay = new Date ();
    const diff = christmasDate - nowDay;
    const msInSec = 1000;
    const msInMin = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;
    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;
    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;
    const displayMinute = Math.floor((diff%msInHour)/msInMin);
    document.querySelector(".minutes").textContent = displayMinute;
    const displaySeconds = Math.floor((diff%msInMin)/msInSec);
    document.querySelector(".seconds").textContent = displaySeconds;
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        finalyOpen();
    }

}
let timerID = setInterval (openingCountdown, 1000);
function finalyOpen() {
    const heading = document.querySelector(".count");
    heading.textContent = "WE ARE FINALY OPEN!";
    heading.classList.add("color");
}