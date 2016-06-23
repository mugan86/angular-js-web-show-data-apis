'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentsApp
 */
angular.module('apisApp')
  .controller('MainCtrl', function (serviraceAPIService, nbaInfoService, $scope, WIKIPEDIA_MOBILE_WIKI_URL) {
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
        var roy_players = convertToArrayFromCSV(csv_str);

        for (var i = 1; i < roy_players.length; i++)
        {
          console.log(WIKIPEDIA_MOBILE_WIKI_URL+convertWikipediaFriendlySearchTerm(roy_players[i][2]));
          
        }

      });

});
