/**
 * Created by Julius Hernandez on 7/28/2016.
 */

angular.module('jchat').controller('AuthCtrl', ['jAuth', '$state',
    function (jAuth, $state) {
        var authCtrl = this;

        authCtrl.user = {
            email: '',
            password: ''
        };

        authCtrl.login = function () {
            jAuth.$authWithPassword(authCtrl.user).then(function (auth) {
                $state.go('home');
            }, function (error) {
                authCtrl.error = error;
            })
        };

        authCtrl.register = function () {
            jAuth.$createUser(authCtrl.user).then(function (user) {
                authCtrl.login();
            }, function (error) {
                authCtrl.error = error;
            })
        };
    }]
);

//