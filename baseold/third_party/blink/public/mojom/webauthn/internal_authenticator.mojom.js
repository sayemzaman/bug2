// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/webauthn/internal_authenticator.mojom';
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
  var authenticator$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/webauthn/authenticator.mojom', 'authenticator.mojom.js');
  }



  function InternalAuthenticator_MakeCredential_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InternalAuthenticator_MakeCredential_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  InternalAuthenticator_MakeCredential_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InternalAuthenticator_MakeCredential_Params.validate = function(messageValidator, offset) {
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


    // validate InternalAuthenticator_MakeCredential_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, authenticator$.PublicKeyCredentialCreationOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InternalAuthenticator_MakeCredential_Params.encodedSize = codec.kStructHeaderSize + 8;

  InternalAuthenticator_MakeCredential_Params.decode = function(decoder) {
    var packed;
    var val = new InternalAuthenticator_MakeCredential_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(authenticator$.PublicKeyCredentialCreationOptions);
    return val;
  };

  InternalAuthenticator_MakeCredential_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InternalAuthenticator_MakeCredential_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(authenticator$.PublicKeyCredentialCreationOptions, val.options);
  };
  function InternalAuthenticator_MakeCredential_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InternalAuthenticator_MakeCredential_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.credential = null;
  };
  InternalAuthenticator_MakeCredential_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InternalAuthenticator_MakeCredential_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate InternalAuthenticator_MakeCredential_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, authenticator$.AuthenticatorStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate InternalAuthenticator_MakeCredential_ResponseParams.credential
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, authenticator$.MakeCredentialAuthenticatorResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InternalAuthenticator_MakeCredential_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  InternalAuthenticator_MakeCredential_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new InternalAuthenticator_MakeCredential_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.credential = decoder.decodeStructPointer(authenticator$.MakeCredentialAuthenticatorResponse);
    return val;
  };

  InternalAuthenticator_MakeCredential_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InternalAuthenticator_MakeCredential_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(authenticator$.MakeCredentialAuthenticatorResponse, val.credential);
  };
  function InternalAuthenticator_GetAssertion_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InternalAuthenticator_GetAssertion_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  InternalAuthenticator_GetAssertion_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InternalAuthenticator_GetAssertion_Params.validate = function(messageValidator, offset) {
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


    // validate InternalAuthenticator_GetAssertion_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, authenticator$.PublicKeyCredentialRequestOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InternalAuthenticator_GetAssertion_Params.encodedSize = codec.kStructHeaderSize + 8;

  InternalAuthenticator_GetAssertion_Params.decode = function(decoder) {
    var packed;
    var val = new InternalAuthenticator_GetAssertion_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(authenticator$.PublicKeyCredentialRequestOptions);
    return val;
  };

  InternalAuthenticator_GetAssertion_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InternalAuthenticator_GetAssertion_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(authenticator$.PublicKeyCredentialRequestOptions, val.options);
  };
  function InternalAuthenticator_GetAssertion_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InternalAuthenticator_GetAssertion_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.credential = null;
  };
  InternalAuthenticator_GetAssertion_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InternalAuthenticator_GetAssertion_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate InternalAuthenticator_GetAssertion_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, authenticator$.AuthenticatorStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate InternalAuthenticator_GetAssertion_ResponseParams.credential
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, authenticator$.GetAssertionAuthenticatorResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InternalAuthenticator_GetAssertion_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  InternalAuthenticator_GetAssertion_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new InternalAuthenticator_GetAssertion_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.credential = decoder.decodeStructPointer(authenticator$.GetAssertionAuthenticatorResponse);
    return val;
  };

  InternalAuthenticator_GetAssertion_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InternalAuthenticator_GetAssertion_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(authenticator$.GetAssertionAuthenticatorResponse, val.credential);
  };
  function InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.prototype.initDefaults_ = function() {
  };
  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.validate = function(messageValidator, offset) {
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

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encodedSize = codec.kStructHeaderSize + 0;

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.decode = function(decoder) {
    var packed;
    var val = new InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.prototype.initDefaults_ = function() {
    this.available = false;
  };
  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.validate = function(messageValidator, offset) {
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

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.available = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.available & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kInternalAuthenticator_MakeCredential_Name = 0;
  var kInternalAuthenticator_GetAssertion_Name = 1;
  var kInternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name = 2;

  function InternalAuthenticatorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(InternalAuthenticator,
                                                   handleOrPtrInfo);
  }

  function InternalAuthenticatorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        InternalAuthenticator, associatedInterfacePtrInfo);
  }

  InternalAuthenticatorAssociatedPtr.prototype =
      Object.create(InternalAuthenticatorPtr.prototype);
  InternalAuthenticatorAssociatedPtr.prototype.constructor =
      InternalAuthenticatorAssociatedPtr;

  function InternalAuthenticatorProxy(receiver) {
    this.receiver_ = receiver;
  }
  InternalAuthenticatorPtr.prototype.makeCredential = function() {
    return InternalAuthenticatorProxy.prototype.makeCredential
        .apply(this.ptr.getProxy(), arguments);
  };

  InternalAuthenticatorProxy.prototype.makeCredential = function(options) {
    var params_ = new InternalAuthenticator_MakeCredential_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kInternalAuthenticator_MakeCredential_Name,
          codec.align(InternalAuthenticator_MakeCredential_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(InternalAuthenticator_MakeCredential_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(InternalAuthenticator_MakeCredential_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  InternalAuthenticatorPtr.prototype.getAssertion = function() {
    return InternalAuthenticatorProxy.prototype.getAssertion
        .apply(this.ptr.getProxy(), arguments);
  };

  InternalAuthenticatorProxy.prototype.getAssertion = function(options) {
    var params_ = new InternalAuthenticator_GetAssertion_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kInternalAuthenticator_GetAssertion_Name,
          codec.align(InternalAuthenticator_GetAssertion_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(InternalAuthenticator_GetAssertion_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(InternalAuthenticator_GetAssertion_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  InternalAuthenticatorPtr.prototype.isUserVerifyingPlatformAuthenticatorAvailable = function() {
    return InternalAuthenticatorProxy.prototype.isUserVerifyingPlatformAuthenticatorAvailable
        .apply(this.ptr.getProxy(), arguments);
  };

  InternalAuthenticatorProxy.prototype.isUserVerifyingPlatformAuthenticatorAvailable = function() {
    var params_ = new InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kInternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name,
          codec.align(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function InternalAuthenticatorStub(delegate) {
    this.delegate_ = delegate;
  }
  InternalAuthenticatorStub.prototype.makeCredential = function(options) {
    return this.delegate_ && this.delegate_.makeCredential && this.delegate_.makeCredential(options);
  }
  InternalAuthenticatorStub.prototype.getAssertion = function(options) {
    return this.delegate_ && this.delegate_.getAssertion && this.delegate_.getAssertion(options);
  }
  InternalAuthenticatorStub.prototype.isUserVerifyingPlatformAuthenticatorAvailable = function() {
    return this.delegate_ && this.delegate_.isUserVerifyingPlatformAuthenticatorAvailable && this.delegate_.isUserVerifyingPlatformAuthenticatorAvailable();
  }

  InternalAuthenticatorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  InternalAuthenticatorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kInternalAuthenticator_MakeCredential_Name:
      var params = reader.decodeStruct(InternalAuthenticator_MakeCredential_Params);
      this.makeCredential(params.options).then(function(response) {
        var responseParams =
            new InternalAuthenticator_MakeCredential_ResponseParams();
        responseParams.status = response.status;
        responseParams.credential = response.credential;
        var builder = new codec.MessageV1Builder(
            kInternalAuthenticator_MakeCredential_Name,
            codec.align(InternalAuthenticator_MakeCredential_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(InternalAuthenticator_MakeCredential_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kInternalAuthenticator_GetAssertion_Name:
      var params = reader.decodeStruct(InternalAuthenticator_GetAssertion_Params);
      this.getAssertion(params.options).then(function(response) {
        var responseParams =
            new InternalAuthenticator_GetAssertion_ResponseParams();
        responseParams.status = response.status;
        responseParams.credential = response.credential;
        var builder = new codec.MessageV1Builder(
            kInternalAuthenticator_GetAssertion_Name,
            codec.align(InternalAuthenticator_GetAssertion_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(InternalAuthenticator_GetAssertion_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kInternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name:
      var params = reader.decodeStruct(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params);
      this.isUserVerifyingPlatformAuthenticatorAvailable().then(function(response) {
        var responseParams =
            new InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams();
        responseParams.available = response.available;
        var builder = new codec.MessageV1Builder(
            kInternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name,
            codec.align(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateInternalAuthenticatorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kInternalAuthenticator_MakeCredential_Name:
        if (message.expectsResponse())
          paramsClass = InternalAuthenticator_MakeCredential_Params;
      break;
      case kInternalAuthenticator_GetAssertion_Name:
        if (message.expectsResponse())
          paramsClass = InternalAuthenticator_GetAssertion_Params;
      break;
      case kInternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name:
        if (message.expectsResponse())
          paramsClass = InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateInternalAuthenticatorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kInternalAuthenticator_MakeCredential_Name:
        if (message.isResponse())
          paramsClass = InternalAuthenticator_MakeCredential_ResponseParams;
        break;
      case kInternalAuthenticator_GetAssertion_Name:
        if (message.isResponse())
          paramsClass = InternalAuthenticator_GetAssertion_ResponseParams;
        break;
      case kInternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name:
        if (message.isResponse())
          paramsClass = InternalAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var InternalAuthenticator = {
    name: 'blink.mojom.InternalAuthenticator',
    kVersion: 0,
    ptrClass: InternalAuthenticatorPtr,
    proxyClass: InternalAuthenticatorProxy,
    stubClass: InternalAuthenticatorStub,
    validateRequest: validateInternalAuthenticatorRequest,
    validateResponse: validateInternalAuthenticatorResponse,
  };
  InternalAuthenticatorStub.prototype.validator = validateInternalAuthenticatorRequest;
  InternalAuthenticatorProxy.prototype.validator = validateInternalAuthenticatorResponse;
  exports.InternalAuthenticator = InternalAuthenticator;
  exports.InternalAuthenticatorPtr = InternalAuthenticatorPtr;
  exports.InternalAuthenticatorAssociatedPtr = InternalAuthenticatorAssociatedPtr;
})();