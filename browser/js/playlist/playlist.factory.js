juke.factory('PlaylistFactory', function ($http, $q, AlbumFactory, SongFactory) {
   // submit playlist name
   // create an element using the name
   // change input box to song adding box
   //+ get the data w/ $http, of one song

   // how do we get the song from the form
   // when we submit, we pass the typed text
   // into a function, the function then calls the factory function
   // we will add a child state
   // to the playlist state state

   // then start generating rown on table with added songs
   var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
          var playlist = response.data;
          cachedPlaylists.push(playlist)
          return playlist;
        });
    };

    PlaylistFactory.getAll = function () {
      return $http.get("/api/playlists")
      .then(function (response) {
        angular.copy(response.data, cachedPlaylists)
        return cachedPlaylists;
      })
   }

   PlaylistFactory.getOnePlaylist = function (playlistName) {
    // get from array
    cachedPlaylists.forEach(function (element) {
      if (element.name == playlistName) {
        return element;
      }
    })
   }

   PlaylistFactory.addSongToPlaylist = function (playlist, song) {
    return $http.post("/" + playlist._id + "/songs", song)
    .then(function (response) {
      console.log(response)
      return response;
    })
   }

    return PlaylistFactory;

});
