/**
 * Created by Julius Hernandez on 8/8/2016.
 */
"use strict";

angular.module('jchat').controller('ChannelsCtrl', ['$state','jAuth',
    'jUsers', 'profile','channels',
    function ($state, jAuth, jUsers, profile, channels) {
        var channelsCtrl = this;

        channelsCtrl.profile = profile;
        channelsCtrl.channels = channels;
        channelsCtrl.getDisplayName = jUsers.getDisplayName;
        channelsCtrl.getGravatar = jUsers.getGravatar;

        channelsCtrl.logout = function () {
            jAuth.$unauth();
            $state.go('home');
        }
    }
]);

