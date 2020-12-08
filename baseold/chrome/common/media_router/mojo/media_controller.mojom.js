// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/media_router/mojo/media_controller.mojom';
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
  var media_status$ =
      mojo.internal.exposeNamespace('mediaRouter.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'chrome/common/media_router/mojo/media_status.mojom', 'media_status.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }



  function MediaController_Play_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Play_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Play_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Play_Params.validate = function(messageValidator, offset) {
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

  MediaController_Play_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Play_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Play_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Play_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Play_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_Pause_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Pause_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Pause_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Pause_Params.validate = function(messageValidator, offset) {
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

  MediaController_Pause_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Pause_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Pause_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Pause_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Pause_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_SetMute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_SetMute_Params.prototype.initDefaults_ = function() {
    this.mute = false;
  };
  MediaController_SetMute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_SetMute_Params.validate = function(messageValidator, offset) {
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

  MediaController_SetMute_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_SetMute_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_SetMute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.mute = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaController_SetMute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_SetMute_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.mute & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaController_SetVolume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_SetVolume_Params.prototype.initDefaults_ = function() {
    this.volume = 0;
  };
  MediaController_SetVolume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_SetVolume_Params.validate = function(messageValidator, offset) {
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

  MediaController_SetVolume_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_SetVolume_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_SetVolume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.volume = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaController_SetVolume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_SetVolume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.volume);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaController_Seek_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Seek_Params.prototype.initDefaults_ = function() {
    this.time = null;
  };
  MediaController_Seek_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Seek_Params.validate = function(messageValidator, offset) {
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


    // validate MediaController_Seek_Params.time
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaController_Seek_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_Seek_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Seek_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaController_Seek_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Seek_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.time);
  };
  function MediaController_ConnectHangoutsMediaRouteController_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_ConnectHangoutsMediaRouteController_Params.prototype.initDefaults_ = function() {
    this.controllerRequest = new bindings.InterfaceRequest();
  };
  MediaController_ConnectHangoutsMediaRouteController_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_ConnectHangoutsMediaRouteController_Params.validate = function(messageValidator, offset) {
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


    // validate MediaController_ConnectHangoutsMediaRouteController_Params.controllerRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaController_ConnectHangoutsMediaRouteController_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_ConnectHangoutsMediaRouteController_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_ConnectHangoutsMediaRouteController_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.controllerRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaController_ConnectHangoutsMediaRouteController_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_ConnectHangoutsMediaRouteController_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.controllerRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function HangoutsMediaRouteController_SetLocalPresent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HangoutsMediaRouteController_SetLocalPresent_Params.prototype.initDefaults_ = function() {
    this.localPresent = false;
  };
  HangoutsMediaRouteController_SetLocalPresent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HangoutsMediaRouteController_SetLocalPresent_Params.validate = function(messageValidator, offset) {
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

  HangoutsMediaRouteController_SetLocalPresent_Params.encodedSize = codec.kStructHeaderSize + 8;

  HangoutsMediaRouteController_SetLocalPresent_Params.decode = function(decoder) {
    var packed;
    var val = new HangoutsMediaRouteController_SetLocalPresent_Params();
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

  HangoutsMediaRouteController_SetLocalPresent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HangoutsMediaRouteController_SetLocalPresent_Params.encodedSize);
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
  var kMediaController_Play_Name = 0;
  var kMediaController_Pause_Name = 1;
  var kMediaController_SetMute_Name = 2;
  var kMediaController_SetVolume_Name = 3;
  var kMediaController_Seek_Name = 4;
  var kMediaController_ConnectHangoutsMediaRouteController_Name = 5;

  function MediaControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaController,
                                                   handleOrPtrInfo);
  }

  function MediaControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaController, associatedInterfacePtrInfo);
  }

  MediaControllerAssociatedPtr.prototype =
      Object.create(MediaControllerPtr.prototype);
  MediaControllerAssociatedPtr.prototype.constructor =
      MediaControllerAssociatedPtr;

  function MediaControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaControllerPtr.prototype.play = function() {
    return MediaControllerProxy.prototype.play
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.play = function() {
    var params_ = new MediaController_Play_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Play_Name,
        codec.align(MediaController_Play_Params.encodedSize));
    builder.encodeStruct(MediaController_Play_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.pause = function() {
    return MediaControllerProxy.prototype.pause
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.pause = function() {
    var params_ = new MediaController_Pause_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Pause_Name,
        codec.align(MediaController_Pause_Params.encodedSize));
    builder.encodeStruct(MediaController_Pause_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.setMute = function() {
    return MediaControllerProxy.prototype.setMute
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.setMute = function(mute) {
    var params_ = new MediaController_SetMute_Params();
    params_.mute = mute;
    var builder = new codec.MessageV0Builder(
        kMediaController_SetMute_Name,
        codec.align(MediaController_SetMute_Params.encodedSize));
    builder.encodeStruct(MediaController_SetMute_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.setVolume = function() {
    return MediaControllerProxy.prototype.setVolume
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.setVolume = function(volume) {
    var params_ = new MediaController_SetVolume_Params();
    params_.volume = volume;
    var builder = new codec.MessageV0Builder(
        kMediaController_SetVolume_Name,
        codec.align(MediaController_SetVolume_Params.encodedSize));
    builder.encodeStruct(MediaController_SetVolume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.seek = function() {
    return MediaControllerProxy.prototype.seek
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.seek = function(time) {
    var params_ = new MediaController_Seek_Params();
    params_.time = time;
    var builder = new codec.MessageV0Builder(
        kMediaController_Seek_Name,
        codec.align(MediaController_Seek_Params.encodedSize));
    builder.encodeStruct(MediaController_Seek_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.connectHangoutsMediaRouteController = function() {
    return MediaControllerProxy.prototype.connectHangoutsMediaRouteController
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.connectHangoutsMediaRouteController = function(controllerRequest) {
    var params_ = new MediaController_ConnectHangoutsMediaRouteController_Params();
    params_.controllerRequest = controllerRequest;
    var builder = new codec.MessageV0Builder(
        kMediaController_ConnectHangoutsMediaRouteController_Name,
        codec.align(MediaController_ConnectHangoutsMediaRouteController_Params.encodedSize));
    builder.encodeStruct(MediaController_ConnectHangoutsMediaRouteController_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaControllerStub.prototype.play = function() {
    return this.delegate_ && this.delegate_.play && this.delegate_.play();
  }
  MediaControllerStub.prototype.pause = function() {
    return this.delegate_ && this.delegate_.pause && this.delegate_.pause();
  }
  MediaControllerStub.prototype.setMute = function(mute) {
    return this.delegate_ && this.delegate_.setMute && this.delegate_.setMute(mute);
  }
  MediaControllerStub.prototype.setVolume = function(volume) {
    return this.delegate_ && this.delegate_.setVolume && this.delegate_.setVolume(volume);
  }
  MediaControllerStub.prototype.seek = function(time) {
    return this.delegate_ && this.delegate_.seek && this.delegate_.seek(time);
  }
  MediaControllerStub.prototype.connectHangoutsMediaRouteController = function(controllerRequest) {
    return this.delegate_ && this.delegate_.connectHangoutsMediaRouteController && this.delegate_.connectHangoutsMediaRouteController(controllerRequest);
  }

  MediaControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaController_Play_Name:
      var params = reader.decodeStruct(MediaController_Play_Params);
      this.play();
      return true;
    case kMediaController_Pause_Name:
      var params = reader.decodeStruct(MediaController_Pause_Params);
      this.pause();
      return true;
    case kMediaController_SetMute_Name:
      var params = reader.decodeStruct(MediaController_SetMute_Params);
      this.setMute(params.mute);
      return true;
    case kMediaController_SetVolume_Name:
      var params = reader.decodeStruct(MediaController_SetVolume_Params);
      this.setVolume(params.volume);
      return true;
    case kMediaController_Seek_Name:
      var params = reader.decodeStruct(MediaController_Seek_Params);
      this.seek(params.time);
      return true;
    case kMediaController_ConnectHangoutsMediaRouteController_Name:
      var params = reader.decodeStruct(MediaController_ConnectHangoutsMediaRouteController_Params);
      this.connectHangoutsMediaRouteController(params.controllerRequest);
      return true;
    default:
      return false;
    }
  };

  MediaControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaController_Play_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Play_Params;
      break;
      case kMediaController_Pause_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Pause_Params;
      break;
      case kMediaController_SetMute_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_SetMute_Params;
      break;
      case kMediaController_SetVolume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_SetVolume_Params;
      break;
      case kMediaController_Seek_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Seek_Params;
      break;
      case kMediaController_ConnectHangoutsMediaRouteController_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_ConnectHangoutsMediaRouteController_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaControllerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaController = {
    name: 'media_router.mojom.MediaController',
    kVersion: 0,
    ptrClass: MediaControllerPtr,
    proxyClass: MediaControllerProxy,
    stubClass: MediaControllerStub,
    validateRequest: validateMediaControllerRequest,
    validateResponse: null,
  };
  MediaControllerStub.prototype.validator = validateMediaControllerRequest;
  MediaControllerProxy.prototype.validator = null;
  var kHangoutsMediaRouteController_SetLocalPresent_Name = 0;

  function HangoutsMediaRouteControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(HangoutsMediaRouteController,
                                                   handleOrPtrInfo);
  }

  function HangoutsMediaRouteControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        HangoutsMediaRouteController, associatedInterfacePtrInfo);
  }

  HangoutsMediaRouteControllerAssociatedPtr.prototype =
      Object.create(HangoutsMediaRouteControllerPtr.prototype);
  HangoutsMediaRouteControllerAssociatedPtr.prototype.constructor =
      HangoutsMediaRouteControllerAssociatedPtr;

  function HangoutsMediaRouteControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  HangoutsMediaRouteControllerPtr.prototype.setLocalPresent = function() {
    return HangoutsMediaRouteControllerProxy.prototype.setLocalPresent
        .apply(this.ptr.getProxy(), arguments);
  };

  HangoutsMediaRouteControllerProxy.prototype.setLocalPresent = function(localPresent) {
    var params_ = new HangoutsMediaRouteController_SetLocalPresent_Params();
    params_.localPresent = localPresent;
    var builder = new codec.MessageV0Builder(
        kHangoutsMediaRouteController_SetLocalPresent_Name,
        codec.align(HangoutsMediaRouteController_SetLocalPresent_Params.encodedSize));
    builder.encodeStruct(HangoutsMediaRouteController_SetLocalPresent_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function HangoutsMediaRouteControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  HangoutsMediaRouteControllerStub.prototype.setLocalPresent = function(localPresent) {
    return this.delegate_ && this.delegate_.setLocalPresent && this.delegate_.setLocalPresent(localPresent);
  }

  HangoutsMediaRouteControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHangoutsMediaRouteController_SetLocalPresent_Name:
      var params = reader.decodeStruct(HangoutsMediaRouteController_SetLocalPresent_Params);
      this.setLocalPresent(params.localPresent);
      return true;
    default:
      return false;
    }
  };

  HangoutsMediaRouteControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateHangoutsMediaRouteControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHangoutsMediaRouteController_SetLocalPresent_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = HangoutsMediaRouteController_SetLocalPresent_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHangoutsMediaRouteControllerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var HangoutsMediaRouteController = {
    name: 'media_router.mojom.HangoutsMediaRouteController',
    kVersion: 0,
    ptrClass: HangoutsMediaRouteControllerPtr,
    proxyClass: HangoutsMediaRouteControllerProxy,
    stubClass: HangoutsMediaRouteControllerStub,
    validateRequest: validateHangoutsMediaRouteControllerRequest,
    validateResponse: null,
  };
  HangoutsMediaRouteControllerStub.prototype.validator = validateHangoutsMediaRouteControllerRequest;
  HangoutsMediaRouteControllerProxy.prototype.validator = null;
  exports.MediaController = MediaController;
  exports.MediaControllerPtr = MediaControllerPtr;
  exports.MediaControllerAssociatedPtr = MediaControllerAssociatedPtr;
  exports.HangoutsMediaRouteController = HangoutsMediaRouteController;
  exports.HangoutsMediaRouteControllerPtr = HangoutsMediaRouteControllerPtr;
  exports.HangoutsMediaRouteControllerAssociatedPtr = HangoutsMediaRouteControllerAssociatedPtr;
})();