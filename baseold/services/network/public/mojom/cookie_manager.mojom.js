// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cookie_manager.mojom';
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
  var content_settings$ =
      mojo.internal.exposeNamespace('contentSettings.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/content_settings/core/common/content_settings.mojom', '../../../../components/content_settings/core/common/content_settings.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }


  var CookiePriority = {};
  CookiePriority.LOW = 0;
  CookiePriority.MEDIUM = CookiePriority.LOW + 1;
  CookiePriority.HIGH = CookiePriority.MEDIUM + 1;
  CookiePriority.MIN_VALUE = 0,
  CookiePriority.MAX_VALUE = 2,

  CookiePriority.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CookiePriority.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CookieSameSite = {};
  CookieSameSite.UNSPECIFIED = -1;
  CookieSameSite.NO_RESTRICTION = 0;
  CookieSameSite.LAX_MODE = 1;
  CookieSameSite.STRICT_MODE = 2;
  CookieSameSite.EXTENDED_MODE = 3;
  CookieSameSite.MIN_VALUE = -1,
  CookieSameSite.MAX_VALUE = 3,

  CookieSameSite.isKnownEnumValue = function(value) {
    switch (value) {
    case -1:
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  CookieSameSite.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CookieSameSiteContext = {};
  CookieSameSiteContext.CROSS_SITE = 0;
  CookieSameSiteContext.SAME_SITE_LAX = CookieSameSiteContext.CROSS_SITE + 1;
  CookieSameSiteContext.SAME_SITE_STRICT = CookieSameSiteContext.SAME_SITE_LAX + 1;
  CookieSameSiteContext.MIN_VALUE = 0,
  CookieSameSiteContext.MAX_VALUE = 2,

  CookieSameSiteContext.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CookieSameSiteContext.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CookieInclusionStatus = {};
  CookieInclusionStatus.INCLUDE = 0;
  CookieInclusionStatus.EXCLUDE_HTTP_ONLY = CookieInclusionStatus.INCLUDE + 1;
  CookieInclusionStatus.EXCLUDE_SECURE_ONLY = CookieInclusionStatus.EXCLUDE_HTTP_ONLY + 1;
  CookieInclusionStatus.EXCLUDE_DOMAIN_MISMATCH = CookieInclusionStatus.EXCLUDE_SECURE_ONLY + 1;
  CookieInclusionStatus.EXCLUDE_NOT_ON_PATH = CookieInclusionStatus.EXCLUDE_DOMAIN_MISMATCH + 1;
  CookieInclusionStatus.EXCLUDE_SAMESITE_STRICT = CookieInclusionStatus.EXCLUDE_NOT_ON_PATH + 1;
  CookieInclusionStatus.EXCLUDE_SAMESITE_LAX = CookieInclusionStatus.EXCLUDE_SAMESITE_STRICT + 1;
  CookieInclusionStatus.EXCLUDE_SAMESITE_EXTENDED = CookieInclusionStatus.EXCLUDE_SAMESITE_LAX + 1;
  CookieInclusionStatus.EXCLUDE_SAMESITE_UNSPECIFIED_TREATED_AS_LAX = CookieInclusionStatus.EXCLUDE_SAMESITE_EXTENDED + 1;
  CookieInclusionStatus.EXCLUDE_SAMESITE_NONE_INSECURE = CookieInclusionStatus.EXCLUDE_SAMESITE_UNSPECIFIED_TREATED_AS_LAX + 1;
  CookieInclusionStatus.EXCLUDE_USER_PREFERENCES = CookieInclusionStatus.EXCLUDE_SAMESITE_NONE_INSECURE + 1;
  CookieInclusionStatus.EXCLUDE_FAILURE_TO_STORE = CookieInclusionStatus.EXCLUDE_USER_PREFERENCES + 1;
  CookieInclusionStatus.EXCLUDE_NONCOOKIEABLE_SCHEME = CookieInclusionStatus.EXCLUDE_FAILURE_TO_STORE + 1;
  CookieInclusionStatus.EXCLUDE_OVERWRITE_SECURE = CookieInclusionStatus.EXCLUDE_NONCOOKIEABLE_SCHEME + 1;
  CookieInclusionStatus.EXCLUDE_OVERWRITE_HTTP_ONLY = CookieInclusionStatus.EXCLUDE_OVERWRITE_SECURE + 1;
  CookieInclusionStatus.EXCLUDE_INVALID_DOMAIN = CookieInclusionStatus.EXCLUDE_OVERWRITE_HTTP_ONLY + 1;
  CookieInclusionStatus.EXCLUDE_INVALID_PREFIX = CookieInclusionStatus.EXCLUDE_INVALID_DOMAIN + 1;
  CookieInclusionStatus.EXCLUDE_UNKNOWN_ERROR = CookieInclusionStatus.EXCLUDE_INVALID_PREFIX + 1;
  CookieInclusionStatus.MIN_VALUE = 0,
  CookieInclusionStatus.MAX_VALUE = 17,

  CookieInclusionStatus.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  CookieInclusionStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CookieChangeCause = {};
  CookieChangeCause.INSERTED = 0;
  CookieChangeCause.EXPLICIT = CookieChangeCause.INSERTED + 1;
  CookieChangeCause.UNKNOWN_DELETION = CookieChangeCause.EXPLICIT + 1;
  CookieChangeCause.OVERWRITE = CookieChangeCause.UNKNOWN_DELETION + 1;
  CookieChangeCause.EXPIRED = CookieChangeCause.OVERWRITE + 1;
  CookieChangeCause.EVICTED = CookieChangeCause.EXPIRED + 1;
  CookieChangeCause.EXPIRED_OVERWRITE = CookieChangeCause.EVICTED + 1;
  CookieChangeCause.MIN_VALUE = 0,
  CookieChangeCause.MAX_VALUE = 6,

  CookieChangeCause.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  CookieChangeCause.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CookieDeletionSessionControl = {};
  CookieDeletionSessionControl.IGNORE_CONTROL = 0;
  CookieDeletionSessionControl.SESSION_COOKIES = CookieDeletionSessionControl.IGNORE_CONTROL + 1;
  CookieDeletionSessionControl.PERSISTENT_COOKIES = CookieDeletionSessionControl.SESSION_COOKIES + 1;
  CookieDeletionSessionControl.MIN_VALUE = 0,
  CookieDeletionSessionControl.MAX_VALUE = 2,

  CookieDeletionSessionControl.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CookieDeletionSessionControl.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CookieManagerParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManagerParams.prototype.initDefaults_ = function() {
    this.blockThirdPartyCookies = false;
    this.allowFileSchemeCookies = false;
    this.settings = null;
    this.secureOriginCookiesAllowedSchemes = null;
    this.matchingSchemeCookiesAllowedSchemes = null;
    this.thirdPartyCookiesAllowedSchemes = null;
  };
  CookieManagerParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManagerParams.validate = function(messageValidator, offset) {
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



    // validate CookieManagerParams.settings
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(content_settings$.ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManagerParams.secureOriginCookiesAllowedSchemes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManagerParams.matchingSchemeCookiesAllowedSchemes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManagerParams.thirdPartyCookiesAllowedSchemes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CookieManagerParams.encodedSize = codec.kStructHeaderSize + 40;

  CookieManagerParams.decode = function(decoder) {
    var packed;
    var val = new CookieManagerParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.blockThirdPartyCookies = (packed >> 0) & 1 ? true : false;
    val.allowFileSchemeCookies = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.settings = decoder.decodeArrayPointer(new codec.PointerTo(content_settings$.ContentSettingPatternSource));
    val.secureOriginCookiesAllowedSchemes = decoder.decodeArrayPointer(codec.String);
    val.matchingSchemeCookiesAllowedSchemes = decoder.decodeArrayPointer(codec.String);
    val.thirdPartyCookiesAllowedSchemes = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  CookieManagerParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManagerParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.blockThirdPartyCookies & 1) << 0
    packed |= (val.allowFileSchemeCookies & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(content_settings$.ContentSettingPatternSource), val.settings);
    encoder.encodeArrayPointer(codec.String, val.secureOriginCookiesAllowedSchemes);
    encoder.encodeArrayPointer(codec.String, val.matchingSchemeCookiesAllowedSchemes);
    encoder.encodeArrayPointer(codec.String, val.thirdPartyCookiesAllowedSchemes);
  };
  function CookieOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieOptions.prototype.initDefaults_ = function() {
    this.excludeHttponly = true;
    this.updateAccessTime = true;
    this.returnExcludedCookies = false;
    this.sameSiteCookieContext = CookieSameSiteContext.CROSS_SITE;
    this.serverTime = null;
  };
  CookieOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieOptions.validate = function(messageValidator, offset) {
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



    // validate CookieOptions.sameSiteCookieContext
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, CookieSameSiteContext);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CookieOptions.serverTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CookieOptions.encodedSize = codec.kStructHeaderSize + 16;

  CookieOptions.decode = function(decoder) {
    var packed;
    var val = new CookieOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.excludeHttponly = (packed >> 0) & 1 ? true : false;
    val.updateAccessTime = (packed >> 1) & 1 ? true : false;
    val.returnExcludedCookies = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sameSiteCookieContext = decoder.decodeStruct(codec.Int32);
    val.serverTime = decoder.decodeStructPointer(time$.Time);
    return val;
  };

  CookieOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.excludeHttponly & 1) << 0
    packed |= (val.updateAccessTime & 1) << 1
    packed |= (val.returnExcludedCookies & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.sameSiteCookieContext);
    encoder.encodeStructPointer(time$.Time, val.serverTime);
  };
  function CanonicalCookie(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CanonicalCookie.prototype.initDefaults_ = function() {
    this.name = null;
    this.value = null;
    this.domain = null;
    this.path = null;
    this.creation = null;
    this.expiry = null;
    this.lastAccess = null;
    this.secure = false;
    this.httponly = false;
    this.siteRestrictions = CookieSameSite.NO_RESTRICTION;
    this.priority = CookiePriority.MEDIUM;
  };
  CanonicalCookie.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CanonicalCookie.validate = function(messageValidator, offset) {
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


    // validate CanonicalCookie.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.domain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.creation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.expiry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.lastAccess
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;




    // validate CanonicalCookie.siteRestrictions
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 60, CookieSameSite);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CanonicalCookie.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 64, CookiePriority);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CanonicalCookie.encodedSize = codec.kStructHeaderSize + 72;

  CanonicalCookie.decode = function(decoder) {
    var packed;
    var val = new CanonicalCookie();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(codec.String);
    val.domain = decoder.decodeStruct(codec.String);
    val.path = decoder.decodeStruct(codec.String);
    val.creation = decoder.decodeStructPointer(time$.Time);
    val.expiry = decoder.decodeStructPointer(time$.Time);
    val.lastAccess = decoder.decodeStructPointer(time$.Time);
    packed = decoder.readUint8();
    val.secure = (packed >> 0) & 1 ? true : false;
    val.httponly = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.siteRestrictions = decoder.decodeStruct(codec.Int32);
    val.priority = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CanonicalCookie.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CanonicalCookie.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.value);
    encoder.encodeStruct(codec.String, val.domain);
    encoder.encodeStruct(codec.String, val.path);
    encoder.encodeStructPointer(time$.Time, val.creation);
    encoder.encodeStructPointer(time$.Time, val.expiry);
    encoder.encodeStructPointer(time$.Time, val.lastAccess);
    packed = 0;
    packed |= (val.secure & 1) << 0
    packed |= (val.httponly & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.siteRestrictions);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieWithStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieWithStatus.prototype.initDefaults_ = function() {
    this.cookie = null;
    this.status = 0;
  };
  CookieWithStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieWithStatus.validate = function(messageValidator, offset) {
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


    // validate CookieWithStatus.cookie
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CanonicalCookie, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieWithStatus.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, CookieInclusionStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieWithStatus.encodedSize = codec.kStructHeaderSize + 16;

  CookieWithStatus.decode = function(decoder) {
    var packed;
    var val = new CookieWithStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookie = decoder.decodeStructPointer(CanonicalCookie);
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieWithStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieWithStatus.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CanonicalCookie, val.cookie);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieAndLineWithStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieAndLineWithStatus.prototype.initDefaults_ = function() {
    this.cookie = null;
    this.cookieString = null;
    this.status = 0;
  };
  CookieAndLineWithStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieAndLineWithStatus.validate = function(messageValidator, offset) {
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


    // validate CookieAndLineWithStatus.cookie
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CanonicalCookie, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieAndLineWithStatus.cookieString
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieAndLineWithStatus.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, CookieInclusionStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieAndLineWithStatus.encodedSize = codec.kStructHeaderSize + 24;

  CookieAndLineWithStatus.decode = function(decoder) {
    var packed;
    var val = new CookieAndLineWithStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookie = decoder.decodeStructPointer(CanonicalCookie);
    val.cookieString = decoder.decodeStruct(codec.String);
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieAndLineWithStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieAndLineWithStatus.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CanonicalCookie, val.cookie);
    encoder.encodeStruct(codec.String, val.cookieString);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieDeletionFilter(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieDeletionFilter.prototype.initDefaults_ = function() {
    this.createdAfterTime = null;
    this.createdBeforeTime = null;
    this.excludingDomains = null;
    this.includingDomains = null;
    this.cookieName = null;
    this.hostName = null;
    this.url = null;
    this.sessionControl = CookieDeletionSessionControl.IGNORE_CONTROL;
  };
  CookieDeletionFilter.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieDeletionFilter.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.createdAfterTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.createdBeforeTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.excludingDomains
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.includingDomains
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.cookieName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.hostName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieDeletionFilter.sessionControl
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 56, CookieDeletionSessionControl);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieDeletionFilter.encodedSize = codec.kStructHeaderSize + 64;

  CookieDeletionFilter.decode = function(decoder) {
    var packed;
    var val = new CookieDeletionFilter();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.createdAfterTime = decoder.decodeStructPointer(time$.Time);
    val.createdBeforeTime = decoder.decodeStructPointer(time$.Time);
    val.excludingDomains = decoder.decodeArrayPointer(codec.String);
    val.includingDomains = decoder.decodeArrayPointer(codec.String);
    val.cookieName = decoder.decodeStruct(codec.NullableString);
    val.hostName = decoder.decodeStruct(codec.NullableString);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.sessionControl = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieDeletionFilter.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieDeletionFilter.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.createdAfterTime);
    encoder.encodeStructPointer(time$.Time, val.createdBeforeTime);
    encoder.encodeArrayPointer(codec.String, val.excludingDomains);
    encoder.encodeArrayPointer(codec.String, val.includingDomains);
    encoder.encodeStruct(codec.NullableString, val.cookieName);
    encoder.encodeStruct(codec.NullableString, val.hostName);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.sessionControl);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieChangeListener_OnCookieChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieChangeListener_OnCookieChange_Params.prototype.initDefaults_ = function() {
    this.cookie = null;
    this.cause = 0;
  };
  CookieChangeListener_OnCookieChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieChangeListener_OnCookieChange_Params.validate = function(messageValidator, offset) {
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


    // validate CookieChangeListener_OnCookieChange_Params.cookie
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CanonicalCookie, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieChangeListener_OnCookieChange_Params.cause
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, CookieChangeCause);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieChangeListener_OnCookieChange_Params.encodedSize = codec.kStructHeaderSize + 16;

  CookieChangeListener_OnCookieChange_Params.decode = function(decoder) {
    var packed;
    var val = new CookieChangeListener_OnCookieChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookie = decoder.decodeStructPointer(CanonicalCookie);
    val.cause = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieChangeListener_OnCookieChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieChangeListener_OnCookieChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CanonicalCookie, val.cookie);
    encoder.encodeStruct(codec.Int32, val.cause);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_GetAllCookies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_GetAllCookies_Params.prototype.initDefaults_ = function() {
  };
  CookieManager_GetAllCookies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_GetAllCookies_Params.validate = function(messageValidator, offset) {
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

  CookieManager_GetAllCookies_Params.encodedSize = codec.kStructHeaderSize + 0;

  CookieManager_GetAllCookies_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_GetAllCookies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CookieManager_GetAllCookies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_GetAllCookies_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CookieManager_GetAllCookies_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_GetAllCookies_ResponseParams.prototype.initDefaults_ = function() {
    this.cookies = null;
  };
  CookieManager_GetAllCookies_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_GetAllCookies_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CookieManager_GetAllCookies_ResponseParams.cookies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(CanonicalCookie), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_GetAllCookies_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_GetAllCookies_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_GetAllCookies_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookies = decoder.decodeArrayPointer(new codec.PointerTo(CanonicalCookie));
    return val;
  };

  CookieManager_GetAllCookies_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_GetAllCookies_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(CanonicalCookie), val.cookies);
  };
  function CookieManager_GetCookieList_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_GetCookieList_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.cookieOptions = null;
  };
  CookieManager_GetCookieList_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_GetCookieList_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_GetCookieList_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManager_GetCookieList_Params.cookieOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, CookieOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_GetCookieList_Params.encodedSize = codec.kStructHeaderSize + 16;

  CookieManager_GetCookieList_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_GetCookieList_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.cookieOptions = decoder.decodeStructPointer(CookieOptions);
    return val;
  };

  CookieManager_GetCookieList_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_GetCookieList_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(CookieOptions, val.cookieOptions);
  };
  function CookieManager_GetCookieList_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_GetCookieList_ResponseParams.prototype.initDefaults_ = function() {
    this.cookies = null;
    this.excludedCookies = null;
  };
  CookieManager_GetCookieList_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_GetCookieList_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CookieManager_GetCookieList_ResponseParams.cookies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(CanonicalCookie), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManager_GetCookieList_ResponseParams.excludedCookies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(CookieWithStatus), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_GetCookieList_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  CookieManager_GetCookieList_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_GetCookieList_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookies = decoder.decodeArrayPointer(new codec.PointerTo(CanonicalCookie));
    val.excludedCookies = decoder.decodeArrayPointer(new codec.PointerTo(CookieWithStatus));
    return val;
  };

  CookieManager_GetCookieList_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_GetCookieList_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(CanonicalCookie), val.cookies);
    encoder.encodeArrayPointer(new codec.PointerTo(CookieWithStatus), val.excludedCookies);
  };
  function CookieManager_SetCanonicalCookie_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_SetCanonicalCookie_Params.prototype.initDefaults_ = function() {
    this.cookie = null;
    this.sourceScheme = null;
    this.cookieOptions = null;
  };
  CookieManager_SetCanonicalCookie_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_SetCanonicalCookie_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_SetCanonicalCookie_Params.cookie
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CanonicalCookie, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManager_SetCanonicalCookie_Params.sourceScheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManager_SetCanonicalCookie_Params.cookieOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, CookieOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_SetCanonicalCookie_Params.encodedSize = codec.kStructHeaderSize + 24;

  CookieManager_SetCanonicalCookie_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_SetCanonicalCookie_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookie = decoder.decodeStructPointer(CanonicalCookie);
    val.sourceScheme = decoder.decodeStruct(codec.String);
    val.cookieOptions = decoder.decodeStructPointer(CookieOptions);
    return val;
  };

  CookieManager_SetCanonicalCookie_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_SetCanonicalCookie_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CanonicalCookie, val.cookie);
    encoder.encodeStruct(codec.String, val.sourceScheme);
    encoder.encodeStructPointer(CookieOptions, val.cookieOptions);
  };
  function CookieManager_SetCanonicalCookie_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_SetCanonicalCookie_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  CookieManager_SetCanonicalCookie_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_SetCanonicalCookie_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CookieManager_SetCanonicalCookie_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CookieInclusionStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_SetCanonicalCookie_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_SetCanonicalCookie_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_SetCanonicalCookie_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_SetCanonicalCookie_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_SetCanonicalCookie_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_DeleteCanonicalCookie_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_DeleteCanonicalCookie_Params.prototype.initDefaults_ = function() {
    this.cookie = null;
  };
  CookieManager_DeleteCanonicalCookie_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_DeleteCanonicalCookie_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_DeleteCanonicalCookie_Params.cookie
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CanonicalCookie, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_DeleteCanonicalCookie_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_DeleteCanonicalCookie_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_DeleteCanonicalCookie_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookie = decoder.decodeStructPointer(CanonicalCookie);
    return val;
  };

  CookieManager_DeleteCanonicalCookie_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_DeleteCanonicalCookie_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CanonicalCookie, val.cookie);
  };
  function CookieManager_DeleteCanonicalCookie_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_DeleteCanonicalCookie_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  CookieManager_DeleteCanonicalCookie_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_DeleteCanonicalCookie_ResponseParams.validate = function(messageValidator, offset) {
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

  CookieManager_DeleteCanonicalCookie_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_DeleteCanonicalCookie_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_DeleteCanonicalCookie_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_DeleteCanonicalCookie_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_DeleteCanonicalCookie_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_DeleteCookies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_DeleteCookies_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  CookieManager_DeleteCookies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_DeleteCookies_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_DeleteCookies_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CookieDeletionFilter, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_DeleteCookies_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_DeleteCookies_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_DeleteCookies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(CookieDeletionFilter);
    return val;
  };

  CookieManager_DeleteCookies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_DeleteCookies_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CookieDeletionFilter, val.filter);
  };
  function CookieManager_DeleteCookies_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_DeleteCookies_ResponseParams.prototype.initDefaults_ = function() {
    this.numDeleted = 0;
  };
  CookieManager_DeleteCookies_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_DeleteCookies_ResponseParams.validate = function(messageValidator, offset) {
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

  CookieManager_DeleteCookies_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_DeleteCookies_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_DeleteCookies_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.numDeleted = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_DeleteCookies_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_DeleteCookies_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.numDeleted);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_AddCookieChangeListener_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_AddCookieChangeListener_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.name = null;
    this.listener = new CookieChangeListenerPtr();
  };
  CookieManager_AddCookieChangeListener_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_AddCookieChangeListener_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_AddCookieChangeListener_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManager_AddCookieChangeListener_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieManager_AddCookieChangeListener_Params.listener
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_AddCookieChangeListener_Params.encodedSize = codec.kStructHeaderSize + 24;

  CookieManager_AddCookieChangeListener_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_AddCookieChangeListener_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.name = decoder.decodeStruct(codec.String);
    val.listener = decoder.decodeStruct(new codec.Interface(CookieChangeListenerPtr));
    return val;
  };

  CookieManager_AddCookieChangeListener_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_AddCookieChangeListener_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(new codec.Interface(CookieChangeListenerPtr), val.listener);
  };
  function CookieManager_AddGlobalChangeListener_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_AddGlobalChangeListener_Params.prototype.initDefaults_ = function() {
    this.notificationPointer = new CookieChangeListenerPtr();
  };
  CookieManager_AddGlobalChangeListener_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_AddGlobalChangeListener_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_AddGlobalChangeListener_Params.notificationPointer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_AddGlobalChangeListener_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_AddGlobalChangeListener_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_AddGlobalChangeListener_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.notificationPointer = decoder.decodeStruct(new codec.Interface(CookieChangeListenerPtr));
    return val;
  };

  CookieManager_AddGlobalChangeListener_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_AddGlobalChangeListener_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(CookieChangeListenerPtr), val.notificationPointer);
  };
  function CookieManager_CloneInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_CloneInterface_Params.prototype.initDefaults_ = function() {
    this.newInterface = new bindings.InterfaceRequest();
  };
  CookieManager_CloneInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_CloneInterface_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_CloneInterface_Params.newInterface
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_CloneInterface_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_CloneInterface_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_CloneInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.newInterface = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_CloneInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_CloneInterface_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.newInterface);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_FlushCookieStore_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_FlushCookieStore_Params.prototype.initDefaults_ = function() {
  };
  CookieManager_FlushCookieStore_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_FlushCookieStore_Params.validate = function(messageValidator, offset) {
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

  CookieManager_FlushCookieStore_Params.encodedSize = codec.kStructHeaderSize + 0;

  CookieManager_FlushCookieStore_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_FlushCookieStore_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CookieManager_FlushCookieStore_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_FlushCookieStore_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CookieManager_FlushCookieStore_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_FlushCookieStore_ResponseParams.prototype.initDefaults_ = function() {
  };
  CookieManager_FlushCookieStore_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_FlushCookieStore_ResponseParams.validate = function(messageValidator, offset) {
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

  CookieManager_FlushCookieStore_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  CookieManager_FlushCookieStore_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_FlushCookieStore_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CookieManager_FlushCookieStore_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_FlushCookieStore_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function CookieManager_AllowFileSchemeCookies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_AllowFileSchemeCookies_Params.prototype.initDefaults_ = function() {
    this.allow = false;
  };
  CookieManager_AllowFileSchemeCookies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_AllowFileSchemeCookies_Params.validate = function(messageValidator, offset) {
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

  CookieManager_AllowFileSchemeCookies_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_AllowFileSchemeCookies_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_AllowFileSchemeCookies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.allow = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_AllowFileSchemeCookies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_AllowFileSchemeCookies_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.allow & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_AllowFileSchemeCookies_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_AllowFileSchemeCookies_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  CookieManager_AllowFileSchemeCookies_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_AllowFileSchemeCookies_ResponseParams.validate = function(messageValidator, offset) {
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

  CookieManager_AllowFileSchemeCookies_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_AllowFileSchemeCookies_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CookieManager_AllowFileSchemeCookies_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_AllowFileSchemeCookies_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_AllowFileSchemeCookies_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CookieManager_SetContentSettings_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_SetContentSettings_Params.prototype.initDefaults_ = function() {
    this.settings = null;
  };
  CookieManager_SetContentSettings_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_SetContentSettings_Params.validate = function(messageValidator, offset) {
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


    // validate CookieManager_SetContentSettings_Params.settings
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(content_settings$.ContentSettingPatternSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieManager_SetContentSettings_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_SetContentSettings_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_SetContentSettings_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.settings = decoder.decodeArrayPointer(new codec.PointerTo(content_settings$.ContentSettingPatternSource));
    return val;
  };

  CookieManager_SetContentSettings_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_SetContentSettings_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(content_settings$.ContentSettingPatternSource), val.settings);
  };
  function CookieManager_SetForceKeepSessionState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_SetForceKeepSessionState_Params.prototype.initDefaults_ = function() {
  };
  CookieManager_SetForceKeepSessionState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_SetForceKeepSessionState_Params.validate = function(messageValidator, offset) {
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

  CookieManager_SetForceKeepSessionState_Params.encodedSize = codec.kStructHeaderSize + 0;

  CookieManager_SetForceKeepSessionState_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_SetForceKeepSessionState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CookieManager_SetForceKeepSessionState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_SetForceKeepSessionState_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CookieManager_BlockThirdPartyCookies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieManager_BlockThirdPartyCookies_Params.prototype.initDefaults_ = function() {
    this.block = false;
  };
  CookieManager_BlockThirdPartyCookies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieManager_BlockThirdPartyCookies_Params.validate = function(messageValidator, offset) {
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

  CookieManager_BlockThirdPartyCookies_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieManager_BlockThirdPartyCookies_Params.decode = function(decoder) {
    var packed;
    var val = new CookieManager_BlockThirdPartyCookies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.block = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieManager_BlockThirdPartyCookies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieManager_BlockThirdPartyCookies_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.block & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kCookieChangeListener_OnCookieChange_Name = 0;

  function CookieChangeListenerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CookieChangeListener,
                                                   handleOrPtrInfo);
  }

  function CookieChangeListenerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CookieChangeListener, associatedInterfacePtrInfo);
  }

  CookieChangeListenerAssociatedPtr.prototype =
      Object.create(CookieChangeListenerPtr.prototype);
  CookieChangeListenerAssociatedPtr.prototype.constructor =
      CookieChangeListenerAssociatedPtr;

  function CookieChangeListenerProxy(receiver) {
    this.receiver_ = receiver;
  }
  CookieChangeListenerPtr.prototype.onCookieChange = function() {
    return CookieChangeListenerProxy.prototype.onCookieChange
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieChangeListenerProxy.prototype.onCookieChange = function(cookie, cause) {
    var params_ = new CookieChangeListener_OnCookieChange_Params();
    params_.cookie = cookie;
    params_.cause = cause;
    var builder = new codec.MessageV0Builder(
        kCookieChangeListener_OnCookieChange_Name,
        codec.align(CookieChangeListener_OnCookieChange_Params.encodedSize));
    builder.encodeStruct(CookieChangeListener_OnCookieChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CookieChangeListenerStub(delegate) {
    this.delegate_ = delegate;
  }
  CookieChangeListenerStub.prototype.onCookieChange = function(cookie, cause) {
    return this.delegate_ && this.delegate_.onCookieChange && this.delegate_.onCookieChange(cookie, cause);
  }

  CookieChangeListenerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCookieChangeListener_OnCookieChange_Name:
      var params = reader.decodeStruct(CookieChangeListener_OnCookieChange_Params);
      this.onCookieChange(params.cookie, params.cause);
      return true;
    default:
      return false;
    }
  };

  CookieChangeListenerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCookieChangeListenerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCookieChangeListener_OnCookieChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieChangeListener_OnCookieChange_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCookieChangeListenerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CookieChangeListener = {
    name: 'network.mojom.CookieChangeListener',
    kVersion: 0,
    ptrClass: CookieChangeListenerPtr,
    proxyClass: CookieChangeListenerProxy,
    stubClass: CookieChangeListenerStub,
    validateRequest: validateCookieChangeListenerRequest,
    validateResponse: null,
  };
  CookieChangeListenerStub.prototype.validator = validateCookieChangeListenerRequest;
  CookieChangeListenerProxy.prototype.validator = null;
  var kCookieManager_GetAllCookies_Name = 0;
  var kCookieManager_GetCookieList_Name = 1;
  var kCookieManager_SetCanonicalCookie_Name = 2;
  var kCookieManager_DeleteCanonicalCookie_Name = 3;
  var kCookieManager_DeleteCookies_Name = 4;
  var kCookieManager_AddCookieChangeListener_Name = 5;
  var kCookieManager_AddGlobalChangeListener_Name = 6;
  var kCookieManager_CloneInterface_Name = 7;
  var kCookieManager_FlushCookieStore_Name = 8;
  var kCookieManager_AllowFileSchemeCookies_Name = 9;
  var kCookieManager_SetContentSettings_Name = 10;
  var kCookieManager_SetForceKeepSessionState_Name = 11;
  var kCookieManager_BlockThirdPartyCookies_Name = 12;

  function CookieManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CookieManager,
                                                   handleOrPtrInfo);
  }

  function CookieManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CookieManager, associatedInterfacePtrInfo);
  }

  CookieManagerAssociatedPtr.prototype =
      Object.create(CookieManagerPtr.prototype);
  CookieManagerAssociatedPtr.prototype.constructor =
      CookieManagerAssociatedPtr;

  function CookieManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  CookieManagerPtr.prototype.getAllCookies = function() {
    return CookieManagerProxy.prototype.getAllCookies
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.getAllCookies = function() {
    var params_ = new CookieManager_GetAllCookies_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_GetAllCookies_Name,
          codec.align(CookieManager_GetAllCookies_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_GetAllCookies_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_GetAllCookies_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.getCookieList = function() {
    return CookieManagerProxy.prototype.getCookieList
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.getCookieList = function(url, cookieOptions) {
    var params_ = new CookieManager_GetCookieList_Params();
    params_.url = url;
    params_.cookieOptions = cookieOptions;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_GetCookieList_Name,
          codec.align(CookieManager_GetCookieList_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_GetCookieList_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_GetCookieList_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.setCanonicalCookie = function() {
    return CookieManagerProxy.prototype.setCanonicalCookie
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.setCanonicalCookie = function(cookie, sourceScheme, cookieOptions) {
    var params_ = new CookieManager_SetCanonicalCookie_Params();
    params_.cookie = cookie;
    params_.sourceScheme = sourceScheme;
    params_.cookieOptions = cookieOptions;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_SetCanonicalCookie_Name,
          codec.align(CookieManager_SetCanonicalCookie_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_SetCanonicalCookie_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_SetCanonicalCookie_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.deleteCanonicalCookie = function() {
    return CookieManagerProxy.prototype.deleteCanonicalCookie
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.deleteCanonicalCookie = function(cookie) {
    var params_ = new CookieManager_DeleteCanonicalCookie_Params();
    params_.cookie = cookie;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_DeleteCanonicalCookie_Name,
          codec.align(CookieManager_DeleteCanonicalCookie_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_DeleteCanonicalCookie_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_DeleteCanonicalCookie_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.deleteCookies = function() {
    return CookieManagerProxy.prototype.deleteCookies
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.deleteCookies = function(filter) {
    var params_ = new CookieManager_DeleteCookies_Params();
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_DeleteCookies_Name,
          codec.align(CookieManager_DeleteCookies_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_DeleteCookies_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_DeleteCookies_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.addCookieChangeListener = function() {
    return CookieManagerProxy.prototype.addCookieChangeListener
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.addCookieChangeListener = function(url, name, listener) {
    var params_ = new CookieManager_AddCookieChangeListener_Params();
    params_.url = url;
    params_.name = name;
    params_.listener = listener;
    var builder = new codec.MessageV0Builder(
        kCookieManager_AddCookieChangeListener_Name,
        codec.align(CookieManager_AddCookieChangeListener_Params.encodedSize));
    builder.encodeStruct(CookieManager_AddCookieChangeListener_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CookieManagerPtr.prototype.addGlobalChangeListener = function() {
    return CookieManagerProxy.prototype.addGlobalChangeListener
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.addGlobalChangeListener = function(notificationPointer) {
    var params_ = new CookieManager_AddGlobalChangeListener_Params();
    params_.notificationPointer = notificationPointer;
    var builder = new codec.MessageV0Builder(
        kCookieManager_AddGlobalChangeListener_Name,
        codec.align(CookieManager_AddGlobalChangeListener_Params.encodedSize));
    builder.encodeStruct(CookieManager_AddGlobalChangeListener_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CookieManagerPtr.prototype.cloneInterface = function() {
    return CookieManagerProxy.prototype.cloneInterface
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.cloneInterface = function(newInterface) {
    var params_ = new CookieManager_CloneInterface_Params();
    params_.newInterface = newInterface;
    var builder = new codec.MessageV0Builder(
        kCookieManager_CloneInterface_Name,
        codec.align(CookieManager_CloneInterface_Params.encodedSize));
    builder.encodeStruct(CookieManager_CloneInterface_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CookieManagerPtr.prototype.flushCookieStore = function() {
    return CookieManagerProxy.prototype.flushCookieStore
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.flushCookieStore = function() {
    var params_ = new CookieManager_FlushCookieStore_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_FlushCookieStore_Name,
          codec.align(CookieManager_FlushCookieStore_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_FlushCookieStore_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_FlushCookieStore_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.allowFileSchemeCookies = function() {
    return CookieManagerProxy.prototype.allowFileSchemeCookies
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.allowFileSchemeCookies = function(allow) {
    var params_ = new CookieManager_AllowFileSchemeCookies_Params();
    params_.allow = allow;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCookieManager_AllowFileSchemeCookies_Name,
          codec.align(CookieManager_AllowFileSchemeCookies_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CookieManager_AllowFileSchemeCookies_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CookieManager_AllowFileSchemeCookies_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CookieManagerPtr.prototype.setContentSettings = function() {
    return CookieManagerProxy.prototype.setContentSettings
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.setContentSettings = function(settings) {
    var params_ = new CookieManager_SetContentSettings_Params();
    params_.settings = settings;
    var builder = new codec.MessageV0Builder(
        kCookieManager_SetContentSettings_Name,
        codec.align(CookieManager_SetContentSettings_Params.encodedSize));
    builder.encodeStruct(CookieManager_SetContentSettings_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CookieManagerPtr.prototype.setForceKeepSessionState = function() {
    return CookieManagerProxy.prototype.setForceKeepSessionState
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.setForceKeepSessionState = function() {
    var params_ = new CookieManager_SetForceKeepSessionState_Params();
    var builder = new codec.MessageV0Builder(
        kCookieManager_SetForceKeepSessionState_Name,
        codec.align(CookieManager_SetForceKeepSessionState_Params.encodedSize));
    builder.encodeStruct(CookieManager_SetForceKeepSessionState_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CookieManagerPtr.prototype.blockThirdPartyCookies = function() {
    return CookieManagerProxy.prototype.blockThirdPartyCookies
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieManagerProxy.prototype.blockThirdPartyCookies = function(block) {
    var params_ = new CookieManager_BlockThirdPartyCookies_Params();
    params_.block = block;
    var builder = new codec.MessageV0Builder(
        kCookieManager_BlockThirdPartyCookies_Name,
        codec.align(CookieManager_BlockThirdPartyCookies_Params.encodedSize));
    builder.encodeStruct(CookieManager_BlockThirdPartyCookies_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CookieManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  CookieManagerStub.prototype.getAllCookies = function() {
    return this.delegate_ && this.delegate_.getAllCookies && this.delegate_.getAllCookies();
  }
  CookieManagerStub.prototype.getCookieList = function(url, cookieOptions) {
    return this.delegate_ && this.delegate_.getCookieList && this.delegate_.getCookieList(url, cookieOptions);
  }
  CookieManagerStub.prototype.setCanonicalCookie = function(cookie, sourceScheme, cookieOptions) {
    return this.delegate_ && this.delegate_.setCanonicalCookie && this.delegate_.setCanonicalCookie(cookie, sourceScheme, cookieOptions);
  }
  CookieManagerStub.prototype.deleteCanonicalCookie = function(cookie) {
    return this.delegate_ && this.delegate_.deleteCanonicalCookie && this.delegate_.deleteCanonicalCookie(cookie);
  }
  CookieManagerStub.prototype.deleteCookies = function(filter) {
    return this.delegate_ && this.delegate_.deleteCookies && this.delegate_.deleteCookies(filter);
  }
  CookieManagerStub.prototype.addCookieChangeListener = function(url, name, listener) {
    return this.delegate_ && this.delegate_.addCookieChangeListener && this.delegate_.addCookieChangeListener(url, name, listener);
  }
  CookieManagerStub.prototype.addGlobalChangeListener = function(notificationPointer) {
    return this.delegate_ && this.delegate_.addGlobalChangeListener && this.delegate_.addGlobalChangeListener(notificationPointer);
  }
  CookieManagerStub.prototype.cloneInterface = function(newInterface) {
    return this.delegate_ && this.delegate_.cloneInterface && this.delegate_.cloneInterface(newInterface);
  }
  CookieManagerStub.prototype.flushCookieStore = function() {
    return this.delegate_ && this.delegate_.flushCookieStore && this.delegate_.flushCookieStore();
  }
  CookieManagerStub.prototype.allowFileSchemeCookies = function(allow) {
    return this.delegate_ && this.delegate_.allowFileSchemeCookies && this.delegate_.allowFileSchemeCookies(allow);
  }
  CookieManagerStub.prototype.setContentSettings = function(settings) {
    return this.delegate_ && this.delegate_.setContentSettings && this.delegate_.setContentSettings(settings);
  }
  CookieManagerStub.prototype.setForceKeepSessionState = function() {
    return this.delegate_ && this.delegate_.setForceKeepSessionState && this.delegate_.setForceKeepSessionState();
  }
  CookieManagerStub.prototype.blockThirdPartyCookies = function(block) {
    return this.delegate_ && this.delegate_.blockThirdPartyCookies && this.delegate_.blockThirdPartyCookies(block);
  }

  CookieManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCookieManager_AddCookieChangeListener_Name:
      var params = reader.decodeStruct(CookieManager_AddCookieChangeListener_Params);
      this.addCookieChangeListener(params.url, params.name, params.listener);
      return true;
    case kCookieManager_AddGlobalChangeListener_Name:
      var params = reader.decodeStruct(CookieManager_AddGlobalChangeListener_Params);
      this.addGlobalChangeListener(params.notificationPointer);
      return true;
    case kCookieManager_CloneInterface_Name:
      var params = reader.decodeStruct(CookieManager_CloneInterface_Params);
      this.cloneInterface(params.newInterface);
      return true;
    case kCookieManager_SetContentSettings_Name:
      var params = reader.decodeStruct(CookieManager_SetContentSettings_Params);
      this.setContentSettings(params.settings);
      return true;
    case kCookieManager_SetForceKeepSessionState_Name:
      var params = reader.decodeStruct(CookieManager_SetForceKeepSessionState_Params);
      this.setForceKeepSessionState();
      return true;
    case kCookieManager_BlockThirdPartyCookies_Name:
      var params = reader.decodeStruct(CookieManager_BlockThirdPartyCookies_Params);
      this.blockThirdPartyCookies(params.block);
      return true;
    default:
      return false;
    }
  };

  CookieManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCookieManager_GetAllCookies_Name:
      var params = reader.decodeStruct(CookieManager_GetAllCookies_Params);
      this.getAllCookies().then(function(response) {
        var responseParams =
            new CookieManager_GetAllCookies_ResponseParams();
        responseParams.cookies = response.cookies;
        var builder = new codec.MessageV1Builder(
            kCookieManager_GetAllCookies_Name,
            codec.align(CookieManager_GetAllCookies_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_GetAllCookies_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCookieManager_GetCookieList_Name:
      var params = reader.decodeStruct(CookieManager_GetCookieList_Params);
      this.getCookieList(params.url, params.cookieOptions).then(function(response) {
        var responseParams =
            new CookieManager_GetCookieList_ResponseParams();
        responseParams.cookies = response.cookies;
        responseParams.excludedCookies = response.excludedCookies;
        var builder = new codec.MessageV1Builder(
            kCookieManager_GetCookieList_Name,
            codec.align(CookieManager_GetCookieList_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_GetCookieList_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCookieManager_SetCanonicalCookie_Name:
      var params = reader.decodeStruct(CookieManager_SetCanonicalCookie_Params);
      this.setCanonicalCookie(params.cookie, params.sourceScheme, params.cookieOptions).then(function(response) {
        var responseParams =
            new CookieManager_SetCanonicalCookie_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kCookieManager_SetCanonicalCookie_Name,
            codec.align(CookieManager_SetCanonicalCookie_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_SetCanonicalCookie_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCookieManager_DeleteCanonicalCookie_Name:
      var params = reader.decodeStruct(CookieManager_DeleteCanonicalCookie_Params);
      this.deleteCanonicalCookie(params.cookie).then(function(response) {
        var responseParams =
            new CookieManager_DeleteCanonicalCookie_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kCookieManager_DeleteCanonicalCookie_Name,
            codec.align(CookieManager_DeleteCanonicalCookie_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_DeleteCanonicalCookie_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCookieManager_DeleteCookies_Name:
      var params = reader.decodeStruct(CookieManager_DeleteCookies_Params);
      this.deleteCookies(params.filter).then(function(response) {
        var responseParams =
            new CookieManager_DeleteCookies_ResponseParams();
        responseParams.numDeleted = response.numDeleted;
        var builder = new codec.MessageV1Builder(
            kCookieManager_DeleteCookies_Name,
            codec.align(CookieManager_DeleteCookies_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_DeleteCookies_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCookieManager_FlushCookieStore_Name:
      var params = reader.decodeStruct(CookieManager_FlushCookieStore_Params);
      this.flushCookieStore().then(function(response) {
        var responseParams =
            new CookieManager_FlushCookieStore_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kCookieManager_FlushCookieStore_Name,
            codec.align(CookieManager_FlushCookieStore_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_FlushCookieStore_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCookieManager_AllowFileSchemeCookies_Name:
      var params = reader.decodeStruct(CookieManager_AllowFileSchemeCookies_Params);
      this.allowFileSchemeCookies(params.allow).then(function(response) {
        var responseParams =
            new CookieManager_AllowFileSchemeCookies_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kCookieManager_AllowFileSchemeCookies_Name,
            codec.align(CookieManager_AllowFileSchemeCookies_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CookieManager_AllowFileSchemeCookies_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCookieManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCookieManager_GetAllCookies_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_GetAllCookies_Params;
      break;
      case kCookieManager_GetCookieList_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_GetCookieList_Params;
      break;
      case kCookieManager_SetCanonicalCookie_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_SetCanonicalCookie_Params;
      break;
      case kCookieManager_DeleteCanonicalCookie_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_DeleteCanonicalCookie_Params;
      break;
      case kCookieManager_DeleteCookies_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_DeleteCookies_Params;
      break;
      case kCookieManager_AddCookieChangeListener_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieManager_AddCookieChangeListener_Params;
      break;
      case kCookieManager_AddGlobalChangeListener_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieManager_AddGlobalChangeListener_Params;
      break;
      case kCookieManager_CloneInterface_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieManager_CloneInterface_Params;
      break;
      case kCookieManager_FlushCookieStore_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_FlushCookieStore_Params;
      break;
      case kCookieManager_AllowFileSchemeCookies_Name:
        if (message.expectsResponse())
          paramsClass = CookieManager_AllowFileSchemeCookies_Params;
      break;
      case kCookieManager_SetContentSettings_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieManager_SetContentSettings_Params;
      break;
      case kCookieManager_SetForceKeepSessionState_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieManager_SetForceKeepSessionState_Params;
      break;
      case kCookieManager_BlockThirdPartyCookies_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieManager_BlockThirdPartyCookies_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCookieManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCookieManager_GetAllCookies_Name:
        if (message.isResponse())
          paramsClass = CookieManager_GetAllCookies_ResponseParams;
        break;
      case kCookieManager_GetCookieList_Name:
        if (message.isResponse())
          paramsClass = CookieManager_GetCookieList_ResponseParams;
        break;
      case kCookieManager_SetCanonicalCookie_Name:
        if (message.isResponse())
          paramsClass = CookieManager_SetCanonicalCookie_ResponseParams;
        break;
      case kCookieManager_DeleteCanonicalCookie_Name:
        if (message.isResponse())
          paramsClass = CookieManager_DeleteCanonicalCookie_ResponseParams;
        break;
      case kCookieManager_DeleteCookies_Name:
        if (message.isResponse())
          paramsClass = CookieManager_DeleteCookies_ResponseParams;
        break;
      case kCookieManager_FlushCookieStore_Name:
        if (message.isResponse())
          paramsClass = CookieManager_FlushCookieStore_ResponseParams;
        break;
      case kCookieManager_AllowFileSchemeCookies_Name:
        if (message.isResponse())
          paramsClass = CookieManager_AllowFileSchemeCookies_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CookieManager = {
    name: 'network.mojom.CookieManager',
    kVersion: 0,
    ptrClass: CookieManagerPtr,
    proxyClass: CookieManagerProxy,
    stubClass: CookieManagerStub,
    validateRequest: validateCookieManagerRequest,
    validateResponse: validateCookieManagerResponse,
  };
  CookieManagerStub.prototype.validator = validateCookieManagerRequest;
  CookieManagerProxy.prototype.validator = validateCookieManagerResponse;
  exports.CookiePriority = CookiePriority;
  exports.CookieSameSite = CookieSameSite;
  exports.CookieSameSiteContext = CookieSameSiteContext;
  exports.CookieInclusionStatus = CookieInclusionStatus;
  exports.CookieChangeCause = CookieChangeCause;
  exports.CookieDeletionSessionControl = CookieDeletionSessionControl;
  exports.CookieManagerParams = CookieManagerParams;
  exports.CookieOptions = CookieOptions;
  exports.CanonicalCookie = CanonicalCookie;
  exports.CookieWithStatus = CookieWithStatus;
  exports.CookieAndLineWithStatus = CookieAndLineWithStatus;
  exports.CookieDeletionFilter = CookieDeletionFilter;
  exports.CookieChangeListener = CookieChangeListener;
  exports.CookieChangeListenerPtr = CookieChangeListenerPtr;
  exports.CookieChangeListenerAssociatedPtr = CookieChangeListenerAssociatedPtr;
  exports.CookieManager = CookieManager;
  exports.CookieManagerPtr = CookieManagerPtr;
  exports.CookieManagerAssociatedPtr = CookieManagerAssociatedPtr;
})();