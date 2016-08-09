/**
 * Created by julius on 7/20/2016.
 */

angular.module('jcore').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'julius-app/jcore/views/home.view.html'
            });
    }]
);

//