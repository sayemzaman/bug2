// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/nfc.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');


  var NFCErrorType = {};
  NFCErrorType.SECURITY = 0;
  NFCErrorType.NOT_SUPPORTED = NFCErrorType.SECURITY + 1;
  NFCErrorType.DEVICE_DISABLED = NFCErrorType.NOT_SUPPORTED + 1;
  NFCErrorType.NOT_FOUND = NFCErrorType.DEVICE_DISABLED + 1;
  NFCErrorType.INVALID_MESSAGE = NFCErrorType.NOT_FOUND + 1;
  NFCErrorType.OPERATION_CANCELLED = NFCErrorType.INVALID_MESSAGE + 1;
  NFCErrorType.TIMER_EXPIRED = NFCErrorType.OPERATION_CANCELLED + 1;
  NFCErrorType.CANNOT_CANCEL = NFCErrorType.TIMER_EXPIRED + 1;
  NFCErrorType.IO_ERROR = NFCErrorType.CANNOT_CANCEL + 1;
  NFCErrorType.MIN_VALUE = 0,
  NFCErrorType.MAX_VALUE = 8,

  NFCErrorType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return true;
    }
    return false;
  };

  NFCErrorType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var NDEFRecordType = {};
  NDEFRecordType.EMPTY = 0;
  NDEFRecordType.TEXT = NDEFRecordType.EMPTY + 1;
  NDEFRecordType.URL = NDEFRecordType.TEXT + 1;
  NDEFRecordType.JSON = NDEFRecordType.URL + 1;
  NDEFRecordType.OPAQUE_RECORD = NDEFRecordType.JSON + 1;
  NDEFRecordType.MIN_VALUE = 0,
  NDEFRecordType.MAX_VALUE = 4,

  NDEFRecordType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  NDEFRecordType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var NFCPushTarget = {};
  NFCPushTarget.TAG = 0;
  NFCPushTarget.PEER = NFCPushTarget.TAG + 1;
  NFCPushTarget.ANY = NFCPushTarget.PEER + 1;
  NFCPushTarget.MIN_VALUE = 0,
  NFCPushTarget.MAX_VALUE = 2,

  NFCPushTarget.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  NFCPushTarget.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var NFCWatchMode = {};
  NFCWatchMode.WEBNFC_ONLY = 0;
  NFCWatchMode.ANY = NFCWatchMode.WEBNFC_ONLY + 1;
  NFCWatchMode.MIN_VALUE = 0,
  NFCWatchMode.MAX_VALUE = 1,

  NFCWatchMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  NFCWatchMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function NFCError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFCError.prototype.initDefaults_ = function() {
    this.errorType = 0;
  };
  NFCError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFCError.validate = function(messageValidator, offset) {
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


    // validate NFCError.errorType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NFCErrorType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFCError.encodedSize = codec.kStructHeaderSize + 8;

  NFCError.decode = function(decoder) {
    var packed;
    var val = new NFCError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NFCError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFCError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NDEFRecord(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NDEFRecord.prototype.initDefaults_ = function() {
    this.recordType = 0;
    this.mediaType = null;
    this.data = null;
  };
  NDEFRecord.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NDEFRecord.validate = function(messageValidator, offset) {
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


    // validate NDEFRecord.recordType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NDEFRecordType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NDEFRecord.mediaType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NDEFRecord.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NDEFRecord.encodedSize = codec.kStructHeaderSize + 24;

  NDEFRecord.decode = function(decoder) {
    var packed;
    var val = new NDEFRecord();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.recordType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.mediaType = decoder.decodeStruct(codec.NullableString);
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  NDEFRecord.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NDEFRecord.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.recordType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.mediaType);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function NDEFMessage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NDEFMessage.kMaxSize = 32768;
  NDEFMessage.prototype.initDefaults_ = function() {
    this.data = null;
    this.url = null;
  };
  NDEFMessage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NDEFMessage.validate = function(messageValidator, offset) {
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


    // validate NDEFMessage.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(NDEFRecord), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NDEFMessage.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NDEFMessage.encodedSize = codec.kStructHeaderSize + 16;

  NDEFMessage.decode = function(decoder) {
    var packed;
    var val = new NDEFMessage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(new codec.PointerTo(NDEFRecord));
    val.url = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  NDEFMessage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NDEFMessage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(NDEFRecord), val.data);
    encoder.encodeStruct(codec.NullableString, val.url);
  };
  function NFCPushOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFCPushOptions.prototype.initDefaults_ = function() {
    this.target = 0;
    this.ignoreRead = false;
    this.timeout = 0;
  };
  NFCPushOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFCPushOptions.validate = function(messageValidator, offset) {
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


    // validate NFCPushOptions.target
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NFCPushTarget);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  NFCPushOptions.encodedSize = codec.kStructHeaderSize + 16;

  NFCPushOptions.decode = function(decoder) {
    var packed;
    var val = new NFCPushOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.target = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.ignoreRead = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timeout = decoder.decodeStruct(codec.Double);
    return val;
  };

  NFCPushOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFCPushOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.target);
    packed = 0;
    packed |= (val.ignoreRead & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.timeout);
  };
  function NDEFRecordTypeFilter(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NDEFRecordTypeFilter.prototype.initDefaults_ = function() {
    this.recordType = 0;
  };
  NDEFRecordTypeFilter.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NDEFRecordTypeFilter.validate = function(messageValidator, offset) {
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


    // validate NDEFRecordTypeFilter.recordType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NDEFRecordType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NDEFRecordTypeFilter.encodedSize = codec.kStructHeaderSize + 8;

  NDEFRecordTypeFilter.decode = function(decoder) {
    var packed;
    var val = new NDEFRecordTypeFilter();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.recordType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NDEFRecordTypeFilter.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NDEFRecordTypeFilter.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.recordType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NFCWatchOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFCWatchOptions.prototype.initDefaults_ = function() {
    this.url = null;
    this.recordFilter = null;
    this.mediaType = null;
    this.mode = 0;
  };
  NFCWatchOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFCWatchOptions.validate = function(messageValidator, offset) {
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


    // validate NFCWatchOptions.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NFCWatchOptions.recordFilter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NDEFRecordTypeFilter, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NFCWatchOptions.mediaType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NFCWatchOptions.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, NFCWatchMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFCWatchOptions.encodedSize = codec.kStructHeaderSize + 32;

  NFCWatchOptions.decode = function(decoder) {
    var packed;
    var val = new NFCWatchOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.NullableString);
    val.recordFilter = decoder.decodeStructPointer(NDEFRecordTypeFilter);
    val.mediaType = decoder.decodeStruct(codec.NullableString);
    val.mode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NFCWatchOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFCWatchOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.url);
    encoder.encodeStructPointer(NDEFRecordTypeFilter, val.recordFilter);
    encoder.encodeStruct(codec.NullableString, val.mediaType);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NFC_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new NFCClientPtr();
  };
  NFC_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_SetClient_Params.validate = function(messageValidator, offset) {
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


    // validate NFC_SetClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  NFC_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(NFCClientPtr));
    return val;
  };

  NFC_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(NFCClientPtr), val.client);
  };
  function NFC_Push_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_Push_Params.prototype.initDefaults_ = function() {
    this.message = null;
    this.options = null;
  };
  NFC_Push_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_Push_Params.validate = function(messageValidator, offset) {
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


    // validate NFC_Push_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NDEFMessage, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NFC_Push_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NFCPushOptions, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_Push_Params.encodedSize = codec.kStructHeaderSize + 16;

  NFC_Push_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_Push_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStructPointer(NDEFMessage);
    val.options = decoder.decodeStructPointer(NFCPushOptions);
    return val;
  };

  NFC_Push_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_Push_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NDEFMessage, val.message);
    encoder.encodeStructPointer(NFCPushOptions, val.options);
  };
  function NFC_Push_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_Push_ResponseParams.prototype.initDefaults_ = function() {
    this.error = null;
  };
  NFC_Push_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_Push_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NFC_Push_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NFCError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_Push_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NFC_Push_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NFC_Push_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStructPointer(NFCError);
    return val;
  };

  NFC_Push_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_Push_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NFCError, val.error);
  };
  function NFC_CancelPush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_CancelPush_Params.prototype.initDefaults_ = function() {
    this.target = 0;
  };
  NFC_CancelPush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_CancelPush_Params.validate = function(messageValidator, offset) {
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


    // validate NFC_CancelPush_Params.target
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NFCPushTarget);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_CancelPush_Params.encodedSize = codec.kStructHeaderSize + 8;

  NFC_CancelPush_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_CancelPush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.target = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NFC_CancelPush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_CancelPush_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.target);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NFC_CancelPush_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_CancelPush_ResponseParams.prototype.initDefaults_ = function() {
    this.error = null;
  };
  NFC_CancelPush_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_CancelPush_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NFC_CancelPush_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NFCError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_CancelPush_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NFC_CancelPush_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NFC_CancelPush_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStructPointer(NFCError);
    return val;
  };

  NFC_CancelPush_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_CancelPush_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NFCError, val.error);
  };
  function NFC_Watch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_Watch_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  NFC_Watch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_Watch_Params.validate = function(messageValidator, offset) {
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


    // validate NFC_Watch_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NFCWatchOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_Watch_Params.encodedSize = codec.kStructHeaderSize + 8;

  NFC_Watch_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_Watch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(NFCWatchOptions);
    return val;
  };

  NFC_Watch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_Watch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NFCWatchOptions, val.options);
  };
  function NFC_Watch_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_Watch_ResponseParams.prototype.initDefaults_ = function() {
    this.id = 0;
    this.error = null;
  };
  NFC_Watch_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_Watch_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NFC_Watch_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NFCError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_Watch_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NFC_Watch_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NFC_Watch_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.error = decoder.decodeStructPointer(NFCError);
    return val;
  };

  NFC_Watch_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_Watch_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(NFCError, val.error);
  };
  function NFC_CancelWatch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_CancelWatch_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  NFC_CancelWatch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_CancelWatch_Params.validate = function(messageValidator, offset) {
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

  NFC_CancelWatch_Params.encodedSize = codec.kStructHeaderSize + 8;

  NFC_CancelWatch_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_CancelWatch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NFC_CancelWatch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_CancelWatch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NFC_CancelWatch_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_CancelWatch_ResponseParams.prototype.initDefaults_ = function() {
    this.error = null;
  };
  NFC_CancelWatch_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_CancelWatch_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NFC_CancelWatch_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NFCError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_CancelWatch_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NFC_CancelWatch_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NFC_CancelWatch_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStructPointer(NFCError);
    return val;
  };

  NFC_CancelWatch_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_CancelWatch_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NFCError, val.error);
  };
  function NFC_CancelAllWatches_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_CancelAllWatches_Params.prototype.initDefaults_ = function() {
  };
  NFC_CancelAllWatches_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_CancelAllWatches_Params.validate = function(messageValidator, offset) {
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

  NFC_CancelAllWatches_Params.encodedSize = codec.kStructHeaderSize + 0;

  NFC_CancelAllWatches_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_CancelAllWatches_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NFC_CancelAllWatches_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_CancelAllWatches_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NFC_CancelAllWatches_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_CancelAllWatches_ResponseParams.prototype.initDefaults_ = function() {
    this.error = null;
  };
  NFC_CancelAllWatches_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_CancelAllWatches_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NFC_CancelAllWatches_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NFCError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFC_CancelAllWatches_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NFC_CancelAllWatches_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NFC_CancelAllWatches_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStructPointer(NFCError);
    return val;
  };

  NFC_CancelAllWatches_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_CancelAllWatches_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NFCError, val.error);
  };
  function NFC_SuspendNFCOperations_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_SuspendNFCOperations_Params.prototype.initDefaults_ = function() {
  };
  NFC_SuspendNFCOperations_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_SuspendNFCOperations_Params.validate = function(messageValidator, offset) {
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

  NFC_SuspendNFCOperations_Params.encodedSize = codec.kStructHeaderSize + 0;

  NFC_SuspendNFCOperations_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_SuspendNFCOperations_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NFC_SuspendNFCOperations_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_SuspendNFCOperations_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NFC_ResumeNFCOperations_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFC_ResumeNFCOperations_Params.prototype.initDefaults_ = function() {
  };
  NFC_ResumeNFCOperations_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFC_ResumeNFCOperations_Params.validate = function(messageValidator, offset) {
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

  NFC_ResumeNFCOperations_Params.encodedSize = codec.kStructHeaderSize + 0;

  NFC_ResumeNFCOperations_Params.decode = function(decoder) {
    var packed;
    var val = new NFC_ResumeNFCOperations_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NFC_ResumeNFCOperations_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFC_ResumeNFCOperations_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NFCClient_OnWatch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NFCClient_OnWatch_Params.prototype.initDefaults_ = function() {
    this.watchIds = null;
    this.message = null;
  };
  NFCClient_OnWatch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NFCClient_OnWatch_Params.validate = function(messageValidator, offset) {
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


    // validate NFCClient_OnWatch_Params.watchIds
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Uint32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NFCClient_OnWatch_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NDEFMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NFCClient_OnWatch_Params.encodedSize = codec.kStructHeaderSize + 16;

  NFCClient_OnWatch_Params.decode = function(decoder) {
    var packed;
    var val = new NFCClient_OnWatch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.watchIds = decoder.decodeArrayPointer(codec.Uint32);
    val.message = decoder.decodeStructPointer(NDEFMessage);
    return val;
  };

  NFCClient_OnWatch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NFCClient_OnWatch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint32, val.watchIds);
    encoder.encodeStructPointer(NDEFMessage, val.message);
  };
  var kNFC_SetClient_Name = 0;
  var kNFC_Push_Name = 1;
  var kNFC_CancelPush_Name = 2;
  var kNFC_Watch_Name = 3;
  var kNFC_CancelWatch_Name = 4;
  var kNFC_CancelAllWatches_Name = 5;
  var kNFC_SuspendNFCOperations_Name = 6;
  var kNFC_ResumeNFCOperations_Name = 7;

  function NFCPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NFC,
                                                   handleOrPtrInfo);
  }

  function NFCAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NFC, associatedInterfacePtrInfo);
  }

  NFCAssociatedPtr.prototype =
      Object.create(NFCPtr.prototype);
  NFCAssociatedPtr.prototype.constructor =
      NFCAssociatedPtr;

  function NFCProxy(receiver) {
    this.receiver_ = receiver;
  }
  NFCPtr.prototype.setClient = function() {
    return NFCProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.setClient = function(client) {
    var params_ = new NFC_SetClient_Params();
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kNFC_SetClient_Name,
        codec.align(NFC_SetClient_Params.encodedSize));
    builder.encodeStruct(NFC_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NFCPtr.prototype.push = function() {
    return NFCProxy.prototype.push
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.push = function(message, options) {
    var params_ = new NFC_Push_Params();
    params_.message = message;
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNFC_Push_Name,
          codec.align(NFC_Push_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NFC_Push_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NFC_Push_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NFCPtr.prototype.cancelPush = function() {
    return NFCProxy.prototype.cancelPush
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.cancelPush = function(target) {
    var params_ = new NFC_CancelPush_Params();
    params_.target = target;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNFC_CancelPush_Name,
          codec.align(NFC_CancelPush_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NFC_CancelPush_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NFC_CancelPush_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NFCPtr.prototype.watch = function() {
    return NFCProxy.prototype.watch
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.watch = function(options) {
    var params_ = new NFC_Watch_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNFC_Watch_Name,
          codec.align(NFC_Watch_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NFC_Watch_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NFC_Watch_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NFCPtr.prototype.cancelWatch = function() {
    return NFCProxy.prototype.cancelWatch
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.cancelWatch = function(id) {
    var params_ = new NFC_CancelWatch_Params();
    params_.id = id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNFC_CancelWatch_Name,
          codec.align(NFC_CancelWatch_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NFC_CancelWatch_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NFC_CancelWatch_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NFCPtr.prototype.cancelAllWatches = function() {
    return NFCProxy.prototype.cancelAllWatches
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.cancelAllWatches = function() {
    var params_ = new NFC_CancelAllWatches_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNFC_CancelAllWatches_Name,
          codec.align(NFC_CancelAllWatches_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NFC_CancelAllWatches_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NFC_CancelAllWatches_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NFCPtr.prototype.suspendNFCOperations = function() {
    return NFCProxy.prototype.suspendNFCOperations
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.suspendNFCOperations = function() {
    var params_ = new NFC_SuspendNFCOperations_Params();
    var builder = new codec.MessageV0Builder(
        kNFC_SuspendNFCOperations_Name,
        codec.align(NFC_SuspendNFCOperations_Params.encodedSize));
    builder.encodeStruct(NFC_SuspendNFCOperations_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NFCPtr.prototype.resumeNFCOperations = function() {
    return NFCProxy.prototype.resumeNFCOperations
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCProxy.prototype.resumeNFCOperations = function() {
    var params_ = new NFC_ResumeNFCOperations_Params();
    var builder = new codec.MessageV0Builder(
        kNFC_ResumeNFCOperations_Name,
        codec.align(NFC_ResumeNFCOperations_Params.encodedSize));
    builder.encodeStruct(NFC_ResumeNFCOperations_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NFCStub(delegate) {
    this.delegate_ = delegate;
  }
  NFCStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }
  NFCStub.prototype.push = function(message, options) {
    return this.delegate_ && this.delegate_.push && this.delegate_.push(message, options);
  }
  NFCStub.prototype.cancelPush = function(target) {
    return this.delegate_ && this.delegate_.cancelPush && this.delegate_.cancelPush(target);
  }
  NFCStub.prototype.watch = function(options) {
    return this.delegate_ && this.delegate_.watch && this.delegate_.watch(options);
  }
  NFCStub.prototype.cancelWatch = function(id) {
    return this.delegate_ && this.delegate_.cancelWatch && this.delegate_.cancelWatch(id);
  }
  NFCStub.prototype.cancelAllWatches = function() {
    return this.delegate_ && this.delegate_.cancelAllWatches && this.delegate_.cancelAllWatches();
  }
  NFCStub.prototype.suspendNFCOperations = function() {
    return this.delegate_ && this.delegate_.suspendNFCOperations && this.delegate_.suspendNFCOperations();
  }
  NFCStub.prototype.resumeNFCOperations = function() {
    return this.delegate_ && this.delegate_.resumeNFCOperations && this.delegate_.resumeNFCOperations();
  }

  NFCStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNFC_SetClient_Name:
      var params = reader.decodeStruct(NFC_SetClient_Params);
      this.setClient(params.client);
      return true;
    case kNFC_SuspendNFCOperations_Name:
      var params = reader.decodeStruct(NFC_SuspendNFCOperations_Params);
      this.suspendNFCOperations();
      return true;
    case kNFC_ResumeNFCOperations_Name:
      var params = reader.decodeStruct(NFC_ResumeNFCOperations_Params);
      this.resumeNFCOperations();
      return true;
    default:
      return false;
    }
  };

  NFCStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNFC_Push_Name:
      var params = reader.decodeStruct(NFC_Push_Params);
      this.push(params.message, params.options).then(function(response) {
        var responseParams =
            new NFC_Push_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kNFC_Push_Name,
            codec.align(NFC_Push_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NFC_Push_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNFC_CancelPush_Name:
      var params = reader.decodeStruct(NFC_CancelPush_Params);
      this.cancelPush(params.target).then(function(response) {
        var responseParams =
            new NFC_CancelPush_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kNFC_CancelPush_Name,
            codec.align(NFC_CancelPush_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NFC_CancelPush_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNFC_Watch_Name:
      var params = reader.decodeStruct(NFC_Watch_Params);
      this.watch(params.options).then(function(response) {
        var responseParams =
            new NFC_Watch_ResponseParams();
        responseParams.id = response.id;
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kNFC_Watch_Name,
            codec.align(NFC_Watch_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NFC_Watch_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNFC_CancelWatch_Name:
      var params = reader.decodeStruct(NFC_CancelWatch_Params);
      this.cancelWatch(params.id).then(function(response) {
        var responseParams =
            new NFC_CancelWatch_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kNFC_CancelWatch_Name,
            codec.align(NFC_CancelWatch_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NFC_CancelWatch_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNFC_CancelAllWatches_Name:
      var params = reader.decodeStruct(NFC_CancelAllWatches_Params);
      this.cancelAllWatches().then(function(response) {
        var responseParams =
            new NFC_CancelAllWatches_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kNFC_CancelAllWatches_Name,
            codec.align(NFC_CancelAllWatches_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NFC_CancelAllWatches_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNFCRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNFC_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NFC_SetClient_Params;
      break;
      case kNFC_Push_Name:
        if (message.expectsResponse())
          paramsClass = NFC_Push_Params;
      break;
      case kNFC_CancelPush_Name:
        if (message.expectsResponse())
          paramsClass = NFC_CancelPush_Params;
      break;
      case kNFC_Watch_Name:
        if (message.expectsResponse())
          paramsClass = NFC_Watch_Params;
      break;
      case kNFC_CancelWatch_Name:
        if (message.expectsResponse())
          paramsClass = NFC_CancelWatch_Params;
      break;
      case kNFC_CancelAllWatches_Name:
        if (message.expectsResponse())
          paramsClass = NFC_CancelAllWatches_Params;
      break;
      case kNFC_SuspendNFCOperations_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NFC_SuspendNFCOperations_Params;
      break;
      case kNFC_ResumeNFCOperations_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NFC_ResumeNFCOperations_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNFCResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNFC_Push_Name:
        if (message.isResponse())
          paramsClass = NFC_Push_ResponseParams;
        break;
      case kNFC_CancelPush_Name:
        if (message.isResponse())
          paramsClass = NFC_CancelPush_ResponseParams;
        break;
      case kNFC_Watch_Name:
        if (message.isResponse())
          paramsClass = NFC_Watch_ResponseParams;
        break;
      case kNFC_CancelWatch_Name:
        if (message.isResponse())
          paramsClass = NFC_CancelWatch_ResponseParams;
        break;
      case kNFC_CancelAllWatches_Name:
        if (message.isResponse())
          paramsClass = NFC_CancelAllWatches_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NFC = {
    name: 'device.mojom.NFC',
    kVersion: 0,
    ptrClass: NFCPtr,
    proxyClass: NFCProxy,
    stubClass: NFCStub,
    validateRequest: validateNFCRequest,
    validateResponse: validateNFCResponse,
  };
  NFCStub.prototype.validator = validateNFCRequest;
  NFCProxy.prototype.validator = validateNFCResponse;
  var kNFCClient_OnWatch_Name = 0;

  function NFCClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NFCClient,
                                                   handleOrPtrInfo);
  }

  function NFCClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NFCClient, associatedInterfacePtrInfo);
  }

  NFCClientAssociatedPtr.prototype =
      Object.create(NFCClientPtr.prototype);
  NFCClientAssociatedPtr.prototype.constructor =
      NFCClientAssociatedPtr;

  function NFCClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  NFCClientPtr.prototype.onWatch = function() {
    return NFCClientProxy.prototype.onWatch
        .apply(this.ptr.getProxy(), arguments);
  };

  NFCClientProxy.prototype.onWatch = function(watchIds, message) {
    var params_ = new NFCClient_OnWatch_Params();
    params_.watchIds = watchIds;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kNFCClient_OnWatch_Name,
        codec.align(NFCClient_OnWatch_Params.encodedSize));
    builder.encodeStruct(NFCClient_OnWatch_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NFCClientStub(delegate) {
    this.delegate_ = delegate;
  }
  NFCClientStub.prototype.onWatch = function(watchIds, message) {
    return this.delegate_ && this.delegate_.onWatch && this.delegate_.onWatch(watchIds, message);
  }

  NFCClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNFCClient_OnWatch_Name:
      var params = reader.decodeStruct(NFCClient_OnWatch_Params);
      this.onWatch(params.watchIds, params.message);
      return true;
    default:
      return false;
    }
  };

  NFCClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNFCClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNFCClient_OnWatch_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NFCClient_OnWatch_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNFCClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NFCClient = {
    name: 'device.mojom.NFCClient',
    kVersion: 0,
    ptrClass: NFCClientPtr,
    proxyClass: NFCClientProxy,
    stubClass: NFCClientStub,
    validateRequest: validateNFCClientRequest,
    validateResponse: null,
  };
  NFCClientStub.prototype.validator = validateNFCClientRequest;
  NFCClientProxy.prototype.validator = null;
  exports.NFCErrorType = NFCErrorType;
  exports.NDEFRecordType = NDEFRecordType;
  exports.NFCPushTarget = NFCPushTarget;
  exports.NFCWatchMode = NFCWatchMode;
  exports.NFCError = NFCError;
  exports.NDEFRecord = NDEFRecord;
  exports.NDEFMessage = NDEFMessage;
  exports.NFCPushOptions = NFCPushOptions;
  exports.NDEFRecordTypeFilter = NDEFRecordTypeFilter;
  exports.NFCWatchOptions = NFCWatchOptions;
  exports.NFC = NFC;
  exports.NFCPtr = NFCPtr;
  exports.NFCAssociatedPtr = NFCAssociatedPtr;
  exports.NFCClient = NFCClient;
  exports.NFCClientPtr = NFCClientPtr;
  exports.NFCClientAssociatedPtr = NFCClientAssociatedPtr;
})();