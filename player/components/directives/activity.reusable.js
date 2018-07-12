'use strict'
app.directive('zoomAnimation', function($timeout) {
	return function(scope, element) {
		var el, elObj, intl, delay, oW, oH, zLevel, isZoomingIn, curProgress, marginT, marginL;
		el = element[0];
		delay = 700;
		zLevel = 1.25;
		curProgress = 1;
		$timeout(function () {
			elObj = $(el);
			elObj.on("mouseover", onOver);
			elObj.on("mouseout", onOut);
			elObj.on("click", onClick);
			elObj.css("background-size", "100%");
			oW = elObj.width();
			oH = elObj.height();
			marginL = -(oW*zLevel-oW)/2;
			marginT = -(oH*zLevel-oH)/2;
			if(elObj.hasClass("how-btn")) {
				elObj.data("hasAnimation", true);
				zoonIn();
			} else {
				checkPlayAnimationStarted();
			}
		}, 200);
		function zoonIn() {
			isZoomingIn = true;
			elObj.animate({
				"width": oW*zLevel,
				"height": oH*zLevel,
				"margin-left": marginL,
				"margin-top": marginT
			}, {
				duration: delay*curProgress,
				complete: function() {
					zoonOut();
				},
				progress: function(animation, progress, msRemaining) {
					curProgress = progress;
				}
			});
		}
		function zoonOut() {
			isZoomingIn = false;
			elObj.animate({
				"width": oW,
				"height": oH,
				"margin-left": 0,
				"margin-top": 0
			}, {
				duration: delay*curProgress,
				complete: function() {
					zoonIn();
				},
				progress: function(animation, progress, msRemaining) {
					curProgress = progress;
				}
			});
		}
		function onOver() {
			elObj.stop();
		}
		function onOut() {
			curProgress = 1-curProgress;
			if(elObj.data("hasAnimation")) {
				if(isZoomingIn) {
					zoonIn();
				} else {
					zoonOut();
				}
			}
		}
		function onClick() {
			elObj.stop();
			elObj.data("hasAnimation", false);
			elObj.css({
				"width": oW,
				"height": oH,
				"margin-top": 0,
				"margin-left": 0
			});
			if (elObj.hasClass("how-btn")) {
				elObj.parent().find(".play-btn").data("hasAnimation", true);
			} else {
				elObj.parent().find(".how-btn").data("hasAnimation", true);
			}
			checkPlayAnimationStarted();
		}
		function checkPlayAnimationStarted() {
			$timeout(function() {
				if(elObj.data("hasAnimation")) {
					zoonIn();
				} else {
					checkPlayAnimationStarted();
				}
			}, 1000);
		}
	}
});

app.directive('dynamicBackground', [function() {
	return {
		restrict: 'A',
		scope: {
			dynamicBackground: "="
		},
		link: function (scope, elem, attrs) {
			scope.$watch('dynamicBackground', function (value) {
				reset();
			});
			elem.on('mouseenter',function() {
				if(scope.dynamicBackground && scope.dynamicBackground.hover) {
					elem.css('background-image', "url("+scope.dynamicBackground.hover+")");
				}
			}).on('mouseleave',function() {
				if(scope.dynamicBackground && scope.dynamicBackground.out){
					elem.css('background-image', "url("+scope.dynamicBackground.out+")");
				}
			}).on('mousedown',function() {
				if(scope.dynamicBackground && scope.dynamicBackground.down){
					elem.css('background-image', "url("+scope.dynamicBackground.down+")");
				}
			});
			function reset() {
				if (scope.dynamicBackground && scope.dynamicBackground.out) {
					elem.css('background-image', "url(" + scope.dynamicBackground.out+")");
				}
			}
		}
	};
}]);
