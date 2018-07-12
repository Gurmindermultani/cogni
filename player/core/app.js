'use strict';
var app = angular.module('App', ['App.controllers','App.services','App.directives','App.rounters','ngSanitize']);
var appControllers = angular.module('App.controllers', []);
var appServices = angular.module('App.services', []);
var appDirectives=angular.module('App.directives', []);
var appRouters=angular.module('App.rounters', []);

app.config(['$controllerProvider', '$compileProvider',
    function($controllerProvider, $compileProvider) {
        app.registerCtrl = $controllerProvider.register;
		    app.registerDir = $compileProvider;
    }
]);

app.run(['$rootScope',function($rootScope){
	$rootScope.init = function() {
	}
}])
