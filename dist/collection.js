"use strict";var _collect2=_interopRequireDefault(require("collect.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Collection=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"collect",value:function collect(){return(0,_collect2["default"])(this.items())}},{key:"items",value:function items(){return[]}}],[{key:"init",value:function init(){return new this().collect()}},{key:"reduce",value:function reduce(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"name",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return this.init().whereIn(a,b).all()}}]),a}(),_default=Collection;exports["default"]=_default;