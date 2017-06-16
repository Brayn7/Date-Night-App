
class appController {
    constructor($rootScope) {
        // vars
        let ctrl = this;
        ctrl.$rootScope = $rootScope;
        ctrl.$rootScope.currMenuItem = undefined;

        ctrl.$rootScope.$watch('currMenuItem', (()=>{
            ctrl.$rootScope.currMenuItem = ctrl.$rootScope.currMenuItem;
            console.log(ctrl.$rootScope.currMenuItem);
        }));
        // console.log(sharedFn);
        // functions 
        $('#myModal').modal('show');
    };
    

}
export default appController;