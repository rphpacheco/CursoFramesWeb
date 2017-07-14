angular.module('primeiraApp').constant('consts', {
    appName : 'MEAN - Primeira Aplicação',
    version : '1.0',
    owner : 'Raphael Pacheco',
    year : '2017',
    site : 'http://devanalytics.com.br',
    apiUrl : 'http://localhost:3002/api',
    oapiUrl : 'http://localhost:3002/oapi',
    userKey : '_primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
}])