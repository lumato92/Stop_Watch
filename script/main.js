let min=00;
let sec=0;
let mili=0;
let intervalID;
var list =document.getElementById("lapList");
const datos='prueba';

function stopWatch() {

    if (mili<100) {
        mili++;
        
    }
    else{
        mili=0;
        sec++;

        if (sec<59){
            
        }
        else{
            sec=0;
            min++;
        }
    
    }


    console.log("Min "+min +" Sec "+sec);

    showTime(min,sec,mili)
}

function showTime(minute,second,mili) {

    if(minute<10){
        document.getElementById("stopwatchMinute").innerHTML="0"+minute;
    }
     else{ 
        document.getElementById("stopwatchMinute").innerHTML=minute;
     }

    if(second<10){
        document.getElementById("stopwatchSecond").innerHTML="0"+second;
    }
    else{
        document.getElementById("stopwatchSecond").innerHTML=second;
    }
    if(mili<10){
        document.getElementById("stopwatchMilisec").innerHTML="0"+mili;
    }
    else{
        document.getElementById("stopwatchMilisec").innerHTML=mili;
    }
    
}


function startStopWatch() {
     intervalID = setInterval(stopWatch,"10");

}
function stopStopWatch() {
    clearInterval(intervalID);
    document.getElementById("start-btn").value="Resume"
    
}

function resetStopWatch() {

    min=0;
    sec=0;
    mili=0;
    clearInterval(intervalID);
    showTime("0","0","0");
    document.getElementById("start-btn").value="Start"

    
}

function lapStopWatch() {
    const list = document.getElementById('lapList');
    // const data = min+":"+sec+":"+mili;
    let data = document.getElementById("stopWatchMinute").innerText;
    const entry = document.createElement('li');
    entry.appendChild(document.createTextNode(data));
    list.appendChild(entry);
}
// var intervalID=setInterval(stopWatch,1000)
// console.log("Interval ID " + intervalID)