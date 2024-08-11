const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url=== '/'){
        res.end("Welocme Home")
    }
    if(req.url === '/about'){
        res.end("Welocme to about page")
    }
    res.end(`
        <h1>OPssss<h1>
        `)
})
server.listen(5000);