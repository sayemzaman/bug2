// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/service_worker_event_status.mojom';
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


  var ServiceWorkerEventStatus = {};
  ServiceWorkerEventStatus.COMPLETED = 0;
  ServiceWorkerEventStatus.REJECTED = ServiceWorkerEventStatus.COMPLETED + 1;
  ServiceWorkerEventStatus.ABORTED = ServiceWorkerEventStatus.REJECTED + 1;
  ServiceWorkerEventStatus.TIMEOUT = ServiceWorkerEventStatus.ABORTED + 1;
  ServiceWorkerEventStatus.MAX = ServiceWorkerEventStatus.TIMEOUT;
  ServiceWorkerEventStatus.MIN_VALUE = 0,
  ServiceWorkerEventStatus.MAX_VALUE = 3,

  ServiceWorkerEventStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ServiceWorkerEventStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ServiceWorkerStartStatus = {};
  ServiceWorkerStartStatus.kNormalCompletion = 0;
  ServiceWorkerStartStatus.kAbruptCompletion = ServiceWorkerStartStatus.kNormalCompletion + 1;
  ServiceWorkerStartStatus.MIN_VALUE = 0,
  ServiceWorkerStartStatus.MAX_VALUE = 1,

  ServiceWorkerStartStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  ServiceWorkerStartStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ServiceWorkerEventStatus = ServiceWorkerEventStatus;
  exports.ServiceWorkerStartStatus = ServiceWorkerStartStatus;
})();