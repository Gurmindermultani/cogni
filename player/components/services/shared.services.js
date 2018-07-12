'use strict';
appServices.factory("sharedService",['$rootScope','$http','$location',function($rootScope,$http,$location){
	var services={};
	services.DEVICE_TYPE=""
	services.BROWSER=""
	services.isPlaying=true;

	services.checkDevice=function(){
		var isChrome = !!window.chrome && !!window.chrome.webstore
		if(isChrome){services.BROWSER="chrome"}
		if((((String(navigator.userAgent.match(/Android/i))==="Android") || (String(navigator.userAgent.match(/iPhone/i))==="iPhone")) || (String(navigator.userAgent.match(/Mobile/i))==="Mobile")) || (String(navigator.userAgent.match(/iPad/i)) === "iPad")){
			services.DEVICE_TYPE='mobile'
			services.OS=navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
			var _o=navigator.userAgent;
			if(_o.indexOf('Nexus')==-1){
				services.DEVICE_NAME="tablet"
			}else{
				services.DEVICE_NAME="nexus"
			}
		}else{
			services.DEVICE_TYPE ='desktop'
			var version = services.detectIE();
			if (version === false) {
			} else if (version >= 12) {
				services.BROWSER ='IE'
			} else {
				services.BROWSER ='IE'
			}
			var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
			if(isSafari){
				services.BROWSER ='safari';

			}
		}

	}
	services.detectIE=function(){
	  var ua = window.navigator.userAgent;
	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
	     return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }

	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
	    var rv = ua.indexOf('rv:');
	    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }
	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
	    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	  }
	  return false;
	}
	services.checkDevice();
	var _c,_s,_f,_n;
	var _t=[];
	services.checkIfconfigured=function(){
		/*
		_c=$location.absUrl().split("?")[1]
		if(_c==undefined || _c == ""){
			services.none_configure()
		}else {
			_t=_c.split("&");
			_f=true;

			for(var i=0;i<_t.length;i++){
				_c=String(_t[i]).trim();
				_s=_c.split("&")[0].split("%20").join("");
				if(_s.indexOf('activity=')!=-1){
					_f=false;
					_n=_s;
					break;
				}
			}
			if(_f){
				services.none_configure()
			}else{
				_n=_n.split("activity=").join("");
				services.configure(_n)
			}
		}
		*/
	}
	services.configure=function(param){
		services.configured=param
		services.setConfigured=services.configured;
	}

	services.broadcastItem = function(fn,param) {
		$rootScope.$broadcast(fn,param);
	}

	services.set=function(config){
		services.config=config;
	}
	services.load=function(file,callback){
		$http.get(file).then(function(response){
			callback(response);
		})
		.catch(function(response){
			$log("Error :"+response.statusText)
		})
	}

	services.checkIfconfigured()
	return services;
}])
