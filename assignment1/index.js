var http = require("http"); 
http.createServer(function(req,res) {
  var path = req.url.toLowerCase();
  switch(path) {
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
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);
