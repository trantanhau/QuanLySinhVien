/**
 * function : khai báo lớp đối tượng 
 * JavsScript(ES5) : function
 * hàm thông thường : camel;
 * lớp đối tượng : pascal case: NhanVien, GiangVien,...
 * JavaScript(ES6)
 */

 function SinhVien(_studentID, _studentName, _studentAbout, _mathPoint, _literPoint){
     //thuộc tính 
     this.ma = _studentID;
     this.ten = _studentName;
     this.loai = _studentAbout;
     this.toan = _mathPoint;
     this.van = _literPoint;

     //phương thức 
     this.tinhDTB = function(mathPoint, literPoint){
        var result = (mathPoint + literPoint) /2;
        return result;
     }
     this.xepLoai = function(result){
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
 }