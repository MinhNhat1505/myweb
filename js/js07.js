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
 }