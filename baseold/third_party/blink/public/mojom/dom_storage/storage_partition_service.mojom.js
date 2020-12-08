// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/dom_storage/storage_partition_service.mojom';
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
  var session_storage_namespace$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom', 'session_storage_namespace.mojom.js');
  }
  var storage_area$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/dom_storage/storage_area.mojom', 'storage_area.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }



  function StoragePartitionService_OpenLocalStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StoragePartitionService_OpenLocalStorage_Params.prototype.initDefaults_ = function() {
    this.origin = null;
    this.area = new bindings.InterfaceRequest();
  };
  StoragePartitionService_OpenLocalStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StoragePartitionService_OpenLocalStorage_Params.validate = function(messageValidator, offset) {
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


    // validate StoragePartitionService_OpenLocalStorage_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StoragePartitionService_OpenLocalStorage_Params.area
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StoragePartitionService_OpenLocalStorage_Params.encodedSize = codec.kStructHeaderSize + 16;

  StoragePartitionService_OpenLocalStorage_Params.decode = function(decoder) {
    var packed;
    var val = new StoragePartitionService_OpenLocalStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.area = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StoragePartitionService_OpenLocalStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StoragePartitionService_OpenLocalStorage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.InterfaceRequest, val.area);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function StoragePartitionService_OpenSessionStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StoragePartitionService_OpenSessionStorage_Params.prototype.initDefaults_ = function() {
    this.namespaceId = null;
    this.sessionNamespace = new bindings.InterfaceRequest();
  };
  StoragePartitionService_OpenSessionStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StoragePartitionService_OpenSessionStorage_Params.validate = function(messageValidator, offset) {
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


    // validate StoragePartitionService_OpenSessionStorage_Params.namespaceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate StoragePartitionService_OpenSessionStorage_Params.sessionNamespace
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StoragePartitionService_OpenSessionStorage_Params.encodedSize = codec.kStructHeaderSize + 16;

  StoragePartitionService_OpenSessionStorage_Params.decode = function(decoder) {
    var packed;
    var val = new StoragePartitionService_OpenSessionStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.namespaceId = decoder.decodeStruct(codec.String);
    val.sessionNamespace = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StoragePartitionService_OpenSessionStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StoragePartitionService_OpenSessionStorage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.namespaceId);
    encoder.encodeStruct(codec.InterfaceRequest, val.sessionNamespace);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kStoragePartitionService_OpenLocalStorage_Name = 0;
  var kStoragePartitionService_OpenSessionStorage_Name = 1;

  function StoragePartitionServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(StoragePartitionService,
                                                   handleOrPtrInfo);
  }

  function StoragePartitionServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        StoragePartitionService, associatedInterfacePtrInfo);
  }

  StoragePartitionServiceAssociatedPtr.prototype =
      Object.create(StoragePartitionServicePtr.prototype);
  StoragePartitionServiceAssociatedPtr.prototype.constructor =
      StoragePartitionServiceAssociatedPtr;

  function StoragePartitionServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  StoragePartitionServicePtr.prototype.openLocalStorage = function() {
    return StoragePartitionServiceProxy.prototype.openLocalStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  StoragePartitionServiceProxy.prototype.openLocalStorage = function(origin, area) {
    var params_ = new StoragePartitionService_OpenLocalStorage_Params();
    params_.origin = origin;
    params_.area = area;
    var builder = new codec.MessageV0Builder(
        kStoragePartitionService_OpenLocalStorage_Name,
        codec.align(StoragePartitionService_OpenLocalStorage_Params.encodedSize));
    builder.encodeStruct(StoragePartitionService_OpenLocalStorage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  StoragePartitionServicePtr.prototype.openSessionStorage = function() {
    return StoragePartitionServiceProxy.prototype.openSessionStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  StoragePartitionServiceProxy.prototype.openSessionStorage = function(namespaceId, sessionNamespace) {
    var params_ = new StoragePartitionService_OpenSessionStorage_Params();
    params_.namespaceId = namespaceId;
    params_.sessionNamespace = sessionNamespace;
    var builder = new codec.MessageV0Builder(
        kStoragePartitionService_OpenSessionStorage_Name,
        codec.align(StoragePartitionService_OpenSessionStorage_Params.encodedSize));
    builder.encodeStruct(StoragePartitionService_OpenSessionStorage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function StoragePartitionServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  StoragePartitionServiceStub.prototype.openLocalStorage = function(origin, area) {
    return this.delegate_ && this.delegate_.openLocalStorage && this.delegate_.openLocalStorage(origin, area);
  }
  StoragePartitionServiceStub.prototype.openSessionStorage = function(namespaceId, sessionNamespace) {
    return this.delegate_ && this.delegate_.openSessionStorage && this.delegate_.openSessionStorage(namespaceId, sessionNamespace);
  }

  StoragePartitionServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStoragePartitionService_OpenLocalStorage_Name:
      var params = reader.decodeStruct(StoragePartitionService_OpenLocalStorage_Params);
      this.openLocalStorage(params.origin, params.area);
      return true;
    case kStoragePartitionService_OpenSessionStorage_Name:
      var params = reader.decodeStruct(StoragePartitionService_OpenSessionStorage_Params);
      this.openSessionStorage(params.namespaceId, params.sessionNamespace);
      return true;
    default:
      return false;
    }
  };

  StoragePartitionServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateStoragePartitionServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kStoragePartitionService_OpenLocalStorage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StoragePartitionService_OpenLocalStorage_Params;
      break;
      case kStoragePartitionService_OpenSessionStorage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StoragePartitionService_OpenSessionStorage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateStoragePartitionServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var StoragePartitionService = {
    name: 'blink.mojom.StoragePartitionService',
    kVersion: 0,
    ptrClass: StoragePartitionServicePtr,
    proxyClass: StoragePartitionServiceProxy,
    stubClass: StoragePartitionServiceStub,
    validateRequest: validateStoragePartitionServiceRequest,
    validateResponse: null,
  };
  StoragePartitionServiceStub.prototype.validator = validateStoragePartitionServiceRequest;
  StoragePartitionServiceProxy.prototype.validator = null;
  exports.StoragePartitionService = StoragePartitionService;
  exports.StoragePartitionServicePtr = StoragePartitionServicePtr;
  exports.StoragePartitionServiceAssociatedPtr = StoragePartitionServiceAssociatedPtr;
})();