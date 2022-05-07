alert("bolj bna");

//-------------1 Хэрэглэгчээс тойргийн радиусыг авч тойргийн талбайг бодож олоод үр дүнг дэлгэцэнд харуулах circleArea функцийг тодорхойлж дууд.
document.writeln("<h2> 1 - р Бодлого: Хэрэглэгчээс тойргийн радиусыг авч тойргийн талбайг бодож олоод үр дүнг дэлгэцэнд харуулах circleArea функцийг тодорхойлж дууд</h2>");
var Radius, Area;

Radius = window.prompt("Радиусыг оруул = :");
Radius = 	parseInt(Radius);
Area = CircleArea(Radius);
document.writeln("<p>Тойргын талбай:  " + Area + "</p>");


function CircleArea(r)
{
	var s;
	s = r * r * Math.PI;
	return s;
}

 //-------------2----------------------------------------------------------------------------

document.writeln("<h2> 2 - р Бодлого: Машины зогсоолын төлбөрийг тооцох</h2>");

var time, Tolbor;

time = window.prompt("Зогсоолд зогссон цаг = :");
time = 	parseInt(time);
Tolbor = CalculateCharges(time);
document.writeln("<p>Зогсоолын төлбөр:  " + Tolbor + " төгрөг</p>");



function CalculateCharges(t)
{
   var s, i = 4;
   if(t > 24)
   	  s = 23000;
   else 
   {
   	   if(t <= 3)
          s = 5000;
       else 
       { 
       	   s = 5000;
   	       while(i <= t)
           {
   	           s = s + 1000;
   	           if(s >= 23000)
   	           	  break;
   	           	i++;
           }
       }
   }

   return s;

}


//-------------3----------------------------------------------------------------------------

document.writeln("<h2> 3 - р Бодлого: Координатын хоёр цэгийн хоорондын зайг олох</h2>");

var X1, Y1, X2, Y2, D1, D2;
var D; //хоорондох зай
X1 = window.prompt("А цэгийн X1-ийн координат: ");
Y1 = window.prompt("А цэгийн Y1-ийн координат: ");
X2 = window.prompt("Б цэгийн X2-ийн координат: ");
Y2 = window.prompt("Б цэгийн Y2-ийн координат: ");
     X1 = parseInt(X1);
     Y1 = parseInt(Y1);
     X2 = parseInt(X2);
     Y2 = parseInt(Y2);
     D = distance(X1, Y1, X2, Y2);
     document.write("<h1> A(" + X1 + " , "+ Y1 +")  ба  Б(" + X2 + " , " + Y2 + ") цэгийн зай нь " + D +"</h1>");



function distance(x1, y1, x2, y2)
{
	var d;
	d = Math.sqrt((x2 - x1)*(x2 - x1) + (y2-y1)*(y2-y1));
	return d;
}


//-------------4a----------------------------------------------------------------------------

var max = 2, min = 1;
Math.floor(Math.random() * max - min + 1) + min;  //Тухайн max, min завсараас random-тоо сонгоно.
Math.floor(Math.random() * 2 - 1 + 1) + 1;
//-------------4b----------------------------------------------------------------------------
var max = 100, min = 1;
Math.floor(Math.random() * 100 - 1 + 1) + 1;
//-------------4c----------------------------------------------------------------------------
var max = 0, min = 9;
Math.floor(Math.random() * 9 - 0 + 1) + 0
//-------------4d----------------------------------------------------------------------------
var max = 1112, min = 1000;
Math.floor(Math.random() * 1112 - 1000 + 1) + 1000;
//-------------4e----------------------------------------------------------------------------
var max = 1, min = -1;
Math.floor(Math.random() * 1 - (-1) + 1) -1;
//-------------4f----------------------------------------------------------------------------
var max = 11, min = -3;
Math.floor(Math.random() * 11 - (-3)+ 1) - 3;



//-------------5----------------------------------------------------------------------------

document.writeln("<h2> 5 - р Бодлого: Бүхэл тооны зэрэг олох функцийг бич.</h2>");
 
 var suuri, zereg;
 suuri = window.prompt("Тоог оруул:");
 suuri = parseInt(suuri);
 zereg = window.prompt("Тооны зэргийг оруул:");
 zereg = parseInt(zereg);
 
 document.writeln("<p>" + suuri + "-ын "+ zereg +"-н зэрэг нь  " + integerPower(suuri, zereg) + " байна.</p>");

function integerPower(base, exponent)
{
	var i, s=1;
	for(i = 1; i <= exponent; i++)
	{
		s = s * base;
	}

	return s;
}

//-------------6----------------------------------------------------------------------------

document.writeln("<h2> 6 - р Бодлого: хоёр дахь аргумент нь эхний аргументынхаа үржигдэхүүн мөн</h2>");

var number1, number2;
 number1 = window.prompt("Тоог оруул:");
 number1 = parseInt(number1);
 number2 = window.prompt("Тооны зэргийг оруул:");
 number2 = parseInt(number2);
  

 document.writeln("<p>" + number2 + "-нь "+ number1 +"-н үржигдэхүүн байна. " + multiple(number1, number2) + "</p>");


 function multiple(a, b)
 {
 	if(a % b == 0)
 	return true;
    
    return false;
 }

