angular
  .module('mainApp', ['ngMaterial','directivelibrary','DomainConfig','ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {    
      $urlRouterProvider.otherwise('/Search_360');    
      $stateProvider       
     	  .state('Search_360', {
          url: '/Search_360',
          templateUrl: '360app_partial/360app_partial.html',
          controller:'AppCtrl'
        })
  })
  .config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('datePickerTheme').primaryPalette('teal');
	}) 
  .controller('AppCtrl', function ($scope,$mdToast, $rootScope,$HostService,$PostData, $mdDialog, $window, $q, $http, $compile, $timeout) {

      $scope.stoken = $HostService.GetSecurityToken();
      $scope.hostUrl = $HostService.GetHost();        
      // $scope.FromNumber = $HostService.GetFromNumber();
      // $scope.ToNumber = $HostService.GetToNumber();
      $scope.UserName = "admin";
      $scope.ShowAllData = false;
      $scope.Progressbar = false;
      //$scope.Order = {val:[]};
      $scope.Order = {val:[{
        StartDate: "12.05.2015",
        EndDate: "12.10.2015",
        OrderName: "new Order",
        Amount: 122
      }]}

      $scope.SearchBySerialNumber = function(SerialNo){
        $scope.ShowAllData = true;
        $scope.Progressbar = true;

        var url = "";
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                $scope.Texts = request.responseText; 
                if($scope.Texts == '[]'){
                  $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STBno').content('There is no account number available').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
                  console.log("error loading account number");          
                  $scope.orderAccno = "";
                  $scope.promotionCode = "";
                  $scope.Progressbar = false;
                }else{
                  $scope.temp =[];
                  $scope.temp = $scope.Texts.split(",");
                  console.log($scope.temp)
                  //get permenent ref id
                  $scope.RefIDArr = [];
                  $scope.RefIDArr = $scope.temp[24].split(":");
                  $scope.orderAcc = angular.copy($scope.RefIDArr[1]);
                  console.log("//PermanentRefID....");
                  console.log($scope.orderAcc); 
                  //get serial number 1
                  $scope.RefIDArr = [];
                  $scope.RefIDArr = $scope.temp[26].split(":")
                  $scope.Serial1 = angular.copy($scope.RefIDArr[1].replace(/^"(.*)"$/, '$1')); //replace double quates from string 
                  console.log("//Serial1....");
                  console.log($scope.Serial1);

                  //get serial number 2
                  $scope.RefIDArr = [];
                  $scope.RefIDArr = $scope.temp[27].split(":")
                  $scope.Serial2 = angular.copy($scope.RefIDArr[1].replace(/^"(.*)"$/, '$1'));
                  console.log("//Serial2....");
                  console.log($scope.Serial2);

                  $scope.getpromotionID($scope.orderAcc); 
                }           
              
            }

        }
        request.onerror = function(){
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Network Error').content('Error Occure In the Service... Please try again later').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            console.log("network error");          
            $scope.orderAccno = "";
            $scope.promotionCode = "";
            $scope.Progressbar = false;

        }
        request.ontimeout = function (){
            $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Time Out').content('Request Time Out... Please try again').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            console.log("time out");          
            $scope.orderAccno = "";
            $scope.promotionCode = "";
            $scope.Progressbar = false;
        }
        request.open('GET'," http://"+$scope.hostUrl+"/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value="+ SerialNo +"&withDetail=false&securityToken="+ $scope.stoken +"", true);
        request.send(); 
      }
      $scope.getpromotionID = function (accID) {

        $scope.Progressbar = true;
        var url = "";
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                $scope.PTexts = request.responseText;
                if($scope.PTexts == '[]'){
                  $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STBno').content('There is no account number available').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
                  console.log("error loading account number");          
                  $scope.orderAccno = "";
                  $scope.guaccID = "";
                  $scope.invoiceArr = {val: []};
                  $scope.totalout = "";
                  $scope.Progressbar = false;
                }else{
                  $scope.Ptemp =[];
                  $scope.Ptemp = $scope.PTexts.split(",");
                  console.log($scope.Ptemp);
                  //get acc id
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[30].split(":")
                  $scope.Accno = angular.copy($scope.PRefIDArr[1]);
                  console.log("//acc no")
                  console.log($scope.Accno)
                  //get  guacc no
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[30].split(":")
                  $scope.orderAccno = angular.copy($scope.PRefIDArr[1]);
                  //get cust Status
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[41].split(":")
                  $scope.Status = angular.copy($scope.PRefIDArr[1].replace(/^"(.*)"$/, '$1'));
                  console.log("//cust status")
                  console.log($scope.Status)
                  //get cust Name
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[40].split(":")
                  $scope.Name = angular.copy($scope.PRefIDArr[1].replace(/^"(.*)"$/, '$1'));
                  console.log("//cust Name")
                  console.log($scope.Name)
                  //get cust Id
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[48].split(":")
                  $scope.cusid = angular.copy($scope.PRefIDArr[1]);
                  console.log("//cust ID")
                  console.log($scope.cusid)
                   //get dealer Id
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[49].split(":")
                  $scope.DealerId = angular.copy($scope.PRefIDArr[1]);
                  console.log("//Dealer ID")
                  console.log($scope.DealerId)

                  //get promotion Id
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[52].split(":")
                  $scope.PromotionId = angular.copy($scope.PRefIDArr[1]);
                  console.log("//PromotionId ID")
                  console.log($scope.PromotionId)
                  //get gUAccountID Id
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[45].split(":")
                  $scope.gUAccountID = angular.copy($scope.PRefIDArr[1]);
                  console.log("//gUAccountID ID")
                  console.log($scope.gUAccountID)
 
                  //call functions using callbacks
                  $scope.getpromotionName($scope.PromotionId,function(){
                    $scope.getTotaloutstanding($scope.gUAccountID,function(){
                      $scope.searchProfile($scope.cusid,function(){
                        $scope.GetDealerDetails($scope.DealerId,function(){
                          $scope.GetOrderDetails($scope.gUAccountID);
                        });
                      });
                    });
                  });                 
                } 
            }
        }
        request.onerror = function(){
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Network Error').content('Error Occure In the Service... Please try again later').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            console.log("network error");          
            $scope.orderAccno = "";
            $scope.promotionCode = "";
            $scope.Progressbar = false;
        }
        request.ontimeout = function (){
            $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Time Out').content('Request Time Out... Please try again').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            console.log("time out");          
            $scope.orderAccno = "";
            $scope.promotionCode = "";
            $scope.Progressbar = false;
        }
        request.open('GET',"http://" + $scope.hostUrl + "/DuoSubscribe5/V5Services/SMSAccountService/duosubscribermanagement/customer/Account.svc/Json/GetAccountInfoByGuAccountID?GUAccountID=" + accID + "&SecurityToken=" + $scope.stoken + "", true);
        request.send();
      }
      $scope.getpromotionName = function (promoID,callback) {
        $scope.Progressbar = true;
        $http({
          method: 'GET',
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSPromotionService/duosubscribermanagement/masters/Promotion.svc/json/RetrievePromotionByGUID?gUPromotionID=' + promoID + '&securityToken=' + $scope.stoken + ''
        })
        .then(function (response) {
          $scope.Progressbar = false;
          console.log(response.data)
          $scope.Promotion = response.data._proPlanCode;
        },
        function (response) {
          $scope.Progressbar = false;
          console.log("error retrieving the promotion ID")
        });
        callback();
      }
      $scope.getTotaloutstanding = function (accno,callback) {
        $scope.Progressbar = true;
        $http({
            method:'GET',
            url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/V5Billing/DuoSubscriberBilling/ContractService.svc/json/OutstandingBalance?GUAccountID=' + accno + '&SecurityToken=' + $scope.stoken + ''
        })
        .then(function (response) {
            $scope.Progressbar = false;
            $scope.OutStanding = response.data.Amount;
        }
        ,function (response) {
            $scope.Progressbar = false;
            console.log("error retrieving Total Outstanding");
        });
        callback();
      }
      $scope.searchProfile = function (cusId,callback) {
        $scope.Progressbar = true;

        $scope.ShowAllData = true;
        $scope.Progressbar = true;

        var url = "";
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                $scope.aTexts = request.responseText; 
                if($scope.aTexts == '[]'){
                  $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STBno').content('There is no account number available').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
                  console.log("error loading account number");          
                  $scope.orderAccno = "";
                  $scope.promotionCode = "";
                  $scope.Progressbar = false;
                }else{
                  $scope.atemp =[];
                  $scope.atemp = $scope.aTexts.split(",");
                  console.log($scope.atemp)
                  //get permenent ref id
                  $scope.aRefIDArr = [];
                  $scope.aRefIDArr = $scope.atemp[21].split(":");
                  $scope.AddressID = angular.copy($scope.aRefIDArr[1]);
                  console.log("//AddressID...."); 
                  console.log($scope.AddressID)

                  $scope.GetAddress($scope.AddressID); 
                }           
              
            }

        }
        request.onerror = function(){
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Network Error').content('Error Occure In the Service... Please try again later').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            console.log("network error");          
            $scope.orderAccno = "";
            $scope.promotionCode = "";
            $scope.Progressbar = false;

        }
        request.ontimeout = function (){
            $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Time Out').content('Request Time Out... Please try again').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
            console.log("time out");          
            $scope.orderAccno = "";
            $scope.promotionCode = "";
            $scope.Progressbar = false;
        }
        request.open('GET',"http://" + $scope.hostUrl + "/DuoSubscribe5/V5Services/SMSProfileService/DuoSubscriberManagement/Masters/Registrations.svc/json/searchProfile?searchOption=5&searchValue=" + cusId + "&sinceId=0&securityToken=" + $scope.stoken + "", true);
        request.send();  
        callback();
      }
      $scope.GetDealerDetails = function(DealerId,callback){
        $http({
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSProfileService/DuoSubscriberManagement/Masters/Registrations.svc/json/searchProfile?searchOption=ProfileID&searchValue=' + DealerId + '&sinceId=0&securityToken=' + $scope.stoken + '',
          method: "GET"
        })
        .then(function (response) {
          $scope.Progressbar = false;
          console.log("Dealer Details-----------")
          console.log(response.data)
          $scope.Dealer = response.data[0].FirstName;
        }
        ,function (response) {console.log("error"); $scope.Progressbar = false;});
        callback();
      }
      $scope.GetAddress = function(addID){
        $http({
          method:'GET',
          url:'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/SMSProfileService/DuoSubscriberManagement/Masters/Registrations.svc/json/getSavedCommonAddress?guAddressID='+addID+'&securityToken='+$scope.stoken+''
        }).then(function(response){
          console.log(response.data)
          $scope.Address = response.data.formatted_address;
        },function(response){
          console.log(response.data)
        });
      }
      $scope.GetOrderDetails = function(AccID){
        $http({
          method:'GET',
          url:'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/V5Order/duosubscriberbilling/OrderService.svc/Json/getOrdersByGUAccountID?GUAccountID='+AccID+'&skip=0&take=12&status=1&date=2015/01/01&SecurityToken='+$scope.stoken+''

        }).then(function(response){
          console.log("order details")
        },function(response){

        });
      }
 	  	 
      $scope.submit = function() {}     
      
       
     
  })//END OF AppCtrl