/**
 * Created by julius on 7/17/2016.
 */

"use strict";

var jConfig = (function () {
    var jAppName = "juliusApp";
    var jAppDependencies = ['ui.router', 'firebase'];

    //this'll create a new vertical module.
    var jCreateModule = function (moduleName, dependencies) {
        //create the module
        angular.module(moduleName, dependencies || []);

        angular.module(jAppName).requires.push(moduleName);
    };

    return {
        appName: jAppName,
        appDependencies: jAppDependencies,
        registerModule: jCreateModule
    }
})();


//