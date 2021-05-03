function GetTime(){
    var now=new Date();
    var saat=now.getHours();
    var dakika=now.getMinutes();
    var saniye=now.getSeconds();
    var tarih=now.getDate();
    var ay=now.getMonth()+1;
    var yıl=now.getFullYear();


            (hour<10) ? document.getElementById("hour").innerHTML="0"+saat : 
              document.getElementById("hour").innerHTML=saat;

            (minute<10) ? document.getElementById("minute").innerHTML="0"+dakika :
             document.getElementById("minute").innerHTML=dakika;
            (second<10) ? document.getElementById("second").innerHTML="0"+saniye :
             document.getElementById("second").innerHTML=saniye;

document.getElementById("date").innerHTML= day+" / "+month+" / "+year;
 
}

setInterval(function(){GetTime();},1000);
