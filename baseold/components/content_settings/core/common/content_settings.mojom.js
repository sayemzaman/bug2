// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/content_settings/core/common/content_settings.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('contentSettings.mojom');
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../../mojo/public/mojom/base/values.mojom.js');
  }


  var ContentSetting = {};
  ContentSetting.DEFAULT = 0;
  ContentSetting.ALLOW = ContentSetting.DEFAULT + 1;
  ContentSetting.BLOCK = ContentSetting.ALLOW + 1;
  ContentSetting.ASK = ContentSetting.BLOCK + 1;
  ContentSetting.SESSION_ONLY = ContentSetting.ASK + 1;
  ContentSetting.DETECT_IMPORTANT_CONTENT = ContentSetting.SESSION_ONLY + 1;
  ContentSetting.MIN_VALUE = 0,
  ContentSetting.MAX_VALUE = 5,

  ContentSetting.isKnownEnumValue = function(value) {
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

  ContentSetting.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PatternParts(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PatternParts.prototype.initDefaults_ = function() {
    this.scheme = null;
    this.isSchemeWildcard = false;
    this.hasDomainWildcard = false;
    this.isPortWildcard = false;
    this.isPathWildcard = false;
    this.host = null;
    this.port = null;
    this.path = null;
  };
  PatternParts.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PatternParts.validate = function(messageValidator, offset) {
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


    // validate PatternParts.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate PatternParts.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate PatternParts.port
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate PatternParts.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PatternParts.encodedSize = codec.kStructHeaderSize + 40;

  PatternParts.decode = function(decoder) {
    var packed;
    var val = new PatternParts();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.isSchemeWildcard = (packed >> 0) & 1 ? true : false;
    val.hasDomainWildcard = (packed >> 1) & 1 ? true : false;
    val.isPortWildcard = (packed >> 2) & 1 ? true : false;
    val.isPathWildcard = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.host = decoder.decodeStruct(codec.String);
    val.port = decoder.decodeStruct(codec.String);
    val.path = decoder.decodeStruct(codec.String);
    return val;
  };

  PatternParts.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PatternParts.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.scheme);
    packed = 0;
    packed |= (val.isSchemeWildcard & 1) << 0
    packed |= (val.hasDomainWildcard & 1) << 1
    packed |= (val.isPortWildcard & 1) << 2
    packed |= (val.isPathWildcard & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.String, val.port);
    encoder.encodeStruct(codec.String, val.path);
  };
  function ContentSettingsPattern(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentSettingsPattern.prototype.initDefaults_ = function() {
    this.parts = null;
    this.isValid = false;
  };
  ContentSettingsPattern.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentSettingsPattern.validate = function(messageValidator, offset) {
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


    // validate ContentSettingsPattern.parts
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PatternParts, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ContentSettingsPattern.encodedSize = codec.kStructHeaderSize + 16;

  ContentSettingsPattern.decode = function(decoder) {
    var packed;
    var val = new ContentSettingsPattern();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.parts = decoder.decodeStructPointer(PatternParts);
    packed = decoder.readUint8();
    val.isValid = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContentSettingsPattern.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentSettingsPattern.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PatternParts, val.parts);
    packed = 0;
    packed |= (val.isValid & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ContentSettingPatternSource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentSettingPatternSource.prototype.initDefaults_ = function() {
    this.primaryPattern = null;
    this.secondaryPattern = null;
    this.settingValue = null;
    this.source = null;
    this.incognito = false;
  };
  ContentSettingPatternSource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentSettingPatternSource.validate = function(messageValidator, offset) {
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


    // validate ContentSettingPatternSource.primaryPattern
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ContentSettingsPattern, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSettingPatternSource.secondaryPattern
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ContentSettingsPattern, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSettingPatternSource.settingValue
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, values$.Value, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSettingPatternSource.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ContentSettingPatternSource.encodedSize = codec.kStructHeaderSize + 48;

  ContentSettingPatternSource.decode = function(decoder) {
    var packed;
    var val = new ContentSettingPatternSource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.primaryPattern = decoder.decodeStructPointer(ContentSettingsPattern);
    val.secondaryPattern = decoder.decodeStructPointer(ContentSettingsPattern);
    val.settingValue = decoder.decodeStruct(values$.Value);
    val.source = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.incognito = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContentSettingPatternSource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentSettingPatternSource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ContentSettingsPattern, val.primaryPattern);
    encoder.encodeStructPointer(ContentSettingsPattern, val.secondaryPattern);
    encoder.encodeStruct(values$.Value, val.settingValue);
    encoder.encodeStruct(codec.String, val.source);
    packed = 0;
    packed |= (val.incognito & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RendererContentSettingRules(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererContentSettingRules.prototype.initDefaults_ = function() {
    this.imageRules = null;
    this.scriptRules = null;
    this.autoplayRules = null;
    this.clientHintsRules = null;
    this.popupRedirectRules = null;
  };
  RendererContentSettingRules.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererContentSettingRules.validate = function(messageValidator, offset) {
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


    // validate RendererContentSettingRules.imageRules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererContentSettingRules.scriptRules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererContentSettingRules.autoplayRules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererContentSettingRules.clientHintsRules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererContentSettingRules.popupRedirectRules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererContentSettingRules.encodedSize = codec.kStructHeaderSize + 40;

  RendererContentSettingRules.decode = function(decoder) {
    var packed;
    var val = new RendererContentSettingRules();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.imageRules = decoder.decodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource));
    val.scriptRules = decoder.decodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource));
    val.autoplayRules = decoder.decodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource));
    val.clientHintsRules = decoder.decodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource));
    val.popupRedirectRules = decoder.decodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource));
    return val;
  };

  RendererContentSettingRules.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererContentSettingRules.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource), val.imageRules);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource), val.scriptRules);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource), val.autoplayRules);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource), val.clientHintsRules);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentSettingPatternSource), val.popupRedirectRules);
  };
  exports.ContentSetting = ContentSetting;
  exports.PatternParts = PatternParts;
  exports.ContentSettingsPattern = ContentSettingsPattern;
  exports.ContentSettingPatternSource = ContentSettingPatternSource;
  exports.RendererContentSettingRules = RendererContentSettingRules;
})();