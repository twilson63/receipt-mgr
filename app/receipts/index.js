/* Receipts Dependencies */
var underscore = require('underscore');
var pouchdb = require('pouchdb/dist/pouchdb-nightly.js');

/* Receipts Module */
module.exports = function(ng) {
  return ng.module('receipts', [])
    .config(require('./config'))
    .constant('underscore', underscore)
    .factory('db', function() {
      var db = pouchdb('receipts');
      db.sync('https://admin:admin@myawesomecouch.iriscouch.com:6984/receipts', {
        live: true
      });
      return db;
    });
};
