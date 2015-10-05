var app = angular.module('app', ['ionic','ui.router','ngCordova']);
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise("/index");
  $stateProvider
    .state('index',{
      abstract:true,
      url:'/index',
      template:'<ion-nav-view/>',
      templateUrl:'index.html',
      controller:'controllerIdx',
    })
    .state('list',{
      url:'list',
      templateUrl:'View/Jade/list.html'
    })
}])
app.controller('controllerIdx',['$scope',function($scope){
  $scope.todos = [];
  $scope.nombre;

  $scope.add = function(name){
    console.log(name);
    $scope.nombre = name
    $scope.todos.push($scope.nombre);
    $scope.nombre = "";
  }

  $scope.viewList = function() {
    $state.go("list");
  }
}])
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // // for form inputs)
    // if(window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    // if(window.StatusBar) {
    //   StatusBar.styleDefault();
    // }
  });
});

