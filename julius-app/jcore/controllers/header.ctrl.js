/**
 * Created by julius on 7/18/2016.
 */
angular.module('jcore').controller('HeaderCtrl', ['$scope', 'jMenus', 'jAuthentication',
    function ($scope, jMenus, jAuthentication) {
        //TODO: make a fake authentication service. hwa@12:30pm 7.22.16
        $scope.authentication = jAuthentication;
        $scope.isCollapsed = false;
        $scope.menu = jMenus.getMenu('topbar');

        $scope.toggleCollapsibleMenu = function () {
            $scope.menu = !scope.menu;
        };

        $scope.$on('$stateChangeSuccess', function () {
            $scope.isCollapsed = false;
        });
    }]
);

//