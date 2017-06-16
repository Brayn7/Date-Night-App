import template from './movies.html';
import controller from './movies.controller';

let moviesComponent = {
   bindings: {},
   template,
   controller: ["$rootScope", controller],
   controllerAs: '$ctrl'
}

export default moviesComponent;