controllers.controller('editCtrl', function ($scope, $rootScope, $http, myService) {
    $scope.message = "Edit Me Please";
    console.log('It is working');
    $scope.task = myService.editTask;

    console.log($scope.task);

    var submit = function(){  
      // api call POST to api/tasks
      //$scope.task.user = $rootScope.rootUser;
      
      console.log('before PUT call');
      console.log($scope.task);

      $http({
            method: 'PUT',
            url: '/api/tasks',
            data: $scope.task
          }).
          success(function (data, status, headers, config) {
            console.log('task is successfully saved');
            $scope.task = {};
          }).
          error(function (data, status, headers, config) {
            console.log('task did not save');
          });
    }

  });