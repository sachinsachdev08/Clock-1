setInterval(showTime, 1000);
        am_pm = "AM";
        const hour_ = document.querySelector('.hour');
        const min_ = document.querySelector('.minutes')
        const sec_ = document.querySelector('.seconds')
        const am_pm_1 = document.querySelector('.am_pm')


        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour_.innerHTML = hour < 10 ? "0" + hour : hour;
            min_.innerHTML = min < 10 ? "0" + min : min;
            sec_.innerHTML = sec < 10 ? "0" + sec : sec;
            am_pm_1.innerHTML = am_pm;
  
          

            
        }
    showTime();

var status1 = document.querySelector('.item5');
if(am_pm === "AM" && 12 > hour_ >=4 ){
    status1.innerHTML = "Good Morning";
}
else if(am_pm === "PM" && 5 > hour_ >=12){
    status1.innerHTML = "Good Afternoon";
}
else if(am_pm === "PM" && 8 > hour_ >=5){
    status1.innerHTML = "Good Afternoon";
}
else{
    status1.innerHTML = "Good Night";
}
