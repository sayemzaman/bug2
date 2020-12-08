// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/site_engagement/site_engagement.mojom';
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


  var EngagementLevel = {};
  EngagementLevel.NONE = 0;
  EngagementLevel.MINIMAL = EngagementLevel.NONE + 1;
  EngagementLevel.LOW = EngagementLevel.MINIMAL + 1;
  EngagementLevel.MEDIUM = EngagementLevel.LOW + 1;
  EngagementLevel.HIGH = EngagementLevel.MEDIUM + 1;
  EngagementLevel.MAX = EngagementLevel.HIGH + 1;
  EngagementLevel.MIN_VALUE = 0,
  EngagementLevel.MAX_VALUE = 5,

  EngagementLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  EngagementLevel.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.EngagementLevel = EngagementLevel;
})();