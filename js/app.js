let seconds = 0;
const timePassing = setInterval(() => {
    seconds++;
    // inside timer: hunger, age, tiredness
    if(seconds > 10){
        clearInterval(timePassing);
        console.log("Done");
    }
    if(){}
}