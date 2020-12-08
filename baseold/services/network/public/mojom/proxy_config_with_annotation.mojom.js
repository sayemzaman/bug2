// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/proxy_config_with_annotation.mojom';
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
  var mutable_network_traffic_annotation_tag$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom', 'mutable_network_traffic_annotation_tag.mojom.js');
  }
  var proxy_config$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/proxy_config.mojom', 'proxy_config.mojom.js');
  }



  function ProxyConfigWithAnnotation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyConfigWithAnnotation.prototype.initDefaults_ = function() {
    this.value = null;
    this.trafficAnnotation = null;
  };
  ProxyConfigWithAnnotation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyConfigWithAnnotation.validate = function(messageValidator, offset) {
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


    // validate ProxyConfigWithAnnotation.value
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, proxy_config$.ProxyConfig, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyConfigWithAnnotation.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyConfigWithAnnotation.encodedSize = codec.kStructHeaderSize + 16;

  ProxyConfigWithAnnotation.decode = function(decoder) {
    var packed;
    var val = new ProxyConfigWithAnnotation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStructPointer(proxy_config$.ProxyConfig);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    return val;
  };

  ProxyConfigWithAnnotation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyConfigWithAnnotation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(proxy_config$.ProxyConfig, val.value);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
  };
  function ProxyConfigClient_OnProxyConfigUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyConfigClient_OnProxyConfigUpdated_Params.prototype.initDefaults_ = function() {
    this.proxyConfig = null;
  };
  ProxyConfigClient_OnProxyConfigUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyConfigClient_OnProxyConfigUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate ProxyConfigClient_OnProxyConfigUpdated_Params.proxyConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ProxyConfigWithAnnotation, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyConfigClient_OnProxyConfigUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  ProxyConfigClient_OnProxyConfigUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyConfigClient_OnProxyConfigUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.proxyConfig = decoder.decodeStructPointer(ProxyConfigWithAnnotation);
    return val;
  };

  ProxyConfigClient_OnProxyConfigUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyConfigClient_OnProxyConfigUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ProxyConfigWithAnnotation, val.proxyConfig);
  };
  function ProxyConfigClient_FlushProxyConfig_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyConfigClient_FlushProxyConfig_Params.prototype.initDefaults_ = function() {
  };
  ProxyConfigClient_FlushProxyConfig_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyConfigClient_FlushProxyConfig_Params.validate = function(messageValidator, offset) {
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

  ProxyConfigClient_FlushProxyConfig_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProxyConfigClient_FlushProxyConfig_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyConfigClient_FlushProxyConfig_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProxyConfigClient_FlushProxyConfig_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyConfigClient_FlushProxyConfig_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProxyConfigClient_FlushProxyConfig_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyConfigClient_FlushProxyConfig_ResponseParams.prototype.initDefaults_ = function() {
  };
  ProxyConfigClient_FlushProxyConfig_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyConfigClient_FlushProxyConfig_ResponseParams.validate = function(messageValidator, offset) {
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

  ProxyConfigClient_FlushProxyConfig_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  ProxyConfigClient_FlushProxyConfig_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProxyConfigClient_FlushProxyConfig_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProxyConfigClient_FlushProxyConfig_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyConfigClient_FlushProxyConfig_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.prototype.initDefaults_ = function() {
  };
  ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.validate = function(messageValidator, offset) {
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

  ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProxyErrorClient_OnPACScriptError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyErrorClient_OnPACScriptError_Params.prototype.initDefaults_ = function() {
    this.lineNumber = 0;
    this.details = null;
  };
  ProxyErrorClient_OnPACScriptError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyErrorClient_OnPACScriptError_Params.validate = function(messageValidator, offset) {
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



    // validate ProxyErrorClient_OnPACScriptError_Params.details
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyErrorClient_OnPACScriptError_Params.encodedSize = codec.kStructHeaderSize + 16;

  ProxyErrorClient_OnPACScriptError_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyErrorClient_OnPACScriptError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.lineNumber = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.details = decoder.decodeStruct(codec.String);
    return val;
  };

  ProxyErrorClient_OnPACScriptError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyErrorClient_OnPACScriptError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.lineNumber);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.details);
  };
  function ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.validate = function(messageValidator, offset) {
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

  ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.encodedSize = codec.kStructHeaderSize + 8;

  ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kProxyConfigClient_OnProxyConfigUpdated_Name = 0;
  var kProxyConfigClient_FlushProxyConfig_Name = 1;

  function ProxyConfigClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProxyConfigClient,
                                                   handleOrPtrInfo);
  }

  function ProxyConfigClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProxyConfigClient, associatedInterfacePtrInfo);
  }

  ProxyConfigClientAssociatedPtr.prototype =
      Object.create(ProxyConfigClientPtr.prototype);
  ProxyConfigClientAssociatedPtr.prototype.constructor =
      ProxyConfigClientAssociatedPtr;

  function ProxyConfigClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProxyConfigClientPtr.prototype.onProxyConfigUpdated = function() {
    return ProxyConfigClientProxy.prototype.onProxyConfigUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyConfigClientProxy.prototype.onProxyConfigUpdated = function(proxyConfig) {
    var params_ = new ProxyConfigClient_OnProxyConfigUpdated_Params();
    params_.proxyConfig = proxyConfig;
    var builder = new codec.MessageV0Builder(
        kProxyConfigClient_OnProxyConfigUpdated_Name,
        codec.align(ProxyConfigClient_OnProxyConfigUpdated_Params.encodedSize));
    builder.encodeStruct(ProxyConfigClient_OnProxyConfigUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ProxyConfigClientPtr.prototype.flushProxyConfig = function() {
    return ProxyConfigClientProxy.prototype.flushProxyConfig
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyConfigClientProxy.prototype.flushProxyConfig = function() {
    var params_ = new ProxyConfigClient_FlushProxyConfig_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProxyConfigClient_FlushProxyConfig_Name,
          codec.align(ProxyConfigClient_FlushProxyConfig_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProxyConfigClient_FlushProxyConfig_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProxyConfigClient_FlushProxyConfig_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProxyConfigClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ProxyConfigClientStub.prototype.onProxyConfigUpdated = function(proxyConfig) {
    return this.delegate_ && this.delegate_.onProxyConfigUpdated && this.delegate_.onProxyConfigUpdated(proxyConfig);
  }
  ProxyConfigClientStub.prototype.flushProxyConfig = function() {
    return this.delegate_ && this.delegate_.flushProxyConfig && this.delegate_.flushProxyConfig();
  }

  ProxyConfigClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyConfigClient_OnProxyConfigUpdated_Name:
      var params = reader.decodeStruct(ProxyConfigClient_OnProxyConfigUpdated_Params);
      this.onProxyConfigUpdated(params.proxyConfig);
      return true;
    default:
      return false;
    }
  };

  ProxyConfigClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyConfigClient_FlushProxyConfig_Name:
      var params = reader.decodeStruct(ProxyConfigClient_FlushProxyConfig_Params);
      this.flushProxyConfig().then(function(response) {
        var responseParams =
            new ProxyConfigClient_FlushProxyConfig_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kProxyConfigClient_FlushProxyConfig_Name,
            codec.align(ProxyConfigClient_FlushProxyConfig_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProxyConfigClient_FlushProxyConfig_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateProxyConfigClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProxyConfigClient_OnProxyConfigUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ProxyConfigClient_OnProxyConfigUpdated_Params;
      break;
      case kProxyConfigClient_FlushProxyConfig_Name:
        if (message.expectsResponse())
          paramsClass = ProxyConfigClient_FlushProxyConfig_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProxyConfigClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProxyConfigClient_FlushProxyConfig_Name:
        if (message.isResponse())
          paramsClass = ProxyConfigClient_FlushProxyConfig_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProxyConfigClient = {
    name: 'network.mojom.ProxyConfigClient',
    kVersion: 0,
    ptrClass: ProxyConfigClientPtr,
    proxyClass: ProxyConfigClientProxy,
    stubClass: ProxyConfigClientStub,
    validateRequest: validateProxyConfigClientRequest,
    validateResponse: validateProxyConfigClientResponse,
  };
  ProxyConfigClientStub.prototype.validator = validateProxyConfigClientRequest;
  ProxyConfigClientProxy.prototype.validator = validateProxyConfigClientResponse;
  var kProxyConfigPollerClient_OnLazyProxyConfigPoll_Name = 0;

  function ProxyConfigPollerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProxyConfigPollerClient,
                                                   handleOrPtrInfo);
  }

  function ProxyConfigPollerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProxyConfigPollerClient, associatedInterfacePtrInfo);
  }

  ProxyConfigPollerClientAssociatedPtr.prototype =
      Object.create(ProxyConfigPollerClientPtr.prototype);
  ProxyConfigPollerClientAssociatedPtr.prototype.constructor =
      ProxyConfigPollerClientAssociatedPtr;

  function ProxyConfigPollerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProxyConfigPollerClientPtr.prototype.onLazyProxyConfigPoll = function() {
    return ProxyConfigPollerClientProxy.prototype.onLazyProxyConfigPoll
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyConfigPollerClientProxy.prototype.onLazyProxyConfigPoll = function() {
    var params_ = new ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params();
    var builder = new codec.MessageV0Builder(
        kProxyConfigPollerClient_OnLazyProxyConfigPoll_Name,
        codec.align(ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params.encodedSize));
    builder.encodeStruct(ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ProxyConfigPollerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ProxyConfigPollerClientStub.prototype.onLazyProxyConfigPoll = function() {
    return this.delegate_ && this.delegate_.onLazyProxyConfigPoll && this.delegate_.onLazyProxyConfigPoll();
  }

  ProxyConfigPollerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyConfigPollerClient_OnLazyProxyConfigPoll_Name:
      var params = reader.decodeStruct(ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params);
      this.onLazyProxyConfigPoll();
      return true;
    default:
      return false;
    }
  };

  ProxyConfigPollerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateProxyConfigPollerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProxyConfigPollerClient_OnLazyProxyConfigPoll_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProxyConfigPollerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ProxyConfigPollerClient = {
    name: 'network.mojom.ProxyConfigPollerClient',
    kVersion: 0,
    ptrClass: ProxyConfigPollerClientPtr,
    proxyClass: ProxyConfigPollerClientProxy,
    stubClass: ProxyConfigPollerClientStub,
    validateRequest: validateProxyConfigPollerClientRequest,
    validateResponse: null,
  };
  ProxyConfigPollerClientStub.prototype.validator = validateProxyConfigPollerClientRequest;
  ProxyConfigPollerClientProxy.prototype.validator = null;
  var kProxyErrorClient_OnPACScriptError_Name = 0;
  var kProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Name = 1;

  function ProxyErrorClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProxyErrorClient,
                                                   handleOrPtrInfo);
  }

  function ProxyErrorClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProxyErrorClient, associatedInterfacePtrInfo);
  }

  ProxyErrorClientAssociatedPtr.prototype =
      Object.create(ProxyErrorClientPtr.prototype);
  ProxyErrorClientAssociatedPtr.prototype.constructor =
      ProxyErrorClientAssociatedPtr;

  function ProxyErrorClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProxyErrorClientPtr.prototype.onPACScriptError = function() {
    return ProxyErrorClientProxy.prototype.onPACScriptError
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyErrorClientProxy.prototype.onPACScriptError = function(lineNumber, details) {
    var params_ = new ProxyErrorClient_OnPACScriptError_Params();
    params_.lineNumber = lineNumber;
    params_.details = details;
    var builder = new codec.MessageV0Builder(
        kProxyErrorClient_OnPACScriptError_Name,
        codec.align(ProxyErrorClient_OnPACScriptError_Params.encodedSize));
    builder.encodeStruct(ProxyErrorClient_OnPACScriptError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ProxyErrorClientPtr.prototype.onRequestMaybeFailedDueToProxySettings = function() {
    return ProxyErrorClientProxy.prototype.onRequestMaybeFailedDueToProxySettings
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyErrorClientProxy.prototype.onRequestMaybeFailedDueToProxySettings = function(netError) {
    var params_ = new ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params();
    params_.netError = netError;
    var builder = new codec.MessageV0Builder(
        kProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Name,
        codec.align(ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params.encodedSize));
    builder.encodeStruct(ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ProxyErrorClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ProxyErrorClientStub.prototype.onPACScriptError = function(lineNumber, details) {
    return this.delegate_ && this.delegate_.onPACScriptError && this.delegate_.onPACScriptError(lineNumber, details);
  }
  ProxyErrorClientStub.prototype.onRequestMaybeFailedDueToProxySettings = function(netError) {
    return this.delegate_ && this.delegate_.onRequestMaybeFailedDueToProxySettings && this.delegate_.onRequestMaybeFailedDueToProxySettings(netError);
  }

  ProxyErrorClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyErrorClient_OnPACScriptError_Name:
      var params = reader.decodeStruct(ProxyErrorClient_OnPACScriptError_Params);
      this.onPACScriptError(params.lineNumber, params.details);
      return true;
    case kProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Name:
      var params = reader.decodeStruct(ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params);
      this.onRequestMaybeFailedDueToProxySettings(params.netError);
      return true;
    default:
      return false;
    }
  };

  ProxyErrorClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateProxyErrorClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProxyErrorClient_OnPACScriptError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ProxyErrorClient_OnPACScriptError_Params;
      break;
      case kProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProxyErrorClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ProxyErrorClient = {
    name: 'network.mojom.ProxyErrorClient',
    kVersion: 0,
    ptrClass: ProxyErrorClientPtr,
    proxyClass: ProxyErrorClientProxy,
    stubClass: ProxyErrorClientStub,
    validateRequest: validateProxyErrorClientRequest,
    validateResponse: null,
  };
  ProxyErrorClientStub.prototype.validator = validateProxyErrorClientRequest;
  ProxyErrorClientProxy.prototype.validator = null;
  exports.ProxyConfigWithAnnotation = ProxyConfigWithAnnotation;
  exports.ProxyConfigClient = ProxyConfigClient;
  exports.ProxyConfigClientPtr = ProxyConfigClientPtr;
  exports.ProxyConfigClientAssociatedPtr = ProxyConfigClientAssociatedPtr;
  exports.ProxyConfigPollerClient = ProxyConfigPollerClient;
  exports.ProxyConfigPollerClientPtr = ProxyConfigPollerClientPtr;
  exports.ProxyConfigPollerClientAssociatedPtr = ProxyConfigPollerClientAssociatedPtr;
  exports.ProxyErrorClient = ProxyErrorClient;
  exports.ProxyErrorClientPtr = ProxyErrorClientPtr;
  exports.ProxyErrorClientAssociatedPtr = ProxyErrorClientAssociatedPtr;
})();