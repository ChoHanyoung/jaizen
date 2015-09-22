define({
	name : 'battle',
	requires:[
	            'battleresult',
				'core/event',
				'core/tizen'
	          ],
	def: function profileinit(req){
		
		var battlevideo=null;
		
		function onPageShow(){
			
		}
		
		function print(){
			tau.changePage('#battle');			
		}
		
		function back(){
			tau.changePage('#main');
		}
		function battle(){
			req.battleresult.print();
		}
		
		function bindEvents() {
			var backbattle= document.getElementById('backbattle');
			var user= document.getElementById('user');
			
			user.addEventListener('click', battle);
			backbattle.addEventListener('click', back);
			
		}
		
		function init() {
		    page = document.getElementById('battle');
		    bindEvents();
		    
		}
		
		return {
			init: init,
			print: print
        };
		
	}
})
	
    
  


    