// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cors_origin_pattern.mojom';
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


  var CorsPortMatchMode = {};
  CorsPortMatchMode.kAllowAnyPort = 0;
  CorsPortMatchMode.kAllowOnlySpecifiedPort = CorsPortMatchMode.kAllowAnyPort + 1;
  CorsPortMatchMode.MIN_VALUE = 0,
  CorsPortMatchMode.MAX_VALUE = 1,

  CorsPortMatchMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CorsPortMatchMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CorsDomainMatchMode = {};
  CorsDomainMatchMode.kAllowSubdomains = 0;
  CorsDomainMatchMode.kAllowRegistrableDomains = CorsDomainMatchMode.kAllowSubdomains + 1;
  CorsDomainMatchMode.kDisallowSubdomains = CorsDomainMatchMode.kAllowRegistrableDomains + 1;
  CorsDomainMatchMode.MIN_VALUE = 0,
  CorsDomainMatchMode.MAX_VALUE = 2,

  CorsDomainMatchMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CorsDomainMatchMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CorsOriginAccessMatchPriority = {};
  CorsOriginAccessMatchPriority.kNoMatchingOrigin = 0;
  CorsOriginAccessMatchPriority.kDefaultPriority = CorsOriginAccessMatchPriority.kNoMatchingOrigin + 1;
  CorsOriginAccessMatchPriority.kLowPriority = CorsOriginAccessMatchPriority.kDefaultPriority + 1;
  CorsOriginAccessMatchPriority.kMediumPriority = CorsOriginAccessMatchPriority.kLowPriority + 1;
  CorsOriginAccessMatchPriority.kHighPriority = CorsOriginAccessMatchPriority.kMediumPriority + 1;
  CorsOriginAccessMatchPriority.kMaxPriority = CorsOriginAccessMatchPriority.kHighPriority + 1;
  CorsOriginAccessMatchPriority.MIN_VALUE = 0,
  CorsOriginAccessMatchPriority.MAX_VALUE = 5,

  CorsOriginAccessMatchPriority.isKnownEnumValue = function(value) {
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

  CorsOriginAccessMatchPriority.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CorsOriginPattern(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CorsOriginPattern.prototype.initDefaults_ = function() {
    this.protocol = null;
    this.domain = null;
    this.port = 0;
    this.domainMatchMode = 0;
    this.portMatchMode = 0;
    this.priority = 0;
  };
  CorsOriginPattern.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CorsOriginPattern.validate = function(messageValidator, offset) {
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


    // validate CorsOriginPattern.protocol
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsOriginPattern.domain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate CorsOriginPattern.domainMatchMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, CorsDomainMatchMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsOriginPattern.portMatchMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, CorsPortMatchMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsOriginPattern.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, CorsOriginAccessMatchPriority);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CorsOriginPattern.encodedSize = codec.kStructHeaderSize + 32;

  CorsOriginPattern.decode = function(decoder) {
    var packed;
    var val = new CorsOriginPattern();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.protocol = decoder.decodeStruct(codec.String);
    val.domain = decoder.decodeStruct(codec.String);
    val.port = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    val.domainMatchMode = decoder.decodeStruct(codec.Int32);
    val.portMatchMode = decoder.decodeStruct(codec.Int32);
    val.priority = decoder.decodeStruct(codec.Int32);
    return val;
  };

  CorsOriginPattern.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CorsOriginPattern.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.protocol);
    encoder.encodeStruct(codec.String, val.domain);
    encoder.encodeStruct(codec.Uint16, val.port);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.domainMatchMode);
    encoder.encodeStruct(codec.Int32, val.portMatchMode);
    encoder.encodeStruct(codec.Int32, val.priority);
  };
  function CorsOriginAccessPatterns(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CorsOriginAccessPatterns.prototype.initDefaults_ = function() {
    this.sourceOrigin = null;
    this.allowPatterns = null;
    this.blockPatterns = null;
  };
  CorsOriginAccessPatterns.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CorsOriginAccessPatterns.validate = function(messageValidator, offset) {
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


    // validate CorsOriginAccessPatterns.sourceOrigin
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsOriginAccessPatterns.allowPatterns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(CorsOriginPattern), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsOriginAccessPatterns.blockPatterns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(CorsOriginPattern), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CorsOriginAccessPatterns.encodedSize = codec.kStructHeaderSize + 24;

  CorsOriginAccessPatterns.decode = function(decoder) {
    var packed;
    var val = new CorsOriginAccessPatterns();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceOrigin = decoder.decodeStruct(codec.String);
    val.allowPatterns = decoder.decodeArrayPointer(new codec.PointerTo(CorsOriginPattern));
    val.blockPatterns = decoder.decodeArrayPointer(new codec.PointerTo(CorsOriginPattern));
    return val;
  };

  CorsOriginAccessPatterns.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CorsOriginAccessPatterns.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.sourceOrigin);
    encoder.encodeArrayPointer(new codec.PointerTo(CorsOriginPattern), val.allowPatterns);
    encoder.encodeArrayPointer(new codec.PointerTo(CorsOriginPattern), val.blockPatterns);
  };
  exports.CorsPortMatchMode = CorsPortMatchMode;
  exports.CorsDomainMatchMode = CorsDomainMatchMode;
  exports.CorsOriginAccessMatchPriority = CorsOriginAccessMatchPriority;
  exports.CorsOriginPattern = CorsOriginPattern;
  exports.CorsOriginAccessPatterns = CorsOriginAccessPatterns;
})();