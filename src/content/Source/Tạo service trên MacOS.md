Để tạo system service trong MacOS thì cần tạo file plist như sau:

Path: `~/Library/LaunchAgents/self.system-care.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.system-care</string>
    <key>WorkingDirectory</key>
    <string>/Users/duocnguyen/Projects/duoc/system-care</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/duocnguyen/Projects/duoc/system-care/system-care</string>
        <string>push</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardErrorPath</key>
    <string>/Users/duocnguyen/Projects/duoc/system-care/log/system-care.error.log</string>
    <key>StandardOutPath</key>
    <string>/Users/duocnguyen/Projects/duoc/system-care/log/system-care.out.log</string>
  </dict>
</plist>

```

```bash
launchctl load ~/Library/LaunchAgents/self.system-care.plist
launchctl start com.system-care
launchctl list | grep system-care
```