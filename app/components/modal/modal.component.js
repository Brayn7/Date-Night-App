import template from './modal.html';
import controller from './modal.controller';

let modalComponent = {
   bindings: {},
   template,
   controller: ['$rootScope', controller],
   controllerAs: '$ctrl'
}

export default modalComponent;