// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/vulkan_ycbcr_info.mojom';
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



  function VulkanYCbCrInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VulkanYCbCrInfo.prototype.initDefaults_ = function() {
    this.suggestedYcbcrModel = 0;
    this.suggestedYcbcrRange = 0;
    this.suggestedXchromaOffset = 0;
    this.suggestedYchromaOffset = 0;
    this.externalFormat = 0;
    this.formatFeatures = 0;
  };
  VulkanYCbCrInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VulkanYCbCrInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;







    return validator.validationError.NONE;
  };

  VulkanYCbCrInfo.encodedSize = codec.kStructHeaderSize + 32;

  VulkanYCbCrInfo.decode = function(decoder) {
    var packed;
    var val = new VulkanYCbCrInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.suggestedYcbcrModel = decoder.decodeStruct(codec.Uint32);
    val.suggestedYcbcrRange = decoder.decodeStruct(codec.Uint32);
    val.suggestedXchromaOffset = decoder.decodeStruct(codec.Uint32);
    val.suggestedYchromaOffset = decoder.decodeStruct(codec.Uint32);
    val.externalFormat = decoder.decodeStruct(codec.Uint64);
    val.formatFeatures = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VulkanYCbCrInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VulkanYCbCrInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.suggestedYcbcrModel);
    encoder.encodeStruct(codec.Uint32, val.suggestedYcbcrRange);
    encoder.encodeStruct(codec.Uint32, val.suggestedXchromaOffset);
    encoder.encodeStruct(codec.Uint32, val.suggestedYchromaOffset);
    encoder.encodeStruct(codec.Uint64, val.externalFormat);
    encoder.encodeStruct(codec.Uint32, val.formatFeatures);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.VulkanYCbCrInfo = VulkanYCbCrInfo;
})();