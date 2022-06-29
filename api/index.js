// Importações dos módulos htpp, e url para suas respectivas variáreis htpp e URL.
const http = require('http')
const data = require('./url.json')
const URL = require('url')

// Criação de um servidor
http.createServer((req, res) => {
    // res.end(JSON.stringify(data))

    // Preenchimento das variavéis com os dados passado na url
    const {name, url, del} = URL.parse(req.url,true).query

    // Verifica se não existe o NAME e a URL na passagem dos dados pela URL.
    if(!name || !url){
        return res.end('show')
    }
    // Verifica se existe o DEL na passagem dos dados pela URL
    if(del) {
        return res.end('delete')
    }
    // Retorno obtido caso os dados nas variáveis NAME e URL existam. 
    return res.end('create')

}).listen(3000, () => console.log('API is running'));

// Para Testes
// URL para retorno SHOW: http://localhost:3000/index.js
// URL para retorno CREATE: http://localhost:3000/index.js?name=google&url=www.google.com.br
// URL para retorno DELETE: http://localhost:3000/index.js?name=google&url=www.google.com.br&del=1
