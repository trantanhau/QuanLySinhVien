/**
 * chưa danh sách tập hơp nhiều sinh viên 
 */

 function DanhSachSV(){
     this.mangSV = [];
     //phương thức 
     this.add = function(sv){
         this.mangSV.push(sv);
     }
     /*tìm vị trí sinh viên trong mảng, dựa vào mã sinh viên
      b1 : tạo 1 biến vị trí, giá trị khởi tạo viTri = -1;
      b2 : duyệt mảng 
        nếu sv.maSV === maSV(mã sinh viên được truyên từ UI)
        => gán vị trí tìm thấy cho biên viTri 
        nếu không tìm thấy thì viTri = -1 (không tìm thấy sinh nào)
     */
    this.timViTri = function(maSV){
        var viTri = -1;
        // some: kiểm tra phần tử có trong mảng hay không
        //item : là 1 sinh viên trong mảng  
        this.mangSV.map(function(item, index){
            if(item.maSV === maSV){
                viTri = index;
            }
        });

        return viTri;
    }
    this.deleteStudent = function(maSV){
        var viTri = this.timViTri(maSV);
        if(viTri > -1){
            this.mangSV.splice(viTri, 1);
        }
        else{
            console.log("Không tim thấy sinh viên");
        }
    }
    this.update = function(sv){
        var viTri = this.timViTri(sv.maSV);
        if(viTri > -1){
            list.mangSV[viTri] = sv;
        }
    }

    
}

//prototype 
DanhSachSV.prototype.Search = function(chuoiTimKiem){
    var mangTk = [];
    this.mangSV.map(function(item){
        //toLowerCase: chuyển chữ in hoa thành chữ thường
        //indexOf() :
        //"Tran Tan" dùng indexOf("tran") => kết quả là vị trí của từ cần tìm [0]
        if(item.tenSV.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
            mangTk.push(item);
        }
    });
    return mangTk;
}