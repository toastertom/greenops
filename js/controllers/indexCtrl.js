angular.module('green-ops').controller('indexCtrl', function ($scope) {

  // Working Toggle
  $scope.dropDown = false;

  // var nav = document.getElementsByTagName('nav');
  // console.log(nav);

  //utilizes jQ lite
  var nav = angular.element(document.querySelector('nav'));

  $scope.toggleDropDown = function () {
    //toggle
    $scope.dropDown = !$scope.dropDown;

    if ($scope.dropDown === true) {
      nav.addClass('slide-down');
    }
    else if ($scope.dropDown === false) {
      nav.removeClass('slide-down');
    }

    }

});
