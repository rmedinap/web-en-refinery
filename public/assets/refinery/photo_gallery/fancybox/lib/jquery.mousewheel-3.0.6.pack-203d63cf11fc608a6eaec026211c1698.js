/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
!function(e){function t(t){var i=t||window.event,n=[].slice.call(arguments,1),s=0,r=0,a=0,t=e.event.fix(i);return t.type="mousewheel",i.wheelDelta&&(s=i.wheelDelta/120),i.detail&&(s=-i.detail/3),a=s,void 0!==i.axis&&i.axis===i.HORIZONTAL_AXIS&&(a=0,r=-1*s),void 0!==i.wheelDeltaY&&(a=i.wheelDeltaY/120),void 0!==i.wheelDeltaX&&(r=-1*i.wheelDeltaX/120),n.unshift(t,s,r,a),(e.event.dispatch||e.event.handle).apply(this,n)}var i=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=i.length;n;)e.event.fixHooks[i[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=i.length;e;)this.addEventListener(i[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=i.length;e;)this.removeEventListener(i[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);