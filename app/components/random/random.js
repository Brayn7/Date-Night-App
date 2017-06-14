import randomComponent from './random.component'; 

let randomModule = angular.module('random',[])
.component('random', randomComponent)

export default  randomModule;