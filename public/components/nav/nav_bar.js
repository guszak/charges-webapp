App.controller('nav_bar_ctrl', function($scope, $rootScope, $mdSidenav, $mdMedia, $state) {

    $scope.$mdMedia = $mdMedia;

    /**
    *   @name: open;
    *   @description: Open sidenave;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    $scope.open = function () {
        $mdSidenav('left').open();
    };

    /**
    *   @name: close;
    *   @description: Close sidenav;
    *   @author: Lucas Guszak;
    *   @date: 23/06/2017;
    *   @lastUpdate: {};
    *
    *   @param {Object} ;
    *   @return null;
    */
    $scope.close = function () {
        $mdSidenav('left').close();
    };
});
