import sharedFn from '../../sharedFn';
class eventsController {
   constructor ($rootScope){
      let ctrl = this;
      ctrl.$rootScope = $rootScope;
   }

   sharedFn (e) {
      let ctrl = this;
      console.log('test');
      if (ctrl.$rootScope.currMenuItem === undefined){
        ctrl.$rootScope.currMenuItem = sharedFn(e);
      } else {
        ctrl.$rootScope.currMenuItem = undefined;
      }
    };
}

export default eventsController;