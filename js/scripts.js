function myFunction() {
    var size = document.getElementById("size").value;
    var speed = document.getElementById("speed").value;
    var fastCal=0;
    var spaceCount=0; 
    var sentencesCount=0;
    var hours=00,days=00,min=00,sec=00;
    var dot='.';
    //var re = /[.!?]/;




     fastCal=(size*1024)/(speed/8);
     fastCal=((fastCal/60)/60);
     
     if(fastCal>24){
        thrdCal=(fastCal+1)/24;
        days=(thrdCal + "").split(".")[0];
        thrdCal = thrdCal.toFixed(8);
        
        fastCal=(thrdCal + "").split(".")[1];
        
        fastCal=fastCal*0.00000001;
        
        fastCal=fastCal*24;
       // sentencesCount=fastCal;
        //fastCal=

     }
     fastCal = fastCal.toFixed(5);
     hours=(fastCal + "").split(".")[0];
    


     secCal = (fastCal + "").split(".")[1];
     secCal=secCal*0.00001;
     secCal=(secCal*60)+7;
     if(secCal>60){
        secCal=secCal-7;
     }

     secCal = secCal.toFixed(3);
      
     min = (secCal + "").split(".")[0];
     
     thrCal = (secCal + "").split(".")[1];
     thrCal=thrCal*0.001;
     thrCal=thrCal*60;
     thrCal = thrCal.toFixed(3);
     sec = (thrCal + "").split(".")[0];
     

    if(hours == 'NaN'){
        hours=00;
    }
   if(min == 'NaN'){
        min=00;
    }
    if(sec == 'NaN'){
        sec=00;
    }
    // down.innerHTML = (n + "").split(".")[1];

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML =  hours;
    document.getElementById("min").innerHTML =  min;
    document.getElementById("sec").innerHTML =  sec;

}


function copyEmail(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    alert("Copied my Email : " + tempInput.value);
    document.body.removeChild(tempInput);

   
  }