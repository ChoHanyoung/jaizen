define({
	name : 'ageSetting',
	requires:[
	          'setting',
	          'core/event'
	          ],
	def: function settinginit(setting, req){
		
		var age;
		
		
		function onokBtnElClick(){
			setting.print();
			tau.changePage('#setting');
		}
		
		function age10Click(){
			setting.setAge(document.ageinput.age10.value);
			setting.print();
		}
		function age20Click(){
			setting.setAge(document.ageinput.age20.value);
			setting.print();
		}
		function age30Click(){
			setting.setAge(document.ageinput.age30.value);
			setting.print();
		}
		function age40Click(){
			setting.setAge(document.ageinput.age40.value);
			setting.print();
		}
		function age50Click(){
			setting.setAge(document.ageinput.age50.value);
			setting.print();
		}
		function onback4BtnElClick(){
			tau.changePage('#setting');
		}
		
		function bindEvents() {
			var okBtnEl = document.getElementById('okage');
			var age10 = document.getElementById('age10');
			var age20 = document.getElementById('age20');
			var age30 = document.getElementById('age30');
			var age40 = document.getElementById('age40');
			var age50 = document.getElementById('age50');
			
			

			okBtnEl.addEventListener('click', onokBtnElClick);
			age10.addEventListener('click', age10Click);
			age20.addEventListener('click', age20Click);
			age30.addEventListener('click', age30Click);
			age40.addEventListener('click', age40Click);
			age50.addEventListener('click', age50Click);

			
			
		}
		
		function init() {
			console.log("setting");
		    page = document.getElementById('ageSetting');
		    bindEvents();		   
			
		    print();
		    return;
		}
		
		return {
			init: init,

			
        };
		
	}
})
	
    
  


    