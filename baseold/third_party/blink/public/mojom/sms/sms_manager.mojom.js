// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/sms/sms_manager.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var SmsStatus = {};
  SmsStatus.kSuccess = 0;
  SmsStatus.kTimeout = SmsStatus.kSuccess + 1;
  SmsStatus.MIN_VALUE = 0,
  SmsStatus.MAX_VALUE = 1,

  SmsStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SmsStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SmsMessage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmsMessage.prototype.initDefaults_ = function() {
    this.status = 0;
    this.content = null;
  };
  SmsMessage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmsMessage.validate = function(messageValidator, offset) {
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


    // validate SmsMessage.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SmsStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SmsMessage.content
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmsMessage.encodedSize = codec.kStructHeaderSize + 16;

  SmsMessage.decode = function(decoder) {
    var packed;
    var val = new SmsMessage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.content = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  SmsMessage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmsMessage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.content);
  };
  function SmsManager_GetNextMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmsManager_GetNextMessage_Params.prototype.initDefaults_ = function() {
    this.timeout = null;
  };
  SmsManager_GetNextMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmsManager_GetNextMessage_Params.validate = function(messageValidator, offset) {
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


    // validate SmsManager_GetNextMessage_Params.timeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmsManager_GetNextMessage_Params.encodedSize = codec.kStructHeaderSize + 8;

  SmsManager_GetNextMessage_Params.decode = function(decoder) {
    var packed;
    var val = new SmsManager_GetNextMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timeout = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  SmsManager_GetNextMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmsManager_GetNextMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeout);
  };
  function SmsManager_GetNextMessage_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmsManager_GetNextMessage_ResponseParams.prototype.initDefaults_ = function() {
    this.sms = null;
  };
  SmsManager_GetNextMessage_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmsManager_GetNextMessage_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SmsManager_GetNextMessage_ResponseParams.sms
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SmsMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmsManager_GetNextMessage_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SmsManager_GetNextMessage_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SmsManager_GetNextMessage_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sms = decoder.decodeStructPointer(SmsMessage);
    return val;
  };

  SmsManager_GetNextMessage_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmsManager_GetNextMessage_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SmsMessage, val.sms);
  };
  var kSmsManager_GetNextMessage_Name = 0;

  function SmsManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SmsManager,
                                                   handleOrPtrInfo);
  }

  function SmsManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SmsManager, associatedInterfacePtrInfo);
  }

  SmsManagerAssociatedPtr.prototype =
      Object.create(SmsManagerPtr.prototype);
  SmsManagerAssociatedPtr.prototype.constructor =
      SmsManagerAssociatedPtr;

  function SmsManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  SmsManagerPtr.prototype.getNextMessage = function() {
    return SmsManagerProxy.prototype.getNextMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  SmsManagerProxy.prototype.getNextMessage = function(timeout) {
    var params_ = new SmsManager_GetNextMessage_Params();
    params_.timeout = timeout;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSmsManager_GetNextMessage_Name,
          codec.align(SmsManager_GetNextMessage_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SmsManager_GetNextMessage_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SmsManager_GetNextMessage_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SmsManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  SmsManagerStub.prototype.getNextMessage = function(timeout) {
    return this.delegate_ && this.delegate_.getNextMessage && this.delegate_.getNextMessage(timeout);
  }

  SmsManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SmsManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmsManager_GetNextMessage_Name:
      var params = reader.decodeStruct(SmsManager_GetNextMessage_Params);
      this.getNextMessage(params.timeout).then(function(response) {
        var responseParams =
            new SmsManager_GetNextMessage_ResponseParams();
        responseParams.sms = response.sms;
        var builder = new codec.MessageV1Builder(
            kSmsManager_GetNextMessage_Name,
            codec.align(SmsManager_GetNextMessage_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SmsManager_GetNextMessage_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSmsManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSmsManager_GetNextMessage_Name:
        if (message.expectsResponse())
          paramsClass = SmsManager_GetNextMessage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSmsManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSmsManager_GetNextMessage_Name:
        if (message.isResponse())
          paramsClass = SmsManager_GetNextMessage_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SmsManager = {
    name: 'blink.mojom.SmsManager',
    kVersion: 0,
    ptrClass: SmsManagerPtr,
    proxyClass: SmsManagerProxy,
    stubClass: SmsManagerStub,
    validateRequest: validateSmsManagerRequest,
    validateResponse: validateSmsManagerResponse,
  };
  SmsManagerStub.prototype.validator = validateSmsManagerRequest;
  SmsManagerProxy.prototype.validator = validateSmsManagerResponse;
  exports.SmsStatus = SmsStatus;
  exports.SmsMessage = SmsMessage;
  exports.SmsManager = SmsManager;
  exports.SmsManagerPtr = SmsManagerPtr;
  exports.SmsManagerAssociatedPtr = SmsManagerAssociatedPtr;
})();