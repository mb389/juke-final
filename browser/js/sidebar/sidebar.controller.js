'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  $scope.viewAlbums = function () {
    // $rootScope.$broadcast('viewSwap', { name: 'allAlbums'});
    $scope.changeState = function () {
    $state.go('AllAlbumsState');
    };
    // $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  };

  $scope.viewAllArtists = function () {
    $scope.changeState = function () {
    $state.go('AllArtistsState');
    // $rootScope.$broadcast('viewSwap', { name: 'allArtists' });
  };
};
});
