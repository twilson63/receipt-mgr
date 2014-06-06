module.exports = function ($scope, db, underscore, $state) {
  var _ = require('underscore');

  $scope.$on('RECEIPT:CREATE', function(e, receipt) {
    receipt.type = 'receipt';
    receipt.date = new Date();
    db.post(receipt).then(function(doc) {
      $state.go('receipts.list');
    }, function(err) {
      $scope.$broadcast('RECEIPT:ERROR', err.message);
    });
  });

};
