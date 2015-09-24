define({
	name : 'genderSetting',
	requires:[
	          'setting',
	          'core/event'
	          ],
	def: function settinginit(setting, req){
		
		
		function onokBtnElClick(){
			setting.print();
			tau.changePage('#setting');
		}
		
		function genderMClick(){
			setting.setGender(document.genderinput.genderM.value);
			setting.print();
		}
		function genderFClick(){
			setting.setGender(document.genderinput.genderF.value);
			setting.print();
		}
		
		function onback4BtnElClick(){
			tau.changePage('#setting');
		}
		
		function bindEvents() {
			var okBtnEl = document.getElementById('okgen');
			var genderM = document.getElementById('genderM');
			var genderF = document.getElementById('genderF');
			
			okBtnEl.addEventListener('click', onokBtnElClick);
			genderM.addEventListener('click', genderMClick);
			genderF.addEventListener('click', genderFClick);

			
		}
		
		function init() {
			console.log("setting");
		    page = document.getElementById('genderSetting');
		    bindEvents();		   
			
		    print();
		    return;
		}
		
		return {
			init: init,

			
        };
		
	}
})
	
    
  


    