define({
	name:'view/training',
	requires:[
	          'core/event',
	          'core/tizen',
	          'model/training'
	          ],
	def:function traininginit( req) {
		
		var maxSet=null,
			maxCount=null,
			elMinutes=null,
			elSeconds=null,
			elSet=null,
			elCount=null,
			elHead=null,
			HRM=null,
			training=req.model.training;
			
		function print(hrmInfo){
			elSet.innerHTML = training.getSetTime();
			elCount.innerHTML= training.getCountSet();
			elHead.innerHTML = training.getTitle();
			maxSet.innerHTML = training.getSetCount();
			maxCount.innerHTML = training.getCount();
			
		}
		
		function hrminfo(hrmInfo){
			if(hrmInfo.heartRate > 0){
				HRM.innerHTML= hrmInfo.heartRate;
			}else{
				HRM.innerHTML= 0;
			}
		}
		
		function stop(){
			webapis.motion.stop("HRM");
		}
		function start(){
			webapis.motion.start("HRM", hrminfo);
		}
        function init() {
        	window.addEventListener("devicemotion", print,true);
            page=document.getElementById('trainingStart');
            maxCount = page.querySelector('.window .value .max_count');
            maxSet = page.querySelector('.value .max_set');
            elMinutes = page.querySelector('.time .minutes');
            elSeconds = page.querySelector('.time .seconds');
            elSet= page.querySelector('.window .value .set_count');
            elCount = page.querySelector('.window .value .count');
            elHead = page.querySelector('.head');
            HRM=page.querySelector('.HRM .HRMvalue');
            
            console.log("view/training");
            return;
        }
        
		return{
			init:init,
			start:start
		};
		
	}
})