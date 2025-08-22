(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Paoxie_atlas_1", frames: [[0,602,520,132],[602,356,220,150],[824,356,178,59],[602,508,216,66],[602,576,226,40],[522,618,226,40],[602,194,357,160],[933,50,80,36],[0,0,600,600],[602,0,329,192],[933,0,80,48]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.racer = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.racerthumbnail = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.runner1111 = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.vapormaxultra = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.vapormaxultrathumbnail = function() {
	this.initialize(ss["Paoxie_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.text_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,60.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_mc, new cjs.Rectangle(0,0,260,135.9), null);


(lib.Shopnow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(9.5,1.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,33);


(lib.runner_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.runner1111();
	this.instance.setTransform(64,-83,0.6455,0.6455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.runner_mc, new cjs.Rectangle(64,-83,387.3,387.3), null);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.racerthumbnail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,80,36), null);


(lib.元件3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.vapormaxultrathumbnail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,80,48), null);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(18.8,144.95,0.5,0.5);

	this.instance_1 = new lib.racer();
	this.instance_1.setTransform(0,145.2,1,1,-24.0001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,391.3,291.4), null);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(36.4,144.95,0.5,0.5);

	this.instance_1 = new lib.vapormaxultra();
	this.instance_1.setTransform(0,133.8,1,1,-24.0001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,378.7,309.2), null);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0000FF","#EED76A"],[0,0.82],-98.5,-135.2,62.6,75.6).s().p("A6FV3QgKAAAAgJMAAAgrbQAAgKAKAAMA0MAAAQAJAAAAAKMAAAArbQAAAJgJAAg");
	this.shape.setTransform(168,139.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,336,279.9), null);


(lib.ultra_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// 图层_1
	this.instance = new lib.元件3();
	this.instance.setTransform(40,24,1,1,0,0,0,40,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0134,scaleY:1.0134,x:40.05},0).wait(1).to({scaleX:1.0269,scaleY:1.0269,x:40,y:24.05},0).wait(1).to({scaleX:1.0403,scaleY:1.0403,y:24},0).wait(1).to({scaleX:1.0537,scaleY:1.0537,x:40.05,y:24.05},0).wait(1).to({scaleX:1.0671,scaleY:1.0671,y:24},0).wait(1).to({scaleX:1.0806,scaleY:1.0806,x:40,y:24.05},0).wait(1).to({scaleX:1.094,scaleY:1.094,y:24},0).wait(1).to({scaleX:1.1074,scaleY:1.1074,x:40.05,y:24.05},0).wait(1).to({scaleX:1.1208,scaleY:1.1208},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-2.8,89.7,53.8);


