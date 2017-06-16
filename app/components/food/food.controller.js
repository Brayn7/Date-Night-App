import dotenv from '../../../dist/env.json';
class foodController {
    constructor($rootScope) {
        let ctrl = this;
        // $rootscope vars
        ctrl.$rootScope = $rootScope;

        ctrl.$rootScope.$watch('zipcode', (() => {
            ctrl.zipcode = ctrl.$rootScope.zipcode;
            ctrl.call(ctrl.zipcode, dotenv.DB_USER, dotenv.DB_PASS);
        }));

        // local vars
        ctrl.restaurants;

        // ajax call to foursquare
        ctrl.call = function (zip, user, pass) {
           $.ajax({
            url: 'https://api.foursquare.com/v2/venues/explore?near=' + zip + '&radius=800&query=food&client_id='+ user +'&client_secret=' + pass + '&v=20170616',
            type: 'GET',
            dataType: 'json',
            data: {param1: 'value1'},
         })
         .done(function() {
            console.log("success");
         })
         .fail(function() {
            console.log("error");
         })
         .always(function(response) {
            console.log(response.response.groups[0].items);
         }).then(function(res){
            ctrl.restaurants = res.response.groups[0].items;
            console.log(ctrl.restaurants);
         });
        }
         
         
         
    };


}

export default foodController;