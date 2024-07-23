// let time =setTimeout( fun ,3000);
// function fun() {
//     console.log("hello ");
// }


// const myTimeout = setTimeout(Birthday, 5000);

// function Birthday() {
//   console.log("happy Birthday");
// }

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }

const time = console.log("clock");

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log(clockStr);

    // Set a timeout for one minute
    setInterval(updateTime, 60000);
}

updateTime();