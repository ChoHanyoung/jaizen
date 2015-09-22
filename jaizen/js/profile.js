define({
	name : 'profile',
	requires:[
				'core/event',
				'core/tizen'
	          ],
	def: function profileinit(req){
		
		var plus=null, statpoint=null;
		var plus2=null;
		var plus3=null;
		var power=null, dex=null, endurance=null;
		var powerValue=0, dexValue=0, enduranceValue=0;
		var stat=3;
		var exp=0;
		var exppointCurrent=null;
		var exppointMax=null
		var profileimage=null;
		var profileImageState=0;
		function onPageShow(){
			
		}
		
		function print(){
			if(stat==0){
				plus.innerHTML = "<div class='plusimage'>&nbsp</div>";
				plus2.innerHTML = "<div class='plusimage'>&nbsp</div>";
				plus3.innerHTML = "<div class='plusimage'>&nbsp</div>";
			}else{
				plus.innerHTML = "<div class='plusactiveimage'>&nbsp</div>";
				plus2.innerHTML = "<div class='plusactiveimage'>&nbsp</div>";
				plus3.innerHTML = "<div class='plusactiveimage'>&nbsp</div>";
			}
			
			power.innerHTML=powerValue;
			dex.innerHTML=dexValue;
			endurance.innerHTML=enduranceValue;
			statpoint.innerHTML = stat;
			exppointCurrent.innerHTML=exp;
			exppointMax.innerHTML="200";
			console.log("profile");
			switch(profileImageState)
			{
			case 1:
				profileimage.innerHTML = "<div class='profileImage1'></div>";
				break;
			case 2:
				profileimage.innerHTML = "<div class='profileImage2'></div>";
				break;
			case 3:
				profileimage.innerHTML = "<div class='profileImage3'></div>";
				break;
			case 4:
				profileimage.innerHTML = "<div class='profileImage4'></div>";
				break;
			case 5:
				profileimage.innerHTML = "<div class='profileImage5'></div>";
				break;
			default:
				profileimage.innerHTML = "<div class='profileImage1'></div>";
			}
		}
		
		function plusPowerClick(){
			if(stat>=1){
				powerValue++;
				stat--;
				print();
			}
			
		}
		
		function plusDexClick(){
			if(stat>=1){
				dexValue++;
				stat--;
				print();
			}
		}
		function setExp(value){
			exp = exp+value;
		}
		
		function setprofileImageState(state){
			profileImageState=state;
		}
		function plusEnduranceClick(){
			if(stat>=1){
				enduranceValue++;
				stat--;
				print();
			}
		}

		function backatClick(){
			tau.changePage('#main')
		}
		
		function profileImageIdClick(){
			tau.changePage('#profileImageSetting')
		}
		
		function bindEvents() {
			var plusPower= document.getElementById('plusPower');
			var plusDex= document.getElementById('plusDex');
			var plusEndurance= document.getElementById('plusEndurance');
			var backat=document.getElementById('backpro');
			var profileImageId=document.getElementById('profileimage');
			backat.addEventListener('click', backatClick)
			plusPower.addEventListener('click', plusPowerClick);
			plusDex.addEventListener('click', plusDexClick);
			plusEndurance.addEventListener('click', plusEnduranceClick);
			profileImageId.addEventListener('click', profileImageIdClick);
		}
		
		function init() {
		    page = document.getElementById('profile');
		    bindEvents();
		    plus = page.querySelector('.stat .plus');
		    plus2 = page.querySelector('.stat .plus2');
		    plus3 = page.querySelector('.stat .plus3');
		    power = page.querySelector('.stat .statvalue');
		    dex = page.querySelector('.stat .statvalue2');
		    endurance = page.querySelector('.stat .statvalue3');
		    statpoint = page.querySelector('.statpoint .statpoint2')
		    exppointCurrent = page.querySelector('.exppoint .exppoint2')
		    exppointMax = page.querySelector('.exppoint .exppoint3')
		    profileimage= page.querySelector('.profileImage .profileImagePrint')
		    print();
		    
		}
		
		return {
			init: init,
			setExp: setExp,
			setprofileImageState: setprofileImageState,
			print: print
        };
		
	}
})
	
    
  


    