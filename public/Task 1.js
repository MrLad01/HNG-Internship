function currentTime() {
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date();
    var day = date.getDay();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var paddedSeconds = String(seconds).padStart(2, "0");
    var paddedMinutes = String(minutes).padStart(2, "0");
    var paddedHours = String(hours).padStart(2, "0");

    var ap = " ";
    if(hours < 12){
        ap = "AM"
    } else { 
        ap = "PM";
        hours = hours - 12;
    }

    var time = paddedHours + ":" + paddedMinutes + ":" + paddedSeconds + " " + ap;

    document.getElementById("currentUTCtime").innerHTML = time;
    document.getElementById("dayoftheweek").innerHTML = daysOfTheWeek[day];
}

setInterval(currentTime, 1000);
