// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/lifecycle.mojom';
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


  var FrameVisibility = {};
  FrameVisibility.kRenderedOutOfViewport = 0;
  FrameVisibility.kRenderedInViewport = FrameVisibility.kRenderedOutOfViewport + 1;
  FrameVisibility.kNotRendered = FrameVisibility.kRenderedInViewport + 1;
  FrameVisibility.MIN_VALUE = 0,
  FrameVisibility.MAX_VALUE = 2,

  FrameVisibility.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FrameVisibility.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FrameLifecycleState = {};
  FrameLifecycleState.kRunning = 0;
  FrameLifecycleState.kPaused = FrameLifecycleState.kRunning + 1;
  FrameLifecycleState.kFrozen = FrameLifecycleState.kPaused + 1;
  FrameLifecycleState.kFrozenAutoResumeMedia = FrameLifecycleState.kFrozen + 1;
  FrameLifecycleState.MIN_VALUE = 0,
  FrameLifecycleState.MAX_VALUE = 3,

  FrameLifecycleState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FrameLifecycleState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.FrameVisibility = FrameVisibility;
  exports.FrameLifecycleState = FrameLifecycleState;
})();