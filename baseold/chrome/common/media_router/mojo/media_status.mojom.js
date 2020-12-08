// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/media_router/mojo/media_status.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaRouter.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }



  function MediaStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  MediaStatus.PlayState = {};
  MediaStatus.PlayState.PLAYING = 0;
  MediaStatus.PlayState.PAUSED = MediaStatus.PlayState.PLAYING + 1;
  MediaStatus.PlayState.BUFFERING = MediaStatus.PlayState.PAUSED + 1;
  MediaStatus.PlayState.MIN_VALUE = 0,
  MediaStatus.PlayState.MAX_VALUE = 2,

  MediaStatus.PlayState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MediaStatus.PlayState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  MediaStatus.prototype.initDefaults_ = function() {
    this.title = null;
    this.canPlayPause = false;
    this.canMute = false;
    this.canSetVolume = false;
    this.canSeek = false;
    this.isMuted = false;
    this.playState = 0;
    this.volume = 0;
    this.duration = null;
    this.currentTime = null;
    this.hangoutsExtraData = null;
  };
  MediaStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStatus.validate = function(messageValidator, offset) {
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


    // validate MediaStatus.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;






    // validate MediaStatus.playState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, MediaStatus.PlayState);
    if (err !== validator.validationError.NONE)
        return err;




    // validate MediaStatus.duration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStatus.currentTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaStatus.hangoutsExtraData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, HangoutsMediaStatusExtraData, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStatus.encodedSize = codec.kStructHeaderSize + 48;

  MediaStatus.decode = function(decoder) {
    var packed;
    var val = new MediaStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.canPlayPause = (packed >> 0) & 1 ? true : false;
    val.canMute = (packed >> 1) & 1 ? true : false;
    val.canSetVolume = (packed >> 2) & 1 ? true : false;
    val.canSeek = (packed >> 3) & 1 ? true : false;
    val.isMuted = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.playState = decoder.decodeStruct(codec.Int32);
    val.volume = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.duration = decoder.decodeStructPointer(time$.TimeDelta);
    val.currentTime = decoder.decodeStructPointer(time$.TimeDelta);
    val.hangoutsExtraData = decoder.decodeStructPointer(HangoutsMediaStatusExtraData);
    return val;
  };

  MediaStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStatus.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.title);
    packed = 0;
    packed |= (val.canPlayPause & 1) << 0
    packed |= (val.canMute & 1) << 1
    packed |= (val.canSetVolume & 1) << 2
    packed |= (val.canSeek & 1) << 3
    packed |= (val.isMuted & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.playState);
    encoder.encodeStruct(codec.Float, val.volume);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.duration);
    encoder.encodeStructPointer(time$.TimeDelta, val.currentTime);
    encoder.encodeStructPointer(HangoutsMediaStatusExtraData, val.hangoutsExtraData);
  };
  function HangoutsMediaStatusExtraData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HangoutsMediaStatusExtraData.prototype.initDefaults_ = function() {
    this.localPresent = false;
  };
  HangoutsMediaStatusExtraData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HangoutsMediaStatusExtraData.validate = function(messageValidator, offset) {
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

  HangoutsMediaStatusExtraData.encodedSize = codec.kStructHeaderSize + 8;

  HangoutsMediaStatusExtraData.decode = function(decoder) {
    var packed;
    var val = new HangoutsMediaStatusExtraData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.localPresent = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HangoutsMediaStatusExtraData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HangoutsMediaStatusExtraData.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.localPresent & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaStatusObserver_OnMediaStatusUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaStatusObserver_OnMediaStatusUpdated_Params.prototype.initDefaults_ = function() {
    this.status = null;
  };
  MediaStatusObserver_OnMediaStatusUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaStatusObserver_OnMediaStatusUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate MediaStatusObserver_OnMediaStatusUpdated_Params.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaStatusObserver_OnMediaStatusUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaStatusObserver_OnMediaStatusUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new MediaStatusObserver_OnMediaStatusUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStructPointer(MediaStatus);
    return val;
  };

  MediaStatusObserver_OnMediaStatusUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaStatusObserver_OnMediaStatusUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaStatus, val.status);
  };
  var kMediaStatusObserver_OnMediaStatusUpdated_Name = 0;

  function MediaStatusObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaStatusObserver,
                                                   handleOrPtrInfo);
  }

  function MediaStatusObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaStatusObserver, associatedInterfacePtrInfo);
  }

  MediaStatusObserverAssociatedPtr.prototype =
      Object.create(MediaStatusObserverPtr.prototype);
  MediaStatusObserverAssociatedPtr.prototype.constructor =
      MediaStatusObserverAssociatedPtr;

  function MediaStatusObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaStatusObserverPtr.prototype.onMediaStatusUpdated = function() {
    return MediaStatusObserverProxy.prototype.onMediaStatusUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaStatusObserverProxy.prototype.onMediaStatusUpdated = function(status) {
    var params_ = new MediaStatusObserver_OnMediaStatusUpdated_Params();
    params_.status = status;
    var builder = new codec.MessageV0Builder(
        kMediaStatusObserver_OnMediaStatusUpdated_Name,
        codec.align(MediaStatusObserver_OnMediaStatusUpdated_Params.encodedSize));
    builder.encodeStruct(MediaStatusObserver_OnMediaStatusUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaStatusObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaStatusObserverStub.prototype.onMediaStatusUpdated = function(status) {
    return this.delegate_ && this.delegate_.onMediaStatusUpdated && this.delegate_.onMediaStatusUpdated(status);
  }

  MediaStatusObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaStatusObserver_OnMediaStatusUpdated_Name:
      var params = reader.decodeStruct(MediaStatusObserver_OnMediaStatusUpdated_Params);
      this.onMediaStatusUpdated(params.status);
      return true;
    default:
      return false;
    }
  };

  MediaStatusObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaStatusObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaStatusObserver_OnMediaStatusUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaStatusObserver_OnMediaStatusUpdated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaStatusObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaStatusObserver = {
    name: 'media_router.mojom.MediaStatusObserver',
    kVersion: 0,
    ptrClass: MediaStatusObserverPtr,
    proxyClass: MediaStatusObserverProxy,
    stubClass: MediaStatusObserverStub,
    validateRequest: validateMediaStatusObserverRequest,
    validateResponse: null,
  };
  MediaStatusObserverStub.prototype.validator = validateMediaStatusObserverRequest;
  MediaStatusObserverProxy.prototype.validator = null;
  exports.MediaStatus = MediaStatus;
  exports.HangoutsMediaStatusExtraData = HangoutsMediaStatusExtraData;
  exports.MediaStatusObserver = MediaStatusObserver;
  exports.MediaStatusObserverPtr = MediaStatusObserverPtr;
  exports.MediaStatusObserverAssociatedPtr = MediaStatusObserverAssociatedPtr;
})();