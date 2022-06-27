Bạn cần có một server đã [[Cài đặt nginx|cài đặt ngix]].

Point domain to nginx, và config nó.

Setup Nginx: `/etc/nginx/sites-available/pkg.trueprofit.goldencloud.dev`

```nginx
server {
    server_name pkg.trueprofit.goldencloud.dev;
    location ~ /.well-known {
        allow all;
        root /usr/share/nginx/html;
    }
    location ~ /([A-Za-z0-9_-]+)(/[A-Za-z0-9_.-]+)*$ {
        if ($args = "go-get=1") {
            return 200 '<meta name="go-import" content="$host/$1 git https://bitbucket.org/trueprofit/$1.git">';
        }
        return 302 https://bitbucket.org/trueprofit/$1;
   }
}
```

Cài đặt SSL:  [[Source/Cài ssl cho nginx]]