alert("lab12 bolj bna");

//-------------------Bodlogo:1------------------ 
document.writeln("<h3> 1 - р Бодлого:  Чек хэвлэдэг машинууд</h3>");

var check = ["*","*","*","*","*","*","*","*"];
var k ,j;
while(true)
     {
        var num = window.prompt("Мөнгөн дүнгээ оруулна уу");
        var num2 = num.split(".");
        var t = ",";
        var l = num2[0].length;
               if(l <= 4)
                  break;
                else
    	         window.alert("Зөвхөн 4 ба -өөс бага оронтой тоо оруул!!!");
     }

    if(l == 4)
    {
        var n1 = num2[0].slice(0, 1);
        check[0] = n1;
        check[1] = ","
        k = 1;
        j = 1;
        // p = num.length;
        p = 7;
    }
    if(l == 3)
    {
       k = 1; 
       p = 6;
       j = 0;
    }
    if(l == 2)
    {
       k = 2;
       j = 0;
       p = 5;
    }
    if(l == 1)
    {
        k = 3;
        j = 0;
        p = 4;
    }
    for(var i = k; i < 8 && j < p ; i++,j++)
    {
        check[i+1] = num[j];
    }

document.writeln("<table>");
document.writeln( "<thead>" ); 
document.writeln( "</thead><tbody>" );
document.writeln("<tr>");
for(var i = 0; i < 8; i++)
{
    document.writeln("<td>" + check[i] + "</td>");
}
document.writeln("</tr>");
document.writeln( "</tbody></table>");

//-------------------Bodlogo:2------------------ 
document.writeln("<h3> 2 - р Бодлого:  Өгөгдсөн мөнгөн дүнг үсгээр хэвлэх</h3>");

var togrog;
togrog = window.prompt("Мөнгөн дүнгээ оруулна уу");
var arav = ["арван","хорин", "гучин","дөчин","тавин","жаран","далан","наян","ерэн"];
var negj = ["нэгэн","хоёр", "гурван","дөрвөн","таван","зургаан","долоон","найман","есөн"];
var zuun = ["нэг зуун","хоёр зуун", "гурван зуун","дөрван зуун","таван зуун","зургаан зуун","долоон зуун","найман зуун","есөн зуун"];
var myanga = ["нэг мянга","хоёр мянга", "гурван мянга","дөрван мянга","таван мянга","зургаан мянга","долоон мянга","найман мянга","есөн мянга"];
var myangan2 = "мянган";
var To = "төгрөг";
var Mo = "мөнгө";
var sum = " ";
var space = " ";
var word = [myanga, zuun, arav, negj];
var word2 = [arav, negj];
var num2 = togrog.split(".");
var n = num2[0];
var l = num2[0].length;
n = parseInt(n);
for(var i = 0, j = 4 - l; i < l && j < 4; i++,j++)
{
    var k = l - i - 1;
    var r = Math.pow(10, k);
    var p = Math.floor(n / r);
    n = n % r;
        sum = sum.concat(word[j][p-1]);
        sum = sum.concat(space);

}

sum = sum.concat(To);
sum = sum.concat(space);

var m = num2[1];
var l2 = num2[1].length;
m = parseInt(m);
if(m >= 10 && m <= 99)
{

}
if(m > 0 && m < 10)
{

}
for(var i = 0, j = 0; i < l2 && j < 2; i++,j++)
{
    
    var k2 = l2 - i - 1;
    var r2 = Math.pow(10, k2);
    var p = Math.floor(m / r2);
    m = m % r2;
        sum = sum.concat(word2[j][p-1]);
        sum = sum.concat(space);
}
sum = sum.concat(Mo);
document.writeln(sum);