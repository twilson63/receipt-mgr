module.exports = function ($scope, db, underscore, $state, $ionicPopup) {
  var _ = require('underscore');

  $scope.$on('RECEIPT:CREATE', function(e, receipt) {
    //$ionicLoading.show();
    receipt.type = 'receipt';
    receipt.date = new Date();
    // I could post to the cloud
    // then replicate local without
    // attachments
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
