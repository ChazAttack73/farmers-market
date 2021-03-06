
"use strict";

angular.module('myApp')
  .service('EventService', ['$http', function($http){
    this.getEvents = function(){
      return $http.get('/event');
    };
    this.getOneEventService = function(eventId){
      return $http.get('event/events/'+eventId);
    };
    this.addEvent = function(event){
      return $http.post('/event', event);
    };
    this.editEvent = function(event){
      return $http.put('/edit', event);
    };

    this.deleteEvent = function(event) {
      return $http.delete('/delete/' + event._id);
    };

    this.addUser = function(user){
      return $http.post('/user/', user);
    };

    this.loginUser = function(user){
      return $http.post('/user/login', user);
    };

  }]);