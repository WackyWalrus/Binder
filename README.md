Binder
======
A quick way to add binds to elements.
------------------------------------
* * *

This Javascript class will quickly add binds to elements. For example:

    var anchor = document.getElementById('bindy');
    var b = new Binder();
    b.mouse.click(function(){
        anchor.innerHTML = 'Clicked!';
    });

This is still very much in development. It will be a lot more useful in the future, I promise.