'use strict';
app.controller("sl026ChallengeController",['$timeout','$scope', '$rootScope', '$http', '$controller', 'sharedService', function( $timeout, $scope, $controller, $rootScope, $http, sharedService) {
	$scope.currentPage = "home";
	$scope.playDown = false;
	$scope.prevDisabled = true;
	$scope.audioDown = false;
	$scope.checkDown = false;
	$scope.droppedOut = false;
	$scope.audioPath = "";
	$scope.imagePath = "";
	$scope.enableAll = false;
	$scope.narrationDispText = "Voice: on";
	$scope.effectDispText = "Sound: on";
	$scope.enalbeNarrationBut = true;

	$scope.imagePreloadArrayInner = ["next_up.png", "next_over.png", "next_hit.png"];

	$scope.folder = window.folder;
	$scope.inner = window.inner;
	


	var smallDevice = false;
	var count = 0;
	var narationAudio;
	var narationAudioObj;
	var isNarationMuted = false;
	var effectAudio;
	var effectAudioObj;
	var justDropHappen = false;
	var levelDone = false;
	var rightCount = 0;
	var isEffectMuted  = false;
	var audioElement;

	var shifted;
	var keyPressed;
	$(document).on('keyup keydown', function(e) {
		shifted = e.shiftKey;
		keyPressed = e.keyCode;
		$timeout(function(){
			keyPressed = "";
		}, 100)
	});
	$(".sound-btn").attr({"aria-pressed": "false"});
	$(".voice-btn").attr({"aria-pressed": "false"});
	// START - Loading Global Images
	if(!$scope.hoverDevice) {
		var howBtnBackground = {
			out: folder + "assets/images/how-to-play_n.png",
			hover: folder + "assets/images/how-to-play_o.png",
			down: folder + "assets/images/how-to-play_d.png"
		}
		var howBtnEnabledBackground = {
			out: folder + "assets/images/how-to-play_n.png"
		}
		$scope.howBtnBackground = howBtnBackground;
		$scope.playBtnBackground = {
			out: folder + "assets/images/play_n.png",
			hover: folder + "assets/images/play_o.png",
			down: folder + "assets/images/play_d.png"
		};
		$scope.audioBtnBackground = {
			out: folder + "assets/images/vo_n.png",
			hover: folder + "assets/images/vo_o.png",
			down: folder + "assets/images/vo_d.png"
		};
		$scope.finishBtnBackground = {
			out: folder + "assets/images/finish_btn_up.png",
			hover: folder + "assets/images/finish_btn_over.png",
			down: folder + "assets/images/finish_btn_down.png"
		};
		$scope.checkBtnBackground = {
			out: folder + "assets/images/check-n.png",
			hover: folder + "assets/images/check-o.png",
			down: folder + "assets/images/check-d.png"
		};
		var audioContainerBackground = {
			out: folder + "assets/images/vot_bg.png",
			hover: folder + "assets/images/vot_bg.png",
			down: folder + "assets/images/vot_bg.png"
		}
		$scope.audioContainerBackground = audioContainerBackground;
	} else {
		var howBtnBackground = {
			out: folder + "assets/images/how-to-play_n.png",
		}
		var howBtnEnabledBackground = {
			out: folder + "assets/images/how-to-play_n.png"
		}
		$scope.howBtnBackground = howBtnBackground;
		$scope.playBtnBackground = {
			out: folder + "assets/images/play_n.png",
		};
		$scope.audioBtnBackground = {
			out: folder + "assets/images/vo_n.png",
		};
		$scope.finishBtnBackground = {
			out: folder + "assets/images/finish_btn_up.png",
		};
		$scope.checkBtnBackground = {
			out: folder + "assets/images/check-n.png",
		};
		var audioContainerBackground = {
			out: folder + "assets/images/vot_bg.png",
		}
		$scope.audioContainerBackground = audioContainerBackground;
	}

	var audioContainerOrangeBackground = {
		out: folder + "assets/images/feedback_warning.png",
		hover: folder + "assets/images/feedback_warning.png",
		down: folder + "assets/images/feedback_warning.png"

	}
	$scope.audioContainerOrangeBackground = audioContainerOrangeBackground;

	$scope.loading = folder + "assets/images/spinner48px.gif"
	// END - Loading Global Images
	$scope.helpPath = inner + "content/partials/help.html";

	if($(document).height() < 600) {smallDevice = true;}

	$scope.$watch('model',function(model){
		$scope.init();
	});

	var tempArray={};
	$scope.init = function () {
		tempArray = JSON.parse(JSON.stringify($scope.model));
		$scope.audioPath = inner + tempArray.audioPath;
		$scope.imagePath = inner + tempArray.imagePath;

		$scope.pageTitle = tempArray.homepageTitle;
		$scope.audioPreload();
		rightCount = 0;
		$scope.threeDshapes = $scope.model.threeDshapes;
		$scope.blueShapes = $scope.model.blueShapes;
		$scope.effectSingleUse();
		$scope.greenShapes = $scope.model.greenShapes;
		//	$scope.$apply();
		$("title").text("Abacus - " + $scope.pageTitle);

	}

	var audios = ["NarSound1.mp3"];
	var curAudioLoading = 0;
	$scope.audioPreload = function () {
		if(curAudioLoading<audios.length) {
			sharedService.load($scope.audioPath+audios[curAudioLoading], $scope.audioPreloadCallback);
			curAudioLoading++;
		}
	}

	$scope.setFirstDrop = function (b) {
		$scope.isFirstDrop = b;
	}

	$scope.audioPreloadCallback = function (res) {
		$scope.audioPreload();
	}

	$scope.chanceCalculation = function (getchanceCount){
		for(var i=0;i<getchanceCount;i++){
			$scope.chancesArr.push(i);
			$("#star_"+i).css("visibility","visible");
		}
	}

	$scope.showClosealert = function(e) {
		$(".page").attr("aria-hidden", true);
		$(".dis-ass").attr("aria-hidden", true);
		$scope.showingclose = true;
		$(".dis-ass").attr("tabindex",-1);
		$(".close-clicked").show()
		if(keyPressed) {
			$timeout(function(){
				// $("#closebox").focus();
				$(".no_btn").focus();
			},25);
		}
		setTimeout(function () {
			$(".close-box").attr("tabindex","-1")
		},50)
	}

	$scope.exitBlur = function(e){
		if(!shifted) {
			// $(".close-box").focus();
			$(".no_btn").focus();
		}
	}

$scope.closePage = function(e) {
	setTimeout(function () {
		$(".yes_btn").blur();
		var returnToParameter = returnTo || "";
		if(returnToParameter) {
			var returnToUrl = decodeURIComponent(returnToParameter);
			top.window.location.replace(returnToUrl);
		}else{
			top.close();
		}
	}, 10);
}

$scope.parentexitBlur = function(e){
	if(shifted) {
		$(".yes_btn").focus();
	}
}
var mouseClicked=true;
$scope.getMouseDown = function(){
	mouseClicked=false;
	$(".close-box").css("outline","none")
}
$scope.hideClosealert = function(event){
	$(".page").attr("aria-hidden", false);
	$(".dis-ass").attr("aria-hidden", false);
	$timeout(function(){
		$scope.showingclose = false;
		//$(".close-clicked").hide()
	},25);
	if(mouseClicked){
		$(".close_button").focus();
	}
	mouseClicked=true;
	$(".dis-ass").attr("tabindex",0);
	setTimeout(function () {
		$(".close-box").attr("tabindex","-1")
	},50)
}

//Gurminder : development

$scope.hideAllShapes = false;

$scope.totalChances = 3;
$scope.currentChances = 3;
$scope.allDropped = [];
$scope.shapesPlayed = 0;

$scope.totalShapesPlayed = 0;

$scope.firstSelected = false;
$scope.enableSelection = false;
$scope.playAnimationBool = false;

$scope.playAnimation = function(){
	screenReader("Play animation.");

	screenReader($scope.threeDshapes[$scope.selectedShape].playText);
	$scope.playAnimationBool = true;
	$scope.prevDisabled = false;
	$("#prev").attr("disabled", false);
	$("#play").hide();
	$("#pause").show();
	$scope.gifImageUrl = $scope.inner + $scope.model.imagePath + 'help_movie_' + $scope.selectedShape + '.gif' + '?' + new Date().getTime();
}
$scope.pauseAnimation = function(){
	$scope.playAnimationBool = false;
	screenReader("Pause animation.");

	$scope.prevDisabled = true;
	$("#prev").attr("disabled", false);
	$("#play").show();
	$("#pause").hide();
}

$scope.previousAnimation = function(){
	screenReader("Rewind animation.");
	screenReader($scope.threeDshapes[$scope.selectedShape].playText);

	$scope.playAnimationBool = true;
	$scope.prevDisabled = false;
	$("#prev").attr("disabled", false);
	$("#play").hide();
	$("#pause").show();
	$scope.gifImageUrl = $scope.inner + $scope.model.imagePath + 'help_movie_' + $scope.selectedShape + '.gif' + '?' + new Date().getTime();
}

$scope.selectShape = function(shape){
	if(!$scope.enableSelection){
		return;
	}
	if($scope.threeDshapes[shape].status === "inactive"){
		screenReader("This " + shape + " is not selectable.");
		return;
	}
	$scope.changeEffect(0);

	if($scope.threeDshapes[shape].status === "selected"){
		$scope.threeDshapes[shape].status = "normal";
		$scope.showNext = false;
		$(".next-btn").hide();
		if($scope.shapesPlayed >= 2){
			$scope.finishbtn =true;
			$(".finish-btn").show();
		}
		screenReader("This " + shape + " is deselected.");
		$scope.currentNarrationId = 0;
		$scope.changeNarrationSrc();
		if($scope.shapesPlayed > 0){
			$scope.currentNarrationId = 21;
			$scope.changeNarrationSrc(21);
		}
		return;
	}
	//change status
	for(var shapeName in $scope.threeDshapes){
		if($scope.threeDshapes[shapeName].status !== "inactive")
			$scope.threeDshapes[shapeName].status = "normal";
	}
	$scope.threeDshapes[shape].status = "selected";
	screenReader("This " + shape + " is selected.");
	$scope.currentNarrationId = 1;
	$scope.changeNarrationSrc();
	$scope.selectedShape = shape;
	$scope.currentNarrationId = 1;
	$scope.changeNarrationSrc(1);
	if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
		$scope.playNaration();
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
	}
	$scope.showNext = true;
	$(".next-btn").show();
	$scope.finishbtn =false;
	$(".finish-btn").hide();
	
}

$scope.nextClicked = function(){
	screenReader("Next Clicked.");
	$scope.changeEffect(0);
	$scope.stopNaration();
	$(".sound-btn").focus();
	
	if($scope.showDemo){
		$scope.showDemo = false;
		$scope.currentChances = 3;
		$scope.hideAllShapes = false;
		$(".next-btn").hide();
		$scope.hideCheck();
		$scope.threeDshapes[$scope.selectedShape].status = "inactive";
		$scope.currentNarrationId = 21;
		$scope.changeNarrationSrc(21);
		if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
			$scope.playNaration();
			$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
		}
		$scope.playAnimationBool = false;

		//$scope.$apply();
		if($scope.shapesPlayed >= 2){
			$scope.finishbtn =true;
			$(".finish-btn").show();
		}
		return;
	}
	if($scope.currentChances === 0){
		//show how its done
		$scope.totalShapesPlayed += 1;
		$scope.currentNarrationId = 10;
		$scope.changeNarrationSrc(10);
		if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
			$scope.playNaration();
			$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
		}
		$scope.showDemo = true;
		$scope.shapesPlayed = $scope.shapesPlayed + 1;
		screenReader($scope.threeDshapes[$scope.selectedShape].demoText);
	    $timeout(function(){
			$("#prev").attr("disabled", true);
	    	$("#pause").hide();
		},100);
		if($scope.totalShapesPlayed === 6){
			$scope.finishbtn =true;
			$(".finish-btn").show();
			$scope.showNext = false;
			$(".next-btn").hide();
		}
	}else{
		$scope.currentNarrationId = 2;
		$scope.changeNarrationSrc(2);
		if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
			$scope.playNaration();
			$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			if(!isNarationMuted){
				$timeout(function(){
					$scope.enableAll = true;
				},6000);
			}else{
				$scope.enableAll = true;
				
			}
			
		}else{
			$scope.enableAll = true;

		}
		//hide 3d shapes and show
		$scope.hideAllShapes = true;
		

		$scope.showNext = false;
		$(".next-btn").hide();
	}
}


