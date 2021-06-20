# THỰC TẬP CHUYÊN MÔN NĂM HỌC 2020-2021
Họ và tên: Nguyễn Hoàng Nhật
Mã sinh viên : 5951071069     
* Lớp: Công nghệ thông tin-K59

## Đề tài: 
Giảng viên: Thầy Nguyễn Lê Minh. 

## Phần 1: Công nghệ sử dụng:
- Nodejs
- Socket.io
- WebRTC
## Phần 2: Các chức năng đã hoàn thành:
- Xem danh sách các phòng : Hiển thị các phòng đang được mở 
- Tạo Phòng : Tạo bằng cách nhập mã phòng, và tên giáo viên mở lớp
- Có thể cài đặt mật khẩu
- Có phòng bí mật(Không hiển thị phòng ở danh sách)
- Vào Phòng : Vào phòng theo 2 phương phápnhấn vào danh sách phòng hoặc nhập tên phòng
- Trang phonghoc.html : 
+ Có chức năng gọi video(phía tay phải)
+ Chat và hiển thị người tham gia phía tay trái đồng thời có chức năng gửi file
+ Có 1 bảng canva nhằm mục đích hỗ trợ dạy học
## Phần 3 : Các Chức Năng Chưa Hoàn Thành
- Chia sẻ màn hình vào canva
- Tạo tài khoản cho sinh viên hoặc giáo viên
- Cơ chế cài đặt mật khẩu chưa thật sự là hoàn hảo.
## Phần 4 :  Một số trường hợp không thể kết nối với nhau : 
- Máy tính fake IP bị ẩn ip gốc của máy vì thế khi vượt qua NAT sẽ không đến địa chỉ gốc của máy tính được. Trường hợp này thì không thể nào khắc phục.
- Máy tính ở nước ngoài(cụ thể DNS không phải của Google 8.8.8.8,8.8.8.4) vì Stun server và Turn server đang sài hàng mượn của Google. Nếu người dùng ở nước ngoài có thể tự thay đổi DNS trong máy tính hoặc mình tự tạo stun server riêng bản thân thì sẽ kết nối thành công. Ưu tiên việc tự thay đổi DNS vì tự tạo stun server tốn rất nhiều chi phí, mặc dù nó dễ làm. Trong báo cáo sẽ hướng dẫn tạo 1 Stun server riêng cho bản thân.
- Người dùng sử dụng các trình duyệt không hỗ trợ getmediastream vì thế không thể lấy Video. Vì thế nên dùng Safari hoặc Chrome.
## Hướng dẫn sử dụng:
Link web : https://hoconlineutc2.herokuapp.com/
Video hướng dẫn sử dụng : https://www.youtube.com/watch?v=NUcuA4emHKY
## So sánh bản demo : 
Link web demo cũ sử dụng asp.net : https://chatutc2asp.azurewebsites.net/ 
Web cũ chưa thực sự vượt mặt NAT( chỉ vượt qua Nat Traversal) nên chỉ hoạt động khi các peer cùng chung 1 Wifi.Còn web mới thì đã hoàn thành rất tốt, trừ 1 số trường hợp kể trên
Web cũ chỉ gọi P2P 2 người với nhau, web mới sử dụng mảng danh sách các Peer để kết nối Mesh với nhau nên gọi theo dạng nhiều người dùng.


Xin cám ơn!
