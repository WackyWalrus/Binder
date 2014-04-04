var Binder = function(){
	// mouse events
	this.mouse = {
		click: function(element,f){element.onclick = f;},
		doubleClick: function(element,f){element.ondblclick = f;},
		down: function(element,f){element.onmousedown = f;},
		up: function(element,f){element.onmouseup = f;},
		move: function(element,f){element.onmousemove = f;},
		over: function(element,f){element.onmouseover = f;},
		out: function(element,f){element.onmouseout = f;}
	}
	// keyboard events
	this.key = {
		down: function(f){window.onkeydown = f;},
		press: function(f){window.onkeypress = f;},
		up: function(f){window.onkeyup = f;}
	}
}