'use strict';

angular.module('documentsApp')
  .service('mountainsInfoService', function mountainsInfoService($http) {
    return {
      getList: function() 
      {
        var url = 'files/eh_mountains.csv';
        return $http.get(url).success( function(resp){ return resp; });
      },
      
    };
});