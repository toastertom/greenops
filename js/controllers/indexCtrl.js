angular.module('green-ops').controller('indexCtrl', function ($scope) {

  // Working Toggle
  $scope.dropDown = false;

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

  };

  // Scroll to top function
  $scope.topFunction = function () {

    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  };

  // Updates the copyright date.
  $scope.date = new Date();



});
