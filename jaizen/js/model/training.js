define({
	name:'model/training',
	requires:[
	          'core/event',
	          'core/tizen'
	          ],
	def:function traininginit( req) {
		
		var setCount,
			count,
			title,
			setTime=1,
			countSet=1;
			
		function setTitle(Title){
			title=Title;
		}
		
		function setSetCount(set){
			setCount=set;
		}
		function setCount(Count){
			count=Count;
		}
		
		function getSetTime(){ return setTime;}
		function getCountSet(){return countSet;}
		function getTitle(){return title;}
		function getSetCount(){return setCount;}
		function getCount(){return count;}
		
		function initial(){
			setTime=1;
			countSet=1;
			stop();
		}
		function stop(){
			webapis.motion.stop("WRIST_UP");
			tau.changePage('#main');
		}
		function onstartBtnElClick(){
			navigator.vibrate(100);
			countSet=countSet+1;
			if(countSet>=count){
				setTime=setTime+1;
				countSet=1;
				if(setTime>setCount){
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
		
		function successCallback(){
			countSet=countSet+1;
			navigator.vibrate(100);
			if(countSet>=count){
				setTime=setTime+1;
				countSet=1;
				if(setTime>setCount){
		            initial();
				}
			}
			
		}
		function errorCallback(){
			
		}
		
		function successHRMCallback(){
			
		}
	        
	    function ziro(event){
	    	//console.log("x : "+event.acceleration.x);
	    	//console.log("y : "+event.acceleration.y);
	    	//console.log("z : "+event.acceleration.z);
	    }
	    function start(){

        	window.addEventListener("devicemotion", ziro,true);
            webapis.motion.start("WRIST_UP", onstartBtnElClick);
        	
	    }
        function init() {
            page=document.getElementById('trainingStart');
            bindEvents();
            console.log("model/training");
            return;
        }
        
        return {
        	init: init,
        	print: print,
        	setCount: setCount,
        	setSetCount: setSetCount,
        	setTitle: setTitle,
        	getSetTime: getSetTime,
        	getCountSet: getCountSet,
        	getTitle: getTitle,
        	getSetCount: getSetCount,
        	getCount: getCount,
        	start:start
        };
	}
})