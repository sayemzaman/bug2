// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/video_encode_accelerator.mojom';
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
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/media_types.mojom', 'media_types.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }



  function VideoBitrateAllocation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoBitrateAllocation.prototype.initDefaults_ = function() {
    this.bitrates = null;
  };
  VideoBitrateAllocation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoBitrateAllocation.validate = function(messageValidator, offset) {
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


    // validate VideoBitrateAllocation.bitrates
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoBitrateAllocation.encodedSize = codec.kStructHeaderSize + 8;

  VideoBitrateAllocation.decode = function(decoder) {
    var packed;
    var val = new VideoBitrateAllocation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitrates = decoder.decodeArrayPointer(codec.Int32);
    return val;
  };

  VideoBitrateAllocation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoBitrateAllocation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Int32, val.bitrates);
  };
  function VideoEncodeAcceleratorConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  VideoEncodeAcceleratorConfig.ContentType = {};
  VideoEncodeAcceleratorConfig.ContentType.kCamera = 0;
  VideoEncodeAcceleratorConfig.ContentType.kDisplay = VideoEncodeAcceleratorConfig.ContentType.kCamera + 1;
  VideoEncodeAcceleratorConfig.ContentType.MIN_VALUE = 0,
  VideoEncodeAcceleratorConfig.ContentType.MAX_VALUE = 1,

  VideoEncodeAcceleratorConfig.ContentType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  VideoEncodeAcceleratorConfig.ContentType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  VideoEncodeAcceleratorConfig.prototype.initDefaults_ = function() {
    this.inputFormat = 0;
    this.outputProfile = 0;
    this.inputVisibleSize = null;
    this.initialBitrate = 0;
    this.initialFramerate = 0;
    this.hasInitialFramerate = false;
    this.hasGopLength = false;
    this.hasH264OutputLevel = false;
    this.h264OutputLevel = 0;
    this.gopLength = 0;
    this.contentType = 0;
  };
  VideoEncodeAcceleratorConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAcceleratorConfig.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAcceleratorConfig.inputFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.VideoPixelFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEncodeAcceleratorConfig.inputVisibleSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEncodeAcceleratorConfig.outputProfile
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, media_types$.VideoCodecProfile);
    if (err !== validator.validationError.NONE)
        return err;









    // validate VideoEncodeAcceleratorConfig.contentType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, VideoEncodeAcceleratorConfig.ContentType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEncodeAcceleratorConfig.encodedSize = codec.kStructHeaderSize + 40;

  VideoEncodeAcceleratorConfig.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAcceleratorConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputFormat = decoder.decodeStruct(codec.Int32);
    val.outputProfile = decoder.decodeStruct(codec.Int32);
    val.inputVisibleSize = decoder.decodeStructPointer(geometry$.Size);
    val.initialBitrate = decoder.decodeStruct(codec.Uint32);
    val.initialFramerate = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.hasInitialFramerate = (packed >> 0) & 1 ? true : false;
    val.hasGopLength = (packed >> 1) & 1 ? true : false;
    val.hasH264OutputLevel = (packed >> 2) & 1 ? true : false;
    val.h264OutputLevel = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    val.gopLength = decoder.decodeStruct(codec.Uint32);
    val.contentType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAcceleratorConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAcceleratorConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.inputFormat);
    encoder.encodeStruct(codec.Int32, val.outputProfile);
    encoder.encodeStructPointer(geometry$.Size, val.inputVisibleSize);
    encoder.encodeStruct(codec.Uint32, val.initialBitrate);
    encoder.encodeStruct(codec.Uint32, val.initialFramerate);
    packed = 0;
    packed |= (val.hasInitialFramerate & 1) << 0
    packed |= (val.hasGopLength & 1) << 1
    packed |= (val.hasH264OutputLevel & 1) << 2
    encoder.writeUint8(packed);
    encoder.encodeStruct(codec.Uint8, val.h264OutputLevel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.gopLength);
    encoder.encodeStruct(codec.Int32, val.contentType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Vp8Metadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Vp8Metadata.prototype.initDefaults_ = function() {
    this.nonReference = false;
    this.layerSync = false;
    this.temporalIdx = 0;
  };
  Vp8Metadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Vp8Metadata.validate = function(messageValidator, offset) {
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

  Vp8Metadata.encodedSize = codec.kStructHeaderSize + 8;

  Vp8Metadata.decode = function(decoder) {
    var packed;
    var val = new Vp8Metadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.nonReference = (packed >> 0) & 1 ? true : false;
    val.layerSync = (packed >> 1) & 1 ? true : false;
    val.temporalIdx = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Vp8Metadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Vp8Metadata.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.nonReference & 1) << 0
    packed |= (val.layerSync & 1) << 1
    encoder.writeUint8(packed);
    encoder.encodeStruct(codec.Uint8, val.temporalIdx);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BitstreamBufferMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BitstreamBufferMetadata.prototype.initDefaults_ = function() {
    this.payloadSizeBytes = 0;
    this.keyFrame = false;
    this.timestamp = null;
    this.vp8 = null;
  };
  BitstreamBufferMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BitstreamBufferMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    // validate BitstreamBufferMetadata.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BitstreamBufferMetadata.vp8
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Vp8Metadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BitstreamBufferMetadata.encodedSize = codec.kStructHeaderSize + 24;

  BitstreamBufferMetadata.decode = function(decoder) {
    var packed;
    var val = new BitstreamBufferMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.payloadSizeBytes = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.keyFrame = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timestamp = decoder.decodeStructPointer(time$.TimeDelta);
    val.vp8 = decoder.decodeStructPointer(Vp8Metadata);
    return val;
  };

  BitstreamBufferMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BitstreamBufferMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.payloadSizeBytes);
    packed = 0;
    packed |= (val.keyFrame & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeStructPointer(Vp8Metadata, val.vp8);
  };
  function VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoEncodeAccelerator_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAccelerator_Initialize_Params.prototype.initDefaults_ = function() {
    this.config = null;
    this.client = new VideoEncodeAcceleratorClientPtr();
  };
  VideoEncodeAccelerator_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAccelerator_Initialize_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAccelerator_Initialize_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoEncodeAcceleratorConfig, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEncodeAccelerator_Initialize_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEncodeAccelerator_Initialize_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoEncodeAccelerator_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAccelerator_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(VideoEncodeAcceleratorConfig);
    val.client = decoder.decodeStruct(new codec.Interface(VideoEncodeAcceleratorClientPtr));
    return val;
  };

  VideoEncodeAccelerator_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAccelerator_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoEncodeAcceleratorConfig, val.config);
    encoder.encodeStruct(new codec.Interface(VideoEncodeAcceleratorClientPtr), val.client);
  };
  function VideoEncodeAccelerator_Initialize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAccelerator_Initialize_ResponseParams.prototype.initDefaults_ = function() {
    this.result = false;
  };
  VideoEncodeAccelerator_Initialize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAccelerator_Initialize_ResponseParams.validate = function(messageValidator, offset) {
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

  VideoEncodeAccelerator_Initialize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VideoEncodeAccelerator_Initialize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAccelerator_Initialize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.result = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAccelerator_Initialize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAccelerator_Initialize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.result & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoEncodeAccelerator_Encode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAccelerator_Encode_Params.prototype.initDefaults_ = function() {
    this.frame = null;
    this.forceKeyframe = false;
  };
  VideoEncodeAccelerator_Encode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAccelerator_Encode_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAccelerator_Encode_Params.frame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.VideoFrame, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoEncodeAccelerator_Encode_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoEncodeAccelerator_Encode_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAccelerator_Encode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frame = decoder.decodeStructPointer(media_types$.VideoFrame);
    packed = decoder.readUint8();
    val.forceKeyframe = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAccelerator_Encode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAccelerator_Encode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.VideoFrame, val.frame);
    packed = 0;
    packed |= (val.forceKeyframe & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoEncodeAccelerator_Encode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAccelerator_Encode_ResponseParams.prototype.initDefaults_ = function() {
  };
  VideoEncodeAccelerator_Encode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAccelerator_Encode_ResponseParams.validate = function(messageValidator, offset) {
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

  VideoEncodeAccelerator_Encode_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  VideoEncodeAccelerator_Encode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAccelerator_Encode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VideoEncodeAccelerator_Encode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAccelerator_Encode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.prototype.initDefaults_ = function() {
    this.bitstreamBufferId = 0;
    this.buffer = null;
  };
  VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.validate = function(messageValidator, offset) {
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



    // validate VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitstreamBufferId = decoder.decodeStruct(codec.Int32);
    val.buffer = decoder.decodeStruct(codec.Handle);
    return val;
  };

  VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.bitstreamBufferId);
    encoder.encodeStruct(codec.Handle, val.buffer);
  };
  function VideoEncodeAccelerator_RequestEncodingParametersChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAccelerator_RequestEncodingParametersChange_Params.prototype.initDefaults_ = function() {
    this.bitrateAllocation = null;
    this.framerate = 0;
  };
  VideoEncodeAccelerator_RequestEncodingParametersChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAccelerator_RequestEncodingParametersChange_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAccelerator_RequestEncodingParametersChange_Params.bitrateAllocation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoBitrateAllocation, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoEncodeAccelerator_RequestEncodingParametersChange_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoEncodeAccelerator_RequestEncodingParametersChange_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAccelerator_RequestEncodingParametersChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitrateAllocation = decoder.decodeStructPointer(VideoBitrateAllocation);
    val.framerate = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAccelerator_RequestEncodingParametersChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAccelerator_RequestEncodingParametersChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoBitrateAllocation, val.bitrateAllocation);
    encoder.encodeStruct(codec.Uint32, val.framerate);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.prototype.initDefaults_ = function() {
    this.inputCount = 0;
    this.outputBufferSize = 0;
    this.inputCodedSize = null;
  };
  VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.validate = function(messageValidator, offset) {
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



    // validate VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.inputCodedSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputCount = decoder.decodeStruct(codec.Uint32);
    val.outputBufferSize = decoder.decodeStruct(codec.Uint32);
    val.inputCodedSize = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.inputCount);
    encoder.encodeStruct(codec.Uint32, val.outputBufferSize);
    encoder.encodeStructPointer(geometry$.Size, val.inputCodedSize);
  };
  function VideoEncodeAcceleratorClient_BitstreamBufferReady_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.prototype.initDefaults_ = function() {
    this.bitstreamBufferId = 0;
    this.metadata = null;
  };
  VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.validate = function(messageValidator, offset) {
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



    // validate VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, BitstreamBufferMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAcceleratorClient_BitstreamBufferReady_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitstreamBufferId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.metadata = decoder.decodeStructPointer(BitstreamBufferMetadata);
    return val;
  };

  VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.bitstreamBufferId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(BitstreamBufferMetadata, val.metadata);
  };
  function VideoEncodeAcceleratorClient_NotifyError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAcceleratorClient_NotifyError_Params.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  VideoEncodeAcceleratorClient_NotifyError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAcceleratorClient_NotifyError_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAcceleratorClient_NotifyError_Params.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoEncodeAccelerator.Error);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEncodeAcceleratorClient_NotifyError_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoEncodeAcceleratorClient_NotifyError_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAcceleratorClient_NotifyError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAcceleratorClient_NotifyError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAcceleratorClient_NotifyError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kVideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Name = 0;

  function VideoEncodeAcceleratorProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoEncodeAcceleratorProvider,
                                                   handleOrPtrInfo);
  }

  function VideoEncodeAcceleratorProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoEncodeAcceleratorProvider, associatedInterfacePtrInfo);
  }

  VideoEncodeAcceleratorProviderAssociatedPtr.prototype =
      Object.create(VideoEncodeAcceleratorProviderPtr.prototype);
  VideoEncodeAcceleratorProviderAssociatedPtr.prototype.constructor =
      VideoEncodeAcceleratorProviderAssociatedPtr;

  function VideoEncodeAcceleratorProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoEncodeAcceleratorProviderPtr.prototype.createVideoEncodeAccelerator = function() {
    return VideoEncodeAcceleratorProviderProxy.prototype.createVideoEncodeAccelerator
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorProviderProxy.prototype.createVideoEncodeAccelerator = function(request) {
    var params_ = new VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kVideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Name,
        codec.align(VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params.encodedSize));
    builder.encodeStruct(VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoEncodeAcceleratorProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoEncodeAcceleratorProviderStub.prototype.createVideoEncodeAccelerator = function(request) {
    return this.delegate_ && this.delegate_.createVideoEncodeAccelerator && this.delegate_.createVideoEncodeAccelerator(request);
  }

  VideoEncodeAcceleratorProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Name:
      var params = reader.decodeStruct(VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params);
      this.createVideoEncodeAccelerator(params.request);
      return true;
    default:
      return false;
    }
  };

  VideoEncodeAcceleratorProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVideoEncodeAcceleratorProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoEncodeAcceleratorProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VideoEncodeAcceleratorProvider = {
    name: 'media.mojom.VideoEncodeAcceleratorProvider',
    kVersion: 0,
    ptrClass: VideoEncodeAcceleratorProviderPtr,
    proxyClass: VideoEncodeAcceleratorProviderProxy,
    stubClass: VideoEncodeAcceleratorProviderStub,
    validateRequest: validateVideoEncodeAcceleratorProviderRequest,
    validateResponse: null,
  };
  VideoEncodeAcceleratorProviderStub.prototype.validator = validateVideoEncodeAcceleratorProviderRequest;
  VideoEncodeAcceleratorProviderProxy.prototype.validator = null;
  var kVideoEncodeAccelerator_Initialize_Name = 0;
  var kVideoEncodeAccelerator_Encode_Name = 1;
  var kVideoEncodeAccelerator_UseOutputBitstreamBuffer_Name = 2;
  var kVideoEncodeAccelerator_RequestEncodingParametersChange_Name = 3;

  function VideoEncodeAcceleratorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoEncodeAccelerator,
                                                   handleOrPtrInfo);
  }

  function VideoEncodeAcceleratorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoEncodeAccelerator, associatedInterfacePtrInfo);
  }

  VideoEncodeAcceleratorAssociatedPtr.prototype =
      Object.create(VideoEncodeAcceleratorPtr.prototype);
  VideoEncodeAcceleratorAssociatedPtr.prototype.constructor =
      VideoEncodeAcceleratorAssociatedPtr;

  function VideoEncodeAcceleratorProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoEncodeAcceleratorPtr.prototype.initialize = function() {
    return VideoEncodeAcceleratorProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorProxy.prototype.initialize = function(config, client) {
    var params_ = new VideoEncodeAccelerator_Initialize_Params();
    params_.config = config;
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoEncodeAccelerator_Initialize_Name,
          codec.align(VideoEncodeAccelerator_Initialize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoEncodeAccelerator_Initialize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoEncodeAccelerator_Initialize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoEncodeAcceleratorPtr.prototype.encode = function() {
    return VideoEncodeAcceleratorProxy.prototype.encode
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorProxy.prototype.encode = function(frame, forceKeyframe) {
    var params_ = new VideoEncodeAccelerator_Encode_Params();
    params_.frame = frame;
    params_.forceKeyframe = forceKeyframe;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoEncodeAccelerator_Encode_Name,
          codec.align(VideoEncodeAccelerator_Encode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoEncodeAccelerator_Encode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoEncodeAccelerator_Encode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoEncodeAcceleratorPtr.prototype.useOutputBitstreamBuffer = function() {
    return VideoEncodeAcceleratorProxy.prototype.useOutputBitstreamBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorProxy.prototype.useOutputBitstreamBuffer = function(bitstreamBufferId, buffer) {
    var params_ = new VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params();
    params_.bitstreamBufferId = bitstreamBufferId;
    params_.buffer = buffer;
    var builder = new codec.MessageV0Builder(
        kVideoEncodeAccelerator_UseOutputBitstreamBuffer_Name,
        codec.align(VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params.encodedSize));
    builder.encodeStruct(VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoEncodeAcceleratorPtr.prototype.requestEncodingParametersChange = function() {
    return VideoEncodeAcceleratorProxy.prototype.requestEncodingParametersChange
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorProxy.prototype.requestEncodingParametersChange = function(bitrateAllocation, framerate) {
    var params_ = new VideoEncodeAccelerator_RequestEncodingParametersChange_Params();
    params_.bitrateAllocation = bitrateAllocation;
    params_.framerate = framerate;
    var builder = new codec.MessageV0Builder(
        kVideoEncodeAccelerator_RequestEncodingParametersChange_Name,
        codec.align(VideoEncodeAccelerator_RequestEncodingParametersChange_Params.encodedSize));
    builder.encodeStruct(VideoEncodeAccelerator_RequestEncodingParametersChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoEncodeAcceleratorStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoEncodeAcceleratorStub.prototype.initialize = function(config, client) {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize(config, client);
  }
  VideoEncodeAcceleratorStub.prototype.encode = function(frame, forceKeyframe) {
    return this.delegate_ && this.delegate_.encode && this.delegate_.encode(frame, forceKeyframe);
  }
  VideoEncodeAcceleratorStub.prototype.useOutputBitstreamBuffer = function(bitstreamBufferId, buffer) {
    return this.delegate_ && this.delegate_.useOutputBitstreamBuffer && this.delegate_.useOutputBitstreamBuffer(bitstreamBufferId, buffer);
  }
  VideoEncodeAcceleratorStub.prototype.requestEncodingParametersChange = function(bitrateAllocation, framerate) {
    return this.delegate_ && this.delegate_.requestEncodingParametersChange && this.delegate_.requestEncodingParametersChange(bitrateAllocation, framerate);
  }

  VideoEncodeAcceleratorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEncodeAccelerator_UseOutputBitstreamBuffer_Name:
      var params = reader.decodeStruct(VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params);
      this.useOutputBitstreamBuffer(params.bitstreamBufferId, params.buffer);
      return true;
    case kVideoEncodeAccelerator_RequestEncodingParametersChange_Name:
      var params = reader.decodeStruct(VideoEncodeAccelerator_RequestEncodingParametersChange_Params);
      this.requestEncodingParametersChange(params.bitrateAllocation, params.framerate);
      return true;
    default:
      return false;
    }
  };

  VideoEncodeAcceleratorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEncodeAccelerator_Initialize_Name:
      var params = reader.decodeStruct(VideoEncodeAccelerator_Initialize_Params);
      this.initialize(params.config, params.client).then(function(response) {
        var responseParams =
            new VideoEncodeAccelerator_Initialize_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kVideoEncodeAccelerator_Initialize_Name,
            codec.align(VideoEncodeAccelerator_Initialize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoEncodeAccelerator_Initialize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVideoEncodeAccelerator_Encode_Name:
      var params = reader.decodeStruct(VideoEncodeAccelerator_Encode_Params);
      this.encode(params.frame, params.forceKeyframe).then(function(response) {
        var responseParams =
            new VideoEncodeAccelerator_Encode_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kVideoEncodeAccelerator_Encode_Name,
            codec.align(VideoEncodeAccelerator_Encode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoEncodeAccelerator_Encode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVideoEncodeAcceleratorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoEncodeAccelerator_Initialize_Name:
        if (message.expectsResponse())
          paramsClass = VideoEncodeAccelerator_Initialize_Params;
      break;
      case kVideoEncodeAccelerator_Encode_Name:
        if (message.expectsResponse())
          paramsClass = VideoEncodeAccelerator_Encode_Params;
      break;
      case kVideoEncodeAccelerator_UseOutputBitstreamBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params;
      break;
      case kVideoEncodeAccelerator_RequestEncodingParametersChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEncodeAccelerator_RequestEncodingParametersChange_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoEncodeAcceleratorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVideoEncodeAccelerator_Initialize_Name:
        if (message.isResponse())
          paramsClass = VideoEncodeAccelerator_Initialize_ResponseParams;
        break;
      case kVideoEncodeAccelerator_Encode_Name:
        if (message.isResponse())
          paramsClass = VideoEncodeAccelerator_Encode_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VideoEncodeAccelerator = {
    name: 'media.mojom.VideoEncodeAccelerator',
    kVersion: 0,
    ptrClass: VideoEncodeAcceleratorPtr,
    proxyClass: VideoEncodeAcceleratorProxy,
    stubClass: VideoEncodeAcceleratorStub,
    validateRequest: validateVideoEncodeAcceleratorRequest,
    validateResponse: validateVideoEncodeAcceleratorResponse,
  };
  VideoEncodeAccelerator.Error = {};
  VideoEncodeAccelerator.Error.ILLEGAL_STATE = 0;
  VideoEncodeAccelerator.Error.INVALID_ARGUMENT = VideoEncodeAccelerator.Error.ILLEGAL_STATE + 1;
  VideoEncodeAccelerator.Error.PLATFORM_FAILURE = VideoEncodeAccelerator.Error.INVALID_ARGUMENT + 1;
  VideoEncodeAccelerator.Error.MIN_VALUE = 0,
  VideoEncodeAccelerator.Error.MAX_VALUE = 2,

  VideoEncodeAccelerator.Error.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  VideoEncodeAccelerator.Error.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  VideoEncodeAcceleratorStub.prototype.validator = validateVideoEncodeAcceleratorRequest;
  VideoEncodeAcceleratorProxy.prototype.validator = validateVideoEncodeAcceleratorResponse;
  var kVideoEncodeAcceleratorClient_RequireBitstreamBuffers_Name = 0;
  var kVideoEncodeAcceleratorClient_BitstreamBufferReady_Name = 1;
  var kVideoEncodeAcceleratorClient_NotifyError_Name = 2;

  function VideoEncodeAcceleratorClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoEncodeAcceleratorClient,
                                                   handleOrPtrInfo);
  }

  function VideoEncodeAcceleratorClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoEncodeAcceleratorClient, associatedInterfacePtrInfo);
  }

  VideoEncodeAcceleratorClientAssociatedPtr.prototype =
      Object.create(VideoEncodeAcceleratorClientPtr.prototype);
  VideoEncodeAcceleratorClientAssociatedPtr.prototype.constructor =
      VideoEncodeAcceleratorClientAssociatedPtr;

  function VideoEncodeAcceleratorClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoEncodeAcceleratorClientPtr.prototype.requireBitstreamBuffers = function() {
    return VideoEncodeAcceleratorClientProxy.prototype.requireBitstreamBuffers
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorClientProxy.prototype.requireBitstreamBuffers = function(inputCount, inputCodedSize, outputBufferSize) {
    var params_ = new VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params();
    params_.inputCount = inputCount;
    params_.inputCodedSize = inputCodedSize;
    params_.outputBufferSize = outputBufferSize;
    var builder = new codec.MessageV0Builder(
        kVideoEncodeAcceleratorClient_RequireBitstreamBuffers_Name,
        codec.align(VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params.encodedSize));
    builder.encodeStruct(VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoEncodeAcceleratorClientPtr.prototype.bitstreamBufferReady = function() {
    return VideoEncodeAcceleratorClientProxy.prototype.bitstreamBufferReady
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorClientProxy.prototype.bitstreamBufferReady = function(bitstreamBufferId, metadata) {
    var params_ = new VideoEncodeAcceleratorClient_BitstreamBufferReady_Params();
    params_.bitstreamBufferId = bitstreamBufferId;
    params_.metadata = metadata;
    var builder = new codec.MessageV0Builder(
        kVideoEncodeAcceleratorClient_BitstreamBufferReady_Name,
        codec.align(VideoEncodeAcceleratorClient_BitstreamBufferReady_Params.encodedSize));
    builder.encodeStruct(VideoEncodeAcceleratorClient_BitstreamBufferReady_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoEncodeAcceleratorClientPtr.prototype.notifyError = function() {
    return VideoEncodeAcceleratorClientProxy.prototype.notifyError
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEncodeAcceleratorClientProxy.prototype.notifyError = function(error) {
    var params_ = new VideoEncodeAcceleratorClient_NotifyError_Params();
    params_.error = error;
    var builder = new codec.MessageV0Builder(
        kVideoEncodeAcceleratorClient_NotifyError_Name,
        codec.align(VideoEncodeAcceleratorClient_NotifyError_Params.encodedSize));
    builder.encodeStruct(VideoEncodeAcceleratorClient_NotifyError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoEncodeAcceleratorClientStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoEncodeAcceleratorClientStub.prototype.requireBitstreamBuffers = function(inputCount, inputCodedSize, outputBufferSize) {
    return this.delegate_ && this.delegate_.requireBitstreamBuffers && this.delegate_.requireBitstreamBuffers(inputCount, inputCodedSize, outputBufferSize);
  }
  VideoEncodeAcceleratorClientStub.prototype.bitstreamBufferReady = function(bitstreamBufferId, metadata) {
    return this.delegate_ && this.delegate_.bitstreamBufferReady && this.delegate_.bitstreamBufferReady(bitstreamBufferId, metadata);
  }
  VideoEncodeAcceleratorClientStub.prototype.notifyError = function(error) {
    return this.delegate_ && this.delegate_.notifyError && this.delegate_.notifyError(error);
  }

  VideoEncodeAcceleratorClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEncodeAcceleratorClient_RequireBitstreamBuffers_Name:
      var params = reader.decodeStruct(VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params);
      this.requireBitstreamBuffers(params.inputCount, params.inputCodedSize, params.outputBufferSize);
      return true;
    case kVideoEncodeAcceleratorClient_BitstreamBufferReady_Name:
      var params = reader.decodeStruct(VideoEncodeAcceleratorClient_BitstreamBufferReady_Params);
      this.bitstreamBufferReady(params.bitstreamBufferId, params.metadata);
      return true;
    case kVideoEncodeAcceleratorClient_NotifyError_Name:
      var params = reader.decodeStruct(VideoEncodeAcceleratorClient_NotifyError_Params);
      this.notifyError(params.error);
      return true;
    default:
      return false;
    }
  };

  VideoEncodeAcceleratorClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVideoEncodeAcceleratorClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoEncodeAcceleratorClient_RequireBitstreamBuffers_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params;
      break;
      case kVideoEncodeAcceleratorClient_BitstreamBufferReady_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEncodeAcceleratorClient_BitstreamBufferReady_Params;
      break;
      case kVideoEncodeAcceleratorClient_NotifyError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEncodeAcceleratorClient_NotifyError_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoEncodeAcceleratorClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VideoEncodeAcceleratorClient = {
    name: 'media.mojom.VideoEncodeAcceleratorClient',
    kVersion: 0,
    ptrClass: VideoEncodeAcceleratorClientPtr,
    proxyClass: VideoEncodeAcceleratorClientProxy,
    stubClass: VideoEncodeAcceleratorClientStub,
    validateRequest: validateVideoEncodeAcceleratorClientRequest,
    validateResponse: null,
  };
  VideoEncodeAcceleratorClientStub.prototype.validator = validateVideoEncodeAcceleratorClientRequest;
  VideoEncodeAcceleratorClientProxy.prototype.validator = null;
  exports.VideoBitrateAllocation = VideoBitrateAllocation;
  exports.VideoEncodeAcceleratorConfig = VideoEncodeAcceleratorConfig;
  exports.Vp8Metadata = Vp8Metadata;
  exports.BitstreamBufferMetadata = BitstreamBufferMetadata;
  exports.VideoEncodeAcceleratorProvider = VideoEncodeAcceleratorProvider;
  exports.VideoEncodeAcceleratorProviderPtr = VideoEncodeAcceleratorProviderPtr;
  exports.VideoEncodeAcceleratorProviderAssociatedPtr = VideoEncodeAcceleratorProviderAssociatedPtr;
  exports.VideoEncodeAccelerator = VideoEncodeAccelerator;
  exports.VideoEncodeAcceleratorPtr = VideoEncodeAcceleratorPtr;
  exports.VideoEncodeAcceleratorAssociatedPtr = VideoEncodeAcceleratorAssociatedPtr;
  exports.VideoEncodeAcceleratorClient = VideoEncodeAcceleratorClient;
  exports.VideoEncodeAcceleratorClientPtr = VideoEncodeAcceleratorClientPtr;
  exports.VideoEncodeAcceleratorClientAssociatedPtr = VideoEncodeAcceleratorClientAssociatedPtr;
})();