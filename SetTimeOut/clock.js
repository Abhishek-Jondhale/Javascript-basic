let hours = 0;
let minute = 0;
let second = 0;
let interval;

function time ()
{
    interval = setInterval(() => {
        second++;
    if(second ==60)
        {
            second = 0;
         minute++;
         if(minute ==60)
            {
                minute =0;
                hours++;
            }
        }
        console.log(hours + " : " + minute + " : " + second);
    }, 1000);
}

time();