'use strict';
appControllers.controller("acitivityController",['$http','$scope','sharedService','$controller','$rootScope','$timeout','sharedService',function($http,$scope,sharedService,$controller,$rootScope,$timeout){
		var counter=0;
		$rootScope.activityLoaded=true;
		$scope.preloading = false;
		$scope.$on('openActivity',function(){
				var inr=0
				$scope.totalPages=[]
				var configurePath= inner+'activity/data.json';
				sharedService.load(configurePath,function(response){
					sharedService.model=response.data;
					$("title").text(sharedService.model[0].data.activity_title);

					sharedService.broadcastItem('setEffectAudio',sharedService.model[0].data)
					$scope.totalPages.push({"fileName":inner+"index.html"});

				});
			})
			 $timeout(function(){
			  $scope.preloading = true;
			 },100)
}]);
