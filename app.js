const express = require('express')
const app = express();
app.use(express.static('/style.css'));
app.use(express.static('script.js'));


// respond with "hello world" when a GET request is made to the homepage
app.get('/form', (req, res) => {
    res.sendFile(__dirname + "/index.html"); 
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
  });