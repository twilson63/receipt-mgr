var underscore = require('underscore');
var pouchdb = require('pouchdb/dist/pouchdb-nightly.js');

module.exports = function(ng) {
  return ng.module('receipts', [])
    .config(require('./config'))
    .constant('underscore', underscore)
    .factory('db', function() {
      return pouchdb('receipts');
    });

    //.controller('ReceiptCtrl', require('./receipt-controller'));
};
