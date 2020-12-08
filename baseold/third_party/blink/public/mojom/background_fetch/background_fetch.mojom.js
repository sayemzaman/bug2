// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/background_fetch/background_fetch.mojom';
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
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/interfaces/bitmap.mojom', '../../../../../skia/public/interfaces/bitmap.mojom.js');
  }
  var cache_storage$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/cache_storage/cache_storage.mojom', '../cache_storage/cache_storage.mojom.js');
  }
  var fetch_api_request$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/fetch/fetch_api_request.mojom', '../fetch/fetch_api_request.mojom.js');
  }
  var fetch_api_response$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/fetch/fetch_api_response.mojom', '../fetch/fetch_api_response.mojom.js');
  }
  var manifest$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/manifest/manifest.mojom', '../manifest/manifest.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }


  var BackgroundFetchError = {};
  BackgroundFetchError.NONE = 0;
  BackgroundFetchError.DUPLICATED_DEVELOPER_ID = BackgroundFetchError.NONE + 1;
  BackgroundFetchError.INVALID_ARGUMENT = BackgroundFetchError.DUPLICATED_DEVELOPER_ID + 1;
  BackgroundFetchError.INVALID_ID = BackgroundFetchError.INVALID_ARGUMENT + 1;
  BackgroundFetchError.STORAGE_ERROR = BackgroundFetchError.INVALID_ID + 1;
  BackgroundFetchError.SERVICE_WORKER_UNAVAILABLE = BackgroundFetchError.STORAGE_ERROR + 1;
  BackgroundFetchError.QUOTA_EXCEEDED = BackgroundFetchError.SERVICE_WORKER_UNAVAILABLE + 1;
  BackgroundFetchError.PERMISSION_DENIED = BackgroundFetchError.QUOTA_EXCEEDED + 1;
  BackgroundFetchError.REGISTRATION_LIMIT_EXCEEDED = BackgroundFetchError.PERMISSION_DENIED + 1;
  BackgroundFetchError.MIN_VALUE = 0,
  BackgroundFetchError.MAX_VALUE = 8,

  BackgroundFetchError.isKnownEnumValue = function(value) {
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

  BackgroundFetchError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BackgroundFetchResult = {};
  BackgroundFetchResult.UNSET = 0;
  BackgroundFetchResult.FAILURE = BackgroundFetchResult.UNSET + 1;
  BackgroundFetchResult.SUCCESS = BackgroundFetchResult.FAILURE + 1;
  BackgroundFetchResult.MIN_VALUE = 0,
  BackgroundFetchResult.MAX_VALUE = 2,

  BackgroundFetchResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BackgroundFetchResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BackgroundFetchFailureReason = {};
  BackgroundFetchFailureReason.NONE = 0;
  BackgroundFetchFailureReason.CANCELLED_FROM_UI = 1;
  BackgroundFetchFailureReason.CANCELLED_BY_DEVELOPER = 2;
  BackgroundFetchFailureReason.BAD_STATUS = 3;
  BackgroundFetchFailureReason.FETCH_ERROR = 4;
  BackgroundFetchFailureReason.SERVICE_WORKER_UNAVAILABLE = 5;
  BackgroundFetchFailureReason.QUOTA_EXCEEDED = 6;
  BackgroundFetchFailureReason.DOWNLOAD_TOTAL_EXCEEDED = 7;
  BackgroundFetchFailureReason.MIN_VALUE = 0,
  BackgroundFetchFailureReason.MAX_VALUE = 7,

  BackgroundFetchFailureReason.isKnownEnumValue = function(value) {
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

  BackgroundFetchFailureReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function BackgroundFetchSettledFetch(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchSettledFetch.prototype.initDefaults_ = function() {
    this.request = null;
    this.response = null;
  };
  BackgroundFetchSettledFetch.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchSettledFetch.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchSettledFetch.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchSettledFetch.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, fetch_api_response$.FetchAPIResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchSettledFetch.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchSettledFetch.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchSettledFetch();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.response = decoder.decodeStructPointer(fetch_api_response$.FetchAPIResponse);
    return val;
  };

  BackgroundFetchSettledFetch.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchSettledFetch.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(fetch_api_response$.FetchAPIResponse, val.response);
  };
  function BackgroundFetchOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchOptions.prototype.initDefaults_ = function() {
    this.icons = null;
    this.downloadTotal = 0;
    this.title = null;
  };
  BackgroundFetchOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchOptions.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchOptions.icons
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(manifest$.ManifestImageResource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate BackgroundFetchOptions.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchOptions.encodedSize = codec.kStructHeaderSize + 24;

  BackgroundFetchOptions.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.icons = decoder.decodeArrayPointer(new codec.PointerTo(manifest$.ManifestImageResource));
    val.downloadTotal = decoder.decodeStruct(codec.Uint64);
    val.title = decoder.decodeStruct(codec.String);
    return val;
  };

  BackgroundFetchOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(manifest$.ManifestImageResource), val.icons);
    encoder.encodeStruct(codec.Uint64, val.downloadTotal);
    encoder.encodeStruct(codec.String, val.title);
  };
  function BackgroundFetchRegistrationData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationData.prototype.initDefaults_ = function() {
    this.developerId = null;
    this.uploadTotal = 0;
    this.uploaded = 0;
    this.downloadTotal = 0;
    this.downloaded = 0;
    this.result = BackgroundFetchResult.UNSET;
    this.failureReason = BackgroundFetchFailureReason.NONE;
  };
  BackgroundFetchRegistrationData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistrationData.developerId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;






    // validate BackgroundFetchRegistrationData.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 40, BackgroundFetchResult);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistrationData.failureReason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, BackgroundFetchFailureReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationData.encodedSize = codec.kStructHeaderSize + 48;

  BackgroundFetchRegistrationData.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.developerId = decoder.decodeStruct(codec.String);
    val.uploadTotal = decoder.decodeStruct(codec.Uint64);
    val.uploaded = decoder.decodeStruct(codec.Uint64);
    val.downloadTotal = decoder.decodeStruct(codec.Uint64);
    val.downloaded = decoder.decodeStruct(codec.Uint64);
    val.result = decoder.decodeStruct(codec.Int32);
    val.failureReason = decoder.decodeStruct(codec.Int32);
    return val;
  };

  BackgroundFetchRegistrationData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.developerId);
    encoder.encodeStruct(codec.Uint64, val.uploadTotal);
    encoder.encodeStruct(codec.Uint64, val.uploaded);
    encoder.encodeStruct(codec.Uint64, val.downloadTotal);
    encoder.encodeStruct(codec.Uint64, val.downloaded);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.encodeStruct(codec.Int32, val.failureReason);
  };
  function BackgroundFetchRegistration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistration.prototype.initDefaults_ = function() {
    this.registrationData = null;
    this.registrationInterface = new BackgroundFetchRegistrationServicePtr();
  };
  BackgroundFetchRegistration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistration.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistration.registrationData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BackgroundFetchRegistrationData, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistration.registrationInterface
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistration.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchRegistration.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.registrationData = decoder.decodeStructPointer(BackgroundFetchRegistrationData);
    val.registrationInterface = decoder.decodeStruct(new codec.Interface(BackgroundFetchRegistrationServicePtr));
    return val;
  };

  BackgroundFetchRegistration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BackgroundFetchRegistrationData, val.registrationData);
    encoder.encodeStruct(new codec.Interface(BackgroundFetchRegistrationServicePtr), val.registrationInterface);
  };
  function BackgroundFetchUkmData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchUkmData.prototype.initDefaults_ = function() {
    this.idealToChosenIconSize = -1;
  };
  BackgroundFetchUkmData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchUkmData.validate = function(messageValidator, offset) {
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

  BackgroundFetchUkmData.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchUkmData.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchUkmData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.idealToChosenIconSize = decoder.decodeStruct(codec.Int64);
    return val;
  };

  BackgroundFetchUkmData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchUkmData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.idealToChosenIconSize);
  };
  function BackgroundFetchRegistrationObserver_OnProgress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationObserver_OnProgress_Params.prototype.initDefaults_ = function() {
    this.uploadTotal = 0;
    this.uploaded = 0;
    this.downloadTotal = 0;
    this.downloaded = 0;
    this.result = 0;
    this.failureReason = 0;
  };
  BackgroundFetchRegistrationObserver_OnProgress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationObserver_OnProgress_Params.validate = function(messageValidator, offset) {
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






    // validate BackgroundFetchRegistrationObserver_OnProgress_Params.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, BackgroundFetchResult);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistrationObserver_OnProgress_Params.failureReason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, BackgroundFetchFailureReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationObserver_OnProgress_Params.encodedSize = codec.kStructHeaderSize + 40;

  BackgroundFetchRegistrationObserver_OnProgress_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationObserver_OnProgress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.uploadTotal = decoder.decodeStruct(codec.Uint64);
    val.uploaded = decoder.decodeStruct(codec.Uint64);
    val.downloadTotal = decoder.decodeStruct(codec.Uint64);
    val.downloaded = decoder.decodeStruct(codec.Uint64);
    val.result = decoder.decodeStruct(codec.Int32);
    val.failureReason = decoder.decodeStruct(codec.Int32);
    return val;
  };

  BackgroundFetchRegistrationObserver_OnProgress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationObserver_OnProgress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.uploadTotal);
    encoder.encodeStruct(codec.Uint64, val.uploaded);
    encoder.encodeStruct(codec.Uint64, val.downloadTotal);
    encoder.encodeStruct(codec.Uint64, val.downloaded);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.encodeStruct(codec.Int32, val.failureReason);
  };
  function BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.prototype.initDefaults_ = function() {
  };
  BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.validate = function(messageValidator, offset) {
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

  BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.encodedSize = codec.kStructHeaderSize + 0;

  BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BackgroundFetchRegistrationObserver_OnRequestCompleted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.prototype.initDefaults_ = function() {
    this.request = null;
    this.response = null;
  };
  BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, fetch_api_response$.FetchAPIResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationObserver_OnRequestCompleted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.response = decoder.decodeStructPointer(fetch_api_response$.FetchAPIResponse);
    return val;
  };

  BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStructPointer(fetch_api_response$.FetchAPIResponse, val.response);
  };
  function BackgroundFetchService_Fetch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_Fetch_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
    this.developerId = null;
    this.requests = null;
    this.options = null;
    this.icon = null;
    this.ukmData = null;
  };
  BackgroundFetchService_Fetch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_Fetch_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate BackgroundFetchService_Fetch_Params.developerId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_Fetch_Params.requests
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(fetch_api_request$.FetchAPIRequest), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_Fetch_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, BackgroundFetchOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_Fetch_Params.icon
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, bitmap$.Bitmap, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_Fetch_Params.ukmData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, BackgroundFetchUkmData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchService_Fetch_Params.encodedSize = codec.kStructHeaderSize + 48;

  BackgroundFetchService_Fetch_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_Fetch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    val.developerId = decoder.decodeStruct(codec.String);
    val.requests = decoder.decodeArrayPointer(new codec.PointerTo(fetch_api_request$.FetchAPIRequest));
    val.options = decoder.decodeStructPointer(BackgroundFetchOptions);
    val.icon = decoder.decodeStructPointer(bitmap$.Bitmap);
    val.ukmData = decoder.decodeStructPointer(BackgroundFetchUkmData);
    return val;
  };

  BackgroundFetchService_Fetch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_Fetch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
    encoder.encodeStruct(codec.String, val.developerId);
    encoder.encodeArrayPointer(new codec.PointerTo(fetch_api_request$.FetchAPIRequest), val.requests);
    encoder.encodeStructPointer(BackgroundFetchOptions, val.options);
    encoder.encodeStructPointer(bitmap$.Bitmap, val.icon);
    encoder.encodeStructPointer(BackgroundFetchUkmData, val.ukmData);
  };
  function BackgroundFetchService_Fetch_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_Fetch_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.registration = null;
  };
  BackgroundFetchService_Fetch_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_Fetch_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchService_Fetch_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundFetchError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_Fetch_ResponseParams.registration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, BackgroundFetchRegistration, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchService_Fetch_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchService_Fetch_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_Fetch_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.registration = decoder.decodeStructPointer(BackgroundFetchRegistration);
    return val;
  };

  BackgroundFetchService_Fetch_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_Fetch_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(BackgroundFetchRegistration, val.registration);
  };
  function BackgroundFetchService_GetRegistration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_GetRegistration_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
    this.developerId = null;
  };
  BackgroundFetchService_GetRegistration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_GetRegistration_Params.validate = function(messageValidator, offset) {
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



    // validate BackgroundFetchService_GetRegistration_Params.developerId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchService_GetRegistration_Params.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchService_GetRegistration_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_GetRegistration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    val.developerId = decoder.decodeStruct(codec.String);
    return val;
  };

  BackgroundFetchService_GetRegistration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_GetRegistration_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
    encoder.encodeStruct(codec.String, val.developerId);
  };
  function BackgroundFetchService_GetRegistration_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_GetRegistration_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.registration = null;
  };
  BackgroundFetchService_GetRegistration_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_GetRegistration_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchService_GetRegistration_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundFetchError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_GetRegistration_ResponseParams.registration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, BackgroundFetchRegistration, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchService_GetRegistration_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchService_GetRegistration_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_GetRegistration_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.registration = decoder.decodeStructPointer(BackgroundFetchRegistration);
    return val;
  };

  BackgroundFetchService_GetRegistration_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_GetRegistration_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(BackgroundFetchRegistration, val.registration);
  };
  function BackgroundFetchService_GetDeveloperIds_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_GetDeveloperIds_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
  };
  BackgroundFetchService_GetDeveloperIds_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_GetDeveloperIds_Params.validate = function(messageValidator, offset) {
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

  BackgroundFetchService_GetDeveloperIds_Params.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchService_GetDeveloperIds_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_GetDeveloperIds_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  BackgroundFetchService_GetDeveloperIds_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_GetDeveloperIds_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
  };
  function BackgroundFetchService_GetDeveloperIds_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_GetDeveloperIds_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.developerIds = null;
  };
  BackgroundFetchService_GetDeveloperIds_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_GetDeveloperIds_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchService_GetDeveloperIds_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundFetchError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchService_GetDeveloperIds_ResponseParams.developerIds
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchService_GetDeveloperIds_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchService_GetDeveloperIds_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_GetDeveloperIds_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.developerIds = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  BackgroundFetchService_GetDeveloperIds_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_GetDeveloperIds_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.developerIds);
  };
  function BackgroundFetchService_GetIconDisplaySize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_GetIconDisplaySize_Params.prototype.initDefaults_ = function() {
  };
  BackgroundFetchService_GetIconDisplaySize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_GetIconDisplaySize_Params.validate = function(messageValidator, offset) {
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

  BackgroundFetchService_GetIconDisplaySize_Params.encodedSize = codec.kStructHeaderSize + 0;

  BackgroundFetchService_GetIconDisplaySize_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_GetIconDisplaySize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BackgroundFetchService_GetIconDisplaySize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_GetIconDisplaySize_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BackgroundFetchService_GetIconDisplaySize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchService_GetIconDisplaySize_ResponseParams.prototype.initDefaults_ = function() {
    this.iconSizePixels = null;
  };
  BackgroundFetchService_GetIconDisplaySize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchService_GetIconDisplaySize_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchService_GetIconDisplaySize_ResponseParams.iconSizePixels
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchService_GetIconDisplaySize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchService_GetIconDisplaySize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchService_GetIconDisplaySize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.iconSizePixels = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  BackgroundFetchService_GetIconDisplaySize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchService_GetIconDisplaySize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.iconSizePixels);
  };
  function BackgroundFetchRegistrationService_UpdateUI_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_UpdateUI_Params.prototype.initDefaults_ = function() {
    this.title = null;
    this.icon = null;
  };
  BackgroundFetchRegistrationService_UpdateUI_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_UpdateUI_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationService_UpdateUI_Params.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistrationService_UpdateUI_Params.icon
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, bitmap$.Bitmap, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationService_UpdateUI_Params.encodedSize = codec.kStructHeaderSize + 16;

  BackgroundFetchRegistrationService_UpdateUI_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_UpdateUI_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStruct(codec.NullableString);
    val.icon = decoder.decodeStructPointer(bitmap$.Bitmap);
    return val;
  };

  BackgroundFetchRegistrationService_UpdateUI_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_UpdateUI_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.title);
    encoder.encodeStructPointer(bitmap$.Bitmap, val.icon);
  };
  function BackgroundFetchRegistrationService_UpdateUI_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_UpdateUI_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  BackgroundFetchRegistrationService_UpdateUI_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_UpdateUI_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationService_UpdateUI_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundFetchError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationService_UpdateUI_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchRegistrationService_UpdateUI_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_UpdateUI_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BackgroundFetchRegistrationService_UpdateUI_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_UpdateUI_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BackgroundFetchRegistrationService_Abort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_Abort_Params.prototype.initDefaults_ = function() {
  };
  BackgroundFetchRegistrationService_Abort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_Abort_Params.validate = function(messageValidator, offset) {
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

  BackgroundFetchRegistrationService_Abort_Params.encodedSize = codec.kStructHeaderSize + 0;

  BackgroundFetchRegistrationService_Abort_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_Abort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BackgroundFetchRegistrationService_Abort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_Abort_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BackgroundFetchRegistrationService_Abort_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_Abort_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  BackgroundFetchRegistrationService_Abort_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_Abort_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationService_Abort_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BackgroundFetchError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationService_Abort_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchRegistrationService_Abort_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_Abort_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BackgroundFetchRegistrationService_Abort_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_Abort_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BackgroundFetchRegistrationService_MatchRequests_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_MatchRequests_Params.prototype.initDefaults_ = function() {
    this.requestToMatch = null;
    this.cacheQueryOptions = null;
    this.matchAll = false;
  };
  BackgroundFetchRegistrationService_MatchRequests_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_MatchRequests_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationService_MatchRequests_Params.requestToMatch
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundFetchRegistrationService_MatchRequests_Params.cacheQueryOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, cache_storage$.CacheQueryOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationService_MatchRequests_Params.encodedSize = codec.kStructHeaderSize + 24;

  BackgroundFetchRegistrationService_MatchRequests_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_MatchRequests_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestToMatch = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.cacheQueryOptions = decoder.decodeStructPointer(cache_storage$.CacheQueryOptions);
    packed = decoder.readUint8();
    val.matchAll = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BackgroundFetchRegistrationService_MatchRequests_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_MatchRequests_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.requestToMatch);
    encoder.encodeStructPointer(cache_storage$.CacheQueryOptions, val.cacheQueryOptions);
    packed = 0;
    packed |= (val.matchAll & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BackgroundFetchRegistrationService_MatchRequests_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_MatchRequests_ResponseParams.prototype.initDefaults_ = function() {
    this.fetches = null;
  };
  BackgroundFetchRegistrationService_MatchRequests_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_MatchRequests_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationService_MatchRequests_ResponseParams.fetches
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(BackgroundFetchSettledFetch), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationService_MatchRequests_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchRegistrationService_MatchRequests_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_MatchRequests_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fetches = decoder.decodeArrayPointer(new codec.PointerTo(BackgroundFetchSettledFetch));
    return val;
  };

  BackgroundFetchRegistrationService_MatchRequests_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_MatchRequests_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(BackgroundFetchSettledFetch), val.fetches);
  };
  function BackgroundFetchRegistrationService_AddRegistrationObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundFetchRegistrationService_AddRegistrationObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new BackgroundFetchRegistrationObserverPtr();
  };
  BackgroundFetchRegistrationService_AddRegistrationObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundFetchRegistrationService_AddRegistrationObserver_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundFetchRegistrationService_AddRegistrationObserver_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundFetchRegistrationService_AddRegistrationObserver_Params.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundFetchRegistrationService_AddRegistrationObserver_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundFetchRegistrationService_AddRegistrationObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(new codec.Interface(BackgroundFetchRegistrationObserverPtr));
    return val;
  };

  BackgroundFetchRegistrationService_AddRegistrationObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundFetchRegistrationService_AddRegistrationObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(BackgroundFetchRegistrationObserverPtr), val.observer);
  };
  var kBackgroundFetchRegistrationObserver_OnProgress_Name = 0;
  var kBackgroundFetchRegistrationObserver_OnRecordsUnavailable_Name = 1;
  var kBackgroundFetchRegistrationObserver_OnRequestCompleted_Name = 2;

  function BackgroundFetchRegistrationObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundFetchRegistrationObserver,
                                                   handleOrPtrInfo);
  }

  function BackgroundFetchRegistrationObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundFetchRegistrationObserver, associatedInterfacePtrInfo);
  }

  BackgroundFetchRegistrationObserverAssociatedPtr.prototype =
      Object.create(BackgroundFetchRegistrationObserverPtr.prototype);
  BackgroundFetchRegistrationObserverAssociatedPtr.prototype.constructor =
      BackgroundFetchRegistrationObserverAssociatedPtr;

  function BackgroundFetchRegistrationObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundFetchRegistrationObserverPtr.prototype.onProgress = function() {
    return BackgroundFetchRegistrationObserverProxy.prototype.onProgress
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationObserverProxy.prototype.onProgress = function(uploadTotal, uploaded, downloadTotal, downloaded, result, failureReason) {
    var params_ = new BackgroundFetchRegistrationObserver_OnProgress_Params();
    params_.uploadTotal = uploadTotal;
    params_.uploaded = uploaded;
    params_.downloadTotal = downloadTotal;
    params_.downloaded = downloaded;
    params_.result = result;
    params_.failureReason = failureReason;
    var builder = new codec.MessageV0Builder(
        kBackgroundFetchRegistrationObserver_OnProgress_Name,
        codec.align(BackgroundFetchRegistrationObserver_OnProgress_Params.encodedSize));
    builder.encodeStruct(BackgroundFetchRegistrationObserver_OnProgress_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BackgroundFetchRegistrationObserverPtr.prototype.onRecordsUnavailable = function() {
    return BackgroundFetchRegistrationObserverProxy.prototype.onRecordsUnavailable
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationObserverProxy.prototype.onRecordsUnavailable = function() {
    var params_ = new BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params();
    var builder = new codec.MessageV0Builder(
        kBackgroundFetchRegistrationObserver_OnRecordsUnavailable_Name,
        codec.align(BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params.encodedSize));
    builder.encodeStruct(BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BackgroundFetchRegistrationObserverPtr.prototype.onRequestCompleted = function() {
    return BackgroundFetchRegistrationObserverProxy.prototype.onRequestCompleted
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationObserverProxy.prototype.onRequestCompleted = function(request, response) {
    var params_ = new BackgroundFetchRegistrationObserver_OnRequestCompleted_Params();
    params_.request = request;
    params_.response = response;
    var builder = new codec.MessageV0Builder(
        kBackgroundFetchRegistrationObserver_OnRequestCompleted_Name,
        codec.align(BackgroundFetchRegistrationObserver_OnRequestCompleted_Params.encodedSize));
    builder.encodeStruct(BackgroundFetchRegistrationObserver_OnRequestCompleted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BackgroundFetchRegistrationObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundFetchRegistrationObserverStub.prototype.onProgress = function(uploadTotal, uploaded, downloadTotal, downloaded, result, failureReason) {
    return this.delegate_ && this.delegate_.onProgress && this.delegate_.onProgress(uploadTotal, uploaded, downloadTotal, downloaded, result, failureReason);
  }
  BackgroundFetchRegistrationObserverStub.prototype.onRecordsUnavailable = function() {
    return this.delegate_ && this.delegate_.onRecordsUnavailable && this.delegate_.onRecordsUnavailable();
  }
  BackgroundFetchRegistrationObserverStub.prototype.onRequestCompleted = function(request, response) {
    return this.delegate_ && this.delegate_.onRequestCompleted && this.delegate_.onRequestCompleted(request, response);
  }

  BackgroundFetchRegistrationObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundFetchRegistrationObserver_OnProgress_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationObserver_OnProgress_Params);
      this.onProgress(params.uploadTotal, params.uploaded, params.downloadTotal, params.downloaded, params.result, params.failureReason);
      return true;
    case kBackgroundFetchRegistrationObserver_OnRecordsUnavailable_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params);
      this.onRecordsUnavailable();
      return true;
    case kBackgroundFetchRegistrationObserver_OnRequestCompleted_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationObserver_OnRequestCompleted_Params);
      this.onRequestCompleted(params.request, params.response);
      return true;
    default:
      return false;
    }
  };

  BackgroundFetchRegistrationObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBackgroundFetchRegistrationObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundFetchRegistrationObserver_OnProgress_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundFetchRegistrationObserver_OnProgress_Params;
      break;
      case kBackgroundFetchRegistrationObserver_OnRecordsUnavailable_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params;
      break;
      case kBackgroundFetchRegistrationObserver_OnRequestCompleted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundFetchRegistrationObserver_OnRequestCompleted_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundFetchRegistrationObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BackgroundFetchRegistrationObserver = {
    name: 'blink.mojom.BackgroundFetchRegistrationObserver',
    kVersion: 0,
    ptrClass: BackgroundFetchRegistrationObserverPtr,
    proxyClass: BackgroundFetchRegistrationObserverProxy,
    stubClass: BackgroundFetchRegistrationObserverStub,
    validateRequest: validateBackgroundFetchRegistrationObserverRequest,
    validateResponse: null,
  };
  BackgroundFetchRegistrationObserverStub.prototype.validator = validateBackgroundFetchRegistrationObserverRequest;
  BackgroundFetchRegistrationObserverProxy.prototype.validator = null;
  var kBackgroundFetchService_Fetch_Name = 0;
  var kBackgroundFetchService_GetRegistration_Name = 1;
  var kBackgroundFetchService_GetDeveloperIds_Name = 2;
  var kBackgroundFetchService_GetIconDisplaySize_Name = 3;

  function BackgroundFetchServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundFetchService,
                                                   handleOrPtrInfo);
  }

  function BackgroundFetchServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundFetchService, associatedInterfacePtrInfo);
  }

  BackgroundFetchServiceAssociatedPtr.prototype =
      Object.create(BackgroundFetchServicePtr.prototype);
  BackgroundFetchServiceAssociatedPtr.prototype.constructor =
      BackgroundFetchServiceAssociatedPtr;

  function BackgroundFetchServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundFetchServicePtr.prototype.fetch = function() {
    return BackgroundFetchServiceProxy.prototype.fetch
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchServiceProxy.prototype.fetch = function(serviceWorkerRegistrationId, developerId, requests, options, icon, ukmData) {
    var params_ = new BackgroundFetchService_Fetch_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    params_.developerId = developerId;
    params_.requests = requests;
    params_.options = options;
    params_.icon = icon;
    params_.ukmData = ukmData;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchService_Fetch_Name,
          codec.align(BackgroundFetchService_Fetch_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchService_Fetch_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchService_Fetch_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundFetchServicePtr.prototype.getRegistration = function() {
    return BackgroundFetchServiceProxy.prototype.getRegistration
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchServiceProxy.prototype.getRegistration = function(serviceWorkerRegistrationId, developerId) {
    var params_ = new BackgroundFetchService_GetRegistration_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    params_.developerId = developerId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchService_GetRegistration_Name,
          codec.align(BackgroundFetchService_GetRegistration_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchService_GetRegistration_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchService_GetRegistration_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundFetchServicePtr.prototype.getDeveloperIds = function() {
    return BackgroundFetchServiceProxy.prototype.getDeveloperIds
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchServiceProxy.prototype.getDeveloperIds = function(serviceWorkerRegistrationId) {
    var params_ = new BackgroundFetchService_GetDeveloperIds_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchService_GetDeveloperIds_Name,
          codec.align(BackgroundFetchService_GetDeveloperIds_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchService_GetDeveloperIds_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchService_GetDeveloperIds_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundFetchServicePtr.prototype.getIconDisplaySize = function() {
    return BackgroundFetchServiceProxy.prototype.getIconDisplaySize
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchServiceProxy.prototype.getIconDisplaySize = function() {
    var params_ = new BackgroundFetchService_GetIconDisplaySize_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchService_GetIconDisplaySize_Name,
          codec.align(BackgroundFetchService_GetIconDisplaySize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchService_GetIconDisplaySize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchService_GetIconDisplaySize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BackgroundFetchServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundFetchServiceStub.prototype.fetch = function(serviceWorkerRegistrationId, developerId, requests, options, icon, ukmData) {
    return this.delegate_ && this.delegate_.fetch && this.delegate_.fetch(serviceWorkerRegistrationId, developerId, requests, options, icon, ukmData);
  }
  BackgroundFetchServiceStub.prototype.getRegistration = function(serviceWorkerRegistrationId, developerId) {
    return this.delegate_ && this.delegate_.getRegistration && this.delegate_.getRegistration(serviceWorkerRegistrationId, developerId);
  }
  BackgroundFetchServiceStub.prototype.getDeveloperIds = function(serviceWorkerRegistrationId) {
    return this.delegate_ && this.delegate_.getDeveloperIds && this.delegate_.getDeveloperIds(serviceWorkerRegistrationId);
  }
  BackgroundFetchServiceStub.prototype.getIconDisplaySize = function() {
    return this.delegate_ && this.delegate_.getIconDisplaySize && this.delegate_.getIconDisplaySize();
  }

  BackgroundFetchServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  BackgroundFetchServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundFetchService_Fetch_Name:
      var params = reader.decodeStruct(BackgroundFetchService_Fetch_Params);
      this.fetch(params.serviceWorkerRegistrationId, params.developerId, params.requests, params.options, params.icon, params.ukmData).then(function(response) {
        var responseParams =
            new BackgroundFetchService_Fetch_ResponseParams();
        responseParams.error = response.error;
        responseParams.registration = response.registration;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchService_Fetch_Name,
            codec.align(BackgroundFetchService_Fetch_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchService_Fetch_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBackgroundFetchService_GetRegistration_Name:
      var params = reader.decodeStruct(BackgroundFetchService_GetRegistration_Params);
      this.getRegistration(params.serviceWorkerRegistrationId, params.developerId).then(function(response) {
        var responseParams =
            new BackgroundFetchService_GetRegistration_ResponseParams();
        responseParams.error = response.error;
        responseParams.registration = response.registration;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchService_GetRegistration_Name,
            codec.align(BackgroundFetchService_GetRegistration_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchService_GetRegistration_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBackgroundFetchService_GetDeveloperIds_Name:
      var params = reader.decodeStruct(BackgroundFetchService_GetDeveloperIds_Params);
      this.getDeveloperIds(params.serviceWorkerRegistrationId).then(function(response) {
        var responseParams =
            new BackgroundFetchService_GetDeveloperIds_ResponseParams();
        responseParams.error = response.error;
        responseParams.developerIds = response.developerIds;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchService_GetDeveloperIds_Name,
            codec.align(BackgroundFetchService_GetDeveloperIds_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchService_GetDeveloperIds_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBackgroundFetchService_GetIconDisplaySize_Name:
      var params = reader.decodeStruct(BackgroundFetchService_GetIconDisplaySize_Params);
      this.getIconDisplaySize().then(function(response) {
        var responseParams =
            new BackgroundFetchService_GetIconDisplaySize_ResponseParams();
        responseParams.iconSizePixels = response.iconSizePixels;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchService_GetIconDisplaySize_Name,
            codec.align(BackgroundFetchService_GetIconDisplaySize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchService_GetIconDisplaySize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBackgroundFetchServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundFetchService_Fetch_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchService_Fetch_Params;
      break;
      case kBackgroundFetchService_GetRegistration_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchService_GetRegistration_Params;
      break;
      case kBackgroundFetchService_GetDeveloperIds_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchService_GetDeveloperIds_Params;
      break;
      case kBackgroundFetchService_GetIconDisplaySize_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchService_GetIconDisplaySize_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundFetchServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBackgroundFetchService_Fetch_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchService_Fetch_ResponseParams;
        break;
      case kBackgroundFetchService_GetRegistration_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchService_GetRegistration_ResponseParams;
        break;
      case kBackgroundFetchService_GetDeveloperIds_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchService_GetDeveloperIds_ResponseParams;
        break;
      case kBackgroundFetchService_GetIconDisplaySize_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchService_GetIconDisplaySize_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BackgroundFetchService = {
    name: 'blink.mojom.BackgroundFetchService',
    kVersion: 0,
    ptrClass: BackgroundFetchServicePtr,
    proxyClass: BackgroundFetchServiceProxy,
    stubClass: BackgroundFetchServiceStub,
    validateRequest: validateBackgroundFetchServiceRequest,
    validateResponse: validateBackgroundFetchServiceResponse,
  };
  BackgroundFetchServiceStub.prototype.validator = validateBackgroundFetchServiceRequest;
  BackgroundFetchServiceProxy.prototype.validator = validateBackgroundFetchServiceResponse;
  var kBackgroundFetchRegistrationService_UpdateUI_Name = 0;
  var kBackgroundFetchRegistrationService_Abort_Name = 1;
  var kBackgroundFetchRegistrationService_MatchRequests_Name = 2;
  var kBackgroundFetchRegistrationService_AddRegistrationObserver_Name = 3;

  function BackgroundFetchRegistrationServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundFetchRegistrationService,
                                                   handleOrPtrInfo);
  }

  function BackgroundFetchRegistrationServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundFetchRegistrationService, associatedInterfacePtrInfo);
  }

  BackgroundFetchRegistrationServiceAssociatedPtr.prototype =
      Object.create(BackgroundFetchRegistrationServicePtr.prototype);
  BackgroundFetchRegistrationServiceAssociatedPtr.prototype.constructor =
      BackgroundFetchRegistrationServiceAssociatedPtr;

  function BackgroundFetchRegistrationServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundFetchRegistrationServicePtr.prototype.updateUI = function() {
    return BackgroundFetchRegistrationServiceProxy.prototype.updateUI
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationServiceProxy.prototype.updateUI = function(title, icon) {
    var params_ = new BackgroundFetchRegistrationService_UpdateUI_Params();
    params_.title = title;
    params_.icon = icon;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchRegistrationService_UpdateUI_Name,
          codec.align(BackgroundFetchRegistrationService_UpdateUI_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchRegistrationService_UpdateUI_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchRegistrationService_UpdateUI_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundFetchRegistrationServicePtr.prototype.abort = function() {
    return BackgroundFetchRegistrationServiceProxy.prototype.abort
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationServiceProxy.prototype.abort = function() {
    var params_ = new BackgroundFetchRegistrationService_Abort_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchRegistrationService_Abort_Name,
          codec.align(BackgroundFetchRegistrationService_Abort_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchRegistrationService_Abort_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchRegistrationService_Abort_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundFetchRegistrationServicePtr.prototype.matchRequests = function() {
    return BackgroundFetchRegistrationServiceProxy.prototype.matchRequests
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationServiceProxy.prototype.matchRequests = function(requestToMatch, cacheQueryOptions, matchAll) {
    var params_ = new BackgroundFetchRegistrationService_MatchRequests_Params();
    params_.requestToMatch = requestToMatch;
    params_.cacheQueryOptions = cacheQueryOptions;
    params_.matchAll = matchAll;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBackgroundFetchRegistrationService_MatchRequests_Name,
          codec.align(BackgroundFetchRegistrationService_MatchRequests_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BackgroundFetchRegistrationService_MatchRequests_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BackgroundFetchRegistrationService_MatchRequests_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BackgroundFetchRegistrationServicePtr.prototype.addRegistrationObserver = function() {
    return BackgroundFetchRegistrationServiceProxy.prototype.addRegistrationObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundFetchRegistrationServiceProxy.prototype.addRegistrationObserver = function(observer) {
    var params_ = new BackgroundFetchRegistrationService_AddRegistrationObserver_Params();
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kBackgroundFetchRegistrationService_AddRegistrationObserver_Name,
        codec.align(BackgroundFetchRegistrationService_AddRegistrationObserver_Params.encodedSize));
    builder.encodeStruct(BackgroundFetchRegistrationService_AddRegistrationObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BackgroundFetchRegistrationServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundFetchRegistrationServiceStub.prototype.updateUI = function(title, icon) {
    return this.delegate_ && this.delegate_.updateUI && this.delegate_.updateUI(title, icon);
  }
  BackgroundFetchRegistrationServiceStub.prototype.abort = function() {
    return this.delegate_ && this.delegate_.abort && this.delegate_.abort();
  }
  BackgroundFetchRegistrationServiceStub.prototype.matchRequests = function(requestToMatch, cacheQueryOptions, matchAll) {
    return this.delegate_ && this.delegate_.matchRequests && this.delegate_.matchRequests(requestToMatch, cacheQueryOptions, matchAll);
  }
  BackgroundFetchRegistrationServiceStub.prototype.addRegistrationObserver = function(observer) {
    return this.delegate_ && this.delegate_.addRegistrationObserver && this.delegate_.addRegistrationObserver(observer);
  }

  BackgroundFetchRegistrationServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundFetchRegistrationService_AddRegistrationObserver_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationService_AddRegistrationObserver_Params);
      this.addRegistrationObserver(params.observer);
      return true;
    default:
      return false;
    }
  };

  BackgroundFetchRegistrationServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundFetchRegistrationService_UpdateUI_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationService_UpdateUI_Params);
      this.updateUI(params.title, params.icon).then(function(response) {
        var responseParams =
            new BackgroundFetchRegistrationService_UpdateUI_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchRegistrationService_UpdateUI_Name,
            codec.align(BackgroundFetchRegistrationService_UpdateUI_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchRegistrationService_UpdateUI_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBackgroundFetchRegistrationService_Abort_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationService_Abort_Params);
      this.abort().then(function(response) {
        var responseParams =
            new BackgroundFetchRegistrationService_Abort_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchRegistrationService_Abort_Name,
            codec.align(BackgroundFetchRegistrationService_Abort_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchRegistrationService_Abort_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBackgroundFetchRegistrationService_MatchRequests_Name:
      var params = reader.decodeStruct(BackgroundFetchRegistrationService_MatchRequests_Params);
      this.matchRequests(params.requestToMatch, params.cacheQueryOptions, params.matchAll).then(function(response) {
        var responseParams =
            new BackgroundFetchRegistrationService_MatchRequests_ResponseParams();
        responseParams.fetches = response.fetches;
        var builder = new codec.MessageV1Builder(
            kBackgroundFetchRegistrationService_MatchRequests_Name,
            codec.align(BackgroundFetchRegistrationService_MatchRequests_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BackgroundFetchRegistrationService_MatchRequests_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBackgroundFetchRegistrationServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundFetchRegistrationService_UpdateUI_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchRegistrationService_UpdateUI_Params;
      break;
      case kBackgroundFetchRegistrationService_Abort_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchRegistrationService_Abort_Params;
      break;
      case kBackgroundFetchRegistrationService_MatchRequests_Name:
        if (message.expectsResponse())
          paramsClass = BackgroundFetchRegistrationService_MatchRequests_Params;
      break;
      case kBackgroundFetchRegistrationService_AddRegistrationObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundFetchRegistrationService_AddRegistrationObserver_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundFetchRegistrationServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBackgroundFetchRegistrationService_UpdateUI_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchRegistrationService_UpdateUI_ResponseParams;
        break;
      case kBackgroundFetchRegistrationService_Abort_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchRegistrationService_Abort_ResponseParams;
        break;
      case kBackgroundFetchRegistrationService_MatchRequests_Name:
        if (message.isResponse())
          paramsClass = BackgroundFetchRegistrationService_MatchRequests_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BackgroundFetchRegistrationService = {
    name: 'blink.mojom.BackgroundFetchRegistrationService',
    kVersion: 0,
    ptrClass: BackgroundFetchRegistrationServicePtr,
    proxyClass: BackgroundFetchRegistrationServiceProxy,
    stubClass: BackgroundFetchRegistrationServiceStub,
    validateRequest: validateBackgroundFetchRegistrationServiceRequest,
    validateResponse: validateBackgroundFetchRegistrationServiceResponse,
  };
  BackgroundFetchRegistrationServiceStub.prototype.validator = validateBackgroundFetchRegistrationServiceRequest;
  BackgroundFetchRegistrationServiceProxy.prototype.validator = validateBackgroundFetchRegistrationServiceResponse;
  exports.BackgroundFetchError = BackgroundFetchError;
  exports.BackgroundFetchResult = BackgroundFetchResult;
  exports.BackgroundFetchFailureReason = BackgroundFetchFailureReason;
  exports.BackgroundFetchSettledFetch = BackgroundFetchSettledFetch;
  exports.BackgroundFetchOptions = BackgroundFetchOptions;
  exports.BackgroundFetchRegistrationData = BackgroundFetchRegistrationData;
  exports.BackgroundFetchRegistration = BackgroundFetchRegistration;
  exports.BackgroundFetchUkmData = BackgroundFetchUkmData;
  exports.BackgroundFetchRegistrationObserver = BackgroundFetchRegistrationObserver;
  exports.BackgroundFetchRegistrationObserverPtr = BackgroundFetchRegistrationObserverPtr;
  exports.BackgroundFetchRegistrationObserverAssociatedPtr = BackgroundFetchRegistrationObserverAssociatedPtr;
  exports.BackgroundFetchService = BackgroundFetchService;
  exports.BackgroundFetchServicePtr = BackgroundFetchServicePtr;
  exports.BackgroundFetchServiceAssociatedPtr = BackgroundFetchServiceAssociatedPtr;
  exports.BackgroundFetchRegistrationService = BackgroundFetchRegistrationService;
  exports.BackgroundFetchRegistrationServicePtr = BackgroundFetchRegistrationServicePtr;
  exports.BackgroundFetchRegistrationServiceAssociatedPtr = BackgroundFetchRegistrationServiceAssociatedPtr;
})();