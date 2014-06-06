module.exports = function($scope, db) {
  $scope.receipt = {};
  $scope.save = function(receipt) {
    db.post(receipt)
      //.then()
      .then(function() {
        $scope.$emit('RECEIPT:CREATED', receipt)
      } //,
      // ionic alert
      );
  }
};
