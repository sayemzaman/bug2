// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/mediasession/media_session.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var media_session$ =
      mojo.internal.exposeNamespace('mediaSession.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/media_session/public/mojom/media_session.mojom', '../../../../../services/media_session/public/mojom/media_session.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var MediaSessionPlaybackState = {};
  MediaSessionPlaybackState.NONE = 0;
  MediaSessionPlaybackState.PAUSED = MediaSessionPlaybackState.NONE + 1;
  MediaSessionPlaybackState.PLAYING = MediaSessionPlaybackState.PAUSED + 1;
  MediaSessionPlaybackState.MIN_VALUE = 0,
  MediaSessionPlaybackState.MAX_VALUE = 2,

  MediaSessionPlaybackState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MediaSessionPlaybackState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SpecMediaMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpecMediaMetadata.prototype.initDefaults_ = function() {
    this.title = null;
    this.artist = null;
    this.album = null;
    this.artwork = null;
  };
  SpecMediaMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpecMediaMetadata.validate = function(messageValidator, offset) {
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


    // validate SpecMediaMetadata.title
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpecMediaMetadata.artist
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpecMediaMetadata.album
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpecMediaMetadata.artwork
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(media_session$.MediaImage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SpecMediaMetadata.encodedSize = codec.kStructHeaderSize + 32;

  SpecMediaMetadata.decode = function(decoder) {
    var packed;
    var val = new SpecMediaMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStructPointer(string16$.String16);
    val.artist = decoder.decodeStructPointer(string16$.String16);
    val.album = decoder.decodeStructPointer(string16$.String16);
    val.artwork = decoder.decodeArrayPointer(new codec.PointerTo(media_session$.MediaImage));
    return val;
  };

  SpecMediaMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpecMediaMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.title);
    encoder.encodeStructPointer(string16$.String16, val.artist);
    encoder.encodeStructPointer(string16$.String16, val.album);
    encoder.encodeArrayPointer(new codec.PointerTo(media_session$.MediaImage), val.artwork);
  };
  function MediaSessionClient_DidReceiveAction_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionClient_DidReceiveAction_Params.prototype.initDefaults_ = function() {
    this.action = 0;
  };
  MediaSessionClient_DidReceiveAction_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionClient_DidReceiveAction_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionClient_DidReceiveAction_Params.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionAction);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionClient_DidReceiveAction_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionClient_DidReceiveAction_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionClient_DidReceiveAction_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionClient_DidReceiveAction_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionClient_DidReceiveAction_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSessionService_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new MediaSessionClientPtr();
  };
  MediaSessionService_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_SetClient_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_SetClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(MediaSessionClientPtr));
    return val;
  };

  MediaSessionService_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(MediaSessionClientPtr), val.client);
  };
  function MediaSessionService_SetPlaybackState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_SetPlaybackState_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  MediaSessionService_SetPlaybackState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_SetPlaybackState_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_SetPlaybackState_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaSessionPlaybackState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_SetPlaybackState_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_SetPlaybackState_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_SetPlaybackState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionService_SetPlaybackState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_SetPlaybackState_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSessionService_SetMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_SetMetadata_Params.prototype.initDefaults_ = function() {
    this.metadata = null;
  };
  MediaSessionService_SetMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_SetMetadata_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_SetMetadata_Params.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SpecMediaMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_SetMetadata_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_SetMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_SetMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metadata = decoder.decodeStructPointer(SpecMediaMetadata);
    return val;
  };

  MediaSessionService_SetMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_SetMetadata_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SpecMediaMetadata, val.metadata);
  };
  function MediaSessionService_EnableAction_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_EnableAction_Params.prototype.initDefaults_ = function() {
    this.action = 0;
  };
  MediaSessionService_EnableAction_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_EnableAction_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_EnableAction_Params.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionAction);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_EnableAction_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_EnableAction_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_EnableAction_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionService_EnableAction_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_EnableAction_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSessionService_DisableAction_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_DisableAction_Params.prototype.initDefaults_ = function() {
    this.action = 0;
  };
  MediaSessionService_DisableAction_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_DisableAction_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_DisableAction_Params.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionAction);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_DisableAction_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_DisableAction_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_DisableAction_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionService_DisableAction_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_DisableAction_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kMediaSessionClient_DidReceiveAction_Name = 0;

  function MediaSessionClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaSessionClient,
                                                   handleOrPtrInfo);
  }

  function MediaSessionClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaSessionClient, associatedInterfacePtrInfo);
  }

  MediaSessionClientAssociatedPtr.prototype =
      Object.create(MediaSessionClientPtr.prototype);
  MediaSessionClientAssociatedPtr.prototype.constructor =
      MediaSessionClientAssociatedPtr;

  function MediaSessionClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaSessionClientPtr.prototype.didReceiveAction = function() {
    return MediaSessionClientProxy.prototype.didReceiveAction
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionClientProxy.prototype.didReceiveAction = function(action) {
    var params_ = new MediaSessionClient_DidReceiveAction_Params();
    params_.action = action;
    var builder = new codec.MessageV0Builder(
        kMediaSessionClient_DidReceiveAction_Name,
        codec.align(MediaSessionClient_DidReceiveAction_Params.encodedSize));
    builder.encodeStruct(MediaSessionClient_DidReceiveAction_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaSessionClientStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaSessionClientStub.prototype.didReceiveAction = function(action) {
    return this.delegate_ && this.delegate_.didReceiveAction && this.delegate_.didReceiveAction(action);
  }

  MediaSessionClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaSessionClient_DidReceiveAction_Name:
      var params = reader.decodeStruct(MediaSessionClient_DidReceiveAction_Params);
      this.didReceiveAction(params.action);
      return true;
    default:
      return false;
    }
  };

  MediaSessionClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaSessionClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaSessionClient_DidReceiveAction_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionClient_DidReceiveAction_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaSessionClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaSessionClient = {
    name: 'blink.mojom.MediaSessionClient',
    kVersion: 0,
    ptrClass: MediaSessionClientPtr,
    proxyClass: MediaSessionClientProxy,
    stubClass: MediaSessionClientStub,
    validateRequest: validateMediaSessionClientRequest,
    validateResponse: null,
  };
  MediaSessionClientStub.prototype.validator = validateMediaSessionClientRequest;
  MediaSessionClientProxy.prototype.validator = null;
  var kMediaSessionService_SetClient_Name = 0;
  var kMediaSessionService_SetPlaybackState_Name = 1;
  var kMediaSessionService_SetMetadata_Name = 2;
  var kMediaSessionService_EnableAction_Name = 3;
  var kMediaSessionService_DisableAction_Name = 4;

  function MediaSessionServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaSessionService,
                                                   handleOrPtrInfo);
  }

  function MediaSessionServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaSessionService, associatedInterfacePtrInfo);
  }

  MediaSessionServiceAssociatedPtr.prototype =
      Object.create(MediaSessionServicePtr.prototype);
  MediaSessionServiceAssociatedPtr.prototype.constructor =
      MediaSessionServiceAssociatedPtr;

  function MediaSessionServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaSessionServicePtr.prototype.setClient = function() {
    return MediaSessionServiceProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.setClient = function(client) {
    var params_ = new MediaSessionService_SetClient_Params();
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_SetClient_Name,
        codec.align(MediaSessionService_SetClient_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionServicePtr.prototype.setPlaybackState = function() {
    return MediaSessionServiceProxy.prototype.setPlaybackState
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.setPlaybackState = function(state) {
    var params_ = new MediaSessionService_SetPlaybackState_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_SetPlaybackState_Name,
        codec.align(MediaSessionService_SetPlaybackState_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_SetPlaybackState_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionServicePtr.prototype.setMetadata = function() {
    return MediaSessionServiceProxy.prototype.setMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.setMetadata = function(metadata) {
    var params_ = new MediaSessionService_SetMetadata_Params();
    params_.metadata = metadata;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_SetMetadata_Name,
        codec.align(MediaSessionService_SetMetadata_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_SetMetadata_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionServicePtr.prototype.enableAction = function() {
    return MediaSessionServiceProxy.prototype.enableAction
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.enableAction = function(action) {
    var params_ = new MediaSessionService_EnableAction_Params();
    params_.action = action;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_EnableAction_Name,
        codec.align(MediaSessionService_EnableAction_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_EnableAction_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionServicePtr.prototype.disableAction = function() {
    return MediaSessionServiceProxy.prototype.disableAction
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.disableAction = function(action) {
    var params_ = new MediaSessionService_DisableAction_Params();
    params_.action = action;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_DisableAction_Name,
        codec.align(MediaSessionService_DisableAction_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_DisableAction_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaSessionServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaSessionServiceStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }
  MediaSessionServiceStub.prototype.setPlaybackState = function(state) {
    return this.delegate_ && this.delegate_.setPlaybackState && this.delegate_.setPlaybackState(state);
  }
  MediaSessionServiceStub.prototype.setMetadata = function(metadata) {
    return this.delegate_ && this.delegate_.setMetadata && this.delegate_.setMetadata(metadata);
  }
  MediaSessionServiceStub.prototype.enableAction = function(action) {
    return this.delegate_ && this.delegate_.enableAction && this.delegate_.enableAction(action);
  }
  MediaSessionServiceStub.prototype.disableAction = function(action) {
    return this.delegate_ && this.delegate_.disableAction && this.delegate_.disableAction(action);
  }

  MediaSessionServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaSessionService_SetClient_Name:
      var params = reader.decodeStruct(MediaSessionService_SetClient_Params);
      this.setClient(params.client);
      return true;
    case kMediaSessionService_SetPlaybackState_Name:
      var params = reader.decodeStruct(MediaSessionService_SetPlaybackState_Params);
      this.setPlaybackState(params.state);
      return true;
    case kMediaSessionService_SetMetadata_Name:
      var params = reader.decodeStruct(MediaSessionService_SetMetadata_Params);
      this.setMetadata(params.metadata);
      return true;
    case kMediaSessionService_EnableAction_Name:
      var params = reader.decodeStruct(MediaSessionService_EnableAction_Params);
      this.enableAction(params.action);
      return true;
    case kMediaSessionService_DisableAction_Name:
      var params = reader.decodeStruct(MediaSessionService_DisableAction_Params);
      this.disableAction(params.action);
      return true;
    default:
      return false;
    }
  };

  MediaSessionServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaSessionServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaSessionService_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_SetClient_Params;
      break;
      case kMediaSessionService_SetPlaybackState_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_SetPlaybackState_Params;
      break;
      case kMediaSessionService_SetMetadata_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_SetMetadata_Params;
      break;
      case kMediaSessionService_EnableAction_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_EnableAction_Params;
      break;
      case kMediaSessionService_DisableAction_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_DisableAction_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaSessionServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaSessionService = {
    name: 'blink.mojom.MediaSessionService',
    kVersion: 0,
    ptrClass: MediaSessionServicePtr,
    proxyClass: MediaSessionServiceProxy,
    stubClass: MediaSessionServiceStub,
    validateRequest: validateMediaSessionServiceRequest,
    validateResponse: null,
  };
  MediaSessionServiceStub.prototype.validator = validateMediaSessionServiceRequest;
  MediaSessionServiceProxy.prototype.validator = null;
  exports.MediaSessionPlaybackState = MediaSessionPlaybackState;
  exports.SpecMediaMetadata = SpecMediaMetadata;
  exports.MediaSessionClient = MediaSessionClient;
  exports.MediaSessionClientPtr = MediaSessionClientPtr;
  exports.MediaSessionClientAssociatedPtr = MediaSessionClientAssociatedPtr;
  exports.MediaSessionService = MediaSessionService;
  exports.MediaSessionServicePtr = MediaSessionServicePtr;
  exports.MediaSessionServiceAssociatedPtr = MediaSessionServiceAssociatedPtr;
})();