alert("bolj bna");
// ---------3.a----------
document.writeln("<h2> 3a. f массивын 7-р элементийн утгыг дэлгэцлэ. </h2>");
var f;
f = [1,2,3,4,5,6,7,8,9,10];
document.writeln("<p>7-р элементийн утга:  " + f[7] + "</p>");
// ----3.b-----
document.writeln("<h2> 3b. Нэг хэмжээст 5 урттай g массивын элемент бүрт 8 гэсэн анхны утга олго </h2>");
var g;
// g[5] = [8,8,8,8,8];
g =new Array(5)
g = [8,8,8,8,8];
for(var i = 0; i < 5; i++)
{
    document.writeln(+ g[i]);
}
// ----3.c-----
document.writeln("<h2> 3c. 100 ширхэг тоон утга бүхий элементүүдтэй массивын нийт элементүүдийн нийлбэрийг ол. </h2>");
var a;
a = new Array(100);
var sum = 0;
for(i = 0; i < 100; i++)
{
    a[i] = i;
   sum = sum + a[i];
}
document.writeln("<p>sum:  " + sum + "</p>");
// -----3.d-----
document.writeln("<h2>3d. 34 урттай b массивын эхэнд а массивын 11 элементийг хуулна уу </h2>");
var a, b;
a = new Array(11);
a = [1,2,3,4,5,6,7,8,9,10,11]
b = new Array(34);
for(var i = 0; i < 34; i++)
{
    b[i] = i * 10;
}
for(var i = 0; i < 11; i++)
{
    b[i] = a[i];
}
for(var i = 0; i < 34; i++)
{
    document.writeln(+ b[i]);
}
// -----3.e----
document.writeln("<h2>3e. Бутархай төрлийн 99 элементтэй w массивын хамгийн их, хамгийн бага утгыг олж хэвлэ.</h2>");
var w;
var max, min, i;
w = new Array(99);
for( i = 0; i < 99; i++)
{
    w[i]=i/10;
}
max = w[0];
min = w[0];
for( i = 0; i < 99; i++)
{
    if(w[i] > max)
       max = w[i];
    if(w[i] < min)
       min = w[i];
}
document.writeln("<p>max:  " + max + "</p>");
document.writeln("<p>min:  " + min + "</p>");

// ------4------
document.writeln("<h2>4. Бүхэл тоон утгууд хадгалах 2х3 хэмжээтэй t массивын хувьд</h2>");
var t;
var i, j, min2;
// ----4.k----
t = [[1,2,3],[4,5,6]];

