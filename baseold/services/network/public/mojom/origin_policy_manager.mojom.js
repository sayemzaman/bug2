// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/origin_policy_manager.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }


  var OriginPolicyState = {};
  OriginPolicyState.kLoaded = 0;
  OriginPolicyState.kCannotLoadPolicy = OriginPolicyState.kLoaded + 1;
  OriginPolicyState.kInvalidRedirect = OriginPolicyState.kCannotLoadPolicy + 1;
  OriginPolicyState.kNoPolicyApplies = OriginPolicyState.kInvalidRedirect + 1;
  OriginPolicyState.kOther = OriginPolicyState.kNoPolicyApplies + 1;
  OriginPolicyState.MIN_VALUE = 0,
  OriginPolicyState.MAX_VALUE = 4,

  OriginPolicyState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  OriginPolicyState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function OriginPolicyContents(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicyContents.prototype.initDefaults_ = function() {
    this.rawPolicy = null;
  };
  OriginPolicyContents.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicyContents.validate = function(messageValidator, offset) {
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


    // validate OriginPolicyContents.rawPolicy
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicyContents.encodedSize = codec.kStructHeaderSize + 8;

  OriginPolicyContents.decode = function(decoder) {
    var packed;
    var val = new OriginPolicyContents();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rawPolicy = decoder.decodeStruct(codec.String);
    return val;
  };

  OriginPolicyContents.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicyContents.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.rawPolicy);
  };
  function OriginPolicy(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicy.prototype.initDefaults_ = function() {
    this.state = 0;
    this.policyUrl = null;
    this.contents = null;
  };
  OriginPolicy.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicy.validate = function(messageValidator, offset) {
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


    // validate OriginPolicy.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, OriginPolicyState);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicy.policyUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicy.contents
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, OriginPolicyContents, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicy.encodedSize = codec.kStructHeaderSize + 24;

  OriginPolicy.decode = function(decoder) {
    var packed;
    var val = new OriginPolicy();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.policyUrl = decoder.decodeStructPointer(url$.Url);
    val.contents = decoder.decodeStructPointer(OriginPolicyContents);
    return val;
  };

  OriginPolicy.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicy.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.policyUrl);
    encoder.encodeStructPointer(OriginPolicyContents, val.contents);
  };
  function OriginPolicyManager_RetrieveOriginPolicy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicyManager_RetrieveOriginPolicy_Params.prototype.initDefaults_ = function() {
    this.origin = null;
    this.headerValue = null;
  };
  OriginPolicyManager_RetrieveOriginPolicy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicyManager_RetrieveOriginPolicy_Params.validate = function(messageValidator, offset) {
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


    // validate OriginPolicyManager_RetrieveOriginPolicy_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicyManager_RetrieveOriginPolicy_Params.headerValue
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicyManager_RetrieveOriginPolicy_Params.encodedSize = codec.kStructHeaderSize + 16;

  OriginPolicyManager_RetrieveOriginPolicy_Params.decode = function(decoder) {
    var packed;
    var val = new OriginPolicyManager_RetrieveOriginPolicy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.headerValue = decoder.decodeStruct(codec.String);
    return val;
  };

  OriginPolicyManager_RetrieveOriginPolicy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicyManager_RetrieveOriginPolicy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.String, val.headerValue);
  };
  function OriginPolicyManager_RetrieveOriginPolicy_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.prototype.initDefaults_ = function() {
    this.originPolicy = null;
  };
  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.originPolicy
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, OriginPolicy, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new OriginPolicyManager_RetrieveOriginPolicy_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.originPolicy = decoder.decodeStructPointer(OriginPolicy);
    return val;
  };

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(OriginPolicy, val.originPolicy);
  };
  var kOriginPolicyManager_RetrieveOriginPolicy_Name = 0;

  function OriginPolicyManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OriginPolicyManager,
                                                   handleOrPtrInfo);
  }

  function OriginPolicyManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OriginPolicyManager, associatedInterfacePtrInfo);
  }

  OriginPolicyManagerAssociatedPtr.prototype =
      Object.create(OriginPolicyManagerPtr.prototype);
  OriginPolicyManagerAssociatedPtr.prototype.constructor =
      OriginPolicyManagerAssociatedPtr;

  function OriginPolicyManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  OriginPolicyManagerPtr.prototype.retrieveOriginPolicy = function() {
    return OriginPolicyManagerProxy.prototype.retrieveOriginPolicy
        .apply(this.ptr.getProxy(), arguments);
  };

  OriginPolicyManagerProxy.prototype.retrieveOriginPolicy = function(origin, headerValue) {
    var params_ = new OriginPolicyManager_RetrieveOriginPolicy_Params();
    params_.origin = origin;
    params_.headerValue = headerValue;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kOriginPolicyManager_RetrieveOriginPolicy_Name,
          codec.align(OriginPolicyManager_RetrieveOriginPolicy_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(OriginPolicyManager_RetrieveOriginPolicy_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function OriginPolicyManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  OriginPolicyManagerStub.prototype.retrieveOriginPolicy = function(origin, headerValue) {
    return this.delegate_ && this.delegate_.retrieveOriginPolicy && this.delegate_.retrieveOriginPolicy(origin, headerValue);
  }

  OriginPolicyManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  OriginPolicyManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOriginPolicyManager_RetrieveOriginPolicy_Name:
      var params = reader.decodeStruct(OriginPolicyManager_RetrieveOriginPolicy_Params);
      this.retrieveOriginPolicy(params.origin, params.headerValue).then(function(response) {
        var responseParams =
            new OriginPolicyManager_RetrieveOriginPolicy_ResponseParams();
        responseParams.originPolicy = response.originPolicy;
        var builder = new codec.MessageV1Builder(
            kOriginPolicyManager_RetrieveOriginPolicy_Name,
            codec.align(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateOriginPolicyManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOriginPolicyManager_RetrieveOriginPolicy_Name:
        if (message.expectsResponse())
          paramsClass = OriginPolicyManager_RetrieveOriginPolicy_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOriginPolicyManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kOriginPolicyManager_RetrieveOriginPolicy_Name:
        if (message.isResponse())
          paramsClass = OriginPolicyManager_RetrieveOriginPolicy_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var OriginPolicyManager = {
    name: 'network.mojom.OriginPolicyManager',
    kVersion: 0,
    ptrClass: OriginPolicyManagerPtr,
    proxyClass: OriginPolicyManagerProxy,
    stubClass: OriginPolicyManagerStub,
    validateRequest: validateOriginPolicyManagerRequest,
    validateResponse: validateOriginPolicyManagerResponse,
  };
  OriginPolicyManagerStub.prototype.validator = validateOriginPolicyManagerRequest;
  OriginPolicyManagerProxy.prototype.validator = validateOriginPolicyManagerResponse;
  exports.OriginPolicyState = OriginPolicyState;
  exports.OriginPolicyContents = OriginPolicyContents;
  exports.OriginPolicy = OriginPolicy;
  exports.OriginPolicyManager = OriginPolicyManager;
  exports.OriginPolicyManagerPtr = OriginPolicyManagerPtr;
  exports.OriginPolicyManagerAssociatedPtr = OriginPolicyManagerAssociatedPtr;
})();