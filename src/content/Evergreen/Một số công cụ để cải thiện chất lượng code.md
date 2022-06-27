Cải thiện chất lượng code là một mục tiêu quan trọng cho develop. Chúng ta không giữ nguyên chất lượng code năm này qua tháng nọ, mỗi ngày đều phải code tốt, chất lượng hơn những ngày còn lại. Vậy có những cách và công cụ nào để giúp cải thiện chất lượng code mỗi ngày? Hãy cùng xem qua một số phươn pháp sau nhé:

## Lint

Lint là bước dùng để kiểm tra xem code của bạn có thoả một số tiêu chí được đặt ra hay không. Đối với Golang, thì Go fmt đã là một cộng rất tiện lợi rồi, nhưng thông qua kinh nghiệm của cộng đồng, thì chúng ta có thêm nhiều rule cụ thể hơn nữa. Một công cụ hiệu quả để veryy các role này là golanglint-ci.
![Config golanglint-ci](../Source/Lint%20code%20Golang%20bằng%20golanglint-ci.md#Config%20golanglint-ci)

## Husky

Nhưng ta không thể yêu cầu các developer khác tự chạy lint mỗi khi họ commit được. Để khắc phục vấn đề này ta phải làm sao cho việc này tiện lợi và tự động nhất có thể. Ở đây mình sẽ dùng husky để tự động chạy một lệnh nào đó dựa vào các hook của git.

![Check commit bằng husky](../Source/Check%20commit%20bằng%20husky.md)
## Validate golang struct

Và cuối cùng là ở trong code. Chúng ta muốn validate một struct nào đó là có đáp ứng đụng rule hay không. Ta có thể dễ làm với một function, nhưng sẽ tiện và gọn hơn nếu ta định nghĩa phần validate ngay tại nơi chúng ta định nghĩa struct. Và một cách tốt để làm việc này là sử dụng thư viện validate để validate một struct dựa trên stuct tag của nó.

![Validate struct](../Source/Validate%20struct.md)

