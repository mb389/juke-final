'use strict';

juke.controller('SidebarCtrl', function ($scope, $rootScope, PlaylistFactory) {


  $scope.viewAlbums = function () {
    $rootScope.$broadcast('viewSwap', { name: 'allAlbums'});
  };

  $scope.viewAllArtists = function () {
    $rootScope.$broadcast('viewSwap', { name: 'allArtists' });
  };

  $scope.viewAllPlaylists = function () {
     PlaylistFactory.getAll()
     .then(function (allPlaylists) {
     $scope.allPlaylists = allPlaylists;
     })

 }

   $scope.viewAllPlaylists();


});
