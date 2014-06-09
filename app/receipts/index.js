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
      // db.sync('https://admin:admin@myawesomecouch.iriscouch.com:6984/receipts', {
      //   live: true
      // });
      return db;
    })
    .factory('place', function($http, $q) {
      var reverse = 'http://nominatim.openstreetmap.org/reverse';
      return function(cb) {
        var deferred = $q.defer();

        navigator.geolocation.getCurrentPosition(findPlace);
        function findPlace(position) {
          var promise = $http.get(reverse, { params: {
            format: 'json',
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            zoom: 18,
            addressdetails: 1 }});
          deferred.resolve(promise);
          //.then(success, error);
        }

        return deferred.promise;
      };
    });
};
