import template from './random.html';
import controller from './random.controller';

let randomComponent = {
	bindings: {},
	template, 
	controller: ["$rootScope", controller],
	controllerAs: '$ctrl'
}

export default randomComponent;