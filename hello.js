var pg = require('pg');

var connectionString =  'postgres://bwlfpbuceahrcc:d9ovRGxSKP2k5vE6B9sko_AncH@ec2-107-21-219-235.compute-1.amazonaws.com:5432/d89qomq57r5vei?ssl=true';
var client = new pg.Client(connectionString);
client.connect();
var results = [];
fs = require('fs');

pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if (err) {
        done();
        console.log(err);
        // return res.status(500).json({ success: false, data: err});
    }
});


//var query = client.query("SELECT * FROM datatabtwo");

var query = client.query("SELECT issue, company, state, zip FROM datatabtwo WHERE date='10/27/15'  ", function(err, results) {
    if (err) {
        throw err;
    }
    console.log(results.rows); // assumes 'results.rows' can be serialized to JSON
});

query.on('end', function() {

    console.log("done");
});



