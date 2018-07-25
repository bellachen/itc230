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
    case '/get':
      var found = snack.get(search.name); 
        res.writeHead(200, {'Content-Type': 'text/html'});
        let results = JSON.stringify(found);
        res.end('Results for ' + search.name + "\n" + results);
      break;
    case '/delete':
        res.writeHead(200, {'Content-Type': 'text/html'});
        //res.write("Deleted: " + snacks.delete(query.name));
        res.end('delete');
      break;
  }
}).listen(process.env.PORT || 3000);
