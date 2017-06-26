function customers_view_ctrl($scope, $rootScope,$mdDialog, Notification, Customer, customerId) {

    /**
    *   @name: getSuccess;
    *   @description: Rest Success Response Get customer;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    function getSuccess(data) {
        $scope.customer = data;
    };

    /**
    *   @name: getError;
    *   @description: Rest Error Response Get customer;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    function getError(response) {
        Notification.error({title: 'Erro', message: 'Ocorreu um erro, tente novamente mais tarde!'
            +' Se o problema persistir, entre em contato com o suporte técnico.'});
    };

    /**
    *   @name: error;
    *   @description: Rest Error Response;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    function error(response) {
        $scope.error = response.data.error;
        Notification.error({title: 'Cadastro de Grupo de Produtos', message: 'Ocorreu um erro, tente novamente mais tarde!'
            +' Se o problema persistir, entre em contato com o suporte técnico.'});
    };

    /**
    *   @name: success;
    *   @description: Rest Success Response;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    function success(data) {
        $mdDialog.hide(data);  
    };

    /**
    *   @name: save;
    *   @description: Save update/save;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    $scope.save = function() {

        $scope.loading = true;
        if(customerId == 0)
            $scope.customer.$save(success,error);
        else
            $scope.customer.$update({ id: customerId },success,error);
        $scope.loading = false;
    };

    /**
    *   @name: cancel;
    *   @description: Close modal;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    /**
    *   @name: main;
    *   @description: Init controller;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    function main() {
        $scope.error = '';
        $scope.loading = false;

        if(customerId == 0){
            $scope.header_text = 'Cadastrar Cliente';
            $scope.customer = new Customer();
        }else{
            $scope.header_text = 'Editar Cliente';
            Customer.get({id: customerId},getSuccess,getError);
        }
    }

    main();

};

