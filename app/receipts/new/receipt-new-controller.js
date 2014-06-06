module.exports = function($scope, $ionicPopup) {
  // initialize new receipt object
  $scope.receipt = {};
  // save object by emit a create request
  $scope.save = function(receipt) {
    $scope.$emit('RECEIPT:CREATE', receipt);
  };

  // if error is emitted then show alert.
  $scope.$on('RECEIPT:ERROR', function(msg) {
    $ionicPopup.alert(msg);
  });
};
