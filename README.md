Binder.js
======
A quick way to add binds to elements.
------------------------------------
* * *

This Javascript class will quickly add binds to elements.
For example:

    var anchor = document.getElementById('bindy');
    var b = new Binder();
    b.event.add(anchor,'click',function(){
        anchor.innerHTML = 'Clicked!';
    });

Removing an event is quick too

    var input = document.getElementById('my-text-input');
    var b = new Binder();

    // add the bind
    b.event.add(input,'focus',callback);

    // removes the bind, this will only be called once!
    function callback(){
    	b.event.remove(input,'focus',callback);
    }

This is still very much in development. It will be a lot more useful in the future, I promise.
* * *
Better onchange
--------------
The onChange in Binder.js doesn't require you to focus away from the input! This function will run the callback with every keystroke.

For example:

	var elem = document.getElementById('elem'); // this is the element we're binding
    // this is the callback for our onChange
    function callback(){
        console.log('Function ran!');
    }
	b.onChange(elem,'this-binds-unique-id',callback); // this line adds the onChange bind

You can remove the onChange bind with:

    b.clearChange('this-binds-unique-id');