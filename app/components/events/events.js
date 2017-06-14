import eventsComponent from './events.component';

let eventsModule = angular.module('events', [])
   .controller('events', eventsComponent);

export default eventsModule;   