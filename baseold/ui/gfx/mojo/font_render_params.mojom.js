// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojo/font_render_params.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gfx.mojom');


  var Hinting = {};
  Hinting.kNone = 0;
  Hinting.kSlight = Hinting.kNone + 1;
  Hinting.kMedium = Hinting.kSlight + 1;
  Hinting.kFull = Hinting.kMedium + 1;
  Hinting.MIN_VALUE = 0,
  Hinting.MAX_VALUE = 3,

  Hinting.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  Hinting.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SubpixelRendering = {};
  SubpixelRendering.kNone = 0;
  SubpixelRendering.kRGB = SubpixelRendering.kNone + 1;
  SubpixelRendering.kBGR = SubpixelRendering.kRGB + 1;
  SubpixelRendering.kVRGB = SubpixelRendering.kBGR + 1;
  SubpixelRendering.kVBGR = SubpixelRendering.kVRGB + 1;
  SubpixelRendering.MIN_VALUE = 0,
  SubpixelRendering.MAX_VALUE = 4,

  SubpixelRendering.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  SubpixelRendering.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.Hinting = Hinting;
  exports.SubpixelRendering = SubpixelRendering;
})();