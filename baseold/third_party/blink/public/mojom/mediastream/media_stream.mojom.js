// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/mediastream/media_stream.mojom';
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
  var video_capture_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/capture/mojom/video_capture_types.mojom', '../../../../../media/capture/mojom/video_capture_types.mojom.js');
  }
  var audio_parameters$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/audio_parameters.mojom', '../../../../../media/mojo/interfaces/audio_parameters.mojom.js');
  }
  var display_media_information$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/display_media_information.mojom', '../../../../../media/mojo/interfaces/display_media_information.mojom.js');
  }


  var MediaStreamType = {};
  MediaStreamType.MEDIA_NO_SERVICE = 0;
  MediaStreamType.MEDIA_DEVICE_AUDIO_CAPTURE = MediaStreamType.MEDIA_NO_SERVICE + 1;
  MediaStreamType.MEDIA_DEVICE_VIDEO_CAPTURE = MediaStreamType.MEDIA_DEVICE_AUDIO_CAPTURE + 1;
  MediaStreamType.MEDIA_GUM_TAB_AUDIO_CAPTURE = MediaStreamType.MEDIA_DEVICE_VIDEO_CAPTURE + 1;
  MediaStreamType.MEDIA_GUM_TAB_VIDEO_CAPTURE = MediaStreamType.MEDIA_GUM_TAB_AUDIO_CAPTURE + 1;
  MediaStreamType.MEDIA_GUM_DESKTOP_VIDEO_CAPTURE = MediaStreamType.MEDIA_GUM_TAB_VIDEO_CAPTURE + 1;
  MediaStreamType.MEDIA_GUM_DESKTOP_AUDIO_CAPTURE = MediaStreamType.MEDIA_GUM_DESKTOP_VIDEO_CAPTURE + 1;
  MediaStreamType.MEDIA_DISPLAY_VIDEO_CAPTURE = MediaStreamType.MEDIA_GUM_DESKTOP_AUDIO_CAPTURE + 1;
  MediaStreamType.MEDIA_DISPLAY_AUDIO_CAPTURE = MediaStreamType.MEDIA_DISPLAY_VIDEO_CAPTURE + 1;
  MediaStreamType.NUM_MEDIA_TYPES = MediaStreamType.MEDIA_DISPLAY_AUDIO_CAPTURE + 1;
  MediaStreamType.MIN_VALUE = 0,
  MediaStreamType.MAX_VALUE = 9,

  MediaStreamType.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  MediaStreamType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MediaStreamRequestResult = {};
  MediaStreamRequestResult.OK = 0;
  MediaStreamRequestResult.PERMISSION_DENIED = MediaStreamRequestResult.OK + 1;
  MediaStreamRequestResult.PERMISSION_DISMISSED = MediaStreamRequestResult.PERMISSION_DENIED + 1;
  MediaStreamRequestResult.INVALID_STATE = MediaStreamRequestResult.PERMISSION_DISMISSED + 1;
  MediaStreamRequestResult.NO_HARDWARE = MediaStreamRequestResult.INVALID_STATE + 1;
  MediaStreamRequestResult.INVALID_SECURITY_ORIGIN = MediaStreamRequestResult.NO_HARDWARE + 1;
  MediaStreamRequestResult.TAB_CAPTURE_FAILURE = MediaStreamRequestResult.INVALID_SECURITY_ORIGIN + 1;
  MediaStreamRequestResult.SCREEN_CAPTURE_FAILURE = MediaStreamRequestResult.TAB_CAPTURE_FAILURE + 1;
  MediaStreamRequestResult.CAPTURE_FAILURE = MediaStreamRequestResult.SCREEN_CAPTURE_FAILURE + 1;
  MediaStreamRequestResult.CONSTRAINT_NOT_SATISFIED = MediaStreamRequestResult.CAPTURE_FAILURE + 1;
  MediaStreamRequestResult.TRACK_START_FAILURE_AUDIO = MediaStreamRequestResult.CONSTRAINT_NOT_SATISFIED + 1;
  MediaStreamRequestResult.TRACK_START_FAILURE_VIDEO = MediaStreamRequestResult.TRACK_START_FAILURE_AUDIO + 1;
  MediaStreamRequestResult.NOT_SUPPORTED = MediaStreamRequestResult.TRACK_START_FAILURE_VIDEO + 1;
  MediaStreamRequestResult.FAILED_DUE_TO_SHUTDOWN = MediaStreamRequestResult.NOT_SUPPORTED + 1;
  MediaStreamRequestResult.KILL_SWITCH_ON = MediaStreamRequestResult.FAILED_DUE_TO_SHUTDOWN + 1;
  MediaStreamRequestResult.SYSTEM_PERMISSION_DENIED = MediaStreamRequestResult.KILL_SWITCH_ON + 1;
  MediaStreamRequestResult.MIN_VALUE = 0,
  MediaStreamRequestResult.MAX_VALUE = 15,

  MediaStreamRequestResult.isKnownEnumValue = function(value) {
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
    case 15:
      return true;
    }
    return false;
  };

  MediaStreamRequestResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function MediaStreamDevice(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDevice.prototype.initDefaults_ = function() {
    this.type = 0;
    this.videoFacing = 0;
    this.id = null;
    this.groupId = null;
    this.matchedOutputDeviceId = null;
    this.name = null;
    this.input = null;
    this.sessionId = 0;
    this.displayMediaInfo = null;
  };
  MediaStreamDevice.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDevice.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaStreamType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.videoFacing
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, video_capture_types$.VideoFacingMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.groupId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.matchedOutputDeviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDevice.input
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, audio_parameters$.AudioParameters, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate MediaStreamDevice.displayMediaInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, display_media_information$.DisplayMediaInformation, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDevice.encodedSize = codec.kStructHeaderSize + 64;

  MediaStreamDevice.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDevice();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.videoFacing = decoder.decodeStruct(codec.Int32);
    val.id = decoder.decodeStruct(codec.String);
    val.groupId = decoder.decodeStruct(codec.NullableString);
    val.matchedOutputDeviceId = decoder.decodeStruct(codec.NullableString);
    val.name = decoder.decodeStruct(codec.String);
    val.input = decoder.decodeStructPointer(audio_parameters$.AudioParameters);
    val.sessionId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.displayMediaInfo = decoder.decodeStructPointer(display_media_information$.DisplayMediaInformation);
    return val;
  };

  MediaStreamDevice.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDevice.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.videoFacing);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.NullableString, val.groupId);
    encoder.encodeStruct(codec.NullableString, val.matchedOutputDeviceId);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(audio_parameters$.AudioParameters, val.input);
    encoder.encodeStruct(codec.Int32, val.sessionId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(display_media_information$.DisplayMediaInformation, val.displayMediaInfo);
  };
  function TrackControls(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrackControls.prototype.initDefaults_ = function() {
    this.requested = false;
    this.streamType = 0;
    this.deviceId = null;
  };
  TrackControls.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrackControls.validate = function(messageValidator, offset) {
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



    // validate TrackControls.streamType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, MediaStreamType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackControls.deviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrackControls.encodedSize = codec.kStructHeaderSize + 16;

  TrackControls.decode = function(decoder) {
    var packed;
    var val = new TrackControls();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.requested = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.streamType = decoder.decodeStruct(codec.Int32);
    val.deviceId = decoder.decodeStruct(codec.String);
    return val;
  };

  TrackControls.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrackControls.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.requested & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.streamType);
    encoder.encodeStruct(codec.String, val.deviceId);
  };
  function StreamControls(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StreamControls.prototype.initDefaults_ = function() {
    this.audio = null;
    this.video = null;
    this.hotwordEnabled = false;
    this.disableLocalEcho = false;
  };
  StreamControls.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StreamControls.validate = function(messageValidator, offset) {
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


    // validate StreamControls.audio
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, TrackControls, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamControls.video
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, TrackControls, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  StreamControls.encodedSize = codec.kStructHeaderSize + 24;

  StreamControls.decode = function(decoder) {
    var packed;
    var val = new StreamControls();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audio = decoder.decodeStructPointer(TrackControls);
    val.video = decoder.decodeStructPointer(TrackControls);
    packed = decoder.readUint8();
    val.hotwordEnabled = (packed >> 0) & 1 ? true : false;
    val.disableLocalEcho = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StreamControls.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StreamControls.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(TrackControls, val.audio);
    encoder.encodeStructPointer(TrackControls, val.video);
    packed = 0;
    packed |= (val.hotwordEnabled & 1) << 0
    packed |= (val.disableLocalEcho & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaStreamDeviceObserver_OnDeviceStopped_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDeviceObserver_OnDeviceStopped_Params.prototype.initDefaults_ = function() {
    this.label = null;
    this.device = null;
  };
  MediaStreamDeviceObserver_OnDeviceStopped_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDeviceObserver_OnDeviceStopped_Params.validate = function(messageValidator, offset) {
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


    // validate MediaStreamDeviceObserver_OnDeviceStopped_Params.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDeviceObserver_OnDeviceStopped_Params.device
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, MediaStreamDevice, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDeviceObserver_OnDeviceStopped_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaStreamDeviceObserver_OnDeviceStopped_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDeviceObserver_OnDeviceStopped_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label = decoder.decodeStruct(codec.String);
    val.device = decoder.decodeStructPointer(MediaStreamDevice);
    return val;
  };

  MediaStreamDeviceObserver_OnDeviceStopped_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDeviceObserver_OnDeviceStopped_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStructPointer(MediaStreamDevice, val.device);
  };
  function MediaStreamDeviceObserver_OnDeviceChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDeviceObserver_OnDeviceChanged_Params.prototype.initDefaults_ = function() {
    this.label = null;
    this.oldDevice = null;
    this.newDevice = null;
  };
  MediaStreamDeviceObserver_OnDeviceChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDeviceObserver_OnDeviceChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaStreamDeviceObserver_OnDeviceChanged_Params.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDeviceObserver_OnDeviceChanged_Params.oldDevice
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, MediaStreamDevice, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDeviceObserver_OnDeviceChanged_Params.newDevice
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, MediaStreamDevice, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDeviceObserver_OnDeviceChanged_Params.encodedSize = codec.kStructHeaderSize + 24;

  MediaStreamDeviceObserver_OnDeviceChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDeviceObserver_OnDeviceChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label = decoder.decodeStruct(codec.String);
    val.oldDevice = decoder.decodeStructPointer(MediaStreamDevice);
    val.newDevice = decoder.decodeStructPointer(MediaStreamDevice);
    return val;
  };

  MediaStreamDeviceObserver_OnDeviceChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDeviceObserver_OnDeviceChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStructPointer(MediaStreamDevice, val.oldDevice);
    encoder.encodeStructPointer(MediaStreamDevice, val.newDevice);
  };
  function MediaStreamDispatcherHost_GenerateStream_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_GenerateStream_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.userGesture = false;
    this.controls = null;
  };
  MediaStreamDispatcherHost_GenerateStream_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_GenerateStream_Params.validate = function(messageValidator, offset) {
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



    // validate MediaStreamDispatcherHost_GenerateStream_Params.controls
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, StreamControls, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_GenerateStream_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaStreamDispatcherHost_GenerateStream_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_GenerateStream_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.userGesture = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.controls = decoder.decodeStructPointer(StreamControls);
    return val;
  };

  MediaStreamDispatcherHost_GenerateStream_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_GenerateStream_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    packed = 0;
    packed |= (val.userGesture & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(StreamControls, val.controls);
  };
  function MediaStreamDispatcherHost_GenerateStream_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_GenerateStream_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.label = null;
    this.audioDevices = null;
    this.videoDevices = null;
  };
  MediaStreamDispatcherHost_GenerateStream_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_GenerateStream_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaStreamDispatcherHost_GenerateStream_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaStreamRequestResult);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDispatcherHost_GenerateStream_ResponseParams.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDispatcherHost_GenerateStream_ResponseParams.audioDevices
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(MediaStreamDevice), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDispatcherHost_GenerateStream_ResponseParams.videoDevices
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(MediaStreamDevice), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_GenerateStream_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  MediaStreamDispatcherHost_GenerateStream_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_GenerateStream_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.label = decoder.decodeStruct(codec.String);
    val.audioDevices = decoder.decodeArrayPointer(new codec.PointerTo(MediaStreamDevice));
    val.videoDevices = decoder.decodeArrayPointer(new codec.PointerTo(MediaStreamDevice));
    return val;
  };

  MediaStreamDispatcherHost_GenerateStream_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_GenerateStream_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeArrayPointer(new codec.PointerTo(MediaStreamDevice), val.audioDevices);
    encoder.encodeArrayPointer(new codec.PointerTo(MediaStreamDevice), val.videoDevices);
  };
  function MediaStreamDispatcherHost_CancelRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_CancelRequest_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
  };
  MediaStreamDispatcherHost_CancelRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_CancelRequest_Params.validate = function(messageValidator, offset) {
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

  MediaStreamDispatcherHost_CancelRequest_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaStreamDispatcherHost_CancelRequest_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_CancelRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaStreamDispatcherHost_CancelRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_CancelRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaStreamDispatcherHost_StopStreamDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_StopStreamDevice_Params.prototype.initDefaults_ = function() {
    this.deviceId = null;
    this.sessionId = 0;
  };
  MediaStreamDispatcherHost_StopStreamDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_StopStreamDevice_Params.validate = function(messageValidator, offset) {
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


    // validate MediaStreamDispatcherHost_StopStreamDevice_Params.deviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_StopStreamDevice_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaStreamDispatcherHost_StopStreamDevice_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_StopStreamDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceId = decoder.decodeStruct(codec.String);
    val.sessionId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaStreamDispatcherHost_StopStreamDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_StopStreamDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.deviceId);
    encoder.encodeStruct(codec.Int32, val.sessionId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaStreamDispatcherHost_OpenDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_OpenDevice_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.type = 0;
    this.deviceId = null;
  };
  MediaStreamDispatcherHost_OpenDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_OpenDevice_Params.validate = function(messageValidator, offset) {
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



    // validate MediaStreamDispatcherHost_OpenDevice_Params.deviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDispatcherHost_OpenDevice_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, MediaStreamType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_OpenDevice_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaStreamDispatcherHost_OpenDevice_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_OpenDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    val.type = decoder.decodeStruct(codec.Int32);
    val.deviceId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaStreamDispatcherHost_OpenDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_OpenDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.String, val.deviceId);
  };
  function MediaStreamDispatcherHost_OpenDevice_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_OpenDevice_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.label = null;
    this.device = null;
  };
  MediaStreamDispatcherHost_OpenDevice_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_OpenDevice_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate MediaStreamDispatcherHost_OpenDevice_ResponseParams.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStreamDispatcherHost_OpenDevice_ResponseParams.device
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, MediaStreamDevice, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_OpenDevice_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  MediaStreamDispatcherHost_OpenDevice_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_OpenDevice_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.label = decoder.decodeStruct(codec.String);
    val.device = decoder.decodeStructPointer(MediaStreamDevice);
    return val;
  };

  MediaStreamDispatcherHost_OpenDevice_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_OpenDevice_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStructPointer(MediaStreamDevice, val.device);
  };
  function MediaStreamDispatcherHost_CloseDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_CloseDevice_Params.prototype.initDefaults_ = function() {
    this.label = null;
  };
  MediaStreamDispatcherHost_CloseDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_CloseDevice_Params.validate = function(messageValidator, offset) {
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


    // validate MediaStreamDispatcherHost_CloseDevice_Params.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_CloseDevice_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaStreamDispatcherHost_CloseDevice_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_CloseDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaStreamDispatcherHost_CloseDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_CloseDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.label);
  };
  function MediaStreamDispatcherHost_SetCapturingLinkSecured_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.prototype.initDefaults_ = function() {
    this.sessionId = 0;
    this.type = 0;
    this.isSecure = false;
  };
  MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.validate = function(messageValidator, offset) {
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



    // validate MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, MediaStreamType);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_SetCapturingLinkSecured_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sessionId = decoder.decodeStruct(codec.Int32);
    val.type = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isSecure = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.sessionId);
    encoder.encodeStruct(codec.Int32, val.type);
    packed = 0;
    packed |= (val.isSecure & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaStreamDispatcherHost_OnStreamStarted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamDispatcherHost_OnStreamStarted_Params.prototype.initDefaults_ = function() {
    this.label = null;
  };
  MediaStreamDispatcherHost_OnStreamStarted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamDispatcherHost_OnStreamStarted_Params.validate = function(messageValidator, offset) {
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


    // validate MediaStreamDispatcherHost_OnStreamStarted_Params.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStreamDispatcherHost_OnStreamStarted_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaStreamDispatcherHost_OnStreamStarted_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamDispatcherHost_OnStreamStarted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaStreamDispatcherHost_OnStreamStarted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamDispatcherHost_OnStreamStarted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.label);
  };
  function MediaStreamTrackMetricsHost_AddTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamTrackMetricsHost_AddTrack_Params.prototype.initDefaults_ = function() {
    this.id = 0;
    this.isAudio = false;
    this.isRemote = false;
  };
  MediaStreamTrackMetricsHost_AddTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamTrackMetricsHost_AddTrack_Params.validate = function(messageValidator, offset) {
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

  MediaStreamTrackMetricsHost_AddTrack_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaStreamTrackMetricsHost_AddTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamTrackMetricsHost_AddTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Uint64);
    packed = decoder.readUint8();
    val.isAudio = (packed >> 0) & 1 ? true : false;
    val.isRemote = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaStreamTrackMetricsHost_AddTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamTrackMetricsHost_AddTrack_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.id);
    packed = 0;
    packed |= (val.isAudio & 1) << 0
    packed |= (val.isRemote & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaStreamTrackMetricsHost_RemoveTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStreamTrackMetricsHost_RemoveTrack_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  MediaStreamTrackMetricsHost_RemoveTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStreamTrackMetricsHost_RemoveTrack_Params.validate = function(messageValidator, offset) {
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

  MediaStreamTrackMetricsHost_RemoveTrack_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaStreamTrackMetricsHost_RemoveTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStreamTrackMetricsHost_RemoveTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  MediaStreamTrackMetricsHost_RemoveTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStreamTrackMetricsHost_RemoveTrack_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.id);
  };
  var kMediaStreamDeviceObserver_OnDeviceStopped_Name = 0;
  var kMediaStreamDeviceObserver_OnDeviceChanged_Name = 1;

  function MediaStreamDeviceObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaStreamDeviceObserver,
                                                   handleOrPtrInfo);
  }

  function MediaStreamDeviceObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaStreamDeviceObserver, associatedInterfacePtrInfo);
  }

  MediaStreamDeviceObserverAssociatedPtr.prototype =
      Object.create(MediaStreamDeviceObserverPtr.prototype);
  MediaStreamDeviceObserverAssociatedPtr.prototype.constructor =
      MediaStreamDeviceObserverAssociatedPtr;

  function MediaStreamDeviceObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaStreamDeviceObserverPtr.prototype.onDeviceStopped = function() {
    return MediaStreamDeviceObserverProxy.prototype.onDeviceStopped
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDeviceObserverProxy.prototype.onDeviceStopped = function(label, device) {
    var params_ = new MediaStreamDeviceObserver_OnDeviceStopped_Params();
    params_.label = label;
    params_.device = device;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDeviceObserver_OnDeviceStopped_Name,
        codec.align(MediaStreamDeviceObserver_OnDeviceStopped_Params.encodedSize));
    builder.encodeStruct(MediaStreamDeviceObserver_OnDeviceStopped_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaStreamDeviceObserverPtr.prototype.onDeviceChanged = function() {
    return MediaStreamDeviceObserverProxy.prototype.onDeviceChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDeviceObserverProxy.prototype.onDeviceChanged = function(label, oldDevice, newDevice) {
    var params_ = new MediaStreamDeviceObserver_OnDeviceChanged_Params();
    params_.label = label;
    params_.oldDevice = oldDevice;
    params_.newDevice = newDevice;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDeviceObserver_OnDeviceChanged_Name,
        codec.align(MediaStreamDeviceObserver_OnDeviceChanged_Params.encodedSize));
    builder.encodeStruct(MediaStreamDeviceObserver_OnDeviceChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaStreamDeviceObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaStreamDeviceObserverStub.prototype.onDeviceStopped = function(label, device) {
    return this.delegate_ && this.delegate_.onDeviceStopped && this.delegate_.onDeviceStopped(label, device);
  }
  MediaStreamDeviceObserverStub.prototype.onDeviceChanged = function(label, oldDevice, newDevice) {
    return this.delegate_ && this.delegate_.onDeviceChanged && this.delegate_.onDeviceChanged(label, oldDevice, newDevice);
  }

  MediaStreamDeviceObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaStreamDeviceObserver_OnDeviceStopped_Name:
      var params = reader.decodeStruct(MediaStreamDeviceObserver_OnDeviceStopped_Params);
      this.onDeviceStopped(params.label, params.device);
      return true;
    case kMediaStreamDeviceObserver_OnDeviceChanged_Name:
      var params = reader.decodeStruct(MediaStreamDeviceObserver_OnDeviceChanged_Params);
      this.onDeviceChanged(params.label, params.oldDevice, params.newDevice);
      return true;
    default:
      return false;
    }
  };

  MediaStreamDeviceObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaStreamDeviceObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaStreamDeviceObserver_OnDeviceStopped_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDeviceObserver_OnDeviceStopped_Params;
      break;
      case kMediaStreamDeviceObserver_OnDeviceChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDeviceObserver_OnDeviceChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaStreamDeviceObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaStreamDeviceObserver = {
    name: 'blink.mojom.MediaStreamDeviceObserver',
    kVersion: 0,
    ptrClass: MediaStreamDeviceObserverPtr,
    proxyClass: MediaStreamDeviceObserverProxy,
    stubClass: MediaStreamDeviceObserverStub,
    validateRequest: validateMediaStreamDeviceObserverRequest,
    validateResponse: null,
  };
  MediaStreamDeviceObserverStub.prototype.validator = validateMediaStreamDeviceObserverRequest;
  MediaStreamDeviceObserverProxy.prototype.validator = null;
  var kMediaStreamDispatcherHost_GenerateStream_Name = 0;
  var kMediaStreamDispatcherHost_CancelRequest_Name = 1;
  var kMediaStreamDispatcherHost_StopStreamDevice_Name = 2;
  var kMediaStreamDispatcherHost_OpenDevice_Name = 3;
  var kMediaStreamDispatcherHost_CloseDevice_Name = 4;
  var kMediaStreamDispatcherHost_SetCapturingLinkSecured_Name = 5;
  var kMediaStreamDispatcherHost_OnStreamStarted_Name = 6;

  function MediaStreamDispatcherHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaStreamDispatcherHost,
                                                   handleOrPtrInfo);
  }

  function MediaStreamDispatcherHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaStreamDispatcherHost, associatedInterfacePtrInfo);
  }

  MediaStreamDispatcherHostAssociatedPtr.prototype =
      Object.create(MediaStreamDispatcherHostPtr.prototype);
  MediaStreamDispatcherHostAssociatedPtr.prototype.constructor =
      MediaStreamDispatcherHostAssociatedPtr;

  function MediaStreamDispatcherHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaStreamDispatcherHostPtr.prototype.generateStream = function() {
    return MediaStreamDispatcherHostProxy.prototype.generateStream
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.generateStream = function(requestId, controls, userGesture) {
    var params_ = new MediaStreamDispatcherHost_GenerateStream_Params();
    params_.requestId = requestId;
    params_.controls = controls;
    params_.userGesture = userGesture;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaStreamDispatcherHost_GenerateStream_Name,
          codec.align(MediaStreamDispatcherHost_GenerateStream_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaStreamDispatcherHost_GenerateStream_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaStreamDispatcherHost_GenerateStream_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaStreamDispatcherHostPtr.prototype.cancelRequest = function() {
    return MediaStreamDispatcherHostProxy.prototype.cancelRequest
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.cancelRequest = function(requestId) {
    var params_ = new MediaStreamDispatcherHost_CancelRequest_Params();
    params_.requestId = requestId;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDispatcherHost_CancelRequest_Name,
        codec.align(MediaStreamDispatcherHost_CancelRequest_Params.encodedSize));
    builder.encodeStruct(MediaStreamDispatcherHost_CancelRequest_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaStreamDispatcherHostPtr.prototype.stopStreamDevice = function() {
    return MediaStreamDispatcherHostProxy.prototype.stopStreamDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.stopStreamDevice = function(deviceId, sessionId) {
    var params_ = new MediaStreamDispatcherHost_StopStreamDevice_Params();
    params_.deviceId = deviceId;
    params_.sessionId = sessionId;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDispatcherHost_StopStreamDevice_Name,
        codec.align(MediaStreamDispatcherHost_StopStreamDevice_Params.encodedSize));
    builder.encodeStruct(MediaStreamDispatcherHost_StopStreamDevice_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaStreamDispatcherHostPtr.prototype.openDevice = function() {
    return MediaStreamDispatcherHostProxy.prototype.openDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.openDevice = function(requestId, deviceId, type) {
    var params_ = new MediaStreamDispatcherHost_OpenDevice_Params();
    params_.requestId = requestId;
    params_.deviceId = deviceId;
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaStreamDispatcherHost_OpenDevice_Name,
          codec.align(MediaStreamDispatcherHost_OpenDevice_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaStreamDispatcherHost_OpenDevice_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaStreamDispatcherHost_OpenDevice_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaStreamDispatcherHostPtr.prototype.closeDevice = function() {
    return MediaStreamDispatcherHostProxy.prototype.closeDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.closeDevice = function(label) {
    var params_ = new MediaStreamDispatcherHost_CloseDevice_Params();
    params_.label = label;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDispatcherHost_CloseDevice_Name,
        codec.align(MediaStreamDispatcherHost_CloseDevice_Params.encodedSize));
    builder.encodeStruct(MediaStreamDispatcherHost_CloseDevice_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaStreamDispatcherHostPtr.prototype.setCapturingLinkSecured = function() {
    return MediaStreamDispatcherHostProxy.prototype.setCapturingLinkSecured
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.setCapturingLinkSecured = function(sessionId, type, isSecure) {
    var params_ = new MediaStreamDispatcherHost_SetCapturingLinkSecured_Params();
    params_.sessionId = sessionId;
    params_.type = type;
    params_.isSecure = isSecure;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDispatcherHost_SetCapturingLinkSecured_Name,
        codec.align(MediaStreamDispatcherHost_SetCapturingLinkSecured_Params.encodedSize));
    builder.encodeStruct(MediaStreamDispatcherHost_SetCapturingLinkSecured_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaStreamDispatcherHostPtr.prototype.onStreamStarted = function() {
    return MediaStreamDispatcherHostProxy.prototype.onStreamStarted
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamDispatcherHostProxy.prototype.onStreamStarted = function(label) {
    var params_ = new MediaStreamDispatcherHost_OnStreamStarted_Params();
    params_.label = label;
    var builder = new codec.MessageV0Builder(
        kMediaStreamDispatcherHost_OnStreamStarted_Name,
        codec.align(MediaStreamDispatcherHost_OnStreamStarted_Params.encodedSize));
    builder.encodeStruct(MediaStreamDispatcherHost_OnStreamStarted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaStreamDispatcherHostStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaStreamDispatcherHostStub.prototype.generateStream = function(requestId, controls, userGesture) {
    return this.delegate_ && this.delegate_.generateStream && this.delegate_.generateStream(requestId, controls, userGesture);
  }
  MediaStreamDispatcherHostStub.prototype.cancelRequest = function(requestId) {
    return this.delegate_ && this.delegate_.cancelRequest && this.delegate_.cancelRequest(requestId);
  }
  MediaStreamDispatcherHostStub.prototype.stopStreamDevice = function(deviceId, sessionId) {
    return this.delegate_ && this.delegate_.stopStreamDevice && this.delegate_.stopStreamDevice(deviceId, sessionId);
  }
  MediaStreamDispatcherHostStub.prototype.openDevice = function(requestId, deviceId, type) {
    return this.delegate_ && this.delegate_.openDevice && this.delegate_.openDevice(requestId, deviceId, type);
  }
  MediaStreamDispatcherHostStub.prototype.closeDevice = function(label) {
    return this.delegate_ && this.delegate_.closeDevice && this.delegate_.closeDevice(label);
  }
  MediaStreamDispatcherHostStub.prototype.setCapturingLinkSecured = function(sessionId, type, isSecure) {
    return this.delegate_ && this.delegate_.setCapturingLinkSecured && this.delegate_.setCapturingLinkSecured(sessionId, type, isSecure);
  }
  MediaStreamDispatcherHostStub.prototype.onStreamStarted = function(label) {
    return this.delegate_ && this.delegate_.onStreamStarted && this.delegate_.onStreamStarted(label);
  }

  MediaStreamDispatcherHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaStreamDispatcherHost_CancelRequest_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_CancelRequest_Params);
      this.cancelRequest(params.requestId);
      return true;
    case kMediaStreamDispatcherHost_StopStreamDevice_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_StopStreamDevice_Params);
      this.stopStreamDevice(params.deviceId, params.sessionId);
      return true;
    case kMediaStreamDispatcherHost_CloseDevice_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_CloseDevice_Params);
      this.closeDevice(params.label);
      return true;
    case kMediaStreamDispatcherHost_SetCapturingLinkSecured_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_SetCapturingLinkSecured_Params);
      this.setCapturingLinkSecured(params.sessionId, params.type, params.isSecure);
      return true;
    case kMediaStreamDispatcherHost_OnStreamStarted_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_OnStreamStarted_Params);
      this.onStreamStarted(params.label);
      return true;
    default:
      return false;
    }
  };

  MediaStreamDispatcherHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaStreamDispatcherHost_GenerateStream_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_GenerateStream_Params);
      this.generateStream(params.requestId, params.controls, params.userGesture).then(function(response) {
        var responseParams =
            new MediaStreamDispatcherHost_GenerateStream_ResponseParams();
        responseParams.result = response.result;
        responseParams.label = response.label;
        responseParams.audioDevices = response.audioDevices;
        responseParams.videoDevices = response.videoDevices;
        var builder = new codec.MessageV1Builder(
            kMediaStreamDispatcherHost_GenerateStream_Name,
            codec.align(MediaStreamDispatcherHost_GenerateStream_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaStreamDispatcherHost_GenerateStream_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaStreamDispatcherHost_OpenDevice_Name:
      var params = reader.decodeStruct(MediaStreamDispatcherHost_OpenDevice_Params);
      this.openDevice(params.requestId, params.deviceId, params.type).then(function(response) {
        var responseParams =
            new MediaStreamDispatcherHost_OpenDevice_ResponseParams();
        responseParams.success = response.success;
        responseParams.label = response.label;
        responseParams.device = response.device;
        var builder = new codec.MessageV1Builder(
            kMediaStreamDispatcherHost_OpenDevice_Name,
            codec.align(MediaStreamDispatcherHost_OpenDevice_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaStreamDispatcherHost_OpenDevice_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMediaStreamDispatcherHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaStreamDispatcherHost_GenerateStream_Name:
        if (message.expectsResponse())
          paramsClass = MediaStreamDispatcherHost_GenerateStream_Params;
      break;
      case kMediaStreamDispatcherHost_CancelRequest_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDispatcherHost_CancelRequest_Params;
      break;
      case kMediaStreamDispatcherHost_StopStreamDevice_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDispatcherHost_StopStreamDevice_Params;
      break;
      case kMediaStreamDispatcherHost_OpenDevice_Name:
        if (message.expectsResponse())
          paramsClass = MediaStreamDispatcherHost_OpenDevice_Params;
      break;
      case kMediaStreamDispatcherHost_CloseDevice_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDispatcherHost_CloseDevice_Params;
      break;
      case kMediaStreamDispatcherHost_SetCapturingLinkSecured_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDispatcherHost_SetCapturingLinkSecured_Params;
      break;
      case kMediaStreamDispatcherHost_OnStreamStarted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamDispatcherHost_OnStreamStarted_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaStreamDispatcherHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMediaStreamDispatcherHost_GenerateStream_Name:
        if (message.isResponse())
          paramsClass = MediaStreamDispatcherHost_GenerateStream_ResponseParams;
        break;
      case kMediaStreamDispatcherHost_OpenDevice_Name:
        if (message.isResponse())
          paramsClass = MediaStreamDispatcherHost_OpenDevice_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MediaStreamDispatcherHost = {
    name: 'blink.mojom.MediaStreamDispatcherHost',
    kVersion: 0,
    ptrClass: MediaStreamDispatcherHostPtr,
    proxyClass: MediaStreamDispatcherHostProxy,
    stubClass: MediaStreamDispatcherHostStub,
    validateRequest: validateMediaStreamDispatcherHostRequest,
    validateResponse: validateMediaStreamDispatcherHostResponse,
  };
  MediaStreamDispatcherHostStub.prototype.validator = validateMediaStreamDispatcherHostRequest;
  MediaStreamDispatcherHostProxy.prototype.validator = validateMediaStreamDispatcherHostResponse;
  var kMediaStreamTrackMetricsHost_AddTrack_Name = 0;
  var kMediaStreamTrackMetricsHost_RemoveTrack_Name = 1;

  function MediaStreamTrackMetricsHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaStreamTrackMetricsHost,
                                                   handleOrPtrInfo);
  }

  function MediaStreamTrackMetricsHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaStreamTrackMetricsHost, associatedInterfacePtrInfo);
  }

  MediaStreamTrackMetricsHostAssociatedPtr.prototype =
      Object.create(MediaStreamTrackMetricsHostPtr.prototype);
  MediaStreamTrackMetricsHostAssociatedPtr.prototype.constructor =
      MediaStreamTrackMetricsHostAssociatedPtr;

  function MediaStreamTrackMetricsHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaStreamTrackMetricsHostPtr.prototype.addTrack = function() {
    return MediaStreamTrackMetricsHostProxy.prototype.addTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamTrackMetricsHostProxy.prototype.addTrack = function(id, isAudio, isRemote) {
    var params_ = new MediaStreamTrackMetricsHost_AddTrack_Params();
    params_.id = id;
    params_.isAudio = isAudio;
    params_.isRemote = isRemote;
    var builder = new codec.MessageV0Builder(
        kMediaStreamTrackMetricsHost_AddTrack_Name,
        codec.align(MediaStreamTrackMetricsHost_AddTrack_Params.encodedSize));
    builder.encodeStruct(MediaStreamTrackMetricsHost_AddTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaStreamTrackMetricsHostPtr.prototype.removeTrack = function() {
    return MediaStreamTrackMetricsHostProxy.prototype.removeTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStreamTrackMetricsHostProxy.prototype.removeTrack = function(id) {
    var params_ = new MediaStreamTrackMetricsHost_RemoveTrack_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kMediaStreamTrackMetricsHost_RemoveTrack_Name,
        codec.align(MediaStreamTrackMetricsHost_RemoveTrack_Params.encodedSize));
    builder.encodeStruct(MediaStreamTrackMetricsHost_RemoveTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaStreamTrackMetricsHostStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaStreamTrackMetricsHostStub.prototype.addTrack = function(id, isAudio, isRemote) {
    return this.delegate_ && this.delegate_.addTrack && this.delegate_.addTrack(id, isAudio, isRemote);
  }
  MediaStreamTrackMetricsHostStub.prototype.removeTrack = function(id) {
    return this.delegate_ && this.delegate_.removeTrack && this.delegate_.removeTrack(id);
  }

  MediaStreamTrackMetricsHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaStreamTrackMetricsHost_AddTrack_Name:
      var params = reader.decodeStruct(MediaStreamTrackMetricsHost_AddTrack_Params);
      this.addTrack(params.id, params.isAudio, params.isRemote);
      return true;
    case kMediaStreamTrackMetricsHost_RemoveTrack_Name:
      var params = reader.decodeStruct(MediaStreamTrackMetricsHost_RemoveTrack_Params);
      this.removeTrack(params.id);
      return true;
    default:
      return false;
    }
  };

  MediaStreamTrackMetricsHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaStreamTrackMetricsHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaStreamTrackMetricsHost_AddTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamTrackMetricsHost_AddTrack_Params;
      break;
      case kMediaStreamTrackMetricsHost_RemoveTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStreamTrackMetricsHost_RemoveTrack_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaStreamTrackMetricsHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaStreamTrackMetricsHost = {
    name: 'blink.mojom.MediaStreamTrackMetricsHost',
    kVersion: 0,
    ptrClass: MediaStreamTrackMetricsHostPtr,
    proxyClass: MediaStreamTrackMetricsHostProxy,
    stubClass: MediaStreamTrackMetricsHostStub,
    validateRequest: validateMediaStreamTrackMetricsHostRequest,
    validateResponse: null,
  };
  MediaStreamTrackMetricsHostStub.prototype.validator = validateMediaStreamTrackMetricsHostRequest;
  MediaStreamTrackMetricsHostProxy.prototype.validator = null;
  exports.MediaStreamType = MediaStreamType;
  exports.MediaStreamRequestResult = MediaStreamRequestResult;
  exports.MediaStreamDevice = MediaStreamDevice;
  exports.TrackControls = TrackControls;
  exports.StreamControls = StreamControls;
  exports.MediaStreamDeviceObserver = MediaStreamDeviceObserver;
  exports.MediaStreamDeviceObserverPtr = MediaStreamDeviceObserverPtr;
  exports.MediaStreamDeviceObserverAssociatedPtr = MediaStreamDeviceObserverAssociatedPtr;
  exports.MediaStreamDispatcherHost = MediaStreamDispatcherHost;
  exports.MediaStreamDispatcherHostPtr = MediaStreamDispatcherHostPtr;
  exports.MediaStreamDispatcherHostAssociatedPtr = MediaStreamDispatcherHostAssociatedPtr;
  exports.MediaStreamTrackMetricsHost = MediaStreamTrackMetricsHost;
  exports.MediaStreamTrackMetricsHostPtr = MediaStreamTrackMetricsHostPtr;
  exports.MediaStreamTrackMetricsHostAssociatedPtr = MediaStreamTrackMetricsHostAssociatedPtr;
})();