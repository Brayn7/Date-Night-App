import template from './events.html';
import controller from './events.controller';

let eventsComponent = {
   bindings: {},
   template,
   controller: ['$rootScope', controller],
   controllerAs: '$ctrl'
}

export default eventsComponent;