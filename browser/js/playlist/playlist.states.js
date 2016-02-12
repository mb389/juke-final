juke.config(function ($stateProvider) {

  $stateProvider.state('playlists', {
    url: '/playlists',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl'
  })
  .state('playlists.songAdder', {
     url: '/playlists/:playlistName',
     templateUrl:'/js/playlist/templates/songAdder.html'
 })
  });
