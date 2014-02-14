dom
=========

A basic native dom operation wrapper that returns native object . It's very simple and fast

  - Return native object(s)
  - Very simple & easy to type
  - So fast just like native browser API

<br>
This is not library like the *great & cool* jQuery, ender, nwt, & others. While jQuery returns its internal object, **dom** just return the native browser object.

<br>
> This is for fun, for people who still wants to code in native browser API way (code in less/without library) but do not want to type long.

<br>
API
----
* `dom('#id')` is short way of `document.getElementById('id')`

* `dom('.class')` is short way of `document.getElementsByClassName('class')`

* `dom('#tag')` is short way of `document.getElementsByTagName('tag')`
<br><br>
* `dom(elm).byClass('class')` is short way of `elm.getElementsByClassName('class')`

* `dom(elm).byTag('tag')` is short way of `elm.getElementsByTagName('tag')`

* `dom(elm).qs('string')` is short way of `elm.querySelector('string')`

* `dom(elm).qsa('string')` is short way of `elm.querySelectorAll('string')`
<br><br>
* `dom(elm).on('type', func)` is short way of `elm.addEventListener('type', func, false)`

* `dom(elm).off('type', func)` is short way of `elm.removeEventListener('type', func, false)`
<br><br>
* `dom(elm).click(func)` is short way of `elm.addEventListener('click', func, false)`

* `dom(elm).mouseup(func)` is short way of `elm.addEventListener('mouseup', func, false)`

* `dom(elm).mousedown(func)` is short way of `elm.addEventListener('mousedown', func, false)`

* `dom(elm).keyup(func)` is short way of `elm.addEventListener('keyup', func, false)`

* `dom(elm).keydown(func)` is short way of `elm.addEventListener('keydown', func, false)`

* `dom(elm).focus(func)` is short way of `elm.addEventListener('focus', func, false)`

* `dom(elm).blur(func)` is short way of `elm.addEventListener('blur', func, false)`

* `dom(elm).change(func)` is short way of `elm.addEventListener('change', func, false)`

* `dom(elm).submit(func)` is short way of `elm.addEventListener('submit', func, false)`

* `dom(elm).scroll(func)` is short way of `elm.addEventListener('scroll', func, false)`
<br><br>
* `dom(func)` for __DOM Ready__ execution. So the _func_ would be executed after the DOM (Document Object Model) is ready.

* `dom(array).each()` for repeating function execution in an array/ elements collection.

```sh
dom(elements).each(function(_this, index) {
    // _this is the current element
    // index is the current order
})
```

<br>
Tips
-----------

__dom__ is standalone, no-dependency. But, it would be great if you use it together with these **very good** libraries : 
* _jQuery_ (maybe you need some logical effects or ajax)
* _Lo-Dash_ (it contains rich basic utilities)

<br>
Contact
--
https://twitter.com/javasdivren<br>
https://www.facebook.com/bagusjavas90
