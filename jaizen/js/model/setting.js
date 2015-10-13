define({
	name : 'model/setting',
	requires:[
	          'core/storage/idb',
	          'core/event',
         
	          ],
	def: function settinginit(req){
		
		var s = req.core.storage.idb,
        	e = req.core.event,
			gender=null,     
			settings = [],
            STORAGE_KEY = 'settings';
		
		function saveSettings() {
            s.add(STORAGE_KEY, settings);
        }
		
		function setAge(Age){
			settings[0]=Age;
			saveSettings();
		}
		
		function setWeight(Weight){
			settings[1]=Weight;	
			saveSettings();
		}
		
		function setHeight(Height){
			settings[2]=Height;	
			saveSettings();
		}
		function setGender(Gender){
			settings[3]=Gender;	
			saveSettings();
		}
		function getAge(){
			return settings[0];
		}
		function getWeight(){
			return settings[1];
		}
		function getHeight(){
			return settings[2];
		}
		function getGender(){
			return settings[3];
		}

        function onRead(ev) {
            if (ev.detail.key !== STORAGE_KEY) {
                return;
            }
            if (typeof ev.detail.value !== 'object') {
                settings[0] =20;
                settings[1] =60;
                settings[2] =160;
                settings[3] ='M';
                saveSettings();
            } else {
                settings = ev.detail.value;
            }
            e.fire('ready');
        }

        function onWrite(ev) {
            if (ev.detail.key !== STORAGE_KEY) {
                return;
            }
            e.fire('save', ev.detail.value);
        }

        e.on({
            'core.storage.idb.write': onWrite,
            'core.storage.idb.read': onRead
        });

		function init() {
			console.log("model/setting");
	       
			 if (s.isReady()) {
				 s.get(STORAGE_KEY);
	         } else {
	             e.listen('core.storage.idb.open', init);
	         }
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