define({
	name : 'heightSetting',
	requires:[
	          'setting',
	          'core/event'
	          ],
	def: function settinginit(setting, req){
		
		
		
		
		function onokBtnElClick(){
			setting.print();
			tau.changePage('#setting');
		}
		
		function height150Click(){
			setting.setHeight(document.heightinput.height150.value);
			setting.print();
		}
		function height160Click(){
			setting.setHeight(document.heightinput.height160.value);
			setting.print();
		}
		function height170Click(){
			setting.setHeight(document.heightinput.height170.value);
			setting.print();
		}
		function height180Click(){
			setting.setHeight(document.heightinput.height180.value);
			setting.print();
		}
		function height190Click(){
			setting.setHeight(document.heightinput.height190.value);
			setting.print();
		}
		function onback4BtnElClick(){
			tau.changePage('#setting');
		}
		
		function bindEvents() {
			var okBtnEl = document.getElementById('okheight');
			var height150 = document.getElementById('height150');
			var height160 = document.getElementById('height160');
			var height170 = document.getElementById('height170');
			var height180 = document.getElementById('height180');
			var height190 = document.getElementById('height190');
			
			

			okBtnEl.addEventListener('click', onokBtnElClick);
			height150.addEventListener('click', height150Click);
			height160.addEventListener('click', height160Click);
			height170.addEventListener('click', height170Click);
			height180.addEventListener('click', height180Click);
			height190.addEventListener('click', height190Click);

			
			
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
	
    
  


    