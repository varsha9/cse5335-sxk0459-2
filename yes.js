var pg = require('pg');
var prompt = require('prompt');

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


    if(result.SelectedKey = "Problem") {

        console.log("Problem");

        var query = client.query("SELECT  company, state FROM datatabtwo WHERE issue = '" + result.Value + "'", function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results.rows);


        });

        query.on('end', function () {

            console.log("done");


        })
    }





  /*  else
        if (result.SelectedKey = "Date") {
            console.log("Date");
            var query = client.query("SELECT issue, company, state FROM datatabtwo WHERE Date= '" + result.Value + "'", function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results.rows); // assumes 'results.rows' can be serialized to JSON
            });

            query.on('end', function () {

                console.log("done");

            });
        }

        else if (result.SelectedKey = "ID") {
            console.log("ID");
            var query = client.query("SELECT issue, company, state FROM datatabtwo WHERE ID = '" + result.Value + "'", function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results.rows); // assumes 'results.rows' can be serialized to JSON
            });

            query.on('end', function () {

                console.log("done");
            });

        }

        else if (result.SelectedKey = "Problem") {
            console.log("Problem");
            var query = client.query("SELECT issue, company, state FROM datatabtwo WHERE Problem= '" + result.Value + "'", function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results.rows); // assumes 'results.rows' can be serialized to JSON
            });

            query.on('end', function () {

                console.log("done");
            });
        }

        else if (result.SelectedKey = "Company") {
            console.log("Company");
            var query = client.query("SELECT issue, company, state FROM datatabtwo WHERE Company = '" + result.Value + "'", function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results.rows); // assumes 'results.rows' can be serialized to JSON
            });

            query.on('end', function () {

                console.log("done");
            });
        }
        else if (result.SelectedKey = "State") {
            console.log("State");
            var query = client.query("SELECT issue, company, state FROM datatabtwo WHERE State= '" + result.Value + "'", function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results.rows); // assumes 'results.rows' can be serialized to JSON
            });

            query.on('end', function () {

                console.log("done");
            });
        }
        else {
            console.log("Not Valid Input");

        }
*/

    });

function onErr(err) {
    console.log(err);
    return 1;
}
