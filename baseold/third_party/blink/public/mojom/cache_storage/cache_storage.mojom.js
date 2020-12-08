// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/cache_storage/cache_storage.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var fetch_api_response$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/fetch/fetch_api_response.mojom', '../fetch/fetch_api_response.mojom.js');
  }
  var fetch_api_request$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/fetch/fetch_api_request.mojom', '../fetch/fetch_api_request.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var CacheStorageError = {};
  CacheStorageError.kSuccess = 0;
  CacheStorageError.kErrorExists = 1;
  CacheStorageError.kErrorStorage = 2;
  CacheStorageError.kErrorNotFound = 3;
  CacheStorageError.kErrorQuotaExceeded = 4;
  CacheStorageError.kErrorCacheNameNotFound = 5;
  CacheStorageError.kErrorQueryTooLarge = 6;
  CacheStorageError.kErrorNotImplemented = 7;
  CacheStorageError.kErrorDuplicateOperation = 8;
  CacheStorageError.MIN_VALUE = 0,
  CacheStorageError.MAX_VALUE = 8,

  CacheStorageError.isKnownEnumValue = function(value) {
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

  CacheStorageError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var OperationType = {};
  OperationType.kUndefined = 0;
  OperationType.kPut = OperationType.kUndefined + 1;
  OperationType.kDelete = OperationType.kPut + 1;
  OperationType.MIN_VALUE = 0,
  OperationType.MAX_VALUE = 2,

  OperationType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  OperationType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CacheStorageVerboseError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageVerboseError.prototype.initDefaults_ = function() {
    this.value = 0;
    this.message = null;
  };
  CacheStorageVerboseError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageVerboseError.validate = function(messageValidator, offset) {
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


    // validate CacheStorageVerboseError.value
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorageVerboseError.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorageVerboseError.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorageVerboseError.decode = function(decoder) {
    var packed;
    var val = new CacheStorageVerboseError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  CacheStorageVerboseError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageVerboseError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.message);
  };
  function CacheQueryOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheQueryOptions.prototype.initDefaults_ = function() {
    this.ignoreSearch = false;
    this.ignoreMethod = false;
    this.ignoreVary = false;
  };
  CacheQueryOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheQueryOptions.validate = function(messageValidator, offset) {
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

  CacheQueryOptions.encodedSize = codec.kStructHeaderSize + 8;

  CacheQueryOptions.decode = function(decoder) {
    var packed;
    var val = new CacheQueryOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.ignoreSearch = (packed >> 0) & 1 ? true : false;
    val.ignoreMethod = (packed >> 1) & 1 ? true : false;
    val.ignoreVary = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CacheQueryOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheQueryOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.ignoreSearch & 1) << 0
    packed |= (val.ignoreMethod & 1) << 1
    packed |= (val.ignoreVary & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MultiCacheQueryOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiCacheQueryOptions.prototype.initDefaults_ = function() {
    this.queryOptions = null;
    this.cacheName = null;
  };
  MultiCacheQueryOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiCacheQueryOptions.validate = function(messageValidator, offset) {
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


    // validate MultiCacheQueryOptions.queryOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CacheQueryOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MultiCacheQueryOptions.cacheName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MultiCacheQueryOptions.encodedSize = codec.kStructHeaderSize + 16;

  MultiCacheQueryOptions.decode = function(decoder) {
    var packed;
    var val = new MultiCacheQueryOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.queryOptions = decoder.decodeStructPointer(CacheQueryOptions);
    val.cacheName = decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  MultiCacheQueryOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiCacheQueryOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CacheQueryOptions, val.queryOptions);
    encoder.encodeStructPointer(string16$.String16, val.cacheName);
  };
  function BatchOperation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BatchOperation.prototype.initDefaults_ = function() {
    this.operationType = 0;
    this.request = null;
    this.response = null;
    this.matchOptions = null;
  };
  BatchOperation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BatchOperation.validate = function(messageValidator, offset) {
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


    // validate BatchOperation.operationType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, OperationType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BatchOperation.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, fetch_api_request$.FetchAPIRequest, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BatchOperation.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, fetch_api_response$.FetchAPIResponse, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BatchOperation.matchOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, CacheQueryOptions, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BatchOperation.encodedSize = codec.kStructHeaderSize + 32;

  BatchOperation.decode = function(decoder) {
    var packed;
    var val = new BatchOperation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.operationType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.response = decoder.decodeStructPointer(fetch_api_response$.FetchAPIResponse);
    val.matchOptions = decoder.decodeStructPointer(CacheQueryOptions);
    return val;
  };

  BatchOperation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BatchOperation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.operationType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(fetch_api_response$.FetchAPIResponse, val.response);
    encoder.encodeStructPointer(CacheQueryOptions, val.matchOptions);
  };
  function CacheStorageCache_Match_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_Match_Params.prototype.initDefaults_ = function() {
    this.request = null;
    this.queryOptions = null;
    this.traceId = 0;
  };
  CacheStorageCache_Match_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_Match_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_Match_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorageCache_Match_Params.queryOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, CacheQueryOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorageCache_Match_Params.encodedSize = codec.kStructHeaderSize + 24;

  CacheStorageCache_Match_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_Match_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.queryOptions = decoder.decodeStructPointer(CacheQueryOptions);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorageCache_Match_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_Match_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(CacheQueryOptions, val.queryOptions);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorageCache_Match_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_Match_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CacheStorageCache_Match_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_Match_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_Match_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, MatchResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorageCache_Match_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorageCache_Match_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_Match_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(MatchResult);
    return val;
  };

  CacheStorageCache_Match_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_Match_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(MatchResult, val.result);
  };
  function CacheStorageCache_MatchAll_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_MatchAll_Params.prototype.initDefaults_ = function() {
    this.request = null;
    this.queryOptions = null;
    this.traceId = 0;
  };
  CacheStorageCache_MatchAll_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_MatchAll_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_MatchAll_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorageCache_MatchAll_Params.queryOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, CacheQueryOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorageCache_MatchAll_Params.encodedSize = codec.kStructHeaderSize + 24;

  CacheStorageCache_MatchAll_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_MatchAll_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.queryOptions = decoder.decodeStructPointer(CacheQueryOptions);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorageCache_MatchAll_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_MatchAll_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(CacheQueryOptions, val.queryOptions);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorageCache_MatchAll_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_MatchAll_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CacheStorageCache_MatchAll_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_MatchAll_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_MatchAll_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, MatchAllResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorageCache_MatchAll_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorageCache_MatchAll_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_MatchAll_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(MatchAllResult);
    return val;
  };

  CacheStorageCache_MatchAll_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_MatchAll_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(MatchAllResult, val.result);
  };
  function CacheStorageCache_Keys_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_Keys_Params.prototype.initDefaults_ = function() {
    this.request = null;
    this.queryOptions = null;
    this.traceId = 0;
  };
  CacheStorageCache_Keys_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_Keys_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_Keys_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorageCache_Keys_Params.queryOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, CacheQueryOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorageCache_Keys_Params.encodedSize = codec.kStructHeaderSize + 24;

  CacheStorageCache_Keys_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_Keys_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.queryOptions = decoder.decodeStructPointer(CacheQueryOptions);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorageCache_Keys_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_Keys_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(CacheQueryOptions, val.queryOptions);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorageCache_Keys_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_Keys_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CacheStorageCache_Keys_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_Keys_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_Keys_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, CacheKeysResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorageCache_Keys_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorageCache_Keys_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_Keys_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(CacheKeysResult);
    return val;
  };

  CacheStorageCache_Keys_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_Keys_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(CacheKeysResult, val.result);
  };
  function CacheStorageCache_Batch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_Batch_Params.prototype.initDefaults_ = function() {
    this.batchOperations = null;
    this.traceId = 0;
  };
  CacheStorageCache_Batch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_Batch_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_Batch_Params.batchOperations
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(BatchOperation), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorageCache_Batch_Params.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorageCache_Batch_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_Batch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.batchOperations = decoder.decodeArrayPointer(new codec.PointerTo(BatchOperation));
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorageCache_Batch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_Batch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(BatchOperation), val.batchOperations);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorageCache_Batch_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_Batch_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CacheStorageCache_Batch_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_Batch_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_Batch_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CacheStorageVerboseError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorageCache_Batch_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CacheStorageCache_Batch_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_Batch_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(CacheStorageVerboseError);
    return val;
  };

  CacheStorageCache_Batch_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_Batch_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CacheStorageVerboseError, val.result);
  };
  function CacheStorageCache_SetSideData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_SetSideData_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.responseTime = null;
    this.sideData = null;
    this.traceId = 0;
  };
  CacheStorageCache_SetSideData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_SetSideData_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_SetSideData_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorageCache_SetSideData_Params.responseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorageCache_SetSideData_Params.sideData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorageCache_SetSideData_Params.encodedSize = codec.kStructHeaderSize + 32;

  CacheStorageCache_SetSideData_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_SetSideData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.responseTime = decoder.decodeStructPointer(time$.Time);
    val.sideData = decoder.decodeArrayPointer(codec.Uint8);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorageCache_SetSideData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_SetSideData_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(time$.Time, val.responseTime);
    encoder.encodeArrayPointer(codec.Uint8, val.sideData);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorageCache_SetSideData_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorageCache_SetSideData_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  CacheStorageCache_SetSideData_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorageCache_SetSideData_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorageCache_SetSideData_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorageCache_SetSideData_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CacheStorageCache_SetSideData_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorageCache_SetSideData_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CacheStorageCache_SetSideData_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorageCache_SetSideData_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CacheStorage_Has_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Has_Params.prototype.initDefaults_ = function() {
    this.cacheName = null;
    this.traceId = 0;
  };
  CacheStorage_Has_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Has_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Has_Params.cacheName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorage_Has_Params.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorage_Has_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Has_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheName = decoder.decodeStructPointer(string16$.String16);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorage_Has_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Has_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.cacheName);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorage_Has_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Has_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  CacheStorage_Has_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Has_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Has_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorage_Has_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CacheStorage_Has_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Has_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CacheStorage_Has_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Has_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CacheStorage_Delete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Delete_Params.prototype.initDefaults_ = function() {
    this.cacheName = null;
    this.traceId = 0;
  };
  CacheStorage_Delete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Delete_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Delete_Params.cacheName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorage_Delete_Params.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorage_Delete_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Delete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheName = decoder.decodeStructPointer(string16$.String16);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorage_Delete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Delete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.cacheName);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorage_Delete_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Delete_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  CacheStorage_Delete_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Delete_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Delete_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorage_Delete_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CacheStorage_Delete_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Delete_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CacheStorage_Delete_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Delete_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CacheStorage_Keys_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Keys_Params.prototype.initDefaults_ = function() {
    this.traceId = 0;
  };
  CacheStorage_Keys_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Keys_Params.validate = function(messageValidator, offset) {
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

  CacheStorage_Keys_Params.encodedSize = codec.kStructHeaderSize + 8;

  CacheStorage_Keys_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Keys_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorage_Keys_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Keys_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorage_Keys_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Keys_ResponseParams.prototype.initDefaults_ = function() {
    this.keys = null;
  };
  CacheStorage_Keys_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Keys_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Keys_ResponseParams.keys
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(string16$.String16), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorage_Keys_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CacheStorage_Keys_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Keys_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keys = decoder.decodeArrayPointer(new codec.PointerTo(string16$.String16));
    return val;
  };

  CacheStorage_Keys_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Keys_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(string16$.String16), val.keys);
  };
  function CacheStorage_Match_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Match_Params.prototype.initDefaults_ = function() {
    this.request = null;
    this.matchOptions = null;
    this.traceId = 0;
  };
  CacheStorage_Match_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Match_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Match_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CacheStorage_Match_Params.matchOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, MultiCacheQueryOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorage_Match_Params.encodedSize = codec.kStructHeaderSize + 24;

  CacheStorage_Match_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Match_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.matchOptions = decoder.decodeStructPointer(MultiCacheQueryOptions);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorage_Match_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Match_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(MultiCacheQueryOptions, val.matchOptions);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorage_Match_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Match_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CacheStorage_Match_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Match_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Match_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, MatchResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorage_Match_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorage_Match_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Match_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(MatchResult);
    return val;
  };

  CacheStorage_Match_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Match_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(MatchResult, val.result);
  };
  function CacheStorage_Open_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Open_Params.prototype.initDefaults_ = function() {
    this.cacheName = null;
    this.traceId = 0;
  };
  CacheStorage_Open_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Open_Params.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Open_Params.cacheName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheStorage_Open_Params.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorage_Open_Params.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Open_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheName = decoder.decodeStructPointer(string16$.String16);
    val.traceId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheStorage_Open_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Open_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.cacheName);
    encoder.encodeStruct(codec.Int64, val.traceId);
  };
  function CacheStorage_Open_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheStorage_Open_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CacheStorage_Open_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheStorage_Open_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CacheStorage_Open_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, OpenResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CacheStorage_Open_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CacheStorage_Open_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CacheStorage_Open_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(OpenResult);
    return val;
  };

  CacheStorage_Open_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheStorage_Open_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(OpenResult, val.result);
  };

  function OpenResult(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  OpenResult.Tags = {
    status: 0,
    cache: 1,
  };

  OpenResult.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  OpenResult.prototype.initValue_ = function(value) {
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
        "status",
        "cache",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a OpenResult member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(OpenResult.prototype, "status", {
    get: function() {
      if (this.$tag != OpenResult.Tags.status) {
        throw new ReferenceError(
            "OpenResult.status is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = OpenResult.Tags.status;
      this.$data = value;
    }
  });
  Object.defineProperty(OpenResult.prototype, "cache", {
    get: function() {
      if (this.$tag != OpenResult.Tags.cache) {
        throw new ReferenceError(
            "OpenResult.cache is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = OpenResult.Tags.cache;
      this.$data = value;
    }
  });


    OpenResult.encode = function(encoder, val) {
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
        case OpenResult.Tags.status:
          encoder.encodeStruct(codec.Int32, val.status);
          break;
        case OpenResult.Tags.cache:
          encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.cache);
          break;
      }
      encoder.align();
    };


    OpenResult.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new OpenResult();
      var tag = decoder.readUint32();
      switch (tag) {
        case OpenResult.Tags.status:
          result.status = decoder.decodeStruct(codec.Int32);
          break;
        case OpenResult.Tags.cache:
          result.cache = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
          break;
      }
      decoder.align();

      return result;
    };


    OpenResult.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case OpenResult.Tags.status:
          

    // validate OpenResult.status
    err = messageValidator.validateEnum(data_offset, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case OpenResult.Tags.cache:
          

    // validate OpenResult.cache
    err = messageValidator.validateAssociatedInterface(data_offset, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  OpenResult.encodedSize = 16;

  function MatchResult(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  MatchResult.Tags = {
    status: 0,
    response: 1,
  };

  MatchResult.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  MatchResult.prototype.initValue_ = function(value) {
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
        "status",
        "response",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a MatchResult member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(MatchResult.prototype, "status", {
    get: function() {
      if (this.$tag != MatchResult.Tags.status) {
        throw new ReferenceError(
            "MatchResult.status is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = MatchResult.Tags.status;
      this.$data = value;
    }
  });
  Object.defineProperty(MatchResult.prototype, "response", {
    get: function() {
      if (this.$tag != MatchResult.Tags.response) {
        throw new ReferenceError(
            "MatchResult.response is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = MatchResult.Tags.response;
      this.$data = value;
    }
  });


    MatchResult.encode = function(encoder, val) {
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
        case MatchResult.Tags.status:
          encoder.encodeStruct(codec.Int32, val.status);
          break;
        case MatchResult.Tags.response:
          encoder.encodeStructPointer(fetch_api_response$.FetchAPIResponse, val.response);
          break;
      }
      encoder.align();
    };


    MatchResult.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new MatchResult();
      var tag = decoder.readUint32();
      switch (tag) {
        case MatchResult.Tags.status:
          result.status = decoder.decodeStruct(codec.Int32);
          break;
        case MatchResult.Tags.response:
          result.response = decoder.decodeStructPointer(fetch_api_response$.FetchAPIResponse);
          break;
      }
      decoder.align();

      return result;
    };


    MatchResult.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case MatchResult.Tags.status:
          

    // validate MatchResult.status
    err = messageValidator.validateEnum(data_offset, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case MatchResult.Tags.response:
          

    // validate MatchResult.response
    err = messageValidator.validateStructPointer(data_offset, fetch_api_response$.FetchAPIResponse, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  MatchResult.encodedSize = 16;

  function MatchAllResult(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  MatchAllResult.Tags = {
    status: 0,
    responses: 1,
  };

  MatchAllResult.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  MatchAllResult.prototype.initValue_ = function(value) {
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
        "status",
        "responses",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a MatchAllResult member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(MatchAllResult.prototype, "status", {
    get: function() {
      if (this.$tag != MatchAllResult.Tags.status) {
        throw new ReferenceError(
            "MatchAllResult.status is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = MatchAllResult.Tags.status;
      this.$data = value;
    }
  });
  Object.defineProperty(MatchAllResult.prototype, "responses", {
    get: function() {
      if (this.$tag != MatchAllResult.Tags.responses) {
        throw new ReferenceError(
            "MatchAllResult.responses is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = MatchAllResult.Tags.responses;
      this.$data = value;
    }
  });


    MatchAllResult.encode = function(encoder, val) {
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
        case MatchAllResult.Tags.status:
          encoder.encodeStruct(codec.Int32, val.status);
          break;
        case MatchAllResult.Tags.responses:
          encoder.encodeArrayPointer(new codec.PointerTo(fetch_api_response$.FetchAPIResponse), val.responses);
          break;
      }
      encoder.align();
    };


    MatchAllResult.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new MatchAllResult();
      var tag = decoder.readUint32();
      switch (tag) {
        case MatchAllResult.Tags.status:
          result.status = decoder.decodeStruct(codec.Int32);
          break;
        case MatchAllResult.Tags.responses:
          result.responses = decoder.decodeArrayPointer(new codec.PointerTo(fetch_api_response$.FetchAPIResponse));
          break;
      }
      decoder.align();

      return result;
    };


    MatchAllResult.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case MatchAllResult.Tags.status:
          

    // validate MatchAllResult.status
    err = messageValidator.validateEnum(data_offset, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case MatchAllResult.Tags.responses:
          

    // validate MatchAllResult.responses
    err = messageValidator.validateArrayPointer(data_offset, 8, new codec.PointerTo(fetch_api_response$.FetchAPIResponse), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  MatchAllResult.encodedSize = 16;

  function CacheKeysResult(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  CacheKeysResult.Tags = {
    status: 0,
    keys: 1,
  };

  CacheKeysResult.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  CacheKeysResult.prototype.initValue_ = function(value) {
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
        "status",
        "keys",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a CacheKeysResult member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(CacheKeysResult.prototype, "status", {
    get: function() {
      if (this.$tag != CacheKeysResult.Tags.status) {
        throw new ReferenceError(
            "CacheKeysResult.status is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = CacheKeysResult.Tags.status;
      this.$data = value;
    }
  });
  Object.defineProperty(CacheKeysResult.prototype, "keys", {
    get: function() {
      if (this.$tag != CacheKeysResult.Tags.keys) {
        throw new ReferenceError(
            "CacheKeysResult.keys is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = CacheKeysResult.Tags.keys;
      this.$data = value;
    }
  });


    CacheKeysResult.encode = function(encoder, val) {
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
        case CacheKeysResult.Tags.status:
          encoder.encodeStruct(codec.Int32, val.status);
          break;
        case CacheKeysResult.Tags.keys:
          encoder.encodeArrayPointer(new codec.PointerTo(fetch_api_request$.FetchAPIRequest), val.keys);
          break;
      }
      encoder.align();
    };


    CacheKeysResult.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new CacheKeysResult();
      var tag = decoder.readUint32();
      switch (tag) {
        case CacheKeysResult.Tags.status:
          result.status = decoder.decodeStruct(codec.Int32);
          break;
        case CacheKeysResult.Tags.keys:
          result.keys = decoder.decodeArrayPointer(new codec.PointerTo(fetch_api_request$.FetchAPIRequest));
          break;
      }
      decoder.align();

      return result;
    };


    CacheKeysResult.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case CacheKeysResult.Tags.status:
          

    // validate CacheKeysResult.status
    err = messageValidator.validateEnum(data_offset, CacheStorageError);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case CacheKeysResult.Tags.keys:
          

    // validate CacheKeysResult.keys
    err = messageValidator.validateArrayPointer(data_offset, 8, new codec.PointerTo(fetch_api_request$.FetchAPIRequest), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  CacheKeysResult.encodedSize = 16;
  var kCacheStorageCache_Match_Name = 0;
  var kCacheStorageCache_MatchAll_Name = 1;
  var kCacheStorageCache_Keys_Name = 2;
  var kCacheStorageCache_Batch_Name = 3;
  var kCacheStorageCache_SetSideData_Name = 4;

  function CacheStorageCachePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CacheStorageCache,
                                                   handleOrPtrInfo);
  }

  function CacheStorageCacheAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CacheStorageCache, associatedInterfacePtrInfo);
  }

  CacheStorageCacheAssociatedPtr.prototype =
      Object.create(CacheStorageCachePtr.prototype);
  CacheStorageCacheAssociatedPtr.prototype.constructor =
      CacheStorageCacheAssociatedPtr;

  function CacheStorageCacheProxy(receiver) {
    this.receiver_ = receiver;
  }
  CacheStorageCachePtr.prototype.match = function() {
    return CacheStorageCacheProxy.prototype.match
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageCacheProxy.prototype.match = function(request, queryOptions, traceId) {
    var params_ = new CacheStorageCache_Match_Params();
    params_.request = request;
    params_.queryOptions = queryOptions;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorageCache_Match_Name,
          codec.align(CacheStorageCache_Match_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorageCache_Match_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorageCache_Match_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStorageCachePtr.prototype.matchAll = function() {
    return CacheStorageCacheProxy.prototype.matchAll
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageCacheProxy.prototype.matchAll = function(request, queryOptions, traceId) {
    var params_ = new CacheStorageCache_MatchAll_Params();
    params_.request = request;
    params_.queryOptions = queryOptions;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorageCache_MatchAll_Name,
          codec.align(CacheStorageCache_MatchAll_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorageCache_MatchAll_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorageCache_MatchAll_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStorageCachePtr.prototype.keys = function() {
    return CacheStorageCacheProxy.prototype.keys
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageCacheProxy.prototype.keys = function(request, queryOptions, traceId) {
    var params_ = new CacheStorageCache_Keys_Params();
    params_.request = request;
    params_.queryOptions = queryOptions;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorageCache_Keys_Name,
          codec.align(CacheStorageCache_Keys_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorageCache_Keys_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorageCache_Keys_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStorageCachePtr.prototype.batch = function() {
    return CacheStorageCacheProxy.prototype.batch
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageCacheProxy.prototype.batch = function(batchOperations, traceId) {
    var params_ = new CacheStorageCache_Batch_Params();
    params_.batchOperations = batchOperations;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorageCache_Batch_Name,
          codec.align(CacheStorageCache_Batch_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorageCache_Batch_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorageCache_Batch_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStorageCachePtr.prototype.setSideData = function() {
    return CacheStorageCacheProxy.prototype.setSideData
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageCacheProxy.prototype.setSideData = function(url, responseTime, sideData, traceId) {
    var params_ = new CacheStorageCache_SetSideData_Params();
    params_.url = url;
    params_.responseTime = responseTime;
    params_.sideData = sideData;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorageCache_SetSideData_Name,
          codec.align(CacheStorageCache_SetSideData_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorageCache_SetSideData_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorageCache_SetSideData_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CacheStorageCacheStub(delegate) {
    this.delegate_ = delegate;
  }
  CacheStorageCacheStub.prototype.match = function(request, queryOptions, traceId) {
    return this.delegate_ && this.delegate_.match && this.delegate_.match(request, queryOptions, traceId);
  }
  CacheStorageCacheStub.prototype.matchAll = function(request, queryOptions, traceId) {
    return this.delegate_ && this.delegate_.matchAll && this.delegate_.matchAll(request, queryOptions, traceId);
  }
  CacheStorageCacheStub.prototype.keys = function(request, queryOptions, traceId) {
    return this.delegate_ && this.delegate_.keys && this.delegate_.keys(request, queryOptions, traceId);
  }
  CacheStorageCacheStub.prototype.batch = function(batchOperations, traceId) {
    return this.delegate_ && this.delegate_.batch && this.delegate_.batch(batchOperations, traceId);
  }
  CacheStorageCacheStub.prototype.setSideData = function(url, responseTime, sideData, traceId) {
    return this.delegate_ && this.delegate_.setSideData && this.delegate_.setSideData(url, responseTime, sideData, traceId);
  }

  CacheStorageCacheStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CacheStorageCacheStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCacheStorageCache_Match_Name:
      var params = reader.decodeStruct(CacheStorageCache_Match_Params);
      this.match(params.request, params.queryOptions, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorageCache_Match_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorageCache_Match_Name,
            codec.align(CacheStorageCache_Match_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorageCache_Match_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorageCache_MatchAll_Name:
      var params = reader.decodeStruct(CacheStorageCache_MatchAll_Params);
      this.matchAll(params.request, params.queryOptions, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorageCache_MatchAll_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorageCache_MatchAll_Name,
            codec.align(CacheStorageCache_MatchAll_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorageCache_MatchAll_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorageCache_Keys_Name:
      var params = reader.decodeStruct(CacheStorageCache_Keys_Params);
      this.keys(params.request, params.queryOptions, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorageCache_Keys_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorageCache_Keys_Name,
            codec.align(CacheStorageCache_Keys_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorageCache_Keys_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorageCache_Batch_Name:
      var params = reader.decodeStruct(CacheStorageCache_Batch_Params);
      this.batch(params.batchOperations, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorageCache_Batch_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorageCache_Batch_Name,
            codec.align(CacheStorageCache_Batch_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorageCache_Batch_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorageCache_SetSideData_Name:
      var params = reader.decodeStruct(CacheStorageCache_SetSideData_Params);
      this.setSideData(params.url, params.responseTime, params.sideData, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorageCache_SetSideData_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorageCache_SetSideData_Name,
            codec.align(CacheStorageCache_SetSideData_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorageCache_SetSideData_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCacheStorageCacheRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCacheStorageCache_Match_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorageCache_Match_Params;
      break;
      case kCacheStorageCache_MatchAll_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorageCache_MatchAll_Params;
      break;
      case kCacheStorageCache_Keys_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorageCache_Keys_Params;
      break;
      case kCacheStorageCache_Batch_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorageCache_Batch_Params;
      break;
      case kCacheStorageCache_SetSideData_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorageCache_SetSideData_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCacheStorageCacheResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCacheStorageCache_Match_Name:
        if (message.isResponse())
          paramsClass = CacheStorageCache_Match_ResponseParams;
        break;
      case kCacheStorageCache_MatchAll_Name:
        if (message.isResponse())
          paramsClass = CacheStorageCache_MatchAll_ResponseParams;
        break;
      case kCacheStorageCache_Keys_Name:
        if (message.isResponse())
          paramsClass = CacheStorageCache_Keys_ResponseParams;
        break;
      case kCacheStorageCache_Batch_Name:
        if (message.isResponse())
          paramsClass = CacheStorageCache_Batch_ResponseParams;
        break;
      case kCacheStorageCache_SetSideData_Name:
        if (message.isResponse())
          paramsClass = CacheStorageCache_SetSideData_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CacheStorageCache = {
    name: 'blink.mojom.CacheStorageCache',
    kVersion: 0,
    ptrClass: CacheStorageCachePtr,
    proxyClass: CacheStorageCacheProxy,
    stubClass: CacheStorageCacheStub,
    validateRequest: validateCacheStorageCacheRequest,
    validateResponse: validateCacheStorageCacheResponse,
  };
  CacheStorageCacheStub.prototype.validator = validateCacheStorageCacheRequest;
  CacheStorageCacheProxy.prototype.validator = validateCacheStorageCacheResponse;
  var kCacheStorage_Has_Name = 0;
  var kCacheStorage_Delete_Name = 1;
  var kCacheStorage_Keys_Name = 2;
  var kCacheStorage_Match_Name = 3;
  var kCacheStorage_Open_Name = 4;

  function CacheStoragePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CacheStorage,
                                                   handleOrPtrInfo);
  }

  function CacheStorageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CacheStorage, associatedInterfacePtrInfo);
  }

  CacheStorageAssociatedPtr.prototype =
      Object.create(CacheStoragePtr.prototype);
  CacheStorageAssociatedPtr.prototype.constructor =
      CacheStorageAssociatedPtr;

  function CacheStorageProxy(receiver) {
    this.receiver_ = receiver;
  }
  CacheStoragePtr.prototype.has = function() {
    return CacheStorageProxy.prototype.has
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageProxy.prototype.has = function(cacheName, traceId) {
    var params_ = new CacheStorage_Has_Params();
    params_.cacheName = cacheName;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorage_Has_Name,
          codec.align(CacheStorage_Has_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorage_Has_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorage_Has_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStoragePtr.prototype.delete = function() {
    return CacheStorageProxy.prototype.delete
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageProxy.prototype.delete = function(cacheName, traceId) {
    var params_ = new CacheStorage_Delete_Params();
    params_.cacheName = cacheName;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorage_Delete_Name,
          codec.align(CacheStorage_Delete_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorage_Delete_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorage_Delete_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStoragePtr.prototype.keys = function() {
    return CacheStorageProxy.prototype.keys
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageProxy.prototype.keys = function(traceId) {
    var params_ = new CacheStorage_Keys_Params();
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorage_Keys_Name,
          codec.align(CacheStorage_Keys_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorage_Keys_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorage_Keys_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStoragePtr.prototype.match = function() {
    return CacheStorageProxy.prototype.match
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageProxy.prototype.match = function(request, matchOptions, traceId) {
    var params_ = new CacheStorage_Match_Params();
    params_.request = request;
    params_.matchOptions = matchOptions;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCacheStorage_Match_Name,
          codec.align(CacheStorage_Match_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CacheStorage_Match_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorage_Match_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CacheStoragePtr.prototype.open = function() {
    return CacheStorageProxy.prototype.open
        .apply(this.ptr.getProxy(), arguments);
  };

  CacheStorageProxy.prototype.open = function(cacheName, traceId) {
    var params_ = new CacheStorage_Open_Params();
    params_.cacheName = cacheName;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kCacheStorage_Open_Name,
          codec.align(CacheStorage_Open_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(CacheStorage_Open_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CacheStorage_Open_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CacheStorageStub(delegate) {
    this.delegate_ = delegate;
  }
  CacheStorageStub.prototype.has = function(cacheName, traceId) {
    return this.delegate_ && this.delegate_.has && this.delegate_.has(cacheName, traceId);
  }
  CacheStorageStub.prototype.delete = function(cacheName, traceId) {
    return this.delegate_ && this.delegate_.delete && this.delegate_.delete(cacheName, traceId);
  }
  CacheStorageStub.prototype.keys = function(traceId) {
    return this.delegate_ && this.delegate_.keys && this.delegate_.keys(traceId);
  }
  CacheStorageStub.prototype.match = function(request, matchOptions, traceId) {
    return this.delegate_ && this.delegate_.match && this.delegate_.match(request, matchOptions, traceId);
  }
  CacheStorageStub.prototype.open = function(cacheName, traceId) {
    return this.delegate_ && this.delegate_.open && this.delegate_.open(cacheName, traceId);
  }

  CacheStorageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CacheStorageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCacheStorage_Has_Name:
      var params = reader.decodeStruct(CacheStorage_Has_Params);
      this.has(params.cacheName, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorage_Has_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorage_Has_Name,
            codec.align(CacheStorage_Has_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorage_Has_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorage_Delete_Name:
      var params = reader.decodeStruct(CacheStorage_Delete_Params);
      this.delete(params.cacheName, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorage_Delete_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorage_Delete_Name,
            codec.align(CacheStorage_Delete_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorage_Delete_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorage_Keys_Name:
      var params = reader.decodeStruct(CacheStorage_Keys_Params);
      this.keys(params.traceId).then(function(response) {
        var responseParams =
            new CacheStorage_Keys_ResponseParams();
        responseParams.keys = response.keys;
        var builder = new codec.MessageV1Builder(
            kCacheStorage_Keys_Name,
            codec.align(CacheStorage_Keys_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorage_Keys_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorage_Match_Name:
      var params = reader.decodeStruct(CacheStorage_Match_Params);
      this.match(params.request, params.matchOptions, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorage_Match_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCacheStorage_Match_Name,
            codec.align(CacheStorage_Match_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CacheStorage_Match_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCacheStorage_Open_Name:
      var params = reader.decodeStruct(CacheStorage_Open_Params);
      this.open(params.cacheName, params.traceId).then(function(response) {
        var responseParams =
            new CacheStorage_Open_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV2Builder(
            kCacheStorage_Open_Name,
            codec.align(CacheStorage_Open_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(CacheStorage_Open_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCacheStorageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCacheStorage_Has_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorage_Has_Params;
      break;
      case kCacheStorage_Delete_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorage_Delete_Params;
      break;
      case kCacheStorage_Keys_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorage_Keys_Params;
      break;
      case kCacheStorage_Match_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorage_Match_Params;
      break;
      case kCacheStorage_Open_Name:
        if (message.expectsResponse())
          paramsClass = CacheStorage_Open_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCacheStorageResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCacheStorage_Has_Name:
        if (message.isResponse())
          paramsClass = CacheStorage_Has_ResponseParams;
        break;
      case kCacheStorage_Delete_Name:
        if (message.isResponse())
          paramsClass = CacheStorage_Delete_ResponseParams;
        break;
      case kCacheStorage_Keys_Name:
        if (message.isResponse())
          paramsClass = CacheStorage_Keys_ResponseParams;
        break;
      case kCacheStorage_Match_Name:
        if (message.isResponse())
          paramsClass = CacheStorage_Match_ResponseParams;
        break;
      case kCacheStorage_Open_Name:
        if (message.isResponse())
          paramsClass = CacheStorage_Open_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CacheStorage = {
    name: 'blink.mojom.CacheStorage',
    kVersion: 0,
    ptrClass: CacheStoragePtr,
    proxyClass: CacheStorageProxy,
    stubClass: CacheStorageStub,
    validateRequest: validateCacheStorageRequest,
    validateResponse: validateCacheStorageResponse,
  };
  CacheStorageStub.prototype.validator = validateCacheStorageRequest;
  CacheStorageProxy.prototype.validator = validateCacheStorageResponse;
  exports.CacheStorageError = CacheStorageError;
  exports.OperationType = OperationType;
  exports.CacheStorageVerboseError = CacheStorageVerboseError;
  exports.CacheQueryOptions = CacheQueryOptions;
  exports.MultiCacheQueryOptions = MultiCacheQueryOptions;
  exports.BatchOperation = BatchOperation;
  exports.OpenResult = OpenResult;
  exports.MatchResult = MatchResult;
  exports.MatchAllResult = MatchAllResult;
  exports.CacheKeysResult = CacheKeysResult;
  exports.CacheStorageCache = CacheStorageCache;
  exports.CacheStorageCachePtr = CacheStorageCachePtr;
  exports.CacheStorageCacheAssociatedPtr = CacheStorageCacheAssociatedPtr;
  exports.CacheStorage = CacheStorage;
  exports.CacheStoragePtr = CacheStoragePtr;
  exports.CacheStorageAssociatedPtr = CacheStorageAssociatedPtr;
})();