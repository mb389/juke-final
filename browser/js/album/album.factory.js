'use strict';

juke.factory('AlbumFactory', function ($http, SongFactory) {

  var AlbumFactory = {};

  var cachedSongs = []

  AlbumFactory.fetchAll = function () {
    return $http.get('/api/albums')
    .then(response => response.data)
    .then(function (albums1) {
      albums1.forEach(function (eachAlbum, index, albums) {
      albums[index] = AlbumFactory.convert(eachAlbum);
      cachedSongs = cachedSongs.concat(eachAlbum.songs);
      })
      console.log(cachedSongs);
      return albums1;
    });
  };

  AlbumFactory.getAllSongs = function () {
    AlbumFactory.fetchAll()
    .then(function () {
      return cachedSongs;
    })
  }

  AlbumFactory.fetchById = function (id) {
    return $http.get('/api/albums/' + id)
    .then(response => response.data)
    .then(AlbumFactory.convert)
    .then(album => {
      album.songs = album.songs.map(SongFactory.convert);
      return album;
    });
  };

  AlbumFactory.convert = function (album) {
    album.imageUrl = '/api/albums/' + album._id + '.image';
    return album;
  };

  return AlbumFactory;

});
