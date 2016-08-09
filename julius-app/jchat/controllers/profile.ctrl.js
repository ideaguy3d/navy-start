/**
 * Created by Julius Hernandez on 8/8/2016.
 */

angular.module('jchat').controller('ProfileCtrl', ['$state', 'md5', 'auth', 'profile',
    function ($state, md5, auth, profile) {
        var profileCtrl = this;

        profileCtrl.profile = profile;

        profileCtrl.updateProfile = function () {
            console.log("jha - auth.password = "+auth.password);
            console.log("jha - auth.password.email = "+auth.password.email);
            profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
            profileCtrl.profile.$save();
        }
    }]
);

//