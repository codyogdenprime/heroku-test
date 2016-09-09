var express = require( 'express' );
var app = express();

app.listen(3000, "localhost");

app.get( '/', function( req, res ) {
	res.send( 'Hello, Heroku!' );
});