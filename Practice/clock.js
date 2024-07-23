function clock() {
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    if(seconds<10){
        seconds='0'+seconds;
    }
    else if (minutes<10) {
        minutes='0'+minutes;
    }
    else if (hours<10) {
        hours='0'+hours;
    };
    let timeString=`${hours}:${minutes}:${seconds}`
    console.clear();
    console.log(timeString);
};

setInterval(clock,1000);
clock();







// function clock() {
//     setInterval(() => {
//         let hours = 0, minutes = 0, seconds = 0;
//         if (seconds === 60) {
//             minutes++;
//             seconds = 0;
//             if (minutes === 60) {
//                 hours++;
//                 minutes = 0;
//             }
//         }
//         console.log(`${hours}:${minutes}:${seconds}`);
//         seconds++;
//     }, 1000);
// };
// clock();