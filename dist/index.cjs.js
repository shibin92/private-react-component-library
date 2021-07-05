'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('bootstrap/dist/css/bootstrap.min.css');
var React = require('react');
var parse = require('html-react-parser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);

// import parse from 'html-react-parser';

var UkbTextbox = function UkbTextbox(props) {
  var handleValue = function handleValue(event) {
    props.onChange(event.target.value);
  };

  var formText, label;
  var lableTxt = props.labelTxt || ''; // let disableField = props.disabled || false;

  var parsedTxt = parse__default['default'](lableTxt);
  var classNames = "form-control ".concat(props.className);

  if (props.labelTxt) {
    label = /*#__PURE__*/React__default['default'].createElement("label", {
      className: "form-label"
    }, parsedTxt);
  }

  if (props.showTextBelow) {
    formText = /*#__PURE__*/React__default['default'].createElement("small", {
      className: "text-muted"
    }, props.yeildTxt);
  }

  return /*#__PURE__*/React__default['default'].createElement("form", null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "form-group"
  }, label, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "text",
    className: classNames,
    onChange: handleValue,
    disabled: props.disabled,
    placeholder: props.placeholder
  }), formText));
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var UkbButton = function UkbButton(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var classNames = "".concat(props.className);
  React.useEffect(function (test) {
    console.log('test======', test);

    if (isLoading) {
      props.onClick('hellow').finally(function () {
        // props.onClick('hellow');
        setLoading(false);
      });
    }
  }, [isLoading]);

  var handleClick = function handleClick(event) {
    setLoading(true);
  };

  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: classNames,
    onClick: !isLoading ? handleClick : null,
    disabled: props.disabled
  }, isLoading ? 'Loading…' : props.children);
};

exports.UkbButton = UkbButton;
exports.UkbTextbox = UkbTextbox;
