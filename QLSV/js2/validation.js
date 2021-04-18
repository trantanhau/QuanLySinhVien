//phương thức giúp ktr dữ liệu 
function Validation(){
    this.checkEmpty = function(inputValue, spanELE, message){
        if(inputValue.trim() === ""){
            spanELE.innerHTML = message;
            return false;
        }
        else{
            spanELE.innerHTML = "";
            return true;
        }
    }
    this.checkExist = function(inputValue, spanELE, message, mangSV){
        // duyệt mảng sinh viên 
        //some : duyệt mảng và trả về giá trị true false dựa vào điều kiện so sánh 
        var isExist = false;
        isExist = mangSV.some(function(item){
            return inputValue.trim() === item.maSV;
        });
        //nếu mã bị trùng 
        if(isExist){
            spanELE.innerHTML = message;
            return false;
        }
        else{
            spanELE.innerHTML = "";
            return true;
        }
    }
    this.checkLetter = function(inputValue, spanELE, message){
        var letters = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );
        //test : phuong thuc cua regexp giup so sanh gia tri co trung voi bieu thuc hay khong
        if(letters.test(inputValue)){
            //hop le
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkEmail = function(inputValue, spanELE, message){
        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputValue.match(emailPattern)){
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkLength = function(inputValue, spanELE, message, min, max){
        if(inputValue.length >= min && inputValue.length <= max){
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkFormatPass = function(inputValue, spanELE, message){
        var format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(inputValue.match(format)){
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkDate = function(inputValue, spanELE, message){
        var date = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if(inputValue.match(date)){
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }
        

    }
    this.checkDropDown = function(selectElement,spanELE, message){
        if(selectElement.selectedIndex != 0){
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkNum = function(inputValue, spanELE, message){
        var num = /^(\d{1,2}(\.\d{1,2})?)$/;
        if(inputValue.match(num)){
            spanELE.innerHTML = "";
            return true;
        }
        else{
            spanELE.innerHTML = message;
            return false;
        }

    }
}