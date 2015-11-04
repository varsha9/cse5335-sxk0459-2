var pg = require('pg');

var connectionString =  'postgres://bwlfpbuceahrcc:d9ovRGxSKP2k5vE6B9sko_AncH@ec2-107-21-219-235.compute-1.amazonaws.com:5432/d89qomq57r5vei?ssl=true';
var client = new pg.Client(connectionString);

client.connect();


var results = [];
fs = require('fs')


var query = client.query("SELECT * FROM datatabtwo");
query.on('row', function(row) {
    results.push(row);
});

fs.readFile('./Customercomp.csv', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }



    var arr = data.split("\n");
 //   console.log([arr[0]]);
    for(var i = 0; i < arr.length; i++){
        var arr1 = arr[i].split(",");
      // console.log(arr1);
     //   var query = client.query("INSERT INTO complaint (date, issue, company, state, zip, cid) values($1, $2, $3, $4, $5, $6)", [i,arr1[1],arr1[2],arr1[3],arr1[4],arr1[5],arr1[6]]);



 // var query = client.query('CREATE TABLE datatabtwo ( date VARCHAR(100) ,issue VARCHAR(100),company VARCHAR(100) ,state VARCHAR(40) , zip VARCHAR(100) ,cid VARCHAR(100) not null )');
 // var query = client.query("INSERT INTO datatabtwo ( date, issue, company, state, zip, cid) values($1, $2, $3, $4, $5, $6)", [arr1[0],arr1[1],arr1[2],arr1[3],arr1[4],arr1[5]]);

    }
});