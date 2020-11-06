function myFunction() {
    var size = document.getElementById("size").value;
    var speed = document.getElementById("speed").value;
    var fastCal=0;
    var spaceCount=0; 
    var sentencesCount=0;
    var hours=0,days=0,min=0,sec=0;
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
     secCal=(secCal*60);
     secCal = secCal.toFixed(3);
     min = (secCal + "").split(".")[0];
     
     thrCal = (secCal + "").split(".")[1];
     thrCal=thrCal*0.001;
     thrCal=thrCal*60;
     thrCal = thrCal.toFixed(3);
     sec = (thrCal + "").split(".")[0];
     
   
    // down.innerHTML = (n + "").split(".")[1];

    document.getElementById("days").innerHTML = ""+days;
    document.getElementById("hours").innerHTML = " : "+ hours+" : ";
    document.getElementById("min").innerHTML = ""+ min;
    document.getElementById("sec").innerHTML = " : "+ sec;

}
