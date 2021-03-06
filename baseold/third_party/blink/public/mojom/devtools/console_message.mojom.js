// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/devtools/console_message.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');


  var ConsoleMessageLevel = {};
  ConsoleMessageLevel.kVerbose = 0;
  ConsoleMessageLevel.kInfo = ConsoleMessageLevel.kVerbose + 1;
  ConsoleMessageLevel.kWarning = ConsoleMessageLevel.kInfo + 1;
  ConsoleMessageLevel.kError = ConsoleMessageLevel.kWarning + 1;
  ConsoleMessageLevel.MIN_VALUE = 0,
  ConsoleMessageLevel.MAX_VALUE = 3,

  ConsoleMessageLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ConsoleMessageLevel.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ConsoleMessageSource = {};
  ConsoleMessageSource.kXml = 0;
  ConsoleMessageSource.kJavaScript = ConsoleMessageSource.kXml + 1;
  ConsoleMessageSource.kNetwork = ConsoleMessageSource.kJavaScript + 1;
  ConsoleMessageSource.kConsoleApi = ConsoleMessageSource.kNetwork + 1;
  ConsoleMessageSource.kStorage = ConsoleMessageSource.kConsoleApi + 1;
  ConsoleMessageSource.kAppCache = ConsoleMessageSource.kStorage + 1;
  ConsoleMessageSource.kRendering = ConsoleMessageSource.kAppCache + 1;
  ConsoleMessageSource.kSecurity = ConsoleMessageSource.kRendering + 1;
  ConsoleMessageSource.kOther = ConsoleMessageSource.kSecurity + 1;
  ConsoleMessageSource.kDeprecation = ConsoleMessageSource.kOther + 1;
  ConsoleMessageSource.kWorker = ConsoleMessageSource.kDeprecation + 1;
  ConsoleMessageSource.kViolation = ConsoleMessageSource.kWorker + 1;
  ConsoleMessageSource.kIntervention = ConsoleMessageSource.kViolation + 1;
  ConsoleMessageSource.kRecommendation = ConsoleMessageSource.kIntervention + 1;
  ConsoleMessageSource.MIN_VALUE = 0,
  ConsoleMessageSource.MAX_VALUE = 13,

  ConsoleMessageSource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      return true;
    }
    return false;
  };

  ConsoleMessageSource.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ConsoleMessageLevel = ConsoleMessageLevel;
  exports.ConsoleMessageSource = ConsoleMessageSource;
})();