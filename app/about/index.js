var pkg = require('../../package.json');

module.exports = function(ng) {
  return ng.module('about', [])
    .config(function($stateProvider) {
      $stateProvider
        .state('about', {
          url: '/about',
          controller: function($scope, $state, $window) {
            $scope.description = pkg.description;
            $scope.version = pkg.version;
            $scope.author = pkg.author;
            $scope.rightButtons = [{
              type: 'button-icon',
              content: '<i class="icon ion-close-circled"></i>',
              tap: function(e) {
                $state.go('receipts.list');
              }
            }];
          },
          template: require('./index.html')
        });
    });
};
