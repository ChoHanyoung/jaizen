define({
	name:'model/training',
	requires:[
	          'core/event',
	          'core/tizen'
	          ],
	def:function traininginit( req) {
		
		var setcount,
			count,
			title,
			setTime=1,
			countSet=1,
			minutes=0,
			seconds=0,
			startTime,
			state = false;
			
		function setTitle(Title){
			title=Title;
		}
		
		function setSetCount(set){
			setcount=set;
		}
		function setCount(Count){
			count=Count;
		}
		
		function getSetTime(){ return setTime;}
		function getCountSet(){return countSet;}
		function getTitle(){return title;}
		function getSetCount(){return setcount;}
		function getCount(){return count;}
		function getMinutes(){
			if(minutes>=10){
				return minutes;
			} else{
				return '0'+minutes;
			}
		}
		function getSeconds(){
			if((seconds%60)>=10){
				return (seconds%60);
			} else{
				return '0'+(seconds%60);
			}
		}
		
		function stop(){
			webapis.motion.stop("WRIST_UP");
			tau.changePage('#main');
		}
		function initial(){
			setTime=1;
			countSet=1;
			state=false;
			stop();
		}
		function onstartBtnElClick(){
			navigator.vibrate(100);
			countSet=countSet+1;
			if(countSet>=count){
				setTime=setTime+1;
				countSet=1;
				if(setTime>setcount){
		            initial();
				}
			}
			
		}
		
		function onbackBtnElClick(){
			tau.back();
		}
		
		function bindEvents() {
			var startBtnEl = document.getElementById('ok'),
			backBtnEl = document.getElementById('backT');
			startBtnEl.addEventListener('click', onstartBtnElClick);
			backBtnEl.addEventListener('click', onbackBtnElClick);
        }
		
	    function ziro(event){
	    	if(state==true){
	    		//console.log("z : "+event.acceleration.z);
	    		
	    		seconds=parseInt(((Date.now()-startTime)/1000),10);
	    		minutes=parseInt(seconds/60);
	    	}
	    	//console.log("x : "+event.acceleration.x);
	    	//console.log("y : "+event.acceleration.y);
	    	
	    }
	    
	    function start(){
	    	console.log('start');
        	window.addEventListener("devicemotion", ziro,true);
            webapis.motion.start("WRIST_UP", onstartBtnElClick);
            startTime=Date.now();
        	state=true;
	    }
        function init() {
            page=document.getElementById('trainingStart');
            bindEvents();
            console.log("model/training");
            return;
        }
        
        return {
        	init: init,
        	setCount: setCount,
        	setSetCount: setSetCount,
        	setTitle: setTitle,
        	getSetTime: getSetTime,
        	getCountSet: getCountSet,
        	getTitle: getTitle,
        	getSetCount: getSetCount,
        	getCount: getCount,
        	getMinutes: getMinutes,
        	getSeconds: getSeconds,
        	start:start
        };
	}
})