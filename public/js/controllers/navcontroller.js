controllers.controller('NavCtrl', function ($scope, $rootScope, $location) {
  $scope.message = "NAV NAV NAVIGATION!!!!!"
  $scope.logout = function(){
  	console.log('Hit the logout button')
    $rootScope.rootuser = null;
    $location.path('/')
  }

});