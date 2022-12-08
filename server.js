const PORT = 3000;
const http = require('http');
function handler(req, res){
   
    res.setHeader('Access-Control-Allow-Origin', '*');

    const send = (payload = {}, statusCode = 200) =>{
        res.writeHead(statusCode, {'Content-Type' : 'application/json'});
        res.write(JSON.stringify(payload));
    }
    switch(req.url){
        case '/':
            send({message : 'Olá sorak/'});
        break;

        case '/status':
            send({message: `O servidor está rodando`, uptime:process.uptime()});
        break;

        default:
            send({message: 'Página não encontrada'}, 404);
        break
    }
    res.end();

}
http
    .createServer(handler)
    .listen(PORT, () =>{
        console.log(`The api is running on port: ${PORT}`)
    });
