/**
 * Created by julius on 7/18/2016.
 */

"use strict";

angular.module('jcore').service('jMenus', [
    function () {
        this.defaultRoles = ['*'];
        this.menus = {};

        // 1st method, private.
        var shouldRender = function (user) {
            if (user) {
                if (!!~this.roles.indexOf('*')) {
                    return true;
                }
                else {
                    for (var userRoleIndex in user.roles) {
                        for (var roleIndex in this.roles) {
                            if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
                                return true;
                            }
                        }
                    }
                }
            }
            else {
                return this.isPublic;
            }

            return false;
        };

        // 2nd method
        this.validateMenuExistence = function (menuId) {
            if (menuId && menuId.length) {
                if (this.menus[menuId]) {
                    return true;
                } else {
                    throw new Error('menu does not exist');
                }
            }
            else {
                throw new Error('MenuID was not provided');
            }
        };

        // 3rd method
        this.getMenu = function (menuId) {
            this.validateMenuExistence(menuId);

            return this.menus[menuId];
        };

        // 4th method
        this.addMenu = function (menuId, isPublic, roles) {
            this.menus[menuId] = {
                isPublic: isPublic || false,
                roles: roles || this.defaultRoles,
                items: [],
                shouldRender: shouldRender
            };

            return this.menus[menuId];
        };

        // 5th method
        this.removeMenu = function (menuId) {
            this.validateMenuExistence(menuId);

            delete this.menus[menuId];
        };

        // 6th method
        this.addMenuItem = function (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute,
                                     isPublic, roles, position) {
            this.validateMenuExistence(menuId);

            this.menus.items.push({
                title: menuItemTitle,
                link: menuItemURL,
                menuItemType: menuItemType || 'item',
                menuItemClass: menuItemType,
                uiRoute: menuItemUIRoute || ('/' + menuItemURL),
                isPublic: ( (isPublic === null || typeof isPublic === 'undefined') ?
                    this.menus[menuId].isPublic : isPublic),
                roles: ( (roles === null || typeof roles === 'undefined') ?
                    this.menus[menuId].roles : roles ),
                position: position || 0,
                items: [],
                shouldRender: shouldRender
            });

            return this.menus[menuId];
        };

        // 7th method. Search for menu item.
        this.addSubMenuItem = function (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute,
                                        isPublic, roles, position) {
            this.validateMenuExistence(menuId);

            for (var itemIndex in this.menus[menuId].items) {
                if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
                    //push the new sub menu item
                    this.menus[menuId].items[itemIndex].items.push({
                        title: menuItemTitle,
                        link: menuItemURL,
                        uiRoute: menuItemUIRoute || ('/' + menuItemURL),
                        isPublic: ((isPublic === null || typeof isPublic === 'undefined') ?
                            this.menus[menuId].items[itemIndex].isPublic : isPublic),
                        roles: ((roles === null || typeof roles === 'undefined') ?
                            this.menus[menuId].items[itemIndex].isPublic : isPublic),
                        position: position || 0,
                        shouldRender: shouldRender
                    });
                }
            }
        };

        this.removeMenuItem = function (menuId, menuItemUrl) {

        };

        this.removeSubmenuItem = function (menuId, submenuItemUrl) {

        };

        this.addMenu('topbar');
        //
    }]
);

//