'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentsApp
 */
angular.module('apisApp')
  .controller('MainCtrl', function (serviraceAPIService, nbaInfoService, $scope) {
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

    nbaInfoService.getHistoryROYList()
        .then(function(resp)
        {
        var lines = [];

        //Get data from services 'nba.js' file
        var csv_str = resp.data;
        console.log(convertToArrayFromCSV(csv_str));

      });



    /*readCSV();

    function readCSV () {
      // http get request to read CSV file content
      $http.get('/files/nba_history_roy.csv').success($scope.processData);
    };

    $scope.processData = function(allText) {
      // split content based on new line
      var allTextLines = allText.split(/\r\n|\n/);
      var headers = allTextLines[0].split(',');
      var lines = [];

      for ( var i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
          var tarr = [];
          for ( var j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          lines.push(tarr);
        }
      }
      $scope.data = lines;
      console.log("Items: " + $scope.data.length);
    };*/
    });
