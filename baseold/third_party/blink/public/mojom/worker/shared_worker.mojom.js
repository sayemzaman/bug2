// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/shared_worker.mojom';
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
  var devtools_agent$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/devtools/devtools_agent.mojom', '../devtools/devtools_agent.mojom.js');
  }



  function SharedWorker_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedWorker_Connect_Params.prototype.initDefaults_ = function() {
    this.connectionId = 0;
    this.messagePort = null;
  };
  SharedWorker_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedWorker_Connect_Params.validate = function(messageValidator, offset) {
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



    // validate SharedWorker_Connect_Params.messagePort
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedWorker_Connect_Params.encodedSize = codec.kStructHeaderSize + 8;

  SharedWorker_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new SharedWorker_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.connectionId = decoder.decodeStruct(codec.Int32);
    val.messagePort = decoder.decodeStruct(codec.Handle);
    return val;
  };

  SharedWorker_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedWorker_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.connectionId);
    encoder.encodeStruct(codec.Handle, val.messagePort);
  };
  function SharedWorker_Terminate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedWorker_Terminate_Params.prototype.initDefaults_ = function() {
  };
  SharedWorker_Terminate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedWorker_Terminate_Params.validate = function(messageValidator, offset) {
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

  SharedWorker_Terminate_Params.encodedSize = codec.kStructHeaderSize + 0;

  SharedWorker_Terminate_Params.decode = function(decoder) {
    var packed;
    var val = new SharedWorker_Terminate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SharedWorker_Terminate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedWorker_Terminate_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SharedWorker_BindDevToolsAgent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedWorker_BindDevToolsAgent_Params.prototype.initDefaults_ = function() {
    this.agentHost = new associatedBindings.AssociatedInterfacePtrInfo();
    this.agent = new associatedBindings.AssociatedInterfaceRequest();
  };
  SharedWorker_BindDevToolsAgent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedWorker_BindDevToolsAgent_Params.validate = function(messageValidator, offset) {
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


    // validate SharedWorker_BindDevToolsAgent_Params.agentHost
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorker_BindDevToolsAgent_Params.agent
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedWorker_BindDevToolsAgent_Params.encodedSize = codec.kStructHeaderSize + 16;

  SharedWorker_BindDevToolsAgent_Params.decode = function(decoder) {
    var packed;
    var val = new SharedWorker_BindDevToolsAgent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.agentHost = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    val.agent = decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SharedWorker_BindDevToolsAgent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedWorker_BindDevToolsAgent_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.agentHost);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.agent);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kSharedWorker_Connect_Name = 0;
  var kSharedWorker_Terminate_Name = 1;
  var kSharedWorker_BindDevToolsAgent_Name = 2;

  function SharedWorkerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SharedWorker,
                                                   handleOrPtrInfo);
  }

  function SharedWorkerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SharedWorker, associatedInterfacePtrInfo);
  }

  SharedWorkerAssociatedPtr.prototype =
      Object.create(SharedWorkerPtr.prototype);
  SharedWorkerAssociatedPtr.prototype.constructor =
      SharedWorkerAssociatedPtr;

  function SharedWorkerProxy(receiver) {
    this.receiver_ = receiver;
  }
  SharedWorkerPtr.prototype.connect = function() {
    return SharedWorkerProxy.prototype.connect
        .apply(this.ptr.getProxy(), arguments);
  };

  SharedWorkerProxy.prototype.connect = function(connectionId, messagePort) {
    var params_ = new SharedWorker_Connect_Params();
    params_.connectionId = connectionId;
    params_.messagePort = messagePort;
    var builder = new codec.MessageV0Builder(
        kSharedWorker_Connect_Name,
        codec.align(SharedWorker_Connect_Params.encodedSize));
    builder.encodeStruct(SharedWorker_Connect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SharedWorkerPtr.prototype.terminate = function() {
    return SharedWorkerProxy.prototype.terminate
        .apply(this.ptr.getProxy(), arguments);
  };

  SharedWorkerProxy.prototype.terminate = function() {
    var params_ = new SharedWorker_Terminate_Params();
    var builder = new codec.MessageV0Builder(
        kSharedWorker_Terminate_Name,
        codec.align(SharedWorker_Terminate_Params.encodedSize));
    builder.encodeStruct(SharedWorker_Terminate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SharedWorkerPtr.prototype.bindDevToolsAgent = function() {
    return SharedWorkerProxy.prototype.bindDevToolsAgent
        .apply(this.ptr.getProxy(), arguments);
  };

  SharedWorkerProxy.prototype.bindDevToolsAgent = function(agentHost, agent) {
    var params_ = new SharedWorker_BindDevToolsAgent_Params();
    params_.agentHost = agentHost;
    params_.agent = agent;
    var builder = new codec.MessageV2Builder(
        kSharedWorker_BindDevToolsAgent_Name,
        codec.align(SharedWorker_BindDevToolsAgent_Params.encodedSize));
    builder.setPayload(SharedWorker_BindDevToolsAgent_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SharedWorkerStub(delegate) {
    this.delegate_ = delegate;
  }
  SharedWorkerStub.prototype.connect = function(connectionId, messagePort) {
    return this.delegate_ && this.delegate_.connect && this.delegate_.connect(connectionId, messagePort);
  }
  SharedWorkerStub.prototype.terminate = function() {
    return this.delegate_ && this.delegate_.terminate && this.delegate_.terminate();
  }
  SharedWorkerStub.prototype.bindDevToolsAgent = function(agentHost, agent) {
    return this.delegate_ && this.delegate_.bindDevToolsAgent && this.delegate_.bindDevToolsAgent(agentHost, agent);
  }

  SharedWorkerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSharedWorker_Connect_Name:
      var params = reader.decodeStruct(SharedWorker_Connect_Params);
      this.connect(params.connectionId, params.messagePort);
      return true;
    case kSharedWorker_Terminate_Name:
      var params = reader.decodeStruct(SharedWorker_Terminate_Params);
      this.terminate();
      return true;
    case kSharedWorker_BindDevToolsAgent_Name:
      var params = reader.decodeStruct(SharedWorker_BindDevToolsAgent_Params);
      this.bindDevToolsAgent(params.agentHost, params.agent);
      return true;
    default:
      return false;
    }
  };

  SharedWorkerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSharedWorkerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSharedWorker_Connect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharedWorker_Connect_Params;
      break;
      case kSharedWorker_Terminate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharedWorker_Terminate_Params;
      break;
      case kSharedWorker_BindDevToolsAgent_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharedWorker_BindDevToolsAgent_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSharedWorkerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SharedWorker = {
    name: 'blink.mojom.SharedWorker',
    kVersion: 0,
    ptrClass: SharedWorkerPtr,
    proxyClass: SharedWorkerProxy,
    stubClass: SharedWorkerStub,
    validateRequest: validateSharedWorkerRequest,
    validateResponse: null,
  };
  SharedWorkerStub.prototype.validator = validateSharedWorkerRequest;
  SharedWorkerProxy.prototype.validator = null;
  exports.SharedWorker = SharedWorker;
  exports.SharedWorkerPtr = SharedWorkerPtr;
  exports.SharedWorkerAssociatedPtr = SharedWorkerAssociatedPtr;
})();