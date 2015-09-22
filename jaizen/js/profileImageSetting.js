define({
	name : 'profileImageSetting',
	requires:[
	          'profile',
	          'core/event'
	          ],
	def: function settinginit(profile, req){
		
		var age;
		
		
		function backpiClick(){
			profile.print();
			tau.changePage('#profile');
		}
		
		function image1Click(){
			profile.setprofileImageState(1);
			profile.print();
			tau.changePage('#profile');
		}
		function image2Click(){
			profile.setprofileImageState(2);
			profile.print();
			tau.changePage('#profile');
		}
		function image3Click(){
			profile.setprofileImageState(3);
			profile.print();
			tau.changePage('#profile');
		}
		function image4Click(){
			profile.setprofileImageState(4);
			profile.print();
			tau.changePage('#profile');
		}
		function image5Click(){
			profile.setprofileImageState(5);
			profile.print();
			tau.changePage('#profile');
		}
		function bindEvents() {
			var backpi = document.getElementById('backpi');
			var image1 = document.getElementById('image1');
			var image2 = document.getElementById('image2');
			var image3 = document.getElementById('image3');
			var image4 = document.getElementById('image4');
			var image5 = document.getElementById('image5');

			backpi.addEventListener('click', backpiClick);
			image1.addEventListener('click', image1Click);
			image2.addEventListener('click', image2Click);
			image3.addEventListener('click', image3Click);
			image4.addEventListener('click', image4Click);
			image5.addEventListener('click', image5Click);

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
	
    
  


    