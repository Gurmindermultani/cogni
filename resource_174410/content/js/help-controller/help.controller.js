var frSound, currSound, currPos, isPrevDoubleClicked;
currPos = 0;
$(document).ready(function() {
	//chapterFrames
	var touchtime = 0;
	var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', inner + '/content/assets/audios/s27-challenge/button_click.mp3');

  var audioElement1 = document.createElement('audio');
    audioElement1.setAttribute('src', inner + '/content/assets/audios/s27-challenge/button_click.mp3');

	$("#prev").attr("disabled", true);
	$("#next").attr("disabled", true);
	$("#pause").hide();

	$("#pause").on("click", function() {
		audioElement.play();
		$("#pause").hide();
		$("#play").show();
		$("#play").find("img").attr('src', "../assets/images/help/play_btn_up.png");
		currPos = frSound.position;
		canvasTimeLine.stop();
		frSound.stop();
	});
	
		$("#pause").find("img").attr('src', "../assets/images/help/pause_btn_up.png");
		$("#pause").on('mouseenter',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/pause_btn_over.png");
			}).on('mouseleave',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/pause_btn_up.png");
			}).on('mousedown',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/pause_btn_down.png");
			});
			
		$("#play").find("img").attr('src', "../assets/images/help/play_btn_up.png");
		$("#play").on('mouseenter',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/play_btn_over.png");
			}).on('mouseleave',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/play_btn_up.png");
			}).on('mousedown',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/play_btn_down.png");
			});
			
			
			
		$("#next").find("img").attr('src', "../assets/images/help/forward_btn_inactive.png");
		$("#next").on('mouseenter',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/forward_btn_over.png");
			}).on('mouseleave',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/forward_btn_up.png");
			}).on('mousedown',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/forward_btn_down.png");
			});
			
		$("#prev").find("img").attr('src', "../assets/images/help/replay_btn_inactive.png");
		$("#prev").on('mouseenter',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/replay_btn_over.png");
			}).on('mouseleave',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/replay_btn_up.png");
			}).on('mousedown',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/replay_btn_down.png");
			});
	
	
	
	
	
	$("body").on("mousedown touchstart", "*", function(e) {
		if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none") {
			$(this).css("outline", "none").on("blur", function() {
				$(this).off("blur").css("outline", "");
			});
		}
	});

	$("#play").on("click", function() {
		audioElement.play();
		$("#prev").attr("disabled", false);
		$("#prev").addClass("enabled");
		$("#next").attr("disabled", false);
		$("#next").addClass("enabled");
		$("#next").find("img").attr('src', "../assets/images/help/forward_btn_up.png");
		$("#prev").find("img").attr('src', "../assets/images/help/replay_btn_up.png");
		if (canvasTimeLine.currentFrame >= canvasTimeLine.totalFrames-1) {
			canvasTimeLine.gotoAndPlay(1);
		} else {
			canvasTimeLine.play();
		}

		$("#pause").show();
		$("#play").hide();
		$("#pause").find("img").attr('src', "../assets/images/help/pause_btn_up.png");
		if(currPos != 0) {
			frSound = playSound(currSound, 0, currPos);
		}
	});
	function singleClick(){
		setTimeout(function() {
			if(!isPrevDoubleClicked) {
				$("#pause").show();
				$("#play").hide();
				frSound.stop();
				gotoChapter(getChapter());
			}
		}, 500);
	}
	function doubleClick(){
		isPrevDoubleClicked = true;
		setTimeout(function() {
			isPrevDoubleClicked = false;
		}, 600);
		$("#pause").show();
		$("#play").hide();
		frSound.stop();
		var i = getChapter();
		if(i >= 1) {i--;}
		gotoChapter(i);
	}
	$("#prev").on("click", function() {
	    if (touchtime == 0) {
	        singleClick()
	        touchtime = new Date().getTime();
	    } else {
	        // compare first click to this click and see if they occurred within double click threshold
	        if (((new Date().getTime()) - touchtime) < 800) {
	            // double click occurred
	           //audioElement.play();
			   audioElement1.play();
			   setTimeout(function(){
				audioElement.play();
			}, 200);
				doubleClick();
	            touchtime = 0;
	        } else {
	            // not a double click so set as a new first click
				audioElement.play();
				singleClick()
	            touchtime = new Date().getTime();
	        }
	    }
	});
	$("#next").on("click", function() {
		audioElement.play();
		$("#pause").show();
		$("#play").hide();
		var chap = getChapter()+1;
		if(chap < chapterFrames.length) {
			frSound.stop();
			gotoChapter(chap);
		}
	});
	function gotoChapter(n) {
		try {
			canvasTimeLine.gotoAndPlay(chapterFrames[n].start);
		} catch (e) {	}
	}
	function getChapter() {
		for (var i = 0; i < chapterFrames.length; i++) {
			if (canvasTimeLine.currentFrame > chapterFrames[i].start && canvasTimeLine.currentFrame < chapterFrames[i].end) {
				return i;
			}
		}
	}
	function stopAtEnd() {
		canvasTimeLine.gotoAndStop(1);
		$("#prev").attr("disabled", true);
		$("#next").attr("disabled", true);
		
		$("#next").find("img").attr('src', "../assets/images/help/forward_btn_inactive.png");
		$("#prev").find("img").attr('src', "../assets/images/help/replay_btn_inactive.png");
		$("#pause").hide();
		$("#play").show();
	}

