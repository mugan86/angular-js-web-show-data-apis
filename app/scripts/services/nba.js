'use strict';

angular.module('apisApp')
  .service('nbaInfoService', function nbaInfoService($http) {
    return {
      getHistoryROYList: function() 
      {

        var url = 'files/nba_history_roy.csv';
        

        return $http.get(url).success(

            function(resp){
              

                return resp;
            }
        );
      },
      
    };
});