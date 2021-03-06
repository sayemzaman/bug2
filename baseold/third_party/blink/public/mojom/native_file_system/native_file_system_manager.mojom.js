// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/native_file_system/native_file_system_manager.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var native_file_system_directory_handle$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/native_file_system/native_file_system_directory_handle.mojom', 'native_file_system_directory_handle.mojom.js');
  }
  var native_file_system_file_handle$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/native_file_system/native_file_system_file_handle.mojom', 'native_file_system_file_handle.mojom.js');
  }
  var native_file_system_error$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/native_file_system/native_file_system_error.mojom', 'native_file_system_error.mojom.js');
  }
  var native_file_system_transfer_token$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/native_file_system/native_file_system_transfer_token.mojom', 'native_file_system_transfer_token.mojom.js');
  }


  var ChooseFileSystemEntryType = {};
  ChooseFileSystemEntryType.kOpenFile = 0;
  ChooseFileSystemEntryType.kOpenMultipleFiles = ChooseFileSystemEntryType.kOpenFile + 1;
  ChooseFileSystemEntryType.kSaveFile = ChooseFileSystemEntryType.kOpenMultipleFiles + 1;
  ChooseFileSystemEntryType.kOpenDirectory = ChooseFileSystemEntryType.kSaveFile + 1;
  ChooseFileSystemEntryType.MIN_VALUE = 0,
  ChooseFileSystemEntryType.MAX_VALUE = 3,

  ChooseFileSystemEntryType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ChooseFileSystemEntryType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ChooseFileSystemEntryAcceptsOption(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChooseFileSystemEntryAcceptsOption.prototype.initDefaults_ = function() {
    this.description = null;
    this.mimeTypes = null;
    this.extensions = null;
  };
  ChooseFileSystemEntryAcceptsOption.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChooseFileSystemEntryAcceptsOption.validate = function(messageValidator, offset) {
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


    // validate ChooseFileSystemEntryAcceptsOption.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ChooseFileSystemEntryAcceptsOption.mimeTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ChooseFileSystemEntryAcceptsOption.extensions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ChooseFileSystemEntryAcceptsOption.encodedSize = codec.kStructHeaderSize + 24;

  ChooseFileSystemEntryAcceptsOption.decode = function(decoder) {
    var packed;
    var val = new ChooseFileSystemEntryAcceptsOption();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.description = decoder.decodeStructPointer(string16$.String16);
    val.mimeTypes = decoder.decodeArrayPointer(codec.String);
    val.extensions = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ChooseFileSystemEntryAcceptsOption.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChooseFileSystemEntryAcceptsOption.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.description);
    encoder.encodeArrayPointer(codec.String, val.mimeTypes);
    encoder.encodeArrayPointer(codec.String, val.extensions);
  };
  function NativeFileSystemManager_GetSandboxedFileSystem_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemManager_GetSandboxedFileSystem_Params.prototype.initDefaults_ = function() {
  };
  NativeFileSystemManager_GetSandboxedFileSystem_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemManager_GetSandboxedFileSystem_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemManager_GetSandboxedFileSystem_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeFileSystemManager_GetSandboxedFileSystem_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemManager_GetSandboxedFileSystem_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeFileSystemManager_GetSandboxedFileSystem_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemManager_GetSandboxedFileSystem_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.directory = new native_file_system_directory_handle$.NativeFileSystemDirectoryHandlePtr();
  };
  NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.directory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.directory = decoder.decodeStruct(new codec.NullableInterface(native_file_system_directory_handle$.NativeFileSystemDirectoryHandlePtr));
    return val;
  };

  NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStruct(new codec.NullableInterface(native_file_system_directory_handle$.NativeFileSystemDirectoryHandlePtr), val.directory);
  };
  function NativeFileSystemManager_ChooseEntries_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemManager_ChooseEntries_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.includeAcceptsAll = false;
    this.accepts = null;
  };
  NativeFileSystemManager_ChooseEntries_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemManager_ChooseEntries_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemManager_ChooseEntries_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ChooseFileSystemEntryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemManager_ChooseEntries_Params.accepts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(ChooseFileSystemEntryAcceptsOption), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NativeFileSystemManager_ChooseEntries_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemManager_ChooseEntries_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemManager_ChooseEntries_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.includeAcceptsAll = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.accepts = decoder.decodeArrayPointer(new codec.PointerTo(ChooseFileSystemEntryAcceptsOption));
    return val;
  };

  NativeFileSystemManager_ChooseEntries_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemManager_ChooseEntries_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    packed = 0;
    packed |= (val.includeAcceptsAll & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(ChooseFileSystemEntryAcceptsOption), val.accepts);
  };
  function NativeFileSystemManager_ChooseEntries_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemManager_ChooseEntries_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.entries = null;
  };
  NativeFileSystemManager_ChooseEntries_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemManager_ChooseEntries_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemManager_ChooseEntries_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemManager_ChooseEntries_ResponseParams.entries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(native_file_system_directory_handle$.NativeFileSystemEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemManager_ChooseEntries_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemManager_ChooseEntries_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemManager_ChooseEntries_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.entries = decoder.decodeArrayPointer(new codec.PointerTo(native_file_system_directory_handle$.NativeFileSystemEntry));
    return val;
  };

  NativeFileSystemManager_ChooseEntries_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemManager_ChooseEntries_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeArrayPointer(new codec.PointerTo(native_file_system_directory_handle$.NativeFileSystemEntry), val.entries);
  };
  var kNativeFileSystemManager_GetSandboxedFileSystem_Name = 0;
  var kNativeFileSystemManager_ChooseEntries_Name = 1;

  function NativeFileSystemManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NativeFileSystemManager,
                                                   handleOrPtrInfo);
  }

  function NativeFileSystemManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NativeFileSystemManager, associatedInterfacePtrInfo);
  }

  NativeFileSystemManagerAssociatedPtr.prototype =
      Object.create(NativeFileSystemManagerPtr.prototype);
  NativeFileSystemManagerAssociatedPtr.prototype.constructor =
      NativeFileSystemManagerAssociatedPtr;

  function NativeFileSystemManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  NativeFileSystemManagerPtr.prototype.getSandboxedFileSystem = function() {
    return NativeFileSystemManagerProxy.prototype.getSandboxedFileSystem
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemManagerProxy.prototype.getSandboxedFileSystem = function() {
    var params_ = new NativeFileSystemManager_GetSandboxedFileSystem_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemManager_GetSandboxedFileSystem_Name,
          codec.align(NativeFileSystemManager_GetSandboxedFileSystem_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemManager_GetSandboxedFileSystem_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemManagerPtr.prototype.chooseEntries = function() {
    return NativeFileSystemManagerProxy.prototype.chooseEntries
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemManagerProxy.prototype.chooseEntries = function(type, accepts, includeAcceptsAll) {
    var params_ = new NativeFileSystemManager_ChooseEntries_Params();
    params_.type = type;
    params_.accepts = accepts;
    params_.includeAcceptsAll = includeAcceptsAll;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemManager_ChooseEntries_Name,
          codec.align(NativeFileSystemManager_ChooseEntries_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemManager_ChooseEntries_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemManager_ChooseEntries_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function NativeFileSystemManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  NativeFileSystemManagerStub.prototype.getSandboxedFileSystem = function() {
    return this.delegate_ && this.delegate_.getSandboxedFileSystem && this.delegate_.getSandboxedFileSystem();
  }
  NativeFileSystemManagerStub.prototype.chooseEntries = function(type, accepts, includeAcceptsAll) {
    return this.delegate_ && this.delegate_.chooseEntries && this.delegate_.chooseEntries(type, accepts, includeAcceptsAll);
  }

  NativeFileSystemManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  NativeFileSystemManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemManager_GetSandboxedFileSystem_Name:
      var params = reader.decodeStruct(NativeFileSystemManager_GetSandboxedFileSystem_Params);
      this.getSandboxedFileSystem().then(function(response) {
        var responseParams =
            new NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams();
        responseParams.result = response.result;
        responseParams.directory = response.directory;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemManager_GetSandboxedFileSystem_Name,
            codec.align(NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemManager_ChooseEntries_Name:
      var params = reader.decodeStruct(NativeFileSystemManager_ChooseEntries_Params);
      this.chooseEntries(params.type, params.accepts, params.includeAcceptsAll).then(function(response) {
        var responseParams =
            new NativeFileSystemManager_ChooseEntries_ResponseParams();
        responseParams.result = response.result;
        responseParams.entries = response.entries;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemManager_ChooseEntries_Name,
            codec.align(NativeFileSystemManager_ChooseEntries_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemManager_ChooseEntries_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNativeFileSystemManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNativeFileSystemManager_GetSandboxedFileSystem_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemManager_GetSandboxedFileSystem_Params;
      break;
      case kNativeFileSystemManager_ChooseEntries_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemManager_ChooseEntries_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNativeFileSystemManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNativeFileSystemManager_GetSandboxedFileSystem_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemManager_GetSandboxedFileSystem_ResponseParams;
        break;
      case kNativeFileSystemManager_ChooseEntries_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemManager_ChooseEntries_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NativeFileSystemManager = {
    name: 'blink.mojom.NativeFileSystemManager',
    kVersion: 0,
    ptrClass: NativeFileSystemManagerPtr,
    proxyClass: NativeFileSystemManagerProxy,
    stubClass: NativeFileSystemManagerStub,
    validateRequest: validateNativeFileSystemManagerRequest,
    validateResponse: validateNativeFileSystemManagerResponse,
  };
  NativeFileSystemManagerStub.prototype.validator = validateNativeFileSystemManagerRequest;
  NativeFileSystemManagerProxy.prototype.validator = validateNativeFileSystemManagerResponse;
  exports.ChooseFileSystemEntryType = ChooseFileSystemEntryType;
  exports.ChooseFileSystemEntryAcceptsOption = ChooseFileSystemEntryAcceptsOption;
  exports.NativeFileSystemManager = NativeFileSystemManager;
  exports.NativeFileSystemManagerPtr = NativeFileSystemManagerPtr;
  exports.NativeFileSystemManagerAssociatedPtr = NativeFileSystemManagerAssociatedPtr;
})();