"use strict";var _collect2=_interopRequireDefault(require("collect.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Headers=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"collect",value:function collect(){return(0,_collect2["default"])(this.headers())}},{key:"headers",value:function headers(){return[]}}],[{key:"newWith",value:function newWith(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"value",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return new this().collect().whereIn(a,b).all()}}]),a}();exports["default"]=Headers;