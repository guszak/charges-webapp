App.controller('customers_ctrl', function ($scope, $state, $mdDialog, Notification, Customers) {
	
	/**
	*	@name: getSuccess;
	*	@description: Rest Success Response Query customers;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	function getSuccess(data) {
		$scope.customers = data.customers;
	};

	/**
	*	@name: getError;
	*	@description: Rest Error Response Query customers;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	function getError(response) {
		Notification.error({title: 'Erro', message: 'Ocorreu um erro, tente novamente mais tarde!'
			+' Se o problema persistir, entre em contato com o suporte técnico.'});
	};

	/**
	*	@name: getCustomers;
	*	@description: Query customers;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.getCustomers = function () {
		$scope.promise = Customers.query($scope.query,getSuccess,getError).$promise;
	};

	/**
	*	@name: hoverIn;
	*	@description: Show customer options;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.hoverIn = function(customer) {
		customer.show=true;
	}

	/**
	*	@name: hoverOut;
	*	@description: Hide customer options;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.hoverOut = function(customer) {
		customer.show=false;
	}

	/**
	*	@name: new;
	*	@description: Open view insert customer;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.new = function(ev) {

		$mdDialog.show({
			controller: customers_view_ctrl,
			templateUrl: 'public/components/customers/customers_view.html' + bustUrl,
			parent: angular.element(document.body),
			targetEvent: ev,
			locals: { customerId: 0 }
		})
		.then(function(register) {
			$scope.customers.data.push(register);
			Notification.success({title: 'Cadastro de Clientes', message: 'Cliente cadastrado com sucesso!'});
		});
	};

	/**
	*	@name: edit;
	*	@description: Open view edit customers;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.edit = function(ev,customer) {

		var index = $scope.customers.data.indexOf(customer);
		$mdDialog.show({
			controller: customers_view_ctrl,
			templateUrl: 'public/components/customers/customers_view.html' + bustUrl,
			parent: angular.element(document.body),
			targetEvent: ev,
			locals: { customerId: customer.id }
		})
		.then(function(register) {
			$scope.customers.data[index] = register;
			Notification.success({title: 'Cadastro de Clientes', message: 'Cliente alterado com sucesso!'});
		});
	};

	/**
	*	@name: delete;
	*	@description: Delete customer;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.delete = function(customer) {
		var index = $scope.customers.data.indexOf(customer);
		Customers.delete({id: customer.id}, function(){
			$scope.customers.data.splice(index,1);
			Notification.success({title: 'Cadastro de Clientes', message: 'Cliente removido com sucesso!'});
		});
	};

	/**
	*	@name: main;
	*	@description: Init controller;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	function main() {
		$scope.query = {
			limit: 10,
			page: 1
		};

		//$scope.getCustomers();
	}

	main();
})

