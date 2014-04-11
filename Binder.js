var Binder = function(){
	this.event = {
		add: function(element,action,f){
			if(element.attachEvent){
				return element.attachEvent('on'+action,f);
			}else{
				return element.addEventListener(action,f,false);
			}
		},
		remove: function(element,action,f){
			if(element.detachEvent){
				return element.detachEvent(action,f);
			}else{
				return element.removeEventListener(action,f,false);
			}
		}
	}
	this.onchange = {
		interval: new Array(),
		add: function(element,id,f){
			var val = element.value;
			this.interval[id] = setInterval(function(){
				if(element.value != val){
					f();
				}
				val = element.value;
			},200);
		},
		remove: function(id){
			clearInterval(this.interval[id]);
		}
	}
	this.do = function(element,action,f){
		if(element[action]() == undefined){
			f();
		}
	}
}