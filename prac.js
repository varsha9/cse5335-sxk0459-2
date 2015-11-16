
var connect = require('connect'),
    mongo = require('mongodb');
mongo.connect('mongodb://heroku_7gx3tn1n:pvc2onq548aes45ql6a9l6sbtn@ds045604.mongolab.com:45604/heroku_7gx3tn1n', {}, function(error, db) {

    if(error){
        return console.log("Not connected");
    }

 console.log("Connected");

   db.createCollection("people", { size: 2147483648 } );



    fs = require('fs');
    fs.readFile('./Date.json', 'utf8', function (err, data) {

        if (err) {
            return console.log(err);
        }

            var arr = JSON.parse(data);

console.log(arr);


       for(i=0;i< arr.length;i++) {


        arr[i]["_id"] = arr[i]["ID"];

           db.collection('people').insertOne(arr[i], function (err, result) {
                if (err) {
                    return console.log("Not connected");


               }
                else{
                    console.log(result);

                }



           })
        }
    });


    });


