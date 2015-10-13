define({
	name:'view/set',
	requires:['model/training',
	          'core/event',
	          'view/training'
	          ],
	def:function setinit(req){
		
		var training=req.model.training;
		var setvalue=1;
		var countvalue=15;
		var temp;
		var set=null;
		var count=null;
		
		function print(){
			if(countvalue>=10)
				count.innerHTML=countvalue;
			else
				count.innerHTML="&nbsp"+countvalue;
			set.innerHTML=setvalue;
		}
		
		function oncountBtnElClick(){
			
			if(countvalue==30)
				countvalue=5;
			else
				countvalue=countvalue+5;
			
			print();
			
		}
		
		function onsetBtnElClick(){
			
			if(setvalue==5)
				setvalue=1;
			else
				setvalue=setvalue+1;
			
			print();
			
		}
		function onstartBtnElClick(){
			
			training.setCount(countvalue);
			training.setSetCount(setvalue);
			//temp=training.init();
			req.view.training.start();
			req.model.training.start();
			tau.changePage('#trainingStart');
			
		}
		
		function onbackBtnElClick(){
			tau.changePage('#training');
		}
		
		function bindEvents() {
			var setBtnEl = document.getElementById('setvalue'),
			countBtnEl = document.getElementById('countvalue'),
			startBtnEl = document.getElementById('start'),
			backBtnEl = document.getElementById('back2');
			
			setBtnEl.addEventListener('click', onsetBtnElClick);
			countBtnEl.addEventListener('click', oncountBtnElClick);
			startBtnEl.addEventListener('click', onstartBtnElClick);
			backBtnEl.addEventListener('click', onbackBtnElClick);
			
			
        }

        function init() {
            page = document.getElementById('set');
            set = page.querySelector('.setimage .setimagefont');
            count = page.querySelector('.countimage .countimagefont');
            bindEvents();
            print();
        }
       
        return {
        	init: init,

        };
		
		
	}
})