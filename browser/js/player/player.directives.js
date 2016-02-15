juke.directive('myplayer',function(PlayerFactory){
   return {
      restrict: "E",
      templateUrl: "/js/player/templates/player.html",
      link: function($scope) {
         //angular.extend($scope, PlayerFactory); // copy props from param2 to param1

         $scope.getCurrentSong = PlayerFactory.getCurrentSong;
         $scope.isPlaying = PlayerFactory.isPlaying;
         $scope.forward = PlayerFactory.next;
         $scope.back = PlayerFactory.previous;

         $scope.toggle = function () {
           if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
           else PlayerFactory.resume();
         };

         $scope.getPercent = function () {
           return PlayerFactory.getProgress() * 100;
         };
      }
   }
});

juke.directive('doubleClick',function(PlayerFactory) {
   return {
       restrict: 'A',
       scope: {
         doubleClick: '&'
       },
       link: function($scope,element,attrs) {
         element.on('dblclick',function() {
           $scope.doubleClick();
         })
       }
     };
});

juke.directive('getCurrentSong', function () {
  return {
    restrict: 'E',
    template: '<span>{{ getCurrentSong().name }} by {{ getCurrentSong().artists[0].name }}</span>'
  };
});
