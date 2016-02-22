"use strict";

angular.module('myApp')
  .controller('VendorController', ['$scope', 'VendorService', 'ProductService', 'EventService', '$location', '$rootScope', '$localStorage', '$routeParams', '$route', function($scope, VendorService, ProductService, EventService, $location, $rootScope, $localStorage, $routeParams, $route){
    $scope.vendorPrivate=true;
    $scope.vendorValue=true;
    $scope.Vendors = [];
    $scope.VendorService = VendorService;

    var id = $routeParams.id;

    VendorService.getVendors(id)
      .success(function(data) {
        $scope.Vendors = data;
    });

    $scope.registerVendor = function(vendor) {
      if(!vendor.name && vendor.password && vendor.phone && vendor.email && vendor.description) {
        $scope.error = "Please fill out all required fields";
      } else if(vendor.password !== vendor.verifyPassword) {
          $scope.error = "Passwords do not match";
      } else {
        VendorService.regVendor($scope.vendor).success(function(result) {
          console.log('Did I make it back to to the client side?', result);
          $rootScope.vendor_user = result;
          $localStorage.vendor_user = $rootScope.vendor_user;
          $location.url('/');
        }).error(function(error) {
          $scope.error = 'Unknown error.  Please try again';
        });
      }
    };

    // $scope.registerUser = function(user) {

    //   if(!user.username && user.password && user.verifyPassword){
    //     $scope.error = "Please completely fill out form";
    //     return false;
    //   }

    //   if(user.password !== user.verifyPassword){
    //     $scope.error = "verify password does not match";
    //     return false;
    //   }

    //   var newUser = {
    //     username : user.username,
    //     password : user.password
    //   };

    //   VendorService.registerUser(newUser).success(function(result){

    //     $location.url('/');
    //   }).error(function(error){
    //     $scope.error = "Please try again";
    //   });
    // };

    $scope.getVendorAndProducts = function(vendor) {
      $scope.vendor = [];
      $scope.vendorValue=false;
        console.log('VENDOR CONTROLLER');
        console.log(vendor.id);
      //var param1 = $routeParams.param1;
      VendorService.getOneVendor(vendor.id).success(function (data){
      $scope.vendor = data;
      });
    };

    $scope.loginVendor = function(vendorLoginCredentials){
      VendorService.loginVen(vendorLoginCredentials).success(function(result) {
        $rootScope.vendor_user = result;
        $localStorage.vendor_user = $rootScope.vendor_user;
        // $scope.vendor_user=true;
        $location.url('/vendor/private');
      }).error(function(error) {
          $scope.error ="Wrong username or password";
      });
    };



    $scope.getVendorAndProducts = function(vendor) {
      $scope.vendor = [];
      $scope.vendorValue=false;
      //var param1 = $routeParams.param1;
      VendorService.getOneVendor(vendor.id).success(function (data){
      $scope.vendor = data;
      });
    };

    // if($route.current.$$route.originalPath==='/vendor/private') {
    //  $scope.getVendorAndProducts({id: 3});

    // }

    $scope.clickButton = function () {
      //$scope.vendorValue=true;
      console.log('BUTTON CLICKED');
    };

    $scope.postProduct = function(product) {
      if(!product.name && product.price && product.quantity && product.description && product.product_picture) {
        $scope.error = "Please fill out all fields about your product";
      } else {
        ProductService.addProduct($scope.product).success(function(result) {
          console.log(result);

        }).error(function(error){
          $scope.error = "Unknown error. Please try again.";
        });
      }
    };
  }]);