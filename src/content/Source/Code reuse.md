Code sharing có nhiều cấp độ, tuy nhiên phải dựa trên tinh thần độc lập, nhằm mục đích giảm công sức bảo trì khi có thay đổi, nhưng dung hoà với sự ràng buộc cần có.

Quan điểm rằng copy/paste code sẽ luôn dễ hơn handle sự kế thừa. Một phần vì các function của chúng ta được build độc lập, nghĩa là khi có break change xảy ra ở package `util` , thì các break change này chỉ được phát hiện khi function được build, nếu quá lệ thuộc vào `util`, nghĩa là break change này ảnh hưởng tới quá nhiều function, thì sự thay đổi đó sẽ rất khó bị phát hiện và có thể gây ra lỗi nghiêm trọng trong tương lai.

Việc copy/paste có thể sẽ mất thời gian, có thể bỏ sót, nhưng sẽ không bao giờ khiến một function hành động bất thường khi chúng ta không động vào.

## Share code trong một package

Nếu nhiều function nằm chung trong một package mà vần share code với nhau, hãy tạo thư mục `internal` và tạo các package cần share trong đó. Thư mục `internal` này sẽ không bao giờ được go gọi ý hoặc cho phép import từ một package khác, vì vậy sẽ giảm sai lầm, code đỡ rối.

## Share code giữa các package

Chỉ nên share các const, variable, struct và interface. Mục đích là để tạo ra một interface giữa các package với nhau chứ không phải để share code business.

Trong trường hợp cần share này thì tạo thư mục `pkg` và đặt các package cần share ở trong đó.

## Share code giữ các package tạo thành vòng lặp

Khi package A import package B, đồng thời package B cũng import package A thì sẽ tạo thành vòng lặp và gây ra lỗi. Trong trường hợp đó xem xét sắp xếp lại package sao cho không trùng nữa, trường hợp không thể khác được thì hãy đưa vào package `util`.

![](Assets/Pasted%20image%2020220613105403.png)