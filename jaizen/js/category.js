define({
	name:'category',
	requires:['core/event',
	          'armTraining'
	          ],
	def:function arminit(){
		
		
		function backedClick(){
			tau.changePage('#armTraining')
		}
		
		function chestClick(){
			tau.changePage('#armTraining')
		}
		
		function sholderClick(){
			tau.changePage('#armTraining')
		}
		
		function legClick(){
			tau.changePage('#armTraining')
		}
		
		function adominalClick(){
			tau.changePage('#armTraining')
		}
		
		function armClick(){
			tau.changePage('#armTraining')
		}
		     
		function bindEvents() {
			var backed = document.getElementById('backed'),
			chest = document.getElementById('chest'),
			sholder = document.getElementById('sholder'),
			leg = document.getElementById('leg'),
			adominal = document.getElementById('adominal'),
			arm = document.getElementById('arm');
			
			
			backed.addEventListener('click', backedClick);
			chest.addEventListener('click', chestClick);
			sholder.addEventListener('click', sholderClick);
			leg.addEventListener('click', legClick);
			adominal.addEventListener('click', adominalClick);
			arm.addEventListener('click', armClick);
        }

        function init() {
            page = document.getElementById('category');
            bindEvents();

        }
		
		init();
		
	}
})