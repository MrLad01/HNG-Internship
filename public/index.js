function currentTime() {
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date();
    var year = date.getUTCFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    // var paddedSeconds = String(seconds).padStart(2, "0");
    // var paddedMinutes = String(minutes).padStart(2, "0");
    
    // var ap = " ";
    // if(hours < 12){
    //     ap = "AM"
    // } else { 
    //     ap = "PM";
    //     hours = hours - 12;
    //     var paddedHours = String(hours).padStart(2, "0");
    // }

    // var time = paddedHours + ":" + paddedMinutes + ":" + paddedSeconds + " " + ap;

    // var milliseconds = (year *  + month * 1036800 + day* 86400 + hours * 3600 + minutes * 60 + seconds) * 1000;
    var milliseconds = date.getTime();


    document.getElementById("currentUTCtime").innerHTML = milliseconds + " " +"milliseconds";
    document.getElementById("dayoftheweek").innerHTML = daysOfTheWeek[day];
}

setInterval(currentTime, 1);
