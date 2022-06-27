## Hardware

## Shopping List

- [Diodes]([https://shopee.vn/-Sale-%C4%90i-%E1%BB%91t-Diode-1N4148-DO35-450mA-100V-](https://shopee.vn/-Sale-%C4%90i-%E1%BB%91t-Diode-1N4148-DO35-450mA-100V-)(1N4148-DIP)-(10c)-i.175062443.7233893886)
- RGB Led 2 pin
- WS2812
- Switch
- Keycap
- ESP-32
- MCP23017
- SSD1306

## Plate & Case

Sử dụng phần mềm: [Plate & Case Builder]([http://builder.swillkb.com/](http://builder.swillkb.com/))

## Switch
Sử dụng switch red là vừa tay nhất

## Firmware

Ban đầu mình định sử dụng arduino và teensy, nhưng sau đó số lượng pin trên teensy không đủ nhiều nên đành chuyển qua sử dụng ESP32

## Layout

Sử dụng [Keyboard Layout Builder]([http://www.keyboard-layout-editor.com/](http://www.keyboard-layout-editor.com/)) để tạo layout.

```json

[{a:7},"~\n`","!\n1","@\n2","#\n3","$\n4","%\n5","^\n6","&\n7","*\n8","(\n9",")\n0","_\n-","+\n=","<-", "delete","Home"],

[{w:1.5},"Tab","Q","W","E","R","T","Y","U","I","O","P","{\n[","}\n]",{w:1.5},"|\n\\","Page Up"],

[{w:1.75},"Caps Lock","A","S","D","F","G","H","J","K","L",":\n;","\"\n'",{w:2.25},"Enter","Page Down"],

[{w:2.25},"Shift","Z","X","C","V","B","N","M","<\n,",">\n.","?\n/",{w:1.75},"Shift","↑","End"],

[{w:1.25},"Control",{w:1.25},"Option",{w:1.25},"CMD",{w:3},"Space",{w:2},"Space",{w:3},"space",{w: 1.25},"Fn","←","↓","→"]

```

## Firmware

Dùng thư viện MCP23017

Sử dụng 1 con MCP23017 để handle row và con còn lại handle column.

## Scan Matrix

```
Set matrix to input_pullup
For each Rows
	set row to output_pulldown
	For each cols
		If coll is down
			code = layout(row, col)
		endif
	Endfor
	set row to input_pullup
Endfor
```