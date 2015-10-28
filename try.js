var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client) {
    if (err) throw err;
    console.log('Connected to postgres! Getting schemas...');

    client
        .query('SELECT table_schema,items FROM information_schema.tables;')
        .on('row', function(row) {
            console.log(JSON.stringify(row));
        });
});