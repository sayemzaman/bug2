// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/feature_policy/feature_policy.mojom';
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
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }


  var WebSandboxFlags = {};
  WebSandboxFlags.kNone = 0;
  WebSandboxFlags.kNavigation = 1;
  WebSandboxFlags.kPlugins = 2;
  WebSandboxFlags.kOrigin = 4;
  WebSandboxFlags.kForms = 8;
  WebSandboxFlags.kScripts = 16;
  WebSandboxFlags.kTopNavigation = 32;
  WebSandboxFlags.kPopups = 64;
  WebSandboxFlags.kAutomaticFeatures = 128;
  WebSandboxFlags.kPointerLock = 256;
  WebSandboxFlags.kDocumentDomain = 512;
  WebSandboxFlags.kOrientationLock = 1024;
  WebSandboxFlags.kPropagatesToAuxiliaryBrowsingContexts = 2048;
  WebSandboxFlags.kModals = 4096;
  WebSandboxFlags.kPresentationController = 8192;
  WebSandboxFlags.kTopNavigationByUserActivation = 16384;
  WebSandboxFlags.kDownloads = 32768;
  WebSandboxFlags.MIN_VALUE = 0,
  WebSandboxFlags.MAX_VALUE = 32768,

  WebSandboxFlags.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 4:
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
      return true;
    }
    return false;
  };

  WebSandboxFlags.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FeaturePolicyFeature = {};
  FeaturePolicyFeature.kNotFound = 0;
  FeaturePolicyFeature.kAutoplay = 1;
  FeaturePolicyFeature.kCamera = 2;
  FeaturePolicyFeature.kEncryptedMedia = 3;
  FeaturePolicyFeature.kFullscreen = 4;
  FeaturePolicyFeature.kGeolocation = 5;
  FeaturePolicyFeature.kMicrophone = 6;
  FeaturePolicyFeature.kMidiFeature = 7;
  FeaturePolicyFeature.kPayment = 8;
  FeaturePolicyFeature.kSpeaker = 9;
  FeaturePolicyFeature.kDocumentCookie = 10;
  FeaturePolicyFeature.kDocumentDomain = 11;
  FeaturePolicyFeature.kSyncScript = 12;
  FeaturePolicyFeature.kSyncXHR = 13;
  FeaturePolicyFeature.kUsb = 14;
  FeaturePolicyFeature.kAccessibilityEvents = 15;
  FeaturePolicyFeature.kWebVr = 16;
  FeaturePolicyFeature.kAccelerometer = 17;
  FeaturePolicyFeature.kAmbientLightSensor = 18;
  FeaturePolicyFeature.kGyroscope = 19;
  FeaturePolicyFeature.kMagnetometer = 20;
  FeaturePolicyFeature.kUnsizedMedia = 21;
  FeaturePolicyFeature.kOversizedImages = 25;
  FeaturePolicyFeature.kPictureInPicture = 26;
  FeaturePolicyFeature.kVerticalScroll = 27;
  FeaturePolicyFeature.kDocumentWrite = 28;
  FeaturePolicyFeature.kLazyLoad = 29;
  FeaturePolicyFeature.kLayoutAnimations = 30;
  FeaturePolicyFeature.kWakeLock = 31;
  FeaturePolicyFeature.kFontDisplay = 32;
  FeaturePolicyFeature.kTopNavigation = 33;
  FeaturePolicyFeature.kFormSubmission = 34;
  FeaturePolicyFeature.kScript = 35;
  FeaturePolicyFeature.kPopups = 36;
  FeaturePolicyFeature.kPointerLock = 37;
  FeaturePolicyFeature.kModals = 38;
  FeaturePolicyFeature.kOrientationLock = 39;
  FeaturePolicyFeature.kPresentation = 40;
  FeaturePolicyFeature.kFrobulate = 41;
  FeaturePolicyFeature.kSerial = 42;
  FeaturePolicyFeature.kHid = 43;
  FeaturePolicyFeature.kIdleDetection = 44;
  FeaturePolicyFeature.kUnoptimizedLossyImages = 45;
  FeaturePolicyFeature.kUnoptimizedLosslessImages = 46;
  FeaturePolicyFeature.kUnoptimizedLosslessImagesStrict = 47;
  FeaturePolicyFeature.kLoadingFrameDefaultEager = 48;
  FeaturePolicyFeature.kDownloadsWithoutUserActivation = 49;
  FeaturePolicyFeature.kExecutionWhileOutOfViewport = 50;
  FeaturePolicyFeature.kExecutionWhileNotRendered = 51;
  FeaturePolicyFeature.kFocusWithoutUserActivation = 52;
  FeaturePolicyFeature.kClientHintDPR = 53;
  FeaturePolicyFeature.kClientHintDeviceMemory = 54;
  FeaturePolicyFeature.kClientHintDownlink = 55;
  FeaturePolicyFeature.kClientHintECT = 56;
  FeaturePolicyFeature.kClientHintLang = 57;
  FeaturePolicyFeature.kClientHintRTT = 58;
  FeaturePolicyFeature.kClientHintUA = 59;
  FeaturePolicyFeature.kClientHintUAArch = 60;
  FeaturePolicyFeature.kClientHintUAModel = 61;
  FeaturePolicyFeature.kClientHintUAPlatform = 62;
  FeaturePolicyFeature.kClientHintViewportWidth = 63;
  FeaturePolicyFeature.kClientHintWidth = 64;
  FeaturePolicyFeature.MIN_VALUE = 0,
  FeaturePolicyFeature.MAX_VALUE = 64,

  FeaturePolicyFeature.isKnownEnumValue = function(value) {
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
    case 18:
    case 19:
    case 20:
    case 21:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
      return true;
    }
    return false;
  };

  FeaturePolicyFeature.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FeaturePolicyDisposition = {};
  FeaturePolicyDisposition.kEnforce = 0;
  FeaturePolicyDisposition.kReport = FeaturePolicyDisposition.kEnforce + 1;
  FeaturePolicyDisposition.MIN_VALUE = 0,
  FeaturePolicyDisposition.MAX_VALUE = 1,

  FeaturePolicyDisposition.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  FeaturePolicyDisposition.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PolicyValueType = {};
  PolicyValueType.kNull = 0;
  PolicyValueType.kBool = PolicyValueType.kNull + 1;
  PolicyValueType.kDecDouble = PolicyValueType.kBool + 1;
  PolicyValueType.MIN_VALUE = 0,
  PolicyValueType.MAX_VALUE = 2,

  PolicyValueType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PolicyValueType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PolicyValue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyValue.prototype.initDefaults_ = function() {
    this.data = null;
  };
  PolicyValue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyValue.validate = function(messageValidator, offset) {
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


    // validate PolicyValue.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, PolicyValueData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PolicyValue.encodedSize = codec.kStructHeaderSize + 16;

  PolicyValue.decode = function(decoder) {
    var packed;
    var val = new PolicyValue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(PolicyValueData);
    return val;
  };

  PolicyValue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyValue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(PolicyValueData, val.data);
  };
  function ParsedFeaturePolicyDeclaration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ParsedFeaturePolicyDeclaration.prototype.initDefaults_ = function() {
    this.feature = 0;
    this.values = null;
    this.fallbackValue = null;
    this.opaqueValue = null;
  };
  ParsedFeaturePolicyDeclaration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ParsedFeaturePolicyDeclaration.validate = function(messageValidator, offset) {
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


    // validate ParsedFeaturePolicyDeclaration.feature
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FeaturePolicyFeature);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedFeaturePolicyDeclaration.values
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, new codec.PointerTo(origin$.Origin), new codec.PointerTo(PolicyValue), false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedFeaturePolicyDeclaration.fallbackValue
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PolicyValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedFeaturePolicyDeclaration.opaqueValue
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, PolicyValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ParsedFeaturePolicyDeclaration.encodedSize = codec.kStructHeaderSize + 32;

  ParsedFeaturePolicyDeclaration.decode = function(decoder) {
    var packed;
    var val = new ParsedFeaturePolicyDeclaration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.feature = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.values = decoder.decodeMapPointer(new codec.PointerTo(origin$.Origin), new codec.PointerTo(PolicyValue));
    val.fallbackValue = decoder.decodeStructPointer(PolicyValue);
    val.opaqueValue = decoder.decodeStructPointer(PolicyValue);
    return val;
  };

  ParsedFeaturePolicyDeclaration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ParsedFeaturePolicyDeclaration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.feature);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeMapPointer(new codec.PointerTo(origin$.Origin), new codec.PointerTo(PolicyValue), val.values);
    encoder.encodeStructPointer(PolicyValue, val.fallbackValue);
    encoder.encodeStructPointer(PolicyValue, val.opaqueValue);
  };

  function PolicyValueData(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  PolicyValueData.Tags = {
    nullValue: 0,
    boolValue: 1,
    decDoubleValue: 2,
  };

  PolicyValueData.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  PolicyValueData.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "nullValue",
        "boolValue",
        "decDoubleValue",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a PolicyValueData member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(PolicyValueData.prototype, "nullValue", {
    get: function() {
      if (this.$tag != PolicyValueData.Tags.nullValue) {
        throw new ReferenceError(
            "PolicyValueData.nullValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = PolicyValueData.Tags.nullValue;
      this.$data = value;
    }
  });
  Object.defineProperty(PolicyValueData.prototype, "boolValue", {
    get: function() {
      if (this.$tag != PolicyValueData.Tags.boolValue) {
        throw new ReferenceError(
            "PolicyValueData.boolValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = PolicyValueData.Tags.boolValue;
      this.$data = value;
    }
  });
  Object.defineProperty(PolicyValueData.prototype, "decDoubleValue", {
    get: function() {
      if (this.$tag != PolicyValueData.Tags.decDoubleValue) {
        throw new ReferenceError(
            "PolicyValueData.decDoubleValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = PolicyValueData.Tags.decDoubleValue;
      this.$data = value;
    }
  });


    PolicyValueData.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case PolicyValueData.Tags.nullValue:
          encoder.writeUint8(val.nullValue ? 1 : 0);
          break;
        case PolicyValueData.Tags.boolValue:
          encoder.writeUint8(val.boolValue ? 1 : 0);
          break;
        case PolicyValueData.Tags.decDoubleValue:
          encoder.encodeStruct(codec.Double, val.decDoubleValue);
          break;
      }
      encoder.align();
    };


    PolicyValueData.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new PolicyValueData();
      var tag = decoder.readUint32();
      switch (tag) {
        case PolicyValueData.Tags.nullValue:
          result.nullValue = decoder.readUint8() ? true : false;
          break;
        case PolicyValueData.Tags.boolValue:
          result.boolValue = decoder.readUint8() ? true : false;
          break;
        case PolicyValueData.Tags.decDoubleValue:
          result.decDoubleValue = decoder.decodeStruct(codec.Double);
          break;
      }
      decoder.align();

      return result;
    };


    PolicyValueData.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case PolicyValueData.Tags.nullValue:
          

          break;
        case PolicyValueData.Tags.boolValue:
          

          break;
        case PolicyValueData.Tags.decDoubleValue:
          

          break;
      }

      return validator.validationError.NONE;
    };

  PolicyValueData.encodedSize = 16;
  exports.WebSandboxFlags = WebSandboxFlags;
  exports.FeaturePolicyFeature = FeaturePolicyFeature;
  exports.FeaturePolicyDisposition = FeaturePolicyDisposition;
  exports.PolicyValueType = PolicyValueType;
  exports.PolicyValue = PolicyValue;
  exports.ParsedFeaturePolicyDeclaration = ParsedFeaturePolicyDeclaration;
  exports.PolicyValueData = PolicyValueData;
})();