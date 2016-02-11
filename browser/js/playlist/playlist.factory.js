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

    var PlaylistFactory = {};

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            return response.data;
        });
    };

    return PlaylistFactory;

});
