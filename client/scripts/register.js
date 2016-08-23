myAngular.controller("RegisterController", ["$scope", "$state",
function($scope, $state){
  $scope.success = false;
  $scope.register = function() {
    $scope.success = true;
  }

  $scope.goHome = function(){
    alert('Đăng kí thành công, bạn sẽ được chuyển về trang chủ');
    $state.go("home");
  }
}]);
