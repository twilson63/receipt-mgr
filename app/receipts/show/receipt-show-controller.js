module.exports = function($scope, db, $stateParams) {
  db.get($stateParams.id)
    .then(function(doc) {
      $scope.$apply(function() {
        $scope.receipt = doc;
      });
    });

  db.get($stateParams.id, { attachments: true })
    .then(function(doc) {
      $scope.$apply(function() {
        $scope.photo = "data:image/jpeg;base64," + doc._attachments['photo.jpg'].data;
      });
    });

  $scope.showPhoto = function() {
    $ionicPopup.alert({
      title: 'Receipt Photo',
      template: '<image ng-src="{{photo}}" />'
    });
  };
};