for(i = 0; i < 2; i++)
{
    for(j = 0; j < 3; j++)
    {
        document.writeln(+ t[i][j]);
    }
    document.writeln("<br>");
}
// ----4i----
min2 = t[0][0];
for(i = 0; i < 2; i++)
{
    for(j = 0; j < 3; j++)
    {
        if(t[i][j] < min2)
           min2 = t[i][j];
    }
    document.writeln("<br>");
}
document.writeln("<p>min2:  " + min2 + "</p>");
// -----4.e---
t[0][1] = 0;
// ----4.h----
t[0][0] = 0;
t[0][1] = 0;
t[0][2] = 0;
t[1][0] = 0;
t[1][1] = 0;
t[1][2] = 0;
// ----4l----
var k;
k = [[1,2],[3,4],[5,6]];
for(j = 0; j < 3; j++)
{
    for(i = 0; i < 2; i++)
    {
        document.writeln(+ k[j][i]);
    }
    document.writeln("<br>");
}
// -------5-----------
/*document.writeln("<h2>5.. Нэгэн компани борлуулагч нартаа 7 хоногт 400.000 төгрөг мөн дээр нь зарсан барааны үнийн дүнгийн 9% тай тэнцэх урамшуулал өгдөг. Жишээ нь: борлуулагч 1 долоо хоногт 5 саяын борлуулалт хийсэн бол 400000 + 5000000*0.09 =650000 төгрөг авна. HTML формоор ажилтан бүрийн борлуулалтын дүнг хэрэглэгчээс авч массивт хадгал. Дараа нь доорх цалин бүрийг хэдэн ажилтан авсныг тооцож гарга. Цалинг тооцохдоо бүхэл тоо рүү хөрвүүлж тоймлоно уу.</h2>");

var i, j = 0, n = 10;
var y;
y = new Array();
for(i = 0; i < n; i++)
{
    x = prompt(""+ i +"-р ажилтны борлуулалтын дүн: ");
    y[i] = parseInt(x);
}
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, l = 0, salary;
var k =[];
// k = new Array();
for(j = 0; j < 9; j++)
{
    k[j] = 0;
}
for(i = 0; i < n; i++)
{
    salary  = Math.floor(133 + y[i] * 0.09);
    if(salary >= 200 && salary <= 299 )
    {
        a++;
        k[j] = a;
    }
    if(salary >= 300 && salary <= 399 )
    {
        b++;
        k[j+1] = b;
    }   
    if(salary >= 400 && salary <= 499 )
    {
        c++;
        k[j+2] = c;
    }  
    if(salary >= 500 && salary <= 599 )
    {
        d++;
        k[j+3] = d;
    }    
    if(salary >= 600 && salary <= 699 )
    {
        e++;
        k[j+4] = e;
    } 
    if(salary >= 700 && salary <= 799 )
    {
        f++;
        k[j+5] = f;
    }
    if(salary >= 800 && salary <= 899 )
    {
        g++;
        k[j+6] = g;
    }  
    if(salary >= 900 && salary <= 999 )
    {
        h++;
        k[j+7] = h;
    }
    if(salary >= 1000)
    {
        l++;
        k[j+8] = l;
    }
}


var salaryMin = 200, salaryMax;
document.writeln("<table>" ); // хүснэгт эхлэж байна

		 // ----------гарчиг------------
		 document.writeln( "<h3>5. Бодлого </h3>" );
        // ------------толгой хэсэг---------------
		 document.writeln( "<thead><tr><th>Salary</th>" ); 
		 document.writeln( "<th>Too</th>" ); 
		 document.writeln( "</tr></thead><tbody>" );
         for(i = 0 ; i < 9; i++)
         {
            if(salaryMin == 1000)
            {
                document.writeln( "<tr class='oddrow'><td>$"+ salaryMin +"-аас дээш </td><td>" + k[i] + "</td></tr>");
                break;
            }
             salaryMax = salaryMin + 99;
 	        document.writeln( "<tr class='oddrow'><td>$"+ salaryMin +"-"+ salaryMax +"</td><td>" + k[i] + "</td></tr>");
            salaryMin = salaryMin + 100;
            
         }

        document.writeln( "</tbody></table>" );


        document.writeln("<table>" ); // хүснэгт эхлэж байна

        // ----------гарчиг------------
        document.writeln( "<h3>5. Бодлого </h3>" );
       // ------------толгой хэсэг---------------
        document.writeln( "<thead><tr><th>Salary</th>" ); 
        document.writeln( "<th>Too</th>" ); 
        document.writeln( "</tr></thead><tbody>" );
        document.writeln( "<tr><td>$200" +"-"+"299</td><td>" + a + "</td></tr>");
        document.writeln( "<tr><td>$300" +"-"+"399</td><td>" + b + "</td></tr>");
        document.writeln( "<tr><td>$400" +"-"+"499</td><td>" + c + "</td></tr>");
        document.writeln( "<tr><td>$500" +"-"+"599</td><td>" + d + "</td></tr>");
        document.writeln( "<tr><td>$600" +"-"+"699</td><td>" + e + "</td></tr>");
        document.writeln( "<tr><td>$700" +"-"+"799</td><td>" + f + "</td></tr>");
        document.writeln( "<tr><td>$800" +"-"+"899</td><td>" + g + "</td></tr>");
        document.writeln( "<tr><td>$900" +"-"+"999</td><td>" + h + "</td></tr>");
        document.writeln( "<tr><td>$1000" +"-аас дээш </td><td>" + l + "</td></tr>");
        document.writeln( "</tbody></table>" );*/

document.writeln("<h2>6.Нэг хэмжээст массивын хувьд доорх үйлдлүүдийг гүйцэтгэх скриптийг бичнэ үү.</h2>"); 
   //--------6.a-----
   var a = [];
   for(var i = 0; i < 10; i++)
       a[i] = 0;

   //----------6.b----
   var b = [];
   for(var i = 0; i < 15; i++)
       a[i]++;

  //-----------6.c---
  var bestScore = [0, 1, 1, 2, 3];
  for(var i = 0; i < 5; i++)
       document.writeln(bestScore[i] +" ");

//  ----------7------------
document.writeln("<h2>7. Хэрэглэгчээс 10-аас 100 хүртэлх 10 ширхэг тоог ав. Тоог авах болгонд хэрвээ уг тоо нь өмнө нь хэвлэгдээгүй бол дэлгэцэнд хэвлэ.</h2>");

var n, i, j, f = 1;
var a = [];
for(i = 0; i < 10; i++)
{
    f = 1;
    x = window.prompt("Ta 10 -- 100 iin hoorond too oruulna uu");
    a[i] = parseInt(x);
    if(i == 0)
       document.writeln(a[i] +" ");
    else 
    {
        for(j = 0; j < i; j++)
        {
            if(a[i] == a[j])
               f = 0;
        }
    }
    if(f == 1 && i != 0)
      document.writeln(a[i] +" ");
}

// 
