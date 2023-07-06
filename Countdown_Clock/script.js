let timeRemaining = 6;

let curTime = document.getElementById("timer");

function decreaser() {
    if (timeRemaining > 0){
        timeRemaining -= 1;
        curTime.innerHTML = timeRemaining;
    }
    else{
        curTime.innerHTML = "Times up!";
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
        clearInterval(myTimer);
    }
    
 }

let myTimer = setInterval(decreaser, 1000);

