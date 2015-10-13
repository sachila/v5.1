angular
  .module('mainApp', ['ngMaterial', 'directivelibrary','DomainConfig', 'ui.router'])
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
  .controller('AppCtrl', function ($scope, $mdToast, $rootScope,$HostService,$PostData, $mdDialog, $window, $q, $http, $compile, $timeout) {
      //save functon start
      $scope.stbno = "";
      $scope.stoken = $HostService.GetSecurityToken();
      $scope.hostUrl = $HostService.GetHost();        
      $scope.FromNumber = $HostService.GetFromNumber();
      $scope.ToNumber = $HostService.GetToNumber();
      $scope.Progressbar = false;

      $scope.submit = function () {
        $http({
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value=' + $scope.stbno + '&withDetail=false&securityToken=' + $scope.stoken + '',
          method: "GET"
        })
        .then(function (response) {
          if (response.data.length <= 0) {
              $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STB No...').content('Please check your STB no').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
           }else{
            console.log(response.data)       

            for (var i = response.data.length - 1; i >= 0; i--) {
              console.log(response.data[i].PermanentRefID);
              if (response.data[i].PermanentRefID == 0 || response.data[i].PermanentRefID == null || response.data[i].PermanentRefID == "") {
                $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STB No...').content('Please check your STB no').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
              }else{
                console.log('PermanentRefID : ' + response.data[i].PermanentRefID);
                $scope.accid = response.data[i].PermanentRefID;
                $scope.SubmitData($scope.accid);
              }             
            };
          };
        }
        ,function (response) {$mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).content('Fail to load the service... Please try again').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())  
         });
      }
      $scope.SubmitData = function(AccId){
        $scope.Progressbar = true;
        $scope.PostData = $PostData.RefreshData($scope.stbno);
        console.log($scope.PostData)
        $http({
                method: 'POST',
                url: 'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/V5CAS/Decomposer/ShortMessageExecutor.svc/json/ExecuteShortMessage',
                data: {
                    "text": $scope.PostData,
                    "fromNumber": $scope.FromNumber,
                    "toNumber": $scope.ToNumber,
                    "securityToken": $scope.stoken
                },
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(function(response){
                 $scope.Progressbar = false;
                 $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Success').content('STB No Successfully Refresh').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            },function(response){
                 $scope.Progressbar = false;
                 $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).content('Refresh failed...').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            });
      }
        //save function end 
      
  }) //END OF AppCtrl
