'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentsApp
 */
angular.module('apisApp')
  .controller('MainCtrl', function (serviraceAPIService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    serviraceAPIService.getNextTwoMonthsRacesData()
            .then(function(data) {

           console.log(data);
    });

    serviraceAPIService.getLastTrafficIncidents()
        .then(function(data) {

       console.log(data);
    });
  });
