window.alert("Bolj bna;");


//-------------------Bodlogo:1------------------

document.writeln("<h2> 1-р Бодлого</h2>");
var i, n, min, max, n1;
i = 1;
n1 = window.prompt("number:" + i + " ");
n = parseInt(n1);
document.writeln(" " + n + " ");
i = 2;
min = n;
max = n;
while(i <= 5)
{
	n1 = window.prompt("number: " + i +" ");
	n = parseInt(n1);
    if(max < n){
    	max = n;
    }

    if(min > n){
    	min = n;
    }
    document.writeln(" " + n + " ");
    i++;
}

document.writeln("<p> max = " + max +"</p>");
document.writeln("<p> min = " + min +"</p>");

// -----------------Bodlogo:2------------------

document.writeln("<h2> 2-р Бодлого</h2>");
var vne, Niit_vne = 0, Dundaj_vne, a1;
var i;
a1 = window.prompt("1 - р барааны үнэ: ");
vne = parseInt(a1);
document.writeln(" "+ vne + " ");
 Niit_vne = vne;
 i = 2;
while(vne != 0)
{
    a1 = window.prompt("" + i + " - р барааны үнэ: , дуусгах бол 0 - ийг дарна уу.");
    vne = parseInt(a1);
    Niit_vne = Niit_vne + vne;
    document.writeln(" "+ vne + " ");
    i++;
}

Dundaj_vne = Niit_vne / (i - 1);
// Dundaj_vne = Niit_vne / (i - 1);
document.writeln("<p> Нийт үнэ: " + Niit_vne +"</p>");
document.writeln("<p> Дундаж үнэ: " + Dundaj_vne +"</p>");

// -----------------Bodlogo:3--------------------

document.writeln("<h2> 3-р Бодлого</h2>");
var n, a2;
var i = 1, sum = 0;
a2 = window.prompt("n тоог өг: ");
n = parseInt(a2);
while(i <= n)
{
    //sum = sum + (i * i);
     sum += i * i;
     i++;
}

document.writeln("<p> 1-ээс " + n + " хүртэлх тоонуудын квадратуудын нийлбэр:" + sum +"</p>");










