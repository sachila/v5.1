(function($angular) {
var directiveLibraryModule = angular.module('directivelibrary',['uiMicrokernel']); //'uiMicrokernel',




/*
 ____ __ __   __ _____  _____  ___  __    __  __ _____  ___  _____ _____ _____    ____   ___  _____      __ _____  ___  _____ _____ 
((    || ||  ((   ||   ((   )) || \/ |    ||==|| ||==  ||=|| ||  ) ||==  ||_//    ||=)  ||=|| ||_//     ((   ||   ||=|| ||_//  ||   
 \\__ \\_// \_))  ||    \\_//  ||    |    ||  || ||___ || || ||_// ||___ || \\    ||_)) || || || \\    \_))  ||   || || || \\  ||
*/
	
		directiveLibraryModule.directive('mdHeader', function() {
	  return {
		restrict: 'E',
		template: "<div style='max-width:960px;margin: 0 auto;animation: fromTop 1.3s 1; -webkit-animation: fromTop 1.3s 1;'><!--APP DETAILS START--><div style='float:left;' ng-init='showImage=true'><img ng-show='showImage' src='{{src}}' style='height:42px;width;42px;border-radius:50px;margin-top:6px;margin-left:10px'/></div><div style='float:left;margin-top:14px;margin-left:8px;'><label style='font-size:23px;font-weight:700'>{{name}}</label></div><!--APP DETAILS END--><!--ACTION BUTTONS START--><div style='float:right;margin-right:10px'><md-button aria-label='First Button'><md-icon md-svg-src='bower_components/material-design-icons/content/svg/production/ic_remove_24px.svg' style='width:25px'></md-icon></md-button><md-button aria-label='First Button'><md-icon md-svg-src='bower_components/material-design-icons/image/svg/production/ic_add_to_photos_24px.svg' style='width:25px'></md-icon></md-button><md-button aria-label='First Button'><md-icon md-svg-src='bower_components/material-design-icons/navigation/svg/production/ic_close_18px.svg' style='width:25px'></md-icon></md-button></div><!--ACTION BUTTONS END--></div>",
//		"<md-toolbar layout='row' layout-align='space-between center' ng-init='showImage=true' style='animation: fromTop 1.3s 1; -webkit-animation: fromTop 1.3s 1;'><span><h2 class='md-toolbar-tools'><span style='margin-top:3px'><img ng-show='showImage' src='{{src}}' height='55px' width='55px' style='border-radius: 50px;'></img></span> <span style='margin-left:10px'>{{name}}</span></h2></span> <span style='margin-top:-21px'> <md-button aria-label='First Button'><md-icon md-svg-src='bower_components/material-design-icons/content/svg/production/ic_remove_24px.svg' style='fill: white'></md-icon></md-button> <md-button aria-label='Second Button'><md-icon md-svg-src='bower_components/material-design-icons/image/svg/production/ic_add_to_photos_24px.svg' style='fill: white;'></md-icon></md-button><md-button aria-label='Second Button'><md-icon md-svg-src='bower_components/material-design-icons/navigation/svg/production/ic_close_18px.svg' style='fill: white;'></md-icon></md-button> </span> </md-toolbar>",
		scope:{
			src:'@',
			name:'@'
		},
		link: function(scope,element){
		 if(!scope.src)
		 {
			scope.showImage = false;
		 }
	
		
		} //end of link
	  };
	});
	
/*
 ____ __ __   __ _____  _____  ___  __    __  __ _____  ___  _____ _____ _____    ____   ___  _____    _____ __ __  __ __   __ __  __ 
((    || ||  ((   ||   ((   )) || \/ |    ||==|| ||==  ||=|| ||  ) ||==  ||_//    ||=)  ||=|| ||_//    ||==  || ||\\|| ||  ((  ||==|| 
 \\__ \\_// \_))  ||    \\_//  ||    |    ||  || ||___ || || ||_// ||___ || \\    ||_)) || || || \\    ||    || || \|| || \_)) ||  || 
*/	
	
	
	
/*	
 ____ __ __   __ _____  _____  ___  __    _____  ___  ____     ____  __ __ _____ _____  _____  __  __      __ _____  ___  _____ _____ 
((    || ||  ((   ||   ((   )) || \/ |    ||==  ||=|| ||=)     ||=)  || ||  ||    ||   ((   )) ||\\||     ((   ||   ||=|| ||_//  ||   
 \\__ \\_// \_))  ||    \\_//  ||    |    ||    || || ||_))    ||_)) \\_//  ||    ||    \\_//  || \||    \_))  ||   || || || \\  ||   
*/	
	 directiveLibraryModule.run(['$templateCache', function($templateCache) {
    $templateCache.put('ng-mfb-menu-default.tpl.html',
    '<ul class="mfb-component--{{position}} mfb-{{effect}}"' +
    '    data-mfb-toggle="{{togglingMethod}}" data-mfb-state="{{menuState}}">' +
    '  <li class="mfb-component__wrap">' +
    '    <a ng-click="clicked()" ng-mouseenter="hovered()" ng-mouseleave="hovered()"' +
    '       ng-attr-data-mfb-label="{{label}}" class="mfb-component__button--main">' +
    '     <i class="mfb-component__main-icon--resting {{resting}}"></i>' +
    '     <i class="mfb-component__main-icon--active {{active}}"></i>' +
    '    </a>' +
    '    <ul class="mfb-component__list" ng-transclude>' +
    '    </ul>' +
    '</li>' +
    '</ul>'
    );

    $templateCache.put('ng-mfb-menu-md.tpl.html',
    '<ul class="mfb-component--{{position}} mfb-{{effect}}"' +
    '    data-mfb-toggle="{{togglingMethod}}" data-mfb-state="{{menuState}}">' +
    '  <li class="mfb-component__wrap">' +
    '    <a ng-click="clicked()" ng-mouseenter="hovered()" ng-mouseleave="hovered()"' +
    '       style="background: transparent; box-shadow: none;"' +
    '       ng-attr-data-mfb-label="{{label}}" class="mfb-component__button--main">' +
    '     <md-button class="md-fab md-primary" aria-label={{label}} style="position:relative;">' +
    '       <md-icon style="left: 0;" md-svg-icon="{{resting}}"' +
    '         class="mfb-component__main-icon--resting"></md-icon>' +
    '       <md-icon style="position:initial;" md-svg-icon="{{active}}"' +
    '         class="mfb-component__main-icon--active"></md-icon>' +
    '     </md-button>' +
    '    </a>' +
    '    <ul class="mfb-component__list" ng-transclude>' +
    '    </ul>' +
    '</li>' +
    '</ul>'
    );

    $templateCache.put('ng-mfb-button-default.tpl.html',
    '<li>' +
    '  <a data-mfb-label="{{label}}" class="mfb-component__button--child">' +
    '    <i class="mfb-component__child-icon {{icon}}">' +
    '    </i>' +
    '  </a>' +
    '</li>'
    );

    $templateCache.put('ng-mfb-button-md.tpl.html',
    '<li>' +
    '  <a href="" data-mfb-label="{{label}}" class="mfb-component__button--child" ' +
    '     style="background: transparent; box-shadow: none;">' +
    '     <md-button class="md-fab md-primary" aria-label={{label}}>' +
    //'       <md-icon md-svg-src="img/icons/android.svg"></md-icon>' +
    '       <md-icon md-svg-icon="{{icon}}"></md-icon>' +
    '     </md-button>' +
    '  </a>' +
    '</li>'
    );
  }]);

  directiveLibraryModule.directive('mfbMenu', ['$timeout',function($timeout){
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        position: '@',
        effect: '@',
        label: '@',
        resting: '@restingIcon',
        active: '@activeIcon',
        mainAction: '&',
        menuState: '=?',
        togglingMethod: '@'
      },
      templateUrl: function(elem, attrs) {
        return attrs.templateUrl || 'ng-mfb-menu-default.tpl.html';
      },
      link: function(scope, elem, attrs) {

        var openState = 'open',
            closedState = 'closed';

        /**
         * Check if we're on a touch-enabled device.
         * Requires Modernizr to run, otherwise simply returns false
         */
        function _isTouchDevice(){
          return window.Modernizr && Modernizr.touch;
        }

        function _isHoverActive(){
          return scope.togglingMethod === 'hover';
        }

        /**
         * Convert the toggling method to 'click'.
         * This is used when 'hover' is selected by the user
         * but a touch device is enabled.
         */
        function useClick(){
          scope.$apply(function(){
            scope.togglingMethod = 'click';
          });
        }
        /**
         * Invert the current state of the menu.
         */
        function flipState() {
          scope.menuState = scope.menuState === openState ? closedState : openState;
        }

        /**
         * Set the state to user-defined value. Fallback to closed if no
         * value is passed from the outside.
         */
        //scope.menuState = attrs.menuState || closedState;
        if(!scope.menuState){
          scope.menuState = closedState;
        }

        scope.clicked = function() {
          // If there is a main action, let's fire it
          if (scope.mainAction) {
            scope.mainAction();
          }

          if(!_isHoverActive()){
            flipState();
          }
        };
        scope.hovered = function() {
          if(_isHoverActive()){
            //flipState();
          }
        };

        /**
         * If on touch device AND 'hover' method is selected:
         * wait for the digest to perform and then change hover to click.
         */
        if ( _isTouchDevice() && _isHoverActive() ){
          $timeout(useClick);
        }

        attrs.$observe('menuState', function(){
          scope.currentState = scope.menuState;
        });

      }
    };
  }]);


  directiveLibraryModule.directive('mfbButton', [function(){
    return {
      require: '^mfbMenu',
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        icon: '@',
        label: '@'
      },
      templateUrl: function(elem, attrs) {
        return attrs.templateUrl || 'ng-mfb-button-default.tpl.html';
      }
    };
  }]);
  
  
	directiveLibraryModule.value('mfbDefaultValues', {
	  positions: [{
		name: 'Position'
	  },{
		value: 'tl',
		name: 'Top left'
	  },{
		value: 'tr',
		name: 'Top right'
	  },{
		value: 'br',
		name: 'Bottom right'
	  },{
		value: 'bl',
		name: 'Bottom left'
	  }],

	  effects: [{
		name: 'Effect'
	  },{
		value: 'slidein',
		name: 'Slide in + fade'
	  },{
		value: 'zoomin',
		name: 'Zoom in'
	  },{
		value: 'fountain',
		name: 'Fountain'
	  },{
		value: 'slidein-spring',
		name: 'Slidein (spring)'
	  }],

	  methods: [{
		  name: 'Method'
		},{
		  value: 'click',
		  name: 'Click'
		},{
		  value: 'hover',
		  name: 'Hover'
		}
	  ],
	  actions: [{
		  name: 'Fire Main Action?'
	  }, {
		  value: 'fire',
		  name: 'Fire'
	  }, {
		  value: 'nofire',
		  name: 'Don\'t Fire'
	  }]
	});
	
