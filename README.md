# hpro.xyz

An HypeProxy.io's tool to find your own IP address and more informations.

![](https://img.shields.io/badge/Made%20With-Flask-blue)
![](https://img.shields.io/badge/license-MIT-lightgrey.svg)


### Get IP
```bash
$ curl http://hpro.xyz/
```
```
27.159.39.27
```

### Get Headers
```bash
$ curl http://hpro.xyz/headers
```
```
{
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "en-GB,en;q=0.9,en-US;q=0.8,fr;q=0.7,ru;q=0.6,pt;q=0.5",
  "Connection": "close",
  "Host": "hpro.xyz",
  "Total-Route-Time": "0",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0",
  "X-Forwarded-For": "27.159.39.27",
  "X-Forwarded-Port": "80",
  "X-Forwarded-Proto": "http",
}
```

### Get User Agent
```bash
$ curl http://hpro.xyz/user-agent
```
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.66
```
