var express = require('express');
//require dependencies

var app = express();
//configure express

var PORT = process.env.PORT || 8080;
//set up port

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets up the Express app to handle data parsing
//configure application to know where html file is


require("./routes/htmlroutes")(app)
require('./routes/apiroutes')(app);
//points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.


app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
// LISTENER
// This code "starts" our server