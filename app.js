//. app.js
var express = require( 'express' ),
    app = express();

var db = require( './api/db' );
app.use( '/api/db', db );

app.use( express.static( __dirname + '/public' ) );
app.use( express.Router() );

//. CORS
var settings = require( './settings' );
if( settings && settings.cors && settings.cors.length && settings.cors[0] ){
  var cors = require( 'cors' );
  var option = {
    origin: settings.cors,
    optionSuccessStatus: 200
  };
  app.use( cors( option ) );
}

app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );
  var name = "World";
  if( req.query.name ){
    name = req.query.name;
  }
  res.write( JSON.stringify( { status: true, message: 'Hello ' + name + '.' } ) );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
