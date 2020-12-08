// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/media_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var mailbox_holder$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox_holder.mojom', '../../../gpu/ipc/common/mailbox_holder.mojom.js');
  }
  var vulkan_ycbcr_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/vulkan_ycbcr_info.mojom', '../../../gpu/ipc/common/vulkan_ycbcr_info.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../mojo/public/mojom/base/values.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/color_space.mojom', '../../../ui/gfx/mojo/color_space.mojom.js');
  }


  var AudioCodec = {};

  AudioCodec.isKnownEnumValue = function(value) {
    return false;
  };

  AudioCodec.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BufferingState = {};

  BufferingState.isKnownEnumValue = function(value) {
    return false;
  };

  BufferingState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ChannelLayout = {};

  ChannelLayout.isKnownEnumValue = function(value) {
    return false;
  };

  ChannelLayout.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpace = {};

  ColorSpace.isKnownEnumValue = function(value) {
    return false;
  };

  ColorSpace.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var DecodeStatus = {};

  DecodeStatus.isKnownEnumValue = function(value) {
    return false;
  };

  DecodeStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var OutputDeviceStatus = {};

  OutputDeviceStatus.isKnownEnumValue = function(value) {
    return false;
  };

  OutputDeviceStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PipelineStatus = {};

  PipelineStatus.isKnownEnumValue = function(value) {
    return false;
  };

  PipelineStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SampleFormat = {};

  SampleFormat.isKnownEnumValue = function(value) {
    return false;
  };

  SampleFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCodec = {};

  VideoCodec.isKnownEnumValue = function(value) {
    return false;
  };

  VideoCodec.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCodecProfile = {};

  VideoCodecProfile.isKnownEnumValue = function(value) {
    return false;
  };

  VideoCodecProfile.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoPixelFormat = {};

  VideoPixelFormat.isKnownEnumValue = function(value) {
    return false;
  };

  VideoPixelFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoRotation = {};

  VideoRotation.isKnownEnumValue = function(value) {
    return false;
  };

  VideoRotation.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var WaitingReason = {};

  WaitingReason.isKnownEnumValue = function(value) {
    return false;
  };

  WaitingReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var WatchTimeKey = {};

  WatchTimeKey.isKnownEnumValue = function(value) {
    return false;
  };

  WatchTimeKey.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var EncryptionMode = {};

  EncryptionMode.isKnownEnumValue = function(value) {
    return false;
  };

  EncryptionMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MediaContainerName = {};

  MediaContainerName.isKnownEnumValue = function(value) {
    return false;
  };

  MediaContainerName.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MediaStatusState = {};

  MediaStatusState.isKnownEnumValue = function(value) {
    return false;
  };

  MediaStatusState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function MediaLogEvent(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaLogEvent.prototype.initDefaults_ = function() {
  };
  MediaLogEvent.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaLogEvent.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaLogEvent.encodedSize = codec.kStructHeaderSize + 0;

  MediaLogEvent.decode = function(decoder) {
    var packed;
    var val = new MediaLogEvent();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaLogEvent.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaLogEvent.encodedSize);
    encoder.writeUint32(0);
  };
  function VideoTransformation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoTransformation.prototype.initDefaults_ = function() {
    this.rotation = 0;
    this.mirrored = false;
  };
  VideoTransformation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoTransformation.validate = function(messageValidator, offset) {
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


    // validate VideoTransformation.rotation
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoRotation);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoTransformation.encodedSize = codec.kStructHeaderSize + 8;

  VideoTransformation.decode = function(decoder) {
    var packed;
    var val = new VideoTransformation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rotation = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.mirrored = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoTransformation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoTransformation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.rotation);
    packed = 0;
    packed |= (val.mirrored & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function EncryptionPattern(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EncryptionPattern.prototype.initDefaults_ = function() {
    this.cryptByteBlock = 0;
    this.skipByteBlock = 0;
  };
  EncryptionPattern.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EncryptionPattern.validate = function(messageValidator, offset) {
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

  EncryptionPattern.encodedSize = codec.kStructHeaderSize + 8;

  EncryptionPattern.decode = function(decoder) {
    var packed;
    var val = new EncryptionPattern();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cryptByteBlock = decoder.decodeStruct(codec.Uint32);
    val.skipByteBlock = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  EncryptionPattern.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EncryptionPattern.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.cryptByteBlock);
    encoder.encodeStruct(codec.Uint32, val.skipByteBlock);
  };
  function EncryptionScheme(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  EncryptionScheme.CipherMode = {};

  EncryptionScheme.CipherMode.isKnownEnumValue = function(value) {
    return false;
  };

  EncryptionScheme.CipherMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  EncryptionScheme.prototype.initDefaults_ = function() {
    this.mode = 0;
    this.pattern = null;
  };
  EncryptionScheme.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EncryptionScheme.validate = function(messageValidator, offset) {
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


    // validate EncryptionScheme.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, EncryptionScheme.CipherMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EncryptionScheme.pattern
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, EncryptionPattern, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EncryptionScheme.encodedSize = codec.kStructHeaderSize + 16;

  EncryptionScheme.decode = function(decoder) {
    var packed;
    var val = new EncryptionScheme();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.pattern = decoder.decodeStructPointer(EncryptionPattern);
    return val;
  };

  EncryptionScheme.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EncryptionScheme.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(EncryptionPattern, val.pattern);
  };
  function VideoColorSpace(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  VideoColorSpace.PrimaryID = {};

  VideoColorSpace.PrimaryID.isKnownEnumValue = function(value) {
    return false;
  };

  VideoColorSpace.PrimaryID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  VideoColorSpace.TransferID = {};

  VideoColorSpace.TransferID.isKnownEnumValue = function(value) {
    return false;
  };

  VideoColorSpace.TransferID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  VideoColorSpace.MatrixID = {};

  VideoColorSpace.MatrixID.isKnownEnumValue = function(value) {
    return false;
  };

  VideoColorSpace.MatrixID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  VideoColorSpace.RangeID = {};

  VideoColorSpace.RangeID.isKnownEnumValue = function(value) {
    return false;
  };

  VideoColorSpace.RangeID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  VideoColorSpace.prototype.initDefaults_ = function() {
    this.primaries = 0;
    this.transfer = 0;
    this.matrix = 0;
    this.range = 0;
  };
  VideoColorSpace.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoColorSpace.validate = function(messageValidator, offset) {
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


    // validate VideoColorSpace.primaries
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoColorSpace.PrimaryID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoColorSpace.transfer
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, VideoColorSpace.TransferID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoColorSpace.matrix
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, VideoColorSpace.MatrixID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoColorSpace.range
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, VideoColorSpace.RangeID);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoColorSpace.encodedSize = codec.kStructHeaderSize + 16;

  VideoColorSpace.decode = function(decoder) {
    var packed;
    var val = new VideoColorSpace();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.primaries = decoder.decodeStruct(codec.Int32);
    val.transfer = decoder.decodeStruct(codec.Int32);
    val.matrix = decoder.decodeStruct(codec.Int32);
    val.range = decoder.decodeStruct(codec.Int32);
    return val;
  };

  VideoColorSpace.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoColorSpace.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.primaries);
    encoder.encodeStruct(codec.Int32, val.transfer);
    encoder.encodeStruct(codec.Int32, val.matrix);
    encoder.encodeStruct(codec.Int32, val.range);
  };
  function MasteringMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MasteringMetadata.prototype.initDefaults_ = function() {
    this.primaryR = null;
    this.primaryG = null;
    this.primaryB = null;
    this.whitePoint = null;
    this.luminanceMax = 0;
    this.luminanceMin = 0;
  };
  MasteringMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MasteringMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MasteringMetadata.primaryR
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MasteringMetadata.primaryG
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MasteringMetadata.primaryB
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MasteringMetadata.whitePoint
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  MasteringMetadata.encodedSize = codec.kStructHeaderSize + 40;

  MasteringMetadata.decode = function(decoder) {
    var packed;
    var val = new MasteringMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.primaryR = decoder.decodeStructPointer(geometry$.PointF);
    val.primaryG = decoder.decodeStructPointer(geometry$.PointF);
    val.primaryB = decoder.decodeStructPointer(geometry$.PointF);
    val.whitePoint = decoder.decodeStructPointer(geometry$.PointF);
    val.luminanceMax = decoder.decodeStruct(codec.Float);
    val.luminanceMin = decoder.decodeStruct(codec.Float);
    return val;
  };

  MasteringMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MasteringMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.PointF, val.primaryR);
    encoder.encodeStructPointer(geometry$.PointF, val.primaryG);
    encoder.encodeStructPointer(geometry$.PointF, val.primaryB);
    encoder.encodeStructPointer(geometry$.PointF, val.whitePoint);
    encoder.encodeStruct(codec.Float, val.luminanceMax);
    encoder.encodeStruct(codec.Float, val.luminanceMin);
  };
  function HDRMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HDRMetadata.prototype.initDefaults_ = function() {
    this.masteringMetadata = null;
    this.maxContentLightLevel = 0;
    this.maxFrameAverageLightLevel = 0;
  };
  HDRMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HDRMetadata.validate = function(messageValidator, offset) {
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


    // validate HDRMetadata.masteringMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MasteringMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  HDRMetadata.encodedSize = codec.kStructHeaderSize + 16;

  HDRMetadata.decode = function(decoder) {
    var packed;
    var val = new HDRMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.masteringMetadata = decoder.decodeStructPointer(MasteringMetadata);
    val.maxContentLightLevel = decoder.decodeStruct(codec.Uint32);
    val.maxFrameAverageLightLevel = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  HDRMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HDRMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MasteringMetadata, val.masteringMetadata);
    encoder.encodeStruct(codec.Uint32, val.maxContentLightLevel);
    encoder.encodeStruct(codec.Uint32, val.maxFrameAverageLightLevel);
  };
  function AudioDecoderConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoderConfig.prototype.initDefaults_ = function() {
    this.codec = 0;
    this.sampleFormat = 0;
    this.channelLayout = 0;
    this.samplesPerSecond = 0;
    this.extraData = null;
    this.seekPreroll = null;
    this.codecDelay = 0;
    this.encryptionScheme = null;
  };
  AudioDecoderConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoderConfig.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoderConfig.codec
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AudioCodec);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoderConfig.sampleFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, SampleFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoderConfig.channelLayout
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ChannelLayout);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AudioDecoderConfig.extraData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoderConfig.seekPreroll
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AudioDecoderConfig.encryptionScheme
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, EncryptionScheme, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoderConfig.encodedSize = codec.kStructHeaderSize + 48;

  AudioDecoderConfig.decode = function(decoder) {
    var packed;
    var val = new AudioDecoderConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.codec = decoder.decodeStruct(codec.Int32);
    val.sampleFormat = decoder.decodeStruct(codec.Int32);
    val.channelLayout = decoder.decodeStruct(codec.Int32);
    val.samplesPerSecond = decoder.decodeStruct(codec.Int32);
    val.extraData = decoder.decodeArrayPointer(codec.Uint8);
    val.seekPreroll = decoder.decodeStructPointer(time$.TimeDelta);
    val.codecDelay = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.encryptionScheme = decoder.decodeStructPointer(EncryptionScheme);
    return val;
  };

  AudioDecoderConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoderConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.codec);
    encoder.encodeStruct(codec.Int32, val.sampleFormat);
    encoder.encodeStruct(codec.Int32, val.channelLayout);
    encoder.encodeStruct(codec.Int32, val.samplesPerSecond);
    encoder.encodeArrayPointer(codec.Uint8, val.extraData);
    encoder.encodeStructPointer(time$.TimeDelta, val.seekPreroll);
    encoder.encodeStruct(codec.Int32, val.codecDelay);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(EncryptionScheme, val.encryptionScheme);
  };
  function VideoDecoderConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoDecoderConfig.prototype.initDefaults_ = function() {
    this.codec = 0;
    this.profile = 0;
    this.format = 0;
    this.transformation = null;
    this.codedSize = null;
    this.visibleRect = null;
    this.naturalSize = null;
    this.extraData = null;
    this.encryptionScheme = null;
    this.colorSpaceInfo = null;
    this.hdrMetadata = null;
  };
  VideoDecoderConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoDecoderConfig.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.codec
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoCodec);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.profile
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, VideoCodecProfile);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, VideoPixelFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.transformation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, VideoTransformation, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.codedSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.visibleRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.naturalSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.extraData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.encryptionScheme
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, EncryptionScheme, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.colorSpaceInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, VideoColorSpace, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecoderConfig.hdrMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, HDRMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoDecoderConfig.encodedSize = codec.kStructHeaderSize + 80;

  VideoDecoderConfig.decode = function(decoder) {
    var packed;
    var val = new VideoDecoderConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.codec = decoder.decodeStruct(codec.Int32);
    val.profile = decoder.decodeStruct(codec.Int32);
    val.format = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.transformation = decoder.decodeStructPointer(VideoTransformation);
    val.codedSize = decoder.decodeStructPointer(geometry$.Size);
    val.visibleRect = decoder.decodeStructPointer(geometry$.Rect);
    val.naturalSize = decoder.decodeStructPointer(geometry$.Size);
    val.extraData = decoder.decodeArrayPointer(codec.Uint8);
    val.encryptionScheme = decoder.decodeStructPointer(EncryptionScheme);
    val.colorSpaceInfo = decoder.decodeStructPointer(VideoColorSpace);
    val.hdrMetadata = decoder.decodeStructPointer(HDRMetadata);
    return val;
  };

  VideoDecoderConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoDecoderConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.codec);
    encoder.encodeStruct(codec.Int32, val.profile);
    encoder.encodeStruct(codec.Int32, val.format);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(VideoTransformation, val.transformation);
    encoder.encodeStructPointer(geometry$.Size, val.codedSize);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleRect);
    encoder.encodeStructPointer(geometry$.Size, val.naturalSize);
    encoder.encodeArrayPointer(codec.Uint8, val.extraData);
    encoder.encodeStructPointer(EncryptionScheme, val.encryptionScheme);
    encoder.encodeStructPointer(VideoColorSpace, val.colorSpaceInfo);
    encoder.encodeStructPointer(HDRMetadata, val.hdrMetadata);
  };
  function SubsampleEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SubsampleEntry.prototype.initDefaults_ = function() {
  };
  SubsampleEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SubsampleEntry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SubsampleEntry.encodedSize = codec.kStructHeaderSize + 0;

  SubsampleEntry.decode = function(decoder) {
    var packed;
    var val = new SubsampleEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SubsampleEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SubsampleEntry.encodedSize);
    encoder.writeUint32(0);
  };
  function DecryptConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DecryptConfig.prototype.initDefaults_ = function() {
    this.encryptionMode = 0;
    this.keyId = null;
    this.iv = null;
    this.subsamples = null;
    this.encryptionPattern = null;
  };
  DecryptConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DecryptConfig.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecryptConfig.encryptionMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, EncryptionMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecryptConfig.keyId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecryptConfig.iv
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecryptConfig.subsamples
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(SubsampleEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecryptConfig.encryptionPattern
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, EncryptionPattern, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DecryptConfig.encodedSize = codec.kStructHeaderSize + 40;

  DecryptConfig.decode = function(decoder) {
    var packed;
    var val = new DecryptConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.encryptionMode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.keyId = decoder.decodeStruct(codec.String);
    val.iv = decoder.decodeStruct(codec.String);
    val.subsamples = decoder.decodeArrayPointer(new codec.PointerTo(SubsampleEntry));
    val.encryptionPattern = decoder.decodeStructPointer(EncryptionPattern);
    return val;
  };

  DecryptConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DecryptConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.encryptionMode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.keyId);
    encoder.encodeStruct(codec.String, val.iv);
    encoder.encodeArrayPointer(new codec.PointerTo(SubsampleEntry), val.subsamples);
    encoder.encodeStructPointer(EncryptionPattern, val.encryptionPattern);
  };
  function DecoderBuffer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DecoderBuffer.prototype.initDefaults_ = function() {
    this.timestamp = null;
    this.duration = null;
    this.isEndOfStream = false;
    this.isKeyFrame = false;
    this.dataSize = 0;
    this.sideData = null;
    this.decryptConfig = null;
    this.frontDiscard = null;
    this.backDiscard = null;
  };
  DecoderBuffer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DecoderBuffer.validate = function(messageValidator, offset) {
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


    // validate DecoderBuffer.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecoderBuffer.duration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;





    // validate DecoderBuffer.sideData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecoderBuffer.decryptConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, DecryptConfig, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecoderBuffer.frontDiscard
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DecoderBuffer.backDiscard
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DecoderBuffer.encodedSize = codec.kStructHeaderSize + 56;

  DecoderBuffer.decode = function(decoder) {
    var packed;
    var val = new DecoderBuffer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timestamp = decoder.decodeStructPointer(time$.TimeDelta);
    val.duration = decoder.decodeStructPointer(time$.TimeDelta);
    packed = decoder.readUint8();
    val.isEndOfStream = (packed >> 0) & 1 ? true : false;
    val.isKeyFrame = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.dataSize = decoder.decodeStruct(codec.Uint32);
    val.sideData = decoder.decodeArrayPointer(codec.Uint8);
    val.decryptConfig = decoder.decodeStructPointer(DecryptConfig);
    val.frontDiscard = decoder.decodeStructPointer(time$.TimeDelta);
    val.backDiscard = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  DecoderBuffer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DecoderBuffer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeStructPointer(time$.TimeDelta, val.duration);
    packed = 0;
    packed |= (val.isEndOfStream & 1) << 0
    packed |= (val.isKeyFrame & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.dataSize);
    encoder.encodeArrayPointer(codec.Uint8, val.sideData);
    encoder.encodeStructPointer(DecryptConfig, val.decryptConfig);
    encoder.encodeStructPointer(time$.TimeDelta, val.frontDiscard);
    encoder.encodeStructPointer(time$.TimeDelta, val.backDiscard);
  };
  function AudioBuffer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioBuffer.prototype.initDefaults_ = function() {
    this.sampleFormat = 0;
    this.channelLayout = 0;
    this.channelCount = 0;
    this.sampleRate = 0;
    this.frameCount = 0;
    this.endOfStream = false;
    this.timestamp = null;
    this.data = null;
  };
  AudioBuffer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioBuffer.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioBuffer.sampleFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SampleFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioBuffer.channelLayout
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ChannelLayout);
    if (err !== validator.validationError.NONE)
        return err;






    // validate AudioBuffer.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioBuffer.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioBuffer.encodedSize = codec.kStructHeaderSize + 40;

  AudioBuffer.decode = function(decoder) {
    var packed;
    var val = new AudioBuffer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sampleFormat = decoder.decodeStruct(codec.Int32);
    val.channelLayout = decoder.decodeStruct(codec.Int32);
    val.channelCount = decoder.decodeStruct(codec.Int32);
    val.sampleRate = decoder.decodeStruct(codec.Int32);
    val.frameCount = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.endOfStream = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timestamp = decoder.decodeStructPointer(time$.TimeDelta);
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  AudioBuffer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioBuffer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.sampleFormat);
    encoder.encodeStruct(codec.Int32, val.channelLayout);
    encoder.encodeStruct(codec.Int32, val.channelCount);
    encoder.encodeStruct(codec.Int32, val.sampleRate);
    encoder.encodeStruct(codec.Int32, val.frameCount);
    packed = 0;
    packed |= (val.endOfStream & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function VideoFrame(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoFrame.prototype.initDefaults_ = function() {
    this.format = 0;
    this.codedSize = null;
    this.visibleRect = null;
    this.naturalSize = null;
    this.timestamp = null;
    this.data = null;
    this.metadata = null;
    this.colorSpace = null;
  };
  VideoFrame.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoFrame.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoPixelFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.codedSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.visibleRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.naturalSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 40, VideoFrameData, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrame.colorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, color_space$.ColorSpace, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoFrame.encodedSize = codec.kStructHeaderSize + 72;

  VideoFrame.decode = function(decoder) {
    var packed;
    var val = new VideoFrame();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.format = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.codedSize = decoder.decodeStructPointer(geometry$.Size);
    val.visibleRect = decoder.decodeStructPointer(geometry$.Rect);
    val.naturalSize = decoder.decodeStructPointer(geometry$.Size);
    val.timestamp = decoder.decodeStructPointer(time$.TimeDelta);
    val.data = decoder.decodeStruct(VideoFrameData);
    val.metadata = decoder.decodeStructPointer(values$.DictionaryValue);
    val.colorSpace = decoder.decodeStructPointer(color_space$.ColorSpace);
    return val;
  };

  VideoFrame.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoFrame.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.format);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.codedSize);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleRect);
    encoder.encodeStructPointer(geometry$.Size, val.naturalSize);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeStruct(VideoFrameData, val.data);
    encoder.encodeStructPointer(values$.DictionaryValue, val.metadata);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.colorSpace);
  };
  function EosVideoFrameData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EosVideoFrameData.prototype.initDefaults_ = function() {
  };
  EosVideoFrameData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EosVideoFrameData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EosVideoFrameData.encodedSize = codec.kStructHeaderSize + 0;

  EosVideoFrameData.decode = function(decoder) {
    var packed;
    var val = new EosVideoFrameData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EosVideoFrameData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EosVideoFrameData.encodedSize);
    encoder.writeUint32(0);
  };
  function SharedBufferVideoFrameData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedBufferVideoFrameData.prototype.initDefaults_ = function() {
    this.frameData = null;
    this.yStride = 0;
    this.frameDataSize = 0;
    this.uStride = 0;
    this.vStride = 0;
    this.yOffset = 0;
    this.uOffset = 0;
    this.vOffset = 0;
  };
  SharedBufferVideoFrameData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedBufferVideoFrameData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedBufferVideoFrameData.frameData
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;








    return validator.validationError.NONE;
  };

  SharedBufferVideoFrameData.encodedSize = codec.kStructHeaderSize + 48;

  SharedBufferVideoFrameData.decode = function(decoder) {
    var packed;
    var val = new SharedBufferVideoFrameData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameData = decoder.decodeStruct(codec.Handle);
    val.yStride = decoder.decodeStruct(codec.Int32);
    val.frameDataSize = decoder.decodeStruct(codec.Uint64);
    val.uStride = decoder.decodeStruct(codec.Int32);
    val.vStride = decoder.decodeStruct(codec.Int32);
    val.yOffset = decoder.decodeStruct(codec.Uint64);
    val.uOffset = decoder.decodeStruct(codec.Uint64);
    val.vOffset = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  SharedBufferVideoFrameData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedBufferVideoFrameData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.frameData);
    encoder.encodeStruct(codec.Int32, val.yStride);
    encoder.encodeStruct(codec.Uint64, val.frameDataSize);
    encoder.encodeStruct(codec.Int32, val.uStride);
    encoder.encodeStruct(codec.Int32, val.vStride);
    encoder.encodeStruct(codec.Uint64, val.yOffset);
    encoder.encodeStruct(codec.Uint64, val.uOffset);
    encoder.encodeStruct(codec.Uint64, val.vOffset);
  };
  function MailboxVideoFrameData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MailboxVideoFrameData.prototype.initDefaults_ = function() {
    this.mailboxHolder = null;
    this.ycbcrData = null;
  };
  MailboxVideoFrameData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MailboxVideoFrameData.validate = function(messageValidator, offset) {
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


    // validate MailboxVideoFrameData.mailboxHolder
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(mailbox_holder$.MailboxHolder), false, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MailboxVideoFrameData.ycbcrData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, vulkan_ycbcr_info$.VulkanYCbCrInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MailboxVideoFrameData.encodedSize = codec.kStructHeaderSize + 16;

  MailboxVideoFrameData.decode = function(decoder) {
    var packed;
    var val = new MailboxVideoFrameData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailboxHolder = decoder.decodeArrayPointer(new codec.PointerTo(mailbox_holder$.MailboxHolder));
    val.ycbcrData = decoder.decodeStructPointer(vulkan_ycbcr_info$.VulkanYCbCrInfo);
    return val;
  };

  MailboxVideoFrameData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MailboxVideoFrameData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(mailbox_holder$.MailboxHolder), val.mailboxHolder);
    encoder.encodeStructPointer(vulkan_ycbcr_info$.VulkanYCbCrInfo, val.ycbcrData);
  };
  function PipelineStatistics(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PipelineStatistics.prototype.initDefaults_ = function() {
    this.audioBytesDecoded = 0;
    this.videoBytesDecoded = 0;
    this.videoFramesDecoded = 0;
    this.videoFramesDropped = 0;
    this.audioMemoryUsage = 0;
    this.videoMemoryUsage = 0;
  };
  PipelineStatistics.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PipelineStatistics.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;







    return validator.validationError.NONE;
  };

  PipelineStatistics.encodedSize = codec.kStructHeaderSize + 40;

  PipelineStatistics.decode = function(decoder) {
    var packed;
    var val = new PipelineStatistics();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audioBytesDecoded = decoder.decodeStruct(codec.Uint64);
    val.videoBytesDecoded = decoder.decodeStruct(codec.Uint64);
    val.videoFramesDecoded = decoder.decodeStruct(codec.Uint32);
    val.videoFramesDropped = decoder.decodeStruct(codec.Uint32);
    val.audioMemoryUsage = decoder.decodeStruct(codec.Int64);
    val.videoMemoryUsage = decoder.decodeStruct(codec.Int64);
    return val;
  };

  PipelineStatistics.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PipelineStatistics.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.audioBytesDecoded);
    encoder.encodeStruct(codec.Uint64, val.videoBytesDecoded);
    encoder.encodeStruct(codec.Uint32, val.videoFramesDecoded);
    encoder.encodeStruct(codec.Uint32, val.videoFramesDropped);
    encoder.encodeStruct(codec.Int64, val.audioMemoryUsage);
    encoder.encodeStruct(codec.Int64, val.videoMemoryUsage);
  };
  function PredictionFeatures(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PredictionFeatures.prototype.initDefaults_ = function() {
    this.profile = 0;
    this.framesPerSec = 0;
    this.videoSize = null;
    this.keySystem = null;
    this.useHwSecureCodecs = false;
  };
  PredictionFeatures.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PredictionFeatures.validate = function(messageValidator, offset) {
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


    // validate PredictionFeatures.profile
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoCodecProfile);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PredictionFeatures.videoSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PredictionFeatures.keySystem
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PredictionFeatures.encodedSize = codec.kStructHeaderSize + 32;

  PredictionFeatures.decode = function(decoder) {
    var packed;
    var val = new PredictionFeatures();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.profile = decoder.decodeStruct(codec.Int32);
    val.framesPerSec = decoder.decodeStruct(codec.Int32);
    val.videoSize = decoder.decodeStructPointer(geometry$.Size);
    val.keySystem = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.useHwSecureCodecs = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PredictionFeatures.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PredictionFeatures.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.profile);
    encoder.encodeStruct(codec.Int32, val.framesPerSec);
    encoder.encodeStructPointer(geometry$.Size, val.videoSize);
    encoder.encodeStruct(codec.String, val.keySystem);
    packed = 0;
    packed |= (val.useHwSecureCodecs & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PredictionTargets(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PredictionTargets.prototype.initDefaults_ = function() {
    this.framesDecoded = 0;
    this.framesDropped = 0;
    this.framesPowerEfficient = 0;
  };
  PredictionTargets.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PredictionTargets.validate = function(messageValidator, offset) {
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

  PredictionTargets.encodedSize = codec.kStructHeaderSize + 16;

  PredictionTargets.decode = function(decoder) {
    var packed;
    var val = new PredictionTargets();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.framesDecoded = decoder.decodeStruct(codec.Uint32);
    val.framesDropped = decoder.decodeStruct(codec.Uint32);
    val.framesPowerEfficient = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PredictionTargets.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PredictionTargets.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.framesDecoded);
    encoder.encodeStruct(codec.Uint32, val.framesDropped);
    encoder.encodeStruct(codec.Uint32, val.framesPowerEfficient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function VideoFrameData(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  VideoFrameData.Tags = {
    eosData: 0,
    sharedBufferData: 1,
    mailboxData: 2,
  };

  VideoFrameData.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  VideoFrameData.prototype.initValue_ = function(value) {
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
        "eosData",
        "sharedBufferData",
        "mailboxData",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a VideoFrameData member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(VideoFrameData.prototype, "eosData", {
    get: function() {
      if (this.$tag != VideoFrameData.Tags.eosData) {
        throw new ReferenceError(
            "VideoFrameData.eosData is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoFrameData.Tags.eosData;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoFrameData.prototype, "sharedBufferData", {
    get: function() {
      if (this.$tag != VideoFrameData.Tags.sharedBufferData) {
        throw new ReferenceError(
            "VideoFrameData.sharedBufferData is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoFrameData.Tags.sharedBufferData;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoFrameData.prototype, "mailboxData", {
    get: function() {
      if (this.$tag != VideoFrameData.Tags.mailboxData) {
        throw new ReferenceError(
            "VideoFrameData.mailboxData is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoFrameData.Tags.mailboxData;
      this.$data = value;
    }
  });


    VideoFrameData.encode = function(encoder, val) {
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
        case VideoFrameData.Tags.eosData:
          encoder.encodeStructPointer(EosVideoFrameData, val.eosData);
          break;
        case VideoFrameData.Tags.sharedBufferData:
          encoder.encodeStructPointer(SharedBufferVideoFrameData, val.sharedBufferData);
          break;
        case VideoFrameData.Tags.mailboxData:
          encoder.encodeStructPointer(MailboxVideoFrameData, val.mailboxData);
          break;
      }
      encoder.align();
    };


    VideoFrameData.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new VideoFrameData();
      var tag = decoder.readUint32();
      switch (tag) {
        case VideoFrameData.Tags.eosData:
          result.eosData = decoder.decodeStructPointer(EosVideoFrameData);
          break;
        case VideoFrameData.Tags.sharedBufferData:
          result.sharedBufferData = decoder.decodeStructPointer(SharedBufferVideoFrameData);
          break;
        case VideoFrameData.Tags.mailboxData:
          result.mailboxData = decoder.decodeStructPointer(MailboxVideoFrameData);
          break;
      }
      decoder.align();

      return result;
    };


    VideoFrameData.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case VideoFrameData.Tags.eosData:
          

    // validate VideoFrameData.eosData
    err = messageValidator.validateStructPointer(data_offset, EosVideoFrameData, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoFrameData.Tags.sharedBufferData:
          

    // validate VideoFrameData.sharedBufferData
    err = messageValidator.validateStructPointer(data_offset, SharedBufferVideoFrameData, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoFrameData.Tags.mailboxData:
          

    // validate VideoFrameData.mailboxData
    err = messageValidator.validateStructPointer(data_offset, MailboxVideoFrameData, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  VideoFrameData.encodedSize = 16;
  exports.AudioCodec = AudioCodec;
  exports.BufferingState = BufferingState;
  exports.ChannelLayout = ChannelLayout;
  exports.ColorSpace = ColorSpace;
  exports.DecodeStatus = DecodeStatus;
  exports.OutputDeviceStatus = OutputDeviceStatus;
  exports.PipelineStatus = PipelineStatus;
  exports.SampleFormat = SampleFormat;
  exports.VideoCodec = VideoCodec;
  exports.VideoCodecProfile = VideoCodecProfile;
  exports.VideoPixelFormat = VideoPixelFormat;
  exports.VideoRotation = VideoRotation;
  exports.WaitingReason = WaitingReason;
  exports.WatchTimeKey = WatchTimeKey;
  exports.EncryptionMode = EncryptionMode;
  exports.MediaContainerName = MediaContainerName;
  exports.MediaStatusState = MediaStatusState;
  exports.MediaLogEvent = MediaLogEvent;
  exports.VideoTransformation = VideoTransformation;
  exports.EncryptionPattern = EncryptionPattern;
  exports.EncryptionScheme = EncryptionScheme;
  exports.VideoColorSpace = VideoColorSpace;
  exports.MasteringMetadata = MasteringMetadata;
  exports.HDRMetadata = HDRMetadata;
  exports.AudioDecoderConfig = AudioDecoderConfig;
  exports.VideoDecoderConfig = VideoDecoderConfig;
  exports.SubsampleEntry = SubsampleEntry;
  exports.DecryptConfig = DecryptConfig;
  exports.DecoderBuffer = DecoderBuffer;
  exports.AudioBuffer = AudioBuffer;
  exports.VideoFrame = VideoFrame;
  exports.EosVideoFrameData = EosVideoFrameData;
  exports.SharedBufferVideoFrameData = SharedBufferVideoFrameData;
  exports.MailboxVideoFrameData = MailboxVideoFrameData;
  exports.PipelineStatistics = PipelineStatistics;
  exports.PredictionFeatures = PredictionFeatures;
  exports.PredictionTargets = PredictionTargets;
  exports.VideoFrameData = VideoFrameData;
})();