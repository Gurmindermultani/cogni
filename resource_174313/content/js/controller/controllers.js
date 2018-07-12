'use strict';
app.controller("sl011ChallengeController",['$timeout','$scope', '$rootScope', '$http', '$controller', 'sharedService', function( $timeout, $scope, $controller, $rootScope, $http, sharedService) {
	$scope.currentPage = "home";
	$scope.playDown = false;
	$scope.audioDown = true;
	$scope.checkDown = false;
	$scope.droppedOut = false;
	$scope.audioPath = "";
	$scope.imagePath = "";
	$scope.gifPath = "";
	$scope.currentNarrationId = 0;
	$scope.currentNarrationContinuationId = -1;
	$scope.currentEffectId = "";
	$scope.narrationStatus = "";
	$scope.currentaudioId ="";
	$scope.currentMake = 0;
	$scope.inputValue =[];
	$scope.inputValue1 =[];
	$scope.inputValue2 =[];
	$scope.dragobj =[];
	$scope.dropobj1 = [];
	$scope.dropobj2 = [];
	$scope.activeArea = 1;
	$scope.correctAnswer1 = [];
	$scope.correctAnswer2 = [];
	$scope.dropAccessibility = [{name: "Bluedrop", type: "drop"}, {name: "Greendrop", type: "drop"}];
	$scope.dragAccessibility = [{name: "Blue", type: "blue"}, {name: "Green", type: "green"}];
	//need to check
	$scope.changeInputcol = 1;
	$scope.narrationDispText = "Voice: on";
	$scope.effectDispText = "Sound: on";
	$scope.numberofChances = 5;
	$scope.chancesArr = [];
	$scope.chancesUsed = 0;
	$scope.validateAnswer = false;
	$scope.showNext = false;
	$scope.finishbtn = false;
	$scope.enableAll = false;
	$scope.repeatsameAns = false;
	$scope.enalbeNarrationBut = true;
	$scope.leftCent = false;
	$scope.isDevice = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1 || navigator.userAgent.indexOf("Macintosh") != -1) ? true : false;
	$scope.hoverDevice = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1) ? true : false;

	$scope.currentNarrationId = 0;
	$scope.currentNarrationContinuationId = -1;
	$scope.currentEffectId = "";
	$scope.narrationStatus = "";
	$scope.showingclose = false;
	$scope.showHTPInstruction = false;
	$scope.isFirstDrop = true;

	$scope.imagePreloadArrayInner = ["next_up.png", "next_over.png", "next_hit.png"];

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
		$scope.totalchancesno = tempArray.toatalChances;
		$scope.optionsLength = tempArray.makeOptions.length

		$scope.makeoption = tempArray.makeOptions[$scope.currentMake].number;
		$scope.effectSingleUse();
		$scope.chanceCalculation($scope.numberofChances);
		$scope.audioPreload();
		$scope.inputdropvalue();
		$scope.dragObject();
		rightCount = 0;

		//	$scope.$apply();
		$("title").text("Abacus - " + $scope.pageTitle);

	}

	var audios = ["narsound1a.mp3", "narsound1b.mp3", "_7.mp3"];
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





$scope.playClicked = function(){
	sharedService.broadcastItem('triggerAudioPlayer');
	$scope.array=[];
	var array = [inner+"content/assets/audios/sl011-challenge/"+$scope.model.narrations[0].audio,"7",inner+"content/assets/audios/sl011-challenge/"+$scope.model.narrations[0].continuation[1].audio,"7"];
	$scope.currentPage = "play";
	$scope.enableHowToPlay = false;
	$scope.enableAll = false;
	if (isNarationMuted) {
		$scope.updateCurrentNarrationId(0);
		$scope.enableAll = true;
		$scope.enableHowToPlay = true;
		//$(".audio-btn").enable();

	} else {
		$scope.currentNarrationId = 0;
		$scope.currentNarrationContinuationId = -1;
		$scope.updateCurrentNarrationId(0);
		//	$scope.playNaration();

		$timeout(function(){
			sharedService.broadcastItem('createAudioElement', {"array":array,"gender":"male"})
		},100)


		$scope.enalbeNarrationBut = false;
	}

	//iPad wont support the audo play. So player have been dispatched.

	if($scope.hoverDevice){
		var audioArray=[0,3,4,5];
		sharedService.broadcastItem('initAudio',{"audioArray":audioArray});
	}
	$scope.changeEffect(0);

	if(tabClick){
		// $(".sound-btn").focus();
	}
}
	var tabClick = true;
	$scope.getTabDown = function () {
	tabClick = false;
	}


