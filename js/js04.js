function tinh() {
    var a = parseInt(document.forms["myform"]["first-number"].value);
    var b = parseInt(document.forms["myform"]["second-number"].value);
    console.log(a);
    var op = document.forms["myform"]["op"].value;
    console.log(op);
    var kq;
    switch(op)
    {
        case "+":
            kq = a + b;
            break;
        case "-":
            kq = a - b;
            break;
        case "*":
            kq = a * b;
            break;
        case "/":
            if(b == 0)
                kq = "Không thể thực hiện phép chia 0";
            else
                kq = a / b;
            break;
    }
    document.forms["myform"]["kq"].value=kq;
    return false;
}