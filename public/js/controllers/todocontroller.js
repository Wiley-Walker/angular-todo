controllers.controller('listCtrl', function ($scope, $http, $location) {
	$scope.message = 'The new todo is here';
	$scope.todo = [];

	$scope.newTask = function (){
		console.log('new task');
  }
    $http({
      method: 'GET',
      url: '/api/tasks',
    }).
    success(function(data, status, headers, config) {
    	console.log('new task made!');
    	console.log(data);
      //$location.path('/listTodo');
      console.log ('gone to the bar');
    }).
    error(function(data, status, headers, config) {
    	console.log('Not Correct Sir!!!!!!');
      console.log($scope.todo);
    });
});