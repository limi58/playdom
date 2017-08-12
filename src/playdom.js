/**
 * get dom by css express
 * @param  {string} sele
 * @return {object}
 */
function PlayDOM(selector) {
  if (selector instanceof HTMLElement) {
    this.DOM = selector
  } else {
    this.DOM = document.querySelector(selector)
  }
}

PlayDOM.prototype = {
  getScrollTop: function () {
    return document.body.scrollTop || document.documentElement.scrollTop
  },

  /**
   * add class on dom
   * @param  {string} className
   * @return {boolean}
   */
  addClass: function (className) {
    if (this.hasClass(className)) return this
    this.DOM.className = this._getArrayBySpaceString(this.DOM.className).concat(className).join(' ')
    return this
  },

  toggleClass(className) {
    if (this.hasClass(className)) {
      this.removeClass(className)
    } else {
      this.addClass(className)
    }
  },

  /**
   * the dom has class ?
   * @param  {string}  className
   * @return {Boolean}
   */
  hasClass: function (className) {
    return this._getArrayBySpaceString(this.DOM.className).indexOf(className) > -1
  },

  /**
   * remove the class
   * @param  {string} className
   * @return this
   */
  removeClass: function (className) {
    if (!this.hasClass(className)) return this
    this.DOM.className = this._getArrayBySpaceString(this.DOM.className).filter((data) => {
      return data !== className
    }).join(' ')
    return this
  },

  /**
   * get a array by split a string space
   * @param  {string} string
   * @return {array}
   */
  _getArrayBySpaceString: function (string) {
    return string.split(' ').filter(data => data !== '')
  },
  // document total height
  getScrollHeight() {
    return document.body.scrollHeight || document.documentElement.scrollHeight
  },
  // document height
  getWindowHeight() {
    return document.documentElement.clientHeight
  },
  isTouchBottom(distance = 300) {
    return this.getScrollTop() + this.getWindowHeight() + distance >= this.getScrollHeight()
  },
}


module.exports = function (selector) {
  return new PlayDOM(selector)
}