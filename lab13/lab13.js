//-------------------Bodlogo:1------------------ 

function Multiplay() {
    var n1 = document.getElementById("number1").value;
      n1 = parseInt(n1);
    var n2 = document.getElementById("number2").value;
      n2 = parseInt(n2);
    document.getElementById("result").innerHTML = n1 * n2;
}

function Divide() {
    var n1 = document.getElementById("number1").value;
    n1 = parseInt(n1);
    var n2 = document.getElementById("number2").value;
    n2 = parseInt(n2);
    document.getElementById("result").innerHTML = n1 / n2;
}
//-------------------Bodlogo:2------------------- 

function Colorize() {
   var a = document.getElementsByTagName("td");

   a[0].style.backgroundColor = "orange";
   a[1].style.backgroundColor = "orange";
   a[4].style.backgroundColor = "orange";
   a[5].style.backgroundColor = "orange";
    var l = a.length;
    i = 0;
   while(i < a.length)
   {
       a[i].style.backgroundColor = "orange";
       j++;
       if(j == 2)
       {
           
       }

   }
}

//-------------------Bodlogo:3------------------- 
sum = 0;
function Insert() {
    
    var val1 = document.getElementById("name").value;
    var val2 = document.getElementById("price").value;
    val2 = parseInt(val2);
    var td1 = document.createElement("td");
    td1.innerHTML = val1;
    var td2 = document.createElement("td");
    td2.innerHTML = val2;

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    sum = sum + val2;
    document.getElementById("sum").innerHTML = sum;
   
    document.getElementById("tableBody").appendChild(tr);
}