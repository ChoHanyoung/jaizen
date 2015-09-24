define({
	name : 'setting',
	requires:[
	          'core/event'
	          ],
	def: function settinginit(req){
		
		var page=null,
			age=null,
			weight=null,
			height=null,
			agevalue=10,
			weightvalue=40,
			heightvalue=150,
			gender=null,
			gendervalue="M";
		
		
		
		function setAge(Age){
			agevalue=Age;	
		}
		function setGender(Gender){
			gendervalue=Gender;	
		}
		
		function setWeight(Weight){
			weightvalue=Weight;	
		}
		
		function setHeight(Height){
			heightvalue=Height;	
		}
		
		function onheightBtnElClick(){
			tau.changePage('#heightSetting');
		}
		function onweightBtnElClick(){
			tau.changePage('#weightSetting');
		}
		function onageBtnElClick(){
			tau.changePage('#ageSetting');
		}
		function ongenderBtnElClick(){
			tau.changePage('#genderSetting');
		}
		function onbackBtnElClick(){
			tau.changePage('#main');
		}
		
		function print(){
			
			age.innerHTML='['+agevalue+'+]';
			weight.innerHTML='['+weightvalue+'+]';
			height.innerHTML='['+heightvalue+'+]';
			gender.innerHTML='['+gendervalue+']';
		}
		function bindEvents() {
			var ageBtnEl = document.getElementById('age'),
			weightBtnEl = document.getElementById('weight'),
			heightBtnEl = document.getElementById('height'),
			genderBtnEl = document.getElementById('gender'),
			backBtnEl = document.getElementById('backset');
			
			ageBtnEl.addEventListener('click', onageBtnElClick);
			weightBtnEl.addEventListener('click', onweightBtnElClick);
			genderBtnEl.addEventListener('click', ongenderBtnElClick);
			heightBtnEl.addEventListener('click', onheightBtnElClick);
			backBtnEl.addEventListener('click', onbackBtnElClick);
		}
		
		function init() {
			console.log("setting");
		    page = document.getElementById('setting');
		    bindEvents();
		    age = page.querySelector('.setting .setAge');
			weight = page.querySelector('.setting .setWeight');
			height = page.querySelector('.setting .setHeight');
			gender = page.querySelector('.setting .setGender');
		   
			
		    print();
		    return;
		}
		
		return {
			init: init,
			print: print,
			setAge: setAge,
			setWeight: setWeight,
			setHeight: setHeight,
			setGender: setGender
        };
		
	}
})
	
    
  


    