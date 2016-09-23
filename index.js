'use strict';

let app = angular
  .module('angular-promise-polyfill', [])
  .run(['$q', '$window', function($q, $window) {
    $window.Promise = function(executor) {
      return $q(executor);
    };
  
    $window.Promise.all = $q.all.bind($q);
    $window.Promise.reject = $q.reject.bind($q);
    $window.Promise.resolve = $q.when.bind($q);
  
    $window.Promise.race = function(promises) {
      var promiseMgr = $q.defer();
  
      for(var i = 0; i < promises.length; i++) {
        promises[i].then(function(result) {
          if(promiseMgr) {
            promiseMgr.resolve(result);
            promiseMgr = null;
          }
        });
  
        promises[i].catch(function(result) {
          if(promiseMgr) {
            promiseMgr.reject(result);
            promiseMgr = null;
          }
        });
      }
  
      return promiseMgr.promise;
    };
  }]);

angular.bootstrap(document, ['angular-promise-polyfill']);

if(module && typeof module.exports === 'object') {
  return module.exports = app.name;
} else {
  return app;
}