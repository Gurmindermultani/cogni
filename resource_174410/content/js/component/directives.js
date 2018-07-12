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

app.directive('draggable', function($timeout) {
	return {
		scope: {
			dragStore: '=',
			dragProp: '=',
			dragStart : "&?",
			dragStop : "&?",
			source: "=?",
			enableAll: "=?"
		},
		link: function(scope, element, attr) {
			var el = element[0];
			$(el).draggable({
				containment: $("#activity-wrapper"),
				cursorAt: { top: 55, left: 50 },
				handle: '.isDraggable',
				zIndex: 2,
				cursor: 'move',
				revert: true,
				revertDuration: 0,
				helper: "clone",
				start: function(event, ui) {
					
					angular.element(ui.helper).addClass("dragging");
					scope.dragStore.splice(0);
					scope.dragStore.push(scope.dragProp);
					if(scope.dragStart) {
						scope.dragStart({
							arg: {
								drag: scope.dragStore[0],
								source: scope.source,
								ele:$(el)
							}
						});
					}
					scope.$apply();
				},
				stop: function(event, ui) {
					angular.element(ui.helper).removeClass("dragging");
					if(scope.dragStop) {
						scope.dragStop({
							arg: {
								drag: scope.dragStore[0],
								source: scope.source,
								ele:$(el)
							}
						});

					}
					scope.dragStore.splice(0);
				}
			});

			if(scope.enableAll !== 'undefined') {
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

		}
	}

});

app.directive('droppable', function() {
	return {
		scope: {
			dragStore:"=",
			dropProp: "=",
			onDrop: '&?'
		},
		link: function(scope, element, attr) {
			var el = element[0];
			$(el).droppable({
				tolerance: "pointer",
				drop: function( event, ui ) {
					var dragEl = $(ui.draggable);
					var dropEl = $(this);
					console.log($(el));
					if(scope.onDrop) {
						scope.onDrop({
							arg: {
								drag: scope.dragStore[0],
								drop: scope.dropProp,
								ele:$(el)
							}
						});
					}
				}
			});
		}
	}
});

app.directive('dragAccessible', function($timeout, $parse, $filter) {
	return function(scope, element, attr) {
		var index, dragStore, source, el, selectedDrop, isPopupEnabled, dragProp, isCamePopup = false;
		el = element[0];
		selectedDrop = 0;
		isPopupEnabled = false;

		dragProp = $parse(attr.dragProp)(scope);
		dragStore = $parse(attr.dragStore)(scope);
		source = $parse(attr.source)(scope);

		$(el).attr({
			"tabindex": "0",
			"aria-grabbed": "false",
			"aria-haspopup": "true"
		});
		$(el).on("focus", function() {
			createAccessEvents();
			$(this).css("z-index", 2);
		});
		function createAccessEvents() {
			dragProp = $parse(attr.dragProp)(scope);
			dragStore = $parse(attr.dragStore)(scope);
			source = $parse(attr.source)(scope);

			$(el).on("keydown", function(event) {
				if((event.altKey && event.keyCode == 53) && $(el).find(".isDraggable").length) {
					makePopup(true);
					addSelect();
				} else if(event.keyCode == 38 && isPopupEnabled) {
					moveUp();
				} else if(event.keyCode == 40 && isPopupEnabled) {
					moveDown();
				} else if(event.keyCode == 13) {
					if (isPopupEnabled) {
						doDrop();
					}
				}
			});
		}
		function makePopup(b) {

			if (source.type == "blue") {
				dragProp.popupEnabled = b;
			} else if (source.type == "green") {
				dragProp.popupEnabled = b;
			} else if (source.type == "answer") {
				dragProp.popupEnabled = b;
			}
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
			//$(el).find("ul")[0].scrollTop = ($(el).find("ul li.selected").index() + 1) * $(el).find("ul li.selected").height();
		}
		function moveUp() {
			var len = $(el).find("li").length;
			if(selectedDrop > 0) {
				selectedDrop--;
			} else {
				selectedDrop = len-1;
			}
			addSelect();
			//$(el).find("ul")[0].scrollTop = (($(el).find("ul li.selected").index()) * 24) - $(el).find("ul li.selected").height();
		}
		function addSelect() {
			$(el).find("li").removeClass("selected");
			$(el).find("li").eq(selectedDrop).addClass("selected");
		}
		function doDrop() {
			var ind, dropInd, dropProp, accessibilityObj, dropObj;
			ind = $(el).find("li.selected").attr("index");
			accessibilityObj = scope.dropAccessibility[ind];
			dragStore.splice(0);
			dragStore.push(dragProp);

			dropProp = $filter('filter')(scope.clocks, {dropId: accessibilityObj.name}, true)[0];

			scope.dragStart({
				drag: dragStore[0],
				source: source
			});

			if(accessibilityObj.type == 'answer') {
				//console.log("FFFFFFFFFFFFFFF");
				scope.onDrop({
					drag: dragStore[0],
					drop: dropProp
				});
			}

			scope.dragStop({
				drag: dragStore[0],
				source: source
			});

			dragStore.popupEnabled = false;
			dragStore.splice(0);
			if(source.type != "answer"){
				scope.dragAcess(source.type, true)
			}else{
				scope.dragAcess($(el).find("li.selected").text(), false)
			}
			$(el).blur();
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
app.directive('dynamicBackgroundv2', [function() {
	return {
		restrict: 'A',
		scope: {
			dynamicBackgroundv2: "="
		},
		link: function (scope, elem, attrs) {
		
			var elem1 = angular.element($(elem).find("img")[0]);
			//alert(elem)
			scope.$watch('dynamicBackgroundv2', function (value) {
				reset();
			});
			elem.on('mouseenter',function() {
				if(scope.dynamicBackgroundv2 && scope.dynamicBackgroundv2.hover) {
					
					$(elem1).attr('src', scope.dynamicBackgroundv2.hover);
				}
			}).on('mouseleave',function() {
				if(scope.dynamicBackgroundv2 && scope.dynamicBackgroundv2.out){
					
					$(elem1).attr('src', scope.dynamicBackgroundv2.out);
				}
			}).on('mousedown',function() {
				if(scope.dynamicBackgroundv2 && scope.dynamicBackgroundv2.down){
					
					$(elem1).attr('src', scope.dynamicBackgroundv2.down);
				}
			});
			function reset() {
				if (scope.dynamicBackgroundv2 && scope.dynamicBackgroundv2.out) {
					
					$(elem1).attr('src', scope.dynamicBackgroundv2.out);
				}
			}
		}
	};
}]);