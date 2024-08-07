
const http = require('http');

http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write({name:'Satish', email:'sat@gmail.com'})
}).listen(5000);

