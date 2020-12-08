// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/gpu_feature_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/buffer_types.mojom', '../../../ui/gfx/mojo/buffer_types.mojom.js');
  }


  var GpuFeatureStatus = {};
  GpuFeatureStatus.Enabled = 0;
  GpuFeatureStatus.Blacklisted = GpuFeatureStatus.Enabled + 1;
  GpuFeatureStatus.Disabled = GpuFeatureStatus.Blacklisted + 1;
  GpuFeatureStatus.Software = GpuFeatureStatus.Disabled + 1;
  GpuFeatureStatus.Undefined = GpuFeatureStatus.Software + 1;
  GpuFeatureStatus.Max = GpuFeatureStatus.Undefined + 1;
  GpuFeatureStatus.MIN_VALUE = 0,
  GpuFeatureStatus.MAX_VALUE = 5,

  GpuFeatureStatus.isKnownEnumValue = function(value) {
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

  GpuFeatureStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function GpuFeatureInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuFeatureInfo.prototype.initDefaults_ = function() {
    this.statusValues = null;
    this.enabledGpuDriverBugWorkarounds = null;
    this.disabledExtensions = null;
    this.disabledWebglExtensions = null;
    this.appliedGpuBlacklistEntries = null;
    this.appliedGpuDriverBugListEntries = null;
    this.supportedBufferFormatsForAllocationAndTexturing = null;
  };
  GpuFeatureInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuFeatureInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.statusValues
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(GpuFeatureStatus), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.enabledGpuDriverBugWorkarounds
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.disabledExtensions
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.disabledWebglExtensions
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.appliedGpuBlacklistEntries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Uint32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.appliedGpuDriverBugListEntries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, codec.Uint32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuFeatureInfo.supportedBufferFormatsForAllocationAndTexturing
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 4, new codec.Enum(buffer_types$.BufferFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuFeatureInfo.encodedSize = codec.kStructHeaderSize + 56;

  GpuFeatureInfo.decode = function(decoder) {
    var packed;
    var val = new GpuFeatureInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.statusValues = decoder.decodeArrayPointer(new codec.Enum(GpuFeatureStatus));
    val.enabledGpuDriverBugWorkarounds = decoder.decodeArrayPointer(codec.Int32);
    val.disabledExtensions = decoder.decodeStruct(codec.String);
    val.disabledWebglExtensions = decoder.decodeStruct(codec.String);
    val.appliedGpuBlacklistEntries = decoder.decodeArrayPointer(codec.Uint32);
    val.appliedGpuDriverBugListEntries = decoder.decodeArrayPointer(codec.Uint32);
    val.supportedBufferFormatsForAllocationAndTexturing = decoder.decodeArrayPointer(new codec.Enum(buffer_types$.BufferFormat));
    return val;
  };

  GpuFeatureInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuFeatureInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(GpuFeatureStatus), val.statusValues);
    encoder.encodeArrayPointer(codec.Int32, val.enabledGpuDriverBugWorkarounds);
    encoder.encodeStruct(codec.String, val.disabledExtensions);
    encoder.encodeStruct(codec.String, val.disabledWebglExtensions);
    encoder.encodeArrayPointer(codec.Uint32, val.appliedGpuBlacklistEntries);
    encoder.encodeArrayPointer(codec.Uint32, val.appliedGpuDriverBugListEntries);
    encoder.encodeArrayPointer(new codec.Enum(buffer_types$.BufferFormat), val.supportedBufferFormatsForAllocationAndTexturing);
  };
  exports.GpuFeatureStatus = GpuFeatureStatus;
  exports.GpuFeatureInfo = GpuFeatureInfo;
})();