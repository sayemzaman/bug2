// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojo/buffer_types.mojom';
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
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }


  var BufferFormat = {};
  BufferFormat.R_8 = 0;
  BufferFormat.R_16 = BufferFormat.R_8 + 1;
  BufferFormat.RG_88 = BufferFormat.R_16 + 1;
  BufferFormat.BGR_565 = BufferFormat.RG_88 + 1;
  BufferFormat.RGBA_4444 = BufferFormat.BGR_565 + 1;
  BufferFormat.RGBX_8888 = BufferFormat.RGBA_4444 + 1;
  BufferFormat.RGBA_8888 = BufferFormat.RGBX_8888 + 1;
  BufferFormat.BGRX_8888 = BufferFormat.RGBA_8888 + 1;
  BufferFormat.BGRX_1010102 = BufferFormat.BGRX_8888 + 1;
  BufferFormat.RGBX_1010102 = BufferFormat.BGRX_1010102 + 1;
  BufferFormat.BGRA_8888 = BufferFormat.RGBX_1010102 + 1;
  BufferFormat.RGBA_F16 = BufferFormat.BGRA_8888 + 1;
  BufferFormat.YVU_420 = BufferFormat.RGBA_F16 + 1;
  BufferFormat.YUV_420_BIPLANAR = BufferFormat.YVU_420 + 1;
  BufferFormat.UYVY_422 = BufferFormat.YUV_420_BIPLANAR + 1;
  BufferFormat.MIN_VALUE = 0,
  BufferFormat.MAX_VALUE = 14,

  BufferFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      return true;
    }
    return false;
  };

  BufferFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BufferUsage = {};
  BufferUsage.GPU_READ = 0;
  BufferUsage.SCANOUT = BufferUsage.GPU_READ + 1;
  BufferUsage.SCANOUT_CAMERA_READ_WRITE = BufferUsage.SCANOUT + 1;
  BufferUsage.CAMERA_AND_CPU_READ_WRITE = BufferUsage.SCANOUT_CAMERA_READ_WRITE + 1;
  BufferUsage.SCANOUT_CPU_READ_WRITE = BufferUsage.CAMERA_AND_CPU_READ_WRITE + 1;
  BufferUsage.SCANOUT_VDA_WRITE = BufferUsage.SCANOUT_CPU_READ_WRITE + 1;
  BufferUsage.GPU_READ_CPU_READ_WRITE = BufferUsage.SCANOUT_VDA_WRITE + 1;
  BufferUsage.MIN_VALUE = 0,
  BufferUsage.MAX_VALUE = 6,

  BufferUsage.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  BufferUsage.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function BufferUsageAndFormat(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BufferUsageAndFormat.prototype.initDefaults_ = function() {
    this.usage = 0;
    this.format = 0;
  };
  BufferUsageAndFormat.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BufferUsageAndFormat.validate = function(messageValidator, offset) {
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


    // validate BufferUsageAndFormat.usage
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BufferUsage);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BufferUsageAndFormat.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, BufferFormat);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BufferUsageAndFormat.encodedSize = codec.kStructHeaderSize + 8;

  BufferUsageAndFormat.decode = function(decoder) {
    var packed;
    var val = new BufferUsageAndFormat();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.usage = decoder.decodeStruct(codec.Int32);
    val.format = decoder.decodeStruct(codec.Int32);
    return val;
  };

  BufferUsageAndFormat.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BufferUsageAndFormat.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.usage);
    encoder.encodeStruct(codec.Int32, val.format);
  };
  function GpuMemoryBufferId(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferId.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  GpuMemoryBufferId.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferId.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  GpuMemoryBufferId.encodedSize = codec.kStructHeaderSize + 8;

  GpuMemoryBufferId.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferId();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuMemoryBufferId.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferId.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AHardwareBufferHandle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AHardwareBufferHandle.prototype.initDefaults_ = function() {
    this.bufferHandle = null;
    this.trackingPipe = null;
  };
  AHardwareBufferHandle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AHardwareBufferHandle.validate = function(messageValidator, offset) {
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


    // validate AHardwareBufferHandle.bufferHandle
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AHardwareBufferHandle.trackingPipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AHardwareBufferHandle.encodedSize = codec.kStructHeaderSize + 8;

  AHardwareBufferHandle.decode = function(decoder) {
    var packed;
    var val = new AHardwareBufferHandle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferHandle = decoder.decodeStruct(codec.Handle);
    val.trackingPipe = decoder.decodeStruct(codec.Handle);
    return val;
  };

  AHardwareBufferHandle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AHardwareBufferHandle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.bufferHandle);
    encoder.encodeStruct(codec.Handle, val.trackingPipe);
  };
  function GpuMemoryBufferHandle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferHandle.prototype.initDefaults_ = function() {
    this.id = null;
    this.offset = 0;
    this.stride = 0;
    this.platformHandle = null;
  };
  GpuMemoryBufferHandle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferHandle.validate = function(messageValidator, offset) {
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


    // validate GpuMemoryBufferHandle.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, GpuMemoryBufferId, false);
    if (err !== validator.validationError.NONE)
        return err;




    // validate GpuMemoryBufferHandle.platformHandle
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, GpuMemoryBufferPlatformHandle, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuMemoryBufferHandle.encodedSize = codec.kStructHeaderSize + 32;

  GpuMemoryBufferHandle.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferHandle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStructPointer(GpuMemoryBufferId);
    val.offset = decoder.decodeStruct(codec.Uint32);
    val.stride = decoder.decodeStruct(codec.Uint32);
    val.platformHandle = decoder.decodeStruct(GpuMemoryBufferPlatformHandle);
    return val;
  };

  GpuMemoryBufferHandle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferHandle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(GpuMemoryBufferId, val.id);
    encoder.encodeStruct(codec.Uint32, val.offset);
    encoder.encodeStruct(codec.Uint32, val.stride);
    encoder.encodeStruct(GpuMemoryBufferPlatformHandle, val.platformHandle);
  };

  function GpuMemoryBufferPlatformHandle(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  GpuMemoryBufferPlatformHandle.Tags = {
    sharedMemoryHandle: 0,
    androidHardwareBufferHandle: 1,
  };

  GpuMemoryBufferPlatformHandle.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  GpuMemoryBufferPlatformHandle.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "sharedMemoryHandle",
        "androidHardwareBufferHandle",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a GpuMemoryBufferPlatformHandle member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(GpuMemoryBufferPlatformHandle.prototype, "sharedMemoryHandle", {
    get: function() {
      if (this.$tag != GpuMemoryBufferPlatformHandle.Tags.sharedMemoryHandle) {
        throw new ReferenceError(
            "GpuMemoryBufferPlatformHandle.sharedMemoryHandle is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = GpuMemoryBufferPlatformHandle.Tags.sharedMemoryHandle;
      this.$data = value;
    }
  });
  Object.defineProperty(GpuMemoryBufferPlatformHandle.prototype, "androidHardwareBufferHandle", {
    get: function() {
      if (this.$tag != GpuMemoryBufferPlatformHandle.Tags.androidHardwareBufferHandle) {
        throw new ReferenceError(
            "GpuMemoryBufferPlatformHandle.androidHardwareBufferHandle is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = GpuMemoryBufferPlatformHandle.Tags.androidHardwareBufferHandle;
      this.$data = value;
    }
  });


    GpuMemoryBufferPlatformHandle.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case GpuMemoryBufferPlatformHandle.Tags.sharedMemoryHandle:
          encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.sharedMemoryHandle);
          break;
        case GpuMemoryBufferPlatformHandle.Tags.androidHardwareBufferHandle:
          encoder.encodeStructPointer(AHardwareBufferHandle, val.androidHardwareBufferHandle);
          break;
      }
      encoder.align();
    };


    GpuMemoryBufferPlatformHandle.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new GpuMemoryBufferPlatformHandle();
      var tag = decoder.readUint32();
      switch (tag) {
        case GpuMemoryBufferPlatformHandle.Tags.sharedMemoryHandle:
          result.sharedMemoryHandle = decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
          break;
        case GpuMemoryBufferPlatformHandle.Tags.androidHardwareBufferHandle:
          result.androidHardwareBufferHandle = decoder.decodeStructPointer(AHardwareBufferHandle);
          break;
      }
      decoder.align();

      return result;
    };


    GpuMemoryBufferPlatformHandle.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case GpuMemoryBufferPlatformHandle.Tags.sharedMemoryHandle:
          

    // validate GpuMemoryBufferPlatformHandle.sharedMemoryHandle
    err = messageValidator.validateStructPointer(data_offset, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case GpuMemoryBufferPlatformHandle.Tags.androidHardwareBufferHandle:
          

    // validate GpuMemoryBufferPlatformHandle.androidHardwareBufferHandle
    err = messageValidator.validateStructPointer(data_offset, AHardwareBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  GpuMemoryBufferPlatformHandle.encodedSize = 16;
  exports.BufferFormat = BufferFormat;
  exports.BufferUsage = BufferUsage;
  exports.BufferUsageAndFormat = BufferUsageAndFormat;
  exports.GpuMemoryBufferId = GpuMemoryBufferId;
  exports.AHardwareBufferHandle = AHardwareBufferHandle;
  exports.GpuMemoryBufferHandle = GpuMemoryBufferHandle;
  exports.GpuMemoryBufferPlatformHandle = GpuMemoryBufferPlatformHandle;
})();