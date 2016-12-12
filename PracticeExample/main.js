var http=require("http");
var express=require("express");
http.createServer(function(request,response){
response.writeHead(200,{'content-type':'text/plain'});
response.end('hello world');}).listen(8081);
console.log("server running at http:127.0.0.1:8081");
