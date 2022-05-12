//-------------------Bodlogo:1------------------ 

function Additems() {
    var title = document.getElementById("title").value;
    var td1 = document.createElement("td");
    td1.innerHTML = title;
    td1.className = "td1";
    var tr = document.createElement("tr");
    tr.appendChild(td1);

    // td2 elemenet
    var rate = document.getElementById("rate").value;
    var td2 = document.createElement("td");
    td2.innerHTML = rate;
    tr.appendChild(td2);


    // td3 element
    var del = document.createElement("input");
    del.type = "button";
    del.value = "Delete";
    del.className = "btn btn-danger"
    del.addEventListener("click", function(){
        var td = this.parentElement;
        td.parentElement.remove();
    });
    var td3 = document.createElement("td");
    td3.appendChild(del);
    tr.appendChild(td3);
    document.getElementById("tbody").appendChild(tr);

}
