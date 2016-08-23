var myAngular = angular.module("myAngular", ["ui.router"]);

myAngular.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "../templates/home.html",
    controller: "HomeController"
  });

  $stateProvider.state('register', {
    url: "/register",
    templateUrl: "../templates/register.html",
    controller: "RegisterController"
  });

  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "../templates/login.html",
    controller: "LoginController"
  });

});

myAngular.directive("navbar", [function(){
  return {
    restrict: "E",
    templateUrl: "../templates/navbar.html",
    controller: "NavbarController"
  }
}]);
