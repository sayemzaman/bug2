// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/cdm_proxy.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');



  function CdmProxy_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_Initialize_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  CdmProxy_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_Initialize_Params.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_Initialize_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_Initialize_Params.encodedSize = codec.kStructHeaderSize + 8;

  CdmProxy_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  CdmProxy_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function CdmProxy_Initialize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_Initialize_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.protocol = 0;
    this.cryptoSessionId = 0;
    this.cdmId = 0;
  };
  CdmProxy_Initialize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_Initialize_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_Initialize_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmProxy.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmProxy_Initialize_ResponseParams.protocol
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, CdmProxy.Protocol);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CdmProxy_Initialize_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CdmProxy_Initialize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_Initialize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    val.protocol = decoder.decodeStruct(codec.Int32);
    val.cryptoSessionId = decoder.decodeStruct(codec.Uint32);
    val.cdmId = decoder.decodeStruct(codec.Int32);
    return val;
  };

  CdmProxy_Initialize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_Initialize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.encodeStruct(codec.Int32, val.protocol);
    encoder.encodeStruct(codec.Uint32, val.cryptoSessionId);
    encoder.encodeStruct(codec.Int32, val.cdmId);
  };
  function CdmProxy_Process_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_Process_Params.prototype.initDefaults_ = function() {
    this.function = 0;
    this.cryptoSessionId = 0;
    this.inputData = null;
    this.outputDataSize = 0;
  };
  CdmProxy_Process_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_Process_Params.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_Process_Params.function
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmProxy.Function);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CdmProxy_Process_Params.inputData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CdmProxy_Process_Params.encodedSize = codec.kStructHeaderSize + 24;

  CdmProxy_Process_Params.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_Process_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.function = decoder.decodeStruct(codec.Int32);
    val.cryptoSessionId = decoder.decodeStruct(codec.Uint32);
    val.inputData = decoder.decodeArrayPointer(codec.Uint8);
    val.outputDataSize = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CdmProxy_Process_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_Process_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.function);
    encoder.encodeStruct(codec.Uint32, val.cryptoSessionId);
    encoder.encodeArrayPointer(codec.Uint8, val.inputData);
    encoder.encodeStruct(codec.Uint32, val.outputDataSize);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CdmProxy_Process_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_Process_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.outputData = null;
  };
  CdmProxy_Process_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_Process_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_Process_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmProxy.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmProxy_Process_ResponseParams.outputData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_Process_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CdmProxy_Process_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_Process_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.outputData = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CdmProxy_Process_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_Process_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.outputData);
  };
  function CdmProxy_CreateMediaCryptoSession_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_CreateMediaCryptoSession_Params.prototype.initDefaults_ = function() {
    this.inputData = null;
  };
  CdmProxy_CreateMediaCryptoSession_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_CreateMediaCryptoSession_Params.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_CreateMediaCryptoSession_Params.inputData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_CreateMediaCryptoSession_Params.encodedSize = codec.kStructHeaderSize + 8;

  CdmProxy_CreateMediaCryptoSession_Params.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_CreateMediaCryptoSession_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputData = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CdmProxy_CreateMediaCryptoSession_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_CreateMediaCryptoSession_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.inputData);
  };
  function CdmProxy_CreateMediaCryptoSession_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_CreateMediaCryptoSession_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.cryptoSessionId = 0;
    this.outputData = 0;
  };
  CdmProxy_CreateMediaCryptoSession_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_CreateMediaCryptoSession_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_CreateMediaCryptoSession_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmProxy.Status);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CdmProxy_CreateMediaCryptoSession_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CdmProxy_CreateMediaCryptoSession_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_CreateMediaCryptoSession_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    val.cryptoSessionId = decoder.decodeStruct(codec.Uint32);
    val.outputData = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  CdmProxy_CreateMediaCryptoSession_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_CreateMediaCryptoSession_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.encodeStruct(codec.Uint32, val.cryptoSessionId);
    encoder.encodeStruct(codec.Uint64, val.outputData);
  };
  function CdmProxy_SetKey_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_SetKey_Params.prototype.initDefaults_ = function() {
    this.cryptoSessionId = 0;
    this.keyType = 0;
    this.keyId = null;
    this.keyBlob = null;
  };
  CdmProxy_SetKey_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_SetKey_Params.validate = function(messageValidator, offset) {
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



    // validate CdmProxy_SetKey_Params.keyId
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmProxy_SetKey_Params.keyType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, CdmProxy.KeyType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmProxy_SetKey_Params.keyBlob
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_SetKey_Params.encodedSize = codec.kStructHeaderSize + 24;

  CdmProxy_SetKey_Params.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_SetKey_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cryptoSessionId = decoder.decodeStruct(codec.Uint32);
    val.keyType = decoder.decodeStruct(codec.Int32);
    val.keyId = decoder.decodeArrayPointer(codec.Uint8);
    val.keyBlob = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CdmProxy_SetKey_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_SetKey_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.cryptoSessionId);
    encoder.encodeStruct(codec.Int32, val.keyType);
    encoder.encodeArrayPointer(codec.Uint8, val.keyId);
    encoder.encodeArrayPointer(codec.Uint8, val.keyBlob);
  };
  function CdmProxy_SetKey_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_SetKey_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  CdmProxy_SetKey_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_SetKey_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_SetKey_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmProxy.Status);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_SetKey_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CdmProxy_SetKey_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_SetKey_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CdmProxy_SetKey_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_SetKey_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CdmProxy_RemoveKey_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_RemoveKey_Params.prototype.initDefaults_ = function() {
    this.cryptoSessionId = 0;
    this.keyId = null;
  };
  CdmProxy_RemoveKey_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_RemoveKey_Params.validate = function(messageValidator, offset) {
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



    // validate CdmProxy_RemoveKey_Params.keyId
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_RemoveKey_Params.encodedSize = codec.kStructHeaderSize + 16;

  CdmProxy_RemoveKey_Params.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_RemoveKey_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cryptoSessionId = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.keyId = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CdmProxy_RemoveKey_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_RemoveKey_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.cryptoSessionId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.keyId);
  };
  function CdmProxy_RemoveKey_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxy_RemoveKey_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  CdmProxy_RemoveKey_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxy_RemoveKey_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmProxy_RemoveKey_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmProxy.Status);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmProxy_RemoveKey_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CdmProxy_RemoveKey_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmProxy_RemoveKey_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CdmProxy_RemoveKey_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxy_RemoveKey_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CdmProxyClient_NotifyHardwareReset_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmProxyClient_NotifyHardwareReset_Params.prototype.initDefaults_ = function() {
  };
  CdmProxyClient_NotifyHardwareReset_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmProxyClient_NotifyHardwareReset_Params.validate = function(messageValidator, offset) {
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

  CdmProxyClient_NotifyHardwareReset_Params.encodedSize = codec.kStructHeaderSize + 0;

  CdmProxyClient_NotifyHardwareReset_Params.decode = function(decoder) {
    var packed;
    var val = new CdmProxyClient_NotifyHardwareReset_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CdmProxyClient_NotifyHardwareReset_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmProxyClient_NotifyHardwareReset_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kCdmProxy_Initialize_Name = 0;
  var kCdmProxy_Process_Name = 1;
  var kCdmProxy_CreateMediaCryptoSession_Name = 2;
  var kCdmProxy_SetKey_Name = 3;
  var kCdmProxy_RemoveKey_Name = 4;

  function CdmProxyPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CdmProxy,
                                                   handleOrPtrInfo);
  }

  function CdmProxyAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CdmProxy, associatedInterfacePtrInfo);
  }

  CdmProxyAssociatedPtr.prototype =
      Object.create(CdmProxyPtr.prototype);
  CdmProxyAssociatedPtr.prototype.constructor =
      CdmProxyAssociatedPtr;

  function CdmProxyProxy(receiver) {
    this.receiver_ = receiver;
  }
  CdmProxyPtr.prototype.initialize = function() {
    return CdmProxyProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmProxyProxy.prototype.initialize = function(client) {
    var params_ = new CdmProxy_Initialize_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kCdmProxy_Initialize_Name,
          codec.align(CdmProxy_Initialize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(CdmProxy_Initialize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmProxy_Initialize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CdmProxyPtr.prototype.process = function() {
    return CdmProxyProxy.prototype.process
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmProxyProxy.prototype.process = function(function_, cryptoSessionId, inputData, outputDataSize) {
    var params_ = new CdmProxy_Process_Params();
    params_.function = function_;
    params_.cryptoSessionId = cryptoSessionId;
    params_.inputData = inputData;
    params_.outputDataSize = outputDataSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCdmProxy_Process_Name,
          codec.align(CdmProxy_Process_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CdmProxy_Process_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmProxy_Process_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CdmProxyPtr.prototype.createMediaCryptoSession = function() {
    return CdmProxyProxy.prototype.createMediaCryptoSession
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmProxyProxy.prototype.createMediaCryptoSession = function(inputData) {
    var params_ = new CdmProxy_CreateMediaCryptoSession_Params();
    params_.inputData = inputData;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCdmProxy_CreateMediaCryptoSession_Name,
          codec.align(CdmProxy_CreateMediaCryptoSession_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CdmProxy_CreateMediaCryptoSession_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmProxy_CreateMediaCryptoSession_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CdmProxyPtr.prototype.setKey = function() {
    return CdmProxyProxy.prototype.setKey
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmProxyProxy.prototype.setKey = function(cryptoSessionId, keyId, keyType, keyBlob) {
    var params_ = new CdmProxy_SetKey_Params();
    params_.cryptoSessionId = cryptoSessionId;
    params_.keyId = keyId;
    params_.keyType = keyType;
    params_.keyBlob = keyBlob;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCdmProxy_SetKey_Name,
          codec.align(CdmProxy_SetKey_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CdmProxy_SetKey_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmProxy_SetKey_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CdmProxyPtr.prototype.removeKey = function() {
    return CdmProxyProxy.prototype.removeKey
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmProxyProxy.prototype.removeKey = function(cryptoSessionId, keyId) {
    var params_ = new CdmProxy_RemoveKey_Params();
    params_.cryptoSessionId = cryptoSessionId;
    params_.keyId = keyId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCdmProxy_RemoveKey_Name,
          codec.align(CdmProxy_RemoveKey_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CdmProxy_RemoveKey_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmProxy_RemoveKey_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CdmProxyStub(delegate) {
    this.delegate_ = delegate;
  }
  CdmProxyStub.prototype.initialize = function(client) {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize(client);
  }
  CdmProxyStub.prototype.process = function(function_, cryptoSessionId, inputData, outputDataSize) {
    return this.delegate_ && this.delegate_.process && this.delegate_.process(function_, cryptoSessionId, inputData, outputDataSize);
  }
  CdmProxyStub.prototype.createMediaCryptoSession = function(inputData) {
    return this.delegate_ && this.delegate_.createMediaCryptoSession && this.delegate_.createMediaCryptoSession(inputData);
  }
  CdmProxyStub.prototype.setKey = function(cryptoSessionId, keyId, keyType, keyBlob) {
    return this.delegate_ && this.delegate_.setKey && this.delegate_.setKey(cryptoSessionId, keyId, keyType, keyBlob);
  }
  CdmProxyStub.prototype.removeKey = function(cryptoSessionId, keyId) {
    return this.delegate_ && this.delegate_.removeKey && this.delegate_.removeKey(cryptoSessionId, keyId);
  }

  CdmProxyStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CdmProxyStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCdmProxy_Initialize_Name:
      var params = reader.decodeStruct(CdmProxy_Initialize_Params);
      this.initialize(params.client).then(function(response) {
        var responseParams =
            new CdmProxy_Initialize_ResponseParams();
        responseParams.status = response.status;
        responseParams.protocol = response.protocol;
        responseParams.cryptoSessionId = response.cryptoSessionId;
        responseParams.cdmId = response.cdmId;
        var builder = new codec.MessageV2Builder(
            kCdmProxy_Initialize_Name,
            codec.align(CdmProxy_Initialize_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(CdmProxy_Initialize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCdmProxy_Process_Name:
      var params = reader.decodeStruct(CdmProxy_Process_Params);
      this.process(params.function, params.cryptoSessionId, params.inputData, params.outputDataSize).then(function(response) {
        var responseParams =
            new CdmProxy_Process_ResponseParams();
        responseParams.status = response.status;
        responseParams.outputData = response.outputData;
        var builder = new codec.MessageV1Builder(
            kCdmProxy_Process_Name,
            codec.align(CdmProxy_Process_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CdmProxy_Process_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCdmProxy_CreateMediaCryptoSession_Name:
      var params = reader.decodeStruct(CdmProxy_CreateMediaCryptoSession_Params);
      this.createMediaCryptoSession(params.inputData).then(function(response) {
        var responseParams =
            new CdmProxy_CreateMediaCryptoSession_ResponseParams();
        responseParams.status = response.status;
        responseParams.cryptoSessionId = response.cryptoSessionId;
        responseParams.outputData = response.outputData;
        var builder = new codec.MessageV1Builder(
            kCdmProxy_CreateMediaCryptoSession_Name,
            codec.align(CdmProxy_CreateMediaCryptoSession_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CdmProxy_CreateMediaCryptoSession_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCdmProxy_SetKey_Name:
      var params = reader.decodeStruct(CdmProxy_SetKey_Params);
      this.setKey(params.cryptoSessionId, params.keyId, params.keyType, params.keyBlob).then(function(response) {
        var responseParams =
            new CdmProxy_SetKey_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kCdmProxy_SetKey_Name,
            codec.align(CdmProxy_SetKey_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CdmProxy_SetKey_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCdmProxy_RemoveKey_Name:
      var params = reader.decodeStruct(CdmProxy_RemoveKey_Params);
      this.removeKey(params.cryptoSessionId, params.keyId).then(function(response) {
        var responseParams =
            new CdmProxy_RemoveKey_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kCdmProxy_RemoveKey_Name,
            codec.align(CdmProxy_RemoveKey_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CdmProxy_RemoveKey_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCdmProxyRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCdmProxy_Initialize_Name:
        if (message.expectsResponse())
          paramsClass = CdmProxy_Initialize_Params;
      break;
      case kCdmProxy_Process_Name:
        if (message.expectsResponse())
          paramsClass = CdmProxy_Process_Params;
      break;
      case kCdmProxy_CreateMediaCryptoSession_Name:
        if (message.expectsResponse())
          paramsClass = CdmProxy_CreateMediaCryptoSession_Params;
      break;
      case kCdmProxy_SetKey_Name:
        if (message.expectsResponse())
          paramsClass = CdmProxy_SetKey_Params;
      break;
      case kCdmProxy_RemoveKey_Name:
        if (message.expectsResponse())
          paramsClass = CdmProxy_RemoveKey_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCdmProxyResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCdmProxy_Initialize_Name:
        if (message.isResponse())
          paramsClass = CdmProxy_Initialize_ResponseParams;
        break;
      case kCdmProxy_Process_Name:
        if (message.isResponse())
          paramsClass = CdmProxy_Process_ResponseParams;
        break;
      case kCdmProxy_CreateMediaCryptoSession_Name:
        if (message.isResponse())
          paramsClass = CdmProxy_CreateMediaCryptoSession_ResponseParams;
        break;
      case kCdmProxy_SetKey_Name:
        if (message.isResponse())
          paramsClass = CdmProxy_SetKey_ResponseParams;
        break;
      case kCdmProxy_RemoveKey_Name:
        if (message.isResponse())
          paramsClass = CdmProxy_RemoveKey_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CdmProxy = {
    name: 'media.mojom.CdmProxy',
    kVersion: 0,
    ptrClass: CdmProxyPtr,
    proxyClass: CdmProxyProxy,
    stubClass: CdmProxyStub,
    validateRequest: validateCdmProxyRequest,
    validateResponse: validateCdmProxyResponse,
  };
  CdmProxy.Status = {};

  CdmProxy.Status.isKnownEnumValue = function(value) {
    return false;
  };

  CdmProxy.Status.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  CdmProxy.Protocol = {};

  CdmProxy.Protocol.isKnownEnumValue = function(value) {
    return false;
  };

  CdmProxy.Protocol.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  CdmProxy.Function = {};

  CdmProxy.Function.isKnownEnumValue = function(value) {
    return false;
  };

  CdmProxy.Function.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  CdmProxy.KeyType = {};

  CdmProxy.KeyType.isKnownEnumValue = function(value) {
    return false;
  };

  CdmProxy.KeyType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  CdmProxyStub.prototype.validator = validateCdmProxyRequest;
  CdmProxyProxy.prototype.validator = validateCdmProxyResponse;
  var kCdmProxyClient_NotifyHardwareReset_Name = 0;

  function CdmProxyClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CdmProxyClient,
                                                   handleOrPtrInfo);
  }

  function CdmProxyClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CdmProxyClient, associatedInterfacePtrInfo);
  }

  CdmProxyClientAssociatedPtr.prototype =
      Object.create(CdmProxyClientPtr.prototype);
  CdmProxyClientAssociatedPtr.prototype.constructor =
      CdmProxyClientAssociatedPtr;

  function CdmProxyClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  CdmProxyClientPtr.prototype.notifyHardwareReset = function() {
    return CdmProxyClientProxy.prototype.notifyHardwareReset
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmProxyClientProxy.prototype.notifyHardwareReset = function() {
    var params_ = new CdmProxyClient_NotifyHardwareReset_Params();
    var builder = new codec.MessageV0Builder(
        kCdmProxyClient_NotifyHardwareReset_Name,
        codec.align(CdmProxyClient_NotifyHardwareReset_Params.encodedSize));
    builder.encodeStruct(CdmProxyClient_NotifyHardwareReset_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CdmProxyClientStub(delegate) {
    this.delegate_ = delegate;
  }
  CdmProxyClientStub.prototype.notifyHardwareReset = function() {
    return this.delegate_ && this.delegate_.notifyHardwareReset && this.delegate_.notifyHardwareReset();
  }

  CdmProxyClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCdmProxyClient_NotifyHardwareReset_Name:
      var params = reader.decodeStruct(CdmProxyClient_NotifyHardwareReset_Params);
      this.notifyHardwareReset();
      return true;
    default:
      return false;
    }
  };

  CdmProxyClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCdmProxyClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCdmProxyClient_NotifyHardwareReset_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CdmProxyClient_NotifyHardwareReset_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCdmProxyClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CdmProxyClient = {
    name: 'media.mojom.CdmProxyClient',
    kVersion: 0,
    ptrClass: CdmProxyClientPtr,
    proxyClass: CdmProxyClientProxy,
    stubClass: CdmProxyClientStub,
    validateRequest: validateCdmProxyClientRequest,
    validateResponse: null,
  };
  CdmProxyClientStub.prototype.validator = validateCdmProxyClientRequest;
  CdmProxyClientProxy.prototype.validator = null;
  exports.CdmProxy = CdmProxy;
  exports.CdmProxyPtr = CdmProxyPtr;
  exports.CdmProxyAssociatedPtr = CdmProxyAssociatedPtr;
  exports.CdmProxyClient = CdmProxyClient;
  exports.CdmProxyClientPtr = CdmProxyClientPtr;
  exports.CdmProxyClientAssociatedPtr = CdmProxyClientAssociatedPtr;
})();