angular.module('green-ops').controller('servicesCtrl', function ($scope, servicesSvc) {

  $scope.services = servicesSvc.getData();

})
