angular
  .module('mainApp', ['ngMaterial', 'directivelibrary','DomainConfig', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/Add_Order');
      $stateProvider
        .state('Add_Order', {
          url: '/Add_Order'
          , templateUrl: 'order_partial/order_add_partial.html'
          , controller: 'AppCtrl'
        })
  })
  .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('datePickerTheme').primaryPalette('teal');
  })
  .controller('AppCtrl', function ($scope, $mdToast, $rootScope,$HostService,$PostData, $mdDialog, $window, $q, $http, $compile, $timeout) {

      $scope.orderAccno = "";
      $scope.promotionCode = "";
      $scope.stoken = $HostService.GetSecurityToken();
      $scope.hostUrl = $HostService.GetHost();        
      $scope.FromNumber = $HostService.GetFromNumber();
      $scope.ToNumber = $HostService.GetToNumber();
      $scope.Progressbar = false; // show progress untill all service calls finish  
      $scope.SubmitProgress = false;  

      //window.onload = LoadChanel;
       //clear all data
      $scope.ClearData = function(){
        $scope.orderAccno = "";
        $scope.promotionCode = ""; 
        $scope.selectedItem = null;
        $scope.searchText = "" ;  
        $scope.ProductCodeArray = [];   

      }

  	  $scope.querySearch = function(query) {  // auto complete query check
    	  $scope.enter = function(keyEvent) {
          if (keyEvent.which === 13) {
            if (self.selectedItem === null) {
                self.selectedItem = query;
                console.log(results);
            } else {
                console.log(self.selectedItem);
            }
          }
        }     
        var results = [];
          for (i = 0, len = $scope.ProductCodeArray.length; i < len; ++i) {
          	//console.log($scope.ProductCodeArray[i].display)
          	if($scope.ProductCodeArray[i].display != null || $scope.ProductCodeArray[i].display != ""){
          		if ($scope.ProductCodeArray[i].value.indexOf(query.toLowerCase()) != -1) {
                 		results.push($scope.ProductCodeArray[i]);
            	}
        	}          
        }
        return results;
      }

      $scope.RemoveNullValue = function(arr){ //remove null values
      	for (var i =arr.length - 1; i >= 0; i--) {
        	if (!(arr[i].PackageCode)|| !(arr[i].GUPackageID)) {
    	  			arr.splice(i,1);
    	  	};
        };
        $scope.PromotionDetailsArray = arr;
       // console.log($scope.PromotionDetailsArray)	
      }

      $scope.PromotionDetailsArray = []; 

  	  function LoadSechet(){ //load app sechet data
  	  	$scope.selectedItem = null;
  	 	  $scope.searchText = null;
  	  	$scope.ProductCodeArray = [];
    	    for (var i = $scope.PromotionDetailsArray.length - 1; i >= 0; i--) {
    		   	if ($scope.PromotionDetailsArray[i].PackageCategory == "Sechet") {
    	  			$scope.ProductCodeArray.push({
    	  				display: $scope.PromotionDetailsArray[i].PackageCode,
    	  				PackageId : $scope.PromotionDetailsArray[i].GUPackageID,
    	  				value: $scope.PromotionDetailsArray[i].PackageCode.toLowerCase()
    	  			})	  			
    		  	};
    	    }; 
  	  }

  	  function LoadChanel(){ // load all chanel data 
  	  	$scope.selectedItem = null;
  	  	$scope.searchText = null;
  	  	$scope.ProductCodeArray = [];
  	  	for (var i = $scope.PromotionDetailsArray.length - 1; i >= 0; i--) {
  		   	if ($scope.PromotionDetailsArray[i].PackageCategory == "Channel Package") {
  	  			$scope.ProductCodeArray.push({
  	  				display: $scope.PromotionDetailsArray[i].PackageCode,
  	  				PackageId : $scope.PromotionDetailsArray[i].GUPackageID,
  	  				value: $scope.PromotionDetailsArray[i].PackageCode.toLowerCase()
  	  			})	  			
  		  	};
  	    };	  	
  	  }

  	  $scope.SelectPackage = function(pkg){ // ng-change in package
  	  	if (pkg == 'Sechet') {LoadSechet();}
  	  	else if (pkg == 'Chanel') {LoadChanel();}
  	  }

      // get accno and promotion details start
      $scope.ordertypefunc = function (oldSTBno) {
        $scope.oldSTB = null;
        $scope.oldSTB = angular.copy(oldSTBno);
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
	           		$scope.RefIDArr = [];
	           		$scope.RefIDArr = $scope.temp[24].split(":")
	           		$scope.orderAcc = $scope.RefIDArr[1];
	           		//console.log($scope.orderAcc) 
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
        request.open('GET'," http://202.91.65.115:35/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value="+ $scope.STBno +"&withDetail=false&securityToken="+ $scope.stoken +"", true);
        request.send(); 


								        // $http({
								        //   method: 'GET', 
								        //   url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/V5Echo/EcoService.svc/json/searchEco?searchBy=SerialNo&value=' + $scope.STBno + '&withDetail=false&securityToken=' + $scope.stoken + '',
								        //   headers: {
								        //               'Content-Type': 'text/plain; charset=utf-8'
								        //           }
								        // })
								        // .then(function (response) {
								        //   console.log(response.data)

								        //    $scope.TestMe();  //test function call


								        //   if (response.data.length >= 1) {
								        //     for (var i = response.data.length - 1; i >= 0; i--) {
								        //       console.log(JSON.parse(response.data[i].PermanentRefID));
								        //       $scope.orderAcc = response.data[i].PermanentRefID.toString();
								        //       console.log(response.data[i].PermanentRefID.toString())
								        //     };
								        //     $scope.getpromotionID($scope.orderAcc);
								        //   }
								        //   else {
								        //     $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid STBno').content('There is no account number available').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
								        //     console.log("error loading account number");          
								        //     $scope.orderAccno = "";
								        //     $scope.promotionCode = "";
								        //     $scope.Progressbar = false;
								        //   }
								        // }
								        // ,function (response) { // optional
								        //   $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error loading account number').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
								        //   console.log("error loading account number");
								        //   $scope.orderAccno = "";
								        //   $scope.Progressbar = false;
								        // });
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
                    //get promotion id
                    $scope.PRefIDArr = [];
                    $scope.PRefIDArr =$scope.Ptemp[52].split(":")
                    $scope.gUPromotionID = angular.copy($scope.PRefIDArr[1]);
                    //call functions
                    $scope.getpromotionName($scope.gUPromotionID);
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
                                                    //   $scope.orderAccno = response.data._accountNo;
                                                    //   $scope.getpromotionName(response.data._gUPromotionID);
                                                    //    console.log(response.data._gUPromotionID)
                                                    // }
                                                    // ,function (response) {
                                                    //   $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error retrieving the Account Details By Account Id ').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
                                                    //   console.log("error retrieving the Account Details By Account Id ")
                                                    //   $scope.Progressbar = false;
                                                    // });
      }
      $scope.getpromotionName = function (promoID) {
        $http({
          method: 'GET',
          url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSPromotionService/duosubscribermanagement/masters/Promotion.svc/json/RetrievePromotionByGUID?gUPromotionID=' + promoID + '&securityToken=' + $scope.stoken + ''
        })
        .then(function (response) { 
       	  $scope.PromotionDetailsArray = [];   
          //console.log(response.data)    	
          $scope.promotionCode = response.data._proPlanCode;
          $scope.PromotionDetailsArray = response.data._PromotionDetails;//get all promotion details about chanel and sachet packages 
          $scope.RemoveNullValue($scope.PromotionDetailsArray); //call function to remove null values from array
          $scope.Progressbar = false;         
          LoadSechet(); //call sechet fucntion to load all package code initially   
        },
        function (response) {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content('Error retrieving the promotion ID').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent()) 
          console.log("error retrieving the promotion ID")
          $scope.promotionCode = "";
          $scope.Progressbar = false;
        });
      }
      
      $scope.demo = {
        topDirections: ['left', 'up']
        , bottomDirections: ['down', 'right']
        , isOpen: false
        , availableModes: ['md-fling', 'md-scale']
        , selectedMode: 'md-fling'
        , availableDirections: ['up', 'down', 'left', 'right']
        , selectedDirection: 'up'
      };
      $scope.save = function () {setTimeout(function(){$('#mySignup').click();})}

      $scope.submit = function () {
        if ($scope.orderAccno == null || $scope.orderAccno == "") {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid Account Number').content('There is no account number available.. Please check your STB No').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
           
        }else if ($scope.promotionCode == null || $scope.promotionCode == "") {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid Promotion Number').content('There is no promotion number available.. Please check your STB No').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
          
        }else if ($scope.selectedItem == null || $scope.promotionCode == "") {
          $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Invalid Product Code').content('There is no product code available.. Please check your STB No').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
          
        }else{
          $scope.SubmitProgress = true;
          $scope.PostData = $PostData.OrderData($scope.STBno,$scope.selectedItem.display,$scope.orderQty,$scope.orderUOM);
          console.log($scope.PostData);
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
                $scope.SubmitProgress = false;
                  $scope.ResponseData = response.data; 
                  $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Alert').content($scope.ResponseData).ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
              },function(response){
                $scope.SubmitProgress = false;
                  $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).content('Error Occure saving the data').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
              });
        }
         
      }
        
  }) //END OF AppCtrl

