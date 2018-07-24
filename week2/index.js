var http = require('http');
var url = require('url');
var querystring = require('querystring');
var snack = require("./lib/snacks.js");

http.createServer(function (req, res) {
  var snacks = require('./lib/snacks');
  var path = req.url.toLowerCase();
  var query = path.split("?");
  var search = querystring.parse(query[1]);
  console.log(search);
  
  switch(query[0]) {
    case '/':
      var fs = require("fs");
      fs.readFile('static/home.html', function (err, data) {
         if (err) {
           return console.error(err);
         } 
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         return res.end();
      });
      break;
    case '/about':
      var fs = require("fs");
      fs.readFile('static/about.html', function (err, data) {
         if (err) {
           return console.error(err);
         }
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         return res.end();
      });
      break;
    case '/find':
      var found = JSON.stringify(snacks.get(search.name)); //NOT WORKING: call get function, and pass searched name
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Match: " + found);
        res.end();
      break;  
    case '/delete':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Delete in array: " + snacks.delete());
        //res.write("Deleted: " + snacks.delete(search.name));
        res.end();
      break;
  }
}).listen(process.env.PORT || 3000);
