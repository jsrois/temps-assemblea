const REFRESH_TIMEOUT = 60 * 1000;
let count = 0;
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");

const showTime = () => {

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;

    let clock = document.getElementById("clock");
    clock.innerHTML = time;

    showEndTime();
    setTimeout(showTime, REFRESH_TIMEOUT);
}

upButton.addEventListener("click", () => { count++;showCount(); })
downButton.addEventListener("click", () => { if (count > 0) { count--;showCount() } })

const showCount = () => {
    document.getElementById("count").innerHTML = count + " torns";
    showEndTime();
}

const showEndTime = () => {
    if (count === 0) {
        return;
    }
    const now = new Date();
    let endTimeNow = new Date();
    endTimeNow.setHours(21);
    endTimeNow.setMinutes(00);
    let endTimeText = (endTimeNow - now)/(60*1000);
    document.getElementById("end-time").innerHTML = Math.round(endTimeText / count) + " minuts per torn";
}


const init = () =>{

    showEndTime();
    showCount()
    showTime();
}
init();