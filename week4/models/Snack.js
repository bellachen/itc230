var mongoose = require('mongoose');

var connectionString = "mongodb://bellamongo:mongobella1979@ds141221.mlab.com:41221/itc230";
mongoose.connect(connectionString);

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

var mySchema = mongoose.Schema({
 name: { type: String, required: true },
 price: Number,
 brand: String
}); 

module.exports = mongoose.model('Snack', mySchema);

