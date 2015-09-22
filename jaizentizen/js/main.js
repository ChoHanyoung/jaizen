define({
	name : 'main',
	requires:[
	          
	          ],
	def: function maininit(req){
		
		
		function onsettingbtnClick(){
			console.log('set');
			tau.changePage('#setting');
		}
		
		function ontrainingbtnClick(){
			console.log('train');
			tau.changePage('#category');
		}
		function onanalysisClick(){
			console.log('ana');
			tau.changePage('#analysis');
		}
		function onexitClick(){
			console.log('exit');
		}
		
		
		function bindEvents() {
			var settingbtn = document.getElementById('setting-btn'),
			trainingbtn = document.getElementById('training-btn'),
			analysisbtn = document.getElementById('analysis-btn'),
			exitbtn = document.getElementById('exit-btn');
				
			settingbtn.addEventListener('click', onsettingbtnClick);
			trainingbtn.addEventListener('click', ontrainingbtnClick);
			analysisbtn.addEventListener('click', onanalysisClick);
			exitbtn.addEventListener('click', onexitClick);

			page.addEventListener('pageshow', onPageShow);
		}
		
		function init() {
			console.log('main');
		    page = document.getElementById('main');
		    bindEvents();
		}
		
		return {
			init: init 
        };
		
	}
})
	
    
  


    