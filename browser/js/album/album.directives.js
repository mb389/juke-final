juke.directive('albumList',function() {
   return {
      restrict: "E",
      templateUrl:'/js/album/templates/albums.html',
      scope: {
         albums: "="
      }
   }
})

juke.directive('songList',function(PlayerFactory){
   return {
      restrict: "E",
      templateUrl: '/js/song/templates/songs.html',
      scope: {
         songs: "="
      },
      link: function($scope) {

         $scope.getCurrentSong = function () {
           return PlayerFactory.getCurrentSong();
         };

         $scope.isPlaying = function (song) {
           return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
         };

         $scope.toggle = function (song) {
           if (song !== PlayerFactory.getCurrentSong()) {
             PlayerFactory.start(song, $scope.songs);
           } else if ( PlayerFactory.isPlaying() ) {
             PlayerFactory.pause();
           } else {
             PlayerFactory.resume();
           }
         };
      }
   }
})
