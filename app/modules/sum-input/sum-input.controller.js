(function () {
    'use strict';
    angular.module('SumInputModule')
        .controller('SumInputController', SumInputController);

    SumInputController.$inject = ['$location', '$interpolate'];

    function SumInputController($location, $interpolate) {
        var vm = this;
        vm.doSum = doSum;
        vm.valueA = 0;
        vm.valueB = 0;

        function doSum() {
            var url = $interpolate('/sum/{{valueA}}/{{valueB}}')(vm);
            $location.path(url);
        }
    }
})();