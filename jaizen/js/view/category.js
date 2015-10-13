dumbbell
define({
	name:'view/category',
	requires:['model/training',
	          'core/event',
	          'view/set'
	          
	          ],
	def:function categoryinit(req){
		var training=req.model.training;
		

		function ondumbbellBtnElClick(){
			training.setTitle("아령");
			tau.changePage('#set')
		}
		
		function onbabelBtnElClick(){
			training.setTitle("바벨");
			tau.changePage('#set')
		}
		
		function onbackBtnElClick(){
			console.log('back');
			tau.changePage('#main');
		}
		function bindEvents() {
			var dumbbellBtnEl = document.getElementById('dumbbell');
			//var babelBtnEl = document.getElementById('babel');
			var backBtnEl = document.getElementById('backtraining');
			
			dumbbellBtnEl.addEventListener('click', ondumbbellBtnElClick);
			//babelBtnEl.addEventListener('click', onbabelBtnElClick);
			backBtnEl.addEventListener('click', onbackBtnElClick)
        }

        function init() {
            page = document.getElementById('armTraining');
            bindEvents();
            console.log('armTraining');
        }
       
		
		
		return {
			init: init
        };
	}
})