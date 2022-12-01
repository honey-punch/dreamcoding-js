"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// 프로젝트에서 바벨 셋팅하는 방법
// babel 사이트 setup 메뉴
var Cat = /*#__PURE__*/_createClass(function Cat() {
  _classCallCheck(this, Cat);
});
;
var hello = function hello() {};
var yes = Promise.resolve(1);

// package.json에서 build 부분 수정후
// babel.config.json 파일 만든후
// 터미널에서 npm run build
