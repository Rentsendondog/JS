alert("lab12 bolj bna");


//-------------------Bodlogo:1------------------ 
document.writeln("<h3> 1 - р Бодлого:  Хэрэглэгчээс хоёр тесктийг авч аль нь урт болохыг хэвлэж харуул.</h3>");

var s1, s2;
s1 = prompt("1. Эхний үг: ");
s2 = prompt("1. 2 дахь үг: ");
if (s1.length > s2.length)
      document.writeln("<p> s1 Эхний үг урт : "+ s1 + "</p>");
else 
      document.writeln("<p> s2 2 дахь үг урт : "+ s2 + "</p>");

//-------------------Bodlogo:2------------------ 
document.writeln("<h3> 2 - р Бодлого:  Утасны дугаарыг 95555555 хэлбэрээр утасны дугаар оруулахад (+976) 9955-5555 форматаар хэвлэж харуулна уу.</h3>");

var ser = "(+976) "
var line = "-"
var PhoneNumber;
PhoneNumber = prompt("2. Дугаараа оруул (8 тоо оруулхаа анхаарна уу)");
var fp4 = PhoneNumber.slice(0, 4);
var ep4 = PhoneNumber.slice(4, 8);
var p5 = ser.concat(fp4);
var p6 = p5.concat(line);
var p7 = p6.concat(ep4);
document.writeln("<p> Утасны дугаар : "+ p7 + "</p>");

//-------------------Bodlogo:3------------------ 
document.writeln("<h3> 3 - р Бодлого:   Олон үг бүхий текстийг оруулахад split дүрэм ашиглан үгүүдийг салгаж буцаагаад урвуу дарааллаар харуулна уу.</h3>");
// var s = "Sain bna uu"
s = prompt("2. Текстийг оруул: ");
var res = s.split(" ");
var sum = "";
var space =" ";
for(var i = res.length -1; i >= 0; i--)
{
  sum = sum.concat(res[i]);
  sum = sum.concat(space);
}
document.writeln(sum);

//-------------------Bodlogo:4------------------ 
document.writeln("<h3> 4 - р Бодлого:   Гараас текст оруулахад том, жижиг үсгээр гаргадаг скрипт бичнэ үү.</h3>");
var s;
s = prompt("Текстээ оруулна уу");
var Upper = s.toUpperCase();
var Lower = s.toLowerCase();

document.writeln("<p> Том үсгээр : "+ Upper + "</p>");
document.writeln("<p> Жижиг үсгээр : "+ Lower + "</p>");

//-------------------Bodlogo:5------------------ 
document.writeln("<h3> 5 - р Бодлого: Хэрэглэгчээс өгүүлбэр болоод хайх үгийг авч өгүүлбэрт хайх үг хэдэн удаа орсон байгааг тоолж хэвлэ. Хайлтыг хийхдээ indexOf дүрмийг ашиглана уу.</h3>");

var s;
s = prompt("Өгүүлбэрээ оруул: ");
var a;
var s2 = s.split(" ");
a = prompt("хайх үгээ оруул: ");
var j, count = 0;
for(var i = 0; i <s2.length; i++)
{
    j = s2[i].indexOf(a);
    if(j != -1)
    {
        count++;
    }
}
document.writeln("<p> Үгийн тоо : "+ count + "</p>");

//-------------------Bodlogo:6------------------ 
document.writeln("<h3> 6 - р Бодлого: Хэрэглэгчээс өгүүлбэр авч түүнд цагаан толгойн эгшиг үсэг бүрт тус үсгээр эхэлсэн үг хэд орсныг массив ашиглан тоолж хэвлэ. Том, жижиг үсгүүдыг адил гэж тооц.</h3>");

var s;
s = prompt("Өгүүлбэрээ оруул: ");
var s2 = s.split(" ");
var word = ["a","e","o","u","i"];
var count = 0, k;
for(var i = 0; i <s2.length; i++)
{
    for(var j = 0; j < word.length; j++)
    {
        var firstW = s2[i].substring(0, 1);
        k = firstW.indexOf(word[j]);
        if(k != -1)
        {
            count++;
            break;
        }
    }
}
document.writeln("<p> Эгшигээр эхэлсэн үгийн тоо : "+ count + "</p>");

//-------------------Bodlogo:7------------------ 
document.writeln("<h3> 7 - р Бодлого: Хэрэглэгчийн оруулсан текстээс зөвхөн 'б'-гээр эхэлсэнүгүүдийг хэвлэх скриптийг бичнэ үү. </h3>");

var s;
s = prompt("Текстээ оруул: ");
var s2 = s.split(" ");
var k;
var sum = "";
var space = " ";
for(var i = 0; i <s2.length; i++)
{
    var firstW = s2[i].substring(0, 1);
    k = firstW.indexOf("б");
    if(k != -1)
    {
        sum = sum.concat(s2[i]);
        sum = sum.concat(space);
    }
}
document.writeln(sum);

//-------------------Bodlogo:8------------------ 
document.writeln("<h3> 8 - р Бодлого: Хэрэглэгчийн оруулсан текстээс зөвхөн 'на*4'-гаар төгссөн үгүүдийг хэвлэх скриптийг бичнэ үү. </h3>");

var s;
s = prompt("Өгүүлбэрээ оруул: ");
var s2 = s.split(" ");
var word = ["на","нэ","но","нө"];
var  k;
var sum = "";
var space = " ";
for(var i = 0; i < s2.length; i++)
{
    for(var j = 0; j < word.length; j++)
    {
        var Last2 = s2[i].substring(s2[i].length -2, s2[i].length);
        k = Last2.indexOf(word[j]);
        if(k != -1)
        {
            sum = sum.concat(s2[i]);
            sum = sum.concat(space);
            // break;
        }
    }
}
document.writeln(sum);

//-------------------Bodlogo:9------------------ 
document.writeln("<h3> 9 - р Бодлого: Огноог гараас аваад Date обьектыг үүсгэж ямар гаригтай болохыг нь бүтэн нэрээр хэвлэж харуул. Жишээ нь: Даваа, Мягмар, гэх мэт. </h3>");

var weekday = ["Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба","Ням"];
var year, month, day;
year = prompt("Та жилээ оруул: ");
year = parseInt(year);
month = prompt("Та сараа оруул: ");
month = parseInt(month);
day = prompt("Та өдөрөө оруул: ");
day = parseInt(day);
var d = new Date(year, month, day);
var udur = d.getUTCDay()-1;
document.writeln(weekday[udur]);
// document.writeln(year);
// document.writeln(month);
// document.writeln(day);

//-------------------Bodlogo:10------------------ 
document.writeln("<h3> 10 - р Бодлого: Огноог гараас аваад Date обьектыг үүсгэж ямар гаригтай болохыг нь бүтэн нэрээр хэвлэж харуул. Жишээ нь: Даваа, Мягмар, гэх мэт. </h3>");

function Now() {
       var d = new Date();
       alert(d);
}
function Yesterday() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    alert(d);   
}

function Years10() {
    var d = new Date();
    d.setFullYear(d.getFullYear() - 10);
    alert(d);   
}

function Weekdays() {
    var d = new Date();
    d.setDate(d.getDate() - 7);
    alert(d);   
}
