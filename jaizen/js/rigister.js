define({
	name : 'register',
	requires:[
	          'core/event'
	          ],
	def: function settinginit(req){
		
		function hide(){
			tau.changePage('#main');
		}
		
		
		function bindEvents() {
            var saveBtn = document.getElementById('save-btn');
			

            saveBtn.addEventListener('click', hide);
			
		}
		
		function init() {
		    page = document.getElementById('rigister');
		    bindEvents();
		    return;
		}
		
		return {
			init: init,
			
        };
		
	}
})
	
    
  


    