$scope.playClicked = function(){
	$(".sound-btn").focus();
	screenReader("Play Clicked.");
	sharedService.broadcastItem('triggerAudioPlayer');
	$scope.array=[];
	var array = [inner+"content/assets/audios/sl026-challenge/"+$scope.model.narrations[0].audio];
	$scope.currentPage = "play";
	$scope.narrationStatus = "playing";
	$scope.enableHowToPlay = false;
	$scope.enableAll = false;
	$scope.enableSelection = false;
	$scope.shapesPlayed = 0;

	if (isNarationMuted) {
		$scope.enableHowToPlay = true;
		$scope.currentNarrationId = 0;

		//$(".audio-btn").enable();
		$scope.enableSelection = true;
	} else {
		$scope.currentNarrationId = 0;
		//	$scope.playNaration();

		$timeout(function(){
			sharedService.broadcastItem('createAudioElement', {"array":array,"gender":"male"});
		},100)


		$scope.enalbeNarrationBut = false;
	}
	screenReader($scope.model.narrations[0].content);


	//iPad wont support the audo play. So player have been dispatched.

	if($scope.hoverDevice){
		var audioArray=[0,3,4,5];
		sharedService.broadcastItem('initAudio',{"audioArray":audioArray});
	}
	$scope.changeEffect(0);

	if(tabClick){
		// $(".sound-btn").focus();
	}
	//change status
	for(var shapeName in $scope.threeDshapes){
		$scope.threeDshapes[shapeName].status = "normal";
	}
}

