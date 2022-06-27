Một dự án nhỏ mà mình sử dụng thư viện [ESPHome](https://esphome.io/) để tự động hóa một số thứ trong nhà.

Về hardware thì sử dụng ESP-32 và ESP-01 từ các công tắt tự động của [Sonoff](https://sonoff.tech/)

Xem thêm tại đây: [GitHub - nguyenvanduocit/esp-home: Config for all my esp-home devices](https://github.com/nguyenvanduocit/esp-home)

Project chứa config của các thiết bị trong nhà tôi:

1.  senses.yaml: Thiết bị đóng vai trò như các giác quan. Nó sẽ cảm nhận nhiệt độ, độ ẩm, sự hiện diện của các thành viên trong nhà.
2.  catnanny.yaml: Thiết bị chăm sóc mèo có thể cho mèo ăn và uống, tương lai có thể chơi và tạo độ ấm cho chỗ ngủ của mèo.
3.  wallfan.yaml: Thiết bị quản lý quạt treo tường sử dụng sonoff basic 1
4.  matrixnotifier.yaml: Thiết bị notify một số thông báo quan trọng sử dụng đèn led