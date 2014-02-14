function dom(input) {
    'use strict';
    
    if ( input ) {
        if ( input.substr ) {
            input = input.trim();
            var array = input.split('');
            if ( array[0] === '#' ) {
                input = input.replace('#', '');
                return document.getElementById(input);
            } else {
                if ( array[0] === '.' ) {
                    input = input.replace('.', '');
                    return document.getElementsByClassName(input);
                } else {
                    return document.getElementsByTagName(input);
                }
            }
        } else {
            if ( input.tagName || input === document || input === window ) {
                var byClass = function(str) {
                    return input.getElementsByClassName(str);
                };
                
                var byTag = function(str) {
                    return input.getElementsByTagName(str);
                };
                
                var qs = function(str) {
                    return input.querySelector(str);
                };
                
                var qsa = function(str) {
                    return input.querySelectorAll(str);
                };
                
                var on = function(type, func) {
                    input.addEventListener(type, func, false);
                };
                
                var off = function(type, func) {
                    input.removeEventListener(type, func, false);
                };
                
                var click = function(func) {
                    input.addEventListener('click', func, false);
                };
                
                var mouseup = function(func) {
                    input.addEventListener('mouseup', func, false);
                };
                
                var mousedown = function(func) {
                    input.addEventListener('mousedown', func, false);
                };
                
                var keyup = function(func) {
                    input.addEventListener('keyup', func, false);
                };
                
                var keydown = function(func) {
                    input.addEventListener('keydown', func, false);
                };
                
                var focus = function(func) {
                    input.addEventListener('focus', func, false);
                };
                
                var blur = function(func) {
                    input.addEventListener('blur', func, false);
                };
                
                var change = function(func) {
                    input.addEventListener('change', func, false);
                };
                
                var submit = function(func) {
                    input.addEventListener('submit', func, false);
                };
                
                var scroll = function(func) {
                    input.addEventListener('scroll', func, false);
                };
                
                
                return {
                    byClass   : byClass,
                    byTag     : byTag,
                    qs        : qs,
                    qsa       : qsa,
                    on        : on,
                    off       : off,
                    click     : click,
                    mouseup   : mouseup,
                    mousedown : mousedown,
                    keyup     : keyup,
                    keydown   : keydown,
                    focus     : focus,
                    blur      : blur,
                    change    : change,
                    submit    : submit,
                    scroll    : scroll
                };
            } else {
                if ( input.length ) {
                    var each = function(func) {
                        var n     = 0,
                            total = input.length;
                        
                        for ( ; n < total; ++n ) {
                            func(input[n], n);
                        }
                    };
                    
                    
                    return {
                        each : each
                    };
                } else {
                    document.addEventListener('DOMContentLoaded', input, false);
                }
            }
        }
    } else {
        console.log('input parameter is empty : function dom(input) {}');
    }
}