$scope.dragStart = function (event) {
	//
	//console.log(event);
	
}

$scope.dragStop = function (event) {
	//
	//console.log(event);
	$scope.changeEffect(4);


}


$scope.setDrop = function (arg) {
	//Green print of large circle dragged from green player region to and dropped to yellow box region.
	if(arg.arg.source === "blueDrag"){
		screenReader($scope.model.altText[arg.arg.type] +  " dragged from blue player region and dropped to yellow box region.");
	}
	if(arg.arg.source === "greenDrag"){
		screenReader($scope.model.altText[arg.arg.type] +  " dragged from green player region and dropped to yellow box region.");
	}
	if(arg.arg.source === "blueDrop"){
		screenReader($scope.model.altText[arg.arg.type] +  " dragged from yellow box region and dropped to blue player region.");
	}
	if(arg.arg.source === "greenDrop"){
		screenReader($scope.model.altText[arg.arg.type] +  " dragged from yellow box region and dropped to green player region.");
	}
	$scope.allDropped = arg.arg.allDropped;
	if($scope.allDropped.length > 0){
		$scope.showCheck();
	}else{
		$scope.hideCheck();
	}
	$scope.currentNarrationId = 3;
	$scope.changeNarrationSrc(3);
	if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
		$scope.playNaration();
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
	}
}


