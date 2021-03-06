var config = require('./config');

var env = process.env.NODE_ENV || 'development';
var db;

if ( env === 'server-tests' ) {
	db = config.mode_test.database.db;
} else if ( env === 'production' ) {
	db = config.production.database.db;
} else {
	db = config.development.database.db;
}

module.exports = db;