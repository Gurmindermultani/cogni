(function(lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.ssMetadata = [];


    // symbols:
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.Symbol2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = getMCSymbolPrototype(lib.Symbol2, null, null);


    (lib.harconsoleControlShadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3333").s().p("AToBqQgbAAghgFIhCgJIhfgMQhFgHhpgKQhqgKiHgIQiGgJidgGQicgGitAAQiqAAidAGQieAGiHAJQiGAIhpAKQhqAKhFAHIheAMIhEAJQggAFgbAAQggABgZgMQgZgNgOghIg3iaQAKARAPAVQAPAVAWAUQAXATAhALQAhAMAuABQAYAAAdgEQBlgOB3gLQB4gKB/gHQB+gGB+gEQB8gEBxgBIDIgBIDKABQBxABB8AEQB9AEB+AGQCAAHB2AKQB4ALBmAOQAcAEAYAAQAuAAAigNQAggLAYgTQAWgUAPgVQAOgVAKgRIg2CaQgQAhgYANQgXALgdAAIgFAAg");
        this.shape.setTransform(140.7, 10.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 281.3, 21.3);


    (lib.harconsoleControlHighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFD445").s().p("AXqB8QgChAgdgpQgegogzgWQg0gXhCgKIjqglQiFgVihgTQihgUi9gNQi+gMjYgBQjXABi9AMQi9ANiiAUQihATiFAVIjrAlQhCAKgzAXQgzAWgdAoQgeApgCBAQgCA9AcBWIhZj/QgQgrASgeQARgdAugTQAugTBDgMIBngSQBQgPCCgTQCBgTCpgTQCogTDIgMQDHgMDcgBQDdABDIAMQDHAMCpATQCpATCBATQCBATBRAPIBmASQBDAMAuATQAuATARAdQASAegRArIhZD/QAdhWgCg9g");
        this.shape.setTransform(158.5, 27.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 317, 54.2);


    (lib.harbkgframe = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#9AD400").s().p("EAvjAKaInTAAInaAAInRAAIm4AAImPAAIlUAAIkLAAIiwAAIhEAAIgBAAIhFAAIiwAAIkKAAIlUAAImPAAIm4AAInRAAInaAAInSAAIlPgBQC8gECxgPQDkgTDVggQDUghDIgoQB4gZBNgVQBOgXAugVQAtgWAWgUQAXgVAHgVQAIgVACgWQADgVgJgoQgJgogRg1QgRg2gVg6IgqhzIgnhpIgdhQQgTg+AGgkQAGgkAXgSQAXgSAdgIIBlgdQBUgXCZghQCYghDgghQDfgfEngWQEngUFxgCIABAAQFwACEnAUQEoAWDfAfQDfAhCZAhQCZAhBUAXIBlAdQAdAIAXASQAXASAGAkQAGAkgUA+IgcBQIgoBpIgqBzQgUA6gRA2QgRA1gJAoQgJAoACAVQADAWAIAVQAHAVAWAVQAXAUAtAWQAtAVBOAXQBOAVB3AZQDIAoDVAhQDVAgDkATQDkATD1ABIm6AAg");
        this.shape.setTransform(359.3, 66.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(10.8, 0, 697, 133.1);


    (lib.harbackgroundpanel = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#9AD400").s().p("EhQGA4AMAAAhv/MCgNAAAMAAABv/g");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-112.7, -58.4, 1025.4, 716.9);


    (lib.HM_Symbol11 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AtcA3QgUgGgHgJQgIgLACgIIAAgKIAngBIBogDICUgFICrgEICtgFICbgFIBzgEIA3gCIAvgCIBdgEIB7gFICJgGICIgGIB4gFIBYgEIAngCIAsgCIgCAHQgCAGgJAMQgIALgXAMQgKADgrADQgrADhFADIiZAIIizAIIi8AHIizAHIicAFIhzAEIg6ACIgyABIhRABIhjACIhnACIhbABIhCABIgbAAg");
        this.shape.setTransform(89.4, 5.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 178.9, 11.1);


    (lib.HM_Symbol10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AuIAkIAAgHQgBgHAFgSQACgJAMgLQAKgIARgFQAQgFANAAIA4gBIAyAAIB6AAICuAAIDSAAIDlAAIDnAAIDYAAIC4ABICHABIBEACQAdAGANAHQAMAGAEAEQADAFgBAAIgtAAIg3ABIiIACIjDAEIjrAFIj+AGIj/AFIjqAGIjBAEIiFADIgzABIgXACIAAAAg");
        this.shape.setTransform(90.5, 3.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 181.1, 7.3);


    (lib.HM_mcshadowstackcopy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackShadowsShowing = 2
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AnLIfICmjdIgNgMQgYgZgBgkIAArBQABglAYgYQAYgZAlAAIJrAAQAkAAAZAZQAYAYABAlIAALBQgBAXgKASIAAADIieD6g");
        this.shape.setTransform(2.5, -3.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcshadowstackcopy10, new cjs.Rectangle(-43.4, -57.9, 92, 108.7), null);


    (lib.HM_mcshadowstackcopy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackShadowsShowing = 2
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AmcHhIBIhhIgMgLQgagZAAglIAArAQAAglAagYQAXgZAlgBIJqAAQAmABAYAZQAYAYABAlIAALAQgBAYgJASIAAADIhPB9g");
        this.shape.setTransform(-0.5, 1.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcshadowstackcopy4, new cjs.Rectangle(-41.8, -46.6, 82.6, 96.2), null);


    (lib.HM_mcshadowstackcopy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackShadowsShowing = 3
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AoQJ8IEwmXIgMgMQgZgZgBgkIAArBQABglAZgYQAYgZAkAAIJrAAQAlAAAYAZQAYAYABAlIAALBQgBAXgJASIAAADIkUG0g");
        this.shape.setTransform(6.5, -9.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcshadowstackcopy2, new cjs.Rectangle(-46.4, -73.2, 105.9, 127.3), null);


    (lib.HM_mcshadowstackcopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackShadowsShowing = 3
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AlgGoIDLkQIgIgHQgRgRAAgYIAAnWQAAgYARgQQAQgRAYAAIGcAAQAZAAAQARQAQAQABAYIAAHWQgBAPgGANIAAABIi4Ejg");
        this.shape.setTransform(6.5, -9.6, 1.5, 1.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcshadowstackcopy, new cjs.Rectangle(-46.4, -73.2, 105.9, 127.3), null);


    (lib.HM_mcinsideTarget2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AhyD4IAAnvIDlAAIAAHvg");
        this.shape.setTransform(11.5, 24.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcinsideTarget2, new cjs.Rectangle(0, 0, 23, 49.5), null);


    (lib.HM_mcdraggfxyellow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FEFE50", "#FFB600"], [0, 1], 20.9, 21.2, -38.2, -38.6).s().p("AjODxQgOAAgKgKQgJgKgBgOIAAmcQABgPAJgKQAKgJAOgBIGcAAQAPABAKAJQAJAKABAPIAAGcQgBAOgJAKQgKAKgPAAg");
        this.shape.setTransform(-0.5, -2.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "#FFFFA4", "#FFF577"], [0.365, 0.78, 1], -22.1, -19.6, 20.9, 18.5).s().p("AjOEIQgYgBgQgPQgQgRgBgZIAAmcQABgYAQgQQAQgRAYAAIGcAAQAZAAARARQAPAQABAYIAAGcQgBAZgPARQgRAPgZABg");
        this.shape_1.setTransform(-0.5, -2.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFF3E", "#FFB300"], [0, 1], -27, -4.5, 27.7, 4.7).s().p("AjOElQgYgBgQgQQgQgRgBgYIAAnVQABgZAQgQQAQgQAYgBIGcAAQAZABARAQQAPAQABAZIAAHVQgBAYgPARQgRAQgZABg");
        this.shape_2.setTransform(-0.5, 0);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#743A00").ss(1.3, 1, 1).p("ADOkqImcAAQgbABgRASQgSASgBAaIAAHWQABAbASASQASASAaABIGcAAQAbgBASgSQASgSABgbIAAnWQgBgbgSgRQgSgSgbgBgAECjrIAAHWQAAAWgPAPQgPAPgWAAImcAAQgWAAgOgPQgPgOAAgXIAAnWQAAgWAPgOQAOgPAWAAIGcAAQAWAAAPAPQAPAOAAAWg");
        this.shape_3.setTransform(-0.5, 0);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#FFFF3E", "#F2E300"], [0, 1], -27.6, -4.6, 28.1, 4.8).s().p("AjOEqQgaAAgSgSQgSgSgBgbIAAnVQABgbASgSQARgSAbAAIGcAAQAbAAASASQASASABAbIAAHVQgBAbgSASQgSASgbAAgAjykPQgPAOAAAXIAAHVQAAAWAPAPQAOAOAWABIGcAAQAWgBAPgOQAPgPAAgWIAAnVQAAgXgPgOQgPgOgWgBImcAAQgWABgOAOg");
        this.shape_4.setTransform(-0.5, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcdraggfxyellow, new cjs.Rectangle(-28.5, -30.9, 56, 61.7), null);


    (lib.HM_mcdraggfxgreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#C5FFC5", "#53ED0A"], [0, 1], 20.9, 21.2, -38.2, -38.6).s().p("AjODxQgOgBgKgJQgJgKgBgPIAAmbQABgPAJgKQAKgJAOgBIGdAAQAOABAKAJQAKAKAAAPIAAGbQAAAPgKAKQgKAJgOABg");
        this.shape.setTransform(27, 27);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "#D7FFC2", "#A4FF86"], [0.263, 0.69, 1], -22.1, -19.6, 20.9, 18.5).s().p("AjOEIQgYgBgQgPQgQgRgBgZIAAmbQABgZAQgQQAQgRAYAAIGdAAQAYAAAQARQARAQAAAZIAAGbQAAAZgRARQgQAPgYABg");
        this.shape_1.setTransform(27, 27);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#B1FF90", "#5DF500"], [0, 1], -26.4, 0, 26.4, 0).s().p("AjOElQgYAAgQgRQgQgQgBgZIAAnWQABgYAQgQQAQgQAYgBIGdAAQAYABAQAQQARAQAAAYIAAHWQAAAZgRAQQgQARgYAAg");
        this.shape_2.setTransform(27, 29.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#003F35").ss(1, 1, 1).p("AD7kXQgSgSgagBImcAAQgbABgSASQgSASgBAbIAAHVQABAbASASQASASAbABIGcAAQAbgBARgSQASgSABgbIAAnVQgBgbgSgSgAECjqIAAHVQAAAWgPAPQgOAPgWAAImcAAQgWAAgPgPQgPgPAAgWIAAnVQAAgWAPgPQAPgPAWAAIGcAAQAWAAAOAPQAPAPAAAWg");
        this.shape_3.setTransform(27, 29.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#005447").s().p("AjNErQgbgBgSgSQgSgSgBgbIAAnVQABgbASgSQASgSAbgBIGcAAQAaABASASQASASABAbIAAHVQgBAbgSASQgRASgbABgAjykPQgPAPAAAWIAAHVQAAAWAPAPQAPAPAWAAIGcAAQAWAAAOgPQAPgPAAgWIAAnVQAAgWgPgPQgOgPgWAAImcAAQgWAAgPAPg");
        this.shape_4.setTransform(27, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcdraggfxgreen, new cjs.Rectangle(-1, -1, 56, 61.8), null);


    (lib.HM_mcdraggfxbluecopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#B8F0FF", "#68B1FF"], [0, 1], 20.9, 21.2, -38.2, -38.6).s().p("AjNDxQgPAAgKgKQgJgKgBgOIAAmcQABgPAJgKQAKgJAPgBIGbAAQAPABAKAJQAJAKABAPIAAGcQgBAOgJAKQgKAKgPAAg");
        this.shape.setTransform(0, -2.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "#98D5FF", "#95D4FF"], [0.365, 0.78, 1], -22.1, -19.6, 20.9, 18.5).s().p("AjNEIQgZAAgQgRQgRgQAAgYIAAmcQAAgZARgQQAQgQAZgBIGbAAQAZABARAQQAPAQABAZIAAGcQgBAYgPAQQgRARgZAAg");
        this.shape_1.setTransform(0, -2.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#AEDCFF", "#038EFF"], [0, 1], -27, -4.5, 27.7, 4.7).s().p("AjNElQgZAAgQgRQgRgRAAgYIAAnWQAAgYARgQQAQgRAZAAIGbAAQAZAAARARQAPAQABAYIAAHWQgBAYgPARQgRARgZAAg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#0A0066").ss(1, 1, 1).p("ADPkqImcAAQgbABgSASQgSASgBAbIAAHVQABAbASASQASASAbABIGcAAQAbgBARgSQASgSABgbIAAnVQgBgbgSgSQgSgSgagBgAECjqIAAHVQAAAWgPAPQgOAPgWAAImcAAQgWAAgPgPQgPgPAAgWIAAnVQAAgWAPgPQAPgPAWAAIGcAAQAWAAAOAPQAPAPAAAWg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0A0066").s().p("AjNErQgbgBgSgSQgSgSgBgbIAAnVQABgbASgSQASgSAbgBIGcAAQAaABASASQASASABAbIAAHVQgBAbgSASQgRASgbABgAjykPQgPAPAAAWIAAHVQAAAWAPAPQAPAPAWAAIGcAAQAWAAAOgPQAPgPAAgWIAAnVQAAgWgPgPQgOgPgWAAImcAAQgWAAgPAPg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcdraggfxbluecopy, new cjs.Rectangle(-27.9, -30.8, 56, 61.8), null);


    (lib.HM_mcdraggfxblue = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#B8F0FF", "#68B1FF"], [0, 1], 20.9, 21.2, -38.2, -38.6).s().p("AjNDxQgPAAgKgKQgJgKgBgOIAAmcQABgPAJgKQAKgJAPgBIGbAAQAPABAKAJQAJAKABAPIAAGcQgBAOgJAKQgKAKgPAAg");
        this.shape.setTransform(0, -2.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "#98D5FF", "#95D4FF"], [0.365, 0.78, 1], -22.1, -19.6, 20.9, 18.5).s().p("AjNEIQgZAAgQgRQgRgQAAgYIAAmcQAAgZARgQQAQgQAZgBIGbAAQAZABARAQQAPAQABAZIAAGcQgBAYgPAQQgRARgZAAg");
        this.shape_1.setTransform(0, -2.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#AEDCFF", "#038EFF"], [0, 1], -27, -4.5, 27.7, 4.7).s().p("AjNElQgZAAgQgRQgRgRAAgYIAAnWQAAgYARgQQAQgRAZAAIGbAAQAZAAARARQAPAQABAYIAAHWQgBAYgPARQgRARgZAAg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#0A0066").ss(1, 1, 1).p("ADPkqImcAAQgbABgSASQgSASgBAbIAAHVQABAbASASQASASAbABIGcAAQAbgBARgSQASgSABgbIAAnVQgBgbgSgSQgSgSgagBgAECjqIAAHVQAAAWgPAPQgOAPgWAAImcAAQgWAAgPgPQgPgPAAgWIAAnVQAAgWAPgPQAPgPAWAAIGcAAQAWAAAOAPQAPAPAAAWg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0A0066").s().p("AjNErQgbgBgSgSQgSgSgBgbIAAnVQABgbASgSQASgSAbgBIGcAAQAaABASASQASASABAbIAAHVQgBAbgSASQgRASgbABgAjykPQgPAPAAAWIAAHVQAAAWAPAPQAPAPAWAAIGcAAQAWAAAOgPQAPgPAAgWIAAnVQAAgWgPgPQgOgPgWAAImcAAQgWAAgPAPg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcdraggfxblue, new cjs.Rectangle(-27.9, -30.8, 56, 61.8), null);


    (lib.HM_mcdragpurplehighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#9900CC").s().p("AjOE1QgfgBgUgVQgWgVAAgfIAAnWQAAgfAWgUIABgBQATgUAfgBIGcAAQAgABAUAVIABABQAUAUABAeIAAHWQgBAfgVAVQgUAVggABg");
        this.shape.setTransform(33.7, 36.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(153,0,204,0.929)").s().p("AjOE5QghgBgWgWQgVgWgBghIAAnWQABggAVgWIACgCQAVgUAggBIGcAAQAiABAVAWIACABQAUAVABAgIAAHWQgBAhgWAWQgVAWgiABgAkAkfIgBABQgWAUAAAfIAAHWQAAAfAWAVQAUAVAfABIGcAAQAggBAUgVQAVgVABgfIAAnWQgBgegUgUIgBgBQgUgVgggBImcAAQgfABgTAUg");
        this.shape_1.setTransform(33.7, 36.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(153,0,204,0.863)").s().p("AjOE9QgjgBgXgXQgXgXAAgjIAAnWQAAgiAXgXIADgCQAVgVAigBIGcAAQAjABAXAXIACACQAVAWABAhIAAHWQgBAjgXAXQgXAXgjABgAkDkjIgCACQgVAWgBAgIAAHWQABAhAVAWQAWAWAhABIGcAAQAigBAVgWQAWgWABghIAAnWQgBgggUgVIgCgBQgVgWgigBImcAAQggABgVAUg");
        this.shape_2.setTransform(33.7, 36.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(153,0,204,0.796)").s().p("AjOFBQgkgBgYgYQgZgZAAgkIAAnWQAAgjAZgZIAAAAQAXgYAlgBIGcAAQAkABAYAYIABAAQAYAYABAkIAAHWQgBAkgYAZQgYAYglABgAkFkmIgDACQgXAXAAAiIAAHWQAAAjAXAXQAXAXAjABIGcAAQAjgBAXgXQAXgXABgjIAAnWQgBghgVgWIgCgCQgXgXgjgBImcAAQgiABgVAVg");
        this.shape_3.setTransform(33.7, 36.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(153,0,204,0.729)").s().p("AjOFFQglgBgagZIAAgBQgagZAAgmIAAnWQAAglAagaIACgBQAYgYAkgBIGdAAQAmABAZAZIADACQAXAYABAlIAAHWQgBAmgZAZIgBABQgZAZgmABgAkKknIAAAAQgZAZAAAjIAAHWQAAAkAZAZQAYAYAkABIGcAAQAlgBAYgYQAYgZABgkIAAnWQgBgkgYgYIgBAAQgYgYgkgBImcAAQglABgXAYg");
        this.shape_4.setTransform(33.7, 36.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(153,0,204,0.663)").s().p("AjPFJQgngBgagbQgagagBgoIAAnWQABgnAagbIACgCQAagYAlgBIGdAAQAoABAbAaIACADQAYAZABAmIAAHWQgBAogaAaQgbAbgoABgAkLkrIgCABQgaAaAAAlIAAHWQAAAmAaAZIAAABQAaAZAlABIGcAAQAmgBAZgZIABgBQAZgZABgmIAAnWQgBglgXgYIgDgCQgZgZgmgBImdAAQgkABgYAYg");
        this.shape_5.setTransform(33.7, 36.5);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(153,0,204,0.596)").s().p("AjPFNQgogBgbgcQgcgbgBgqIAAnWQABgpAcgbIABgDQAbgZAngBIGdAAQAqABAcAcIABACQAaAaABAoIAAHWQgBAqgbAbQgcAcgqABgAkOkvIgCACQgaAbgBAnIAAHWQABAoAaAaQAaAbAnABIGdAAQAogBAbgbQAagaABgoIAAnWQgBgmgYgZIgCgDQgbgagogBImdAAQglABgaAYg");
        this.shape_6.setTransform(33.7, 36.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("rgba(153,0,204,0.063)").s().p("AjOFtIgBAAQg1gCglgkIAAAAQglglgBg2IAAnXIAAgBQABg1AlglIADgDQAjgiA0gBIABAAIGdAAQA3ABAkAlIADADQAiAjABA0IAAABIAAHXQgBA2glAlQgkAlg3ABgAjPloQgzABghAhIgDADQgkAjgBA0IAAABIAAHXQABA1AkAjIAAAAQAjAjA0ACIABAAIGdAAQA1gBAjgkIABAAQAjgjABg1IAAnXIAAgBQgBgzghghIgDgDQgjgkg1gBImdAAIAAAAIgBAAg");
        this.shape_7.setTransform(33.6, 36.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("rgba(153,0,204,0.129)").s().p("AjOFpIgBAAQg0gCgjgjIAAAAQgkgjgBg1IAAnXIAAgBQABg0AkgjIADgDQAhghAzgBIABAAIGdAAQA1ABAjAkIADADQAhAhABAzIAAABIAAHXQgBA1gjAjIgBAAQgjAkg1ABgAjPlkQgwABggAeIgFAFQgiAigBAyIAAABIAAHXQABAzAjAiQAiAiAyACIABAAIGdAAQA0gBAigjQAigiABgzIAAnXIAAgBQgBgxggggIgCgDQgigjg0gBImdAAIAAAAIgBAAg");
        this.shape_8.setTransform(33.6, 36.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("rgba(153,0,204,0.329)").s().p("AjOFdQgwgCgggfIAAgBQgggggBgvIAAnXIAAAAQABgwAgggIAFgEQAdgcAtgBIABAAIGdAAQAwABAgAgIAEAEQAcAeABAtIAAABIAAHXQgBAvggAgIAAABQggAggwABgAjOlYQgsABgdAbIgEAEQgfAfgBAuIAAAAIAAHXQABAuAfAfQAfAeAuACIGdAAQAugBAfgfQAfgfABguIAAnXQgBgtgcgdIgDgDQgfgfgugBImdAAIAAAAIAAAAg");
        this.shape_9.setTransform(33.6, 36.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("rgba(153,0,204,0.396)").s().p("AjOFZQgugCgfgeQgfgfgBguIAAnXIAAAAQABguAfgfIAEgEQAdgbAsgBIAAAAIGdAAQAuABAfAfIADADQAcAdABAtIAAHXQgBAugfAfQgfAfguABgAjOlUQgrABgcAcIgDACQgeAegBAsIAAAAIAAHWQABAtAeAeIAAAAQAeAdAsACIGdAAQAsgBAegeQAegeABgtIAAnWQgBgqgagcIgEgEQgegegsgBImdAAIAAAAIAAAAg");
        this.shape_10.setTransform(33.6, 36.5);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("rgba(153,0,204,0.263)").s().p("AjOFhIgBAAQgwgCghghIgBAAQghghgBgxIAAnXIAAgBQABgwAhghIAAAAQAggiAygBIABAAIGdAAQAyABAhAhIADADQAeAgABAvIAAABIAAHXQgBAxghAhQghAigyABgAjPlcQgtABgdAcIgFAEQggAggBAwIAAAAIAAHXQABAvAgAgIAAABQAgAfAwACIGdAAQAwgBAgggIAAgBQAgggABgvIAAnXIAAgBQgBgtgcgeIgEgEQgggggwgBImdAAIAAAAIgBAAg");
        this.shape_11.setTransform(33.6, 36.5);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("rgba(153,0,204,0.196)").s().p("AjOFlIgBAAQgygCgigiQgjgigBgzIAAnXIAAgBQABgyAigiIAFgFQAggeAwgBIABAAIGdAAQA0ABAiAjIACADQAgAgABAxIAAABIAAHXQgBAzgiAiQgiAjg0ABgAjPlgQgyABggAiIAAAAQghAhgBAwIAAABIAAHXQABAxAhAhIABAAQAhAhAwACIABAAIGdAAQAygBAhgiQAhghABgxIAAnXIAAgBQgBgvgeggIgDgDQghghgygBImdAAIAAAAIgBAAg");
        this.shape_12.setTransform(33.6, 36.5);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("rgba(153,0,204,0.529)").s().p("AjPFRQgpgBgegdIAAAAQgcgdgBgrIAAnWQABgqAcgdIADgCQAbgbApgBIABAAIGcAAQAsABAcAdIADACQAaAbABAqIAAHWQgBArgdAdIAAAAQgcAdgsABgAkRkyIgBADQgcAbgBApIAAHWQABAqAcAbQAbAcAoABIGdAAQAqgBAcgcQAbgbABgqIAAnWQgBgogagaIgBgCQgcgcgqgBImdAAQgnABgbAZg");
        this.shape_13.setTransform(33.7, 36.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("rgba(153,0,204,0.463)").s().p("AjOFVQgsgCgegdIAAAAQgegegBgtIAAnWIAAAAQABgsAegeIADgCQAcgcArgBIAAAAIGdAAQAsABAeAeIAEAEQAaAcABAqIAAHWQgBAtgeAeQgeAegsABgAjOlQQgqABgbAbIgCACQgdAdgBAqIAAHWQABArAdAdIAAAAQAdAdAqABIGdAAQArgBAcgdIABAAQAcgdABgrIAAnWQgBgqgagbIgDgCQgcgdgrgBImdAAIAAAAIAAAAg");
        this.shape_14.setTransform(33.6, 36.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcdragpurplehighlight, new cjs.Rectangle(0, 0, 67.3, 73), null);


    (lib.HM_harSymbol74 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BA0000").s().p("AglAeQgIgWgBgVQgBgWADgPQAEgPAHgDQABArAMAYQAMAYAPAKQAQAKAMACIAMACIgSAGQgSAGgZAKQgPgQgIgXg");
        this.shape.setTransform(4.7, 6.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 9.4, 13.9);


    (lib.HM_harSymbol73 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BA0000").s().p("AAOBkIgQgdQgJgRgIgSQgHgRgDgNQgCgLgBgTQgBgTABgUQABgTADgNQACgOADgBQgCARAAAXQgBAWAFAVQAFAVANALQAOANAJARQAIARADAPQADAPgCAJIgDANQgBAGgDABIAAAAQgDAAgIgLg");
        this.shape.setTransform(3.3, 11.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 6.7, 22.3);


    (lib.HM_harSymbol53 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Ah3B6QgCgHAAgMIACgXIACgRQABgCAAgBQAAgBAAgBQABAAAAAAQAAAAAAABIADAKQACAIAGAEQAGAEAMgFQAGgEAUgOQAVgPAbgWQAagWAbgZQAbgaATgbQATgbAFgYQALAJgBAJQgBAJgFAIIgJAOQgCAEgTAUIgwAwQgcAcgdAcQgfAcgYAVQgZAVgLAFIgDABQgDAAgCgFg");
        this.shape.setTransform(12.2, 12.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 24.3, 25.4);


    (lib.HM_harSymbol52 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AkpBPQgKgGgGgKQgIgKAAgMQCCg2BogcQBmgdBNgIQBNgJAyACQA0ADAZAFIAZAGQgkgGg2AHQg1AGg9AQQg/APg9AUQg+ATg4AUIhhAkIg8AYQgGAAgJgHg");
        this.shape.setTransform(32.2, 8.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 64.3, 17.3);


    (lib.HM_harSymbol51 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ABxBuQgIgGgFgGQgJgNgWgSQgWgSgbgTIg3gjIgvgeIgbgQQgGgFgFgNQgFgNgCgNQgCgNADgEQAGgEAaARQAbARAkAdQAjAdAjAeQAkAgAYAZQAZAZADAKQAEAOgGABIgCABQgEAAgGgEg");
        this.shape.setTransform(12.9, 11.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 25.8, 22.8);


    (lib.HM_harSymbol50 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AlqADQAFgPAHgDQAYgJAsgHQAsgGA6gDQA6gEA/gBQA/gBA+ABQA+ABA1ACQA2ADAlADQAmAEAOAEQAfALAHALQAHAJgFAHQgGAHgIgCQgSgGgugGQgugFhAgFQhBgEhLAAQhJAAhLAFQhKAFhCAMQhBANguAXQgEgdAFgPg");
        this.shape.setTransform(36.6, 4.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 73.3, 9.4);


    (lib.HM_harSymbol12 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ai4gRQAzgqA7gTQA8gSA6gBQA8AAAxALQAyAKAgAQQAgAQAGAOQgWgQgrgLQgrgMg7gCQg7gBhBAPQhBAPhBAlQhCAlg6BCQAkhJA0gqg");
        this.shape.setTransform(27.3, 9.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 54.5, 19.6);


    (lib.HM_harSymbol11 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AhCCwQg1gBgwgMQgxgLgkgXQgkgYgQgkQAfAiAuAWQAvAXA6AIQA5AJA/gIQBUgNBAglQA/gmAgg1QAgg0gKg7QgCgNABgPIAAgcQgBgOgHgLQAQASAOAXQAOAWAFAXQAIAsgRArQgQAqglAkQglAlg0AZQg0AZhAAJQgoAGgqAAIgUgBg");
        this.shape.setTransform(30.5, 17.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 61.1, 35.4);


    (lib.HM_harVoicebutton = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ACcAuQgJgEgFgJQgFgJAAgMQAAgKAFgIQAFgJAIgEQAJgFALAAQAQAAALALQAKAKAAAQQAAAQgKALQgLALgQAAQgKAAgJgFgACigDQgFAFAAALQAAALAFAFQAFAGAIAAQAHAAAFgGQAGgFAAgLQAAgLgGgFQgFgFgHAAQgIAAgFAFgAgGApQgJgKAAgRQAAgSAJgKQAJgKAPAAQAOAAAKAKQAJAKAAARIAAADIg1AAQAAAMAFAGQAGAHAKAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAAEgIQgFAFgBAJIAoAAQgBgIgEgFQgGgHgJAAQgJAAgFAGgAhMApQgJgKAAgSQAAgMAEgHQAEgJAIgFQAIgEAJAAQAMAAAIAGQAHAGACALIgMABQgBgGgFgEQgEgEgGAAQgKAAgFAHQgGAGAAAOQAAAPAFAGQAGAHAJAAQAHAAAFgFQAFgEABgJIAMABQgCANgIAHQgIAHgMAAQgPAAgJgKgAi5ApQgKgKAAgSQAAgTAMgKQAJgIANAAQAPAAAKAKQAJAKAAAQQAAAOgEAIQgEAIgIAEQgIAFgKAAQgPAAgJgKgAiwgHQgGAHAAANQAAAOAGAHQAGAHAJAAQAKAAAGgHQAGgHAAgOQAAgNgGgHQgGgHgKAAQgJAAgGAHgAESAxIAAglQAAgMgBgCQgBgDgDgCQgDgCgEAAQgFAAgEACQgEADgBAEQgCAEAAAMIAAAhIgTAAIAAhHIASAAIAAAKQAKgMAOAAQAGAAAGACQAFADADADQACAEABAEIABAMIAAAtgABFAxIAAgOIAOAAIAAAOgAhwAxIAAhHIAMAAIAABHgAj9AxIgnhjIAOAAIAaBIIAGAQIAFgQIAbhIIAOAAIgoBjgABFgIIAAgOIAOAAIAAAOgAhwgkIAAgOIAMAAIAAAOg");
        this.shape.setTransform(43.9, 12.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(14.6, 7.7, 58.7, 10.2);


    (lib.HM_harSymbol119 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFBD").s().p("Aj0CcIAAkUQABgPAKgKQAJgKAPAAIGjAAQAPAAAJAKQAKAKABAPIAAEUg");
        this.shape.setTransform(131.3, 121.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#BC9A85", "#FFFFCC"], [0, 1], -10.5, 0.2, 30.8, 40.1).s().p("AkUCzIAAknQAAgaASgSQASgRAagBIGuAAQAaABARARQARASABAaIAAEng");
        this.shape_1.setTransform(131.2, 119.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(103.5, 101.6, 55.4, 35.8);


    (lib.HM_harstarindent = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#BE176B").ss(1, 1, 1).p("AgbgDQACAAANABQAMACANABQAMACABgBQACABAAAB");
        this.shape.setTransform(5.6, -2.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#BE176B").ss(1, 1, 1).p("AgFBRQgDgBABgDQgBgBACgMQACgMADgNQABgNAAgDQgCgBgJgJQgKgKgJgGQgJgJgBgBQgBgBAAgCIAAgBQAAgCADAAQABgBAMgCQANgBAMgDQANgCACgBQABgBAGgNQAFgMAGgLIAFgMQABgCADAA");
        this.shape_1.setTransform(-4.3, 0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#BE176B").ss(1, 1, 1).p("AAaALQgBABgDAAQAAAAgMgGQgKgGgMgEQgLgHgCAA");
        this.shape_2.setTransform(2.9, 6.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#F181B6").ss(1, 1, 1).p("AAbgeQADAAAOACQAMACANABQAMACABAAQACABABABQAAABAAABQgBABAAACQAAAAgKAJQgIAIgKAJQgJAKgBABQABAEABAMQAEANACAMQACAMAAABQAAAAAAABQABABgDACQAAAAgDAAQgBAAgLgGQgMgFgLgGQgLgGgCgBQgDABgMAHQgKAGgMAGQgLAGAAAAQgDAAAAAAQgDgBABgCQgBgBABAAQgBgBACgMQACgMADgNQABgMAAgEQgCgBgJgJQgKgJgJgHQgJgJgBAAQgBgCAAgBQAAgBAAgBQAAgBADgBQABAAAMgDQANgBAMgDQAOgCACgBQABgBAGgNQAFgLAFgLQAEgMACgBQABgBADgBQACABAAABQAAABAHAMQAFAKAGALQAGAMABACg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#EC027A").s().p("AgwBRQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgBQgBgBACgMIAFgZIACgQQgDgBgJgJIgTgQIgKgJIgBgDIAAgCQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAOgDQANgBAMgDIAPgDIAHgNIAKgXQAFgMABgBIAEgCIACACIAGANIAMAWIAHANIAQACIAZAEIAOABIADACIAAACIgBADIgKAJQgIAIgKAJIgKALIACAQIAFAYIADAOIAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgDABIgMgGIgYgMIgMgGQgDABgMAGIgVANIgMAGIgDAAg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.4, -9.1, 18.9, 18.2);


    (lib.HM_harSoundbutton = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AC0AvQgJgEgEgJQgFgJAAgMQAAgKAFgIQAEgJAJgEQAJgFAKAAQARAAAKALQALAKAAAQQAAAQgLALQgKALgRAAQgKAAgJgFgAC7gCQgFAFAAALQAAALAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgLQAAgLgFgFQgFgFgIAAQgHAAgFAFgAAXAvQgHgFgEgIQgEgJAAgLQAAgLAEgIQADgJAIgEQAHgFAJAAQAGAAAFADQAGADADAEIAAgkIAMAAIAABjIgLAAIAAgJQgHALgOAAQgIAAgIgFgAAagGQgFAGAAAOQAAAOAGAHQAFAHAIAAQAJAAAFgHQAGgGAAgOQAAgPgGgGQgGgHgIAAQgIAAgGAHgAiCAxQgGgCgCgEQgDgDgBgGIgBgLIAAgsIANAAIAAAnIAAANQABAFAEADQAEACAFAAQAGAAAFgDQAFgCACgFQACgFAAgJIAAgmIAMAAIAABHIgLAAIAAgKQgIAMgPAAQgGAAgGgDgAjYAqQgJgKAAgSQAAgTALgKQAJgIAOAAQAPAAAJAKQAKAKAAAQQAAAOgEAIQgEAIgIAEQgJAFgJAAQgPAAgKgKgAjOgGQgGAGAAAOQAAAOAGAHQAGAHAJAAQAJAAAGgHQAGgHAAgOQAAgOgGgGQgGgHgJAAQgJAAgGAHgAkpAwQgJgEgFgIQgGgIAAgKIANgBQAAAHAEAFQADAFAHADQAHADAIAAQAIAAAGgCQAFgCADgEQADgEAAgFQAAgFgDgDQgCgEgHgCIgSgFQgNgDgGgCQgHgEgEgGQgDgFAAgHQAAgIAEgGQAEgHAJgDQAIgEAKAAQALAAAJAEQAIAEAFAGQAEAHABAJIgNABQgBgJgGgFQgGgFgLAAQgMAAgGAEQgFAFAAAGQAAAFAEAEQADADARAEQAQAEAGACQAIAEAFAGQAEAGAAAIQAAAIgFAHQgEAHgJAEQgJAEgKAAQgOAAgJgEgAErAyIAAglQAAgMgCgCQgBgDgDgCQgCgCgEAAQgFAAgEACQgEADgCAEQgBAEAAAMIAAAhIgTAAIAAhHIASAAIAAAKQAJgMAOAAQAHAAAFACQAFADADADQADAEABAEIABAMIAAAtgABeAyIAAgOIAOAAIAAAOgAgSAyIAAgsQAAgGgBgEQgCgEgDgCQgEgCgFAAQgIAAgFAFQgGAFAAANIAAAnIgNAAIAAhHIAMAAIAAAKQAIgMAPAAQAGAAAGACQAFADADAEQADADABAGIAAALIAAAsgABegHIAAgOIAOAAIAAAOg");
        this.shape.setTransform(44.2, 12.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(12.5, 7.5, 63.6, 10.4);


    (lib.HM_harRArrowhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#DE79F7", "#BA00FF"], [0, 1], 37.3, 19.9, -24.4, -13.1).s().p("AA1DHQgDgCAAgDIAAhrIkgAfQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgCgXIgDg1IgFg+IgDg2IgCgWQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIgBgBIALACIApAEIBXAIICYAPIAMABIgFh0QAAgDACgBQADgCADADIDPC8QABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIjHDHIgEABIgCAAg");
        this.shape.setTransform(-0.1, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#E697FF", "#C000F5"], [0, 1], -26.3, -11.7, 36.1, 17.2).s().p("AAyDQQgJgEAAgKIAAhgIkWAeQgHAAgFgEQgEgEgBgGIgPjWQAAgHAFgFQAFgEAHAAIAVACIA2AFIBGAHIBGAHIA1AFIAWACIgBgQIgCgkIgBgkIgBgQQAAgKAJgEQAJgEAHAGIDPC9QAFAEAAAGQAAAGgEAEIjIDIQgFAEgGAAIgFgBg");
        this.shape_1.setTransform(-0.1, 0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#660066").ss(1, 1, 1).p("AA3jtQgOgCgMAGQgMAFgHALQgHALAAANQAAABAAABQAAABABAKQAAAKABAQQAAAQABARQgVgCgggDQgggDgjgEQgjgDgfgDQgegDgUgCQgTgCAAAAQgVgBgPAOQgPAPABAUIAPDWQACATAOAMQAPAMATgCQAAAAATgCQASgCAdgDQAegDAhgDQAigEAfgDQAegDAVgDQAAAQAAAOQAAAPAAAJQAAAJAAAAQAAAOAHALQAIALAMAGQANAFANgDQANgCAKgKIDIjIQANgNAAgSQgBgUgOgNIjPi8QgKgJgNgCg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#BA00FF", "#A900CA"], [0, 1], -28.4, -15.8, 22.3, 16).s().p("AAmDsQgMgGgIgLQgHgLAAgOIAAgJIAAgYIAAgeIgzAGIhBAHIg/AGIgvAFIgTACQgTACgPgMQgOgMgCgTIgPjWQgBgUAPgPQAPgOAVABIATACIAyAFIBCAGIBDAHIA1AFIgBghIgBgaIgBgLIAAgCQAAgNAHgLQAHgLAMgFQAMgGAOACQANACAKAJIDPC8QAOANABAUQAAASgNANIjIDIQgKAKgNACIgJABQgIAAgJgDg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("AA3BRIkmAgIgPjWIEzAdIgFh5IDPC9IjIDGg");
        this.shape_4.setTransform(-4.4, -0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 3
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#FF0000").ss(1, 1, 1).p("AAGjCQAAAUABAWQgZgDgngEQgngEgqgEQgqgFglgDQgkgEgYgCQgXgDAAAAQgZgBgTARQgRATABAaIASEMQACAYASAQQARAPAXgCQAAAAAXgDQAWgCAjgEQAjgEApgEQAogFAlgEQAlgEAZgDQAAAUAAASQAAASAAALQAAAMAAAAQAAASAJAOQAJANAPAHQAQAHAPgEQAQgDAMgMIDwj7QAQgRAAgXQgBgYgRgRIj5jsQgNgMgPgDQgQgCgPAHQgPAHgIAOQgIAOgBAQQABACAAABQAAAAAAANQAAANACAUg");

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FF0000").s().p("AAuEoQgPgHgJgNQgJgOAAgSIAAgMIAAgdIAAgmIg+AHIhNAJIhMAIIg5AGIgXADQgXACgRgPQgSgQgCgYIgSkMQgBgaARgTQATgRAZABIAXADIA8AGIBPAIIBRAIIBAAHIgBgqIgCghIAAgNIgBgDQABgQAIgOQAIgOAPgHQAPgHAQACQAPADANAMID5DsQARARABAYQAAAXgQARIjwD7QgMAMgQADIgLABQgKAAgKgEg");

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFF00").s().p("ABDBmIljAnIgSkNIFyAmIgGiZID5DtIjwD6g");
        this.shape_7.setTransform(-5.4, -0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }] }).wait(1));

        // Layer 2
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("rgba(0,0,0,0.302)").s().p("AAmDsQgMgGgIgLQgHgLAAgOIAAgJIAAgYIAAgeIgzAGIhBAHIg/AGIgvAFIgTACQgTACgPgMQgOgMgCgTIgPjWQgBgUAPgPQAPgOAVABIATACIAyAFIBCAGIBDAHIA1AFIgBghIgBgaIgBgLIAAgCQAAgNAHgLQAHgLAMgFQAMgGAOACQANACAKAJIDPC8QAOANABAUQAAASgNANIjIDIQgKAKgNACIgJABQgIAAgJgDg");
        this.shape_8.setTransform(8.8, 8.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37.1, -31, 75.9, 63.4);


    (lib.HM_harRArrow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#DE79F7", "#BA00FF"], [0, 1], 37.3, 19.9, -24.4, -13.1).s().p("AA1DHQgDgCAAgDIAAhrIkgAfQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgCgXIgDg1IgFg+IgDg2IgCgWQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIgBgBIALACIApAEIBXAIICYAPIAMABIgFh0QAAgDACgBQADgCADADIDPC8QABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIjHDHIgEABIgCAAg");
        this.shape.setTransform(-0.1, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#E697FF", "#C000F5"], [0, 1], -26.3, -11.7, 36.1, 17.2).s().p("AAyDQQgJgEAAgKIAAhgIkWAeQgHAAgFgEQgEgEgBgGIgPjWQAAgHAFgFQAFgEAHAAIAVACIA2AFIBGAHIBGAHIA1AFIAWACIgBgQIgCgkIgBgkIgBgQQAAgKAJgEQAJgEAHAGIDPC9QAFAEAAAGQAAAGgEAEIjIDIQgFAEgGAAIgFgBg");
        this.shape_1.setTransform(-0.1, 0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#660066").ss(1, 1, 1).p("AA3jtQgOgCgMAGQgMAFgHALQgHALAAANQAAABAAABQAAABABAKQAAAKABAQQAAAQABARQgVgCgggDQgggDgjgEQgjgDgfgDQgegDgUgCQgTgCAAAAQgVgBgPAOQgPAPABAUIAPDWQACATAOAMQAPAMATgCQAAAAATgCQASgCAdgDQAegDAhgDQAigEAfgDQAegDAVgDQAAAQAAAOQAAAPAAAJQAAAJAAAAQAAAOAHALQAIALAMAGQANAFANgDQANgCAKgKIDIjIQANgNAAgSQgBgUgOgNIjPi8QgKgJgNgCg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#BA00FF", "#A900CA"], [0, 1], -28.4, -15.8, 22.3, 16).s().p("AAmDsQgMgGgIgLQgHgLAAgOIAAgJIAAgYIAAgeIgzAGIhBAHIg/AGIgvAFIgTACQgTACgPgMQgOgMgCgTIgPjWQgBgUAPgPQAPgOAVABIATACIAyAFIBCAGIBDAHIA1AFIgBghIgBgaIgBgLIAAgCQAAgNAHgLQAHgLAMgFQAMgGAOACQANACAKAJIDPC8QAOANABAUQAAASgNANIjIDIQgKAKgNACIgJABQgIAAgJgDg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("AA3BRIkmAgIgPjWIEzAdIgFh5IDPC9IjIDGg");
        this.shape_4.setTransform(-4.4, -0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [] }, 1).wait(3));

        // Layer 2
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(0,0,0,0.302)").s().p("AAmDsQgMgGgIgLQgHgLAAgOIAAgJIAAgYIAAgeIgzAGIhBAHIg/AGIgvAFIgTACQgTACgPgMQgOgMgCgTIgPjWQgBgUAPgPQAPgOAVABIATACIAyAFIBCAGIBDAHIA1AFIgBghIgBgaIgBgLIAAgCQAAgNAHgLQAHgLAMgFQAMgGAOACQANACAKAJIDPC8QAOANABAUQAAASgNANIjIDIQgKAKgNACIgJABQgIAAgJgDg");
        this.shape_5.setTransform(8.8, 8.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31, -24.9, 69.8, 57.3);


    (lib.HM_harnumberrackhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], -256.5, -29.1, 0, -256.5, -29.1, 529).s().p("Egn5ABdQgTgMgMgSQgLgUgBgYIAAgKIAAgRIAAgJQABgZAMgTQALgUATgLQAUgLAYgBIgBAAIAJAAIAQABMBODgABQAYABAUALQAUALALAUQALATAAAZIAAAcQAAAYgLATQgLAUgUALQgTAMgYABIg3AAIiaAAIjwAAIk5AAIlzAAImfAAIm/AAInOABInSAAInJAAImwABImKABIlWABIkTABIjGACQgXAAgUgMg");
        this.shape.setTransform(271.7, 22.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFF258", "#FFC000", "#FFB600"], [0, 0.667, 0.992], -17.1, -68.4, 25.2, 100.9).s().p("EgmWAB4Ig3AAQgdAAgWgOQgXgNgOgXQgNgXAAgcIAAgKIAAgQIAAgKQAAgdANgWQAOgXAXgOQAWgNAdgBIA4AAICgAAID3AAIFBAAIF8AAIGoAAIHGAAIHTAAIHUAAIHFAAIGoAAIF9AAIFBAAID4AAICeAAIA5AAQAdABAWANQAXAOANAXQAOAWAAAdIAAAIIAAANIAAAHQAAAcgOAXQgNAXgXAOQgWANgcAAIg6AAIieABIj4AAIlBABIl9AAImoABInFAAInUABInTABInGAAImoABIl8AAIlCABIj3ABIigAAg");
        this.shape_1.setTransform(271.7, 22.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], 0, -14, 0, 13.3).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgjQAAgrAUghQAUgiAigUQAigUAqgBMBObAAAQAqABAiAUQAiAUAUAiQAUAhAAArIAAAcQAAAqgUAiQgUAigiAUQgiATgqABMhObAAIQgqgBgigUg");
        this.shape_2.setTransform(271.7, 22.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FEC200", "#FE9F00"], [0, 0.992], 0, -13.6, 0.1, 13.1).s().p("EgmWAB4Ig3AAQgdAAgWgOQgXgNgOgXQgNgXAAgcIAAgKIAAgQIAAgKQAAgdANgWQAOgXAXgOQAWgNAdgBIA4AAICgAAID3AAIFBAAIF8AAIGoAAIHGAAIHTAAIHUAAIHFAAIGoAAIF9AAIFBAAID4AAICeAAIA5AAQAdABAWANQAXAOANAXQAOAWAAAdIAAAIIAAANIAAAHQAAAcgOAXQgNAXgXAOQgWANgcAAIg6AAIieABIj4AAIlBABIl9AAImoABInFAAInUABInTABInGAAImoABIl8AAIlCABIj3ABIigAAg");
        this.shape_3.setTransform(271.7, 22.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#FE8D00", "#E16A00"], [0, 0.992], 0.1, 16.9, 0, -17.8).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgjQAAgrAUghQAUgiAigUQAigUAqgBMBObAAAQAqABAiAUQAiAUAUAiQAUAhAAArIAAAcQAAAqgUAiQgUAigiAUQgiATgqABMhObAAIQgqgBgigUg");
        this.shape_4.setTransform(271.7, 22.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#720D09").ss(2, 1, 1).p("EApkAALQAAAqgUAiQgUAigiAUQgiAUgqAAMhObAAHQgqAAgigUQgigUgUgiQgUghAAgqIAAgkQAAgrAUghQAUgiAigUQAigUAqgBMBObAAAQAqABAiAUQAiAUAUAiQAUAhAAArg");
        this.shape_5.setTransform(271.7, 22.5);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.lf(["#FEE758", "#F7B201"], [0, 0.992], 0.1, 16.9, 0, -17.8).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgjQAAgrAUghQAUgiAigUQAigUAqgBMBObAAAQAqABAiAUQAiAUAUAiQAUAhAAArIAAAcQAAAqgUAiQgUAigiAUQgiATgqABMhObAAIQgqgBgigUg");
        this.shape_6.setTransform(271.7, 22.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FF0000").s().p("EgnNADhQg6gBgugcQgvgbgbgvQgcgugBg5IAAglQABg5AcguQAbgvAvgcQAugbA6gBMBObAAAQA6ABAuAbQAvAcAcAvQAbAuABA5IAAAdQgBA5gbAvQgcAugvAcQguAcg5AAIg5AAIifAAIj4ABIlBAAIl8ABImoABInFAAInVABInTAAInGABImoABIl8ABIlBAAIj3AAIigABIg4AAgEgn8gBjQgWANgMAVQgNAVAAAaIAAAlQAAAZANAWQAMAVAWANQAUAMAbAAIA4AAICgAAID3AAIFBgBIF8gBIGoAAIHGgBIHTAAIHVgBIHFgBIGogBIF8AAIFBAAID4gBICfAAIA4AAQAagBAVgMQAWgNAMgVQANgVAAgaIAAgdQAAgagNgVQgMgVgWgNQgVgMgaAAMhObAAAQgbAAgUAMg");
        this.shape_7.setTransform(271.7, 22.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.lf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], 0, -14, 0, 13.3).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgjQAAgrAUghQAUgiAigUQAigUAqgBMBObAAAQAqABAiAUQAiAUAUAiQAUAhAAArIAAAcQAAAqgUAiQgUAigiAUQgiATgqABMhObAAIQgqgBgigUg");
        this.shape_8.setTransform(271.7, 22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 543.3, 45);


    (lib.HM_harLives = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E2C910").ss(1, 1, 1).p("ABFgwQgBgBgKAKQgKAJgKAKQgKAKgBABQAAABABAIQACAJACAMQACALACAJQACAJAAgBAgVAYQAAAAgLAHQgMAGgLAGIgNAG");
        this.shape.setTransform(1.5, 3.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#F5F8BA").ss(1, 1, 1).p("ABVgTQABAAgHgCQgHgBgKAAQgGAAgHgBQgIgBgGgBIgFAAAAAhQQABgBgDAIQgEAJgGALQgEALgDAJQgDAIgBAAQAAABgIABQgIAAgNABQgNACgLACQgKABACgBAg0BRIABgGQACgKADgNQACgNACgGQACgGAAAB");
        this.shape_1.setTransform(0, 0.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#000000").ss(1, 1, 1).p("AAGhbQAFAJAGANQAHAOAEAKQAFALgBABQACAAALABQAMABAPACQAOACAKACQAKACgBABQACAAgHAHQgHAIgLAJQgKAKgJAIQgJAIgCAAQACABACALQADAMACAOQADAPABAKQABAKgBgCQABACgKgEQgJgEgNgHQgNgHgKgGQgKgGgBgCQAAACgKAGQgKAGgNAHQgNAHgJAEQgKAEABgCQgBACABgKQABgKADgPQACgOADgMQACgLABgBQgBAAgJgIQgJgHgKgLQgLgJgHgIQgHgHACAAQgCgBALgCQAKgCAOgCQAPgCALgBQAMgCABABQAAgBAFgLQAEgKAHgOQAGgNAFgJQAFgJAAACQABgCAFAJg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F7F619").s().p("AA4BhIgXgLIgWgNQgLgGAAgCQAAACgKAGIgXANIgWALQgKAEABgCQgBACABgKIAEgZIAFgaIAEgMQgCAAgJgIIgTgSIgSgRQgGgHACAAQgCgBAKgCIAZgEIAZgDQAMgCACABQgBgBAFgLIALgYIAMgWQAEgJAAACQABgCAEAJIAMAWIALAYQAEALAAABIANABIAaADIAZAEQAKACgCABQACAAgGAHIgSARIgUASQgIAIgCAAQACABACALIAFAaIAEAZQABAKgBgCIgBABIgIgDgAgRBBIgXAMIgMAGIAMgGIAXgMIAMgHIgMAHgAgqAjIgFATIgEAXIgBAGIABgGIAEgXIAFgTIAAgCIABgDIAAAAIABAAIgBAAIAAAAIgBADIAAACIAAAAgAA1BTIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAgCIAAAAIAAAAIgBgCIAAgEIgBAAIgDgUIgFgVIgBgJIAAgBIALgLIAVgSIAAgBIABgBIAJgHIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgJAHIgBABIAAABIgVASIgLALIAAABIABAJIAFAVIADAUIABAAIAAAEIABACIAAAAIAAAAIAAACIAAAAIAAAAIAAAAgAhMgQIAYgEIAVgBQAIgBAAgBIAAAAIAAAAIABgCIAAAAIAAgBIACgFIAHgUIALgUQACgHAAgBIAAABIAAgBQAAABgCAHIgLAUIgHAUIgCAFIAAABIAAAAIgBACIAAAAIAAAAQAAABgIABIgVABIgYAEQgJABAAgBIAAAAIAAAAQAAABAJgBgABVgRIAAAAIgHgCQgGgBgKAAIgNgBIgOgCIgFAAIAFAAIAOACIANABQAKAAAGABIAHACIAAAAg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#000000").ss(1, 1, 1).p("AARhFQAHAOAEAKQAFALgBABQACAAALABQAMABAPACQAOACAKACQAKACgBABQACAAgHAHQgHAIgLAJQgKAKgJAIQgJAIgCAAQACABACALQADAMACAOQADAPABAKQABAKgBgCQABACgKgEQgJgEgNgHQgNgHgKgGQgKgGgBgCQAAACgKAGQgKAGgNAHQgNAHgJAEQgKAEABgCQgBACABgKQABgKADgPQACgOADgMQACgLABgBQgBAAgJgIQgJgHgKgLQgLgJgHgIQgHgHACAAQgCgBALgCQAKgCAOgCQAPgCALgBQAMgCABABQAAgBAFgLQAEgKAHgOQAGgNAFgJQAFgJAAACQABgCAFAJQAFAJAGANg");

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFF7D").s().p("AA4BhIgXgLIgWgNQgLgGAAgCQAAACgKAGIgXANIgWALQgKAEABgCQgBACABgKIAEgZIAFgaIAEgMQgCAAgJgIIgTgSIgSgRQgGgHACAAQgCgBAKgCIAZgEIAZgDQAMgCACABQgBgBAFgLIALgYIAMgWQAEgJAAACQABgCAEAJIAMAWIALAYQAEALAAABIANABIAaADIAZAEQAKACgCABQACAAgGAHIgSARIgUASQgIAIgCAAQACABACALIAFAaIAEAZQABAKgBgCIgBABIgIgDgAgRBBIgXAMIgMAGIAMgGIAXgMIAMgHIgMAHgAgqAjIgFATIgEAXIgBAGIABgGIAEgXIAFgTIAAgCIABgDIAAAAIABAAIgBAAIAAAAIgBADIAAACIAAAAgAA1BTIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAgCIAAAAIAAAAIgBgCIAAgEIgBAAIgDgUIgFgVIgBgJIAAgBIALgLIAVgSIAAgBIABgBIAJgHIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgJAHIgBABIAAABIgVASIgLALIAAABIABAJIAFAVIADAUIABAAIAAAEIABACIAAAAIAAAAIAAACIAAAAIAAAAIAAAAgAhMgQIAYgEIAVgBQAIgBAAgBIAAAAIAAAAIABgCIAAAAIAAgBIACgFIAHgUIALgUQACgHAAgBIAAABIAAgBQAAABgCAHIgLAUIgHAUIgCAFIAAABIAAAAIgBACIAAAAIAAAAQAAABgIABIgVABIgYAEQgJABAAgBIAAAAIAAAAQAAABAJgBgABVgRIAAAAIgHgCQgGgBgKAAIgNgBIgOgCIgFAAIAFAAIAOACIANABQAKAAAGABIAHACIAAAAg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_1 }, { t: this.shape }] }, 5).wait(8));

        // Layer 4
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.rf(["#FFFF4A", "rgba(255,255,255,0)"], [0, 0.588], 0, 0, 0, 0, 0, 15.6).s().p("ABNCAIgLgFIgZgOIgbgOIgOgHIgNAHIgbAOIgZANIgLAGQgDACgEgCQgCgCAAgDIAAgBIACgMIAFgdIAFgdIADgQIgSgRIgegcIgPgPQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBABAAIAAgCQABgDAEgBIAMgCIAdgEIAdgEIAQgCIAHgPIANgbIANgZIAFgMQACgDADAAQAEAAABADIAGAMIANAZIANAbIAHAPIAQACIAdAEIAdAEIAMACQAEABABADIABACQAAADgCABIgQAPIgdAcIgSARIADAQIAFAdIAFAdIACAMIAAABQAAADgDACIgDABIgDgBg");
        this.shape_6.setTransform(-0.1, -0.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.rf(["#FFFF4A", "rgba(255,255,255,0)"], [0, 0.631], 0, 0, 0, 0, 0, 15.8).s().p("ABOCCIgLgGIgagNIgagPIgPgHIgNAHIgbAPIgaANIgLAGQgDABgEgBQgDgCABgDIAAgBIACgNIAFgdIAEgeIAEgPIgSgSIgegcIgQgPQgBgCAAgDIAAgCQABgDAFAAIAMgCIAdgEIAegFIAPgCIAHgOIAOgcIANgaIAGgLQABgEADAAQAEAAABAEIAHALIAMAaIAOAcIAGAOQADAAAOACIAdAFIAdAEIANACQADAAACADIAAACQAAADgCACIgPAPIgeAcQgPAOgDAEIADAPIAFAeIAFAdIACANIAAABQgBADgBACIgEABIgDgBg");
        this.shape_7.setTransform(-0.1, -0.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.rf(["#FFFF4A", "rgba(255,255,255,0)"], [0, 0.675], 0, 0, 0, 0, 0, 16).s().p("ABPCDIgLgFIgbgOIgbgPIgOgHIgNAHIgcAPIgaANIgLAGQgDACgEgCQgDgCABgDIAAgBIACgMIAFgeIAFgeIADgQIgSgSIgfgcIgPgPQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgCQABgDAFAAQAAgBAMgBIAegFIAegEIAQgCIAHgPIANgcIAOgaIAFgMQACgDADAAQAEAAABADIAHAMIAMAaIAOAcIAHAPQACgBAOADIAeAEIAdAFIANACQAEAAABADIABACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgQAPIgeAcIgSASIACAQIAGAeIAFAeIABAMIAAABQAAADgCACIgDABIgDgBg");
        this.shape_8.setTransform(-0.1, -0.2);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.rf(["#FFFF4A", "rgba(255,255,255,0)"], [0, 0.714], 0, 0, 0, 0, 0, 16.2).s().p("ABQCFIgMgFIgagPQgPgHgMgIIgPgHIgOAHIgbAPIgaAOIgMAGQgDACgEgCQgCgCAAgDIAAgBIACgNIAFgeIAFgeIADgQIgSgSIgfgdIgQgPQgCgCABgDIAAgCQABgDAEgBIANgCIAegEIAegEIAQgDIAIgPIANgcIANgaIAGgMQACgEADAAQAEAAABAEIAHAMIANAaIAOAcIAHAPQACAAAOADIAfAEIAdAEIANACQADABACADIAAACQAAADgBACIgRAPIgdAdIgTASIACAQIAGAeIAFAeIACANIAAABQAAADgCACIgEABIgDgBg");
        this.shape_9.setTransform(-0.1, -0.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.rf(["#FFFF4A", "rgba(255,255,255,0)"], [0, 0.757], 0, 0, 0, 0, 0, 16.4).s().p("ABRCHIgMgGIgagOIgcgPIgPgHIgOAHIgbAPIgbANIgMAHQgDABgEgBQgCgCAAgDIAAgCIACgNIAFgeIAFgeIAEgRIgTgSIgfgdIgQgQQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIAAgCQABgDAFgBQAAgBANgBIAegEIAegFIARgCIAIgQIANgcIANgaIAGgMQACgEADAAQAEAAACAEIAGAMIANAaIAOAcIAHAQQADgBAOADIAfAFIAdAEIAOACQADABACADIAAACQAAAAAAABQAAAAAAABQgBABAAAAQAAABAAAAIgRAQIgeAdIgTASIACARIAGAeIAFAeIACANIAAACQAAADgCACIgEAAIgDAAg");
        this.shape_10.setTransform(-0.1, -0.2);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.rf(["#FFFF4A", "rgba(255,255,255,0)"], [0, 0.8], 0, 0, 0, 0, 0, 16.6).s().p("ABSCIIgMgGIgbgOIgcgPIgPgIIgOAIIgcAPIgbAOIgMAGQgDACgEgCQgCgCAAgDIAAgBIACgOIAFgeIAFgfIAEgRIgUgSIgfgeIgQgPQgCgCAAgDIAAgCQACgDAEgBIANgCIAegEIAggFIAQgCIAIgPIAOgdIANgbIAGgMQACgEADAAQAEAAABAEIAHAMIANAbIAOAdIAIAPIAQACIAgAFIAeAEIANACQAEABABADIABACQAAADgCACIgRAPIgeAeIgTASIACARIAGAfIAFAeIACAOIAAABQAAADgDACIgDABIgDgBg");
        this.shape_11.setTransform(-0.1, -0.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }] }).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 1).to({ state: [{ t: this.shape_11 }] }, 1).wait(8));

        // Layer 2
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("ABABrIgJgFIgVgLIgWgMIgMgGIgLAGIgWAMIgVALIgJAFQgDABgDgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgBIACgLIAEgXIAEgZIADgNIgPgOIgZgXIgMgMQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgCQABgCAEgBIAKgBIAYgEIAYgDIANgCIAGgMIALgXIALgVIAEgJQACgDACAAQADAAABADIAFAJIALAVIALAXIAGAMIANACIAYADIAYAEIAKABQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIABACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgNAMIgYAXIgPAOIACANIAFAZIAEAXIABALIAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgCAAIgDAAg");
        this.shape_12.setTransform(2, 2.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(13));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.6, -13.1, 27.1, 26.3);


    (lib.HM_harlinktext = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF00").s().p("AhACIIgFgDIgEgGIgCj3IAAgDIAAgCIACgDIABgCIADgCIADgCIAmgBIADACIACABIABACIAAADIABACIAAADIABCXIAkhEIAEgEIADgEQADgCADAAIAEgBIAigDIACAAIACABIACABIAAAFIgCABIgBACIgsBJIAwBMIABABIAAABIABABIAAABIgBADIgBACIgDABIgCAAIgmAGIgFAAIgEgBIgDgDIgEgEIgjhIIAABOIgCAGIgFAEIgCABIgBAAIgfAFg");
        this.shape.setTransform(29.3, -4.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFF00").s().p("AhNBnIgCAAIgEgCIgEgEIAAgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgGinIAAgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIABgCIACgDIACgCIAEgCIADgBIAjgCIAGADIACACIABADIABACIAAADIABAXQAFgKAGgJQAGgHAIgHQAIgGAIgDIAUgEIACAAIAQAAIANAEQAGACAGAEIAJAJIAHALIAEALQADAHAAAHIABAOIACBmIgBADIgCAEIgEAEIgCABIgDAAIghAFIgEAAIgCgBIgCgCIgCgBIgBgCIgBgDIgChQQABgLgDgIQgCgIgDgGQgDgFgGgDIgIgBIgEAAQgIABgIAEQgGAFgFAIQgEAIgDALQgCAMABANIACBDIgBADIAAACIgBACIgCADIgCACIgEACIgDABIgkAFIgCABIgBgBg");
        this.shape_1.setTransform(8.8, 1.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFF00").s().p("AgMCaIgEAAIgCgBIgCgBIgBgCIgDgDIgBgCIAAgDIgJitIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIACgCIADgCIABgCIADgBIADAAIAngDIAEAAIACAAIACACIACABIADACIACADIAAACIABADIAHCqIAAADIgBACIgCADIgBACIgCACIgCACIgCABQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIglAFIgCABIgBgBgAgJhNIgHgCIgFgDIgGgFQgEgCgCgDQgDgDAAgEIgDgHIgCgIIAAgHIADgIIACgHIAGgGIAEgFQADgCAFgCQACgCAEAAIAHgBIAGAAIAHACIAIADIAFAFIAFAGIADAGIADAHIABAIIAAAHIgDAIQAAADgDADIgDAGIgGAFIgGAEIgGADIgGABIgJAAg");
        this.shape_2.setTransform(-8.5, -1.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFF00").s().p("AhICaIgDgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgEgDIgBgEIgBgDIgWkPIAAgEQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIABgCIACgDIACgDIADgBIADgBIAEAAIAygCIAEAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAABABIADABIADABIACADIACADIABADIAAADIAQDfIBmgMIADAAIADAAIADABIAGAGIABADIAAACIACAaIAAACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAABABIgBACIgEAEIgDADIgCABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIimAYIgDABIAAAAg");
        this.shape_3.setTransform(-25.3, 1.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#BD4900").s().p("AhACYIgHgBIgEgCIgGgFIgGgJIgCgKIgBj6IABgGIAGgJIACgDIAGgDIAFgDIAGgBIAlgBIAHACIAEAEIAFADIADAFIABAEIACALIAAAOIAAAjIAAArIAFgLIACgEIAGgIIAHgHIAIgDIAJgCIAogDIAIAEIAHAIIACAIIgBAEIgEAJIgIAPIgRAcIgOAWIARAaIARAdIAJAOIACAIIABABIgBADIAAAHIgGAHIgFAGIgHACIgnAFIgJgBIgJgCIgIgHIgGgGIgBgGIgFgJIAAAKIAAAGIgBAEIgCAGIgGAIIgEACIgKAEIggAFgAg8hbIABA1IABA/IABA6IABAkIALgBIAJgCIAAgOIAAgeIAAgdIAAgOIAAgNIAAghIAAgpIAAgmIAAgXIgMABIgMAAIAAAbgAAhgiIgBABIgCADIgFAKIgNAVIgMAYIgGAKIAjBIIAKgBIAOgCIgQgaIgTggIgKgQIAIgMIARgbIAPgbIgKABIgDAAg");
        this.shape_4.setTransform(29.3, -4.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#BD4900").s().p("AhNB3IgGgBIgFgCIgJgIIgEgEIgCgGIgHirIADgMIACgGIAIgJIAEgCIAGgDIAlgEIALACIAHAEIADADIAFAEIAGgFQAJgIALgFQAMgDAMgBIADAfQgKABgHADQgHABgFAGQgGADgFAIQgFAGgFAIIgegEIAAgJIAAgMIgOAAIgNACIABAQIABAkIACAsIACAoIABAaIARgDIANgCIAAgLIgBgWIAAgXIAAgKIAAgGQAAgLABgLQADgOAGgLQAHgKAKgIQAKgGANgCIAEAAQAIAAAIAEQAIAEAGAIQAGAJACAKIADAYIAAAIIAAAVIABAZIABATIANgCIAMgDIAAgQIgBgiIgBghIAAgPIgBgNIgFgTIgGgIIgHgHIgIgEIgKgDIgMgBIAAABIgCgfIAUAAIARAEIAOAJIANANIAJAMIAJAdIABB6IAAAGIgCAEIgEAFIgDADIgFADIgLAFIggAEIgFAAIgHgBIgKgFIgFgJIgDgHIgBgFIgBhNIgBgQQgCgIgBgBIgDgBQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABIgKACQgEADgDAGQgCAFgBAIQgDAJAAANIADBJIgCAFIgFAKIgEACIgEAEIgGADIgpAGg");
        this.shape_5.setTransform(8.8, 2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#BD4900").s().p("AgQAzIgSgKIgHgJIgGgJIgDgJIgBgUIABgMIALgSIAIgGIAJgGIAUgGIALABIAKAEIAJADIAIAHIAGAJIAGAJIADAJIABAUIgDAKIgDAJIgHAIIgIAIIgIAGIgKADIgKACgAgIgVIgEACIgCAFIgDACIgDAEIgBAFIAAAJIACAFIAFAGIAEAEIAHACIAIAAIAFgCIACgDIADgDIAEgDIACgFIAAgDIAAgFIgBgJIgGgHIgDgDIgLgCg");
        this.shape_6.setTransform(-8.9, -13.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#BD4900").s().p("AgRB2IgGgBIgGgBIgJgIIgFgKIgBgHIgJizIAEgLIANgMIAFgDIAGgBIAogCIAFAAIAMADIAJAIIADAGIACAFIAICvIgCALIgCAHIgDADIgEAFIgKAFIgsAHgAAChWIgQACIgIABIABAPIACAoIACAvIACArIACAZIANgCIAQgDIAHgBIgBgQIgCgnIgCguIgCgrIgBgYIgNABg");
        this.shape_7.setTransform(-8.1, 3.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#BD4900").s().p("AhJCpIgHgBIgFgCIgFgDIgFgEIgEgGIgCgGIgBgGIgXkQIAAgGIACgHIAGgLIAFgEIAFgDIAHgDIAGgBIA5gCIAGACIALAGIAIALIACAFIABAHIABATIADAuIAFA5IACA0IADAgIAjgEIAjgFIAQgCIAGAAIAGABIAGACIAJAIIAEAFIACAGIABAGIABAfIgBAGIgGAKIgJAIIgLAEIimAYgAhdiGIgBABIAXEPIClgYIABgBIgBgFIAAgLIAAgHIgUACIgoAFIgnAFIgSACIgSjwIgBgBg");
        this.shape_8.setTransform(-25.2, 1.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37.8, -19.6, 76.3, 38.4);


    (lib.HM_harlinkshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AlHCzIgBAAIgEgBIgDgBIgEgCIgCgCIAAgBIgBAAIgBgCIAAgBIgCgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgWkQIAAgEIABgDIACgEIACgDIADgDIADgCIAEgBIAEgBIAzgCIADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAEACIADACIACADQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIACAEIAAAEIAQDcIBkgNIAEAAIADAAIAEACIACABIAAABIABAAIACACIACADIABADIAAAEIACAZIAAADIgBAEIgBADIgBAAIgBADIgBAAIgCADIgDACIgDABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIimAYIgCABIgBAAgAhkCTIgDgBIgBAAIgCgBIgBAAIgFgFIgBgCIgBgDIgBgDIgJixIABgEIABgDIABAAIABgDIABAAIACgCIAAgBIADgBIADgCIAEAAIAogDIADAAIAEABIACABIABAAIACACIABAAIACACIAAABIABACIAAABIACADIAAADIAHCwIgBAAIgBADIgCADIgCACIAAABIgDABIAAABIgDABIgDABIgoAFIgCABgAAICCIgCgBIgBAAIgCgBIgBAAIgEgFIgBgCIgBgDIAAgDIgHiqIABgEIABgCIABgBIABgCIADgDIADgCIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBIAkgCIACABIABAAIACABIAAABIACABIABAAIAAABIACACIABADQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIABADIAAAMIAGgKQAGgHAJgHQAHgFALgFIAUgEIAAAEIABAAIAAgEIABAAIAGAAQAFAAAFABQAIAAAGADIANAHIAKAKIAHAKQADAGABAHQADAHAAAGQACAIAAAHIABBnIgBADIgBACIAAABIgEAEIAAABIgCABIgBAAIgCABIAAABIgDAAIghAFIgGAAIgCgBIgBAAIAAgBIgCgBIgCgCIAAgBIgBgCIgBAAIAAgDIgBgDIgBhPIgCgSIgFgMQgEgFgEgCIgIgBIgCAAQgJABgHAEQgGAEgEAHQgFAHgCALQgCAKABAKIAAAFIACBGIgCAGIgBAAIgBADIgCACIgBAAIgCACIgGACIgkAFIgDABgADiBjIgCgBIgBAAIgEgCIAAgBIgBAAIgCgEIgBAAIAAgDIgBgDIgCj1IAAgDIACgGIACgCIAAgBIACgCIACgBIABgBIACAAIAAgBIAjgBIAAACIAAAAIABgCIACAAIACABIABAAIACABIADADIACAEIAAABIABAAIAAADIAAADIABCLIAgg5IADgFQACgDADgBIAFgDIAGgBIAhgDIAEAAIAAABIACAAIABABIABACIABAAIAAADIABAAIgBABIAAADIgBACIgBABIgrBIIAuBKIAAABIACACIAAAGIgBABIgBACIAAABIgBAAIgCABIAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgnAFIgDAAIgDAAQgCAAgDgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAIgDgFIgfg8IAABCIgBACIgBADIgCACIgBACIgBABIgEACIAAABIgDAAIgfAFgAhbhVIgFAAIgIgCIgHgDIgGgFIgGgGIgEgHIgCgIIgCgIIAAgDIABgGIACgIIADgHIAFgHIAGgFQACgDAFgBIAHgDIAIgBIACAAIAGAAIAIACIAHAEIAGAFQADADACADIAEAHIADAIIABAIIAAACIgBAGIgBAIIgEAHIgEAGIgGAGQgDADgEABIgHADIgIABIgDAAg");
        this.shape.setTransform(-0.8, -5.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37.6, -23, 73.8, 35.9);


    (lib.HM_harLargeCounterGreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#C5FFC5", "#53ED0A"], [0, 1], 20.9, 21.2, -38.2, -38.6).s().p("AjODxQgOAAgKgKQgJgKgBgOIAAmcQABgPAJgKQAKgJAOgBIGdAAQAOABAKAJQAKAKAAAPIAAGcQAAAOgKAKQgKAKgOAAg");
        this.shape.setTransform(0, -2.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "#D7FFC2", "#A4FF86"], [0.263, 0.69, 1], -22.1, -19.6, 20.9, 18.5).s().p("AjOEIQgYAAgQgRQgQgQgBgYIAAmcQABgZAQgQQAQgQAYgBIGdAAQAYABAQAQQARAQAAAZIAAGcQAAAYgRAQQgQARgYAAg");
        this.shape_1.setTransform(0, -2.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#B1FF90", "#5DF500"], [0, 1], -26.4, 0, 26.4, 0).s().p("AjOElQgYAAgQgRQgQgRgBgYIAAnWQABgYAQgQQAQgRAYAAIGdAAQAYAAAQARQARAQAAAYIAAHWQAAAYgRARQgQARgYAAg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#003F35").ss(1, 1, 1).p("AD7kXQgSgSgagBImcAAQgbABgSASQgSASgBAbIAAHVQABAbASASQASASAbABIGcAAQAbgBARgSQASgSABgbIAAnVQgBgbgSgSgAECjqIAAHVQAAAWgPAPQgOAPgWAAImcAAQgWAAgPgPQgPgPAAgWIAAnVQAAgWAPgPQAPgPAWAAIGcAAQAWAAAOAPQAPAPAAAWg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#005447").s().p("AjNErQgbgBgSgSQgSgSgBgbIAAnVQABgbASgSQASgSAbgBIGcAAQAaABASASQASASABAbIAAHVQgBAbgSASQgRASgbABgAjykPQgPAPAAAWIAAHVQAAAWAPAPQAPAPAWAAIGcAAQAWAAAOgPQAPgPAAgWIAAnVQAAgWgPgPQgOgPgWAAImcAAQgWAAgPAPg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harLargeCounterGreen, new cjs.Rectangle(-28, -30.8, 56, 61.8), null);


    (lib.HM_harLargeCounterBlue = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#B8F0FF", "#68B1FF"], [0, 1], 20.9, 21.2, -38.2, -38.6).s().p("AjODxQgOAAgKgKQgJgKgBgPIAAmcQABgOAJgKQAKgKAOAAIGdAAQAOAAAKAKQAKAKAAAOIAAGcQAAAPgKAKQgKAKgOAAg");
        this.shape.setTransform(0, -2.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "#98D5FF", "#95D4FF"], [0.365, 0.78, 1], -22.1, -19.6, 20.9, 18.5).s().p("AjOEIQgYgBgQgPQgQgRgBgZIAAmcQABgYAQgQQAQgRAYAAIGdAAQAYAAAQARQARAQAAAYIAAGcQAAAZgRARQgQAPgYABg");
        this.shape_1.setTransform(0, -2.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#AEDCFF", "#038EFF"], [0, 1], -27, -4.5, 27.7, 4.7).s().p("AjOElQgYgBgQgQQgQgRgBgYIAAnVQABgZAQgQQAQgQAYgBIGdAAQAYABAQAQQARAQAAAZIAAHVQAAAYgRARQgQAQgYABg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#0A0066").ss(1, 1, 1).p("ADPkqImcAAQgbABgSASQgSASgBAbIAAHVQABAbASASQASASAbABIGcAAQAbgBARgSQASgSABgbIAAnVQgBgbgSgSQgSgSgagBgAECjqIAAHVQAAAWgPAPQgOAPgWAAImcAAQgWAAgPgPQgPgPAAgWIAAnVQAAgWAPgPQAPgPAWAAIGcAAQAWAAAOAPQAPAPAAAWg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0A0066").s().p("AjNErQgbgBgSgSQgSgSgBgbIAAnVQABgbASgSQASgSAbgBIGcAAQAaABASASQASASABAbIAAHVQgBAbgSASQgRASgbABgAjykPQgPAPAAAWIAAHVQAAAWAPAPQAPAPAWAAIGcAAQAWAAAOgPQAPgPAAgWIAAnVQAAgWgPgPQgOgPgWAAImcAAQgWAAgPAPg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harLargeCounterBlue, new cjs.Rectangle(-28, -30.9, 56, 61.8), null);


    (lib.HM_harLArrowhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#DE79F7", "#BA00FF"], [0, 1], -24.1, -10.4, 28.1, 13).s().p("Ag4DGIjHjHQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIDPi8QADgDADACQACABAAADIgEB0IALgBIB9gMIBPgIIArgFIAUgDIAFgBIgCABQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAXIAEA1IAFA+IADA2IABAWQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgEACIkrgfIAABrQAAADgDACIgCAAIgEgBg");
        this.shape.setTransform(0.1, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#E697FF", "#C000F5"], [0, 1], -25.4, -9.8, 29.2, 13).s().p("Ag+DNIjIjIQgEgEAAgGQAAgGAEgEIDPi9QAIgGAJAEQAIAEAAAKIAAAQIgCAkIgBAkIgBAQIAUgCIAygFIBBgHIBAgHIAzgFIAUgCQAHAAAFAEQAFAFAAAHIAODWQAAAGgFAEQgFAEgGAAIkggeIAABgQAAAKgJAEIgGABQgGAAgEgEg");
        this.shape_1.setTransform(0.1, 0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#660066").ss(1, 1, 1).p("ABviFQggAEgeADQgeADgWACQABgSABgPQAAgQABgKQAAgKAAgBQAAgBAAgBQAAgNgHgLQgHgLgMgFQgMgGgNACQgOACgKAJIjPC8QgOANgBATQAAATANANIDIDIQAKAKANACQANADANgFQANgGAHgLQAIgLAAgOQAAAAAAgJQAAgJAAgPQAAgOAAgQQAVACAfAEQAgADAjAEQAjADAfADQAfADATACQATACABAAQATACAPgMQAOgMACgTIgPjWQABgVgPgOQgPgOgVABQAAAAgRACQgSACgbADQgcADggADg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#BA00FF", "#A900CA"], [0, 1], -29.7, 0, 29.8, 0).s().p("Ag8DuQgNgCgLgKIjHjIQgOgNAAgTQACgTANgNIDPi8QALgJANgCQANgCANAGQALAFAIALQAGALAAANIAAACIAAALIgBAaIgCAhIA0gFIA+gHIA7gGIAtgFIASgCQAUgBAQAOQAOAOAAAVIAPDWQgCATgOAMQgPAMgTgCIgUgCIgzgFIhBgGIhDgHIg0gGIAAAeIAAAYIAAAJQAAAOgHALQgIALgMAGQgJADgJAAIgIgBg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("Aj7gEIDPi9IgGB5IEfgdIAPDWIkwggIAABxg");
        this.shape_4.setTransform(4.5, -0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 3
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#FF0000").ss(1, 1, 1).p("ACEioQgmAEgkAEQgkAEgZACQABgWAAgUQABgUABgMQAAgNAAgBQAAgBAAgBQAAgRgIgOQgJgOgOgHQgPgHgPACQgRADgMALIj4DvQgQAQgBAYQAAAYAPARIDwD9QAMAMAPADQAQAEAPgHQAPgHAJgOQAJgNAAgSQAAgBAAgLQAAgMAAgSQAAgSAAgUQAZADAmAEQAmAEAqAFQAqAEAlAEQAlAEAXACQAXADABAAQAWACASgPQARgQACgYIgSkOQABgbgRgSQgSgSgZACQgBAAgUADQgVACghADQghAEgnAFg");

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FF0000").s().p("AhJEtQgPgDgMgMIjvj9QgQgRAAgYQABgYARgQID3jvQAMgLARgDQAPgCAPAHQAOAHAJAOQAIAOAAARIAAACIAAAOIgCAgIgBAqIA9gGIBKgIIBIgJIA2gFIAVgDQAYgCATASQARASgBAbIASEOQgCAYgRAQQgSAPgWgCIgYgDIg9gGIhOgIIhQgJIg/gHIAAAmIAAAeIAAAMQAAASgJANQgIAOgPAHQgLAEgKAAIgLgBg");

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFF00").s().p("AktgGID3jvIgGCaIFYglIASEOIltgnIAACPg");
        this.shape_7.setTransform(5.3, -0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }] }).wait(1));

        // Layer 2
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("rgba(0,0,0,0.302)").s().p("Ag8DLQgNgCgLgKIjHjHQgOgNAAgUQACgTANgNICPiCICKAAIAAAOIgCAhIA0gFIA+gHIA7gGIAtgFIASgCQAUgBAQAOQAOAOAAAVIAPDWQgCATgOAMQgPAMgTgCIgUgCIgzgFIhBgGIhDgHIg0gGIAAAeIAAAYIAAAJQAAAOgHALQgIALgMAGQgJADgJAAIgIgBg");
        this.shape_8.setTransform(9.9, 11.9);

        this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-36.6, -31.2, 76.3, 63.6);


    (lib.HM_harLArrow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#DE79F7", "#BA00FF"], [0, 1], -24.1, -10.4, 28.1, 13).s().p("Ag4DGIjHjHQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIDPi8QADgDADACQACABAAADIgEB0IALgBIB9gMIBPgIIArgFIAUgDIAFgBIgCABQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAXIAEA1IAFA+IADA2IABAWQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgEACIkrgfIAABrQAAADgDACIgCAAIgEgBg");
        this.shape.setTransform(0.1, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#E697FF", "#C000F5"], [0, 1], -25.4, -9.8, 29.2, 13).s().p("Ag+DNIjIjIQgEgEAAgGQAAgGAEgEIDPi9QAIgGAJAEQAIAEAAAKIAAAQIgCAkIgBAkIgBAQIAUgCIAygFIBBgHIBAgHIAzgFIAUgCQAHAAAFAEQAFAFAAAHIAODWQAAAGgFAEQgFAEgGAAIkggeIAABgQAAAKgJAEIgGABQgGAAgEgEg");
        this.shape_1.setTransform(0.1, 0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#660066").ss(1, 1, 1).p("ABviFQggAEgeADQgeADgWACQABgSABgPQAAgQABgKQAAgKAAgBQAAgBAAgBQAAgNgHgLQgHgLgMgFQgMgGgNACQgOACgKAJIjPC8QgOANgBATQAAATANANIDIDIQAKAKANACQANADANgFQANgGAHgLQAIgLAAgOQAAAAAAgJQAAgJAAgPQAAgOAAgQQAVACAfAEQAgADAjAEQAjADAfADQAfADATACQATACABAAQATACAPgMQAOgMACgTIgPjWQABgVgPgOQgPgOgVABQAAAAgRACQgSACgbADQgcADggADg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#BA00FF", "#A900CA"], [0, 1], -29.7, 0, 29.8, 0).s().p("Ag8DuQgNgCgLgKIjHjIQgOgNAAgTQACgTANgNIDPi8QALgJANgCQANgCANAGQALAFAIALQAGALAAANIAAACIAAALIgBAaIgCAhIA0gFIA+gHIA7gGIAtgFIASgCQAUgBAQAOQAOAOAAAVIAPDWQgCATgOAMQgPAMgTgCIgUgCIgzgFIhBgGIhDgHIg0gGIAAAeIAAAYIAAAJQAAAOgHALQgIALgMAGQgJADgJAAIgIgBg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("Aj7gEIDPi9IgGB5IEfgdIAPDWIkwggIAABxg");
        this.shape_4.setTransform(4.5, -0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [] }, 1).wait(3));

        // Layer 2
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(0,0,0,0.302)").s().p("Ag8DLQgNgCgLgKIjHjHQgOgNAAgUQACgTANgNICPiCICKAAIAAAOIgCAhIA0gFIA+gHIA7gGIAtgFIASgCQAUgBAQAOQAOAOAAAVIAPDWQgCATgOAMQgPAMgTgCIgUgCIgzgFIhBgGIhDgHIg0gGIAAAeIAAAYIAAAJQAAAOgHALQgIALgMAGQgJADgJAAIgIgBg");
        this.shape_5.setTransform(9.9, 11.9);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30.7, -24.9, 70.4, 57.2);


    (lib.HM_harIndentedPanelRackhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FF0000").ss(4.5, 1, 1).p("AKImfQgVhChDg2QhDg2hbgCIsYAAQh8AHhFBEQhFBDgNByIACKeQARB9BFA/QBFA/CFADILqADQBZADBJgtQBJgsAghGQAghFgEhEIgBpVQAEg0gVhBg");
        this.shape.setTransform(0.1, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#BC9A85", "#FFFFCC"], [0, 1], 170.3, 63, 14.9, 5.5).s().p("AmMI6QhEgBg3ghQg4ggggg4Qghg3gBhEIAAqJQABhEAhg3QAgg4A4ggQA3ghBEgBIMZAAQBEABA3AhQA4AgAgA4QAhA3ABBEIAAKJQgBBEghA3QggA4g4AgQg3AhhEABgAoDoPQg0AgggA0QgfA1gBBCIAAKJQABBCAfA1QAgA0A0AgQA1AfBCABIMZAAQBCgBA1gfQA0ggAgg0QAfg1ABhCIAAqJQgBhCgfg1Qggg0g0ggQg1gfhCgBIsZAAQhCABg1Afg");

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#720D09").ss(0.5, 1, 1).p("AItlEIAAKJQAAAtgWAkQgVAkgkAVQgkAWgtAAIsZAAQgtAAgkgWQgkgVgVgkQgWgkAAgtIAAqJQAAgtAWgkQAVgkAkgVQAkgWAtAAIMZAAQAtAAAkAWQAkAVAVAkQAWAkAAAtg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFBD").s().p("AmMHlQgsAAglgWQgkgVgVgkQgWglAAgsIAAqJQAAgsAWglQAVgkAkgVQAlgWAsAAIMZAAQAsAAAlAWQAjAVAWAkQAWAlAAAsIAAKJQAAAsgWAlQgWAkgjAVQglAWgsAAg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#FAED83", "#FFFFCC"], [0, 1], 61.3, 30.1, -76.5, -37.6).s().p("AmMHlQgsAAglgWQgkgVgVgkQgWglAAgsIAAqJQAAgsAWglQAVgkAkgVQAlgWAsAAIMZAAQAsAAAlAWQAjAVAWAkQAWAlAAAsIAAKJQAAAsgWAlQgWAkgjAVQglAWgsAAg");

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#BC9A85", "#FFFFCC"], [0, 1], -26.2, -53.3, 40.1, 81.5).s().p("AmMI1QhDgBg2ggQg2ggggg2Qggg2gBhDIAAqJQABhDAgg2QAgg2A2ggQA2ggBDgBIMZAAQBDABA2AgQA2AgAgA2QAgA2ABBDIAAKJQgBBDggA2QggA2g2AgQg2AghDABgAndnOQgkAVgVAkQgWAlAAAsIAAKJQAAAsAWAlQAVAkAkAVQAlAWAsAAIMZAAQAsAAAlgWQAjgVAWgkQAWglAAgsIAAqJQAAgsgWglQgWgkgjgVQglgWgsAAIsZAAQgsAAglAWg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-68.7, -61.3, 137.7, 123);


    (lib.HM_harIndentedPanelRack = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#BC9A85", "#FFFFCC"], [0, 1], 170.3, 63, 14.9, 5.5).s().p("AmMI6QhEgBg3ghQg4ggggg4Qghg3gBhEIAAqJQABhEAhg3QAgg4A4ggQA3ghBEgBIMZAAQBEABA3AhQA4AgAgA4QAhA3ABBEIAAKJQgBBEghA3QggA4g4AgQg3AhhEABgAoDoPQg0AgggA0QgfA1gBBCIAAKJQABBCAfA1QAgA0A0AgQA1AfBCABIMZAAQBCgBA1gfQA0ggAgg0QAfg1ABhCIAAqJQgBhCgfg1Qggg0g0ggQg1gfhCgBIsZAAQhCABg1Afg");

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#720D09").ss(0.5, 1, 1).p("AItlEIAAKJQAAAtgWAkQgVAkgkAVQgkAWgtAAIsZAAQgtAAgkgWQgkgVgVgkQgWgkAAgtIAAqJQAAgtAWgkQAVgkAkgVQAkgWAtAAIMZAAQAtAAAkAWQAkAVAVAkQAWAkAAAtg");

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFBD").s().p("AmMHlQgsAAglgWQgkgVgVgkQgWglAAgsIAAqJQAAgsAWglQAVgkAkgVQAlgWAsAAIMZAAQAsAAAlAWQAjAVAWAkQAWAlAAAsIAAKJQAAAsgWAlQgWAkgjAVQglAWgsAAg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FAED83", "#FFFFCC"], [0, 1], 61.3, 30.1, -76.5, -37.6).s().p("AmMHlQgsAAglgWQgkgVgVgkQgWglAAgsIAAqJQAAgsAWglQAVgkAkgVQAlgWAsAAIMZAAQAsAAAlAWQAjAVAWAkQAWAlAAAsIAAKJQAAAsgWAlQgWAkgjAVQglAWgsAAg");

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#BC9A85", "#FFFFCC"], [0, 1], -26.2, -53.3, 40.1, 81.5).s().p("AmMI1QhDgBg2ggQg2ggggg2Qggg2gBhDIAAqJQABhDAgg2QAgg2A2ggQA2ggBDgBIMZAAQBDABA2AgQA2AgAgA2QAgA2ABBDIAAKJQgBBDggA2QggA2g2AgQg2AghDABgAndnOQgkAVgVAkQgWAlAAAsIAAKJQAAAsAWAlQAVAkAkAVQAlAWAsAAIMZAAQAsAAAlgWQAjgVAWgkQAWglAAgsIAAqJQAAgsgWglQgWgkgjgVQglgWgsAAIsZAAQgsAAglAWg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-64.2, -57, 128.4, 114);


    (lib.HM_harHowtoplayshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AibDuIgCgCIgCgBIgCgEIAAgCIgNimIAAgDIABgCIACgEIAEgEIACAAIADgBIAXgCIACgBIACABQADAAACACQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQACADAAACIAAAEIADgEQAFgGAGgEQAGgEAHgCQAHgDAJgBIAMAAQAGABAGACIAKAFQAEADAFAFIAGAJQADAEACAGIADAKIABAMQABAHgBAGQAAAIgCAFQgBAGgDAFQgCAGgDAFIgIAKIgKAIQgFAEgGABQgGADgHABIgIABIgEgBQgGABgGgDQgGgBgEgDIgEgDIABAXIACAZIABAMIAAAEIgCAEIgCACIgGADIgaAFgAhmBOIgEACIgEADIgEAEIgCAFIgCAGIgBAFIAAAHIABAFIABAFIADAFIADADIAEADIAEACIAEABIAFAAIAFgCQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBIADgEQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQACgDAAgDIABgFIAAgHQAAgDgBgDIgBgEIgCgFIgDgDIgEgDQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEgBIgFAAIgFABgADSClQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCIAAgEIABgBIAPgoIgIgTIgMghIgLgeIgFgOIAAgBIgBgBIAAgBIABgDIABgDIADgBIADgBIAVgDQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIADABIADADIABAEIADAKIAHAVIAFARIAEgSIAGgXIADgLIACgEIABgBIABgCIACgBIABgBIACgBIACAAIARgBIADAAIADAAIABADIABADIAAABIgBABIAAABIguCQIgCAEIgDACIgDADIgDABIgSADIgDAAIgBAAIgBgBgAAYCUIgKgCIgIgFQgEgDgCgFIgDgHIgCgIIgBgKIgBgNIgFhxIABgCIACgCIABgCIAEgCIACAAIAWgCIADAAIAEACIABABIACABIACAEIAEByQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAEIAAADIABACIABACIACACIACABIABgBIAEAAIABgBIACgBIABAAIABgBIACAAIADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABADIABAEIAAANIAAAEIgCADIgDADIgEACIgEACIgFABIgFACIgFABIgIABIgEgBgABoCIQgGAAgEgCQgGgBgDgDQgFgCgDgFQgFgEgBgEIgFgKIgDgMIgBgMIABgLQAAgFACgGIAEgKQACgGADgEIAIgJQADgEAFgDIAJgFIAKgCIALAAQAFAAAFACIAIAEIACACIAAgBIABgCIAAgCIACgBIABgCIAEgCIACAAIATgCIAEAAIACABIADADIAAACIABABIACBdIgBACIAAACIgBACIgBABIgBACIgEACIgCAAIgQADIgEAAIgBgBIgCgBIgBgCIgBgBIgBgCIAAgCIgEAEIgEAEIgFAEIgGADIgFACIgGABIgJABIgCAAgAB4AyIgEACIgDADIgDADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgBAFQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAFIABAGIABAFIACAFIACADIADADIADABIADABIAEAAIADgBIADgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIADgDIADgEIABgFIABgFIAAgFIAAgFIgBgFIgCgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgDgCIgCgCIgEgBIgEAAIgDABgAlsgdIgDgBIgGgGIgBgDIAAgCIgUi1IAAgDIAAgDIACgCIABgCIACgCIADgCIADAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAjABIADAAIADABIACABIACACIADACIABADIABACIABADIAGBAIA7gBIgCgWIgDgbIgBgNIAAgCIABgDIABgCIACgDIACgBIACgCIADAAIACgBIAgABIADAAIACABIADABIAEAEIABACIABADIAAACIAOCoIAAADIgBACIgBADIgBACIgCACIgDABIgCABIgmACIgDgBIgEgEIgCgEIgBgDIgGhEIg6ACIACAZIADAeIACAPIAAACIAAADIgCACIgBACIgEAEIgDABIgnACIgDAAgAhwgrIgPgDIgNgFQgHgCgGgFIgLgKIgIgMQgEgHgCgHIgCgQQgCgIACgIIADgPQACgGAFgHIAKgLQAFgFAGgDQAGgEAIgDQAGgCAJgBIAQgCIAQABQAHABAIADQAGACAHAEQAGADAGAFQAFAFAEAFQAFAFADAHQADAGABAHIACAPQABAIgBAHIgDANIgGAMIgJALIgLAJIgMAGIgOAEIgQADIgQAAgAhmiTIgGABIgGACIgEADIgDAEIgDAFIgBAGIgBAGIAAAIIABAHIABAGIADAGIADAEQABADADABIAFADIAFACIAGAAQADABADgCQADAAACgCIAFgDIADgFQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIACgGQgBgDACgDIAAgHQgCgDABgEIgCgGQAAgDgCgDIgDgFIgEgEIgEgDIgGgBIgFgBIgBAAgAAVg3IgEgCIgDgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIghhpIAAgCIgBgBIAAgBIABgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIADgCIADAAIAYAAIAFAAIAEADQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAIACAFIADANIAGAaIAGAYIAFgYIAFgbIACgNIAAgCIACgEIACgBIACgCIACgBIACAAIACgBIAdAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIADAEIABAEIACAMIAGAYIAGAXIADgXIAEgYIACgMIACgFIACgDIAEgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIATAAIADAAIADACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIABADIAAADIgYBkIgBAEIgDADIgDACQgDACgCgBIgZACIgEAAIgEgCIgDgEIgBgEIgDgNIgHgbIgFgXIgFAYIgGAcIgCANIgBAFIgDADIgDACQgDACgCgBIgbACIgFAAgAERhFIgJAAQgFAAgEgCQgDAAgDgDQgDgBgDgEIgDgFQgCgDAAgEIgCgJIAAgKIAAgpIgLAAIgEgCIgBgBIgDgGIAAgPIACgEIABgBIABgCIACgBIACAAIACgBIAJAAIAAgPIAAgKIAAgCIABgCIAAgCIADgDIACgBIABgBIAUAAIACABIACAAIADADIABACIABABIAAACIABACIAAAZIAHAAIAEAAIACAAIAEACIABABIACAEIAAACIABACIAAAKIgBACIAAACIgBACIgBABIgBACIgEACIgOAAIAAALIAAANIAAAFIABAHIAAAGIAAAEIABADIABACIABABIACAAIADAAIAFAAIADABQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAIABACIABAEIAAAKIgBACIAAACIgBACIgEAEIgCAAIgDABIgDAAIgEABIgDAAgAFQhKIgKgCIgIgFQgEgBgEgFIgGgIIgFgKIgCgLQgCgGABgGIABgNQAAgGADgFQABgGADgEQADgGAEgDQADgEAFgDQADgDAFgCIAKgDQAFgBAFAAIALABQAEAAAFADQAFACADACQAEADADAEQAEAEACAEQADAFABAFIACAKQABAGAAAGQAAAIgBAEIgDALQgBAFgDAFIgGAIIgHAHQgFAEgEABQgEADgFAAIgKACIgKAAgAFahoIAEgBIADgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIACgEQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgFIAAgGIAAgFIAAgFIgBgFIgCgDIgCgDIgDgCIgCgCIgEAAIgDAAIgDACQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgCAEIgCADIgBAFIgBAFQAAADgBADIABAFIAAAFQABADAAACIACADIACADIADACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIADABg");
        this.shape.setTransform(-3.2, 6.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.7, -17.2, 79, 47.6);


    (lib.HM_harHowtoplay = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF00").s().p("AgaBRIgBgCIAAgEIABgBIAQgpIglhfIAAgFIACgCIABgBIAVgCIAEAAIACABIACACIABADIAOAzQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAIABACIAAABIABABIAAgDIACgCIABgDIANg2IAAgBIABgCIAGgFIABAAIARgCIACAAIACACIAAAFIguCOIgCADIAAADIgDABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgRAEg");
        this.shape.setTransform(22.1, 14.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFF00").s().p("AgaA6QgFgCgDgCIgIgHQgDgEgCgEIgFgJQgCgFAAgGQgBgGAAgHQgBgEABgFQAAgFACgGIAEgJQACgFADgEIAHgJIAIgHIAIgEIAJgDIALAAQAEABAEACIAIADIAGAHIAAgHIABgBIAAgCIABgBIACgCIACgCIABAAIAUgBIACAAIABAAIACABIAAABIABABIAAACIABACIABBaIgBABIAAABIgBACIgCADIgBAAIgCABIgQABIgDAAIgCAAIAAgBIgCgCIAAgOIgCAGIgDADQgBADgDACQgBADgDAAIgFAEIgFADIgEADIgGAAIgKABIgJgBgAgCgZQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgEACIgDAFIgCADIgCAGIgBAEIAAAGIAAAGIACAFQAAABAAAAQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAIADADIAEADIAEABIAEAAIAEgBIAEgDIADgDIADgDIADgGIABgEIABgGIABgFIgBgEIgBgHIgCgDIgCgFIgDgCIgEgCIgEgBIgFAAIgDABg");
        this.shape_1.setTransform(10.4, 13.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFF00").s().p("AAABWQgGAAgEgCQgEgCgDgDIgGgHIgCgGIgCgIIgCgKIgBgMIgFhxIABgBIABgCIABgBIACgBIABAAIACgBIAXgCIACAAIABABIABAAIABABIABACIABABIAFByIAAAFIAAAEIABADIAAACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIACACIACABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIACAAIACgBIACAAIAEgCIABAAIABgBIADAAIACABIABADIAAADIABANQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBADIgCACIgEACIgEABIgEACIgFABIgFABIgIABIgCAAg");
        this.shape_2.setTransform(0.8, 12.1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFF00").s().p("Ag1BiIAAgBIgCgBIgDgCIgBgCIAAgBIgMilIAAgEIABgCIACgCIADgBIABgBIACgBIAWgCIAFAAIACABIACADIACAEIABANQACgGAGgGIAKgJQAFgEAGgCQAHgDAJAAIAKgBIALADQAFABAEAEIAJAHIAHAJIADAJQAEAFAAAFIACALIAAANIgCAMIgFAMIgEAJIgIAJIgJAHIgLAGIgNADQgGACgFgBIgKgCIgJgFIgJgHIAEBDIAAACIgBACIAAABIgBACIgBABIgBABIgDABIgCAAIgZAGgAABg+IgFABIgEACIgFAEIgEAEIgCAFIgDAGIgBAGIAAAHIABAGIADAGIACAFIAEAEIAFADQABABADABQACABACAAIAGAAIAEgBIAGgDIADgDIAFgFIADgFIAAgGQACgDgBgDIAAgHIAAgGIgBgFQgCgDAAgCIgFgEIgDgDIgFgDQgDABgBgCIgCAAIgFABg");
        this.shape_3.setTransform(-11.7, 20);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("AgDA2IgFgBIgIgCQgFgBgDgDQgFgBgCgFQgFgDgBgEIgFgJQgCgEAAgHIgBgMQgBgFACgGIADgLQABgFADgFIAGgIIAIgGQADgDAFgCIAJgDIAJgBIAKABIAIADQAEABAEADIAGAGQAEAEACAEIAEAJIACAKIAAAMIgBAKIgCAKIgEAJIgGAIIgHAHIgIAFIgIADQgFACgFgBIgDABIgBAAgAgBgbIgEACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgDADIgCAFIgBAFIgBAFIAAAFIAAAGIABAFIABAFIACAEIACAEQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIADACIAEAAIAEgBIAEgCIADgCIACgEIACgEIACgFIAAgFIABgGIAAgFIgBgFIgBgFIgCgEIgCgEIgEgDIgDgBIgFgBIgDABg");
        this.shape_4.setTransform(32.7, -7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFF00").s().p("AANBIIgFAAQgEAAgDgBIgFgDQgDgBgCgDIgDgFQgCgDAAgEIgCgIIAAgJIAAgsIgOAAIgEgEIAAgRIABgCIAAgBIABgBIACgBIAOAAIAAgeIABgCIAAgBIADgDIAWAAIADADIABACIAAAeIAQAAIABABIABAAIABABIABACIABABIAAAPIgBABIAAACIgDADIgCAAIgPABIAAAfIAAAHIAAAGIABAEIABADIABADIACACIADABIAEAAIAEAAIAAgBIABAAIABABIACABIABACIAAACIAAAMIgBABIAAABIgBACIgBABIgBAAIgBABIgDAAIgDABIgDAAIgEAAIgDAAIgBAAg");
        this.shape_5.setTransform(23.8, -8.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFF00").s().p("AgwA8QgBABAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgDgBIgBgFIgjhnIAAgEIAAgCIABgCIACAAIADgBIAYAAIAEABIADAAQAAABABAAQAAABABAAQAAAAAAABQAAAAAAAAIACAFIARBFIAAADIABACQAAABAAABQAAAAAAABQAAABAAAAQABAAAAABIAAgIIABgCIAMhGIAAgBIABgDIABgBIABgCIACAAIABgBIAfAAIAEAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAIACAFIAPBBIAAACIABADIAAADIABACIAAgHIABgDIALhBIABgFIACgCIACgBQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAABIAVAAIADACIAAADIAAADIgXBiIgCADQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCACIgDACIgaABIgDAAIgDgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgBgCIgQhEIAAgDIgBgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIAAADIgBADIAAADIgNBFIgCAFQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgEAAIgbACIgBABIgCgCg");
        this.shape_6.setTransform(5.4, -5.8);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFF00").s().p("AgIBEQgIAAgHgCIgNgFQgGgDgGgEIgKgKQgFgFgDgGIgGgOIgCgPIAAgOQABgIADgGQABgIAFgFIAJgKIALgJQAFgEAIgBIAOgEIAQgBQAHgBAIACQAHAAAHADQAHACAGAEIALAHQAGAEADAGQAFAFACAGQADAGACAHIACAPQAAAGgBAHQAAAGgDAHQgCAGgEAFIgIAKQgFAFgFADQgGAEgGADIgNAEQgIACgHAAIgPAAgAgMgfIgFADQgBACgDADIgCAGQgCACAAAEIgBAHIAAAGIABAIIACAHIACAGIAEAFIAEAEIAGADQADACADAAIAGAAQADAAADgBQADAAADgCQADgBACgDIAEgFIACgFIACgGQABgDAAgDIAAgIIgBgGIgCgHQAAgDgCgDIgDgFIgEgFIgGgDQgDgCgDAAIgFgBIgCABIgGAAIgGADg");
        this.shape_7.setTransform(-12.1, -5.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFF00").s().p("AhABlIgIgEIgCgEIAAgCIgVi0IAAgCIACgCIAAgCIACgCIABgBIABgCIApAAIADABIABAAIACABIADACIACABIABAEIAAADIAIBCIA/gBIgGhBIAAgEIABgBIACgCIADgCIABgBIAjAAIABABIADAAIAEADIABABIABACIAAACIABACIAOCnIAAAEIgBACIgFAEIgBAAIgCABIggACIgCAAIgDgCIgCgBIgCgBIgCgEIAAgCIgGhGIhAACIAIBIIAAACIgCAGIgDABIgBABIgCABIgBAAIgkADg");
        this.shape_8.setTransform(-31.4, -7.2);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#BD4900").s().p("AgaBgQgGAAgDgDQgFgDgBgFIgCgHIAAgCIABgBIAAgCIAAgCIABAAIAAgCIAOgjIgjhbIAAgDIgBgCIAAgCQgBgEACgDQABgEADgDQADgEAEgBQADgCAEAAIAVgDQADAAAFABQAEABAEACIAGAHIACAHIABAFIADgJIABgDIABgEIADgDQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAIADgDIADgCIAEgCIAEAAIARgCIACAAIAFAAQAEABAFAEQADADACAFIABAGIAAACIgBABIAAAEIgvCPIAAABIgDAGIgFAFIgGAEIgFACIgSAEIgGAAgAgMBPIABgBIAAAAgAgDAJIAEAOIAFgQgAgWgpIgFgPIgBAAIAGAPgAAhhMIAAABIAAgBg");
        this.shape_9.setTransform(22.1, 14.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#BD4900").s().p("AgSBLIgNgCIgMgGIgKgJQgEgFgEgGQgDgFgCgHQgCgGgCgHIgBgOQAAgHABgFIACgNIAFgMIAGgMIAJgLIAKgIQAGgFAGgBQAGgDAHAAIAHgBIAGABIAMACIACABQADgBABgCIAEgBQADgBACAAIATgCIACgBIADABIAEAAIAFADIAEADIACADIADAEIABAEIAAAFIACBZIgBAEQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgBAEIgDADIgCADIgEADIgEACIgEABIgQADIgFAAIgFgBIgEgCIgFAEIgHAEQgDACgEAAIgHACIgJABIgFAAgAgJAsQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAEgCIACgCIADgCIADgCIACgDIACgDIACgDIAcAFIgBhIIgCAAIABAsIgdgjIgDgDIgEgCIgFgBIgHAAQgDAAgCABIgFADQgDABgCADIgGAHIgEAHIgDAIIgBAHIgBAIIABAKIACAIIADAHIAEAFIAEAEIAFACIAFABIADAAIAEAAg");
        this.shape_10.setTransform(10.3, 13.5);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#BD4900").s().p("AgLAqQgFgBgDgDIgGgGIgEgGQgDgEAAgEIgCgIIgBgIQgBgCACgEIABgIIADgHIADgHIAFgGIAGgFIAIgEIAIgCIAHAAIAIACIAHAEIAGAGIAEAHIADAHIACAHIAAAIIAAAHQAAADgCAEQAAAEgCAEQgBADgDADQgCAEgDACQgCADgDACIgHAEQgEACgEAAIgHABIgIgCgAAAgKIgBABIgBADIgBACIAAADIgBACIABAFIAAADIABACIACACIAAgBIABAAIABgBIACgEQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgCIAAgEIgBgDIgBgCIAAgBIgBgBIgBAAg");
        this.shape_11.setTransform(10.5, 13.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#BD4900").s().p("AAABlQgIAAgGgDQgIgCgEgFQgGgFgDgGQgDgFgBgEIgDgKIgBgMQgCgGABgHIgGhtQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQgBgDACgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgEIAEgDIADgCIAFgCIAFgBIAXgCIAEAAQABgBADACIAFACIADADIACABIACACQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIABAFIABAEIAEBvIABADIABAAIACAAIADgBIAGABQAFABAEAFIAFAIIABAHIAAANIgBAIQgCAEgCADIgFAGIgGADQgEAAgBACIgGACIgFABQgDABgDAAIgLABIgDAAgAgShEIAFBnQgBAGACAFQgBAEACAFIABAGIACAEIACADIADABQABABADAAIAHAAIACgBIgBAAQgEgCgDgDIgDgFIgDgHIgBgEIAAgEIAAgEQgCgDABgCIgEhog");
        this.shape_12.setTransform(0.7, 12.1);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#BD4900").s().p("AgyBxIgFAAIgEAAIgFgDIgEgEIgDgFIgCgDIgBgFIgMimIAAgFIABgFIACgDIADgFIADgDIAEgCQACgCADAAQACgCADABIAXgEQAEAAAEACQAFAAAFADIAAABIADgCQAHgFAKgEQAHgCAKgBIAHgBIAIABIAOADQAHACAGAFQAGAEAFAGQAEAEAEAGIAGAMIAEANIABANIAAAPIgCAPQgCAGgDAHQgCAGgEAFQgFAIgFAEQgGAGgGAEQgGAEgHADIgPADIgMACIgEAAIgKgCIACAmIAAAFIAAAFIgCAFIgCAEIgDADIgEACIgEADIgFAAIgZAFIgDAAIgCAAgAg3hFIAMCWIAMgDIgFhbIgEAHIgEhBgAASANIAKgCIAIgFQADgBADgEQADgBACgEIAFgJQACgDAAgFIACgKIAAgKIgBgKIgCgHIgDgGIgFgHIgGgFQgDgDgDABIgGgDIgJAAIgLADQgGACgCADIgHAFIgGAKIgTAlIAaAbQABACAEACIAFADQACABAFgBIAIAAgAg8hEIABAAIAAgBg");
        this.shape_13.setTransform(-11.8, 19.9);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#BD4900").s().p("AAEAuIgGABQgFAAgEgCIgIgDIgHgFIgGgHQgDgDgBgFQgCgDgBgFQgBgFAAgEQgCgFACgDQAAgFABgEIADgIIAEgIIAGgHIAHgFIAIgEIAJgCIAIAAIAJACIAIAEIAHAFIAFAHIADAHIADAIIABAIIAAAIIgBAJIgDAIIgEAIIgFAHIgHAFIgIAEIgJADgAgBgOIgBABIgCABIgCACIgBADIgCADIAAAEIAAADIAAAEIABADIACACIABACIACABIABABIADAAIAEgCIADgDIABgDIABgDIABgEIAAgEIgBgEIgBgCIgCgEIgCgCIgEAAIgCABg");
        this.shape_14.setTransform(-11.5, 16.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#BD4900").s().p("AgKBFIgMgDQgGgCgGgEIgJgIIgJgKQgDgGgCgGQgDgGgBgHIgBgPIACgNQABgHACgHIAGgNQADgGAFgEQAEgGAGgDQAFgEAGgCIAMgEIAMgBQAGAAAGABIAMADQAGADAFAEIAJAIIAIAKIAFAMIACANQACAHgBAHIgBANIgEANIgFALIgHALIgJAIIgLAHIgLAEQgGACgHAAIgLAAgAgEgkIgGABIgFADIgFAFIgEAFIgEAHIgCAIIAAAJIAAAKIACAIIADAGIAEAFIAEADIAFACIAFACIAHAAIAGgBIAGgCIAFgDIAEgFIAEgFIADgHIACgHIABgJIgBgJIgBgHIgDgGIgDgGIgEgDIgFgDIgFgCIgHAAIgCAAIgEABg");
        this.shape_15.setTransform(32.8, -7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#BD4900").s().p("AgGAsIgIgDQgFgCgCgEIgFgGIgDgHIgCgHIAAgHQgCgEABgDQgBgDACgEIABgHQAAgDACgEIADgGQABgFAEgCQACgEAEgBQADgDAFgBIAHgBQAEgBAFACIAIADIAGAGQADADACADIADAHIABAHIABAHIAAAGIAAAHIgBAHIgCAHIgDAGIgFAHQgDADgDACIgHAEIgJACIgHgBgAABgLIgBACIAAADIAAAEIgBADIABAFIAAADIAAADIAAABIABgBIABgCIAAgCIABgEIAAgEIAAgEIAAgEQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAABAAIgBgCg");
        this.shape_16.setTransform(32.8, -6.9);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#BD4900").s().p("AASBYIgLAAIgKgCIgKgFIgIgHIgFgJQgDgEAAgFIgCgKIgBgLIAAgdIgFgCIgEgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgDgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgEIAAgLIAAgEIABgEIACgEIACgEIADgDIAFgDIAEgBIACAAIAAgOIAAgDIABgFIACgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIADgDIAEgDIAFgCIAFAAIARAAIgBAfIABAAIAAgfQACAAADABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIADADIADAEIABAEIABAEIABAEIAAAMIADAAQADAAACACIAEACIADAEIADADIABAEQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAALIgBADQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEACIgFABIAAARIABAGIAAAEIAIABQAFACADAEQADAEABADIABAHIAAAIIAAAEIgBAEIgBAEIgCADIgDADIgDADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEACQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgEAAIgEABIgEAAgAAGA5IgBgCIgEgHIgBgGIAAABIAAAGIABADIABACIABABIACABIABABIAAAAg");
        this.shape_17.setTransform(23.8, -8.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#BD4900").s().p("Ag0BNIgJgEIgGgHIgDgHIgjhoIABABIgBgCIAAgCIgBgCIAAgCQAAgEABgEQACgFADgDQADgEAFgBQADgCAEABIAZAAIACgBQAEAAADACQAFABADADIAGAIIADAHIABAFIABgEIABgFIABgEIADgDIADgEIADgCIAEgCIAEgBQADgCACABIAcAAQAEgBAFACQAFABADAEQAEACABAFIACAFIACgEQACgFADgDQADgEAEgBQAFgCAEABIATAAIADgBIAFACQAEABAEAEIAEAIQABADAAADIAAAFIgBABIAAABIgXBiIgDAHQgCAEgDADIgHAEIgIACIgaACIgIgBIgJgEIgFgHIgDgIIgBgGIgCAIIgDAHQgCAEgCAEIgHAFIgJABIgbACIgIAAgAgqAtIASgBIAEgOIgaACIAAgEIgBgCIAAgDIgBAAIgQhCIgHAAgAAjAbIADANIAPgBIADgNgAASgeIgDgOIgRAAIgDAOIAXAAgAgCguIAAAAIAAgCg");
        this.shape_18.setTransform(5.4, -5.8);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#BD4900").s().p("AgJBUIgRgDIgQgGQgHgDgIgGIgNgLIgKgPIgHgQIgDgTQAAgIABgJQABgJADgJQAEgJAEgGQAFgIAHgGQAGgGAHgEQAIgFAIgCQAIgEAJAAQAJgCAJAAQAJgBAIACQAKABAHADQAJACAHAFIANAJIAMAMIAJAPQAEAHABAJQACAHAAAKQABAIgBAIIgEAQQgDAHgFAIQgEAGgGAGIgMALIgPAHQgHADgJACIgRADIgRAAgAgOgyIgMADQgFABgFAEIgIAGIgHAIIgFAJIgCALIgBALIADAMIAEAKQACAEADAFIAJAHIAJAGIAKADIAMACQADABAEgBIAGAAIANgBIAKgEQAGgCADgDQAFgCADgEQAFgEABgDQADgFABgEIADgJIAAgLIgBgLQgBgGgDgEQgBgFgEgDQgCgFgFgDIgJgGQgEgDgGgBIgLgDIgNgBIgNABg");
        this.shape_19.setTransform(-12.2, -5.3);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#BD4900").s().p("AgGAzQgFAAgEgCIgJgFIgIgIIgEgHIgEgIQgCgEAAgFQgCgEABgGQgBgDABgFQgBgEACgFQAAgEACgFIAEgIQACgEAFgEQADgEAFgCQAEgCAGgCQAEgCAGABQAEgBAFACQAFAAAFADIAIAFIAHAIIAFAHIADAIIACAJIABAJQABAEgBAFIgBAIIgCAJIgEAIIgGAHQgEAEgEADIgJADQgGACgEAAIgDAAIgHgBgAgIgSIgBACIgCADIgBAEIAAAEIAAAFQgBADACADQgBACACADIABADIACADIACACIACABIACABIADAAIADgBIAEgCIACgCIABgCIABgEIAAgEIAAgGIAAgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgCgEIgBgDIgCgCIgCgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCAAIgEABIgCAAg");
        this.shape_20.setTransform(-11.9, -5.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#BD4900").s().p("AhBB0IgGgBIgEgCIgFgCIgDgEQgDgCAAgCIgDgFIgBgEIgTi0QgCgDACgEQgBgDACgBQAAgEACgCIADgFIAFgDIAFgCQABgCAEABIAFgBIAjABIAFAAIAFACQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAEADIAEAFIACADIADAGQgBACACACIAEA0IAhAAIgEgvIAAgGIABgFIADgGIADgDIAEgEIAFgDQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABABIAGgBIAfABIAFAAIAFABQABAAAAABQABAAAAAAQABAAAAABQABAAABAAIAEAEIADADIADAFIAAAEIACAGIANCmIAAAGIgBAEIgCAGIgDADIgEAEIgFACIgFABIgDABIggADIgFAAQgCAAgDgCIgFgCIgCgCIgEgDQgCgEgCgBIgBgEIgBgFIgFg5IggABIAFA4IAAAGIAAAEIgCAGIgDADIgFAFIgDACIgFABIgFABIgjACIgEAAgAg7BZIAAgCIgBAAgAg8BWIAagCIgJhTIBggEIAGBQIAVgBIgNieIgWgBIAGBMIheACIgHhPIgcgBgAA8BTIAAgDIgBAAgABDhVIgBAAIAAAAIABAAg");
        this.shape_21.setTransform(-31.5, -7.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.6, -18.8, 81.6, 50.1);


    (lib.HM_harClockFacecopy25 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "3-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AAAg6IABB1");
        this.shape.setTransform(0.5, -3, 1, 1, 0, 0, 0, 0.4, -5.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy25, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy24 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "3-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("Ag7AAIB3AA");
        this.shape.setTransform(0.5, -3, 1, 1, 0, 0, 0, -5.6, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy24, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy21 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "2-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AAegzIg7Bn");
        this.shape.setTransform(0, -3, 1, 1, 0, 0, 0, 2.8, -5.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy21, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy20 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "3-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("Ag7AAIB3AA");
        this.shape.setTransform(0.5, -3, 1, 1, 0, 0, 0, -5.6, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy20, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy19 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "5-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "5-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AgdgyIA7Bl");
        this.shape.setTransform(0.4, -2.8, 1, 1, 0, 0, 0, -2.6, -5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy19, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy18 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "2-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AAegzIg7Bn");
        this.shape.setTransform(0, -3, 1, 1, 0, 0, 0, 3.2, -5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy18, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy17 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "3-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AAAg7IAAB3");
        this.shape.setTransform(0.5, -3, 1, 1, 0, 0, 0, 0.3, -5.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy17, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy16 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "3-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AgdgyIA7Bl");
        this.shape.setTransform(0.5, -3, 1, 1, 0, 0, 0, -2.6, -5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy16, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy15 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "2-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AgzgdIBnA7");
        this.shape.setTransform(-0.1, -3.1, 1, 1, 0, 0, 0, -5, -3.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy15, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy14 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "3-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "3-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AgdgyIA7Bl");
        this.shape.setTransform(0.5, -3, 1, 1, 0, 0, 0, -2.6, -5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy14, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy13 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "8-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "8-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AAzgeIhlA9");
        this.shape.setTransform(0, -2.5, 1, 1, 0, 0, 0, 4.8, -2.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy13, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy12 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "8-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "8-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AgiAxIBFhh");
        this.shape.setTransform(0, -2.5, 1, 1, 0, 0, 0, -3.3, 4.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy12, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "2-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AgzAeIBng7");
        this.shape.setTransform(-0.1, -3, 1, 1, 0, 0, 0, -5.2, 2.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy3, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "8-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "8-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AAzgfIhlA/");
        this.shape.setTransform(-0.1, -2.6, 1, 1, 0, 0, 0, 4.8, -3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy2, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harClockFacecopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "1-00": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* timeShown = "1-00"
		
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // little hand
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#990000").ss(2, 1, 1).p("AghAyIBDhj");
        this.shape.setTransform(-0.1, -3.1, 1, 1, 0, 0, 0, -3.5, 4.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // big hand
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#990000").ss(1.3, 1, 1).p("AAABVIAAiq");
        this.shape_1.setTransform(0.1, -11.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 7
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgSDNQAAgNAFgIQAGgKALAAQAEAAAFACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBQgEgCgDAAQgHAAgEAHQgEAFAAAJQAFgFAGAAQAIAAAFAFQAEAFAAAIQAAAIgFAGQgFAFgIAAQgSAAAAgcgAgGDOQgDADAAAFQAAAEACAEQADAFAEgBQAFAAACgEQADgDAAgFQAAgFgDgDQgCgDgFAAQgEgBgCAEgAhtDPQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAUgwIgYAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACIgBAFIgTAuQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAgABaDNQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIAGACQAGAAAEgEQADgCAAgGQAAgFgDgEQgEgDgGAAIgIABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgVAAIAAAQIAHgBQAHAAAGAGQAFAEAAAIQAAAJgGAGQgGAEgJAAQgGAAgEgBgAjACGQgGgFAAgHQAAgFADgEQADgFAGgBIAAgBQgLgDAAgKQAAgGAFgFQAFgEAIABQAIgBAFAEQAEAFAAAEQAAAGgCADQgCADgGADQAGACADAEQADAEAAAGQAAAHgGAFQgFAEgIAAQgIAAgFgEgAi7ByQgDADAAAFQAAAEAEADQADADAFAAQAEgBADgCQADgCAAgFQAAgDgCgDQgBgCgEgBIgFgDIgHAEgAi6BXQgDADAAAEQAAACADADIAJAFIAFgFQACgCAAgEQAAgEgDgCQgDgCgDAAQgEAAgDACgAC3CHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgLIgXAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAUgiQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIgVAjIAQAAIAAgMQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAAMIAFAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgADIAfQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAQAFADAFAAQAFAAAEgCQAFgDAAgFQAAgGgFgDQgDgCgHAAIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGAAQAKgCAAgHQAAgFgDgCQgDgCgFgBQgEAAgHADQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAGgDAGAAQAIAAAFAEQAFAEAAAHQAAAGgDADQgEADgFABIADABQAKADAAAKQAAAJgIAEQgFADgJABQgFAAgGgCgAjJAfQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgYQgFAEgHAAQgIAAgEgEQgFgFAAgIQAAgIAFgFQAFgFAIgBQAJABAFAFQAFAFAAAIIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAgAjdgQQgCADAAAFQAAAFACADQADADAEAAQAFAAADgDQADgCAAgGQAAgFgDgDQgDgEgEAAQgFAAgDAEgAirhLQgEgJAAgLQAAgMAEgIQAFgKAKAAQALAAAFAKQADAIAAAMQAAALgDAJQgFAKgLAAQgKAAgFgKgAikhuQgCAGAAAJQAAAXAKAAQALAAAAgXQAAgJgCgGQgDgJgGAAQgGAAgCAJgAjChCQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgvIgGAFIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgACjhMQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEQAAgCACgCIAIgHIAKgMQAGgHAAgGQAAgEgDgDQgDgCgFAAQgEAAgGADIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAGgDAGAAQAIAAAFAEQAFAEAAAIQAAAGgFAJIgLAMIgKAJIAZAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAhciSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAh5iSQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgABxiSQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgCitQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgFQAAgDADgBIAGgHIALgLQAFgIAAgGQAAgEgDgDQgDgDgEAAQgEABgGADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAFgDAHAAQAIAAAFAEQAFAFAAAHQAAAHgGAIIgKALIgKAKIAZAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAgVitQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAguIgGAEIgBABIgCgBIgBgCIgBgBIABgCIAJgHQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAA2QAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAg");
        this.shape_2.setTransform(0.1, -3.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape_3.setTransform(0, -2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjgBQBkABBGBGQBHBHAABjQAABkhHBGQhGBHhkABQhjgBhHhHg");
        this.shape_4.setTransform(0, -3.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.rf(["#163669", "rgba(82,63,139,0)"], [0.894, 1], 0, 0, 0, 0, 0, 26.3).s().p("Ai4C4QhMhMAAhsQAAhrBMhNQBNhMBrAAQBsAABMBMQBNBNAABrQAABshNBMQhMBNhsAAQhrAAhNhNg");
        this.shape_5.setTransform(0, -3.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_harClockFacecopy, new cjs.Rectangle(-26.1, -29.2, 52.2, 52.2), null);


    (lib.HM_harChecktext = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF00").s().p("AgyBqIgCgBIgCgCIgBgCIABjGIACgEIABgBIACgBIABgBIAcgBIABABIABAAIADADIABACIgBB6IAcg1IACgDIADgDIAEgCIADgBIAagCIACAAIACACIAAAEIgBABIAAABIgiA5IAjA8IAAABIABABIAAAEIgBABIgEACIgdAEIgEAAIgDgCIgCgCIgCgDIgag5IgBA/IgBACIgBABIgBACIgCABIgBABIgCAAIgXADg");
        this.shape.setTransform(33.8, -3.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFF00").s().p("AAFBMIgNgBIgMgFQgGgDgFgEIgKgKIgGgMIgFgPQgBgIAAgJQAAgJABgIIAEgPIAGgPQAFgHAFgFIALgKIAMgIIANgFQAIgBAIAAIACgBIACABIAFAAIAHABQAFAAAEACIACAAIABABIADAGIABABIgBAUIAAADIgCACIgCAAIgDACIgEAAIgBgCIgDAAIgBAAIgIAAIgCAAIgHACQgDAAgDACIgGAEIgFAFIgDAHIgDAHIgCAIIAAAIIAAAIIADAHIADAGIAEAFIAFAFIAGACIAGABIAHAAIAEgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIAEgBIABgBIACAAIABgBIADAAIACABIABACIAAADIABAQQAAAEgCACQgCAFgFACQgDADgHACIgPADIgKAAIgFAAg");
        this.shape_1.setTransform(20.9, 0.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFF00").s().p("AgTBQIgOgFIgNgIQgGgFgFgGIgJgNQgDgHgCgJIgCgSQAAgJABgIQABgJACgIQADgIAEgHIAKgOIALgKQAHgFAGgDQAIgDAHgCIAPgDQAKAAAIABQAIABAHADQAHACAFAFQAGAEAFAGIAHAMIAFANIADAQIABARIAAABIgBACIgBABIgCAEIgCABIgCAAIgCABIhVAKQABAIAEAEIAIAJQAGADAGAAQAEABAEAAIAJgBIAIgBIAIgCIAIgDIAGgEIACAAIAAgBIACAAIADAAIACABIACACIAAADIAAATIgDAGIgCACIgEACIgKAEIgKAEIgKACIgKACIgQABIgQgBgAADgtQgFAAgFADQgFACgDAFQgDAEgCAHIgCAOIA1gFQABgIgDgGQgBgGgEgEQgDgDgGgCIgIgBIgEAAg");
        this.shape_2.setTransform(6.6, 2);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFF00").s().p("AhHCCIgBgBIgCgCIgDgBIgCgEIAAgCIgPjpIAAgDIAAgCIACgDIADgEIAEgCIAEAAIAkgCIABABIACAAIAEABIACACIABACIABACIAAACIABADIAGBiIAKgOIANgLIAOgGQAIgDAJAAIAIAAIAHAAQAHAAAFADIALAFIAKAIIAGAJIAGALIADALQABAFgBAHIAEBbIgDAGIgCADIgEABIgCABIgeAEIgFAAIgDgCIgCgCIgDgEIgDg7IgBgNIAAgLIgCgIIgDgHQgBgDgDgCIgFgCIgFgCIgIAAIgBAAQgIABgHADQgFADgFAHQgEAIgCAKIgBAXIAFA7IAAACIgEAGIgCACIgGADIgiAFg");
        this.shape_3.setTransform(-12.6, 0.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("AgGCAQgNgBgMgEQgMgEgMgGQgOgGgKgKQgKgJgJgMQgHgMgFgPQgGgOgBgSQgCgQACgOQABgPAFgOQAEgNAIgMQAHgLALgLQAKgJAMgHQAMgHAOgFQAOgFAPgDQAOgDARAAQAHgBAHAAQAHACAIgBIAOACIAPADIAJACQADABACADQADACABADIABAHIgBAbIgBADIgBADIgDACQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEAAIgBgBIgOgEIgOgDIgNgBIgOAAQgJAAgIADQgJACgHADQgGAEgGAEQgHAFgFAHQgFAGgEAHQgFAHgBAHQgDAJAAAIIAAAQIADARQADAJADAGQAEAIAGAFQAEAGAIAEQAGAFAGADQAHAEAIABIARABIAFABIANgCIAKgBIAMgDIAMgEIAOgGIACAAIABgBIABAAIAEAAIADACIACADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIADAXQABADgBADIgCAFIgEAEIgHADIgMAFQgHABgHADIgPADQgHACgJAAQgPADgNAAIgagCg");
        this.shape_4.setTransform(-35.4, 2.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#BD4900").s().p("AgyB6IgGgBIgIgGIgDgEIgCgEIgCgJIABjDIABgFIACgEIAGgIIAEgDIAFgCIAFgBIAYgBIAGABIAJAEIAEAEIAEAIIABAJIAAARIgBAnIACgDIABgBIAGgGIAHgEIAigDIAGAAIAHADIAGAIIACAIIgBAEIABABIgEAHIgGAKIgMAVIgLASIAMAVIANAWIAGAKIABADIAAABIABAEIABAAIgBADIgBAHIgEAHIgGAEIgGACIgeAEIgIAAIgJgDIgGgGIgCgEIgBACIgBAEIgDAEIgGAGIgKAEIgXADgAgng3IAAA1IgBA2IAAAmIAJgCIAAgRIAAgZIAAgNIAIgCIAPgDIgPgDIgIgCIAAgPIABghIAAglIABgbIgFAAIgFAAIAAAigAAbgXIAAABIgHAMIgNAYIgHAOIAFAPIALAVIAIARIAKgCIgMgVIgOgYIgGgKIAFgIIAEgHIAJgPIAKgSIgDABg");
        this.shape_5.setTransform(33.8, -3.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#BD4900").s().p("AgLBZIgPgFIgPgJIgLgOIgJgOIgGgSIgCgVIABgTIAGgSIAIgRIALgOIANgNIAQgJIAPgFIASgEIAFAAIAYAEIALAFIAEAEIADAHIACAIIgBAVIgCAGIgDAHIgIAHIgHABIgFAAIgDAAIgBAAIgCgBIgJAAIgHABIgDACIgEAEIgDAJIgCALIACAJIADAGIAEACIACABIACABIAFAAIAEgBIABgBIAEAAIADgBIAGgEIALAAIAJAHIAEAIIABAHIAAAPIgEAQIgKALIgQAGIgiAFgAAJg5IgLADIgKAGIgJAJIgMAUIgDAOIgCANIAFAaIAGAJIAGAIIAIAGIAJACIAKABIAYgCIAIgEIABgBIAAgBIgEABIgFABIgKAAIgJgCIgKgDIgHgHIgIgIIgEgJIgEgKIgBgKIADgUIAFgLIAGgJIAGgHIAHgGIAJgDIAKgDIAFAAIACgBIADABIAEAAIAAgBIABgCIgDgBIgHAAIgFgBIgCAAg");
        this.shape_6.setTransform(20.9, 0.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#BD4900").s().p("AgWBfIgSgHIgPgJIgOgNIgLgQIgGgTIgDgWIABgUIAFgTIAIgSIALgRIAOgMIAQgJIARgGIASgDIAVAAIATAEIAQAJIANAPIAJANIAGAQIAFAlIgCAIIgEAIIgIAHIgEACIADADIACAEIABAIIAAATIgBADIgGAMIgDAEIgEACIgbALIgWAGIgTAAgAgJg/IgMAFIgLAFIgJAJIgHAKIgGAOIgDANIABAfIAFAMIAGAKIAIAIIAKAGIAYAGIAOgCIAbgGIADgCIAFgDIgXAHIgVAAQgJgCgJgFQgIgFgGgHQgEgKgCgJIgDgQIAQgCIALgBIAWgDIAcgCIAUgCIAAgIIgDgRIgEgKIgGgJIgHgIIgJgGIgLgDIgPAAg");
        this.shape_7.setTransform(6.6, 2.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#BD4900").s().p("AgngCQACgJAFgHQAHgHAIgEQAHgEAKgBQAJgBAIADQAIADAHAGIAIAQIAGAgIhGAHIgUAEgAgEgBIAGAAIAHgBIgBAAIgGgBQgDAAgDACg");
        this.shape_8.setTransform(7, -0.7);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#BD4900").s().p("AhJCRIgGgCIgEgDIgIgJIgCgFIgBgFIgPjvIABgFIADgGIADgEIAEgEIAFgDIAGgCIAFgBIAqgBIAKAEIAEADIAHAJIACAGIAAAFIAAAKIACAYIACAdIACgCIARgIIAUgEIASAAIAQAEIAPAHIAMALIAJALIAGANIAFAdIADBeIgBAFIgCAEIgGAIIgFADIgFACIgkAGIgFAAIgGgBIgFgCIgEgDIgEgEIgDgFIgCgFIgFhUIgDgKIgBgCIgCgBIgFAAQgFABgDACQgCACgCADQgDAFgBAHQgBAJAAALIADBAIgBAFIgCAFIgDAEIgEAEIgEADIgFACIgoAGgAg/hwIgPAAIACAeIADA0IAFA7IADA1IACAgIAPgCIANgCIgBgTIgCgZIAAgMIAAgJIABgSIAEgNIgFAGIgCADIgCgoIgBgOIgCgeIgBghIgBgTIgQABgAAIgSIAMABIAKADIAJAGIAHAJIAGATIACAZIAAALIACAVIAAAUIAMgCIALgBIgBgTIgBgdIAAgaIgBgMIgBgKIgGgRIgLgMIgIgEIgJgCIgMAAIgNADIgLAFIgJAIIgEAEIgEAFQAJgFAKgBg");
        this.shape_9.setTransform(-12.7, 0.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#BD4900").s().p("AgICQIgcgGQgNgEgNgHQgPgHgMgLQgMgMgKgNQgIgOgGgQQgFgRgCgSQgCgSABgQQACgQAFgQQAGgPAIgOQAJgMAMgMQALgLANgHIAcgOQAQgFAQgDIAhgEIABAFIAAAGIAAgGIAAgFIAPAAIAuAFIAMAEIAKAHIAHALIACAMIgBAbIgBAIIgFAJIgIAFIgIACIgJAAIgPgFIgYgEIgbADIgMAEIgKAHIgJAJIgHAKIgFAMIgCANIAAAOIACAOIAFAMIAHAJIAKAJIAJAGIAaAFIAQgBIATgEIAagJIgCAAIAGgCIAMAAIAKAFIAGAIIADAJIADAXIAAALIgFALIgJAIIgJAFIgcAJIg/AIgAgBhtQgPACgMAFQgMAEgLAGIgTAPQgIAJgIAKQgGAKgEALQgEAMgCANIAAAMIABAQQACAPAEANQAEANAGAKQAIALAIAHQALAJALAFQAKAGAKADQAMADALACIAygBIAqgJIALgEIAEgCIAAgFIgCgLIgGACIgDABIgNAFIgYAFIgUABIgUgCIgRgGIgQgJIgPgMIgLgQIgIgSIgEgoIAEgTIAHgSIALgQIAOgNIARgKIARgHIAUgDIAPAAIAfAFIADABIAFABIAAgNIAAgGIgBgBIgTgEIgogCQgQABgNADg");
        this.shape_10.setTransform(-35.5, 2.7);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-48.9, -16.1, 89.9, 33.3);


    (lib.HM_harCheckshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgzBtIgCgBIgCgCIgDgGIABjGIABgCIACgDIADgDIADgBIAcgBIAEACIACACIACAEIABADIAAACIAAAOIAAAgIgBAkIAAAYIAJgRIAJgRIAEgIIADgEIAEgEIAEgCIAEgBIAagCIACAAIADACIACACIAAAFIgBACIgBABIgFAIIgLATIgLATIgGAKIAMATIAPAbIAIANIAAACIABACIAAABIgBADIgBACIgCACIgDABIgeAEIgEAAIgEgCIgEgDIgCgEIgEgIIgHgTIgJgSIAAAUIAAASIgBAIIAAADIgBACIAAACIgCACIgBACIgCACIgCABIgCAAIgYADg");
        this.shape.setTransform(32, -6.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgJBNIgMgFIgMgIIgLgKIgGgNIgGgPIAAgjIAFgQIAGgPIAKgNIAMgKIAMgIIAPgFIAOgCIALAAIAQADIAFACIABACIACAEIABADIgBAUIgBAEIgCADIgCACIgFABIgDAAIgCgBIgDAAIgBgBIgKAAIgGABIgLAGIgEAFIgGANIgBAIIAAAPIABAGIADAGIAFAFIAEADIAFACIAHABIAFAAIAFgBIADAAIAEgCIADgBIABgBIACAAIABgBIAFAAIADACIADADIABAUIgEAJIgGAHIgMAFIgeAEg");
        this.shape_1.setTransform(19.3, -2.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTBSIgPgEIgOgIIgMgMIgIgOIgGgQIgCgTIABgSIAEgRIAGgQIAKgOIAMgKIAOgJIAPgFIAQgDIASABIAQAEIANAHIALAMIAHAMIAJAeIABATIgDAGIgCACIgCABIgDABIgCABIgMABIgbAEIgbACIgQACIADAJQADAEAFADQAEADAGABIAZgCIAPgFIAGgDIABgBIABAAIADgBIAEAAIADACIADADIAAAXIgBADIgCACIgBADIgCACIgCABIgCACIgLAEIgfAIIgQABgAAEgqQgGABgDABIgIAGQgDAFgBAFIAAAEIgCAHIAOgCIATgBIAOgCIgBgHIAAgDIgFgJQgDgDgEgBIgHgCIgEABg");
        this.shape_2.setTransform(4.8, -1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AhDCFIgJgDIgCgCIgDgDIgBgCIgOjyIADgGIACgCIAEgCIADgBIAmgCIAEABIADAAIABACIADACIADACIACAJIABAMIABAcIACAfIACATIADgGIACgCIAPgLIANgHIARgDIAQAAIAOADIAMAGIAJAIIAIAKIAEALIAEAMIAEBoIgBACIgBADIgGAGIgDABIgBABIghAEIgEAAIgEgBIgFgGIAAgDIgBgDIgEhGIgDgTIgCgFIgEgFIgJgEIgIAAQgIAAgEAEQgHADgCAHQgFAGgCAKIgBAXIAEA6IAAADIgCAGIgFAGIgGACIgjAFg");
        this.shape_3.setTransform(-14.5, -2.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgGCDIgagFIgYgKQgNgHgMgKQgKgKgJgMQgHgMgGgPQgEgPgDgRQgBgSABgOQACgPAEgOQAFgOAIgMQAIgMAKgKQALgJAMgHQAMgHAOgGQAOgFAPgDQAQgDAQAAIAOgBIA2AIIAGAFIAEAGIACAIIgBAbIgBAEIgCAEIgEADIgEABIgDAAIgCgBIgcgHIgbgBIgRADIgPAFIgMAIIgLAKIgIANIgGAOIgDAQIAAAQIADARIAGAOIAJAMIALAKIAMAHIAPAFIAiABIAvgOIABgBIABAAIACgBIAFABIAFACIADADIAEAcIAAAHIgDAHIgFAEIgHAEIgMAFIgdAHIgtAFg");
        this.shape_4.setTransform(-37.3, -0.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49.4, -17.8, 87.3, 30.8);


    (lib.HM_harchancesshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AlUBtQgLAAgJgCQgLgBgJgDQgKgDgIgEQgLgGgJgHQgIgHgGgKQgHgJgDgLQgFgLgBgNIAAgOIAAgJQABgMAEgKQADgKAGgJQAGgJAIgHQAHgIAKgFQAJgGALgDIAXgHIAZgDIAJAAIABAAQAGgBAGACIALABQAGAAAGACIAHACIAFADQADACABADIABAFIgBAVIAAAEIgCACIAAABIgCACIgBAAIgEABIgEAAIgBgBIgKgDQgGAAgFgCIgKAAIgDgBIgHABIgNACQgGABgFADQgFABgFAFQgFACgDAFQgFAFgCAFIgEAKQgCAGAAAFIAAAFIAAAHIADAMQABAGADAFQACAEAFAFQADADAGAEIAJAFQAGADAGABQAGABAGAAIACAAIALAAIAIgCQAEAAAFgCIAJgDIALgEIACAAIABgBIAFAAIADACIABAAIAAABIACACIABAEIADARIAAADIAAADIgCAFIgBAAIgEAEIgGADIgJADIgLADIgMACIgMACQgMACgKAAgAjrBdIgCgBIgBAAIgCgDIgBgCIgCAAIAAgCIgBAAIAAgDIgNivIAAgDIABgBIAAgBIABgEIABAAIABgCIABAAIACgBIABAAIACgBIABAAIAcgCIABADIAAgDIADAAIACABIABAAIAAABIABAAIABABIABAAIAAABIABABIAAABIADABIAAACIABABIAAACIAEBDIAFgFQAFgFAFgEQAFgDAHgCIAOgDIAFAAIAHAAIALADQAFABAEADQAFADADAEIAGAHQADADABAFIAEAKQABAFAAAFIADBHIgBABIAAABIgCACIAAACIgBAAIgBABIgBAAIgCABIgBAAIgCABIgZADIgEAAIAAgBIgCAAIgDgBIAAgBIgBgBIgBAAIgBgCIAAgCIAAAAIAAgCIgDgsQAAgFgCgFQABgFgCgDIgBgGIgCgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgEgCIgEgCIgDAAIgEAAIgKAEQgFACgCAEQgDAFAAAHQgCAFABAFIAAAHIACAxIgBACIgCADIAAABIgBAAIgCABIgBAAIgBABIgCAAIgbAEgAghBGIgFAAQgGAAgFgDQgFgBgGgEQgEgCgFgFIgHgKIgFgLIgDgMQgCgGAAgIIAAgEIAAgHIADgMQABgFADgGIAGgKIAIgKQAEgEAGgDQAEgDAGgCIALgCIAGAAIAHAAIALADIAKAFIACACIAAgDIABgBIAAgBIACgCIABgCIABAAIABgBIABAAIABgBIADAAIAWgCIACAAIAGADIABABIAAABIABABIAAABIABAAIAEBpIgBABIAAACIgBAAIAAABIgBABIgBACIgBAAIgBABIgCABIgCAAIgTADIgEAAIAAgBIgCAAIAAgBIgCgBIgCgCIAAgBIgBAAIAAgHIgCACIgEAFIgEAEIgGAEIgGADIgGACIgHABIgGABIgCAAgAgVgXIgEACIgEADIgDADQgCADAAACQgCACAAADQgBACAAADIAAACIAAACQAAAEABADIABAFIACAFIADAEIADADQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAIAEABIAEAAIAEgBIAEgCIAEgDIADgEIAAABQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIACgFIABgFIAAgEIAAgCIAAgFIgCgFIgCgFIgBgEIgEgDIgDgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgFAAIgEABgABLA1IgBgBIgBAAIgFgEIAAgDIAAgBIgDhkIADgGIACgDIABAAIACgBIAYgBIADABIADADIAAACIAAACIABAAIAAAFIABgCQAFgGAEgDQAGgEAFgCQAGgCAHAAIABAAIAAgBIADAAQAEAAACABQAFAAAFACQADABAEADIAHAGIADAHIADAHIADAIIAAAKIABA/IgBABIAAABIgCABIAAABIgCABIgBABIgBAAIAAABIgCAAIgVADIgEAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgCgBIgBgCIAAgEIgBAAIAAguIgCgLQAAgEgBgDQgDgDgCAAIgDgBIgCAAQgGAAgCADQgFACgCAEQgCAEgBAHIgBAMIAAACIABArIgBACIgCABIAAABIgCABIgBABIgBAAIAAABIgBAAIgBABIgWACgADkAhQgEgBgFgDQgEgCgFgEQgEgDgDgFQgEgFgCgEIgDgLIgBgMIAAgCIAAgMIADgMIAGgKQADgGAEgEIAIgIIAKgFQAFgDAGgBIALgCIAEAAIAEAAQADABACAAIAHABIABAAIACACIABAAIABABIAAABIABABIABACIAAACIABAAIAAAEIgBALIAAACIgBABIgBACIgCACIgBAAIgCABIgEAAIgCgBIgJAAIgFABIgEABIgDADIgEADIgCAEQgCACAAADIgBAGQgBACAAADIAAABQAAACABADIABAFIACAEIADADIAEADIAEAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIABAAIADAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIADAAIACAAIADgBIABAAIAAgBIAHAAIABABIABAAIABABIAAAAIABABIAAAPIgCAHQgCADgDACIgJAEIgLACIgJAAIgDAAIgDAAIgIgBgAFDAYIgKgCQgFgBgEgDIgIgFIgGgIIgFgIQgDgGAAgFIgBgNQgBgGACgGQAAgGACgGIAFgKIAGgJIAHgHIAJgGIAJgDQAFgCAFAAIAEAAIAHAAIAKADIAIAFQADADADAFQADADACAFIADAJIABALIABAKIAAAEIgBAAIAAABIgBABIAAACIgBAAIgBABIAAABIgBABIgCAAIAAABIgCAAIgwAFIABAEIAEAFIAGACIAFABIAFgBIAFAAIAEgCIAEgBIAEgCIAAgBIACAAIABgBIAEAAIAAABIACABIABABIAAABIABABIAAANIgBABIAAADIgBABIgBACIgBABIgBAAIgBABIAAABIgCAAIgGADQgDACgEAAIgGACIgGABIgIABgAFFg6IgEAEIgDAGIgBAGIAagDIAAgGIgDgFIgDgDIgFgBIgBAAIgGACgAGQAOIgDAAIgGgBQgDAAgCgBIgDgBIgBAAIAAgBIgCgBIAAgBIgCgDIAAgEIABgKIABgCIAAgBIABgCIACgCIABAAIACgBIAEAAIAAABIAFABIAEABIAFAAIAEAAIABAAIAEgBIACgBIABgCIABgCIgBgCIgBgBIgCgCIgEgBIgHgCIgFgCIgEgBIgDgCQgDgBgCgDQgDgDAAgDQgCgDAAgEQgCgDABgDIAAgBIABgJQAAgEADgDQABgEADgDQABgDAEgCIAFgEIAGgDIAGgCIAGgBIACAAIADAAIADAAQACgBADACIAFAAIAFACIAEABIAAABIACACIACAEIAAAEIgBAKIgBACIAAABIgBABIAAABIgBAAIgBABIAAABIgCAAIgBABIgBAAIgBgBIgCAAIgDgCQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDAAIgEAAIgFABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgCABIAAACIABACQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAEACIAGACIAGABIAEACIADACQADABACADIAEAGIABAHIABAGIAAACQAAAHgDAIQgDAGgEAEQgFAEgHAEQgHADgIABIgDAAIgGABIgDAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-44.9, -10.8, 89.8, 21.8);


    (lib.HM_harspeakershadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABeByQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgDgBIgDgBIgDgBIgEgCIgMgHIgxgkIgTAGIggALIgfAKIgNAFIgDAAIgBAAQgHgBgHgKQgHgLgFgRQgEgRgBgSIgBgIIAAgPIABgcQABgPAHgHQACgEAGgBIAOAAIAhAAIAgAAIARAAIAOgRIAVgYIAOgPIABgCQAFgBAFAEQAMAHANAdQAMAcAJApIAIArIABAKIAAADIAAAEIABAbIgBAHQAAAHgDAGQgDAGgFADQgDADgEAAIgCAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5, -11.4, 23.1, 22.9);


    (lib.HM_harovalshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AAAEvQi3AAiChZQiChZAAh9QAAh8CChZQCChZC3AAQC3AACCBZQCDBZAAB8QAAB9iDBZQiBBZi4AAIAAAAg");
        this.shape.setTransform(-8.6, -1.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.9, -32.2, 88.8, 60.6);


    (lib.HM_hararrowshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AmHE3QgQgFgMgLQgNgLgJgNQgJgMgFgLQgUgugOg0QgMgrgHgnQgGgogCgdIgDgdQgBgPAFgPQAFgQAQgRQAEgEAKgFQALgGAWgFQAXgGAngGQAjgGAsgFIBcgIIAvgEIBMgFIBagFQAtgCAogBQApgBAcACQgIgTgGgXQgFgQgEgSQgEgTAAgQQAAgQAGgKQAJgMAKgDQAKgCAKACQALACAJADQAQAGAeASQAeASAlAYQAkAZAhAZQA5AqAeAeQAfAeANAVQANAUACALQACAMgBAGQgGBFjjDLIgKAIQgHAFgKADQgKACgMgDQgGgCgHgHQgIgHgEgOIgCgGQgBgIAAgMIABgbQACgdAAgvQgtADg8APQg8AOhCAXQhCAXhAAaQg/Aag1AZQg0AZggASQgMAHgNAAQgJAAgJgDg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52, -31.4, 104, 62.8);


    (lib.HM_clockhighlighy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FF0000").ss(4.5, 1, 1).p("AG1lcIAAKuQAHBmheAgQgXAIgYgCIpaABQhhgHgVg8QgWg6ADgjIAAqOQgGhmBgggQATgHAVgCIJ0ACQBiANAPBcQACALAAAMg");
        this.shape.setTransform(43.7, 47.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2, -2.2, 92, 100.2);


    (lib.harSymbol63 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.harscreenshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Egu3AjKMAAAhGTMBdvAAAMAAABGTg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-300, -225, 600, 450);


    (lib.harfeedbackpanely4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.harcontrolpanelshadow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ASTHeQg7gJh0gOQh1gNivgNQivgLjogHQiDgDiVAAQkzAAjsANQjrAMifAQQiZAPhPALIhPANQgegBgegPQgdgPgVgYQgQgTgHgVIg8imIibmtQgEgLAAgKQgIgeATgcQAVgfAygTQAQgGATgFIA1gKQA1gLBjgQQBigQCKgTQCKgTCrgQQCrgQDGgLQDGgKDZgBQDLAACqAHQCqAGCKALQDZARCTAVQCTAXBXATQBXATAmAKQBJATAYAiQAPAWAAAZIACAJQACARgKAaQgpBvgoBuIhPDeIg2CYQgJAYgSAUQgVAXgdANQgcAOgdABIg7gKg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-158.6, -48.7, 317.3, 97.5);


    (lib.grfeedbackpaneloutliney4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = getMCSymbolPrototype(lib.grfeedbackpaneloutliney4, null, null);


    (lib.Path = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = getMCSymbolPrototype(lib.Path, null, null);


    (lib.Group = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = getMCSymbolPrototype(lib.Group, null, null);


    (lib.HM_mcwildcardarrows = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_harRArrow("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(87.1, 1.8);

        this.instance_1 = new lib.HM_harLArrow("single", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-91, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcwildcardarrows, new cjs.Rectangle(-121.7, -23.1, 247.7, 57.5), null);


    (lib.HM_mctileatstartcopy12 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy25();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy12, new cjs.Rectangle(-41.1, -45.5, 82.4, 91.2), null);


    (lib.HM_mctileatstartcopy11 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // white fill
        this.clockFace = new lib.HM_harClockFacecopy21();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxbluecopy();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(40.3, 44.8, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy11, new cjs.Rectangle(-41.2, -45.5, 82.4, 91.1), null);


    (lib.HM_mctileatstartcopy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 11
        this.instance = new lib.HM_clockhighlighy("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-0.2, -0.2, 1, 1, 0, 0, 0, 43.7, 47.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy20();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy8, new cjs.Rectangle(-46.1, -50.4, 91.9, 100.2), null);


    (lib.HM_mctileatstartcopy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 11
        this.instance = new lib.HM_clockhighlighy("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-0.2, -0.2, 1, 1, 0, 0, 0, 43.7, 47.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy19();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy7, new cjs.Rectangle(-46.1, -50.4, 91.9, 100.2), null);


    (lib.HM_mctileatstartcopy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // white fill
        this.clockFace = new lib.HM_harClockFacecopy18();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxblue();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(40.3, 44.8, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy6, new cjs.Rectangle(-41.2, -45.5, 82.4, 91.1), null);


    (lib.HM_mctileatstartcopy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy17();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy5, new cjs.Rectangle(-41.1, -45.5, 82.4, 91.2), null);


    (lib.HM_mctileatstartcopy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy16();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy4, new cjs.Rectangle(-41.1, -45.5, 82.4, 91.2), null);


    (lib.HM_mctileatstartcopy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // white fill
        this.clockFace = new lib.HM_harClockFacecopy15();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxblue();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(40.3, 44.8, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy3, new cjs.Rectangle(-41.2, -45.5, 82.4, 91.1), null);


    (lib.HM_mctileatstartcopy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy14();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy2, new cjs.Rectangle(-41.1, -45.5, 82.4, 91.2), null);


    (lib.HM_mctileatstartcopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // Layer 10
        this.clockFace = new lib.HM_harClockFacecopy24();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxgreen();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(0, 0.1, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstartcopy, new cjs.Rectangle(-41.1, -45.5, 82.4, 91.2), null);


    (lib.HM_mctileatstart = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "static": 0 });

        // white fill
        this.clockFace = new lib.HM_harClockFacecopy3();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -4, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.dragGfx = new lib.HM_mcdraggfxblue();
        this.dragGfx.parent = this;
        this.dragGfx.setTransform(40.3, 44.8, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.dragGfx }, { t: this.clockFace }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mctileatstart, new cjs.Rectangle(-41.2, -45.5, 82.4, 91.1), null);


    (lib.HM_mcNavBarY = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // sound btn
        this.instance = new lib.HM_harSoundbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(99.7, -10.1, 0.75, 0.75);

        this.instance_1 = new lib.HM_harVoicebutton("single", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(166.5, -10.2, 0.749, 0.754);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcNavBarY, new cjs.Rectangle(109, -4.4, 112.4, 7.8), null);


    (lib.HM_mclinestart1withnumbercopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 6
        this.clockFace = new lib.HM_harClockFacecopy();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -3, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.timeline.addTween(cjs.Tween.get(this.clockFace).wait(1));

        // top graphics
        this.YellowDragGfx = new lib.HM_mcdraggfxyellow();
        this.YellowDragGfx.parent = this;
        this.YellowDragGfx.setTransform(41.9, 45.9, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get(this.YellowDragGfx).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mclinestart1withnumbercopy, new cjs.Rectangle(-40.6, -44.7, 82.8, 91.4), null);


    (lib.HM_mclinestart1withnumber = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 6
        this.clockFace = new lib.HM_harClockFacecopy2();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -3, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.timeline.addTween(cjs.Tween.get(this.clockFace).wait(1));

        // top graphics
        this.YellowDragGfx = new lib.HM_mcdraggfxyellow();
        this.YellowDragGfx.parent = this;
        this.YellowDragGfx.setTransform(41.9, 45.9, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get(this.YellowDragGfx).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mclinestart1withnumber, new cjs.Rectangle(-40.6, -44.7, 82.8, 91.4), null);


    (lib.HM_mclinestart1withclockhighlightcopy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // target
        this.insideTarget = new lib.HM_mcinsideTarget2();
        this.insideTarget.parent = this;
        this.insideTarget.setTransform(0.1, -1.9, 1.5, 1.5, 0, 0, 0, 11.5, 24.8);
        this.insideTarget.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.insideTarget).wait(1));

        // Layer 6
        this.instance = new lib.HM_clockhighlighy("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0.7, 1, 1, 1, 0, 0, 0, 43.7, 47.9);

        this.clockFace = new lib.HM_harClockFacecopy13();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -3, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.clockFace }, { t: this.instance }] }).wait(1));

        // top graphics
        this.YellowDragGfx = new lib.HM_mcdraggfxyellow();
        this.YellowDragGfx.parent = this;
        this.YellowDragGfx.setTransform(41.9, 45.9, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get(this.YellowDragGfx).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mclinestart1withclockhighlightcopy3, new cjs.Rectangle(-45.3, -49.1, 91.9, 100.2), null);


    (lib.HM_mclinestart1withclockhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // target
        this.insideTarget = new lib.HM_mcinsideTarget2();
        this.insideTarget.parent = this;
        this.insideTarget.setTransform(0.1, -1.9, 1.5, 1.5, 0, 0, 0, 11.5, 24.8);
        this.insideTarget.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.insideTarget).wait(1));

        // Layer 6
        this.instance = new lib.HM_clockhighlighy("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0.7, 1, 1, 1, 0, 0, 0, 43.7, 47.9);

        this.clockFace = new lib.HM_harClockFacecopy12();
        this.clockFace.parent = this;
        this.clockFace.setTransform(1.1, -3, 1.5, 1.5, 0, 0, 0, 0.4, -3.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.clockFace }, { t: this.instance }] }).wait(1));

        // top graphics
        this.YellowDragGfx = new lib.HM_mcdraggfxyellow();
        this.YellowDragGfx.parent = this;
        this.YellowDragGfx.setTransform(41.9, 45.9, 1.5, 1.5, 0, 0, 0, 26.9, 29.9);

        this.timeline.addTween(cjs.Tween.get(this.YellowDragGfx).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mclinestart1withclockhighlight, new cjs.Rectangle(-45.3, -49.1, 91.9, 100.2), null);


    (lib.HM_mccardstackgreennewcopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackCardsShowing = 2
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 5
        this.instance = new lib.HM_harLargeCounterGreen();
        this.instance.parent = this;
        this.instance.setTransform(-3, -8.1, 1.5, 1.5);

        this.instance_1 = new lib.HM_harLargeCounterGreen();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-3, 4, 1.5, 1.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mccardstackgreennewcopy, new cjs.Rectangle(-44.2, -53.6, 82.5, 103.2), null);


    (lib.HM_mccardstackbluecopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackCardsShowing = 2
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 5
        this.instance = new lib.HM_harLargeCounterBlue();
        this.instance.parent = this;
        this.instance.setTransform(-3, -8.1, 1.5, 1.5);

        this.instance_1 = new lib.HM_harLargeCounterBlue();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-3, 4, 1.5, 1.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mccardstackbluecopy, new cjs.Rectangle(-44.2, -53.7, 82.5, 103.3), null);


    (lib.HM_mccardstackblue = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "2left": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* intStackCardsShowing = 2
            stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 5
        this.instance = new lib.HM_harLargeCounterBlue();
        this.instance.parent = this;
        this.instance.setTransform(-3, -8.1, 1.5, 1.5);

        this.instance_1 = new lib.HM_harLargeCounterBlue();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-3, 4, 1.5, 1.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mccardstackblue, new cjs.Rectangle(-44.2, -53.7, 82.5, 103.3), null);


    (lib.HM_harstaranim = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

        // Layer 1
        this.instance = new lib.HM_harLives();
        this.instance.parent = this;
        this.instance.setTransform(1.6, -0.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true }, 1).wait(13));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.1, -14, 27.1, 26.3);


    (lib.HM_harpanel = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_Symbol11("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-87.9, -2.3);
        this.instance.alpha = 0.121;

        this.instance_1 = new lib.HM_Symbol10("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-90.2, -28.4);
        this.instance_1.alpha = 0.422;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EC027A").s().p("AuCC2QgRgUgGgeQgDgMgDgaIgEg7QAAgigCgfIgCg8IAAgnQADgeAZgWQAcgWAxgDIArAAIBuAAICcAAIC0gBIC3AAICiAAIB7AAIA9AAQBZgBBZACICpABICTABIBtACQAsABAOADQAqAFAWAUQAWAUABAjIAAA+QgBAlgDAlQgDATgFARQgEARgHAOQgNAcgOAPQgOAPgQAHQgSAIgXADIg7AEIiOAFIhfACIhsAEIj6AHIkUAIIhHABIh0ADIiMAEIiRADIiCADIhdADIglAAQgigGgRgUg");
        this.shape.setTransform(0.9, -9.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#EE67AA").s().p("AkeFjQgSgBgKgUQgKgTgDgeQgEgcgBgfIgDgyQAAgJgBgFQgCgGgDAAIg5ACIhfADIhyAEIhvADIhZACIgtABQgwAAgGgCQglgHgRgZQgTgZgGgmQgFgPgBgiIgEhJQgCgqgBgqQgBgqAAggQgCgiACgQQAAgZAOgWQAMgUAZgPQAYgMAkgDIAzAAICIAAIDIgBID0gBIEKAAIEPABID9ABIDYADQBgACA+ACQAuAIAXAYQAYAZAAAtIAAA4QABAggCAlQgBAkgGAjQgEAigMAaQgPAjgPATQgNATgTAJQgSAKgZAEQgHACgrACQgqADhIADQgHABgBAVQgCAUAAAfQABAegCAfQgBAfgGAVQgHAWgRACIgoAEIguADIhpAEIhrACQgzAAgqABIgmABIhPACIhnADIhwADIhpADIhRABIgbABIgPgBg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-100, -35.5, 200.1, 71.1);


    (lib.HM_harIndent = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.HM_harSymbol119("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-131.1, -130.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(0,0,0,0.004)").ss(1, 1, 1, 3, true).p("AFZiXIqxAAIAAEvIKxAAg");
        this.shape.setTransform(0.5, 23.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], 23.8, 8, -54.5, -69.7).s().p("AjRBZQgPgBgJgKQgKgJgBgPIAAiOIHpAAIAACOQgBAPgKAJQgJAKgPABg");
        this.shape_1.setTransform(0.2, 16.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFF7E", "#FFF274", "#F08D00"], [0.004, 0.341, 1], 25, 8.8, 2, -15.8).s().p("AjWBoQgaAAgSgSQgSgRAAgbIAAiRIIpAAIAACRQAAAbgSARQgRASgaAAg");
        this.shape_2.setTransform(0.1, 18.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-35, -28.8, 71, 68.2);


    (lib.HM_harchancestext = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF00").s().p("AgWAzIgEgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAIgCgBIgBgDIAAgDIABgKIABgCIAAgCIACgBIABgBIACAAIABABIAFABIAFABIAEAAIAFAAIABAAIAEgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIACgCIAAgEIAAgDIgCgCIgDgCIgDgCQgEAAgDgCIgFgBIgEgCIgDgBIgEgEIgDgEIgCgGIAAgHQAAgEABgEQAAgDACgEQABgDADgDIAFgFIAEgDIAGgDIAFgCQADABACgCIACAAIAFAAQADAAADABIAEAAIAFACQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIACACQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIAAADIgCAKIAAADIgDADIgCAAIgBgBIgDgBIgEgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAIgGABIgCABIgDADIgBADIABACIACADIADABIAEACIAGACIAGABIAEACIACABIAFAEIADAEIABAGQACAEgBAEIgDAOQgCAGgFAEQgDAFgHACQgHAEgHAAIgCAAIAAABIgHAAIgFAAIgBAAIgFgBg");
        this.shape.setTransform(40.4, -5.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFF00").s().p("AgEA1IgJgCIgIgDQgEgCgDgDIgGgIQgEgDgCgFIgDgLIAAgMIAAgLIADgLIAFgKIAFgIIAHgHQAEgDAEgCQAEgCAEgBQAGgCADAAIAKAAIAJADIAIAFIAHAHIADAHIACAJIADALIAAALIAAABIgBABIAAACIgCABIgBAAIgBABIgCAAIgyAGQAAAFADADIAEAGIAIACIAJABIAGgBIAEgCIAFgBIADgDIACAAIABgBIACABIACAAIABACIAAANIgBABIAAABIgBACIgFAEIgFACIgHADIgHABIgGABIgGACIgDgBgAACgeIgGACQgCABgCADIgEAHIgBAKIAggEQAAgEgBgFQAAgDgEgDQgBgCgDgCIgFAAIgDAAg");
        this.shape_1.setTransform(31.8, -4.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFF00").s().p("AAEA4IgJgCIgJgDIgIgGQgEgDgDgEIgFgJIgEgLIgBgMQAAgGABgGIADgLIAFgLIAHgJIAIgHIAJgFIAJgEIALgCIADAAIAEAAQADABADAAIAGABIAFAFIAAACIABABIAAACIgBALIgBACIgBABIgBACIgGAAIgCgBIgJAAIgFABIgEACIgFADIgDAEIgCAEIgCAGIgCAFIAAAGIABAGIABAFIADAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQADABACAAIAFAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIADAAIADgBIADgBIABgBIAGAAIAAACIABACIAAAMQAAADgCACQgBACgDADIgIADIgLACIgIABIgDAAg");
        this.shape_2.setTransform(22.5, -3.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFF00").s().p("AguA9IgBgBIgBAAIgCAAIAAgBIAAgCIgBgCIgEhmIACgCIABAAIACgDIABgBIABAAIATgBIAEAAIABABIACAEIABARIAHgMIAIgJQAFgDAEgBQAFgCAGAAIABAAIAGgCIADACQAGAAACACQAFAAADADIAGAFIADAGIADAHIACAIIABAJIABA+IgBABIgBACIgDADIgBAAIgCABIgTABIgCAAIgDgBIgBAAIgBgBIAAgBIAAgCIgBgwQAAgGgBgEIgEgIIgEgGQgEgBgEAAIgBAAIgHADQgFADgDAFQgCAFgBAHIgBAOIABAqIgBABIgDAEIgBABIgCAAIAAABIgVACg");
        this.shape_3.setTransform(11.4, -2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("AgTBAQgFAAgFgCQgGgCgEgDQgFgCgEgFIgGgJQgEgEgBgHQgDgFgBgGQgCgHABgHQgBgGABgEQAAgGACgGIAEgKIAGgKIAIgKIAJgHIAJgEIALgCIAMAAIAKADIAJAEIAIAHIgBgGIAAgBIACgEIADgDIACgBIACAAIAWgCIABAAIACABIABAAIACABIABACIAAABIABABIAEBmIgBACIAAABIgEAEIgBAAIgCABIgTACIgDAAIgEgEIgBgCIAAgOIgDAGIgDAEIgEAFIgFAEIgFAEQgDACgDAAIgFACIgHACIgMAAgAgIgaQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABIgDAEQgDACAAADQgCACAAADQgCADABADQgBADABACIAAAGIACAHIACAFIADAEIAEAEIAEACIAFABIAEAAIAFgBIAFgCIAEgDIADgFIADgFIACgFIABgGIAAgFIgBgGIgBgGIgCgFIgDgEIgEgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFgBQgDgCgCABQgDABgBAAIgFADg");
        this.shape_4.setTransform(-2.8, -0.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFF00").s().p("Ag3BiIgBgBIgCgBIgCgCIgBgCIAAgCIgOivIAAgEIABgBIABgCIACgBIABgBIACgBIACAAIAcgCIACABIACAAIACABIABABIACABIABACIAAACIABACIAFBKQAEgGAFgFQAEgFAGgDQAEgEAGgBIANgCIAGgBIAGABIAKACQAGABADADQAEACAEAEQAEADABAEQADADABAFIADAIIABAJIAEBGIgBABIAAACIgEAEIgCAAIgCABIgZADIgDAAIgCgBIgDgDIgBgCIAAgBIgDgsIgBgKIgBgIIgCgHIgBgEIgDgEIgEgCQgDgCgCABIgDAAIgDAAIgBAAQgGAAgFACQgFADgDAGQgEAEgBAJIAAARIADAtIAAADIgBACIgBABIgCABIgBACIgCAAIgCABIgbADg");
        this.shape_5.setTransform(-18.9, -1.7);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFF00").s().p("AgFBfQgKAAgJgEQgKgCgIgFQgKgEgJgIQgIgHgFgJQgGgJgFgLQgDgKgBgNQgCgMACgKQAAgMADgJQAEgKAFgJQAGgIAJgIQAGgHAKgFQAIgGAMgDQAJgEAMgCQAMgDALAAQAHgBAEAAIALABIANABQAEAAAGACQAFABACABIAEACIAEAEIAAAFIAAAUIAAADIgCACIgCACIgCAAIgFAAQgFgDgGAAIgLgCQgEgBgGAAIgKAAIgOACIgLAEIgJAGIgKAJQgEAFgCAFQgDAFgBAGQgDAFAAAGQgBAHABAFQAAAIADAFQACAHACAEQAEAGAEAEIAJAIQAFADAEACQAGADAGABQAGACAIgBIADABIAJgBIAIgCQAFAAAEgCIAKgDIAMgEIAAAAIACgBIAAAAIADAAIACACIADACIAAADIADARIAAAFIgBADQgCADgDABIgFACIgIADIgMADQgEACgHAAQgHACgGAAQgLACgKAAQgLAAgJgCg");
        this.shape_6.setTransform(-36.5, -0.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#BD4900").s().p("AgCA9IgHAAIgHAAIgGAAQgDgBgDAAIgFgDIgFgEIgCgGQgBgDABgDIABgKIABgEQAAgEACgBIAEgEIAFgBIAGAAIABABIAEABIAEABIAEAAIADAAIgHgCIgFgBIgFgCIgEgCIgGgGIgFgHIgCgHIgBgJIABgKIADgJIAFgHIAGgHQADgDAEgBIAGgEIAHgCIAHgBIABAAIAHAAIAGAAIAFABIAGACQADAAACACIAFAFIACAGIAAAGIgBAKIgBAEIgCAEIgEADIgFACIADABIAGAGQADADABAFQACACABAFIAAAJQAAAJgDAIQgDAIgGAGQgFAGgJADQgHADgJACgAgPArIAFAAQADgBADAAIACAAIALgDIAIgFQADgEABgEQACgEAAgHIAAgFIgBgEIgCgDIgCgCIgBgBIgDAAIgFgBIgHgCIgFgCIgFgDIgEgGQgCgDAAgEQAAgEACgDIAGgGQACgCAEAAQACgBAEAAIABAAIACgBIADABIAFAAIACABIABgDIgDgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEAAIgFAAIgBAAQgCgBgCACIgEABIgEACIgDACIgEAEIgCAEIgCAFIgBAGIABAFIABAEIABADIACACIABAAIAEACIAFAAIAGACIAFACIAGAEIAEAGIABAHQAAADgCAEIgEAGIgHADIgFABIgBABIgBAAIABgBQgDABgDAAQgDAAgDgBIgFgBIgBAAIgBAEIADABIAAAAIAEABgAgaAkIABAAIABgBIgCAAgAgVAhIAAABIABgCg");
        this.shape_7.setTransform(40.3, -5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#BD4900").s().p("AgEA/IgMgCIgJgEIgJgGIgJgJIgGgLIgDgMIAAgOQgBgFABgHIADgNIAGgLQACgGAFgEQACgFAGgDQAEgEAFgCIALgFIAKgBIAHgBIAFABIAMADQAFADAFAEIAIAIIADAKQADAEACAGIABAMQABAGAAAFIAAADIgBADIgBACIgGAGIgDACIgCAAIACABIADAFIAAAFIAAAJIAAADIgBADIgBACIgDAFIgCACIgEADIgHADIgIADIgHABIgGACIgGAAIgFAAgAAEAsIAGgBIAGgBIAEgCIAHgDIAAgBIgCAAIgGACIgHABIgMAAQgGgBgEgEQgGgDgCgGQgEgFAAgGIgCgKIA7gFIAAgJIgDgJIgCgHIgCgGIgGgFIgEgEIgHgBQgDgBgFAAIgHACQgEAAgCACIgGAEIgHAGIgEAHIgEAIQgCAEAAAGQgBAEABAFQgBAGABAFQAAAFACADQACAEADADIADAGIAHAEIAGACQADABAEAAIAHAAgAAiAgIABAAIAAgBIgBABgAAIAUIACAAIADgBgAAkgBIABAAIgBAAg");
        this.shape_8.setTransform(31.8, -4.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#BD4900").s().p("AgPAMIgKgBQAAgGACgFQACgFADgEQADgFAFgDIAKgDQAFAAAFACQAGACAEAEIAEAKIACALIAAAIIgoAEgAgBAAIgCABIAIgBIAAAAIgBgBIgDAAIgCABg");
        this.shape_9.setTransform(32.1, -6.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#BD4900").s().p("AADBBIgLgCIgLgEIgJgGQgGgEgDgGQgEgFgCgGQgDgGgBgGIgBgOQAAgHABgGQABgHACgHQACgGAEgGQADgFAFgFIAJgJIALgGQAGgDAFgBQAGgCAHAAIAEAAIAEAAIAGABQADgBAEACIABAAIADACIADABIACADIABACIACADIABADIAAACIAAADIgBALIgBAFQAAADgDACIgEADIgGABIgCABIgBgBIgFAAIgBgBIgFAAIgDABIgDABIgCACIgDACIgCAEIgBADQgBACAAADIgBAEIABAEQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIABADIACACIADACIACABIADABIADAAIADgBIACAAIAEgCIABAAIACgBIACAAIACgBQACgBADACQADAAACADQADABAAAEIABAFIAAAMQAAAFgDAFQgCAEgFAEIgKAEIgNACIgKABIgDAAgAAFgsIgHADQgEABgEAEQgDABgDAFQgEADgCAEQgDAEgBAFIgDAKIAAAKQAAAFABAFQAAAFACAEIAEAHIAGAGIAGAEIAHADIAHABIAKAAIAJgCIAGgCIABgCIAAgFIgBABIgEABIgEAAIgDAAIgEAAQgDAAgDgBIgHgCIgEgEQgDgDgCgDIgEgGIgCgIIAAgHIAAgHQAAgEACgDQAAgFACgCIAEgGIAFgFIAFgEQADgDADAAIAHgBIADgBIAEAAIABAAIABAAIABABIACAAIAAgHIgEAAQgCgCgDABIgDAAIgCAAIgCAAIgIABg");
        this.shape_10.setTransform(22.5, -3.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#BD4900").s().p("AgtBGIgEgBIgDAAIgDgCIgCgEIgCgDIgBgCIAAgEIgEhhIABgEIAAgCIACgEIACgDIACgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIADgDIAEAAIASgCIADAAIAEABIADACIADADIABACIAEgDIALgHIAPgEIABAAIALAAIAKAEIAJAEQAEAEADADIAFAIQADAEABAFIACAJIAAAKIABA8IAAACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgCACIgCACIgCADIgDABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgTACIgEAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgEgBIgCgCIgCgDIgCgDIgBgCIAAgFIgBguIgBgJIgCgFIgBgBIgCAAIAAAAIgBAAQgDAAgCABIgDAFIgDAJIAAALIABApQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIAAADIgCAEIgCACIgCACIgCADQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABIgVACIgDAAgAgtgrIAEBeIARgCIgBgnIABgPQABgKAEgFQACgFAEgEIgRgDIAAgNgAAQgiQAEADAFAFQADAFABAHQACAFAAAHIABAsIAPgCIgBg7IgBgIIgBgFIgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIgEgEQgDgBgCAAIgGgCIgHAAIgBAAIgJACIgHADIgGAHIgGAJIADgCQAGgEAGgBIABAAIADAAQAEAAAFACgAAFgRIACgBIgBAAg");
        this.shape_11.setTransform(11.3, -2);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#BD4900").s().p("AgTBJQgHAAgGgCIgMgGQgGgDgFgGQgEgEgDgGQgEgGgCgGQgDgGgBgIIgCgOQAAgGABgGQAAgHACgGQACgGADgGQADgGAEgGQADgGAGgEQAEgFAGgEIAMgFIAMgCQAEgBAEAAIAGABQAGAAAGADIAIADIABgBIACgDIADgBIADgCIAEAAIAWgCIAEAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABIADABQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIACADIACADIABADIABAEIADBiIAAAEIgBADIgBADIgCACIgCADIgDACIgDABIgEABIgSACIgCABIgCgBIgDAAIgEgCQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCgCIgEADIgHAFIgHADIgHADIgHABIgGABIgHgBgAgXgxIgHAEQgEACgDADQgEADgDAFQgDAEgCAFQgDAEgBAFIgCAKIAAAJQAAAGACAGQAAAFACAFIAFAJQACAEADADQAEAEADACQADADAFABIAIACQAFAAAFgBQADAAACgBIAEgBIAFgDIAEgDIAEgDIADgDIADgEIACgEIASADIABAKIAPgCIgDhgIgUABIABAiIgSgWIgFgFIgHgDIgIgCIgKgBIgJACg");
        this.shape_12.setTransform(-2.9, -0.7);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#BD4900").s().p("AAAAoIgEAAQgDAAgEgBIgGgEIgGgFQgCgCgCgEIgDgGQgCgEAAgEIgBgIIAAgGIACgHQAAgFACgCQABgEADgCQACgEADgCIAFgFIAHgDIAHgBIAGAAIAHACQAEABACADIAGAEIAEAGIADAHIACAHIAAAIQACACgCAEQABAEgCAEIgDAGIgDAHIgFAFIgFAFIgHADQgDABgEAAIgCAAIAAAAgAgFgSIgCABIgDADQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIgBAEIgBAEIAAADQAAADABADIABAEIABAEIACADIADACIAEACIACAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgBIADgCIACgDIACgEIACgDIAAgFIABgDIgBgGIgBgEIgCgDIgCgDIgCgCIgEgCIgDAAIgCAAIgDACg");
        this.shape_13.setTransform(-2.7, -0.6);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#BD4900").s().p("Ag5BrIgDgBIgEgCIgCgEIgDgCIgBgDIgBgFIgOiuIAAgFQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBgBAAIACgEIACgDIADgCIAEgDIADgBIAEAAIAcgCIAEAAIADABIADACIADADIADACQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAgBABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAIAEA1IAGgFQAHgEAFgBIAPgEIAOAAIAMAEQAHABAEADQAGAEAEADIAGAJQAEAFABAEIADALQACAGgBAFIAEBDIAAADQABABAAAAQAAABgBAAQAAABAAAAQAAABgBABIgBACIgCAEIgDACQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBIgaAEQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgEgBIgDgCIgDgCIgDgCQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgBgEIgBgDIgDgsIAAgJQgBgEAAgEIgCgGIgBgDIgCgBIgDgBIgEAAQgFAAgCABIgFAGQgDAEAAAGIgBAOIAEAtQABABAAAAQAAABgBAAQAAABAAAAQAAABgBABIAAACIgCADIgCAEIgDACIgDACIgDABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgcADIgDABIgEgBgAhChXIAAABIAOCvIAAAAIAbgFIABAAIgEgrIABgVQACgJAEgGQAEgHAHgFQAIgDAGgBIACAAIAIAAIAHACQAFACACACIAFAFQACADAAAFIACAHQACAEgBAFIABAKIADArIAYgEIgDhDIgCgIQAAgEgCgDIgDgHQgBgCgDgDIgGgFIgHgCIgIgCIgKAAIgLACIgJADIgIAHQgDAEgEAFIgPAXIgIhmg");
        this.shape_14.setTransform(-18.9, -1.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#BD4900").s().p("AgHBpIgTgFIgUgHQgLgGgKgIQgJgHgGgLQgHgJgFgNQgDgLgBgOIgBgYQABgMADgMQAFgLAFgJQAIgKAIgIQAIgIAKgFQAKgHAKgDQAMgFAMgCIAZgDIALAAIANAAIAMACQAFAAAGACQAFAAADACIAIAEQADAEABAEQADADAAAFIAAAUIgBAGIgFAGIgEADIgGACIgCAAIgBgBIgFAAIgKgDQgEgCgFAAIgJgBIgKAAIgLACQgGABgGADIgHAFQgEADgCAEQgFADgCAFQgCAEgBAFIgDAKIAAAKQABAGADAGIACAJIAHAHQACAEAGADIAIAFIAKADIALABIALgBQAFABACgCIAJgCIAJgDIAKgDIABgBIACAAIACgBIACAAIAFAAIAGADIAFAFQACADAAADIACASIAAAIIgDAHIgGAFQgCADgGABIgKADIgKADIgMADQgGAAgIACIgWABIgWgBgAgChTQgMACgKADIgSAJQgHAEgHAHIgNAOQgEAIgEAJQgDAIAAAKIAAAVQABAMADAJQAEAJAFAJQAFAIAIAGQAHAGAKAFIAPAGIASAEIATABIAVgBIALgCIALgCIALgDIAJgDIADgBIAAgBIAAgBIgBgQIgKAEIgKADIgLADIgHABQgKABgGAAIgPgCIgMgEIgNgGIgLgKQgFgFgDgGIgFgNQgDgHAAgIQgBgIAAgFIAEgOQABgHADgGQAEgHAEgEIAKgKQAHgEAHgDQAEgEAHgBQAIgCAIAAQAGgBAFAAIALABIALACIALADIAAgTIgDgBIgEgBIgLgCQgGABgFgCIgLAAIgKAAIgVADgABQA4IAAgBIgBAAg");
        this.shape_15.setTransform(-36.5, 0);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#BD4900").s().p("AgWAzIgEgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAIgCgBIgBgDIAAgDIABgKIABgCIAAgCIACgBIABgBIACAAIABABIAFABIAFABIAEAAIAFAAIABAAIAEgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIACgCIAAgEIAAgDIgCgCIgDgCIgDgCQgEAAgDgCIgFgBIgEgCIgDgBIgEgEIgDgEIgCgGIAAgHQAAgEABgEQAAgDACgEQABgDADgDIAFgFIAEgDIAGgDIAFgCQADABACgCIACAAIAFAAQADAAADABIAEAAIAFACQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIACACQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIAAADIgCAKIAAADIgDADIgCAAIgBgBIgDgBIgEgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAIgGABIgCABIgDADIgBADIABACIACADIADABIAEACIAGACIAGABIAEACIACABIAFAEIADAEIABAGQACAEgBAEIgDAOQgCAGgFAEQgDAFgHACQgHAEgHAAIgCAAIAAABIgHAAIgFAAIgBAAIgFgBg");
        this.shape_16.setTransform(40.4, -5.1);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#BD4900").s().p("AgEA1IgJgCIgIgDQgEgCgDgDIgGgIQgEgDgCgFIgDgLIAAgMIAAgLIADgLIAFgKIAFgIIAHgHQAEgDAEgCQAEgCAEgBQAGgCADAAIAKAAIAJADIAIAFIAHAHIADAHIACAJIADALIAAALIAAABIgBABIAAACIgCABIgBAAIgBABIgCAAIgyAGQAAAFADADIAEAGIAIACIAJABIAGgBIAEgCIAFgBIADgDIACAAIABgBIACABIACAAIABACIAAANIgBABIAAABIgBACIgFAEIgFACIgHADIgHABIgGABIgGACIgDgBgAACgeIgGACQgCABgCADIgEAHIgBAKIAggEQAAgEgBgFQAAgDgEgDQgBgCgDgCIgFAAIgDAAg");
        this.shape_17.setTransform(31.8, -4.2);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#BD4900").s().p("AAEA4IgJgCIgJgDIgIgGQgEgDgDgEIgFgJIgEgLIgBgMQAAgGABgGIADgLIAFgLIAHgJIAIgHIAJgFIAJgEIALgCIADAAIAEAAQADABADAAIAGABIAFAFIAAACIABABIAAACIgBALIgBACIgBABIgBACIgGAAIgCgBIgJAAIgFABIgEACIgFADIgDAEIgCAEIgCAGIgCAFIAAAGIABAGIABAFIADAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQADABACAAIAFAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIADAAIADgBIADgBIABgBIAGAAIAAACIABACIAAAMQAAADgCACQgBACgDADIgIADIgLACIgIABIgDAAg");
        this.shape_18.setTransform(22.5, -3.4);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#BD4900").s().p("AguA9IgBgBIgBAAIgCAAIAAgBIAAgCIgBgCIgEhmIACgCIABAAIACgDIABgBIABAAIATgBIAEAAIABABIACAEIABARIAHgMIAIgJQAFgDAEgBQAFgCAGAAIABAAIAGgCIADACQAGAAACACQAFAAADADIAGAFIADAGIADAHIACAIIABAJIABA+IgBABIgBACIgDADIgBAAIgCABIgTABIgCAAIgDgBIgBAAIgBgBIAAgBIAAgCIgBgwQAAgGgBgEIgEgIIgEgGQgEgBgEAAIgBAAIgHADQgFADgDAFQgCAFgBAHIgBAOIABAqIgBABIgDAEIgBABIgCAAIAAABIgVACg");
        this.shape_19.setTransform(11.4, -2);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#BD4900").s().p("AgTBAQgFAAgFgCQgGgCgEgDQgFgCgEgFIgGgJQgEgEgBgHQgDgFgBgGQgCgHABgHQgBgGABgEQAAgGACgGIAEgKIAGgKIAIgKIAJgHIAJgEIALgCIAMAAIAKADIAJAEIAIAHIgBgGIAAgBIACgEIADgDIACgBIACAAIAWgCIABAAIACABIABAAIACABIABACIAAABIABABIAEBmIgBACIAAABIgEAEIgBAAIgCABIgTACIgDAAIgEgEIgBgCIAAgOIgDAGIgDAEIgEAFIgFAEIgFAEQgDACgDAAIgFACIgHACIgMAAgAgIgaQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABIgDAEQgDACAAADQgCACAAADQgCADABADQgBADABACIAAAGIACAHIACAFIADAEIAEAEIAEACIAFABIAEAAIAFgBIAFgCIAEgDIADgFIADgFIACgFIABgGIAAgFIgBgGIgBgGIgCgFIgDgEIgEgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFgBQgDgCgCABQgDABgBAAIgFADg");
        this.shape_20.setTransform(-2.8, -0.6);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#BD4900").s().p("Ag3BiIgBgBIgCgBIgCgCIgBgCIAAgCIgOivIAAgEIABgBIABgCIACgBIABgBIACgBIACAAIAcgCIACABIACAAIACABIABABIACABIABACIAAACIABACIAFBKQAEgGAFgFQAEgFAGgDQAEgEAGgBIANgCIAGgBIAGABIAKACQAGABADADQAEACAEAEQAEADABAEQADADABAFIADAIIABAJIAEBGIgBABIAAACIgEAEIgCAAIgCABIgZADIgDAAIgCgBIgDgDIgBgCIAAgBIgDgsIgBgKIgBgIIgCgHIgBgEIgDgEIgEgCQgDgCgCABIgDAAIgDAAIgBAAQgGAAgFACQgFADgDAGQgEAEgBAJIAAARIADAtIAAADIgBACIgBABIgCABIgBACIgCAAIgCABIgbADg");
        this.shape_21.setTransform(-18.9, -1.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#BD4900").s().p("AgFBfQgKAAgJgEQgKgCgIgFQgKgEgJgIQgIgHgFgJQgGgJgFgLQgDgKgBgNQgCgMACgKQAAgMADgJQAEgKAFgJQAGgIAJgIQAGgHAKgFQAIgGAMgDQAJgEAMgCQAMgDALAAQAHgBAEAAIALABIANABQAEAAAGACQAFABACABIAEACIAEAEIAAAFIAAAUIAAADIgCACIgCACIgCAAIgFAAQgFgDgGAAIgLgCQgEgBgGAAIgKAAIgOACIgLAEIgJAGIgKAJQgEAFgCAFQgDAFgBAGQgDAFAAAGQgBAHABAFQAAAIADAFQACAHACAEQAEAGAEAEIAJAIQAFADAEACQAGADAGABQAGACAIgBIADABIAJgBIAIgCQAFAAAEgCIAKgDIAMgEIAAAAIACgBIAAAAIADAAIACACIADACIAAADIADARIAAAFIgBADQgCADgDABIgFACIgIADIgMADQgEACgHAAQgHACgGAAQgLACgKAAQgLAAgJgCg");
        this.shape_22.setTransform(-36.5, -0.1);

        this.instance = new lib.HM_harchancesshadow("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(1.7, 1.7);
        this.instance.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46.5, -12.5, 93.1, 25.1);


    (lib.HM_harspeakerup = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#9F4900").s().p("AgBAxQgIgSgGgcQgGgbABgUQAAgUAHgCQAHAAAIARQAIASAGAdQAGAbgBAUQgBAUgGACIgBAAQgGAAgIgSg");
        this.shape.setTransform(-1.8, 1.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#BD4900").s().p("AABAwQgOgVgDgWQgDgVADgQIADgRIAAALIADAaQADAPAGAQQAGAQANALIgJADIgEABIgEgCg");
        this.shape_1.setTransform(-11.4, 3.7);

        this.instance = new lib.HM_harSymbol74("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-20.1, -3.6);
        this.instance.alpha = 0.199;

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BD4900").s().p("AgRAmQgMgngCgiQgCgjACgVIADgXIALACIgDAWQgDAVACAhQACAhAMAlQALAnAdAjIgJAHQgcglgNgog");
        this.shape_2.setTransform(-1.3, 0.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFF00").s().p("AgIAuQgIgUgEgeQgFg8ARgBQAIgBAIAOQAJANADAfQADAegDAVQgDAVgIACQgJAAgIgUg");
        this.shape_3.setTransform(-17.6, 3.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFF00").s().p("AAuBoIgngNIgigOIgPgGIgfheIAMgLIAdgaIAggdIAWgVIgDAYQgCAPABAWQABAWAHAhQAGAbAGARQAGASAJAOQAIANANAPQgJAAgTgGg");
        this.shape_4.setTransform(-6, 0.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFF00").s().p("Ag+hBIBBAGIA8BaIhrAjg");
        this.shape_5.setTransform(-12.2, 3.3);

        this.instance_1 = new lib.HM_harSymbol73("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-4.1, -10.5);
        this.instance_1.alpha = 0.199;

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FEB849").s().p("AAIBZQgIgNgJgZQgKgYgHgeQgUhcAWgFQAMgDANAVQAOAWALAuQAHAeACAZQACAagCAQQgDAQgHACIgBAAQgHAAgJgMg");
        this.shape_6.setTransform(-1, 1.6);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#BD4900").s().p("ABjB5IgDAAIgagGIgjgLIgigMIgVgHIgQAFIgZAHIgMAEIADgCIgEACIgFACQgFACgJgGQgLgKgHgWQgHgVgCgXQgGgxANgPQAGgHAIgBIAJABIgCgBIAMACIAYACIASACIAUgTIAbgZIAagWQALgKADgBQAFgCAKAFQAKAHAKASQAJASAIAXQAHAXAFAVIAEAXQAEATABAXQACAXgEASQgEATgNADIgEAAgAgQA/IAjANIAtAOQAWAHAMADQADgGABgWQAAgbgKgvQgKgsgLgXQgLgYgGgFIgTAQIgaAYIgXAWIgNALIgDAEIhAgGIgCgBIgCAEQgCAFAAAQIABAXQADAbAGAQQAGAPAEADIAAAAIA9gTg");
        this.shape_7.setTransform(-8.6, 0.6);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#BD4900").s().p("ABhBuQgKgBgTgGIgngNIgigLIgPgGIg5ASIgDACQgJAAgJgUQgIgVgEgfQgFg7ARgBIAEABIA7AGIAOgNIAcgaIAegbIAOgMQAHgBAKAOQAJANAJAYQAJAYAHAfQAHAeACAaQACAagCAQQgDAQgHACIgEgBg");
        this.shape_8.setTransform(-8.6, 0.6);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.instance_1 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.instance }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20.9, -11.5, 24.5, 24.3);


    (lib.HM_harorangelozenge = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_harSymbol12("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-9.2, -7, 0.3, 0.3);
        this.instance.alpha = 0.34;

        this.instance_1 = new lib.HM_harSymbol11("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-8.2, -4.2, 0.3, 0.3);
        this.instance_1.alpha = 0.121;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF7200").s().p("AgcBHQgUgDgQgHQgRgIgKgMQgLgMgDgPQgCgOAFgNQAGgOANgMQANgMASgIQASgIAWgDQAVgDAUADQAUADARAHQAQAIALAMQAKAMADAPQACANgFAOQgGAOgNAMQgMAMgTAIQgSAIgWADIgUACQgLAAgKgCg");
        this.shape.setTransform(0.2, -0.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF9500").s().p("AghBVQgYgDgTgKQgUgJgMgNQgMgOgEgRQgDgSAHgQQAHgQAPgPQAPgOAVgKQAWgLAZgDQAZgEAYAEQAYAEATAKQATAKANAOQAMAOAEARQADARgHAQQgHARgPANQgPAOgWAKQgVAJgaAEQgNACgLAAQgNAAgLgCgAgDhEQgbAEgUAMQgVAMgKAQQgKARADASQADAOAJALQAKALAPAHQAPAHATADQARADAVgDQAbgEAUgMQAVgMAKgQQAKgRgDgSQgDgOgKgLQgJgLgPgHQgPgHgTgDIgTgBIgTABg");

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF9900").s().p("AgbBHQgUgDgQgHQgPgJgLgLQgKgMgDgPQgCgOAFgOQAGgOAMgLQAMgMASgIQARgIAWgDQAUgDAUADQATADAQAIQAQAHALANQAKALADAPQACAOgFAOQgGAOgMAMQgMALgSAIQgSAIgVADIgUACQgKAAgKgCg");
        this.shape_2.setTransform(-0.1, -0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.5, -8.6, 25.2, 17.3);


    (lib.HM_harPinkarrow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_harSymbol53("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(24.1, -3.2);
        this.instance.alpha = 0.121;

        this.instance_1 = new lib.HM_harSymbol52("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-40.7, 7);
        this.instance_1.alpha = 0.121;

        this.instance_2 = new lib.HM_harSymbol51("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(19.6, -24.3);
        this.instance_2.alpha = 0.422;

        this.instance_3 = new lib.HM_harSymbol50("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-45.7, -11.7);
        this.instance_3.alpha = 0.422;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C70081").s().p("AmND8QgMgHgKgNQgJgNgFgMQgPgpgJgsQgJgrgFgoQgEgnAAgcIgBgaQAAgNAFgLQAFgKAPgGQAXgJAygHQAxgGBCgEQBBgFBHgBQBHgCBBACQBCABA0AFQAzAEAbAIQgHgOgJgZQgIgZgGgbQgFgaADgRQAEgQAQADQAPAEAhAWQAhAWApAgQApAgAmAkQAlAjAYAfQAXAegCASQgCAPgTAYQgSAXgcAcQgcAbggAbIg6AyIguAkQgJAIgHAAQgHAAgCgNQAAgOAEgkQAFgjABg5QgsgFg8AIQg8AIhEASQhEAShFAXQhFAXg8AZQg9AYgsAWQgFACgFAAQgHAAgHgEg");
        this.shape.setTransform(0.5, -0.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#ED6FAE").s().p("AmtEzQgQgGgMgMQgMgMgJgOQgJgOgEgLQgJgYgHgbQgIgagFgbQgJgtgFgqQgEgpAAgfIgBgeQAAgPAGgQQAGgQASgQQAEgFAMgFQALgEAYgFQAXgEApgEQAlgDAugDQAugCAyAAIAxgCIBQgCIBbgBQAwAAArABQAqACAdADQgHgVgFgXIgHglQgDgTABgRQABgRAIgKQAJgLALgDQALgCAKADIAUAHQAQAHAeAUQAfAVAkAcQAkAcAhAcQA3AvAeAiQAeAhAMAWQAMAWACAMQABAMgBAGQgLBHj5DEIgLAIQgIAFgKACQgLACgMgFQgGgCgHgHQgIgIgDgPIgBgGQgBgJABgMIACgcQAEgfADgvQgvgBg/AMQg/AMhGAUQhGAVhEAYQhEAXg3AXQg4AXgjARQgLAGgMAAQgLAAgLgFg");

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF9900").s().p("AmND8QgMgHgKgNQgJgNgFgMQgPgpgJgsQgKgrgEgoQgEgnAAgcQgBgTAEgQQADgPASgQQAHgGAhgFQAhgFAzgEQA0gEA+gDQA+gDBAgBQBAAAA5ABQA7ABAsAEQAtAEAXAHQgHgOgJgZQgIgZgGgbQgFgaADgRQAEgQAQADQAPAEAhAWQAhAWApAgQApAgAmAkQAlAjAYAfQAXAegCASQgCAPgTAYQgTAXgcAcQgcAbgfAbIg6AyIguAkQgJAIgHAAQgHAAgCgNQgBgOAFgkQAFgjABg5QgsgFg8AIQg8AIhEASQhEAShFAXQhFAXg8AZQg9AYgsAWQgFACgFAAQgHAAgHgEg");
        this.shape_2.setTransform(0.5, -0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-53.9, -31.1, 107.9, 62.4);


    (lib.HM_harredlozenge = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_harSymbol12("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-30.6, -23.4);
        this.instance.alpha = 0.34;

        this.instance_1 = new lib.HM_harSymbol11("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-27.5, -13.9);
        this.instance_1.alpha = 0.121;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C51F34").s().p("AhgDtQhDgJg3gaQg2gagjgnQgjgngKgyQgJgwAUgvQATguAqgoQArgnA8gbQA9gbBJgKQBJgKBDAKQBDAJA3AaQA2AaAjAnQAjAnAKAyQAIAwgTAvQgTAugqAoQgrAng8AbQg9AbhJAKQglAFgiAAQgjAAgigFg");
        this.shape.setTransform(0.6, -1.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E45466").s().p("AhxEcQhPgLhAgfQhAgegqgtQgpgugMg6QgKg6AXg3QAXg5AygwQAygwBHgiQBHghBXgNQBVgLBPANQBPANBAAgQBBAhApAvQApAwAMA6QAKA4gXA3QgXA3gyAtQgyAuhHAgQhHAghXAMQgsAGgpAAQgpAAgmgFgAgLjlQhbANhEAoQhEAngiA4QgiA4AKA9QAJAvAhAkQAgAlAyAYQAzAZA+AJQA9AJBDgJQBbgNBEgoQBEgnAig4QAig4gKg9QgJgvghgkQggglgzgYQgygZg+gJQgfgFggAAQggAAghAFg");

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF9900").s().p("AhcDtQhCgKg0gaQg2gaghgnQgjgogKgxQgIgwASgvQATguApgnQApgnA7gbQA6gbBHgKQBHgKBBAKQBCAKA1AaQA0AaAjAoQAiAnAJAxQAJAxgTAuQgSAvgpAnQgoAng8AbQg6AahHAKQgjAFghAAQgjAAghgFg");
        this.shape_2.setTransform(-0.4, -1.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41.8, -28.9, 83.8, 57.9);


    (lib.HM_harpurplelozenge = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_harSymbol12("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-30.6, -23.4);
        this.instance.alpha = 0.34;

        this.instance_1 = new lib.HM_harSymbol11("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-27.5, -13.9);
        this.instance_1.alpha = 0.121;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#9D01E9").s().p("AhgDtQhDgJg3gaQg2gagjgnQgjgngKgyQgJgwAUgvQATguAqgoQArgnA8gbQA9gbBJgKQBJgKBDAKQBDAJA3AaQA2AaAjAnQAjAnAKAyQAIAwgTAvQgTAugqAoQgrAng8AbQg9AbhJAKQglAFgiAAQgjAAgigFg");
        this.shape.setTransform(0.6, -1.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CA50F3").s().p("AhxEcQhPgLhAgfQhAgegqgtQgpgugMg6QgKg6AXg3QAXg5AygwQAygwBHgiQBHghBXgNQBVgLBPANQBPANBAAgQBBAhApAvQApAwAMA6QAKA4gXA3QgXA3gyAtQgyAuhHAgQhHAghXAMQgsAGgpAAQgpAAgmgFgAgLjlQhbANhEAoQhEAngiA4QgiA4AKA9QAJAvAhAkQAgAlAyAYQAzAZA+AJQA9AJBDgJQBbgNBEgoQBEgnAig4QAig4gKg9QgJgvghgkQggglgzgYQgygZg+gJQgfgFggAAQggAAghAFg");

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF9900").s().p("AhcDtQhCgKg0gaQg2gaghgnQgjgogKgxQgIgwASgvQATguApgnQApgnA7gbQA6gbBHgKQBHgKBBAKQBCAKA1AaQA0AaAjAoQAiAnAJAxQAJAxgTAuQgSAvgpAnQgoAng8AbQg6AahHAKQgjAFghAAQgjAAghgFg");
        this.shape_2.setTransform(-0.4, -1.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41.8, -28.9, 83.8, 57.9);


    (lib.mcfeedbackgfxpanelYG4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.grfeedbackpaneloutliney4();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 251, 39.5);
        this.instance.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 38.25, 38.25, 38.25, 0)];

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF99").s().p("AgCgCIABgBIAEAGIgFgFg");
        this.shape.setTransform(-239.6, -30.9);

        this.instance_1 = new lib.harfeedbackpanely4("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-249.4, -38, 1.04, 1.04);
        this.instance_1.alpha = 0.379;

        this.instance_2 = new lib.harSymbol63("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-249.4, -38, 1.04, 1.04);
        this.instance_2.alpha = 0.059;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.mcfeedbackgfxpanelYG4, new cjs.Rectangle(-239.9, -31.3, 0.6, 0.7), null);


    (lib.harYr4instructionboxbkg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.instance = new lib.Path();
        this.instance.parent = this;
        this.instance.setTransform(7.4, -36, 1, 1, 0, 0, 0, 259.8, 3.6);
        this.instance.alpha = 0.301;

        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#3C3C3D", "#1F1F1F", "#2A2828"], [0, 0.827, 1], -253.5, 0, 253.6, 0).s().p("EghVAF8Qg0gBgogdQgngdgRgvQgEgGgCgNIAAgBIAAgDIgCgUIgGg3QgDgfgJggQgIghgRgcQgRgdgcgUQgngYgdgWQgegWgUgZQgUgZgKgfQgKggABgsQABgoAagkQAagjAqgXQAqgWAygBIArAAIAuAAIDIAAIEnAAIFxAAIGrAAIHQAAIHlAAIHkAAIHUAAIGxAAIF7AAIExAAIDXAAIBpAAIAHAAIABAAQArABAkAVQAjAVAVAjQAPAZAEAeQACAMAAAMIAAG9QAAAsgVAjQgVAkgjAUQgkAVgrABg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-253.5, -37.9, 507.1, 76);


    (lib.HM_mcscoreboardbackground = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.HM_harpanel("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcscoreboardbackground, new cjs.Rectangle(-100, -35.5, 200.1, 71.1), null);


    (lib.HM_mclives_7starshighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // lives
        this.instance = new lib.HM_harstaranim("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(110.4, -0.1);

        this.instance_1 = new lib.HM_harstaranim("single", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(135.7, -0.1);

        this.instance_2 = new lib.HM_harstaranim("single", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(85.2, -0.1);

        this.instance_3 = new lib.HM_harstaranim("single", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(59.9, -0.1);

        this.instance_4 = new lib.HM_harstaranim("single", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(34.7, -0.1);

        this.instance_5 = new lib.HM_harstaranim("single", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(9.4, -0.1);

        this.instance_6 = new lib.HM_harstaranim("single", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-15.8, -0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_6 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

        // empty stars
        this.instance_7 = new lib.HM_harstarindent("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(86.6, -0.8);

        this.instance_8 = new lib.HM_harstarindent("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(137.3, -2.2);

        this.instance_9 = new lib.HM_harstarindent("synched", 0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(111.9, -1.6);

        this.instance_10 = new lib.HM_harstarindent("synched", 0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(61.2, -0.8);

        this.instance_11 = new lib.HM_harstarindent("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(35.9, -0.3);

        this.instance_12 = new lib.HM_harstarindent("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(10.5, 0.7);

        this.instance_13 = new lib.HM_harstarindent("synched", 0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-14.8, 1.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_13 }, { t: this.instance_12 }, { t: this.instance_11 }, { t: this.instance_10 }, { t: this.instance_9 }, { t: this.instance_8 }, { t: this.instance_7 }] }).wait(1));

        // Layer 7
        this.instance_14 = new lib.HM_harchancestext("synched", 0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(79.3, 32.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

        // Layer 9
        this.instance_15 = new lib.HM_mcscoreboardbackground();
        this.instance_15.parent = this;
        this.instance_15.setTransform(61.5, 10.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

        // Layer 12
        this.instance_16 = new lib.HM_mcscoreboardbackground();
        this.instance_16.parent = this;
        this.instance_16.setTransform(61.5, 10.5, 1.062, 1.162);
        this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
        this.instance_16.cache(-102, -37, 204, 75);

        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mclives_7starshighlight, new cjs.Rectangle(-44.7, -30.8, 212.6, 82.6), null);


    (lib.HM_mclives_7stars = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { livesLeft7: 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // lives
        this.instance = new lib.HM_harstaranim("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(110.4, -0.1);

        this.instance_1 = new lib.HM_harstaranim("single", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(135.7, -0.1);

        this.instance_2 = new lib.HM_harstaranim("single", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(85.2, -0.1);

        this.instance_3 = new lib.HM_harstaranim("single", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(59.9, -0.1);

        this.instance_4 = new lib.HM_harstaranim("single", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(34.7, -0.1);

        this.instance_5 = new lib.HM_harstaranim("single", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(9.4, -0.1);

        this.instance_6 = new lib.HM_harstaranim("single", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-15.8, -0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_6 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

        // empty stars
        this.instance_7 = new lib.HM_harstarindent("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(86.6, -0.8);

        this.instance_8 = new lib.HM_harstarindent("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(137.3, -2.2);

        this.instance_9 = new lib.HM_harstarindent("synched", 0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(111.9, -1.6);

        this.instance_10 = new lib.HM_harstarindent("synched", 0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(61.2, -0.8);

        this.instance_11 = new lib.HM_harstarindent("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(35.9, -0.3);

        this.instance_12 = new lib.HM_harstarindent("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(10.5, 0.7);

        this.instance_13 = new lib.HM_harstarindent("synched", 0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-14.8, 1.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_13 }, { t: this.instance_12 }, { t: this.instance_11 }, { t: this.instance_10 }, { t: this.instance_9 }, { t: this.instance_8 }, { t: this.instance_7 }] }).wait(1));

        // Layer 7
        this.instance_14 = new lib.HM_harchancestext("synched", 0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(79.3, 32.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

        // Layer 9
        this.instance_15 = new lib.HM_mcscoreboardbackground();
        this.instance_15.parent = this;
        this.instance_15.setTransform(61.5, 10.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mclives_7stars, new cjs.Rectangle(-38.5, -25, 200.1, 71.1), null);


    (lib.HM_harLinkbuttondown = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CCCCCC").ss(1, 1, 1).p("AH5EtIvxAAIAApZIPxAAg");
        this.shape.setTransform(63.3, 37.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("An4EtIAApYIPxAAIAAJYg");
        this.shape_1.setTransform(63.3, 37.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 3).wait(1));

        // Layer 4
        this.instance = new lib.HM_harlinktext("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(65.5, 42);
        this.instance._off = true;
        this.instance.filters = [new cjs.ColorFilter(0.9, 0.9, 0.9, 1, 0, 0, 0, 0)];
        this.instance.cache(-40, -22, 80, 42);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));

        // Layer 6
        this.instance_1 = new lib.HM_harlinktext("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(62.6, 38.4);

        this.instance_2 = new lib.HM_harlinkshadow("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(66.9, 47);
        this.instance_2.alpha = 0.422;

        this.instance_3 = new lib.HM_harpurplelozenge("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(61.6, 41.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(19.7, 12.4, 83.8, 57.9);


    (lib.HM_harLinkbuttonhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.instance = new lib.HM_harlinktext("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(54.9, 31.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 4
        this.instance_1 = new lib.HM_harlinkshadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.2, 40.4);
        this.instance_1.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Layer 6
        this.instance_2 = new lib.HM_harpurplelozenge("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(54, 34.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // Layer 10
        this.instance_3 = new lib.HM_harpurplelozenge("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(54, 34.6, 1.147, 1.202);
        this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
        this.instance_3.cache(-44, -31, 88, 62);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // Layer 2
        this.instance_4 = new lib.HM_harovalshadow("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(67.5, 42.4);
        this.instance_4.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(6, -0.2, 97.3, 71);


    (lib.HM_harLinkbutton = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.instance = new lib.HM_harlinktext("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(54.9, 31.8);

        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CCCCCC").ss(1, 1, 1).p("AH5EtIvxAAIAApZIPxAAg");
        this.shape.setTransform(63.3, 37.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("An4EtIAApYIPxAAIAAJYg");
        this.shape_1.setTransform(63.3, 37.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [] }, 1).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 2).wait(1));

        // Layer 4
        this.instance_1 = new lib.HM_harlinkshadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.2, 40.4);
        this.instance_1.alpha = 0.422;

        this.instance_2 = new lib.HM_harlinktext("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(65.5, 42);
        this.instance_2.filters = [new cjs.ColorFilter(0.9, 0.9, 0.9, 1, 0, 0, 0, 0)];
        this.instance_2.cache(-40, -22, 80, 42);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_2 }] }, 1).to({ state: [] }, 1).wait(1));

        // Layer 6
        this.instance_3 = new lib.HM_harpurplelozenge("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(54, 34.6);

        this.instance_4 = new lib.HM_harlinktext("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(62.6, 38.4);

        this.instance_5 = new lib.HM_harlinkshadow("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(66.9, 47);
        this.instance_5.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_3, p: { x: 54, y: 34.6 } }] }).to({ state: [{ t: this.instance_3, p: { x: 61.6, y: 41.3 } }, { t: this.instance_5 }, { t: this.instance_4 }] }, 1).to({ state: [{ t: this.instance_3, p: { x: 61.6, y: 41.3 } }] }, 1).to({ state: [] }, 1).wait(1));

        // Layer 2
        this.instance_6 = new lib.HM_harovalshadow("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(67.5, 42.4);
        this.instance_6.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(12.1, 5.7, 91.2, 65.1);


    (lib.HM_harHowtoplaybuttonhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.instance = new lib.HM_harHowtoplay("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(54.9, 31.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 4
        this.instance_1 = new lib.HM_harHowtoplayshadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.2, 35.6);
        this.instance_1.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Layer 6
        this.instance_2 = new lib.HM_harredlozenge("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(54, 34.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // Layer 10
        this.instance_3 = new lib.HM_harredlozenge("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(54, 34.6, 1.146, 1.195);
        this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
        this.instance_3.cache(-44, -31, 88, 62);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // Layer 2
        this.instance_4 = new lib.HM_harovalshadow("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(67.5, 42.4);
        this.instance_4.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(6, 0, 97.3, 70.8);


    (lib.HM_harHowtoplaybutton = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.instance = new lib.HM_harHowtoplay("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(54.9, 31.8);

        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CCCCCC").ss(1, 1, 1).p("AH5EtIvxAAIAApZIPxAAg");
        this.shape.setTransform(63.3, 37.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("An4EtIAApYIPxAAIAAJYg");
        this.shape_1.setTransform(63.3, 37.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance, p: { x: 54.9, y: 31.8 } }] }).to({ state: [{ t: this.instance, p: { x: 62.5, y: 38.2 } }] }, 1).to({ state: [{ t: this.instance, p: { x: 66.2, y: 41.8 } }] }, 1).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 1).wait(1));

        // Layer 4
        this.instance_1 = new lib.HM_harHowtoplayshadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.2, 35.6);
        this.instance_1.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ x: 66.8, y: 42 }, 0).to({ _off: true }, 1).wait(2));

        // Layer 6
        this.instance_2 = new lib.HM_harredlozenge("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(54, 34.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({ x: 61.6, y: 41.3 }, 0).wait(1).to({ startPosition: 0 }, 0).to({ _off: true }, 1).wait(1));

        // Layer 2
        this.instance_3 = new lib.HM_harovalshadow("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(67.5, 42.4);
        this.instance_3.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(12.1, 5.7, 91.2, 65.1);


    (lib.HM_harCheckbuttonhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.instance = new lib.HM_harChecktext("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(54.2, 27.4, 1.001, 1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 2
        this.instance_1 = new lib.HM_harCheckshadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(60.4, 34.9, 0.999, 0.998);
        this.instance_1.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Layer 1
        this.instance_2 = new lib.HM_harPinkarrow("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(54, 31.4, 1, 1.002);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // Layer 6
        this.instance_3 = new lib.HM_harPinkarrow("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(54, 31.4, 1.112, 1.197);
        this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
        this.instance_3.cache(-56, -33, 112, 66);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // Layer 3
        this.instance_4 = new lib.HM_hararrowshadow("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(62.2, 36.9);
        this.instance_4.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6, -6, 120.3, 74.7);


    (lib.HM_harCheckbutton = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 5
        this.instance = new lib.HM_harChecktext("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(54.2, 27.4, 1.001, 1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true }, 1).wait(3));

        // Layer 2
        this.instance_1 = new lib.HM_harCheckshadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(60.4, 34.9, 0.999, 0.998);
        this.instance_1.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ _off: true }, 1).wait(3));

        // Layer 1
        this.instance_2 = new lib.HM_harPinkarrow("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(54, 31.4, 1, 1.002);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ _off: true }, 1).wait(3));

        // Layer 3
        this.instance_3 = new lib.HM_hararrowshadow("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(62.2, 36.9);
        this.instance_3.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0.2, 114.2, 68.1);


    (lib.HM_harSpeakerbutton = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 10
        this.instance = new lib.HM_harspeakerup("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(20.5, 12.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true }, 1).wait(3));

        // Layer 11
        this.instance_1 = new lib.HM_harspeakershadow("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(14.2, 15.2);
        this.instance_1.alpha = 0.41;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ _off: true }, 1).wait(3));

        // Layer 6
        this.instance_2 = new lib.HM_harorangelozenge("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(14.5, 17.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ _off: true }, 1).wait(3));

        // Layer 2
        this.instance_3 = new lib.HM_harovalshadow("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(19, 19.7, 0.286, 0.286);
        this.instance_3.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ _off: true }, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.4, 1, 29.7, 26.9);


    (lib.HM_mcfeedbackclipcopy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { standard: 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgIAJQgDgDAAgGQAAgEADgEQADgDAFAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgFAAgDgDg");
        this.shape.setTransform(152.1, 31.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_1.setTransform(146.8, 28.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgLAKgGQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgFAAIg6AAQgBAJAFAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMgBQgGABgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_2.setTransform(137.6, 28.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgEgLgBgNQABgJACgIQACgIAFgGQAGgHAIgEQAHgEALAAQAJAAAIAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgHAAIgEgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQABAHACAIQACAIAGAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgKgDgIQgEgHgGgEQgHgEgIAAQgIAAgGAFg");
        this.shape_3.setTransform(126.6, 26);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_4.setTransform(118.6, 28.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_5.setTransform(108.9, 28.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_6.setTransform(92.5, 28.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_7.setTransform(84.7, 26.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_8.setTransform(72.2, 28.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_9.setTransform(64.4, 28.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLABgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_10.setTransform(54.4, 28.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIACgEIACgBIAEABIAGADQAEACAGAAIAHgBQADgCADgCQACgDAAgEQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgLQABgIAEgFQAEgGAHgDQAHgDAIAAIAKABIAKADIACACIAAAEIgBAFIgBADIgCABIgEgBIgGgDIgIgBQgGAAgDAEQgFACAAAEQAAAGAGADQAEAEAJAEIANAHQAFAEACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_11.setTransform(40.1, 28.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgLAKgGQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgEAAIg7AAQAAAJAFAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMgBQgGABgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_12.setTransform(31.1, 28.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwQAAgHgBgGQgCgGgEgDQgEgEgHAAQgIABgFADQgEAEgDAGIgEALIgBALIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwIgBgNQgBgGgEgDQgEgEgIAAQgIABgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgGQAFgEAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgIQAEgEAGgDQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_13.setTransform(17.8, 28.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_14.setTransform(7.3, 26.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_15.setTransform(1.6, 26.9);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQAKgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_16.setTransform(-11.8, 28.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_17.setTransform(-22.5, 25.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_18.setTransform(-31.5, 26.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_19.setTransform(-43.4, 26.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_20.setTransform(-52.5, 28.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_21.setTransform(-63.4, 25.9);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_22.setTransform(-72.4, 26.9);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_23.setTransform(-86.5, 28.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAAgFIACgEIACgBIAEABIAGADQAEACAGAAIAGgBQAEgCADgCQACgDAAgEQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAIAAIAJABIAKADIAEACIAAAEIgCAFIgBADIgCABIgEgBIgGgDIgJgBQgFAAgDAEQgEACgBAEQABAGAEADQAFAEAKAEIAMAHQAEAEADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_24.setTransform(-96, 28.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_25.setTransform(-109.1, 25.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_26.setTransform(-118.5, 28.3);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgEgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_27.setTransform(-128.8, 28.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_28.setTransform(-136.8, 28.2);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgOAFgKQAFgLAKgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg7AAQAAAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGAAAGIAwAAIAAAAg");
        this.shape_29.setTransform(-151.1, 28.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_30.setTransform(-161.8, 25.9);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_31.setTransform(-170.8, 26.9);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_32.setTransform(-184.8, 28.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_33.setTransform(-193.9, 26.9);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_34.setTransform(-202.7, 28.2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_35.setTransform(-213.9, 28.3);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgKQAAgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIAEACIAAADIgCAHIgBACIgCAAIgEAAIgGgCIgJgBQgFAAgDADQgEACgBAFQABAFAFADQAEAEAKAFIAMAFQAEAFADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_36.setTransform(202.8, 3.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_37.setTransform(194.9, 1.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_38.setTransform(185.4, 3.9);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_39.setTransform(175.4, 3.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_40.setTransform(167.9, 1.6);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_41.setTransform(160.7, 3.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQAKgGANAAQATAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_42.setTransform(146.1, 3.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_43.setTransform(135.4, 1.5);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAHAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgFAAIgCAAQgPAAgHgIg");
        this.shape_44.setTransform(126.4, 2.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIACgBQADAAADACIAKAEQAHABAJAAQAOAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKADgHQADgJAFgHQAFgGAIgEQAHgEALgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAEIAABaQABAWgMALQgNALgWAAIgKgBgAgOgzQgGAEgDAIQgDAIAAAJQABAHACAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_45.setTransform(112.1, 6.2);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_46.setTransform(100.9, 3.9);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_47.setTransform(92.9, 3.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AgDBHQgNAAgJgHQgJgHgFgLQgFgLABgNQAAgJACgIQADgIAFgGQAFgHAHgEQAIgEAKAAQAKAAAHAEQAIADAGAIIAAAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAACAIgCAEIgDABIgHAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgIIgBAAQgGAIgIADQgHAEgHAAIgDAAgAgOgFQgGAFgDAHQgCAHAAAJQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgKgEgIQgDgHgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_48.setTransform(82.9, 1.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_49.setTransform(66.8, 3.9);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_50.setTransform(57.8, 2.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_51.setTransform(46.7, 3.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAxAAIAAAAg");
        this.shape_52.setTransform(37.5, 3.9);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_53.setTransform(26.8, 1.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_54.setTransform(17.8, 2.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_55.setTransform(9.5, 3.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgNBGIgKgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIAAgHIABgCIACgBQADAAAEACIAJAEQAGABAKAAQAOAAAGgHQAIgJAAgPIAAgTIAAAAQgGAJgIADQgIADgJABQgNgBgJgGQgJgGgFgKQgEgKAAgNQAAgKACgHQADgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAIADAFAHIABAAIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAABaQgBAWgMALQgLALgYAAIgKgBgAgOgzQgGAEgDAIQgCAIAAAJQgBAHADAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_56.setTransform(-1.5, 6.2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_57.setTransform(-12.4, 3.9);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AgFA2QgHgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_58.setTransform(-21.5, 2.5);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_59.setTransform(-33.9, 1.5);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_60.setTransform(-42.1, 3.8);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_61.setTransform(-51.8, 3.9);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#000000").s().p("AAhBBQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgbhlIAAAAIgYBlQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgOAAIgDgBIgCgEIgjh2IgBgBIAAgCQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIALAAIADABIACAEIAdBqIABAAIAZhqIABgEIAEgBIANAAIAEABIABAEIAbBqIABAAIAbhqIACgEIADgBIALAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAABIAAACIgiB2IgCADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
        this.shape_62.setTransform(-66.5, 2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgDgDg");
        this.shape_63.setTransform(-83.1, 7.5);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_64.setTransform(-91.3, 3.8);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFgBAHIAyAAIAAAAg");
        this.shape_65.setTransform(-101.9, 3.9);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_66.setTransform(-112.1, 3.9);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_67.setTransform(-119.9, 3.8);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIADgBQACAAADACIAKAEQAGABAJAAQAPAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKAEgHQACgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABAEIAABaQABAWgMALQgMALgXAAIgKgBgAgOgzQgGAEgCAIQgEAIAAAJQABAHACAHQACAHAGAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgEgIgHgEQgGgEgIgBQgIABgGAFg");
        this.shape_68.setTransform(-129.9, 6.2);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_69.setTransform(-145.4, 3.9);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_70.setTransform(-156.1, 1.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_71.setTransform(-165.1, 2.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_72.setTransform(-176.2, 3.8);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_73.setTransform(-185.3, 3.9);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_74.setTransform(-196, 1.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_75.setTransform(-205, 2.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_76.setTransform(-213.9, 3.9);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_77.setTransform(194, -20.6);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_78.setTransform(183.3, -23);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_79.setTransform(174.3, -22);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgFgLAAgNQAAgJADgIQACgIAFgGQAFgHAJgEQAHgEALAAQAIAAAJAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgIAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQAAAHADAIQACAIAHAFQAFAGAJAAQAIAAAHgFQAGgEADgHQAEgIAAgKQAAgKgEgIQgEgHgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_80.setTransform(160, -22.9);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_81.setTransform(149.1, -20.7);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgCAHAAAIQAAAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_82.setTransform(137.7, -20.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgHIACgDIACgBIAEACIAGACQAEABAGAAIAHgBQADAAADgDQACgDAAgEQAAgEgBgDQgCgCgFgCIgKgGQgKgFgGgFQgGgGgBgLQABgIAEgFQAEgHAHgCQAHgDAIAAIAKABIAKADIACACIAAADIgBAGIgBADIgCAAIgEgBIgGgCIgIAAQgGAAgDACQgFADAAAEQAAAFAGAEQAEAEAJAFIANAGQAFADACAGQACAEABAHQgBAKgFAGQgFAGgHADQgJACgGAAIgLgBg");
        this.shape_83.setTransform(123.3, -20.6);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_84.setTransform(114.4, -20.6);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_85.setTransform(107.4, -22.9);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_86.setTransform(101.8, -22.8);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_87.setTransform(96.1, -22);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABgBAAAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_88.setTransform(83.7, -23);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_89.setTransform(74.2, -20.6);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_90.setTransform(64.2, -20.6);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_91.setTransform(56.7, -22.9);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_92.setTransform(49.5, -20.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKALgHQAKgGALAAQAUAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAIgDIAFgBIACAAIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgFADQgGADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_93.setTransform(34.9, -20.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_94.setTransform(24.2, -20.5);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_95.setTransform(16.8, -22.9);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#000000").s().p("AgNBDQgJgEgFgHIgBAAIAAAIIgBAEIgDABIgIAAIgCgBIgBgEIAAiAIABgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEIAAA3IABAAQAGgIAHgEQAIgDAJAAQAOAAAJAHQAIAGAFALQAFAKAAAOQAAAMgFALQgFAKgIAHQgJAHgOAAQgJAAgIgEgAgNgGQgHAFgDAGQgEAIAAAJQAAARAIAJQAIAJAMAAQAIAAAGgFQAGgEADgIQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgFgJAAQgIAAgGAEg");
        this.shape_96.setTransform(8.2, -22.9);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_97.setTransform(-7.9, -20.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_98.setTransform(-18.6, -23);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgCgEIAAgEIACgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQADAFAIAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_99.setTransform(-27.6, -22);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_100.setTransform(-41, -20.6);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#000000").s().p("AgFAuIgEgBIgBgEIgfhQIgBgCIAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAKAAIADABIACADIAXBGIABAAIAYhGIACgDIADgBIAJAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAABIgBACIgfBQIgCAEIgDABg");
        this.shape_101.setTransform(-50.8, -20.6);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_102.setTransform(-61.1, -20.6);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgvQAAgIgBgGQgCgGgEgEQgEgCgHAAQgIAAgFADQgEAEgDAFIgEANIgBAKIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgvIgBgOQgBgGgEgEQgEgCgIAAQgIAAgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgHQAFgDAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgJQAEgEAGgCQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_103.setTransform(-74.9, -20.7);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_104.setTransform(-93.8, -20.7);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_105.setTransform(-105.3, -20.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_106.setTransform(-114.6, -20.6);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_107.setTransform(-129.7, -20.5);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_108.setTransform(-140.9, -20.6);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#000000").s().p("AgUBHQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIABgBIAAgCIAQgmIgihZIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBABAAIAKAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgCADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
        this.shape_109.setTransform(-151.1, -18.1);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#000000").s().p("AgFBHIgDgBIgBgEIAAhIIgRAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEIAAgEIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIARAAIAAgRQAAgQAHgIQAHgJAPAAIAFABIAEAAIADACIAAACIAAAHIgBADIgCABIgEgBIgFgBQgHAAgDAFQgEAGAAALIAAAOIAVAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAEIgBAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAABIIgBAEIgDABg");
        this.shape_110.setTransform(-164.4, -23.1);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_111.setTransform(-173.3, -20.6);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_112.setTransform(-189.1, -20.6);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_113.setTransform(-199.8, -20.7);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#000000").s().p("AggA7QgNgIgIgPQgHgPgBgVQABgUAHgPQAIgPANgIQAOgIASAAQATAAAOAIQAOAIAHAPQAHAPABAUQgBAVgHAPQgHAPgOAIQgOAIgTAAQgSAAgOgIgAgXgqQgJAGgFALQgFAMAAANQAAAOAFAMQAFALAJAHQAJAGAOAAQAOAAAKgGQAJgHAFgLQAFgMAAgOQAAgNgFgMQgFgLgJgGQgKgHgOAAQgOAAgJAHg");
        this.shape_114.setTransform(-212.4, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_115.setTransform(-224.7, -30.5);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_116.setTransform(-224.7, 1.7);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_117.setTransform(15.9, -28.4);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_118.setTransform(13.7, 0.4);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_119.setTransform(15.2, 0.4);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_120.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclipcopy7, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.5), null);


    (lib.HM_mcfeedbackclipcopy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "standard": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgDgDg");
        this.shape.setTransform(-155, 7.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_1.setTransform(-160.3, 3.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAxAAIAAAAg");
        this.shape_2.setTransform(-169.5, 3.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahPIgBgCIAAgDIAAgBIADgBIAKAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIAUBEIABAAIAVhEIACgEIADgBIAKAAIAEABIACAEIAVBEIABAAIAThEQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAABIAAADIAAACIgaBPIgDAEIgDABg");
        this.shape_3.setTransform(-182, 3.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgKQABgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIADACIAAADIgBAHIgBACIgCAAIgEAAIgGgCIgIgBQgGAAgDADQgFACAAAFQABAFAFADQAEAEAKAFIAMAFQAFAFACAEQACAFAAAHQAAAKgFAGQgFAGgIACQgIADgGAAIgMgBg");
        this.shape_4.setTransform(-193.3, 3.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_5.setTransform(-202.8, 3.8);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_6.setTransform(-214.2, 3.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgIAFgDQAGgEAHAAIAFAAIAEABIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJAAgFAGQgFAFgCAIQgCAJAAAHIAAAmIgBAEIgEABg");
        this.shape_7.setTransform(195.5, -20.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_8.setTransform(185.8, -20.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_9.setTransform(174.6, -20.6);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgVBHQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgBIAAgCIAQgmIgihZIAAgCIgBgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAKAAQABABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAKAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAIgBACIAAACIgvCBIgCADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAg");
        this.shape_10.setTransform(164.4, -18.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_11.setTransform(149, -23);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_12.setTransform(140, -22);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_13.setTransform(134.4, -22.8);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahQIgBgCIAAgBIAAgCIADgBIAKAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAUBGIABAAIAVhGIACgDIADgBIAKAAIAEABIACADIAVBGIABAAIAThGQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAACIAAABIAAACIgaBQIgDAEIgDABg");
        this.shape_14.setTransform(124.7, -20.6);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgVBHQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgBIABgCIAPgmIgihZIAAgCIgBgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAKAAQABABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBIAJAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAIgBACIAAACIgvCBIgCADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAg");
        this.shape_15.setTransform(107.6, -18.1);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgoBGIgDgBIAAgEIAAh/IAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIAAAIIAAAAQAGgIAIgEQAIgDAJAAQANAAAKAHQAJAGAEALQAEALABAOQgBAIgCAJQgDAHgEAHQgGAHgHAEQgIAEgKAAQgKAAgHgEQgIgEgFgHIgBAAIAAA2IgBAEIgEABgAgOgzQgGAFgEAHQgDAIAAAJQABARAHAIQAIAJAMAAQAJAAAFgFQAGgFADgHQACgHABgJQAAgIgDgIQgCgHgGgGQgGgFgJAAQgIAAgHAEg");
        this.shape_16.setTransform(97.6, -18.4);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AgoBGIgCgBIgBgEIAAh/IABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAIIABAAQAGgIAIgEQAIgDAJAAQAOAAAIAHQAKAGAEALQAFALgBAOQAAAIgCAJQgDAHgFAHQgEAHgIAEQgIAEgKAAQgJAAgIgEQgIgEgFgHIgBAAIAAA2IgBAEIgDABgAgNgzQgHAFgDAHQgEAIAAAJQAAARAIAIQAIAJAMAAQAIAAAGgFQAGgFADgHQACgHAAgJQABgIgDgIQgDgHgFgGQgGgFgJAAQgIAAgGAEg");
        this.shape_17.setTransform(86.4, -18.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgFgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgCAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgEgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_18.setTransform(74.6, -20.6);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_19.setTransform(63.7, -23);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_20.setTransform(47.4, -23);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_21.setTransform(38.4, -22);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_22.setTransform(29.5, -20.6);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AgNBDQgJgEgFgHIgBAAIAAAIIAAAEIgEABIgHAAIgEgBIgBgEIAAiAIABgEQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEIAAA3IAAAAQAHgIAIgEQAHgDAJAAQANAAAJAHQAKAGAEALQAEAKAAAOQAAAMgEALQgEAKgKAHQgJAHgNAAQgKAAgHgEgAgNgGQgHAFgEAGQgDAIAAAJQABARAHAJQAIAJALAAQAKAAAFgFQAGgEADgIQADgIgBgJQABgIgDgIQgCgHgGgFQgGgFgKAAQgHAAgGAEg");
        this.shape_23.setTransform(18.6, -22.9);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKALgHQAJgGAMAAQAUAAALAMQALAMAAAWQgBABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAIgDIAFgBIACAAIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgFADQgGADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_24.setTransform(2.5, -20.6);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgIAFgDQAGgEAHAAIAFAAIAEABIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJAAgFAGQgFAFgCAIQgCAJAAAHIAAAmIgBAEIgEABg");
        this.shape_25.setTransform(-5.3, -20.7);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_26.setTransform(-15.3, -20.6);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_27.setTransform(-31.3, -20.5);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_28.setTransform(-42.5, -20.6);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgVBHQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIABgBIAAgCIAQgmIgihZIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAIALAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgBADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
        this.shape_29.setTransform(-52.8, -18.1);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_30.setTransform(-68.2, -20.7);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgLgHgGQgGgHgLAAQgGAAgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_31.setTransform(-78.8, -20.6);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_32.setTransform(-89.5, -23);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahQIgBgCIAAgBIAAgCIADgBIAKAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAUBGIABAAIAVhGIACgDIADgBIAKAAIAEABIACADIAVBGIABAAIAThGQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAACIAAABIAAACIgaBQIgDAEIgDABg");
        this.shape_33.setTransform(-102.5, -20.6);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AgCAVIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgUIAAgHIAAgFIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAJAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIAAAFIAAAHIgBAUIgBAEIgDABg");
        this.shape_34.setTransform(-117.5, -26.8);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_35.setTransform(-124, -23);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_36.setTransform(-133.5, -20.6);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_37.setTransform(-142.9, -20.6);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_38.setTransform(-153.6, -23);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgeAxQgJgKgFgMQgEgMAAgPQAAgOAFgNQAEgMAKgJQAJgJANgEQALgFAPAAIAJABIAJABIAIADQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABADIgBAKIgBACIgBABIgDgBIgFgCIgIgCIgLgBQgLAAgIADQgJAEgHAHQgHAHgDAJQgEAJAAAKQAAALAEAJQADAJAIAIQAHAHAIADQAIADALAAIAIAAIAHgBIAHgCIAEgCIADABIAAADIABAHQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgDACIgIADIgKABIgIABQgeAAgTgSg");
        this.shape_39.setTransform(-164.6, -22.5);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgCAVIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgUIAAgHIAAgFIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAJAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIAAAFIAAAHIgBAUIgBAEIgDABg");
        this.shape_40.setTransform(-173, -26.8);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_41.setTransform(-184.7, -23);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_42.setTransform(-194.1, -20.6);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_43.setTransform(-200.8, -22.8);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_44.setTransform(-204.9, -22.9);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgeAxQgJgKgFgMQgEgMAAgPQAAgOAFgNQAEgMAKgJQAJgJANgEQALgFAPAAIAJABIAJABIAIADQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABADIgBAKIgBACIgBABIgDgBIgFgCIgIgCIgLgBQgLAAgIADQgJAEgHAHQgHAHgDAJQgEAJAAAKQAAALAEAJQADAJAIAIQAHAHAIADQAIADALAAIAIAAIAHgBIAHgCIAEgCIADABIAAADIABAHQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgDACIgIADIgKABIgIABQgeAAgTgSg");
        this.shape_45.setTransform(-213.7, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_46.setTransform(-224.7, -30.5);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_47.setTransform(-224.7, 1.7);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_48.setTransform(15.9, -28.4);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_49.setTransform(13.7, 0.4);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_50.setTransform(15.2, 0.4);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_51.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclipcopy6, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.1), null);


    (lib.HM_mcfeedbackclipcopy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "standard": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgIAJQgDgDAAgGQAAgEADgEQADgDAFAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgFAAgDgDg");
        this.shape.setTransform(237.7, 7.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgKQAAgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIAEACIAAADIgCAHIgBACIgCAAIgEAAIgGgCIgIgBQgGAAgDADQgEACgBAFQABAFAEADQAFAEAKAFIAMAFQAEAFADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_1.setTransform(231.2, 3.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgNAGgLQAFgKALgHQAKgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgGADQgFAEgEAFQgCAFgBAHIAwAAIAAAAg");
        this.shape_2.setTransform(222.2, 3.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_3.setTransform(213.1, 3.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgIADQgIAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAGgFQAGgEADgHQAEgIAAgKQAAgJgEgIQgEgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_4.setTransform(202.9, 3.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgoBGIgCgBIgBgEIAAh/IABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAIIABAAQAGgIAIgEQAIgDAJAAQAOAAAJAHQAIAGAFALQAFALAAAOQAAAIgDAJQgCAHgGAHQgFAHgHAEQgIAEgKAAQgKAAgHgEQgIgEgFgHIgBAAIAAA2IgBAEIgEABgAgNgzQgHAFgDAHQgEAIAAAJQAAARAIAIQAIAJAMAAQAIAAAGgFQAGgFADgHQADgHAAgJQAAgIgDgIQgCgHgGgGQgGgFgJAAQgIAAgGAEg");
        this.shape_5.setTransform(192.3, 6.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgKQABgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIADACIAAADIgBAHIgBACIgCAAIgEAAIgGgCIgIgBQgGAAgDADQgFACAAAFQABAFAFADQAEAEAKAFIAMAFQAFAFACAEQACAFAAAHQAAAKgFAGQgFAGgIACQgIADgGAAIgMgBg");
        this.shape_6.setTransform(182.5, 3.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgVBGQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgCIABgCIAPgnIgihYIAAgCIgBgCQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAIAKAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAIgBACIAAACIgvCBIgCADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAg");
        this.shape_7.setTransform(168.8, 6.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_8.setTransform(160.7, 2.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgnBGIgDgBIgBgEIAAh/IABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAHAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAIIABAAQAGgIAIgEQAIgDAJAAQAOAAAIAHQAKAGAEALQAFALgBAOQAAAIgCAJQgDAHgFAHQgEAHgIAEQgIAEgKAAQgJAAgIgEQgIgEgFgHIgBAAIAAA2IgBAEIgDABgAgNgzQgHAFgDAHQgEAIAAAJQAAARAIAIQAIAJAMAAQAIAAAGgFQAGgFADgHQACgHAAgJQABgIgDgIQgDgHgFgGQgGgFgJAAQgIAAgGAEg");
        this.shape_9.setTransform(152.1, 6.1);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AA4AvIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwQABgHgCgGQgBgGgEgDQgEgDgIAAQgHAAgFADQgFAEgDAFIgDAMIAAAMIAAAlIgBAEIgEABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwIgBgNQgCgGgEgDQgEgDgHAAQgKgBgFAFQgFAEgDAIQgCAIAAAIIAAApIgBAEIgDABIgIAAIgEgBIgBgEIAAhQIABgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAFIAAAIIABAAIAGgHQAEgEAFgDQAFgCAHAAQANAAAHAFQAGAFACAIIABAAIAGgIQAEgEAGgDQAGgDAIAAQAKAAAHADQAGAEAEAGQACAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_10.setTransform(138, 3.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgNAFgLQAFgKAKgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg7AAQAAAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFAAAHIAwAAIAAAAg");
        this.shape_11.setTransform(124.8, 3.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_12.setTransform(108.9, 3.9);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQAAALADAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_13.setTransform(99.8, 2.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_14.setTransform(91, 3.8);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_15.setTransform(83.1, 1.6);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AA4AvIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwQABgHgCgGQgBgGgEgDQgEgDgIAAQgHAAgFADQgEAEgDAFIgEAMIgBAMIAAAlIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwIgCgNQgBgGgEgDQgEgDgHAAQgJgBgGAFQgGAEgCAIQgCAIAAAIIAAApIgBAEIgEABIgIAAIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAFIAAAIIAAAAIAFgHQAFgEAFgDQAFgCAIAAQAMAAAHAFQAGAFACAIIABAAIAGgIQAEgEAGgDQAGgDAIAAQALAAAFADQAHAEADAGQAEAFABAIIABANIAAAxIgBAEIgEABg");
        this.shape_16.setTransform(67.5, 3.8);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgNAGgLQAFgKALgHQAJgGAMAAQAUAAALAMQALAMAAAWQgBABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgGADQgFAEgDAFQgDAFgBAHIAwAAIAAAAg");
        this.shape_17.setTransform(54.3, 3.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_18.setTransform(43.6, 1.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgEA2QgHgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQAAALADAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgFAAIgBAAQgPAAgGgIg");
        this.shape_19.setTransform(34.6, 2.5);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_20.setTransform(21.1, 3.9);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AgFAuIgDgBIgDgEIgehPIAAgCIgBgCQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIAKAAIAEABIACAEIAXBEIABAAIAYhEIACgEIADgBIAKAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIgBACIAAACIgeBPIgCAEIgEABg");
        this.shape_21.setTransform(11.4, 3.9);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_22.setTransform(1.1, 3.9);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwQABgHgCgGQgBgGgEgDQgEgDgIAAQgHAAgFADQgFAEgDAFIgDAMIAAAMIAAAlIgBAEIgEABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwIgBgNQgCgGgEgDQgEgDgHAAQgKgBgFAFQgFAEgDAIQgCAIAAAIIAAApIgBAEIgDABIgIAAIgEgBIgBgEIAAhQIABgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAFIAAAIIABAAIAGgHQAEgEAFgDQAFgCAHAAQANAAAHAFQAGAFACAIIABAAIAGgIQAEgEAGgDQAGgDAIAAQAKAAAHADQAGAEAEAGQACAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_23.setTransform(-12.7, 3.8);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_24.setTransform(-31.7, 3.9);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_25.setTransform(-40.8, 2.5);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgGIACgEIACgBIAEACIAGACQAEABAGAAIAHAAQADgCADgCQACgCAAgFQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgKQABgJAEgGQAEgFAHgDQAHgDAIAAIAKABIAKADIACACIAAADIgBAHIgBACIgCAAIgEAAIgGgCIgIgBQgGAAgDADQgFACAAAFQAAAFAGADQAEAEAJAFIANAFQAFAFACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_26.setTransform(-53.1, 3.9);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahPIgBgCIAAgDIAAgBIADgBIAKAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIAUBEIABAAIAVhEIACgEIADgBIAKAAIAEABIACAEIAVBEIABAAIAThEQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAABIAAADIAAACIgaBPIgDAEIgDABg");
        this.shape_27.setTransform(-64.4, 3.9);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_28.setTransform(-77.4, 3.9);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_29.setTransform(-85.7, 3.8);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_30.setTransform(-92.5, 3.8);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIAAAEIAABRIAAAEIgDABIgHAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgGAFgDAIQgDAHAAAIQABAHACAIQADAIAFAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_31.setTransform(-102.5, 3.9);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQAKgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_32.setTransform(-118, 3.9);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_33.setTransform(-128.7, 1.5);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_34.setTransform(-137.7, 2.5);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgNAGgLQAFgKAKgHQALgGAMAAQATAAAKAMQAMAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg6AAQgBAJAFAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIAAACIABAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgCAFgBAHIAwAAIAAAAg");
        this.shape_35.setTransform(-151.2, 3.9);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgGIACgEIACgBIAEACIAGACQAEABAGAAIAHAAQADgCADgCQACgCAAgFQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgKQABgJAEgGQAEgFAHgDQAHgDAIAAIAKABIAKADIACACIAAADIgBAHIgBACIgCAAIgEAAIgGgCIgIgBQgGAAgDADQgFACAAAFQAAAFAGADQAEAEAJAFIANAFQAFAFACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_36.setTransform(-160.2, 3.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_37.setTransform(-169.7, 4);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_38.setTransform(-186, 3.8);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_39.setTransform(-196.6, 3.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_40.setTransform(-207.3, 1.5);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_41.setTransform(-216.3, 2.5);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AgHAUIgBAAIgBgBIABgBIABgBIAEgIIADgGQgFAAgDgDQgDgDAAgFQAAgEADgEQADgEAFABIAFABQADABACADIACAIQAAAGgCAEIgGAKQgEADgEACIgBABIgCAAg");
        this.shape_42.setTransform(228.7, -16.1);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_43.setTransform(222, -23);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_44.setTransform(212.6, -20.6);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgFgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgDAIQgEAHAAAIQAAAHADAIQADAIAGAFQAGAGAIAAQAIAAAHgFQAGgEADgHQAEgIAAgKQAAgJgEgIQgEgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_45.setTransform(202.3, -20.6);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgIAFgDQAGgEAHAAIAFAAIAEABIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJAAgFAGQgFAFgCAIQgCAJAAAHIAAAmIgBAEIgEABg");
        this.shape_46.setTransform(194.3, -20.7);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAAKAMQAMAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_47.setTransform(180, -20.6);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_48.setTransform(169.3, -23);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#000000").s().p("AgFA2QgHgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_49.setTransform(160.3, -22);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AgNBHIgKgDIgJgDIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIAAgHIACgDIABAAQADAAAEACIAKAEQAFABAKAAQANAAAIgIQAHgHAAgQIAAgSIAAAAQgGAIgIADQgIAEgJgBQgNAAgJgGQgJgGgFgKQgFgLABgNQAAgJACgIQADgIAFgHQAFgGAIgFQAHgDALAAQAJAAAIADQAHAEAGAHIABAAIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBIAHAAQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAABbQAAAWgNAKQgMAMgXAAIgKgBgAgOgzQgGAFgDAHQgCAIAAAIQgBAIADAIQADAGAFAEQAGAFAJABQANgBAIgIQAHgIAAgPQAAgKgEgIQgEgHgGgEQgGgFgIAAQgIABgGAFg");
        this.shape_50.setTransform(146, -18.2);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_51.setTransform(135.1, -20.7);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_52.setTransform(123.9, -20.6);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_53.setTransform(116.4, -22.9);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgHAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgDAIQgEAHAAAIQABAHACAIQADAIAFAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgEgIgGgEQgHgEgIAAQgIAAgGAFg");
        this.shape_54.setTransform(107.3, -20.6);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgLgHgGQgGgHgLAAQgGAAgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_55.setTransform(91.8, -20.6);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgFAuIgDgBIgDgEIgehQIAAgCIgBgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIAKAAIAEABIACADIAXBGIABAAIAYhGIACgDIADgBIAJAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIgBABIAAACIgeBQIgCAEIgEABg");
        this.shape_56.setTransform(82, -20.6);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_57.setTransform(71.7, -20.6);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AA4AvIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgvQABgIgCgGQgBgGgEgEQgEgCgIAAQgHAAgFADQgFAEgDAFIgDANIAAAKIAAAmIgBAEIgEABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgvIgBgOQgCgGgEgEQgEgCgHAAQgKAAgFAEQgFAFgDAHQgCAIAAAJIAAAoIgBAEIgDABIgIAAIgEgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAAIIABAAIAGgHQAEgDAFgCQAFgDAHAAQANAAAHAFQAGAGACAHIABAAIAGgJQAEgEAGgCQAGgDAIAAQAKAAAHAEQAGADAEAGQACAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_58.setTransform(57.9, -20.7);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_59.setTransform(38.9, -20.6);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_60.setTransform(29.9, -22);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_61.setTransform(18, -22);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_62.setTransform(9.2, -20.7);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_63.setTransform(-2.3, -20.6);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahQIgBgCIAAgBIAAgCIADgBIAKAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAUBGIABAAIAVhGIACgDIADgBIAKAAIAEABIACADIAVBGIABAAIAThGQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAACIAAABIAAACIgaBQIgDAEIgDABg");
        this.shape_64.setTransform(-15, -20.6);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_65.setTransform(-33.1, -20.5);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_66.setTransform(-44.3, -20.6);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#000000").s().p("AgVBHQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIABgBIAAgCIAQgmIgihZIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAIALAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgBADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
        this.shape_67.setTransform(-54.6, -18.1);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgHIACgDIACgBIAEACIAGACQAEABAGAAIAGgBQAEAAADgDQACgDAAgEQAAgEgBgDQgCgCgFgCIgKgGQgKgFgGgFQgGgGgBgLQABgIAEgFQAEgHAHgCQAHgDAIAAIAKABIAJADIADACIAAADIgBAGIgBADIgCAAIgEgBIgGgCIgIAAQgGAAgDACQgFADAAAEQAAAFAGAEQAEAEAJAFIANAGQAFADACAGQACAEABAHQgBAKgFAGQgFAGgHADQgJACgGAAIgLgBg");
        this.shape_68.setTransform(-68.3, -20.6);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_69.setTransform(-76.2, -23);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_70.setTransform(-85.7, -20.6);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_71.setTransform(-95.7, -20.6);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_72.setTransform(-103.2, -22.9);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_73.setTransform(-110.4, -20.6);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgOAFgKQAFgKAKgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg7AAQAAAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGAAAGIAwAAIAAAAg");
        this.shape_74.setTransform(-125, -20.6);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_75.setTransform(-135.7, -23);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_76.setTransform(-144.7, -22);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_77.setTransform(-158.7, -20.7);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_78.setTransform(-169.9, -20.6);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_79.setTransform(-184.7, -23);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_80.setTransform(-194.1, -20.6);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_81.setTransform(-200.8, -22.8);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_82.setTransform(-204.9, -22.9);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AgeAxQgJgKgFgMQgEgMAAgPQAAgOAFgNQAEgMAKgJQAJgJANgEQALgFAPAAIAJABIAJABIAIADQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABADIgBAKIgBACIgBABIgDgBIgFgCIgIgCIgLgBQgLAAgIADQgJAEgHAHQgHAHgDAJQgEAJAAAKQAAALAEAJQADAJAIAIQAHAHAIADQAIADALAAIAIAAIAHgBIAHgCIAEgCIADABIAAADIABAHQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgDACIgIADIgKABIgIABQgeAAgTgSg");
        this.shape_83.setTransform(-213.7, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_84.setTransform(-224.7, -30.5);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_85.setTransform(-224.7, 1.7);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_86.setTransform(15.9, -28.4);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_87.setTransform(13.7, 0.4);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_88.setTransform(15.2, 0.4);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_89.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclipcopy4, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.1), null);


    (lib.HM_mcfeedbackclipcopy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "standard": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgDgDg");
        this.shape.setTransform(179.2, 31.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIABgEIADgBIAEABIAGADQAEACAGAAIAHgBQADgCACgCQADgDAAgEQAAgEgBgCQgDgDgEgDIgKgFQgKgEgGgGQgGgGgBgLQABgIAEgFQAEgGAHgDQAHgDAIAAIAKABIAKADIACACIAAAEIgBAFIgBADIgCABIgEgBIgGgDIgIgBQgGAAgEAEQgEACAAAEQAAAGAGADQAEAEAJAEIANAHQAEAEADAEQADAFAAAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_1.setTransform(172.7, 28.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAKgGQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgDAAIg8AAQABAJAEAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLgBQgGABgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_2.setTransform(163.8, 28.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBADIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_3.setTransform(154.7, 28.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_4.setTransform(144.7, 28.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIAAAEIAABRIAAAEIgDABIgHAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgGAFgDAIQgDAHAAAIQABAHACAIQADAIAFAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_5.setTransform(133.3, 28.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_6.setTransform(122.4, 25.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBADIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_7.setTransform(112.8, 28.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgVBGQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgCIAAgCIAQgnIgihYIAAgCIgBgBQAAgBAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAKAAQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAABIgBABIAAACIgvCBIgCADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAg");
        this.shape_8.setTransform(98.7, 30.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_9.setTransform(88.4, 28.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_10.setTransform(77, 28.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgNBHIgKgCIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAIAAgHIABgCIACgBQADAAAEACIAKADQAFACAKAAQAOAAAGgHQAIgIAAgQIAAgSIAAAAQgGAIgIADQgIAEgJAAQgNAAgJgHQgJgGgFgKQgEgKAAgOQAAgIACgJQADgIAFgGQAFgIAIgDQAIgFAKAAQAJAAAIAFQAIADAFAIIABAAIAAgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBABAAIAGAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABAEIAABaQgBAXgMALQgLALgYgBIgKAAgAgOg0QgGAGgDAIQgCAHAAAIQgBAIADAHQADAIAFADQAGAFAJABQANgBAHgIQAIgIAAgPQAAgKgDgIQgFgHgGgEQgGgFgIABQgIAAgGAEg");
        this.shape_11.setTransform(60.6, 30.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_12.setTransform(49.7, 28.2);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_13.setTransform(41.9, 26.1);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIABgEIADgBIAEABIAGADQAEACAGAAIAHgBQADgCACgCQADgDAAgEQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAIAAIAJABIALADIADACIAAAEIgCAFIgBADIgCABIgEgBIgGgDIgJgBQgFAAgEAEQgDACAAAEQAAAGAEADQAFAEAKAEIAMAHQAEAEADAEQACAFAAAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_14.setTransform(35.7, 28.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_15.setTransform(26.2, 28.4);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQAAALADAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgFAAIgBAAQgPAAgGgIg");
        this.shape_16.setTransform(12.1, 26.9);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_17.setTransform(3.2, 28.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_18.setTransform(-8, 28.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_19.setTransform(-19.2, 25.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_20.setTransform(-28.2, 26.9);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_21.setTransform(-33.7, 26.1);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahPIgBgDIAAgCIAAgBIADgBIAKAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAUBFIABAAIAVhFIACgDIADgBIAKAAIAEABIACADIAVBFIABAAIAThFQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAABIAAACIAAADIgaBPIgDAEIgDABg");
        this.shape_22.setTransform(-43.4, 28.3);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABgBAAAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_23.setTransform(-60, 25.9);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBADIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_24.setTransform(-69.4, 28.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_25.setTransform(-79.7, 28.3);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_26.setTransform(-87.7, 28.2);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAFgLALgGQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgEAAIg7AAQAAAJAFAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMgBQgGABgFADQgGADgDAGQgDAGgCAGIAxAAIAAAAg");
        this.shape_27.setTransform(-102, 28.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_28.setTransform(-112.7, 25.9);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_29.setTransform(-121.7, 26.9);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AgMBHIgLgCIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgHIACgCIACgBQACAAADACIALADQAGACAIAAQAOAAAIgHQAHgIAAgQIAAgSIgBAAQgFAIgIADQgIAEgJAAQgNAAgJgHQgJgGgFgKQgFgKAAgOQABgIADgJQACgIAFgGQAFgIAIgDQAHgFALAAQAJAAAIAFQAIADAFAIIABAAIAAgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIAIAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIABAEIAABaQAAAXgMALQgLALgYgBIgJAAgAgOg0QgGAGgCAIQgDAHgBAIQAAAIADAHQACAIAHADQAFAFAJABQANgBAIgIQAHgIAAgPQAAgKgEgIQgDgHgHgEQgGgFgIABQgIAAgGAEg");
        this.shape_30.setTransform(-136, 30.7);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_31.setTransform(-146.9, 28.2);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_32.setTransform(-158.1, 28.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_33.setTransform(-165.6, 26);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQgBgJADgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQgBAHADAIQADAIAFAFQAHAGAIAAQAIAAAGgFQAHgEAEgHQADgIAAgKQAAgJgDgIQgFgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_34.setTransform(-174.7, 28.3);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIABgEIADgBIAEABIAGADQAEACAGAAIAHgBQADgCACgCQADgDAAgEQAAgEgBgCQgDgDgEgDIgKgFQgKgEgGgGQgGgGgBgLQABgIAEgFQAEgGAHgDQAHgDAIAAIAKABIAKADIACACIAAAEIgBAFIgBADIgCABIgEgBIgGgDIgIgBQgGAAgEAEQgEACAAAEQAAAGAGADQAEAEAJAEIANAHQAEAEADAEQADAFAAAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_35.setTransform(-189.1, 28.3);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAKgGQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgDAAIg8AAQABAJAEAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLgBQgGABgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_36.setTransform(-198, 28.3);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_37.setTransform(-205, 26);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_38.setTransform(-210.6, 26.1);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_39.setTransform(-216.3, 26.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgFBHIgDgBIgBgEIAAhIIgRAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEIAAgEIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIARAAIAAgRQAAgQAHgIQAHgJAPAAIAFABIAEAAIADACIAAACIAAAHIgBADIgCABIgEgBIgFgBQgHAAgDAFQgEAGAAALIAAAOIAVAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAEIgBAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAABIIgBAEIgDABg");
        this.shape_40.setTransform(218.3, 1.4);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_41.setTransform(209.4, 3.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahPIgBgCIAAgDIAAgBIADgBIAKAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABIAUBEIABAAIAVhEIACgEIADgBIAKAAIAEABIACAEIAVBEIABAAIAThEQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAABIAAADIAAACIgaBPIgDAEIgDABg");
        this.shape_42.setTransform(191.2, 3.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_43.setTransform(178.2, 3.9);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_44.setTransform(169.9, 3.8);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLABgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_45.setTransform(154.8, 3.9);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg7AAQAAAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFAAAHIAxAAIAAAAg");
        this.shape_46.setTransform(139.3, 3.9);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#000000").s().p("AgFAuIgEgBIgCgEIgehPIAAgCIgBgCQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAJAAIAEABIACAEIAXBEIABAAIAYhEIACgEIAEgBIAJAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIgBACIAAACIgeBPIgDAEIgDABg");
        this.shape_47.setTransform(129.5, 3.9);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_48.setTransform(119.2, 3.9);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#000000").s().p("AA4AvIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwQABgHgCgGQgBgGgEgDQgEgDgIAAQgHAAgFADQgFAEgCAFIgEAMIAAAMIAAAlIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwIgBgNQgCgGgEgDQgEgDgHAAQgKgBgFAFQgGAEgCAIQgCAIAAAIIAAApIgBAEIgEABIgHAAIgEgBIgBgEIAAhQIABgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAFIAAAIIAAAAIAGgHQAEgEAFgDQAFgCAHAAQANAAAHAFQAGAFACAIIABAAIAGgIQAEgEAGgDQAGgDAIAAQALAAAFADQAHAEAEAGQADAFAAAIIABANIAAAxIgBAEIgDABg");
        this.shape_49.setTransform(105.4, 3.8);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_50.setTransform(86.4, 3.9);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_51.setTransform(77.4, 2.5);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("AgCAVIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIgBgUIAAgHIAAgFIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAJAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIAAAFIAAAHIgBAUIgBAEIgDABg");
        this.shape_52.setTransform(66.5, -2.4);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_53.setTransform(59.9, 1.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_54.setTransform(48.9, 3.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_55.setTransform(41, 1.6);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgeBBIgEgBIgBgEIAAh2IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAABqIAwAAIAEABIABAEIAAAHIgBAEIgEABg");
        this.shape_56.setTransform(34.7, 2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AgCAVIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIgBgUIAAgHIAAgFIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAJAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIAAAFIAAAHIgBAUIgBAEIgDABg");
        this.shape_57.setTransform(27, -2.4);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_58.setTransform(15.3, 1.5);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_59.setTransform(5.8, 3.9);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_60.setTransform(-0.8, 1.6);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_61.setTransform(-5, 1.6);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_62.setTransform(-12.2, 3.9);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_63.setTransform(-27.3, 3.8);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgEgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_64.setTransform(-38.8, 3.9);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_65.setTransform(-48.1, 3.9);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_66.setTransform(-63.2, 4);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_67.setTransform(-74.4, 3.9);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#000000").s().p("AgUBGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIABgCIAAgCIAQgnIgihYIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAJAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgCADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAg");
        this.shape_68.setTransform(-84.6, 6.3);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#000000").s().p("AgHAUIgBAAIgBgBIABgBIABgBIAEgHIADgHQgFAAgDgDQgDgDAAgEQAAgFADgEQADgEAFAAIAFACQADABACADIACAJQAAAFgCAEIgGAJQgEAFgEACIgBAAIgCAAg");
        this.shape_69.setTransform(-97, 8.3);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_70.setTransform(-105.2, 3.8);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_71.setTransform(-116.4, 3.9);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_72.setTransform(-124.3, 1.6);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_73.setTransform(-130, 2.5);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgKQABgJAEgGQAEgFAHgDQAHgDAIAAIAKABIAJADIADACIAAADIgBAHIgBACIgCAAIgEAAIgGgCIgIgBQgGAAgDADQgFACAAAFQAAAFAGADQAEAEAJAFIANAFQAFAFACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_74.setTransform(-137.1, 3.9);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAxAAIAAAAg");
        this.shape_75.setTransform(-146.1, 3.9);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_76.setTransform(-156.8, 4);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AAcBGIgGAAIgEgBIgBgEIAAg2QgGAIgIAEQgHADgJAAQgOAAgKgHQgJgHgEgLQgEgKgBgNQABgJACgIQADgJAEgGQAGgHAIgEQAHgEALAAQAJAAAIAEQAHADAFAIIABAAIAAgIQAAAAABgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAAEIAAByIALgIIACgBIACgBQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABIADAEIABABIAAACIgBACIgCACIgTANIgCABIgDAAgAgZgyQgGAFgDAIQgDAHAAAJQABAHACAIQADAHAFAFQAGAGAJAAQAJAAAGgFQAGgEAEgGQADgIAAgJQAAgRgIgJQgIgJgMAAQgIAAgGAFg");
        this.shape_77.setTransform(-167.1, 6.1);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_78.setTransform(-184.3, 1.5);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_79.setTransform(-193.8, 3.9);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQgBgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQgBAHADAIQADAIAFAFQAGAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_80.setTransform(-204.1, 3.9);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFgBAHIAyAAIAAAAg");
        this.shape_81.setTransform(-214.4, 3.9);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_82.setTransform(226.6, -20.7);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_83.setTransform(218.7, -22.8);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_84.setTransform(206.3, -20.6);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_85.setTransform(197.2, -20.6);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_86.setTransform(187.2, -20.7);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_87.setTransform(176, -20.6);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#000000").s().p("AgHAUIgBAAIgBgBIABgBIABgBIAEgIIADgGQgFAAgDgDQgDgDAAgFQAAgEADgEQADgEAFABIAFABQADABACADIACAIQAAAGgCAEIgGAKQgEADgEACIgBABIgCAAg");
        this.shape_88.setTransform(162.7, -16.1);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_89.setTransform(156.7, -22);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_90.setTransform(147.8, -20.5);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#000000").s().p("AgkBBIgDgBIgCgEIAAh3IACgDQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAdAAQALAAALADQAJADAHAHQAHAHAAANQAAANgHAHQgHAHgMADQAOABAIAIQAHAJABANQgBARgNAJQgMAJgYAAgAgXAyIAOAAQAPAAAJgFQAHgFABgLQAAgMgJgGQgJgFgPAAIgNAAgAgXgIIALAAQAJAAAGgCQAIgBAFgFQAEgEAAgKQAAgJgGgFQgHgFgKAAIgUAAg");
        this.shape_91.setTransform(136.9, -22.5);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAGgEADQgDADgFAAQgEAAgDgDg");
        this.shape_92.setTransform(123.3, -17);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAAKAMQAMAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_93.setTransform(115.7, -20.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_94.setTransform(108.7, -22.9);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_95.setTransform(103.1, -22.8);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_96.setTransform(97.4, -22);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQgBgJADgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAgJIAAAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQgBAHADAIQADAIAFAFQAHAGAIAAQAIAAAGgFQAHgEAEgHQADgIAAgKQAAgJgDgIQgFgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_97.setTransform(83.1, -20.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgOAFgKQAFgKAKgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg7AAQAAAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGAAAGIAwAAIAAAAg");
        this.shape_98.setTransform(67.6, -20.6);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#000000").s().p("AgFAuIgEgBIgBgEIgfhQIAAgCIgBgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAJAAIAEABIACADIAXBGIABAAIAYhGIACgDIAEgBIAJAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIgBABIAAACIgeBQIgDAEIgDABg");
        this.shape_99.setTransform(57.9, -20.6);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_100.setTransform(47.6, -20.6);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#000000").s().p("AA4AvIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgvQABgIgBgGQgCgGgEgEQgEgCgIAAQgHAAgFADQgEAEgDAFIgEANIgBAKIAAAmIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgvIgCgOQgBgGgEgEQgEgCgHAAQgJAAgGAEQgGAFgCAHQgCAIAAAJIAAAoIgBAEIgEABIgIAAIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABIABADIAAAIIAAAAIAFgHQAFgDAFgCQAFgDAIAAQAMAAAHAFQAGAGACAHIABAAIAGgJQAEgEAGgCQAGgDAIAAQALAAAFAEQAHADADAGQAEAGABAGIABAOIAAAxIgBAEIgEABg");
        this.shape_101.setTransform(33.8, -20.7);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_102.setTransform(14.8, -20.5);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_103.setTransform(3.6, -20.6);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#000000").s().p("AgVBHQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgBIAAgCIAQgmIgihZIAAgCIgBgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAKAAQABABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIgBACIAAACIgvCBIgCADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAg");
        this.shape_104.setTransform(-6.6, -18.1);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_105.setTransform(-22, -20.7);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_106.setTransform(-32.6, -20.6);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_107.setTransform(-43.3, -23);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#000000").s().p("AAcAuIgDgBIgCgEIgWhFIgVBFIgCAEIgEABIgLAAIgDgBIgCgEIgahQIgBgCIAAgBIAAgCIADgBIAKAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAUBGIABAAIAVhGIACgDIADgBIAKAAIAEABIACADIAVBGIABAAIAThGQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAIAAIADABIAAACIAAABIAAACIgaBQIgDAEIgDABg");
        this.shape_108.setTransform(-56.3, -20.6);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_109.setTransform(-73.9, -20.6);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_110.setTransform(-83, -20.6);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_111.setTransform(-92.9, -20.7);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_112.setTransform(-104.4, -20.6);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_113.setTransform(-115.3, -23);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_114.setTransform(-124.8, -20.6);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgHAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgDAIQgEAHAAAIQABAHACAIQADAIAFAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgEgIgGgEQgHgEgIAAQgIAAgGAFg");
        this.shape_115.setTransform(-140.2, -20.6);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgLgHgGQgGgHgLAAQgGAAgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_116.setTransform(-155.7, -20.6);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgHIABgDIADgBIAEACIAGACQAEABAGAAIAGgBQAEAAACgDQADgDAAgEQAAgEgCgDQgCgCgEgCIgKgGQgKgFgGgFQgGgGAAgLQAAgIAEgFQAEgHAHgCQAHgDAIAAIAJABIAKADIAEACIAAADIgCAGIgBADIgCAAIgEgBIgGgCIgJAAQgFAAgEACQgDADAAAEQAAAFAEAEQAFAEAKAFIAMAGQAEADADAGQADAEgBAHQAAAKgFAGQgFAGgIADQgHACgHAAIgMgBg");
        this.shape_117.setTransform(-164.7, -20.6);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_118.setTransform(-174.2, -20.5);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_119.setTransform(-190.5, -20.5);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_120.setTransform(-201.7, -20.6);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#000000").s().p("AgEBBIgDgBIgBgFIAAgyIgvhDIgBgCIgBgBIACgCIABgBIALAAIAFABIADADIAjA2IAkg2IADgDIAEgBIAMAAIABABIABACIAAABIgBACIgvBDIAAAyIgBAFIgEABg");
        this.shape_121.setTransform(-213.4, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_121 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_122.setTransform(-224.7, -30.5);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_123.setTransform(-224.7, 1.7);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_124.setTransform(15.9, -28.4);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_125.setTransform(13.7, 0.4);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_126.setTransform(15.2, 0.4);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_127.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_127 }, { t: this.shape_126 }, { t: this.shape_125 }, { t: this.shape_124 }, { t: this.shape_123 }, { t: this.shape_122 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclipcopy3, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.5), null);


    (lib.HM_mcfeedbackclipcopy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "standard": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgIAJQgDgDAAgGQAAgEADgEQADgDAFAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgFAAgDgDg");
        this.shape.setTransform(152.1, 31.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_1.setTransform(146.8, 28.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgLAKgGQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgFAAIg6AAQgBAJAFAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMgBQgGABgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_2.setTransform(137.6, 28.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgEgLgBgNQABgJACgIQACgIAFgGQAGgHAIgEQAHgEALAAQAJAAAIAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgHAAIgEgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQABAHACAIQACAIAGAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgKgDgIQgEgHgGgEQgHgEgIAAQgIAAgGAFg");
        this.shape_3.setTransform(126.6, 26);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_4.setTransform(118.6, 28.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_5.setTransform(108.9, 28.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_6.setTransform(92.5, 28.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_7.setTransform(84.7, 26.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_8.setTransform(72.2, 28.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_9.setTransform(64.4, 28.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLABgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_10.setTransform(54.4, 28.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIACgEIACgBIAEABIAGADQAEACAGAAIAHgBQADgCADgCQACgDAAgEQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgLQABgIAEgFQAEgGAHgDQAHgDAIAAIAKABIAKADIACACIAAAEIgBAFIgBADIgCABIgEgBIgGgDIgIgBQgGAAgDAEQgFACAAAEQAAAGAGADQAEAEAJAEIANAHQAFAEACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_11.setTransform(40.1, 28.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgLAKgGQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgEAAIg7AAQAAAJAFAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMgBQgGABgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_12.setTransform(31.1, 28.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwQAAgHgBgGQgCgGgEgDQgEgEgHAAQgIABgFADQgEAEgDAGIgEALIgBALIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwIgBgNQgBgGgEgDQgEgEgIAAQgIABgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgGQAFgEAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgIQAEgEAGgDQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_13.setTransform(17.8, 28.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_14.setTransform(7.3, 26.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_15.setTransform(1.6, 26.9);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQAKgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_16.setTransform(-11.8, 28.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_17.setTransform(-22.5, 25.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_18.setTransform(-31.5, 26.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_19.setTransform(-43.4, 26.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_20.setTransform(-52.5, 28.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_21.setTransform(-63.4, 25.9);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_22.setTransform(-72.4, 26.9);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_23.setTransform(-86.5, 28.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAAgFIACgEIACgBIAEABIAGADQAEACAGAAIAGgBQAEgCADgCQACgDAAgEQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAIAAIAJABIAKADIAEACIAAAEIgCAFIgBADIgCABIgEgBIgGgDIgJgBQgFAAgDAEQgEACgBAEQABAGAEADQAFAEAKAEIAMAHQAEAEADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_24.setTransform(-96, 28.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_25.setTransform(-109.1, 25.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_26.setTransform(-118.5, 28.3);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgEgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_27.setTransform(-128.8, 28.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_28.setTransform(-136.8, 28.2);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgOAFgKQAFgLAKgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg7AAQAAAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGAAAGIAwAAIAAAAg");
        this.shape_29.setTransform(-151.1, 28.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_30.setTransform(-161.8, 25.9);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_31.setTransform(-170.8, 26.9);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_32.setTransform(-184.8, 28.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_33.setTransform(-193.9, 26.9);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_34.setTransform(-202.7, 28.2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_35.setTransform(-213.9, 28.3);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgKQAAgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIAEACIAAADIgCAHIgBACIgCAAIgEAAIgGgCIgJgBQgFAAgDADQgEACgBAFQABAFAFADQAEAEAKAFIAMAFQAEAFADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_36.setTransform(202.8, 3.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_37.setTransform(194.9, 1.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_38.setTransform(185.4, 3.9);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_39.setTransform(175.4, 3.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_40.setTransform(167.9, 1.6);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_41.setTransform(160.7, 3.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQAKgGANAAQATAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_42.setTransform(146.1, 3.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_43.setTransform(135.4, 1.5);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAHAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgFAAIgCAAQgPAAgHgIg");
        this.shape_44.setTransform(126.4, 2.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIACgBQADAAADACIAKAEQAHABAJAAQAOAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKADgHQADgJAFgHQAFgGAIgEQAHgEALgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAEIAABaQABAWgMALQgNALgWAAIgKgBgAgOgzQgGAEgDAIQgDAIAAAJQABAHACAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_45.setTransform(112.1, 6.2);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_46.setTransform(100.9, 3.9);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_47.setTransform(92.9, 3.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AgDBHQgNAAgJgHQgJgHgFgLQgFgLABgNQAAgJACgIQADgIAFgGQAFgHAHgEQAIgEAKAAQAKAAAHAEQAIADAGAIIAAAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAACAIgCAEIgDABIgHAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgIIgBAAQgGAIgIADQgHAEgHAAIgDAAgAgOgFQgGAFgDAHQgCAHAAAJQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgKgEgIQgDgHgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_48.setTransform(82.9, 1.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_49.setTransform(66.8, 3.9);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_50.setTransform(57.8, 2.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_51.setTransform(46.7, 3.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAxAAIAAAAg");
        this.shape_52.setTransform(37.5, 3.9);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_53.setTransform(26.8, 1.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_54.setTransform(17.8, 2.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_55.setTransform(9.5, 3.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgNBGIgKgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIAAgHIABgCIACgBQADAAAEACIAJAEQAGABAKAAQAOAAAGgHQAIgJAAgPIAAgTIAAAAQgGAJgIADQgIADgJABQgNgBgJgGQgJgGgFgKQgEgKAAgNQAAgKACgHQADgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAIADAFAHIABAAIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAABaQgBAWgMALQgLALgYAAIgKgBgAgOgzQgGAEgDAIQgCAIAAAJQgBAHADAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_56.setTransform(-1.5, 6.2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_57.setTransform(-12.4, 3.9);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AgFA2QgHgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_58.setTransform(-21.5, 2.5);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_59.setTransform(-33.9, 1.5);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_60.setTransform(-42.1, 3.8);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_61.setTransform(-51.8, 3.9);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#000000").s().p("AAhBBQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgbhlIAAAAIgYBlQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgOAAIgDgBIgCgEIgjh2IgBgBIAAgCQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIALAAIADABIACAEIAdBqIABAAIAZhqIABgEIAEgBIANAAIAEABIABAEIAbBqIABAAIAbhqIACgEIADgBIALAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAABIAAACIgiB2IgCADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
        this.shape_62.setTransform(-66.5, 2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgDgDg");
        this.shape_63.setTransform(-83.1, 7.5);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_64.setTransform(-91.3, 3.8);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFgBAHIAyAAIAAAAg");
        this.shape_65.setTransform(-101.9, 3.9);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_66.setTransform(-112.1, 3.9);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_67.setTransform(-119.9, 3.8);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIADgBQACAAADACIAKAEQAGABAJAAQAPAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKAEgHQACgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABAEIAABaQABAWgMALQgMALgXAAIgKgBgAgOgzQgGAEgCAIQgEAIAAAJQABAHACAHQACAHAGAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgEgIgHgEQgGgEgIgBQgIABgGAFg");
        this.shape_68.setTransform(-129.9, 6.2);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_69.setTransform(-145.4, 3.9);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_70.setTransform(-156.1, 1.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_71.setTransform(-165.1, 2.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_72.setTransform(-176.2, 3.8);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_73.setTransform(-185.3, 3.9);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_74.setTransform(-196, 1.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_75.setTransform(-205, 2.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_76.setTransform(-213.9, 3.9);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_77.setTransform(194, -20.6);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_78.setTransform(183.3, -23);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_79.setTransform(174.3, -22);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgFgLAAgNQAAgJADgIQACgIAFgGQAFgHAJgEQAHgEALAAQAIAAAJAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgIAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQAAAHADAIQACAIAHAFQAFAGAJAAQAIAAAHgFQAGgEADgHQAEgIAAgKQAAgKgEgIQgEgHgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_80.setTransform(160, -22.9);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_81.setTransform(149.1, -20.7);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgCAHAAAIQAAAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_82.setTransform(137.7, -20.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgHIACgDIACgBIAEACIAGACQAEABAGAAIAHgBQADAAADgDQACgDAAgEQAAgEgBgDQgCgCgFgCIgKgGQgKgFgGgFQgGgGgBgLQABgIAEgFQAEgHAHgCQAHgDAIAAIAKABIAKADIACACIAAADIgBAGIgBADIgCAAIgEgBIgGgCIgIAAQgGAAgDACQgFADAAAEQAAAFAGAEQAEAEAJAFIANAGQAFADACAGQACAEABAHQgBAKgFAGQgFAGgHADQgJACgGAAIgLgBg");
        this.shape_83.setTransform(123.3, -20.6);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_84.setTransform(114.4, -20.6);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_85.setTransform(107.4, -22.9);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_86.setTransform(101.8, -22.8);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_87.setTransform(96.1, -22);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABgBAAAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_88.setTransform(83.7, -23);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_89.setTransform(74.2, -20.6);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_90.setTransform(64.2, -20.6);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_91.setTransform(56.7, -22.9);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_92.setTransform(49.5, -20.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKALgHQAKgGALAAQAUAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAIgDIAFgBIACAAIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgFADQgGADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_93.setTransform(34.9, -20.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_94.setTransform(24.2, -20.5);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_95.setTransform(16.8, -22.9);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#000000").s().p("AgNBDQgJgEgFgHIgBAAIAAAIIgBAEIgDABIgIAAIgCgBIgBgEIAAiAIABgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEIAAA3IABAAQAGgIAHgEQAIgDAJAAQAOAAAJAHQAIAGAFALQAFAKAAAOQAAAMgFALQgFAKgIAHQgJAHgOAAQgJAAgIgEgAgNgGQgHAFgDAGQgEAIAAAJQAAARAIAJQAIAJAMAAQAIAAAGgFQAGgEADgIQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgFgJAAQgIAAgGAEg");
        this.shape_96.setTransform(8.2, -22.9);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_97.setTransform(-7.9, -20.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_98.setTransform(-18.6, -23);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgCgEIAAgEIACgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQADAFAIAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_99.setTransform(-27.6, -22);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_100.setTransform(-41, -20.6);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#000000").s().p("AgFAuIgEgBIgBgEIgfhQIgBgCIAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAKAAIADABIACADIAXBGIABAAIAYhGIACgDIADgBIAJAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAABIgBACIgfBQIgCAEIgDABg");
        this.shape_101.setTransform(-50.8, -20.6);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_102.setTransform(-61.1, -20.6);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgvQAAgIgBgGQgCgGgEgEQgEgCgHAAQgIAAgFADQgEAEgDAFIgEANIgBAKIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgvIgBgOQgBgGgEgEQgEgCgIAAQgIAAgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgHQAFgDAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgJQAEgEAGgCQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_103.setTransform(-74.9, -20.7);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_104.setTransform(-93.8, -20.7);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_105.setTransform(-105.3, -20.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_106.setTransform(-114.6, -20.6);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_107.setTransform(-129.7, -20.5);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_108.setTransform(-140.9, -20.6);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#000000").s().p("AgUBHQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIABgBIAAgCIAQgmIgihZIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBABAAIAKAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgCADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
        this.shape_109.setTransform(-151.1, -18.1);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#000000").s().p("AgFBHIgDgBIgBgEIAAhIIgRAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEIAAgEIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIARAAIAAgRQAAgQAHgIQAHgJAPAAIAFABIAEAAIADACIAAACIAAAHIgBADIgCABIgEgBIgFgBQgHAAgDAFQgEAGAAALIAAAOIAVAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAEIgBAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAABIIgBAEIgDABg");
        this.shape_110.setTransform(-164.4, -23.1);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_111.setTransform(-173.3, -20.6);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_112.setTransform(-189.1, -20.6);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_113.setTransform(-199.8, -20.7);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#000000").s().p("AggA7QgNgIgIgPQgHgPgBgVQABgUAHgPQAIgPANgIQAOgIASAAQATAAAOAIQAOAIAHAPQAHAPABAUQgBAVgHAPQgHAPgOAIQgOAIgTAAQgSAAgOgIgAgXgqQgJAGgFALQgFAMAAANQAAAOAFAMQAFALAJAHQAJAGAOAAQAOAAAKgGQAJgHAFgLQAFgMAAgOQAAgNgFgMQgFgLgJgGQgKgHgOAAQgOAAgJAHg");
        this.shape_114.setTransform(-212.4, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_115.setTransform(-224.7, -30.5);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_116.setTransform(-224.7, 1.7);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_117.setTransform(15.9, -28.4);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_118.setTransform(13.7, 0.4);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_119.setTransform(15.2, 0.4);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_120.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclipcopy2, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.5), null);


    (lib.HM_mcfeedbackclipcopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "standard": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgIAJQgDgDAAgGQAAgEADgEQADgDAFAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgFAAgDgDg");
        this.shape.setTransform(152.1, 31.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_1.setTransform(146.8, 28.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgLAKgGQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgFAAIg6AAQgBAJAFAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMgBQgGABgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_2.setTransform(137.6, 28.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgEgLgBgNQABgJACgIQACgIAFgGQAGgHAIgEQAHgEALAAQAJAAAIAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgHAAIgEgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQABAHACAIQACAIAGAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgKgDgIQgEgHgGgEQgHgEgIAAQgIAAgGAFg");
        this.shape_3.setTransform(126.6, 26);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_4.setTransform(118.6, 28.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_5.setTransform(108.9, 28.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_6.setTransform(92.5, 28.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_7.setTransform(84.7, 26.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_8.setTransform(72.2, 28.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_9.setTransform(64.4, 28.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLABgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_10.setTransform(54.4, 28.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIACgEIACgBIAEABIAGADQAEACAGAAIAHgBQADgCADgCQACgDAAgEQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgLQABgIAEgFQAEgGAHgDQAHgDAIAAIAKABIAKADIACACIAAAEIgBAFIgBADIgCABIgEgBIgGgDIgIgBQgGAAgDAEQgFACAAAEQAAAGAGADQAEAEAJAEIANAHQAFAEACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_11.setTransform(40.1, 28.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgLAKgGQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgEAAIg7AAQAAAJAFAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMgBQgGABgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_12.setTransform(31.1, 28.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwQAAgHgBgGQgCgGgEgDQgEgEgHAAQgIABgFADQgEAEgDAGIgEALIgBALIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwIgBgNQgBgGgEgDQgEgEgIAAQgIABgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgGQAFgEAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgIQAEgEAGgDQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_13.setTransform(17.8, 28.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_14.setTransform(7.3, 26.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_15.setTransform(1.6, 26.9);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQAKgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_16.setTransform(-11.8, 28.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_17.setTransform(-22.5, 25.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_18.setTransform(-31.5, 26.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_19.setTransform(-43.4, 26.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_20.setTransform(-52.5, 28.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_21.setTransform(-63.4, 25.9);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_22.setTransform(-72.4, 26.9);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_23.setTransform(-86.5, 28.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAAgFIACgEIACgBIAEABIAGADQAEACAGAAIAGgBQAEgCADgCQACgDAAgEQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAIAAIAJABIAKADIAEACIAAAEIgCAFIgBADIgCABIgEgBIgGgDIgJgBQgFAAgDAEQgEACgBAEQABAGAEADQAFAEAKAEIAMAHQAEAEADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_24.setTransform(-96, 28.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_25.setTransform(-109.1, 25.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_26.setTransform(-118.5, 28.3);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgEgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_27.setTransform(-128.8, 28.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_28.setTransform(-136.8, 28.2);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgOAFgKQAFgLAKgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg7AAQAAAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGAAAGIAwAAIAAAAg");
        this.shape_29.setTransform(-151.1, 28.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_30.setTransform(-161.8, 25.9);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_31.setTransform(-170.8, 26.9);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_32.setTransform(-184.8, 28.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_33.setTransform(-193.9, 26.9);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_34.setTransform(-202.7, 28.2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_35.setTransform(-213.9, 28.3);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgKQAAgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIAEACIAAADIgCAHIgBACIgCAAIgEAAIgGgCIgJgBQgFAAgDADQgEACgBAFQABAFAFADQAEAEAKAFIAMAFQAEAFADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_36.setTransform(202.8, 3.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_37.setTransform(194.9, 1.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_38.setTransform(185.4, 3.9);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_39.setTransform(175.4, 3.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_40.setTransform(167.9, 1.6);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_41.setTransform(160.7, 3.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQAKgGANAAQATAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_42.setTransform(146.1, 3.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_43.setTransform(135.4, 1.5);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAHAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgFAAIgCAAQgPAAgHgIg");
        this.shape_44.setTransform(126.4, 2.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIACgBQADAAADACIAKAEQAHABAJAAQAOAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKADgHQADgJAFgHQAFgGAIgEQAHgEALgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAEIAABaQABAWgMALQgNALgWAAIgKgBgAgOgzQgGAEgDAIQgDAIAAAJQABAHACAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_45.setTransform(112.1, 6.2);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_46.setTransform(100.9, 3.9);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_47.setTransform(92.9, 3.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AgDBHQgNAAgJgHQgJgHgFgLQgFgLABgNQAAgJACgIQADgIAFgGQAFgHAHgEQAIgEAKAAQAKAAAHAEQAIADAGAIIAAAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAACAIgCAEIgDABIgHAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgIIgBAAQgGAIgIADQgHAEgHAAIgDAAgAgOgFQgGAFgDAHQgCAHAAAJQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgKgEgIQgDgHgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_48.setTransform(82.9, 1.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_49.setTransform(66.8, 3.9);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_50.setTransform(57.8, 2.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_51.setTransform(46.7, 3.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAxAAIAAAAg");
        this.shape_52.setTransform(37.5, 3.9);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_53.setTransform(26.8, 1.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_54.setTransform(17.8, 2.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_55.setTransform(9.5, 3.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgNBGIgKgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIAAgHIABgCIACgBQADAAAEACIAJAEQAGABAKAAQAOAAAGgHQAIgJAAgPIAAgTIAAAAQgGAJgIADQgIADgJABQgNgBgJgGQgJgGgFgKQgEgKAAgNQAAgKACgHQADgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAIADAFAHIABAAIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAABaQgBAWgMALQgLALgYAAIgKgBgAgOgzQgGAEgDAIQgCAIAAAJQgBAHADAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_56.setTransform(-1.5, 6.2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_57.setTransform(-12.4, 3.9);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AgFA2QgHgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_58.setTransform(-21.5, 2.5);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_59.setTransform(-33.9, 1.5);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_60.setTransform(-42.1, 3.8);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_61.setTransform(-51.8, 3.9);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#000000").s().p("AAhBBQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgbhlIAAAAIgYBlQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgOAAIgDgBIgCgEIgjh2IgBgBIAAgCQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIALAAIADABIACAEIAdBqIABAAIAZhqIABgEIAEgBIANAAIAEABIABAEIAbBqIABAAIAbhqIACgEIADgBIALAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAABIAAACIgiB2IgCADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
        this.shape_62.setTransform(-66.5, 2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgDgDg");
        this.shape_63.setTransform(-83.1, 7.5);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_64.setTransform(-91.3, 3.8);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFgBAHIAyAAIAAAAg");
        this.shape_65.setTransform(-101.9, 3.9);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_66.setTransform(-112.1, 3.9);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_67.setTransform(-119.9, 3.8);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIADgBQACAAADACIAKAEQAGABAJAAQAPAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKAEgHQACgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABAEIAABaQABAWgMALQgMALgXAAIgKgBgAgOgzQgGAEgCAIQgEAIAAAJQABAHACAHQACAHAGAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgEgIgHgEQgGgEgIgBQgIABgGAFg");
        this.shape_68.setTransform(-129.9, 6.2);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_69.setTransform(-145.4, 3.9);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_70.setTransform(-156.1, 1.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_71.setTransform(-165.1, 2.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_72.setTransform(-176.2, 3.8);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_73.setTransform(-185.3, 3.9);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_74.setTransform(-196, 1.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_75.setTransform(-205, 2.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_76.setTransform(-213.9, 3.9);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_77.setTransform(194, -20.6);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_78.setTransform(183.3, -23);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_79.setTransform(174.3, -22);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgFgLAAgNQAAgJADgIQACgIAFgGQAFgHAJgEQAHgEALAAQAIAAAJAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgIAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQAAAHADAIQACAIAHAFQAFAGAJAAQAIAAAHgFQAGgEADgHQAEgIAAgKQAAgKgEgIQgEgHgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_80.setTransform(160, -22.9);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_81.setTransform(149.1, -20.7);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgCAHAAAIQAAAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_82.setTransform(137.7, -20.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgHIACgDIACgBIAEACIAGACQAEABAGAAIAHgBQADAAADgDQACgDAAgEQAAgEgBgDQgCgCgFgCIgKgGQgKgFgGgFQgGgGgBgLQABgIAEgFQAEgHAHgCQAHgDAIAAIAKABIAKADIACACIAAADIgBAGIgBADIgCAAIgEgBIgGgCIgIAAQgGAAgDACQgFADAAAEQAAAFAGAEQAEAEAJAFIANAGQAFADACAGQACAEABAHQgBAKgFAGQgFAGgHADQgJACgGAAIgLgBg");
        this.shape_83.setTransform(123.3, -20.6);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_84.setTransform(114.4, -20.6);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_85.setTransform(107.4, -22.9);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_86.setTransform(101.8, -22.8);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_87.setTransform(96.1, -22);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABgBAAAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_88.setTransform(83.7, -23);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_89.setTransform(74.2, -20.6);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_90.setTransform(64.2, -20.6);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_91.setTransform(56.7, -22.9);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_92.setTransform(49.5, -20.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKALgHQAKgGALAAQAUAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAIgDIAFgBIACAAIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgFADQgGADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_93.setTransform(34.9, -20.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_94.setTransform(24.2, -20.5);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_95.setTransform(16.8, -22.9);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#000000").s().p("AgNBDQgJgEgFgHIgBAAIAAAIIgBAEIgDABIgIAAIgCgBIgBgEIAAiAIABgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEIAAA3IABAAQAGgIAHgEQAIgDAJAAQAOAAAJAHQAIAGAFALQAFAKAAAOQAAAMgFALQgFAKgIAHQgJAHgOAAQgJAAgIgEgAgNgGQgHAFgDAGQgEAIAAAJQAAARAIAJQAIAJAMAAQAIAAAGgFQAGgEADgIQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgFgJAAQgIAAgGAEg");
        this.shape_96.setTransform(8.2, -22.9);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_97.setTransform(-7.9, -20.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_98.setTransform(-18.6, -23);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgCgEIAAgEIACgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQADAFAIAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_99.setTransform(-27.6, -22);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_100.setTransform(-41, -20.6);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#000000").s().p("AgFAuIgEgBIgBgEIgfhQIgBgCIAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAKAAIADABIACADIAXBGIABAAIAYhGIACgDIADgBIAJAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAABIgBACIgfBQIgCAEIgDABg");
        this.shape_101.setTransform(-50.8, -20.6);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_102.setTransform(-61.1, -20.6);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgvQAAgIgBgGQgCgGgEgEQgEgCgHAAQgIAAgFADQgEAEgDAFIgEANIgBAKIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgvIgBgOQgBgGgEgEQgEgCgIAAQgIAAgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgHQAFgDAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgJQAEgEAGgCQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_103.setTransform(-74.9, -20.7);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_104.setTransform(-93.8, -20.7);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_105.setTransform(-105.3, -20.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_106.setTransform(-114.6, -20.6);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_107.setTransform(-129.7, -20.5);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_108.setTransform(-140.9, -20.6);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#000000").s().p("AgUBHQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIABgBIAAgCIAQgmIgihZIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBABAAIAKAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgCADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
        this.shape_109.setTransform(-151.1, -18.1);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#000000").s().p("AgFBHIgDgBIgBgEIAAhIIgRAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEIAAgEIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIARAAIAAgRQAAgQAHgIQAHgJAPAAIAFABIAEAAIADACIAAACIAAAHIgBADIgCABIgEgBIgFgBQgHAAgDAFQgEAGAAALIAAAOIAVAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAEIgBAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAABIIgBAEIgDABg");
        this.shape_110.setTransform(-164.4, -23.1);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_111.setTransform(-173.3, -20.6);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_112.setTransform(-189.1, -20.6);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_113.setTransform(-199.8, -20.7);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#000000").s().p("AggA7QgNgIgIgPQgHgPgBgVQABgUAHgPQAIgPANgIQAOgIASAAQATAAAOAIQAOAIAHAPQAHAPABAUQgBAVgHAPQgHAPgOAIQgOAIgTAAQgSAAgOgIgAgXgqQgJAGgFALQgFAMAAANQAAAOAFAMQAFALAJAHQAJAGAOAAQAOAAAKgGQAJgHAFgLQAFgMAAgOQAAgNgFgMQgFgLgJgGQgKgHgOAAQgOAAgJAHg");
        this.shape_114.setTransform(-212.4, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_115.setTransform(-224.7, -30.5);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_116.setTransform(-224.7, 1.7);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_117.setTransform(15.9, -28.4);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_118.setTransform(13.7, 0.4);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_119.setTransform(15.2, 0.4);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_120.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclipcopy, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.5), null);


    (lib.HM_mcfeedbackclip = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "standard": 0 });

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // speaker
        this.instance = new lib.HM_harSpeakerbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-259.1, -38.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // text
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgIAJQgDgDAAgGQAAgEADgEQADgDAFAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgFAAgDgDg");
        this.shape.setTransform(152.1, 31.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_1.setTransform(146.8, 28.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgLAKgGQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgFAAIg6AAQgBAJAFAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMgBQgGABgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_2.setTransform(137.6, 28.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgEgLgBgNQABgJACgIQACgIAFgGQAGgHAIgEQAHgEALAAQAJAAAIAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgHAAIgEgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQABAHACAIQACAIAGAFQAGAGAJAAQAIAAAHgFQAGgEAEgHQADgIAAgKQAAgKgDgIQgEgHgGgEQgHgEgIAAQgIAAgGAFg");
        this.shape_3.setTransform(126.6, 26);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_4.setTransform(118.6, 28.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_5.setTransform(108.9, 28.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_6.setTransform(92.5, 28.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_7.setTransform(84.7, 26.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_8.setTransform(72.2, 28.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_9.setTransform(64.4, 28.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLABgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgDAHAAAIQABAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_10.setTransform(54.4, 28.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFIACgEIACgBIAEABIAGADQAEACAGAAIAHgBQADgCADgCQACgDAAgEQAAgEgBgCQgCgDgFgDIgKgFQgKgEgGgGQgGgGgBgLQABgIAEgFQAEgGAHgDQAHgDAIAAIAKABIAKADIACACIAAAEIgBAFIgBADIgCABIgEgBIgGgDIgIgBQgGAAgDAEQgFACAAAEQAAAGAGADQAEAEAJAEIANAHQAFAEACAEQACAFABAHQgBAKgFAGQgFAGgHACQgJADgGAAIgLgBg");
        this.shape_11.setTransform(40.1, 28.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgLAKgGQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgEAAIg7AAQAAAJAFAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMgBQgGABgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_12.setTransform(31.1, 28.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgwQAAgHgBgGQgCgGgEgDQgEgEgHAAQgIABgFADQgEAEgDAGIgEALIgBALIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgwIgBgNQgBgGgEgDQgEgEgIAAQgIABgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgGQAFgEAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgIQAEgEAGgDQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_13.setTransform(17.8, 28.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_14.setTransform(7.3, 26.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_15.setTransform(1.6, 26.9);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgLAJgGQAKgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg8AAQABAJAEAGQAEAIAHADQAHAEAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLgBQgGABgFADQgGADgDAGQgEAGgBAGIAyAAIAAAAg");
        this.shape_16.setTransform(-11.8, 28.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_17.setTransform(-22.5, 25.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_18.setTransform(-31.5, 26.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_19.setTransform(-43.4, 26.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_20.setTransform(-52.5, 28.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_21.setTransform(-63.4, 25.9);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIABADIAAAHIgBACIgCACIgFABIgEAAIgCAAQgPAAgGgIg");
        this.shape_22.setTransform(-72.4, 26.9);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_23.setTransform(-86.5, 28.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAAgFIACgEIACgBIAEABIAGADQAEACAGAAIAGgBQAEgCADgCQACgDAAgEQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAIAAIAJABIAKADIAEACIAAAEIgCAFIgBADIgCABIgEgBIgGgDIgJgBQgFAAgDAEQgEACgBAEQABAGAEADQAFAEAKAEIAMAHQAEAEADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_24.setTransform(-96, 28.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_25.setTransform(-109.1, 25.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgMAqQgLgHgGgKQgFgLAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgGgCQgEgBgHgBQgKABgGAFQgHAEgEAIQgDAHAAAIQAAAKADAHQAEAIAHAEQAHAFAKAAIAIgBIAGgCIADgBIACABIABADIAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIACIgJABQgPAAgKgGg");
        this.shape_26.setTransform(-118.5, 28.3);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLgBgMQAAgJADgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAJAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgCABIgIAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHgBAIQAAAHADAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgEgIgGgEQgGgEgIAAQgIAAgGAFg");
        this.shape_27.setTransform(-128.8, 28.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhRIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAIIABAAQAFgHAFgEQAGgEAHAAIAFABIAEAAIADACIABADIAAAHIgBACIgCABIgEgBIgGAAQgJABgFAFQgFAFgCAIQgCAIAAAIIAAAmIgBAEIgEABg");
        this.shape_28.setTransform(-136.8, 28.2);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLABgOQAAgOAFgKQAFgLAKgGQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBACgEAAIg7AAQAAAJAEAGQAEAIAHADQAHAEAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAZgIQAAgKgGgIQgHgGgLgBQgGABgGADQgFADgEAGQgDAGAAAGIAwAAIAAAAg");
        this.shape_29.setTransform(-151.1, 28.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_30.setTransform(-161.8, 25.9);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_31.setTransform(-170.8, 26.9);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_32.setTransform(-184.8, 28.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_33.setTransform(-193.9, 26.9);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgHgLAAQgJABgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_34.setTransform(-202.7, 28.2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AgWArQgLgGgHgLQgGgKgBgQQABgPAGgKQAHgKALgHQAKgFAMAAQANAAALAFQAKAHAHAKQAHAKAAAPQAAAQgHAKQgHALgKAGQgLAFgNAAQgMAAgKgFgAgPgcQgHAFgDAHQgEAIAAAIQAAAKAEAHQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgHAAgKQAAgIgEgIQgDgHgHgFQgGgEgKgBQgIABgHAEg");
        this.shape_35.setTransform(-213.9, 28.3);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgPAvIgJgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgGIACgEIACgBIAEACIAGACQAEABAGAAIAGAAQAEgCADgCQACgCAAgFQAAgEgCgCQgCgDgEgDIgKgFQgKgEgGgGQgGgGAAgKQAAgJAEgGQAEgFAHgDQAHgDAIAAIAJABIAKADIAEACIAAADIgCAHIgBACIgCAAIgEAAIgGgCIgJgBQgFAAgDADQgEACgBAFQABAFAFADQAEAEAKAFIAMAFQAEAFADAEQADAFgBAHQAAAKgFAGQgFAGgIACQgHADgHAAIgMgBg");
        this.shape_36.setTransform(202.8, 3.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_37.setTransform(194.9, 1.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_38.setTransform(185.4, 3.9);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_39.setTransform(175.4, 3.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_40.setTransform(167.9, 1.6);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AgMAqQgLgHgGgLQgFgLAAgNQAAgMAGgLQAFgLALgGQALgHAOAAIAKABIAJADIACADIAAADIAAAFIgBADIgCAAIgGgBQgEgCgHAAQgKAAgGAEQgHAFgEAIQgDAIAAAHQAAAJADAIQAEAHAHAGQAHAEAKAAIAIgBIAGgBIADgBIACAAIABACIAAAHQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgGg");
        this.shape_41.setTransform(160.7, 3.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQAKgGANAAQATAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_42.setTransform(146.1, 3.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_43.setTransform(135.4, 1.5);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQAEAFAHAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgFAAIgCAAQgPAAgHgIg");
        this.shape_44.setTransform(126.4, 2.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIACgBQADAAADACIAKAEQAHABAJAAQAOAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKADgHQADgJAFgHQAFgGAIgEQAHgEALgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAEIAABaQABAWgMALQgNALgWAAIgKgBgAgOgzQgGAEgDAIQgDAIAAAJQABAHACAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_45.setTransform(112.1, 6.2);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIACAEIAABRIgCAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgGAFgDAIQgCAHAAAIQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_46.setTransform(100.9, 3.9);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_47.setTransform(92.9, 3.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AgDBHQgNAAgJgHQgJgHgFgLQgFgLABgNQAAgJACgIQADgIAFgGQAFgHAHgEQAIgEAKAAQAKAAAHAEQAIADAGAIIAAAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAACAIgCAEIgDABIgHAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgIIgBAAQgGAIgIADQgHAEgHAAIgDAAgAgOgFQgGAFgDAHQgCAHAAAJQAAAHACAIQADAIAGAFQAFAGAJAAQAIAAAGgFQAHgEADgHQAEgIAAgKQAAgKgEgIQgDgHgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_48.setTransform(82.9, 1.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_49.setTransform(66.8, 3.9);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_50.setTransform(57.8, 2.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_51.setTransform(46.7, 3.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAFgKALgHQAKgGALAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAxAAIAAAAg");
        this.shape_52.setTransform(37.5, 3.9);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_53.setTransform(26.8, 1.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgEIAAgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_54.setTransform(17.8, 2.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_55.setTransform(9.5, 3.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgNBGIgKgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIAAgHIABgCIACgBQADAAAEACIAJAEQAGABAKAAQAOAAAGgHQAIgJAAgPIAAgTIAAAAQgGAJgIADQgIADgJABQgNgBgJgGQgJgGgFgKQgEgKAAgNQAAgKACgHQADgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAIADAFAHIABAAIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAABaQgBAWgMALQgLALgYAAIgKgBgAgOgzQgGAEgDAIQgCAIAAAJQgBAHADAHQADAHAFAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgFgIgGgEQgGgEgIgBQgIABgGAFg");
        this.shape_56.setTransform(-1.5, 6.2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_57.setTransform(-12.4, 3.9);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AgFA2QgHgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAUAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUAAIAAAsQABALADAFQADAFAIAAIAFgBIAEAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_58.setTransform(-21.5, 2.5);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_59.setTransform(-33.9, 1.5);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_60.setTransform(-42.1, 3.8);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_61.setTransform(-51.8, 3.9);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#000000").s().p("AAhBBQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgbhlIAAAAIgYBlQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgOAAIgDgBIgCgEIgjh2IgBgBIAAgCQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIALAAIADABIACAEIAdBqIABAAIAZhqIABgEIAEgBIANAAIAEABIABAEIAbBqIABAAIAbhqIACgEIADgBIALAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAABIAAACIgiB2IgCADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
        this.shape_62.setTransform(-66.5, 2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AgHAJQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgDgDg");
        this.shape_63.setTransform(-83.1, 7.5);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgwQAAgLgFgIQgFgGgLAAQgJgBgGAFQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhQIABgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAFIAAAHIABAAQAFgHAIgEQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAIIABANIAAAxIgBAEIgDABg");
        this.shape_64.setTransform(-91.3, 3.8);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAGQAEAHAHAFQAHADAHAAQAJAAAFgBIAJgEIAEgCIACABIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgKgGgIQgHgGgLAAQgGAAgGADQgFAEgEAFQgDAFgBAHIAyAAIAAAAg");
        this.shape_65.setTransform(-101.9, 3.9);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_66.setTransform(-112.1, 3.9);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_67.setTransform(-119.9, 3.8);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#000000").s().p("AgMBGIgLgBIgJgEIgDgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgHIABgCIADgBQACAAADACIAKAEQAGABAJAAQAPAAAGgHQAIgJAAgPIAAgTIgBAAQgFAJgIADQgIADgIABQgOgBgJgGQgJgGgFgKQgEgKgBgNQAAgKAEgHQACgJAFgHQAFgGAIgEQAIgEAKgBQAJABAIAEQAHADAGAHIAAAAIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABAEIAABaQABAWgMALQgMALgXAAIgKgBgAgOgzQgGAEgCAIQgEAIAAAJQABAHACAHQACAHAGAFQAGAEAJAAQANAAAHgIQAIgIAAgPQAAgKgDgHQgEgIgHgEQgGgEgIgBQgIABgGAFg");
        this.shape_68.setTransform(-129.9, 6.2);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgNAFgLQAGgKAKgHQAJgGAMAAQAUAAAKAMQAMAMAAAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQABAJAEAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIABACIAAAIIgBADIgDACIgNAEIgNABQgOAAgLgGgAAagIQgBgKgHgIQgGgGgLAAQgGAAgFADQgGAEgDAFQgEAFgBAHIAyAAIAAAAg");
        this.shape_69.setTransform(-145.4, 3.9);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_70.setTransform(-156.1, 1.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQAAALADAFQAEAFAGAAIAHgBIADAAIACAAIAAADIAAAHIAAACIgCACIgEABIgGAAIgBAAQgPAAgHgIg");
        this.shape_71.setTransform(-165.1, 2.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#000000").s().p("AgWAvIgDgBIgBgEIAAhQIABgFQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAIIABAAQAFgIAFgFQAGgDAHAAIAFAAIAEABIADABIABAEIAAAGIgBAEIgCAAIgEAAIgGgBQgJAAgFAGQgFAFgCAJQgCAHAAAIIAAAmIgBAEIgEABg");
        this.shape_72.setTransform(-176.2, 3.8);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgNAGgLQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgEAAIg7AAQAAAJAFAGQAEAHAHAFQAHADAIAAQAHAAAGgBIAIgEIAFgCIACABIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgKgHgIQgFgGgMAAQgGAAgFADQgGAEgDAFQgDAFgCAHIAyAAIAAAAg");
        this.shape_73.setTransform(-185.3, 3.9);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_74.setTransform(-196, 1.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_75.setTransform(-205, 2.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgKgBgQQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAQgHAKQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAFgDAHQgEAIAAAIQAAAJAEAIQADAHAHAFQAHAFAIAAQAKAAAGgFQAHgFADgHQAEgIAAgJQAAgIgEgIQgDgHgHgFQgGgFgKABQgIgBgHAFg");
        this.shape_76.setTransform(-213.9, 3.9);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_77.setTransform(194, -20.6);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_78.setTransform(183.3, -23);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIAUAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgUAAIAAAsQgBALAEAFQAEAFAGAAIAHgBIADAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_79.setTransform(174.3, -22);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AgCBHQgOAAgJgHQgJgHgFgLQgFgLAAgNQAAgJADgIQACgIAFgGQAFgHAJgEQAHgEALAAQAIAAAJAEQAHADAFAIIABAAIAAg3IABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAACAIgBAEIgCABIgIAAIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIgBAAQgFAIgIADQgHAEgHAAIgCAAgAgOgFQgGAFgCAHQgEAHAAAJQAAAHADAIQACAIAHAFQAFAGAJAAQAIAAAHgFQAGgEADgHQAEgIAAgKQAAgKgEgIQgEgHgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_80.setTransform(160, -22.9);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_81.setTransform(149.1, -20.7);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#000000").s().p("AgCAwQgOAAgJgHQgJgHgEgLQgGgLAAgMQABgJACgIQADgJAFgGQAFgHAIgEQAIgEALAAQAIAAAIADQAHADAFAFIABAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAEIAABRIgBAEIgEABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgJIAAAAQgGAJgHADQgIAEgHAAIgCAAgAgOgcQgFAFgEAIQgCAHAAAIQAAAHACAIQADAIAFAFQAHAGAIAAQAJAAAGgFQAGgEAEgHQADgIAAgKQAAgJgDgIQgFgIgFgEQgHgEgIAAQgIAAgGAFg");
        this.shape_82.setTransform(137.7, -20.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AgOAvIgKgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgHIACgDIACgBIAEACIAGACQAEABAGAAIAHgBQADAAADgDQACgDAAgEQAAgEgBgDQgCgCgFgCIgKgGQgKgFgGgFQgGgGgBgLQABgIAEgFQAEgHAHgCQAHgDAIAAIAKABIAKADIACACIAAADIgBAGIgBADIgCAAIgEgBIgGgCIgIAAQgGAAgDACQgFADAAAEQAAAFAGAEQAEAEAJAFIANAGQAFADACAGQACAEABAHQgBAKgFAGQgFAGgHADQgJACgGAAIgLgBg");
        this.shape_83.setTransform(123.3, -20.6);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLgBgOQAAgOAGgKQAGgKAKgHQAJgGAMAAQAUAAALAMQAKAMABAWQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIg8AAQAAAJAFAHQAEAGAHAEQAHAEAIAAQAHAAAGgCIAIgDIAFgBIACAAIABACIAAAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAagIQgBgLgHgGQgFgHgMAAQgGAAgFADQgGADgDAGQgDAGgCAGIAyAAIAAAAg");
        this.shape_84.setTransform(114.4, -20.6);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_85.setTransform(107.4, -22.9);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#000000").s().p("AgDBEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgEIAAhQIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABQIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgHgxQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
        this.shape_86.setTransform(101.8, -22.8);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#000000").s().p("AgEA2QgIgIABgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgEIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIAAAYIATAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAsQgBALAEAFQAEAFAGAAIAGgBIAEAAIACAAIABADIAAAHIgBACIgCACIgEABIgGAAIgBAAQgPAAgGgIg");
        this.shape_87.setTransform(96.1, -22);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#000000").s().p("AAYBGIgEgBIgDgDIgogsIAAArIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAABPIAkgiIADgCQABgBAAAAQAAAAABAAQAAAAABAAQABAAABAAIALAAIACABIABABIAAACIgBABIgmAjIArAuIABABIAAABIgBACIgCABg");
        this.shape_88.setTransform(83.7, -23);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_89.setTransform(74.2, -20.6);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_90.setTransform(64.2, -20.6);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_91.setTransform(56.7, -22.9);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_92.setTransform(49.5, -20.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKALgHQAKgGALAAQAUAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAIgDIAFgBIACAAIAAACIABAIIgBADIgDACIgNAEIgNABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgFADQgGADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_93.setTransform(34.9, -20.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_94.setTransform(24.2, -20.5);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#000000").s().p("AgIBBQgGgEgBgIQgCgIAAgKIAAhjIABgEIADgBIAIAAIADABIABAEIAABlQAAAIACAFQADAFAGAAIADAAIACgBIADABIAAADIAAAHIAAADIgCABIgEABIgEAAQgKAAgGgFg");
        this.shape_95.setTransform(16.8, -22.9);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#000000").s().p("AgNBDQgJgEgFgHIgBAAIAAAIIgBAEIgDABIgIAAIgCgBIgBgEIAAiAIABgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAIAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEIAAA3IABAAQAGgIAHgEQAIgDAJAAQAOAAAJAHQAIAGAFALQAFAKAAAOQAAAMgFALQgFAKgIAHQgJAHgOAAQgJAAgIgEgAgNgGQgHAFgDAGQgEAIAAAJQAAARAIAJQAIAJAMAAQAIAAAGgFQAGgEADgIQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgFgJAAQgIAAgGAEg");
        this.shape_96.setTransform(8.2, -22.9);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#000000").s().p("AgTAqQgLgGgFgLQgHgLAAgOQABgOAFgKQAGgKAJgHQALgGAMAAQATAAAKAMQALAMAAAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgEAAIg8AAQABAJAEAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIABACIAAAIIgBADIgDACIgMAEIgOABQgOAAgLgGgAAagIQgBgLgGgGQgHgHgLAAQgGAAgGADQgFADgEAGQgDAGgBAGIAyAAIAAAAg");
        this.shape_97.setTransform(-7.9, -20.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#000000").s().p("AAdBGIgDgBIgBgEIAAgxQAAgLgFgHQgFgHgLAAQgJAAgGAFQgGAEgDAIQgEAIAAAKIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAiAIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAEIAAA3IABAAQAFgIAIgDQAIgEAJAAQALAAAGADQAHAEAEAGQAEAFABAGIABAOIAAAyIgBAEIgDABg");
        this.shape_98.setTransform(-18.6, -23);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#000000").s().p("AgFA2QgGgIAAgRIAAguIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgCgEIAAgEIACgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIAAgYIABgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAIAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAEIAAAYIAVAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAAAsQAAALAEAFQADAFAIAAIAGgBIADAAIACAAIAAADIAAAHIAAACIgCACIgFABIgEAAIgCAAQgPAAgHgIg");
        this.shape_99.setTransform(-27.6, -22);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_100.setTransform(-41, -20.6);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#000000").s().p("AgFAuIgEgBIgBgEIgfhQIgBgCIAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAKAAIADABIACADIAXBGIABAAIAYhGIACgDIADgBIAJAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAABIgBACIgfBQIgCAEIgDABg");
        this.shape_101.setTransform(-50.8, -20.6);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_102.setTransform(-61.1, -20.6);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#000000").s().p("AA3AvIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgvQAAgIgBgGQgCgGgEgEQgEgCgHAAQgIAAgFADQgEAEgDAFIgEANIgBAKIAAAmIgBAEIgDABIgGAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgvIgBgOQgBgGgEgEQgEgCgIAAQgIAAgGAEQgFAFgCAHQgDAIAAAJIAAAoIgBAEIgEABIgIAAIgCgBIgBgEIAAhRIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAAAIIAAAAIAFgHQAFgDAFgCQAFgDAIAAQANAAAGAFQAGAGADAHIAAAAIAGgJQAEgEAGgCQAGgDAIAAQALAAAFAEQAHADADAGQADAGACAGIABAOIAAAxIgBAEIgEABg");
        this.shape_103.setTransform(-74.9, -20.7);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_104.setTransform(-93.8, -20.7);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#000000").s().p("AgDAwQgNAAgJgHQgJgHgFgLQgEgLAAgMQAAgJACgIQADgJAFgGQAFgHAIgEQAIgEAKAAQAJAAAHADQAIADAGAFIAAAAIAAgEIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIgBAAQgFAJgJADQgHAEgHAAIgDAAgAgOgcQgFAFgDAIQgDAHAAAIQAAAHACAIQADAIAGAFQAGAGAIAAQAJAAAFgFQAHgEADgHQAEgIAAgKQAAgJgEgIQgDgIgHgEQgGgEgIAAQgIAAgGAFg");
        this.shape_105.setTransform(-105.3, -20.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#000000").s().p("AgMApQgLgGgGgLQgFgKAAgNQAAgNAGgLQAFgLALgHQALgGAOAAIAKABIAJADIACACIAAAEIAAAFIgBACIgCABIgGgCQgEgBgHAAQgKAAgGAEQgHAFgEAIQgDAHAAAIQAAAJADAIQAEAIAHAFQAHAEAKAAIAIgBIAGgCIADgBIACABIABACIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgEACIgIADIgJAAQgPAAgKgHg");
        this.shape_106.setTransform(-114.6, -20.6);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#000000").s().p("AgGAvQgLAAgHgEQgGgDgEgGQgEgGgBgGIgBgOIAAgxIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAAAtQAAAIACAHQACAGAFAEQAEAEAIAAQAJAAAGgFQAGgFADgJQAEgIAAgJIAAgmIABgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAIAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIAABRIgBAEIgDABIgHAAIgEgBIgBgEIAAgKIgBAAQgFAJgIAEQgHAEgIAAIgCAAg");
        this.shape_107.setTransform(-129.7, -20.5);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_108.setTransform(-140.9, -20.6);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#000000").s().p("AgUBHQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIABgBIAAgCIAQgmIgihZIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAABAAQABgBABAAIAKAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIACADIAXBFIABAAIAYhFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBIAJAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAACIgBACIgwCBIgCADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
        this.shape_109.setTransform(-151.1, -18.1);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#000000").s().p("AgFBHIgDgBIgBgEIAAhIIgRAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEIAAgEIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIARAAIAAgRQAAgQAHgIQAHgJAPAAIAFABIAEAAIADACIAAACIAAAHIgBADIgCABIgEgBIgFgBQgHAAgDAFQgEAGAAALIAAAOIAVAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAEIgBAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgVAAIAABIIgBAEIgDABg");
        this.shape_110.setTransform(-164.4, -23.1);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#000000").s().p("AgWAqQgLgFgHgLQgGgLgBgPQABgOAGgLQAHgLALgFQAKgGAMAAQANAAALAGQAKAFAHALQAHALAAAOQAAAPgHALQgHALgKAFQgLAGgNAAQgMAAgKgGgAgPgcQgHAEgDAJQgEAHAAAIQAAAJAEAIQADAIAHAEQAHAFAIAAQAKAAAGgFQAHgEADgIQAEgIAAgJQAAgIgEgHQgDgJgHgEQgGgEgKAAQgIAAgHAEg");
        this.shape_111.setTransform(-173.3, -20.6);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#000000").s().p("AgTAqQgLgGgGgLQgFgLAAgOQgBgOAGgKQAFgKAKgHQALgGAMAAQATAAALAMQALAMgBAWQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABgFAAIg6AAQgBAJAFAHQAEAGAHAEQAHAEAHAAQAJAAAFgCIAJgDIAEgBIACAAIAAACIABAIIgBADIgDACIgMAEIgOABQgPAAgKgGgAAZgIQAAgLgHgGQgFgHgMAAQgGAAgGADQgFADgEAGQgCAGgBAGIAwAAIAAAAg");
        this.shape_112.setTransform(-189.1, -20.6);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#000000").s().p("AAdAvIgDgBIgBgEIAAgvQAAgMgFgHQgFgIgLABQgJAAgGAEQgGAFgDAIQgEAIAAAJIAAAnIgBAEIgDABIgIAAIgDgBIgBgEIAAhRIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAHAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIAAAIIABAAQAFgIAIgDQAIgEAJAAQALAAAGAEQAHADAEAGQAEAGABAGIABAOIAAAxIgBAEIgDABg");
        this.shape_113.setTransform(-199.8, -20.7);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#000000").s().p("AggA7QgNgIgIgPQgHgPgBgVQABgUAHgPQAIgPANgIQAOgIASAAQATAAAOAIQAOAIAHAPQAHAPABAUQgBAVgHAPQgHAPgOAIQgOAIgTAAQgSAAgOgIgAgXgqQgJAGgFALQgFAMAAANQAAAOAFAMQAFALAJAHQAJAGAOAAQAOAAAKgGQAJgHAFgLQAFgMAAgOQAAgNgFgMQgFgLgJgGQgKgHgOAAQgOAAgJAHg");
        this.shape_114.setTransform(-212.4, -22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer 7
        this.instance_1 = new lib.mcfeedbackgfxpanelYG4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // background
        this.text = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text.lineHeight = 22;
        this.text.parent = this;
        this.text.setTransform(-166.8, 12.4);

        this.text_1 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_1.lineHeight = 22;
        this.text_1.parent = this;
        this.text_1.setTransform(-186.9, 12.4);

        this.text_2 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_2.lineHeight = 22;
        this.text_2.parent = this;
        this.text_2.setTransform(163.7, -8.6);

        this.text_3 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_3.lineHeight = 22;
        this.text_3.parent = this;
        this.text_3.setTransform(125, -8.6);

        this.text_4 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_4.lineHeight = 22;
        this.text_4.parent = this;
        this.text_4.setTransform(5.5, -8.6);

        this.text_5 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_5.lineHeight = 22;
        this.text_5.parent = this;
        this.text_5.setTransform(-102.1, -8.6);

        this.text_6 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_6.lineHeight = 22;
        this.text_6.parent = this;
        this.text_6.setTransform(-140.7, -8.6);

        this.text_7 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_7.lineHeight = 22;
        this.text_7.parent = this;
        this.text_7.setTransform(190.6, -29.5);

        this.text_8 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_8.lineHeight = 22;
        this.text_8.parent = this;
        this.text_8.setTransform(170.5, -29.5);

        this.text_9 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_9.lineHeight = 22;
        this.text_9.parent = this;
        this.text_9.setTransform(83, -29.5);

        this.text_10 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_10.lineHeight = 22;
        this.text_10.parent = this;
        this.text_10.setTransform(44.3, -29.5);

        this.text_11 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_11.lineHeight = 22;
        this.text_11.parent = this;
        this.text_11.setTransform(-75.1, -29.5);

        this.text_12 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_12.lineHeight = 22;
        this.text_12.parent = this;
        this.text_12.setTransform(-95.2, -29.5);

        this.text_13 = new cjs.Text(" ", "16px 'Courier'", "#2A2828");
        this.text_13.lineHeight = 22;
        this.text_13.parent = this;
        this.text_13.setTransform(-182.7, -29.5);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#F8F491").s().p("AgCgCIABAAIAEAGg");
        this.shape_115.setTransform(-224.7, -30.5);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#D3D0AB").s().p("AgtDbIAAkxQAqgXAVgjQAYgiAAgrQABgMgDgOQAGATgBATQAAAqgXAkQgXAjgoAWIAAExQAAAJABAIQgFgOAAgPg");
        this.shape_116.setTransform(-224.7, 1.7);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#D3D0AB").s().p("EAlGgAIQgYgRgggBMhI+AAAQgaABgVAMIgJgJQAXgPAegBMBI+AAAQAjABAaAWQAaAUAHAiQgKgcgZgTg");
        this.shape_117.setTransform(15.9, -28.4);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FDFBD9").s().p("EgkeAFmQgjAAgcgRQgdgSgRgcQgQgbgBgkIAAlDIAQgJQAigTATgcQATgdAAggQAAgsgkglIgbgbIAggUQAhgWAkABMBI8AAAQAkABAcAPQAcASASAdQAQAbABAkIAAHPQAAAjgRAcQgRAcgdASQgbAQglABgEgkGgDQQABAtgYAoQgXAogqAbIAAEgQABAbASASQASATAbAAMBI8AAAQAbAAATgTQASgSAAgbIAAnPQAAgbgSgSQgTgSgbgBMhI9AAAQAZAoAAAvg");
        this.shape_118.setTransform(13.7, 0.4);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FDFBD9").s().p("EgktAFHQgbgBgUgMQgWgMgNgWQgMgUgBgcIAAkxQApgXAXgiQAYgjAAgrQAAgdgMgaQgLgagWgWQAXgOAdgBMBJbAAAQAbABAUAMQAWANANAVQAMAUABAcIAAHPQgBAcgMAUQgNAWgWAMQgUAMgbABg");
        this.shape_119.setTransform(15.2, 0.4);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#F8F491").s().p("AgCgCIABgBIAEAGg");
        this.shape_120.setTransform(-224.3, -31);

        this.instance_2 = new lib.Group();
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.3, 34.6, 1, 1, 0, 0, 0, 251, 11.5);
        this.instance_2.alpha = 0.699;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.text_13 }, { t: this.text_12 }, { t: this.text_11 }, { t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }, { t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(1));

        // Y back
        this.instance_3 = new lib.harYr4instructionboxbkg("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -0.2, 1.04, 1.04);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mcfeedbackclip, new cjs.Rectangle(-263.7, -39.7, 527.5, 79.5), null);


    (lib.HM_mccountbuttonhighlight = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.HM_harLinkbuttonhighlight("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-57.7, -38.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mccountbuttonhighlight, new cjs.Rectangle(-51.7, -38.4, 97.3, 71), null);


    (lib.HM_mccountbuttoncopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop()*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.instance = new lib.HM_harLinkbutton("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-57.7, -38.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.HM_mccountbuttoncopy, new cjs.Rectangle(-45.6, -32.6, 91.2, 65.2), null);


    // stage content:
    (lib.sl29challengehelpview = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { screen1: 1, screen2: 170, screen3: 383, screen4: 610, screen5: 806, screen6: 912 });

        // timeline functions:
        this.frame_0 = function() {
            $(".loader").hide();
            canvasTimeLine = this;
            canvasTimeLine.stop();
            initButtons("visible");
            window.parent.document.getElementById('game-btn').style.visibility = "visible";

        }
        this.frame_1 = function() {

        }
        this.frame_10 = function() {
            frSound = playSound("hm_nrack_clocks_att2_hm_narsound1");
        }
        this.frame_80 = function() {
            frSound = playSound("hm_nrack_clocks_att2_hm_narsound2");
        }
        this.frame_86 = function() {

        }
        this.frame_114 = function() {

        }
        this.frame_170 = function() {

        }
        this.frame_178 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound3");
        }
        this.frame_238 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound4");
        }
        this.frame_298 = function() {
            frSound = playSound("hm_nrack_clocks_att2_hm_narsound14");
        }
        this.frame_383 = function() {

        }
        this.frame_391 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound6");
        }
        this.frame_506 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound7");
        }
        this.frame_610 = function() {

        }
        this.frame_618 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound8");
        }
        this.frame_646 = function() {

        }
        this.frame_685 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound9");
        }
        this.frame_739 = function() {
            frSound = playSound("hm_nrack_nonconsec_att1_hm_narsound10");
        }
        this.frame_806 = function() {

        }
        this.frame_813 = function() {
            frSound = playSound("hm_nrack_clocks_att2_hm_narsound11");
        }
        this.frame_912 = function() {

        }
        this.frame_918 = function() {
            frSound = playSound("gensound1");
        }
        this.frame_947 = function() {
            frSound = playSound("gensound2");
        }
        this.frame_987 = function() {
            frSound = playSound("gensound3");
        }
        this.frame_1031 = function() {
            stopAtEnd();
            canvasTimeLine.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(70).call(this.frame_80).wait(6).call(this.frame_86).wait(28).call(this.frame_114).wait(56).call(this.frame_170).wait(8).call(this.frame_178).wait(60).call(this.frame_238).wait(60).call(this.frame_298).wait(85).call(this.frame_383).wait(8).call(this.frame_391).wait(115).call(this.frame_506).wait(104).call(this.frame_610).wait(8).call(this.frame_618).wait(28).call(this.frame_646).wait(39).call(this.frame_685).wait(54).call(this.frame_739).wait(67).call(this.frame_806).wait(7).call(this.frame_813).wait(99).call(this.frame_912).wait(6).call(this.frame_918).wait(29).call(this.frame_947).wait(40).call(this.frame_987).wait(44).call(this.frame_1031).wait(1));

        // control pad
        this.instance = new lib.harconsoleControlShadow("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(366.6, 621, 1, 1, -0.8);
        this.instance.alpha = 0.301;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFD445").s().p("AgtDGQgpgNghgfQgigfgXgrQgYgsgMgzQAVBAApAvQApAvA1ASQAcAJAagBQAwgBAqgcQAqgdAdgzQAdgzAKhEQALhLgRhIQAOArAFAvQAFAvgHAwQgKBDgdAzQgdAzgqAdQgpAcgxACIgDAAQgZAAgagJg");
        this.shape.setTransform(512.2, 600.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D49100").s().p("AjYB1QgBgeAEgeIABgEIAAgDIACgSQAOg9AcguQAdguAogaQAogaAugCIACAAIABAAQAWABAXAGIAGACIACABIABAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADABIAFADIADABIACABIABAAQAEADADABIADACIALAGIAMAJQAKAGAJAJIACACIACACIAAABIACAAIAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABAAIABACQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABABIABABIABABIACACIABABIABABQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABACQAiApAVA1QAVA1AEA8QgJg5gYgwQgYgvgjgjQgjgigsgOQgbgLgaABQgxABgpAdQgrAdgdAzQgdAygLBEQgFArACAqQgDgdgBgeg");
        this.shape_1.setTransform(511.6, 579.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F1A500").s().p("AgqEPQgsgPgjgiQgjgigYgwQgYgwgKg5IAAgCQgCgoAEgrQALhFAdgyQAeg0ApgcQAqgdAxgBQAagBAbAKQAtAPAjAiQAjAiAYAxQAXAwAKA5IAAgEQADArgGAuQgKBEgdAzQgdAzgqAdQgqAcgxACIgCAAQgZAAgagKg");
        this.shape_2.setTransform(511.9, 593.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFD445").s().p("AAGDfQgqgEgogXQgngVghglQghglgYgxQAlA7AyAlQAyAkA4AGIAQABQA6gDAsgkQArgjAVg9QAWg9gHhNQgDgngKgjQgKgjgQggQAXAlAQAtQAPAtAFAvQAGBNgWA+QgVA9gsAkQgrAjg6ACIgRgBg");
        this.shape_3.setTransform(401.2, 605.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D49100").s().p("AjOCDIgBgDIAAgCIgBgCIAAgCIAAgBIgBgDIAAgBQgDgTgCgWQgCgOAAgOQgBhEAXg3QAXg2AoggQApghA2gBIADAAIAOgBIADAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAIADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIABAAIABAAIABAAIACABIABAAIACAAIAGACIACAAIABABIACAAIABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAGACIACABIABAAIACABIABAAIACABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADABIAAABIACAAIABABIACAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAgBAAAAIABABIACABIABAAIACABIABABIABAAIABABIACAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAEIAAABQA0AdAnA1QAnA0AVBCQgWg0gigqQgigqgrgZQgqgZgtgFIgSgBQg6ACgrAkQgrAkgVA9QgWA9AGBNQAFAsAMAoQgNgfgIgjg");
        this.shape_4.setTransform(398.3, 589.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F1A500").s().p("AAUESQgugEgqgaQgrgagigrQgigpgVg0QgMgogFgqQgHhOAWg9QAWg9ArglQArgkA6gBIASABQAtAEAqAZQAqAaAiAqQAiApAXA2QAMAoAFAqQAGBOgWA9QgVA9grAlQgrAkg6ABIgSgBgACCjWIgNgQIAOAQIAMAQIgNgQg");
        this.shape_5.setTransform(399.9, 600.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFD445").s().p("AgbDQQgqgLgjgbQgkgdgbgqQgbgpgQgzQAbBAAsArQArArA4AOQAVAGAUAAQA0gBAqggQArgfAbg3QAag2AFhHQAFhNgXhFQASAqAIAtQAJAvgDAwQgFBHgbA3QgbA3grAfQgqAfg0ACQgTAAgWgGg");
        this.shape_6.setTransform(456.1, 601.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#D49100").s().p("AjYBdIAAgFIAAgDIgBAAIAAgDIAAgGIAAgBIAAgCIAAgDIAAgCIABgBIAAgCIAAgFQAFhFAag2QAbg2ApgfQApgfAzgDIAFgBIABAAQAPABAOACIAGABIAFABIACABIABAAIACABIABAAIACAAIABABIACAAIADABIACABIABABIACAAIABABIABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIACgBIABACQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIABAAIACABIABAAIABABIABAAIACABIABAAIABAAIACABIABABIACABIABAAIABACIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAmAVAfAlQAfAkAVAvQAVAuAIA3QgPg5gbgtQgcguglggQgmgfgtgMQgVgFgUAAQg0ACgqAfQgrAfgbA2QgaA2gFBHQgDAtAHApQgMgtAAgug");
        this.shape_7.setTransform(454.9, 581.9);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F1A500").s().p("AgVESQg4gOgsgsQgsgsgbhAQgQgngIgsIAGAZQgHgpADgrQAFhHAag3QAbg2ArgfQAqgfA0gCQAUAAAVAFQAtALAmAgQAlAgAcAuQAbAuAPA4QgEgWgFgVQAGAVADAVQAHAqgDArQgFBIgbA3QgbA2gqAgQgrAfg0ABQgUAAgVgFgACOjdIgOgRIAOARIAIALIgIgLg");
        this.shape_8.setTransform(455.5, 595.2);

        this.instance_1 = new lib.harconsoleControlHighlight("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(347.7, 544, 1, 1, -0.8);
        this.instance_1.alpha = 0.852;

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#ED9900").s().p("A4nAdQgRgrASgeQARgeAugUQAtgTBDgNIBngUQBQgPCBgWQCBgVCogVQCpgVDHgPQDHgPDdgEQDcgCDHAJQDIAKCpAQQCpAQCBASQCCARBRAOIBnARQBDAKAuATQAuASASAdQASAegQAsIhSD0QAYhPgDg5QgDhAgegnQgegpg0gWQgzgWhDgJIjrgiQiEgTiigRQihgRi+gKQi9gKjXACQjYAEi9APQi9AQihAWQihAViFAXIjqApQhCAKgzAYQgyAXgdAoQgdApgBBBQgBA8AdBWg");
        this.shape_9.setTransform(506.5, 569.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.lf(["#FFD238", "#F78600"], [0, 1], -1.1, -66.4, 0.3, 32.4).s().p("A0VHrQgZgMgQghIjpp+QgRgsASgeQARgeAugTQAtgUBDgMIBngUQBQgQCBgVQCBgVCogVQCpgVDHgPQDHgPDdgEQDcgDDHAKQDIAJCpAQQCpARCBARQCCASBRANIBnARQBDALAuASQAuASASAeQASAdgQAtIjXKEQgPAhgYANQgYANggAAQgcAAgggEQgggGgkgDIhegKQhFgHhpgIQhqgIiHgHQiHgHicgEQiegEirADQirACidAJQidAIiGALQiHAKhpAMQhqALhFAIIheANQgjAEggAGQggAGgcABIgFAAQgcAAgXgMg");
        this.shape_10.setTransform(506.5, 591.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.instance_1 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance }] }).wait(1032));

        // how to play button
        this.instance_2 = new lib.HM_harHowtoplaybutton("single", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(206.8, 491.7, 0.75, 0.75);

        this.instance_3 = new lib.HM_harHowtoplaybuttonhighlight("single", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(247.7, 518.2, 0.75, 0.75, 0, 0, 0, 54.6, 35.4);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [{ t: this.instance_3 }] }, 948).to({ state: [{ t: this.instance_3 }] }, 3).to({ state: [{ t: this.instance_3 }] }, 6).to({ state: [{ t: this.instance_3 }] }, 3).to({ state: [{ t: this.instance_3 }] }, 6).to({ state: [{ t: this.instance_3 }] }, 3).to({ state: [{ t: this.instance_3 }] }, 6).to({ state: [{ t: this.instance_2 }] }, 1).wait(56));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(948).to({ _off: false }, 0).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true, regX: 0, regY: 0, x: 206.8, y: 491.7 }, 1).wait(56));

        // check button
        this.instance_4 = new lib.HM_harCheckbutton("single", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(717.5, 493.5, 0.75, 0.751);

        this.instance_5 = new lib.HM_harCheckbuttonhighlight("single", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(758.1, 517, 0.75, 0.751, 0, 0, 0, 54.1, 31.4);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_4 }] }, 806).to({ state: [{ t: this.instance_5 }] }, 62).to({ state: [{ t: this.instance_5 }] }, 3).to({ state: [{ t: this.instance_5 }] }, 6).to({ state: [{ t: this.instance_5 }] }, 3).to({ state: [{ t: this.instance_5 }] }, 6).to({ state: [{ t: this.instance_5 }] }, 3).to({ state: [{ t: this.instance_5 }] }, 6).to({ state: [{ t: this.instance_4 }] }, 1).to({ state: [] }, 16).wait(120));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(868).to({ _off: false }, 0).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true, regX: 0, regY: 0, x: 717.5, y: 493.5 }, 1).wait(136));

        // header
        this.navBar = new lib.HM_mcNavBarY();
        this.navBar.parent = this;
        this.navBar.setTransform(507.5, 107.6);

        this.feedbackClip = new lib.HM_mcfeedbackclip();
        this.feedbackClip.parent = this;
        this.feedbackClip.setTransform(411.2, 151.5, 0.75, 0.75);

        this.feedbackClip_1 = new lib.HM_mcfeedbackclipcopy();
        this.feedbackClip_1.parent = this;
        this.feedbackClip_1.setTransform(411.2, 151.5, 0.75, 0.75);

        this.feedbackClip_2 = new lib.HM_mcfeedbackclipcopy2();
        this.feedbackClip_2.parent = this;
        this.feedbackClip_2.setTransform(411.2, 151.5, 0.75, 0.75);

        this.feedbackClip_3 = new lib.HM_mcfeedbackclipcopy3();
        this.feedbackClip_3.parent = this;
        this.feedbackClip_3.setTransform(411.2, 151.5, 0.75, 0.75);

        this.feedbackClip_4 = new lib.HM_mcfeedbackclipcopy4();
        this.feedbackClip_4.parent = this;
        this.feedbackClip_4.setTransform(411.2, 151.5, 0.75, 0.75);

        this.feedbackClip_5 = new lib.HM_mcfeedbackclipcopy6();
        this.feedbackClip_5.parent = this;
        this.feedbackClip_5.setTransform(411.2, 151.5, 0.75, 0.75);

        this.feedbackClip_6 = new lib.HM_mcfeedbackclipcopy7();
        this.feedbackClip_6.parent = this;
        this.feedbackClip_6.setTransform(411.2, 151.5, 0.75, 0.75);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.feedbackClip }, { t: this.navBar }] }).to({ state: [{ t: this.feedbackClip_1 }, { t: this.navBar }] }, 114).to({ state: [{ t: this.feedbackClip_2 }, { t: this.navBar }] }, 56).to({ state: [{ t: this.feedbackClip_3 }, { t: this.navBar }] }, 213).to({ state: [{ t: this.feedbackClip_4 }, { t: this.navBar }] }, 227).to({ state: [{ t: this.feedbackClip_5 }, { t: this.navBar }] }, 196).to({ state: [{ t: this.feedbackClip_6 }, { t: this.navBar }] }, 106).wait(120));

        // StripLoader
        this.stripLoader = new lib.Symbol2();
        this.stripLoader.parent = this;
        this.stripLoader.setTransform(210.1, 100.3, 1, 1, 0, 0, 0, 2.5, 2.5);

        this.timeline.addTween(cjs.Tween.get(this.stripLoader).wait(1032));

        // Link arrows
        this.wildCardArrows = new lib.HM_mcwildcardarrows();
        this.wildCardArrows.parent = this;
        this.wildCardArrows.setTransform(510.1, 232.5, 0.75, 0.75);
        this.wildCardArrows._off = true;

        this.timeline.addTween(cjs.Tween.get(this.wildCardArrows).wait(610).to({ _off: false }, 0).to({ _off: true }, 79).wait(28).to({ _off: false }, 0).to({ _off: true }, 89).wait(226));

        // blue tiles3
        this.startp3h = new lib.HM_mctileatstartcopy7();
        this.startp3h.parent = this;
        this.startp3h.setTransform(603.5, 316.9, 0.75, 0.75);
        this.startp3h._off = true;

        this.instance_6 = new lib.HM_harRArrowhighlight("single", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(575.4, 233.8, 0.75, 0.75);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.startp3h).wait(646).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(358));
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(689).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(315));

        // blue tiles2
        this.startp2h = new lib.HM_mctileatstartcopy8();
        this.startp2h.parent = this;
        this.startp2h.setTransform(477.7, 316.8, 0.75, 0.75);
        this.startp2h._off = true;

        this.instance_7 = new lib.HM_harLArrowhighlight("single", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(441.8, 233.8, 0.75, 0.75);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.startp2h).wait(646).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(358));
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(689).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.9, scaleY: 0.9 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(315));

        // blue tiles
        this.startp1 = new lib.HM_mctileatstart();
        this.startp1.parent = this;
        this.startp1.setTransform(410.1, 454.2, 0.75, 0.75);

        this.cardStack1 = new lib.HM_mccardstackbluecopy();
        this.cardStack1.parent = this;
        this.cardStack1.setTransform(412.4, 470.7, 0.75, 0.75);

        this.shadowStack1 = new lib.HM_mcshadowstackcopy();
        this.shadowStack1.parent = this;
        this.shadowStack1.setTransform(431.3, 481.3, 0.75, 0.75, 0, 0, 0, 19.6, 19.6);

        this.startp3 = new lib.HM_mctileatstartcopy2();
        this.startp3.parent = this;
        this.startp3.setTransform(603.5, 316.9, 0.75, 0.75);

        this.startp2 = new lib.HM_mctileatstartcopy();
        this.startp2.parent = this;
        this.startp2.setTransform(477.7, 316.8, 0.75, 0.75);

        this.startp5 = new lib.HM_mctileatstartcopy11();
        this.startp5.parent = this;
        this.startp5.setTransform(410.1, 464.7, 0.75, 0.75);

        this.cardStack1_1 = new lib.HM_mccardstackblue();
        this.cardStack1_1.parent = this;
        this.cardStack1_1.setTransform(412.4, 470.7, 0.75, 0.75);

        this.shadowStack1_1 = new lib.HM_mcshadowstackcopy10();
        this.shadowStack1_1.parent = this;
        this.shadowStack1_1.setTransform(427.3, 486.3, 0.75, 0.75, 0, 0, 0, 19.6, 19.6);

        this.startp6 = new lib.HM_mctileatstartcopy3();
        this.startp6.parent = this;
        this.startp6.setTransform(477.5, 317, 0.75, 0.75);

        this.startp3_1 = new lib.HM_mctileatstartcopy4();
        this.startp3_1.parent = this;
        this.startp3_1.setTransform(540.5, 316.9, 0.75, 0.75);

        this.startp5_1 = new lib.HM_mctileatstartcopy6();
        this.startp5_1.parent = this;
        this.startp5_1.setTransform(666.1, 317, 0.75, 0.75);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shadowStack1 }, { t: this.cardStack1 }, { t: this.startp1 }] }).to({ state: [{ t: this.shadowStack1_1 }, { t: this.cardStack1_1 }, { t: this.startp5 }, { t: this.startp2, p: { x: 477.7 } }, { t: this.startp3 }] }, 383).to({ state: [{ t: this.startp5_1 }, { t: this.startp2, p: { x: 414.5 } }, { t: this.startp3_1 }, { t: this.startp6 }] }, 423).to({ state: [{ t: this.shadowStack1 }, { t: this.cardStack1 }, { t: this.startp1 }] }, 106).wait(120));

        // green tiles
        this.startp2_1 = new lib.HM_mctileatstartcopy();
        this.startp2_1.parent = this;
        this.startp2_1.setTransform(605.1, 454.2, 0.75, 0.75);

        this.cardStack2 = new lib.HM_mccardstackgreennewcopy();
        this.cardStack2.parent = this;
        this.cardStack2.setTransform(607.4, 470.7, 0.75, 0.75);

        this.shadowStack2 = new lib.HM_mcshadowstackcopy2();
        this.shadowStack2.parent = this;
        this.shadowStack2.setTransform(625.3, 482.3, 0.75, 0.75, 0, 0, 0, 19.6, 19.6);

        this.startp1_1 = new lib.HM_mctileatstart();
        this.startp1_1.parent = this;
        this.startp1_1.setTransform(351.4, 316.9, 0.75, 0.75);

        this.startp4 = new lib.HM_mctileatstartcopy12();
        this.startp4.parent = this;
        this.startp4.setTransform(605.1, 473.7, 0.75, 0.75);

        this.shadowStack2_1 = new lib.HM_mcshadowstackcopy4();
        this.shadowStack2_1.parent = this;
        this.shadowStack2_1.setTransform(622.3, 486.3, 0.75, 0.75, 0, 0, 0, 19.6, 19.6);

        this.startp4_1 = new lib.HM_mctileatstartcopy5();
        this.startp4_1.parent = this;
        this.startp4_1.setTransform(603.3, 316.7, 0.75, 0.75);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shadowStack2 }, { t: this.cardStack2 }, { t: this.startp2_1 }] }).to({ state: [{ t: this.shadowStack2_1 }, { t: this.startp4 }, { t: this.startp1_1 }] }, 383).to({ state: [{ t: this.startp4_1 }, { t: this.startp1_1 }] }, 423).to({ state: [{ t: this.shadowStack2 }, { t: this.cardStack2 }, { t: this.startp2_1 }] }, 106).wait(120));

        // purple highlight
        this.instance_8 = new lib.HM_mcdragpurplehighlight("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(603.4, 317, 1.121, 1.121, 0, 0, 0, 33.6, 36.5);

        this.instance_9 = new lib.HM_mcdragpurplehighlight("synched", 0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(477.6, 316.6, 1.12, 1.12, 0, 0, 0, 33.5, 36.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_9 }, { t: this.instance_8 }] }, 610).to({ state: [] }, 196).wait(226));

        // chances
        this.instance_10 = new lib.HM_mclives_7stars("single", 0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(677.9, 148.9, 0.75, 0.75);

        this.scoreboard = new lib.HM_mclives_7starshighlight();
        this.scoreboard.parent = this;
        this.scoreboard.setTransform(724.1, 156.8, 0.75, 0.75, 0, 0, 0, 61.5, 10.5);
        this.scoreboard._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_10, p: { mode: "single", startPosition: 0 } }] }).to({ state: [{ t: this.scoreboard }] }, 398).to({ state: [{ t: this.scoreboard }] }, 3).to({ state: [{ t: this.scoreboard }] }, 6).to({ state: [{ t: this.scoreboard }] }, 3).to({ state: [{ t: this.scoreboard }] }, 6).to({ state: [{ t: this.scoreboard }] }, 3).to({ state: [{ t: this.scoreboard }] }, 6).to({ state: [{ t: this.instance_10, p: { mode: "independent", startPosition: undefined } }] }, 1).wait(606));
        this.timeline.addTween(cjs.Tween.get(this.scoreboard).wait(398).to({ _off: false }, 0).to({ regX: 61.6, scaleX: 0.85, scaleY: 0.85 }, 3).to({ regX: 61.5, scaleX: 0.75, scaleY: 0.75 }, 6).to({ regX: 61.6, scaleX: 0.85, scaleY: 0.85 }, 3).to({ regX: 61.5, scaleX: 0.75, scaleY: 0.75 }, 6).to({ regX: 61.6, scaleX: 0.85, scaleY: 0.85 }, 3).to({ regX: 61.5, scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true, regX: 0, regY: 0, x: 677.9, y: 148.9 }, 1).wait(606));

        // yellow tile2
        this.h8 = new lib.HM_mclinestart1withnumber();
        this.h8.parent = this;
        this.h8.setTransform(728.4, 316.3, 0.75, 0.75);

        this.h8_1 = new lib.HM_mclinestart1withclockhighlightcopy3();
        this.h8_1.parent = this;
        this.h8_1.setTransform(728.4, 316.3, 0.75, 0.75);
        this.h8_1._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.h8 }] }).to({ state: [{ t: this.h8_1 }] }, 86).to({ state: [{ t: this.h8_1 }] }, 3).to({ state: [{ t: this.h8_1 }] }, 6).to({ state: [{ t: this.h8_1 }] }, 3).to({ state: [{ t: this.h8_1 }] }, 6).to({ state: [{ t: this.h8_1 }] }, 3).to({ state: [{ t: this.h8_1 }] }, 7).to({ state: [{ t: this.h8 }] }, 1).wait(917));
        this.timeline.addTween(cjs.Tween.get(this.h8_1).wait(86).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9, y: 316.2 }, 3).to({ scaleX: 0.75, scaleY: 0.75, y: 316.3 }, 6).to({ scaleX: 0.9, scaleY: 0.9, y: 316.2 }, 3).to({ scaleX: 0.75, scaleY: 0.75, y: 316.3 }, 6).to({ scaleX: 0.9, scaleY: 0.9, y: 316.2 }, 3).to({ scaleX: 0.75, scaleY: 0.75, y: 316.3 }, 7).to({ _off: true }, 1).wait(917));

        // yellow tile1
        this.h1 = new lib.HM_mclinestart1withnumbercopy();
        this.h1.parent = this;
        this.h1.setTransform(286, 316.3, 0.75, 0.75);

        this.h1_1 = new lib.HM_mclinestart1withclockhighlight();
        this.h1_1.parent = this;
        this.h1_1.setTransform(286, 316.3, 0.75, 0.75);
        this.h1_1._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.h1 }] }).to({ state: [{ t: this.h1_1 }] }, 86).to({ state: [{ t: this.h1_1 }] }, 3).to({ state: [{ t: this.h1_1 }] }, 6).to({ state: [{ t: this.h1_1 }] }, 3).to({ state: [{ t: this.h1_1 }] }, 6).to({ state: [{ t: this.h1_1 }] }, 3).to({ state: [{ t: this.h1_1 }] }, 7).to({ state: [{ t: this.h1 }] }, 1).wait(917));
        this.timeline.addTween(cjs.Tween.get(this.h1_1).wait(86).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9, x: 285.9, y: 316.2 }, 3).to({ scaleX: 0.75, scaleY: 0.75, x: 286, y: 316.3 }, 6).to({ scaleX: 0.9, scaleY: 0.9, x: 285.9, y: 316.2 }, 3).to({ scaleX: 0.75, scaleY: 0.75, x: 286, y: 316.3 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 7).to({ _off: true }, 1).wait(917));

        // blanks
        this.instance_11 = new lib.HM_harIndent("single", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(477.5, 318.5, 1.114, 1.114);

        this.instance_12 = new lib.HM_harIndent("single", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(729.1, 318.5, 1.114, 1.114);

        this.instance_13 = new lib.HM_harIndent("single", 0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(666.3, 318.5, 1.114, 1.114);

        this.instance_14 = new lib.HM_harIndent("single", 0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(603.4, 318.5, 1.114, 1.114);

        this.instance_15 = new lib.HM_harIndent("single", 0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(540.7, 318.5, 1.114, 1.114);

        this.instance_16 = new lib.HM_harIndent("single", 0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(414.5, 318.5, 1.114, 1.114);

        this.instance_17 = new lib.HM_harIndent("single", 0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(350.8, 318.5, 1.114, 1.114);

        this.instance_18 = new lib.HM_harIndent("single", 0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(287, 318.5, 1.11, 1.11);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_18 }, { t: this.instance_17 }, { t: this.instance_16 }, { t: this.instance_15 }, { t: this.instance_14 }, { t: this.instance_13 }, { t: this.instance_12 }, { t: this.instance_11 }] }).wait(1032));

        // line
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.rf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], -256.5, -29.1, 0, -256.5, -29.1, 529).s().p("Egn5ABdQgTgLgMgUQgLgTgBgYIAAgKIAAgRIAAgKQABgYAMgTQALgUATgLQAUgLAYAAIgBgBIAJABIAQAAMBODAAAQAYAAAUALQAUALALAUQALATAAAYIAAAdQAAAYgLATQgLAUgUAMQgTALgYAAIg3AAIiaAAIjxAAIk4AAIlzAAImfAAIm/ABInOAAInTAAInIABImwABImJABIlWABIkUABIjGACQgXgBgUgLg");
        this.shape_11.setTransform(508, 344.1);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.lf(["#FFF258", "#FFC000", "#FFB600"], [0, 0.667, 0.992], -17.1, -68.4, 25.2, 100.9).s().p("EgmWAB4Ig4AAQgbAAgXgOQgXgNgOgXQgNgXAAgcIAAgKIAAgQIAAgKQAAgdANgWQAOgXAXgOQAWgNAdgBIA4AAICfAAID4AAIFBAAIF8AAIGpAAIHFAAIHTAAIHUAAIHFAAIGoAAIF9AAIFBAAID4AAICfAAIA4AAQAcABAYANQAWAOAOAXQANAWAAAdIAAAIIAAANIAAAHQAAAcgNAXQgOAXgWAOQgXANgcAAIg5AAIifABIj4AAIlBABIl9AAImoABInFAAInUABInTABInGAAImoABIl8AAIlCABIj3ABIigAAg");
        this.shape_12.setTransform(508, 344.1);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.lf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], 0, -14, 0, 13.3).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgkQAAgpAUgiQAUgiAigUQAigUAqAAMBObAAAQAqAAAiAUQAiAUAUAiQAUAiAAApIAAAdQAAAqgUAiQgUAhgiAVQgiATgqABMhObAAHQgqABgigVg");
        this.shape_13.setTransform(508, 344.1);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.lf(["#FEC200", "#FE9F00"], [0, 0.992], 0, -13.6, 0.1, 13.1).s().p("EgmWAB4Ig4AAQgbAAgXgOQgXgNgOgXQgNgXAAgcIAAgKIAAgQIAAgKQAAgdANgWQAOgXAXgOQAWgNAdgBIA4AAICfAAID4AAIFBAAIF8AAIGpAAIHFAAIHTAAIHUAAIHFAAIGoAAIF9AAIFBAAID4AAICfAAIA4AAQAcABAYANQAWAOAOAXQANAWAAAdIAAAIIAAANIAAAHQAAAcgNAXQgOAXgWAOQgXANgcAAIg5AAIifABIj4AAIlBABIl9AAImoABInFAAInUABInTABInGAAImoABIl8AAIlCABIj3ABIigAAg");
        this.shape_14.setTransform(508, 344.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.lf(["#FE8D00", "#E16A00"], [0, 0.992], 0.1, 16.9, 0, -17.8).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgkQAAgpAUgiQAUgiAigUQAigUAqAAMBObAAAQAqAAAiAUQAiAUAUAiQAUAiAAApIAAAdQAAAqgUAiQgUAhgiAVQgiATgqABMhObAAHQgqABgigVg");
        this.shape_15.setTransform(508, 344.1);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#720D09").ss(2, 1, 1).p("EApkAALQAAAqgUAiQgUAigiAUQgiAUgqAAMhObAAIQgqAAgigVQgigUgUgiQgUghAAgqIAAgkQAAgqAUgiQAUgiAigUQAigUAqAAMBObAAAQAqAAAiAUQAiAUAUAiQAUAiAAAqg");
        this.shape_16.setTransform(508, 344.1);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.lf(["#FEE758", "#F7B201"], [0, 0.992], 0.1, 16.9, 0, -17.8).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgkQAAgpAUgiQAUgiAigUQAigUAqAAMBObAAAQAqAAAiAUQAiAUAUAiQAUAiAAApIAAAdQAAAqgUAiQgUAhgiAVQgiATgqABMhObAAHQgqABgigVg");
        this.shape_17.setTransform(508, 344.1);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.lf(["#BC9A85", "#FFFFCC"], [0, 1], -0.9, -10.3, 3.3, 34.1).s().p("EgmVADhIg4AAQg6gBgugcQgugbgdguQgbgvgBg5IAAgkQABg6AbguQAdgvAugcQAugbA6gBMBOcAAAQA5ABAuAbQAvAcAcAvQAbAuABA6IAAAcQgBA6gbAuQgcAvgvAbQguAcg5AAIg5AAIifAAIj4ABIlBABIl8AAImoABInGAAInUABInTABInFAAImpABIl8ABIlAAAIj5ABIifAAgEgn8gBiQgWAMgMAVQgMAVgBAbIAAAkQABAaAMAVQAMAVAWANQAUAMAbAAIA4AAICfAAID4AAIFBgBIF8AAIGpgBIHFgBIHTAAIHUgBIHGgBIGogBIF8AAIFBAAID4gBICfAAIA5AAQAaAAAUgNQAWgNANgVQAMgVAAgaIAAgcQAAgbgMgVQgNgVgWgMQgUgNgaAAMhOcAAAQgbAAgUANg");
        this.shape_18.setTransform(508, 344.1);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.lf(["#FFC038", "#FFC700", "#FF8D00"], [0.008, 0.11, 1], 0, -14, 0, 13.3).s().p("EgoZACUQgigUgUgiQgUgiAAgqIAAgkQAAgpAUgiQAUgiAigUQAigUAqAAMBObAAAQAqAAAiAUQAiAUAUAiQAUAiAAApIAAAdQAAAqgUAiQgUAhgiAVQgiATgqABMhObAAHQgqABgigVg");
        this.shape_19.setTransform(508, 344.1);

        this.instance_19 = new lib.HM_harnumberrackhighlight("synched", 0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(508, 344, 1, 1, 0, 0, 0, 271.6, 22.4);
        this.instance_19._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }] }).to({ state: [{ t: this.instance_19 }] }, 30).to({ state: [{ t: this.instance_19 }] }, 3).to({ state: [{ t: this.instance_19 }] }, 6).to({ state: [{ t: this.instance_19 }] }, 3).to({ state: [{ t: this.instance_19 }] }, 6).to({ state: [{ t: this.instance_19 }] }, 3).to({ state: [{ t: this.instance_19 }] }, 6).to({ state: [{ t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }] }, 1).wait(974));
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({ _off: false }, 0).to({ scaleX: 1.13, scaleY: 1.13 }, 3).to({ scaleX: 1, scaleY: 1 }, 6).to({ scaleX: 1.13, scaleY: 1.13 }, 3).to({ scaleX: 1, scaleY: 1 }, 6).to({ scaleX: 1.13, scaleY: 1.13 }, 3).to({ scaleX: 1, scaleY: 1 }, 6).to({ _off: true }, 1).wait(974));

        // green tray
        this.instance_20 = new lib.HM_harIndentedPanelRack("synched", 0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(606.1, 475.7, 0.75, 0.75);

        this.instance_21 = new lib.HM_harIndentedPanelRackhighlight("synched", 0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(606.1, 475.7, 0.75, 0.75);
        this.instance_21._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_20 }] }).to({ state: [{ t: this.instance_21 }] }, 259).to({ state: [{ t: this.instance_21 }] }, 3).to({ state: [{ t: this.instance_21 }] }, 6).to({ state: [{ t: this.instance_21 }] }, 3).to({ state: [{ t: this.instance_21 }] }, 6).to({ state: [{ t: this.instance_21 }] }, 3).to({ state: [{ t: this.instance_21 }] }, 6).to({ state: [{ t: this.instance_20 }] }, 1).wait(745));
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(259).to({ _off: false }, 0).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(745));

        // blue tray
        this.instance_22 = new lib.HM_harIndentedPanelRack("synched", 0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(409.5, 475.6, 0.75, 0.75);

        this.instance_23 = new lib.HM_harIndentedPanelRackhighlight("synched", 0);
        this.instance_23.parent = this;
        this.instance_23.setTransform(409.5, 475.6, 0.75, 0.75);
        this.instance_23._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_22 }] }).to({ state: [{ t: this.instance_23 }] }, 203).to({ state: [{ t: this.instance_23 }] }, 3).to({ state: [{ t: this.instance_23 }] }, 6).to({ state: [{ t: this.instance_23 }] }, 3).to({ state: [{ t: this.instance_23 }] }, 6).to({ state: [{ t: this.instance_23 }] }, 3).to({ state: [{ t: this.instance_23 }] }, 6).to({ state: [{ t: this.instance_22 }] }, 1).wait(801));
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(203).to({ _off: false }, 0).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(801));

        // background
        this.wildcardButton = new lib.HM_mccountbuttoncopy();
        this.wildcardButton.parent = this;
        this.wildcardButton.setTransform(510.3, 236.3, 0.75, 0.75);

        this.wildcardButton_1 = new lib.HM_mccountbuttonhighlight();
        this.wildcardButton_1.parent = this;
        this.wildcardButton_1.setTransform(510.3, 236.3, 0.75, 0.75);
        this.wildcardButton_1._off = true;

        this.instance_24 = new lib.HM_harLinkbuttondown("single", 0);
        this.instance_24.parent = this;
        this.instance_24.setTransform(464.2, 205.5, 0.75, 0.75);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.wildcardButton }] }).to({ state: [{ t: this.wildcardButton_1 }] }, 530).to({ state: [{ t: this.wildcardButton_1 }] }, 3).to({ state: [{ t: this.wildcardButton_1 }] }, 6).to({ state: [{ t: this.wildcardButton_1 }] }, 3).to({ state: [{ t: this.wildcardButton_1 }] }, 6).to({ state: [{ t: this.wildcardButton_1 }] }, 3).to({ state: [{ t: this.wildcardButton_1 }] }, 6).to({ state: [{ t: this.wildcardButton }] }, 1).to({ state: [{ t: this.instance_24 }] }, 52).to({ state: [] }, 196).to({ state: [{ t: this.wildcardButton }] }, 106).wait(120));
        this.timeline.addTween(cjs.Tween.get(this.wildcardButton_1).wait(530).to({ _off: false }, 0).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ scaleX: 0.85, scaleY: 0.85 }, 3).to({ scaleX: 0.75, scaleY: 0.75 }, 6).to({ _off: true }, 1).wait(474));

        // red strip
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#E5212D").s().p("Egu1ABbIAAi0MBdrAAAIAAC0g");
        this.shape_20.setTransform(508.2, 106.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1032));

        // bg
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#666633").ss(1, 1, 1).p("EAu4gjJMAAABGTMhdvAAAMAAAhGTg");
        this.shape_21.setTransform(508.5, 322.2);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFCC").s().p("Egu3AjKMAAAhGTMBdvAAAMAAABGTg");
        this.shape_22.setTransform(508.5, 322.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_22 }, { t: this.shape_21 }] }).wait(1032));

        // Layer 2
        this.instance_25 = new lib.harcontrolpanelshadow("synched", 0);
        this.instance_25.parent = this;
        this.instance_25.setTransform(512.5, 598.9, 0.974, 0.974, -1.5);
        this.instance_25.alpha = 0.371;

        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1032));

        // background
        this.text = new cjs.Text("Make 5", "28px 'HeinemannRoman'");
        this.text.textAlign = "center";
        this.text.lineHeight = 37;
        this.text.lineWidth = 146;
        this.text.parent = this;
        this.text.setTransform(510.7, 254.3, 0.75, 0.75);

        this.instance_26 = new lib.harscreenshadow("synched", 0);
        this.instance_26.parent = this;
        this.instance_26.setTransform(518.5, 332.2);
        this.instance_26.alpha = 0.371;

        this.instance_27 = new lib.harbkgframe("synched", 0);
        this.instance_27.parent = this;
        this.instance_27.setTransform(158, 526.8);
        this.instance_27.alpha = 0.25;

        this.instance_28 = new lib.harbackgroundpanel("synched", 0);
        this.instance_28.parent = this;
        this.instance_28.setTransform(112, 54.2, 1, 0.92);
        this.instance_28.alpha = 0.25;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_28 }, { t: this.instance_27 }, { t: this.instance_26 }, { t: this.text }] }).wait(1032));

        // white back
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
        this.shape_23.setTransform(512, 359.9);

        this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1032));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(511.3, 330.5, 1025.4, 659.4);
    // library properties:
    lib.properties = {
        width: 1024,
        height: 660,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            { src: "../assets/audios/s27-challenge/help/gensound1.mp3?1518693053876", id: "gensound1" },
            { src: "../assets/audios/s27-challenge/help/gensound2.mp3?1518693053876", id: "gensound2" },
            { src: "../assets/audios/s27-challenge/help/gensound3.mp3?1518693053876", id: "gensound3" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_clocks_att2_hm_narsound1.mp3?1518693053876", id: "hm_nrack_clocks_att2_hm_narsound1" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_clocks_att2_hm_narsound11.mp3?1518693053876", id: "hm_nrack_clocks_att2_hm_narsound11" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_clocks_att2_hm_narsound14.mp3?1518693053876", id: "hm_nrack_clocks_att2_hm_narsound14" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_clocks_att2_hm_narsound2.mp3?1518693053876", id: "hm_nrack_clocks_att2_hm_narsound2" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound10.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound10" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound3.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound3" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound4.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound4" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound6.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound6" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound7.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound7" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound8.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound8" },
            { src: "../assets/audios/s27-challenge/help/hm_nrack_nonconsec_att1_hm_narsound9.mp3?1518693053876", id: "hm_nrack_nonconsec_att1_hm_narsound9" }
        ],
        preloads: []
    };




})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;