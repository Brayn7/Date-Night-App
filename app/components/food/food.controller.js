import dotenv from '../../../dist/env.json';
import sharedFn from '../../sharedFn';
class foodController {
    constructor($rootScope, $http) {
        let ctrl = this;
        // $rootscope vars
        ctrl.restaurants = [];
        ctrl.$rootScope = $rootScope;
        console.log(ctrl.$rootScope);

        ctrl.$rootScope.$watch('zipcode', (() => {
            ctrl.zipcode = ctrl.$rootScope.zipcode;
            ctrl.call(ctrl.zipcode, dotenv.DB_USER, dotenv.DB_PASS, ctrl.$rootScope.area);
        }));

        // local vars
        // ajax call to foursquare
        ctrl.call = function(zip, user, pass, distance) {
            $http({
                url: 'https://api.foursquare.com/v2/venues/explore?near=' + zip + '&radius=' + distance + '&query=food&client_id=' + user + '&client_secret=' + pass + '&v=20170616',
                method: "GET",
                data: {
                    param1: 'value1'
                }
            }).then(function(data) {
                ctrl.restaurants.push(data.data.response.groups[0].items);
            });
        };
      //  ctrl.call(40390, dotenv.DB_USER, dotenv.DB_PASS);
    };

    sharedFn (e) {
      let ctrl = this;
      if (ctrl.$rootScope.currMenuItem === undefined){
        ctrl.$rootScope.currMenuItem = sharedFn(e);
      } else {
        ctrl.$rootScope.currMenuItem = undefined;
      }
    }

}

export default foodController;