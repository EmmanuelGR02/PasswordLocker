const express = require('express'); // basically like an inport statement 
const datastore = require('nedb'); // imports the nedb database so it is required
const app = express(); // holds the whole node express library

app.listen(3000, () => console.log('Listening at 3000')); // listens to a port (a unique number at which we listen)
app.use(express.static('PublicWeb-DS')); // Takes in a folder or file name (which is static, like a html file)

app.use(express.json({limit: '1mb'})); // helps the server understand incoming data that is in json format

const database = new datastore('database.db'); //creates a database with given name file
database.loadDatabase(); // creates the file if its not already created
database.insert({name: 'emmanuel', status: 'chilling'})

// post request. specify the adress
// request - holds everything that's contained within that request, (all the data that is being sent)
// respomse - a variable that can be used to send things back to the client
app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    database.insert(data);// save the data in the datasore file
    console.log(database);
    response.json({
        status: 'success',
        username: data.username,
        password: data.password
    });
});
