Trong dự án TrueProfit[^1] mình đã từng dịch chuyển giữa hai git server khác nhau, Ban đầu dùng Gitlab, sau đó đổi qua Bitbucket và về sau này đang chuyển đổi một số repo qua Github.

Nhưng mình đã không gặp nhiều khó khăn trong quá trình di chuyển này nhờ vào việc sử dụng custom domain.

Nếu sử dụng git URL của từng dịch vụ thì trong code sẽ import như sau:

```go
import "bitbucket.com/mongo-driver/bson/primitive"
```

Vậy lúc thay đổi qua một dịch vụ khác sẽ phải tìm và sửa lại code trong mọi file, rất bất tiện, nếu sai sót có thể dẫn tới nhiều lỗi khó debug. Trong một hệ thống serverless thì việc sót là dễ xảy ra.



Nhưng ngay từ đầu, mình đã sử dụng custom domain cho go, nên không cần thay đổi gì trong code. Cũng như có thể sử dụng nhiều dịch vụ cùng lúc.

Vấn đề còn lại là làm sao để go mod biết remote url để pull code về.

# Cách go mod get code

Custom domain được trỏ về một server hoặc Lambda function, server này nhận request của `go mod` và trả về thông tin mà `go mod` cần để get source về.

Khi dùng `go get` thì go sẽ gửi request tới url kèm theo query `go-get=1`. Lúc này server cần trả về file html với meta `go-import` chứa content là path tới git, Ví dụ như sau:

```html
<meta name="go-import" content="pkg.trueprofit.goldencloud.dev/internalfns git https://bitbucket.org/trueprofit/internalfns.git">
```

Do đó ta chỉ cần làm sao cho server trả về content như vậy là được.

# Cài đặt server

Ban đầu mình sử dụng nginx [^2] sau đó đổi qua lambda[^3] .

![[Cài đặt custom domain cho go mod sử dụng nginx]]

![[Cài đặt custom domain cho go mod bằng aws lambda]]

# Sử dụng

Đồng thời  go get cũng thực hiện checksum repo bằng dịch vụ của go, nhưng private repo thì không được checksum vì vậy sẽ bị lỗi.

Nếu bạn server trả về private repo, thì bạn cần phải setup biết môi trường `GOPRIVATE` và chỉ định git sử dụng `ssl` thay vì `http`:

![[Go mod import private repo]]

[^1]: [[Tại sao TrueProfit?]]
[^2]: [[Cài đặt custom domain cho go mod sử dụng nginx]]
[^3]: [[Cài đặt custom domain cho go mod bằng aws lambda]]