const http = require("http");

const obj = {
    fname:"azra ",
    lname : "Banu"
}
const server = http.createServer(function(req,res){
    res.write("<h1>this is our first server</h1>")
    res.write("This is a normal text")
    res.write(JSON.stringify(obj))
    res.write(JSON.stringify({name:"rahul"}))
    res.write("<h2>JSON.stringify(obj)</h2>")
    res.end("<h1>This is the end of the server</h1>");
    
})


server.listen(4000)
