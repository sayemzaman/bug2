// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cors.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');


  var CorsPreflightPolicy = {};
  CorsPreflightPolicy.kConsiderPreflight = 0;
  CorsPreflightPolicy.kPreventPreflight = CorsPreflightPolicy.kConsiderPreflight + 1;
  CorsPreflightPolicy.MIN_VALUE = 0,
  CorsPreflightPolicy.MAX_VALUE = 1,

  CorsPreflightPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CorsPreflightPolicy.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CorsError = {};
  CorsError.kDisallowedByMode = 0;
  CorsError.kInvalidResponse = CorsError.kDisallowedByMode + 1;
  CorsError.kWildcardOriginNotAllowed = CorsError.kInvalidResponse + 1;
  CorsError.kMissingAllowOriginHeader = CorsError.kWildcardOriginNotAllowed + 1;
  CorsError.kMultipleAllowOriginValues = CorsError.kMissingAllowOriginHeader + 1;
  CorsError.kInvalidAllowOriginValue = CorsError.kMultipleAllowOriginValues + 1;
  CorsError.kAllowOriginMismatch = CorsError.kInvalidAllowOriginValue + 1;
  CorsError.kInvalidAllowCredentials = CorsError.kAllowOriginMismatch + 1;
  CorsError.kCorsDisabledScheme = CorsError.kInvalidAllowCredentials + 1;
  CorsError.kPreflightInvalidStatus = CorsError.kCorsDisabledScheme + 1;
  CorsError.kPreflightDisallowedRedirect = CorsError.kPreflightInvalidStatus + 1;
  CorsError.kPreflightWildcardOriginNotAllowed = CorsError.kPreflightDisallowedRedirect + 1;
  CorsError.kPreflightMissingAllowOriginHeader = CorsError.kPreflightWildcardOriginNotAllowed + 1;
  CorsError.kPreflightMultipleAllowOriginValues = CorsError.kPreflightMissingAllowOriginHeader + 1;
  CorsError.kPreflightInvalidAllowOriginValue = CorsError.kPreflightMultipleAllowOriginValues + 1;
  CorsError.kPreflightAllowOriginMismatch = CorsError.kPreflightInvalidAllowOriginValue + 1;
  CorsError.kPreflightInvalidAllowCredentials = CorsError.kPreflightAllowOriginMismatch + 1;
  CorsError.kPreflightMissingAllowExternal = CorsError.kPreflightInvalidAllowCredentials + 1;
  CorsError.kPreflightInvalidAllowExternal = CorsError.kPreflightMissingAllowExternal + 1;
  CorsError.kInvalidAllowMethodsPreflightResponse = CorsError.kPreflightInvalidAllowExternal + 1;
  CorsError.kInvalidAllowHeadersPreflightResponse = CorsError.kInvalidAllowMethodsPreflightResponse + 1;
  CorsError.kMethodDisallowedByPreflightResponse = CorsError.kInvalidAllowHeadersPreflightResponse + 1;
  CorsError.kHeaderDisallowedByPreflightResponse = CorsError.kMethodDisallowedByPreflightResponse + 1;
  CorsError.kRedirectContainsCredentials = CorsError.kHeaderDisallowedByPreflightResponse + 1;
  CorsError.MIN_VALUE = 0,
  CorsError.MAX_VALUE = 23,

  CorsError.isKnownEnumValue = function(value) {
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
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return true;
    }
    return false;
  };

  CorsError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.CorsPreflightPolicy = CorsPreflightPolicy;
  exports.CorsError = CorsError;
})();