// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/fetch/fetch_api_request.mojom';
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
  var fetch_api$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/fetch_api.mojom', '../../../../../services/network/public/mojom/fetch_api.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', '../../../../../services/network/public/mojom/url_loader.mojom.js');
  }
  var serialized_blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/serialized_blob.mojom', '../blob/serialized_blob.mojom.js');
  }
  var request_context_frame_type$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/request_context_frame_type.mojom', '../loader/request_context_frame_type.mojom.js');
  }
  var referrer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/referrer.mojom', '../referrer.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var RequestContextType = {};
  RequestContextType.UNSPECIFIED = 0;
  RequestContextType.AUDIO = RequestContextType.UNSPECIFIED + 1;
  RequestContextType.BEACON = RequestContextType.AUDIO + 1;
  RequestContextType.CSP_REPORT = RequestContextType.BEACON + 1;
  RequestContextType.DOWNLOAD = RequestContextType.CSP_REPORT + 1;
  RequestContextType.EMBED = RequestContextType.DOWNLOAD + 1;
  RequestContextType.EVENT_SOURCE = RequestContextType.EMBED + 1;
  RequestContextType.FAVICON = RequestContextType.EVENT_SOURCE + 1;
  RequestContextType.FETCH = RequestContextType.FAVICON + 1;
  RequestContextType.FONT = RequestContextType.FETCH + 1;
  RequestContextType.FORM = RequestContextType.FONT + 1;
  RequestContextType.FRAME = RequestContextType.FORM + 1;
  RequestContextType.HYPERLINK = RequestContextType.FRAME + 1;
  RequestContextType.IFRAME = RequestContextType.HYPERLINK + 1;
  RequestContextType.IMAGE = RequestContextType.IFRAME + 1;
  RequestContextType.IMAGE_SET = RequestContextType.IMAGE + 1;
  RequestContextType.IMPORT = RequestContextType.IMAGE_SET + 1;
  RequestContextType.INTERNAL = RequestContextType.IMPORT + 1;
  RequestContextType.LOCATION = RequestContextType.INTERNAL + 1;
  RequestContextType.MANIFEST = RequestContextType.LOCATION + 1;
  RequestContextType.OBJECT = RequestContextType.MANIFEST + 1;
  RequestContextType.PING = RequestContextType.OBJECT + 1;
  RequestContextType.PLUGIN = RequestContextType.PING + 1;
  RequestContextType.PREFETCH = RequestContextType.PLUGIN + 1;
  RequestContextType.SCRIPT = RequestContextType.PREFETCH + 1;
  RequestContextType.SERVICE_WORKER = RequestContextType.SCRIPT + 1;
  RequestContextType.SHARED_WORKER = RequestContextType.SERVICE_WORKER + 1;
  RequestContextType.SUBRESOURCE = RequestContextType.SHARED_WORKER + 1;
  RequestContextType.STYLE = RequestContextType.SUBRESOURCE + 1;
  RequestContextType.TRACK = RequestContextType.STYLE + 1;
  RequestContextType.VIDEO = RequestContextType.TRACK + 1;
  RequestContextType.WORKER = RequestContextType.VIDEO + 1;
  RequestContextType.XML_HTTP_REQUEST = RequestContextType.WORKER + 1;
  RequestContextType.XSLT = RequestContextType.XML_HTTP_REQUEST + 1;
  RequestContextType.MIN_VALUE = 0,
  RequestContextType.MAX_VALUE = 33,

  RequestContextType.isKnownEnumValue = function(value) {
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
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
      return true;
    }
    return false;
  };

  RequestContextType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchCacheMode = {};
  FetchCacheMode.kDefault = 0;
  FetchCacheMode.kNoStore = FetchCacheMode.kDefault + 1;
  FetchCacheMode.kBypassCache = FetchCacheMode.kNoStore + 1;
  FetchCacheMode.kValidateCache = FetchCacheMode.kBypassCache + 1;
  FetchCacheMode.kForceCache = FetchCacheMode.kValidateCache + 1;
  FetchCacheMode.kOnlyIfCached = FetchCacheMode.kForceCache + 1;
  FetchCacheMode.kUnspecifiedOnlyIfCachedStrict = FetchCacheMode.kOnlyIfCached + 1;
  FetchCacheMode.kUnspecifiedForceCacheMiss = FetchCacheMode.kUnspecifiedOnlyIfCachedStrict + 1;
  FetchCacheMode.MIN_VALUE = 0,
  FetchCacheMode.MAX_VALUE = 7,

  FetchCacheMode.isKnownEnumValue = function(value) {
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

  FetchCacheMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchImportanceMode = {};
  FetchImportanceMode.kImportanceLow = 0;
  FetchImportanceMode.kImportanceAuto = FetchImportanceMode.kImportanceLow + 1;
  FetchImportanceMode.kImportanceHigh = FetchImportanceMode.kImportanceAuto + 1;
  FetchImportanceMode.MIN_VALUE = 0,
  FetchImportanceMode.MAX_VALUE = 2,

  FetchImportanceMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FetchImportanceMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FetchAPIRequestHeaders(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIRequestHeaders.prototype.initDefaults_ = function() {
    this.headers = null;
  };
  FetchAPIRequestHeaders.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIRequestHeaders.validate = function(messageValidator, offset) {
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


    // validate FetchAPIRequestHeaders.headers
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FetchAPIRequestHeaders.encodedSize = codec.kStructHeaderSize + 8;

  FetchAPIRequestHeaders.decode = function(decoder) {
    var packed;
    var val = new FetchAPIRequestHeaders();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.headers = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  FetchAPIRequestHeaders.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIRequestHeaders.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.headers);
  };
  function FetchAPIRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIRequest.prototype.initDefaults_ = function() {
    this.mode = fetch_api$.FetchRequestMode.kNoCors;
    this.isMainResourceLoad = false;
    this.keepalive = false;
    this.isReload = false;
    this.isHistoryNavigation = false;
    this.requestContextType = RequestContextType.UNSPECIFIED;
    this.frameType = request_context_frame_type$.RequestContextFrameType.kNone;
    this.url = null;
    this.method = null;
    this.headers = null;
    this.blob = null;
    this.body = null;
    this.referrer = null;
    this.credentialsMode = fetch_api$.FetchCredentialsMode.kOmit;
    this.cacheMode = FetchCacheMode.kDefault;
    this.redirectMode = fetch_api$.FetchRedirectMode.kFollow;
    this.priority = url_loader$.RequestPriority.kIdle;
    this.integrity = null;
    this.fetchWindowId = null;
  };
  FetchAPIRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 104}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, fetch_api$.FetchRequestMode);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FetchAPIRequest.requestContextType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, RequestContextType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.frameType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, request_context_frame_type$.RequestContextFrameType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.headers
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, FetchAPIRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.blob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.body
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, url_loader$.URLRequestBody, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.referrer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, referrer$.Referrer, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.credentialsMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 64, fetch_api$.FetchCredentialsMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.cacheMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 68, FetchCacheMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.redirectMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 72, fetch_api$.FetchRedirectMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.integrity
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 80, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 76, url_loader$.RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.fetchWindowId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  FetchAPIRequest.encodedSize = codec.kStructHeaderSize + 96;

  FetchAPIRequest.decode = function(decoder) {
    var packed;
    var val = new FetchAPIRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isMainResourceLoad = (packed >> 0) & 1 ? true : false;
    val.keepalive = (packed >> 1) & 1 ? true : false;
    val.isReload = (packed >> 2) & 1 ? true : false;
    val.isHistoryNavigation = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.requestContextType = decoder.decodeStruct(codec.Int32);
    val.frameType = decoder.decodeStruct(codec.Int32);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.method = decoder.decodeStruct(codec.String);
    val.headers = decoder.decodeStructPointer(FetchAPIRequestHeaders);
    val.blob = decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    val.body = decoder.decodeStructPointer(url_loader$.URLRequestBody);
    val.referrer = decoder.decodeStructPointer(referrer$.Referrer);
    val.credentialsMode = decoder.decodeStruct(codec.Int32);
    val.cacheMode = decoder.decodeStruct(codec.Int32);
    val.redirectMode = decoder.decodeStruct(codec.Int32);
    val.priority = decoder.decodeStruct(codec.Int32);
    val.integrity = decoder.decodeStruct(codec.NullableString);
    val.fetchWindowId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  FetchAPIRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    packed = 0;
    packed |= (val.isMainResourceLoad & 1) << 0
    packed |= (val.keepalive & 1) << 1
    packed |= (val.isReload & 1) << 2
    packed |= (val.isHistoryNavigation & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.requestContextType);
    encoder.encodeStruct(codec.Int32, val.frameType);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStructPointer(FetchAPIRequestHeaders, val.headers);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.blob);
    encoder.encodeStructPointer(url_loader$.URLRequestBody, val.body);
    encoder.encodeStructPointer(referrer$.Referrer, val.referrer);
    encoder.encodeStruct(codec.Int32, val.credentialsMode);
    encoder.encodeStruct(codec.Int32, val.cacheMode);
    encoder.encodeStruct(codec.Int32, val.redirectMode);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.encodeStruct(codec.NullableString, val.integrity);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.fetchWindowId);
  };
  exports.RequestContextType = RequestContextType;
  exports.FetchCacheMode = FetchCacheMode;
  exports.FetchImportanceMode = FetchImportanceMode;
  exports.FetchAPIRequestHeaders = FetchAPIRequestHeaders;
  exports.FetchAPIRequest = FetchAPIRequest;
})();