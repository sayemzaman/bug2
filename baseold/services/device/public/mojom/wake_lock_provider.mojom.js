// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/wake_lock_provider.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var wake_lock_context$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/wake_lock_context.mojom', 'wake_lock_context.mojom.js');
  }
  var wake_lock$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/wake_lock.mojom', 'wake_lock.mojom.js');
  }



  function WakeLockProvider_GetWakeLockContextForID_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockProvider_GetWakeLockContextForID_Params.prototype.initDefaults_ = function() {
    this.contextId = 0;
    this.context = new bindings.InterfaceRequest();
  };
  WakeLockProvider_GetWakeLockContextForID_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockProvider_GetWakeLockContextForID_Params.validate = function(messageValidator, offset) {
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



    // validate WakeLockProvider_GetWakeLockContextForID_Params.context
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WakeLockProvider_GetWakeLockContextForID_Params.encodedSize = codec.kStructHeaderSize + 8;

  WakeLockProvider_GetWakeLockContextForID_Params.decode = function(decoder) {
    var packed;
    var val = new WakeLockProvider_GetWakeLockContextForID_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contextId = decoder.decodeStruct(codec.Int32);
    val.context = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  WakeLockProvider_GetWakeLockContextForID_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockProvider_GetWakeLockContextForID_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.contextId);
    encoder.encodeStruct(codec.InterfaceRequest, val.context);
  };
  function WakeLockProvider_GetWakeLockWithoutContext_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockProvider_GetWakeLockWithoutContext_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.reason = 0;
    this.description = null;
    this.wakeLock = new bindings.InterfaceRequest();
  };
  WakeLockProvider_GetWakeLockWithoutContext_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockProvider_GetWakeLockWithoutContext_Params.validate = function(messageValidator, offset) {
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


    // validate WakeLockProvider_GetWakeLockWithoutContext_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, wake_lock$.WakeLockType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockProvider_GetWakeLockWithoutContext_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, wake_lock$.WakeLockReason);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockProvider_GetWakeLockWithoutContext_Params.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockProvider_GetWakeLockWithoutContext_Params.wakeLock
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WakeLockProvider_GetWakeLockWithoutContext_Params.encodedSize = codec.kStructHeaderSize + 24;

  WakeLockProvider_GetWakeLockWithoutContext_Params.decode = function(decoder) {
    var packed;
    var val = new WakeLockProvider_GetWakeLockWithoutContext_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.reason = decoder.decodeStruct(codec.Int32);
    val.description = decoder.decodeStruct(codec.String);
    val.wakeLock = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WakeLockProvider_GetWakeLockWithoutContext_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockProvider_GetWakeLockWithoutContext_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.encodeStruct(codec.String, val.description);
    encoder.encodeStruct(codec.InterfaceRequest, val.wakeLock);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WakeLockProvider_NotifyOnWakeLockDeactivation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockProvider_NotifyOnWakeLockDeactivation_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.observer = new WakeLockObserverPtr();
  };
  WakeLockProvider_NotifyOnWakeLockDeactivation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockProvider_NotifyOnWakeLockDeactivation_Params.validate = function(messageValidator, offset) {
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


    // validate WakeLockProvider_NotifyOnWakeLockDeactivation_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, wake_lock$.WakeLockType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockProvider_NotifyOnWakeLockDeactivation_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WakeLockProvider_NotifyOnWakeLockDeactivation_Params.encodedSize = codec.kStructHeaderSize + 16;

  WakeLockProvider_NotifyOnWakeLockDeactivation_Params.decode = function(decoder) {
    var packed;
    var val = new WakeLockProvider_NotifyOnWakeLockDeactivation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.observer = decoder.decodeStruct(new codec.Interface(WakeLockObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WakeLockProvider_NotifyOnWakeLockDeactivation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockProvider_NotifyOnWakeLockDeactivation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(new codec.Interface(WakeLockObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WakeLockProvider_GetActiveWakeLocksForTests_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockProvider_GetActiveWakeLocksForTests_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  WakeLockProvider_GetActiveWakeLocksForTests_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockProvider_GetActiveWakeLocksForTests_Params.validate = function(messageValidator, offset) {
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


    // validate WakeLockProvider_GetActiveWakeLocksForTests_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, wake_lock$.WakeLockType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WakeLockProvider_GetActiveWakeLocksForTests_Params.encodedSize = codec.kStructHeaderSize + 8;

  WakeLockProvider_GetActiveWakeLocksForTests_Params.decode = function(decoder) {
    var packed;
    var val = new WakeLockProvider_GetActiveWakeLocksForTests_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WakeLockProvider_GetActiveWakeLocksForTests_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockProvider_GetActiveWakeLocksForTests_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.prototype.initDefaults_ = function() {
    this.count = 0;
  };
  WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.validate = function(messageValidator, offset) {
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

  WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.count = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.count);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WakeLockObserver_OnWakeLockDeactivated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockObserver_OnWakeLockDeactivated_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  WakeLockObserver_OnWakeLockDeactivated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockObserver_OnWakeLockDeactivated_Params.validate = function(messageValidator, offset) {
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


    // validate WakeLockObserver_OnWakeLockDeactivated_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, wake_lock$.WakeLockType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WakeLockObserver_OnWakeLockDeactivated_Params.encodedSize = codec.kStructHeaderSize + 8;

  WakeLockObserver_OnWakeLockDeactivated_Params.decode = function(decoder) {
    var packed;
    var val = new WakeLockObserver_OnWakeLockDeactivated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WakeLockObserver_OnWakeLockDeactivated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockObserver_OnWakeLockDeactivated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kWakeLockProvider_GetWakeLockContextForID_Name = 0;
  var kWakeLockProvider_GetWakeLockWithoutContext_Name = 1;
  var kWakeLockProvider_NotifyOnWakeLockDeactivation_Name = 2;
  var kWakeLockProvider_GetActiveWakeLocksForTests_Name = 3;

  function WakeLockProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WakeLockProvider,
                                                   handleOrPtrInfo);
  }

  function WakeLockProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WakeLockProvider, associatedInterfacePtrInfo);
  }

  WakeLockProviderAssociatedPtr.prototype =
      Object.create(WakeLockProviderPtr.prototype);
  WakeLockProviderAssociatedPtr.prototype.constructor =
      WakeLockProviderAssociatedPtr;

  function WakeLockProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  WakeLockProviderPtr.prototype.getWakeLockContextForID = function() {
    return WakeLockProviderProxy.prototype.getWakeLockContextForID
        .apply(this.ptr.getProxy(), arguments);
  };

  WakeLockProviderProxy.prototype.getWakeLockContextForID = function(contextId, context) {
    var params_ = new WakeLockProvider_GetWakeLockContextForID_Params();
    params_.contextId = contextId;
    params_.context = context;
    var builder = new codec.MessageV0Builder(
        kWakeLockProvider_GetWakeLockContextForID_Name,
        codec.align(WakeLockProvider_GetWakeLockContextForID_Params.encodedSize));
    builder.encodeStruct(WakeLockProvider_GetWakeLockContextForID_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WakeLockProviderPtr.prototype.getWakeLockWithoutContext = function() {
    return WakeLockProviderProxy.prototype.getWakeLockWithoutContext
        .apply(this.ptr.getProxy(), arguments);
  };

  WakeLockProviderProxy.prototype.getWakeLockWithoutContext = function(type, reason, description, wakeLock) {
    var params_ = new WakeLockProvider_GetWakeLockWithoutContext_Params();
    params_.type = type;
    params_.reason = reason;
    params_.description = description;
    params_.wakeLock = wakeLock;
    var builder = new codec.MessageV0Builder(
        kWakeLockProvider_GetWakeLockWithoutContext_Name,
        codec.align(WakeLockProvider_GetWakeLockWithoutContext_Params.encodedSize));
    builder.encodeStruct(WakeLockProvider_GetWakeLockWithoutContext_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WakeLockProviderPtr.prototype.notifyOnWakeLockDeactivation = function() {
    return WakeLockProviderProxy.prototype.notifyOnWakeLockDeactivation
        .apply(this.ptr.getProxy(), arguments);
  };

  WakeLockProviderProxy.prototype.notifyOnWakeLockDeactivation = function(type, observer) {
    var params_ = new WakeLockProvider_NotifyOnWakeLockDeactivation_Params();
    params_.type = type;
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kWakeLockProvider_NotifyOnWakeLockDeactivation_Name,
        codec.align(WakeLockProvider_NotifyOnWakeLockDeactivation_Params.encodedSize));
    builder.encodeStruct(WakeLockProvider_NotifyOnWakeLockDeactivation_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WakeLockProviderPtr.prototype.getActiveWakeLocksForTests = function() {
    return WakeLockProviderProxy.prototype.getActiveWakeLocksForTests
        .apply(this.ptr.getProxy(), arguments);
  };

  WakeLockProviderProxy.prototype.getActiveWakeLocksForTests = function(type) {
    var params_ = new WakeLockProvider_GetActiveWakeLocksForTests_Params();
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWakeLockProvider_GetActiveWakeLocksForTests_Name,
          codec.align(WakeLockProvider_GetActiveWakeLocksForTests_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WakeLockProvider_GetActiveWakeLocksForTests_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WakeLockProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  WakeLockProviderStub.prototype.getWakeLockContextForID = function(contextId, context) {
    return this.delegate_ && this.delegate_.getWakeLockContextForID && this.delegate_.getWakeLockContextForID(contextId, context);
  }
  WakeLockProviderStub.prototype.getWakeLockWithoutContext = function(type, reason, description, wakeLock) {
    return this.delegate_ && this.delegate_.getWakeLockWithoutContext && this.delegate_.getWakeLockWithoutContext(type, reason, description, wakeLock);
  }
  WakeLockProviderStub.prototype.notifyOnWakeLockDeactivation = function(type, observer) {
    return this.delegate_ && this.delegate_.notifyOnWakeLockDeactivation && this.delegate_.notifyOnWakeLockDeactivation(type, observer);
  }
  WakeLockProviderStub.prototype.getActiveWakeLocksForTests = function(type) {
    return this.delegate_ && this.delegate_.getActiveWakeLocksForTests && this.delegate_.getActiveWakeLocksForTests(type);
  }

  WakeLockProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWakeLockProvider_GetWakeLockContextForID_Name:
      var params = reader.decodeStruct(WakeLockProvider_GetWakeLockContextForID_Params);
      this.getWakeLockContextForID(params.contextId, params.context);
      return true;
    case kWakeLockProvider_GetWakeLockWithoutContext_Name:
      var params = reader.decodeStruct(WakeLockProvider_GetWakeLockWithoutContext_Params);
      this.getWakeLockWithoutContext(params.type, params.reason, params.description, params.wakeLock);
      return true;
    case kWakeLockProvider_NotifyOnWakeLockDeactivation_Name:
      var params = reader.decodeStruct(WakeLockProvider_NotifyOnWakeLockDeactivation_Params);
      this.notifyOnWakeLockDeactivation(params.type, params.observer);
      return true;
    default:
      return false;
    }
  };

  WakeLockProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWakeLockProvider_GetActiveWakeLocksForTests_Name:
      var params = reader.decodeStruct(WakeLockProvider_GetActiveWakeLocksForTests_Params);
      this.getActiveWakeLocksForTests(params.type).then(function(response) {
        var responseParams =
            new WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams();
        responseParams.count = response.count;
        var builder = new codec.MessageV1Builder(
            kWakeLockProvider_GetActiveWakeLocksForTests_Name,
            codec.align(WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWakeLockProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWakeLockProvider_GetWakeLockContextForID_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WakeLockProvider_GetWakeLockContextForID_Params;
      break;
      case kWakeLockProvider_GetWakeLockWithoutContext_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WakeLockProvider_GetWakeLockWithoutContext_Params;
      break;
      case kWakeLockProvider_NotifyOnWakeLockDeactivation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WakeLockProvider_NotifyOnWakeLockDeactivation_Params;
      break;
      case kWakeLockProvider_GetActiveWakeLocksForTests_Name:
        if (message.expectsResponse())
          paramsClass = WakeLockProvider_GetActiveWakeLocksForTests_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWakeLockProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWakeLockProvider_GetActiveWakeLocksForTests_Name:
        if (message.isResponse())
          paramsClass = WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WakeLockProvider = {
    name: 'device.mojom.WakeLockProvider',
    kVersion: 0,
    ptrClass: WakeLockProviderPtr,
    proxyClass: WakeLockProviderProxy,
    stubClass: WakeLockProviderStub,
    validateRequest: validateWakeLockProviderRequest,
    validateResponse: validateWakeLockProviderResponse,
  };
  WakeLockProviderStub.prototype.validator = validateWakeLockProviderRequest;
  WakeLockProviderProxy.prototype.validator = validateWakeLockProviderResponse;
  var kWakeLockObserver_OnWakeLockDeactivated_Name = 0;

  function WakeLockObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WakeLockObserver,
                                                   handleOrPtrInfo);
  }

  function WakeLockObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WakeLockObserver, associatedInterfacePtrInfo);
  }

  WakeLockObserverAssociatedPtr.prototype =
      Object.create(WakeLockObserverPtr.prototype);
  WakeLockObserverAssociatedPtr.prototype.constructor =
      WakeLockObserverAssociatedPtr;

  function WakeLockObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  WakeLockObserverPtr.prototype.onWakeLockDeactivated = function() {
    return WakeLockObserverProxy.prototype.onWakeLockDeactivated
        .apply(this.ptr.getProxy(), arguments);
  };

  WakeLockObserverProxy.prototype.onWakeLockDeactivated = function(type) {
    var params_ = new WakeLockObserver_OnWakeLockDeactivated_Params();
    params_.type = type;
    var builder = new codec.MessageV0Builder(
        kWakeLockObserver_OnWakeLockDeactivated_Name,
        codec.align(WakeLockObserver_OnWakeLockDeactivated_Params.encodedSize));
    builder.encodeStruct(WakeLockObserver_OnWakeLockDeactivated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WakeLockObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  WakeLockObserverStub.prototype.onWakeLockDeactivated = function(type) {
    return this.delegate_ && this.delegate_.onWakeLockDeactivated && this.delegate_.onWakeLockDeactivated(type);
  }

  WakeLockObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWakeLockObserver_OnWakeLockDeactivated_Name:
      var params = reader.decodeStruct(WakeLockObserver_OnWakeLockDeactivated_Params);
      this.onWakeLockDeactivated(params.type);
      return true;
    default:
      return false;
    }
  };

  WakeLockObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWakeLockObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWakeLockObserver_OnWakeLockDeactivated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WakeLockObserver_OnWakeLockDeactivated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWakeLockObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WakeLockObserver = {
    name: 'device.mojom.WakeLockObserver',
    kVersion: 0,
    ptrClass: WakeLockObserverPtr,
    proxyClass: WakeLockObserverProxy,
    stubClass: WakeLockObserverStub,
    validateRequest: validateWakeLockObserverRequest,
    validateResponse: null,
  };
  WakeLockObserverStub.prototype.validator = validateWakeLockObserverRequest;
  WakeLockObserverProxy.prototype.validator = null;
  exports.WakeLockProvider = WakeLockProvider;
  exports.WakeLockProviderPtr = WakeLockProviderPtr;
  exports.WakeLockProviderAssociatedPtr = WakeLockProviderAssociatedPtr;
  exports.WakeLockObserver = WakeLockObserver;
  exports.WakeLockObserverPtr = WakeLockObserverPtr;
  exports.WakeLockObserverAssociatedPtr = WakeLockObserverAssociatedPtr;
})();