/*	
 ____ __ __   __ _____  _____  ___  __    _____  ___  ____     ____  __ __ _____ _____  _____  __  __    _____ __ __  __ __   __ __  __ 
((    || ||  ((   ||   ((   )) || \/ |    ||==  ||=|| ||=)     ||=)  || ||  ||    ||   ((   )) ||\\||    ||==  || ||\\|| ||  ((  ||==|| 
 \\__ \\_// \_))  ||    \\_//  ||    |    ||    || || ||_))    ||_)) \\_//  ||    ||    \\_//  || \||    ||    || || \|| || \_)) ||  || 
*/	
/*
                 _                     __       _       _           _   _                         _ _   _                   _                 _   _                   _             _   
   ___ _   _ ___| |_ ___  _ __ ___    / _| __ _| |__   | |__  _   _| |_| |_ ___  _ __   __      _(_) |_| |__     __ _ _ __ (_)_ __ ___   __ _| |_(_) ___  _ __    ___| |_ __ _ _ __| |_ 
  / __| | | / __| __/ _ \| '_ ` _ \  | |_ / _` | '_ \  | '_ \| | | | __| __/ _ \| '_ \  \ \ /\ / / | __| '_ \   / _` | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \  / __| __/ _` | '__| __|
 | (__| |_| \__ \ || (_) | | | | | | |  _| (_| | |_) | | |_) | |_| | |_| || (_) | | | |  \ V  V /| | |_| | | | | (_| | | | | | | | | | | (_| | |_| | (_) | | | | \__ \ || (_| | |  | |_ 
  \___|\__,_|___/\__\___/|_| |_| |_| |_|  \__,_|_.__/  |_.__/ \__,_|\__|\__\___/|_| |_|   \_/\_/ |_|\__|_| |_|  \__,_|_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_| |___/\__\__,_|_|   \__|

*/

directiveLibraryModule.directive('mfbchild',function(){
  return{
    restrict : "EA",
    transclude: true,
      replace: true,
      template : '<li ng-click="openMe();"><div class="button-wrapper__{{position}}"><a data-mfb-label="{{label}}" class="mfb-component__button--child main-button"><i class="mfb-component__child-icon {{icon}}"></i><div class="layer" style="background-color:{{color}}"><div class="ripple"></div></div></a></div></li>',
      scope: {
      bclass : '@',
      label : '@',
      cc: '@',
      color : '@',
      icon:'@',
      position:'@'
      },
  
    link : function(scope,elem,attrs){

      //changing css classes according to position top left
    if(scope.position === 'tl'){
      //start of open me function
      scope.openMe = function(){
        elem.find('.button-wrapper__tl').addClass("clicked");
      };//end of open me function
    
    };//end of if

    //changing css classes according to position top right
    if(scope.position === 'tr'){
      //start of open me function
      scope.openMe = function(){
        elem.find('.button-wrapper__tr').addClass("clicked");
      };//end of open me function
    
    };//end of if

    //changing css classes according to position bottom left
    if(scope.position === 'bl'){
      //start of open me function
      scope.openMe = function(){
        elem.find('.button-wrapper__bl').addClass("clicked");
      };//end of open me function
    
    };//end of if

    //changing css classes according to position bottom right
    if(scope.position === 'br'){
      //start of open me function
      scope.openMe = function(){
        elem.find('.button-wrapper__br').addClass("clicked");
      };//end of open me function
    
    };//end of if

    }
  };
});//end of directive

/*
                 _                     __       _       _           _   _                         _ _   _                   _                 _   _                __ _       _     _     
   ___ _   _ ___| |_ ___  _ __ ___    / _| __ _| |__   | |__  _   _| |_| |_ ___  _ __   __      _(_) |_| |__     __ _ _ __ (_)_ __ ___   __ _| |_(_) ___  _ __    / _(_)_ __ (_)___| |__  
  / __| | | / __| __/ _ \| '_ ` _ \  | |_ / _` | '_ \  | '_ \| | | | __| __/ _ \| '_ \  \ \ /\ / / | __| '_ \   / _` | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \  | |_| | '_ \| / __| '_ \ 
 | (__| |_| \__ \ || (_) | | | | | | |  _| (_| | |_) | | |_) | |_| | |_| || (_) | | | |  \ V  V /| | |_| | | | | (_| | | | | | | | | | | (_| | |_| | (_) | | | | |  _| | | | | \__ \ | | |
  \___|\__,_|___/\__\___/|_| |_| |_| |_|  \__,_|_.__/  |_.__/ \__,_|\__|\__\___/|_| |_|   \_/\_/ |_|\__|_| |_|  \__,_|_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_| |_| |_|_| |_|_|___/_| |_|

*/

