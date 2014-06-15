module.exports =  function($scope, receipt) {
  $scope.receipt = receipt;
  $scope.save = function(receipt) {
    $scope.$emit('RECEIPT:UPDATE', receipt);
  };
};
