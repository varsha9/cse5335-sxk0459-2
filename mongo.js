var connect = require('connect'),
    mongo = require('mongodb');
var prompt = require('prompt');
var assert = require('assert');
mongo.connect('mongodb://heroku_7gx3tn1n:pvc2onq548aes45ql6a9l6sbtn@ds045604.mongolab.com:45604/heroku_7gx3tn1n', {}, function(error, db) {

    if (error) {
        return console.log("Not connected");
    }

    console.log("Connected");

  //  db.collection('people').ensureIndex( { "ID": 1 }, { unique: true } );

    var findpeople = function (db, callback) {
        var cursor = db.collection('people').find({"ID":1626940 });

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








