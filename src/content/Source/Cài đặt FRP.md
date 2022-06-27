## Cài đặt FRPS

Download file từ github

```bash
wget https://github.com/fatedier/frp/releases/download/v0.42.0/frp_0.42.0_linux_amd64.tar.gz
```

Giải nén nó:

```bash
tar -zxvf frp_0.42.0_linux_amd64.tar.gz
```

Di chuyển vào thứ mục vừa giải nén:

```bash
cd frp_0.42.0_linux_amd64
```

Chép file `frps` vào thư mục bin:

```bash
cp frps /usr/bin
```

Chép file service:

```bash
cp systemd/frpc.service /etc/systemd/system/.
chmod 754 /etc/systemd/system/frps.service
```

Chép file config:

```bash
mkdir /etc/frp
cp frps.ini /etc/frp/.
```

Config file `/etc/frp/frps.ini`

```ini
[common]
bind_port = 7000
kcp_bind_port = 7000
vhost_http_port = 8090
token = 2J6R3xfPBeHyKX
tcp_mux = true
subdomain_host = frp.duocnguyen.dev
dashboard_port = 7500

dashboard_user = admin
dashboard_pwd = ipIf08D3a42
```

Enable service:

```bash
systemctl enable frps.service
```

Chạy service

```
systemctl start frps.service
```

## Cài đặt FRPC

Cài đặt client:

```bash
brew install frp
```

Hoặc tải tại trang [Releases · fatedier/frp · GitHub](https://github.com/fatedier/frp/releases)

Config client:

```ini
[common]  
server_addr = 128.199.148.122  
server_port = 7000  
protocol = kcp  
token = 2J6R3xfPBeHyKX  
admin_addr = 127.0.0.1  
admin_port = 7400  
admin_user = admin  
admin_pwd = admin  
  
[fireass]  
type = http  
local_port = 8080  
subdomain = fireass
use_compression = true
```

Run client:

```bash
frpc -c ./frpc.ini
```