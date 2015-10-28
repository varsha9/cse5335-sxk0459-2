var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://bwlfpbuceahrcc:d9ovRGxSKP2k5vE6B9sko_AncH@ec2-107-21-219-235.compute-1.amazonaws.com:5432/d89qomq57r5vei?ssl=true';
var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');

query.on('end', function()
{

    client.end();
});
