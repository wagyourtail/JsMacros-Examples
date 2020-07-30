from java.util import HashMap

f = request.get('http://wagyourtail.xyz/')
#chat.log(f.responseCode)
chat.log(buffer(f.byteArray()))
#chat.log(f.headers)

#f = request.post('https://postman-echo.com/post', "{\"aaaa\":\"wfauf\"}", {"Content-Type":"application/json"})
#chat.log(f.responseCode)
#chat.log(buffer(f.byteArray()))
#chat.log(f.headers)
