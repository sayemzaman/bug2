// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/referrer_policy.mojom';
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


  var ReferrerPolicy = {};
  ReferrerPolicy.kAlways = 0;
  ReferrerPolicy.kDefault = ReferrerPolicy.kAlways + 1;
  ReferrerPolicy.kNoReferrerWhenDowngrade = ReferrerPolicy.kDefault + 1;
  ReferrerPolicy.kNever = ReferrerPolicy.kNoReferrerWhenDowngrade + 1;
  ReferrerPolicy.kOrigin = ReferrerPolicy.kNever + 1;
  ReferrerPolicy.kOriginWhenCrossOrigin = ReferrerPolicy.kOrigin + 1;
  ReferrerPolicy.kNoReferrerWhenDowngradeOriginWhenCrossOrigin = ReferrerPolicy.kOriginWhenCrossOrigin + 1;
  ReferrerPolicy.kSameOrigin = ReferrerPolicy.kNoReferrerWhenDowngradeOriginWhenCrossOrigin + 1;
  ReferrerPolicy.kStrictOrigin = ReferrerPolicy.kSameOrigin + 1;
  ReferrerPolicy.kLast = ReferrerPolicy.kStrictOrigin;
  ReferrerPolicy.MIN_VALUE = 0,
  ReferrerPolicy.MAX_VALUE = 8,

  ReferrerPolicy.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  ReferrerPolicy.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ReferrerPolicy = ReferrerPolicy;
})();