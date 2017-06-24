function charges_view_ctrl($scope, $rootScope,$mdDialog, Notification, Charges, chargeId) {

   /**
    *   @name: getSuccess;
    *   @description: Rest Success Response Get charge;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    function getSuccess(data) {
        $scope.charge = data;
    };

    /**
    *   @name: getError;
    *   @description: Rest Error Response Get charge;
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
        $mdDialog.hide(data.charge);  
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
        if(chargeId == 0)
            $scope.charge.$save(success,error);
        else
            $scope.charge.$update({ id: chargeId },success,error);
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

        /*if(chargeId == 0){
            $scope.header_text = 'Cadastrar Cobrança';
            $scope.charge = new Charge();
        }else{
            $scope.header_text = 'Editar Cobrança';
            Charge.get({id: chargeId},getSuccess,getError);
        }*/
    }

    main();
};

