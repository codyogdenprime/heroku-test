var express = require( 'express' );
var app = express();

app.get( '/', function ( req, res ) {
	res.send( 'Hello, heroku!' );
});

app.listen(8080);