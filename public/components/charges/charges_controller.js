App.controller('charges_ctrl', function ($scope, $state, $mdDialog, Notification, Charges) {
	
	/**
	*	@name: getSuccess;
	*	@description: Rest Success Response Query charges;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	function getSuccess(data) {
		$scope.charges = data.charges;
	};

	/**
	*	@name: getError;
	*	@description: Rest Error Response Query charges;
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
	*	@name: getCharges;
	*	@description: Query charges;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.getCharges = function () {
		$scope.promise = Charges.query($scope.query,getSuccess,getError).$promise;
	};

	/**
	*	@name: hoverIn;
	*	@description: Show charge options;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.hoverIn = function(charge) {
		charge.show=true;
	}

	/**
	*	@name: hoverOut;
	*	@description: Hide charge options;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.hoverOut = function(charge) {
		charge.show=false;
	}

	/**
	*	@name: new;
	*	@description: Open view insert charge;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.new = function(ev) {

		$mdDialog.show({
			controller: charges_view_ctrl,
			templateUrl: 'public/components/charges/charges_view.html' + bustUrl,
			parent: angular.element(document.body),
			targetEvent: ev,
			locals: { chargeId: 0 }
		})
		.then(function(register) {
			$scope.charges.data.push(register);
			Notification.success({title: 'Cadastro de Cobranças', message: 'Cobrança cadastrada com sucesso!'});
		});
	};

	/**
	*	@name: edit;
	*	@description: Open view edit charges;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.edit = function(ev,charge) {

		var index = $scope.charges.data.indexOf(charge);
		$mdDialog.show({
			controller: charges_view_ctrl,
			templateUrl: 'public/components/charges/charges_view.html' + bustUrl,
			parent: angular.element(document.body),
			targetEvent: ev,
			locals: { chargeId: charge.id }
		})
		.then(function(register) {
			$scope.charges.data[index] = register;
			Notification.success({title: 'Cadastro de Cobranças', message: 'Cobrança alterada com sucesso!'});
		});
	};

	/**
	*	@name: delete;
	*	@description: Delete charge;
	*	@author: Lucas Guszak;
	*	@date: 23/06/2017;
	*	@lastUpdate: {};
	*
	*	@param {Object} ;
	*	@return null;
	*/
	$scope.delete = function(charge) {
		var index = $scope.charges.data.indexOf(charge);
		Charges.delete({id: charge.id}, function(){
			$scope.charges.data.splice(index,1);
			Notification.success({title: 'Cadastro de Cobranças', message: 'Cobrança removida com sucesso!'});
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

		//$scope.getCharges();
	}

	main();
})

