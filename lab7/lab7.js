 // ---------------2a---------
alert("Хоёр тоо оруул");

//---------------2b-------------
var fistNumber, secondNumber;
var a, b, c;
 fistNumber = window.prompt("  2 Тооны үржвэр  a = ");
 secondNumber = window.prompt(" 2 Тооны үржвэр b = ");
  a = parseInt(fistNumber);
  b = parseInt(secondNumber);
  document.writeln("<h3> 2 Тооны үржвэр </h3>");
   document.writeln("a = " + a + ", b = " + b);
  c = a * b;
  document.writeln("<p> c = " + c +"</p>");

 //------------------2c-----------------

var time, salary;
 time  = window.prompt("  Ажилсан цагаас нь хамаарч цалингийн хэмжээг бодох:  Ажилсан цаг = ");
 t = parseInt(time);
  document.writeln("<h3> Ажилсан цагаас нь хамаарч цалингийн хэмжээг бодох </h3>");
  document.writeln("цаг = " + t);
 salary = t * 1000;
document.writeln("<p> c = " + salary +" $ </p>");

 // ------------------5----------

var x = 2, y = 3;
alert( "x = " + x );
window.alert( "The value of x + x is " + ( x + x ) );
window.alert( "x =" );
window.alert( ( x + y ) + "=" + ( y + x ) );
//--------------8----------------
var k, p, z;
k = 7 + 3 * 6 / 2 - 1;
z = 2 % 2 + 2 * 2 - 2 / 2;
p = ( 3 * 9 * ( 3 + ( 9 * 3 / ( 3 ) ) ) );
document.writeln("<p> k = " + k +"</p>");
document.writeln("<p> z = " + z +"</p>");
document.writeln("<p> p = " + p +"</p>");

 // ------------6.15-----------
var j = 1;
 document.writeln("<h3> 1 - ээс 4 хүртэл </h3>");
while(j <= 4){
    document.writeln(" " + j + " ");
    j++;
}

// ---------------------9---------------

var sum, urjver;
var firstNumber, secondNumber;
var number1, number2;
document.writeln("<h3> 2 Тооны арифметик үйлдлүүд</h3>");
  
firstNumber = window.prompt("2 Тооны арифметик үйлдлүүд number1 = ");
secondNumber = window.prompt("2 Тооны арифметик үйлдлүүд number2 = ");

 number1 = parseInt(firstNumber);
 number2 = parseInt(secondNumber);
  document.writeln("number1 = " + number1 + ", number2 = " + number2);
 sum = number1 + number2;
 ylgavar = number1 - number2;
 urjver = number1 * number2;
 noogdvor = number1 / number2;
  document.writeln("<p> Нийлбэр: " + sum + "</p>");
  document.writeln("<p>Ялгавар: " + ylgavar +"</p>");
  document.writeln("<p>Ноогдвор: " + noogdvor +"</p>");
  document.writeln("<p>Үржвэр: " + urjver +"</p>");

   // ------------------10-------------

  var x, y, firstNumber, secondNumber;
  firstNumber = window.prompt("2 Тооны их нь аль нь вэ?  x = ");
  secondNumber = window.prompt("2 Тооны их нь аль нь вэ? y = ");
  x = parseInt(firstNumber);
  y = parseInt(secondNumber);
    
  document.writeln("<h3> 2 Тооны их нь аль нь вэ? </h3>");
   document.writeln("x = " + x + ", y = " + y);
 if(x > y) 
    document.writeln("<p>Их тоо: " + x +"</p>");
else {
	if(x == y)
		document.writeln("<p>2 тоо тэнцүү:</p>");
    else 
    	document.writeln("<p>Их тоо: " + y +"</p>");
}      

