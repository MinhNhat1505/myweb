function reset() {
    document.getElementById("s1").value = strOrigin;
 }

 function normal() {
    var s1 = document.getElementById("s1").value;
    arr = s1.split(" ");//tách chuỗi vào mảng
    var kq = "";
    for(let i = 0;i < arr.length;i++)
    {
        let tmp = arr[i].trim().toLowerCase(); // lấy từng phần tử cho về in thường
        if(tmp != "") {
            tmp = tmp.substr(0,1).toUpperCase() + tmp.substr(1);
            kq += tmp + " ";
        }
    }
    document.getElementById("s1").value = kq.trim();
 }

 function reverse() {
    var s1 = document.getElementById("s1").value;
    arr = s1.split(" ");
    var kq = "";
    for(let i = arr.length - 1;i >= 0;i--)
        kq += arr[i].trim() + " ";
    document.getElementById("s1").value = kq.trim();
 }

 function replaceAll() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var token = new RegExp(s2,"ig");
    s1 = s1.replace(token,s3);
    document.getElementById("s1").value = s1;
 }

 function insertAt(main_string,ins_string,pos) {
    return main_string.slice(0,pos) + ins_string + main_string.slice(pos);
 }

 function insert() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var pos = document.getElementById("txtPos").value;
    if(pos == "")
    {
        alert("Vui lòng nhập vị trí cần chèn");
        return false;
    }
    pos = Number(pos)
    if(pos < 0 || pos > s1.length || isNaN(pos))
    {
        alert("Vị trí không hợp lệ");
        return false;
    }
    if(s2 == "")
    {
        alert("Vui lòng nhập chuỗi 2");
        return false;
    }
    var result = insertAt(s1,s2,pos);
    if(result)
        document.getElementById("s1").value = result;
 }

 function delAll() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var token = new RegExp(s2,"ig");
    s1 = s1.replace(token,'');
    document.getElementById("s1").value = s1;
 }