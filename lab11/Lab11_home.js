alert("Bolj bna11");

//-------------------Bodlogo:1------------------
// document.writeln("<h3> 1 - р Бодлого:  Гараас 2 хэмжээст массивын мөр баганын тоог авч утгуудад нь мөр баганын нийлбэрийг олгоод хүснэгт хэлбэрээр дэлгэцэлж гарга. Жишээ нь хэрэглэгч 2, 3 гэж оруулахад</h3>");

var n, m;
    n = prompt("Мөрийн тоо: ");
    n = parseInt(n);
    m = prompt("Баганын тоо: ");
    m = parseInt(m);
var a;
a = new Array(n);
var i, j;
for(i = 0; i < n; i++)
{
    a[i] = new Array();
}
document.writeln("<table>");
document.writeln( "<thead>" ); 
document.writeln( "</thead><tbody>" );
for(i = 0; i < n; i++)
{
    document.writeln( "<tr>");
    for(j = 0; j < m; j++)
    {
        a[i][j] = i + j;
        document.writeln("<td>" + a[i][j] + "</td>");
    }
    document.writeln("</tr>");
}
document.writeln( "</tbody></table>");


//-------------------Bodlogo:2------------------ 
document.writeln("<h3> 2 - р Бодлого: 1-999 хүртэлх анхны тоонуудыг хэвлэж гарга.</h3>");

var prime;
prime  = new Array(999).fill(1);
var k;
for(var i = 2; i < 999; i++)
{
    k = Math.floor(i/2); 
    for(var j = 2; j <= k; j++)
    {
        if(i % j == 0)
          prime[i] = 0;
    }
    if(prime[i] == 1)
       document.writeln(+i );
}
