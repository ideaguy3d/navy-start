/**
 * Created by Julius Hernandez on 8/7/2016.
 */

angular.module('jnavy-start').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('navy', {
                url: '/navy/home',
                templateUrl: 'julius-app/jnavy-start/views/navy-start.html'
            })
    }]
);

//