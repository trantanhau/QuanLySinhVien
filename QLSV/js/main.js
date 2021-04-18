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

    var result = calAverage(mathPoint, literPoint);
    console.log(result);

    var rank = setRank(result);
    console.log(rank);

    showStudentInfo(studentID, studentName, studentAbout,result, rank);
    
}
function calAverage(mathPoint, literPoint){
    var result = (mathPoint + literPoint) /2;
    return result;
}
function setRank(result){
    if(result > 8.5 && result <= 10){
        return "Gioi";
    }else if(result > 6.5 && result <= 8.5){
        return "Kha";
    }else if(result > 5 && result <= 6.5){
        return "Trung Binh";
    }else{
        return "Yeu";
    }
}
function showStudentInfo(stuName, stuID, aboutStu, stuAve, stuRank){
    getEle("spanTenSV").innerHTML = stuName;
    getEle("spanMaSV").innerHTML = stuID;
    getEle("spanLoaiSV").innerHTML = aboutStu;
    getEle("spanDTB").innerHTML = stuAve;
    getEle("spanXepLoai").innerHTML = stuRank;
}