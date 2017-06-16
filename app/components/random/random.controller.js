import sharedFn from '../../sharedFn';
class randomController {
    constructor($rootScope) {
        let ctrl = this;
        ctrl.$rootScope = $rootScope;
    };

    sharedFn(e) {
        let ctrl = this;
        if (ctrl.$rootScope.currMenuItem === undefined) {
            ctrl.$rootScope.currMenuItem = sharedFn(e);
        } else {
            ctrl.$rootScope.currMenuItem = undefined;
        }
    }
}

export default randomController;