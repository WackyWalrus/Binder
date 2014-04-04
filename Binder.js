var Binder = function(){
	this.addEvent = function(element,action,f){
		if(element.attachEvent){
			return element.attachEvent('on'+action,f);
		}else{
			return element.addEventListener(action,f,false);
		}
	}
	this.removeEvent = function(element,action,f){
		if(element.detachEvent){
			return element.detachEvent(action,f);
		}else{
			return element.removeEventListener(action,f,false);
		}
	}
}