"use strict";

angular.module('myApp')
  .service('VendorService', ['$http', function($http){
    this.getVendors = function(id){
      console.log('At vendor service?', id);
      return $http.get('/event/'+ id);
    };
    this.getOneVendor = function(vendorId){
      return $http.get('/vendor/'+vendorId);
    };
    this.loginVen = function(vendorLoginCredentials) {
      return $http.post('/vendor/login', vendorLoginCredentials);
    };
    this.regVendor = function(vendor) {
     return $http.post('/vendor/register', vendor);
    };
    this.logoutVen = function() {
      return $http.post('/vendor/logout');
    };
  }]);