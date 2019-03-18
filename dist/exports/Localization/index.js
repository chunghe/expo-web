'use strict';

exports.__esModule = true;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Localization = {
  get locale() {
    var locale = navigator.language || navigator['systemLanguage'] || navigator['browserLanguage'] || navigator['userLanguage'] || this.locales[0];

    // The native format is en-US
    return locale.replace('_', '-');
  },
  get locales() {
    var _navigator = navigator,
        _navigator$languages = _navigator.languages,
        languages = _navigator$languages === undefined ? [] : _navigator$languages;

    return (0, _from2.default)(languages);
  },

  get timezone() {
    var defaultTimeZone = 'Etc/UTC';
    if (typeof Intl === 'undefined') {
      return defaultTimeZone;
    }
    return Intl.DateTimeFormat().resolvedOptions().timeZone || defaultTimeZone;
  }
};

exports.default = Localization;