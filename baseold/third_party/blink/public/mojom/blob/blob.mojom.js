// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/blob/blob.mojom';
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
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var data_pipe_getter$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/data_pipe_getter.mojom', '../../../../../services/network/public/mojom/data_pipe_getter.mojom.js');
  }
  var http_request_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/http_request_headers.mojom', '../../../../../services/network/public/mojom/http_request_headers.mojom.js');
  }



  function BlobReaderClient_OnCalculatedSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BlobReaderClient_OnCalculatedSize_Params.prototype.initDefaults_ = function() {
    this.totalSize = 0;
    this.expectedContentSize = 0;
  };
  BlobReaderClient_OnCalculatedSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BlobReaderClient_OnCalculatedSize_Params.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  BlobReaderClient_OnCalculatedSize_Params.encodedSize = codec.kStructHeaderSize + 16;

  BlobReaderClient_OnCalculatedSize_Params.decode = function(decoder) {
    var packed;
    var val = new BlobReaderClient_OnCalculatedSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.totalSize = decoder.decodeStruct(codec.Uint64);
    val.expectedContentSize = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  BlobReaderClient_OnCalculatedSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BlobReaderClient_OnCalculatedSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.totalSize);
    encoder.encodeStruct(codec.Uint64, val.expectedContentSize);
  };
  function BlobReaderClient_OnComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BlobReaderClient_OnComplete_Params.prototype.initDefaults_ = function() {
    this.status = 0;
    this.dataLength = 0;
  };
  BlobReaderClient_OnComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BlobReaderClient_OnComplete_Params.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  BlobReaderClient_OnComplete_Params.encodedSize = codec.kStructHeaderSize + 16;

  BlobReaderClient_OnComplete_Params.decode = function(decoder) {
    var packed;
    var val = new BlobReaderClient_OnComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.dataLength = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  BlobReaderClient_OnComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BlobReaderClient_OnComplete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.dataLength);
  };
  function Blob_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_Clone_Params.prototype.initDefaults_ = function() {
    this.blob = new bindings.InterfaceRequest();
  };
  Blob_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate Blob_Clone_Params.blob
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Blob_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  Blob_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new Blob_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.blob = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Blob_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.blob);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Blob_AsDataPipeGetter_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_AsDataPipeGetter_Params.prototype.initDefaults_ = function() {
    this.dataPipeGetter = new bindings.InterfaceRequest();
  };
  Blob_AsDataPipeGetter_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_AsDataPipeGetter_Params.validate = function(messageValidator, offset) {
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


    // validate Blob_AsDataPipeGetter_Params.dataPipeGetter
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Blob_AsDataPipeGetter_Params.encodedSize = codec.kStructHeaderSize + 8;

  Blob_AsDataPipeGetter_Params.decode = function(decoder) {
    var packed;
    var val = new Blob_AsDataPipeGetter_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dataPipeGetter = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Blob_AsDataPipeGetter_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_AsDataPipeGetter_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.dataPipeGetter);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Blob_ReadAll_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_ReadAll_Params.prototype.initDefaults_ = function() {
    this.pipe = null;
    this.client = new BlobReaderClientPtr();
  };
  Blob_ReadAll_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_ReadAll_Params.validate = function(messageValidator, offset) {
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


    // validate Blob_ReadAll_Params.pipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Blob_ReadAll_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Blob_ReadAll_Params.encodedSize = codec.kStructHeaderSize + 16;

  Blob_ReadAll_Params.decode = function(decoder) {
    var packed;
    var val = new Blob_ReadAll_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pipe = decoder.decodeStruct(codec.Handle);
    val.client = decoder.decodeStruct(new codec.NullableInterface(BlobReaderClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Blob_ReadAll_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_ReadAll_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.pipe);
    encoder.encodeStruct(new codec.NullableInterface(BlobReaderClientPtr), val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Blob_ReadRange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_ReadRange_Params.prototype.initDefaults_ = function() {
    this.offset = 0;
    this.length = 0;
    this.pipe = null;
    this.client = new BlobReaderClientPtr();
  };
  Blob_ReadRange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_ReadRange_Params.validate = function(messageValidator, offset) {
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




    // validate Blob_ReadRange_Params.pipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Blob_ReadRange_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 20, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Blob_ReadRange_Params.encodedSize = codec.kStructHeaderSize + 32;

  Blob_ReadRange_Params.decode = function(decoder) {
    var packed;
    var val = new Blob_ReadRange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.offset = decoder.decodeStruct(codec.Uint64);
    val.length = decoder.decodeStruct(codec.Uint64);
    val.pipe = decoder.decodeStruct(codec.Handle);
    val.client = decoder.decodeStruct(new codec.NullableInterface(BlobReaderClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Blob_ReadRange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_ReadRange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.offset);
    encoder.encodeStruct(codec.Uint64, val.length);
    encoder.encodeStruct(codec.Handle, val.pipe);
    encoder.encodeStruct(new codec.NullableInterface(BlobReaderClientPtr), val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Blob_ReadSideData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_ReadSideData_Params.prototype.initDefaults_ = function() {
  };
  Blob_ReadSideData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_ReadSideData_Params.validate = function(messageValidator, offset) {
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

  Blob_ReadSideData_Params.encodedSize = codec.kStructHeaderSize + 0;

  Blob_ReadSideData_Params.decode = function(decoder) {
    var packed;
    var val = new Blob_ReadSideData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Blob_ReadSideData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_ReadSideData_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Blob_ReadSideData_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_ReadSideData_ResponseParams.prototype.initDefaults_ = function() {
    this.data = null;
  };
  Blob_ReadSideData_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_ReadSideData_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Blob_ReadSideData_ResponseParams.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Blob_ReadSideData_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Blob_ReadSideData_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Blob_ReadSideData_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Blob_ReadSideData_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_ReadSideData_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function Blob_GetInternalUUID_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_GetInternalUUID_Params.prototype.initDefaults_ = function() {
  };
  Blob_GetInternalUUID_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_GetInternalUUID_Params.validate = function(messageValidator, offset) {
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

  Blob_GetInternalUUID_Params.encodedSize = codec.kStructHeaderSize + 0;

  Blob_GetInternalUUID_Params.decode = function(decoder) {
    var packed;
    var val = new Blob_GetInternalUUID_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Blob_GetInternalUUID_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_GetInternalUUID_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Blob_GetInternalUUID_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blob_GetInternalUUID_ResponseParams.prototype.initDefaults_ = function() {
    this.uuid = null;
  };
  Blob_GetInternalUUID_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blob_GetInternalUUID_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Blob_GetInternalUUID_ResponseParams.uuid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Blob_GetInternalUUID_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Blob_GetInternalUUID_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Blob_GetInternalUUID_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.uuid = decoder.decodeStruct(codec.String);
    return val;
  };

  Blob_GetInternalUUID_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blob_GetInternalUUID_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.uuid);
  };
  var kBlobReaderClient_OnCalculatedSize_Name = 0;
  var kBlobReaderClient_OnComplete_Name = 1;

  function BlobReaderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BlobReaderClient,
                                                   handleOrPtrInfo);
  }

  function BlobReaderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BlobReaderClient, associatedInterfacePtrInfo);
  }

  BlobReaderClientAssociatedPtr.prototype =
      Object.create(BlobReaderClientPtr.prototype);
  BlobReaderClientAssociatedPtr.prototype.constructor =
      BlobReaderClientAssociatedPtr;

  function BlobReaderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  BlobReaderClientPtr.prototype.onCalculatedSize = function() {
    return BlobReaderClientProxy.prototype.onCalculatedSize
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobReaderClientProxy.prototype.onCalculatedSize = function(totalSize, expectedContentSize) {
    var params_ = new BlobReaderClient_OnCalculatedSize_Params();
    params_.totalSize = totalSize;
    params_.expectedContentSize = expectedContentSize;
    var builder = new codec.MessageV0Builder(
        kBlobReaderClient_OnCalculatedSize_Name,
        codec.align(BlobReaderClient_OnCalculatedSize_Params.encodedSize));
    builder.encodeStruct(BlobReaderClient_OnCalculatedSize_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BlobReaderClientPtr.prototype.onComplete = function() {
    return BlobReaderClientProxy.prototype.onComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobReaderClientProxy.prototype.onComplete = function(status, dataLength) {
    var params_ = new BlobReaderClient_OnComplete_Params();
    params_.status = status;
    params_.dataLength = dataLength;
    var builder = new codec.MessageV0Builder(
        kBlobReaderClient_OnComplete_Name,
        codec.align(BlobReaderClient_OnComplete_Params.encodedSize));
    builder.encodeStruct(BlobReaderClient_OnComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BlobReaderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  BlobReaderClientStub.prototype.onCalculatedSize = function(totalSize, expectedContentSize) {
    return this.delegate_ && this.delegate_.onCalculatedSize && this.delegate_.onCalculatedSize(totalSize, expectedContentSize);
  }
  BlobReaderClientStub.prototype.onComplete = function(status, dataLength) {
    return this.delegate_ && this.delegate_.onComplete && this.delegate_.onComplete(status, dataLength);
  }

  BlobReaderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBlobReaderClient_OnCalculatedSize_Name:
      var params = reader.decodeStruct(BlobReaderClient_OnCalculatedSize_Params);
      this.onCalculatedSize(params.totalSize, params.expectedContentSize);
      return true;
    case kBlobReaderClient_OnComplete_Name:
      var params = reader.decodeStruct(BlobReaderClient_OnComplete_Params);
      this.onComplete(params.status, params.dataLength);
      return true;
    default:
      return false;
    }
  };

  BlobReaderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBlobReaderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBlobReaderClient_OnCalculatedSize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BlobReaderClient_OnCalculatedSize_Params;
      break;
      case kBlobReaderClient_OnComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BlobReaderClient_OnComplete_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBlobReaderClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BlobReaderClient = {
    name: 'blink.mojom.BlobReaderClient',
    kVersion: 0,
    ptrClass: BlobReaderClientPtr,
    proxyClass: BlobReaderClientProxy,
    stubClass: BlobReaderClientStub,
    validateRequest: validateBlobReaderClientRequest,
    validateResponse: null,
  };
  BlobReaderClientStub.prototype.validator = validateBlobReaderClientRequest;
  BlobReaderClientProxy.prototype.validator = null;
  var kBlob_Clone_Name = 0;
  var kBlob_AsDataPipeGetter_Name = 1;
  var kBlob_ReadAll_Name = 2;
  var kBlob_ReadRange_Name = 3;
  var kBlob_ReadSideData_Name = 4;
  var kBlob_GetInternalUUID_Name = 5;

  function BlobPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Blob,
                                                   handleOrPtrInfo);
  }

  function BlobAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Blob, associatedInterfacePtrInfo);
  }

  BlobAssociatedPtr.prototype =
      Object.create(BlobPtr.prototype);
  BlobAssociatedPtr.prototype.constructor =
      BlobAssociatedPtr;

  function BlobProxy(receiver) {
    this.receiver_ = receiver;
  }
  BlobPtr.prototype.clone = function() {
    return BlobProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobProxy.prototype.clone = function(blob) {
    var params_ = new Blob_Clone_Params();
    params_.blob = blob;
    var builder = new codec.MessageV0Builder(
        kBlob_Clone_Name,
        codec.align(Blob_Clone_Params.encodedSize));
    builder.encodeStruct(Blob_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BlobPtr.prototype.asDataPipeGetter = function() {
    return BlobProxy.prototype.asDataPipeGetter
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobProxy.prototype.asDataPipeGetter = function(dataPipeGetter) {
    var params_ = new Blob_AsDataPipeGetter_Params();
    params_.dataPipeGetter = dataPipeGetter;
    var builder = new codec.MessageV0Builder(
        kBlob_AsDataPipeGetter_Name,
        codec.align(Blob_AsDataPipeGetter_Params.encodedSize));
    builder.encodeStruct(Blob_AsDataPipeGetter_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BlobPtr.prototype.readAll = function() {
    return BlobProxy.prototype.readAll
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobProxy.prototype.readAll = function(pipe, client) {
    var params_ = new Blob_ReadAll_Params();
    params_.pipe = pipe;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kBlob_ReadAll_Name,
        codec.align(Blob_ReadAll_Params.encodedSize));
    builder.encodeStruct(Blob_ReadAll_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BlobPtr.prototype.readRange = function() {
    return BlobProxy.prototype.readRange
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobProxy.prototype.readRange = function(offset, length, pipe, client) {
    var params_ = new Blob_ReadRange_Params();
    params_.offset = offset;
    params_.length = length;
    params_.pipe = pipe;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kBlob_ReadRange_Name,
        codec.align(Blob_ReadRange_Params.encodedSize));
    builder.encodeStruct(Blob_ReadRange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BlobPtr.prototype.readSideData = function() {
    return BlobProxy.prototype.readSideData
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobProxy.prototype.readSideData = function() {
    var params_ = new Blob_ReadSideData_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBlob_ReadSideData_Name,
          codec.align(Blob_ReadSideData_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Blob_ReadSideData_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Blob_ReadSideData_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BlobPtr.prototype.getInternalUUID = function() {
    return BlobProxy.prototype.getInternalUUID
        .apply(this.ptr.getProxy(), arguments);
  };

  BlobProxy.prototype.getInternalUUID = function() {
    var params_ = new Blob_GetInternalUUID_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBlob_GetInternalUUID_Name,
          codec.align(Blob_GetInternalUUID_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Blob_GetInternalUUID_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Blob_GetInternalUUID_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BlobStub(delegate) {
    this.delegate_ = delegate;
  }
  BlobStub.prototype.clone = function(blob) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(blob);
  }
  BlobStub.prototype.asDataPipeGetter = function(dataPipeGetter) {
    return this.delegate_ && this.delegate_.asDataPipeGetter && this.delegate_.asDataPipeGetter(dataPipeGetter);
  }
  BlobStub.prototype.readAll = function(pipe, client) {
    return this.delegate_ && this.delegate_.readAll && this.delegate_.readAll(pipe, client);
  }
  BlobStub.prototype.readRange = function(offset, length, pipe, client) {
    return this.delegate_ && this.delegate_.readRange && this.delegate_.readRange(offset, length, pipe, client);
  }
  BlobStub.prototype.readSideData = function() {
    return this.delegate_ && this.delegate_.readSideData && this.delegate_.readSideData();
  }
  BlobStub.prototype.getInternalUUID = function() {
    return this.delegate_ && this.delegate_.getInternalUUID && this.delegate_.getInternalUUID();
  }

  BlobStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBlob_Clone_Name:
      var params = reader.decodeStruct(Blob_Clone_Params);
      this.clone(params.blob);
      return true;
    case kBlob_AsDataPipeGetter_Name:
      var params = reader.decodeStruct(Blob_AsDataPipeGetter_Params);
      this.asDataPipeGetter(params.dataPipeGetter);
      return true;
    case kBlob_ReadAll_Name:
      var params = reader.decodeStruct(Blob_ReadAll_Params);
      this.readAll(params.pipe, params.client);
      return true;
    case kBlob_ReadRange_Name:
      var params = reader.decodeStruct(Blob_ReadRange_Params);
      this.readRange(params.offset, params.length, params.pipe, params.client);
      return true;
    default:
      return false;
    }
  };

  BlobStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBlob_ReadSideData_Name:
      var params = reader.decodeStruct(Blob_ReadSideData_Params);
      this.readSideData().then(function(response) {
        var responseParams =
            new Blob_ReadSideData_ResponseParams();
        responseParams.data = response.data;
        var builder = new codec.MessageV1Builder(
            kBlob_ReadSideData_Name,
            codec.align(Blob_ReadSideData_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Blob_ReadSideData_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBlob_GetInternalUUID_Name:
      var params = reader.decodeStruct(Blob_GetInternalUUID_Params);
      this.getInternalUUID().then(function(response) {
        var responseParams =
            new Blob_GetInternalUUID_ResponseParams();
        responseParams.uuid = response.uuid;
        var builder = new codec.MessageV1Builder(
            kBlob_GetInternalUUID_Name,
            codec.align(Blob_GetInternalUUID_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Blob_GetInternalUUID_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBlobRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBlob_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Blob_Clone_Params;
      break;
      case kBlob_AsDataPipeGetter_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Blob_AsDataPipeGetter_Params;
      break;
      case kBlob_ReadAll_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Blob_ReadAll_Params;
      break;
      case kBlob_ReadRange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Blob_ReadRange_Params;
      break;
      case kBlob_ReadSideData_Name:
        if (message.expectsResponse())
          paramsClass = Blob_ReadSideData_Params;
      break;
      case kBlob_GetInternalUUID_Name:
        if (message.expectsResponse())
          paramsClass = Blob_GetInternalUUID_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBlobResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBlob_ReadSideData_Name:
        if (message.isResponse())
          paramsClass = Blob_ReadSideData_ResponseParams;
        break;
      case kBlob_GetInternalUUID_Name:
        if (message.isResponse())
          paramsClass = Blob_GetInternalUUID_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Blob = {
    name: 'blink.mojom.Blob',
    kVersion: 0,
    ptrClass: BlobPtr,
    proxyClass: BlobProxy,
    stubClass: BlobStub,
    validateRequest: validateBlobRequest,
    validateResponse: validateBlobResponse,
  };
  BlobStub.prototype.validator = validateBlobRequest;
  BlobProxy.prototype.validator = validateBlobResponse;
  exports.BlobReaderClient = BlobReaderClient;
  exports.BlobReaderClientPtr = BlobReaderClientPtr;
  exports.BlobReaderClientAssociatedPtr = BlobReaderClientAssociatedPtr;
  exports.Blob = Blob;
  exports.BlobPtr = BlobPtr;
  exports.BlobAssociatedPtr = BlobAssociatedPtr;
})();