(lib.racer_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// 图层_1
	this.instance = new lib.元件4();
	this.instance.setTransform(40,18,1,1,0,0,0,40,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0119,scaleY:1.0119,x:40.05},0).wait(1).to({scaleX:1.0239,scaleY:1.0239,x:40,y:18.05},0).wait(1).to({scaleX:1.0358,scaleY:1.0358,x:40.05},0).wait(1).to({scaleX:1.0478,scaleY:1.0478,x:40,y:18},0).wait(1).to({scaleX:1.0597,scaleY:1.0597,x:40.05},0).wait(1).to({scaleX:1.0717,scaleY:1.0717,x:40,y:18.05},0).wait(1).to({scaleX:1.0836,scaleY:1.0836,x:40.05,y:18},0).wait(1).to({scaleX:1.0956,scaleY:1.0956,x:40},0).wait(1).to({scaleX:1.1075,scaleY:1.1075,y:18.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-1.9,88.60000000000001,39.9);


(lib.ultra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.vapormaxultrathumbnail();
	this.instance.setTransform(5,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFC602").ss(1,1,1).p("AnBlEIODAAIAAKJIuDAAg");
	this.shape.setTransform(45,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBFFIAAqJIODAAIAAKJg");
	this.shape_1.setTransform(45,32.5);

	this.instance_1 = new lib.ultra_mc();
	this.instance_1.setTransform(45,33,1,1,0,0,0,40,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AnBlEIODAAIAAKJIuDAAg");
	this.shape_2.setTransform(45,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AnBFFIAAqJIODAAIAAKJg");
	this.shape_3.setTransform(45,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92,67);


(lib.racer_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.racerthumbnail();
	this.instance.setTransform(5,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFC602").ss(1,1,1).p("AnBlEIODAAIAAKJIuDAAg");
	this.shape.setTransform(45,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBFFIAAqJIODAAIAAKJg");
	this.shape_1.setTransform(45,32.5);

	this.instance_1 = new lib.racer_mc();
	this.instance_1.setTransform(45,33,1,1,0,0,0,40,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AnBlEIODAAIAAKJIuDAAg");
	this.shape_2.setTransform(45,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AnBFFIAAqJIODAAIAAKJg");
	this.shape_3.setTransform(45,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92,67);


// stage content:
(lib._09paoxie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ultra:19,racer:24};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [14,23,29];
	// timeline functions:
	this.frame_14 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.ultra_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('19');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.racer_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('24');
		});
		
		 
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.shopnow_btn.on('click', function(){
		/*
		在一个新浏览器窗口中加载 URL。
		*/
		window.open('http://www.youtube.com', '_blank');
		});
	}
	this.frame_23 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}
	this.frame_29 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(9).call(this.frame_23).wait(6).call(this.frame_29).wait(1));

	// 图层_3
	this.instance = new lib.元件1();
	this.instance.setTransform(480,102.6,1,1,0,0,0,189.3,154.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({x:422.25},0).wait(1).to({x:364.5},0).wait(1).to({x:306.75},0).wait(1).to({x:249},0).to({_off:true},1).wait(6));

	// 图层_4
	this.instance_1 = new lib.元件2();
	this.instance_1.setTransform(492.1,93.7,1,1,0,0,0,195.6,145.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({x:446.1},0).wait(1).to({x:400.1},0).wait(1).to({x:354.1},0).wait(1).to({x:308.1},0).wait(1).to({x:262.1},0).wait(1));

	// buttons
	this.shopnow_btn = new lib.Shopnow();
	this.shopnow_btn.name = "shopnow_btn";
	this.shopnow_btn.setTransform(114,238);
	new cjs.ButtonHelper(this.shopnow_btn, 0, 1, 2, false, new lib.Shopnow(), 3);

	this.racer_btn = new lib.racer_1();
	this.racer_btn.name = "racer_btn";
	this.racer_btn.setTransform(7,206.95);
	new cjs.ButtonHelper(this.racer_btn, 0, 1, 1);

	this.ultra_btn = new lib.ultra();
	this.ultra_btn.name = "ultra_btn";
	this.ultra_btn.setTransform(52,172.5,1,1,0,0,0,45,32.5);
	new cjs.ButtonHelper(this.ultra_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ultra_btn},{t:this.racer_btn},{t:this.shopnow_btn}]},14).wait(16));

	// runner
	this.instance_2 = new lib.runner_mc();
	this.instance_2.setTransform(356,181.45,0.7413,0.7413,0,0,0,153.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:151,y:178.5},14,cjs.Ease.get(1)).to({_off:true},5).wait(11));

	// text
	this.instance_3 = new lib.text_mc();
	this.instance_3.setTransform(-16.1,72.8,1,1,0,0,0,129.9,67.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({x:136.85,y:67.8},9,cjs.Ease.get(1)).wait(16));

	// background
	this.instance_4 = new lib.background();
	this.instance_4.setTransform(167.95,140,1,1,0,0,0,168,140);
	var instance_4Filter_1 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_4.filters = [instance_4Filter_1];
	this.instance_4.cache(-2,-2,340,284);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14).wait(16));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_4, startFrame:1, endFrame:14, x:-2, y:-2, w:340, h:284});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-2, y:-2, w:340, h:284});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(22,88,665.8,191.89999999999998);
// library properties:
lib.properties = {
	id: '063E39BBB4E34372BC8B3C1ADB4D45A2',
	width: 336,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Paoxie_atlas_1.png", id:"Paoxie_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['063E39BBB4E34372BC8B3C1ADB4D45A2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;