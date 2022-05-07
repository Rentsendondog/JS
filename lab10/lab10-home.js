console.log("Болж байна.");
alert("Болж байна.");
//-------------------Bodlogo:1------------------

document.writeln("<h2> 1 - р Бодлого:  Гараас авсан тоог хоёртын тооллын системд хөрвүүлэх.</h2>");
var number;
number = window.prompt("10-тын тоог оруул: ");
number = parseInt(number);
document.writeln("<p>" + number + "-ын 2-тын тоололд " + ToBinary(number) + " байна.</p>");

function ToBinary(n) 
{
     var m, k;
     m = n;
     bin = 0, j = 1;
     while(m > 0) 
     {
           k = m % 2;
           bin = bin + k * j;
           m = Math.floor(m / 2);
           j = j * 10;
     }
     return bin;
}


//-------------------Bodlogo:3------------------
document.writeln("<h2> 3 - р Бодлого:  1-10 хүртэлх тоог санаж хэрэглэгчээр таалгуулдаг функц бич Таасан тохиолдолд баяр хүргэж таагаагүй үед ахин таалга.</h2>");

var number, m, i = 1;
 var n;
 n = Math.floor(1 + Math.random() * 10);  // Тэхайн санасан 1 тоог олох хүртлээ таана
while(true)
{
      number = prompt("Та 1--10 хооронд тоо оруулна уу?");
      number = parseInt(number);
      m = Remembered_number(number);
      if(m == 1)
      {
            alert("Баяр хүргэе");
            document.writeln(i + ". Баяр хүргэе<br>");
            break;
      }
      else 
      { 
            alert("Та тааж чадсангүй!!!"); 
            document.writeln(i + ". Та тааж чадсангүй!!!<br>"); 

      }
      i++;
}


function Remembered_number(k) {
      // var n;
      // n = Math.floor(1 + Math.random() * 10);  // Санасан тоог тааж чадаагүй үед дахин өөр тоо санасныг таана
      if(n == k)
               return 1;
            return 0;
}

//-------------------Bodlogo:2------------------

document.writeln("<h2> 2 - р Бодлого:  Лекц дээр үзсэн шоо хаях програмыг хаясан шоонуудын нүднүүдийн нийлбэр нь 100-аас илүүгарах үед хэрэглэгчид “Та хожлоо” гэсэн мэдээллийг харуулдаг болгож сайжруул</h2>");
var s = 0;
// img элементтэй харилцах хувьсагчууд
var die1Image;
var die2Image;
var die3Image;
var die4Image;

// товч дарагдах үзэгдлийг сонсож img элементүүдийг авна
function start() 
{
       var button = document.getElementById("rollButton");
       button.addEventListener("click", rollDice, false);
       //
       die1Image = document.getElementById("die1");
       die2Image = document.getElementById("die2");
       die3Image = document.getElementById("die3");
       die4Image = document.getElementById("die4");
} // start функцын төгсгөл
// шоо орхих
function rollDice() 
{
      setImage(die1Image);
      setImage(die2Image);
      setImage(die3Image);
      setImage(die4Image);

} // rollDice функцын төгсгөл

// Зургийн файлыг шоонд харгалзуулна
function setImage(dieImg) 
{
      // 1--6 хооронд авах тоо
      var dieValue = Math.floor(1 + Math.random() * 6);
      if(s > 100)
      {
            alert("Та хожлоо");
            s = 0;
      }
      // Зургийн нэрийн заах
      dieImg.setAttribute("src", "die" + dieValue + ".png");
      dieImg.setAttribute("alt", "die image with " + dieValue + " spot(s)");
      s =  s + dieValue;
      
}     // setImage функцын төгсгөл
window.addEventListener("load", start, false);