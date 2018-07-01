var http = require('http'); //gives app access to HTTP module
var url = require('url'); //the url module splits the web address into readable parts
var fs = require('fs'); //allows you to work with file system on your computer

http.createServer(function (req, res) { //access to HTTP module, enables ability to create a server object
                                        //req = request from the client as an object (http.IncomingMessage object)
  var q = url.parse(req.url, true);  //req has property called "url" which holds the part of the url that comes after domain name
  var filename = "./" + q.pathname + '.html'; //in subfolder
  fs.readFile(filename, function(err, data) { //method used to read the files
    if (err) { //if no filename exists
      res.writeHead(404, {'Content-Type': 'text/html'}); //specify correct content type if html is to display
      return res.end("404 Not Found"); //return error message
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); //display html content on page
    return res.end(); //end of response
  });
}).listen(process.env.PORT || 3000);