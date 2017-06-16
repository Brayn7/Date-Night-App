import template from './food.html';
import controller from './food.controller';

let foodComponent = {
	bindings: {},
	template, 
	controller: ['$rootScope', '$http', controller],
	controllerAs: '$ctrl'
}

export default foodComponent;