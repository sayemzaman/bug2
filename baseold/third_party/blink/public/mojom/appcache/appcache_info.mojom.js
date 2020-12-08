// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/appcache/appcache_info.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var kAppCacheNoCacheId = 0;
  var kAppCacheNoResponseId = 0;
  var kAppCacheUnknownCacheId = -1;
  var AppCacheStatus = {};
  AppCacheStatus.APPCACHE_STATUS_UNCACHED = 0;
  AppCacheStatus.APPCACHE_STATUS_IDLE = 1;
  AppCacheStatus.APPCACHE_STATUS_CHECKING = 2;
  AppCacheStatus.APPCACHE_STATUS_DOWNLOADING = 3;
  AppCacheStatus.APPCACHE_STATUS_UPDATE_READY = 4;
  AppCacheStatus.APPCACHE_STATUS_OBSOLETE = 5;
  AppCacheStatus.MIN_VALUE = 0,
  AppCacheStatus.MAX_VALUE = 5,

  AppCacheStatus.isKnownEnumValue = function(value) {
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

  AppCacheStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AppCacheInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppCacheInfo.prototype.initDefaults_ = function() {
    this.manifestUrl = null;
    this.creationTime = null;
    this.lastUpdateTime = null;
    this.lastAccessTime = null;
    this.cacheId = 0;
    this.groupId = 0;
    this.status = 0;
    this.isComplete = false;
    this.responseSizes = 0;
    this.paddingSizes = 0;
  };
  AppCacheInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppCacheInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheInfo.manifestUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheInfo.creationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheInfo.lastUpdateTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppCacheInfo.lastAccessTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;




    // validate AppCacheInfo.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 48, AppCacheStatus);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  AppCacheInfo.encodedSize = codec.kStructHeaderSize + 72;

  AppCacheInfo.decode = function(decoder) {
    var packed;
    var val = new AppCacheInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.manifestUrl = decoder.decodeStructPointer(url$.Url);
    val.creationTime = decoder.decodeStructPointer(time$.Time);
    val.lastUpdateTime = decoder.decodeStructPointer(time$.Time);
    val.lastAccessTime = decoder.decodeStructPointer(time$.Time);
    val.cacheId = decoder.decodeStruct(codec.Int64);
    val.groupId = decoder.decodeStruct(codec.Int64);
    val.status = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isComplete = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.responseSizes = decoder.decodeStruct(codec.Int64);
    val.paddingSizes = decoder.decodeStruct(codec.Int64);
    return val;
  };

  AppCacheInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppCacheInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.manifestUrl);
    encoder.encodeStructPointer(time$.Time, val.creationTime);
    encoder.encodeStructPointer(time$.Time, val.lastUpdateTime);
    encoder.encodeStructPointer(time$.Time, val.lastAccessTime);
    encoder.encodeStruct(codec.Int64, val.cacheId);
    encoder.encodeStruct(codec.Int64, val.groupId);
    encoder.encodeStruct(codec.Int32, val.status);
    packed = 0;
    packed |= (val.isComplete & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.responseSizes);
    encoder.encodeStruct(codec.Int64, val.paddingSizes);
  };
  exports.kAppCacheNoCacheId = kAppCacheNoCacheId;
  exports.kAppCacheNoResponseId = kAppCacheNoResponseId;
  exports.kAppCacheUnknownCacheId = kAppCacheUnknownCacheId;
  exports.AppCacheStatus = AppCacheStatus;
  exports.AppCacheInfo = AppCacheInfo;
})();