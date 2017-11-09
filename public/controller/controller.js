//var myApp = angular.module('myApp', []);
 angular.module('myApp')
.controller('AppCtrl', ['$scope', '$http','$location', function($scope, $http,$location,$route) {
    console.log("Hello World from controller");


var refresh = function() {

$http.get('/contactlist').then(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response.data;
    $scope.contact = {};
  });
var call=function call()
{
  $location.path('/second');
}


};

refresh();

/*$scope.changeView = function($location){
   
    $location.path(second);
}
  */

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).then(function(response) {
    console.log(response);
    //refresh();
    //changeView();
    //call();
     $location.path('/second');
     $scope.apply();
});


};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).then(function(response) {
    refresh();
  });
};


$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).then(function(response) {
    $scope.contact = response;
  });
};  


$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
    //refresh();
    changeView();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
} 







}]);
