// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/android_overlay.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }



  function AndroidOverlayConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AndroidOverlayConfig.prototype.initDefaults_ = function() {
    this.routingToken = null;
    this.rect = null;
    this.secure = false;
    this.powerEfficient = false;
  };
  AndroidOverlayConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AndroidOverlayConfig.validate = function(messageValidator, offset) {
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


    // validate AndroidOverlayConfig.routingToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AndroidOverlayConfig.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  AndroidOverlayConfig.encodedSize = codec.kStructHeaderSize + 24;

  AndroidOverlayConfig.decode = function(decoder) {
    var packed;
    var val = new AndroidOverlayConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingToken = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.rect = decoder.decodeStructPointer(geometry$.Rect);
    packed = decoder.readUint8();
    val.secure = (packed >> 0) & 1 ? true : false;
    val.powerEfficient = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AndroidOverlayConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AndroidOverlayConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.routingToken);
    encoder.encodeStructPointer(geometry$.Rect, val.rect);
    packed = 0;
    packed |= (val.secure & 1) << 0
    packed |= (val.powerEfficient & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AndroidOverlayProvider_CreateOverlay_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AndroidOverlayProvider_CreateOverlay_Params.prototype.initDefaults_ = function() {
    this.overlay = new bindings.InterfaceRequest();
    this.client = new AndroidOverlayClientPtr();
    this.config = null;
  };
  AndroidOverlayProvider_CreateOverlay_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AndroidOverlayProvider_CreateOverlay_Params.validate = function(messageValidator, offset) {
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


    // validate AndroidOverlayProvider_CreateOverlay_Params.overlay
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AndroidOverlayProvider_CreateOverlay_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AndroidOverlayProvider_CreateOverlay_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, AndroidOverlayConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AndroidOverlayProvider_CreateOverlay_Params.encodedSize = codec.kStructHeaderSize + 24;

  AndroidOverlayProvider_CreateOverlay_Params.decode = function(decoder) {
    var packed;
    var val = new AndroidOverlayProvider_CreateOverlay_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.overlay = decoder.decodeStruct(codec.InterfaceRequest);
    val.client = decoder.decodeStruct(new codec.Interface(AndroidOverlayClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.config = decoder.decodeStructPointer(AndroidOverlayConfig);
    return val;
  };

  AndroidOverlayProvider_CreateOverlay_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AndroidOverlayProvider_CreateOverlay_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.overlay);
    encoder.encodeStruct(new codec.Interface(AndroidOverlayClientPtr), val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(AndroidOverlayConfig, val.config);
  };
  function AndroidOverlay_ScheduleLayout_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AndroidOverlay_ScheduleLayout_Params.prototype.initDefaults_ = function() {
    this.rect = null;
  };
  AndroidOverlay_ScheduleLayout_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AndroidOverlay_ScheduleLayout_Params.validate = function(messageValidator, offset) {
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


    // validate AndroidOverlay_ScheduleLayout_Params.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AndroidOverlay_ScheduleLayout_Params.encodedSize = codec.kStructHeaderSize + 8;

  AndroidOverlay_ScheduleLayout_Params.decode = function(decoder) {
    var packed;
    var val = new AndroidOverlay_ScheduleLayout_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rect = decoder.decodeStructPointer(geometry$.Rect);
    return val;
  };

  AndroidOverlay_ScheduleLayout_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AndroidOverlay_ScheduleLayout_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.rect);
  };
  function AndroidOverlayClient_OnSurfaceReady_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AndroidOverlayClient_OnSurfaceReady_Params.prototype.initDefaults_ = function() {
    this.surfaceKey = 0;
  };
  AndroidOverlayClient_OnSurfaceReady_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AndroidOverlayClient_OnSurfaceReady_Params.validate = function(messageValidator, offset) {
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

  AndroidOverlayClient_OnSurfaceReady_Params.encodedSize = codec.kStructHeaderSize + 8;

  AndroidOverlayClient_OnSurfaceReady_Params.decode = function(decoder) {
    var packed;
    var val = new AndroidOverlayClient_OnSurfaceReady_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.surfaceKey = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  AndroidOverlayClient_OnSurfaceReady_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AndroidOverlayClient_OnSurfaceReady_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.surfaceKey);
  };
  function AndroidOverlayClient_OnDestroyed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AndroidOverlayClient_OnDestroyed_Params.prototype.initDefaults_ = function() {
  };
  AndroidOverlayClient_OnDestroyed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AndroidOverlayClient_OnDestroyed_Params.validate = function(messageValidator, offset) {
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

  AndroidOverlayClient_OnDestroyed_Params.encodedSize = codec.kStructHeaderSize + 0;

  AndroidOverlayClient_OnDestroyed_Params.decode = function(decoder) {
    var packed;
    var val = new AndroidOverlayClient_OnDestroyed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AndroidOverlayClient_OnDestroyed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AndroidOverlayClient_OnDestroyed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AndroidOverlayClient_OnPowerEfficientState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AndroidOverlayClient_OnPowerEfficientState_Params.prototype.initDefaults_ = function() {
    this.isPowerEfficient = false;
  };
  AndroidOverlayClient_OnPowerEfficientState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AndroidOverlayClient_OnPowerEfficientState_Params.validate = function(messageValidator, offset) {
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

  AndroidOverlayClient_OnPowerEfficientState_Params.encodedSize = codec.kStructHeaderSize + 8;

  AndroidOverlayClient_OnPowerEfficientState_Params.decode = function(decoder) {
    var packed;
    var val = new AndroidOverlayClient_OnPowerEfficientState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isPowerEfficient = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AndroidOverlayClient_OnPowerEfficientState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AndroidOverlayClient_OnPowerEfficientState_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isPowerEfficient & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAndroidOverlayProvider_CreateOverlay_Name = 0;

  function AndroidOverlayProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AndroidOverlayProvider,
                                                   handleOrPtrInfo);
  }

  function AndroidOverlayProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AndroidOverlayProvider, associatedInterfacePtrInfo);
  }

  AndroidOverlayProviderAssociatedPtr.prototype =
      Object.create(AndroidOverlayProviderPtr.prototype);
  AndroidOverlayProviderAssociatedPtr.prototype.constructor =
      AndroidOverlayProviderAssociatedPtr;

  function AndroidOverlayProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  AndroidOverlayProviderPtr.prototype.createOverlay = function() {
    return AndroidOverlayProviderProxy.prototype.createOverlay
        .apply(this.ptr.getProxy(), arguments);
  };

  AndroidOverlayProviderProxy.prototype.createOverlay = function(overlay, client, config) {
    var params_ = new AndroidOverlayProvider_CreateOverlay_Params();
    params_.overlay = overlay;
    params_.client = client;
    params_.config = config;
    var builder = new codec.MessageV0Builder(
        kAndroidOverlayProvider_CreateOverlay_Name,
        codec.align(AndroidOverlayProvider_CreateOverlay_Params.encodedSize));
    builder.encodeStruct(AndroidOverlayProvider_CreateOverlay_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AndroidOverlayProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  AndroidOverlayProviderStub.prototype.createOverlay = function(overlay, client, config) {
    return this.delegate_ && this.delegate_.createOverlay && this.delegate_.createOverlay(overlay, client, config);
  }

  AndroidOverlayProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAndroidOverlayProvider_CreateOverlay_Name:
      var params = reader.decodeStruct(AndroidOverlayProvider_CreateOverlay_Params);
      this.createOverlay(params.overlay, params.client, params.config);
      return true;
    default:
      return false;
    }
  };

  AndroidOverlayProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAndroidOverlayProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAndroidOverlayProvider_CreateOverlay_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AndroidOverlayProvider_CreateOverlay_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAndroidOverlayProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AndroidOverlayProvider = {
    name: 'media.mojom.AndroidOverlayProvider',
    kVersion: 0,
    ptrClass: AndroidOverlayProviderPtr,
    proxyClass: AndroidOverlayProviderProxy,
    stubClass: AndroidOverlayProviderStub,
    validateRequest: validateAndroidOverlayProviderRequest,
    validateResponse: null,
  };
  AndroidOverlayProviderStub.prototype.validator = validateAndroidOverlayProviderRequest;
  AndroidOverlayProviderProxy.prototype.validator = null;
  var kAndroidOverlay_ScheduleLayout_Name = 0;

  function AndroidOverlayPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AndroidOverlay,
                                                   handleOrPtrInfo);
  }

  function AndroidOverlayAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AndroidOverlay, associatedInterfacePtrInfo);
  }

  AndroidOverlayAssociatedPtr.prototype =
      Object.create(AndroidOverlayPtr.prototype);
  AndroidOverlayAssociatedPtr.prototype.constructor =
      AndroidOverlayAssociatedPtr;

  function AndroidOverlayProxy(receiver) {
    this.receiver_ = receiver;
  }
  AndroidOverlayPtr.prototype.scheduleLayout = function() {
    return AndroidOverlayProxy.prototype.scheduleLayout
        .apply(this.ptr.getProxy(), arguments);
  };

  AndroidOverlayProxy.prototype.scheduleLayout = function(rect) {
    var params_ = new AndroidOverlay_ScheduleLayout_Params();
    params_.rect = rect;
    var builder = new codec.MessageV0Builder(
        kAndroidOverlay_ScheduleLayout_Name,
        codec.align(AndroidOverlay_ScheduleLayout_Params.encodedSize));
    builder.encodeStruct(AndroidOverlay_ScheduleLayout_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AndroidOverlayStub(delegate) {
    this.delegate_ = delegate;
  }
  AndroidOverlayStub.prototype.scheduleLayout = function(rect) {
    return this.delegate_ && this.delegate_.scheduleLayout && this.delegate_.scheduleLayout(rect);
  }

  AndroidOverlayStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAndroidOverlay_ScheduleLayout_Name:
      var params = reader.decodeStruct(AndroidOverlay_ScheduleLayout_Params);
      this.scheduleLayout(params.rect);
      return true;
    default:
      return false;
    }
  };

  AndroidOverlayStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAndroidOverlayRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAndroidOverlay_ScheduleLayout_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AndroidOverlay_ScheduleLayout_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAndroidOverlayResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AndroidOverlay = {
    name: 'media.mojom.AndroidOverlay',
    kVersion: 0,
    ptrClass: AndroidOverlayPtr,
    proxyClass: AndroidOverlayProxy,
    stubClass: AndroidOverlayStub,
    validateRequest: validateAndroidOverlayRequest,
    validateResponse: null,
  };
  AndroidOverlayStub.prototype.validator = validateAndroidOverlayRequest;
  AndroidOverlayProxy.prototype.validator = null;
  var kAndroidOverlayClient_OnSurfaceReady_Name = 0;
  var kAndroidOverlayClient_OnDestroyed_Name = 1;
  var kAndroidOverlayClient_OnPowerEfficientState_Name = 2;

  function AndroidOverlayClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AndroidOverlayClient,
                                                   handleOrPtrInfo);
  }

  function AndroidOverlayClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AndroidOverlayClient, associatedInterfacePtrInfo);
  }

  AndroidOverlayClientAssociatedPtr.prototype =
      Object.create(AndroidOverlayClientPtr.prototype);
  AndroidOverlayClientAssociatedPtr.prototype.constructor =
      AndroidOverlayClientAssociatedPtr;

  function AndroidOverlayClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  AndroidOverlayClientPtr.prototype.onSurfaceReady = function() {
    return AndroidOverlayClientProxy.prototype.onSurfaceReady
        .apply(this.ptr.getProxy(), arguments);
  };

  AndroidOverlayClientProxy.prototype.onSurfaceReady = function(surfaceKey) {
    var params_ = new AndroidOverlayClient_OnSurfaceReady_Params();
    params_.surfaceKey = surfaceKey;
    var builder = new codec.MessageV0Builder(
        kAndroidOverlayClient_OnSurfaceReady_Name,
        codec.align(AndroidOverlayClient_OnSurfaceReady_Params.encodedSize));
    builder.encodeStruct(AndroidOverlayClient_OnSurfaceReady_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AndroidOverlayClientPtr.prototype.onDestroyed = function() {
    return AndroidOverlayClientProxy.prototype.onDestroyed
        .apply(this.ptr.getProxy(), arguments);
  };

  AndroidOverlayClientProxy.prototype.onDestroyed = function() {
    var params_ = new AndroidOverlayClient_OnDestroyed_Params();
    var builder = new codec.MessageV0Builder(
        kAndroidOverlayClient_OnDestroyed_Name,
        codec.align(AndroidOverlayClient_OnDestroyed_Params.encodedSize));
    builder.encodeStruct(AndroidOverlayClient_OnDestroyed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AndroidOverlayClientPtr.prototype.onPowerEfficientState = function() {
    return AndroidOverlayClientProxy.prototype.onPowerEfficientState
        .apply(this.ptr.getProxy(), arguments);
  };

  AndroidOverlayClientProxy.prototype.onPowerEfficientState = function(isPowerEfficient) {
    var params_ = new AndroidOverlayClient_OnPowerEfficientState_Params();
    params_.isPowerEfficient = isPowerEfficient;
    var builder = new codec.MessageV0Builder(
        kAndroidOverlayClient_OnPowerEfficientState_Name,
        codec.align(AndroidOverlayClient_OnPowerEfficientState_Params.encodedSize));
    builder.encodeStruct(AndroidOverlayClient_OnPowerEfficientState_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AndroidOverlayClientStub(delegate) {
    this.delegate_ = delegate;
  }
  AndroidOverlayClientStub.prototype.onSurfaceReady = function(surfaceKey) {
    return this.delegate_ && this.delegate_.onSurfaceReady && this.delegate_.onSurfaceReady(surfaceKey);
  }
  AndroidOverlayClientStub.prototype.onDestroyed = function() {
    return this.delegate_ && this.delegate_.onDestroyed && this.delegate_.onDestroyed();
  }
  AndroidOverlayClientStub.prototype.onPowerEfficientState = function(isPowerEfficient) {
    return this.delegate_ && this.delegate_.onPowerEfficientState && this.delegate_.onPowerEfficientState(isPowerEfficient);
  }

  AndroidOverlayClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAndroidOverlayClient_OnSurfaceReady_Name:
      var params = reader.decodeStruct(AndroidOverlayClient_OnSurfaceReady_Params);
      this.onSurfaceReady(params.surfaceKey);
      return true;
    case kAndroidOverlayClient_OnDestroyed_Name:
      var params = reader.decodeStruct(AndroidOverlayClient_OnDestroyed_Params);
      this.onDestroyed();
      return true;
    case kAndroidOverlayClient_OnPowerEfficientState_Name:
      var params = reader.decodeStruct(AndroidOverlayClient_OnPowerEfficientState_Params);
      this.onPowerEfficientState(params.isPowerEfficient);
      return true;
    default:
      return false;
    }
  };

  AndroidOverlayClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAndroidOverlayClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAndroidOverlayClient_OnSurfaceReady_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AndroidOverlayClient_OnSurfaceReady_Params;
      break;
      case kAndroidOverlayClient_OnDestroyed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AndroidOverlayClient_OnDestroyed_Params;
      break;
      case kAndroidOverlayClient_OnPowerEfficientState_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AndroidOverlayClient_OnPowerEfficientState_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAndroidOverlayClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AndroidOverlayClient = {
    name: 'media.mojom.AndroidOverlayClient',
    kVersion: 0,
    ptrClass: AndroidOverlayClientPtr,
    proxyClass: AndroidOverlayClientProxy,
    stubClass: AndroidOverlayClientStub,
    validateRequest: validateAndroidOverlayClientRequest,
    validateResponse: null,
  };
  AndroidOverlayClientStub.prototype.validator = validateAndroidOverlayClientRequest;
  AndroidOverlayClientProxy.prototype.validator = null;
  exports.AndroidOverlayConfig = AndroidOverlayConfig;
  exports.AndroidOverlayProvider = AndroidOverlayProvider;
  exports.AndroidOverlayProviderPtr = AndroidOverlayProviderPtr;
  exports.AndroidOverlayProviderAssociatedPtr = AndroidOverlayProviderAssociatedPtr;
  exports.AndroidOverlay = AndroidOverlay;
  exports.AndroidOverlayPtr = AndroidOverlayPtr;
  exports.AndroidOverlayAssociatedPtr = AndroidOverlayAssociatedPtr;
  exports.AndroidOverlayClient = AndroidOverlayClient;
  exports.AndroidOverlayClientPtr = AndroidOverlayClientPtr;
  exports.AndroidOverlayClientAssociatedPtr = AndroidOverlayClientAssociatedPtr;
})();