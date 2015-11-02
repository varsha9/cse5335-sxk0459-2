var redis = require('redis');

var client = redis.createClient(12229, 'ec2-54-83-199-200.compute-1.amazonaws.com');
client.auth('p89v9j0a7pn4iafft5774mlrua2');


fs = require('fs')
 fs.readFile('./Date.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
   //  console.log(data);

     var arr = data.split(",");

     for(var i = 0; i < arr.length; i++) {
         var arr1 = arr[i].split("\n");
         console.log(arr1[0]);
     }


 //   console.log(arr);

   // var arr = data.split("\n");






  // clientAnimals = data;
  //   console.log(clientAnimals);


});




