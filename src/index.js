var express = require('express');
var path = require('path');
var app = express();
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log("Server listening on " + port);
