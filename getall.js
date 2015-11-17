var redis = require('redis');
require("redis-scanstreams")(redis);


var client = redis.createClient(12229, 'ec2-54-83-199-200.compute-1.amazonaws.com');
client.auth('p89v9j0a7pn4iafft5774mlrua2');

client.hgetall('TX',(function (err, res) {
    var items = [];
    console.log(res);
    for (i in res) {
        items.push(res);
    }

}));