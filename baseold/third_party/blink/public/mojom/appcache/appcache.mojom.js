// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/appcache/appcache.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var url_loader_factory$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_factory.mojom', '../../../../../services/network/public/mojom/url_loader_factory.mojom.js');
  }
  var appcache_info$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/appcache/appcache_info.mojom', 'appcache_info.mojom.js');
  }
  var console_message$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/devtools/console_message.mojom', '../devtools/console_message.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var AppCacheEventID = {};
  AppCacheEventID.APPCACHE_CHECKING_EVENT = 0;
  AppCacheEventID.APPCACHE_ERROR_EVENT = AppCacheEventID.APPCACHE_CHECKING_EVENT + 1;
  AppCacheEventID.APPCACHE_NO_UPDATE_EVENT = AppCacheEventID.APPCACHE_ERROR_EVENT + 1;
  AppCacheEventID.APPCACHE_DOWNLOADING_EVENT = AppCacheEventID.APPCACHE_NO_UPDATE_EVENT + 1;
  AppCacheEventID.APPCACHE_PROGRESS_EVENT = AppCacheEventID.APPCACHE_DOWNLOADING_EVENT + 1;
  AppCacheEventID.APPCACHE_UPDATE_READY_EVENT = AppCacheEventID.APPCACHE_PROGRESS_EVENT + 1;
  AppCacheEventID.APPCACHE_CACHED_EVENT = AppCacheEventID.APPCACHE_UPDATE_READY_EVENT + 1;
  AppCacheEventID.APPCACHE_OBSOLETE_EVENT = AppCacheEventID.APPCACHE_CACHED_EVENT + 1;
  AppCacheEventID.MIN_VALUE = 0,
  AppCacheEventID.MAX_VALUE = 7,

  AppCacheEventID.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  AppCacheEventID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AppCacheErrorReason = {};
  AppCacheErrorReason.APPCACHE_MANIFEST_ERROR = 0;
  AppCacheErrorReason.APPCACHE_SIGNATURE_ERROR = AppCacheErrorReason.APPCACHE_MANIFEST_ERROR + 1;
  AppCacheErrorReason.APPCACHE_RESOURCE_ERROR = AppCacheErrorReason.APPCACHE_SIGNATURE_ERROR + 1;
  AppCacheErrorReason.APPCACHE_CHANGED_ERROR = AppCacheErrorReason.APPCACHE_RESOURCE_ERROR + 1;
  AppCacheErrorReason.APPCACHE_ABORT_ERROR = AppCacheErrorReason.APPCACHE_CHANGED_ERROR + 1;
  AppCacheErrorReason.APPCACHE_QUOTA_ERROR = AppCacheErrorReason.APPCACHE_ABORT_ERROR + 1;
  AppCacheErrorReason.APPCACHE_POLICY_ERROR = AppCacheErrorReason.APPCACHE_QUOTA_ERROR + 1;
  AppCacheErrorReason.APPCACHE_UNKNOWN_ERROR = AppCacheErrorReason.APPCACHE_POLICY_ERROR + 1;
  AppCacheErrorReason.MIN_VALUE = 0,
  AppCacheErrorReason.MAX_VALUE = 7,

  AppCacheErrorReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  AppCacheErrorReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AppCacheResourceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheResourceInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.responseSize = 0;
    this.paddingSize = 0;
    this.isMaster = false;
    this.isManifest = false;
    this.isIntercept = false;
    this.isFallback = false;
    this.isForeign = false;
    this.isExplicit = false;
    this.responseId = 0;
  };
  AppCacheResourceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheResourceInfo.validate = function(messageValidator, offset) {
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


    // validate AppCacheResourceInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;










    return validator.validationError.NONE;
  };

  AppCacheResourceInfo.encodedSize = codec.kStructHeaderSize + 40;

  AppCacheResourceInfo.decode = function(decoder) {
    var packed;
    var val = new AppCacheResourceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.responseSize = decoder.decodeStruct(codec.Int64);
    val.paddingSize = decoder.decodeStruct(codec.Int64);
    packed = decoder.readUint8();
    val.isMaster = (packed >> 0) & 1 ? true : false;
    val.isManifest = (packed >> 1) & 1 ? true : false;
    val.isIntercept = (packed >> 2) & 1 ? true : false;
    val.isFallback = (packed >> 3) & 1 ? true : false;
    val.isForeign = (packed >> 4) & 1 ? true : false;
    val.isExplicit = (packed >> 5) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.responseId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  AppCacheResourceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheResourceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int64, val.responseSize);
    encoder.encodeStruct(codec.Int64, val.paddingSize);
    packed = 0;
    packed |= (val.isMaster & 1) << 0
    packed |= (val.isManifest & 1) << 1
    packed |= (val.isIntercept & 1) << 2
    packed |= (val.isFallback & 1) << 3
    packed |= (val.isForeign & 1) << 4
    packed |= (val.isExplicit & 1) << 5
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.responseId);
  };
  function AppCacheErrorDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheErrorDetails.prototype.initDefaults_ = function() {
    this.message = null;
    this.reason = AppCacheErrorReason.APPCACHE_UNKNOWN_ERROR;
    this.status = 0;
    this.url = null;
    this.isCrossOrigin = false;
  };
  AppCacheErrorDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheErrorDetails.validate = function(messageValidator, offset) {
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


    // validate AppCacheErrorDetails.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheErrorDetails.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, AppCacheErrorReason);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheErrorDetails.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  AppCacheErrorDetails.encodedSize = codec.kStructHeaderSize + 32;

  AppCacheErrorDetails.decode = function(decoder) {
    var packed;
    var val = new AppCacheErrorDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(codec.String);
    val.reason = decoder.decodeStruct(codec.Int32);
    val.status = decoder.decodeStruct(codec.Int32);
    val.url = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.isCrossOrigin = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AppCacheErrorDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheErrorDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.encodeStructPointer(url$.Url, val.url);
    packed = 0;
    packed |= (val.isCrossOrigin & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AppCacheBackend_RegisterHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheBackend_RegisterHost_Params.prototype.initDefaults_ = function() {
    this.hostRequest = new bindings.InterfaceRequest();
    this.frontend = new AppCacheFrontendPtr();
    this.hostId = null;
  };
  AppCacheBackend_RegisterHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheBackend_RegisterHost_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheBackend_RegisterHost_Params.hostRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheBackend_RegisterHost_Params.frontend
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheBackend_RegisterHost_Params.hostId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheBackend_RegisterHost_Params.encodedSize = codec.kStructHeaderSize + 24;

  AppCacheBackend_RegisterHost_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheBackend_RegisterHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.frontend = decoder.decodeStruct(new codec.Interface(AppCacheFrontendPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.hostId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AppCacheBackend_RegisterHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheBackend_RegisterHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.hostRequest);
    encoder.encodeStruct(new codec.Interface(AppCacheFrontendPtr), val.frontend);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.hostId);
  };
  function AppCacheHost_SetSpawningHostId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_SetSpawningHostId_Params.prototype.initDefaults_ = function() {
    this.spawningHostId = null;
  };
  AppCacheHost_SetSpawningHostId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_SetSpawningHostId_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheHost_SetSpawningHostId_Params.spawningHostId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheHost_SetSpawningHostId_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheHost_SetSpawningHostId_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_SetSpawningHostId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.spawningHostId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AppCacheHost_SetSpawningHostId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_SetSpawningHostId_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.spawningHostId);
  };
  function AppCacheHost_SelectCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_SelectCache_Params.prototype.initDefaults_ = function() {
    this.documentUrl = null;
    this.appcacheDocumentWasLoadedFrom = 0;
    this.optManifestUrl = null;
  };
  AppCacheHost_SelectCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_SelectCache_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheHost_SelectCache_Params.documentUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AppCacheHost_SelectCache_Params.optManifestUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheHost_SelectCache_Params.encodedSize = codec.kStructHeaderSize + 24;

  AppCacheHost_SelectCache_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_SelectCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.documentUrl = decoder.decodeStructPointer(url$.Url);
    val.appcacheDocumentWasLoadedFrom = decoder.decodeStruct(codec.Int64);
    val.optManifestUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  AppCacheHost_SelectCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_SelectCache_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.documentUrl);
    encoder.encodeStruct(codec.Int64, val.appcacheDocumentWasLoadedFrom);
    encoder.encodeStructPointer(url$.Url, val.optManifestUrl);
  };
  function AppCacheHost_SelectCacheForSharedWorker_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_SelectCacheForSharedWorker_Params.prototype.initDefaults_ = function() {
    this.appcacheId = 0;
  };
  AppCacheHost_SelectCacheForSharedWorker_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_SelectCacheForSharedWorker_Params.validate = function(messageValidator, offset) {
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

  AppCacheHost_SelectCacheForSharedWorker_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheHost_SelectCacheForSharedWorker_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_SelectCacheForSharedWorker_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.appcacheId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  AppCacheHost_SelectCacheForSharedWorker_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_SelectCacheForSharedWorker_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.appcacheId);
  };
  function AppCacheHost_MarkAsForeignEntry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_MarkAsForeignEntry_Params.prototype.initDefaults_ = function() {
    this.documentUrl = null;
    this.appcacheDocumentWasLoadedFrom = 0;
  };
  AppCacheHost_MarkAsForeignEntry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_MarkAsForeignEntry_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheHost_MarkAsForeignEntry_Params.documentUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  AppCacheHost_MarkAsForeignEntry_Params.encodedSize = codec.kStructHeaderSize + 16;

  AppCacheHost_MarkAsForeignEntry_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_MarkAsForeignEntry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.documentUrl = decoder.decodeStructPointer(url$.Url);
    val.appcacheDocumentWasLoadedFrom = decoder.decodeStruct(codec.Int64);
    return val;
  };

  AppCacheHost_MarkAsForeignEntry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_MarkAsForeignEntry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.documentUrl);
    encoder.encodeStruct(codec.Int64, val.appcacheDocumentWasLoadedFrom);
  };
  function AppCacheHost_GetStatus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_GetStatus_Params.prototype.initDefaults_ = function() {
  };
  AppCacheHost_GetStatus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_GetStatus_Params.validate = function(messageValidator, offset) {
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

  AppCacheHost_GetStatus_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppCacheHost_GetStatus_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_GetStatus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppCacheHost_GetStatus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_GetStatus_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AppCacheHost_GetStatus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_GetStatus_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  AppCacheHost_GetStatus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_GetStatus_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AppCacheHost_GetStatus_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, appcache_info$.AppCacheStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheHost_GetStatus_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheHost_GetStatus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_GetStatus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AppCacheHost_GetStatus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_GetStatus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AppCacheHost_StartUpdate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_StartUpdate_Params.prototype.initDefaults_ = function() {
  };
  AppCacheHost_StartUpdate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_StartUpdate_Params.validate = function(messageValidator, offset) {
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

  AppCacheHost_StartUpdate_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppCacheHost_StartUpdate_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_StartUpdate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppCacheHost_StartUpdate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_StartUpdate_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AppCacheHost_StartUpdate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_StartUpdate_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  AppCacheHost_StartUpdate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_StartUpdate_ResponseParams.validate = function(messageValidator, offset) {
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

  AppCacheHost_StartUpdate_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheHost_StartUpdate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_StartUpdate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AppCacheHost_StartUpdate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_StartUpdate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AppCacheHost_SwapCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_SwapCache_Params.prototype.initDefaults_ = function() {
  };
  AppCacheHost_SwapCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_SwapCache_Params.validate = function(messageValidator, offset) {
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

  AppCacheHost_SwapCache_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppCacheHost_SwapCache_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_SwapCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppCacheHost_SwapCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_SwapCache_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AppCacheHost_SwapCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_SwapCache_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  AppCacheHost_SwapCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_SwapCache_ResponseParams.validate = function(messageValidator, offset) {
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

  AppCacheHost_SwapCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheHost_SwapCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_SwapCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AppCacheHost_SwapCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_SwapCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AppCacheHost_GetResourceList_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_GetResourceList_Params.prototype.initDefaults_ = function() {
  };
  AppCacheHost_GetResourceList_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_GetResourceList_Params.validate = function(messageValidator, offset) {
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

  AppCacheHost_GetResourceList_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppCacheHost_GetResourceList_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_GetResourceList_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppCacheHost_GetResourceList_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_GetResourceList_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AppCacheHost_GetResourceList_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheHost_GetResourceList_ResponseParams.prototype.initDefaults_ = function() {
    this.resources = null;
  };
  AppCacheHost_GetResourceList_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheHost_GetResourceList_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AppCacheHost_GetResourceList_ResponseParams.resources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(AppCacheResourceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheHost_GetResourceList_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheHost_GetResourceList_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AppCacheHost_GetResourceList_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resources = decoder.decodeArrayPointer(new codec.PointerTo(AppCacheResourceInfo));
    return val;
  };

  AppCacheHost_GetResourceList_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheHost_GetResourceList_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(AppCacheResourceInfo), val.resources);
  };
  function AppCacheFrontend_CacheSelected_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheFrontend_CacheSelected_Params.prototype.initDefaults_ = function() {
    this.info = null;
  };
  AppCacheFrontend_CacheSelected_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheFrontend_CacheSelected_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheFrontend_CacheSelected_Params.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, appcache_info$.AppCacheInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheFrontend_CacheSelected_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheFrontend_CacheSelected_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheFrontend_CacheSelected_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(appcache_info$.AppCacheInfo);
    return val;
  };

  AppCacheFrontend_CacheSelected_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheFrontend_CacheSelected_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(appcache_info$.AppCacheInfo, val.info);
  };
  function AppCacheFrontend_EventRaised_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheFrontend_EventRaised_Params.prototype.initDefaults_ = function() {
    this.eventId = 0;
  };
  AppCacheFrontend_EventRaised_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheFrontend_EventRaised_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheFrontend_EventRaised_Params.eventId
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AppCacheEventID);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheFrontend_EventRaised_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheFrontend_EventRaised_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheFrontend_EventRaised_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.eventId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AppCacheFrontend_EventRaised_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheFrontend_EventRaised_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.eventId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AppCacheFrontend_ProgressEventRaised_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheFrontend_ProgressEventRaised_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.total = 0;
    this.complete = 0;
  };
  AppCacheFrontend_ProgressEventRaised_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheFrontend_ProgressEventRaised_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheFrontend_ProgressEventRaised_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  AppCacheFrontend_ProgressEventRaised_Params.encodedSize = codec.kStructHeaderSize + 16;

  AppCacheFrontend_ProgressEventRaised_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheFrontend_ProgressEventRaised_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.total = decoder.decodeStruct(codec.Int32);
    val.complete = decoder.decodeStruct(codec.Int32);
    return val;
  };

  AppCacheFrontend_ProgressEventRaised_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheFrontend_ProgressEventRaised_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.total);
    encoder.encodeStruct(codec.Int32, val.complete);
  };
  function AppCacheFrontend_ErrorEventRaised_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheFrontend_ErrorEventRaised_Params.prototype.initDefaults_ = function() {
    this.errorDetails = null;
  };
  AppCacheFrontend_ErrorEventRaised_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheFrontend_ErrorEventRaised_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheFrontend_ErrorEventRaised_Params.errorDetails
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, AppCacheErrorDetails, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheFrontend_ErrorEventRaised_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheFrontend_ErrorEventRaised_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheFrontend_ErrorEventRaised_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorDetails = decoder.decodeStructPointer(AppCacheErrorDetails);
    return val;
  };

  AppCacheFrontend_ErrorEventRaised_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheFrontend_ErrorEventRaised_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(AppCacheErrorDetails, val.errorDetails);
  };
  function AppCacheFrontend_LogMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheFrontend_LogMessage_Params.prototype.initDefaults_ = function() {
    this.logLevel = 0;
    this.message = null;
  };
  AppCacheFrontend_LogMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheFrontend_LogMessage_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheFrontend_LogMessage_Params.logLevel
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, console_message$.ConsoleMessageLevel);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheFrontend_LogMessage_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheFrontend_LogMessage_Params.encodedSize = codec.kStructHeaderSize + 16;

  AppCacheFrontend_LogMessage_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheFrontend_LogMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.logLevel = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  AppCacheFrontend_LogMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheFrontend_LogMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.logLevel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.message);
  };
  function AppCacheFrontend_SetSubresourceFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheFrontend_SetSubresourceFactory_Params.prototype.initDefaults_ = function() {
    this.urlLoaderFactory = new url_loader_factory$.URLLoaderFactoryPtr();
  };
  AppCacheFrontend_SetSubresourceFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheFrontend_SetSubresourceFactory_Params.validate = function(messageValidator, offset) {
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


    // validate AppCacheFrontend_SetSubresourceFactory_Params.urlLoaderFactory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppCacheFrontend_SetSubresourceFactory_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppCacheFrontend_SetSubresourceFactory_Params.decode = function(decoder) {
    var packed;
    var val = new AppCacheFrontend_SetSubresourceFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoaderFactory = decoder.decodeStruct(new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr));
    return val;
  };

  AppCacheFrontend_SetSubresourceFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheFrontend_SetSubresourceFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr), val.urlLoaderFactory);
  };
  var kAppCacheBackend_RegisterHost_Name = 0;

  function AppCacheBackendPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppCacheBackend,
                                                   handleOrPtrInfo);
  }

  function AppCacheBackendAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppCacheBackend, associatedInterfacePtrInfo);
  }

  AppCacheBackendAssociatedPtr.prototype =
      Object.create(AppCacheBackendPtr.prototype);
  AppCacheBackendAssociatedPtr.prototype.constructor =
      AppCacheBackendAssociatedPtr;

  function AppCacheBackendProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppCacheBackendPtr.prototype.registerHost = function() {
    return AppCacheBackendProxy.prototype.registerHost
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheBackendProxy.prototype.registerHost = function(hostRequest, frontend, hostId) {
    var params_ = new AppCacheBackend_RegisterHost_Params();
    params_.hostRequest = hostRequest;
    params_.frontend = frontend;
    params_.hostId = hostId;
    var builder = new codec.MessageV0Builder(
        kAppCacheBackend_RegisterHost_Name,
        codec.align(AppCacheBackend_RegisterHost_Params.encodedSize));
    builder.encodeStruct(AppCacheBackend_RegisterHost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AppCacheBackendStub(delegate) {
    this.delegate_ = delegate;
  }
  AppCacheBackendStub.prototype.registerHost = function(hostRequest, frontend, hostId) {
    return this.delegate_ && this.delegate_.registerHost && this.delegate_.registerHost(hostRequest, frontend, hostId);
  }

  AppCacheBackendStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppCacheBackend_RegisterHost_Name:
      var params = reader.decodeStruct(AppCacheBackend_RegisterHost_Params);
      this.registerHost(params.hostRequest, params.frontend, params.hostId);
      return true;
    default:
      return false;
    }
  };

  AppCacheBackendStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAppCacheBackendRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppCacheBackend_RegisterHost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheBackend_RegisterHost_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppCacheBackendResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AppCacheBackend = {
    name: 'blink.mojom.AppCacheBackend',
    kVersion: 0,
    ptrClass: AppCacheBackendPtr,
    proxyClass: AppCacheBackendProxy,
    stubClass: AppCacheBackendStub,
    validateRequest: validateAppCacheBackendRequest,
    validateResponse: null,
  };
  AppCacheBackendStub.prototype.validator = validateAppCacheBackendRequest;
  AppCacheBackendProxy.prototype.validator = null;
  var kAppCacheHost_SetSpawningHostId_Name = 0;
  var kAppCacheHost_SelectCache_Name = 1;
  var kAppCacheHost_SelectCacheForSharedWorker_Name = 2;
  var kAppCacheHost_MarkAsForeignEntry_Name = 3;
  var kAppCacheHost_GetStatus_Name = 4;
  var kAppCacheHost_StartUpdate_Name = 5;
  var kAppCacheHost_SwapCache_Name = 6;
  var kAppCacheHost_GetResourceList_Name = 7;

  function AppCacheHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppCacheHost,
                                                   handleOrPtrInfo);
  }

  function AppCacheHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppCacheHost, associatedInterfacePtrInfo);
  }

  AppCacheHostAssociatedPtr.prototype =
      Object.create(AppCacheHostPtr.prototype);
  AppCacheHostAssociatedPtr.prototype.constructor =
      AppCacheHostAssociatedPtr;

  function AppCacheHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppCacheHostPtr.prototype.setSpawningHostId = function() {
    return AppCacheHostProxy.prototype.setSpawningHostId
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.setSpawningHostId = function(spawningHostId) {
    var params_ = new AppCacheHost_SetSpawningHostId_Params();
    params_.spawningHostId = spawningHostId;
    var builder = new codec.MessageV0Builder(
        kAppCacheHost_SetSpawningHostId_Name,
        codec.align(AppCacheHost_SetSpawningHostId_Params.encodedSize));
    builder.encodeStruct(AppCacheHost_SetSpawningHostId_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheHostPtr.prototype.selectCache = function() {
    return AppCacheHostProxy.prototype.selectCache
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.selectCache = function(documentUrl, appcacheDocumentWasLoadedFrom, optManifestUrl) {
    var params_ = new AppCacheHost_SelectCache_Params();
    params_.documentUrl = documentUrl;
    params_.appcacheDocumentWasLoadedFrom = appcacheDocumentWasLoadedFrom;
    params_.optManifestUrl = optManifestUrl;
    var builder = new codec.MessageV0Builder(
        kAppCacheHost_SelectCache_Name,
        codec.align(AppCacheHost_SelectCache_Params.encodedSize));
    builder.encodeStruct(AppCacheHost_SelectCache_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheHostPtr.prototype.selectCacheForSharedWorker = function() {
    return AppCacheHostProxy.prototype.selectCacheForSharedWorker
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.selectCacheForSharedWorker = function(appcacheId) {
    var params_ = new AppCacheHost_SelectCacheForSharedWorker_Params();
    params_.appcacheId = appcacheId;
    var builder = new codec.MessageV0Builder(
        kAppCacheHost_SelectCacheForSharedWorker_Name,
        codec.align(AppCacheHost_SelectCacheForSharedWorker_Params.encodedSize));
    builder.encodeStruct(AppCacheHost_SelectCacheForSharedWorker_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheHostPtr.prototype.markAsForeignEntry = function() {
    return AppCacheHostProxy.prototype.markAsForeignEntry
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.markAsForeignEntry = function(documentUrl, appcacheDocumentWasLoadedFrom) {
    var params_ = new AppCacheHost_MarkAsForeignEntry_Params();
    params_.documentUrl = documentUrl;
    params_.appcacheDocumentWasLoadedFrom = appcacheDocumentWasLoadedFrom;
    var builder = new codec.MessageV0Builder(
        kAppCacheHost_MarkAsForeignEntry_Name,
        codec.align(AppCacheHost_MarkAsForeignEntry_Params.encodedSize));
    builder.encodeStruct(AppCacheHost_MarkAsForeignEntry_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheHostPtr.prototype.getStatus = function() {
    return AppCacheHostProxy.prototype.getStatus
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.getStatus = function() {
    var params_ = new AppCacheHost_GetStatus_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAppCacheHost_GetStatus_Name,
          codec.align(AppCacheHost_GetStatus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AppCacheHost_GetStatus_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AppCacheHost_GetStatus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AppCacheHostPtr.prototype.startUpdate = function() {
    return AppCacheHostProxy.prototype.startUpdate
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.startUpdate = function() {
    var params_ = new AppCacheHost_StartUpdate_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAppCacheHost_StartUpdate_Name,
          codec.align(AppCacheHost_StartUpdate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AppCacheHost_StartUpdate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AppCacheHost_StartUpdate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AppCacheHostPtr.prototype.swapCache = function() {
    return AppCacheHostProxy.prototype.swapCache
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.swapCache = function() {
    var params_ = new AppCacheHost_SwapCache_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAppCacheHost_SwapCache_Name,
          codec.align(AppCacheHost_SwapCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AppCacheHost_SwapCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AppCacheHost_SwapCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AppCacheHostPtr.prototype.getResourceList = function() {
    return AppCacheHostProxy.prototype.getResourceList
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheHostProxy.prototype.getResourceList = function() {
    var params_ = new AppCacheHost_GetResourceList_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAppCacheHost_GetResourceList_Name,
          codec.align(AppCacheHost_GetResourceList_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AppCacheHost_GetResourceList_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AppCacheHost_GetResourceList_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AppCacheHostStub(delegate) {
    this.delegate_ = delegate;
  }
  AppCacheHostStub.prototype.setSpawningHostId = function(spawningHostId) {
    return this.delegate_ && this.delegate_.setSpawningHostId && this.delegate_.setSpawningHostId(spawningHostId);
  }
  AppCacheHostStub.prototype.selectCache = function(documentUrl, appcacheDocumentWasLoadedFrom, optManifestUrl) {
    return this.delegate_ && this.delegate_.selectCache && this.delegate_.selectCache(documentUrl, appcacheDocumentWasLoadedFrom, optManifestUrl);
  }
  AppCacheHostStub.prototype.selectCacheForSharedWorker = function(appcacheId) {
    return this.delegate_ && this.delegate_.selectCacheForSharedWorker && this.delegate_.selectCacheForSharedWorker(appcacheId);
  }
  AppCacheHostStub.prototype.markAsForeignEntry = function(documentUrl, appcacheDocumentWasLoadedFrom) {
    return this.delegate_ && this.delegate_.markAsForeignEntry && this.delegate_.markAsForeignEntry(documentUrl, appcacheDocumentWasLoadedFrom);
  }
  AppCacheHostStub.prototype.getStatus = function() {
    return this.delegate_ && this.delegate_.getStatus && this.delegate_.getStatus();
  }
  AppCacheHostStub.prototype.startUpdate = function() {
    return this.delegate_ && this.delegate_.startUpdate && this.delegate_.startUpdate();
  }
  AppCacheHostStub.prototype.swapCache = function() {
    return this.delegate_ && this.delegate_.swapCache && this.delegate_.swapCache();
  }
  AppCacheHostStub.prototype.getResourceList = function() {
    return this.delegate_ && this.delegate_.getResourceList && this.delegate_.getResourceList();
  }

  AppCacheHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppCacheHost_SetSpawningHostId_Name:
      var params = reader.decodeStruct(AppCacheHost_SetSpawningHostId_Params);
      this.setSpawningHostId(params.spawningHostId);
      return true;
    case kAppCacheHost_SelectCache_Name:
      var params = reader.decodeStruct(AppCacheHost_SelectCache_Params);
      this.selectCache(params.documentUrl, params.appcacheDocumentWasLoadedFrom, params.optManifestUrl);
      return true;
    case kAppCacheHost_SelectCacheForSharedWorker_Name:
      var params = reader.decodeStruct(AppCacheHost_SelectCacheForSharedWorker_Params);
      this.selectCacheForSharedWorker(params.appcacheId);
      return true;
    case kAppCacheHost_MarkAsForeignEntry_Name:
      var params = reader.decodeStruct(AppCacheHost_MarkAsForeignEntry_Params);
      this.markAsForeignEntry(params.documentUrl, params.appcacheDocumentWasLoadedFrom);
      return true;
    default:
      return false;
    }
  };

  AppCacheHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppCacheHost_GetStatus_Name:
      var params = reader.decodeStruct(AppCacheHost_GetStatus_Params);
      this.getStatus().then(function(response) {
        var responseParams =
            new AppCacheHost_GetStatus_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kAppCacheHost_GetStatus_Name,
            codec.align(AppCacheHost_GetStatus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AppCacheHost_GetStatus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAppCacheHost_StartUpdate_Name:
      var params = reader.decodeStruct(AppCacheHost_StartUpdate_Params);
      this.startUpdate().then(function(response) {
        var responseParams =
            new AppCacheHost_StartUpdate_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kAppCacheHost_StartUpdate_Name,
            codec.align(AppCacheHost_StartUpdate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AppCacheHost_StartUpdate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAppCacheHost_SwapCache_Name:
      var params = reader.decodeStruct(AppCacheHost_SwapCache_Params);
      this.swapCache().then(function(response) {
        var responseParams =
            new AppCacheHost_SwapCache_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kAppCacheHost_SwapCache_Name,
            codec.align(AppCacheHost_SwapCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AppCacheHost_SwapCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAppCacheHost_GetResourceList_Name:
      var params = reader.decodeStruct(AppCacheHost_GetResourceList_Params);
      this.getResourceList().then(function(response) {
        var responseParams =
            new AppCacheHost_GetResourceList_ResponseParams();
        responseParams.resources = response.resources;
        var builder = new codec.MessageV1Builder(
            kAppCacheHost_GetResourceList_Name,
            codec.align(AppCacheHost_GetResourceList_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AppCacheHost_GetResourceList_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAppCacheHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppCacheHost_SetSpawningHostId_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheHost_SetSpawningHostId_Params;
      break;
      case kAppCacheHost_SelectCache_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheHost_SelectCache_Params;
      break;
      case kAppCacheHost_SelectCacheForSharedWorker_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheHost_SelectCacheForSharedWorker_Params;
      break;
      case kAppCacheHost_MarkAsForeignEntry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheHost_MarkAsForeignEntry_Params;
      break;
      case kAppCacheHost_GetStatus_Name:
        if (message.expectsResponse())
          paramsClass = AppCacheHost_GetStatus_Params;
      break;
      case kAppCacheHost_StartUpdate_Name:
        if (message.expectsResponse())
          paramsClass = AppCacheHost_StartUpdate_Params;
      break;
      case kAppCacheHost_SwapCache_Name:
        if (message.expectsResponse())
          paramsClass = AppCacheHost_SwapCache_Params;
      break;
      case kAppCacheHost_GetResourceList_Name:
        if (message.expectsResponse())
          paramsClass = AppCacheHost_GetResourceList_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppCacheHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAppCacheHost_GetStatus_Name:
        if (message.isResponse())
          paramsClass = AppCacheHost_GetStatus_ResponseParams;
        break;
      case kAppCacheHost_StartUpdate_Name:
        if (message.isResponse())
          paramsClass = AppCacheHost_StartUpdate_ResponseParams;
        break;
      case kAppCacheHost_SwapCache_Name:
        if (message.isResponse())
          paramsClass = AppCacheHost_SwapCache_ResponseParams;
        break;
      case kAppCacheHost_GetResourceList_Name:
        if (message.isResponse())
          paramsClass = AppCacheHost_GetResourceList_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AppCacheHost = {
    name: 'blink.mojom.AppCacheHost',
    kVersion: 0,
    ptrClass: AppCacheHostPtr,
    proxyClass: AppCacheHostProxy,
    stubClass: AppCacheHostStub,
    validateRequest: validateAppCacheHostRequest,
    validateResponse: validateAppCacheHostResponse,
  };
  AppCacheHostStub.prototype.validator = validateAppCacheHostRequest;
  AppCacheHostProxy.prototype.validator = validateAppCacheHostResponse;
  var kAppCacheFrontend_CacheSelected_Name = 0;
  var kAppCacheFrontend_EventRaised_Name = 1;
  var kAppCacheFrontend_ProgressEventRaised_Name = 2;
  var kAppCacheFrontend_ErrorEventRaised_Name = 3;
  var kAppCacheFrontend_LogMessage_Name = 4;
  var kAppCacheFrontend_SetSubresourceFactory_Name = 5;

  function AppCacheFrontendPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppCacheFrontend,
                                                   handleOrPtrInfo);
  }

  function AppCacheFrontendAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppCacheFrontend, associatedInterfacePtrInfo);
  }

  AppCacheFrontendAssociatedPtr.prototype =
      Object.create(AppCacheFrontendPtr.prototype);
  AppCacheFrontendAssociatedPtr.prototype.constructor =
      AppCacheFrontendAssociatedPtr;

  function AppCacheFrontendProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppCacheFrontendPtr.prototype.cacheSelected = function() {
    return AppCacheFrontendProxy.prototype.cacheSelected
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheFrontendProxy.prototype.cacheSelected = function(info) {
    var params_ = new AppCacheFrontend_CacheSelected_Params();
    params_.info = info;
    var builder = new codec.MessageV0Builder(
        kAppCacheFrontend_CacheSelected_Name,
        codec.align(AppCacheFrontend_CacheSelected_Params.encodedSize));
    builder.encodeStruct(AppCacheFrontend_CacheSelected_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheFrontendPtr.prototype.eventRaised = function() {
    return AppCacheFrontendProxy.prototype.eventRaised
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheFrontendProxy.prototype.eventRaised = function(eventId) {
    var params_ = new AppCacheFrontend_EventRaised_Params();
    params_.eventId = eventId;
    var builder = new codec.MessageV0Builder(
        kAppCacheFrontend_EventRaised_Name,
        codec.align(AppCacheFrontend_EventRaised_Params.encodedSize));
    builder.encodeStruct(AppCacheFrontend_EventRaised_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheFrontendPtr.prototype.progressEventRaised = function() {
    return AppCacheFrontendProxy.prototype.progressEventRaised
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheFrontendProxy.prototype.progressEventRaised = function(url, total, complete) {
    var params_ = new AppCacheFrontend_ProgressEventRaised_Params();
    params_.url = url;
    params_.total = total;
    params_.complete = complete;
    var builder = new codec.MessageV0Builder(
        kAppCacheFrontend_ProgressEventRaised_Name,
        codec.align(AppCacheFrontend_ProgressEventRaised_Params.encodedSize));
    builder.encodeStruct(AppCacheFrontend_ProgressEventRaised_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheFrontendPtr.prototype.errorEventRaised = function() {
    return AppCacheFrontendProxy.prototype.errorEventRaised
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheFrontendProxy.prototype.errorEventRaised = function(errorDetails) {
    var params_ = new AppCacheFrontend_ErrorEventRaised_Params();
    params_.errorDetails = errorDetails;
    var builder = new codec.MessageV0Builder(
        kAppCacheFrontend_ErrorEventRaised_Name,
        codec.align(AppCacheFrontend_ErrorEventRaised_Params.encodedSize));
    builder.encodeStruct(AppCacheFrontend_ErrorEventRaised_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheFrontendPtr.prototype.logMessage = function() {
    return AppCacheFrontendProxy.prototype.logMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheFrontendProxy.prototype.logMessage = function(logLevel, message) {
    var params_ = new AppCacheFrontend_LogMessage_Params();
    params_.logLevel = logLevel;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kAppCacheFrontend_LogMessage_Name,
        codec.align(AppCacheFrontend_LogMessage_Params.encodedSize));
    builder.encodeStruct(AppCacheFrontend_LogMessage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppCacheFrontendPtr.prototype.setSubresourceFactory = function() {
    return AppCacheFrontendProxy.prototype.setSubresourceFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  AppCacheFrontendProxy.prototype.setSubresourceFactory = function(urlLoaderFactory) {
    var params_ = new AppCacheFrontend_SetSubresourceFactory_Params();
    params_.urlLoaderFactory = urlLoaderFactory;
    var builder = new codec.MessageV0Builder(
        kAppCacheFrontend_SetSubresourceFactory_Name,
        codec.align(AppCacheFrontend_SetSubresourceFactory_Params.encodedSize));
    builder.encodeStruct(AppCacheFrontend_SetSubresourceFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AppCacheFrontendStub(delegate) {
    this.delegate_ = delegate;
  }
  AppCacheFrontendStub.prototype.cacheSelected = function(info) {
    return this.delegate_ && this.delegate_.cacheSelected && this.delegate_.cacheSelected(info);
  }
  AppCacheFrontendStub.prototype.eventRaised = function(eventId) {
    return this.delegate_ && this.delegate_.eventRaised && this.delegate_.eventRaised(eventId);
  }
  AppCacheFrontendStub.prototype.progressEventRaised = function(url, total, complete) {
    return this.delegate_ && this.delegate_.progressEventRaised && this.delegate_.progressEventRaised(url, total, complete);
  }
  AppCacheFrontendStub.prototype.errorEventRaised = function(errorDetails) {
    return this.delegate_ && this.delegate_.errorEventRaised && this.delegate_.errorEventRaised(errorDetails);
  }
  AppCacheFrontendStub.prototype.logMessage = function(logLevel, message) {
    return this.delegate_ && this.delegate_.logMessage && this.delegate_.logMessage(logLevel, message);
  }
  AppCacheFrontendStub.prototype.setSubresourceFactory = function(urlLoaderFactory) {
    return this.delegate_ && this.delegate_.setSubresourceFactory && this.delegate_.setSubresourceFactory(urlLoaderFactory);
  }

  AppCacheFrontendStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppCacheFrontend_CacheSelected_Name:
      var params = reader.decodeStruct(AppCacheFrontend_CacheSelected_Params);
      this.cacheSelected(params.info);
      return true;
    case kAppCacheFrontend_EventRaised_Name:
      var params = reader.decodeStruct(AppCacheFrontend_EventRaised_Params);
      this.eventRaised(params.eventId);
      return true;
    case kAppCacheFrontend_ProgressEventRaised_Name:
      var params = reader.decodeStruct(AppCacheFrontend_ProgressEventRaised_Params);
      this.progressEventRaised(params.url, params.total, params.complete);
      return true;
    case kAppCacheFrontend_ErrorEventRaised_Name:
      var params = reader.decodeStruct(AppCacheFrontend_ErrorEventRaised_Params);
      this.errorEventRaised(params.errorDetails);
      return true;
    case kAppCacheFrontend_LogMessage_Name:
      var params = reader.decodeStruct(AppCacheFrontend_LogMessage_Params);
      this.logMessage(params.logLevel, params.message);
      return true;
    case kAppCacheFrontend_SetSubresourceFactory_Name:
      var params = reader.decodeStruct(AppCacheFrontend_SetSubresourceFactory_Params);
      this.setSubresourceFactory(params.urlLoaderFactory);
      return true;
    default:
      return false;
    }
  };

  AppCacheFrontendStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAppCacheFrontendRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppCacheFrontend_CacheSelected_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheFrontend_CacheSelected_Params;
      break;
      case kAppCacheFrontend_EventRaised_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheFrontend_EventRaised_Params;
      break;
      case kAppCacheFrontend_ProgressEventRaised_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheFrontend_ProgressEventRaised_Params;
      break;
      case kAppCacheFrontend_ErrorEventRaised_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheFrontend_ErrorEventRaised_Params;
      break;
      case kAppCacheFrontend_LogMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheFrontend_LogMessage_Params;
      break;
      case kAppCacheFrontend_SetSubresourceFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppCacheFrontend_SetSubresourceFactory_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppCacheFrontendResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AppCacheFrontend = {
    name: 'blink.mojom.AppCacheFrontend',
    kVersion: 0,
    ptrClass: AppCacheFrontendPtr,
    proxyClass: AppCacheFrontendProxy,
    stubClass: AppCacheFrontendStub,
    validateRequest: validateAppCacheFrontendRequest,
    validateResponse: null,
  };
  AppCacheFrontendStub.prototype.validator = validateAppCacheFrontendRequest;
  AppCacheFrontendProxy.prototype.validator = null;
  exports.AppCacheEventID = AppCacheEventID;
  exports.AppCacheErrorReason = AppCacheErrorReason;
  exports.AppCacheResourceInfo = AppCacheResourceInfo;
  exports.AppCacheErrorDetails = AppCacheErrorDetails;
  exports.AppCacheBackend = AppCacheBackend;
  exports.AppCacheBackendPtr = AppCacheBackendPtr;
  exports.AppCacheBackendAssociatedPtr = AppCacheBackendAssociatedPtr;
  exports.AppCacheHost = AppCacheHost;
  exports.AppCacheHostPtr = AppCacheHostPtr;
  exports.AppCacheHostAssociatedPtr = AppCacheHostAssociatedPtr;
  exports.AppCacheFrontend = AppCacheFrontend;
  exports.AppCacheFrontendPtr = AppCacheFrontendPtr;
  exports.AppCacheFrontendAssociatedPtr = AppCacheFrontendAssociatedPtr;
})();