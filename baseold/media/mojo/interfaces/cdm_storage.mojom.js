// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/cdm_storage.mojom';
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
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../mojo/public/mojom/base/file.mojom.js');
  }



  function CdmStorage_Open_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmStorage_Open_Params.prototype.initDefaults_ = function() {
    this.fileName = null;
  };
  CdmStorage_Open_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmStorage_Open_Params.validate = function(messageValidator, offset) {
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


    // validate CdmStorage_Open_Params.fileName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmStorage_Open_Params.encodedSize = codec.kStructHeaderSize + 8;

  CdmStorage_Open_Params.decode = function(decoder) {
    var packed;
    var val = new CdmStorage_Open_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileName = decoder.decodeStruct(codec.String);
    return val;
  };

  CdmStorage_Open_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmStorage_Open_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.fileName);
  };
  function CdmStorage_Open_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmStorage_Open_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.fileForReading = null;
    this.cdmFile = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  CdmStorage_Open_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmStorage_Open_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmStorage_Open_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CdmStorage.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmStorage_Open_ResponseParams.fileForReading
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file$.File, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmStorage_Open_ResponseParams.cdmFile
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 16, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmStorage_Open_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  CdmStorage_Open_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmStorage_Open_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.fileForReading = decoder.decodeStructPointer(file$.File);
    val.cdmFile = decoder.decodeStruct(codec.NullableAssociatedInterfacePtrInfo);
    return val;
  };

  CdmStorage_Open_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmStorage_Open_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(file$.File, val.fileForReading);
    encoder.encodeStruct(codec.NullableAssociatedInterfacePtrInfo, val.cdmFile);
  };
  function CdmFile_OpenFileForWriting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmFile_OpenFileForWriting_Params.prototype.initDefaults_ = function() {
  };
  CdmFile_OpenFileForWriting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmFile_OpenFileForWriting_Params.validate = function(messageValidator, offset) {
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

  CdmFile_OpenFileForWriting_Params.encodedSize = codec.kStructHeaderSize + 0;

  CdmFile_OpenFileForWriting_Params.decode = function(decoder) {
    var packed;
    var val = new CdmFile_OpenFileForWriting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CdmFile_OpenFileForWriting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmFile_OpenFileForWriting_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CdmFile_OpenFileForWriting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmFile_OpenFileForWriting_ResponseParams.prototype.initDefaults_ = function() {
    this.fileForWriting = null;
  };
  CdmFile_OpenFileForWriting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmFile_OpenFileForWriting_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmFile_OpenFileForWriting_ResponseParams.fileForWriting
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmFile_OpenFileForWriting_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CdmFile_OpenFileForWriting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmFile_OpenFileForWriting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileForWriting = decoder.decodeStructPointer(file$.File);
    return val;
  };

  CdmFile_OpenFileForWriting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmFile_OpenFileForWriting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.fileForWriting);
  };
  function CdmFile_CommitWrite_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmFile_CommitWrite_Params.prototype.initDefaults_ = function() {
  };
  CdmFile_CommitWrite_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmFile_CommitWrite_Params.validate = function(messageValidator, offset) {
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

  CdmFile_CommitWrite_Params.encodedSize = codec.kStructHeaderSize + 0;

  CdmFile_CommitWrite_Params.decode = function(decoder) {
    var packed;
    var val = new CdmFile_CommitWrite_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CdmFile_CommitWrite_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmFile_CommitWrite_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CdmFile_CommitWrite_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmFile_CommitWrite_ResponseParams.prototype.initDefaults_ = function() {
    this.updatedFileForReading = null;
  };
  CdmFile_CommitWrite_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmFile_CommitWrite_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CdmFile_CommitWrite_ResponseParams.updatedFileForReading
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmFile_CommitWrite_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CdmFile_CommitWrite_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CdmFile_CommitWrite_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.updatedFileForReading = decoder.decodeStructPointer(file$.File);
    return val;
  };

  CdmFile_CommitWrite_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmFile_CommitWrite_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.updatedFileForReading);
  };
  var kCdmStorage_Open_Name = 0;

  function CdmStoragePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CdmStorage,
                                                   handleOrPtrInfo);
  }

  function CdmStorageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CdmStorage, associatedInterfacePtrInfo);
  }

  CdmStorageAssociatedPtr.prototype =
      Object.create(CdmStoragePtr.prototype);
  CdmStorageAssociatedPtr.prototype.constructor =
      CdmStorageAssociatedPtr;

  function CdmStorageProxy(receiver) {
    this.receiver_ = receiver;
  }
  CdmStoragePtr.prototype.open = function() {
    return CdmStorageProxy.prototype.open
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmStorageProxy.prototype.open = function(fileName) {
    var params_ = new CdmStorage_Open_Params();
    params_.fileName = fileName;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kCdmStorage_Open_Name,
          codec.align(CdmStorage_Open_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(CdmStorage_Open_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmStorage_Open_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CdmStorageStub(delegate) {
    this.delegate_ = delegate;
  }
  CdmStorageStub.prototype.open = function(fileName) {
    return this.delegate_ && this.delegate_.open && this.delegate_.open(fileName);
  }

  CdmStorageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CdmStorageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCdmStorage_Open_Name:
      var params = reader.decodeStruct(CdmStorage_Open_Params);
      this.open(params.fileName).then(function(response) {
        var responseParams =
            new CdmStorage_Open_ResponseParams();
        responseParams.status = response.status;
        responseParams.fileForReading = response.fileForReading;
        responseParams.cdmFile = response.cdmFile;
        var builder = new codec.MessageV2Builder(
            kCdmStorage_Open_Name,
            codec.align(CdmStorage_Open_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(CdmStorage_Open_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCdmStorageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCdmStorage_Open_Name:
        if (message.expectsResponse())
          paramsClass = CdmStorage_Open_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCdmStorageResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCdmStorage_Open_Name:
        if (message.isResponse())
          paramsClass = CdmStorage_Open_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CdmStorage = {
    name: 'media.mojom.CdmStorage',
    kVersion: 0,
    ptrClass: CdmStoragePtr,
    proxyClass: CdmStorageProxy,
    stubClass: CdmStorageStub,
    validateRequest: validateCdmStorageRequest,
    validateResponse: validateCdmStorageResponse,
  };
  CdmStorage.Status = {};
  CdmStorage.Status.kSuccess = 0;
  CdmStorage.Status.kInUse = CdmStorage.Status.kSuccess + 1;
  CdmStorage.Status.kFailure = CdmStorage.Status.kInUse + 1;
  CdmStorage.Status.MIN_VALUE = 0,
  CdmStorage.Status.MAX_VALUE = 2,

  CdmStorage.Status.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CdmStorage.Status.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  CdmStorageStub.prototype.validator = validateCdmStorageRequest;
  CdmStorageProxy.prototype.validator = validateCdmStorageResponse;
  var kCdmFile_OpenFileForWriting_Name = 0;
  var kCdmFile_CommitWrite_Name = 1;

  function CdmFilePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CdmFile,
                                                   handleOrPtrInfo);
  }

  function CdmFileAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CdmFile, associatedInterfacePtrInfo);
  }

  CdmFileAssociatedPtr.prototype =
      Object.create(CdmFilePtr.prototype);
  CdmFileAssociatedPtr.prototype.constructor =
      CdmFileAssociatedPtr;

  function CdmFileProxy(receiver) {
    this.receiver_ = receiver;
  }
  CdmFilePtr.prototype.openFileForWriting = function() {
    return CdmFileProxy.prototype.openFileForWriting
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmFileProxy.prototype.openFileForWriting = function() {
    var params_ = new CdmFile_OpenFileForWriting_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCdmFile_OpenFileForWriting_Name,
          codec.align(CdmFile_OpenFileForWriting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CdmFile_OpenFileForWriting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmFile_OpenFileForWriting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CdmFilePtr.prototype.commitWrite = function() {
    return CdmFileProxy.prototype.commitWrite
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmFileProxy.prototype.commitWrite = function() {
    var params_ = new CdmFile_CommitWrite_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCdmFile_CommitWrite_Name,
          codec.align(CdmFile_CommitWrite_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CdmFile_CommitWrite_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CdmFile_CommitWrite_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CdmFileStub(delegate) {
    this.delegate_ = delegate;
  }
  CdmFileStub.prototype.openFileForWriting = function() {
    return this.delegate_ && this.delegate_.openFileForWriting && this.delegate_.openFileForWriting();
  }
  CdmFileStub.prototype.commitWrite = function() {
    return this.delegate_ && this.delegate_.commitWrite && this.delegate_.commitWrite();
  }

  CdmFileStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CdmFileStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCdmFile_OpenFileForWriting_Name:
      var params = reader.decodeStruct(CdmFile_OpenFileForWriting_Params);
      this.openFileForWriting().then(function(response) {
        var responseParams =
            new CdmFile_OpenFileForWriting_ResponseParams();
        responseParams.fileForWriting = response.fileForWriting;
        var builder = new codec.MessageV1Builder(
            kCdmFile_OpenFileForWriting_Name,
            codec.align(CdmFile_OpenFileForWriting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CdmFile_OpenFileForWriting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCdmFile_CommitWrite_Name:
      var params = reader.decodeStruct(CdmFile_CommitWrite_Params);
      this.commitWrite().then(function(response) {
        var responseParams =
            new CdmFile_CommitWrite_ResponseParams();
        responseParams.updatedFileForReading = response.updatedFileForReading;
        var builder = new codec.MessageV1Builder(
            kCdmFile_CommitWrite_Name,
            codec.align(CdmFile_CommitWrite_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CdmFile_CommitWrite_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCdmFileRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCdmFile_OpenFileForWriting_Name:
        if (message.expectsResponse())
          paramsClass = CdmFile_OpenFileForWriting_Params;
      break;
      case kCdmFile_CommitWrite_Name:
        if (message.expectsResponse())
          paramsClass = CdmFile_CommitWrite_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCdmFileResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCdmFile_OpenFileForWriting_Name:
        if (message.isResponse())
          paramsClass = CdmFile_OpenFileForWriting_ResponseParams;
        break;
      case kCdmFile_CommitWrite_Name:
        if (message.isResponse())
          paramsClass = CdmFile_CommitWrite_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CdmFile = {
    name: 'media.mojom.CdmFile',
    kVersion: 0,
    ptrClass: CdmFilePtr,
    proxyClass: CdmFileProxy,
    stubClass: CdmFileStub,
    validateRequest: validateCdmFileRequest,
    validateResponse: validateCdmFileResponse,
  };
  CdmFileStub.prototype.validator = validateCdmFileRequest;
  CdmFileProxy.prototype.validator = validateCdmFileResponse;
  exports.CdmStorage = CdmStorage;
  exports.CdmStoragePtr = CdmStoragePtr;
  exports.CdmStorageAssociatedPtr = CdmStorageAssociatedPtr;
  exports.CdmFile = CdmFile;
  exports.CdmFilePtr = CdmFilePtr;
  exports.CdmFileAssociatedPtr = CdmFileAssociatedPtr;
})();