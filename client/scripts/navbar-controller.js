myAngular.controller("NavbarController", ["$scope", "$state",
function($scope, $state){
  $scope.goHome = function(){
    $state.go("home");
  }

  $scope.goRegister = function(){
    $state.go("register");
  }

  $scope.goLogin = function(){
    $state.go("login");
  }
}]);
