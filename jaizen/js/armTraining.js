dumbbell
define({
	name:'armTraining',
	requires:['training',
	          'core/event',
	          'set'
	          
	          ],
	def:function armTraininginit(req){
		var training=req.training;
		

		function ondumbbellBtnElClick(){
			training.setTitle("아령");
			tau.changePage('#set')
		}
		
		function onbabelBtnElClick(){
			training.setTitle("바벨");
			tau.changePage('#set')
		}
		
		function onbackBtnElClick(){
			tau.changePage('#main');
		}
		function bindEvents() {
			var dumbbellBtnEl = document.getElementById('dumbbell');
			var babelBtnEl = document.getElementById('babel');
			var backBtnEl = document.getElementById('backat');
			
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