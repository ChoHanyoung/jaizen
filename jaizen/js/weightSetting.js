define({
	name : 'weightSetting',
	requires:[
	          'setting',
	          'core/event'
	          ],
	def: function settinginit(setting, req){
		
		var weight;
		
		
		function onokBtnElClick(){
			setting.print();
			tau.changePage('#setting');
		}
		
		function weight40Click(){
			setting.setWeight(document.weightinput.weight40.value);
			setting.print();
		}
		function weight50Click(){
			setting.setWeight(document.weightinput.weight50.value);
			setting.print();
		}
		function weight60Click(){
			setting.setWeight(document.weightinput.weight60.value);
			setting.print();
		}
		function weight70Click(){
			setting.setWeight(document.weightinput.weight70.value);
			setting.print();
		}
		function weight80Click(){
			setting.setWeight(document.weightinput.weight80.value);
			setting.print();
		}
		function weight90Click(){
			setting.setWeight(document.weightinput.weight90.value);
			setting.print();
		}
		function onback4BtnElClick(){
			tau.changePage('#setting');
		}
		
		function bindEvents() {
			var okBtnEl = document.getElementById('okweight');
			var weight40 = document.getElementById('weight40');
			var weight50 = document.getElementById('weight50');
			var weight60 = document.getElementById('weight60');
			var weight70 = document.getElementById('weight70');
			var weight80 = document.getElementById('weight80');
			var weight90 = document.getElementById('weight90');
			

			okBtnEl.addEventListener('click', onokBtnElClick);
			weight40.addEventListener('click', weight40Click);
			weight50.addEventListener('click', weight50Click);
			weight60.addEventListener('click', weight60Click);
			weight70.addEventListener('click', weight70Click);
			weight80.addEventListener('click', weight80Click);
			weight90.addEventListener('click', weight90Click);
			
			
		}
		
		function init() {
			console.log("setting");
		    page = document.getElementById('weightSetting');
		    bindEvents();		   
			
		    print();
		    return;
		}
		
		return {
			init: init,

			
        };
		
	}
})
	
    
  


    