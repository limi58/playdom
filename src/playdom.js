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

  hasClass: function (className) {
    return this._getArrayBySpaceString(this.DOM.className).indexOf(className) > -1
  },

  removeClass: function (className) {
    if (!this.hasClass(className)) return this
    this.DOM.className = this._getArrayBySpaceString(this.DOM.className).filter((data) => {
      return data !== className
    }).join(' ')
    return this
  },

  // 'a b c ' => ['a', 'b', 'c']
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

  getRect () {
    return this.DOM.getBoundingClientRect()
  },

  getOffset () {
    return {
      top: this.getRect().top + window.pageYOffset - document.documentElement.clientTop,
      left: this.getRect().left + window.pageXOffset - document.documentElement.clientLeft,
    }
  },

  getPosition () {
    return { left: this.DOM.offsetLeft, top: this.DOM.offsetTop }
  },
}


module.exports = function (selector) {
  return new PlayDOM(selector)
}