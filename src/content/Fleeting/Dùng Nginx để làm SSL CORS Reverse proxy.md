```nginx
server {
    server_name unleash.trueprofit.dev;
    listen 443 ssl;
    
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header    Host            $host;
        proxy_set_header    X-Real-IP       $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header    REMOTE-HOST $remote_addr;

        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' "$http_origin" always;
            add_header 'Access-Control-Allow-Credentials' 'true' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,if-none-match,Keep-Alive,Origin,User-Agent,X-Requested-With' always;
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain charset=UTF-8';
            add_header 'Content-Length' 0;
            return 204;
        }

        if ($request_method ~ '(GET|POST|PATCH|PUT|DELETE)') {
            add_header 'Access-Control-Allow-Credentials' 'true' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,if-none-match,Keep-Alive,Origin,User-Agent,X-Requested-With' always;
        }
    }
    ssl_certificate /etc/letsencrypt/live/unleash.trueprofit.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/unleash.trueprofit.dev/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

```