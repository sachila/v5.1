angular
  .module('mainApp', ['ngMaterial', 'directivelibrary','DomainConfig', 'ui.router'])
  .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function(httpProvider, $stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/Add_Receipt');
      $stateProvider
        .state('Add_Receipt', {
          url: '/Add_Receipt'
          , templateUrl: 'receipt_partial/receipt_add_partial.html'
          , controller: 'AppCtrl'
        })
  }])
  .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('datePickerTheme').primaryPalette('teal');
  })
  .controller('AppCtrl', function ($scope, $mdToast, $rootScope,$HostService,$PostData, $mdDialog, $window, $q, $http, $compile, $timeout) {
      $scope.testfun = function () {}
        // ng-blue function end 
      $scope.orderAccno = "";
      $scope.promotionCode = "";
      $scope.stoken = $HostService.GetSecurityToken();
      $scope.hostUrl = $HostService.GetHost();        
      $scope.FromNumber = $HostService.GetFromNumber();
      $scope.ToNumber = $HostService.GetToNumber();
      //$scope.PayTpe = "Cash"
      $scope.invoiceArr = {val: []};
      $scope.Progressbar = false;
      $scope.SubmitProgress = false;
      $scope.InvoiceError = false;


      //clear all data
      $scope.ClearData = function(){
        $scope.orderAccno = "";
        $scope.promotionCode = "";
        $scope.invoiceArr = {val: []};
        $scope.totalout="";
        $scope.InvoiceError = false;

      }
      // get accno and promotion details start
      $scope.ordertypefunc = function (oldSTBno) {
        $scope.Progressbar = true;
        $scope.oldSTB = null;
        $scope.oldSTB = angular.copy(oldSTBno);

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
                  $scope.RefIDArr = [];
                  $scope.RefIDArr = $scope.temp[24].split(":")
                  $scope.orderAcc = $scope.RefIDArr[1];
                  console.log("PermanentRefID....")
                  console.log($scope.orderAcc) 
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
        request.open('GET'," http://"+$scope.hostUrl+"/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value="+ $scope.STBno +"&withDetail=false&securityToken="+ $scope.stoken +"", true);
        request.send(); 
        
                                //   $http({
                                //     method: 'GET',
                                //     url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value=' + $scope.STBno + '&withDetail=false&securityToken=' + $scope.stoken + ''
                                //   })
                                //   .then(function (response) {
                                //     console.log("echo serevice...........")
                                //     console.log(response);
                                //     if (response.data.length > 0) {
                                //       for (var i = response.data.length - 1; i >= 0; i--) {
                                //         $scope.orderAcc = response.data[i].PermanentRefID;
                                //       };
                                //        $scope.getpromotionID($scope.orderAcc);
                                //      // $scope.getpromotionID("15100616051312105");
                                //     } 
                                //     else {
                                //       $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STBno').content('There is no account number available').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
                                //       console.log("there is no account number available")
                                //       $scope.orderAccno = "";
                                //       $scope.promotionCode = "";
                                //       $scope.guaccID = "";
                                //       $scope.invoiceArr = {val: []};
                                //       $scope.totalout = "";
                                //       $scope.Progressbar = false;
                                //     }
                                //   }
                                //   ,function (response) { // optional
                                //     $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error loading account number').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
                                //     console.log("error loading account number");
                                //     $scope.orderAccno = "";
                                //     $scope.Progressbar = false;
                                //   });
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
                  //get  acc no
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr = $scope.Ptemp[30].split(":")
                  $scope.orderAccno = angular.copy($scope.PRefIDArr[1]);
                  //get geaccid
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr =$scope.Ptemp[45].split(":")
                  $scope.guaccID = angular.copy($scope.PRefIDArr[1]);
                  //get promotion id
                  $scope.PRefIDArr = [];
                  $scope.PRefIDArr =$scope.Ptemp[52].split(":")
                  $scope.gUPromotionID = angular.copy($scope.PRefIDArr[1]);
                  //call functions using callbacks 
                  $scope.getinvoiceDetails($scope.guaccID,function(){
                    $scope.getTotaloutstanding($scope.guaccID,function(){
                      $scope.getpromotionName($scope.gUPromotionID);
                    });
                  })
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
                              // $http({
                              //   method: 'GET',
                              //   url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSAccountService/duosubscribermanagement/customer/Account.svc/Json/GetAccountInfoByGuAccountID?GUAccountID=' + accID + '&SecurityToken=' + $scope.stoken + ''
                              // })
                              // .then(function (response) {
                              //   if (response.data) {
                              //     console.log(response.data)
                              //     $scope.orderAccno = response.data._accountNo;
                              //     $scope.guaccID = response.data._gUAccountID;
                              //     $scope.getpromotionName(response.data._gUPromotionID);
                              //     $scope.getinvoiceDetails(response.data._gUAccountID)
                              //     // $scope.getinvoiceDetails("15020912144506300");
                              //     $scope.getTotaloutstanding(response.data._gUAccountID)
                              //   }
                              //   else {
                              //     $scope.orderAccno = "";
                              //     $scope.guaccID = "";
                              //     $scope.invoiceArr = {val: []};
                              //     $scope.totalout = "";
                              //     $scope.Progressbar = false;
                              //   }
                              // }
                              // ,function (response) {
                              //   $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error retrieving the Account Details By Account Id ').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
                              //   console.log("error retrieving the Account Details By Account Id ")
                              //   $scope.Progressbar = false;
                              // });
      }
      $scope.getpromotionName = function (promoID) {
        $scope.Progressbar = true;
        $http({
          method: 'GET',
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSPromotionService/duosubscribermanagement/masters/Promotion.svc/json/RetrievePromotionByGUID?gUPromotionID=' + promoID + '&securityToken=' + $scope.stoken + ''
        })
        .then(function (response) {
          console.log("promotion code..........")
          console.log(response.data._proPlanCode)
          $scope.promotionCode = response.data._proPlanCode;
          $scope.Progressbar = false;
        }
        ,function (response) {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error retrieving the promotion ID').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
          console.log("error retrieving the promotion ID")
          $scope.promotionCode = "";
          $scope.Progressbar = false;
        });
      }
      $scope.getinvoiceDetails = function (accID,callback) {
        $scope.Progressbar = true;
        $http({
          method: 'GET',
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/V5Billing/DuoSubscriberBilling/InvoiceService.svc/Json/retriveInvoices?GUAccountID=' + accID + '&SecurityToken=' + $scope.stoken + ''
        })
        .then(function (response) {
          console.log("invoice details...........")
          console.log(response.data)
          $scope.invoiceArr = {val: []};
          if (response.data.length <= 0) {
            $scope.InvoiceError = true;
          }else if (response.data.length > 0) {
              $scope.InvoiceError = false;
              for (var i = response.data.length - 1; i >= 0; i--) {                
                $scope.invoiceArr.val.push({
                  invoiceno: response.data[i].InvoiceAmount
                  , Status: response.data[i].Status
                  , date: response.data[i].InvoiceDate
                  , amount: response.data[i].InvoiceAmount
                })
              };
          }          
        }
        ,function (response) {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error Loading Invoice Data').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
          console.log("Error Loading Invoice Data")
          $scope.Progressbar = false;
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
            $scope.totalout = response.data.Amount;
        }
        ,function (response) {
            $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error retrieving Total Outstanding').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
            console.log("error retrieving Total Outstanding");
            $scope.Progressbar = false;
        });
        callback();
      }
 
      $scope.submit = function () {
        $scope.PostText = $PostData.ReceiptData($scope.orderAccno,$scope.receiptamount);
        console.log($scope.PostText);

        if ($scope.orderAccno == null || $scope.orderAccno == "") {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid Account Number').content('There is no account number available.. Please check your STB No').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
           
        }else if ($scope.promotionCode == null || $scope.promotionCode == "") {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid Promotion Number').content('There is no promotion number available.. Please check your STB No').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
          
        }else{

           $scope.SubmitProgress = true;
           $http({
              method: 'POST',
              url: 'http://'+$scope.hostUrl+'/DuoSubscribe5/V5Services/V5CAS/Decomposer/ShortMessageExecutor.svc/json/ExecuteShortMessage',
              data: {
                  "text": $scope.PostText,
                  "fromNumber": $scope.FromNumber,
                  "toNumber": $scope.ToNumber,
                  "securityToken": $scope.stoken
              },
              headers: {
                  'Content-Type': 'application/json; charset=utf-8'
              }
          }).then(function(response){
              $scope.SubmitProgress = false;
              $scope.ResponseData = response.data; 
              $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title().content($scope.ResponseData).ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
          },function(response){
              $scope.SubmitProgress = false;
              $scope.ResponseDataError = response.statusText; 
              $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content($scope.ResponseDataError).ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
             
          });
        }         
      }
      //fab button functions
      $scope.demo = {
        topDirections: ['left', 'up']
        , bottomDirections: ['down', 'right']
        , isOpen: false
        , availableModes: ['md-fling', 'md-scale']
        , selectedMode: 'md-fling'
        , availableDirections: ['up', 'down', 'left', 'right']
        , selectedDirection: 'up'
      };
      $scope.save = function () {setTimeout(function(){ $('#mySignup').click();})}
      
  }) //END OF AppCtrl
  .filter("mydate", function () {
    return function (x) {
      return new Date(parseInt(x.substr(6)));
    };
  });
