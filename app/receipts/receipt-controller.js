module.exports = function ($scope, db, underscore, $state, $ionicPopup) {
  var _ = require('underscore');

  db.sync('https://admin:admin@myawesomecouch.iriscouch.com:6984/receipts', {
    live: true
  });

  $scope.$on('RECEIPT:CREATE', function(e, receipt) {
    //$ionicLoading.show();
    receipt.type = 'receipt';
    receipt.date = new Date();
    db.post(receipt).then(function(doc) {
      $ionicPopup.alert({
        title: 'Captured!'
      })
      .then(function() {
        $state.go('receipts.list');
      });
    }, function(err) {
      $ionicPopup.alert({
        title: err.message
      });
    });
  });

  $scope.$on('RECEIPT:LIST', function(e) {
    $state.go('receipts.list');
  });

  $scope.$on('ALERT', function(e, alert) {
    $ionicPopup.alert({
      title: alert.title,
      template: alert.message
    });
  });
};
