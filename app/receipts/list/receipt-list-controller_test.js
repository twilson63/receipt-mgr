var test = require('tap').test;
var listCtrl = require('./receipt-list-controller');

test('should list receipt', function (t) {
  var underscore = function() {
    return {
      pluck: function(v) {
        return [];
      }
    }
  };

  var scope = {
    $apply: function (fn) {
      fn.call(scope);
    }, 
    $on: function (event, fn) {
    }
  };

  var db = {
    allDocs: function() {
      return {
        then: function(fn) {
          fn({ rows: [] });
        }
      }
    }
  };

  var state = {
    go: function() {
      
    }
  };

  listCtrl(scope, db, underscore, state);
  t.equals(scope.receipts, []);
  t.end();
});
