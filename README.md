> npm i playdom

`const el = playdom('#foo')`

or

`const el = playdom(document.querySelector('#foo'))`

----

* el.DOM.addEventListener('click', e => e)

* el.addClass('foo').removeClass('foo').toggleClass('foo').hasClass('foo')

* el.getRect() // getBoundingClientRect

* el.getOffset().top // 10

* el.getPosition().top // 5

* playdom().getScrollTop() // 123

* playdom().isTouchBottom(200) // true



