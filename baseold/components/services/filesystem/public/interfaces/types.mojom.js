// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/filesystem/public/interfaces/types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('filesystem.mojom');
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }


  var kFlagOpen = 0x1;
  var kFlagCreate = 0x2;
  var kFlagOpenAlways = 0x4;
  var kCreateAlways = 0x8;
  var kFlagOpenTruncated = 0x10;
  var kFlagRead = 0x20;
  var kFlagWrite = 0x40;
  var kFlagAppend = 0x80;
  var kDeleteOnClose = 0x2000;
  var kFlagWriteAttributes = 0x4000;
  var kDeleteFlagRecursive = 0x1;
  var Whence = {};
  Whence.FROM_BEGIN = 0;
  Whence.FROM_CURRENT = 1;
  Whence.FROM_END = 2;
  Whence.MIN_VALUE = 0,
  Whence.MAX_VALUE = 2,

  Whence.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  Whence.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FsFileType = {};
  FsFileType.UNKNOWN = 0;
  FsFileType.REGULAR_FILE = FsFileType.UNKNOWN + 1;
  FsFileType.DIRECTORY = FsFileType.REGULAR_FILE + 1;
  FsFileType.MIN_VALUE = 0,
  FsFileType.MAX_VALUE = 2,

  FsFileType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FsFileType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function TimespecOrNow(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TimespecOrNow.prototype.initDefaults_ = function() {
    this.now = false;
    this.seconds = 0;
  };
  TimespecOrNow.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TimespecOrNow.validate = function(messageValidator, offset) {
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

  TimespecOrNow.encodedSize = codec.kStructHeaderSize + 16;

  TimespecOrNow.decode = function(decoder) {
    var packed;
    var val = new TimespecOrNow();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.now = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.seconds = decoder.decodeStruct(codec.Double);
    return val;
  };

  TimespecOrNow.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TimespecOrNow.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.now & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.seconds);
  };
  function FileInformation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileInformation.prototype.initDefaults_ = function() {
    this.type = 0;
    this.size = 0;
    this.atime = 0;
    this.mtime = 0;
    this.ctime = 0;
  };
  FileInformation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileInformation.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileInformation.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FsFileType);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  FileInformation.encodedSize = codec.kStructHeaderSize + 40;

  FileInformation.decode = function(decoder) {
    var packed;
    var val = new FileInformation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size = decoder.decodeStruct(codec.Int64);
    val.atime = decoder.decodeStruct(codec.Double);
    val.mtime = decoder.decodeStruct(codec.Double);
    val.ctime = decoder.decodeStruct(codec.Double);
    return val;
  };

  FileInformation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileInformation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.size);
    encoder.encodeStruct(codec.Double, val.atime);
    encoder.encodeStruct(codec.Double, val.mtime);
    encoder.encodeStruct(codec.Double, val.ctime);
  };
  function DirectoryEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DirectoryEntry.prototype.initDefaults_ = function() {
    this.name = null;
    this.type = 0;
  };
  DirectoryEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DirectoryEntry.validate = function(messageValidator, offset) {
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


    // validate DirectoryEntry.name
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DirectoryEntry.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, FsFileType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DirectoryEntry.encodedSize = codec.kStructHeaderSize + 16;

  DirectoryEntry.decode = function(decoder) {
    var packed;
    var val = new DirectoryEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStructPointer(file_path$.FilePath);
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DirectoryEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DirectoryEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.name);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.kFlagOpen = kFlagOpen;
  exports.kFlagCreate = kFlagCreate;
  exports.kFlagOpenAlways = kFlagOpenAlways;
  exports.kCreateAlways = kCreateAlways;
  exports.kFlagOpenTruncated = kFlagOpenTruncated;
  exports.kFlagRead = kFlagRead;
  exports.kFlagWrite = kFlagWrite;
  exports.kFlagAppend = kFlagAppend;
  exports.kDeleteOnClose = kDeleteOnClose;
  exports.kFlagWriteAttributes = kFlagWriteAttributes;
  exports.kDeleteFlagRecursive = kDeleteFlagRecursive;
  exports.Whence = Whence;
  exports.FsFileType = FsFileType;
  exports.TimespecOrNow = TimespecOrNow;
  exports.FileInformation = FileInformation;
  exports.DirectoryEntry = DirectoryEntry;
})();