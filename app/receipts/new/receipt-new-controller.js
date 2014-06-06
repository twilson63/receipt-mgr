module.exports = function($scope, $ionicPopup) {
  $scope.receipt = {};
  $scope.save = function(receipt) {
    $scope.$emit('RECEIPT:CREATE', receipt);
  };
  $scope.$on('RECEIPT:ERROR', function(msg) {
    $ionicPopup.alert(msg);
  });
};
