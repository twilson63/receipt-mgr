module.exports = function ($scope, db, underscore, $state) {
  var _ = require('underscore');

  // handle the creation of the receipt object
  // if successful navigate to the list view
  $scope.$on('RECEIPT:CREATE', function(e, receipt) {
    // default type and date
    receipt.type = 'receipt';
    receipt.date = new Date();
    // post to pouch database
    db.post(receipt).then(function(doc) {
      $state.go('receipts.list');
    }, function(err) {
      // if error let children know
      $scope.$broadcast('RECEIPT:ERROR', err.message);
    });
  });

};