/*
 ____ __ __   __ _____  _____  ___  __    _____  ___  ____  __    _____      __ _____  ___  _____ _____ 
((    || ||  ((   ||   ((   )) || \/ |     ||   ||=|| ||=)  ||    ||==      ((   ||   ||=|| ||_//  ||   
 \\__ \\_// \_))  ||    \\_//  ||    |     ||   || || ||_)) ||__| ||___    \_))  ||   || || || \\  ||   
*/

  directiveLibraryModule.directive('mdTable',["$objectstore",  function ($objectstore) {
  return {
    restrict: 'E',
    scope: { 
    heading: '@',
    content: '=', 
      headers: '=', 
      sortable: '=', 
      filters: '=',
      customClass: '=customClass',
      thumbs:'=', 
      count: '='
    },
    controller: function ($scope,$filter,$window,$rootScope) {
  
  
      var orderBy = $filter('orderBy');
      $scope.tablePage = 0;
      $scope.nbOfPages = function () {
        return Math.ceil($scope.content.length / $scope.count);
      },
        $scope.handleSort = function (field) {
          if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
      };
      $scope.order = function(predicate, reverse) {
          $scope.content = orderBy($scope.content, predicate, reverse);
          $scope.predicate = predicate;
      };
      $scope.order($scope.sortable[0],false);
      $scope.getNumber = function (num) {
                return new Array(num);
      };
      $scope.goToPage = function (page) {
        $scope.tablePage = page;
      };
    
    
    $scope.viewRecord = function(content)
    {
      $rootScope.$broadcast('viewRecord', content);
      //$scope.content_in_record = content;
    }
    
    },
    template: "<table md-colresize='md-colresize' class='md-table'> <div> <h2>{{heading}}</h2> </div> <thead> <tr class='md-table-headers-row'> <th ng-repeat='h in headers' class='md-table-header'><a href='#' ng-if='handleSort(h.field)' ng-click='reverse=!reverse;order(h.field,reverse)'>{{h.name}} <md-icon ng-show='reverse &amp;&amp; h.field == predicate'  md-svg-src='img/directive_library/ic_arrow_drop_down_24px.svg'>  </md-icon><md-icon ng-show='!reverse &amp;&amp; h.field == predicate'  md-svg-src='img/directive_library/ic_arrow_drop_up_24px.svg'>  </md-icon></a><span ng-if='!handleSort(h.field)'>{{h.name}}</span></th> <th class='md-table-header'></th> </tr> </thead> <tbody> <tr ng-repeat='c in content | filter:filters | startFrom:tablePage*count | limitTo: count' class='md-table-content-row'> <td ng-repeat='h in headers' ng-class='customClass[h.field]' ng-if='h.field != thumbs' class='md-table-content'>{{(h.field.indexOf('date') > 0) ? $filter('date')(c[h.field]) : c[h.field];}}</td> <td class='md-table-td-more'> <md-button type='button' aria-label='Info' ng-click='viewRecord(c)'><md-icon md-svg-src='img/ic_delete_24px.svg' ></md-icon></md-button> </td> </tr> </tbody> </table> <div layout='row' class='md-table-footer'><span class='md-table-count-info'>Rows per page : <a href='#' ng-click='goToPage(0); count=10'>10</a>,<a href='#' ng-click='goToPage(0); count=25'>25</a>,<a href='#' ng-click='goToPage(0); count=50'>50</a>,<a href='#' ng-click='goToPage(0); count=100'>100</a>(current is {{count}})</span><span flex='flex'></span><span ng-show='nbOfPages() &gt; 1'> <md-button ng-disabled='tablePage==0' ng-click='tablePage=tablePage-1' aria-label='Previous Page' class='md-primary md-hue-2'><md-icon md-svg-src='img/directive_library/ic_chevron_left_24px.svg'>  </md-icon></md-button><a href='#' ng-repeat='i in getNumber(nbOfPages()) track by $index'> <md-button ng-click='goToPage($index)' class='md-primary md-hue-2 md-table-footer-item'><span ng-class=\"{ 'md-table-active-page': tablePage==$index}\">{{$index+1}}</span></md-button></a> <md-button ng-disabled='tablePage==nbOfPages()-1' ng-click='tablePage=tablePage+1' aria-label='Next Page' class='md-primary md-hue-2'><md-icon md-svg-src='img/directive_library/ic_chevron_right_24px.svg'>  </md-icon></md-button></span></div>"
  }
}]);
/*
directiveLibraryModule.directive('mdColresize', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$evalAsync(function () {
        $timeout(function(){ $(element).colResizable({
          liveDrag: true,
          fixed: true
          
        });},100);
      });
    }
  }
});
*/
directiveLibraryModule.filter('startFrom',function (){
  return function (input,start) {
    start = +start;
    return input.slice(start);
  }
});

/*
 ____ __ __   __ _____  _____  ___  __    _____  ___  ____  __    _____    _____ __ __  __ __   __ __  __ 
((    || ||  ((   ||   ((   )) || \/ |     ||   ||=|| ||=)  ||    ||==     ||==  || ||\\|| ||  ((  ||==|| 
 \\__ \\_// \_))  ||    \\_//  ||    |     ||   || || ||_)) ||__| ||___    ||    || || \|| || \_)) ||  ||  
*/



/*
_____  ___  _____ _____    _____ __  ____ __ __ _____ _____      __ _____  ___  _____ _____ 
||  ) ||=||  ||   ||==     ||_// || ((    ||<<  ||==  ||_//     ((   ||   ||=|| ||_//  ||   
||_// || ||  ||   ||___    ||    ||  \\__ || \\ ||___ || \\    \_))  ||   || || || \\  || 

*/	


   directiveLibraryModule.run(["$templateCache", function($templateCache) {
        $templateCache.put("date-picker/date-picker-dialog.html", "<md-dialog class=\"mdc-date-picker\">\n    <!-- Date picker -->\n    <div md-theme=\"{{mdTheme}}\">\n      <!-- Current day of week -->\n      <md-toolbar class=\"md-hue-2 mdc-date-picker__current-day-of-week\">\n        <span>{{ moment(selected.date).format(\'dddd\') }}</span>\n      </md-toolbar>\n\n      <!-- Current date -->\n      <md-toolbar class=\"mdc-date-picker__current-date\">\n        <span>{{ moment(selected.date).format(\'MMM\') }}</span>\n        <strong>{{ moment(selected.date).format(\'DD\') }}</strong>\n        <a ng-click=\"displayYearSelection()\">{{ moment(selected.date).format(\'YYYY\') }}</a>\n      </md-toolbar>\n\n      <!-- Calendar -->\n      <div class=\"mdc-date-picker__calendar\" ng-if=\"!yearSelection\">\n        <div class=\"mdc-date-picker__nav\">\n          <md-button class=\"md-fab md-primary\" aria-label=\"Previous month\" ng-click=\"previousMonth()\">\n            <md-icon style='margin-top:-20px' md-svg-src='img/directive_library/ic_chevron_left_24px.svg'>  </md-icon>          </md-button>\n\n          <span>{{ activeDate.format(\'MMMM YYYY\') }}</span>\n\n       <md-button class=\"md-fab md-primary\" arial-label=\"Next month\" ng-click=\"nextMonth()\">     <md-icon style='margin-top:-20px' md-svg-src='img/directive_library/ic_chevron_right_24px.svg' </md-icon>                </md-button>\n        </div>\n\n        <div class=\"mdc-date-picker__days-of-week\">\n          <span ng-repeat=\"day in daysOfWeek\">{{ day }}</span>\n        </div>\n\n        <div class=\"mdc-date-picker__days\">\n                    <span class=\"mdc-date-picker__day mdc-date-picker__day--is-empty\"\n                          ng-repeat=\"x in emptyFirstDays\">&nbsp;</span><!--\n\n                 --><div class=\"mdc-date-picker__day\"\n                         ng-class=\"{ \'mdc-date-picker__day--is-selected\': day.selected,\n                                     \'mdc-date-picker__day--is-today\': day.today }\"\n                         ng-repeat=\"day in days\">\n          <a ng-click=\"select(day)\">{{ day ? day.format(\'D\') : \'\' }}</a>\n        </div><!--\n\n                 --><span class=\"mdc-date-picker__day mdc-date-picker__day--is-empty\"\n                          ng-repeat=\"x in emptyLastDays\">&nbsp;</span>\n        </div>\n      </div>\n\n      <!-- Year selection -->\n      <div class=\"mdc-date-picker__year-selector\" ng-show=\"yearSelection\">\n        <a class=\"mdc-date-picker__year\"\n           ng-class=\"{ \'mdc-date-picker__year--is-active\': year == activeDate.format(\'YYYY\') }\"\n           ng-repeat=\"year in years\"\n           ng-click=\"selectYear(year)\"\n           ng-if=\"yearSelection\">\n          <span>{{year}}</span>\n        </a>\n      </div>\n\n      <!-- Actions -->\n      <div class=\"md-actions mdc-date-picker__actions\" layout=\"row\" layout-align=\"end\">\n        <md-button class=\"md-primary\" ng-click=\"cancel()\">Cancel</md-button>\n        <md-button class=\"md-primary\" ng-click=\"closePicker()\">Ok</md-button>\n      </div>\n    </div>\n</md-dialog>\n");
        $templateCache.put("date-picker/date-picker-input.html", "<md-input-container flex=\"50\" ng-click=\"openPicker($event)\">\n  <label>{{label}}</label>\n  <input type=\"text\" ng-model=\"selected.model\" />\n</md-input-container>\n");
    }]);
	
	directiveLibraryModule.controller('mdcDatePickerController', function ($scope, $timeout, $mdDialog, $document, model, locale, mdTheme) {
    function checkLocale(locale) {
      if (!locale) {
        return (navigator.language !== null ? navigator.language : navigator.browserLanguage).split('_')[0].split('-')[0] || 'en';
      }
      return locale;
    }

    $scope.model = model;
    $scope.mdTheme = mdTheme ? mdTheme : 'default';

    var activeLocale;

    this.build = function (locale) {
      activeLocale = locale;

      moment.locale(activeLocale);

      if (angular.isDefined($scope.model)) {
        $scope.selected = {
          model: moment($scope.model).format('LL'),
          date: $scope.model
        };

        $scope.activeDate = moment($scope.model);
      }
      else {
        $scope.selected = {
          model: undefined,
          date: new Date()
        };

        $scope.activeDate = moment();
      }

      $scope.moment = moment;

      $scope.days = [];
      //TODO: Use moment locale to set first day of week properly.
      $scope.daysOfWeek = [moment.weekdaysMin(1), moment.weekdaysMin(2), moment.weekdaysMin(3), moment.weekdaysMin(4), moment.weekdaysMin(5), moment.weekdaysMin(6), moment.weekdaysMin(0)];

      $scope.years = [];

      for (var y = moment().year() - 100; y <= moment().year() + 100; y++) {
        $scope.years.push(y);
      }

      generateCalendar();
    };
    this.build(checkLocale(locale));

    $scope.previousMonth = function () {
      $scope.activeDate = $scope.activeDate.subtract(1, 'month');
      generateCalendar();
    };

    $scope.nextMonth = function () {
      $scope.activeDate = $scope.activeDate.add(1, 'month');
      generateCalendar();
    };

    $scope.select = function (day) {
      $scope.selected = {
        model: day.format('LL'),
        date: day.toDate()
      };

      $scope.model = day.toDate();

      generateCalendar();
    };

    $scope.selectYear = function (year) {
      $scope.yearSelection = false;

      $scope.selected.model = moment($scope.selected.date).year(year).format('LL');
      $scope.selected.date = moment($scope.selected.date).year(year).toDate();
      $scope.model = moment($scope.selected.date).toDate();
      $scope.activeDate = $scope.activeDate.add(year - $scope.activeDate.year(), 'year');

      generateCalendar();
    };
    $scope.displayYearSelection = function () {
      var calendarHeight = $document[0].getElementsByClassName('mdc-date-picker__calendar')[0].offsetHeight;
      var yearSelectorElement = $document[0].getElementsByClassName('mdc-date-picker__year-selector')[0];
      yearSelectorElement.style.height = calendarHeight + 'px';

      $scope.yearSelection = true;

      $timeout(function () {
        var activeYearElement = $document[0].getElementsByClassName('mdc-date-picker__year--is-active')[0];
        yearSelectorElement.scrollTop = yearSelectorElement.scrollTop + activeYearElement.offsetTop - yearSelectorElement.offsetHeight / 2 + activeYearElement.offsetHeight / 2;
      });
    };

    function generateCalendar() {
      var days = [],
        previousDay = angular.copy($scope.activeDate).date(0),
        firstDayOfMonth = angular.copy($scope.activeDate).date(1),
        lastDayOfMonth = angular.copy(firstDayOfMonth).endOf('month'),
        maxDays = angular.copy(lastDayOfMonth).date();

      $scope.emptyFirstDays = [];

      for (var i = firstDayOfMonth.day() === 0 ? 6 : firstDayOfMonth.day() - 1; i > 0; i--) {
        $scope.emptyFirstDays.push({});
      }

      for (var j = 0; j < maxDays; j++) {
        var date = angular.copy(previousDay.add(1, 'days'));

        date.selected = angular.isDefined($scope.selected.model) && date.isSame($scope.selected.date, 'day');
        date.today = date.isSame(moment(), 'day');

        days.push(date);
      }

      $scope.emptyLastDays = [];

      for (var k = 7 - (lastDayOfMonth.day() === 0 ? 7 : lastDayOfMonth.day()); k > 0; k--) {
        $scope.emptyLastDays.push({});
      }

      $scope.days = days;
    }

    $scope.cancel = function() {
      $mdDialog.hide();
    };

    $scope.closePicker = function () {
      $mdDialog.hide($scope.selected);
    };
  })
