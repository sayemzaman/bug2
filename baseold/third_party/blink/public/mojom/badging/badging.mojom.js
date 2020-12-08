// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/badging/badging.mojom';
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



  function BadgeService_SetInteger_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BadgeService_SetInteger_Params.prototype.initDefaults_ = function() {
    this.content = 0;
  };
  BadgeService_SetInteger_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BadgeService_SetInteger_Params.validate = function(messageValidator, offset) {
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

  BadgeService_SetInteger_Params.encodedSize = codec.kStructHeaderSize + 8;

  BadgeService_SetInteger_Params.decode = function(decoder) {
    var packed;
    var val = new BadgeService_SetInteger_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.content = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  BadgeService_SetInteger_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BadgeService_SetInteger_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.content);
  };
  function BadgeService_SetFlag_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BadgeService_SetFlag_Params.prototype.initDefaults_ = function() {
  };
  BadgeService_SetFlag_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BadgeService_SetFlag_Params.validate = function(messageValidator, offset) {
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

  BadgeService_SetFlag_Params.encodedSize = codec.kStructHeaderSize + 0;

  BadgeService_SetFlag_Params.decode = function(decoder) {
    var packed;
    var val = new BadgeService_SetFlag_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BadgeService_SetFlag_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BadgeService_SetFlag_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BadgeService_ClearBadge_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BadgeService_ClearBadge_Params.prototype.initDefaults_ = function() {
  };
  BadgeService_ClearBadge_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BadgeService_ClearBadge_Params.validate = function(messageValidator, offset) {
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

  BadgeService_ClearBadge_Params.encodedSize = codec.kStructHeaderSize + 0;

  BadgeService_ClearBadge_Params.decode = function(decoder) {
    var packed;
    var val = new BadgeService_ClearBadge_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BadgeService_ClearBadge_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BadgeService_ClearBadge_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kBadgeService_SetInteger_Name = 0;
  var kBadgeService_SetFlag_Name = 1;
  var kBadgeService_ClearBadge_Name = 2;

  function BadgeServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BadgeService,
                                                   handleOrPtrInfo);
  }

  function BadgeServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BadgeService, associatedInterfacePtrInfo);
  }

  BadgeServiceAssociatedPtr.prototype =
      Object.create(BadgeServicePtr.prototype);
  BadgeServiceAssociatedPtr.prototype.constructor =
      BadgeServiceAssociatedPtr;

  function BadgeServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  BadgeServicePtr.prototype.setInteger = function() {
    return BadgeServiceProxy.prototype.setInteger
        .apply(this.ptr.getProxy(), arguments);
  };

  BadgeServiceProxy.prototype.setInteger = function(content) {
    var params_ = new BadgeService_SetInteger_Params();
    params_.content = content;
    var builder = new codec.MessageV0Builder(
        kBadgeService_SetInteger_Name,
        codec.align(BadgeService_SetInteger_Params.encodedSize));
    builder.encodeStruct(BadgeService_SetInteger_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BadgeServicePtr.prototype.setFlag = function() {
    return BadgeServiceProxy.prototype.setFlag
        .apply(this.ptr.getProxy(), arguments);
  };

  BadgeServiceProxy.prototype.setFlag = function() {
    var params_ = new BadgeService_SetFlag_Params();
    var builder = new codec.MessageV0Builder(
        kBadgeService_SetFlag_Name,
        codec.align(BadgeService_SetFlag_Params.encodedSize));
    builder.encodeStruct(BadgeService_SetFlag_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BadgeServicePtr.prototype.clearBadge = function() {
    return BadgeServiceProxy.prototype.clearBadge
        .apply(this.ptr.getProxy(), arguments);
  };

  BadgeServiceProxy.prototype.clearBadge = function() {
    var params_ = new BadgeService_ClearBadge_Params();
    var builder = new codec.MessageV0Builder(
        kBadgeService_ClearBadge_Name,
        codec.align(BadgeService_ClearBadge_Params.encodedSize));
    builder.encodeStruct(BadgeService_ClearBadge_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BadgeServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  BadgeServiceStub.prototype.setInteger = function(content) {
    return this.delegate_ && this.delegate_.setInteger && this.delegate_.setInteger(content);
  }
  BadgeServiceStub.prototype.setFlag = function() {
    return this.delegate_ && this.delegate_.setFlag && this.delegate_.setFlag();
  }
  BadgeServiceStub.prototype.clearBadge = function() {
    return this.delegate_ && this.delegate_.clearBadge && this.delegate_.clearBadge();
  }

  BadgeServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBadgeService_SetInteger_Name:
      var params = reader.decodeStruct(BadgeService_SetInteger_Params);
      this.setInteger(params.content);
      return true;
    case kBadgeService_SetFlag_Name:
      var params = reader.decodeStruct(BadgeService_SetFlag_Params);
      this.setFlag();
      return true;
    case kBadgeService_ClearBadge_Name:
      var params = reader.decodeStruct(BadgeService_ClearBadge_Params);
      this.clearBadge();
      return true;
    default:
      return false;
    }
  };

  BadgeServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBadgeServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBadgeService_SetInteger_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BadgeService_SetInteger_Params;
      break;
      case kBadgeService_SetFlag_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BadgeService_SetFlag_Params;
      break;
      case kBadgeService_ClearBadge_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BadgeService_ClearBadge_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBadgeServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BadgeService = {
    name: 'blink.mojom.BadgeService',
    kVersion: 0,
    ptrClass: BadgeServicePtr,
    proxyClass: BadgeServiceProxy,
    stubClass: BadgeServiceStub,
    validateRequest: validateBadgeServiceRequest,
    validateResponse: null,
  };
  BadgeServiceStub.prototype.validator = validateBadgeServiceRequest;
  BadgeServiceProxy.prototype.validator = null;
  exports.BadgeService = BadgeService;
  exports.BadgeServicePtr = BadgeServicePtr;
  exports.BadgeServiceAssociatedPtr = BadgeServiceAssociatedPtr;
})();