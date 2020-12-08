// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/picture_in_picture/picture_in_picture.mojom';
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
  var surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/surface_id.mojom', '../../../../../services/viz/public/interfaces/compositing/surface_id.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }



  function PictureInPictureSessionObserver_OnWindowSizeChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureSessionObserver_OnWindowSizeChanged_Params.prototype.initDefaults_ = function() {
    this.size = null;
  };
  PictureInPictureSessionObserver_OnWindowSizeChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureSessionObserver_OnWindowSizeChanged_Params.validate = function(messageValidator, offset) {
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


    // validate PictureInPictureSessionObserver_OnWindowSizeChanged_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PictureInPictureSessionObserver_OnWindowSizeChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  PictureInPictureSessionObserver_OnWindowSizeChanged_Params.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureSessionObserver_OnWindowSizeChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  PictureInPictureSessionObserver_OnWindowSizeChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureSessionObserver_OnWindowSizeChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
  };
  function PictureInPictureSessionObserver_OnStopped_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureSessionObserver_OnStopped_Params.prototype.initDefaults_ = function() {
  };
  PictureInPictureSessionObserver_OnStopped_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureSessionObserver_OnStopped_Params.validate = function(messageValidator, offset) {
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

  PictureInPictureSessionObserver_OnStopped_Params.encodedSize = codec.kStructHeaderSize + 0;

  PictureInPictureSessionObserver_OnStopped_Params.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureSessionObserver_OnStopped_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PictureInPictureSessionObserver_OnStopped_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureSessionObserver_OnStopped_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PictureInPictureSession_Update_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureSession_Update_Params.prototype.initDefaults_ = function() {
    this.playerId = 0;
    this.showPlayPauseButton = false;
    this.showMuteButton = false;
    this.surfaceId = null;
    this.naturalSize = null;
  };
  PictureInPictureSession_Update_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureSession_Update_Params.validate = function(messageValidator, offset) {
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



    // validate PictureInPictureSession_Update_Params.surfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, surface_id$.SurfaceId, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PictureInPictureSession_Update_Params.naturalSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  PictureInPictureSession_Update_Params.encodedSize = codec.kStructHeaderSize + 24;

  PictureInPictureSession_Update_Params.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureSession_Update_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.playerId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.showPlayPauseButton = (packed >> 0) & 1 ? true : false;
    val.showMuteButton = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.surfaceId = decoder.decodeStructPointer(surface_id$.SurfaceId);
    val.naturalSize = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  PictureInPictureSession_Update_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureSession_Update_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.playerId);
    packed = 0;
    packed |= (val.showPlayPauseButton & 1) << 0
    packed |= (val.showMuteButton & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(surface_id$.SurfaceId, val.surfaceId);
    encoder.encodeStructPointer(geometry$.Size, val.naturalSize);
  };
  function PictureInPictureSession_Stop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureSession_Stop_Params.prototype.initDefaults_ = function() {
  };
  PictureInPictureSession_Stop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureSession_Stop_Params.validate = function(messageValidator, offset) {
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

  PictureInPictureSession_Stop_Params.encodedSize = codec.kStructHeaderSize + 0;

  PictureInPictureSession_Stop_Params.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureSession_Stop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PictureInPictureSession_Stop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureSession_Stop_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PictureInPictureSession_Stop_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureSession_Stop_ResponseParams.prototype.initDefaults_ = function() {
  };
  PictureInPictureSession_Stop_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureSession_Stop_ResponseParams.validate = function(messageValidator, offset) {
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

  PictureInPictureSession_Stop_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  PictureInPictureSession_Stop_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureSession_Stop_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PictureInPictureSession_Stop_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureSession_Stop_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function PictureInPictureService_StartSession_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureService_StartSession_Params.prototype.initDefaults_ = function() {
    this.playerId = 0;
    this.showPlayPauseButton = false;
    this.showMuteButton = false;
    this.surfaceId = null;
    this.naturalSize = null;
    this.observer = new PictureInPictureSessionObserverPtr();
  };
  PictureInPictureService_StartSession_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureService_StartSession_Params.validate = function(messageValidator, offset) {
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



    // validate PictureInPictureService_StartSession_Params.surfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, surface_id$.SurfaceId, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PictureInPictureService_StartSession_Params.naturalSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;




    // validate PictureInPictureService_StartSession_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PictureInPictureService_StartSession_Params.encodedSize = codec.kStructHeaderSize + 32;

  PictureInPictureService_StartSession_Params.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureService_StartSession_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.playerId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.showPlayPauseButton = (packed >> 0) & 1 ? true : false;
    val.showMuteButton = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.surfaceId = decoder.decodeStructPointer(surface_id$.SurfaceId);
    val.naturalSize = decoder.decodeStructPointer(geometry$.Size);
    val.observer = decoder.decodeStruct(new codec.Interface(PictureInPictureSessionObserverPtr));
    return val;
  };

  PictureInPictureService_StartSession_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureService_StartSession_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.playerId);
    packed = 0;
    packed |= (val.showPlayPauseButton & 1) << 0
    packed |= (val.showMuteButton & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(surface_id$.SurfaceId, val.surfaceId);
    encoder.encodeStructPointer(geometry$.Size, val.naturalSize);
    encoder.encodeStruct(new codec.Interface(PictureInPictureSessionObserverPtr), val.observer);
  };
  function PictureInPictureService_StartSession_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PictureInPictureService_StartSession_ResponseParams.prototype.initDefaults_ = function() {
    this.session = new PictureInPictureSessionPtr();
    this.size = null;
  };
  PictureInPictureService_StartSession_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PictureInPictureService_StartSession_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PictureInPictureService_StartSession_ResponseParams.session
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PictureInPictureService_StartSession_ResponseParams.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PictureInPictureService_StartSession_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  PictureInPictureService_StartSession_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PictureInPictureService_StartSession_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.session = decoder.decodeStruct(new codec.Interface(PictureInPictureSessionPtr));
    val.size = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  PictureInPictureService_StartSession_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PictureInPictureService_StartSession_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PictureInPictureSessionPtr), val.session);
    encoder.encodeStructPointer(geometry$.Size, val.size);
  };
  var kPictureInPictureSessionObserver_OnWindowSizeChanged_Name = 0;
  var kPictureInPictureSessionObserver_OnStopped_Name = 1;

  function PictureInPictureSessionObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PictureInPictureSessionObserver,
                                                   handleOrPtrInfo);
  }

  function PictureInPictureSessionObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PictureInPictureSessionObserver, associatedInterfacePtrInfo);
  }

  PictureInPictureSessionObserverAssociatedPtr.prototype =
      Object.create(PictureInPictureSessionObserverPtr.prototype);
  PictureInPictureSessionObserverAssociatedPtr.prototype.constructor =
      PictureInPictureSessionObserverAssociatedPtr;

  function PictureInPictureSessionObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  PictureInPictureSessionObserverPtr.prototype.onWindowSizeChanged = function() {
    return PictureInPictureSessionObserverProxy.prototype.onWindowSizeChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  PictureInPictureSessionObserverProxy.prototype.onWindowSizeChanged = function(size) {
    var params_ = new PictureInPictureSessionObserver_OnWindowSizeChanged_Params();
    params_.size = size;
    var builder = new codec.MessageV0Builder(
        kPictureInPictureSessionObserver_OnWindowSizeChanged_Name,
        codec.align(PictureInPictureSessionObserver_OnWindowSizeChanged_Params.encodedSize));
    builder.encodeStruct(PictureInPictureSessionObserver_OnWindowSizeChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PictureInPictureSessionObserverPtr.prototype.onStopped = function() {
    return PictureInPictureSessionObserverProxy.prototype.onStopped
        .apply(this.ptr.getProxy(), arguments);
  };

  PictureInPictureSessionObserverProxy.prototype.onStopped = function() {
    var params_ = new PictureInPictureSessionObserver_OnStopped_Params();
    var builder = new codec.MessageV0Builder(
        kPictureInPictureSessionObserver_OnStopped_Name,
        codec.align(PictureInPictureSessionObserver_OnStopped_Params.encodedSize));
    builder.encodeStruct(PictureInPictureSessionObserver_OnStopped_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PictureInPictureSessionObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  PictureInPictureSessionObserverStub.prototype.onWindowSizeChanged = function(size) {
    return this.delegate_ && this.delegate_.onWindowSizeChanged && this.delegate_.onWindowSizeChanged(size);
  }
  PictureInPictureSessionObserverStub.prototype.onStopped = function() {
    return this.delegate_ && this.delegate_.onStopped && this.delegate_.onStopped();
  }

  PictureInPictureSessionObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPictureInPictureSessionObserver_OnWindowSizeChanged_Name:
      var params = reader.decodeStruct(PictureInPictureSessionObserver_OnWindowSizeChanged_Params);
      this.onWindowSizeChanged(params.size);
      return true;
    case kPictureInPictureSessionObserver_OnStopped_Name:
      var params = reader.decodeStruct(PictureInPictureSessionObserver_OnStopped_Params);
      this.onStopped();
      return true;
    default:
      return false;
    }
  };

  PictureInPictureSessionObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePictureInPictureSessionObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPictureInPictureSessionObserver_OnWindowSizeChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PictureInPictureSessionObserver_OnWindowSizeChanged_Params;
      break;
      case kPictureInPictureSessionObserver_OnStopped_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PictureInPictureSessionObserver_OnStopped_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePictureInPictureSessionObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PictureInPictureSessionObserver = {
    name: 'blink.mojom.PictureInPictureSessionObserver',
    kVersion: 0,
    ptrClass: PictureInPictureSessionObserverPtr,
    proxyClass: PictureInPictureSessionObserverProxy,
    stubClass: PictureInPictureSessionObserverStub,
    validateRequest: validatePictureInPictureSessionObserverRequest,
    validateResponse: null,
  };
  PictureInPictureSessionObserverStub.prototype.validator = validatePictureInPictureSessionObserverRequest;
  PictureInPictureSessionObserverProxy.prototype.validator = null;
  var kPictureInPictureSession_Update_Name = 0;
  var kPictureInPictureSession_Stop_Name = 1;

  function PictureInPictureSessionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PictureInPictureSession,
                                                   handleOrPtrInfo);
  }

  function PictureInPictureSessionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PictureInPictureSession, associatedInterfacePtrInfo);
  }

  PictureInPictureSessionAssociatedPtr.prototype =
      Object.create(PictureInPictureSessionPtr.prototype);
  PictureInPictureSessionAssociatedPtr.prototype.constructor =
      PictureInPictureSessionAssociatedPtr;

  function PictureInPictureSessionProxy(receiver) {
    this.receiver_ = receiver;
  }
  PictureInPictureSessionPtr.prototype.update = function() {
    return PictureInPictureSessionProxy.prototype.update
        .apply(this.ptr.getProxy(), arguments);
  };

  PictureInPictureSessionProxy.prototype.update = function(playerId, surfaceId, naturalSize, showPlayPauseButton, showMuteButton) {
    var params_ = new PictureInPictureSession_Update_Params();
    params_.playerId = playerId;
    params_.surfaceId = surfaceId;
    params_.naturalSize = naturalSize;
    params_.showPlayPauseButton = showPlayPauseButton;
    params_.showMuteButton = showMuteButton;
    var builder = new codec.MessageV0Builder(
        kPictureInPictureSession_Update_Name,
        codec.align(PictureInPictureSession_Update_Params.encodedSize));
    builder.encodeStruct(PictureInPictureSession_Update_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PictureInPictureSessionPtr.prototype.stop = function() {
    return PictureInPictureSessionProxy.prototype.stop
        .apply(this.ptr.getProxy(), arguments);
  };

  PictureInPictureSessionProxy.prototype.stop = function() {
    var params_ = new PictureInPictureSession_Stop_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPictureInPictureSession_Stop_Name,
          codec.align(PictureInPictureSession_Stop_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PictureInPictureSession_Stop_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PictureInPictureSession_Stop_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PictureInPictureSessionStub(delegate) {
    this.delegate_ = delegate;
  }
  PictureInPictureSessionStub.prototype.update = function(playerId, surfaceId, naturalSize, showPlayPauseButton, showMuteButton) {
    return this.delegate_ && this.delegate_.update && this.delegate_.update(playerId, surfaceId, naturalSize, showPlayPauseButton, showMuteButton);
  }
  PictureInPictureSessionStub.prototype.stop = function() {
    return this.delegate_ && this.delegate_.stop && this.delegate_.stop();
  }

  PictureInPictureSessionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPictureInPictureSession_Update_Name:
      var params = reader.decodeStruct(PictureInPictureSession_Update_Params);
      this.update(params.playerId, params.surfaceId, params.naturalSize, params.showPlayPauseButton, params.showMuteButton);
      return true;
    default:
      return false;
    }
  };

  PictureInPictureSessionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPictureInPictureSession_Stop_Name:
      var params = reader.decodeStruct(PictureInPictureSession_Stop_Params);
      this.stop().then(function(response) {
        var responseParams =
            new PictureInPictureSession_Stop_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kPictureInPictureSession_Stop_Name,
            codec.align(PictureInPictureSession_Stop_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PictureInPictureSession_Stop_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePictureInPictureSessionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPictureInPictureSession_Update_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PictureInPictureSession_Update_Params;
      break;
      case kPictureInPictureSession_Stop_Name:
        if (message.expectsResponse())
          paramsClass = PictureInPictureSession_Stop_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePictureInPictureSessionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPictureInPictureSession_Stop_Name:
        if (message.isResponse())
          paramsClass = PictureInPictureSession_Stop_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PictureInPictureSession = {
    name: 'blink.mojom.PictureInPictureSession',
    kVersion: 0,
    ptrClass: PictureInPictureSessionPtr,
    proxyClass: PictureInPictureSessionProxy,
    stubClass: PictureInPictureSessionStub,
    validateRequest: validatePictureInPictureSessionRequest,
    validateResponse: validatePictureInPictureSessionResponse,
  };
  PictureInPictureSessionStub.prototype.validator = validatePictureInPictureSessionRequest;
  PictureInPictureSessionProxy.prototype.validator = validatePictureInPictureSessionResponse;
  var kPictureInPictureService_StartSession_Name = 0;

  function PictureInPictureServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PictureInPictureService,
                                                   handleOrPtrInfo);
  }

  function PictureInPictureServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PictureInPictureService, associatedInterfacePtrInfo);
  }

  PictureInPictureServiceAssociatedPtr.prototype =
      Object.create(PictureInPictureServicePtr.prototype);
  PictureInPictureServiceAssociatedPtr.prototype.constructor =
      PictureInPictureServiceAssociatedPtr;

  function PictureInPictureServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  PictureInPictureServicePtr.prototype.startSession = function() {
    return PictureInPictureServiceProxy.prototype.startSession
        .apply(this.ptr.getProxy(), arguments);
  };

  PictureInPictureServiceProxy.prototype.startSession = function(playerId, surfaceId, naturalSize, showPlayPauseButton, showMuteButton, observer) {
    var params_ = new PictureInPictureService_StartSession_Params();
    params_.playerId = playerId;
    params_.surfaceId = surfaceId;
    params_.naturalSize = naturalSize;
    params_.showPlayPauseButton = showPlayPauseButton;
    params_.showMuteButton = showMuteButton;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPictureInPictureService_StartSession_Name,
          codec.align(PictureInPictureService_StartSession_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PictureInPictureService_StartSession_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PictureInPictureService_StartSession_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PictureInPictureServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  PictureInPictureServiceStub.prototype.startSession = function(playerId, surfaceId, naturalSize, showPlayPauseButton, showMuteButton, observer) {
    return this.delegate_ && this.delegate_.startSession && this.delegate_.startSession(playerId, surfaceId, naturalSize, showPlayPauseButton, showMuteButton, observer);
  }

  PictureInPictureServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PictureInPictureServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPictureInPictureService_StartSession_Name:
      var params = reader.decodeStruct(PictureInPictureService_StartSession_Params);
      this.startSession(params.playerId, params.surfaceId, params.naturalSize, params.showPlayPauseButton, params.showMuteButton, params.observer).then(function(response) {
        var responseParams =
            new PictureInPictureService_StartSession_ResponseParams();
        responseParams.session = response.session;
        responseParams.size = response.size;
        var builder = new codec.MessageV1Builder(
            kPictureInPictureService_StartSession_Name,
            codec.align(PictureInPictureService_StartSession_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PictureInPictureService_StartSession_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePictureInPictureServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPictureInPictureService_StartSession_Name:
        if (message.expectsResponse())
          paramsClass = PictureInPictureService_StartSession_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePictureInPictureServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPictureInPictureService_StartSession_Name:
        if (message.isResponse())
          paramsClass = PictureInPictureService_StartSession_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PictureInPictureService = {
    name: 'blink.mojom.PictureInPictureService',
    kVersion: 0,
    ptrClass: PictureInPictureServicePtr,
    proxyClass: PictureInPictureServiceProxy,
    stubClass: PictureInPictureServiceStub,
    validateRequest: validatePictureInPictureServiceRequest,
    validateResponse: validatePictureInPictureServiceResponse,
  };
  PictureInPictureServiceStub.prototype.validator = validatePictureInPictureServiceRequest;
  PictureInPictureServiceProxy.prototype.validator = validatePictureInPictureServiceResponse;
  exports.PictureInPictureSessionObserver = PictureInPictureSessionObserver;
  exports.PictureInPictureSessionObserverPtr = PictureInPictureSessionObserverPtr;
  exports.PictureInPictureSessionObserverAssociatedPtr = PictureInPictureSessionObserverAssociatedPtr;
  exports.PictureInPictureSession = PictureInPictureSession;
  exports.PictureInPictureSessionPtr = PictureInPictureSessionPtr;
  exports.PictureInPictureSessionAssociatedPtr = PictureInPictureSessionAssociatedPtr;
  exports.PictureInPictureService = PictureInPictureService;
  exports.PictureInPictureServicePtr = PictureInPictureServicePtr;
  exports.PictureInPictureServiceAssociatedPtr = PictureInPictureServiceAssociatedPtr;
})();