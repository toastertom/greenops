angular.module('green-ops').controller('homeCtrl', function ($scope, servicesSvc) {

  //Pulls data from services
  $scope.services = servicesSvc.getData();

  //Pulls first 3 items from array
  $scope.featuredServices =
    $scope.services.slice( 0, 3);

})
