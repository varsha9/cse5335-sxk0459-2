var redis = require('redis');
require("redis-scanstreams")(redis);


var client = redis.createClient(12229, 'ec2-54-83-199-200.compute-1.amazonaws.com');
client.auth('p89v9j0a7pn4iafft5774mlrua2');
var fs = require("fs"),
    readline = require("readline");


var toArray = require('stream-to-array');
fs = require('fs');
var arr;
fs.readFile('./Date.json', 'utf8', function (err, data) {

    if (err) {
        return console.log(err);
    }
    arr=JSON.parse(data);

console.log(arr);

});

for (i in arr){

    var record = arr[i];
    var key=record['State'];
    console.log('key '+key);
    var tempVal=[];
    for(j in record){

        tempVal.push(record[j]);
    }

    client.HMSET( key, {
        'date' : tempVal[0],
        'problem': tempVal[1],
        'company': tempVal[2],
        // 'state': tempVal[3],
        'zip': tempVal[4],
        'id':tempVal[5]

    } );
}


client.hgetall("FL", function(err,res){

    var items=[];
    console.log(res);
    for(i in res){
        items.push(res);
    }
    //  console.log(items);

});