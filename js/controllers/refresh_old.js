angular
  .module('mainApp', ['ngMaterial', 'directivelibrary', 'uiMicrokernel', 'ui.router'])
  .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function(httpProvider, $stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/Add_Refresh');
      $stateProvider
        .state('Add_Refresh', {
          url: '/Add_Refresh',
          templateUrl: 'refresh_partial/refresh_add_partial.html',
          controller: 'AppCtrl'
        })
  }])
  .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('datePickerTheme').primaryPalette('teal');
  })
  .controller('AppCtrl', function ($scope, $mdToast, $rootScope, $mdDialog, $window, $objectstore, $auth, $q, $http, $compile, $timeout) {
      //save functon start
      $scope.stbno = "";
      $scope.stoken = '45d7882b610455acccf713560e3cc4ab';
      $scope.hostUrl = '202.91.65.115:35';
      $scope.submit = function () {
        $http({
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value=' + $scope.stbno + '&withDetail=false&securityToken=' + $scope.stoken + '',
          method: "GET"
        })
        .then(function (response) {
          for (var i = response.data.length - 1; i >= 0; i--) {
            console.log('PermanentRefID : ' + response.data[i].PermanentRefID);
            $scope.accid = response.data[i].PermanentRefID;
            console.log(response.data)
          };
          $scope.GetAccountInformation($scope.accid);
        }
        ,function (response) {console.log("error")});
      }
        //save function end   
      $scope.GetAccountInformation = function (accId) {
        $http({
            url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSAccountService/duosubscribermanagement/customer/Account.svc/Json/GetAccountInfoByGuAccountID?GUAccountID=' + accId + '&SecurityToken=' + $scope.stoken + '',
            method: "GET"
        })
        .then(function (response) {
          console.log(response.data)               
          $scope.cusid = response.data._gUCustID;
          console.log('_gUCustID : ' + response.data._gUCustID);
          $scope.searchProfile($scope.cusid);
        }
        ,function (response) {console.log("error")});
      }
      $scope.searchProfile = function (cusId) {
        $http({
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSProfileService/DuoSubscriberManagement/Masters/Registrations.svc/json/searchProfile?searchOption=ProfileID&searchValue=' + cusId + '&sinceId=0&securityToken=' + $scope.stoken + '',
          method: "GET"
        })
        .then(function (response) {
            console.log(response)
        }
        ,function (response) {console.log("error")});
      }
  }) //END OF AppCtrl
