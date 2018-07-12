'use strict'
app.directive('narrationAudio', function() {
	return function(scope, element) {
		var el = element[0];
		scope.getNarationAudioElement = function() {
			return $(el);
		}
	}
});

app.directive('effectAudio', function() {
	return function(scope, element) {
		var el = element[0];
		scope.getEffectAudioElement = function() {
			return $(el);
		}
	}
});

app.directive('draggable', function() {
	return function(scope, element) {
		var el = element[0];
		$(el).draggable({
			containment: $("#activity-wrapper"),
			zIndex: 2,
			revert: true,
			revertDuration: 0,
			start: function() {
				if(scope.currentMake==0){
					}else{				}
				scope.votStatus();
			},
			stop: function() {
				scope.changeEffect(4);
				scope.changeNaration(1);
				if(scope.isFirstDrop) {
					scope.stopNaration();
				} else {
					scope.setFirstDrop(true);
				}
				scope.showCheck();
				if(scope.model.narrations[scope.currentNarrationId].playedOnce){
					scope.stopNaration();
				}
		}
		});
		scope.$watch('enableAll',function(val, old ) {
			if (val) {
				$(el).draggable("enable");
				$(el).attr("tabindex", 0);
			} else {
				$(el).draggable("disable");
				$(el).attr("tabindex", -1);
			}
		});

	}
});
app.directive('draggableobj', function() {
	return function(scope, element) {
		var el = element[0];
		$(el).draggable({
			containment: $("#activity-wrapper"),

			zIndex: 2,
				start:function(event, ui){
				var dragEl = $(this);
				scope.votStatus();

			},
			stop:function(event, ui){
				var dragEl = $(this);
				var dragcurrentObj = dragEl.attr("index");
				var dragPrevObj = dragEl.attr("pIndex1")
				var dragshow = $(".dragI-"+dragPrevObj);
				var source = dragEl.attr("source");
				var dragParentInd= dragEl.attr("pindex1");
			//	console.log(scope.currentNarrationId+"_______1_________"+scope.model.narrations[scope.currentNarrationId].playedOnce);

				scope.dropobj2.splice(dragcurrentObj,1)
				if(source=="greenDrag"){
					scope.dragobj[dragcurrentObj].greenHidden=false;
				}
				if(source=="greenDrop"){

					scope.dragobj[dragParentInd].greenHidden=false;
				}
				dragshow.find(".drag-object-green").show();
				dragshow.attr("tabindex","0");
				scope.hiddenvalueGreen();
				scope.changeEffect(4);
				scope.changeNaration(1);
				if(scope.isFirstDrop) {
					scope.stopNaration();
				} else {
					scope.setFirstDrop(true);
				}
				scope.dragAcess();
				scope.showCheck();
				scope.$apply();
			}

		});
		scope.$watch('enableAll',function(val, old ) {
			if (val) {
				$(el).draggable("enable");
				$(el).attr("tabindex", 0);
			} else {
				$(el).draggable("disable");
				$(el).attr("tabindex", -1);
			}
		});

	}

});

app.directive('draggableobj1', function($timeout) {
	return function(scope, element) {
		var el = element[0];
		$(el).draggable({
			containment: $("#activity-wrapper"),

			zIndex: 2,
				start:function(event, ui){
				var dragEl = $(this);
				scope.votStatus();
			},
			stop:function(event, ui){
				var dragEl = $(this);
				var dragPrevObj = dragEl.attr("pIndex1")
				var dragcurrentObj = dragEl.attr("index");
				var source = dragEl.attr("source");
				var dragParentInd= dragEl.attr("pindex1");
				//console.log(scope.currentNarrationId+"_______2_________"+scope.model.narrations[scope.currentNarrationId].playedOnce);
				console.log("_______2_________");
				scope.dropobj1.splice(dragcurrentObj,1)

				var dragshow = $(".dragI-"+dragPrevObj);
				dragshow.find(".drag-object").show();

				if(source=="blueDrag"){
					scope.dragobj[dragcurrentObj].blueHidden=false;
				}
				if(source=="blueDrop"){

					scope.dragobj[dragParentInd].blueHidden=false;
				}

				scope.hiddenvalue();
				dragshow.attr("tabindex","0")
				scope.changeEffect(4);
				scope.changeNaration(1);
				if(scope.isFirstDrop) {
					scope.stopNaration();
				} else {
					scope.setFirstDrop(true);
				}
				scope.dragAcess();
				scope.showCheck();
				scope.$apply();
			}

		});

		scope.$watch('enableAll',function(val, old ) {
			if (val) {
				$(el).draggable("enable");
				$(el).attr("tabindex", 0);
			} else {
				$(el).draggable("disable");
				$(el).attr("tabindex", -1);
			}
		});
	}
});

