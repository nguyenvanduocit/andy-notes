## Service file

Path: `/usr/lib/systemd/system/govanityurls.service`

```ini
[Unit]
Description=govanityurls instance
Documentation=https://github.com/GoogleCloudPlatform/govanityurls
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
Restart=on-failure
WorkingDirectory=/root/govanityurls
RuntimeDirectoryMode=0750
ExecStart=/root/go/bin/govanityurls
Environment=PORT=8081

[Install]
WantedBy=multi-user.target

```

## Usage

```bash
service govanityurls
```

## Related

[[Tạo service trên MacOS]]