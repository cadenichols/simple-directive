'use strict';

var app = angular.module('myTable', []);

app.directive('myTable', function() {
  return {
    scope: {
      list: '='
    },
    controller: 'myTableCtrl',
    templateUrl: '/directives/myTable.html'
  };
});

app.controller('myTableCtrl', function($scope) {
  $scope.sort = function(header) {
    if($scope.order === header) {
      $scope.order = `-${header}`;
    } else {
      $scope.order = header;
    }
  };
});
