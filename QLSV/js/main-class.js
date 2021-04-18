/**
 * function getStudentInfo(){}
 * function calAverage(){}
 * function setRank(){}
 * function showStudentInfo(){}
 */

//rut go cu phap document.getElementByID
//id : ten id cua the (string)
function getEle(id){
    // var ele = document.getElementById(id);
    // return ele;
    return document.getElementById(id);
}
function getStudentInfo(){
    var studentID = getEle("txtMaSV").value;
    var studentName = getEle("txtTenSV").value;
    var studentAbout = getEle("loaiSV").value;
    var mathPoint = parseFloat(getEle("txtDiemToan").value);
    var literPoint = parseFloat(getEle("txtDiemVan").value);
    console.log(studentID,studentName,studentAbout,mathPoint,literPoint);

    //Gọi lớp đói tượng phải tạo thể hiện của lớp đói tượng 
    var sv = new SinhVien(studentID, studentName, studentAbout, mathPoint, literPoint);
    console.table(sv);
    var result = sv.tinhDTB(sv.toan, sv.van);
    var rank = sv.xepLoai(result);
    showStudentInfo(sv.ma, sv.ten, sv.loai, result, rank);
    
}

function showStudentInfo(stuName, stuID, aboutStu, stuAve, stuRank){
    getEle("spanTenSV").innerHTML = stuName;
    getEle("spanMaSV").innerHTML = stuID;
    getEle("spanLoaiSV").innerHTML = aboutStu;
    getEle("spanDTB").innerHTML = stuAve;
    getEle("spanXepLoai").innerHTML = stuRank;
}