// -----------Бие даалт - 2 --------------


function Salarybasic() {
    var salary = document.getElementById("salary").value;
    var twozero = ".00";
   
    // -----Salaryall------
    var s2 = "";
    var s = "";
    s2 = salary.split(",");
    for(i = 0; i < s2.length; i++)
    {
        s += s2[i];
    }
    s = parseInt(s);
    // ҮНДСЭН ЦАЛИН-Сарынүндсэн цалин
    sum = "";
    sum = sum.concat(Mongondun(s));
    sum= sum.concat(twozero);
    document.getElementById("basic").innerHTML = sum;

    // НДШ-АО-Ажил олгочоос төлөх
    var ndsh = s * 12.5 / 100;
    var b = "-";
    b = b.concat(Mongondun(ndsh));
    b = b.concat(twozero);
    document.getElementById("ndsh_price").innerHTML = b;

    // ЦАЛИН БҮГД
    var allsalary = ndsh + s;
    var c = "";
    c = c.concat(Mongondun(allsalary));
    c = c.concat(twozero);
    document.getElementById("all_salary").innerHTML = c;

    // НДШ-Хувь хүн төлөх(2% + 9.5%)
    var ndsh2 = s * 11.5 / 100;
    var d = "-";
    d = d.concat(Mongondun(ndsh2));
    d = d.concat(twozero);
    document.getElementById("ndsh2_price").innerHTML = d;

    // ХХОАТ 10%
    var hhoat = (s - ndsh2) / 10;
    var e = "-";
    e = e.concat(Mongondun(hhoat));
    e = e.concat(twozero);
    document.getElementById("hhoat_10").innerHTML = e;

    // Хөнгөлөлт - ХХОАТ-ийн хөнгөлөлт
    var discount;
    if(s <= 1000000)
        discount = 18000;
    else if(s > 1000000 && s < 1500000)
        discount = 16000;
    else 
        discount = 14000;
    // ------
        var f = "+";
        f = f.concat(Mongondun(discount));
        f = f.concat(twozero);
        document.getElementById("discount").innerHTML = f;

    // ГАРТ ОЛГОХ
    var hand =  s - (ndsh2 + hhoat) + discount;
    var g = "";
    g = g.concat(Mongondun(hand));
    g = g.concat(twozero);
    document.getElementById("hand").innerHTML = g;

    // НДШ-ийн Буцаалт(4.75%)
    var ret = s * 4.75 / 100;
    var h = "+";
    h = h.concat(Mongondun(ret));
    h = h.concat(twozero);
    document.getElementById("return").innerHTML = h;

}

function Mongondun(n) {
        var a = [];
        n2 = n;
        var c = 0, p;
        while(n2 > 0) {
            a[c] = n2 % 10;
            n2 = Math.floor(n2 / 10);
            c++;
        }
        var s = " ";
        var tas = ",";
        p = 0;
        for(var i = 0; i < c; i++)
        {
            if(p == 3) {
                s = s.concat(tas);
                p = 0;
            }
            s = s.concat(a[i]);
            p++;
        }
        var s2 = " ";
        var l = s.length;
        var k = l - 1;
        for(var i = 0; i < l; i++,k--)
        {
            s2 = s2.concat(s[k]);
        }
        return s2;
}