$scope. $on ('audioCompleted', function () {
	if($scope.currentNarrationId == 0 || $scope.currentNarrationId == 9){
		$scope.enableAll = true;
		$scope.enalbeNarrationBut = true;
		$scope.enableHowToPlay = true;
		//$(".audio-btn").enable();
		$scope.$apply();
	}
})


$scope.getDynamicAudio = function(dy) {
	if($scope[dy] !="no"){
		return $scope.model.dynamicAudios[$scope[dy]].audio;
	}
}

$scope.updatingText = "";
$scope.updatingText1 = "";

$scope.updatecount = "";
$scope.updatecount1 = "";
$scope.updatecount2 = "";
$scope.updatecount3 = "";
$scope.updatecount4 = "";
$scope.updatecount5 = "";
$scope.updatecount6 = "";
$scope.updatecount7 = "";
$scope.updatecount8 = "";
$scope.updatecount9 = "";
$scope.updatecount10 = "";
$scope.updatecount11 = "";
$scope.updatecount12 = "";
$scope.updatecount13 = "";
$scope.updatecount14 = "";
$scope.updatecount15 = "";
$scope.updatecount16 = "";
$scope.updatecount17 = "";
$scope.updatecount18 = "";

$scope.text = "";
$scope.text1 = "";



$scope.updateCurrentNarrationId = function(n) {
	$scope.currentNarrationId = n;
	if(n == 0 ) {

		if($scope.updatecount == "") {
			$scope.updatecount = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount;

		$scope.CORRECT_COUNT = $scope.makeoption;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else 		if(n == 1 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount1 == "") {
			$scope.updatecount1 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount1;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		// $scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 2 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount2 == "") {
			$scope.updatecount2 = $scope.model.narrations[$scope.currentNarrationId].content;
		}

		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount2;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		//	$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 3 ) {
		if($scope.updatecount3 == "") {
			$scope.updatecount3 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount3;
		$scope.CORRECT_COUNT = $scope.makeoption;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		//$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 4 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount4 == "") {
			$scope.updatecount4 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount4;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 5 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount5 == "") {
			$scope.updatecount5 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount5;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 6 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount6 == "") {
			$scope.updatecount6 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount6;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 7 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount7 == "") {
			$scope.updatecount7 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount7;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n == 8 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount8 == "") {
			$scope.updatecount8 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount8;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else		if(n ==9 ) {
		$scope.CORRECT_COUNT = tempArray.makeOptions[$scope.currentMake].number;
		console.log("CORRECT_COUNT__________"+$scope.CORRECT_COUNT);
		if($scope.updatecount9 == "") {
			$scope.updatecount9 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount9;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}else	if(n ==10 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		/*if($scope.text == "") {
			$scope.text = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		if($scope.text1 == "") {
			$scope.text1 = $scope.model.narrations[$scope.currentNarrationId].content;
		}*/

		if($scope.updatecount10 == "") {
			$scope.updatecount10 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount10;
		//$scope.model.narrations[$scope.currentNarrationId].content = $scope.text;
		//$scope.model.narrations[$scope.currentNarrationId].content = $scope.text1;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	} else if( n==11 || n==17) {
		$scope.CORRECT_COUNT1 = $scope.makeoption;
		$scope.score = $scope.activeArea-1;

		if(n == 11){
			if($scope.updatecount11 == "") {
				$scope.updatecount11 = $scope.model.narrations[$scope.currentNarrationId].content;
			}
			$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount11;
		}

		if(n == 17){
			if($scope.updatecount17 == "") {
				$scope.updatecount17 = $scope.model.narrations[$scope.currentNarrationId].content;
			}
			$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount17;
		}

		if($scope.score == 0){
			$scope.score1 = "no"
			/*$timeout(function () {
				$scope.score = 0
			}, 500);*/
		}

		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT1);
		if(	$scope.score == 0){
			$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score1);
		}else{
			$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score);
		}
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
		//$scope.$apply();
	}
	else if(n ==12 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount12 == "") {
			$scope.updatecount12 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount12;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}
	else		if(n == 13){
	$scope.CORRECT_COUNT = $scope.makeoption;
		$scope.score = $scope.activeArea-1;
		if($scope.updatecount13 == "") {
			$scope.updatecount13 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount13;
		/*if(	$scope.score == 0){
			$scope.score = "no"
			$timeout(function () {
				$scope.score = 0
			}, 500);
		}*/


		if(	$scope.score == 0){
			$scope.score1 = "no"
			/*$timeout(function () {
				$scope.score = 0
			}, 500);*/
		}

		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		if(	$scope.score == 0){
			$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score1);
		}else{
			$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score);
		}






		//$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		//$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;

	}
	else if(n == 18) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		$scope.score = $scope.activeArea-1;
		if($scope.updatecount18 == "") {
			$scope.updatecount18 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount18;
		if(	$scope.score == 0){
			$scope.score = "no"
			$timeout(function () {
				$scope.score = 0
			}, 500);
		}

		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}
	else		if(n ==14 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		$scope.score = $scope.activeArea-1;
		if($scope.updatecount14 == "") {
			$scope.updatecount14 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount14;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}
	else		if(n ==15 ) {
		$scope.CORRECT_COUNT = $scope.makeoption;
		if($scope.updatecount15 == "") {
			$scope.updatecount15 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount15;
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT);
		$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
	}
	else if( n==16 ) {

		$scope.CORRECT_COUNT1 = $scope.makeoption;
		$scope.score = $scope.activeArea-1;
		if($scope.model.narrations[$scope.currentNarrationId].playedOnce){
		}
		if($scope.score>=2){
			$scope.score=$scope.score+1
		}
		if($scope.score==1){
			$scope.score=$scope.score+1
		}
		if($scope.updatecount16 == "") {
			$scope.updatecount16 = $scope.model.narrations[$scope.currentNarrationId].content;
		}
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatecount16;

		/*if($scope.updatingText == "") {
			$scope.updatingText = $scope.model.narrations[$scope.currentNarrationId].content;
		}

		$scope.model.narrations[$scope.currentNarrationId].content = $scope.updatingText;*/

		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{CORRECT_COUNT}}").join($scope.CORRECT_COUNT1);
		$scope.model.narrations[$scope.currentNarrationId].content = $scope.model.narrations[$scope.currentNarrationId].content.split("{{score}}").join($scope.score);
		//	$scope.model.narrations[$scope.currentNarrationId].playedOnce = false;
		//$scope.$apply();
	}

	$scope.changeNarrationSrc();
}
// START - NARRATION AUDIO EVENTS
$timeout(function () {
	narationAudio = $scope.getNarationAudioElement();
	narationAudioObj = $scope.getNarationAudioElement()[0];
	//isNarationMuted = false;
	narationAudioObj.addEventListener('ended', $scope.narationEnded);
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
	narationAudioObj.play();
	$scope.narrationStatus = "playing";
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
			$scope.enableAll = true;
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
	$scope.updateCurrentNarrationId(n);
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
		var array = contAudio();
		if(param==1){
			sharedService.broadcastItem('createAudioElement', {"array":array,"gender":"male"})
			console.log("if")
		}else{
			if(audioPlayedArray[$scope.currentNarrationId]!="completed"){
				sharedService.broadcastItem('createAudioElement', {"array":array,"gender":"male"});
			}
			console.log("else")
		}
		audioPlayedArray[$scope.currentNarrationId]="completed";
	}
}

function contAudio(){
	var arr = [];
	var a1 = $scope.audioPath+$scope.model.narrations[$scope.currentNarrationId].audio;
	arr.push(a1);
	//	if (!$scope.checkHasContinuation()) {
	for(var i=0; i<$scope.model.narrations[$scope.currentNarrationId].continuation.length ; i++){
		if($scope.model.narrations[$scope.currentNarrationId].continuation[i].dynamic != undefined){
			var dy = $scope.model.narrations[$scope.currentNarrationId].continuation[i].dynamic;
			var a = $scope[dy]
			arr.push(a);
		}else{
			var a2 = $scope.audioPath+$scope.model.narrations[$scope.currentNarrationId].continuation[i].audio;
			arr.push(a2);
		}
	}
	return arr;
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
}
$scope.helpClicked = function(){
	$scope.prevPage = $scope.currentPage;
	$scope.currentPage = "help";
	$scope.stopNaration();
	$scope.changeEffect(0);
	//$scope.enableAll = true;
}
$scope.inputdropvalue =  function(){
	$scope.inputcolumn = tempArray.makeOptions[$scope.currentMake].inputcolrowNo;
	$scope.inputcolumn1 = tempArray.makeOptions[$scope.currentMake].inputcolrowNo1;
	$scope.inputcolumn2 = tempArray.makeOptions[$scope.currentMake].inputcolrowNo2;
	for(var i=0;i<$scope.inputcolumn;i++)
	{
		count += 1;
		$scope.inputValue.push({inc:count});
	}
	for(var i=0;i<$scope.inputcolumn1;i++)
	{
		count += 1;
		$scope.inputValue1.push({inc:count});
	}
	for(var i=0;i<$scope.inputcolumn2;i++)
	{
		count += 1;
		$scope.inputValue2.push({inc:count});
	}
	$scope.changeInputcol1 = $scope.changeInputcol+$scope.inputcolumn;
	$scope.changeInputcol2 = $scope.changeInputcol1+$scope.inputcolumn1;
}

$scope.dragObject =  function(){
	$scope.makeoption = tempArray.makeOptions[$scope.currentMake].number;
	if($scope.makeoption  == 12){
		$scope.leftCent = true;
	}else{
		$scope.leftCent = false;
	}
	for(var i=0;i<$scope.makeoption;i++)
	{
		count += 1;
		$scope.dragobj.push({inc:count});
	}
}

$scope.showCheck = function(){
	$scope.validateAnswer = true;
	$(".check-btn").show();
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


$scope.setDrop = function (_o) {
	var source = _o.source;
	//$scope.changeNaration(1);
	//$scope.changeEffect(4);
	count += 1;

	var currentdragInd = _o.dragIndex;
	var parentDrag = _o.dragParentIndex;
	if(source=="blueDrag"){
		$scope.dropobj1.push({inc:count,preIndex:currentdragInd})
		$scope.dragobj[currentdragInd].blueHidden=true;
		$scope.hiddenvalue();

	}
	if(source=="blueDrop"){
		$scope.dropobj1.push({inc:count,preIndex:parentDrag})
	}
	$scope.validateAnswer = true;
	$(".check-btn").show();
	$timeout(function(){
		$(".dragI-"+parentDrag).find(".drag-object").hide();

	},0)


	var currText = "Addition facts: "+$scope.dropobj1.length+" Blue counter +"+ $scope.dropobj2.length+" green counter = "+($scope.dropobj1.length+$scope.dropobj2.length)+" Counters"
	screenReader(currText);
}


$scope.hiddenvalue = function  (){
	$scope.hiddenCount =0;
	for(var i=0; i<$scope.dragobj.length; i++){
		if(	!$scope.dragobj[i].blueHidden){
			$scope.hiddenCount++;
		}
	}
}

$scope.hiddenvalueGreen = function  (){
	$scope.hiddenCountgreen =0;
	for(var i=0; i<$scope.dragobj.length; i++){
		if(	!$scope.dragobj[i].greenHidden){
			$scope.hiddenCountgreen++;
		}
	}
}

$scope.setDrop1 = function (_o) {
narationAudioObj.currentTime = 0;
	$scope.changeEffect(4);
	$scope.changeNaration(1);
	count += 1;
	var source = _o.source;
	var currentdragInd = _o.dragIndex;
	var parentDrag = _o.dragParentIndex;
	if(source=="greenDrag"){
		$scope.dropobj2.push({inc:count,preIndex:currentdragInd})
		$scope.dragobj[currentdragInd].greenHidden=true;
	}
	if(source=="greenDrop"){
		$scope.dropobj2.push({inc:count,preIndex:parentDrag})
	}
	$scope.hiddenvalueGreen();
	$scope.validateAnswer = true;
	$(".check-btn").show();

	$timeout(function(){
		$(".dragI-"+parentDrag).find(".drag-object-green").hide();
	},0)
	var currText = "Addition facts: "+ $scope.dropobj1.length+" Blue counter + "+ $scope.dropobj2.length+" green counter = "+($scope.dropobj1.length+$scope.dropobj2.length)+" Counters"
	screenReader(currText);
}
$scope.votStatus = function(){
	$scope.repeatsameAns = false;
}
$scope.checkanswer = function(){
narationAudioObj.pause();
narationAudioObj.currentTime = 0;
	$scope.changeEffect(0);
	var reqValue =	$scope.dropobj1.length + 	$scope.dropobj2.length;
	$scope.validateAnswer = false;
	$(".check-btn").hide();
	if (reqValue == $scope.makeoption){

		if($scope.correctAnswer1.length==0 && $scope.correctAnswer2.length==0){
			$scope.correctAnswer1.push({val:$scope.dropobj1.length})
			$scope.correctAnswer2.push({val:$scope.dropobj2.length})
			$scope.changeNaration(4);
			$timeout(function(){
			 $scope.changeEffect(3);
		 },300);
			//$scope.changeEffect(3);
			$scope.activeArea += 1;
			var currText1 = "Well done, you've found 1 way to make "+$scope.makeoption+". Your addition fact has gone into the list. Now find a different way to make "+$scope.makeoption+"."
			screenReader(currText1);
			rightCount = 1;
		}else{
			var equalsPrevious = 0;
			var notEquals =0;
			var a = $scope.dropobj1.length;
			for(var i=0;i<$scope.correctAnswer1.length;i++){
				if($scope.correctAnswer1[i].val != a ){
					notEquals +=1;
				}else{
					equalsPrevious +=1;
				}
			}
			if(equalsPrevious ==0){
				$scope.changeNaration(16);
				$timeout(function(){
				 $scope.changeEffect(3);
			 },300);
				//$scope.changeEffect(3);
				$scope.correctAnswer1.push({val:$scope.dropobj1.length})
				$scope.correctAnswer2.push({val:$scope.dropobj2.length})
				$scope.activeArea += 1;
				$scope.showans = $scope.inputValue.length
				$scope.showans1 = $scope.inputValue1.length+$scope.inputValue.length
				$scope.totalnoInputs = $scope.inputcolumn +$scope.inputcolumn1 +$scope.inputcolumn2;
				if(	$scope.activeArea > $scope.totalnoInputs){
					if ($scope.currentMake < $scope.optionsLength-1 ){
						$scope.changeNaration(8);
						$scope.showNext = true;
						$(".next-btn").show();
						$scope.enableAll = false;
					}
					if ($scope.currentMake == $scope.optionsLength-1 ){
						$scope.changeNaration(7);
						$scope.finishbtn =true;
						$(".finish-btn").show();
						$scope.enableAll = false;
					}
				}
			}else{
				$timeout(function(){
				 $scope.changeEffect(5);
			 },300);
				//$scope.changeEffect(5);
				$scope.repeatsameAns = true;
				//$scope.numberofChances[$scope.chancesUsed].styles.background = "url(content/assets/images/sl011-challenge/star_disapper_2_final_once_pink.gif)"
				$scope.chancesUsed +=1;
				$("#star_"+($scope.chancesUsed-1)).css("visibility","hidden");
				var Left = $("#star_"+($scope.chancesUsed-1)).position().left;
				var Top = $("#star_"+($scope.chancesUsed-1)).position().top;
				if($scope.chancesUsed==1){
					//			$scope.changeNaration(5);
					$('#loadGif').css({'position':'relative','left':Left+17,'top':Top-30});
				}else{
					//		$scope.changeNaration(6);
					$('#loadGif').css({'position':'relative','left':Left+7,'top':Top-30});
				}
				$scope.getGif = inner +"content/assets/images/sl011-challenge/star"+$scope.chancesUsed+".gif"
				$('#loadGif').html('<img alt="Chances star" src='+$scope.getGif+' />');
				if($scope.chancesUsed == 5){

					$scope.enableAll = false;
					$scope.repeatsameAns = false;
					if ($scope.currentMake < $scope.optionsLength-1 ){
						$scope.showNext = true;
						$(".next-btn").show();
							if($scope.activeArea >= 1){
						console.log("found > or eq to one way")
							if($scope.activeArea-1 == 1){
							console.log("in 17 222");
								$scope.changeNaration(17);
							}else{
								console.log("in 11 222");
								$scope.changeNaration(11);
							}
						}else{
						console.log("found no way")
							console.log("Think dont want 222");
							$scope.changeNaration(11);
							/*if($scope.activeArea-1 == 1){
								$scope.changeNaration(18);
							}else{
								$scope.changeNaration(13);
							}*/
						}

						//$scope.changeNaration(11);
						var currText1 = "Fantastic, you have found 5 ways to make "+$scope.activeArea+". Click 'Next' to continue."
						screenReader(currText1);
					}
					if ($scope.currentMake == $scope.optionsLength-1 ){
						$scope.finishbtn =true;
						$(".finish-btn").show();
						//$scope.changeNaration(13);

						if($scope.activeArea >= 1){
							if($scope.activeArea-1 == 1){
								console.log("in 18 2");
								$scope.changeNaration(18);
							}else{
								console.log("in 13 2");
								$scope.changeNaration(13);
							}
						}else{
							console.log("Think dont want 3");
							$scope.changeNaration(13);
							/*if($scope.activeArea-1 == 1){
								$scope.changeNaration(18);
							}else{
								$scope.changeNaration(13);
							}*/
						}
						var currText1 = "Fantastic, you have found 5 ways to make "+$scope.activeArea+". Click 'Finish' to leave the game."
						screenReader(currText1);
					}
				}else{
					$scope.changeNaration(3);
					var currText1 = "Great, you've found "+$scope.activeArea+" ways to make "+$scope.makeoption+". Try another way."
					screenReader(currText1);
				}
			}

		}
	}else{
		$timeout(function(){
		 $scope.changeEffect(5);
	 },300);
		//$scope.changeEffect(5);
		$scope.changeNaration(2);
		$scope.chancesUsed +=1;
		if($scope.chancesUsed !=3 && $scope.chancesUsed !=5){
			var currText = "Try again. You have "+(5-$scope.chancesUsed) +" chances left"
			$("#chanceUpdate").text(currText1);
			//screenReader(currText1);
		}else if($scope.chancesUsed == 3){
			var currText = "Try again. You have "+ (5-$scope.chancesUsed) +" chances left. showing one of the addition facts try and recreate as same."
			screenReader(currText);
		}else if($scope.chancesUsed == 5){
			if ($scope.currentMake < $scope.optionsLength-1 ){
				var currText = "you have used all your chances. click next to continue."
				screenReader(currText);
			}
			if ($scope.currentMake == $scope.optionsLength-1 ){
				var currText = "you have used all your chances. click finish."
				screenReader(currText);
			}
		}

		$("#chanceUpdate").text(currText);

		$("#star_"+($scope.chancesUsed-1)).css("visibility","hidden");
		var Left = $("#star_"+($scope.chancesUsed-1)).position().left;
		var Top = $("#star_"+($scope.chancesUsed-1)).position().top;
		if($scope.chancesUsed==1){

			//			$scope.changeNaration(5);
			$('#loadGif').css({'position':'relative','left':Left+17,'top':Top-30});
		}else{
			//		$scope.changeNaration(6);
			$('#loadGif').css({'position':'relative','left':Left+7,'top':Top-30});
		}
		$scope.getGif = inner + "content/assets/images/sl011-challenge/star"+$scope.chancesUsed+".gif"
		$('#loadGif').html('<img  alt="Chances star" src='+$scope.getGif+' />');
		if($scope.chancesUsed == 3){
			if(rightCount == 0){
				$scope.enableAll = false;
				$scope.dropobj1 = [];
				$scope.dropobj2 = [];
				$scope.changeNaration(5);
				$scope.showNext = true;
				$(".next-btn").show();

				for(var i=0;i<$scope.makeoption;i++){
					$(".drag1.dragI-"+i).find(".dragImg").show();
					$(".drag2.dragI-"+i).find(".drag-object-green").show();

					$scope.dragobj[i].greenHidden=false;
					$scope.dragobj[i].blueHidden=false;
				}
				var hideDragimg = $scope.makeoption-1;
				var defaultVal =1;
				for(var i=0;i<hideDragimg;i++){
					$(".drag1.dragI-"+i).find(".dragImg").hide();
					$scope.dragobj[i].blueHidden = true;
				}
				for(var i=0;i<hideDragimg;i++){
					count += 1;
					$scope.dropobj1.push({inc:count})
				}
				$timeout(function () {
					$(".drag2.dragI-0").find(".drag-object-green").hide();
					$scope.dragobj[0].greenHidden = true;
					count = defaultVal;
					$scope.dropobj2.push({inc:count})
				}, 100);
				$(".drop-area-1 ").animate({"left": "-=238px"},10).delay(50)
				.animate({"left": "+=238px"},'slow');
				$(".drop-area-2 ").animate({"right": "-=150px"},10).delay(50)
				.animate({"right": "+=150px"},'slow');
			}
		} else 		if($scope.chancesUsed == 5){
			$scope.enableAll = false;
			if ($scope.currentMake < $scope.optionsLength-1 ){
				if($scope.activeArea >= 1){
					if($scope.activeArea-1 == 1){
						console.log("in 17 1");
						$scope.changeNaration(17);
					}else{
						console.log("in 11 1");
						$scope.changeNaration(11);
					}
				}else{
					console.log("Think dont want 1");
					$scope.changeNaration(11);
				}
				$scope.showNext = true;
				$(".next-btn").show();

			}
			if ($scope.currentMake == $scope.optionsLength-1 ){
				$scope.finishbtn =true;
				$(".finish-btn").show();
				if($scope.activeArea >= 1){
					if($scope.activeArea-1 == 1){
						console.log("in 18");
						$scope.changeNaration(18);
					}else{
						console.log("in 13");
						$scope.changeNaration(13);
					}
				}else{
					console.log("else in 13");
					$scope.changeNaration(13);
				}

			}
		}
	}

}
$scope.tryagain = function(){
	narationAudioObj.pause()
	narationAudioObj.currentTime = 0;
	$scope.changeEffect(0);
	$scope.setFirstDrop(false);
	$scope.showNext = false;
	$(".next-btn").hide();
	$scope.enableAll = true;
	$scope.dropobj1 = [];
	$scope.dropobj2 = [];
	for(var i=0;i<$scope.makeoption;i++){
		$(".drag1.dragI-"+i).find(".dragImg").show();
		$(".drag2.dragI-"+i).find(".drag-object-green").show();
		$scope.dragobj[i].greenHidden=false;
		$scope.dragobj[i].blueHidden=false;
	}

	if($scope.chancesUsed == 0){
		$scope.changeNaration(10);
	}else	if($scope.chancesUsed <3){
		$scope.changeNaration(0);
	}else	if($scope.chancesUsed == 3){
		$scope.changeNaration(10);
	}else if($scope.chancesUsed == 5){
		$scope.changeNaration(10);
		console.log("changeNaration");
		$scope.chancesUsed = 0;
		$scope.nextValue();
	}

	if($scope.activeArea > $scope.totalnoInputs){
		$scope.nextValue();
	}
}

$scope.nextValue = function(){
	narationAudioObj.pause()
	narationAudioObj.currentTime = 0;
	console.log($scope.currentMake +"<<<<<<<<<<<<"+ $scope.optionsLength);
	if ($scope.currentMake < $scope.optionsLength ){
		$scope.currentMake += 1;
		$scope.chancesUsed = 0;
		$scope.stopNaration();
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
		$scope.resetAudioFlag();
		$scope.changeNaration(9);
		$scope.init();
	}else{
		$scope.finishbtn =true;
		$(".finish-btn").show();

	}
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
