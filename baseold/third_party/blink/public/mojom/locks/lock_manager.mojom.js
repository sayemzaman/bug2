// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/locks/lock_manager.mojom';
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


  var LockMode = {};
  LockMode.SHARED = 0;
  LockMode.EXCLUSIVE = LockMode.SHARED + 1;
  LockMode.MIN_VALUE = 0,
  LockMode.MAX_VALUE = 1,

  LockMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  LockMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function LockInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.mode = 0;
    this.clientId = null;
  };
  LockInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockInfo.validate = function(messageValidator, offset) {
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


    // validate LockInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate LockInfo.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, LockMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LockInfo.clientId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LockInfo.encodedSize = codec.kStructHeaderSize + 24;

  LockInfo.decode = function(decoder) {
    var packed;
    var val = new LockInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.mode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.clientId = decoder.decodeStruct(codec.String);
    return val;
  };

  LockInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.clientId);
  };
  function LockRequest_Granted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockRequest_Granted_Params.prototype.initDefaults_ = function() {
    this.lockHandle = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  LockRequest_Granted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockRequest_Granted_Params.validate = function(messageValidator, offset) {
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


    // validate LockRequest_Granted_Params.lockHandle
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LockRequest_Granted_Params.encodedSize = codec.kStructHeaderSize + 8;

  LockRequest_Granted_Params.decode = function(decoder) {
    var packed;
    var val = new LockRequest_Granted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.lockHandle = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  LockRequest_Granted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockRequest_Granted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.lockHandle);
  };
  function LockRequest_Failed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockRequest_Failed_Params.prototype.initDefaults_ = function() {
  };
  LockRequest_Failed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockRequest_Failed_Params.validate = function(messageValidator, offset) {
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

  LockRequest_Failed_Params.encodedSize = codec.kStructHeaderSize + 0;

  LockRequest_Failed_Params.decode = function(decoder) {
    var packed;
    var val = new LockRequest_Failed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  LockRequest_Failed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockRequest_Failed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function LockRequest_Abort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockRequest_Abort_Params.prototype.initDefaults_ = function() {
    this.reason = null;
  };
  LockRequest_Abort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockRequest_Abort_Params.validate = function(messageValidator, offset) {
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


    // validate LockRequest_Abort_Params.reason
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LockRequest_Abort_Params.encodedSize = codec.kStructHeaderSize + 8;

  LockRequest_Abort_Params.decode = function(decoder) {
    var packed;
    var val = new LockRequest_Abort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason = decoder.decodeStruct(codec.String);
    return val;
  };

  LockRequest_Abort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockRequest_Abort_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.reason);
  };
  function LockManager_RequestLock_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockManager_RequestLock_Params.prototype.initDefaults_ = function() {
    this.name = null;
    this.mode = 0;
    this.wait = 0;
    this.request = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  LockManager_RequestLock_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockManager_RequestLock_Params.validate = function(messageValidator, offset) {
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


    // validate LockManager_RequestLock_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate LockManager_RequestLock_Params.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, LockMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LockManager_RequestLock_Params.wait
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, LockManager.WaitMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LockManager_RequestLock_Params.request
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LockManager_RequestLock_Params.encodedSize = codec.kStructHeaderSize + 24;

  LockManager_RequestLock_Params.decode = function(decoder) {
    var packed;
    var val = new LockManager_RequestLock_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.mode = decoder.decodeStruct(codec.Int32);
    val.wait = decoder.decodeStruct(codec.Int32);
    val.request = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  LockManager_RequestLock_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockManager_RequestLock_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.encodeStruct(codec.Int32, val.wait);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.request);
  };
  function LockManager_QueryState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockManager_QueryState_Params.prototype.initDefaults_ = function() {
  };
  LockManager_QueryState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockManager_QueryState_Params.validate = function(messageValidator, offset) {
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

  LockManager_QueryState_Params.encodedSize = codec.kStructHeaderSize + 0;

  LockManager_QueryState_Params.decode = function(decoder) {
    var packed;
    var val = new LockManager_QueryState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  LockManager_QueryState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockManager_QueryState_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function LockManager_QueryState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LockManager_QueryState_ResponseParams.prototype.initDefaults_ = function() {
    this.requested = null;
    this.held = null;
  };
  LockManager_QueryState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LockManager_QueryState_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate LockManager_QueryState_ResponseParams.requested
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(LockInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LockManager_QueryState_ResponseParams.held
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(LockInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LockManager_QueryState_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  LockManager_QueryState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new LockManager_QueryState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requested = decoder.decodeArrayPointer(new codec.PointerTo(LockInfo));
    val.held = decoder.decodeArrayPointer(new codec.PointerTo(LockInfo));
    return val;
  };

  LockManager_QueryState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LockManager_QueryState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(LockInfo), val.requested);
    encoder.encodeArrayPointer(new codec.PointerTo(LockInfo), val.held);
  };

  function LockHandlePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LockHandle,
                                                   handleOrPtrInfo);
  }

  function LockHandleAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LockHandle, associatedInterfacePtrInfo);
  }

  LockHandleAssociatedPtr.prototype =
      Object.create(LockHandlePtr.prototype);
  LockHandleAssociatedPtr.prototype.constructor =
      LockHandleAssociatedPtr;

  function LockHandleProxy(receiver) {
    this.receiver_ = receiver;
  }

  function LockHandleStub(delegate) {
    this.delegate_ = delegate;
  }

  LockHandleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  LockHandleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateLockHandleRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateLockHandleResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var LockHandle = {
    name: 'blink.mojom.LockHandle',
    kVersion: 0,
    ptrClass: LockHandlePtr,
    proxyClass: LockHandleProxy,
    stubClass: LockHandleStub,
    validateRequest: validateLockHandleRequest,
    validateResponse: null,
  };
  LockHandleStub.prototype.validator = validateLockHandleRequest;
  LockHandleProxy.prototype.validator = null;
  var kLockRequest_Granted_Name = 0;
  var kLockRequest_Failed_Name = 1;
  var kLockRequest_Abort_Name = 2;

  function LockRequestPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LockRequest,
                                                   handleOrPtrInfo);
  }

  function LockRequestAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LockRequest, associatedInterfacePtrInfo);
  }

  LockRequestAssociatedPtr.prototype =
      Object.create(LockRequestPtr.prototype);
  LockRequestAssociatedPtr.prototype.constructor =
      LockRequestAssociatedPtr;

  function LockRequestProxy(receiver) {
    this.receiver_ = receiver;
  }
  LockRequestPtr.prototype.granted = function() {
    return LockRequestProxy.prototype.granted
        .apply(this.ptr.getProxy(), arguments);
  };

  LockRequestProxy.prototype.granted = function(lockHandle) {
    var params_ = new LockRequest_Granted_Params();
    params_.lockHandle = lockHandle;
    var builder = new codec.MessageV2Builder(
        kLockRequest_Granted_Name,
        codec.align(LockRequest_Granted_Params.encodedSize));
    builder.setPayload(LockRequest_Granted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LockRequestPtr.prototype.failed = function() {
    return LockRequestProxy.prototype.failed
        .apply(this.ptr.getProxy(), arguments);
  };

  LockRequestProxy.prototype.failed = function() {
    var params_ = new LockRequest_Failed_Params();
    var builder = new codec.MessageV0Builder(
        kLockRequest_Failed_Name,
        codec.align(LockRequest_Failed_Params.encodedSize));
    builder.encodeStruct(LockRequest_Failed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LockRequestPtr.prototype.abort = function() {
    return LockRequestProxy.prototype.abort
        .apply(this.ptr.getProxy(), arguments);
  };

  LockRequestProxy.prototype.abort = function(reason) {
    var params_ = new LockRequest_Abort_Params();
    params_.reason = reason;
    var builder = new codec.MessageV0Builder(
        kLockRequest_Abort_Name,
        codec.align(LockRequest_Abort_Params.encodedSize));
    builder.encodeStruct(LockRequest_Abort_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function LockRequestStub(delegate) {
    this.delegate_ = delegate;
  }
  LockRequestStub.prototype.granted = function(lockHandle) {
    return this.delegate_ && this.delegate_.granted && this.delegate_.granted(lockHandle);
  }
  LockRequestStub.prototype.failed = function() {
    return this.delegate_ && this.delegate_.failed && this.delegate_.failed();
  }
  LockRequestStub.prototype.abort = function(reason) {
    return this.delegate_ && this.delegate_.abort && this.delegate_.abort(reason);
  }

  LockRequestStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLockRequest_Granted_Name:
      var params = reader.decodeStruct(LockRequest_Granted_Params);
      this.granted(params.lockHandle);
      return true;
    case kLockRequest_Failed_Name:
      var params = reader.decodeStruct(LockRequest_Failed_Params);
      this.failed();
      return true;
    case kLockRequest_Abort_Name:
      var params = reader.decodeStruct(LockRequest_Abort_Params);
      this.abort(params.reason);
      return true;
    default:
      return false;
    }
  };

  LockRequestStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateLockRequestRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLockRequest_Granted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LockRequest_Granted_Params;
      break;
      case kLockRequest_Failed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LockRequest_Failed_Params;
      break;
      case kLockRequest_Abort_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LockRequest_Abort_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLockRequestResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var LockRequest = {
    name: 'blink.mojom.LockRequest',
    kVersion: 0,
    ptrClass: LockRequestPtr,
    proxyClass: LockRequestProxy,
    stubClass: LockRequestStub,
    validateRequest: validateLockRequestRequest,
    validateResponse: null,
  };
  LockRequestStub.prototype.validator = validateLockRequestRequest;
  LockRequestProxy.prototype.validator = null;
  var kLockManager_RequestLock_Name = 0;
  var kLockManager_QueryState_Name = 1;

  function LockManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LockManager,
                                                   handleOrPtrInfo);
  }

  function LockManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LockManager, associatedInterfacePtrInfo);
  }

  LockManagerAssociatedPtr.prototype =
      Object.create(LockManagerPtr.prototype);
  LockManagerAssociatedPtr.prototype.constructor =
      LockManagerAssociatedPtr;

  function LockManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  LockManagerPtr.prototype.requestLock = function() {
    return LockManagerProxy.prototype.requestLock
        .apply(this.ptr.getProxy(), arguments);
  };

  LockManagerProxy.prototype.requestLock = function(name, mode, wait, request) {
    var params_ = new LockManager_RequestLock_Params();
    params_.name = name;
    params_.mode = mode;
    params_.wait = wait;
    params_.request = request;
    var builder = new codec.MessageV2Builder(
        kLockManager_RequestLock_Name,
        codec.align(LockManager_RequestLock_Params.encodedSize));
    builder.setPayload(LockManager_RequestLock_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LockManagerPtr.prototype.queryState = function() {
    return LockManagerProxy.prototype.queryState
        .apply(this.ptr.getProxy(), arguments);
  };

  LockManagerProxy.prototype.queryState = function() {
    var params_ = new LockManager_QueryState_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kLockManager_QueryState_Name,
          codec.align(LockManager_QueryState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(LockManager_QueryState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(LockManager_QueryState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function LockManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  LockManagerStub.prototype.requestLock = function(name, mode, wait, request) {
    return this.delegate_ && this.delegate_.requestLock && this.delegate_.requestLock(name, mode, wait, request);
  }
  LockManagerStub.prototype.queryState = function() {
    return this.delegate_ && this.delegate_.queryState && this.delegate_.queryState();
  }

  LockManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLockManager_RequestLock_Name:
      var params = reader.decodeStruct(LockManager_RequestLock_Params);
      this.requestLock(params.name, params.mode, params.wait, params.request);
      return true;
    default:
      return false;
    }
  };

  LockManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLockManager_QueryState_Name:
      var params = reader.decodeStruct(LockManager_QueryState_Params);
      this.queryState().then(function(response) {
        var responseParams =
            new LockManager_QueryState_ResponseParams();
        responseParams.requested = response.requested;
        responseParams.held = response.held;
        var builder = new codec.MessageV1Builder(
            kLockManager_QueryState_Name,
            codec.align(LockManager_QueryState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(LockManager_QueryState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateLockManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLockManager_RequestLock_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LockManager_RequestLock_Params;
      break;
      case kLockManager_QueryState_Name:
        if (message.expectsResponse())
          paramsClass = LockManager_QueryState_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLockManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kLockManager_QueryState_Name:
        if (message.isResponse())
          paramsClass = LockManager_QueryState_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var LockManager = {
    name: 'blink.mojom.LockManager',
    kVersion: 0,
    ptrClass: LockManagerPtr,
    proxyClass: LockManagerProxy,
    stubClass: LockManagerStub,
    validateRequest: validateLockManagerRequest,
    validateResponse: validateLockManagerResponse,
  };
  LockManager.WaitMode = {};
  LockManager.WaitMode.WAIT = 0;
  LockManager.WaitMode.NO_WAIT = LockManager.WaitMode.WAIT + 1;
  LockManager.WaitMode.PREEMPT = LockManager.WaitMode.NO_WAIT + 1;
  LockManager.WaitMode.MIN_VALUE = 0,
  LockManager.WaitMode.MAX_VALUE = 2,

  LockManager.WaitMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  LockManager.WaitMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  LockManagerStub.prototype.validator = validateLockManagerRequest;
  LockManagerProxy.prototype.validator = validateLockManagerResponse;
  exports.LockMode = LockMode;
  exports.LockInfo = LockInfo;
  exports.LockHandle = LockHandle;
  exports.LockHandlePtr = LockHandlePtr;
  exports.LockHandleAssociatedPtr = LockHandleAssociatedPtr;
  exports.LockRequest = LockRequest;
  exports.LockRequestPtr = LockRequestPtr;
  exports.LockRequestAssociatedPtr = LockRequestAssociatedPtr;
  exports.LockManager = LockManager;
  exports.LockManagerPtr = LockManagerPtr;
  exports.LockManagerAssociatedPtr = LockManagerAssociatedPtr;
})();