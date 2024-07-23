// const generateRandNumsArray=(count, max)=>{
//     const rands=[];
//     while(rands.length<count){
//         const r=Math.floor(Math.random() * max)
//     }
//     if(rands.indexOf(r)=== -1){
//         rands.push(r);

//     }
//     return rands;

// };
const generateRandNumsArray = (count, max) => {
    const rands = [];
    while (rands.length < count) {
        const r = Math.floor(Math.random() * max);

        if (rands.indexOf(r) === -1) {
            rands.push(r);
        }
    }
    return rands;
};
