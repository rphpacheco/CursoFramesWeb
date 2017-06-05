angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        })
        .state('billingCycle', {
            url: "/billingCycle",
            templateUrl: "billingCycle/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])