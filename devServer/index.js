const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.DEV_PORT || 3000)

app.use(express.static(path.join(__dirname, '../public')))
app.get('*'|| '*/*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, '../public/index.html'));                               
});
app.listen(app.get('port'), ()=>{
    console.log("server connected")
    console.log("port:  ", app.get('port'))
})