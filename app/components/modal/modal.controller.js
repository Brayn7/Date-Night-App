class modalController {
   constructor ($rootScope){
      let ctrl = this; 
      ctrl.$rootScope = $rootScope; 
      console.log(ctrl.$rootScope);
      ctrl.$rootScope.zipcode;    
   }


  zipSubmit(){
   	let ctrl= this; 
   	console.log(ctrl.zipcode);
   	$('#myModal').modal('hide');
    
    ctrl.$rootScope.zipcode = ctrl.zipcode;

   };
}

export default modalController;