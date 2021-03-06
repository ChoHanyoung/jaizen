define({
	name : 'main',
	requires:[
	          'model/setting',
	          'core/event',
	          'core/template',
	          'core/systeminfo',
	          'core/application',
	          'view/category',
	          'view/ageSetting',
	          'view/heightSetting',
	          'view/weightSetting',
	          'view/genderSetting',
	          'view/setting'
	          ],
	def: function maininit(req){
		
		var app = req.core.application;
		
		function onPageShow(){
			
		}
		
		function onsettingbtnClick(){
			req.view.setting.print();
			tau.changePage('#setting');
		}
		
		function ontrainingbtnClick(){
			tau.changePage('#training');
		}
		function onanlisisClick(){
			tau.changePage('#analisis');
		}
		
		function onexitClick(){
			app.exit();
		}
		
		
		function bindEvents() {
			var settingbtn = document.getElementById('setting-btn'),
			trainingbtn = document.getElementById('training-btn'),
			analisisbtn = document.getElementById('analisis-btn'),
			exitbtn = document.getElementById('exit-btn');
				
			settingbtn.addEventListener('click', onsettingbtnClick);
			trainingbtn.addEventListener('click', ontrainingbtnClick);
			analisisbtn.addEventListener('click', onanlisisClick);
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
	
    
  


    