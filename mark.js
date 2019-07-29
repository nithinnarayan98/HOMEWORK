function sts(s1,s2,s3,s4,s5,s6 )
{
    if(s1=="f"||s2=="f"||s3=="f"||s4=="f"||s5=="f"||s6=="f")
    {
        return "fail";
    }
    else
    
        return "pass";
    }

    function gr(a,b)
    {
        var p=(a/b)*100;
        if(p>=95){
            return "s";
        }
        if(95>p && p>=90){
            return "a+";
        }
        if(90>p && p>=85){
            return "a";
        }
        if(p<85 && p>=80){
            return "b+";
        }
        if(p<80 && p>=75){
            return "b";
        }
        if(p<75 && p>=70){
            return "c+";
        }
        if(p<70 && p>=65){
            return "c";
        }
        if(p<65 && p>=60){
            return "d+";
        }
        if(p<60 && p>=55){
            return "d";
        }
        if(p<55 && p>=50){
            return "e+";
        }
        if(p<50 && p>=45){
            return "e";
        }
        else return "f";
        }

function gm()
{
var x1=document.getElementById("name").value;
document.getElementById("resname").innerHTML=x1;
var x2=document.getElementById("sem").value;
document.getElementById("ressem").innerHTML=x2;
var x3=document.getElementById("exc").value;
document.getElementById("rexc").innerHTML=x3;
var x4=document.getElementById("s1n").value;
document.getElementById("res1").innerHTML=x4;
var x5=parseFloat(document.getElementById("s1m").value);
document.getElementById("res2").innerHTML=x5;
var x6=parseFloat(document.getElementById("s1t").value);
document.getElementById("res3").innerHTML=x6;
var s1=gr(x5,x6);
document.getElementById("res4").innerHTML=s1;

var x7=document.getElementById("s2n").value;
document.getElementById("res5").innerHTML=x7;
var x8=parseFloat(document.getElementById("s2m").value);
document.getElementById("res6").innerHTML=x8;
var x9=parseFloat(document.getElementById("s2t").value);
document.getElementById("res7").innerHTML=x9;
var s2=gr(x8,x9);
document.getElementById("res8").innerHTML=s2;

var x10=document.getElementById("s3n").value;
document.getElementById("res9").innerHTML=x10;
var x11=parseFloat(document.getElementById("s3m").value);
document.getElementById("res10").innerHTML=x11;
var x12=parseFloat(document.getElementById("s3t").value);
document.getElementById("res11").innerHTML=x12;
var s3=gr(x11,x12);
document.getElementById("res12").innerHTML=s3;

var x13=document.getElementById("s4n").value;
document.getElementById("res13").innerHTML=x13;
var x14=parseFloat(document.getElementById("s4m").value);
document.getElementById("res14").innerHTML=x14;
var x15=parseFloat(document.getElementById("s4t").value);
document.getElementById("res15").innerHTML=x15;
var s4=gr(x14,x15);
document.getElementById("res16").innerHTML=s4;

var x16=document.getElementById("s5n").value;
document.getElementById("res17").innerHTML=x16;
var x17=parseFloat(document.getElementById("s5m").value);
document.getElementById("res18").innerHTML=x17;
var x18=parseFloat(document.getElementById("s2t").value);
document.getElementById("res19").innerHTML=x18;
var s5=gr(x17,x18);
document.getElementById("res20").innerHTML=s5;

var x19=document.getElementById("s6n").value;
document.getElementById("res21").innerHTML=x19;
var x20=parseFloat(document.getElementById("s2m").value);
document.getElementById("res22").innerHTML=x20;
var x21=parseFloat(document.getElementById("s2t").value);
document.getElementById("res23").innerHTML=x21;
var s6=gr(x20,x21);
document.getElementById("res24").innerHTML=s6;

var p=sts(s1,s2,s3,s4,s5,s6 );
document.getElementById("status").innerHTML=p;
document.getElementById("res25").innerHTML=p;

}