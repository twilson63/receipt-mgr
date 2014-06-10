module.exports = function($scope, db, underscore, $state) {
  var _ = require('underscore');
  // get all docs from pouch database
  db.allDocs({include_docs: true}).then(function(res) {
    // pluck out the doc node from the rows array.
    var receipts = _(res.rows).pluck('doc');
    $scope.$apply(function() {
      // assign list to scope
      $scope.receipts = receipts;
    });
  });

  // added button on navbar to launch new view
  $scope.rightButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-plus"></i>',
    tap: function(e) {
      $state.go('receipts.new');
    }
  }];

  $scope.leftButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-ios7-information-outline"></i>',
    tap: function(e) {
      $state.go('about');
    }
  }];
};
