// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/memory_stats.mojom';
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



  function VideoMemoryProcessStats(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoMemoryProcessStats.prototype.initDefaults_ = function() {
    this.videoMemoryBytes = 0;
    this.hasDuplicates = false;
  };
  VideoMemoryProcessStats.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoMemoryProcessStats.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  VideoMemoryProcessStats.encodedSize = codec.kStructHeaderSize + 16;

  VideoMemoryProcessStats.decode = function(decoder) {
    var packed;
    var val = new VideoMemoryProcessStats();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.videoMemoryBytes = decoder.decodeStruct(codec.Uint64);
    packed = decoder.readUint8();
    val.hasDuplicates = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoMemoryProcessStats.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoMemoryProcessStats.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.videoMemoryBytes);
    packed = 0;
    packed |= (val.hasDuplicates & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoMemoryUsageStats(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoMemoryUsageStats.prototype.initDefaults_ = function() {
    this.processMap = null;
    this.bytesAllocated = 0;
  };
  VideoMemoryUsageStats.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoMemoryUsageStats.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoMemoryUsageStats.processMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.Int32, new codec.PointerTo(VideoMemoryProcessStats), false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoMemoryUsageStats.encodedSize = codec.kStructHeaderSize + 16;

  VideoMemoryUsageStats.decode = function(decoder) {
    var packed;
    var val = new VideoMemoryUsageStats();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processMap = decoder.decodeMapPointer(codec.Int32, new codec.PointerTo(VideoMemoryProcessStats));
    val.bytesAllocated = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  VideoMemoryUsageStats.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoMemoryUsageStats.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.Int32, new codec.PointerTo(VideoMemoryProcessStats), val.processMap);
    encoder.encodeStruct(codec.Uint64, val.bytesAllocated);
  };
  exports.VideoMemoryProcessStats = VideoMemoryProcessStats;
  exports.VideoMemoryUsageStats = VideoMemoryUsageStats;
})();