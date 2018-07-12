'use strict';
appControllers.controller("launchController",['$http','$scope','sharedService','$controller','$rootScope','$timeout','sharedService',function($http,$scope,sharedService,$controller,$rootScope,$timeout){
	var counter=0;
	$scope.showPreloader=true;
	$scope.flag=false;
		$scope.flag=true;
		$scope.checkActivityLoaded=function(){
			$timeout(function(){
				if($rootScope.activityLoaded){
						sharedService.broadcastItem('openActivity');
				}else{
					$scope.checkActivityLoaded()
				}
			},100);
		}
		$scope.checkActivityLoaded();
		$scope.$on('showActivity',function(){
		//	$scope.flag=!$scope.flag;
		})
}]);
