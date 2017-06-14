import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';
import foodComponent from './components/food/food.component'; 
import randomComponent from './components/random/random.component'
import eventsComponent from './components/events/events.component';
import moviesComponent from '/components/movies/movies.component';

angular.module('app', [])
	.component('app', appComponent) 
   .component('navbar', navbarComponent)
   .component('food', foodComponent)
   .component('events', eventsComponent)
   .component('movies', moviesComponent)
   .component('random', randomComponent)

