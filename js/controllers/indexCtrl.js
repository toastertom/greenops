angular.module('green-ops').controller('indexCtrl', function ($scope) {

  // Working Toggle
  $scope.dropDown = false;

  $scope.toggle = function () {
    console.log('before', $scope.dropDown);
    $scope.dropDown = !$scope.dropDown;
    console.log('After', $scope.dropDown);
    }

});
