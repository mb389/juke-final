juke.controller('PlaylistCtrl', function ($scope, $rootScope, PlayerFactory, PlaylistFactory) {



   $scope.addTitle = function() {
      PlaylistFactory.create($scope.playlistInput);
      $scope.playlistInput.name="";
      $scope.playlistForm.name.$touched=false;
      console.log($scope.playlistInput);
   }

});
