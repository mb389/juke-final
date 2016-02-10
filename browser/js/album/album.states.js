'use strict';

juke.config(function($stateProvider) {
  // define a something state
  $stateProvider.state('AllAlbumsState', {
    controller: 'AlbumsCtrl',
    url: '/albums',
    template: allAlbumsStateTemplate
  });
  $stateProvider.state('OneAlbumsState', {
    controller: 'AlbumCtrl',
    url: '/albums/:albumId',
    template: albumStateTemplate
  });
});

var allAlbumsStateTemplate="";
allAlbumsStateTemplate += "        <div ng-controller=\"AlbumsCtrl\">";
allAlbumsStateTemplate += "          <h3>Albums<\/h3>";
allAlbumsStateTemplate += "          <div class=\"row\">";
allAlbumsStateTemplate += "            <div class=\"col-xs-4\" ng-repeat=\"album in albums\">";
allAlbumsStateTemplate += "              <a class=\"thumbnail\" ui-sref=\"OneAlbumsState({ albumId: album._id })\">";
allAlbumsStateTemplate += "                <img ng-src=\"{{ album.imageUrl }}\">";
allAlbumsStateTemplate += "                <div class=\"caption\">";
allAlbumsStateTemplate += "                  <h5>";
allAlbumsStateTemplate += "                    <span>{{ album.name }}<\/span>";
allAlbumsStateTemplate += "                  <\/h5>";
allAlbumsStateTemplate += "                  <small>{{ album.songs.length }} songs<\/small>";
allAlbumsStateTemplate += "                <\/div>";
allAlbumsStateTemplate += "              <\/a>";
allAlbumsStateTemplate += "            <\/div>";
allAlbumsStateTemplate += "          <\/div>";
allAlbumsStateTemplate += "        <\/div>";

var albumStateTemplate="";
albumStateTemplate += "<div class=\"album\" ng-controller=\"AlbumCtrl\">";
albumStateTemplate += "          <p>";
albumStateTemplate += "            <h3>{{ album.name }}<\/h3>";
albumStateTemplate += "            <img ng-src=\"{{ album.imageUrl }}\" class=\"img-thumbnail\">";
albumStateTemplate += "          <\/p>";
albumStateTemplate += "          <table class='table'>";
albumStateTemplate += "            <thead>";
albumStateTemplate += "              <tr>";
albumStateTemplate += "                <th><\/th>";
albumStateTemplate += "                <th>Name<\/th>";
albumStateTemplate += "                <th>Artists<\/th>";
albumStateTemplate += "                <th>Genres<\/th>";
albumStateTemplate += "              <\/tr>";
albumStateTemplate += "            <\/thead>";
albumStateTemplate += "            <tbody>";
albumStateTemplate += "              <tr ng-repeat=\"song in album.songs\" ng-class=\"{active: song === getCurrentSong() }\">";
albumStateTemplate += "                <td>";
albumStateTemplate += "                  <button class=\"btn btn-default btn-xs\" ng-click=\"toggle(song)\">";
albumStateTemplate += "                    <span class=\"glyphicon\" ng-class=\"{ 'glyphicon-pause': isPlaying(song), 'glyphicon-play': !isPlaying(song) }\"><\/span>";
albumStateTemplate += "                  <\/button>";
albumStateTemplate += "                <\/td>";
albumStateTemplate += "                <td>{{ song.name }}<\/td>";
albumStateTemplate += "                <td><span ng-repeat=\"artist in song.artists\">{{ artist.name }}{{ $last ? '' : ', ' }}<\/span><\/td>";
albumStateTemplate += "                <td>{{ song.genres.join(', ') }}<\/td>";
albumStateTemplate += "              <\/tr>";
albumStateTemplate += "            <\/tbody>";
albumStateTemplate += "          <\/table>";
albumStateTemplate += "        <\/div>";
