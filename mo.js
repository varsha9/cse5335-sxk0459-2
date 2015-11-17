var connect = require('connect'),
    mongo = require('mongodb');
var assert = require('assert');
mongo.connect('mongodb://heroku_7gx3tn1n:pvc2onq548aes45ql6a9l6sbtn@ds045604.mongolab.com:45604/heroku_7gx3tn1n', {}, function(error, db) {

    if (error) {
        return console.log("Not connected");
    }

    console.log("Connected");

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

});



    var findpeople = function (db, callback) {

        var cursor = db.collection('people').find({"Zip":"191XX"});

        cursor.each(function (err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                console.dir(doc);
            } else {
                callback();
            }
        });
    }
    mongo.connect('mongodb://heroku_7gx3tn1n:pvc2onq548aes45ql6a9l6sbtn@ds045604.mongolab.com:45604/heroku_7gx3tn1n', function(err, db) {
        assert.equal(null, err);
        findpeople(db, function() {
            db.close();
        });
    });
});