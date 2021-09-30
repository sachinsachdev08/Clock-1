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


            var status1 = document.querySelector('.item5');
    if(am_pm === "AM" && hour >=4 && hour < 12){
        status1.innerHTML = "Good Morning";
    }
    else if(am_pm === "PM" && hour >=1 && hour < 5){
        status1.innerHTML = "Good Afternoon";
        
    }
    else if(am_pm === "PM" && hour >=5 && hour < 8){
        status1.innerHTML = "Good Evening";
    }
    else{
        status1.innerHTML = "Good Night";

}
  
          

            
        }
    showTime();



let party_1 = document.getElementById('button1');
party_1.addEventListener("click",partyEnable);
party_1.addEventListener("dblclick",partyDisable);

let partyFlag = 0;
function partyEnable() {
    

    if(document.getElementById('button1').innerHTML === "Party Time"){
        document.getElementById('home').src = "party2.svg"
        document.getElementById('sentence').innerHTML = "Party time!!!";
        document.getElementById('button1').innerHTML = "End Party";
        partyFlag = 1;
    }
    else if(document.getElementById('button1').innerHTML === "End Party"){
        document.getElementById('home').src = "maxresdefault.jpg"
    document.getElementById('sentence').innerHTML = "";
    document.getElementById('home').style.paddingTop = "0px";
    document.getElementById('button1').innerHTML = "Party Time";
    partyFlag = 0;
    }

}

// function partyDisable() {
//     document.getElementById('home').src = "maxresdefault.jpg"
//     document.getElementById('sentence').innerHTML = "";
//     document.getElementById('home').style.paddingTop = "0px";
//     document.getElementById('button1').innerHTML = "Party Time";
//     partyFlag = 0;

// }

document.getElementById('drop1').addEventListener("change",Check);


let startInterval1;
let startInterval2;
let startInterval3;
let endInterval1;
let endInterval2;
let endInterval3;

function Check() {
    let wakeUptime = drop1.options[drop1.selectedIndex].value.split("-");


    if(wakeUptime[0] === startInterval2 || wakeUptime[0] === startInterval3 ){
        alert("Please Select a different range");
        drop1.value = "null";
        console.log('1')
    }
    else{
        
        startInterval1 = wakeUptime[0];
        endInterval1 = wakeUptime [1];
        console.log(startInterval1);
        console.log(endInterval1)
    }
    document.getElementById('item5').style.display = "block";
}


document.getElementById('drop2').addEventListener("change",Check1);

function Check1() {
    let lunchTime  = drop2.options[drop2.selectedIndex].value.split("-");

    if(lunchTime[0] === startInterval1 || lunchTime[0] === startInterval3 ){
        alert("Please Select a different range");
        drop2.value = "null";
    }
    else{
        startInterval2 = lunchTime[0];
        endInterval2 = lunchTime [1];
    }
    document.getElementById('item5').style.display = "block";

}

document.getElementById('drop3').addEventListener("change",Check2);

function Check2() {
    let napTime  = drop3.options[drop3.selectedIndex].value.split("-");

    if(napTime[0] === startInterval2 || napTime[0] === startInterval3 ){
        alert("Please Select a different range");
        drop2.value = "null";
    }
    else{
        startInterval3 = napTime[0];
        endInterval3 = napTime [1];
    }
    document.getElementById('item5').style.display = "block";

}

let val1  = drop1.options[drop1.selectedIndex].value;
let val2  = drop2.options[drop2.selectedIndex].value;
let val3  = drop3.options[drop3.selectedIndex].value;
let image = document.getElementById('home');
let sentence = document.getElementById('sentence');
function changeImg() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    if(partyFlag === 0){
        if(hour>=startInterval1 && hour<endInterval1){
            image.src = "3.png";
            sentence.innerHTML = "Wake Up..."
        }
        else if(hour>=startInterval2 && hour<endInterval2){
            image.src = "home.png";
            sentence.innerHTML = "Lets have some lunch..."
         }
        else if(hour>=startInterval3 && hour<endInterval3){
            image.src = "2.png";
            sentence.innerHTML = "Have a good sleep..."

        }
        
    }
}

setInterval(changeImg,1000)