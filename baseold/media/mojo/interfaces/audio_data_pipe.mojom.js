// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/audio_data_pipe.mojom';
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
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }



  function ReadWriteAudioDataPipe(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReadWriteAudioDataPipe.prototype.initDefaults_ = function() {
    this.sharedMemory = null;
    this.socket = null;
  };
  ReadWriteAudioDataPipe.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReadWriteAudioDataPipe.validate = function(messageValidator, offset) {
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


    // validate ReadWriteAudioDataPipe.sharedMemory
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReadWriteAudioDataPipe.socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReadWriteAudioDataPipe.encodedSize = codec.kStructHeaderSize + 16;

  ReadWriteAudioDataPipe.decode = function(decoder) {
    var packed;
    var val = new ReadWriteAudioDataPipe();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sharedMemory = decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
    val.socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ReadWriteAudioDataPipe.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReadWriteAudioDataPipe.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.sharedMemory);
    encoder.encodeStruct(codec.Handle, val.socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ReadOnlyAudioDataPipe(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReadOnlyAudioDataPipe.prototype.initDefaults_ = function() {
    this.sharedMemory = null;
    this.socket = null;
  };
  ReadOnlyAudioDataPipe.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReadOnlyAudioDataPipe.validate = function(messageValidator, offset) {
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


    // validate ReadOnlyAudioDataPipe.sharedMemory
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_memory$.ReadOnlySharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReadOnlyAudioDataPipe.socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReadOnlyAudioDataPipe.encodedSize = codec.kStructHeaderSize + 16;

  ReadOnlyAudioDataPipe.decode = function(decoder) {
    var packed;
    var val = new ReadOnlyAudioDataPipe();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sharedMemory = decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
    val.socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ReadOnlyAudioDataPipe.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReadOnlyAudioDataPipe.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.sharedMemory);
    encoder.encodeStruct(codec.Handle, val.socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.ReadWriteAudioDataPipe = ReadWriteAudioDataPipe;
  exports.ReadOnlyAudioDataPipe = ReadOnlyAudioDataPipe;
})();