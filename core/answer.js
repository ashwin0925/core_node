7. // Write respective headers object below.
  // Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.

General Headers

Request URL: https://altcampus.io/
Request Method: GET
Status Code: 200 
Remote Address: 128.199.85.71:443
Referrer Policy: no-referrer-when-downgrad

Response Headers

access-control-allow-credentials: true
access-control-allow-origin: *
access-control-expose-headers: 
cache-control: max-age=0, private, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Wed, 08 Jan 2020 16:47:01 GMT
server: nginx/1.10.3 (Ubuntu)
status: 200
x-content-type-options: nosniff
x-content-type-options: nosniff
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-frame-options: DENY
x-permitted-cross-domain-policies: none
x-request-id: 2njveecq9us6hhonvc00id51
x-xss-protection: 1; mode=block

Response Headers

:authority: altcampus.io
:method: GET
:path: /
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/;q=0.8,application/signed-exchange;v=b3
accept-encoding: gzip, deflate, br
accept-language: en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7
cache-control: max-age=0
cookie: _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYTURVNFgzUmYrOWZUbXM3U1Y2dXVOdz09.VhDjfGnt7QZeE0j_-WNrveZ41St_CxJ9NREzil8yVEc; _ga=GA1.2.553467577.1578051507; track_uid=72b735c1-7d59-a67b-9364-4894411b64cd; _gid=GA1.2.526370533.1578500605; _gat_gtag_UA_121886584_1=1
sec-fetch-mode: navigate
sec-fetch-site: none
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36


8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4

var url = require('url')

var adr = 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'

var q = url.parse(adr, true);
console.log(q)

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: null,
  search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  query: 'token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  pathname: '/api/v3',
  path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  href:
   'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4' }


// 9. // Write parsed query object

console.log(url.parse('http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',true).query)

[Object: null prototype] { token: '8372fcb8y2874b2t478t6t48cbtbc72t4' }