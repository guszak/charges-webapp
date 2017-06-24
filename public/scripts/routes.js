/**
* @Title: RouteProvider Definitions;
* @Description: Defines system routing conditions based on url parameters;
* @Author: Lucas Guszak;
* @Date: 07/06/2017;
*/
App.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('main', {
 		abstract: true,
 		url: '/main',
 		controller: 'nav_bar_ctrl',
 		templateUrl: 'public/components/nav/nav_bar.html' + bustUrl,
 		cache: false
 	})
	.state('main.customers', {
		url: '/customers',
		templateUrl: 'public/components/customers/customers.html' + bustUrl,
		controller: 'customers_ctrl',
		cache: false
	})
	.state('main.charges', {
		url: '/charges',
		templateUrl: 'public/components/charges/charges.html' + bustUrl,
		controller: 'charges_ctrl',
		cache: false
	})

	$urlRouterProvider.otherwise('/customers')
})
