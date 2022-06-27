Về mặt layer, một function nên có cấu trúc như sau:

![](Source/Assets/Pasted%20image%2020220613095217.png)
Mục đích của cấu trúc này là để dễ tách các code business ra khỏi code xử lý hạ tần.

## Layer IO

Ở layer IO, chúng ta parse input dựa theo hạ tần (SNS, Pub/Sub), cho ra kết quả là struct `request`. Sau đó map struct request này với struct `input`. Cũng tại layer này, ta dựa lấy struct `output` và trả về struct mà hạ tần yêu cầu (API Gateway, SNS).

## Layer service

Layer này bọc lại các service mà business cần sử dụng, ví dụ như database, event. Các service này dùng interface để giao tiếp với business, nhưng bên trong sẽ implement phù hợp với hạ tần.

## Layer business

Layer này chứa code xử lý business. Nó cần độc lập với hạ tần và có thể di chuyển qua bất cứ một hạ tần mới nào.