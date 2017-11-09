var myApp = angular.module('myApp', ['ngRoute','ngGrid']);
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider.
when("/", {
templateUrl: 'first.html',
controller: 'AppCtrl'
})
.when("/second", {
templateUrl: 'second.html',
controller:'Ctrl'
})
.when("/newEmp", {
templateUrl: 'AddEmp.html',
controller: 'AppCtrl'
})
.otherwise({
redirectTo: "/"
}); 
});

