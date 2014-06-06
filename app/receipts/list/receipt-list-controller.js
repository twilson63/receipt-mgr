module.exports = function($scope, db, underscore, $state) {
  var _ = require('underscore');
  db.allDocs({include_docs: true}).then(function(res) {
    var receipts = _(res.rows).pluck('doc');
    $scope.$apply(function() {
      $scope.receipts = receipts;
    });
  });
  $scope.rightButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-plus"></i>',
    tap: function(e) {
      $state.go('receipts.new');
    }
  }];
};
