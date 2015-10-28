var csv = require('csv-stream');
var request = require('request');
var fs = require('fs');



var csvStream = csv.createStream();
fs.createReadStream('./CPH-T.csv').pipe(csvStream)
    .on('error',function(err){
        console.error(err);
    })
    .on('data',function(data){

        console.log(data);

    })