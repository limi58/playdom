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

  /**
   * get dom by css express
   * @param  {string} sele
   * @return {object}
   */
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

    /**
     * add class on dom
     * @param  {string} className
     * @return {boolean}
     */
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


    /**
     * the dom has class ?
     * @param  {string}  className
     * @return {Boolean}
     */
    hasClass: function hasClass(className) {
      return this._getArrayBySpaceString(this.DOM.className).indexOf(className) > -1;
    },

    /**
     * remove the class
     * @param  {string} className
     * @return this
     */
    removeClass: function removeClass(className) {
      if (!this.hasClass(className)) return this;
      this.DOM.className = this._getArrayBySpaceString(this.DOM.className).filter(function (data) {
        return data !== className;
      }).join(' ');
      return this;
    },

    /**
     * get a array by split a string space
     * @param  {string} string
     * @return {array}
     */
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
    }
  };

  module.exports = function (selector) {
    return new PlayDOM(selector);
  };
});
