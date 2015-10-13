define({
	name : 'view/ageSetting',
	requires:[
	          'model/setting',
	          'view/setting',
	          'core/event'
	          ],
	def: function settinginit(req){
		
		var setting = req.view.setting;
		var modelsetting=req.model.setting;
		
		function onokBtnElClick(){
			setting.print();
			tau.changePage('#setting');
		}
		
		function age10Click(){
			modelsetting.setAge(document.ageinput.age10.value);
			setting.print();
		}
		function age20Click(){
			modelsetting.setAge(document.ageinput.age20.value);
			setting.print();
		}
		function age30Click(){
			modelsetting.setAge(document.ageinput.age30.value);
			setting.print();
		}
		function age40Click(){
			modelsetting.setAge(document.ageinput.age40.value);
			setting.print();
		}
		function age50Click(){
			modelsetting.setAge(document.ageinput.age50.value);
			setting.print();
		}
		
		function onback4BtnElClick(){
			tau.changePage('#setting');
		}
		
		function bindEvents() {
			var okBtnEl = document.getElementById('okage'),
			 	age10 = document.getElementById('age10'),
			 	age20 = document.getElementById('age20'),
			 	age30 = document.getElementById('age30'),
			 	age40 = document.getElementById('age40'),
			 	age50 = document.getElementById('age50');
			
			okBtnEl.addEventListener('click', onokBtnElClick);
			age10.addEventListener('click', age10Click);
			age20.addEventListener('click', age20Click);
			age30.addEventListener('click', age30Click);
			age40.addEventListener('click', age40Click);
			age50.addEventListener('click', age50Click);
			
			
		}
		
		function init() {
		    page = document.getElementById('ageSetting');
		    bindEvents();		   
		    return;
		}
		
		return {
			init: init,
        };
		
	}
})
	
    
  


    