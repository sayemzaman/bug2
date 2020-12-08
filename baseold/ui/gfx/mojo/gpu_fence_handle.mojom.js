// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojo/gpu_fence_handle.mojom';
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


  var GpuFenceHandleType = {};
  GpuFenceHandleType.kEmpty = 0;
  GpuFenceHandleType.kAndroidNativeFenceSync = GpuFenceHandleType.kEmpty + 1;
  GpuFenceHandleType.MIN_VALUE = 0,
  GpuFenceHandleType.MAX_VALUE = 1,

  GpuFenceHandleType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  GpuFenceHandleType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function GpuFenceHandle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuFenceHandle.prototype.initDefaults_ = function() {
    this.type = 0;
    this.nativeFd = null;
  };
  GpuFenceHandle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuFenceHandle.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFenceHandle.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, GpuFenceHandleType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFenceHandle.nativeFd
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuFenceHandle.encodedSize = codec.kStructHeaderSize + 8;

  GpuFenceHandle.decode = function(decoder) {
    var packed;
    var val = new GpuFenceHandle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.nativeFd = decoder.decodeStruct(codec.NullableHandle);
    return val;
  };

  GpuFenceHandle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuFenceHandle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.NullableHandle, val.nativeFd);
  };
  exports.GpuFenceHandleType = GpuFenceHandleType;
  exports.GpuFenceHandle = GpuFenceHandle;
})();