/******************************************************************/
	var shifted;
	var keyPressed;
	$(document).on('keyup keydown', function(e) {
		shifted = e.shiftKey;
		keyPressed = e.keyCode;
		setTimeout(function(){
			keyPressed = "";
		},100);
	});

	$(".help-clicked").hide();
	$(".help_button").on("click", function(e) {
		//$(".page").attr("aria-hidden", true);
		$(".dis-ass").attr("aria-hidden", true);
		$(".dis-ass").attr("tabindex",-1);
		var instContEle = document.getElementById("instCont").style.visibility = "visible";
		window.parent.document.getElementById("game-btn").style.visibility = "hidden";
		window.parent.document.getElementById("rootCloseBtn").setAttribute("aria-hidden", true);
		window.parent.document.getElementById("rootCloseBtn").setAttribute("tabindex", -1);
		$(".help-clicked").show();
		$("#game-button").css("display","block");
		if(keyPressed) {
			setTimeout(function(){
				$("#helpbox").focus();
			},100);

		}
	});
	
		$(".help_button").find("img").attr('src', "../assets/images/help/help_btn_up.png");
		$(".help_button").on('mouseenter',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/help_btn_over.png");
			}).on('mouseleave',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/help_btn_up.png");
			}).on('mousedown',function() {
					var elem = $(this).find("img")[0];
					$(elem).attr('src', "../assets/images/help/help_btn_down.png");
			});
	
	
	
	
	
	
	
	
	
	
	

$(".help-box").on('blur',function(e){
	if(shifted) {
		$(".no_btn").focus();
	}})

var mouseClicked=true;
$(".no_btn").on("mousedown",function(){
	mouseClicked=false;
});

$(".no_btn").on("click",function(event){
	//$(".page").attr("aria-hidden", false);
	$(".dis-ass").attr("aria-hidden", false);
	var instContEle = document.getElementById("instCont").style.visibility = "hidden";
	window.parent.document.getElementById("game-btn").style.visibility = "visible";
	$(".dis-ass").attr("tabindex",0);
	window.parent.document.getElementById("rootCloseBtn").setAttribute("aria-hidden", false);
	window.parent.document.getElementById("rootCloseBtn").setAttribute("tabindex", 0);
	$(".help-clicked").hide();
	$("#game-button").css("display","none");
	if(mouseClicked){
		$(".help_button").focus();
	}
	mouseClicked = true;
});


/*****************************************************************/
});
