'use strict';

juke.config(function($stateProvider) {
  // define a something state
  $stateProvider.state('AllArtistsState', {
    controller: 'ArtistsCtrl',
    url: '/artists',
    template: allArtistsStateTemplate
  });
  
  // $stateProvider.state('OneArtistState', {
  //   controller: function($scope, $stateParams, $log, ArtistFactory){
  //   $scope.showMe = true;
  //     ArtistFactory.fetchById($stateParams.artistId)
  //     .then(artist => {
  //       $scope.artist = artist;
  //     })
  //     .catch($log.error);
  //   },
  //   url: '/artists/:artistId',
  //   template: artistStateTemplate
  // });
});

var allArtistsStateTemplate="";
allArtistsStateTemplate += "        <div ng-show=\"showMe\" ng-controller=\"ArtistsCtrl\">";
allArtistsStateTemplate += "          <h3>Artists<\/h3>";
allArtistsStateTemplate += "            <div class=\"list-group\">";
allArtistsStateTemplate += "              <div class=\"list-group-item\" ng-repeat=\"artist in artists\">";
allArtistsStateTemplate += "              <a ui-sref=\"OneArtistState({ artist: artist })\">{{ artist.name }}<\/a>";
allArtistsStateTemplate += "            <\/div>";
allArtistsStateTemplate += "          <\/div>";
allArtistsStateTemplate += "        <\/div>";

// var artistStateTemplate="";
// artistStateTemplate += "        <div ng-show=\"showMe\" ng-controller=\"ArtistCtrl\">";
// artistStateTemplate += "            <h3>{{ artist.name }}<\/h3>";
// artistStateTemplate += "            <h3>Albums<\/h3>";
// artistStateTemplate += "            <div class=\"row\">";
// artistStateTemplate += "              <div class=\"col-xs-4\" ng-repeat=\"album in artist.albums\">";
// artistStateTemplate += "                <a class=\"thumbnail\" href=\"#\" ng-click=\"viewOneAlbum(album)\">";
// artistStateTemplate += "                  <img ng-src=\"{{ album.imageUrl }}\">";
// artistStateTemplate += "                  <div class=\"caption\">";
// artistStateTemplate += "                    <h5>";
// artistStateTemplate += "                      <span>{{ album.name }}<\/span>";
// artistStateTemplate += "                    <\/h5>";
// artistStateTemplate += "                    <small>{{ album.songs.length }} songs<\/small>";
// artistStateTemplate += "                  <\/div>";
// artistStateTemplate += "                <\/a>";
// artistStateTemplate += "              <\/div>";
// artistStateTemplate += "            <\/div>";
// artistStateTemplate += "            <table class='table'>";
// artistStateTemplate += "              <thead>";
// artistStateTemplate += "                <tr>";
// artistStateTemplate += "                  <th><\/th>";
// artistStateTemplate += "                  <th>Name<\/th>";
// artistStateTemplate += "                  <th>Artists<\/th>";
// artistStateTemplate += "                  <th>Genres<\/th>";
// artistStateTemplate += "                <\/tr>";
// artistStateTemplate += "              <\/thead>";
// artistStateTemplate += "              <tbody>";
// artistStateTemplate += "                <tr ng-repeat=\"song in artist.songs\" ng-class=\"{active: song === getCurrentSong() }\">";
// artistStateTemplate += "                  <td>";
// artistStateTemplate += "                    <button class=\"btn btn-default btn-xs\" ng-click=\"toggle(song)\">";
// artistStateTemplate += "                      <span class=\"glyphicon\" ng-class=\"{ 'glyphicon-pause': isPlaying(song), 'glyphicon-play': !isPlaying(song) }\"><\/span>";
// artistStateTemplate += "                    <\/button>";
// artistStateTemplate += "                  <\/td>";
// artistStateTemplate += "                  <td>{{ song.name }}<\/td>";
// artistStateTemplate += "                  <td><span ng-repeat=\"artist in song.artists\">{{ artist.name }}{{ $last ? '' : ', ' }}<\/span><\/td>";
// artistStateTemplate += "                  <td>{{ song.genres.join(', ') }}<\/td>";
// artistStateTemplate += "                <\/tr>";
// artistStateTemplate += "              <\/tbody>";
// artistStateTemplate += "            <\/table>";
// artistStateTemplate += "        <\/div>";
