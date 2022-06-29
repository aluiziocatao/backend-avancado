const http = require('http')
const data = require('./url.json')
const URL = require('url')

http.createServer((req, res) => {
    // res.end(JSON.stringify(data))

    const {name, url, del} = URL.parse(req.url,true).query

    if(!name || !url){
        return res.end('show')
    }

    if(del) {
        return res.end('delete')
    }

    return res.end('create')

}).listen(3000, () => console.log('API is running'));

// Para Testes
// URL para retorno SHOW: http://localhost:3000/index.js
// URL para retorno CREATE: http://localhost:3000/index.js?name=google&url=www.google.com.br
// URL para retorno DELETE: http://localhost:3000/index.js?name=google&url=www.google.com.br&del=1
