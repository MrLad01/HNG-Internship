function currentTime() {
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date();
    var year = date.getUTCFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var offset = date.getTimezoneOffset() * 60 * 1000;

    var milliseconds = date.getTime();
    var time = milliseconds + offset;


    document.getElementById("currentUTCtime").innerHTML = time + " " +"milliseconds";
    document.getElementById("dayoftheweek").innerHTML = daysOfTheWeek[day];
}

setInterval(currentTime, 1000);
