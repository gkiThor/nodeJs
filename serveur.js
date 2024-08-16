http = require("http");
fs = require("fs");

server = http.createServer();

server.on("request",(req,res)=>{

    console.log("requete recu");
    console.log(req.url);//recuperer les parametres passe dans url

    tab=req.url.split("=");
    console.log(tab[1]);

    fs.readFile("index.html","utf-8",(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write("Document introuvable");
        }
        else{
            res.writeHead(200,{
                "content-type":"text/html;charset=utf-8"
            });
            res.write(data);
            // res.writeHead(210,{
            //     "content-type":"text/json"
            // });
            // res.write('"nom":"kithor","prenom":"souli"');
        }
        res.end();
    }) 
})

server.listen(8080,()=>{
    console.log("Le serveur en écoute ...")
});