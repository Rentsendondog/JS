alert("Bolj bna");

// --------------Bodlogo 7.2-------------

 document.writeln("<h2> 7.2 - р Бодлого </h2>");
 document.writeln("<h4> 1 --ээс 10 хүртэлх тоог хэвлэх </h4>");
var x = 1;
for(x = 1; x <= 10; x++)
{
	document.writeln(" " + x + " ");
}

//

document.writeln("<h2> 7.2a - р Бодлого</h2>");
document.writeln("<h4> 1 --ээс 10 хүртэлх хэдэн ш тэгш тоо байгаа вэ</h4>");
var x = 0, i;
for(i = 1; i <= 10; i++)
{
    if(i % 2 == 0)
    	x = x + 1;
} document.writeln("<p> тэгш тоо: " + x +"ш</p>");

//

document.writeln("<h2> 7.2b - р Бодлого</h2>");
 document.writeln("<h3>1 ээс 10 хүртэлх тоонуудын сондгой тоог тоолох</h3>");
var x = 0, i;
for(i = 1; i <= 10; i++)
{
    if(i % 2 != 0)
    	++x;
} document.writeln("<p> сондгой тоо: " + x +"</p>");

//------------------7.3a-------------

document.writeln("<h2> 7.3a - р Бодлого</h2>");
document.writeln("z = y + x++;");

//----------------7.3b----------------

document.writeln("<h2> 7.3b - р Бодлого</h2>");
var count;
count = window.prompt("7.3.b count = ");
count = parseInt(count);

if(count > 10)
   document.writeln("<p> count: " + count +" нь 10 -аас их,</p>");
else 
	document.writeln("<p> count: " + count +" нь 10 -аас бага,</p>");

//---------------7.3.c--------------

document.writeln("<h2> 7.3c - р Бодлого</h2>");
document.writeln("<h4>total = total - (--x);</h4>");
var x = 6, total = 10;
total = total - (--x);
   document.writeln("<p> total:  " + total +"</p>");

//-----------------------7.3d--------------

document.writeln("<h2> 7.3d - р Бодлого</h2>");
var q = 7, divisor = 2;
q = q % divisor;
q %= divisor;
document.writeln("<h3>q = q % divisor</h3>");
document.writeln("<h3>q % = divisor</h3>");

//-------------------7.4---------------

document.writeln("<h2> 7.4 - р Бодлого</h2>");
var sum, x;
x = 1, sum = 0;
sum = sum + x;
document.writeln("<p> x = 1, sum = 0,   sum = sum + x =  " + sum +"</p>");
document.writeln("<p> Нийлбэр нь: ("+ sum +")</p>");

//------------------7.5-------------------

document.writeln("<h2> 7.5 - р Бодлого</h2>");
var sum, x;
x = 1, sum = 0;
while(x <= 10)
{
	sum = sum + x++;
}
document.writeln("<p> 1-ээс 10 хүртэлх тоонуудын нийлбэр нь: ("+ sum +")</p>");

//---------------7.6-------------

document.writeln("<h2> 7.6 - р Бодлого</h2>");
var product = 5, x = 5, quotient = 5;
product *= x++;  
product = product * x++;  //5 * 5 = 25, x = 6
quotient /= ++x; 
quotient  = quotient / ++x;  //5 / 6 = 0, x = 6
document.writeln("<p> product = 25, x = 6 </p>");
document.writeln("<p>quotient = 0, x = 6 </p>");

//----------------7.7a-------------------

document.writeln("<h2> 7.7a - р Бодлого</h2>");
var c, product;
c = 1, product = 1;
while(c <= 5)
{
	product *= c;
	++c;
}
document.writeln("<p> 1-ээс 5 хүртэлх тоонуудын үржвэр нь: ("+ product +")</p>");

//----------------7.7b---------------

document.writeln("<h2> 7.7b - р Бодлого</h2>");
var gender;
gender = window.prompt("Эмэгтэй бол 1, Эрэгтэй бол 1 ээс бусдын дар:  ");
  gender = parseInt(gender);
if ( gender == 1 )
   document.writeln( "Woman" );
else
  document.writeln( "Man" );

//--------------------7.8---------------

document.writeln("<h2> 7.8 - р Бодлого</h2>");
var z, sum;
z = window.prompt("z = ");
z = parseInt(z);
sum = 0;
while(z >= 0){
	sum += z;
	z--;
}
document.writeln("<p> z-ээс 1 хүртэлх тоонуудын нийлбэр нь: ("+ sum +")</p>");


//------------------7.9----------------

document.writeln("<h2> 7.9 - р Бодлого</h2>");
var number;
var p = 0, j = 0, k = 0, i = 1;
while(i <= 10)
{
	number = window.prompt("number:"+ i +" ");
    number = parseInt(number);
	if(number > 0)
		p++;
	else
	{
		if(number == 0)
		   j++;
		else
			k++;
	}
    document.writeln(" " + number + " ");
	i++;
}

    document.writeln("<p> эерэг тоо:  " + p + "ш" + "</p>");
    document.writeln("<p> сөрөг тоо: " + k + "ш" + "</p>");
    document.writeln("<p> тэгийн тоо: " + j +"ш" +"</p>");

//-----------------7.10---------------------

document.writeln("<h2> 7.10 - р Бодлого</h2>");
var n, i = 1;
var sum = 0;
while(i <= 10)
{
	n = window.prompt("number:" + i + " ");
    n = parseInt(n);
    document.writeln(" " + n + " ");
    sum = sum + n % 2;
    i++;
}

document.writeln("<p> 1-ээс 10 хүртэлх 2 т хуваасан үлдэгдлийн нийлбэрүүд ("+ sum +")</p>");

//-------------------7.9 Тэмдэгт давталт------------

document.writeln("<h2> 7.9 - р Бодлого (Тэмдэгт давталт)</h2>");
var p = 0, j = 0, k = -1, i;
i = 0;
n1 = window.prompt("number: "+ i +"  duusgah bol d g dar");
n = parseInt(n1);
while(n != -1)
{
   n1 = window.prompt("number: duusgah bol d g dar"+ i +" r too");
   n = parseInt(n1);
   if(n > 0)
      p++;
   else
   {
      if(n == 0)
         j++;
      else
         k++;
   }

   document.writeln(" "+ n + " ");

   i++;
}

    document.writeln("<p> эерэг тоо:  " + p + "ш" + "</p>");
    document.writeln("<p> сөрөг тоо: " + k + "ш" + "</p>");
    document.writeln("<p> тэгийн тоо: " + j +"ш" +"</p>");










 


