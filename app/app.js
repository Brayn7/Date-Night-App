import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';
import foodComponent from './components/food/food.component'; 
import randomComponent from './components/random/random.component'

angular.module('app', [])
	.component('app', appComponent) 
   .component('navbar', navbarComponent)
   .component('food', foodComponent)
   .component('random', randomComponent)