var $ = jQuery = require('jquery');
require('./jquery.csv.js'); 
var data = $.csv.toObjects("Tempdatasheet.csv"):
print_r(data)