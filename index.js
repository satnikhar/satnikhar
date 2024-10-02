const express= require('express');
const path = require('path');

const app = express();
const pathPublic = path.join(__dirname,'Public');
app.use(express.static(pathPublic));


app.get('/', (req, resp)=>{

    resp.sendFile(`${pathPublic}/index.html`)

});
app.get('/about', (req, resp)=>{

    resp.sendFile(`${pathPublic}/about.html`)

});

app.listen(8000);

