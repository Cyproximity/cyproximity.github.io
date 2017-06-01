(function () {
	'use strict';

	angular
	.module('app.routes', [])
	.config(Routes);

	Routes.$injector = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function Routes($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/');

    //$locationProvider.html5Mode(true);

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'assets/views/index.html'
			})
			.state('about', {
        url: '/about',
        templateUrl: 'assets/views/about.html'
      })
      .state('articles', {
        url: '/blog',
        templateUrl: 'assets/views/comingsoon.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'assets/views/contact.html'
      });
	}
})();
