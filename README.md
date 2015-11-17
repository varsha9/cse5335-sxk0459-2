#What is your external data source used to populate your Heroku data sources?
   The external data used to populate my data is through http://aws.amazon.com/datasets where i used the economics
   section where it briefly describes the consumer complaints in a particular decade.

#What are the Heroku toolbelt commands to execute the scripts?
   The Heroku toolbelt commands followed to execute the script are as follows:

> The commands i first used to push my code to Heroku are as follows with the command for heroku terminal as the last statement.

            - git add .

            - git commit -m"code pushed"

            - git push heroku master

            - heroku run bash

> The commands and files i used for postgesql node.js are as follows:

            The statement to populate Postgresql table on heroku is
            - node csv.js

            The statement to retrieve data through Primary key on heroku is

            - node hell.js

            The statement to retrieve Data through Non Primary Key on heroku is
            - node hello.js

            The statement to retrieve both Primary and Non Primary Using User Interface through Prompt
> NOTE: Whenever You Execute this, for the first selected key you need to choose from either of these values:
> Zip, Date, ID, Problem, Company, State.
> For the next value you can select any value in the JSON file under that particular selected key.

            - node yes.js

> The commands and files used for MongoDb node.js are as follows:

            The statement to populate MongoDb with data is
            - node prac.js

            The satement to retrieve data through primary key on heroku is
            - node mongo.js

            The statement to retrieve data through non primary key on heroku is
            - node mo.js

            The statement to retrieve Data through Uset Interface using Prompt is
            - node mprompt.js

> The commands and files used for Redis node.js are as follows:

            The statements to poulate Redis with different Keys with vales are as follows:
            - node i.js , node no.js,node not.js, node noth.js, node nof.js, node nofi.js

            The statements to retrieve Data through Primary Key and prompt on heroku is
            - node geta.js

            The statement to retrieve Data through Non Primary Key on Heroku is
            - npm install redis-scanstreams
            - node getall.js, node man.js

#What aspect of the implementation did you find easy, if any, and why?
>I found implementing Postgresql with Node.js really easy. It is easy because the Postgresql database on heroku
>clearly shows the number of tables and rows inserted and hence retrieval is very easy.

#What aspect of the implementation did you find hard, if any, and why?
>I found implementing Redis with Node.js diffivult as its very confusing using key value pairs. Its always a
>confusion retrieving data with the required key.I feel redis is very complicated.






