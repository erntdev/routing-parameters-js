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
            .when('/sum-four/:param1/:param2/:param3?/:param4?', {
                templateUrl: 'app/modules/sum-four/sum-four.component.html',
                controller: 'SumFourController'
            })
            .when('/calc/:option/:a?/:b?', {
                redirectTo: CalcOption
            })
            .otherwise({
                template: '<strong>No content available here...click one of the links from left panel</strong>'
            })
    }

    function CalcOption(params, path, search) {
        console.log(params);
        console.log(path);
        console.log(search);

        if (params.option === 'sum') {
            return '/sum/' + (params.a - 0) + '/' + (params.b - 0);
        } else if (params.option === 'input') {
            return '/sum-input';
        } else {
            return '/'
        }
    }
})();