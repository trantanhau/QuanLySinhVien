/**
 * 
 */
//global variable(biến toàn cục)
var list = new DanhSachSV();
var validation = new Validation();
getLocalStorage();

function getEle(id){
    return document.getElementById(id);
}
function getStudentInfo(){
    var studentID = getEle("txtMaSV").value;
    var studentName = getEle("txtTenSV").value;
    var studentEmail = getEle("txtEmail").value;
    var studentPass = getEle("txtPass").value;
    var studentDate = getEle("txtNgaySinh").value;
    var studentCourse = getEle("khSV").value;
    var mathPoint = parseFloat(getEle("txtDiemToan").value);
    var physicPoint = parseFloat(getEle("txtDiemLy").value);
    var chemistryPoint = parseFloat(getEle("txtDiemHoa").value);
    //Kiem tra du lieu
    var isValid = true;
    //isValid chua ket qua sau khi ktr
    //&= : nối chuỗi bit (true  = 1; false = 0)
    isValid &= validation.checkEmpty(studentID,getEle("spanMaSV"),"Mã sinh viên không được để trống") &&
              validation.checkExist(studentID,getEle("spanMaSV"),"Mã sinh viên đã tồn tại", list.mangSV);

    isValid &= validation.checkEmpty(studentName,getEle("spanTenSV"),"Tên sinh viên không được để trống") &&
               validation.checkLetter(studentName, getEle("spanTenSV"),"Tên sinh viên không hợp lệ");

    isValid &= validation.checkEmpty(studentEmail, getEle("spanEmail"),"Email sinh viên còn trống") &&
                validation.checkEmail(studentEmail, getEle("spanEmail"),"Email không hợp lệ");

    isValid &= validation.checkEmpty(studentPass, getEle("spanPass"),"Password sinh viên còn trống") &&
                validation.checkLength(studentPass,getEle("spanPass"), "Mật khẩu phải có độ dài từ 6 - 12",6,12) &&
                validation.checkFormatPass(studentPass, getEle("spanPass"),"Password phải có ký tự hoa,ký tự đặc biệt, số");

    isValid &= validation.checkDropDown(getEle("khSV"), getEle("spanCourse"), "Phải chọn khóa học");

    isValid &= validation.checkDate(studentDate, getEle("spanDate"), "Ngày không hợp lệ");

    // isValid &= validation.checkEmpty(mathPoint, getEle("spanToan"),"Điểm bị trống") &&
    //             validation.checkNum(mathPoint, getEle("spanToan"), "Điểm không hợp lệ");
    if(isValid ){
    
    var sv = new SinhVien(studentID, studentName, studentEmail,studentPass,studentDate,studentCourse,mathPoint,physicPoint,chemistryPoint);
    //sv.tinhDTB(mathPoint, physicPoint,chemistryPoint);
    sv.tinhDTB(sv.toan, sv.ly, sv.hoa);
    return sv;
    }
}
function addStudentIntoTable(){
    var newStudent = getStudentInfo();
    if(newStudent != null){
    list.add(newStudent);
    console.table(list.mangSV);
    //lưu sinh viên mới xuống local 
    showStudentInTable(list.mangSV);
    setLocalStorage();
    }
}
function showStudentInTable(mangSV){
    var tbody = getEle("tbodySinhVien");
    var content = "";

    //Map() : duyệt mảng nhanh
    //item: đại diện 1 sinh viên 
    //string template : gõ thẻ html trong js
    mangSV.map(function(item){
        content += `
        <tr>
            <td>${item.maSV}</td>     
            <td>${item.tenSV}</td>
            <td>${item.email}</td> 
            <td>${item.date}</td>
            <td>${item.khoa}</td>
            <td>${item.dtb}</td>
            <td>
                <button class="btn btn-warning" onclick="deleteStudents('${item.maSV}')"> Delete </button>
            </td>
            <td>
                <button class="btn btn-info" onclick="updateStudents('${item.maSV}')"> Update </button>
        </td>
        </tr>
        `;
    });
    tbody.innerHTML = content;
}

// hàm lưu dữ liệu xuống local storage (kho lưu trữ offline)
function setLocalStorage(){
    // localStorage: luu tru xuong local , doi tuong tao san cua Js
    //json: loại dữ liệu đươc lưu xuống BackEnd và lấy lên
    //lưu mảng sinh viên - cần chuyển sang kiểu Json để lưu 
    // sử dụng đsoi tượng Json để chuyển kiêu dữ liệu từ mảng sang Json
    localStorage.setItem("StudentList", JSON.stringify(list.mangSV));
}
//Lấy dữ liệu và hiện lên UI từ local
function getLocalStorage(){
    //dữ liệu khi get là Json nên cần chuyển về kiểu mảng để hiển thị
    if(localStorage.getItem("StudentList") != null){
    list.mangSV = JSON.parse(localStorage.getItem("StudentList"));
    //console.log(arrayStudents); 
    //hiển thị lên table 
    showStudentInTable(list.mangSV);
    }
}
function deleteStudents(maSV){
    list.deleteStudent(maSV);
    //lưu dữ liệu mới xuống kho 
    setLocalStorage();
    //Hiển thị dữ liệu mới
    showStudentInTable(list.mangSV);
}
function updateStudents(maSV){
    var viTri = list.timViTri(maSV);
    if(viTri > -1){
        getEle("txtMaSV").setAttribute("disabled", true);
        getEle("txtMaSV").value = list.mangSV[viTri].maSV;
        getEle("txtTenSV").value = list.mangSV[viTri].tenSV;
        getEle("txtEmail").value = list.mangSV[viTri].email;
        getEle("txtPass").value = list.mangSV[viTri].pass;
        getEle("txtNgaySinh").value = list.mangSV[viTri].date;
        getEle("khSV").value = list.mangSV[viTri].khoa;
        getEle("txtDiemToan").value = list.mangSV[viTri].toan;
        getEle("txtDiemLy").value = list.mangSV[viTri].ly;
        getEle("txtDiemHoa").value = list.mangSV[viTri].hoa;
    }
}
//Hàm clear dữ liệu của form
function resetForm(){
    getEle("txtMaSV").removeAttribute("disabled");
    getEle("formQLSV").reset();
}
//ham update 
function updateForm(){
    var sv = getStudentInfo();
    list.update(sv);
    setLocalStorage();
    showStudentInTable(list.mangSV);
}

// getEle("btnSearch").onclick = function(){
//     var chuoiTimKiem = getEle("txtSearch").value;
//     var mangTK = list.Search(chuoiTimKiem);
//     console.log(mangTK);
//     showStudentInTable(mangTK);
// }
getEle("txtSearch").onkeypress = function(){
    var chuoiTimKiem = getEle("txtSearch").value;
    var mangTK = list.Search(chuoiTimKiem);
    console.log(mangTK);
    showStudentInTable(mangTK);
}