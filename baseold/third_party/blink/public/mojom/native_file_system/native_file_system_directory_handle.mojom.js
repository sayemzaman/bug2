// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/native_file_system/native_file_system_directory_handle.mojom';
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



  function NativeFileSystemEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemEntry.prototype.initDefaults_ = function() {
    this.entryHandle = null;
    this.name = null;
  };
  NativeFileSystemEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemEntry.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemEntry.entryHandle
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, NativeFileSystemHandle, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemEntry.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemEntry.encodedSize = codec.kStructHeaderSize + 24;

  NativeFileSystemEntry.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entryHandle = decoder.decodeStruct(NativeFileSystemHandle);
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  NativeFileSystemEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(NativeFileSystemHandle, val.entryHandle);
    encoder.encodeStruct(codec.String, val.name);
  };
  function NativeFileSystemDirectoryHandle_GetFile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_GetFile_Params.prototype.initDefaults_ = function() {
    this.name = null;
    this.create = false;
  };
  NativeFileSystemDirectoryHandle_GetFile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_GetFile_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_GetFile_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_GetFile_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_GetFile_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_GetFile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.create = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemDirectoryHandle_GetFile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_GetFile_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    packed = 0;
    packed |= (val.create & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NativeFileSystemDirectoryHandle_GetFile_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_GetFile_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.file = new native_file_system_file_handle$.NativeFileSystemFileHandlePtr();
  };
  NativeFileSystemDirectoryHandle_GetFile_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_GetFile_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_GetFile_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_GetFile_ResponseParams.file
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_GetFile_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_GetFile_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_GetFile_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.file = decoder.decodeStruct(new codec.NullableInterface(native_file_system_file_handle$.NativeFileSystemFileHandlePtr));
    return val;
  };

  NativeFileSystemDirectoryHandle_GetFile_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_GetFile_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStruct(new codec.NullableInterface(native_file_system_file_handle$.NativeFileSystemFileHandlePtr), val.file);
  };
  function NativeFileSystemDirectoryHandle_GetDirectory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_GetDirectory_Params.prototype.initDefaults_ = function() {
    this.name = null;
    this.create = false;
  };
  NativeFileSystemDirectoryHandle_GetDirectory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_GetDirectory_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_GetDirectory_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_GetDirectory_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_GetDirectory_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_GetDirectory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.create = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemDirectoryHandle_GetDirectory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_GetDirectory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    packed = 0;
    packed |= (val.create & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.directory = new NativeFileSystemDirectoryHandlePtr();
  };
  NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.directory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.directory = decoder.decodeStruct(new codec.NullableInterface(NativeFileSystemDirectoryHandlePtr));
    return val;
  };

  NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStruct(new codec.NullableInterface(NativeFileSystemDirectoryHandlePtr), val.directory);
  };
  function NativeFileSystemDirectoryHandle_GetEntries_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_GetEntries_Params.prototype.initDefaults_ = function() {
  };
  NativeFileSystemDirectoryHandle_GetEntries_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_GetEntries_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemDirectoryHandle_GetEntries_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeFileSystemDirectoryHandle_GetEntries_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_GetEntries_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeFileSystemDirectoryHandle_GetEntries_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_GetEntries_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NativeFileSystemDirectoryHandle_GetEntries_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.entries = null;
  };
  NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.entries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(NativeFileSystemEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_GetEntries_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.entries = decoder.decodeArrayPointer(new codec.PointerTo(NativeFileSystemEntry));
    return val;
  };

  NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeArrayPointer(new codec.PointerTo(NativeFileSystemEntry), val.entries);
  };
  function NativeFileSystemDirectoryHandle_MoveFrom_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_MoveFrom_Params.prototype.initDefaults_ = function() {
    this.source = new native_file_system_transfer_token$.NativeFileSystemTransferTokenPtr();
    this.name = null;
  };
  NativeFileSystemDirectoryHandle_MoveFrom_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_MoveFrom_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_MoveFrom_Params.source
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_MoveFrom_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_MoveFrom_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_MoveFrom_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_MoveFrom_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.source = decoder.decodeStruct(new codec.Interface(native_file_system_transfer_token$.NativeFileSystemTransferTokenPtr));
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  NativeFileSystemDirectoryHandle_MoveFrom_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_MoveFrom_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(native_file_system_transfer_token$.NativeFileSystemTransferTokenPtr), val.source);
    encoder.encodeStruct(codec.String, val.name);
  };
  function NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.entry = null;
  };
  NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.entry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NativeFileSystemEntry, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.entry = decoder.decodeStructPointer(NativeFileSystemEntry);
    return val;
  };

  NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStructPointer(NativeFileSystemEntry, val.entry);
  };
  function NativeFileSystemDirectoryHandle_CopyFrom_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_CopyFrom_Params.prototype.initDefaults_ = function() {
    this.source = new native_file_system_transfer_token$.NativeFileSystemTransferTokenPtr();
    this.name = null;
  };
  NativeFileSystemDirectoryHandle_CopyFrom_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_CopyFrom_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_CopyFrom_Params.source
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_CopyFrom_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_CopyFrom_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_CopyFrom_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_CopyFrom_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.source = decoder.decodeStruct(new codec.Interface(native_file_system_transfer_token$.NativeFileSystemTransferTokenPtr));
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  NativeFileSystemDirectoryHandle_CopyFrom_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_CopyFrom_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(native_file_system_transfer_token$.NativeFileSystemTransferTokenPtr), val.source);
    encoder.encodeStruct(codec.String, val.name);
  };
  function NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.entry = null;
  };
  NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.entry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NativeFileSystemEntry, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.entry = decoder.decodeStructPointer(NativeFileSystemEntry);
    return val;
  };

  NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStructPointer(NativeFileSystemEntry, val.entry);
  };
  function NativeFileSystemDirectoryHandle_Remove_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_Remove_Params.prototype.initDefaults_ = function() {
    this.recurse = false;
  };
  NativeFileSystemDirectoryHandle_Remove_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_Remove_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemDirectoryHandle_Remove_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemDirectoryHandle_Remove_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_Remove_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.recurse = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemDirectoryHandle_Remove_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_Remove_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.recurse & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NativeFileSystemDirectoryHandle_Remove_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_Remove_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  NativeFileSystemDirectoryHandle_Remove_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_Remove_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_Remove_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_Remove_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemDirectoryHandle_Remove_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_Remove_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    return val;
  };

  NativeFileSystemDirectoryHandle_Remove_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_Remove_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
  };
  function NativeFileSystemDirectoryHandle_Transfer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemDirectoryHandle_Transfer_Params.prototype.initDefaults_ = function() {
    this.token = new bindings.InterfaceRequest();
  };
  NativeFileSystemDirectoryHandle_Transfer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemDirectoryHandle_Transfer_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemDirectoryHandle_Transfer_Params.token
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemDirectoryHandle_Transfer_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemDirectoryHandle_Transfer_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemDirectoryHandle_Transfer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemDirectoryHandle_Transfer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemDirectoryHandle_Transfer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.token);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NativeFileSystemHandle(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  NativeFileSystemHandle.Tags = {
    file: 0,
    directory: 1,
  };

  NativeFileSystemHandle.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  NativeFileSystemHandle.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "file",
        "directory",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a NativeFileSystemHandle member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(NativeFileSystemHandle.prototype, "file", {
    get: function() {
      if (this.$tag != NativeFileSystemHandle.Tags.file) {
        throw new ReferenceError(
            "NativeFileSystemHandle.file is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = NativeFileSystemHandle.Tags.file;
      this.$data = value;
    }
  });
  Object.defineProperty(NativeFileSystemHandle.prototype, "directory", {
    get: function() {
      if (this.$tag != NativeFileSystemHandle.Tags.directory) {
        throw new ReferenceError(
            "NativeFileSystemHandle.directory is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = NativeFileSystemHandle.Tags.directory;
      this.$data = value;
    }
  });


    NativeFileSystemHandle.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case NativeFileSystemHandle.Tags.file:
          encoder.encodeStruct(new codec.Interface(native_file_system_file_handle$.NativeFileSystemFileHandlePtr), val.file);
          break;
        case NativeFileSystemHandle.Tags.directory:
          encoder.encodeStruct(new codec.Interface(NativeFileSystemDirectoryHandlePtr), val.directory);
          break;
      }
      encoder.align();
    };


    NativeFileSystemHandle.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new NativeFileSystemHandle();
      var tag = decoder.readUint32();
      switch (tag) {
        case NativeFileSystemHandle.Tags.file:
          result.file = decoder.decodeStruct(new codec.Interface(native_file_system_file_handle$.NativeFileSystemFileHandlePtr));
          break;
        case NativeFileSystemHandle.Tags.directory:
          result.directory = decoder.decodeStruct(new codec.Interface(NativeFileSystemDirectoryHandlePtr));
          break;
      }
      decoder.align();

      return result;
    };


    NativeFileSystemHandle.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case NativeFileSystemHandle.Tags.file:
          

    // validate NativeFileSystemHandle.file
    err = messageValidator.validateInterface(data_offset, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case NativeFileSystemHandle.Tags.directory:
          

    // validate NativeFileSystemHandle.directory
    err = messageValidator.validateInterface(data_offset, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  NativeFileSystemHandle.encodedSize = 16;
  var kNativeFileSystemDirectoryHandle_GetFile_Name = 0;
  var kNativeFileSystemDirectoryHandle_GetDirectory_Name = 1;
  var kNativeFileSystemDirectoryHandle_GetEntries_Name = 2;
  var kNativeFileSystemDirectoryHandle_MoveFrom_Name = 3;
  var kNativeFileSystemDirectoryHandle_CopyFrom_Name = 4;
  var kNativeFileSystemDirectoryHandle_Remove_Name = 5;
  var kNativeFileSystemDirectoryHandle_Transfer_Name = 6;

  function NativeFileSystemDirectoryHandlePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NativeFileSystemDirectoryHandle,
                                                   handleOrPtrInfo);
  }

  function NativeFileSystemDirectoryHandleAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NativeFileSystemDirectoryHandle, associatedInterfacePtrInfo);
  }

  NativeFileSystemDirectoryHandleAssociatedPtr.prototype =
      Object.create(NativeFileSystemDirectoryHandlePtr.prototype);
  NativeFileSystemDirectoryHandleAssociatedPtr.prototype.constructor =
      NativeFileSystemDirectoryHandleAssociatedPtr;

  function NativeFileSystemDirectoryHandleProxy(receiver) {
    this.receiver_ = receiver;
  }
  NativeFileSystemDirectoryHandlePtr.prototype.getFile = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.getFile
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.getFile = function(name, create) {
    var params_ = new NativeFileSystemDirectoryHandle_GetFile_Params();
    params_.name = name;
    params_.create = create;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemDirectoryHandle_GetFile_Name,
          codec.align(NativeFileSystemDirectoryHandle_GetFile_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemDirectoryHandle_GetFile_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemDirectoryHandle_GetFile_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemDirectoryHandlePtr.prototype.getDirectory = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.getDirectory
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.getDirectory = function(name, create) {
    var params_ = new NativeFileSystemDirectoryHandle_GetDirectory_Params();
    params_.name = name;
    params_.create = create;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemDirectoryHandle_GetDirectory_Name,
          codec.align(NativeFileSystemDirectoryHandle_GetDirectory_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemDirectoryHandle_GetDirectory_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemDirectoryHandlePtr.prototype.getEntries = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.getEntries
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.getEntries = function() {
    var params_ = new NativeFileSystemDirectoryHandle_GetEntries_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemDirectoryHandle_GetEntries_Name,
          codec.align(NativeFileSystemDirectoryHandle_GetEntries_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemDirectoryHandle_GetEntries_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemDirectoryHandle_GetEntries_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemDirectoryHandlePtr.prototype.moveFrom = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.moveFrom
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.moveFrom = function(source, name) {
    var params_ = new NativeFileSystemDirectoryHandle_MoveFrom_Params();
    params_.source = source;
    params_.name = name;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemDirectoryHandle_MoveFrom_Name,
          codec.align(NativeFileSystemDirectoryHandle_MoveFrom_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemDirectoryHandle_MoveFrom_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemDirectoryHandlePtr.prototype.copyFrom = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.copyFrom
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.copyFrom = function(source, name) {
    var params_ = new NativeFileSystemDirectoryHandle_CopyFrom_Params();
    params_.source = source;
    params_.name = name;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemDirectoryHandle_CopyFrom_Name,
          codec.align(NativeFileSystemDirectoryHandle_CopyFrom_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemDirectoryHandle_CopyFrom_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemDirectoryHandlePtr.prototype.remove = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.remove
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.remove = function(recurse) {
    var params_ = new NativeFileSystemDirectoryHandle_Remove_Params();
    params_.recurse = recurse;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemDirectoryHandle_Remove_Name,
          codec.align(NativeFileSystemDirectoryHandle_Remove_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemDirectoryHandle_Remove_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemDirectoryHandle_Remove_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemDirectoryHandlePtr.prototype.transfer = function() {
    return NativeFileSystemDirectoryHandleProxy.prototype.transfer
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemDirectoryHandleProxy.prototype.transfer = function(token) {
    var params_ = new NativeFileSystemDirectoryHandle_Transfer_Params();
    params_.token = token;
    var builder = new codec.MessageV0Builder(
        kNativeFileSystemDirectoryHandle_Transfer_Name,
        codec.align(NativeFileSystemDirectoryHandle_Transfer_Params.encodedSize));
    builder.encodeStruct(NativeFileSystemDirectoryHandle_Transfer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NativeFileSystemDirectoryHandleStub(delegate) {
    this.delegate_ = delegate;
  }
  NativeFileSystemDirectoryHandleStub.prototype.getFile = function(name, create) {
    return this.delegate_ && this.delegate_.getFile && this.delegate_.getFile(name, create);
  }
  NativeFileSystemDirectoryHandleStub.prototype.getDirectory = function(name, create) {
    return this.delegate_ && this.delegate_.getDirectory && this.delegate_.getDirectory(name, create);
  }
  NativeFileSystemDirectoryHandleStub.prototype.getEntries = function() {
    return this.delegate_ && this.delegate_.getEntries && this.delegate_.getEntries();
  }
  NativeFileSystemDirectoryHandleStub.prototype.moveFrom = function(source, name) {
    return this.delegate_ && this.delegate_.moveFrom && this.delegate_.moveFrom(source, name);
  }
  NativeFileSystemDirectoryHandleStub.prototype.copyFrom = function(source, name) {
    return this.delegate_ && this.delegate_.copyFrom && this.delegate_.copyFrom(source, name);
  }
  NativeFileSystemDirectoryHandleStub.prototype.remove = function(recurse) {
    return this.delegate_ && this.delegate_.remove && this.delegate_.remove(recurse);
  }
  NativeFileSystemDirectoryHandleStub.prototype.transfer = function(token) {
    return this.delegate_ && this.delegate_.transfer && this.delegate_.transfer(token);
  }

  NativeFileSystemDirectoryHandleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemDirectoryHandle_Transfer_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_Transfer_Params);
      this.transfer(params.token);
      return true;
    default:
      return false;
    }
  };

  NativeFileSystemDirectoryHandleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemDirectoryHandle_GetFile_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_GetFile_Params);
      this.getFile(params.name, params.create).then(function(response) {
        var responseParams =
            new NativeFileSystemDirectoryHandle_GetFile_ResponseParams();
        responseParams.result = response.result;
        responseParams.file = response.file;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemDirectoryHandle_GetFile_Name,
            codec.align(NativeFileSystemDirectoryHandle_GetFile_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemDirectoryHandle_GetFile_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemDirectoryHandle_GetDirectory_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_GetDirectory_Params);
      this.getDirectory(params.name, params.create).then(function(response) {
        var responseParams =
            new NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams();
        responseParams.result = response.result;
        responseParams.directory = response.directory;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemDirectoryHandle_GetDirectory_Name,
            codec.align(NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemDirectoryHandle_GetEntries_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_GetEntries_Params);
      this.getEntries().then(function(response) {
        var responseParams =
            new NativeFileSystemDirectoryHandle_GetEntries_ResponseParams();
        responseParams.result = response.result;
        responseParams.entries = response.entries;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemDirectoryHandle_GetEntries_Name,
            codec.align(NativeFileSystemDirectoryHandle_GetEntries_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemDirectoryHandle_GetEntries_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemDirectoryHandle_MoveFrom_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_MoveFrom_Params);
      this.moveFrom(params.source, params.name).then(function(response) {
        var responseParams =
            new NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams();
        responseParams.result = response.result;
        responseParams.entry = response.entry;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemDirectoryHandle_MoveFrom_Name,
            codec.align(NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemDirectoryHandle_CopyFrom_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_CopyFrom_Params);
      this.copyFrom(params.source, params.name).then(function(response) {
        var responseParams =
            new NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams();
        responseParams.result = response.result;
        responseParams.entry = response.entry;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemDirectoryHandle_CopyFrom_Name,
            codec.align(NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemDirectoryHandle_Remove_Name:
      var params = reader.decodeStruct(NativeFileSystemDirectoryHandle_Remove_Params);
      this.remove(params.recurse).then(function(response) {
        var responseParams =
            new NativeFileSystemDirectoryHandle_Remove_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemDirectoryHandle_Remove_Name,
            codec.align(NativeFileSystemDirectoryHandle_Remove_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemDirectoryHandle_Remove_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNativeFileSystemDirectoryHandleRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNativeFileSystemDirectoryHandle_GetFile_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemDirectoryHandle_GetFile_Params;
      break;
      case kNativeFileSystemDirectoryHandle_GetDirectory_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemDirectoryHandle_GetDirectory_Params;
      break;
      case kNativeFileSystemDirectoryHandle_GetEntries_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemDirectoryHandle_GetEntries_Params;
      break;
      case kNativeFileSystemDirectoryHandle_MoveFrom_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemDirectoryHandle_MoveFrom_Params;
      break;
      case kNativeFileSystemDirectoryHandle_CopyFrom_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemDirectoryHandle_CopyFrom_Params;
      break;
      case kNativeFileSystemDirectoryHandle_Remove_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemDirectoryHandle_Remove_Params;
      break;
      case kNativeFileSystemDirectoryHandle_Transfer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_Transfer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNativeFileSystemDirectoryHandleResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNativeFileSystemDirectoryHandle_GetFile_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_GetFile_ResponseParams;
        break;
      case kNativeFileSystemDirectoryHandle_GetDirectory_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_GetDirectory_ResponseParams;
        break;
      case kNativeFileSystemDirectoryHandle_GetEntries_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_GetEntries_ResponseParams;
        break;
      case kNativeFileSystemDirectoryHandle_MoveFrom_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_MoveFrom_ResponseParams;
        break;
      case kNativeFileSystemDirectoryHandle_CopyFrom_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_CopyFrom_ResponseParams;
        break;
      case kNativeFileSystemDirectoryHandle_Remove_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemDirectoryHandle_Remove_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NativeFileSystemDirectoryHandle = {
    name: 'blink.mojom.NativeFileSystemDirectoryHandle',
    kVersion: 0,
    ptrClass: NativeFileSystemDirectoryHandlePtr,
    proxyClass: NativeFileSystemDirectoryHandleProxy,
    stubClass: NativeFileSystemDirectoryHandleStub,
    validateRequest: validateNativeFileSystemDirectoryHandleRequest,
    validateResponse: validateNativeFileSystemDirectoryHandleResponse,
  };
  NativeFileSystemDirectoryHandleStub.prototype.validator = validateNativeFileSystemDirectoryHandleRequest;
  NativeFileSystemDirectoryHandleProxy.prototype.validator = validateNativeFileSystemDirectoryHandleResponse;
  exports.NativeFileSystemEntry = NativeFileSystemEntry;
  exports.NativeFileSystemHandle = NativeFileSystemHandle;
  exports.NativeFileSystemDirectoryHandle = NativeFileSystemDirectoryHandle;
  exports.NativeFileSystemDirectoryHandlePtr = NativeFileSystemDirectoryHandlePtr;
  exports.NativeFileSystemDirectoryHandleAssociatedPtr = NativeFileSystemDirectoryHandleAssociatedPtr;
})();