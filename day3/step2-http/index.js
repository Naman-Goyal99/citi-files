const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res)=>{
    // console.log(req.url);
    // let fileContent = fs.readFile("./"+req.url);
    // console.log("File Content : ", );
    fs.readFile("./"+req.url,"utf-8",function(err, data){
        if(err){
            console.log("Error : ", err);
            res.end("Error ", err);
        }else{
            res.end(data);
        }
    })
});

server.listen(1010, "localhost", (err)=>{
    if(err){
        console.log("Error : ", err);
    }else{
        console.log("server is now live on localhost:1010");
    }
});