app.directive('droppable', function() {
	return {
		scope: {
			drop: '&',
			bin: '=',
			setDrop: '&callbackFn'
		},
		link: function(scope, element) {
			var el = element[0];
			$(el).droppable({
				accept: ".drag1,.drop1",
				drop: function( event, ui ) {

					var dragEl = $(ui.draggable);
					var dropEl = $(this);
					dragEl.find(".dragImg").hide();
					dragEl.attr("tabindex","-1")

					scope.setDrop({
						arg: {
							source: dragEl.attr("source"),
							dragIndex: dragEl.attr("index"),
							dropIndex: dropEl.attr("index"),
							dragParentIndex: dragEl.attr("pIndex1"),
							dragParentInd: dragEl.attr("pindex")
						}
					});
					scope.$apply();
				}
			});

		}
	}

});
app.directive('droppable1', function() {
	return {
		scope: {
			drop: '&',
			bin: '=',
			setDrop1: '&callbackFn'
		},
		link: function(scope, element) {
			var el = element[0];
			$(el).droppable({
				accept: ".drag2,.drop2",
				drop: function( event, ui ) {

					var dragEl = $(ui.draggable);
					var dropEl = $(this);
					dragEl.find(".drag-object-green").hide();
					dragEl.attr("tabindex","-1")
					//dragEl.hide();

					scope.setDrop1({
						arg: {
							source: dragEl.attr("source"),
							dragIndex: dragEl.attr("index"),
							dropIndex: dropEl.attr("index"),
							dragParentIndex: dragEl.attr("pIndex1"),
							dragParentInd: dragEl.attr("pindex")
						}

					});
					scope.$apply();
				}
			});
		}
	}
});
app.directive('droppableinset', function() {
	return {
		scope: {
			drop: '&',
			bin: '=',
			setDrop1: '&callbackFn'
		},
		link: function(scope, element) {
			var el = element[0];
			$(el).droppable({
				accept: ".drag2",
				drop: function( event, ui ) {

					var dragEl = $(ui.draggable);
					var dropEl = $(this);
					dragEl.find(".drag-object-green").hide();
					//dragEl.hide();

					scope.setDrop1({
						arg: {
							source: dragEl.attr("source"),
							dragIndex: dragEl.attr("index"),
							dropIndex: dropEl.attr("index"),
							dragParentIndex: dragEl.attr("pIndex")
						}

					});
				}
			});
		}
	}
});

app.directive('dragAccessible', function($timeout) {
	return function(scope, element) {
		var index, pIndex, source, el, selectedDrop, isPopupEnabled, count=0;
		el = element[0];
		selectedDrop = 0;
		isPopupEnabled = false;

		$timeout(function () {
			index = $(el).attr("index");
			pIndex = $(el).attr("pIndex");
			source = $(el).attr("source");
		}, 200);

		$(el).attr({
			"tabindex": "0"
			//"aria-grabbed": "true",

		});

		$(el).on("focus", function() {
			createAccessEvents();

			$(this).css("z-index", 2);
		});
		function createAccessEvents() {
			$(el).on("keydown", function(event) {

				if(event.altKey && event.keyCode == 53 ) {
					scope.changeEffect(0);
					doDrop();
					//makePopup(true);
					//addSelect();
				} else if(event.keyCode == 38 && isPopupEnabled) {
					scope.changeEffect(0);
					moveUp();
				} else if(event.keyCode == 40 && isPopupEnabled) {
					scope.changeEffect(0);
					moveDown();
				} else if(event.keyCode == 13) {

					if (isPopupEnabled) {
						scope.changeEffect(1);
						doDrop();
					}
				}
			});
		}
		function makePopup(b) {
			try {
			if (source == "greenDrag") {
				scope.dragobj[index].popupEnabled = b;
			} else if (source == "blueDrag") {
				scope.dragobj[index].popupEnabled1 = b;
			} else if (source == "greenDrop") {
				var inx1 = $(el).attr("index")
				scope.dropobj2[inx1].popupEnabled = b;
			}	else if (source == "blueDrop") {
				var inx = $(el).attr("index")
				scope.dropobj1[inx].popupEnabled = b;
			}
			} catch (e) {}
			isPopupEnabled = b;
			scope.$apply();
		}
		function moveDown() {
			var len = $(el).find("li").length;
			if(selectedDrop < len-1) {
				selectedDrop++;
			} else {
				selectedDrop = 0;
			}
			addSelect();
		}
		function moveUp() {
			var len = $(el).find("li").length;
			if(selectedDrop > 0) {
				selectedDrop--;
			} else {
				selectedDrop = len-1;
			}
			addSelect();
		}
		function addSelect() {
			$(el).find("li").removeClass("selected");
			$(el).find("li").eq(selectedDrop).addClass("selected");
		}
		function doDrop() {
			var ind, dropInd;
			ind = $(el).find("li.selected").attr("index");
			dropInd = $(el).attr("index");
			$(el).attr({
				"tabindex": "0",
				"aria-grabbed": "false",
				"aria-drop": "true"
			});
			if (source == "blueDrag") {
				$(el).find(".dragImg").hide()
				$(el).attr("tabindex","-1");
				var dragIndex = $(el).attr("index");
				scope.dragAcess("blue", true, dragIndex);
				scope.setDrop({
					source: $(el).attr("source"),
					dragIndex: $(el).attr("index"),
					dropIndex: dropInd,
					dragParentIndex: $(el).attr("pIndex1")
				});
			}
			if(source == "greenDrag"){
				$(el).find(".drag-object-green").hide()
				$(el).attr("tabindex","-1");
				var dragIndex = $(el).attr("index");
				scope.dragAcess("green", true, dragIndex);
				scope.setDrop1({
					source: $(el).attr("source"),
					dragIndex: $(el).attr("index"),
					dropIndex: dropInd,
					dragParentIndex: $(el).attr("pIndex1")
				});
			}

			if (source == "blueDrop") {
				var dragIndex = $(el).attr("index");

				//scope.dragAcess("blue", false);
				var prevdropInd = $(el).attr("pindex1");
				var dropInd = $(el).attr("index");
				var parentDrag =  $(el).attr("pindex");
				scope.dropobj1.splice(dropInd,1)
				scope.dragAcess("blue", false, dragIndex);
				$(".drag1.dragI-"+prevdropInd).find(".dragImg").show()
				$(".drag1.dragI-"+prevdropInd).attr("tabindex","0")
				scope.dragobj[prevdropInd].blueHidden=false;
			}

			if (source == "greenDrop") {
				var dragIndex = $(el).attr("index");


				var prevdropInd = $(el).attr("pindex1");
				var dropInd = $(el).attr("index");
				var parentDrag =  $(el).attr("pindex");
				scope.dropobj2.splice(dropInd,1)
				scope.dragAcess("green", false, dragIndex);
				$(".drag2.dragI-"+prevdropInd).find(".drag-object-green").show()
				$(".drag2.dragI-"+prevdropInd).attr("tabindex","0")
				scope.dragobj[prevdropInd].greenHidden=false;
			}
			$(el).blur();
			scope.$apply();
			var dragIndexnext = $(el).attr("index")+1;
			 if (source == "greenDrop" ) {
				$(".drag-con1").find(".drag-con2").focus();
			}else if (source == "blueDrop" || source == "blueDrag") {
				$(".drag-con1").focus();
			}

		}

		function findDropIndex(ind) {
			for (var i = 0; i < scope.dropArray[scope.selectedData].length; i++) {
				if(scope.dropArray[scope.selectedData][i].name == scope.dropAccessibility[ind].name) {
					return i;
				}
			}
		}
		$(el).on("blur", function() {
			$(el).off("keydown");
			makePopup(false);
			selectedDrop = 0;
			$(this).css("z-index", 1);
		});
	}
});
app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
                event.preventDefault();
            }
        });
    };

});

app.directive('myPlayEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
								scope.muteNarration();
								scope.playClicked();
								scope.enableAll = true;
								scope.$apply();
                event.preventDefault();
            }
        });
    };
});
