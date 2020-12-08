// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/service_worker_client.mojom';
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
  var request_context_frame_type$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/request_context_frame_type.mojom', '../loader/request_context_frame_type.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var ServiceWorkerClientType = {};
  ServiceWorkerClientType.kWindow = 0;
  ServiceWorkerClientType.kSharedWorker = ServiceWorkerClientType.kWindow + 1;
  ServiceWorkerClientType.kAll = ServiceWorkerClientType.kSharedWorker + 1;
  ServiceWorkerClientType.MIN_VALUE = 0,
  ServiceWorkerClientType.MAX_VALUE = 2,

  ServiceWorkerClientType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ServiceWorkerClientType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ServiceWorkerClientQueryOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerClientQueryOptions.prototype.initDefaults_ = function() {
    this.includeUncontrolled = false;
    this.clientType = ServiceWorkerClientType.kWindow;
  };
  ServiceWorkerClientQueryOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerClientQueryOptions.validate = function(messageValidator, offset) {
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



    // validate ServiceWorkerClientQueryOptions.clientType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ServiceWorkerClientType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerClientQueryOptions.encodedSize = codec.kStructHeaderSize + 8;

  ServiceWorkerClientQueryOptions.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerClientQueryOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.includeUncontrolled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.clientType = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ServiceWorkerClientQueryOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerClientQueryOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.includeUncontrolled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.clientType);
  };
  function ServiceWorkerClientInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerClientInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.frameType = request_context_frame_type$.RequestContextFrameType.kNone;
    this.clientType = 0;
    this.clientUuid = null;
    this.pageHidden = true;
    this.isFocused = false;
    this.lastFocusTime = null;
    this.creationTime = null;
  };
  ServiceWorkerClientInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerClientInfo.validate = function(messageValidator, offset) {
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


    // validate ServiceWorkerClientInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerClientInfo.frameType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, request_context_frame_type$.RequestContextFrameType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerClientInfo.clientUuid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerClientInfo.clientType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ServiceWorkerClientType);
    if (err !== validator.validationError.NONE)
        return err;




    // validate ServiceWorkerClientInfo.lastFocusTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerClientInfo.creationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerClientInfo.encodedSize = codec.kStructHeaderSize + 48;

  ServiceWorkerClientInfo.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerClientInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.frameType = decoder.decodeStruct(codec.Int32);
    val.clientType = decoder.decodeStruct(codec.Int32);
    val.clientUuid = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.pageHidden = (packed >> 0) & 1 ? true : false;
    val.isFocused = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.lastFocusTime = decoder.decodeStructPointer(time$.TimeTicks);
    val.creationTime = decoder.decodeStructPointer(time$.TimeTicks);
    return val;
  };

  ServiceWorkerClientInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerClientInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.frameType);
    encoder.encodeStruct(codec.Int32, val.clientType);
    encoder.encodeStruct(codec.String, val.clientUuid);
    packed = 0;
    packed |= (val.pageHidden & 1) << 0
    packed |= (val.isFocused & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeTicks, val.lastFocusTime);
    encoder.encodeStructPointer(time$.TimeTicks, val.creationTime);
  };
  exports.ServiceWorkerClientType = ServiceWorkerClientType;
  exports.ServiceWorkerClientQueryOptions = ServiceWorkerClientQueryOptions;
  exports.ServiceWorkerClientInfo = ServiceWorkerClientInfo;
})();