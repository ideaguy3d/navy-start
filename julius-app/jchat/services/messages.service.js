/**
 * Created by julius on 8/9/2016.
 */

angular.module('jchat').factory('jMessages', [
    '$firebaseArray', 'FirebaseUrl',
    function ($firebaseArray, FirebaseUrl) {
        var channelMessagesRef = new Firebase(FirebaseUrl+'channelMessages');

        return {
            forChannel: function (channelId) {
                return $firebaseArray(channelMessagesRef.child(channelId));
            }
        }
    }
]);

//