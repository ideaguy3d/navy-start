/**
 * Created by Julius Hernandez on 8/8/2016.
 */
"use strict";

angular.module('jchat').factory('jChannels', [ '$firebaseArray', 'FirebaseUrl',
    function ($firebaseArray, FirebaseUrl) {
        var channelsRef = new Firebase(FirebaseUrl+'channels');

        return $firebaseArray(channelsRef);
    }
]);

//