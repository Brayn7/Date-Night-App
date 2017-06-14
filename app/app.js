import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';
import eventsComponent from './components/events/events.component';
import moviesComponent from '/components/events/events.component';

angular.module('app', [])
	.component('app', appComponent) 
   .component('navbar', navbarComponent)
   .component('events', eventsComponent)
   .component('moveis', moviesComponent)