directiveLibraryModule.controller('mdcDatePickerInputController', function ($scope, $attrs, $timeout, $mdDialog) {
    if (angular.isDefined($scope.model)) {
      $scope.selected = {
        model: moment($scope.model).format('LL'),
        date: $scope.model
      };
    }
    else {
      $scope.selected = {
        model: undefined,
        date: new Date()
      };
    }

    $scope.openPicker = function (ev) {
      $scope.yearSelection = false;

      $mdDialog.show({
        targetEvent: ev,
        templateUrl: 'date-picker/date-picker-dialog.html',
        controller: 'mdcDatePickerController',
        locals: {model: $scope.model, locale: $attrs.locale, mdTheme: $attrs.dialogMdTheme}
      }).then(function (selected) {
        if (selected) {
          $scope.selected = selected;
          $scope.model = selected.model;
        }
      });
    };
  })
directiveLibraryModule.directive('mdDatePicker', function () {
    return {
      restrict: 'AE',
      controller: 'mdcDatePickerInputController',
      scope: {
        model: '=',
        label: '@'
      },
      templateUrl: 'date-picker/date-picker-input.html'
    };
  });
  
  
  //This is a minified version of moment.js which is needed by this directive
//! moment.js
//! version : 2.10.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Ac.apply(null,arguments)}function b(a){Ac=a}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}function e(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function f(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function g(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function h(a,b){for(var c in b)g(b,c)&&(a[c]=b[c]);return g(b,"toString")&&(a.toString=b.toString),g(b,"valueOf")&&(a.valueOf=b.valueOf),a}function i(a,b,c,d){return ya(a,b,c,d,!0).utc()}function j(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length&&void 0===a._pf.bigHour)),a._isValid}function k(a){var b=i(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b}function l(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Cc.length>0)for(c in Cc)d=Cc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function m(b){l(this,b),this._d=new Date(+b._d),Dc===!1&&(Dc=!0,a.updateOffset(this),Dc=!1)}function n(a){return a instanceof m||null!=a&&g(a,"_isAMomentObject")}function o(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function p(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&o(a[d])!==o(b[d]))&&g++;return g+f}function q(){}function r(a){return a?a.toLowerCase().replace("_","-"):a}function s(a){for(var b,c,d,e,f=0;f<a.length;){for(e=r(a[f]).split("-"),b=e.length,c=r(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=t(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&p(e,c,!0)>=b-1)break;b--}f++}return null}function t(a){var b=null;if(!Ec[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Bc._abbr,require("./locale/"+a),u(b)}catch(c){}return Ec[a]}function u(a,b){var c;return a&&(c="undefined"==typeof b?w(a):v(a,b),c&&(Bc=c)),Bc._abbr}function v(a,b){return null!==b?(b.abbr=a,Ec[a]||(Ec[a]=new q),Ec[a].set(b),u(a),Ec[a]):(delete Ec[a],null)}function w(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Bc;if(!d(a)){if(b=t(a))return b;a=[a]}return s(a)}function x(a,b){var c=a.toLowerCase();Fc[c]=Fc[c+"s"]=Fc[b]=a}function y(a){return"string"==typeof a?Fc[a]||Fc[a.toLowerCase()]:void 0}function z(a){var b,c,d={};for(c in a)g(a,c)&&(b=y(c),b&&(d[b]=a[c]));return d}function A(b,c){return function(d){return null!=d?(C(this,b,d),a.updateOffset(this,c),this):B(this,b)}}function B(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function C(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function D(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=y(a),"function"==typeof this[a])return this[a](b);return this}function E(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function F(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Jc[a]=e),b&&(Jc[b[0]]=function(){return E(e.apply(this,arguments),b[1],b[2])}),c&&(Jc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function G(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function H(a){var b,c,d=a.match(Gc);for(b=0,c=d.length;c>b;b++)d[b]=Jc[d[b]]?Jc[d[b]]:G(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function I(a,b){return a.isValid()?(b=J(b,a.localeData()),Ic[b]||(Ic[b]=H(b)),Ic[b](a)):a.localeData().invalidDate()}function J(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Hc.lastIndex=0;d>=0&&Hc.test(a);)a=a.replace(Hc,c),Hc.lastIndex=0,d-=1;return a}function K(a,b,c){Yc[a]="function"==typeof b?b:function(a){return a&&c?c:b}}function L(a,b){return g(Yc,a)?Yc[a](b._strict,b._locale):new RegExp(M(a))}function M(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=o(a)}),c=0;c<a.length;c++)Zc[a[c]]=d}function O(a,b){N(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function P(a,b,c){null!=b&&g(Zc,a)&&Zc[a](b,c._a,c,a)}function Q(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function R(a){return this._months[a.month()]}function S(a){return this._monthsShort[a.month()]}function T(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=i([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function U(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),Q(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function V(b){return null!=b?(U(this,b),a.updateOffset(this,!0),this):B(this,"Month")}function W(){return Q(this.year(),this.month())}function X(a){var b,c=a._a;return c&&-2===a._pf.overflow&&(b=c[_c]<0||c[_c]>11?_c:c[ad]<1||c[ad]>Q(c[$c],c[_c])?ad:c[bd]<0||c[bd]>24||24===c[bd]&&(0!==c[cd]||0!==c[dd]||0!==c[ed])?bd:c[cd]<0||c[cd]>59?cd:c[dd]<0||c[dd]>59?dd:c[ed]<0||c[ed]>999?ed:-1,a._pf._overflowDayOfYear&&($c>b||b>ad)&&(b=ad),a._pf.overflow=b),a}function Y(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function Z(a,b){var c=!0;return h(function(){return c&&(Y(a),c=!1),b.apply(this,arguments)},b)}function $(a,b){hd[a]||(Y(b),hd[a]=!0)}function _(a){var b,c,d=a._i,e=id.exec(d);if(e){for(a._pf.iso=!0,b=0,c=jd.length;c>b;b++)if(jd[b][1].exec(d)){a._f=jd[b][0]+(e[6]||" ");break}for(b=0,c=kd.length;c>b;b++)if(kd[b][1].exec(d)){a._f+=kd[b][0];break}d.match(Vc)&&(a._f+="Z"),sa(a)}else a._isValid=!1}function aa(b){var c=ld.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(_(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ba(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function ca(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function da(a){return ea(a)?366:365}function ea(a){return a%4===0&&a%100!==0||a%400===0}function fa(){return ea(this.year())}function ga(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=za(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ha(a){return ga(a,this._week.dow,this._week.doy).week}function ia(){return this._week.dow}function ja(){return this._week.doy}function ka(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function la(a){var b=ga(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function ma(a,b,c,d,e){var f,g,h=ca(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:da(a-1)+g}}function na(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function oa(a,b,c){return null!=a?a:null!=b?b:c}function pa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function qa(a){var b,c,d,e,f=[];if(!a._d){for(d=pa(a),a._w&&null==a._a[ad]&&null==a._a[_c]&&ra(a),a._dayOfYear&&(e=oa(a._a[$c],d[$c]),a._dayOfYear>da(e)&&(a._pf._overflowDayOfYear=!0),c=ca(e,0,a._dayOfYear),a._a[_c]=c.getUTCMonth(),a._a[ad]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[bd]&&0===a._a[cd]&&0===a._a[dd]&&0===a._a[ed]&&(a._nextDay=!0,a._a[bd]=0),a._d=(a._useUTC?ca:ba).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[bd]=24)}}function ra(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=oa(b.GG,a._a[$c],ga(za(),1,4).year),d=oa(b.W,1),e=oa(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=oa(b.gg,a._a[$c],ga(za(),f,g).year),d=oa(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=ma(c,d,e,g,f),a._a[$c]=h.year,a._dayOfYear=h.dayOfYear}function sa(b){if(b._f===a.ISO_8601)return void _(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=J(b._f,b._locale).match(Gc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(L(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Jc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),P(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[bd]<=12&&(b._pf.bigHour=void 0),b._a[bd]=ta(b._locale,b._a[bd],b._meridiem),qa(b),X(b)}function ta(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function ua(a){var b,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=l({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=c(),b._f=a._f[f],sa(b),j(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,d=b));h(a,d||b)}function va(a){if(!a._d){var b=z(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],qa(a)}}function wa(a){var b,c=a._i,e=a._f;return a._locale=a._locale||w(a._l),null===c||void 0===e&&""===c?k({nullInput:!0}):("string"==typeof c&&(a._i=c=a._locale.preparse(c)),n(c)?new m(X(c)):(d(e)?ua(a):e?sa(a):xa(a),b=new m(X(a)),b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b))}function xa(b){var c=b._i;void 0===c?b._d=new Date:e(c)?b._d=new Date(+c):"string"==typeof c?aa(b):d(c)?(b._a=f(c.slice(0),function(a){return parseInt(a,10)}),qa(b)):"object"==typeof c?va(b):"number"==typeof c?b._d=new Date(c):a.createFromInputFallback(b)}function ya(a,b,d,e,f){var g={};return"boolean"==typeof d&&(e=d,d=void 0),g._isAMomentObject=!0,g._useUTC=g._isUTC=f,g._l=d,g._i=a,g._f=b,g._strict=e,g._pf=c(),wa(g)}function za(a,b,c,d){return ya(a,b,c,d,!1)}function Aa(a,b){var c,e;if(1===b.length&&d(b[0])&&(b=b[0]),!b.length)return za();for(c=b[0],e=1;e<b.length;++e)b[e][a](c)&&(c=b[e]);return c}function Ba(){var a=[].slice.call(arguments,0);return Aa("isBefore",a)}function Ca(){var a=[].slice.call(arguments,0);return Aa("isAfter",a)}function Da(a){var b=z(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=w(),this._bubble()}function Ea(a){return a instanceof Da}function Fa(a,b){F(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+E(~~(a/60),2)+b+E(~~a%60,2)})}function Ga(a){var b=(a||"").match(Vc)||[],c=b[b.length-1]||[],d=(c+"").match(qd)||["-",0,0],e=+(60*d[1])+o(d[2]);return"+"===d[0]?e:-e}function Ha(b,c){var d,f;return c._isUTC?(d=c.clone(),f=(n(b)||e(b)?+b:+za(b))-+d,d._d.setTime(+d._d+f),a.updateOffset(d,!1),d):za(b).local();return c._isUTC?za(b).zone(c._offset||0):za(b).local()}function Ia(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ja(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ga(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ia(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Za(this,Ua(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ia(this)}function Ka(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function La(a){return this.utcOffset(0,a)}function Ma(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ia(this),"m")),this}function Na(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ga(this._i)),this}function Oa(a){return a=a?za(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Pa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Qa(){if(this._a){var a=this._isUTC?i(this._a):za(this._a);return this.isValid()&&p(this._a,a.toArray())>0}return!1}function Ra(){return!this._isUTC}function Sa(){return this._isUTC}function Ta(){return this._isUTC&&0===this._offset}function Ua(a,b){var c,d,e,f=a,h=null;return Ea(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=rd.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:o(h[ad])*c,h:o(h[bd])*c,m:o(h[cd])*c,s:o(h[dd])*c,ms:o(h[ed])*c}):(h=sd.exec(a))?(c="-"===h[1]?-1:1,f={y:Va(h[2],c),M:Va(h[3],c),d:Va(h[4],c),h:Va(h[5],c),m:Va(h[6],c),s:Va(h[7],c),w:Va(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Xa(za(f.from),za(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Da(f),Ea(a)&&g(a,"_locale")&&(d._locale=a._locale),d}function Va(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Wa(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Xa(a,b){var c;return b=Ha(b,a),a.isBefore(b)?c=Wa(a,b):(c=Wa(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function Ya(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||($(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ua(c,d),Za(this,e,a),this}}function Za(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&C(b,"Date",B(b,"Date")+g*d),h&&U(b,B(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function $a(a){var b=a||za(),c=Ha(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,za(b)))}function _a(){return new m(this)}function ab(a,b){var c;return b=y("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=n(a)?a:za(a),+this>+a):(c=n(a)?+a:+za(a),c<+this.clone().startOf(b))}function bb(a,b){var c;return b=y("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=n(a)?a:za(a),+a>+this):(c=n(a)?+a:+za(a),+this.clone().endOf(b)<c)}function cb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function db(a,b){var c;return b=y(b||"millisecond"),"millisecond"===b?(a=n(a)?a:za(a),+this===+a):(c=+za(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function eb(a){return 0>a?Math.ceil(a):Math.floor(a)}function fb(a,b,c){var d,e,f=Ha(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=y(b),"year"===b||"month"===b||"quarter"===b?(e=gb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:eb(e)}function gb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function hb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ib(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():I(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):I(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jb(b){var c=I(this,b||a.defaultFormat);return this.localeData().postformat(c)}function kb(a,b){return Ua({to:this,from:a}).locale(this.locale()).humanize(!b)}function lb(a){return this.from(za(),a)}function mb(a){var b;return void 0===a?this._locale._abbr:(b=w(a),null!=b&&(this._locale=b),this)}function nb(){return this._locale}function ob(a){switch(a=y(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function pb(a){return a=y(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function qb(){return+this._d-6e4*(this._offset||0)}function rb(){return Math.floor(+this/1e3)}function sb(){return this._offset?new Date(+this):this._d}function tb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function ub(){return j(this)}function vb(){return h({},this._pf)}function wb(){return this._pf.overflow}function xb(a,b){F(0,[a,a.length],0,b)}function yb(a,b,c){return ga(za([a,11,31+b-c]),b,c).week}function zb(a){var b=ga(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Ab(a){var b=ga(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Bb(){return yb(this.year(),1,4)}function Cb(){var a=this.localeData()._week;return yb(this.year(),a.dow,a.doy)}function Db(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Fb(a){return this._weekdays[a.day()]}function Gb(a){return this._weekdaysShort[a.day()]}function Hb(a){return this._weekdaysMin[a.day()]}function Ib(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=za([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Jb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Eb(a,this.localeData()),this.add(a-b,"d")):b}function Kb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Lb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Mb(a,b){F(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Nb(a,b){return b._meridiemParse}function Ob(a){return"p"===(a+"").toLowerCase().charAt(0)}function Pb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Qb(a){F(0,[a,3],0,"millisecond")}function Rb(){return this._isUTC?"UTC":""}function Sb(){return this._isUTC?"Coordinated Universal Time":""}function Tb(a){return za(1e3*a)}function Ub(){return za.apply(null,arguments).parseZone()}function Vb(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function Wb(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b}function Xb(){return this._invalidDate}function Yb(a){return this._ordinal.replace("%d",a)}function Zb(a){return a}function $b(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function _b(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function ac(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function bc(a,b,c,d){var e=w(),f=i().set(d,b);return e[c](f,a)}function cc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return bc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=bc(a,f,c,e);return g}function dc(a,b){return cc(a,b,"months",12,"month")}function ec(a,b){return cc(a,b,"monthsShort",12,"month")}function fc(a,b){return cc(a,b,"weekdays",7,"day")}function gc(a,b){return cc(a,b,"weekdaysShort",7,"day")}function hc(a,b){return cc(a,b,"weekdaysMin",7,"day")}function ic(){var a=this._data;return this._milliseconds=Od(this._milliseconds),this._days=Od(this._days),this._months=Od(this._months),a.milliseconds=Od(a.milliseconds),a.seconds=Od(a.seconds),a.minutes=Od(a.minutes),a.hours=Od(a.hours),a.months=Od(a.months),a.years=Od(a.years),this}function jc(a,b,c,d){var e=Ua(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function kc(a,b){return jc(this,a,b,1)}function lc(a,b){return jc(this,a,b,-1)}function mc(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;return g.milliseconds=d%1e3,a=eb(d/1e3),g.seconds=a%60,b=eb(a/60),g.minutes=b%60,c=eb(b/60),g.hours=c%24,e+=eb(c/24),h=eb(nc(e)),e-=eb(oc(h)),f+=eb(e/30),e%=30,h+=eb(f/12),f%=12,g.days=e,g.months=f,g.years=h,this}function nc(a){return 400*a/146097}function oc(a){return 146097*a/400}function pc(a){var b,c,d=this._milliseconds;if(a=y(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+12*nc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(oc(this._months/12)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 24*b*60+d/6e4;case"second":return 24*b*60*60+d/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+d;default:throw new Error("Unknown unit "+a)}}function qc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*o(this._months/12)}function rc(a){return function(){return this.as(a)}}function sc(a){return a=y(a),this[a+"s"]()}function tc(a){return function(){return this._data[a]}}function uc(){return eb(this.days()/7)}function vc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function wc(a,b,c){var d=Ua(a).abs(),e=ce(d.as("s")),f=ce(d.as("m")),g=ce(d.as("h")),h=ce(d.as("d")),i=ce(d.as("M")),j=ce(d.as("y")),k=e<de.s&&["s",e]||1===f&&["m"]||f<de.m&&["mm",f]||1===g&&["h"]||g<de.h&&["hh",g]||1===h&&["d"]||h<de.d&&["dd",h]||1===i&&["M"]||i<de.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,vc.apply(null,k)}function xc(a,b){return void 0===de[a]?!1:void 0===b?de[a]:(de[a]=b,!0)}function yc(a){var b=this.localeData(),c=wc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function zc(){var a=ee(this.years()),b=ee(this.months()),c=ee(this.days()),d=ee(this.hours()),e=ee(this.minutes()),f=ee(this.seconds()+this.milliseconds()/1e3),g=this.asSeconds();return g?(0>g?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}var Ac,Bc,Cc=a.momentProperties=[],Dc=!1,Ec={},Fc={},Gc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Hc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ic={},Jc={},Kc=/\d/,Lc=/\d\d/,Mc=/\d{3}/,Nc=/\d{4}/,Oc=/[+-]?\d{6}/,Pc=/\d\d?/,Qc=/\d{1,3}/,Rc=/\d{1,4}/,Sc=/[+-]?\d{1,6}/,Tc=/\d+/,Uc=/[+-]?\d+/,Vc=/Z|[+-]\d\d:?\d\d/gi,Wc=/[+-]?\d+(\.\d{1,3})?/,Xc=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Yc={},Zc={},$c=0,_c=1,ad=2,bd=3,cd=4,dd=5,ed=6;F("M",["MM",2],"Mo",function(){return this.month()+1}),F("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),F("MMMM",0,0,function(a){return this.localeData().months(this,a)}),x("month","M"),K("M",Pc),K("MM",Pc,Lc),K("MMM",Xc),K("MMMM",Xc),N(["M","MM"],function(a,b){b[_c]=o(a)-1}),N(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[_c]=e:c._pf.invalidMonth=a});var fd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),gd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),hd={};a.suppressDeprecationWarnings=!1;var id=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,jd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],kd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ld=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=Z("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),F(0,["YY",2],0,function(){return this.year()%100}),F(0,["YYYY",4],0,"year"),F(0,["YYYYY",5],0,"year"),F(0,["YYYYYY",6,!0],0,"year"),x("year","y"),K("Y",Uc),K("YY",Pc,Lc),K("YYYY",Rc,Nc),K("YYYYY",Sc,Oc),K("YYYYYY",Sc,Oc),N(["YYYY","YYYYY","YYYYYY"],$c),N("YY",function(b,c){c[$c]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return o(a)+(o(a)>68?1900:2e3)};var md=A("FullYear",!1);F("w",["ww",2],"wo","week"),F("W",["WW",2],"Wo","isoWeek"),x("week","w"),x("isoWeek","W"),K("w",Pc),K("ww",Pc,Lc),K("W",Pc),K("WW",Pc,Lc),O(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=o(a)});var nd={dow:0,doy:6};F("DDD",["DDDD",3],"DDDo","dayOfYear"),x("dayOfYear","DDD"),K("DDD",Qc),K("DDDD",Mc),N(["DDD","DDDD"],function(a,b,c){c._dayOfYear=o(a)}),a.ISO_8601=function(){};var od=Z("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=za.apply(null,arguments);return this>a?this:a}),pd=Z("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=za.apply(null,arguments);return a>this?this:a});Fa("Z",":"),Fa("ZZ",""),K("Z",Vc),K("ZZ",Vc),N(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ga(a)});var qd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var rd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,sd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ua.fn=Da.prototype;var td=Ya(1,"add"),ud=Ya(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var vd=Z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});F(0,["gg",2],0,function(){return this.weekYear()%100}),F(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xb("gggg","weekYear"),xb("ggggg","weekYear"),xb("GGGG","isoWeekYear"),xb("GGGGG","isoWeekYear"),x("weekYear","gg"),x("isoWeekYear","GG"),K("G",Uc),K("g",Uc),K("GG",Pc,Lc),K("gg",Pc,Lc),K("GGGG",Rc,Nc),K("gggg",Rc,Nc),K("GGGGG",Sc,Oc),K("ggggg",Sc,Oc),O(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=o(a)}),O(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),F("Q",0,0,"quarter"),x("quarter","Q"),K("Q",Kc),N("Q",function(a,b){b[_c]=3*(o(a)-1)}),F("D",["DD",2],"Do","date"),x("date","D"),K("D",Pc),K("DD",Pc,Lc),K("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),N(["D","DD"],ad),N("Do",function(a,b){b[ad]=o(a.match(Pc)[0],10)});var wd=A("Date",!0);F("d",0,"do","day"),F("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),F("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),F("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),F("e",0,0,"weekday"),F("E",0,0,"isoWeekday"),x("day","d"),x("weekday","e"),x("isoWeekday","E"),K("d",Pc),K("e",Pc),K("E",Pc),K("dd",Xc),K("ddd",Xc),K("dddd",Xc),O(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:c._pf.invalidWeekday=a}),O(["d","e","E"],function(a,b,c,d){b[d]=o(a)});var xd="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),yd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),zd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");F("H",["HH",2],0,"hour"),F("h",["hh",2],0,function(){return this.hours()%12||12}),Mb("a",!0),Mb("A",!1),x("hour","h"),K("a",Nb),K("A",Nb),K("H",Pc),K("h",Pc),K("HH",Pc,Lc),K("hh",Pc,Lc),N(["H","HH"],bd),N(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),N(["h","hh"],function(a,b,c){b[bd]=o(a),c._pf.bigHour=!0});var Ad=/[ap]\.?m?\.?/i,Bd=A("Hours",!0);F("m",["mm",2],0,"minute"),x("minute","m"),K("m",Pc),K("mm",Pc,Lc),N(["m","mm"],cd);var Cd=A("Minutes",!1);F("s",["ss",2],0,"second"),x("second","s"),K("s",Pc),K("ss",Pc,Lc),N(["s","ss"],dd);var Dd=A("Seconds",!1);F("S",0,0,function(){return~~(this.millisecond()/100)}),F(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Qb("SSS"),Qb("SSSS"),x("millisecond","ms"),K("S",Qc,Kc),K("SS",Qc,Lc),K("SSS",Qc,Mc),K("SSSS",Tc),N(["S","SS","SSS","SSSS"],function(a,b){b[ed]=o(1e3*("0."+a))});var Ed=A("Milliseconds",!1);F("z",0,0,"zoneAbbr"),F("zz",0,0,"zoneName");var Fd=m.prototype;Fd.add=td,Fd.calendar=$a,Fd.clone=_a,Fd.diff=fb,Fd.endOf=pb,Fd.format=jb,Fd.from=kb,Fd.fromNow=lb,Fd.get=D,Fd.invalidAt=wb,Fd.isAfter=ab,Fd.isBefore=bb,Fd.isBetween=cb,Fd.isSame=db,Fd.isValid=ub,Fd.lang=vd,Fd.locale=mb,Fd.localeData=nb,Fd.max=pd,Fd.min=od,Fd.parsingFlags=vb,Fd.set=D,Fd.startOf=ob,Fd.subtract=ud,Fd.toArray=tb,Fd.toDate=sb,Fd.toISOString=ib,Fd.toJSON=ib,Fd.toString=hb,Fd.unix=rb,Fd.valueOf=qb,Fd.year=md,Fd.isLeapYear=fa,Fd.weekYear=zb,Fd.isoWeekYear=Ab,Fd.quarter=Fd.quarters=Db,Fd.month=V,Fd.daysInMonth=W,Fd.week=Fd.weeks=ka,Fd.isoWeek=Fd.isoWeeks=la,Fd.weeksInYear=Cb,Fd.isoWeeksInYear=Bb,Fd.date=wd,Fd.day=Fd.days=Jb,Fd.weekday=Kb,Fd.isoWeekday=Lb,Fd.dayOfYear=na,Fd.hour=Fd.hours=Bd,Fd.minute=Fd.minutes=Cd,Fd.second=Fd.seconds=Dd,Fd.millisecond=Fd.milliseconds=Ed,Fd.utcOffset=Ja,Fd.utc=La,Fd.local=Ma,Fd.parseZone=Na,Fd.hasAlignedHourOffset=Oa,Fd.isDST=Pa,Fd.isDSTShifted=Qa,Fd.isLocal=Ra,Fd.isUtcOffset=Sa,Fd.isUtc=Ta,Fd.isUTC=Ta,Fd.zoneAbbr=Rb,Fd.zoneName=Sb,Fd.dates=Z("dates accessor is deprecated. Use date instead.",wd),Fd.months=Z("months accessor is deprecated. Use month instead",V),Fd.years=Z("years accessor is deprecated. Use year instead",md),Fd.zone=Z("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ka);var Gd=Fd,Hd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Id={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},Jd="Invalid date",Kd="%d",Ld=/\d{1,2}/,Md={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Nd=q.prototype;Nd._calendar=Hd,Nd.calendar=Vb,Nd._longDateFormat=Id,Nd.longDateFormat=Wb,Nd._invalidDate=Jd,Nd.invalidDate=Xb,Nd._ordinal=Kd,Nd.ordinal=Yb,Nd._ordinalParse=Ld,
Nd.preparse=Zb,Nd.postformat=Zb,Nd._relativeTime=Md,Nd.relativeTime=$b,Nd.pastFuture=_b,Nd.set=ac,Nd.months=R,Nd._months=fd,Nd.monthsShort=S,Nd._monthsShort=gd,Nd.monthsParse=T,Nd.week=ha,Nd._week=nd,Nd.firstDayOfYear=ja,Nd.firstDayOfWeek=ia,Nd.weekdays=Fb,Nd._weekdays=xd,Nd.weekdaysMin=Hb,Nd._weekdaysMin=zd,Nd.weekdaysShort=Gb,Nd._weekdaysShort=yd,Nd.weekdaysParse=Ib,Nd.isPM=Ob,Nd._meridiemParse=Ad,Nd.meridiem=Pb,u("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===o(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=Z("moment.lang is deprecated. Use moment.locale instead.",u),a.langData=Z("moment.langData is deprecated. Use moment.localeData instead.",w);var Od=Math.abs,Pd=rc("ms"),Qd=rc("s"),Rd=rc("m"),Sd=rc("h"),Td=rc("d"),Ud=rc("w"),Vd=rc("M"),Wd=rc("y"),Xd=tc("milliseconds"),Yd=tc("seconds"),Zd=tc("minutes"),$d=tc("hours"),_d=tc("days"),ae=tc("months"),be=tc("years"),ce=Math.round,de={s:45,m:45,h:22,d:26,M:11},ee=Math.abs,fe=Da.prototype;fe.abs=ic,fe.add=kc,fe.subtract=lc,fe.as=pc,fe.asMilliseconds=Pd,fe.asSeconds=Qd,fe.asMinutes=Rd,fe.asHours=Sd,fe.asDays=Td,fe.asWeeks=Ud,fe.asMonths=Vd,fe.asYears=Wd,fe.valueOf=qc,fe._bubble=mc,fe.get=sc,fe.milliseconds=Xd,fe.seconds=Yd,fe.minutes=Zd,fe.hours=$d,fe.days=_d,fe.weeks=uc,fe.months=ae,fe.years=be,fe.humanize=yc,fe.toISOString=zc,fe.toString=zc,fe.toJSON=zc,fe.locale=mb,fe.localeData=nb,fe.toIsoString=Z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",zc),fe.lang=vd,F("X",0,0,"unix"),F("x",0,0,"valueOf"),K("x",Uc),K("X",Wc),N("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),N("x",function(a,b,c){c._d=new Date(o(a))}),a.version="2.10.2",b(za),a.fn=Gd,a.min=Ba,a.max=Ca,a.utc=i,a.unix=Tb,a.months=dc,a.isDate=e,a.locale=u,a.invalid=k,a.duration=Ua,a.isMoment=n,a.weekdays=fc,a.parseZone=Ub,a.localeData=w,a.isDuration=Ea,a.monthsShort=ec,a.weekdaysMin=hc,a.defineLocale=v,a.weekdaysShort=gc,a.normalizeUnits=y,a.relativeTimeThreshold=xc;var ge=a;return ge});
  
/*
_____  ___  _____ _____    _____ __  ____ __ __ _____ _____    _____ __ __  __ __   __ __  __ 
||  ) ||=||  ||   ||==     ||_// || ((    ||<<  ||==  ||_//    ||==  || ||\\|| ||  ((  ||==|| 
||_// || ||  ||   ||___    ||    ||  \\__ || \\ ||___ || \\    ||    || || \|| || \_)) ||  ||
*/

/*
_____ __ __    _____    __ __ _____ __     _____   ___  _____      __ _____  ___  _____ _____ 
||==  || ||    ||==     || || ||_// ||    ((   )) ||=|| ||  )     ((   ||   ||=|| ||_//  ||   
||    || ||__| ||___    \\_// ||    ||__|  \\_//  || || ||_//    \_))  ||   || || || \\  || 
*/	
directiveLibraryModule.directive('fileUpLoader',['$uploader',"$rootScope", "$mdToast", function($uploader,$rootScope, $mdToast) {
	  return {
		restrict: 'E',
		template: "<div class='content' ng-init='showUploadButton=false;showDeleteButton=false;showUploadTable=false;'><div id='drop-files' ondragover='return false' layout='column' layout-align='space-around center'><div id='uploaded-holder' flex ><div id='dropped-files' ng-show='showUploadTable'><table id='Tabulate' ></table></div></div><div flex ><md-button type='button' class='md-raised' id='uploadbtn' ng-show='showUploadButton' class='md-raised' style='color:#1976D2;margin-top: 5px;'><md-icon md-svg-src='img/directive_library/ic_cloud_upload_24px.svg'></md-icon></md-button><md-button class='md-raised' id='deletebtn' ng-show='showDeleteButton' class='md-raised' style='color:rgb(244,67,54);margin-left:30px;'><md-icon md-svg-src='img/directive_library/ic_delete_24px.svg'></md-icon></md-button></div><div flex><md-icon md-svg-src='img/directive_library/ic_cloud_upload_24px.svg'></md-icon><text style='font-size:12px;margin-left:10px'>{{label}}<text></div></div></div>",
		scope:{
			osNamespace:'@',
			osClass:'@',
			label:'@',
      customeId : '='
		},
		link: function(scope,element){

			// Makes sure the dataTransfer information is sent when we
			// Drop the item in the drop box.
			jQuery.event.props.push('dataTransfer');
			

			// file/s on a single drag and drop
			var files;
			
			// total of all the files dragged and dropped
			var filesArray = [];
			
			// Bind the drop event to the dropzone.
			element.find("#drop-files").bind('drop', function(e) {
					
				// Stop the default action, which is to redirect the page
				// To the dropped file
				
				  files = e.dataTransfer.files || e.dataTransfer.files;
				
				  for(indexx = 0; indexx < files.length; indexx++) {
						filesArray.push(files[indexx]);
						console.log(filesArray);
					}
				

			 var newHtml = "<tr class='md-table-headers-row'><th class='md-table-header' style='Padding:0px 16px 10px 0'>Name</th><th class='md-table-header' style='Padding:0px 16px 10px 0'>Type</th><th class='md-table-header' style='Padding:0px 16px 10px 0'>Size</th></tr>";

			  for (var i = 0; i < filesArray.length; i++) {
					 var tableRow = "<tr><td class='upload-table' style='float:left'>" + filesArray[i].name + "</td><td class='upload-table'>" +
					 filesArray[i].type+ "</td><td class='upload-table'>" +
					 filesArray[i].size +" bytes"+ "</td></tr>";
					 newHtml += tableRow;
				}
				
				element.find("#Tabulate").html(newHtml);
				 
				 $rootScope.$apply(function(){
					scope.showUploadButton = true;
					scope.showDeleteButton = true;
					scope.showUploadTable = true;
				 })
	
			});
			
			function restartFiles() {
				
				// We need to remove all the images and li elements as
				// appropriate. We'll also make the upload button disappear
				
				
				
				 $rootScope.$apply(function(){
					scope.showUploadButton = false;
					scope.showDeleteButton = false;
					scope.showUploadTable = false;
				 })
			
				// And finally, empty the array
				filesArray = [];
				
				return false;
			}
			
			element.find('#uploadbtn').click(function(){
						
				for	(indexx = 0; indexx < filesArray.length; indexx++) {
							console.log(filesArray[indexx].name);
							
							$uploader.upload(scope.osNamespace, scope.osClass, filesArray[indexx],scope.customeId);
							$uploader.onSuccess(function(e,data){

								var toast = $mdToast.simple()
									  .content('Successfully uploaded!')
									  .action('OK')
									  .highlightAction(false)
									  .position("bottom right");
								$mdToast.show(toast).then(function() {
									//whatever
								});
							});

							$uploader.onError(function(e,data){
							
								var toast = $mdToast.simple()
										  .content('There was an error, please upload!')
										  .action('OK')
										  .highlightAction(false)
										  .position("bottom right");
									$mdToast.show(toast).then(function() {
										//whatever
									});
							});
							
					}
				
				
			});
		
			
			// Just some styling for the drop file container.
			element.find('#drop-files').bind('dragenter', function() {
				$(this).css({'box-shadow' : 'inset 0px 0px 20px rgba(0, 0, 0, 0.1)', 'border' : '2px dashed rgb(255,64,129)'});
				return false;
			});
			
			element.find('#drop-files').bind('drop', function() {
				$(this).css({'box-shadow' : 'none', 'border' : '2px dashed rgba(0,0,0,0.2)'});
				return false;
			});
			
		
			element.find('#deletebtn').click(restartFiles);
			
		
		} //end of link
	  };
	}]);
/*
_____ __ __    _____    __ __ _____ __     _____   ___  _____    _____ __ __  __ __   __ __  __ 
||==  || ||    ||==     || || ||_// ||    ((   )) ||=|| ||  )    ||==  || ||\\|| ||  ((  ||==|| 
||    || ||__| ||___    \\_// ||    ||__|  \\_//  || || ||_//    ||    || || \|| || \_)) ||  || 
*/


/*
_____  ___  _____ __ __  __  ____     ____   ___  _____      __ _____  ___  _____ _____ 
||_// ||=||  ||   || ||\\|| (( ___    ||=)  ||=|| ||_//     ((   ||   ||=|| ||_//  ||   
|| \\ || ||  ||   || || \||  \\_||    ||_)) || || || \\    \_))  ||   || || || \\  || 
*/
directiveLibraryModule.directive('starRating', function () {
		return {
			scope: {
				rating: '=',
				maxRating: '@',
				readOnly: '@',
				click: "&",
				mouseHover: "&",
				mouseLeave: "&"
			},
			template:
				"<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer; font-size:1.5em' ng-repeat='idx in maxRatings track by $index'> \
						<img ng-src='{{((hoverValue + _rating) <= $index) && \"img/directive_library/star-empty-lg.png\" || \"img/directive_library/star-fill-lg.png\"}}' \
						ng-Click='isolatedClick($index + 1)' \
						ng-mouseenter='isolatedMouseHover($index + 1)' \
						ng-mouseleave='isolatedMouseLeave($index + 1)'></img> \
				</div>",
			compile: function (element, attrs) {
				if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
					attrs.maxRating = '5';
				};
			},
			controller: function ($scope) {
				$scope.maxRatings = [];

				for (var i = 1; i <= $scope.maxRating; i++) {
					$scope.maxRatings.push({});
				};

				$scope._rating = $scope.rating;

				$scope.isolatedClick = function (param) {
					if ($scope.readOnly == 'true') return;

					$scope.rating = $scope._rating = param;
					$scope.hoverValue = 0;
					$scope.click({ param: param });
				};

				$scope.isolatedMouseHover = function (param) {
					if ($scope.readOnly == 'true') return;

					$scope._rating = 0;
					$scope.hoverValue = param;
					$scope.mouseHover({ param: param });
				};

				$scope.isolatedMouseLeave = function (param) {
					if ($scope.readOnly == 'true') return;

					$scope._rating = $scope.rating;
					$scope.hoverValue = 0;
					$scope.mouseLeave({ param: param });
				};
			}
		};
	});

