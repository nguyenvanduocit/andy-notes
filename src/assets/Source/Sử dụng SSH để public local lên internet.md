Dùng ssh để forward request từ server về máy client.

Config trên server:

```
vi /etc/ssh/sshd_config
```

Edit nội dung như sau:

```
GatewayPorts yes
```

Restart service:

```
service ssh restart
```

Connect from client:

```
ssh -fNT root@68.183.188.160 -R 80:127.0.0.1:8080
 
    root - username
    68.183.188.160 - server address
    80 - port number that will be opened on remote server - our proxy server
    127.0.0.1 - IP address we open tunnel to
    8080 - port number we open tunnel to
```