/**
 * Created by Julius Hernandez on 7/28/2016.
 */

angular.module('jchat').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/jchat/login',
                templateUrl: 'julius-app/jchat/views/login.html',
                controller: 'AuthCtrl as authCtrl',
                resolve: {
                    requireNoAuth: function ($state, jAuth) {
                        return jAuth.$requireAuth().then(function (auth) {
                            $state.go('home');
                        }, function (error) {
                            console.log("jha - The user is NOT authenticated");
                        });
                    }
                }
            })
            .state('register', {
                url: '/jchat/register',
                templateUrl: 'julius-app/jchat/views/register.html',
                controller: 'AuthCtrl as authCtrl'
            })
            .state('profile', {
                urL: '/jchat/profile',
                resolve: {
                    auth: function ($state, jAuth) {
                        return jAuth.$requireAuth().catch(function () {
                            $state.go('home');
                        });
                    },
                    profile: function (jUsers, jAuth) {
                        return jAuth.$requireAuth().then(function (auth) {
                            return jUsers.getProfile(auth.uid).$loaded();
                        });
                    }
                },
                controller: 'ProfileCtrl as profileCtrl',
                templateUrl: 'julius-app/jchat/views/profile.html'
            })
            .state('channels', {
                templateUrl: 'julius-app/jchat/views/channels.html',
                controller: 'ChannelsCtrl as channelsCtrl',
                resolve: {
                    channels: function (jChannels) {
                        return jChannels.$loaded();
                    },
                    profile: function ($state, jAuth, jUsers) {
                        return jAuth.$requireAuth().then(function (auth) {
                            return jUsers.getProfile(auth.uid).$loaded()
                                .then(function (profile) {
                                    if (profile.displayName) {
                                        return profile;
                                    } else {
                                        $state.go('profile');
                                    }
                                });
                        }, function (err) {
                            $state.go('register');
                        })
                    }
                },
                url: '/jchat/channels'
            })
            .state('channels.create', {
                url: '/jchat/channels/create',
                templateUrl: 'julius-app/jchat/views/create.html',
                controller: 'ChannelsCtrl as channelsCtrl'
            })
            .state('channels.messages', {
                url: '/jchat/{channelId}/messages',
                resolve: {
                    messages: function ($stateParams, jMessages) {
                        return jMessages.forChannel($stateParams.channelId).$loaded();
                    },
                    channelName: function ($stateParams, channels) {
                        return '#'+channels.$getRecord($stateParams.channelId).name;
                    }
                },
                templateUrl: 'julius-app/jchat/views/messages.html',
                controller: 'MessagesCtrl as messagesCtrl'
            });
    }]
).constant('FirebaseUrl', 'https://julius.firebaseio.com/');
