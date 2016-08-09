/**
 * Created by julius on 7/17/2016.
 */

jConfig.registerModule(jConfig.appName, jConfig.appDependencies);

angular.element(document).ready(function () {
    angular.bootstrap(document, [ jConfig.appName ]);
});

//
