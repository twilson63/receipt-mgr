module.exports = function($scope, db, underscore) {
  var _ = require('underscore');
  db.allDocs({include_docs: true}).then(function(res) {
    var receipts = _(res.rows).pluck('doc');
    $scope.$apply(function() {
      $scope.receipts = receipts;
    });
  });
};
