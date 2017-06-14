import moviesComponent from './movies.component';

let moviesModule = angular.module('movies', [])
   .controller('movies', moviesComponent);

export default moviesModule;   