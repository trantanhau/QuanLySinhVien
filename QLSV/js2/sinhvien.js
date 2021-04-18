/**
 * chứa thông tin chi tiết của sinh viên 
 */
function SinhVien(_studentID, _studentName, _studentEmail,_studentPass, _studentDate, _studentKhoa, _mathPoint, _physicPoint, _chemistryPoint){
    //thuoc tinh
    this.maSV = _studentID;
    this.tenSV = _studentName;
    this.email = _studentEmail;
    this.pass = _studentPass;
    this.date = _studentDate;
    this.khoa = _studentKhoa;
    this.toan = _mathPoint;
    this.ly = _physicPoint;
    this.hoa = _chemistryPoint;
    this.dtb = 0;

    this.tinhDTB = function(diemToan, diemLy, diemHoa){
        this.dtb = ((diemToan + diemLy + diemHoa)/3).toFixed(2);
    }
}