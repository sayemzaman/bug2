// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojo/swap_result.mojom';
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


  var SwapResult = {};
  SwapResult.ACK = 0;
  SwapResult.FAILED = SwapResult.ACK + 1;
  SwapResult.NAK_RECREATE_BUFFERS = SwapResult.FAILED + 1;
  SwapResult.MIN_VALUE = 0,
  SwapResult.MAX_VALUE = 2,

  SwapResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SwapResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.SwapResult = SwapResult;
})();