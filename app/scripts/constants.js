/**********************************************************************************************
Constant values files
----------------------------


***********************************************************************************************/
angular.module('documentsApp')

.constant('SERVIRACE_URL_LOCALHOST', 'http://mugan86.com/serviraces/api/v1/')
.constant('WIKIPEDIA_MOBILE_WIKI_URL', 'https://en.m.wikipedia.org/wiki/')
.constant('BASKETBALL_REFERENCE', 'http://www.basketball-reference.com')
.constant('F1', {
                        main_url: 'http://ergast.com/api/f1/',
                        drivers: 'drivers.json',
                        circuits: 'circuits.json'
                    })
.constant('REST_COUNTRIES', {
                        main_url: 'http://restcountries.eu',
                        all: '/rest/v1/all'
                    })
.constant('LASTFM', {
						localhost: 'http://ws.audioscrobbler.com/2.0/?method=',
						artist: '&artist=',
						album: '&album=',
						track: '&track=',
						country: '&country',
                        api_key: '&api_key=c1c76ca84c89905e771b8102a6d65ccb', 
    					format_json: '&format=json'
                    })
.constant('MENDIKAT', 'http://www.mendikat.net/')
;

