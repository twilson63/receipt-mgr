module.exports = function($scope, $ionicPopup, $state) {
  $scope.receipt = {};
  $scope.save = function(receipt) {
    $scope.$emit('RECEIPT:CREATE', receipt);
  };
  $scope.$on('RECEIPT:ERROR', function(msg) {
    $ionicPopup.alert(msg);
  });

  $scope.rightButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-close-circled"></i>',
    tap: function(e) {
      $state.go('receipts.list');
    }
  }];

};
