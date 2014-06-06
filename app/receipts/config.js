module.exports = function($stateProvider) {
  $stateProvider
    .state('receipts', {
      url: '/receipts',
      abstract: true,
      controller: require('./receipt-controller'),
      template: '<ion-nav-view></ion-nav-view>'
    })
    .state('receipts.list', {
      url: '/',
      controller: require('./list/receipt-list-controller'),
      template: require('./list/receipt-list.html')
    })
    .state('receipts.new', {
      url: '/new',
      controller: require('./new/receipt-new-controller'),
      template: require('./new/receipt-new.html')
    })
    .state('receipts.show', {
      url: '/:id',
      controller: require('./show/receipt-show-controller'),
      template: require('./show/receipt-show.html')
    });
};
