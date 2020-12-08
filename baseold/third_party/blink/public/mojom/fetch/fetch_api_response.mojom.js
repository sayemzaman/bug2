// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/fetch/fetch_api_response.mojom';
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
  var fetch_api$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/fetch_api.mojom', '../../../../../services/network/public/mojom/fetch_api.mojom.js');
  }
  var serialized_blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/serialized_blob.mojom', '../blob/serialized_blob.mojom.js');
  }
  var service_worker_error_type$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_error_type.mojom', '../service_worker/service_worker_error_type.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function FetchAPIResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIResponse.prototype.initDefaults_ = function() {
    this.urlList = null;
    this.statusCode = 0;
    this.responseType = fetch_api$.FetchResponseType.kDefault;
    this.statusText = null;
    this.responseSource = fetch_api$.FetchResponseSource.kUnspecified;
    this.error = service_worker_error_type$.ServiceWorkerResponseError.kUnknown;
    this.headers = null;
    this.blob = null;
    this.responseTime = null;
    this.cacheStorageCacheName = null;
    this.corsExposedHeaderNames = null;
    this.sideDataBlob = null;
  };
  FetchAPIResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIResponse.validate = function(messageValidator, offset) {
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


    // validate FetchAPIResponse.urlList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FetchAPIResponse.statusText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.responseType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, fetch_api$.FetchResponseType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.responseSource
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, fetch_api$.FetchResponseSource);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.headers
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.blob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, service_worker_error_type$.ServiceWorkerResponseError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.responseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.cacheStorageCacheName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.corsExposedHeaderNames
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.sideDataBlob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FetchAPIResponse.encodedSize = codec.kStructHeaderSize + 80;

  FetchAPIResponse.decode = function(decoder) {
    var packed;
    var val = new FetchAPIResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlList = decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    val.statusCode = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    val.responseType = decoder.decodeStruct(codec.Int32);
    val.statusText = decoder.decodeStruct(codec.String);
    val.responseSource = decoder.decodeStruct(codec.Int32);
    val.error = decoder.decodeStruct(codec.Int32);
    val.headers = decoder.decodeMapPointer(codec.String, codec.String);
    val.blob = decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    val.responseTime = decoder.decodeStructPointer(time$.Time);
    val.cacheStorageCacheName = decoder.decodeStruct(codec.NullableString);
    val.corsExposedHeaderNames = decoder.decodeArrayPointer(codec.String);
    val.sideDataBlob = decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    return val;
  };

  FetchAPIResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.urlList);
    encoder.encodeStruct(codec.Uint16, val.statusCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.responseType);
    encoder.encodeStruct(codec.String, val.statusText);
    encoder.encodeStruct(codec.Int32, val.responseSource);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeMapPointer(codec.String, codec.String, val.headers);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.blob);
    encoder.encodeStructPointer(time$.Time, val.responseTime);
    encoder.encodeStruct(codec.NullableString, val.cacheStorageCacheName);
    encoder.encodeArrayPointer(codec.String, val.corsExposedHeaderNames);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.sideDataBlob);
  };
  exports.FetchAPIResponse = FetchAPIResponse;
})();