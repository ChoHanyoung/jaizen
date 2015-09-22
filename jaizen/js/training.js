define({
	name:'training',
	requires:[
	          'profile',
	          'core/event',
	          'core/tizen'
	          
	          ],
	def:function traininginit( req) {
		
		var setCount,
			count,
			title,
			maxSet=null,
			maxCount=null,
			elMinutes=null,
			elSeconds=null,
			elSet=null,
			elCount=null,
			elHead=null,
			setTime=1,
			countSet=1;
			
		var action;
		
		function setTitle(Title){
			title=Title;
		}
		function onsetBtnElClick(){
			
			
		}
		
		function print(){
			elSet.innerHTML = setTime;
			elCount.innerHTML= countSet;
			elHead.innerHTML = title;
			maxSet.innerHTML = setCount;
			maxCount.innerHTML = count;
		}
		function oncountBtnElClick(){
			console.log(document.ssss.count.value);
		}
		
		function setSetCount(set){
			setCount=set;
		}
		function setCount(Count){
			count=Count;
		}
		function onstartBtnElClick(){
			
			countSet=countSet+1;
			if(countSet>=count){
				setTime=setTime+1;
				countSet=1;
				if(setTime>setCount){
					var temp=setCount*count;
					
					req.profile.setExp(temp);
					req.profile.init();
					tau.changePage('#register');
				}
			}
			
    		print();
			
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
			
			if(countSet>=count){
				setTime=setTime+1;
				countSet=1;
				if(setTime>setCount){
					tau.changePage('#register');
				}
			}
			
    		print();
		}
		function errorCallback(){
			
		}
		
		function successHRMCallback(){
			
			
    		print();
		}
		
        function init() {
        	
            page=document.getElementById('trainingStart');
            bindEvents();
            maxCount = page.querySelector('.window .value .max_count');
            maxSet = page.querySelector('.value .max_set');
            elMinutes = page.querySelector('.time .minutes');
            elSeconds = page.querySelector('.time .seconds');
            elSet= page.querySelector('.window .value .set_count');
            elCount = page.querySelector('.window .value .count');
            elHead = page.querySelector('.head');
            print();
            webapis.motion.start("HRM", successHRMCallback)
            webapis.motion.start("PEDOMETER", successCallback);
            webapis.motion.start("WRIST_UP", onstartBtnElClick);
           
            console.log("training");
            return;
        }
        
        
        return {
        	init: init,
        	print: print,
        	setCount: setCount,
        	setSetCount: setSetCount,
        	setTitle: setTitle
        };
		
		
	}
})