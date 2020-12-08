// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/url_loader.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var cors$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cors.mojom', 'cors.mojom.js');
  }
  var chunked_data_pipe_getter$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/chunked_data_pipe_getter.mojom', 'chunked_data_pipe_getter.mojom.js');
  }
  var data_pipe_getter$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/data_pipe_getter.mojom', 'data_pipe_getter.mojom.js');
  }
  var fetch_api$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/fetch_api.mojom', 'fetch_api.mojom.js');
  }
  var http_request_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/http_request_headers.mojom', 'http_request_headers.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }


  var RequestPriority = {};
  RequestPriority.kThrottled = 0;
  RequestPriority.kIdle = RequestPriority.kThrottled + 1;
  RequestPriority.kLowest = RequestPriority.kIdle + 1;
  RequestPriority.kLow = RequestPriority.kLowest + 1;
  RequestPriority.kMedium = RequestPriority.kLow + 1;
  RequestPriority.kHighest = RequestPriority.kMedium + 1;
  RequestPriority.MIN_VALUE = 0,
  RequestPriority.MAX_VALUE = 5,

  RequestPriority.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  RequestPriority.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var URLRequestReferrerPolicy = {};
  URLRequestReferrerPolicy.kClearReferrerOnTransitionFromSecureToInsecure = 0;
  URLRequestReferrerPolicy.kReduceReferrerGranularityOnTransitionCrossOrigin = URLRequestReferrerPolicy.kClearReferrerOnTransitionFromSecureToInsecure + 1;
  URLRequestReferrerPolicy.kOriginOnlyOnTransitionCrossOrigin = URLRequestReferrerPolicy.kReduceReferrerGranularityOnTransitionCrossOrigin + 1;
  URLRequestReferrerPolicy.kNeverClearReferrer = URLRequestReferrerPolicy.kOriginOnlyOnTransitionCrossOrigin + 1;
  URLRequestReferrerPolicy.kOrigin = URLRequestReferrerPolicy.kNeverClearReferrer + 1;
  URLRequestReferrerPolicy.kClearReferrerOnTransitionCrossOrigin = URLRequestReferrerPolicy.kOrigin + 1;
  URLRequestReferrerPolicy.kOriginClearOnTransitionFromSecureToInsecure = URLRequestReferrerPolicy.kClearReferrerOnTransitionCrossOrigin + 1;
  URLRequestReferrerPolicy.kNoReferrer = URLRequestReferrerPolicy.kOriginClearOnTransitionFromSecureToInsecure + 1;
  URLRequestReferrerPolicy.MIN_VALUE = 0,
  URLRequestReferrerPolicy.MAX_VALUE = 7,

  URLRequestReferrerPolicy.isKnownEnumValue = function(value) {
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

  URLRequestReferrerPolicy.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var DataElementType = {};
  DataElementType.kUnknown = -1;
  DataElementType.kDataPipe = DataElementType.kUnknown + 1;
  DataElementType.kChunkedDataPipe = DataElementType.kDataPipe + 1;
  DataElementType.kRawFile = DataElementType.kChunkedDataPipe + 1;
  DataElementType.kBlob = DataElementType.kRawFile + 1;
  DataElementType.kFile = DataElementType.kBlob + 1;
  DataElementType.kBytes = DataElementType.kFile + 1;
  DataElementType.MIN_VALUE = -1,
  DataElementType.MAX_VALUE = 5,

  DataElementType.isKnownEnumValue = function(value) {
    switch (value) {
    case -1:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  DataElementType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function URLResponseHead(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseHead.prototype.initDefaults_ = function() {
  };
  URLResponseHead.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseHead.validate = function(messageValidator, offset) {
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

  URLResponseHead.encodedSize = codec.kStructHeaderSize + 0;

  URLResponseHead.decode = function(decoder) {
    var packed;
    var val = new URLResponseHead();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLResponseHead.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseHead.encodedSize);
    encoder.writeUint32(0);
  };
  function URLRequestRedirectInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLRequestRedirectInfo.prototype.initDefaults_ = function() {
  };
  URLRequestRedirectInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLRequestRedirectInfo.validate = function(messageValidator, offset) {
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

  URLRequestRedirectInfo.encodedSize = codec.kStructHeaderSize + 0;

  URLRequestRedirectInfo.decode = function(decoder) {
    var packed;
    var val = new URLRequestRedirectInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLRequestRedirectInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLRequestRedirectInfo.encodedSize);
    encoder.writeUint32(0);
  };
  function CorsErrorStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CorsErrorStatus.prototype.initDefaults_ = function() {
  };
  CorsErrorStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CorsErrorStatus.validate = function(messageValidator, offset) {
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

  CorsErrorStatus.encodedSize = codec.kStructHeaderSize + 0;

  CorsErrorStatus.decode = function(decoder) {
    var packed;
    var val = new CorsErrorStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CorsErrorStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CorsErrorStatus.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderCompletionStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderCompletionStatus.prototype.initDefaults_ = function() {
  };
  URLLoaderCompletionStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderCompletionStatus.validate = function(messageValidator, offset) {
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

  URLLoaderCompletionStatus.encodedSize = codec.kStructHeaderSize + 0;

  URLLoaderCompletionStatus.decode = function(decoder) {
    var packed;
    var val = new URLLoaderCompletionStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoaderCompletionStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderCompletionStatus.encodedSize);
    encoder.writeUint32(0);
  };
  function URLRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLRequest.prototype.initDefaults_ = function() {
    this.method = null;
    this.url = null;
    this.siteForCookies = null;
    this.topFrameOrigin = null;
    this.attachSameSiteCookies = false;
    this.updateFirstPartyUrlOnRedirect = false;
    this.isPrerendering = false;
    this.allowCredentials = false;
    this.shouldResetAppcache = false;
    this.isExternalRequest = false;
    this.originatedFromServiceWorker = false;
    this.skipServiceWorker = false;
    this.corbDetachable = false;
    this.corbExcluded = false;
    this.keepalive = false;
    this.hasUserGesture = false;
    this.enableLoadTiming = false;
    this.enableUploadProgress = false;
    this.doNotPromptForLogin = false;
    this.isMainFrame = false;
    this.allowDownload = false;
    this.reportRawHeaders = false;
    this.initiatedInSecureContext = false;
    this.upgradeIfInsecure = false;
    this.isRevalidating = false;
    this.shouldAlsoUseFactoryBoundOriginForCors = false;
    this.referrerPolicy = 0;
    this.requestInitiator = null;
    this.referrer = null;
    this.headers = null;
    this.corsExemptHeaders = null;
    this.loadFlags = 0;
    this.pluginChildId = 0;
    this.resourceType = 0;
    this.priority = 0;
    this.appcacheHostId = null;
    this.corsPreflightPolicy = 0;
    this.fetchRequestMode = 0;
    this.fetchCredentialsMode = 0;
    this.fetchRedirectMode = 0;
    this.fetchIntegrity = null;
    this.fetchRequestContextType = 0;
    this.renderFrameId = 0;
    this.requestBody = null;
    this.transitionType = 0;
    this.previewsState = 0;
    this.throttlingProfileId = null;
    this.customProxyPreCacheHeaders = null;
    this.customProxyPostCacheHeaders = null;
    this.fetchWindowId = null;
    this.devtoolsRequestId = null;
  };
  URLRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 192}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.siteForCookies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.topFrameOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;




    // validate URLRequest.requestInitiator
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.referrer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.referrerPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, URLRequestReferrerPolicy);
    if (err !== validator.validationError.NONE)
        return err;



    // validate URLRequest.headers
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.corsExemptHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;






    // validate URLRequest.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 84, RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.appcacheHostId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;




    // validate URLRequest.corsPreflightPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 96, cors$.CorsPreflightPolicy);
    if (err !== validator.validationError.NONE)
        return err;






    // validate URLRequest.fetchRequestMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 100, fetch_api$.FetchRequestMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.fetchCredentialsMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 104, fetch_api$.FetchCredentialsMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.fetchRedirectMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 108, fetch_api$.FetchRedirectMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.fetchIntegrity
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 112, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate URLRequest.requestBody
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 128, URLRequestBody, true);
    if (err !== validator.validationError.NONE)
        return err;

















    // validate URLRequest.throttlingProfileId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 144, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.customProxyPreCacheHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 152, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.customProxyPostCacheHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 160, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.fetchWindowId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 168, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLRequest.devtoolsRequestId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 176, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLRequest.encodedSize = codec.kStructHeaderSize + 184;

  URLRequest.decode = function(decoder) {
    var packed;
    var val = new URLRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.method = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.siteForCookies = decoder.decodeStructPointer(url$.Url);
    val.topFrameOrigin = decoder.decodeStructPointer(origin$.Origin);
    packed = decoder.readUint8();
    val.attachSameSiteCookies = (packed >> 0) & 1 ? true : false;
    val.updateFirstPartyUrlOnRedirect = (packed >> 1) & 1 ? true : false;
    val.isPrerendering = (packed >> 2) & 1 ? true : false;
    val.allowCredentials = (packed >> 3) & 1 ? true : false;
    val.shouldResetAppcache = (packed >> 4) & 1 ? true : false;
    val.isExternalRequest = (packed >> 5) & 1 ? true : false;
    val.originatedFromServiceWorker = (packed >> 6) & 1 ? true : false;
    val.skipServiceWorker = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.corbDetachable = (packed >> 0) & 1 ? true : false;
    val.corbExcluded = (packed >> 1) & 1 ? true : false;
    val.keepalive = (packed >> 2) & 1 ? true : false;
    val.hasUserGesture = (packed >> 3) & 1 ? true : false;
    val.enableLoadTiming = (packed >> 4) & 1 ? true : false;
    val.enableUploadProgress = (packed >> 5) & 1 ? true : false;
    val.doNotPromptForLogin = (packed >> 6) & 1 ? true : false;
    val.isMainFrame = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.allowDownload = (packed >> 0) & 1 ? true : false;
    val.reportRawHeaders = (packed >> 1) & 1 ? true : false;
    val.initiatedInSecureContext = (packed >> 2) & 1 ? true : false;
    val.upgradeIfInsecure = (packed >> 3) & 1 ? true : false;
    val.isRevalidating = (packed >> 4) & 1 ? true : false;
    val.shouldAlsoUseFactoryBoundOriginForCors = (packed >> 5) & 1 ? true : false;
    decoder.skip(1);
    val.referrerPolicy = decoder.decodeStruct(codec.Int32);
    val.requestInitiator = decoder.decodeStructPointer(origin$.Origin);
    val.referrer = decoder.decodeStructPointer(url$.Url);
    val.headers = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.corsExemptHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.loadFlags = decoder.decodeStruct(codec.Int32);
    val.pluginChildId = decoder.decodeStruct(codec.Int32);
    val.resourceType = decoder.decodeStruct(codec.Int32);
    val.priority = decoder.decodeStruct(codec.Int32);
    val.appcacheHostId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.corsPreflightPolicy = decoder.decodeStruct(codec.Int32);
    val.fetchRequestMode = decoder.decodeStruct(codec.Int32);
    val.fetchCredentialsMode = decoder.decodeStruct(codec.Int32);
    val.fetchRedirectMode = decoder.decodeStruct(codec.Int32);
    val.fetchIntegrity = decoder.decodeStruct(codec.String);
    val.fetchRequestContextType = decoder.decodeStruct(codec.Int32);
    val.renderFrameId = decoder.decodeStruct(codec.Int32);
    val.requestBody = decoder.decodeStructPointer(URLRequestBody);
    val.transitionType = decoder.decodeStruct(codec.Int32);
    val.previewsState = decoder.decodeStruct(codec.Int32);
    val.throttlingProfileId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.customProxyPreCacheHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.customProxyPostCacheHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.fetchWindowId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.devtoolsRequestId = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  URLRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(url$.Url, val.siteForCookies);
    encoder.encodeStructPointer(origin$.Origin, val.topFrameOrigin);
    packed = 0;
    packed |= (val.attachSameSiteCookies & 1) << 0
    packed |= (val.updateFirstPartyUrlOnRedirect & 1) << 1
    packed |= (val.isPrerendering & 1) << 2
    packed |= (val.allowCredentials & 1) << 3
    packed |= (val.shouldResetAppcache & 1) << 4
    packed |= (val.isExternalRequest & 1) << 5
    packed |= (val.originatedFromServiceWorker & 1) << 6
    packed |= (val.skipServiceWorker & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.corbDetachable & 1) << 0
    packed |= (val.corbExcluded & 1) << 1
    packed |= (val.keepalive & 1) << 2
    packed |= (val.hasUserGesture & 1) << 3
    packed |= (val.enableLoadTiming & 1) << 4
    packed |= (val.enableUploadProgress & 1) << 5
    packed |= (val.doNotPromptForLogin & 1) << 6
    packed |= (val.isMainFrame & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.allowDownload & 1) << 0
    packed |= (val.reportRawHeaders & 1) << 1
    packed |= (val.initiatedInSecureContext & 1) << 2
    packed |= (val.upgradeIfInsecure & 1) << 3
    packed |= (val.isRevalidating & 1) << 4
    packed |= (val.shouldAlsoUseFactoryBoundOriginForCors & 1) << 5
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.referrerPolicy);
    encoder.encodeStructPointer(origin$.Origin, val.requestInitiator);
    encoder.encodeStructPointer(url$.Url, val.referrer);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.headers);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.corsExemptHeaders);
    encoder.encodeStruct(codec.Int32, val.loadFlags);
    encoder.encodeStruct(codec.Int32, val.pluginChildId);
    encoder.encodeStruct(codec.Int32, val.resourceType);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.appcacheHostId);
    encoder.encodeStruct(codec.Int32, val.corsPreflightPolicy);
    encoder.encodeStruct(codec.Int32, val.fetchRequestMode);
    encoder.encodeStruct(codec.Int32, val.fetchCredentialsMode);
    encoder.encodeStruct(codec.Int32, val.fetchRedirectMode);
    encoder.encodeStruct(codec.String, val.fetchIntegrity);
    encoder.encodeStruct(codec.Int32, val.fetchRequestContextType);
    encoder.encodeStruct(codec.Int32, val.renderFrameId);
    encoder.encodeStructPointer(URLRequestBody, val.requestBody);
    encoder.encodeStruct(codec.Int32, val.transitionType);
    encoder.encodeStruct(codec.Int32, val.previewsState);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.throttlingProfileId);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.customProxyPreCacheHeaders);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.customProxyPostCacheHeaders);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.fetchWindowId);
    encoder.encodeStruct(codec.NullableString, val.devtoolsRequestId);
  };
  function URLRequestBody(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLRequestBody.prototype.initDefaults_ = function() {
    this.elements = null;
    this.identifier = 0;
    this.containsSensitiveInfo = false;
  };
  URLRequestBody.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLRequestBody.validate = function(messageValidator, offset) {
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


    // validate URLRequestBody.elements
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(DataElement), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  URLRequestBody.encodedSize = codec.kStructHeaderSize + 24;

  URLRequestBody.decode = function(decoder) {
    var packed;
    var val = new URLRequestBody();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.elements = decoder.decodeArrayPointer(new codec.PointerTo(DataElement));
    val.identifier = decoder.decodeStruct(codec.Uint64);
    packed = decoder.readUint8();
    val.containsSensitiveInfo = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLRequestBody.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLRequestBody.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(DataElement), val.elements);
    encoder.encodeStruct(codec.Uint64, val.identifier);
    packed = 0;
    packed |= (val.containsSensitiveInfo & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DataElement(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DataElement.prototype.initDefaults_ = function() {
    this.type = 0;
    this.buf = null;
    this.path = null;
    this.file = null;
    this.blobUuid = null;
    this.dataPipeGetter = new data_pipe_getter$.DataPipeGetterPtr();
    this.chunkedDataPipeGetter = new chunked_data_pipe_getter$.ChunkedDataPipeGetterPtr();
    this.offset = 0;
    this.length = 0;
    this.expectedModificationTime = null;
  };
  DataElement.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DataElement.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DataElementType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.buf
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.file
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, file$.File, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.blobUuid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.dataPipeGetter
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 40, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DataElement.chunkedDataPipeGetter
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 48, true);
    if (err !== validator.validationError.NONE)
        return err;




    // validate DataElement.expectedModificationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DataElement.encodedSize = codec.kStructHeaderSize + 80;

  DataElement.decode = function(decoder) {
    var packed;
    var val = new DataElement();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.buf = decoder.decodeArrayPointer(codec.Uint8);
    val.path = decoder.decodeStructPointer(file_path$.FilePath);
    val.file = decoder.decodeStructPointer(file$.File);
    val.blobUuid = decoder.decodeStruct(codec.NullableString);
    val.dataPipeGetter = decoder.decodeStruct(new codec.NullableInterface(data_pipe_getter$.DataPipeGetterPtr));
    val.chunkedDataPipeGetter = decoder.decodeStruct(new codec.NullableInterface(chunked_data_pipe_getter$.ChunkedDataPipeGetterPtr));
    val.offset = decoder.decodeStruct(codec.Uint64);
    val.length = decoder.decodeStruct(codec.Uint64);
    val.expectedModificationTime = decoder.decodeStructPointer(time$.Time);
    return val;
  };

  DataElement.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DataElement.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.buf);
    encoder.encodeStructPointer(file_path$.FilePath, val.path);
    encoder.encodeStructPointer(file$.File, val.file);
    encoder.encodeStruct(codec.NullableString, val.blobUuid);
    encoder.encodeStruct(new codec.NullableInterface(data_pipe_getter$.DataPipeGetterPtr), val.dataPipeGetter);
    encoder.encodeStruct(new codec.NullableInterface(chunked_data_pipe_getter$.ChunkedDataPipeGetterPtr), val.chunkedDataPipeGetter);
    encoder.encodeStruct(codec.Uint64, val.offset);
    encoder.encodeStruct(codec.Uint64, val.length);
    encoder.encodeStructPointer(time$.Time, val.expectedModificationTime);
  };
  function URLLoaderClientEndpoints(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClientEndpoints.prototype.initDefaults_ = function() {
    this.urlLoader = new URLLoaderPtr();
    this.urlLoaderClient = new bindings.InterfaceRequest();
  };
  URLLoaderClientEndpoints.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClientEndpoints.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClientEndpoints.urlLoader
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderClientEndpoints.urlLoaderClient
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClientEndpoints.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClientEndpoints.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClientEndpoints();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoader = decoder.decodeStruct(new codec.Interface(URLLoaderPtr));
    val.urlLoaderClient = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderClientEndpoints.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClientEndpoints.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(URLLoaderPtr), val.urlLoader);
    encoder.encodeStruct(codec.InterfaceRequest, val.urlLoaderClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function URLLoader_FollowRedirect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_FollowRedirect_Params.prototype.initDefaults_ = function() {
    this.removedHeaders = null;
    this.modifiedHeaders = null;
    this.newUrl = null;
  };
  URLLoader_FollowRedirect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_FollowRedirect_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoader_FollowRedirect_Params.removedHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoader_FollowRedirect_Params.modifiedHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoader_FollowRedirect_Params.newUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_FollowRedirect_Params.encodedSize = codec.kStructHeaderSize + 24;

  URLLoader_FollowRedirect_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_FollowRedirect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.removedHeaders = decoder.decodeArrayPointer(codec.String);
    val.modifiedHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.newUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  URLLoader_FollowRedirect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_FollowRedirect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.removedHeaders);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.modifiedHeaders);
    encoder.encodeStructPointer(url$.Url, val.newUrl);
  };
  function URLLoader_ProceedWithResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_ProceedWithResponse_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_ProceedWithResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_ProceedWithResponse_Params.validate = function(messageValidator, offset) {
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

  URLLoader_ProceedWithResponse_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_ProceedWithResponse_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_ProceedWithResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_ProceedWithResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_ProceedWithResponse_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoader_SetPriority_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_SetPriority_Params.prototype.initDefaults_ = function() {
    this.priority = 0;
    this.intraPriorityValue = 0;
  };
  URLLoader_SetPriority_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_SetPriority_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoader_SetPriority_Params.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  URLLoader_SetPriority_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoader_SetPriority_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_SetPriority_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.priority = decoder.decodeStruct(codec.Int32);
    val.intraPriorityValue = decoder.decodeStruct(codec.Int32);
    return val;
  };

  URLLoader_SetPriority_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_SetPriority_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.encodeStruct(codec.Int32, val.intraPriorityValue);
  };
  function URLLoader_PauseReadingBodyFromNet_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_PauseReadingBodyFromNet_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_PauseReadingBodyFromNet_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_PauseReadingBodyFromNet_Params.validate = function(messageValidator, offset) {
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

  URLLoader_PauseReadingBodyFromNet_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_PauseReadingBodyFromNet_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_PauseReadingBodyFromNet_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_PauseReadingBodyFromNet_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_PauseReadingBodyFromNet_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoader_ResumeReadingBodyFromNet_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_ResumeReadingBodyFromNet_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_ResumeReadingBodyFromNet_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_ResumeReadingBodyFromNet_Params.validate = function(messageValidator, offset) {
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

  URLLoader_ResumeReadingBodyFromNet_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_ResumeReadingBodyFromNet_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_ResumeReadingBodyFromNet_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_ResumeReadingBodyFromNet_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_ResumeReadingBodyFromNet_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderClient_OnReceiveResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnReceiveResponse_Params.prototype.initDefaults_ = function() {
    this.head = null;
  };
  URLLoaderClient_OnReceiveResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnReceiveResponse_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnReceiveResponse_Params.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnReceiveResponse_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnReceiveResponse_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnReceiveResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.head = decoder.decodeStructPointer(URLResponseHead);
    return val;
  };

  URLLoaderClient_OnReceiveResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnReceiveResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLResponseHead, val.head);
  };
  function URLLoaderClient_OnReceiveRedirect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnReceiveRedirect_Params.prototype.initDefaults_ = function() {
    this.redirectInfo = null;
    this.head = null;
  };
  URLLoaderClient_OnReceiveRedirect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnReceiveRedirect_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnReceiveRedirect_Params.redirectInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLRequestRedirectInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderClient_OnReceiveRedirect_Params.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnReceiveRedirect_Params.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClient_OnReceiveRedirect_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnReceiveRedirect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.redirectInfo = decoder.decodeStructPointer(URLRequestRedirectInfo);
    val.head = decoder.decodeStructPointer(URLResponseHead);
    return val;
  };

  URLLoaderClient_OnReceiveRedirect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnReceiveRedirect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLRequestRedirectInfo, val.redirectInfo);
    encoder.encodeStructPointer(URLResponseHead, val.head);
  };
  function URLLoaderClient_OnUploadProgress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnUploadProgress_Params.prototype.initDefaults_ = function() {
    this.currentPosition = 0;
    this.totalSize = 0;
  };
  URLLoaderClient_OnUploadProgress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnUploadProgress_Params.validate = function(messageValidator, offset) {
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

  URLLoaderClient_OnUploadProgress_Params.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClient_OnUploadProgress_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnUploadProgress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.currentPosition = decoder.decodeStruct(codec.Int64);
    val.totalSize = decoder.decodeStruct(codec.Int64);
    return val;
  };

  URLLoaderClient_OnUploadProgress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnUploadProgress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.currentPosition);
    encoder.encodeStruct(codec.Int64, val.totalSize);
  };
  function URLLoaderClient_OnUploadProgress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.initDefaults_ = function() {
  };
  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnUploadProgress_ResponseParams.validate = function(messageValidator, offset) {
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

  URLLoaderClient_OnUploadProgress_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  URLLoaderClient_OnUploadProgress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnUploadProgress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoaderClient_OnUploadProgress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnUploadProgress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderClient_OnReceiveCachedMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.initDefaults_ = function() {
    this.data = null;
  };
  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnReceiveCachedMetadata_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClient_OnReceiveCachedMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnReceiveCachedMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnReceiveCachedMetadata_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function URLLoaderClient_OnTransferSizeUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.initDefaults_ = function() {
    this.transferSizeDiff = 0;
  };
  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnTransferSizeUpdated_Params.validate = function(messageValidator, offset) {
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

  URLLoaderClient_OnTransferSizeUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnTransferSizeUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnTransferSizeUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.transferSizeDiff = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderClient_OnTransferSizeUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnTransferSizeUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.transferSizeDiff);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function URLLoaderClient_OnStartLoadingResponseBody_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.initDefaults_ = function() {
    this.body = null;
  };
  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnStartLoadingResponseBody_Params.body
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnStartLoadingResponseBody_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnStartLoadingResponseBody_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.body = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnStartLoadingResponseBody_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.body);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function URLLoaderClient_OnComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnComplete_Params.prototype.initDefaults_ = function() {
    this.status = null;
  };
  URLLoaderClient_OnComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderClient_OnComplete_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnComplete_Params.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLLoaderCompletionStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnComplete_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnComplete_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStructPointer(URLLoaderCompletionStatus);
    return val;
  };

  URLLoaderClient_OnComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnComplete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLLoaderCompletionStatus, val.status);
  };
  var kURLLoader_FollowRedirect_Name = 0;
  var kURLLoader_ProceedWithResponse_Name = 1;
  var kURLLoader_SetPriority_Name = 2;
  var kURLLoader_PauseReadingBodyFromNet_Name = 3;
  var kURLLoader_ResumeReadingBodyFromNet_Name = 4;

  function URLLoaderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(URLLoader,
                                                   handleOrPtrInfo);
  }

  function URLLoaderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        URLLoader, associatedInterfacePtrInfo);
  }

  URLLoaderAssociatedPtr.prototype =
      Object.create(URLLoaderPtr.prototype);
  URLLoaderAssociatedPtr.prototype.constructor =
      URLLoaderAssociatedPtr;

  function URLLoaderProxy(receiver) {
    this.receiver_ = receiver;
  }
  URLLoaderPtr.prototype.followRedirect = function() {
    return URLLoaderProxy.prototype.followRedirect
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.followRedirect = function(removedHeaders, modifiedHeaders, newUrl) {
    var params_ = new URLLoader_FollowRedirect_Params();
    params_.removedHeaders = removedHeaders;
    params_.modifiedHeaders = modifiedHeaders;
    params_.newUrl = newUrl;
    var builder = new codec.MessageV0Builder(
        kURLLoader_FollowRedirect_Name,
        codec.align(URLLoader_FollowRedirect_Params.encodedSize));
    builder.encodeStruct(URLLoader_FollowRedirect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.proceedWithResponse = function() {
    return URLLoaderProxy.prototype.proceedWithResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.proceedWithResponse = function() {
    var params_ = new URLLoader_ProceedWithResponse_Params();
    var builder = new codec.MessageV0Builder(
        kURLLoader_ProceedWithResponse_Name,
        codec.align(URLLoader_ProceedWithResponse_Params.encodedSize));
    builder.encodeStruct(URLLoader_ProceedWithResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.setPriority = function() {
    return URLLoaderProxy.prototype.setPriority
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.setPriority = function(priority, intraPriorityValue) {
    var params_ = new URLLoader_SetPriority_Params();
    params_.priority = priority;
    params_.intraPriorityValue = intraPriorityValue;
    var builder = new codec.MessageV0Builder(
        kURLLoader_SetPriority_Name,
        codec.align(URLLoader_SetPriority_Params.encodedSize));
    builder.encodeStruct(URLLoader_SetPriority_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.pauseReadingBodyFromNet = function() {
    return URLLoaderProxy.prototype.pauseReadingBodyFromNet
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.pauseReadingBodyFromNet = function() {
    var params_ = new URLLoader_PauseReadingBodyFromNet_Params();
    var builder = new codec.MessageV0Builder(
        kURLLoader_PauseReadingBodyFromNet_Name,
        codec.align(URLLoader_PauseReadingBodyFromNet_Params.encodedSize));
    builder.encodeStruct(URLLoader_PauseReadingBodyFromNet_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.resumeReadingBodyFromNet = function() {
    return URLLoaderProxy.prototype.resumeReadingBodyFromNet
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.resumeReadingBodyFromNet = function() {
    var params_ = new URLLoader_ResumeReadingBodyFromNet_Params();
    var builder = new codec.MessageV0Builder(
        kURLLoader_ResumeReadingBodyFromNet_Name,
        codec.align(URLLoader_ResumeReadingBodyFromNet_Params.encodedSize));
    builder.encodeStruct(URLLoader_ResumeReadingBodyFromNet_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function URLLoaderStub(delegate) {
    this.delegate_ = delegate;
  }
  URLLoaderStub.prototype.followRedirect = function(removedHeaders, modifiedHeaders, newUrl) {
    return this.delegate_ && this.delegate_.followRedirect && this.delegate_.followRedirect(removedHeaders, modifiedHeaders, newUrl);
  }
  URLLoaderStub.prototype.proceedWithResponse = function() {
    return this.delegate_ && this.delegate_.proceedWithResponse && this.delegate_.proceedWithResponse();
  }
  URLLoaderStub.prototype.setPriority = function(priority, intraPriorityValue) {
    return this.delegate_ && this.delegate_.setPriority && this.delegate_.setPriority(priority, intraPriorityValue);
  }
  URLLoaderStub.prototype.pauseReadingBodyFromNet = function() {
    return this.delegate_ && this.delegate_.pauseReadingBodyFromNet && this.delegate_.pauseReadingBodyFromNet();
  }
  URLLoaderStub.prototype.resumeReadingBodyFromNet = function() {
    return this.delegate_ && this.delegate_.resumeReadingBodyFromNet && this.delegate_.resumeReadingBodyFromNet();
  }

  URLLoaderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoader_FollowRedirect_Name:
      var params = reader.decodeStruct(URLLoader_FollowRedirect_Params);
      this.followRedirect(params.removedHeaders, params.modifiedHeaders, params.newUrl);
      return true;
    case kURLLoader_ProceedWithResponse_Name:
      var params = reader.decodeStruct(URLLoader_ProceedWithResponse_Params);
      this.proceedWithResponse();
      return true;
    case kURLLoader_SetPriority_Name:
      var params = reader.decodeStruct(URLLoader_SetPriority_Params);
      this.setPriority(params.priority, params.intraPriorityValue);
      return true;
    case kURLLoader_PauseReadingBodyFromNet_Name:
      var params = reader.decodeStruct(URLLoader_PauseReadingBodyFromNet_Params);
      this.pauseReadingBodyFromNet();
      return true;
    case kURLLoader_ResumeReadingBodyFromNet_Name:
      var params = reader.decodeStruct(URLLoader_ResumeReadingBodyFromNet_Params);
      this.resumeReadingBodyFromNet();
      return true;
    default:
      return false;
    }
  };

  URLLoaderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateURLLoaderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoader_FollowRedirect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_FollowRedirect_Params;
      break;
      case kURLLoader_ProceedWithResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_ProceedWithResponse_Params;
      break;
      case kURLLoader_SetPriority_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_SetPriority_Params;
      break;
      case kURLLoader_PauseReadingBodyFromNet_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_PauseReadingBodyFromNet_Params;
      break;
      case kURLLoader_ResumeReadingBodyFromNet_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_ResumeReadingBodyFromNet_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var URLLoader = {
    name: 'network.mojom.URLLoader',
    kVersion: 0,
    ptrClass: URLLoaderPtr,
    proxyClass: URLLoaderProxy,
    stubClass: URLLoaderStub,
    validateRequest: validateURLLoaderRequest,
    validateResponse: null,
  };
  URLLoader.kClientDisconnectReason = 1,
  URLLoaderStub.prototype.validator = validateURLLoaderRequest;
  URLLoaderProxy.prototype.validator = null;
  var kURLLoaderClient_OnReceiveResponse_Name = 0;
  var kURLLoaderClient_OnReceiveRedirect_Name = 1;
  var kURLLoaderClient_OnUploadProgress_Name = 2;
  var kURLLoaderClient_OnReceiveCachedMetadata_Name = 3;
  var kURLLoaderClient_OnTransferSizeUpdated_Name = 4;
  var kURLLoaderClient_OnStartLoadingResponseBody_Name = 5;
  var kURLLoaderClient_OnComplete_Name = 6;

  function URLLoaderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(URLLoaderClient,
                                                   handleOrPtrInfo);
  }

  function URLLoaderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        URLLoaderClient, associatedInterfacePtrInfo);
  }

  URLLoaderClientAssociatedPtr.prototype =
      Object.create(URLLoaderClientPtr.prototype);
  URLLoaderClientAssociatedPtr.prototype.constructor =
      URLLoaderClientAssociatedPtr;

  function URLLoaderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  URLLoaderClientPtr.prototype.onReceiveResponse = function() {
    return URLLoaderClientProxy.prototype.onReceiveResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onReceiveResponse = function(head) {
    var params_ = new URLLoaderClient_OnReceiveResponse_Params();
    params_.head = head;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnReceiveResponse_Name,
        codec.align(URLLoaderClient_OnReceiveResponse_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnReceiveResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onReceiveRedirect = function() {
    return URLLoaderClientProxy.prototype.onReceiveRedirect
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onReceiveRedirect = function(redirectInfo, head) {
    var params_ = new URLLoaderClient_OnReceiveRedirect_Params();
    params_.redirectInfo = redirectInfo;
    params_.head = head;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnReceiveRedirect_Name,
        codec.align(URLLoaderClient_OnReceiveRedirect_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnReceiveRedirect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onUploadProgress = function() {
    return URLLoaderClientProxy.prototype.onUploadProgress
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onUploadProgress = function(currentPosition, totalSize) {
    var params_ = new URLLoaderClient_OnUploadProgress_Params();
    params_.currentPosition = currentPosition;
    params_.totalSize = totalSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kURLLoaderClient_OnUploadProgress_Name,
          codec.align(URLLoaderClient_OnUploadProgress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoaderClient_OnUploadProgress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoaderClient_OnUploadProgress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLLoaderClientPtr.prototype.onReceiveCachedMetadata = function() {
    return URLLoaderClientProxy.prototype.onReceiveCachedMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onReceiveCachedMetadata = function(data) {
    var params_ = new URLLoaderClient_OnReceiveCachedMetadata_Params();
    params_.data = data;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnReceiveCachedMetadata_Name,
        codec.align(URLLoaderClient_OnReceiveCachedMetadata_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnReceiveCachedMetadata_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onTransferSizeUpdated = function() {
    return URLLoaderClientProxy.prototype.onTransferSizeUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onTransferSizeUpdated = function(transferSizeDiff) {
    var params_ = new URLLoaderClient_OnTransferSizeUpdated_Params();
    params_.transferSizeDiff = transferSizeDiff;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnTransferSizeUpdated_Name,
        codec.align(URLLoaderClient_OnTransferSizeUpdated_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnTransferSizeUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onStartLoadingResponseBody = function() {
    return URLLoaderClientProxy.prototype.onStartLoadingResponseBody
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onStartLoadingResponseBody = function(body) {
    var params_ = new URLLoaderClient_OnStartLoadingResponseBody_Params();
    params_.body = body;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnStartLoadingResponseBody_Name,
        codec.align(URLLoaderClient_OnStartLoadingResponseBody_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnStartLoadingResponseBody_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onComplete = function() {
    return URLLoaderClientProxy.prototype.onComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onComplete = function(status) {
    var params_ = new URLLoaderClient_OnComplete_Params();
    params_.status = status;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnComplete_Name,
        codec.align(URLLoaderClient_OnComplete_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function URLLoaderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  URLLoaderClientStub.prototype.onReceiveResponse = function(head) {
    return this.delegate_ && this.delegate_.onReceiveResponse && this.delegate_.onReceiveResponse(head);
  }
  URLLoaderClientStub.prototype.onReceiveRedirect = function(redirectInfo, head) {
    return this.delegate_ && this.delegate_.onReceiveRedirect && this.delegate_.onReceiveRedirect(redirectInfo, head);
  }
  URLLoaderClientStub.prototype.onUploadProgress = function(currentPosition, totalSize) {
    return this.delegate_ && this.delegate_.onUploadProgress && this.delegate_.onUploadProgress(currentPosition, totalSize);
  }
  URLLoaderClientStub.prototype.onReceiveCachedMetadata = function(data) {
    return this.delegate_ && this.delegate_.onReceiveCachedMetadata && this.delegate_.onReceiveCachedMetadata(data);
  }
  URLLoaderClientStub.prototype.onTransferSizeUpdated = function(transferSizeDiff) {
    return this.delegate_ && this.delegate_.onTransferSizeUpdated && this.delegate_.onTransferSizeUpdated(transferSizeDiff);
  }
  URLLoaderClientStub.prototype.onStartLoadingResponseBody = function(body) {
    return this.delegate_ && this.delegate_.onStartLoadingResponseBody && this.delegate_.onStartLoadingResponseBody(body);
  }
  URLLoaderClientStub.prototype.onComplete = function(status) {
    return this.delegate_ && this.delegate_.onComplete && this.delegate_.onComplete(status);
  }

  URLLoaderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderClient_OnReceiveResponse_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnReceiveResponse_Params);
      this.onReceiveResponse(params.head);
      return true;
    case kURLLoaderClient_OnReceiveRedirect_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnReceiveRedirect_Params);
      this.onReceiveRedirect(params.redirectInfo, params.head);
      return true;
    case kURLLoaderClient_OnReceiveCachedMetadata_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnReceiveCachedMetadata_Params);
      this.onReceiveCachedMetadata(params.data);
      return true;
    case kURLLoaderClient_OnTransferSizeUpdated_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnTransferSizeUpdated_Params);
      this.onTransferSizeUpdated(params.transferSizeDiff);
      return true;
    case kURLLoaderClient_OnStartLoadingResponseBody_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnStartLoadingResponseBody_Params);
      this.onStartLoadingResponseBody(params.body);
      return true;
    case kURLLoaderClient_OnComplete_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnComplete_Params);
      this.onComplete(params.status);
      return true;
    default:
      return false;
    }
  };

  URLLoaderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderClient_OnUploadProgress_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnUploadProgress_Params);
      this.onUploadProgress(params.currentPosition, params.totalSize).then(function(response) {
        var responseParams =
            new URLLoaderClient_OnUploadProgress_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kURLLoaderClient_OnUploadProgress_Name,
            codec.align(URLLoaderClient_OnUploadProgress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoaderClient_OnUploadProgress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateURLLoaderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoaderClient_OnReceiveResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnReceiveResponse_Params;
      break;
      case kURLLoaderClient_OnReceiveRedirect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnReceiveRedirect_Params;
      break;
      case kURLLoaderClient_OnUploadProgress_Name:
        if (message.expectsResponse())
          paramsClass = URLLoaderClient_OnUploadProgress_Params;
      break;
      case kURLLoaderClient_OnReceiveCachedMetadata_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnReceiveCachedMetadata_Params;
      break;
      case kURLLoaderClient_OnTransferSizeUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnTransferSizeUpdated_Params;
      break;
      case kURLLoaderClient_OnStartLoadingResponseBody_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnStartLoadingResponseBody_Params;
      break;
      case kURLLoaderClient_OnComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnComplete_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kURLLoaderClient_OnUploadProgress_Name:
        if (message.isResponse())
          paramsClass = URLLoaderClient_OnUploadProgress_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var URLLoaderClient = {
    name: 'network.mojom.URLLoaderClient',
    kVersion: 0,
    ptrClass: URLLoaderClientPtr,
    proxyClass: URLLoaderClientProxy,
    stubClass: URLLoaderClientStub,
    validateRequest: validateURLLoaderClientRequest,
    validateResponse: validateURLLoaderClientResponse,
  };
  URLLoaderClientStub.prototype.validator = validateURLLoaderClientRequest;
  URLLoaderClientProxy.prototype.validator = validateURLLoaderClientResponse;
  exports.RequestPriority = RequestPriority;
  exports.URLRequestReferrerPolicy = URLRequestReferrerPolicy;
  exports.DataElementType = DataElementType;
  exports.URLResponseHead = URLResponseHead;
  exports.URLRequestRedirectInfo = URLRequestRedirectInfo;
  exports.CorsErrorStatus = CorsErrorStatus;
  exports.URLLoaderCompletionStatus = URLLoaderCompletionStatus;
  exports.URLRequest = URLRequest;
  exports.URLRequestBody = URLRequestBody;
  exports.DataElement = DataElement;
  exports.URLLoaderClientEndpoints = URLLoaderClientEndpoints;
  exports.URLLoader = URLLoader;
  exports.URLLoaderPtr = URLLoaderPtr;
  exports.URLLoaderAssociatedPtr = URLLoaderAssociatedPtr;
  exports.URLLoaderClient = URLLoaderClient;
  exports.URLLoaderClientPtr = URLLoaderClientPtr;
  exports.URLLoaderClientAssociatedPtr = URLLoaderClientAssociatedPtr;
})();