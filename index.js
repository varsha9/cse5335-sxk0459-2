var redis = require('redis');

var client = redis.createClient(12229, 'ec2-54-83-199-200.compute-1.amazonaws.com');
client.auth('p89v9j0a7pn4iafft5774mlrua2');


fs = require('fs')
 fs.readFile('./Date.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    // var arr = JSON.parse(data);
    // console.log(client);


     var arr = data.split("\n");
     //  console.log([arr[0]]);
     for(var i = 0; i < arr.length; i++) {
         var arr1 = arr[i].split(",");

      //   console.log(arr1[10]);

         client.set("test","val", function(err) {
             if (err) {
                 // Something went wrong
                 console.error("error");
             } else {
                 client.get("test", function(err, value) {
                     if (err) {
                         console.error("error");
                     } else {
                         console.log("Worked: " + value);
                     }
                 });
             }
         });
     }

});




