// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/background_sync/background_sync.mojom';
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


  var BackgroundSyncError = {};
  BackgroundSyncError.NONE = 0;
  BackgroundSyncError.STORAGE = BackgroundSyncError.NONE + 1;
  BackgroundSyncError.NOT_FOUND = BackgroundSyncError.STORAGE + 1;
  BackgroundSyncError.NO_SERVICE_WORKER = BackgroundSyncError.NOT_FOUND + 1;
  BackgroundSyncError.NOT_ALLOWED = BackgroundSyncError.NO_SERVICE_WORKER + 1;
  BackgroundSyncError.PERMISSION_DENIED = BackgroundSyncError.NOT_ALLOWED + 1;
  BackgroundSyncError.MAX = BackgroundSyncError.PERMISSION_DENIED;
  BackgroundSyncError.MIN_VALUE = 0,
  BackgroundSyncError.MAX_VALUE = 5,

  BackgroundSyncError.isKnownEnumValue = function(value) {
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

  BackgroundSyncError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BackgroundSyncState = {};
  BackgroundSyncState.PENDING = 0;
  BackgroundSyncState.FIRING = BackgroundSyncState.PENDING + 1;
  BackgroundSyncState.REREGISTERED_WHILE_FIRING = BackgroundSyncState.FIRING + 1;
  BackgroundSyncState.MIN_VALUE = 0,
  BackgroundSyncState.MAX_VALUE = 2,

  BackgroundSyncState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BackgroundSyncState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BackgroundSyncEventLastChance = {};
  BackgroundSyncEventLastChance.IS_NOT_LAST_CHANCE = 0;
  BackgroundSyncEventLastChance.IS_LAST_CHANCE = BackgroundSyncEventLastChance.IS_NOT_LAST_CHANCE + 1;
  BackgroundSyncEventLastChance.MIN_VALUE = 0,
  BackgroundSyncEventLastChance.MAX_VALUE = 1,

  BackgroundSyncEventLastChance.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  BackgroundSyncEventLastChance.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BackgroundSyncType = {};
  BackgroundSyncType.ONE_SHOT = 0;
  BackgroundSyncType.PERIODIC = BackgroundSyncType.ONE_SHOT + 1;
  BackgroundSyncType.MIN_VALUE = 0,
  BackgroundSyncType.MAX_VALUE = 1,

  BackgroundSyncType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  BackgroundSyncType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SyncRegistrationOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SyncRegistrationOptions.prototype.initDefaults_ = function() {
    this.tag = "";
    this.minInterval = -1;
  };
  SyncRegistrationOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SyncRegistrationOptions.validate = function(messageValidator, offset) {
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


    // validate SyncRegistrationOptions.tag
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SyncRegistrationOptions.encodedSize = codec.kStructHeaderSize + 16;

  SyncRegistrationOptions.decode = function(decoder) {
    var packed;
    var val = new SyncRegistrationOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tag = decoder.decodeStruct(codec.String);
    val.minInterval = decoder.decodeStruct(codec.Int64);
    return val;
  };

  SyncRegistrationOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SyncRegistrationOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.tag);
    encoder.encodeStruct(codec.Int64, val.minInterval);
  };
  function BackgroundSyncRegistrationInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundSyncRegistrationInfo.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = -1;
    this.tag = null;
    this.syncType = 0;
  };
  BackgroundSyncRegistrationInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundSyncRegistrationInfo.validate = function(messageValidator, offset) {
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



    // validate BackgroundSyncRegistrationInfo.tag
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundSyncRegistrationInfo.syncType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, BackgroundSyncType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundSyncRegistrationInfo.encodedSize = codec.kStructHeaderSize + 24;

  BackgroundSyncRegistrationInfo.decode = function(decoder) {
    var packed;
    var val = new BackgroundSyncRegistrationInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    val.tag = decoder.decodeStruct(codec.String);
    val.syncType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BackgroundSyncRegistrationInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundSyncRegistrationInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
    encoder.encodeStruct(codec.String, val.tag);
    encoder.encodeStruct(codec.Int32, val.syncType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BackgroundSyncService_Register_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundSyncService_Register_Params.prototype.initDefaults_ = function() {
    this.options = null;
    this.serviceWorkerRegistrationId = 0;
  };
  BackgroundSyncService_Register_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundSyncService_Register_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundSyncService_Register_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SyncRegistrationOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BackgroundSyncService_Register_Params.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundSyncService_Register_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundSyncService_Register_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(SyncRegistrationOptions);
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  BackgroundSyncService_Register_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundSyncService_Register_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SyncRegistrationOptions, val.options);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
  };
  function BackgroundSyncService_Register_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundSyncService_Register_ResponseParams.prototype.initDefaults_ = function() {
    this.err = 0;
    this.options = null;
  };
  BackgroundSyncService_Register_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundSyncService_Register_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundSyncService_Register_ResponseParams.err
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundSyncError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundSyncService_Register_ResponseParams.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, SyncRegistrationOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundSyncService_Register_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundSyncService_Register_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundSyncService_Register_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.err = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.options = decoder.decodeStructPointer(SyncRegistrationOptions);
    return val;
  };

  BackgroundSyncService_Register_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundSyncService_Register_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.err);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(SyncRegistrationOptions, val.options);
  };
  function BackgroundSyncService_DidResolveRegistration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundSyncService_DidResolveRegistration_Params.prototype.initDefaults_ = function() {
    this.registrationInfo = null;
  };
  BackgroundSyncService_DidResolveRegistration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundSyncService_DidResolveRegistration_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundSyncService_DidResolveRegistration_Params.registrationInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BackgroundSyncRegistrationInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundSyncService_DidResolveRegistration_Params.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundSyncService_DidResolveRegistration_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundSyncService_DidResolveRegistration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.registrationInfo = decoder.decodeStructPointer(BackgroundSyncRegistrationInfo);
    return val;
  };

  BackgroundSyncService_DidResolveRegistration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundSyncService_DidResolveRegistration_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BackgroundSyncRegistrationInfo, val.registrationInfo);
  };
  function BackgroundSyncService_GetOneShotSyncRegistrations_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundSyncService_GetOneShotSyncRegistrations_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
  };
  BackgroundSyncService_GetOneShotSyncRegistrations_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundSyncService_GetOneShotSyncRegistrations_Params.validate = function(messageValidator, offset) {
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

  BackgroundSyncService_GetOneShotSyncRegistrations_Params.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundSyncService_GetOneShotSyncRegistrations_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundSyncService_GetOneShotSyncRegistrations_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  BackgroundSyncService_GetOneShotSyncRegistrations_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundSyncService_GetOneShotSyncRegistrations_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
  };
  function BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.prototype.initDefaults_ = function() {
    this.err = 0;
    this.registrations = null;
  };
  BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.err
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundSyncError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.registrations
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(SyncRegistrationOptions), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.err = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.registrations = decoder.decodeArrayPointer(new codec.PointerTo(SyncRegistrationOptions));
    return val;
  };

  BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.err);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(SyncRegistrationOptions), val.registrations);
  };
  var kBackgroundSyncService_Register_Name = 0;
  var kBackgroundSyncService_DidResolveRegistration_Name = 1;
  var kBackgroundSyncService_GetOneShotSyncRegistrations_Name = 2;

  function BackgroundSyncServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundSyncService,
                                                   handleOrPtrInfo);
  }

  function BackgroundSyncServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundSyncService, associatedInterfacePtrInfo);
  }

  BackgroundSyncServiceAssociatedPtr.prototype =
      Object.create(BackgroundSyncServicePtr.prototype);
  BackgroundSyncServiceAssociatedPtr.prototype.constructor =
      BackgroundSyncServiceAssociatedPtr;

  function BackgroundSyncServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundSyncServicePtr.prototype.register = function() {
    return BackgroundSyncServiceProxy.prototype.register
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundSyncServiceProxy.prototype.register = function(options, serviceWorkerRegistrationId) {
    var params_ = new BackgroundSyncService_Register_Params();
    params_.options = options;
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundSyncService_Register_Name,
          codec.align(BackgroundSyncService_Register_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundSyncService_Register_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundSyncService_Register_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundSyncServicePtr.prototype.didResolveRegistration = function() {
    return BackgroundSyncServiceProxy.prototype.didResolveRegistration
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundSyncServiceProxy.prototype.didResolveRegistration = function(registrationInfo) {
    var params_ = new BackgroundSyncService_DidResolveRegistration_Params();
    params_.registrationInfo = registrationInfo;
    var builder = new codec.MessageV0Builder(
        kBackgroundSyncService_DidResolveRegistration_Name,
        codec.align(BackgroundSyncService_DidResolveRegistration_Params.encodedSize));
    builder.encodeStruct(BackgroundSyncService_DidResolveRegistration_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BackgroundSyncServicePtr.prototype.getOneShotSyncRegistrations = function() {
    return BackgroundSyncServiceProxy.prototype.getOneShotSyncRegistrations
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundSyncServiceProxy.prototype.getOneShotSyncRegistrations = function(serviceWorkerRegistrationId) {
    var params_ = new BackgroundSyncService_GetOneShotSyncRegistrations_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundSyncService_GetOneShotSyncRegistrations_Name,
          codec.align(BackgroundSyncService_GetOneShotSyncRegistrations_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundSyncService_GetOneShotSyncRegistrations_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BackgroundSyncServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundSyncServiceStub.prototype.register = function(options, serviceWorkerRegistrationId) {
    return this.delegate_ && this.delegate_.register && this.delegate_.register(options, serviceWorkerRegistrationId);
  }
  BackgroundSyncServiceStub.prototype.didResolveRegistration = function(registrationInfo) {
    return this.delegate_ && this.delegate_.didResolveRegistration && this.delegate_.didResolveRegistration(registrationInfo);
  }
  BackgroundSyncServiceStub.prototype.getOneShotSyncRegistrations = function(serviceWorkerRegistrationId) {
    return this.delegate_ && this.delegate_.getOneShotSyncRegistrations && this.delegate_.getOneShotSyncRegistrations(serviceWorkerRegistrationId);
  }

  BackgroundSyncServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundSyncService_DidResolveRegistration_Name:
      var params = reader.decodeStruct(BackgroundSyncService_DidResolveRegistration_Params);
      this.didResolveRegistration(params.registrationInfo);
      return true;
    default:
      return false;
    }
  };

  BackgroundSyncServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundSyncService_Register_Name:
      var params = reader.decodeStruct(BackgroundSyncService_Register_Params);
      this.register(params.options, params.serviceWorkerRegistrationId).then(function(response) {
        var responseParams =
            new BackgroundSyncService_Register_ResponseParams();
        responseParams.err = response.err;
        responseParams.options = response.options;
        var builder = new codec.MessageV1Builder(
            kBackgroundSyncService_Register_Name,
            codec.align(BackgroundSyncService_Register_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundSyncService_Register_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBackgroundSyncService_GetOneShotSyncRegistrations_Name:
      var params = reader.decodeStruct(BackgroundSyncService_GetOneShotSyncRegistrations_Params);
      this.getOneShotSyncRegistrations(params.serviceWorkerRegistrationId).then(function(response) {
        var responseParams =
            new BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams();
        responseParams.err = response.err;
        responseParams.registrations = response.registrations;
        var builder = new codec.MessageV1Builder(
            kBackgroundSyncService_GetOneShotSyncRegistrations_Name,
            codec.align(BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBackgroundSyncServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundSyncService_Register_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundSyncService_Register_Params;
      break;
      case kBackgroundSyncService_DidResolveRegistration_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundSyncService_DidResolveRegistration_Params;
      break;
      case kBackgroundSyncService_GetOneShotSyncRegistrations_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundSyncService_GetOneShotSyncRegistrations_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundSyncServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBackgroundSyncService_Register_Name:
        if (message.isResponse())
          paramsClass = BackgroundSyncService_Register_ResponseParams;
        break;
      case kBackgroundSyncService_GetOneShotSyncRegistrations_Name:
        if (message.isResponse())
          paramsClass = BackgroundSyncService_GetOneShotSyncRegistrations_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BackgroundSyncService = {
    name: 'blink.mojom.BackgroundSyncService',
    kVersion: 0,
    ptrClass: BackgroundSyncServicePtr,
    proxyClass: BackgroundSyncServiceProxy,
    stubClass: BackgroundSyncServiceStub,
    validateRequest: validateBackgroundSyncServiceRequest,
    validateResponse: validateBackgroundSyncServiceResponse,
  };
  BackgroundSyncServiceStub.prototype.validator = validateBackgroundSyncServiceRequest;
  BackgroundSyncServiceProxy.prototype.validator = validateBackgroundSyncServiceResponse;
  exports.BackgroundSyncError = BackgroundSyncError;
  exports.BackgroundSyncState = BackgroundSyncState;
  exports.BackgroundSyncEventLastChance = BackgroundSyncEventLastChance;
  exports.BackgroundSyncType = BackgroundSyncType;
  exports.SyncRegistrationOptions = SyncRegistrationOptions;
  exports.BackgroundSyncRegistrationInfo = BackgroundSyncRegistrationInfo;
  exports.BackgroundSyncService = BackgroundSyncService;
  exports.BackgroundSyncServicePtr = BackgroundSyncServicePtr;
  exports.BackgroundSyncServiceAssociatedPtr = BackgroundSyncServiceAssociatedPtr;
})();