//-------------7----------------------------------------------------------------------------

document.writeln("<h2> 7 - р Бодлого: бүлэг бүхэл тоонуудыг аваад тоо бүрийг тэгш эсэхийг шалгах</h2>");

var i= 1;
var n = window.prompt("number: duusgah bol + -g dar"+ i +" r too");
var i = 2;
while(n != "+")
{
   document.writeln("<p>" + n + "-нь тэгш тоо байна." + isEven(n) + "</p>");

   n = window.prompt("number: duusgah bol + -g dar"+ i +" r too");
   i++;
}
  

 
function isEven(number)
{
	if(number % 2 == 0)
		return true;

	return false;
}

//-------------8----------------------------------------------------------------------------

document.writeln("<h2> 8 - р Бодлого: аргументийнхаа оронгийн цифрүүдийг олж хэвлэдэг</h2>");
var a, b, r, d;
a = window.prompt("a = ");
a = parseInt(a);
b = window.prompt("b = ");
b = parseInt(b);

r = a % b;
d = Math.floor(a/b);
displayDigits(a);
displayDigits(b);
displayDigits(r);
displayDigits(d);

function displayDigits(n)
{
	var m, l = 0, p, s;
	m = n;
	while(m > 0)
	{
       l = l * 10 + m % 10;
       m = m/10;
       m = Math.floor(m);
	}
    p = l;
    s = 0;
	while(p > 0)
	{
		k = p % 10;
		document.writeln(+ k + " ");
		p = p /10;
		p = Math.floor(p);
	}
	document.writeln("<br>");
}

//-------------9----------------------------------------------------------------------------

document.writeln("<h2> 9 - р Бодлого: Фаренгейт утгаас цельсийн температур луу, Цельсийн температурыг фаренгейт луу хөрвүүлэх</h2>");

var TF, TC;

TC = window.prompt("Температураа оруул, Цельсээр : ");
TC = parseInt(TC);
TF = window.prompt("Температураа оруул, Фарангейтээр: ");
TF = parseInt(TF);

document.writeln("<p> " + TC + "C  =  " + Fahrenheit(TC) +"F байна.</p>");
document.writeln("<p> " + TF + "F   =  " + Celsius(TF) +"C байна.</p>");

function Celsius(f)
{
	var c;
    c = 5.0 / 9.0 * (f - 32);
    return c;
}

function Fahrenheit(C)
{
    var F;
    F = 9.0 / 5.0 * C + 32;
    return F;
}


//-------------10---------------------------------------------------------------------------

document.writeln("<h2> 10 - р Бодлого: 3 бутархайг тоонуудын хамгийн багыг олж буцаах</h2>");

var n1, n2,
number1 = window.prompt("Эхний тоог өг:");
   number1 = parseInt(number1);
number2 = window.prompt("2 дахь тоог өг:");
   number2 = parseInt(number2);
number3 = window.prompt("3 дахь тоог өг:");
   number3 = parseInt(number3);
k = Minimum3(number1, number2, number3);
document.writeln("<p>" + number1 + ", "+ number2 +", " + number3 +"- ийн хамгийн бага нь :" + k + "</p>");


function Minimum3(a,b,c)
{
	return Math.min(a, b, c);
}

//-------------11---------------------------------------------------------------------------

document.writeln("<h2> 11 - р Бодлого: Хэрэглэгчээс оюутны дүнг аваад үсгээр илэрхийл.</h2>");

var dvn;
dvn = window.prompt("Дүнг оруул: ");
dvn = parseInt(dvn);

document.writeln("<p> " + dvn + "  " + QualityPoints(dvn) +"</p>");

function QualityPoints(points)
{
    if(points >= 90 && points <= 100)
    	return "A";
    if(points >= 80 && points <= 89)
    	return "B";
    if(points >= 70 && points <= 79)
    	return "C";
    if(points >= 60 && points <= 69)
    	return "D";
    if(points < 60)
    	return "F";
    else 
    	alert("<p>Та 1--100 - ын хооронд тоо оруулна уу?</p>");
	switch(p)
	{
		case 1:
		      document.writeln("<p> " + points + "  " + "A " +"  Онц</p>");
		      break;
		case 2:
		      document.writeln("<p> " + points + "  " + "B " +"  Сайн</p>");
		      break;
		case 3:
		      document.writeln("<p> " + points + "  " + "C " +"  Дунд</p>");
		      break;
		case 4:
		      document.writeln("<p> " + points + "  " + "D " +"  Яхавдээ</p>");
		      break;
		case 5:
		      document.writeln("<p> " + points + "  " + "F " +"  Муу</p>");
		      break;
	}
}


//-------------12---------------------------------------------------------------------------

document.writeln("<h2> 11 - р Бодлого: Хэрэглэгч “Toss” товч дээр дарахад зоос шидэгдэж үр дүн дэлгэцэнд гарна. </h2>");

var n;
function flip() 
{
	var m;
  	 m = Math.floor(Math.random() * 2) + 1;
   if(m == 1)
   	alert("Сүлд");
      // document.writeln("Сүлд");
   else
   	alert("Тоо");
   	  // document.writeln("Тоо");
}   
