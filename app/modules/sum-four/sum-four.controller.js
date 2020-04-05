(function () {
    'use strict';
    angular.module('SumFourModule')
        .controller('SumFourController', SumFourController);

    SumFourController.$inject = ['$routeParams'];

    function SumFourController($routeParams) {
        var vm = this;
        vm.valueA = $routeParams.param1;
        vm.valueB = $routeParams.param2;
        vm.valueC = $routeParams.param3;
        vm.valueD = $routeParams.param4;
}
})();