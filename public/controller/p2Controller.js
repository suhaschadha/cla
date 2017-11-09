
      // var app = angular.module('myApp', ['ngGrid']);
      angular.module('myApp')
       .controller('Ctrl',['$scope', '$http','$location','$route',function($scope, $http,$location,$route) {
                     
                     $http.get('/contactlist').then(function(data) {
                       $scope.users = data.data;
                        $scope.contact = {};
  
                     });

                     var refresh = function refresh() {
//$location.path('/');
$route.reload();
/*$http.get('/contactlist').then(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response.data;
    $scope.contact = {};
  });*/
};


$scope.options=['Java','C#','UI'];

  
$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).then(function(data) {
    $scope.contact = data.data;
  });
};  

$scope.update = function(id,row) {
 // console.log($scope.contact._id);
  $http.put('/contactlist/' + id, row).then(function(data) {
   refresh();
  })
};

                     $scope.gridOptions = {
                             data: 'users',
                             enableRowSelection: false,
                             enableCellEditOnFocus: true,
                             multiSelect: false,
                             columnDefs: [
                               { field: 'name', displayName: 'Name', enableCellEdit: true } ,
                               { field: 'email', displayName: 'Email', enableCellEdit: true} ,
                               { field: 'number', displayName: 'Number', enableCellEdit: true} ,
                               { field: 'dept', displayName: 'Department', enableCellEdit: false} ,
                               { field:'', displayName: 'Additional Info', enableCellEdit: false,
                                  cellTemplate: '<button id="editBtn" type="button"  ng-click="edit(row.entity._id)" >View</button>'},
                                  { field:'', displayName: 'Edit', enableCellEdit: false,
                                  cellTemplate: '<button id="editBtn" type="button"  ng-click="update(row.entity._id,row.entity)" >Edit</button>'},
                               ]
                               
                           };
                     
                     }]);