var app = angular.module('calculator', []);

app.controller('buttonController', ['$scope', function ($scope) {
  
  $scope.screen = 0;
  $scope.memmory = null;
  
  $scope.addToScreen = function (value) {
    if($scope.screen){
      $scope.screen += "" + value;
    }
    else{
      $scope.screen = value;
    }
  };
  
  $scope.addDot = function () {
    if(String($scope.screen).indexOf('.') === -1){
       if($scope.screen){
        $scope.screen += ".";
      }
      else{
        $scope.screen = 0 + ".";
      }
    }
  };
  
  $scope.changeSign = function () {
    if(String($scope.screen).length > 0 && String($scope.screen).indexOf('-') === 0){
      $scope.screen = String($scope.screen).slice(1);
    }else if(String($scope.screen).indexOf('-') === -1){
      $scope.screen = '-'.concat(String($scope.screen));
    }
  };
  
  $scope.clearScreen = function () {
    $scope.screen = 0;
    $scope.memmory = null;
  };
  
  $scope.add = function () {
    if($scope.memmory){
      $scope.memmory += $scope.screen + '+';
    }
    else{
      $scope.memmory = $scope.screen + '+';
    }
    $scope.screen = '';
  };
  
  $scope.subtract = function () {
    if($scope.memmory){
      $scope.memmory += $scope.screen + '-';
    }
    else{
      $scope.memmory = $scope.screen + '-';
    }
    $scope.screen = '';
  };
  
  $scope.multiply = function () {
    if($scope.memmory){
      $scope.memmory += $scope.screen + '*';
    }
    else{
      $scope.memmory = $scope.screen + '*';
    }
    $scope.screen = '';
  };
  
  $scope.divide = function () {
    if($scope.memmory){
      $scope.memmory += $scope.screen + '/';
    }
    else{
      $scope.memmory = $scope.screen + '/';
    }
    $scope.screen = '';
  };
  
  $scope.calculate = function () {
    $scope.screen = eval($scope.memmory + $scope.screen);
    $scope.memmory = null;
  };
  
}]);