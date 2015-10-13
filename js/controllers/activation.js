var app = angular.module('mainApp', ['ngMaterial', 'directivelibrary','DomainConfig','ui.router']);
//modified by saje on 10/5/15
app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function(httpProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Add_Activation');
    $stateProvider
        .state('Add_Activation', {
            url: '/Add_Activation',
            templateUrl: 'activation_partial/activation_add_partial.html',
            controller: 'AppCtrl'
        })
}])
app.controller('AppCtrl', function($scope, $mdToast, $rootScope,$HostService,$PostData, $mdDialog, $window, $q, $http, $compile, $timeout) {

        $scope.promotionProgress = true;
        $scope.SubmitProgress = false;
        $scope.stoken = $HostService.GetSecurityToken();
        $scope.hostUrl = $HostService.GetHost();        
        $scope.FromNumber = $HostService.GetFromNumber();
        $scope.ToNumber = $HostService.GetToNumber();
        //get all promotion details start

        $scope.promotion = [];
        $http({
                url: 'http://' + $scope.hostUrl + '/DuoSubscribe5/V5Services/SMSPromotionService/duosubscribermanagement/masters/Promotion.svc/json/GetAllPromoHeaderPaging?sinceID=0&securityToken=' + $scope.stoken + '',
                method: "GET"
            })
            .then(function(response) {
                    $scope.promotion = response.data;
                    $scope.promotionProgress = false;

                },
                function(response) {
                    $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('This is embarracing').content('There was an error retrieving promotion.').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent());
                    $scope.promotionProgress = false;
                });

        //get all promotion details end 
        $scope.SelectedPromotion = function(promo) {
            $scope.PromoNumber = promo;
        }
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
        $scope.save = function(){setTimeout(function(){$('#mySignup').click();})}
        $scope.submit = function() {
        	if ($scope.Promo == null || $scope.Promo == "") {
        		$mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Please Select Promotion').content('There is no promotion selected.. Please select a promotion').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
        	}else{

        		$scope.SubmitProgress = true;
        		$scope.PostText = $PostData.ActivationData($scope.STBNo,$scope.Promo);
	            console.log($scope.PostText);

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
	                $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).title('Error').content($scope.ResponseData).ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
	            },function(response){
	            	$scope.SubmitProgress = false;
	                $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).content('Activation failed...').ariaLabel('Alert Dialog Demo').ok('OK').targetEvent())
	            });
        	}
        }

    }) //END OF AppCtrl
