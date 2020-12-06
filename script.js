function check(){
  
var p1=document.quiz.p1.value;
var p2=document.quiz.p2.value;
var p3=document.quiz.p3.value;
var p4=document.quiz.p4.value;
var p5=document.quiz.p5.value;
var p6=document.quiz.p6.value;
var p7=document.quiz.p7.value;
var p8=document.quiz.p8.value;
var p9=document.quiz.p9.value;
var p10=document.quiz.p10.value;
var p11=document.quiz.p11.value;
var p12=document.quiz.p12.value;
var punkty=0;


    if (p1=="4"){punkty++;}
    if (p2=="p"){punkty++;}
    if (p3=="2"){punkty++;}
    if (p4=="1"){punkty++;}
    if (p5=="p"){punkty++;}
    if (p6=="1"){punkty++;}
    if (p7=="2"){punkty++;}
    if (p8=="3"){punkty++;}
    if (p9=="4"){punkty++;}
    if (p10=="1"){punkty++;}
    if (p11=="3"){punkty++;}
    if (p12=="2"){punkty++;}



var messages=["Gratulacje!","Jest dobrze.","Przykro nam..."];
var pictures=["https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif","https://media.giphy.com/media/tIeCLkB8geYtW/source.gif","https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif"];

var range;

  if(punkty<5){
      range=2;
  }
  
  if(punkty>4&&punkty<10){
      range=1;
  }
  
  if(punkty>9){
      range=0;
  }


document.getElementById("podsumowanie").style.visibility="visible";

var slowo;
document.getElementById("wiadomosc").innerHTML=messages[range];
    if(punkty==0){slowo=" punktów."}
    if(punkty==1){slowo=" punkt"}
    if(punkty>1 && punkty<5){slowo=" punkty."}
    if(punkty>5){slowo=" punktów."}
document.getElementById("punkty").innerHTML="Uzyskałeś/aś "+punkty+slowo;
document.getElementById("gif").src=pictures[range];
document.getElementById("link").innerHTML="Poprawne odpowiedzi: <a href='poprawne.html'>LINK</a>";


}


