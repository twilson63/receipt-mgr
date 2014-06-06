module.exports = function($scope, db, $stateParams) {
  db.get($stateParams.id).then(function(doc) {
    $scope.$apply(function() {
      $scope.receipt = doc;
    });
  });
};
