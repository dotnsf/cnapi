//. settings.js
var request = require( 'request' );

exports.db_url = '';
var db_apikey = '';
var db_username = '';
var db_password = '';

//. settings for CORS
exports.cors = [ '' ];

if( process.env.VCAP_SERVICES ){
  var VCAP_SERVICES = JSON.parse( process.env.VCAP_SERVICES );
  if( VCAP_SERVICES && VCAP_SERVICES.cloudantNoSQLDB ){
    exports.db_url = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.url;
    var db_apikey = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.apikey;
    var db_username = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.username;
    var db_password = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.password;
  }
}

if( process.env.db_apikey ){
  var db_apikey = process.env.db_apikey;
}
if( process.env.db_username ){
  var db_username = process.env.db_username;
}
if( process.env.db_password ){
  var db_password = process.env.db_password;
}
if( process.env.db_url ){
  exports.db_url = process.env.db_url;
}
if( process.env.cors ){
  try{
    exports.cors = JSON.parse( process.env.cors );
  }catch( e ){
  }
}

exports.db_token = null;
exports.db_basic = ( db_username && db_password ) ? ( new Buffer( db_username + ':' + db_password ) ).toString( 'base64' ) : null;

if( db_apikey ){
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  };
  var data = {
    'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
    'apikey': db_apikey
  };
  var option = {
    url: 'https://iam.cloud.ibm.com/identity/token',
    method: 'POST',
    //json: data,
    form: data,
    headers: headers
  };
  request( option, ( err, res, body ) => {
    if( err ){
    }else{
      body = JSON.parse( body );
      exports.db_token = body.access_token;
    }
  });
}
