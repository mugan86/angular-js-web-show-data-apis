'use strict';

angular.module('apisApp')
  .service('serviraceAPIService', function serviraceAPIService($http, SERVIRACE_URL_LOCALHOST) {
    return {
      getNextTwoMonthsRacesData: function() 
      {

        var url = SERVIRACE_URL_LOCALHOST + 'race/get/race_infov4.php';
        

        return $http.post(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getLastTrafficIncidents: function ()
      {
        var url = SERVIRACE_URL_LOCALHOST+ 'traffic/get/last_incidents.php?ports=0';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });