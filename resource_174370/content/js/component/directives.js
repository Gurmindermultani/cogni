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

function allElementsFromPoint(x, y) {
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
}

app.directive('draggable', function() {
	return function(scope, element) {
		var el = element[0];
		$(el).draggable({
			containment: $("#activity-wrapper"),
			zIndex: 2,
			revert: true,
			revertDuration: 0,
			start: function(event) {
				scope.dragStart(event);
			},
			stop: function(event) {
				//scope.changeEffect(4);
				scope.dragStop(event);
				var el = allElementsFromPoint(event.pageX,event.pageY);
				if(!$(el).filter('.drop-container')[0]){
					$(this).hide();
					$('.drag-stations').find("." + $(this).data("type")).show();
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




app.directive('droppable', function() {
	return {
		link: function(scope, element) {
			var el = element[0];
			$(el).droppable({
				accept: ".isDraggable",
				drop: function( event, ui ) {
					var dragEl = $(ui.draggable);
					var dropEl = $(this);
					dragEl.hide();
					dropEl.find("." + $(dragEl).data("type")).show();
					//getting all the dropped elements
					var allDropped = $(".drop-container").find('img').map(function(index,img){
						if($(img).is(":visible"))
							return $(img).data('type');
					});
					scope.setDrop({
						arg: {
							source: dragEl.attr("source"),
							type: $(dragEl).data("type"),
							allDropped : allDropped
						}
					});
					scope.$apply();
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
				$(el).hide();
				$(".drop-container").find("." + $(el).data("type")).show();
				//getting all the dropped elements
				var allDropped = $(".drop-container").find('img').map(function(index,img){
					if($(img).is(":visible"))
						return $(img).data('type');
				});
				scope.setDrop({
					arg: {
						source: $(el).attr("source"),
						type : $(el).data("type"),
						allDropped : allDropped
					}
				});
				scope.$apply();
			}
			if(source == "greenDrag"){
				$(el).hide();
				$(".drop-container").find("." + $(el).data("type")).show();
				//getting all the dropped elements
				var allDropped = $(".drop-container").find('img').map(function(index,img){
					if($(img).is(":visible"))
						return $(img).data('type');
				});
				scope.setDrop({
					arg: {
						source: $(el).attr("source"),
						type : $(el).data("type"),
						allDropped : allDropped
					}
				});
				scope.$apply();
			}
			if (source == "blueDrop") {
				$(el).hide();
				$(".drag-stations").find("." + $(el).data("type")).show();
				//getting all the dropped elements
				var allDropped = $(".drop-container").find('img').map(function(index,img){
					if($(img).is(":visible"))
						return $(img).data('type');
				});
				scope.setDrop({
					arg: {
						source: $(el).attr("source"),
						type : $(el).data("type"),
						allDropped : allDropped
					}
				});
				scope.$apply();
			}

			if (source == "greenDrop") {
				$(el).hide();
				$(".drag-stations").find("." + $(el).data("type")).show();
				//getting all the dropped elements
				var allDropped = $(".drop-container").find('img').map(function(index,img){
					if($(img).is(":visible"))
						return $(img).data('type');
				});
				scope.setDrop({
					arg: {
						source: $(el).attr("source"),
						type : $(el).data("type"),
						allDropped : allDropped
					}
				});
				scope.$apply();
			}
			scope.$apply();

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
