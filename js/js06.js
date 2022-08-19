function dangKy() {
    var ten = document.forms.reg["tenTXT"].value;
    var mk = document.forms.reg["mkTXT"].value;
    var ns = document.forms.reg["ngaysinh"].value; 
    var gt = document.forms.reg["gioi-tinh"].value;
    var qt = document.forms.reg["qt"].value;
    document.forms.reg["kq"].value = "Chào mừng " + ten +
    "\nBạn là " + gt + "\nMật khẩu bạn có " + mk.length + " kí tự \n"
    + "Bạn sinh ngày " + ns + "\nVấn đề bạn quan tâm là: " + qt;
    return false; 
}