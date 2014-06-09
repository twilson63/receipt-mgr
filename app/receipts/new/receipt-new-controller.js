module.exports = function($scope, $ionicPopup) {
  $scope.receipt = {};

  $scope.getImage = function() {
    navigator.camera.getPicture(onSuccess, onError, {
      quality: 50,
      destinationType: navigator.camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
      $scope.$apply(function() {
        var image = "data:image/jpeg;base64," + imageData;
        $scope.imageSrc = image;
        $scope.receipt._attachments = {
           "photo.jpg": {
             "content_type": "image/jpeg",
             "data": imageData
           }
        };
      });
    }

    function onError(msg) {
      $ionicPopup.alert({ title: 'error', template: msg});
    }
  };

  // save object by emit a create request
  $scope.save = function(receipt) {
    $scope.$emit('RECEIPT:CREATE', receipt);
  };

  $scope.rightButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-close-circled"></i>',
    tap: function(e) {
      //navigator.camera.cleanup(function() {
      $scope.$emit('RECEIPT:LIST');
      //});
    }
  }];

};
