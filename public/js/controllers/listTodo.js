controllers.controller('listTodoCtrl', function ($scope, $http, $location) {
  $scope.message = 'My list of lists';
  $scope.tasks = [];

  var getList = function () {
    $http({
      method: 'GET',
      url: '/api/tasks'
    }).
    success(function(data, status, headers, config) {
    	console.log('got the tasks');
    	$scope.tasks = data;  
    	$location.path('/listTodo');    
    }).
    error(function(data, status, headers, config) {
    	console.log('not working', data); 
    });	
  };

  getList();
   
		 

  

});