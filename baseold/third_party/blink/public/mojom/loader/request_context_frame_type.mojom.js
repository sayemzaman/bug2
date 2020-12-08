// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/request_context_frame_type.mojom';
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


  var RequestContextFrameType = {};
  RequestContextFrameType.kAuxiliary = 0;
  RequestContextFrameType.kNested = RequestContextFrameType.kAuxiliary + 1;
  RequestContextFrameType.kNone = RequestContextFrameType.kNested + 1;
  RequestContextFrameType.kTopLevel = RequestContextFrameType.kNone + 1;
  RequestContextFrameType.MIN_VALUE = 0,
  RequestContextFrameType.MAX_VALUE = 3,

  RequestContextFrameType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  RequestContextFrameType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.RequestContextFrameType = RequestContextFrameType;
})();