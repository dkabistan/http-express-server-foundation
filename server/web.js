var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/../public'));

app.listen(app.get('port'), function() {
  console.log("Express running on localhost:" + app.get('port'));
});