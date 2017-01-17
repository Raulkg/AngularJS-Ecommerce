var myApp =angular.module('myStoreApp', ['ngRoute','DeviceController','ngMaterial','ngMessages']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

$routeProvider.
when('/store', { 
	templateUrl: 'views/store.htm',
	 controller: 'MyController' }).

when('/rings/:productSku', {
 templateUrl: 'views/product.htm',
  controller: 'MyController' }).

when('/cart', { 
	templateUrl: 'views/shoppingCart.htm',
	 controller: 'MyController' }). 


otherwise({ redirectTo: '/store' });


}]);



myApp.factory("MyService", function () { 

var myStore = new store(); 
var myCart = new shoppingCart("MyStore"); 

 myCart.addCheckoutParameters("PayPal", "abc@gmail.com");

 return { store: StoreCart, cart: myCart }; 


});

