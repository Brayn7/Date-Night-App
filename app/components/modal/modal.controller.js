class modalController {
   constructor ($rootScope){
      let ctrl = this; 
      ctrl.$rootScope = $rootScope; 
    
      ctrl.$rootScope.zipcode; 
      ctrl.$rootScope.area = ""; 
      console.log(ctrl.$rootScope.area);
   }

  zipSubmit(){
   	let ctrl= this; 
   	console.log(ctrl.zipcode);
   	$('#myModal').modal('hide');
    
    ctrl.$rootScope.zipcode = ctrl.zipcode;

   };
}

export default modalController;