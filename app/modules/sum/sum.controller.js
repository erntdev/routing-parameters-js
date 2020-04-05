(function () {
    'use strict';
    angular.module('SumModule')
        .controller('SumController', SumController);

    SumController.$inject = ['$routeParams'];

    function SumController($routeParams) {
        var vm = this;
        vm.a = $routeParams.param1;
        vm.b = $routeParams.param2;
    }
})();