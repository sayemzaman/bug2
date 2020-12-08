// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/dispatch_fetch_event_params.mojom';
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
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', '../../../../../services/network/public/mojom/url_loader.mojom.js');
  }
  var blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/blob.mojom', '../blob/blob.mojom.js');
  }
  var fetch_api_request$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/fetch/fetch_api_request.mojom', '../fetch/fetch_api_request.mojom.js');
  }



  function FetchEventPreloadHandle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchEventPreloadHandle.prototype.initDefaults_ = function() {
    this.urlLoader = new url_loader$.URLLoaderPtr();
    this.urlLoaderClientRequest = new bindings.InterfaceRequest();
  };
  FetchEventPreloadHandle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchEventPreloadHandle.validate = function(messageValidator, offset) {
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


    // validate FetchEventPreloadHandle.urlLoader
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchEventPreloadHandle.urlLoaderClientRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FetchEventPreloadHandle.encodedSize = codec.kStructHeaderSize + 16;

  FetchEventPreloadHandle.decode = function(decoder) {
    var packed;
    var val = new FetchEventPreloadHandle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoader = decoder.decodeStruct(new codec.Interface(url_loader$.URLLoaderPtr));
    val.urlLoaderClientRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FetchEventPreloadHandle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchEventPreloadHandle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(url_loader$.URLLoaderPtr), val.urlLoader);
    encoder.encodeStruct(codec.InterfaceRequest, val.urlLoaderClientRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DispatchFetchEventParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DispatchFetchEventParams.prototype.initDefaults_ = function() {
    this.request = null;
    this.clientId = null;
    this.preloadHandle = null;
  };
  DispatchFetchEventParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DispatchFetchEventParams.validate = function(messageValidator, offset) {
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


    // validate DispatchFetchEventParams.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, fetch_api_request$.FetchAPIRequest, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DispatchFetchEventParams.clientId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DispatchFetchEventParams.preloadHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, FetchEventPreloadHandle, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DispatchFetchEventParams.encodedSize = codec.kStructHeaderSize + 24;

  DispatchFetchEventParams.decode = function(decoder) {
    var packed;
    var val = new DispatchFetchEventParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(fetch_api_request$.FetchAPIRequest);
    val.clientId = decoder.decodeStruct(codec.String);
    val.preloadHandle = decoder.decodeStructPointer(FetchEventPreloadHandle);
    return val;
  };

  DispatchFetchEventParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DispatchFetchEventParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(fetch_api_request$.FetchAPIRequest, val.request);
    encoder.encodeStruct(codec.String, val.clientId);
    encoder.encodeStructPointer(FetchEventPreloadHandle, val.preloadHandle);
  };
  exports.FetchEventPreloadHandle = FetchEventPreloadHandle;
  exports.DispatchFetchEventParams = DispatchFetchEventParams;
})();