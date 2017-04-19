angular.module("app", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('list', {
                  url: '/list',
                  templateUrl: 'templates/list.html'
              }) 
              .state('user', {
                  url: '/user',
                  templateUrl: 'templates/user.html'
              });
    })

.controller('ListCtrl', function($scope){ 
        $scope.rows = [{state:false, paymentId: "01", userName: "Kovalchuk Ivan", usd: 35700.00, descript: "Buying QuadroKopter" },
                       {state:false, paymentId: "02", userName: "Panikov Orest", usd: 7000.00, descript: "Service" },
                       {state:false, paymentId: "03", userName: "Kovalchuk Ivan", usd: 6400.00, descript: "Buying Aqua Ball" },
                       {state:false, paymentId: "04", userName: "Panikov Orest", usd: 87900.00, descript: "Buying Used Car" }
        ];

        $scope.newRecord = function () {        
            console.log($scope.newUsd, $scope.newDescript);
            $scope.rows.push({state:false, paymentId: "0"+($scope.rows.length+1), userName: "New User", usd: $scope.newUsd, descript: $scope.newDescript});
            $scope.newUsd = "";
            $scope.newDescript = "";
        }
       
});
