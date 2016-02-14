'use strict';

angular.module('newApp')
.controller('mainCtrl', function($scope) {
  console.log('mainCtrl');
  $scope.bands = [
    { name: 'The Stinking Onions', genre: 'grindcore' },
    { name: 'Phat Haggis', genre: 'sea shanties' },
    { name: 'Metallica', genre: 'metal' },
    { name: 'Rubber', genre: 'alternative' },
    { name: 'Wiggles', genre: 'childrens' },
    { name: 'Coolio', genre: 'rap' }
  ];  
});
