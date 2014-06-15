module.exports = function($stateProvider) {
  $stateProvider
    // abstract
    .state('receipts', {
      url: '/receipts',
      abstract: true,
      controller: require('./receipt-controller'),
      template: '<ion-nav-view></ion-nav-view>'
    })
    // list view
    .state('receipts.list', {
      url: '/',
      controller: require('./list/receipt-list-controller'),
      template: require('./list/receipt-list.html')
    })
    // new view form
    .state('receipts.new', {
      url: '/new',
      controller: require('./new/receipt-new-controller'),
      template: require('./new/receipt-new.html')
    })
    // show view form
    .state('receipts.show', {
      url: '/:id',
      controller: require('./show/receipt-show-controller'),
      template: require('./show/receipt-show.html'),
      resolve: {
        receipt: function($stateParams, db) {
          return db.get($stateParams.id);
        }
      }
    })
    .state('receipts.edit', {
      url: '/:id/edit',
      controller: require('./show/receipt-edit-controller'),
      template: require('./show/receipt-edit.html'),
      resolve: {
        receipt: function($stateParams, db) {
          return db.get($stateParams.id);
        }
      }
    });

};
