window.alert("bolj bna9");

//-------------1a Дараах кодоос алдаа ол. Нэгээс олон алдаа байж болзошгүй.

// var x;
// for (x= 100; x >= 1; x-- )
//     document.writeln( x );

//-------------1b. Дараах код value хувьсагчийн тэгш сондгой эсэхийг хэвлэнэ.

// var value;
// value = window.prompt("Бодлого 1b: тоог оруул");
// value = parseInt(value);
// switch (value % 2) {
//     case 0:
//            document.writeln( "Even integer" );
//            break;
//     case 1:
//            document.writeln( "Odd integer" );
// }

//------------1c. Дараах код 19-оос 1 хүртэлх сондгой тоонуудыг хэвлэнэ:

// for (x = 19; x >= 1; x -= 2 )
//      document.writeln( x );

 //----------- 1d. Дараах код 2-оос 100 хүртэлх тэгш тоонуудыг хэвлэнэ:

 // counter = 2;
 // do {
 //     document.writeln(counter);
 //     counter += 2;
 // }   while (counter <= 100);

 //-------------2.Дараах скрипт юу хийж байгааг тайлбарлан бич

 // document.writeln("<table>");

 // for(var i = 1; i <= 7; i++)
 // {
 // 	document.writeln("<tr>");

 // 	for(var j = 1; j <= 5; j++)
 // 		document.writeln("<td>(" +i+ ", " +j+ ")</td>");

 // 	document.writeln("</tr>");
 // }//end for

 // document.writeln("</table>");

 // -------------3. 1-ээс 15 хүртэлх бүхэл тооны нийлбэрийг олоод HTML5 документад харуул.
  document.writeln("<h2> 3 - р Бодлого:  1-ээс 15 хүртэлх бүхэл тооны нийлбэрийг олоод HTML5 документад харуул.</h2>");
  var i, sum = 0;
  for(i = 1; i <= 15; i++)
  	  sum += i;

 document.writeln("<p> 1-ээс 15 хүртэлх бүхэл тоонуудын нийлбэр:" + sum +"</p>");

 //--------------4.prompt цонх ашиглан хэрэглэгчээс n тоог аваад 1-ээс n хүртэлх тоонуудын квадратын нийлбэрийг ол.

 document.writeln("<h2> 4 - р Бодлого: prompt цонх ашиглан хэрэглэгчээс n тоог аваад 1-ээс n хүртэлх тоонуудын квадратын нийлбэрийг ол.</h2>");

var i = 1, sum = 0, n;
n = window.prompt("  4 - р Бодлого: n тоог өг: ");
n = parseInt(n);
while(i <= n)
{
    //sum = sum + (i * i);
     sum += i * i;
     i++;
}

document.writeln("<p> 1-ээс " + n + " хүртэлх тоонуудын квадратуудын нийлбэр:" + sum +"</p>");

//---------------5.prompt цонх ашиглан хэрэглэгчээс 1-7 хооронд тоо авч харгалзах гаригийг бичиж харуул.Өөр утга оруулсан тохиолдолд “Буруу утга” гэж хэвлэ.

document.writeln("<h2> 5 - р Бодлого: prompt цонх ашиглан хэрэглэгчээс 1-7 хооронд тоо авч харгалзах гаригийг бичиж харуул.Өөр утга оруулсан тохиолдолд “Буруу утга” гэж хэвлэ.</h2>");

n = window.prompt(" 5 - р Бодлого: 1---7 хооронд тоо өг: ");
n = parseInt(n);
switch(n)
{
	case 1: 
	      document.writeln("<p> n = " + n +" Даваа гараг</p>");
	      break;
	case 2: 
	      document.writeln("<p> n = " + n +" Мягмар гараг</p>");
	      break;
    case 3: 
	      document.writeln("<p> n = " + n +" Лхагва гараг</p>");
	      break;
	case 4: 
	      document.writeln("<p> n = " + n +" Пүрэв гараг</p>");
	      break;
	case 5: 
	      document.writeln("<p> n = " + n +" Баасан гараг</p>");
	      break;
	case 6: 
	      document.writeln("<p> n = " + n +" Бямба гараг</p>");
	      break;
	case 7: 
	      document.writeln("<p> n = " + n +" Ням гараг</p>");
	      break;

	default: 
	      document.writeln("<p> n = " + n +" Буруу утга</p>");
}

//------------prompt цонх ашиглан хэрэглэгчээс 1-30 хооронд 5 тоо аваад HTML5 документад тухайн тоотой тэнцүү одыг (*) нэг мөрөнд хэвлэ. Жишээ нь эхний тоо 7 байвал эхний мөрөнд ******* гэж хэвлэ.
 
 document.writeln("<h2> 6 - р Бодлого:  prompt цонх ашиглан хэрэглэгчээс 1-30 хооронд 5 тоо аваад HTML5 документад тухайн тоотой тэнцүү одыг (*) нэг мөрөнд хэвлэ. Жишээ нь эхний тоо 7 байвал эхний мөрөнд ******* гэж хэвлэ.</h2>");

var a, i, j,a1;

// a = window.prompt(" 6 - р Бодлого: 1---30 хооронд тоо өг: ");
//   a = parseInt(a);

 for(i = 1; i <= 5; i++)
 {
 	a = window.prompt(" 6 - р Бодлого: 1---30 хооронд тоо өг:"+i+" - р тоо ");
    a = parseInt(a);
 	for(j = 1; j <= a; j++)
 	{
        document.writeln("*");

 	}
 	document.writeln("<br>");

 }

//----------i=1, j=2, k=3, m=2 бол дараах зааврууд ямар утга хэвлэх вэ?

document.writeln("<h2> 7 - р Бодлого: i=1, j=2, k=3, m=2 бол дараах зааврууд ямар утга хэвлэх вэ?</h2>");
   var i = 1, j = 2, k = 3, m = 2;
   //--a
  document.writeln( i == 1 );   //1
  //--b
  document.writeln( j == 3 ); // 0
  //--c
  document.writeln( i >= 1 && j < 4 ); // 1
  // --d
  document.writeln( m <= 99 && k < m ); // 0
  //--e
  document.writeln( j >= i || k == m ); // 1
  //--f
  document.writeln( k + m < j || 3 - j >= k ); // 0
  //--g
  document.writeln( !( k > m ) ); // 0

  //------k-ийн утга 1, 2, 3, 4, 10 байх үед x-ийн утга тус бүрд хэд байх вэ?
   
   var x, k;
   k = window.prompt(" 8 - р Бодлого: k-ийн утга: ");
     k = parseInt(k);
  switch(k)
  {
  	case 1:
  	     break;
  	case 2:
  	case 3:
  	  ++k;
  	  break;
  	case 4:
  	   --k;
  	default:
  	   k *= 3;
  } // end switch

  x = k;

  document.writeln("<p> x = : " + x +"</p>");

  document.writeln("k = 1 bol x = 1" + "<br>");
  document.writeln("k = 2 bol x = 3" + "<br>");
  document.writeln("k = 3 bol x = 4" + "<br>");
  document.writeln("k = 4 bol x = 9" + "<br>");
  document.writeln("k = 1 bol x = 30");






