var app = angular.module('whos-my-rep', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('main', {
            url: '/',
            templateUrl: 'js/templates/mainTmpl.html',
            controller: 'mainCtrl'
    })

    $urlRouterProvider
        .otherwise('/');

});