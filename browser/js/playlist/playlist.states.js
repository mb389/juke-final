juke.config(function ($stateProvider) {

  $stateProvider.state('playlists', {
    url: '/playlists',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl'
  })
  .state('playlists.songAdder', {
     url: '/addSongs',
     templateUrl:'/js/playlist/templates/songAdder.html'
 })
  });
