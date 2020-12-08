// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/feed_internals/feed_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('feedInternals.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function Properties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Properties.prototype.initDefaults_ = function() {
    this.isFeedEnabled = false;
    this.isFeedVisible = false;
    this.isFeedAllowed = false;
    this.isPrefetchingEnabled = false;
    this.feedFetchUrl = null;
  };
  Properties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Properties.validate = function(messageValidator, offset) {
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






    // validate Properties.feedFetchUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Properties.encodedSize = codec.kStructHeaderSize + 16;

  Properties.decode = function(decoder) {
    var packed;
    var val = new Properties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isFeedEnabled = (packed >> 0) & 1 ? true : false;
    val.isFeedVisible = (packed >> 1) & 1 ? true : false;
    val.isFeedAllowed = (packed >> 2) & 1 ? true : false;
    val.isPrefetchingEnabled = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.feedFetchUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  Properties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Properties.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isFeedEnabled & 1) << 0
    packed |= (val.isFeedVisible & 1) << 1
    packed |= (val.isFeedAllowed & 1) << 2
    packed |= (val.isPrefetchingEnabled & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.feedFetchUrl);
  };
  function UserClassifier(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserClassifier.prototype.initDefaults_ = function() {
    this.userClassDescription = null;
    this.avgHoursBetweenViews = 0;
    this.avgHoursBetweenUses = 0;
  };
  UserClassifier.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserClassifier.validate = function(messageValidator, offset) {
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


    // validate UserClassifier.userClassDescription
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  UserClassifier.encodedSize = codec.kStructHeaderSize + 16;

  UserClassifier.decode = function(decoder) {
    var packed;
    var val = new UserClassifier();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.userClassDescription = decoder.decodeStruct(codec.String);
    val.avgHoursBetweenViews = decoder.decodeStruct(codec.Float);
    val.avgHoursBetweenUses = decoder.decodeStruct(codec.Float);
    return val;
  };

  UserClassifier.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserClassifier.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.userClassDescription);
    encoder.encodeStruct(codec.Float, val.avgHoursBetweenViews);
    encoder.encodeStruct(codec.Float, val.avgHoursBetweenUses);
  };
  function LastFetchProperties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LastFetchProperties.prototype.initDefaults_ = function() {
    this.lastFetchStatus = 0;
    this.lastFetchTrigger = null;
    this.lastFetchTime = null;
    this.refreshSuppressTime = null;
  };
  LastFetchProperties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LastFetchProperties.validate = function(messageValidator, offset) {
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



    // validate LastFetchProperties.lastFetchTrigger
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate LastFetchProperties.lastFetchTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LastFetchProperties.refreshSuppressTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, Time, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LastFetchProperties.encodedSize = codec.kStructHeaderSize + 32;

  LastFetchProperties.decode = function(decoder) {
    var packed;
    var val = new LastFetchProperties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.lastFetchStatus = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.lastFetchTrigger = decoder.decodeStruct(codec.String);
    val.lastFetchTime = decoder.decodeStructPointer(Time);
    val.refreshSuppressTime = decoder.decodeStructPointer(Time);
    return val;
  };

  LastFetchProperties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LastFetchProperties.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.lastFetchStatus);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.lastFetchTrigger);
    encoder.encodeStructPointer(Time, val.lastFetchTime);
    encoder.encodeStructPointer(Time, val.refreshSuppressTime);
  };
  function Suggestion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Suggestion.prototype.initDefaults_ = function() {
    this.title = null;
    this.url = null;
    this.publisherName = null;
    this.imageUrl = null;
    this.faviconUrl = null;
  };
  Suggestion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Suggestion.validate = function(messageValidator, offset) {
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


    // validate Suggestion.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Suggestion.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Suggestion.publisherName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Suggestion.imageUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Suggestion.faviconUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Suggestion.encodedSize = codec.kStructHeaderSize + 40;

  Suggestion.decode = function(decoder) {
    var packed;
    var val = new Suggestion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.publisherName = decoder.decodeStruct(codec.String);
    val.imageUrl = decoder.decodeStructPointer(url$.Url);
    val.faviconUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  Suggestion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Suggestion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.publisherName);
    encoder.encodeStructPointer(url$.Url, val.imageUrl);
    encoder.encodeStructPointer(url$.Url, val.faviconUrl);
  };
  function Time(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Time.prototype.initDefaults_ = function() {
    this.msSinceEpoch = 0;
  };
  Time.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Time.validate = function(messageValidator, offset) {
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

  Time.encodedSize = codec.kStructHeaderSize + 8;

  Time.decode = function(decoder) {
    var packed;
    var val = new Time();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.msSinceEpoch = decoder.decodeStruct(codec.Double);
    return val;
  };

  Time.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Time.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.msSinceEpoch);
  };
  function PageHandler_GetGeneralProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetGeneralProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetGeneralProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetGeneralProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetGeneralProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetGeneralProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetGeneralProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetGeneralProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetGeneralProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetGeneralProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetGeneralProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetGeneralProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetGeneralProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetGeneralProperties_ResponseParams.properties
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Properties, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetGeneralProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetGeneralProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetGeneralProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeStructPointer(Properties);
    return val;
  };

  PageHandler_GetGeneralProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetGeneralProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Properties, val.properties);
  };
  function PageHandler_GetUserClassifierProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetUserClassifierProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetUserClassifierProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetUserClassifierProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetUserClassifierProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetUserClassifierProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetUserClassifierProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetUserClassifierProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetUserClassifierProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetUserClassifierProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetUserClassifierProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetUserClassifierProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetUserClassifierProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetUserClassifierProperties_ResponseParams.properties
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, UserClassifier, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetUserClassifierProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetUserClassifierProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetUserClassifierProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeStructPointer(UserClassifier);
    return val;
  };

  PageHandler_GetUserClassifierProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetUserClassifierProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(UserClassifier, val.properties);
  };
  function PageHandler_ClearUserClassifierProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearUserClassifierProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ClearUserClassifierProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearUserClassifierProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ClearUserClassifierProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ClearUserClassifierProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearUserClassifierProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ClearUserClassifierProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearUserClassifierProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetLastFetchProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetLastFetchProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetLastFetchProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetLastFetchProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetLastFetchProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetLastFetchProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetLastFetchProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetLastFetchProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetLastFetchProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetLastFetchProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetLastFetchProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetLastFetchProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetLastFetchProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetLastFetchProperties_ResponseParams.properties
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, LastFetchProperties, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetLastFetchProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetLastFetchProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetLastFetchProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeStructPointer(LastFetchProperties);
    return val;
  };

  PageHandler_GetLastFetchProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetLastFetchProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(LastFetchProperties, val.properties);
  };
  function PageHandler_ClearCachedDataAndRefreshFeed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearCachedDataAndRefreshFeed_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ClearCachedDataAndRefreshFeed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearCachedDataAndRefreshFeed_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ClearCachedDataAndRefreshFeed_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ClearCachedDataAndRefreshFeed_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearCachedDataAndRefreshFeed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ClearCachedDataAndRefreshFeed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearCachedDataAndRefreshFeed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_RefreshFeed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_RefreshFeed_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_RefreshFeed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_RefreshFeed_Params.validate = function(messageValidator, offset) {
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

  PageHandler_RefreshFeed_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_RefreshFeed_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_RefreshFeed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_RefreshFeed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_RefreshFeed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetCurrentContent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetCurrentContent_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetCurrentContent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetCurrentContent_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetCurrentContent_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetCurrentContent_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetCurrentContent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetCurrentContent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetCurrentContent_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetCurrentContent_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetCurrentContent_ResponseParams.prototype.initDefaults_ = function() {
    this.suggestions = null;
  };
  PageHandler_GetCurrentContent_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetCurrentContent_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetCurrentContent_ResponseParams.suggestions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Suggestion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetCurrentContent_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetCurrentContent_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetCurrentContent_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.suggestions = decoder.decodeArrayPointer(new codec.PointerTo(Suggestion));
    return val;
  };

  PageHandler_GetCurrentContent_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetCurrentContent_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Suggestion), val.suggestions);
  };
  function PageHandler_GetFeedProcessScopeDump_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetFeedProcessScopeDump_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetFeedProcessScopeDump_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetFeedProcessScopeDump_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetFeedProcessScopeDump_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetFeedProcessScopeDump_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetFeedProcessScopeDump_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetFeedProcessScopeDump_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetFeedProcessScopeDump_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetFeedProcessScopeDump_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetFeedProcessScopeDump_ResponseParams.prototype.initDefaults_ = function() {
    this.dump = null;
  };
  PageHandler_GetFeedProcessScopeDump_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetFeedProcessScopeDump_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetFeedProcessScopeDump_ResponseParams.dump
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetFeedProcessScopeDump_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetFeedProcessScopeDump_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetFeedProcessScopeDump_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dump = decoder.decodeStruct(codec.String);
    return val;
  };

  PageHandler_GetFeedProcessScopeDump_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetFeedProcessScopeDump_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.dump);
  };
  function PageHandler_GetFeedHistograms_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetFeedHistograms_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetFeedHistograms_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetFeedHistograms_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetFeedHistograms_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetFeedHistograms_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetFeedHistograms_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetFeedHistograms_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetFeedHistograms_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetFeedHistograms_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetFeedHistograms_ResponseParams.prototype.initDefaults_ = function() {
    this.log = null;
  };
  PageHandler_GetFeedHistograms_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetFeedHistograms_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetFeedHistograms_ResponseParams.log
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetFeedHistograms_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetFeedHistograms_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetFeedHistograms_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.log = decoder.decodeStruct(codec.String);
    return val;
  };

  PageHandler_GetFeedHistograms_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetFeedHistograms_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.log);
  };
  var kPageHandler_GetGeneralProperties_Name = 0;
  var kPageHandler_GetUserClassifierProperties_Name = 1;
  var kPageHandler_ClearUserClassifierProperties_Name = 2;
  var kPageHandler_GetLastFetchProperties_Name = 3;
  var kPageHandler_ClearCachedDataAndRefreshFeed_Name = 4;
  var kPageHandler_RefreshFeed_Name = 5;
  var kPageHandler_GetCurrentContent_Name = 6;
  var kPageHandler_GetFeedProcessScopeDump_Name = 7;
  var kPageHandler_GetFeedHistograms_Name = 8;

  function PageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageHandler,
                                                   handleOrPtrInfo);
  }

  function PageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageHandler, associatedInterfacePtrInfo);
  }

  PageHandlerAssociatedPtr.prototype =
      Object.create(PageHandlerPtr.prototype);
  PageHandlerAssociatedPtr.prototype.constructor =
      PageHandlerAssociatedPtr;

  function PageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageHandlerPtr.prototype.getGeneralProperties = function() {
    return PageHandlerProxy.prototype.getGeneralProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getGeneralProperties = function() {
    var params_ = new PageHandler_GetGeneralProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetGeneralProperties_Name,
          codec.align(PageHandler_GetGeneralProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetGeneralProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetGeneralProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.getUserClassifierProperties = function() {
    return PageHandlerProxy.prototype.getUserClassifierProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getUserClassifierProperties = function() {
    var params_ = new PageHandler_GetUserClassifierProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetUserClassifierProperties_Name,
          codec.align(PageHandler_GetUserClassifierProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetUserClassifierProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetUserClassifierProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.clearUserClassifierProperties = function() {
    return PageHandlerProxy.prototype.clearUserClassifierProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.clearUserClassifierProperties = function() {
    var params_ = new PageHandler_ClearUserClassifierProperties_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_ClearUserClassifierProperties_Name,
        codec.align(PageHandler_ClearUserClassifierProperties_Params.encodedSize));
    builder.encodeStruct(PageHandler_ClearUserClassifierProperties_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.getLastFetchProperties = function() {
    return PageHandlerProxy.prototype.getLastFetchProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getLastFetchProperties = function() {
    var params_ = new PageHandler_GetLastFetchProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetLastFetchProperties_Name,
          codec.align(PageHandler_GetLastFetchProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetLastFetchProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetLastFetchProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.clearCachedDataAndRefreshFeed = function() {
    return PageHandlerProxy.prototype.clearCachedDataAndRefreshFeed
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.clearCachedDataAndRefreshFeed = function() {
    var params_ = new PageHandler_ClearCachedDataAndRefreshFeed_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_ClearCachedDataAndRefreshFeed_Name,
        codec.align(PageHandler_ClearCachedDataAndRefreshFeed_Params.encodedSize));
    builder.encodeStruct(PageHandler_ClearCachedDataAndRefreshFeed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.refreshFeed = function() {
    return PageHandlerProxy.prototype.refreshFeed
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.refreshFeed = function() {
    var params_ = new PageHandler_RefreshFeed_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_RefreshFeed_Name,
        codec.align(PageHandler_RefreshFeed_Params.encodedSize));
    builder.encodeStruct(PageHandler_RefreshFeed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.getCurrentContent = function() {
    return PageHandlerProxy.prototype.getCurrentContent
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getCurrentContent = function() {
    var params_ = new PageHandler_GetCurrentContent_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetCurrentContent_Name,
          codec.align(PageHandler_GetCurrentContent_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetCurrentContent_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetCurrentContent_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.getFeedProcessScopeDump = function() {
    return PageHandlerProxy.prototype.getFeedProcessScopeDump
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getFeedProcessScopeDump = function() {
    var params_ = new PageHandler_GetFeedProcessScopeDump_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetFeedProcessScopeDump_Name,
          codec.align(PageHandler_GetFeedProcessScopeDump_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetFeedProcessScopeDump_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetFeedProcessScopeDump_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.getFeedHistograms = function() {
    return PageHandlerProxy.prototype.getFeedHistograms
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getFeedHistograms = function() {
    var params_ = new PageHandler_GetFeedHistograms_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetFeedHistograms_Name,
          codec.align(PageHandler_GetFeedHistograms_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetFeedHistograms_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetFeedHistograms_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  PageHandlerStub.prototype.getGeneralProperties = function() {
    return this.delegate_ && this.delegate_.getGeneralProperties && this.delegate_.getGeneralProperties();
  }
  PageHandlerStub.prototype.getUserClassifierProperties = function() {
    return this.delegate_ && this.delegate_.getUserClassifierProperties && this.delegate_.getUserClassifierProperties();
  }
  PageHandlerStub.prototype.clearUserClassifierProperties = function() {
    return this.delegate_ && this.delegate_.clearUserClassifierProperties && this.delegate_.clearUserClassifierProperties();
  }
  PageHandlerStub.prototype.getLastFetchProperties = function() {
    return this.delegate_ && this.delegate_.getLastFetchProperties && this.delegate_.getLastFetchProperties();
  }
  PageHandlerStub.prototype.clearCachedDataAndRefreshFeed = function() {
    return this.delegate_ && this.delegate_.clearCachedDataAndRefreshFeed && this.delegate_.clearCachedDataAndRefreshFeed();
  }
  PageHandlerStub.prototype.refreshFeed = function() {
    return this.delegate_ && this.delegate_.refreshFeed && this.delegate_.refreshFeed();
  }
  PageHandlerStub.prototype.getCurrentContent = function() {
    return this.delegate_ && this.delegate_.getCurrentContent && this.delegate_.getCurrentContent();
  }
  PageHandlerStub.prototype.getFeedProcessScopeDump = function() {
    return this.delegate_ && this.delegate_.getFeedProcessScopeDump && this.delegate_.getFeedProcessScopeDump();
  }
  PageHandlerStub.prototype.getFeedHistograms = function() {
    return this.delegate_ && this.delegate_.getFeedHistograms && this.delegate_.getFeedHistograms();
  }

  PageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_ClearUserClassifierProperties_Name:
      var params = reader.decodeStruct(PageHandler_ClearUserClassifierProperties_Params);
      this.clearUserClassifierProperties();
      return true;
    case kPageHandler_ClearCachedDataAndRefreshFeed_Name:
      var params = reader.decodeStruct(PageHandler_ClearCachedDataAndRefreshFeed_Params);
      this.clearCachedDataAndRefreshFeed();
      return true;
    case kPageHandler_RefreshFeed_Name:
      var params = reader.decodeStruct(PageHandler_RefreshFeed_Params);
      this.refreshFeed();
      return true;
    default:
      return false;
    }
  };

  PageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_GetGeneralProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetGeneralProperties_Params);
      this.getGeneralProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetGeneralProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetGeneralProperties_Name,
            codec.align(PageHandler_GetGeneralProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetGeneralProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetUserClassifierProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetUserClassifierProperties_Params);
      this.getUserClassifierProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetUserClassifierProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetUserClassifierProperties_Name,
            codec.align(PageHandler_GetUserClassifierProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetUserClassifierProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetLastFetchProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetLastFetchProperties_Params);
      this.getLastFetchProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetLastFetchProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetLastFetchProperties_Name,
            codec.align(PageHandler_GetLastFetchProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetLastFetchProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetCurrentContent_Name:
      var params = reader.decodeStruct(PageHandler_GetCurrentContent_Params);
      this.getCurrentContent().then(function(response) {
        var responseParams =
            new PageHandler_GetCurrentContent_ResponseParams();
        responseParams.suggestions = response.suggestions;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetCurrentContent_Name,
            codec.align(PageHandler_GetCurrentContent_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetCurrentContent_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetFeedProcessScopeDump_Name:
      var params = reader.decodeStruct(PageHandler_GetFeedProcessScopeDump_Params);
      this.getFeedProcessScopeDump().then(function(response) {
        var responseParams =
            new PageHandler_GetFeedProcessScopeDump_ResponseParams();
        responseParams.dump = response.dump;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetFeedProcessScopeDump_Name,
            codec.align(PageHandler_GetFeedProcessScopeDump_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetFeedProcessScopeDump_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetFeedHistograms_Name:
      var params = reader.decodeStruct(PageHandler_GetFeedHistograms_Params);
      this.getFeedHistograms().then(function(response) {
        var responseParams =
            new PageHandler_GetFeedHistograms_ResponseParams();
        responseParams.log = response.log;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetFeedHistograms_Name,
            codec.align(PageHandler_GetFeedHistograms_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetFeedHistograms_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageHandler_GetGeneralProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetGeneralProperties_Params;
      break;
      case kPageHandler_GetUserClassifierProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetUserClassifierProperties_Params;
      break;
      case kPageHandler_ClearUserClassifierProperties_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ClearUserClassifierProperties_Params;
      break;
      case kPageHandler_GetLastFetchProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetLastFetchProperties_Params;
      break;
      case kPageHandler_ClearCachedDataAndRefreshFeed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ClearCachedDataAndRefreshFeed_Params;
      break;
      case kPageHandler_RefreshFeed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_RefreshFeed_Params;
      break;
      case kPageHandler_GetCurrentContent_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetCurrentContent_Params;
      break;
      case kPageHandler_GetFeedProcessScopeDump_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetFeedProcessScopeDump_Params;
      break;
      case kPageHandler_GetFeedHistograms_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetFeedHistograms_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPageHandler_GetGeneralProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetGeneralProperties_ResponseParams;
        break;
      case kPageHandler_GetUserClassifierProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetUserClassifierProperties_ResponseParams;
        break;
      case kPageHandler_GetLastFetchProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetLastFetchProperties_ResponseParams;
        break;
      case kPageHandler_GetCurrentContent_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetCurrentContent_ResponseParams;
        break;
      case kPageHandler_GetFeedProcessScopeDump_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetFeedProcessScopeDump_ResponseParams;
        break;
      case kPageHandler_GetFeedHistograms_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetFeedHistograms_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PageHandler = {
    name: 'feed_internals.mojom.PageHandler',
    kVersion: 0,
    ptrClass: PageHandlerPtr,
    proxyClass: PageHandlerProxy,
    stubClass: PageHandlerStub,
    validateRequest: validatePageHandlerRequest,
    validateResponse: validatePageHandlerResponse,
  };
  PageHandlerStub.prototype.validator = validatePageHandlerRequest;
  PageHandlerProxy.prototype.validator = validatePageHandlerResponse;
  exports.Properties = Properties;
  exports.UserClassifier = UserClassifier;
  exports.LastFetchProperties = LastFetchProperties;
  exports.Suggestion = Suggestion;
  exports.Time = Time;
  exports.PageHandler = PageHandler;
  exports.PageHandlerPtr = PageHandlerPtr;
  exports.PageHandlerAssociatedPtr = PageHandlerAssociatedPtr;
})();