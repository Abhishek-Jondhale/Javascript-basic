let n=5;
for(i=n; i>=1; i--){
    let star ="* ";
    let space="  ";
    console.log(space.repeat(n-i)+star.repeat(2*i-1));
}
