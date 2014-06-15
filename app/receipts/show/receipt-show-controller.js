module.exports = function($scope, receipt, $ionicPopup) {
  $scope.receipt = receipt;

  db.get(receipt._id, { attachments: true })
    .then(function(doc) {
      $scope.$apply(function() {
        $scope.photo = true;
        if (doc._attachments && doc._attachments['photo.jpg'])
          $scope.photo = "data:image/jpeg;base64," + doc._attachments['photo.jpg'].data;
      });
    });

  $scope.showPhoto = function() {
    $ionicPopup.alert({
      title: 'Receipt Photo',
      template: '<image ng-src="{{photo}}" />'
    });
  };

  $scope.leftButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-trash-a"></i>',
    tap: function(e) {
      // remove
      $ionicPopup.confirm({
        title: 'Remove Receipt?'
      }).then(function(res) {
        if (res) {
          db.remove($scope.receipt).then(function() {
            $scope.$emit('RECEIPT:LIST');
          });
        }
      });
    }
  }];

  $scope.rightButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-edit"></i>',
    tap: function(e) {
      $scope.$emit('RECEIPT:EDIT', $scope.receipt._id);
    }
  }];

};
