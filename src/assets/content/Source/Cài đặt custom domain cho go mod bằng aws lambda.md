Tạo Lambda function tên `go-module-proxy` bằng nodeJs:

```js
const hosts = {
    'mongo-go-driver': 'https://github.com/trueprofit',
    'go-shopify': 'https://github.com/goldencloud-io',
    '*': 'https://bitbucket.org/trueprofit',
}

exports.handler = async (event) => {
    // console.log(event)
    
    const pkg = event.path.substring(1)
    let host = hosts[pkg] || hosts['*']

    if (event.queryStringParameters && event.queryStringParameters['go-get'] == '1') {
        return {
            statusCode: 200,
            body: `<meta name="go-import" content="${event.headers.Host}${event.path} git ${host}${event.path}.git">`
        }
    }

    return {
        statusCode: 302,
        headers: {
            Location: `${host}${event.path}`
        }
    }
};
```

Map function này với API gateway:

![[Pasted image 20220526174453.png]]

Map custom domain vào resource mới tạo này:

![[Pasted image 20220526174654.png]]