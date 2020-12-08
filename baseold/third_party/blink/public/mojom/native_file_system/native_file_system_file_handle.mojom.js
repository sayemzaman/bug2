// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/native_file_system/native_file_system_file_handle.mojom';
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
  var blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/blob.mojom', '../blob/blob.mojom.js');
  }
  var serialized_blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/serialized_blob.mojom', '../blob/serialized_blob.mojom.js');
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



  function NativeFileSystemFileHandle_AsBlob_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_AsBlob_Params.prototype.initDefaults_ = function() {
  };
  NativeFileSystemFileHandle_AsBlob_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_AsBlob_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemFileHandle_AsBlob_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeFileSystemFileHandle_AsBlob_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_AsBlob_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeFileSystemFileHandle_AsBlob_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_AsBlob_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NativeFileSystemFileHandle_AsBlob_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_AsBlob_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.blob = null;
  };
  NativeFileSystemFileHandle_AsBlob_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_AsBlob_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemFileHandle_AsBlob_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemFileHandle_AsBlob_ResponseParams.blob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_AsBlob_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemFileHandle_AsBlob_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_AsBlob_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.blob = decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    return val;
  };

  NativeFileSystemFileHandle_AsBlob_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_AsBlob_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.blob);
  };
  function NativeFileSystemFileHandle_Remove_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Remove_Params.prototype.initDefaults_ = function() {
  };
  NativeFileSystemFileHandle_Remove_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Remove_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemFileHandle_Remove_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeFileSystemFileHandle_Remove_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Remove_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeFileSystemFileHandle_Remove_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Remove_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NativeFileSystemFileHandle_Remove_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Remove_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  NativeFileSystemFileHandle_Remove_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Remove_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemFileHandle_Remove_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_Remove_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemFileHandle_Remove_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Remove_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    return val;
  };

  NativeFileSystemFileHandle_Remove_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Remove_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
  };
  function NativeFileSystemFileHandle_Write_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Write_Params.prototype.initDefaults_ = function() {
    this.offset = 0;
    this.data = new blob$.BlobPtr();
  };
  NativeFileSystemFileHandle_Write_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Write_Params.validate = function(messageValidator, offset) {
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



    // validate NativeFileSystemFileHandle_Write_Params.data
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_Write_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemFileHandle_Write_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Write_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.offset = decoder.decodeStruct(codec.Uint64);
    val.data = decoder.decodeStruct(new codec.Interface(blob$.BlobPtr));
    return val;
  };

  NativeFileSystemFileHandle_Write_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Write_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.offset);
    encoder.encodeStruct(new codec.Interface(blob$.BlobPtr), val.data);
  };
  function NativeFileSystemFileHandle_Write_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Write_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.bytesWritten = 0;
  };
  NativeFileSystemFileHandle_Write_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Write_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemFileHandle_Write_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_Write_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemFileHandle_Write_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Write_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.bytesWritten = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  NativeFileSystemFileHandle_Write_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Write_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStruct(codec.Uint64, val.bytesWritten);
  };
  function NativeFileSystemFileHandle_WriteStream_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_WriteStream_Params.prototype.initDefaults_ = function() {
    this.offset = 0;
    this.stream = null;
  };
  NativeFileSystemFileHandle_WriteStream_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_WriteStream_Params.validate = function(messageValidator, offset) {
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



    // validate NativeFileSystemFileHandle_WriteStream_Params.stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_WriteStream_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemFileHandle_WriteStream_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_WriteStream_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.offset = decoder.decodeStruct(codec.Uint64);
    val.stream = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemFileHandle_WriteStream_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_WriteStream_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.offset);
    encoder.encodeStruct(codec.Handle, val.stream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NativeFileSystemFileHandle_WriteStream_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_WriteStream_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.bytesWritten = 0;
  };
  NativeFileSystemFileHandle_WriteStream_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_WriteStream_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemFileHandle_WriteStream_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_WriteStream_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemFileHandle_WriteStream_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_WriteStream_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    val.bytesWritten = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  NativeFileSystemFileHandle_WriteStream_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_WriteStream_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
    encoder.encodeStruct(codec.Uint64, val.bytesWritten);
  };
  function NativeFileSystemFileHandle_Truncate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Truncate_Params.prototype.initDefaults_ = function() {
    this.length = 0;
  };
  NativeFileSystemFileHandle_Truncate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Truncate_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemFileHandle_Truncate_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemFileHandle_Truncate_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Truncate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.length = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  NativeFileSystemFileHandle_Truncate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Truncate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.length);
  };
  function NativeFileSystemFileHandle_Truncate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Truncate_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  NativeFileSystemFileHandle_Truncate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Truncate_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemFileHandle_Truncate_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, native_file_system_error$.NativeFileSystemError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_Truncate_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemFileHandle_Truncate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Truncate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(native_file_system_error$.NativeFileSystemError);
    return val;
  };

  NativeFileSystemFileHandle_Truncate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Truncate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(native_file_system_error$.NativeFileSystemError, val.result);
  };
  function NativeFileSystemFileHandle_Transfer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemFileHandle_Transfer_Params.prototype.initDefaults_ = function() {
    this.token = new bindings.InterfaceRequest();
  };
  NativeFileSystemFileHandle_Transfer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemFileHandle_Transfer_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemFileHandle_Transfer_Params.token
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemFileHandle_Transfer_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemFileHandle_Transfer_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemFileHandle_Transfer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemFileHandle_Transfer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemFileHandle_Transfer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.token);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kNativeFileSystemFileHandle_AsBlob_Name = 0;
  var kNativeFileSystemFileHandle_Remove_Name = 1;
  var kNativeFileSystemFileHandle_Write_Name = 2;
  var kNativeFileSystemFileHandle_WriteStream_Name = 3;
  var kNativeFileSystemFileHandle_Truncate_Name = 4;
  var kNativeFileSystemFileHandle_Transfer_Name = 5;

  function NativeFileSystemFileHandlePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NativeFileSystemFileHandle,
                                                   handleOrPtrInfo);
  }

  function NativeFileSystemFileHandleAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NativeFileSystemFileHandle, associatedInterfacePtrInfo);
  }

  NativeFileSystemFileHandleAssociatedPtr.prototype =
      Object.create(NativeFileSystemFileHandlePtr.prototype);
  NativeFileSystemFileHandleAssociatedPtr.prototype.constructor =
      NativeFileSystemFileHandleAssociatedPtr;

  function NativeFileSystemFileHandleProxy(receiver) {
    this.receiver_ = receiver;
  }
  NativeFileSystemFileHandlePtr.prototype.asBlob = function() {
    return NativeFileSystemFileHandleProxy.prototype.asBlob
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemFileHandleProxy.prototype.asBlob = function() {
    var params_ = new NativeFileSystemFileHandle_AsBlob_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemFileHandle_AsBlob_Name,
          codec.align(NativeFileSystemFileHandle_AsBlob_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemFileHandle_AsBlob_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemFileHandle_AsBlob_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemFileHandlePtr.prototype.remove = function() {
    return NativeFileSystemFileHandleProxy.prototype.remove
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemFileHandleProxy.prototype.remove = function() {
    var params_ = new NativeFileSystemFileHandle_Remove_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemFileHandle_Remove_Name,
          codec.align(NativeFileSystemFileHandle_Remove_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemFileHandle_Remove_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemFileHandle_Remove_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemFileHandlePtr.prototype.write = function() {
    return NativeFileSystemFileHandleProxy.prototype.write
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemFileHandleProxy.prototype.write = function(offset, data) {
    var params_ = new NativeFileSystemFileHandle_Write_Params();
    params_.offset = offset;
    params_.data = data;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemFileHandle_Write_Name,
          codec.align(NativeFileSystemFileHandle_Write_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemFileHandle_Write_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemFileHandle_Write_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemFileHandlePtr.prototype.writeStream = function() {
    return NativeFileSystemFileHandleProxy.prototype.writeStream
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemFileHandleProxy.prototype.writeStream = function(offset, stream) {
    var params_ = new NativeFileSystemFileHandle_WriteStream_Params();
    params_.offset = offset;
    params_.stream = stream;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemFileHandle_WriteStream_Name,
          codec.align(NativeFileSystemFileHandle_WriteStream_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemFileHandle_WriteStream_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemFileHandle_WriteStream_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemFileHandlePtr.prototype.truncate = function() {
    return NativeFileSystemFileHandleProxy.prototype.truncate
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemFileHandleProxy.prototype.truncate = function(length) {
    var params_ = new NativeFileSystemFileHandle_Truncate_Params();
    params_.length = length;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemFileHandle_Truncate_Name,
          codec.align(NativeFileSystemFileHandle_Truncate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemFileHandle_Truncate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemFileHandle_Truncate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemFileHandlePtr.prototype.transfer = function() {
    return NativeFileSystemFileHandleProxy.prototype.transfer
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemFileHandleProxy.prototype.transfer = function(token) {
    var params_ = new NativeFileSystemFileHandle_Transfer_Params();
    params_.token = token;
    var builder = new codec.MessageV0Builder(
        kNativeFileSystemFileHandle_Transfer_Name,
        codec.align(NativeFileSystemFileHandle_Transfer_Params.encodedSize));
    builder.encodeStruct(NativeFileSystemFileHandle_Transfer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NativeFileSystemFileHandleStub(delegate) {
    this.delegate_ = delegate;
  }
  NativeFileSystemFileHandleStub.prototype.asBlob = function() {
    return this.delegate_ && this.delegate_.asBlob && this.delegate_.asBlob();
  }
  NativeFileSystemFileHandleStub.prototype.remove = function() {
    return this.delegate_ && this.delegate_.remove && this.delegate_.remove();
  }
  NativeFileSystemFileHandleStub.prototype.write = function(offset, data) {
    return this.delegate_ && this.delegate_.write && this.delegate_.write(offset, data);
  }
  NativeFileSystemFileHandleStub.prototype.writeStream = function(offset, stream) {
    return this.delegate_ && this.delegate_.writeStream && this.delegate_.writeStream(offset, stream);
  }
  NativeFileSystemFileHandleStub.prototype.truncate = function(length) {
    return this.delegate_ && this.delegate_.truncate && this.delegate_.truncate(length);
  }
  NativeFileSystemFileHandleStub.prototype.transfer = function(token) {
    return this.delegate_ && this.delegate_.transfer && this.delegate_.transfer(token);
  }

  NativeFileSystemFileHandleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemFileHandle_Transfer_Name:
      var params = reader.decodeStruct(NativeFileSystemFileHandle_Transfer_Params);
      this.transfer(params.token);
      return true;
    default:
      return false;
    }
  };

  NativeFileSystemFileHandleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemFileHandle_AsBlob_Name:
      var params = reader.decodeStruct(NativeFileSystemFileHandle_AsBlob_Params);
      this.asBlob().then(function(response) {
        var responseParams =
            new NativeFileSystemFileHandle_AsBlob_ResponseParams();
        responseParams.result = response.result;
        responseParams.blob = response.blob;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemFileHandle_AsBlob_Name,
            codec.align(NativeFileSystemFileHandle_AsBlob_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemFileHandle_AsBlob_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemFileHandle_Remove_Name:
      var params = reader.decodeStruct(NativeFileSystemFileHandle_Remove_Params);
      this.remove().then(function(response) {
        var responseParams =
            new NativeFileSystemFileHandle_Remove_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemFileHandle_Remove_Name,
            codec.align(NativeFileSystemFileHandle_Remove_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemFileHandle_Remove_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemFileHandle_Write_Name:
      var params = reader.decodeStruct(NativeFileSystemFileHandle_Write_Params);
      this.write(params.offset, params.data).then(function(response) {
        var responseParams =
            new NativeFileSystemFileHandle_Write_ResponseParams();
        responseParams.result = response.result;
        responseParams.bytesWritten = response.bytesWritten;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemFileHandle_Write_Name,
            codec.align(NativeFileSystemFileHandle_Write_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemFileHandle_Write_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemFileHandle_WriteStream_Name:
      var params = reader.decodeStruct(NativeFileSystemFileHandle_WriteStream_Params);
      this.writeStream(params.offset, params.stream).then(function(response) {
        var responseParams =
            new NativeFileSystemFileHandle_WriteStream_ResponseParams();
        responseParams.result = response.result;
        responseParams.bytesWritten = response.bytesWritten;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemFileHandle_WriteStream_Name,
            codec.align(NativeFileSystemFileHandle_WriteStream_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemFileHandle_WriteStream_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNativeFileSystemFileHandle_Truncate_Name:
      var params = reader.decodeStruct(NativeFileSystemFileHandle_Truncate_Params);
      this.truncate(params.length).then(function(response) {
        var responseParams =
            new NativeFileSystemFileHandle_Truncate_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemFileHandle_Truncate_Name,
            codec.align(NativeFileSystemFileHandle_Truncate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemFileHandle_Truncate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNativeFileSystemFileHandleRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNativeFileSystemFileHandle_AsBlob_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemFileHandle_AsBlob_Params;
      break;
      case kNativeFileSystemFileHandle_Remove_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemFileHandle_Remove_Params;
      break;
      case kNativeFileSystemFileHandle_Write_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemFileHandle_Write_Params;
      break;
      case kNativeFileSystemFileHandle_WriteStream_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemFileHandle_WriteStream_Params;
      break;
      case kNativeFileSystemFileHandle_Truncate_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemFileHandle_Truncate_Params;
      break;
      case kNativeFileSystemFileHandle_Transfer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeFileSystemFileHandle_Transfer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNativeFileSystemFileHandleResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNativeFileSystemFileHandle_AsBlob_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemFileHandle_AsBlob_ResponseParams;
        break;
      case kNativeFileSystemFileHandle_Remove_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemFileHandle_Remove_ResponseParams;
        break;
      case kNativeFileSystemFileHandle_Write_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemFileHandle_Write_ResponseParams;
        break;
      case kNativeFileSystemFileHandle_WriteStream_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemFileHandle_WriteStream_ResponseParams;
        break;
      case kNativeFileSystemFileHandle_Truncate_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemFileHandle_Truncate_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NativeFileSystemFileHandle = {
    name: 'blink.mojom.NativeFileSystemFileHandle',
    kVersion: 0,
    ptrClass: NativeFileSystemFileHandlePtr,
    proxyClass: NativeFileSystemFileHandleProxy,
    stubClass: NativeFileSystemFileHandleStub,
    validateRequest: validateNativeFileSystemFileHandleRequest,
    validateResponse: validateNativeFileSystemFileHandleResponse,
  };
  NativeFileSystemFileHandleStub.prototype.validator = validateNativeFileSystemFileHandleRequest;
  NativeFileSystemFileHandleProxy.prototype.validator = validateNativeFileSystemFileHandleResponse;
  exports.NativeFileSystemFileHandle = NativeFileSystemFileHandle;
  exports.NativeFileSystemFileHandlePtr = NativeFileSystemFileHandlePtr;
  exports.NativeFileSystemFileHandleAssociatedPtr = NativeFileSystemFileHandleAssociatedPtr;
})();