module.exports = function($scope, receipt) {
  // get receipt and attach to scope
  receipt.then(function(doc) {
    $scope.receipt = doc;
  });
  // get pouchdb doc
  // db.get($stateParams.id).then(function(doc) {
  //   $scope.$apply(function() {
  //     $scope.receipt = doc;
  //   });
  // });
};
