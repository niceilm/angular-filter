/*
 * angular-filter v0.0.1
 * (c) 2013 niceilm http://niceilm.net
 * License: MIT
 */
'use strict';

angular.module('nangular.filter', []).
  filter('encodeURIComponent', [function() {
    return encodeURIComponent;
  }]);