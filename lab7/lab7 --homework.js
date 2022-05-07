//
alert("Bolj bna");
document.writeln("<h3> Лаборатори-7  Гэрийн Даалгавар </h3>");

//----------------1 - р Бодлого -------------

 document.writeln("<h3> 1 - р Бодлого </h3>");
var year;
var a1;
a1 = window.prompt("Та жилээ оруулна уу? ");
year = parseInt(a1);
document.writeln("year = " + year + "<br>");
if(year % 4 == 0)
   document.writeln("  Өндөр жил");
else 
   document.writeln("  Өндөр жил биш");

// ----------------2 - р Бодлого -------------
document.writeln("<h1> 2 - р Бодлого </h1>");
var X1, Y1, X2, Y2, D1, D2;
var a1, a2, a3, a4;
a1 = window.prompt("А цэгийн X1-ийн координат: ");
a2 = window.prompt("А цэгийн Y1-ийн координат: ");
a3 = window.prompt("Б цэгийн X2-ийн координат: ");
a4 = window.prompt("Б цэгийн Y2-ийн координат: ");
     X1 = parseInt(a1);
     Y1 = parseInt(a2);
     X2 = parseInt(a3);
     Y2 = parseInt(a4);
     D = Math.sqrt((X2 - X1)*(X2 - X1) + (Y2-Y1)*(Y2-Y1));
     // document.writeln("<h1>A(X1, X2) ба Б(Y1, Y2) цэгийн зай нь … байна </h1>");
     document.write("<h1> A(" + X1 + " , "+ Y1 +")  ба  Б(" + X2 + " , " + Y2 + ") цэгийн зай нь " + D +"</h1>");


// ----------------3 - р Бодлого -------------
document.writeln("<h3> 3 - р Бодлого </h3>");
var Hereglee, NegjVne, Tolbor;
var a1, a2;
a1 = window.prompt("Цахилгааны хэрэглээ: /кВт.ц /");
//a2 = window.prompt("Нэгж үнэ: /1 кВт.ц /");
      Hereglee = parseInt(a1);
      NegjVne = parseInt(a2);
if(Hereglee <= 50)
   Tolbor = 7000;
else 
{
    if(Hereglee <= 100) 
    {
         NegjVne = 148;
         Tolbor = NegjVne * Hereglee;
    }
    else
    {
        if (Hereglee <= 200) 
        {
              NegjVne = 146;
              Tolbor = NegjVne * Hereglee;
        }
        else
        {
             NegjVne = 145;
             Tolbor = NegjVne * Hereglee;
        }
    }
}

document.writeln("<div> Хэрэглэсэн : " + "<div>" + Hereglee + "</div>" + "</div>");
document.writeln("<div> Нэгж үнэ : " + "<div>" + NegjVne + "</div>" + "</div>");
document.writeln("<div> Нийт төлбөр : " + "<div>" + Tolbor + "</div>" + "</div>");

 document.writeln("<table>" ); // хүснэгт эхлэж байна

 // ----------гарчиг------------
       document.writeln( "<h3>Цахилгааны үнэ тооцоолох нь</h3>" );
        // ------------толгой хэсэг---------------
       document.writeln( "<thead><tr><th>Хэрэглэсэн</th>" ); 
       document.writeln( "<th>Нэгж үнэ</th>" ); 
       document.writeln( "<th>Нийт төлбөр</th>" );
       document.writeln( "</tr></thead><tbody>" );
       // -----------Авах утгууд-----------------
       document.writeln( "<tr class='oddrow'><td>" + Hereglee + "</td><td>" + NegjVne + "</td><td>" + Tolbor + "</td></tr>" );

       document.writeln( "</tbody></table>" );






