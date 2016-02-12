juke.controller('PlaylistCtrl', function ($scope, $rootScope, PlayerFactory, PlaylistFactory, AlbumFactory, SongFactory) {

   $scope.addTitle = function() {
      PlaylistFactory.create($scope.playlistInput);
      // $scope.playlistInput.name="";
      $scope.playlistForm.name.$touched=false;
      console.log($scope.playlistInput);
   }

   $scope.getPlaylist = PlaylistFactory.getOnePlaylist; // invoke on DOM

  SongFactory.getAllSongs()
  .then(function (allSongs) {
    $scope.songs = allSongs;
    $scope.selected = $scope.songs[0];
  });

  $scope.addToPlaylist = PlaylistFactory.addSongToPlaylist;
  
  // $scope.toggle = function (song) {
  //   if (song !== PlayerFactory.getCurrentSong()) {
  //     PlayerFactory.start(song, $scope.album.songs);
  //   } else if ( PlayerFactory.isPlaying() ) {
  //     PlayerFactory.pause();
  //   } else {
  //     PlayerFactory.resume();
  //   }
  // };

  // $scope.getCurrentSong = function () {
  //   return PlayerFactory.getCurrentSong();
  // };

  // $scope.isPlaying = function (song) {
  //   return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  // };

});