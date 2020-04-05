(function () {
    'use strict';
    angular.module('AppModule')
        .config(AppRouting);

    AppRouting.$inject = ['$routeProvider'];

    function AppRouting($routeProvider) {
        $routeProvider.
            when('/', {
                template: '<strong>Welcome to my app...<strong><br><i>Click one of the links from left panel</i></strong></strong>'
            })
            .when('/sum/:param1/:param2', {
                templateUrl: 'app/modules/sum/sum.component.html',
                controller: 'SumController'
            })
            .when('/sum-input', {
                templateUrl: 'app/modules/sum-input/sum-input.component.html',
                controller: 'SumInputController'
            })
            .otherwise({
                template: '<strong>No content available here...click one of the links from left panel</strong>'
            })
    }
})();