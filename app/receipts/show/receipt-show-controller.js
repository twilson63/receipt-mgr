module.exports = function($scope, db, receipt, growl) {
  $scope.receipt = receipt;
  $scope.save = function(receipt) {
    db.put(receipt)
      .then(growl.addSuccessMessage)
      .then(function() {
        $scope.$emit('RECEIPT:UPDATED');
      }, growl.addErrorMessage);
  };
};
