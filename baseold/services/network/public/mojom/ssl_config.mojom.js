// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/ssl_config.mojom';
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


  var SSLVersion = {};
  SSLVersion.kTLS1 = 0;
  SSLVersion.kTLS11 = SSLVersion.kTLS1 + 1;
  SSLVersion.kTLS12 = SSLVersion.kTLS11 + 1;
  SSLVersion.kTLS13 = SSLVersion.kTLS12 + 1;
  SSLVersion.MIN_VALUE = 0,
  SSLVersion.MAX_VALUE = 3,

  SSLVersion.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  SSLVersion.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SSLConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SSLConfig.prototype.initDefaults_ = function() {
    this.revCheckingEnabled = false;
    this.revCheckingRequiredLocalAnchors = false;
    this.sha1LocalAnchorsEnabled = false;
    this.symantecEnforcementDisabled = false;
    this.versionMin = SSLVersion.kTLS1;
    this.versionMax = SSLVersion.kTLS13;
    this.disabledCipherSuites = null;
    this.clientCertPoolingPolicy = null;
  };
  SSLConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SSLConfig.validate = function(messageValidator, offset) {
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






    // validate SSLConfig.versionMin
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, SSLVersion);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SSLConfig.versionMax
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, SSLVersion);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SSLConfig.disabledCipherSuites
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 2, codec.Uint16, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SSLConfig.clientCertPoolingPolicy
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SSLConfig.encodedSize = codec.kStructHeaderSize + 32;

  SSLConfig.decode = function(decoder) {
    var packed;
    var val = new SSLConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.revCheckingEnabled = (packed >> 0) & 1 ? true : false;
    val.revCheckingRequiredLocalAnchors = (packed >> 1) & 1 ? true : false;
    val.sha1LocalAnchorsEnabled = (packed >> 2) & 1 ? true : false;
    val.symantecEnforcementDisabled = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.versionMin = decoder.decodeStruct(codec.Int32);
    val.versionMax = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.disabledCipherSuites = decoder.decodeArrayPointer(codec.Uint16);
    val.clientCertPoolingPolicy = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  SSLConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SSLConfig.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.revCheckingEnabled & 1) << 0
    packed |= (val.revCheckingRequiredLocalAnchors & 1) << 1
    packed |= (val.sha1LocalAnchorsEnabled & 1) << 2
    packed |= (val.symantecEnforcementDisabled & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.versionMin);
    encoder.encodeStruct(codec.Int32, val.versionMax);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint16, val.disabledCipherSuites);
    encoder.encodeArrayPointer(codec.String, val.clientCertPoolingPolicy);
  };
  function SSLConfigClient_OnSSLConfigUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SSLConfigClient_OnSSLConfigUpdated_Params.prototype.initDefaults_ = function() {
    this.sslConfig = null;
  };
  SSLConfigClient_OnSSLConfigUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SSLConfigClient_OnSSLConfigUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate SSLConfigClient_OnSSLConfigUpdated_Params.sslConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SSLConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SSLConfigClient_OnSSLConfigUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  SSLConfigClient_OnSSLConfigUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new SSLConfigClient_OnSSLConfigUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sslConfig = decoder.decodeStructPointer(SSLConfig);
    return val;
  };

  SSLConfigClient_OnSSLConfigUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SSLConfigClient_OnSSLConfigUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SSLConfig, val.sslConfig);
  };
  var kSSLConfigClient_OnSSLConfigUpdated_Name = 0;

  function SSLConfigClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SSLConfigClient,
                                                   handleOrPtrInfo);
  }

  function SSLConfigClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SSLConfigClient, associatedInterfacePtrInfo);
  }

  SSLConfigClientAssociatedPtr.prototype =
      Object.create(SSLConfigClientPtr.prototype);
  SSLConfigClientAssociatedPtr.prototype.constructor =
      SSLConfigClientAssociatedPtr;

  function SSLConfigClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  SSLConfigClientPtr.prototype.onSSLConfigUpdated = function() {
    return SSLConfigClientProxy.prototype.onSSLConfigUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  SSLConfigClientProxy.prototype.onSSLConfigUpdated = function(sslConfig) {
    var params_ = new SSLConfigClient_OnSSLConfigUpdated_Params();
    params_.sslConfig = sslConfig;
    var builder = new codec.MessageV0Builder(
        kSSLConfigClient_OnSSLConfigUpdated_Name,
        codec.align(SSLConfigClient_OnSSLConfigUpdated_Params.encodedSize));
    builder.encodeStruct(SSLConfigClient_OnSSLConfigUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SSLConfigClientStub(delegate) {
    this.delegate_ = delegate;
  }
  SSLConfigClientStub.prototype.onSSLConfigUpdated = function(sslConfig) {
    return this.delegate_ && this.delegate_.onSSLConfigUpdated && this.delegate_.onSSLConfigUpdated(sslConfig);
  }

  SSLConfigClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSSLConfigClient_OnSSLConfigUpdated_Name:
      var params = reader.decodeStruct(SSLConfigClient_OnSSLConfigUpdated_Params);
      this.onSSLConfigUpdated(params.sslConfig);
      return true;
    default:
      return false;
    }
  };

  SSLConfigClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSSLConfigClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSSLConfigClient_OnSSLConfigUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SSLConfigClient_OnSSLConfigUpdated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSSLConfigClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SSLConfigClient = {
    name: 'network.mojom.SSLConfigClient',
    kVersion: 0,
    ptrClass: SSLConfigClientPtr,
    proxyClass: SSLConfigClientProxy,
    stubClass: SSLConfigClientStub,
    validateRequest: validateSSLConfigClientRequest,
    validateResponse: null,
  };
  SSLConfigClientStub.prototype.validator = validateSSLConfigClientRequest;
  SSLConfigClientProxy.prototype.validator = null;
  exports.SSLVersion = SSLVersion;
  exports.SSLConfig = SSLConfig;
  exports.SSLConfigClient = SSLConfigClient;
  exports.SSLConfigClientPtr = SSLConfigClientPtr;
  exports.SSLConfigClientAssociatedPtr = SSLConfigClientAssociatedPtr;
})();