function reverse() {
    var s = document.getElementById("s1").value;
    arr = s.split(" ");//tách chuỗi vào mảng
    var i,kq = "";
    for(i = arr.length - 1;i >= 0;i--)
        kq += arr[i].trim() + " ";
    document.getElementById("s1").value = kq.trim();
}

function normal() {
    var s = document.getElementById("s1").value;
    arr = s.split(" ");
    var i,kq= "",tmp;
    for(i = 0;i < arr.length;i++)
    {
        tmp = arr[i].trim().toLowerCase();
        if(tmp != "")
        {
            //in hoa ký tự đầu
            tmp = tmp.substr(0,1).toUpperCase() + tmp.substr(1);
            kq += tmp + " ";
        }
    }
    document.getElementById("s1").value = kq.trim();
    console.log(strOrigin);
}

function reset() {
    console.log(strOrigin);
    document.getElementById("s1").value = strOrigin;
}

function replaceAll() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var token = new RegExp(s2,"ig");
    s1 = s1.replace(token,s3);//thay thế s2 = s3 ko phân biệt in hoa
    document.getElementById("s1") = s1;
}

function delAll() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var token = new RegExp(s2,"ig");
    s1 = s1.replace(token,'');//thay thế s2 = s3 ko phân biệt in hoa
    document.getElementById("s1") = s1;
}

function insert() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var pos = document.getElementById("txtPos").value;
    if(pos == "")
    {
        alert("Vị trí chưa nhập");
        return false;
    }
    pos = Number(pos);
    if(isNaN(pos) || pos < 0 || pos > s1.length)
    {
        alert("Vị trí không hợp lệ");
        return false;
    }
    if(s2 == "")
    {
        alert("Chưa nhập chuỗi s2");
        return false;
    }
    var kq = insertAt(s1,s2,pos);
    if(kq)
        document.getElementById("s1").value = kq;
}

function insertAt(main_string,int_string,pos) {
    return main_string.slice(0,pos) + int_string + main_string.slice(pos);
}

function xoayChu() {
    var str = document.getElementById("title").value;
    str = str.substr(str.length - 1) + str.substr(0,str.length - 1);
    document.getElementById("title").innerHTML = str;
}