$scope.checkAnswer = function(){
	var typeOfError = "";
	var incorrect = 0;
	var correct = 0;
	var totalAnswers = $scope.threeDshapes[$scope.selectedShape].answerKey.length;
	var allDropped = $scope.allDropped.length;
	$scope.allDropped.each(function(index,droppedElm){
		// all incorrect
		if($scope.threeDshapes[$scope.selectedShape].answerKey.indexOf(droppedElm) === -1){
			incorrect += 1;
		}
		if($scope.threeDshapes[$scope.selectedShape].answerKey.indexOf(droppedElm) > -1){
			correct += 1;
		}
	});
	//drop 1 chance
	$scope.currentChances -= 1;
	if(!(incorrect === 0 && correct === totalAnswers)){
		if($scope.currentChances === 0){
			console.log("show how its done");
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.showNext = true;
			$(".next-btn").show();
			$scope.currentNarrationId = 5;
			$scope.changeNarrationSrc(5);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
			$scope.enableAll = false;
			return;
		}
	}
	switch (totalAnswers) {
	  case 1:
	    if(correct === 0 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 4;
			$scope.changeNarrationSrc(4);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 12;
			$scope.changeNarrationSrc(12);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(incorrect === 0 && correct === totalAnswers){
			$scope.currentChances = 0;
			$scope.changeEffect(3);
			$scope.hideCheck();
			$scope.currentNarrationId = 11;
			$scope.changeNarrationSrc(11);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
			$scope.hideCheck();
			$scope.showNext = true;
			$scope.enableAll = false;
			$(".next-btn").show();
			return;
		}
	    break;
	  case 2:
	  	if(correct === 0 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 4;
			$scope.changeNarrationSrc(4);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 6;
			$scope.changeNarrationSrc(6);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 7;
			$scope.changeNarrationSrc(7);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 2 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 13;
			$scope.changeNarrationSrc(13);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(incorrect === 0 && correct === totalAnswers){
			$scope.currentChances = 0;
			$scope.changeEffect(3);
			$scope.hideCheck();
			$scope.currentNarrationId = 9;
			$scope.changeNarrationSrc(9);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
			$scope.hideCheck();
			$scope.enableAll = false;
			$scope.showNext = true;
			$(".next-btn").show();
			return;
		}
	    break;
	  case 3:
	    if(correct === 0 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 4;
			$scope.changeNarrationSrc(4);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 16;
			$scope.changeNarrationSrc(16);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 7;
			$scope.changeNarrationSrc(7);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 2 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 14;
			$scope.changeNarrationSrc(14);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 2 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 8;
			$scope.changeNarrationSrc(8);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 3 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 15;
			$scope.changeNarrationSrc(15);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(incorrect === 0 && correct === totalAnswers){
			$scope.currentChances = 0;
			$scope.changeEffect(3);
			$scope.hideCheck();
			$scope.currentNarrationId = 9;
			$scope.changeNarrationSrc(9);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
			$scope.enableAll = false;
			$scope.hideCheck();
			$scope.showNext = true;
			$(".next-btn").show();
			return;
		}
	    break;
	   case 5:
	    if(correct === 0 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 4;
			$scope.changeNarrationSrc(4);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 16;
			$scope.changeNarrationSrc(16);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 1 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 7;
			$scope.changeNarrationSrc(7);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 2 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 17;
			$scope.changeNarrationSrc(17);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 2 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 8;
			$scope.changeNarrationSrc(8);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 3 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 18;
			$scope.changeNarrationSrc(18);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 3 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 8;
			$scope.changeNarrationSrc(8);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 4 && incorrect === 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 19;
			$scope.changeNarrationSrc(19);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 4 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 8;
			$scope.changeNarrationSrc(8);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(correct === 5 && incorrect > 0){
	    	$scope.changeEffect(5);
			$scope.hideCheck();
			$scope.currentNarrationId = 20;
			$scope.changeNarrationSrc(20);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
	    }
	    if(incorrect === 0 && correct === totalAnswers){
			$scope.currentChances = 0;
			$scope.changeEffect(3);
			$scope.hideCheck();
			$scope.currentNarrationId = 9;
			$scope.changeNarrationSrc(9);
			if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
				$scope.playNaration();
				$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
			}
			$scope.enableAll = false;
			$scope.hideCheck();
			$scope.showNext = true;
			$(".next-btn").show();
			return;
		}
	    break;
	  default:
	    //console.log('Sorry, we are out of ' + expr + '.');
	}
}

var tabClick = true;
$scope.getTabDown = function () {
	tabClick = false;
}


$scope.$on('audioCompleted', function () {
	$scope.enalbeNarrationBut = true;
	$scope.enableHowToPlay = true;
	$scope.enableSelection = true;
	//$(".audio-btn").enable();
	$scope.$apply();
})




$scope.getDynamicAudio = function(dy) {
	if($scope[dy] !="no"){
		return $scope.model.dynamicAudios[$scope[dy]].audio;
	}
}

// START - NARRATION AUDIO EVENTS
$timeout(function () {
	narationAudio = $scope.getNarationAudioElement();
	narationAudioObj = $scope.getNarationAudioElement()[0];
	//isNarationMuted = false;
	narationAudioObj.addEventListener('ended', $scope.narationEnded);
	console.log(narationAudioObj)
}, 100);

$scope.changeNarrationSrc = function () {
	narationAudio.attr('src', $scope.audioPath + $scope.model.narrations[$scope.currentNarrationId].audio);
}

$scope.changeNarrationContinuationSrc = function () {
	if ($scope.model.narrations[$scope.currentNarrationId].continuation[$scope.currentNarrationContinuationId].dynamic) {
		var au = $scope.getDynamicAudio($scope.model.narrations[$scope.currentNarrationId].continuation[$scope.currentNarrationContinuationId].dynamic);
		narationAudio.attr('src', $scope.audioPath + au);
	} else {
		narationAudio.attr('src', $scope.audioPath + $scope.model.narrations[$scope.currentNarrationId].continuation[$scope.currentNarrationContinuationId].audio);
	}
}

$scope.playNaration = function () {
	if(!isNarationMuted){
		narationAudioObj.play();
		$scope.narrationStatus = "playing";
	}
	screenReader($scope.model.narrations[$scope.currentNarrationId].content);
}

$scope.stopNaration = function () {
	sharedService.broadcastItem('triggerAudioPlayer');
	narationAudioObj.pause();
	try {
		narationAudioObj.currentTime = 0;
	} catch (e) {
	}
	$scope.narrationStatus = "stoped";
}

$scope.narationEnded = function () {
	$scope.narrationStatus = "ended";
	if (!$scope.checkHasContinuation()) {
		$scope.enalbeNarrationBut = true;
		if($scope.currentNarrationId == 0 || $scope.currentNarrationId == 9) {
			
			$scope.enableHowToPlay = true;
			$(".audio-btn").attr('aria-label','Click to repeat the instruction.')
		}
		$scope.currentNarrationContinuationId = -1;
		$scope.$apply();
	}
}

$scope.checkHasContinuation = function () {
	if($scope.model.narrations[$scope.currentNarrationId].continuation) {
		if($scope.model.narrations[$scope.currentNarrationId].continuation.length-1 > $scope.currentNarrationContinuationId) {
			$scope.currentNarrationContinuationId++;
			$scope.changeNarrationContinuationSrc();
			$timeout(function () {
				try {
					narationAudioObj.currentTime = 0;
				} catch (e) {
				}
				//$scope.playNaration();
				if(narationAudioObj.volume == 1) {
					//$scope.playNaration();
				}
			}, 10);
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

$scope.narrationClick = function () {

	$scope.changeEffect(0);
	/*if(narationAudio.prop("volume") != 0) {
		$scope.narrationDispText = "Voice: off";
		$(".voice-btn").attr({"aria-pressed": "true"});
		narationAudio.prop("volume", 0);
		$scope.stopNaration();
		sharedService.broadcastItem('triggerAudioPlayer');
	} else {
		$scope.narrationDispText = "Voice: on";
		$(".voice-btn").attr({"aria-pressed": "false"});
		narationAudio.prop("volume", 1);
	}
	isNarationMuted = !isNarationMuted;*/
		
		if(isNarationMuted) {
			$scope.narrationDispText = "Voice: on";
				$(".voice-btn").attr({"aria-pressed": "false"});
			narationAudioObj.volume = 1;
		} else {
			$scope.narrationDispText = "Voice: off";
			$(".voice-btn").attr({"aria-pressed": "true"});
			narationAudioObj.volume = 0;
			$scope.stopNaration();
			sharedService.broadcastItem('triggerAudioPlayer');
		}
		isNarationMuted = !isNarationMuted;
}

$scope.muteNarration = function () {
	$scope.narrationDispText = "Voice: off";
	narationAudio.prop("volume", 0);
}

$scope.changeNaration = function (n) {

	$scope.currentaudioId=n;
	//contAudio();
	$scope.currentNarrationContinuationId = -1;
	$timeout(function () {
		if(!$scope.model.narrations[$scope.currentNarrationId].playedOnce) {
			$scope.narationClick();
			$scope.model.narrations[$scope.currentNarrationId].playedOnce = true;
		}
	}, 25);
	if($scope.model.narrations[$scope.currentNarrationId].bgColor != undefined) {
		$scope.narrationBg = $scope.model.narrations[$scope.currentNarrationId].bgColor.toLowerCase();
	} else {
		$scope.narrationBg = "";
	}
}
var narrationClicked=true;
var audioPlayedArray=[];
$scope.narationClick = function (param) {
	narrationClicked=false;
	//if(narationAudioObj.volume == 1) {
	if(!isNarationMuted) {
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
		var array = [inner+"content/assets/audios/sl026-challenge/"+$scope.model.narrations[$scope.currentNarrationId].audio];
		if(param==1){
			sharedService.broadcastItem('createAudioElement', {"array":array,"gender":"male"});
		}else{
			if(audioPlayedArray[$scope.currentNarrationId]!="completed"){
				sharedService.broadcastItem('createAudioElement', {"array":array,"gender":"male"});
			}
		}
		audioPlayedArray[$scope.currentNarrationId]="completed";
	}
}

// END - NARRATION AUDIO EVENTS

// START - EFFECT AUDIO EVENTS
$timeout(function () {
	effectAudio = $scope.getEffectAudioElement();
	effectAudioObj = $scope.getEffectAudioElement()[0];
}, 100);

$scope.changeEffectSrc = function () {
	effectAudio.attr('src', $scope.audioPath + $scope.model.effects[$scope.currentEffectId].audio);
}

$scope.effectSingleUse = function () {
	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', $scope.audioPath + $scope.model.effects[0].audio);
}

$scope.effectClick = function () {
	if(isEffectMuted) {
		$scope.effectDispText = "Sound: on";
		$(".sound-btn").attr({"aria-pressed": "false"});
		effectAudioObj.volume = 1;
	} else {
		$scope.effectDispText = "Sound: off";
		$(".sound-btn").attr({"aria-pressed": "true"});
		effectAudioObj.volume = 0;
		audioElement.play();
	}
	isEffectMuted = !isEffectMuted;
}

$scope.playEffect = function () {
	effectAudioObj.play();
}

$scope.changeEffect = function (n) {
	if(!isEffectMuted) {
		sharedService.broadcastItem('playEffect',n);
	}
}
// END - EFFECT AUDIO EVENTS

$scope.gameClick = function () {
	$scope.currentPage = $scope.prevPage;
	$scope.changeEffect(0);
	setTimeout(function(){$(".sound-btn").focus();},100);
}
$scope.helpClicked = function(){
	$scope.prevPage = $scope.currentPage;
	$scope.currentPage = "help";
	$scope.stopNaration();
	$scope.changeEffect(0);
	//$scope.enableAll = true;
}

$scope.showCheck = function(){
	$scope.validateAnswer = true;
	$(".check-btn").show();
}
$scope.hideCheck = function(){
	$scope.validateAnswer = false;
	$(".check-btn").hide();
}
$scope.dragAcess = function(color, isDrop, index){
	var currText;
	if(isDrop) {
		//currText = "1 counter dragged from " + color + " bin and dropped to " + color + " tray."
		currText = color +" counter "+(Number(index)+1)+" dragged from " + color + " bin and dropped to " + color + " tray."
	} else {
		//currText = "1 counter dragged from " + color + " tray and dropped back to " + color + " bin.";
		currText = color +" counter "+(Number(index)+1)+" dragged from " + color + " tray and dropped back to " + color + " bin.";


		var currText1 = "Addition facts: "+$scope.dropobj1.length+" Blue counter "+ $scope.dropobj2.length+" green counter = "+($scope.dropobj1.length+$scope.dropobj2.length)+" Counters"
		screenReader(currText1);
	}
	$("#sr-text").text(currText);


}





$scope.finsishClicked = function(){
	sharedService.broadcastItem('triggerAudioPlayer');
	$scope.changeEffect(0);
	$scope.currentPage ='home';
	$scope.currentMake = 0
	$scope.chancesUsed = 0
	$scope.inputValue = [];
	$scope.inputValue1 = [];
	$scope.inputValue2 = [];
	$scope.dragobj = [];
	$scope.dropobj1 = [];
	$scope.dropobj2 = [];
	$scope.activeArea = 1;
	$scope.correctAnswer1 = [];
	$scope.correctAnswer2 = [];
	$scope.chancesArr = [];
	$scope.enableAll = false;
	$scope.finishbtn =false;
	$(".finish-btn").hide();
	$scope.stopNaration();
	$scope.resetAudioFlag()
	$scope.init();

}
$scope.resetAudioFlag = function(){
	for(var i =0;i<=18;i++){
		$scope.model.narrations[i].playedOnce = false;
	}
	audioPlayedArray=[];
}
function screenReader(param){
	$("#update-text").text(param);
}
//device hove issue
	function hasTouch() {
			return 'ontouchstart' in document.documentElement
	           || navigator.maxTouchPoints > 0
	           || navigator.msMaxTouchPoints > 0;
		}

		if (hasTouch()) { // remove all :hover stylesheets
		    try { // prevent exception on browsers not supporting DOM styleSheets properly
		        for (var si in document.styleSheets) {
		            var styleSheet = document.styleSheets[si];
		            if (!styleSheet.rules) continue;
		            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
		                if (!styleSheet.rules[ri].selectorText) continue;

		                if (styleSheet.rules[ri].selectorText.match(':hover')) {
		                    styleSheet.deleteRule(ri);
		                }
		            }
		        }
		    } catch (ex) {}
		}

}]);
