var dc = angular.module('DeviceController', ['ngAnimate']);



dc.controller('MyController', ['$scope','$http','$mdDialog',function ($scope,$http,$mdDialog) {





$http.get('https://nimbleapi.firebaseio.com/data.json').success(function(data){
$scope.items = data;
$scope.count = 0;
$scope.data =[];

          $scope.increment = function(gond){
            $scope.count += 1;
            $scope.data.push(gond);
          }




  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('List of Items')
        .textContent($scope.data.toString())
        .ariaLabel('Alert Dialog Demo')
        .ok('Check out!')
        .targetEvent(ev)
    );
  };






});

}]);



dc.controller('DeviceDetailConroller', ['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
$http.get('https://nimbleapi.firebaseio.com/data.json').success(function(data){
$scope.items = data;
$scope.myItemD = $routeParams.itemId;


        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.items.length-1;
        }

        if ($routeParams.itemId < $scope.items.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }


});

}]);