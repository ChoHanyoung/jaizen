define({
	name : 'model/setting',
	requires:[
	          'core/storage/idb',
	          'core/event',
         
	          ],
	def: function settinginit(req){
		
		var s = req.core.storage.idb,
        	e = req.core.event,
			agevalue=10,
			weightvalue=40,
			heightvalue=150,
			gender=null,
			settings = null,
            STORAGE_KEY = 'settings';
			gendervalue="M";
		
		
		
		function setAge(Age){
			console.log('setage');
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
		
		function getAge(){
			return agevalue;
		}
		function getWeight(){
			return weightvalue;
		}
		function getHeight(){
			return heightvalue;
		}
		function getGender(){
			return gendervalue;
		}
		
		
		function init() {
			console.log("settingmodel");
			
		    return;
		}
		
		return {
			init: init,
			print: print,
			setAge: setAge,
			setWeight: setWeight,
			setHeight: setHeight,
			setGender: setGender,
			getAge: getAge,
			getWeight: getWeight,
			getHeight: getHeight,
			getGender: getGender
        };
		
	}
})