'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the documentsApp
 */
angular.module('documentsApp')
  .controller('ServiraceCtrl', function (serviraceAPIService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    serviraceAPIService.getNextTwoMonthsRacesData()
            .then(function(data) {

           console.log(data);
    });
  });
