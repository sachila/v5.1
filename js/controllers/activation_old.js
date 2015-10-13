angular
  .module('mainApp', ['ngMaterial','directivelibrary','uiMicrokernel','ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {    
      $urlRouterProvider.otherwise('/Add_Activation');    
      $stateProvider       
     	  .state('Add_Activation', {
          url: '/Add_Activation',
          templateUrl: 'activation_partial/activation_add_partial.html',
          controller:'AppCtrl'
        })
  })
  .config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('datePickerTheme').primaryPalette('teal');
	})
 
  .controller('AppCtrl', function ($scope,$mdToast, $rootScope,$objectstore, $mdDialog, $window, $objectstore, $auth, $q, $http, $compile, $timeout) {

      $scope.promotionProgress = true;
      $scope.stoken = 'af32793e389b3cb96e83380332b48b08';
      $scope.hostUrl = '192.168.1.210';
      $scope.SubmitProgress = false;
      //get all promotion details start

      $scope.promotion = [];     
      $http({
        url: 'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/SMSPromotionService/duosubscribermanagement/masters/Promotion.svc/json/GetAllPromoHeaderPaging?sinceID=0&securityToken='+$scope.stoken+'',
        method: "GET"
      })
      .then(function(response) {
        // console.log(response)
        console.log(response.data);
        $scope.promotion = response.data;
        $scope.promotionProgress = false;
        
      }, 
      function(response) { // optional
        console.log("error retrieving promotion")
      });
      //get all promotion details end 

      // fab button start
      $scope.demo = {
        topDirections: ['left', 'up'],
        bottomDirections: ['down', 'right'],
        isOpen: false,
        availableModes: ['md-fling', 'md-scale'],
        selectedMode: 'md-fling',
        availableDirections: ['up', 'down', 'left', 'right'],
        selectedDirection: 'up'
      };
 	  	$scope.save = function() {$('#mySignup').click();}
      //fab button end 
  
      //save functon start
      $scope.activation = {};

      $scope.submit = function() {
        $scope.SubmitProgress = true;
        $scope.ActivationFullObject = {"securityToken":$scope.stoken,"sessionID":"15091816265545407","workerCode":"PROCESS-MANAGER-WORKER","processCode":"SMSV5_AppActivation","processData":[],"additionalDictionaries":[{"Dictionary":[],"Name":"STBMetaData"},{"Dictionary":[],"Name":"AlacartDic"},{"Dictionary":[{"Key":"Remarks","Value":"Remarks"}],"Name":"attributeDic"}]}
        $scope.ProcessData = [{"Key":"DeviceInformation","Value":[]},{"Key":"GUAccountID","Value":"0"},{"Key":"GUCustID","Value":"0"},{"Key":"GUDeviceID","Value":"0"},{"Key":"GUPromotionID","Value":"15022518334752901"},{"Key":"PromotionCode","Value":"PRO-1"},{"Key":"STBNo","Value":"123"},{"Key":"GUStartUpKITID","Value":"15022417281999109"},{"Key":"OrderStartDateStartUpKIT","Value":"Date(1442573768716+0530)"},{"Key":"OrderEndDateStartUpKIT","Value":"Date(1442573768716+0530)"},{"Key":"StartUpKITDiscount","Value":"0"},{"Key":"StartUpKITRenew","Value":"0"},{"Key":"GUBasePackageID","Value":"15022518180551703"},{"Key":"OrderStartDateBasePackage","Value":"Date(1442573768442+0530)"},{"Key":"OrderEndDateBasePackage","Value":"Date(1445165768442+0530)"},{"Key":"BasePackageDiscount","Value":"0"},{"Key":"BasePackageRenew","Value":"0"},{"Key":"SecurityToken","Value":"2eb23f92e0ddc32c4684db8429b9ce52"},{"Key":"SessionID","Value":"23e344b9-d716-40e2-b84e-8a341336e344"},{"Key":"SkillID","Value":"1"},{"Key":"InUsePersistance","Value":"False"},{"Key":"XMPPPassword","Value":"testuser"},{"Key":"XMPPServerName","Value":"test"},{"Key":"XMPPUserName","Value":"testuser"},{"Key":"GUMainItemID","Value":"15022611270222304"},{"Key":"CreateUser","Value":""},{"Key":"WorkflowServerID","Value":"1"},{"Key":"STKQty","Value":"1"},{"Key":"STKUOM","Value":"UNITS"},{"Key":"BaseQty","Value":"1"},{"Key":"BaseUOM","Value":"MONTHS"},{"Key":"GroupID","Value":""},{"Key":"BillingTypeSTK","Value":"Block"},{"Key":"BillingTypeChannel","Value":"Block"},{"Key":"GUTranID","Value":"15091816265545407"},{"Key":"GUUITranID","Value":"15091816265545407"},{"Key":"GUDealerID","Value":"0"},{"Key":"GUParentAccountID","Value":"0"}];
    
        $http({
          method : 'GET',
          url : 'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value='+$scope.STBNo+'&withDetail=false&securityToken='+$scope.stoken+''

        })
        .then(function(response) {          
          if(response.data.length >= 1){              
            for (var i = response.data.length - 1; i >= 0; i--) {                    
              $scope.orderAcc = response.data[i].PermanentRefID; 
              $scope.FillProcessDataByAccID(response.data[i],function(){
                $scope.getpromotionID($scope.orderAcc);
              });                   
            };             
          }
          else{
            console.log("there is no account number available");                 
          }        
        },
        function(response) { // optional
          console.log("error loading account number");              
        });                  
      }
      //save function end

      // get promotion by preferrence id start
      $scope.getpromotionID = function(accID){
        $http({
          method : 'GET',
          url :'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/SMSAccountService/duosubscribermanagement/customer/Account.svc/Json/GetAccountInfoByGuAccountID?GUAccountID='+accID+'&SecurityToken='+$scope.stoken+''
        })
        .then(function(response){
          //console.log(response.data)          
          $scope.FillProcessDataByAccID(response.data,function(){
              $scope.getpromotionName(response.data._gUPromotionID);
          });
        },
        function(response){
          console.log("error retrieving the promotion ID")                
        });
      }

      $scope.FillProcessDataByAccID = function(Arr,callback){
        
        for (var i = $scope.ProcessData.length - 1; i >= 0; i--) {
          for(var FieldName in Arr){
            if ($scope.ProcessData[i].Key == FieldName) { 
              $scope.ProcessData[i].Value = Arr[FieldName];
            }
            else{
              $scope.KeyName = angular.copy($scope.ProcessData[i].Key);
              $scope.KeyName = '_'+$scope.KeyName;
              $scope.KeyName = $scope.KeyName.replaceAt(1, $scope.KeyName.charAt(1).toLowerCase());    

              if ($scope.KeyName == FieldName) {
                $scope.ProcessData[i].Value = Arr[FieldName];
              };
            }
            $scope.GUStartUpKitID = Arr["_gUStartupKitID"];
          } 
        };
        //console.log($scope.ProcessData);
        callback();
      }

      $scope.getpromotionName = function(promoID){
        $http({
          method : 'GET',
          url :'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/SMSPromotionService/duosubscribermanagement/masters/Promotion.svc/json/RetrievePromotionByGUID?gUPromotionID='+promoID+'&securityToken='+$scope.stoken+''
        })
        .then(function(response){
          //console.log(response.data);
          $scope.FillAdditionalDetails();  
        }
        ,function(response){
          console.log("error retrieving the promotion ID")        
        });
      }
      $scope.FillAdditionalDetails = function(){
        for (i = $scope.ProcessData.length - 1; i >= 0; i--) {
          var Expression = $scope.ProcessData[i].Key;
          switch(Expression){
            case 'STBNo':
              $scope.ProcessData[i].Value = $scope.STBNo;
              break;
            case 'SecurityToken':
              $scope.ProcessData[i].Value = $scope.stoken;
              break;
            case 'GUStartUpKITID':
              $scope.ProcessData[i].Value = $scope.GUStartUpKitID;
              break;
            case 'DeviceInformation':
              $scope.ProcessData[i].Value.push({"STB":$scope.STBNo,"SIM":$scope.Chip});
              break;
            default:               
          }   
        }
        $scope.ActivationFullObject.processData.push($scope.ProcessData);
        console.log($scope.ActivationFullObject); 
        $scope.SubmitProgress = false;
      }     

  })//END OF AppCtrl
  String.prototype.replaceAt=function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
  }