// ionic dependencies
require('angular/angular');
require('angular-sanitize/angular-sanitize');
require('angular-ui-router/release/angular-ui-router');
require('angular-animate/angular-animate');
// hack added to work with atomify
global.core = { effect: {} };

require('ionic/release/js/ionic');
require('ionic/release/js/ionic-angular');

// domify takes a string and converts to
// html objects
var domify = require('domify');

/* Define AngularJS Application
   include ionic
*/
var app = module.exports = function(ng) {
  return ng.module('receiptMgr', ['ionic',
    /* Add App Specific Modules here */
    require('./receipts')(ng).name
  ])
    .config(function($urlRouterProvider) {
      // default root
      $urlRouterProvider
        .otherwise('/receipts/');
    });
};

if (!module.parent) {
  // start app
  app(angular);
  // add app to page
  document.body.appendChild(
    domify(
     require('./index.html')
    )
  );
}
