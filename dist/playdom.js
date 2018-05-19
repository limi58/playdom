(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.playdom = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function PlayDOM(selector) {
    if (selector instanceof HTMLElement) {
      this.DOM = selector;
    } else {
      this.DOM = document.querySelector(selector);
    }
  }

  PlayDOM.prototype = {
    getScrollTop: function getScrollTop() {
      return document.body.scrollTop || document.documentElement.scrollTop;
    },

    addClass: function addClass(className) {
      if (this.hasClass(className)) return this;
      this.DOM.className = this._getArrayBySpaceString(this.DOM.className).concat(className).join(' ');
      return this;
    },

    toggleClass: function toggleClass(className) {
      if (this.hasClass(className)) {
        this.removeClass(className);
      } else {
        this.addClass(className);
      }
    },


    hasClass: function hasClass(className) {
      return this._getArrayBySpaceString(this.DOM.className).indexOf(className) > -1;
    },

    removeClass: function removeClass(className) {
      if (!this.hasClass(className)) return this;
      this.DOM.className = this._getArrayBySpaceString(this.DOM.className).filter(function (data) {
        return data !== className;
      }).join(' ');
      return this;
    },

    // 'a b c ' => ['a', 'b', 'c']
    _getArrayBySpaceString: function _getArrayBySpaceString(string) {
      return string.split(' ').filter(function (data) {
        return data !== '';
      });
    },

    getScrollHeight: function getScrollHeight() {
      return document.body.scrollHeight || document.documentElement.scrollHeight;
    },
    getWindowHeight: function getWindowHeight() {
      return document.documentElement.clientHeight;
    },
    isTouchBottom: function isTouchBottom() {
      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

      return this.getScrollTop() + this.getWindowHeight() + distance >= this.getScrollHeight();
    },
    getRect: function getRect() {
      return this.DOM.getBoundingClientRect();
    },
    getOffset: function getOffset() {
      return {
        top: this.getRect().top + window.pageYOffset - document.documentElement.clientTop,
        left: this.getRect().left + window.pageXOffset - document.documentElement.clientLeft
      };
    },
    getPosition: function getPosition() {
      return { left: this.DOM.offsetLeft, top: this.DOM.offsetTop };
    },
    show: function show() {
      var display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';

      this.DOM.style.display = display;
      return this;
    },
    hide: function hide() {
      this.DOM.style.display = 'none';
      return this;
    },
    toggle: function toggle() {
      var display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';

      if (this.DOM.style.display === 'none') {
        this.DOM.style.display = display;
      } else {
        this.DOM.style.display = 'none';
      }
    }
  };

  module.exports = function (selector) {
    return new PlayDOM(selector);
  };
});
