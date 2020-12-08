// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/capture/mojom/video_capture.mojom';
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
  var video_capture_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/capture/mojom/video_capture_types.mojom', 'video_capture_types.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }


  var VideoCaptureState = {};
  VideoCaptureState.STARTED = 0;
  VideoCaptureState.PAUSED = VideoCaptureState.STARTED + 1;
  VideoCaptureState.RESUMED = VideoCaptureState.PAUSED + 1;
  VideoCaptureState.STOPPED = VideoCaptureState.RESUMED + 1;
  VideoCaptureState.FAILED = VideoCaptureState.STOPPED + 1;
  VideoCaptureState.ENDED = VideoCaptureState.FAILED + 1;
  VideoCaptureState.MIN_VALUE = 0,
  VideoCaptureState.MAX_VALUE = 5,

  VideoCaptureState.isKnownEnumValue = function(value) {
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

  VideoCaptureState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function VideoCaptureObserver_OnStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureObserver_OnStateChanged_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  VideoCaptureObserver_OnStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureObserver_OnStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureObserver_OnStateChanged_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoCaptureState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureObserver_OnStateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureObserver_OnStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureObserver_OnStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureObserver_OnStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureObserver_OnStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoCaptureObserver_OnNewBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureObserver_OnNewBuffer_Params.prototype.initDefaults_ = function() {
    this.bufferId = 0;
    this.bufferHandle = null;
  };
  VideoCaptureObserver_OnNewBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureObserver_OnNewBuffer_Params.validate = function(messageValidator, offset) {
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



    // validate VideoCaptureObserver_OnNewBuffer_Params.bufferHandle
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, video_capture_types$.VideoBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureObserver_OnNewBuffer_Params.encodedSize = codec.kStructHeaderSize + 24;

  VideoCaptureObserver_OnNewBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureObserver_OnNewBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.bufferHandle = decoder.decodeStruct(video_capture_types$.VideoBufferHandle);
    return val;
  };

  VideoCaptureObserver_OnNewBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureObserver_OnNewBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.bufferId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(video_capture_types$.VideoBufferHandle, val.bufferHandle);
  };
  function VideoCaptureObserver_OnBufferReady_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureObserver_OnBufferReady_Params.prototype.initDefaults_ = function() {
    this.bufferId = 0;
    this.info = null;
  };
  VideoCaptureObserver_OnBufferReady_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureObserver_OnBufferReady_Params.validate = function(messageValidator, offset) {
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



    // validate VideoCaptureObserver_OnBufferReady_Params.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, video_capture_types$.VideoFrameInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureObserver_OnBufferReady_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoCaptureObserver_OnBufferReady_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureObserver_OnBufferReady_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.info = decoder.decodeStructPointer(video_capture_types$.VideoFrameInfo);
    return val;
  };

  VideoCaptureObserver_OnBufferReady_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureObserver_OnBufferReady_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.bufferId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(video_capture_types$.VideoFrameInfo, val.info);
  };
  function VideoCaptureObserver_OnBufferDestroyed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureObserver_OnBufferDestroyed_Params.prototype.initDefaults_ = function() {
    this.bufferId = 0;
  };
  VideoCaptureObserver_OnBufferDestroyed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureObserver_OnBufferDestroyed_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureObserver_OnBufferDestroyed_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureObserver_OnBufferDestroyed_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureObserver_OnBufferDestroyed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureObserver_OnBufferDestroyed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureObserver_OnBufferDestroyed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.bufferId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoCaptureHost_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_Start_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.sessionId = 0;
    this.params = null;
    this.observer = new VideoCaptureObserverPtr();
  };
  VideoCaptureHost_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_Start_Params.validate = function(messageValidator, offset) {
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




    // validate VideoCaptureHost_Start_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, video_capture_types$.VideoCaptureParams, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureHost_Start_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureHost_Start_Params.encodedSize = codec.kStructHeaderSize + 24;

  VideoCaptureHost_Start_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    val.sessionId = decoder.decodeStruct(codec.Int32);
    val.params = decoder.decodeStructPointer(video_capture_types$.VideoCaptureParams);
    val.observer = decoder.decodeStruct(new codec.Interface(VideoCaptureObserverPtr));
    return val;
  };

  VideoCaptureHost_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.sessionId);
    encoder.encodeStructPointer(video_capture_types$.VideoCaptureParams, val.params);
    encoder.encodeStruct(new codec.Interface(VideoCaptureObserverPtr), val.observer);
  };
  function VideoCaptureHost_Stop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_Stop_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
  };
  VideoCaptureHost_Stop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_Stop_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureHost_Stop_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_Stop_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_Stop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureHost_Stop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_Stop_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoCaptureHost_Pause_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_Pause_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
  };
  VideoCaptureHost_Pause_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_Pause_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureHost_Pause_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_Pause_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_Pause_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureHost_Pause_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_Pause_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoCaptureHost_Resume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_Resume_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.sessionId = 0;
    this.params = null;
  };
  VideoCaptureHost_Resume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_Resume_Params.validate = function(messageValidator, offset) {
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




    // validate VideoCaptureHost_Resume_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, video_capture_types$.VideoCaptureParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureHost_Resume_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoCaptureHost_Resume_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_Resume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    val.sessionId = decoder.decodeStruct(codec.Int32);
    val.params = decoder.decodeStructPointer(video_capture_types$.VideoCaptureParams);
    return val;
  };

  VideoCaptureHost_Resume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_Resume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.sessionId);
    encoder.encodeStructPointer(video_capture_types$.VideoCaptureParams, val.params);
  };
  function VideoCaptureHost_RequestRefreshFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_RequestRefreshFrame_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
  };
  VideoCaptureHost_RequestRefreshFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_RequestRefreshFrame_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureHost_RequestRefreshFrame_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_RequestRefreshFrame_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_RequestRefreshFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureHost_RequestRefreshFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_RequestRefreshFrame_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoCaptureHost_ReleaseBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_ReleaseBuffer_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.bufferId = 0;
    this.consumerResourceUtilization = 0;
  };
  VideoCaptureHost_ReleaseBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_ReleaseBuffer_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureHost_ReleaseBuffer_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoCaptureHost_ReleaseBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_ReleaseBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    val.bufferId = decoder.decodeStruct(codec.Int32);
    val.consumerResourceUtilization = decoder.decodeStruct(codec.Double);
    return val;
  };

  VideoCaptureHost_ReleaseBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_ReleaseBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.bufferId);
    encoder.encodeStruct(codec.Double, val.consumerResourceUtilization);
  };
  function VideoCaptureHost_GetDeviceSupportedFormats_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_GetDeviceSupportedFormats_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.sessionId = 0;
  };
  VideoCaptureHost_GetDeviceSupportedFormats_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_GetDeviceSupportedFormats_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureHost_GetDeviceSupportedFormats_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_GetDeviceSupportedFormats_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_GetDeviceSupportedFormats_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    val.sessionId = decoder.decodeStruct(codec.Int32);
    return val;
  };

  VideoCaptureHost_GetDeviceSupportedFormats_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_GetDeviceSupportedFormats_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.sessionId);
  };
  function VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.prototype.initDefaults_ = function() {
    this.formatsSupported = null;
  };
  VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.formatsSupported
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(video_capture_types$.VideoCaptureFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.formatsSupported = decoder.decodeArrayPointer(new codec.PointerTo(video_capture_types$.VideoCaptureFormat));
    return val;
  };

  VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(video_capture_types$.VideoCaptureFormat), val.formatsSupported);
  };
  function VideoCaptureHost_GetDeviceFormatsInUse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_GetDeviceFormatsInUse_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.sessionId = 0;
  };
  VideoCaptureHost_GetDeviceFormatsInUse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_GetDeviceFormatsInUse_Params.validate = function(messageValidator, offset) {
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

  VideoCaptureHost_GetDeviceFormatsInUse_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_GetDeviceFormatsInUse_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_GetDeviceFormatsInUse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    val.sessionId = decoder.decodeStruct(codec.Int32);
    return val;
  };

  VideoCaptureHost_GetDeviceFormatsInUse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_GetDeviceFormatsInUse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.sessionId);
  };
  function VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.prototype.initDefaults_ = function() {
    this.formatsInUse = null;
  };
  VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.formatsInUse
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(video_capture_types$.VideoCaptureFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.formatsInUse = decoder.decodeArrayPointer(new codec.PointerTo(video_capture_types$.VideoCaptureFormat));
    return val;
  };

  VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(video_capture_types$.VideoCaptureFormat), val.formatsInUse);
  };
  function VideoCaptureHost_OnFrameDropped_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_OnFrameDropped_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.reason = 0;
  };
  VideoCaptureHost_OnFrameDropped_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_OnFrameDropped_Params.validate = function(messageValidator, offset) {
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



    // validate VideoCaptureHost_OnFrameDropped_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, video_capture_types$.VideoCaptureFrameDropReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureHost_OnFrameDropped_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoCaptureHost_OnFrameDropped_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_OnFrameDropped_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    val.reason = decoder.decodeStruct(codec.Int32);
    return val;
  };

  VideoCaptureHost_OnFrameDropped_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_OnFrameDropped_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.reason);
  };
  function VideoCaptureHost_OnLog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureHost_OnLog_Params.prototype.initDefaults_ = function() {
    this.deviceId = 0;
    this.message = null;
  };
  VideoCaptureHost_OnLog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureHost_OnLog_Params.validate = function(messageValidator, offset) {
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



    // validate VideoCaptureHost_OnLog_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureHost_OnLog_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoCaptureHost_OnLog_Params.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureHost_OnLog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  VideoCaptureHost_OnLog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureHost_OnLog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.deviceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.message);
  };
  var kVideoCaptureObserver_OnStateChanged_Name = 0;
  var kVideoCaptureObserver_OnNewBuffer_Name = 1;
  var kVideoCaptureObserver_OnBufferReady_Name = 2;
  var kVideoCaptureObserver_OnBufferDestroyed_Name = 3;

  function VideoCaptureObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoCaptureObserver,
                                                   handleOrPtrInfo);
  }

  function VideoCaptureObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoCaptureObserver, associatedInterfacePtrInfo);
  }

  VideoCaptureObserverAssociatedPtr.prototype =
      Object.create(VideoCaptureObserverPtr.prototype);
  VideoCaptureObserverAssociatedPtr.prototype.constructor =
      VideoCaptureObserverAssociatedPtr;

  function VideoCaptureObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoCaptureObserverPtr.prototype.onStateChanged = function() {
    return VideoCaptureObserverProxy.prototype.onStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureObserverProxy.prototype.onStateChanged = function(state) {
    var params_ = new VideoCaptureObserver_OnStateChanged_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureObserver_OnStateChanged_Name,
        codec.align(VideoCaptureObserver_OnStateChanged_Params.encodedSize));
    builder.encodeStruct(VideoCaptureObserver_OnStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureObserverPtr.prototype.onNewBuffer = function() {
    return VideoCaptureObserverProxy.prototype.onNewBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureObserverProxy.prototype.onNewBuffer = function(bufferId, bufferHandle) {
    var params_ = new VideoCaptureObserver_OnNewBuffer_Params();
    params_.bufferId = bufferId;
    params_.bufferHandle = bufferHandle;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureObserver_OnNewBuffer_Name,
        codec.align(VideoCaptureObserver_OnNewBuffer_Params.encodedSize));
    builder.encodeStruct(VideoCaptureObserver_OnNewBuffer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureObserverPtr.prototype.onBufferReady = function() {
    return VideoCaptureObserverProxy.prototype.onBufferReady
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureObserverProxy.prototype.onBufferReady = function(bufferId, info) {
    var params_ = new VideoCaptureObserver_OnBufferReady_Params();
    params_.bufferId = bufferId;
    params_.info = info;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureObserver_OnBufferReady_Name,
        codec.align(VideoCaptureObserver_OnBufferReady_Params.encodedSize));
    builder.encodeStruct(VideoCaptureObserver_OnBufferReady_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureObserverPtr.prototype.onBufferDestroyed = function() {
    return VideoCaptureObserverProxy.prototype.onBufferDestroyed
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureObserverProxy.prototype.onBufferDestroyed = function(bufferId) {
    var params_ = new VideoCaptureObserver_OnBufferDestroyed_Params();
    params_.bufferId = bufferId;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureObserver_OnBufferDestroyed_Name,
        codec.align(VideoCaptureObserver_OnBufferDestroyed_Params.encodedSize));
    builder.encodeStruct(VideoCaptureObserver_OnBufferDestroyed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoCaptureObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoCaptureObserverStub.prototype.onStateChanged = function(state) {
    return this.delegate_ && this.delegate_.onStateChanged && this.delegate_.onStateChanged(state);
  }
  VideoCaptureObserverStub.prototype.onNewBuffer = function(bufferId, bufferHandle) {
    return this.delegate_ && this.delegate_.onNewBuffer && this.delegate_.onNewBuffer(bufferId, bufferHandle);
  }
  VideoCaptureObserverStub.prototype.onBufferReady = function(bufferId, info) {
    return this.delegate_ && this.delegate_.onBufferReady && this.delegate_.onBufferReady(bufferId, info);
  }
  VideoCaptureObserverStub.prototype.onBufferDestroyed = function(bufferId) {
    return this.delegate_ && this.delegate_.onBufferDestroyed && this.delegate_.onBufferDestroyed(bufferId);
  }

  VideoCaptureObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoCaptureObserver_OnStateChanged_Name:
      var params = reader.decodeStruct(VideoCaptureObserver_OnStateChanged_Params);
      this.onStateChanged(params.state);
      return true;
    case kVideoCaptureObserver_OnNewBuffer_Name:
      var params = reader.decodeStruct(VideoCaptureObserver_OnNewBuffer_Params);
      this.onNewBuffer(params.bufferId, params.bufferHandle);
      return true;
    case kVideoCaptureObserver_OnBufferReady_Name:
      var params = reader.decodeStruct(VideoCaptureObserver_OnBufferReady_Params);
      this.onBufferReady(params.bufferId, params.info);
      return true;
    case kVideoCaptureObserver_OnBufferDestroyed_Name:
      var params = reader.decodeStruct(VideoCaptureObserver_OnBufferDestroyed_Params);
      this.onBufferDestroyed(params.bufferId);
      return true;
    default:
      return false;
    }
  };

  VideoCaptureObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVideoCaptureObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoCaptureObserver_OnStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureObserver_OnStateChanged_Params;
      break;
      case kVideoCaptureObserver_OnNewBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureObserver_OnNewBuffer_Params;
      break;
      case kVideoCaptureObserver_OnBufferReady_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureObserver_OnBufferReady_Params;
      break;
      case kVideoCaptureObserver_OnBufferDestroyed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureObserver_OnBufferDestroyed_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoCaptureObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VideoCaptureObserver = {
    name: 'media.mojom.VideoCaptureObserver',
    kVersion: 0,
    ptrClass: VideoCaptureObserverPtr,
    proxyClass: VideoCaptureObserverProxy,
    stubClass: VideoCaptureObserverStub,
    validateRequest: validateVideoCaptureObserverRequest,
    validateResponse: null,
  };
  VideoCaptureObserverStub.prototype.validator = validateVideoCaptureObserverRequest;
  VideoCaptureObserverProxy.prototype.validator = null;
  var kVideoCaptureHost_Start_Name = 0;
  var kVideoCaptureHost_Stop_Name = 1;
  var kVideoCaptureHost_Pause_Name = 2;
  var kVideoCaptureHost_Resume_Name = 3;
  var kVideoCaptureHost_RequestRefreshFrame_Name = 4;
  var kVideoCaptureHost_ReleaseBuffer_Name = 5;
  var kVideoCaptureHost_GetDeviceSupportedFormats_Name = 6;
  var kVideoCaptureHost_GetDeviceFormatsInUse_Name = 7;
  var kVideoCaptureHost_OnFrameDropped_Name = 8;
  var kVideoCaptureHost_OnLog_Name = 9;

  function VideoCaptureHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoCaptureHost,
                                                   handleOrPtrInfo);
  }

  function VideoCaptureHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoCaptureHost, associatedInterfacePtrInfo);
  }

  VideoCaptureHostAssociatedPtr.prototype =
      Object.create(VideoCaptureHostPtr.prototype);
  VideoCaptureHostAssociatedPtr.prototype.constructor =
      VideoCaptureHostAssociatedPtr;

  function VideoCaptureHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoCaptureHostPtr.prototype.start = function() {
    return VideoCaptureHostProxy.prototype.start
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.start = function(deviceId, sessionId, params, observer) {
    var params_ = new VideoCaptureHost_Start_Params();
    params_.deviceId = deviceId;
    params_.sessionId = sessionId;
    params_.params = params;
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_Start_Name,
        codec.align(VideoCaptureHost_Start_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_Start_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.stop = function() {
    return VideoCaptureHostProxy.prototype.stop
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.stop = function(deviceId) {
    var params_ = new VideoCaptureHost_Stop_Params();
    params_.deviceId = deviceId;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_Stop_Name,
        codec.align(VideoCaptureHost_Stop_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_Stop_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.pause = function() {
    return VideoCaptureHostProxy.prototype.pause
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.pause = function(deviceId) {
    var params_ = new VideoCaptureHost_Pause_Params();
    params_.deviceId = deviceId;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_Pause_Name,
        codec.align(VideoCaptureHost_Pause_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_Pause_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.resume = function() {
    return VideoCaptureHostProxy.prototype.resume
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.resume = function(deviceId, sessionId, params) {
    var params_ = new VideoCaptureHost_Resume_Params();
    params_.deviceId = deviceId;
    params_.sessionId = sessionId;
    params_.params = params;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_Resume_Name,
        codec.align(VideoCaptureHost_Resume_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_Resume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.requestRefreshFrame = function() {
    return VideoCaptureHostProxy.prototype.requestRefreshFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.requestRefreshFrame = function(deviceId) {
    var params_ = new VideoCaptureHost_RequestRefreshFrame_Params();
    params_.deviceId = deviceId;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_RequestRefreshFrame_Name,
        codec.align(VideoCaptureHost_RequestRefreshFrame_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_RequestRefreshFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.releaseBuffer = function() {
    return VideoCaptureHostProxy.prototype.releaseBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.releaseBuffer = function(deviceId, bufferId, consumerResourceUtilization) {
    var params_ = new VideoCaptureHost_ReleaseBuffer_Params();
    params_.deviceId = deviceId;
    params_.bufferId = bufferId;
    params_.consumerResourceUtilization = consumerResourceUtilization;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_ReleaseBuffer_Name,
        codec.align(VideoCaptureHost_ReleaseBuffer_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_ReleaseBuffer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.getDeviceSupportedFormats = function() {
    return VideoCaptureHostProxy.prototype.getDeviceSupportedFormats
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.getDeviceSupportedFormats = function(deviceId, sessionId) {
    var params_ = new VideoCaptureHost_GetDeviceSupportedFormats_Params();
    params_.deviceId = deviceId;
    params_.sessionId = sessionId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoCaptureHost_GetDeviceSupportedFormats_Name,
          codec.align(VideoCaptureHost_GetDeviceSupportedFormats_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoCaptureHost_GetDeviceSupportedFormats_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoCaptureHostPtr.prototype.getDeviceFormatsInUse = function() {
    return VideoCaptureHostProxy.prototype.getDeviceFormatsInUse
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.getDeviceFormatsInUse = function(deviceId, sessionId) {
    var params_ = new VideoCaptureHost_GetDeviceFormatsInUse_Params();
    params_.deviceId = deviceId;
    params_.sessionId = sessionId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoCaptureHost_GetDeviceFormatsInUse_Name,
          codec.align(VideoCaptureHost_GetDeviceFormatsInUse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoCaptureHost_GetDeviceFormatsInUse_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoCaptureHostPtr.prototype.onFrameDropped = function() {
    return VideoCaptureHostProxy.prototype.onFrameDropped
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.onFrameDropped = function(deviceId, reason) {
    var params_ = new VideoCaptureHost_OnFrameDropped_Params();
    params_.deviceId = deviceId;
    params_.reason = reason;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_OnFrameDropped_Name,
        codec.align(VideoCaptureHost_OnFrameDropped_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_OnFrameDropped_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoCaptureHostPtr.prototype.onLog = function() {
    return VideoCaptureHostProxy.prototype.onLog
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoCaptureHostProxy.prototype.onLog = function(deviceId, message) {
    var params_ = new VideoCaptureHost_OnLog_Params();
    params_.deviceId = deviceId;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kVideoCaptureHost_OnLog_Name,
        codec.align(VideoCaptureHost_OnLog_Params.encodedSize));
    builder.encodeStruct(VideoCaptureHost_OnLog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoCaptureHostStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoCaptureHostStub.prototype.start = function(deviceId, sessionId, params, observer) {
    return this.delegate_ && this.delegate_.start && this.delegate_.start(deviceId, sessionId, params, observer);
  }
  VideoCaptureHostStub.prototype.stop = function(deviceId) {
    return this.delegate_ && this.delegate_.stop && this.delegate_.stop(deviceId);
  }
  VideoCaptureHostStub.prototype.pause = function(deviceId) {
    return this.delegate_ && this.delegate_.pause && this.delegate_.pause(deviceId);
  }
  VideoCaptureHostStub.prototype.resume = function(deviceId, sessionId, params) {
    return this.delegate_ && this.delegate_.resume && this.delegate_.resume(deviceId, sessionId, params);
  }
  VideoCaptureHostStub.prototype.requestRefreshFrame = function(deviceId) {
    return this.delegate_ && this.delegate_.requestRefreshFrame && this.delegate_.requestRefreshFrame(deviceId);
  }
  VideoCaptureHostStub.prototype.releaseBuffer = function(deviceId, bufferId, consumerResourceUtilization) {
    return this.delegate_ && this.delegate_.releaseBuffer && this.delegate_.releaseBuffer(deviceId, bufferId, consumerResourceUtilization);
  }
  VideoCaptureHostStub.prototype.getDeviceSupportedFormats = function(deviceId, sessionId) {
    return this.delegate_ && this.delegate_.getDeviceSupportedFormats && this.delegate_.getDeviceSupportedFormats(deviceId, sessionId);
  }
  VideoCaptureHostStub.prototype.getDeviceFormatsInUse = function(deviceId, sessionId) {
    return this.delegate_ && this.delegate_.getDeviceFormatsInUse && this.delegate_.getDeviceFormatsInUse(deviceId, sessionId);
  }
  VideoCaptureHostStub.prototype.onFrameDropped = function(deviceId, reason) {
    return this.delegate_ && this.delegate_.onFrameDropped && this.delegate_.onFrameDropped(deviceId, reason);
  }
  VideoCaptureHostStub.prototype.onLog = function(deviceId, message) {
    return this.delegate_ && this.delegate_.onLog && this.delegate_.onLog(deviceId, message);
  }

  VideoCaptureHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoCaptureHost_Start_Name:
      var params = reader.decodeStruct(VideoCaptureHost_Start_Params);
      this.start(params.deviceId, params.sessionId, params.params, params.observer);
      return true;
    case kVideoCaptureHost_Stop_Name:
      var params = reader.decodeStruct(VideoCaptureHost_Stop_Params);
      this.stop(params.deviceId);
      return true;
    case kVideoCaptureHost_Pause_Name:
      var params = reader.decodeStruct(VideoCaptureHost_Pause_Params);
      this.pause(params.deviceId);
      return true;
    case kVideoCaptureHost_Resume_Name:
      var params = reader.decodeStruct(VideoCaptureHost_Resume_Params);
      this.resume(params.deviceId, params.sessionId, params.params);
      return true;
    case kVideoCaptureHost_RequestRefreshFrame_Name:
      var params = reader.decodeStruct(VideoCaptureHost_RequestRefreshFrame_Params);
      this.requestRefreshFrame(params.deviceId);
      return true;
    case kVideoCaptureHost_ReleaseBuffer_Name:
      var params = reader.decodeStruct(VideoCaptureHost_ReleaseBuffer_Params);
      this.releaseBuffer(params.deviceId, params.bufferId, params.consumerResourceUtilization);
      return true;
    case kVideoCaptureHost_OnFrameDropped_Name:
      var params = reader.decodeStruct(VideoCaptureHost_OnFrameDropped_Params);
      this.onFrameDropped(params.deviceId, params.reason);
      return true;
    case kVideoCaptureHost_OnLog_Name:
      var params = reader.decodeStruct(VideoCaptureHost_OnLog_Params);
      this.onLog(params.deviceId, params.message);
      return true;
    default:
      return false;
    }
  };

  VideoCaptureHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoCaptureHost_GetDeviceSupportedFormats_Name:
      var params = reader.decodeStruct(VideoCaptureHost_GetDeviceSupportedFormats_Params);
      this.getDeviceSupportedFormats(params.deviceId, params.sessionId).then(function(response) {
        var responseParams =
            new VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams();
        responseParams.formatsSupported = response.formatsSupported;
        var builder = new codec.MessageV1Builder(
            kVideoCaptureHost_GetDeviceSupportedFormats_Name,
            codec.align(VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVideoCaptureHost_GetDeviceFormatsInUse_Name:
      var params = reader.decodeStruct(VideoCaptureHost_GetDeviceFormatsInUse_Params);
      this.getDeviceFormatsInUse(params.deviceId, params.sessionId).then(function(response) {
        var responseParams =
            new VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams();
        responseParams.formatsInUse = response.formatsInUse;
        var builder = new codec.MessageV1Builder(
            kVideoCaptureHost_GetDeviceFormatsInUse_Name,
            codec.align(VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVideoCaptureHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoCaptureHost_Start_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_Start_Params;
      break;
      case kVideoCaptureHost_Stop_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_Stop_Params;
      break;
      case kVideoCaptureHost_Pause_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_Pause_Params;
      break;
      case kVideoCaptureHost_Resume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_Resume_Params;
      break;
      case kVideoCaptureHost_RequestRefreshFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_RequestRefreshFrame_Params;
      break;
      case kVideoCaptureHost_ReleaseBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_ReleaseBuffer_Params;
      break;
      case kVideoCaptureHost_GetDeviceSupportedFormats_Name:
        if (message.expectsResponse())
          paramsClass = VideoCaptureHost_GetDeviceSupportedFormats_Params;
      break;
      case kVideoCaptureHost_GetDeviceFormatsInUse_Name:
        if (message.expectsResponse())
          paramsClass = VideoCaptureHost_GetDeviceFormatsInUse_Params;
      break;
      case kVideoCaptureHost_OnFrameDropped_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_OnFrameDropped_Params;
      break;
      case kVideoCaptureHost_OnLog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoCaptureHost_OnLog_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoCaptureHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVideoCaptureHost_GetDeviceSupportedFormats_Name:
        if (message.isResponse())
          paramsClass = VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams;
        break;
      case kVideoCaptureHost_GetDeviceFormatsInUse_Name:
        if (message.isResponse())
          paramsClass = VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VideoCaptureHost = {
    name: 'media.mojom.VideoCaptureHost',
    kVersion: 0,
    ptrClass: VideoCaptureHostPtr,
    proxyClass: VideoCaptureHostProxy,
    stubClass: VideoCaptureHostStub,
    validateRequest: validateVideoCaptureHostRequest,
    validateResponse: validateVideoCaptureHostResponse,
  };
  VideoCaptureHostStub.prototype.validator = validateVideoCaptureHostRequest;
  VideoCaptureHostProxy.prototype.validator = validateVideoCaptureHostResponse;
  exports.VideoCaptureState = VideoCaptureState;
  exports.VideoCaptureObserver = VideoCaptureObserver;
  exports.VideoCaptureObserverPtr = VideoCaptureObserverPtr;
  exports.VideoCaptureObserverAssociatedPtr = VideoCaptureObserverAssociatedPtr;
  exports.VideoCaptureHost = VideoCaptureHost;
  exports.VideoCaptureHostPtr = VideoCaptureHostPtr;
  exports.VideoCaptureHostAssociatedPtr = VideoCaptureHostAssociatedPtr;
})();