// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/manifest/manifest.mojom';
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
  var screen_orientation_lock_types$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/screen_orientation_lock_types.mojom', '../../../../../services/device/public/mojom/screen_orientation_lock_types.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var display_mode$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/manifest/display_mode.mojom', 'display_mode.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function Manifest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Manifest.prototype.initDefaults_ = function() {
    this.name = null;
    this.shortName = null;
    this.startUrl = null;
    this.display = 0;
    this.orientation = 0;
    this.icons = null;
    this.shareTarget = null;
    this.fileHandler = null;
    this.relatedApplications = null;
    this.preferRelatedApplications = false;
    this.hasThemeColor = false;
    this.hasBackgroundColor = false;
    this.themeColor = 0;
    this.backgroundColor = 0;
    this.splashScreenUrl = null;
    this.gcmSenderId = null;
    this.scope = null;
  };
  Manifest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Manifest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 112}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.name
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.shortName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.startUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.display
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, display_mode$.DisplayMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.orientation
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, screen_orientation_lock_types$.ScreenOrientationLockType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.icons
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(ManifestImageResource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.shareTarget
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, ManifestShareTarget, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.fileHandler
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, ManifestFileHandler, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.relatedApplications
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 8, new codec.PointerTo(ManifestRelatedApplication), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;







    // validate Manifest.splashScreenUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 80, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.gcmSenderId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Manifest.scope
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Manifest.encodedSize = codec.kStructHeaderSize + 104;

  Manifest.decode = function(decoder) {
    var packed;
    var val = new Manifest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStructPointer(string16$.String16);
    val.shortName = decoder.decodeStructPointer(string16$.String16);
    val.startUrl = decoder.decodeStructPointer(url$.Url);
    val.display = decoder.decodeStruct(codec.Int32);
    val.orientation = decoder.decodeStruct(codec.Int32);
    val.icons = decoder.decodeArrayPointer(new codec.PointerTo(ManifestImageResource));
    val.shareTarget = decoder.decodeStructPointer(ManifestShareTarget);
    val.fileHandler = decoder.decodeStructPointer(ManifestFileHandler);
    val.relatedApplications = decoder.decodeArrayPointer(new codec.PointerTo(ManifestRelatedApplication));
    packed = decoder.readUint8();
    val.preferRelatedApplications = (packed >> 0) & 1 ? true : false;
    val.hasThemeColor = (packed >> 1) & 1 ? true : false;
    val.hasBackgroundColor = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.themeColor = decoder.decodeStruct(codec.Uint32);
    val.backgroundColor = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.splashScreenUrl = decoder.decodeStructPointer(url$.Url);
    val.gcmSenderId = decoder.decodeStructPointer(string16$.String16);
    val.scope = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  Manifest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Manifest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.name);
    encoder.encodeStructPointer(string16$.String16, val.shortName);
    encoder.encodeStructPointer(url$.Url, val.startUrl);
    encoder.encodeStruct(codec.Int32, val.display);
    encoder.encodeStruct(codec.Int32, val.orientation);
    encoder.encodeArrayPointer(new codec.PointerTo(ManifestImageResource), val.icons);
    encoder.encodeStructPointer(ManifestShareTarget, val.shareTarget);
    encoder.encodeStructPointer(ManifestFileHandler, val.fileHandler);
    encoder.encodeArrayPointer(new codec.PointerTo(ManifestRelatedApplication), val.relatedApplications);
    packed = 0;
    packed |= (val.preferRelatedApplications & 1) << 0
    packed |= (val.hasThemeColor & 1) << 1
    packed |= (val.hasBackgroundColor & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.themeColor);
    encoder.encodeStruct(codec.Uint32, val.backgroundColor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.splashScreenUrl);
    encoder.encodeStructPointer(string16$.String16, val.gcmSenderId);
    encoder.encodeStructPointer(url$.Url, val.scope);
  };
  function ManifestImageResource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  ManifestImageResource.Purpose = {};
  ManifestImageResource.Purpose.ANY = 0;
  ManifestImageResource.Purpose.BADGE = ManifestImageResource.Purpose.ANY + 1;
  ManifestImageResource.Purpose.MASKABLE = ManifestImageResource.Purpose.BADGE + 1;
  ManifestImageResource.Purpose.MIN_VALUE = 0,
  ManifestImageResource.Purpose.MAX_VALUE = 2,

  ManifestImageResource.Purpose.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ManifestImageResource.Purpose.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  ManifestImageResource.prototype.initDefaults_ = function() {
    this.src = null;
    this.type = null;
    this.sizes = null;
    this.purpose = null;
  };
  ManifestImageResource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestImageResource.validate = function(messageValidator, offset) {
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


    // validate ManifestImageResource.src
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestImageResource.type
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestImageResource.sizes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(geometry$.Size), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestImageResource.purpose
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, new codec.Enum(ManifestImageResource.Purpose), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestImageResource.encodedSize = codec.kStructHeaderSize + 32;

  ManifestImageResource.decode = function(decoder) {
    var packed;
    var val = new ManifestImageResource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.src = decoder.decodeStructPointer(url$.Url);
    val.type = decoder.decodeStructPointer(string16$.String16);
    val.sizes = decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Size));
    val.purpose = decoder.decodeArrayPointer(new codec.Enum(ManifestImageResource.Purpose));
    return val;
  };

  ManifestImageResource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestImageResource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.src);
    encoder.encodeStructPointer(string16$.String16, val.type);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Size), val.sizes);
    encoder.encodeArrayPointer(new codec.Enum(ManifestImageResource.Purpose), val.purpose);
  };
  function ManifestFileFilter(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestFileFilter.prototype.initDefaults_ = function() {
    this.name = null;
    this.accept = null;
  };
  ManifestFileFilter.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestFileFilter.validate = function(messageValidator, offset) {
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


    // validate ManifestFileFilter.name
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestFileFilter.accept
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(string16$.String16), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestFileFilter.encodedSize = codec.kStructHeaderSize + 16;

  ManifestFileFilter.decode = function(decoder) {
    var packed;
    var val = new ManifestFileFilter();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStructPointer(string16$.String16);
    val.accept = decoder.decodeArrayPointer(new codec.PointerTo(string16$.String16));
    return val;
  };

  ManifestFileFilter.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestFileFilter.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.name);
    encoder.encodeArrayPointer(new codec.PointerTo(string16$.String16), val.accept);
  };
  function ManifestRelatedApplication(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestRelatedApplication.prototype.initDefaults_ = function() {
    this.platform = null;
    this.url = null;
    this.id = null;
  };
  ManifestRelatedApplication.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestRelatedApplication.validate = function(messageValidator, offset) {
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


    // validate ManifestRelatedApplication.platform
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestRelatedApplication.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestRelatedApplication.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestRelatedApplication.encodedSize = codec.kStructHeaderSize + 24;

  ManifestRelatedApplication.decode = function(decoder) {
    var packed;
    var val = new ManifestRelatedApplication();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.platform = decoder.decodeStructPointer(string16$.String16);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.id = decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  ManifestRelatedApplication.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestRelatedApplication.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.platform);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(string16$.String16, val.id);
  };
  function ManifestShareTargetParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestShareTargetParams.prototype.initDefaults_ = function() {
    this.title = null;
    this.text = null;
    this.url = null;
    this.files = null;
  };
  ManifestShareTargetParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestShareTargetParams.validate = function(messageValidator, offset) {
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


    // validate ManifestShareTargetParams.title
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestShareTargetParams.text
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestShareTargetParams.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestShareTargetParams.files
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(ManifestFileFilter), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestShareTargetParams.encodedSize = codec.kStructHeaderSize + 32;

  ManifestShareTargetParams.decode = function(decoder) {
    var packed;
    var val = new ManifestShareTargetParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStructPointer(string16$.String16);
    val.text = decoder.decodeStructPointer(string16$.String16);
    val.url = decoder.decodeStructPointer(string16$.String16);
    val.files = decoder.decodeArrayPointer(new codec.PointerTo(ManifestFileFilter));
    return val;
  };

  ManifestShareTargetParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestShareTargetParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.title);
    encoder.encodeStructPointer(string16$.String16, val.text);
    encoder.encodeStructPointer(string16$.String16, val.url);
    encoder.encodeArrayPointer(new codec.PointerTo(ManifestFileFilter), val.files);
  };
  function ManifestShareTarget(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  ManifestShareTarget.Method = {};
  ManifestShareTarget.Method.kGet = 0;
  ManifestShareTarget.Method.kPost = ManifestShareTarget.Method.kGet + 1;
  ManifestShareTarget.Method.MIN_VALUE = 0,
  ManifestShareTarget.Method.MAX_VALUE = 1,

  ManifestShareTarget.Method.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  ManifestShareTarget.Method.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  ManifestShareTarget.Enctype = {};
  ManifestShareTarget.Enctype.kApplication = 0;
  ManifestShareTarget.Enctype.kMultipart = ManifestShareTarget.Enctype.kApplication + 1;
  ManifestShareTarget.Enctype.MIN_VALUE = 0,
  ManifestShareTarget.Enctype.MAX_VALUE = 1,

  ManifestShareTarget.Enctype.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  ManifestShareTarget.Enctype.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  ManifestShareTarget.prototype.initDefaults_ = function() {
    this.action = null;
    this.method = 0;
    this.enctype = 0;
    this.params = null;
  };
  ManifestShareTarget.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestShareTarget.validate = function(messageValidator, offset) {
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


    // validate ManifestShareTarget.action
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestShareTarget.method
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ManifestShareTarget.Method);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestShareTarget.enctype
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ManifestShareTarget.Enctype);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestShareTarget.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ManifestShareTargetParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestShareTarget.encodedSize = codec.kStructHeaderSize + 24;

  ManifestShareTarget.decode = function(decoder) {
    var packed;
    var val = new ManifestShareTarget();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStructPointer(url$.Url);
    val.method = decoder.decodeStruct(codec.Int32);
    val.enctype = decoder.decodeStruct(codec.Int32);
    val.params = decoder.decodeStructPointer(ManifestShareTargetParams);
    return val;
  };

  ManifestShareTarget.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestShareTarget.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.action);
    encoder.encodeStruct(codec.Int32, val.method);
    encoder.encodeStruct(codec.Int32, val.enctype);
    encoder.encodeStructPointer(ManifestShareTargetParams, val.params);
  };
  function ManifestFileHandler(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestFileHandler.prototype.initDefaults_ = function() {
    this.action = null;
    this.files = null;
  };
  ManifestFileHandler.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestFileHandler.validate = function(messageValidator, offset) {
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


    // validate ManifestFileHandler.action
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestFileHandler.files
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(ManifestFileFilter), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestFileHandler.encodedSize = codec.kStructHeaderSize + 16;

  ManifestFileHandler.decode = function(decoder) {
    var packed;
    var val = new ManifestFileHandler();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStructPointer(url$.Url);
    val.files = decoder.decodeArrayPointer(new codec.PointerTo(ManifestFileFilter));
    return val;
  };

  ManifestFileHandler.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestFileHandler.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.action);
    encoder.encodeArrayPointer(new codec.PointerTo(ManifestFileFilter), val.files);
  };
  function ManifestDebugInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestDebugInfo.prototype.initDefaults_ = function() {
    this.errors = null;
    this.rawManifest = null;
  };
  ManifestDebugInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestDebugInfo.validate = function(messageValidator, offset) {
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


    // validate ManifestDebugInfo.errors
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ManifestError), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestDebugInfo.rawManifest
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestDebugInfo.encodedSize = codec.kStructHeaderSize + 16;

  ManifestDebugInfo.decode = function(decoder) {
    var packed;
    var val = new ManifestDebugInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errors = decoder.decodeArrayPointer(new codec.PointerTo(ManifestError));
    val.rawManifest = decoder.decodeStruct(codec.String);
    return val;
  };

  ManifestDebugInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestDebugInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ManifestError), val.errors);
    encoder.encodeStruct(codec.String, val.rawManifest);
  };
  function ManifestError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestError.prototype.initDefaults_ = function() {
    this.message = null;
    this.critical = false;
    this.line = 0;
    this.column = 0;
  };
  ManifestError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestError.validate = function(messageValidator, offset) {
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


    // validate ManifestError.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  ManifestError.encodedSize = codec.kStructHeaderSize + 24;

  ManifestError.decode = function(decoder) {
    var packed;
    var val = new ManifestError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.critical = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.line = decoder.decodeStruct(codec.Uint32);
    val.column = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ManifestError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
    packed = 0;
    packed |= (val.critical & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.line);
    encoder.encodeStruct(codec.Uint32, val.column);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.Manifest = Manifest;
  exports.ManifestImageResource = ManifestImageResource;
  exports.ManifestFileFilter = ManifestFileFilter;
  exports.ManifestRelatedApplication = ManifestRelatedApplication;
  exports.ManifestShareTargetParams = ManifestShareTargetParams;
  exports.ManifestShareTarget = ManifestShareTarget;
  exports.ManifestFileHandler = ManifestFileHandler;
  exports.ManifestDebugInfo = ManifestDebugInfo;
  exports.ManifestError = ManifestError;
})();