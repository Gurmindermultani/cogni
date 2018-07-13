var frSound, currSound, currPos, isPrevDoubleClicked;
currPos = 0;
$(document).ready(function() {
    var ishelpDevice = (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1 || navigator.userAgent.indexOf("Macintosh") != -1) ? true : false;
    //alert(ishelpDevice)
    function addDeviceClass() {
        if (ishelpDevice) {
            $('.page').addClass('helpdevice')
        }
    }
    addDeviceClass();
    //chapterFrames
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', inner + 'content/assets/audios/sl026-challenge/button-click.mp3');

    $("#prev").attr("disabled", true);
    $("#next").attr("disabled", true);
    $("#pause").hide();

    $("#pause").on("click", function() {
        audioElement.play();
        $("#pause").hide();
        $("#play").show();
        currPos = frSound.position;
        canvasTimeLine.stop();
        frSound.stop();
    });

    $("#play").on("click", function() {

        $("#video-alert").html('<span class="sr-only">The alternate of video is provided within help keyboard instructions</span>');
        audioElement.play();
        $("#prev").attr("disabled", false);
        $("#prev").addClass("enabled");
        $("#next").attr("disabled", false);
        $("#next").addClass("enabled");
        if (canvasTimeLine.currentFrame >= canvasTimeLine.totalFrames - 1) {
            canvasTimeLine.gotoAndPlay(1);
        } else {
            canvasTimeLine.play();
        }

        $("#pause").show();
        $("#play").hide();
        if (currPos != 0) {
            frSound = playSound(currSound, 0, currPos);
        }
    });
    $("body").on("mousedown touchstart", "*", function(e) {
        if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none") {
            $(this).css("outline", "none").on("blur", function() {
                $(this).off("blur").css("outline", "");
            });
        }
    });

    $("#prev").on("click", function() {
        audioElement.play();
        setTimeout(function() {
            if (!isPrevDoubleClicked) {
                $("#pause").show();
                $("#play").hide();
                frSound.stop();
                gotoChapter(getChapter());
            }
        }, 500);
    });

    $("#prev").on("dblclick", function() {
        isPrevDoubleClicked = true;
        setTimeout(function() {
            isPrevDoubleClicked = false;
        }, 600);
        $("#pause").show();
        $("#play").hide();
        frSound.stop();
        var i = getChapter();
        if (i >= 1) { i--; }
        gotoChapter(i);
    });

    $("#next").on("click", function() {
        audioElement.play();
        $("#pause").show();
        $("#play").hide();
        var chap = getChapter() + 1;
        if (chap < chapterFrames.length) {
            frSound.stop();
            gotoChapter(chap);
        }
    });

    function gotoChapter(n) {
        try {
            canvasTimeLine.gotoAndPlay(chapterFrames[n].start);
        } catch (e) {}
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
        $("#pause").hide();
        $("#play").show();
    }



    /******************************************************************/
    var shifted;
    var keyPressed;
    $(document).on('keyup keydown', function(e) {
        shifted = e.shiftKey;
        keyPressed = e.keyCode;
        setTimeout(function() {
            keyPressed = "";
        }, 100);
    });

    $(".help-clicked").hide();
    $(".help_button").on("click", function(e) {
        //$(".page").attr("aria-hidden", true);
        audioElement.play();
        $(".dis-ass").attr("aria-hidden", true);
        $(".dis-ass").attr("tabindex", -1);
        var instContEle = document.getElementById("instCont").style.visibility = "visible";
        window.parent.document.getElementById("game-btn").style.visibility = "hidden";
        window.parent.document.getElementById("rootCloseBtn").setAttribute("aria-hidden", true);
        window.parent.document.getElementById("rootCloseBtn").setAttribute("tabindex", -1);
        $(".help-clicked").show();
        $("#game-button").css("display", "block");
        $("#helpbox .no_btn").focus();
        if (keyPressed) {
            setTimeout(function() {
                $("#helpbox .no_btn").focus();
            }, 100);

        }
    });

    $(".help-box").on('blur', function(e) {
        if (shifted) {
            $(".no_btn").focus();
        }
    })

    var mouseClicked = true;
    $(".no_btn").on("mousedown", function() {
        mouseClicked = false;
    });

    $(".no_btn").on("click", function(event) {
        //$(".page").attr("aria-hidden", false);
        $(".dis-ass").attr("aria-hidden", false);
        var instContEle = document.getElementById("instCont").style.visibility = "hidden";
        window.parent.document.getElementById("game-btn").style.visibility = "visible";
        $(".dis-ass").attr("tabindex", 0);
        window.parent.document.getElementById("rootCloseBtn").setAttribute("aria-hidden", false);
        window.parent.document.getElementById("rootCloseBtn").setAttribute("tabindex", 0);

        $(".help-clicked").hide();
        $("#game-button").css("display", "none");

        if (mouseClicked) {
            $(".help_button").focus();
        }

        mouseClicked = true;

    });

    /*****************************************************************/



});