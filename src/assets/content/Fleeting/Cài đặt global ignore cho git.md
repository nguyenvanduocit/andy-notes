Tùy mỗi hệ điều hành khác nhau mà sẽ có những file đặt biệt được sinh ra bởi hệ điều hành. Nhưng việc đưa các file của từng hệ điều hành vào trong file ignore của project được xem là không nên. [[Ignote system-specific to .gitignore is a poor practice]].

Vì vậy ta có thể ignore global như sau:

Tạo file `~/.gitignore`:

```
# Node
npm-debug.log

# Mac
.DS_Store

# Windows
Thumbs.db

# WebStorm
.idea/

# vi
*~

# General
log/
*.log
```

Và config git để sử dụng file này làm global ignore:

Mac:

```
git config --global core.excludesfile ~/.gitignore
```

WIndows:

```
git config --global core.excludesfile "%USERPROFILE%\.gitignore"
```
