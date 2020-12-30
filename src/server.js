const http=require('http')
const fs=require('fs');

const phoneBooks=[]

phoneBooks.push({name:"ehsan",number:21111212}
,{name:"ehsan",number:21111212}
,{name:"ehsan",number:21111212})

http.createServer((req,res)=>{
if(req.url === '/users'){
    
    res.end(JSON.stringify(phoneBooks))
}
else if(req.url === '/add'){
    //res.writeHead(200,{"Content-Type":"application/json"})
    // const {name,number}=req.body;
    // phoneBooks.push({name,number});
    res.end("Done!!");
}
else{
    res.writeHead(404,{"Content-Type":"text/plain"})
    res.end("Invalid Address");
}
}).listen(3001,"127.0.0.1")