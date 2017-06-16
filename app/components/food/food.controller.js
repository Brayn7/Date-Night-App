import dotenv from '../../../dist/env.json';
import sharedFn from '../../sharedFn';
class foodController {
    constructor($rootScope, $http) {
        let ctrl = this;
        // $rootscope vars
        ctrl.restaurants = [];
        ctrl.$rootScope = $rootScope;
        console.log(ctrl.$rootScope);

        // ctrl.$rootScope.$watch('zipcode', (() => {
        //     ctrl.zipcode = ctrl.$rootScope.zipcode;
        //     ctrl.call(ctrl.zipcode, dotenv.DB_USER, dotenv.DB_PASS);
        // }));

        // local vars
        // ajax call to foursquare
        ctrl.call = function(zip, user, pass) {
            $http({
                url: 'https://api.foursquare.com/v2/venues/explore?near=' + zip + '&radius=800&query=food&client_id=' + user + '&client_secret=' + pass + '&v=20170616',
                method: "GET",
                data: {
                    param1: 'value1'
                }
            }).then(function(data) {
                ctrl.restaurants.push(data.data.response.groups[0].items);
            });
        };
        ctrl.call(40390, dotenv.DB_USER, dotenv.DB_PASS);
    };

    sharedFn (e) {
      let ctrl = this;  
      ctrl.$rootScope.currMenuItem = sharedFn(e);
      console.log(ctrl.$rootScope.currMenuItem);
    }

}

export default foodController;