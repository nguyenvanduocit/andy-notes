Có khá nhiều feature, tốt hơn ngrok, localtunnel, nhưng ở đây chỉ bắt đầu với việc sử dụng frp để expose **localhost** dưới một **subdomain** bất kỳ, có **SSL**.

Cài đặt bao gồm 3 phần:

1.  Cài đặt domain
2.  Cài đặt frps trên server
3.  Cài đặt frpc trên máy local

## 1. Cài đặt domain

Tạo 2 record như sau, với value là IP của server mà bạn muốn dùng để cài đặt frp:

1. `frp.duocnguyen.dev.`
2. `*.frp.duocnguyen.dev.`

## 2. Cài đặt server
![[Cài đặt FRP#Cài đặt FRPS]]
### Cài nginx

![[Cài đặt nginx#^bc4a00]]

![[Cài ssl cho nginx]]

# Cài đặt client
![[Cài đặt FRP#Cài đặt FRPC]]

# Sử dụng

Chạy server của mình:

```bash
go run ./cmd/server/...
```

Chạy frp:

```bash
frpc -c ./frpc.ini
```

Truy cập vào trang:

```bash
https://fireass.frp.duocnguyen.dev/ping
```