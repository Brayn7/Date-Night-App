class foodController{
constructor($rootScope){
	let ctrl = this; 
	ctrl.$rootScope =  $rootScope;
	ctrl.$rootScope.$watch('zipcode', (()=>{
	ctrl.zipcode= ctrl.$rootScope.zipcode;
	}));
	};

}

export default foodController;