var csv = require('csv-stream');
var request = require('request');
var fs = require('fs');

// All of these arguments are optional.
var options = {
    delimiter : ',', // default is ,
    endLine : '\n', // default is \n,
// by default read the first line and use values found as columns
    // columns : ['Settlement Ref No.', 'Order Type','Fulfilment Type','Seller SKU','wsn'],
    escapeChar : '"', // default is an empty string
    enclosedChar : '"' // default is an empty string
}

var csvStream = csv.createStream(options);
fs.createReadStream('./CPH-T.csv').pipe(csvStream)
    .on('error',function(err){
        console.error(err);
    })
    .on('data',function(data){

        console.log(data);

    })