// -----------11------------
var x, y, z, sum, a1,a2,a3, urjver;
 a1 = window.prompt(" 3 Тооны нийлбэр,үржвэр x = ");
 a2 = window.prompt("3 Тооны нийлбэр,үржвэр  y = ");
 a3 = window.prompt("3 Тооны нийлбэр,үржвэр  z = ");
  x = parseInt(a1);
  y = parseInt(a2);
  z = parseInt(a3);
  document.writeln("<h3> 3 Тооны нийлбэр,үржвэр :</h3>");
    document.writeln("x = " + x + ", y = " + y + ", z = " + z);
  sum = x + y + z;
  urjver = x * y * z;
  
 document.writeln("<p> 3 Тооны нийлбэр: " + sum +"</p>");
  document.writeln("<p> 3 Тооны үржвэр: " + urjver +"</p>");


   // ----------12----------------

  var r, D, S, P, a12;
   a = window.prompt("тойргийн диаметр, тойргийн урт, талбайг  r = ");
   r = parseInt(a);
   document.writeln("<h3> тойргийн диаметр, тойргийн урт, талбайг :</h3>");
   D = 2 * r;
   P = 2 * r * Math.PI;
   S = r * r * Math.PI;
    document.writeln("<p> Радиус =   " + r +"</p>");
    document.writeln("<p> Диаметр: " + D +"</p>");
    document.writeln("<p> Периметр: " + P +"</p>");
    document.writeln("<p> Талбай: " + S +"</p>");

 // -------------13------------
  var a, b, c, d, e, x1, x2, x3, x4, x5, max;
   x1 = window.prompt(" 5 Тооны их :  a = ");
   x2 = window.prompt(" 5 Тооны их :  b = ");
   x3 = window.prompt(" 5 Тооны их :  c = ");
   x4 = window.prompt(" 5 Тооны их :  d = ");
   x5 = window.prompt(" 5 Тооны их :  e = ");
      a = parseInt(x1);
      b = parseInt(x2);
      c = parseInt(x3);
      d = parseInt(x4);
      e = parseInt(x5);
   document.writeln("<h3> 5 Тооны их :</h3>");
      document.writeln("<p> a =  " + a +"</p>");
      document.writeln("<p> b =  " + b +"</p>");
      document.writeln("<p> c =  " + c +"</p>");
      document.writeln("<p> d =  " + d +"</p>");
      document.writeln("<p> e =  " + e +"</p>");
   if(a >= b && a >= c && a >= d && a >= e)
   	  document.writeln("<p>max: " + a +"</p>");
   	if(b >= a && b >= c && b >= d && b >= e)
   	  document.writeln("<p>max: " + b +"</p>");
   	if(c >= a && c >= b && c >= d && c >= e)
   	  document.writeln("<p>max: " + c +"</p>");
   	if(d >= a && d >= b && d >= c && d >= e)
   	  document.writeln("<p>max: " + d +"</p>");
   	if(e >= a && e >= b && e >= c && e >= d)
   	  document.writeln("<p>max: " + e +"</p>");


 // --------------14--------------

var a, b, fistNumber,secondNumber;
fistNumber = window.prompt(" 2 Тооны тэгш, сондгой эсэх : a = ");
secondNumber = window.prompt(" 2 Тооны тэгш, сондгой эсэх :b = ");

 a = parseInt(fistNumber);
 b = parseInt(secondNumber);
 document.writeln("<h3> 2 Тооны тэгш, сондгой эсэх :</h3>");

 if(a % 2 == 0)
 	document.writeln("<p> a тоо тэгш  " + a + " </p>");
 else 
 	document.writeln("<p> а тоо сондгой  " + a +" </p>");

 if(b % 2 == 0)
 	document.writeln("<p> b тоо тэгш " + b +"</p>");
 else 
 	document.writeln("<p> b тоо сондгой " + b +"</p>");

// ---------------15----------------

var a, b, fistNumber,secondNumber;
fistNumber = window.prompt(" Сүүлийн тоо эхний тооны үржигдэхүүн эсэх    a = ");
secondNumber = window.prompt(" Сүүлийн тоо эхний тооны үржигдэхүүн эсэх  b = ");

 a = parseInt(fistNumber);
 b = parseInt(secondNumber);
 document.writeln("<h3>Сүүлийн тоо эхний тооны үржигдэхүүн эсэх :</h3>");
  document.writeln("a = " + a + ", b = " + b );

 if(a % b == 0)
 	 document.writeln("<p>үржигдэхүүн мөн " + a + " ,"+ b +"</p>");
 else 
     document.writeln("<p>үржигдэхүүн биш " + a + " ,"+  b +"</p>");

  	// ----------------16-------------

 	var x, y, z, sum, a1,a2,a3,i=0,j=0,k=0;
 a1 = window.prompt(" 3 тоо аваад тэдгээрт хэдэн ширхэг сөрөг, эерэг, тэг утгатай тоонууд байгааг тоол  x = ");
 a2 = window.prompt(" 3 тоо аваад тэдгээрт хэдэн ширхэг сөрөг, эерэг, тэг утгатай тоонууд байгааг тоол  y = ");
 a3 = window.prompt(" 3 тоо аваад тэдгээрт хэдэн ширхэг сөрөг, эерэг, тэг утгатай тоонууд байгааг тоол  z = ");
  x = parseInt(a1);
  y = parseInt(a2);
  z = parseInt(a3);
  document.writeln("<h3> 3 тоо аваад тэдгээрт хэдэн ширхэг сөрөг, эерэг, тэг утгатай тоонууд байгааг тоол :</h3>");

  if(x == 0)
  	  i++;
  else {
  	if(x < 0)
  		 j++;
  	else
  		 k++;
  }

  if(y == 0)
  	  i++;
  else {
  	if(y < 0)
  		 j++;
  	else
  		 k++;
  }

  if(z == 0)
  	  i++;
  else {
  	if(z < 0)
  		 j++;
  	else
  		 k++;
  }
  document.writeln("x = " + x + ", y = " + y + ", z = " + z);

  document.writeln("<p> эерэг тоо  " + k + "ш" + "</p>");
    document.writeln("<p> сөрөг тоо: " + j + "ш" + "</p>");
    document.writeln("<p> тэгийн тоо: " + i +"ш" +"</p>");



 