/*
_____  ___  _____ __ __  __  ____     ____   ___  _____    _____ __ __  __ __   __ __  __ 
||_// ||=||  ||   || ||\\|| (( ___    ||=)  ||=|| ||_//    ||==  || ||\\|| ||  ((  ||==|| 
|| \\ || ||  ||   || || \||  \\_||    ||_)) || || || \\    ||    || || \|| || \_)) ||  ||
*/	  

	directiveLibraryModule.directive('mdBackgroundBanner', function() {
	  return {
		restrict: 'E',
		template: "<div id='backgound_banner' style='margin:0px; background:{{color}}; position:fixed; height:{{height}}; width:100%; z-index:-2; box-shadow:0 3px 1px -2px rgba(0,0,0,.14),0 2px 2px 0 rgba(0,0,0,.098),0 1px 5px 0 rgba(0,0,0,.084);'></div>",
		scope:{
			color:'@',
			height:'@'
		},
		link: function(scope,element){

			 if(!scope.color)
			 {
				scope.color = "rgb(98, 203, 143)";
			 }
			 if(!scope.height)
			 {
				scope.height = "230px";
			 }
			/*
			//parallax scroll effect
			function parallax(){
			 var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
			 var backgound_banner = document.getElementById('backgound_banner');
			 prlx_lyr_1.style.top = -(window.pageYOffset / 10)+'px';
			 backgound_banner.style.top = -(window.pageYOffset / 25)+'px';
			}
			window.addEventListener("scroll", parallax, false);
			*/
		} //end of link
	  };
	});
	 
   directiveLibraryModule.directive('sectionTitle', function() {
    return {
    restrict: 'E',
    template: "<div id='newdiv' layout='row' style='width: 208px; margin-top:10px; margin-left:12px;' flex layout-sm='row'><div flex='25'>  <img src={{catogeryLetter}} style='margin-top:22px;border-radius:20px'/>  </div> <div flex style='margin-top:27px;'>  <label style='font-weight:700'>{{title}}</label> </div></div>",
    scope:{
      title:'@',
      catogeryLetter:'='
    },
    link: function(scope,element){

      if (scope.title == "" || scope.title == null) {
         
        element.find('#newdiv').attr('hide-sm', '');
        //console.log("one of the pic is empty");
      }else{
        scope.catogeryLetter = "img/material alperbert/avatar_tile_"+scope.title.charAt(0).toLowerCase()+"_28.png";
         
         element.find('#newdiv').attr('new', '');
      }

      
      
      
    } //end of link
    };
  });
	
})(window.angular);