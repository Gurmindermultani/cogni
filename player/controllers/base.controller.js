'use strict';
appControllers.controller("baseController",['$timeout','$scope','$rootScope','$controller','$http','sharedService',function($timeout,$scope,$rootScope,$controller,$http,sharedService){

		$scope.effectAudioFile=[];
		$scope.audioObject;
		$scope.showWrapper=false;
		$scope.innerAudioPath ="";

		$scope.getModel=function(index){
			return sharedService.model[index].data
		}

		$scope.$on('playEffect',function(obj,param){
			try{
				document.getElementById('effect-audio-player-'+param).currentTime=0;
					document.getElementById('effect-audio-player-'+param).pause();
				document.getElementById('effect-audio-player-'+param).play();


				var vid = document.getElementById('effect-audio-player-'+param)
				vid.onended  = function() {
						document.getElementById('effect-audio-player-'+param).pause();
						document.getElementById('effect-audio-player-'+param).currentTime=0;
				};

			}catch(e){

			}

		})

		$scope.$on('setEffectAudio',function(obj,audioObject){
			$scope.innerAudioPath=inner+audioObject.audioPath;
			$scope.audioObject=audioObject;
			for(var i=0;i<audioObject.effects.length;i++){
				$scope.effectAudioFile.push($scope.innerAudioPath+audioObject.effects[i].audio);
			}

			$timeout(function(){
				audioLoader();
			},10);
		})
		var loaded=0;
		function audioLoader(){
					for(var i=0;i<$scope.effectAudioFile.length;i++){
						document.getElementById('effect-audio-player-'+i).src = $scope.innerAudioPath+$scope.audioObject.effects[i].audio;
						document.getElementById('effect-audio-player-'+i).load();
					}
					sharedService.broadcastItem('audioComplete');
		}

		$scope.$on('initAudio',function(object,Obj){
				for(var i=0;i<Obj.audioArray.length;i++){
						document.getElementById('effect-audio-player-'+Obj.audioArray[i]).play();
						document.getElementById('effect-audio-player-'+Obj.audioArray[i]).pause();
				}
		});

		function loadedAudio() {
	    loaded++;
	    if (loaded == 	$scope.audioObject.effects.length){
				$timeout(function(){
					sharedService.broadcastItem('audioComplete');
				},500);
	    }else{
				audioLoader(loaded)
			}
		}
		$scope.$on('audioComplete',function(){
				$("#preloader-element").hide();
				$scope.showWrapper=true;
		});

		$scope.playerImagePath = folder + "assets/images/";
		$scope.imagePreloadArray = ["how-to-play_n.png", "how-to-play_o.png", "how-to-play_d.png", "check-n.png", "check-o.png", "check-d.png", "finish_btn_up.png", "finish_btn_over.png", "finish_btn_down.png", "play_n.png", "play_o.png", "play_d.png"];
		// Combine audio player implementation
		$scope.audioArray=[];
		$scope.playerArray=[];
		for(var i=0;i<15;i++){
			$scope.playerArray.push(i);
		}
		var audioCounter=0;
		// var hundredSoundPath=folder+'assets/audio/100/';
		// var tenSoundPath=folder+'assets/audio/10/';
		// var singlerSoundPath=folder+'assets/audio/0/';
		var audioDomLoaded=0;
		var audioLoadCount=0;
		var increment=-1;
		var audioObject=null;
		//stop the audio which is already playing
		$scope.$on('stopAudioObject',function(){

			if(audioObject!=null){
				audioObject.pause();
			}
		})
		//Play the audio on cliking on button available in resources
		var numberAudioPath=""
		$scope.playSound=function(array,gender){
			// hundredSoundPath=folder+'assets/audio/'+gender+'/100/';
			// tenSoundPath=folder+'assets/audio/'+gender+'/10/';
			// singlerSoundPath=folder+'assets/audio/'+gender+'/0/';

			console.log(array);

			numberAudioPath=folder+'assets/audio/'+gender+"/"


			$scope.audioArray=[];
			for(var i=0;i<array.length;i++){
				var audioStr=String(array[i]).indexOf("mp3");
				if(audioStr!=-1){
					$scope.audioArray.push(String(array[i]));
				}else{
					if(String(array[i])=="000" || String(array[i])=="00" ||  String(array[i])=="0"){
						$scope.audioArray.push(numberAudioPath+'_0.mp3')
					}else{
						if(String(array[i])!=""){
							var _n=Math.abs(Number(String(array[i])));

							$scope.audioArray.push(numberAudioPath+"_"+String(_n)+".mp3");
						}
					}
				}

				// console.log(	$scope.audioArray);
			}
			loadAudio()
			sharedService.isPlaying=true;

		}


		//Play the audio
		$scope.$on('createAudioElement',function(fn,object){
			sharedService.broadcastItem('triggerAudioPlayer');
			audioDomLoaded=0;
			audioLoadCount=0;
			increment=-1;
			$scope.audioArray=[];

			$timeout(function(){
				$scope.playSound(object.array,object.gender)
			},1)
		})
		var playerObject;
		//Trigger the audio player for first time  for Devices
		$scope.$on('triggerAudioPlayer',function(){
				for(var i=0;i<15;i++){
							window["Object"+i] = new Object();
							window["Object"+i] =	document.getElementById('aud_player_'+i);
							window["Object"+i].pause();
							window["Object"+i].src =folder+'assets/audio/audio.mp3';
							window["Object"+i].load();
				}

		})
		//Parse the digits
		$scope.parseDigits=function(num){
			var digits = num.toString().split('');
			if(digits.length==3){
				readHundreds(num);
			}else if(digits.length==2){
				readTens(num);
			}else if(digits.length==1){
				readsSingle(num)
			}
		}
		//load the audio
		function loadAudio(){
			for(var i=0;i<$scope.audioArray.length;i++){
				document.getElementById('aud_player_'+i).src=$scope.audioArray[i];
			}
			audioLoadingCompleted()
		}
		//event will be triggerred once the audio is completed
		function onAudioProgressEvent(){
			audioObject.removeEventListener("ended", onAudioProgressEvent);
			if(increment<$scope.audioArray.length-1){
				audioLoadingCompleted();

			}else{
				sharedService.broadcastItem('triggerAudioPlayer');
				sharedService.broadcastItem('audioCompleted')
				sharedService.isPlaying=false;
			}

		}
		//play the audio
		function audioLoadingCompleted(){
			increment++
			audioObject=null;
			//$('#aud_player_'+increment).css("border","3px solid black")
			audioObject=document.getElementById('aud_player_'+increment);
			audioObject.play();
			audioObject.addEventListener("ended", onAudioProgressEvent);

		}
		//read hundreds
		function readHundreds(num){
			// var digits = num.toString().split('');
			// for(var i=0;i<digits.length;i++){
			// 	if(i==0){
			// 		if(digits[i]!=0){
			// 			$scope.audioArray.push(hundredSoundPath+'_'+digits[i]+'00.mp3')
			// 		}
			// 	}else if(i==1){
			// 			var newStr=digits[1]+digits[2]
			// 			readTens(newStr);
			// 			break;
			// 		if(digits[i]!=0){
			// 			$scope.audioArray.push(tenSoundPath+'_'+digits[i]+'0.mp3')
			// 		}
			// 	}else if(i==2){
			// 		if(digits[i]!=0){
			// 			$scope.audioArray.push(singlerSoundPath+'_'+digits[i]+'.mp3')
			// 		}
			// 	}
			// }
		}
		//parse tens
		function readTens(num){
			// var digits = num.toString().split('');
			// for(var i=0;i<digits.length;i++){
			// 	if(digits[i]!=0){
			// 		if(num<20 && num>10){
			// 				$scope.audioArray.push(singlerSoundPath+'_'+num+'.mp3')
			// 				break;
			// 		}else{
			// 			if(i==0){
			// 				$scope.audioArray.push(tenSoundPath+'_'+digits[i]+'0.mp3')
			// 			}else{
			// 				$scope.audioArray.push(singlerSoundPath+'_'+digits[i]+'.mp3')
			// 			}
			// 		}
			// 	}
			// }
		}
		//read single
		function readsSingle(num){
			// var digits = num.toString().split('');
			// for(var i=0;i<digits.length;i++){
			// 	if(digits[i]!=0){
			// 		$scope.audioArray.push(singlerSoundPath+'_'+digits[i]+'.mp3')
			// 	}
			// }
		}

}]);
