var redis = require('redis');
require("redis-scanstreams")(redis);


var client = redis.createClient(12229, 'ec2-54-83-199-200.compute-1.amazonaws.com');
client.auth('p89v9j0a7pn4iafft5774mlrua2');
var prompt = require('prompt');
var properties = [
    {
        name: 'SelectedKey',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name:'Value',

    }
];
prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');

    console.log('  Search: ' + result.SelectedKey);
    console.log('Value:' +result.Value);

    if(result.SelectedKey = "ID")
    {

client.HGETALL(+result.Value, function(err,res) {

    var items = [];
    console.log(res);

    for (i in res) {
        items.push(res);
    }
});

    }
});
