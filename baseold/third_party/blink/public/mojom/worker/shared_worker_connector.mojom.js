// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/shared_worker_connector.mojom';
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
  var blob_url_store$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/blob_url_store.mojom', '../blob/blob_url_store.mojom.js');
  }
  var shared_worker_client$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/worker/shared_worker_client.mojom', 'shared_worker_client.mojom.js');
  }
  var shared_worker_creation_context_type$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/worker/shared_worker_creation_context_type.mojom', 'shared_worker_creation_context_type.mojom.js');
  }
  var shared_worker_info$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/worker/shared_worker_info.mojom', 'shared_worker_info.mojom.js');
  }



  function SharedWorkerConnector_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedWorkerConnector_Connect_Params.prototype.initDefaults_ = function() {
    this.info = null;
    this.client = new shared_worker_client$.SharedWorkerClientPtr();
    this.creationContextType = 0;
    this.messagePort = null;
    this.blobUrlToken = new blob_url_store$.BlobURLTokenPtr();
  };
  SharedWorkerConnector_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedWorkerConnector_Connect_Params.validate = function(messageValidator, offset) {
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


    // validate SharedWorkerConnector_Connect_Params.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_worker_info$.SharedWorkerInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerConnector_Connect_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerConnector_Connect_Params.creationContextType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, shared_worker_creation_context_type$.SharedWorkerCreationContextType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerConnector_Connect_Params.messagePort
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 20, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerConnector_Connect_Params.blobUrlToken
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedWorkerConnector_Connect_Params.encodedSize = codec.kStructHeaderSize + 32;

  SharedWorkerConnector_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new SharedWorkerConnector_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(shared_worker_info$.SharedWorkerInfo);
    val.client = decoder.decodeStruct(new codec.Interface(shared_worker_client$.SharedWorkerClientPtr));
    val.creationContextType = decoder.decodeStruct(codec.Int32);
    val.messagePort = decoder.decodeStruct(codec.Handle);
    val.blobUrlToken = decoder.decodeStruct(new codec.NullableInterface(blob_url_store$.BlobURLTokenPtr));
    return val;
  };

  SharedWorkerConnector_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedWorkerConnector_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_worker_info$.SharedWorkerInfo, val.info);
    encoder.encodeStruct(new codec.Interface(shared_worker_client$.SharedWorkerClientPtr), val.client);
    encoder.encodeStruct(codec.Int32, val.creationContextType);
    encoder.encodeStruct(codec.Handle, val.messagePort);
    encoder.encodeStruct(new codec.NullableInterface(blob_url_store$.BlobURLTokenPtr), val.blobUrlToken);
  };
  var kSharedWorkerConnector_Connect_Name = 0;

  function SharedWorkerConnectorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SharedWorkerConnector,
                                                   handleOrPtrInfo);
  }

  function SharedWorkerConnectorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SharedWorkerConnector, associatedInterfacePtrInfo);
  }

  SharedWorkerConnectorAssociatedPtr.prototype =
      Object.create(SharedWorkerConnectorPtr.prototype);
  SharedWorkerConnectorAssociatedPtr.prototype.constructor =
      SharedWorkerConnectorAssociatedPtr;

  function SharedWorkerConnectorProxy(receiver) {
    this.receiver_ = receiver;
  }
  SharedWorkerConnectorPtr.prototype.connect = function() {
    return SharedWorkerConnectorProxy.prototype.connect
        .apply(this.ptr.getProxy(), arguments);
  };

  SharedWorkerConnectorProxy.prototype.connect = function(info, client, creationContextType, messagePort, blobUrlToken) {
    var params_ = new SharedWorkerConnector_Connect_Params();
    params_.info = info;
    params_.client = client;
    params_.creationContextType = creationContextType;
    params_.messagePort = messagePort;
    params_.blobUrlToken = blobUrlToken;
    var builder = new codec.MessageV0Builder(
        kSharedWorkerConnector_Connect_Name,
        codec.align(SharedWorkerConnector_Connect_Params.encodedSize));
    builder.encodeStruct(SharedWorkerConnector_Connect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SharedWorkerConnectorStub(delegate) {
    this.delegate_ = delegate;
  }
  SharedWorkerConnectorStub.prototype.connect = function(info, client, creationContextType, messagePort, blobUrlToken) {
    return this.delegate_ && this.delegate_.connect && this.delegate_.connect(info, client, creationContextType, messagePort, blobUrlToken);
  }

  SharedWorkerConnectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSharedWorkerConnector_Connect_Name:
      var params = reader.decodeStruct(SharedWorkerConnector_Connect_Params);
      this.connect(params.info, params.client, params.creationContextType, params.messagePort, params.blobUrlToken);
      return true;
    default:
      return false;
    }
  };

  SharedWorkerConnectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSharedWorkerConnectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSharedWorkerConnector_Connect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharedWorkerConnector_Connect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSharedWorkerConnectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SharedWorkerConnector = {
    name: 'blink.mojom.SharedWorkerConnector',
    kVersion: 0,
    ptrClass: SharedWorkerConnectorPtr,
    proxyClass: SharedWorkerConnectorProxy,
    stubClass: SharedWorkerConnectorStub,
    validateRequest: validateSharedWorkerConnectorRequest,
    validateResponse: null,
  };
  SharedWorkerConnectorStub.prototype.validator = validateSharedWorkerConnectorRequest;
  SharedWorkerConnectorProxy.prototype.validator = null;
  exports.SharedWorkerConnector = SharedWorkerConnector;
  exports.SharedWorkerConnectorPtr = SharedWorkerConnectorPtr;
  exports.SharedWorkerConnectorAssociatedPtr = SharedWorkerConnectorAssociatedPtr;
})();