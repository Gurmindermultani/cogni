'use strict';
app.controller("s27ChallengeController",['$timeout', "$filter",'$scope', '$rootScope', '$http','$controller', 'sharedService', function( $timeout, $filter, $scope, $rootScope, $http,$controller, sharedService) {
	var ctrl = this;
	// Local Variables
	var smallDevice = false;
	if($(document).height() < 600) {smallDevice = true;}

	var narationAudio;
	var narationAudioObj;
	var isNarationMuted;
	var effectAudio;
	var effectAudioObj;
	var justDropHappen = false;
	var levelDone = false;
	var isEffectMuted  = false;
	var isDroppedFlag=false;
	var audioElement;

	$("body").on("mousedown click touchstart", "*", function(e) {
		if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none") {
			$(this).css("outline", "none").on("blur", function() {
				$(this).off("blur").css("outline", "");
			});
		}
	});

	var shifted;
	var keyPressed;
	$(document).on('keyup keydown', function(e) {
		shifted = e.shiftKey;
		keyPressed = e.keyCode;
		$timeout(function(){
			keyPressed = "";
		}, 100)
	});


	var _array=[];
	for(var i=1;i<=6;i++){
		_array[i]="empty";
	}



	// Scope Variables
	$scope.linkDisabled = false;
	$scope.isLinkSelected = false;
	$scope.isLinkActivated = false;
	$scope.isLinkUsed = false;
	$scope.numberofChances = 7;
	$scope.chanceShow = true;
	$scope.chancesArr = [];
	$scope.chanceUsed = 0;
	$scope.currentLevel = 1;
	$scope.dialPath = "";
	$scope.clocks = [];
	$scope.green = [];
	$scope.blueClocks = [];
	$scope.greenClocks = [];
	$scope.showAnswer = false;
	$scope.currentlyDragging = [];
	$scope.currentDragSourceType = "";
	$scope.currentDragSource = null;
	$scope.disabledAnswerDraggable = false;
	$scope.disabledDraggable = false;
	$scope.currentPage = "home";
	$scope.playDown = false;
	$scope.audioDown = false;
	$scope.checkDown = false;
	$scope.showCheckButton = false;
	$scope.showNextButton = false;
	$scope.showFinishButton = false;
	$scope.audioPath = "";
	$scope.imagePath = "";
	$scope.currentNarrationId = 0;
	$scope.currentEffectId = "";
	$scope.narrationStatus = "";
	$scope.dropAccessibility = [{name: "Blue", type: "blue"}, {name: "Green", type: "green"}];
	$scope.clockStr = ["First","second","third","fourth","fifth","sixth","seventh","Last"]
	$scope.backupModel = {};
	$scope.enableAll = true;
	$scope.enalbeNarrationBut = true;
	$scope.narrationDispText = "Voice: on";
	$scope.effectDispText = "Sound: on";
	$scope.narrationBg = "";
	$(".effect-btn").attr({"aria-pressed": "false"});
	$(".voice-btn").attr({"aria-pressed": "false"});
	$scope.isDevice = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1 || navigator.userAgent.indexOf("Macintosh") != -1) ? true : false;
	$scope.hoverDevice = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1) ? true : false;
	
	
	
	$scope.iOSDevice = (navigator.userAgent.indexOf("iPad") != -1) ? true : false;
	// START - Loading Global Images
	var chanceContainerBackground = {
		out: folder + "assets/images/chances_empty_seven.png",
	    hover: folder + "assets/images/chances_empty_seven.png",
	    down: folder + "assets/images/chances_empty_seven.png"
	};
	var chanceStarBackground = {
		out: folder + "assets/images/star_blink.gif",
	    hover: folder + "assets/images/star_blink.gif",
	    down: folder + "assets/images/star_blink.gif"
	}
	var chanceEndStarBackground = {
		out: folder + "assets/images/star_dissapear_anim.gif",
	    hover: folder + "assets/images/star_dissapear_anim.gif",
	    down: folder + "assets/images/star_dissapear_anim.gif"
	}
	$scope.chanceContainerBackground = chanceContainerBackground;
	$scope.chanceEndStarBackground = chanceEndStarBackground;
	$scope.chanceStarBackground = chanceStarBackground;
	if(!$scope.hoverDevice) {
		var linkButtonBackground = {
		out: inner + "content/assets/images/s27-challenge/link.png",
		hover: inner + "content/assets/images/s27-challenge/link_over.png",
		down: inner + "content/assets/images/s27-challenge/link_down.png"
		}
		var howBtnBackground = {
		    out: folder + "assets/images/how-to-play_n.png",
		    hover: folder + "assets/images/how-to-play_o.png",
		    down: folder + "assets/images/how-to-play_d.png"
		}
		var howBtnEnabledBackground = {
		    out: folder + "assets/images/how-to-play_n.png"
		}
		$scope.linkButtonBackground = linkButtonBackground;
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
	}else{
		var linkButtonBackground = {
		out: inner + "content/assets/images/s27-challenge/link.png",
		}
		var howBtnBackground = {
		    out: folder + "assets/images/how-to-play_n.png"
		}
		var howBtnEnabledBackground = {
		    out: folder + "assets/images/how-to-play_n.png"
		}
		$scope.linkButtonBackground = linkButtonBackground;
		$scope.howBtnBackground = howBtnBackground;
		$scope.playBtnBackground = {
		    out: folder + "assets/images/play_n.png"
		};
		$scope.audioBtnBackground = {
		    out: folder + "assets/images/vo_n.png"
		};
		$scope.finishBtnBackground = {
		    out: folder + "assets/images/finish_btn_up.png"
		};
		$scope.checkBtnBackground = {
		    out: folder + "assets/images/check-n.png"
		};
	}
	var audioContainerBackground = {
	    out: folder + "assets/images/vot_bg.png"
	}
	var audioContainerOrangeBackground = {
	    out: folder + "assets/images/feedback_warning.png"
	}
	$scope.audioContainerBackground = audioContainerBackground;
	// END - Loading Global Images

	$scope.helpPath = inner + "content/partials/help.html";
	$scope.innerImagePath = inner + "content/assets/images/s27-challenge/";
	$scope.imagePreloadArrayInner = ["blue.png","blue_hover.png", "blue_linked.png", "blue_ondrag.png","green.png",
	"green_hover.png", "green_linked.png", "green_ondrag.png","intro_screen.png","stack_blue_1.png","stack_blue_2.png",
	"stack_blue_3.png","stack_green_1.png","stack_green_2.png","stack_green_3.png","yellow.png","dragbox.png","clock_holder.png",
	"link.png","link_down.png","link_over.png","dial.png"];

	$scope.innerAudioPath = inner + "content/assets/audios/s27-challenge/";
	$scope.effectsAudioArray = [
	{"id": 0,"src":$scope.innerAudioPath +"button_click.mp3"},
	{"id": 1,"src":$scope.innerAudioPath +"drag-mouse-down.mp3"},
	{"id": 2,"src":$scope.innerAudioPath +"sound_blank.mp3"},
	{"id": 3,"src":$scope.innerAudioPath +"sound_blank_square.mp3"},
	{"id": 4,"src":$scope.innerAudioPath +"sound_drag.mp3"},
	{"id": 5,"src":$scope.innerAudioPath +"sound_drop_v2.mp3"},
	{"id": 6,"src":$scope.innerAudioPath +"sound_failure.mp3"},
	{"id": 7,"src":$scope.innerAudioPath +"sound_success.mp3"},
	{"id": 8,"src":$scope.innerAudioPath +"sound_swap.mp3"}];



	$scope.$watch('model',function(model){
		$scope.init();
	});

	$scope.init = function () {
		$scope.takeModelBackup();

		$scope.audioPath = inner + $scope.model.audioPath;
		$scope.imagePath = inner + $scope.model.imagePath;

		$scope.effectSingleUse();
		$scope.setInitial();
		$scope.reset();
	}



	/* Common Function */
	$scope.setProperty = function (collection, prop, value){
		angular.forEach(collection, function(item, index){
			item[prop] = value;
		})
	}


	/* Start - Clock Functions*/
	$scope.setInitial = function() {
		$scope.currentLevel = 1;
		$scope.chanceUsed = 0;
		$scope.totalLevel = $scope.model.totalLevel;
		$scope.totalChances = $scope.model.totalChances;
	}

	$scope.reset = function (argument) {
		$scope.showAnswer = false;
		$scope.showFinishButton = false;
		$scope.showNextButton = false;
		$scope.showCheckButton = false;
		$(".finish-btn").hide();
		$(".next-btn").hide();
		$(".check-btn").hide();
		$scope.linkDisabled = false;
		$scope.isLinkSelected = false;
		$scope.isLinkActivated = false;
		$scope.isLinkUsed = false;

		$scope.disabledAnswerDraggable = false;
		$scope.disabledDraggable = false;
		$scope.chanceUsed = 0;

		$scope.clocks = angular.copy($scope.model["level_"+$scope.currentLevel].answer);
		$scope.setClockDefaults();

		var filteredBlue = $filter("filter")($scope.clocks, {"type": "blue"}, true);
		var filteredGreen = $filter("filter")($scope.clocks, {"type": "green"}, true);

		//order it
		filteredBlue = $filter("orderBy")(filteredBlue, "id", true);
		filteredGreen = $filter("orderBy")(filteredGreen, "id", true);

		$scope.blueClocks = angular.copy(filteredBlue);
		$scope.greenClocks = angular.copy(filteredGreen);

		$scope.chanceCalculation($scope.totalChances);
		$scope.createDropArray();

	}

	$scope.createDropArray = function () {
		var droppableClocks = $filter('filter')($scope.clocks, {'type': '!static'}, true), dropName = "";
		$scope.dropAccessibility.splice(2);
		angular.forEach(droppableClocks, function(item, index) {
			name = item.dropId;
			$scope.dropAccessibility.push({name: name, type: "answer"});
		});
	}


	$scope.setClockDefaults = function(){
		var dropId = 0;

		angular.forEach($scope.clocks, function(item, index){
			item.dropped = false;
			item.droppedItem = [];
			item.isLinked = false;
			if(item.type != 'static') {
				dropId++;
				item.dropId = "Drop " + dropId;
			}
			item.popupEnabled = false;
			item.rotation = getNeedlePosition(item.time);

		});
	}

	function getNeedlePosition(value){
		var splitValue = value.split("-");
		var rotationValue = {};
		rotationValue.hour = splitValue[0] * 30;
		rotationValue.minute = splitValue[1] * 6;
		rotationValue.hour += (splitValue[1]/2);
		return rotationValue;
	}

	$scope.reduceChance = function(hidePrev){
		if($scope.chanceUsed < $scope.totalChances) {
			if(hidePrev) {
				$scope.chancesArr[$scope.chanceUsed].hide = true;
			}
			$scope.chancesArr[$scope.chanceUsed++].used = true;
			$scope.onChanceUsed();
		}
	}
	$scope.dragStart = function (value) {
	//
		$(".answer-clocks").find(".dial").css("pointer-events","auto")
		var linkButtonBackground = {
			out: inner + "content/assets/images/s27-challenge/link.png",
			hover: inner + "content/assets/images/s27-challenge/link_over.png",
			down: inner + "content/assets/images/s27-challenge/link_down.png"
		}
		$scope.linkButtonBackground = linkButtonBackground;

		$scope.changeEffect(1);
		value.drag.dropped = false;
		$scope.currentDragSourceType = value.source.type;
		$scope.currentDragSource = value.source.obj;
		$scope.currentValue = value;
		if($scope.currentDragSourceType === 'answer') {
			value.source.obj.dropped = false;
			value.source.obj.droppedItem[0]._hide = true;
		} else if($scope.currentDragSourceType === 'green') {
			$scope.greenLen = value.source.obj.length-1;
		} else {
			$scope.blueLen = value.source.obj.length-1;
		}
		if($scope.isLinkActivated && !$scope.isLinkUsed) {
			$scope.isLinkSelected = false;
			$scope.isLinkUsed = true;
			$scope.isLinkActivated = false;
			$scope.resetLink();
			$scope.disabledAnswerDraggable = false;
		} else if(!$scope.isLinkActivated && !$scope.isLinkUsed) {
			$scope.isLinkSelected = false;
		}
	}
	$scope.dragStartAfter = function () {
		if($scope.currentDragSourceType != 'answer') {
			$scope.currentValue.source.obj.splice($scope.currentValue.source.obj.indexOf($scope.currentValue.drag), 1);
		} else {
			$scope.currentValue.source.obj.droppedItem[0]._hide = false;
			$scope.currentValue.source.obj.droppedItem.splice(0);
			$scope.currentValue.source.obj.droppedItem = [];
		}
		$scope.$apply();
	}

	$scope.onDrop = function (value) {
		$scope.changeEffect(2);
        if(value.drop.droppedItem.length > 0){
			if($scope.currentDragSourceType == 'answer' && $scope.currentDragSource != value.drop){
				$scope.reduceChance(true);
				$timeout(function(){
					$scope.reduceChance();
				},25);

			}else if($scope.currentDragSourceType == 'answer' && $scope.currentDragSource == value.drop){
			}
			else{
				$scope.reduceChance();
			}
			var splicedItem = value.drop.droppedItem.splice(0)[0];
            value.drop.droppedItem = [];
            $timeout(function(){
				var alreadyExist=true;
	            for(var i=0;i<=value.drop.droppedItem.length;i++){
		            if(value.drop.droppedItem[i]==value.drag){
			            alreadyExist=false;
			            break;
		            }
	            }
	            if(alreadyExist){
					value.drop.droppedItem.push(value.drag);
	                value.drag.dropped = true;
	                value.drop.dropped = true;
				}else{
					$scope.relocateClocks(splicedItem);
	                $scope.greenLen = $scope.greenClocks.length;
	                $scope.blueLen = $scope.blueClocks.length;
					if(!isEffectMuted){

					  if(!$scope.iOSDevice){
						var ele = $("#effect_player_2")[0];
						$(ele).attr('src',$scope.effectsAudioArray[2].src)

						ele.play();
						}else{
							$timeout(function(){
							$scope.changeEffect(6);
							},50);
						}

					}
            $scope.$apply();
	                }
			},20)
            } else if($scope.currentDragSourceType == 'answer' && $scope.currentDragSource != value.drop){
				$scope.reduceChance();
					if(!isEffectMuted){
						if(!$scope.iOSDevice){
						var ele = $("#effect_player_2")[0];
						$(ele).attr('src',$scope.effectsAudioArray[2].src)
						ele.play();
						}else{
							$timeout(function(){
							$scope.changeEffect(6);
							},50);
						}
						}
            } else {
            }
            value.drag.popupEnabled = false;
            value.drop.droppedItem.push(value.drag);
            value.drag.dropped = true;
            value.drop.dropped = true;
						isDroppedFlag = true;
		setTimeout(function () {
			$scope.onLink();
			$scope.onLink();
			isDroppedFlag = false;
			$(".answer-clocks").find(".dial").css("pointer-events","auto")
		}, 3);
      $scope.$apply();
		$scope.setTabIndex();
		$timeout(function(){
			var allDropped = $scope.allClockDropped();
			if(!allDropped){
				$scope.changeNaration(1);
			}else{
				$scope.changeNaration(3);
			}
		},5);
    }
	$scope.resetTabIndex = function (param){
		for(var i=1;i<=6;i++){
			if(_array[i]!='dropped'){
				$("#dropElement-"+i).attr("tabindex","0");
			}
		}
		_array[param]="dropped";
		$("#dropElement-"+param).attr("tabindex","-1");
		console.log(_array)
	}
	$scope.dragStop = function (value) {
		$scope.dragStartAfter();
		if(value.source.type === 'answer') {
			if(!value.drag.dropped) {
				$scope.relocateClocks(value.drag);
				$scope.reduceChance();
					if(!isEffectMuted){
						if(!$scope.iOSDevice){
						var ele = $("#effect_player_2")[0];
						$(ele).attr('src',$scope.effectsAudioArray[2].src)
						ele.play();
						}else{
							$timeout(function(){
							$scope.changeEffect(6);
							},50);
						}
						}
			} else {
				//value.source.obj.dropped = false;
			}
		} else {
			if(!value.drag.dropped) {
				value.source.obj.push(value.drag);
				$scope.changeEffect(2);
			}
		}
		$scope.currentDragSourceType = "";
		value.drag.popupEnabled = false;
		var allDropped = $scope.allClockDropped();
		if(allDropped){
			$scope.showCheckButton = true;
			$(".check-btn").show();
			$scope.changeNaration(3);
		} else {
			$scope.showCheckButton = false;
			$(".check-btn").hide();
		}
		//$scope.refresh();
		$scope.greenLen = $scope.greenClocks.length;
		$scope.blueLen = $scope.blueClocks.length;
		$scope.setTabIndex();
		$scope.$apply();
	}

	$scope.$watch('greenClocks',function(model){
		$scope.greenLen = $scope.greenClocks.length;
	});
	$scope.$watch('blueClocks',function(model){
		$scope.blueLen = $scope.blueClocks.length;
	});
	/* End - drag functionalities */
	$scope.dragAcess = function(color, isDrop){
		var currText;
		if(isDrop) {
			currText = color +" clock dragged from " + color + " bin and dropped to rack."
		} else {
			currText = color +" clock dragged from " + color + " rack and dropped to bin."
			screenReader(currText);
		}
		$("#sr-text").text(currText);
	}
	function screenReader(param){
		$("#update-text").text(param);
	}
	$scope.relocateClocks = function(clock) {
		clock.popupEnabled = false;
		if(clock.type === 'blue'){
			$scope.blueClocks.push(clock);
		} else if (clock.type === 'green') {
			$scope.greenClocks.push(clock);
		}
	}

	$scope.allClockDropped = function () {
		var droppableClocks = $filter('filter')($scope.clocks, {'type': '!static'}, true);
		var droppedTotal = $filter('filter')(droppableClocks, {'dropped': true}, true);
		if(droppableClocks.length === droppedTotal.length){
			return true;
		}
		return false;
	}

	$scope.validateClock = function(){
		var result = true;
		angular.forEach($scope.clocks, function (item, index) {
			if(item.droppedItem.length && item.time !== item.droppedItem[0].time){
				result = false;
			}
		})
		return result;
	};


	/* Link code */
	$scope.onClockLinkSelection = function(clock) {
		if($scope.isLinkSelected) {
			clock.isLinked = !clock.isLinked;
			$scope.changeEffect(7);
			$scope.isLinkActivated = true;
			console.log("clicked>>...");


		}
	}

	$scope.resetLink = function() {
		$scope.setProperty($scope.clocks, "isLinked", false);
	}

	$scope.onLink = function() {
		if(!isDroppedFlag){
			$scope.changeEffect(0);
		}
		if(!$scope.isLinkUsed) {
			if($scope.isLinkActivated) {
				$scope.isLinkUsed = true;
				$scope.isLinkSelected = false;
				$scope.disabledAnswerDraggable = false;
				$scope.resetLink();

			} else {

				$scope.isLinkSelected = !$scope.isLinkSelected;
				if($scope.isLinkSelected) {
					$scope.changeNaration(2);
				}else{
					$scope.stopNaration();
				}
			}
			if($scope.isLinkSelected) {
				$(".answer-clocks").find(".dial").css("pointer-events","none")
				$scope.disabledAnswerDraggable = true;
				var linkButtonBackground = {
					down: inner + "content/assets/images/s27-challenge/link_down.png"
				}
			} else {
				$(".answer-clocks").find(".dial").css("pointer-events","auto")
				var linkButtonBackground = {
					out: inner + "content/assets/images/s27-challenge/link.png",
					hover: inner + "content/assets/images/s27-challenge/link_over.png",
					down: inner + "content/assets/images/s27-challenge/link_down.png"
				}
				$scope.disabledAnswerDraggable = false;
			}
			$scope.linkButtonBackground = linkButtonBackground;
		}
	}

	$scope.onLinkLeft = function (){
		var check = $scope.checkLinkNavigation("left");
		if(check.result) {
			$scope.switchClock("left");
			$scope.changeEffect(2);
		} else {
			if(!isEffectMuted){
			var ele = $("#effect_player_6")[0];
				$(ele).attr('src',$scope.effectsAudioArray[6].src)
				ele.play();
			}
		}
	}

	$scope.onLinkRight = function (){
		var check = $scope.checkLinkNavigation("right");
		if(check.result) {
			$scope.switchClock("right");
			$scope.changeEffect(2);
		} else {
			if(!isEffectMuted){
			var ele = $("#effect_player_6")[0];
				$(ele).attr('src',$scope.effectsAudioArray[6].src)
				ele.play();
			}
		}
	}

	$scope.switchClock = function(direction) {
		var switchCount = 0, i=0, droppedItem = null;
		if(direction === "left") {
			for(i=0; i<$scope.clocks.length; i++) {
				if($scope.clocks[i].isLinked ===  true){
					droppedItem = $scope.clocks[i].droppedItem.splice(0);
					$scope.clocks[i-1].droppedItem = droppedItem;
					$scope.clocks[i].isLinked = false;
					$scope.clocks[i-1].isLinked = true;
					$scope.clocks[i].dropped = false;
					$scope.clocks[i-1].dropped = true;
				}
			}
		} else if(direction === "right") {
			for(i= $scope.clocks.length - 1; i >= 0; i--) {
				if($scope.clocks[i].isLinked ===  true){
					droppedItem = $scope.clocks[i].droppedItem.splice(0);
					$scope.clocks[i+1].droppedItem = droppedItem;
					$scope.clocks[i].isLinked = false;
					$scope.clocks[i+1].isLinked = true;
					$scope.clocks[i].dropped = false;
					$scope.clocks[i+1].dropped = true;
				}
			}
		}
	}

	$scope.checkLinkNavigation = function(direction) {
		var check = 0, clockLength = $scope.clocks.length, i = 0, switchCount = 0, result = true;
		if(direction === "left") {
			for(i = 0; i < clockLength; i++) {
				if($scope.clocks[i].type !== 'static' && $scope.clocks[i].isLinked === true) {
					check = i-1;
					if(check > 0 && $scope.clocks[check].type !== 'static') {
						if($scope.clocks[check].droppedItem.length === 0 || $scope.clocks[check].isLinked === true) {
							switchCount++;
						} else {
							result = false;
						}
					} else {
						result = false;
					}
				}
			}
		} else if(direction === "right") {
			for(i = 0; i < clockLength; i++) {
				if($scope.clocks[i].type !== 'static' && $scope.clocks[i].isLinked === true) {
					check = i+1;
					if(check < clockLength && $scope.clocks[check].type !== 'static') {
						if($scope.clocks[check].droppedItem.length === 0 || $scope.clocks[check].isLinked === true) {
							switchCount++;
						} else {
							result = false;
						}
					} else {
						result = false;
					}
				}
			}
		}
		return {count:switchCount,
				result: result };
	}

	/* Chances code */
	$scope.chanceCalculation = function (getchanceCount){
		$scope.chancesArr =[];
		for(var i=0;i<getchanceCount;i++){
			$scope.chancesArr.push({
				id: i,
				used: false,
				randomNum: Math.random()
			});
		}
	}


	$scope.onChanceUsed = function(){
		if($scope.chanceUsed == $scope.totalChances) {
			$scope.showAnswer = true;
			$scope.blueClocks = [];
			$scope.greenClocks = [];
			$timeout(function(){
				$scope.blueClocks.length = 0;
				$scope.greenClocks.length = 0;
			},50);
			//$scope.changeEffect(4);
			if(!isEffectMuted){
				audioElement.setAttribute('src', $scope.audioPath + $scope.model.effects[4].audio);
				audioElement.play();
			}

			if($scope.currentLevel < $scope.totalLevel) {
				$scope.showNextButton = true;
				$(".next-btn").show();
				$scope.linkDisabled = true;
				$timeout(function(){
				$scope.changeNaration(5);
				},100);
			} else {
				$scope.showFinishButton = true;
				$(".finish-btn").show();
				$scope.linkDisabled = true;
				$timeout(function(){
				$scope.changeNaration(8);
				},100);
			}
			return true;
		}
		return false;
	}

	/* check button Code */
	$scope.checkClick = function () {
		$(".answer-clocks").find(".dial").css("pointer-events","auto")
		var linkButtonBackground = {
			out: inner + "content/assets/images/s27-challenge/link.png",
			hover: inner + "content/assets/images/s27-challenge/link_over.png",
			down: inner + "content/assets/images/s27-challenge/link_down.png"
		}
		$scope.linkButtonBackground = linkButtonBackground;

		var result = $scope.validateClock();
		if(result) {
			$scope.disabledAnswerDraggable = true;
			$(".answer-clocks").find(".dial").css("pointer-events","none")
			if($scope.currentLevel < $scope.totalLevel) {
				$scope.showNextButton = true;
				$(".next-btn").show();
				$scope.linkDisabled = true;
				$scope.changeNaration(6);
			} else {
				$scope.showFinishButton = true;
				$(".finish-btn").show()
				$scope.linkDisabled = true;
				$scope.changeNaration(7);
				//$scope.changeEffect(3);
			}
				if(!isEffectMuted){
						if(!$scope.iOSDevice){
						var ele = $("#effect_player_7")[0];
						$(ele).attr('src',$scope.effectsAudioArray[7].src)

						ele.play();
						}else{
							$timeout(function(){

							$scope.changeEffect(3);
							},50);
						}
						}
		} else if(!$scope.onChanceUsed()) {
			$scope.changeNaration(4);
			if(!isEffectMuted){
						if(!$scope.iOSDevice){
						var ele = $("#effect_player_6")[0];
						$(ele).attr('src',$scope.effectsAudioArray[6].src)

						ele.play();
						}else{
							$timeout(function(){

							$scope.changeEffect(4);
							},50);
						}
						}
			$scope.reduceChance();
			$scope.disabledAnswerDraggable = false;
			$scope.isLinkSelected = false;
		}
		$scope.showCheckButton = false;
		$(".check-btn").hide();
		if($scope.isLinkActivated && !$scope.isLinkUsed) {
				$scope.isLinkSelected = false;
				$scope.isLinkUsed = true;
				$scope.isLinkActivated = false;
				$scope.resetLink();
				$scope.disabledAnswerDraggable = false;
			} else if(!$scope.isLinkActivated && !$scope.isLinkUsed) {
				$scope.isLinkSelected = false;
			}
			$scope.changeEffect(0);
	}

	$scope.setTabIndex = function() {
		for(var i=0;i<$scope.clocks.length;i++) {
			if($scope.clocks[i].dropped) {
				$("#dropElement-"+i).attr("tabindex", -1);
			} else {
				//$("#dropElement-"+i).attr("tabindex", 0);
			}
		}
	}

	/* check button Code */
	$scope.nextClick = function () {
		$(".answer-clocks").find(".dial").css("pointer-events","auto")
		$scope.changeEffect(0);
		$scope.showNextButton = false;
		$(".next-btn").hide();
		if($scope.currentLevel < $scope.totalLevel) {
			$scope.currentLevel++;
			$scope.reset();
			$scope.model.narrations[0].playedOnce = true;
			$scope.changeNaration(0);
		}

	}

	/* Finish button Code */
	$scope.finishClick = function () {
		$(".blue-box-container").css("pointer-events","none");
		$(".green-box-container").css("pointer-events","none");
		$scope.changeEffect(0);
		$scope.enableAll = true;
		$scope.currentPage = "home";
		$scope.showFinishButton = false;
		$scope.showCheckButton = false;
		$(".finish-btn").hide();
		$(".check-btn").hide();
		$scope.model = JSON.parse(JSON.stringify($scope.backupModel));
		$scope.setInitial();
		$scope.stopNaration();
	}

	$scope.refresh = function() {
		$timeout(function(){
			$scope.$apply();
		});
	}

	$scope.setIsCheckedNow = function(b) {
		$scope.isCheckedNow = b;
	}

	/* End - Clock Functions*/

	$scope.takeModelBackup = function () {
		$scope.backupModel = JSON.parse(JSON.stringify($scope.model));
	}

	$scope.gameClick = function () {
		$scope.currentPage = $scope.prevPage;
		$scope.changeEffect(0);
	}

	$scope.howClick = function () {
		$scope.prevPage = $scope.currentPage;
		$scope.currentPage = "how";
		$scope.stopNaration();
		$scope.changeEffect(0);
	}

	$scope.playClick = function () {
		$scope.currentPage = "play";
		$scope.enableAll = false;
		$scope.enableHowToPlay = false;
		$scope.currentNarrationId = 0;
		if (isNarationMuted) {
			$scope.enableAll = true;
			$scope.enableHowToPlay = true;
			console.log("COMOING HERE");
			$(".blue-box-container").css("pointer-events","auto");
			$(".green-box-container").css("pointer-events","auto");
		} else {

			$scope.changeNarrationSrc();
			$scope.playNaration();
			$scope.enalbeNarrationBut = false;
		}

		//iPad wont support the audo play. So player have been dispatched.
	if($scope.hoverDevice){
		var audioArray=[0,2,4,5]
		sharedService.broadcastItem('initAudio',{"audioArray":audioArray});
	}
	if(!isEffectMuted) {
		sharedService.broadcastItem('playEffect',0);
	}
		$scope.currentEffectId = 0;
	}

	$scope.playEffectAudio=function(){
		if($scope.hoverDevice){
			var audioArray=[1,3,6,7]
			sharedService.broadcastItem('initAudio',{"audioArray":audioArray});
		}
	}

	/* START - NARRATION AUDIO EVENTS */
	$timeout(function () {
		narationAudio = $scope.getNarationAudioElement();
		narationAudioObj = $scope.getNarationAudioElement()[0];
		isNarationMuted = false;
		narationAudioObj.addEventListener('ended', $scope.narationEnded);
	}, 100);

	$scope.changeNarrationSrc = function () {
		narationAudio.attr('src', $scope.audioPath + $scope.model.narrations[$scope.currentNarrationId].audio);
	}

	$scope.playNaration = function () {
		narationAudioObj.play();
		$scope.narrationStatus = "playing";
	}

	$scope.stopNaration = function () {
		narationAudioObj.pause();
		try {
			narationAudioObj.currentTime = 0;
		} catch (e) {
		}
		$scope.narrationStatus = "stoped";
	}

	$scope.narationEnded = function () {
		$scope.narrationStatus = "ended";
		if(!levelDone) {
			$scope.enableHowToPlay = true;
			$scope.enalbeNarrationBut = true;
			$scope.enableAll = true;
			$(".blue-box-container").css("pointer-events","auto");
			$(".green-box-container").css("pointer-events","auto");
		}
		$scope.$apply();
	}

	$scope.narrationClick = function () {
		$scope.changeEffect(0);
		if(narationAudioObj.volume == 1) {
			$scope.narrationDispText = "Voice: off";
			$(".voice-btn").attr({"aria-pressed": "true"});
			narationAudioObj.volume = 0;
			$scope.stopNaration();
		} else {
			$scope.narrationDispText = "Voice: on";
			$(".voice-btn").attr({"aria-pressed": "false"});
			narationAudioObj.volume = 1;
		}
		isNarationMuted = !isNarationMuted;
	}

	$scope.changeNaration = function (n) {
		$scope.currentNarrationId = n;
		$scope.changeNarrationSrc();
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

	$scope.narationClick = function () {
		try {
			narationAudioObj.currentTime = 0;
		} catch (e) {
		}
		if(narationAudioObj.volume == 1) {
			$scope.playNaration();
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
			$(".effect-btn").attr({"aria-pressed": "false"});
			effectAudioObj.volume = 1;
		} else {
			$scope.effectDispText = "Sound: off";
			$(".effect-btn").attr({"aria-pressed": "true"});
			effectAudioObj.volume = 0;
			// audioElement.play();
			sharedService.broadcastItem('playEffect',0);
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
	/* End - NARRATION AUDIO EVENTS */
	//close button
	$scope.showClosealert = function(e) {
		$(".page").attr("aria-hidden", true);
		$(".dis-ass").attr("aria-hidden", true);
		$scope.showingclose = true;
		if(keyPressed) {
			$timeout(function(){
				// $("#closebox").focus();
				$(".no_btn").focus();
			},25);
		}
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
