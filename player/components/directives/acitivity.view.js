'use strict'
appDirectives.directive('acitivityView',['$rootScope','$compile','$http','sharedService','$timeout',function($rootScope,$compile,$http,sharedService,$timeout){
	return{
		restrict : 'A',
		replace:false,
		templateUrl:folder+'partials/acitivity.container.html',
		controller : function($scope) {
		},
		link: function ($scope, element, attrs,action) {},
	}
}]);

app.directive('turnYourScreen', function($timeout) {
	return function(scope, element) {
		var el, device;
		el = element[0];
		$(el).css({
			"display":"none",
			"position":"absolute",
			"width": "100%",
			"height": "100%",
			"top": 0,
			"left": 0,
			"z-index": 9999999999,
			"background-color": "white",
			"background-image": "url('" + folder + "assets/images/turn-your-screen.jpg')",
			"background-repeat": "no-repeat",
			"background-position": "center"
		});
		device = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1) ? true : false;
		$(window).bind('orientationchange', function(event) {
			checkOrientationChange();
		});
		function checkOrientationChange() {
			$timeout(function () {
				if(window.innerHeight > window.innerWidth) {
					$(el).css("display", "block");
				} else {
					$(el).css("display", "none");
				}
			}, 500);
		}
		$timeout(function() {
			if (device) {
				checkOrientationChange();
			}
		}, 200);
	}
});

app.directive('pearsonLogo', function($timeout) {
	return function(scope, element) {
		var el, device;
		el = element[0];
		$(el).css({
			"position":"absolute",
			"top": 3,
			"left": 10,
			"width": 80,
			"height": 24,
			"background-image": "url('" + folder + "assets/images/pearson-logo.png')",
			"background-repeat": "no-repeat",
			"background-position": "center"
		});
		//device = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1) ? true : false;
	}
});
