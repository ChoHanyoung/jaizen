define({
	name : 'view/genderSetting',
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
		
		function genderMClick(){
			modelsetting.setGender(document.genderinput.genderM.value);
			setting.print();
		}
		function genderFClick(){
			modelsetting.setGender(document.genderinput.genderF.value);
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
			console.log("gendersetting");
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
	
    
  


    