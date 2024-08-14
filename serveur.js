http = require("http");
fs = require("fs");

server = http.createServer();

server.on("request",(req,res)=>{
    console.log("requete recu");
    fs.readFile
    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8"
    });
    res.write("<b>Bonjour</b> de la part de nodejs");
    // res.writeHead(210,{
    //     "content-type":"text/json"
    // });
    // res.write('"nom":"kithor","prenom":"souli"');
    res.end();
})

server.listen(8080,()=>{
    console.log("Serveur en écoute ...")
});