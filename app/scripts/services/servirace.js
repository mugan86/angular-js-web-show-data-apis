'use strict';

angular.module('apisApp')
  .service('serviraceAPIService', function serviraceAPIService($http) {
    return {
      getNextTwoMonthsRacesData: function() 
      {

        var url = 'http://mugan86.com/serviraces/api/v1/race/get/race_infov4.php';
        

        return $http.post(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getLastTrafficIncidents: function ()
      {
        var url = 'http://mugan86.com/serviraces/api/v1/traffic/get/last_incidents.php?ports=0';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });