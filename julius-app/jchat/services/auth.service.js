/**
 * Created by Julius Hernandez on 7/28/2016.
 */

angular.module('jchat').factory('jAuth', ['$firebaseAuth', 'FirebaseUrl',
    function ($firebaseAuth, FirebaseUrl) {
        var ref = new Firebase(FirebaseUrl);

        return $firebaseAuth(ref);
    }]
);
