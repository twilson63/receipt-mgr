require('angular/angular');
require('angular-sanitize/angular-sanitize');
require('angular-ui-router/release/angular-ui-router');
require('angular-animate/angular-animate');
global.core = { effect: {} };

require('ionic/release/js/ionic');
require('ionic/release/js/ionic-angular');

var domify = require('domify');

var app = module.exports = function(ng) {
  return ng.module('receiptMgr', ['ionic',
    require('./receipts')(ng).name
  ])
    .config(function($urlRouterProvider) {
      $urlRouterProvider
        .otherwise('/receipts/');
    });
};

if (!module.parent) {
  app(angular);
  // add app to page
  document.body.appendChild(
    domify(
     require('./index.html')
    )
  );

}
