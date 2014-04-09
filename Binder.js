var Binder = function(){
	this.interval = new Array();
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
	this.onChange = function(element,id,f){
		var val = element.value;
		this.interval[id] = setInterval(function(){
			if(element.value != val){
				f();
			}
			val = element.value;
		},200);
	}
	this.clearChange = function(id){
		clearInterval(this.interval[id]);
	}
	this.do = function(element,action,f){
		if(element[action]() == undefined){
			f();
		}
	}
}