/**
 * Created by julius on 8/10/2016.
 */
"use strict";

angular.module('jcore').controller('MessagesCtrl', [
    'profile', 'channelName', 'messages',
    function (profile, channelName, messages) {
        var messagesCtrl = this;

        messagesCtrl.channelName = channelName;
        messagesCtrl.messages = messages;
        messagesCtrl.message = '';

        messagesCtrl.sendMessage = function () {
            if(messagesCtrl.message.length > 0) {
                messagesCtrl.messages.$add({
                    uid: profile.$id,
                    body: messagesCtrl.message,
                    timestamp: Firebase.ServerValue.TIMESTAMP
                }).then(function () {
                    messagesCtrl.message = '';
                });
            }
        }

    }
]);

//