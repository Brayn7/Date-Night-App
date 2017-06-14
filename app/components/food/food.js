import foodComponent from './food.component'; 

let foodModule = angular.module('food',[])
.component('food', foodComponent)

export default  foodModule;