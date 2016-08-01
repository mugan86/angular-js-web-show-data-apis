'use strict';

angular.module('documentsApp')
  .service('lastFMService', function lastFMService($http, LASTFM) {
    return {
      getInfoSelectArtist: function(artist, page) 
      {

        var url = LASTFM.localhost + 'artist.getinfo' + LASTFM.artist + artist + LASTFM.api_key + LASTFM.format_json+'&page=' + page;
        
        console.log(url);

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getTagsSelectArtist: function (artist)
      {
        var url = LASTFM.localhost + 'artist.getTags' + LASTFM.artist + artist + LASTFM.api_key + LASTFM.format_json;
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getSimilarArtists: function (artist, page)
      {
        var url = LASTFM.localhost + 'artist.getsimilar' + LASTFM.artist + artist + LASTFM.api_key + LASTFM.format_json+'&page=' + page;
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getTopalbums: function (artist, page)
      {
        var url = LASTFM.localhost + 'artist.gettopalbums' + LASTFM.artist + artist + LASTFM.api_key + LASTFM.format_json+'&page=' + page;
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getTopTracks: function (artist, page)
      {
        var url = LASTFM.localhost + 'artist.gettoptracks' + LASTFM.artist + artist + LASTFM.api_key + LASTFM.format_json+'&page=' + page;
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      searchArtist: function (artist, page)
      {
        var url = LASTFM.localhost + 'artist.search' + LASTFM.artist + artist + LASTFM.api_key + LASTFM.format_json+'&page=' + page;
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getTrackInfoByArtist: function (artist, track,  page)
      {
        var url = LASTFM.localhost + 'artist.search' + LASTFM.artist + artist + LASTFM.track + trackLASTFM.api_key + LASTFM.format_json+'&page=' + page;
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });

  /*
    
   
    //Tracks
    
    public static String GET_INFO_SELECT_TRACK = URL_LOCALHOST + "track.getInfo&artist=%s&track=%s" + API_JSON_FORMAT;
    public static String GET_SEARCH_SELECT_TRACK = URL_LOCALHOST + "track.search&track=%s" + API_JSON_FORMAT;
    public static String GET_SIMILAR_ARTIST_TRACK = URL_LOCALHOST + "track.getsimilar&artist=%s&track=%s" + API_JSON_FORMAT;
    
    //Geo
    public static String GET_TOP_ARTISTS_BY_COUNTRY = URL_LOCALHOST + "geo.gettopartists&country=%s" + API_JSON_FORMAT;
    public static String GET_TOP_TRACKS_BY_COUNTRY = URL_LOCALHOST + "geo.gettoptracks&country=%s" + API_JSON_FORMAT;
    
    //Charts
    public static String GET_TOP_ARTIST_CHART = URL_LOCALHOST + "chart.gettopartists" +  API_JSON_FORMAT;*/