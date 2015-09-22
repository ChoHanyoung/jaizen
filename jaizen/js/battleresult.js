define({
	name : 'battleresult',
	requires:[
				'core/event',
				'core/tizen'
	          ],
	def: function profileinit(req){
		
		var battlevideo=null;
		
		function onPageShow(){
			
		}
		
		function print(){
			tau.changePage('#battleresult');
			battlevideo.innerHTML="<video src='./fight.mp4' autoplay width='300'></video>";
			
		}
		
		function back(){
			tau.changePage('#battle2');
		}
		
		function bindEvents() {
			var backresult= document.getElementById('backbattleresult');
			
			backresult.addEventListener('click', back)
			
		}
		
		function init() {
		    page = document.getElementById('battleresult');
		    bindEvents();
		    battlevideo = page.querySelector('.bat .battlevideo');
		    
		    
		}
		
		return {
			init: init,
			print: print
        };
		
	}
})
	
    
  


    