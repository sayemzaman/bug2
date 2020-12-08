// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/controller_service_worker_mode.mojom';
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


  var ControllerServiceWorkerMode = {};
  ControllerServiceWorkerMode.kNoController = 0;
  ControllerServiceWorkerMode.kNoFetchEventHandler = ControllerServiceWorkerMode.kNoController + 1;
  ControllerServiceWorkerMode.kControlled = ControllerServiceWorkerMode.kNoFetchEventHandler + 1;
  ControllerServiceWorkerMode.MIN_VALUE = 0,
  ControllerServiceWorkerMode.MAX_VALUE = 2,

  ControllerServiceWorkerMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ControllerServiceWorkerMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ControllerServiceWorkerMode = ControllerServiceWorkerMode;
})();