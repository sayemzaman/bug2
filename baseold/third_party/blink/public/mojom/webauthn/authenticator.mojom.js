// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/webauthn/authenticator.mojom';
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


  var AuthenticatorStatus = {};
  AuthenticatorStatus.SUCCESS = 0;
  AuthenticatorStatus.PENDING_REQUEST = AuthenticatorStatus.SUCCESS + 1;
  AuthenticatorStatus.NOT_ALLOWED_ERROR = AuthenticatorStatus.PENDING_REQUEST + 1;
  AuthenticatorStatus.INVALID_DOMAIN = AuthenticatorStatus.NOT_ALLOWED_ERROR + 1;
  AuthenticatorStatus.CREDENTIAL_EXCLUDED = AuthenticatorStatus.INVALID_DOMAIN + 1;
  AuthenticatorStatus.CREDENTIAL_NOT_RECOGNIZED = AuthenticatorStatus.CREDENTIAL_EXCLUDED + 1;
  AuthenticatorStatus.NOT_IMPLEMENTED = AuthenticatorStatus.CREDENTIAL_NOT_RECOGNIZED + 1;
  AuthenticatorStatus.NOT_FOCUSED = AuthenticatorStatus.NOT_IMPLEMENTED + 1;
  AuthenticatorStatus.RESIDENT_CREDENTIALS_UNSUPPORTED = AuthenticatorStatus.NOT_FOCUSED + 1;
  AuthenticatorStatus.USER_VERIFICATION_UNSUPPORTED = AuthenticatorStatus.RESIDENT_CREDENTIALS_UNSUPPORTED + 1;
  AuthenticatorStatus.ALGORITHM_UNSUPPORTED = AuthenticatorStatus.USER_VERIFICATION_UNSUPPORTED + 1;
  AuthenticatorStatus.EMPTY_ALLOW_CREDENTIALS = AuthenticatorStatus.ALGORITHM_UNSUPPORTED + 1;
  AuthenticatorStatus.ANDROID_NOT_SUPPORTED_ERROR = AuthenticatorStatus.EMPTY_ALLOW_CREDENTIALS + 1;
  AuthenticatorStatus.PROTECTION_POLICY_INCONSISTENT = AuthenticatorStatus.ANDROID_NOT_SUPPORTED_ERROR + 1;
  AuthenticatorStatus.ABORT_ERROR = AuthenticatorStatus.PROTECTION_POLICY_INCONSISTENT + 1;
  AuthenticatorStatus.UNKNOWN_ERROR = AuthenticatorStatus.ABORT_ERROR + 1;
  AuthenticatorStatus.MIN_VALUE = 0,
  AuthenticatorStatus.MAX_VALUE = 15,

  AuthenticatorStatus.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  AuthenticatorStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AuthenticatorTransport = {};
  AuthenticatorTransport.USB = 0;
  AuthenticatorTransport.NFC = AuthenticatorTransport.USB + 1;
  AuthenticatorTransport.BLE = AuthenticatorTransport.NFC + 1;
  AuthenticatorTransport.CABLE = AuthenticatorTransport.BLE + 1;
  AuthenticatorTransport.INTERNAL = AuthenticatorTransport.CABLE + 1;
  AuthenticatorTransport.MIN_VALUE = 0,
  AuthenticatorTransport.MAX_VALUE = 4,

  AuthenticatorTransport.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  AuthenticatorTransport.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var UserVerificationRequirement = {};
  UserVerificationRequirement.PREFERRED = 0;
  UserVerificationRequirement.REQUIRED = UserVerificationRequirement.PREFERRED + 1;
  UserVerificationRequirement.DISCOURAGED = UserVerificationRequirement.REQUIRED + 1;
  UserVerificationRequirement.MIN_VALUE = 0,
  UserVerificationRequirement.MAX_VALUE = 2,

  UserVerificationRequirement.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  UserVerificationRequirement.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AttestationConveyancePreference = {};
  AttestationConveyancePreference.NONE = 0;
  AttestationConveyancePreference.INDIRECT = AttestationConveyancePreference.NONE + 1;
  AttestationConveyancePreference.DIRECT = AttestationConveyancePreference.INDIRECT + 1;
  AttestationConveyancePreference.ENTERPRISE = AttestationConveyancePreference.DIRECT + 1;
  AttestationConveyancePreference.MIN_VALUE = 0,
  AttestationConveyancePreference.MAX_VALUE = 3,

  AttestationConveyancePreference.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  AttestationConveyancePreference.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AuthenticatorAttachment = {};
  AuthenticatorAttachment.NO_PREFERENCE = 0;
  AuthenticatorAttachment.PLATFORM = AuthenticatorAttachment.NO_PREFERENCE + 1;
  AuthenticatorAttachment.CROSS_PLATFORM = AuthenticatorAttachment.PLATFORM + 1;
  AuthenticatorAttachment.MIN_VALUE = 0,
  AuthenticatorAttachment.MAX_VALUE = 2,

  AuthenticatorAttachment.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  AuthenticatorAttachment.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ProtectionPolicy = {};
  ProtectionPolicy.UNSPECIFIED = 0;
  ProtectionPolicy.NONE = ProtectionPolicy.UNSPECIFIED + 1;
  ProtectionPolicy.UV_OR_CRED_ID_REQUIRED = ProtectionPolicy.NONE + 1;
  ProtectionPolicy.UV_REQUIRED = ProtectionPolicy.UV_OR_CRED_ID_REQUIRED + 1;
  ProtectionPolicy.MIN_VALUE = 0,
  ProtectionPolicy.MAX_VALUE = 3,

  ProtectionPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ProtectionPolicy.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PublicKeyCredentialType = {};
  PublicKeyCredentialType.PUBLIC_KEY = 0;
  PublicKeyCredentialType.MIN_VALUE = 0,
  PublicKeyCredentialType.MAX_VALUE = 0,

  PublicKeyCredentialType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
      return true;
    }
    return false;
  };

  PublicKeyCredentialType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CommonCredentialInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommonCredentialInfo.prototype.initDefaults_ = function() {
    this.id = null;
    this.rawId = null;
    this.clientDataJson = null;
  };
  CommonCredentialInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommonCredentialInfo.validate = function(messageValidator, offset) {
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


    // validate CommonCredentialInfo.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommonCredentialInfo.rawId
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommonCredentialInfo.clientDataJson
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommonCredentialInfo.encodedSize = codec.kStructHeaderSize + 24;

  CommonCredentialInfo.decode = function(decoder) {
    var packed;
    var val = new CommonCredentialInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.String);
    val.rawId = decoder.decodeArrayPointer(codec.Uint8);
    val.clientDataJson = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CommonCredentialInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommonCredentialInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeArrayPointer(codec.Uint8, val.rawId);
    encoder.encodeArrayPointer(codec.Uint8, val.clientDataJson);
  };
  function UvmEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UvmEntry.prototype.initDefaults_ = function() {
    this.userVerificationMethod = 0;
    this.keyProtectionType = 0;
    this.matcherProtectionType = 0;
  };
  UvmEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UvmEntry.validate = function(messageValidator, offset) {
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

  UvmEntry.encodedSize = codec.kStructHeaderSize + 8;

  UvmEntry.decode = function(decoder) {
    var packed;
    var val = new UvmEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.userVerificationMethod = decoder.decodeStruct(codec.Uint32);
    val.keyProtectionType = decoder.decodeStruct(codec.Uint16);
    val.matcherProtectionType = decoder.decodeStruct(codec.Uint16);
    return val;
  };

  UvmEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UvmEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.userVerificationMethod);
    encoder.encodeStruct(codec.Uint16, val.keyProtectionType);
    encoder.encodeStruct(codec.Uint16, val.matcherProtectionType);
  };
  function MakeCredentialAuthenticatorResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MakeCredentialAuthenticatorResponse.prototype.initDefaults_ = function() {
    this.info = null;
    this.attestationObject = null;
    this.transports = null;
    this.echoHmacCreateSecret = false;
    this.hmacCreateSecret = false;
    this.echoUserVerificationMethods = false;
    this.userVerificationMethods = null;
  };
  MakeCredentialAuthenticatorResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MakeCredentialAuthenticatorResponse.validate = function(messageValidator, offset) {
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


    // validate MakeCredentialAuthenticatorResponse.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CommonCredentialInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MakeCredentialAuthenticatorResponse.attestationObject
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MakeCredentialAuthenticatorResponse.transports
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, new codec.Enum(AuthenticatorTransport), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;





    // validate MakeCredentialAuthenticatorResponse.userVerificationMethods
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(UvmEntry), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MakeCredentialAuthenticatorResponse.encodedSize = codec.kStructHeaderSize + 40;

  MakeCredentialAuthenticatorResponse.decode = function(decoder) {
    var packed;
    var val = new MakeCredentialAuthenticatorResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(CommonCredentialInfo);
    val.attestationObject = decoder.decodeArrayPointer(codec.Uint8);
    val.transports = decoder.decodeArrayPointer(new codec.Enum(AuthenticatorTransport));
    packed = decoder.readUint8();
    val.echoHmacCreateSecret = (packed >> 0) & 1 ? true : false;
    val.hmacCreateSecret = (packed >> 1) & 1 ? true : false;
    val.echoUserVerificationMethods = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.userVerificationMethods = decoder.decodeArrayPointer(new codec.PointerTo(UvmEntry));
    return val;
  };

  MakeCredentialAuthenticatorResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MakeCredentialAuthenticatorResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CommonCredentialInfo, val.info);
    encoder.encodeArrayPointer(codec.Uint8, val.attestationObject);
    encoder.encodeArrayPointer(new codec.Enum(AuthenticatorTransport), val.transports);
    packed = 0;
    packed |= (val.echoHmacCreateSecret & 1) << 0
    packed |= (val.hmacCreateSecret & 1) << 1
    packed |= (val.echoUserVerificationMethods & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(UvmEntry), val.userVerificationMethods);
  };
  function GetAssertionAuthenticatorResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GetAssertionAuthenticatorResponse.prototype.initDefaults_ = function() {
    this.info = null;
    this.authenticatorData = null;
    this.signature = null;
    this.userHandle = null;
    this.echoAppidExtension = false;
    this.appidExtension = false;
    this.echoUserVerificationMethods = false;
    this.userVerificationMethods = null;
  };
  GetAssertionAuthenticatorResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GetAssertionAuthenticatorResponse.validate = function(messageValidator, offset) {
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


    // validate GetAssertionAuthenticatorResponse.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CommonCredentialInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GetAssertionAuthenticatorResponse.authenticatorData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GetAssertionAuthenticatorResponse.signature
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GetAssertionAuthenticatorResponse.userHandle
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;





    // validate GetAssertionAuthenticatorResponse.userVerificationMethods
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(UvmEntry), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GetAssertionAuthenticatorResponse.encodedSize = codec.kStructHeaderSize + 48;

  GetAssertionAuthenticatorResponse.decode = function(decoder) {
    var packed;
    var val = new GetAssertionAuthenticatorResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(CommonCredentialInfo);
    val.authenticatorData = decoder.decodeArrayPointer(codec.Uint8);
    val.signature = decoder.decodeArrayPointer(codec.Uint8);
    val.userHandle = decoder.decodeArrayPointer(codec.Uint8);
    packed = decoder.readUint8();
    val.echoAppidExtension = (packed >> 0) & 1 ? true : false;
    val.appidExtension = (packed >> 1) & 1 ? true : false;
    val.echoUserVerificationMethods = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.userVerificationMethods = decoder.decodeArrayPointer(new codec.PointerTo(UvmEntry));
    return val;
  };

  GetAssertionAuthenticatorResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GetAssertionAuthenticatorResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CommonCredentialInfo, val.info);
    encoder.encodeArrayPointer(codec.Uint8, val.authenticatorData);
    encoder.encodeArrayPointer(codec.Uint8, val.signature);
    encoder.encodeArrayPointer(codec.Uint8, val.userHandle);
    packed = 0;
    packed |= (val.echoAppidExtension & 1) << 0
    packed |= (val.appidExtension & 1) << 1
    packed |= (val.echoUserVerificationMethods & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(UvmEntry), val.userVerificationMethods);
  };
  function PublicKeyCredentialRpEntity(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PublicKeyCredentialRpEntity.prototype.initDefaults_ = function() {
    this.id = null;
    this.name = null;
    this.icon = null;
  };
  PublicKeyCredentialRpEntity.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PublicKeyCredentialRpEntity.validate = function(messageValidator, offset) {
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


    // validate PublicKeyCredentialRpEntity.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRpEntity.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRpEntity.icon
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PublicKeyCredentialRpEntity.encodedSize = codec.kStructHeaderSize + 24;

  PublicKeyCredentialRpEntity.decode = function(decoder) {
    var packed;
    var val = new PublicKeyCredentialRpEntity();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.String);
    val.name = decoder.decodeStruct(codec.String);
    val.icon = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  PublicKeyCredentialRpEntity.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PublicKeyCredentialRpEntity.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(url$.Url, val.icon);
  };
  function PublicKeyCredentialUserEntity(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PublicKeyCredentialUserEntity.prototype.initDefaults_ = function() {
    this.id = null;
    this.name = null;
    this.icon = null;
    this.displayName = null;
  };
  PublicKeyCredentialUserEntity.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PublicKeyCredentialUserEntity.validate = function(messageValidator, offset) {
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


    // validate PublicKeyCredentialUserEntity.id
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialUserEntity.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialUserEntity.icon
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialUserEntity.displayName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PublicKeyCredentialUserEntity.encodedSize = codec.kStructHeaderSize + 32;

  PublicKeyCredentialUserEntity.decode = function(decoder) {
    var packed;
    var val = new PublicKeyCredentialUserEntity();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeArrayPointer(codec.Uint8);
    val.name = decoder.decodeStruct(codec.String);
    val.icon = decoder.decodeStructPointer(url$.Url);
    val.displayName = decoder.decodeStruct(codec.String);
    return val;
  };

  PublicKeyCredentialUserEntity.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PublicKeyCredentialUserEntity.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.id);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(url$.Url, val.icon);
    encoder.encodeStruct(codec.String, val.displayName);
  };
  function PublicKeyCredentialParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PublicKeyCredentialParameters.prototype.initDefaults_ = function() {
    this.type = 0;
    this.algorithmIdentifier = 0;
  };
  PublicKeyCredentialParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PublicKeyCredentialParameters.validate = function(messageValidator, offset) {
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


    // validate PublicKeyCredentialParameters.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PublicKeyCredentialType);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PublicKeyCredentialParameters.encodedSize = codec.kStructHeaderSize + 8;

  PublicKeyCredentialParameters.decode = function(decoder) {
    var packed;
    var val = new PublicKeyCredentialParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.algorithmIdentifier = decoder.decodeStruct(codec.Int32);
    return val;
  };

  PublicKeyCredentialParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PublicKeyCredentialParameters.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.algorithmIdentifier);
  };
  function CableAuthentication(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CableAuthentication.prototype.initDefaults_ = function() {
    this.version = 0;
    this.clientEid = null;
    this.authenticatorEid = null;
    this.sessionPreKey = null;
  };
  CableAuthentication.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CableAuthentication.validate = function(messageValidator, offset) {
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



    // validate CableAuthentication.clientEid
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [16], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CableAuthentication.authenticatorEid
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [16], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CableAuthentication.sessionPreKey
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Uint8, false, [32], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CableAuthentication.encodedSize = codec.kStructHeaderSize + 32;

  CableAuthentication.decode = function(decoder) {
    var packed;
    var val = new CableAuthentication();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.clientEid = decoder.decodeArrayPointer(codec.Uint8);
    val.authenticatorEid = decoder.decodeArrayPointer(codec.Uint8);
    val.sessionPreKey = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CableAuthentication.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CableAuthentication.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.clientEid);
    encoder.encodeArrayPointer(codec.Uint8, val.authenticatorEid);
    encoder.encodeArrayPointer(codec.Uint8, val.sessionPreKey);
  };
  function CableRegistration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CableRegistration.prototype.initDefaults_ = function() {
    this.versions = null;
    this.relyingPartyPublicKey = null;
  };
  CableRegistration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CableRegistration.validate = function(messageValidator, offset) {
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


    // validate CableRegistration.versions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CableRegistration.relyingPartyPublicKey
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [65], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CableRegistration.encodedSize = codec.kStructHeaderSize + 16;

  CableRegistration.decode = function(decoder) {
    var packed;
    var val = new CableRegistration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.versions = decoder.decodeArrayPointer(codec.Uint8);
    val.relyingPartyPublicKey = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CableRegistration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CableRegistration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.versions);
    encoder.encodeArrayPointer(codec.Uint8, val.relyingPartyPublicKey);
  };
  function PublicKeyCredentialRequestOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PublicKeyCredentialRequestOptions.prototype.initDefaults_ = function() {
    this.challenge = null;
    this.adjustedTimeout = null;
    this.relyingPartyId = null;
    this.allowCredentials = null;
    this.userVerification = 0;
    this.userVerificationMethods = false;
    this.appid = null;
    this.cableAuthenticationData = null;
  };
  PublicKeyCredentialRequestOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PublicKeyCredentialRequestOptions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.challenge
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.adjustedTimeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.relyingPartyId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.allowCredentials
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(PublicKeyCredentialDescriptor), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.userVerification
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, UserVerificationRequirement);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.appid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialRequestOptions.cableAuthenticationData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.PointerTo(CableAuthentication), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PublicKeyCredentialRequestOptions.encodedSize = codec.kStructHeaderSize + 56;

  PublicKeyCredentialRequestOptions.decode = function(decoder) {
    var packed;
    var val = new PublicKeyCredentialRequestOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.challenge = decoder.decodeArrayPointer(codec.Uint8);
    val.adjustedTimeout = decoder.decodeStructPointer(time$.TimeDelta);
    val.relyingPartyId = decoder.decodeStruct(codec.String);
    val.allowCredentials = decoder.decodeArrayPointer(new codec.PointerTo(PublicKeyCredentialDescriptor));
    val.userVerification = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.userVerificationMethods = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.appid = decoder.decodeStruct(codec.NullableString);
    val.cableAuthenticationData = decoder.decodeArrayPointer(new codec.PointerTo(CableAuthentication));
    return val;
  };

  PublicKeyCredentialRequestOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PublicKeyCredentialRequestOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.challenge);
    encoder.encodeStructPointer(time$.TimeDelta, val.adjustedTimeout);
    encoder.encodeStruct(codec.String, val.relyingPartyId);
    encoder.encodeArrayPointer(new codec.PointerTo(PublicKeyCredentialDescriptor), val.allowCredentials);
    encoder.encodeStruct(codec.Int32, val.userVerification);
    packed = 0;
    packed |= (val.userVerificationMethods & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.appid);
    encoder.encodeArrayPointer(new codec.PointerTo(CableAuthentication), val.cableAuthenticationData);
  };
  function AuthenticatorSelectionCriteria(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticatorSelectionCriteria.prototype.initDefaults_ = function() {
    this.authenticatorAttachment = 0;
    this.requireResidentKey = false;
    this.userVerification = 0;
  };
  AuthenticatorSelectionCriteria.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticatorSelectionCriteria.validate = function(messageValidator, offset) {
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


    // validate AuthenticatorSelectionCriteria.authenticatorAttachment
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AuthenticatorAttachment);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AuthenticatorSelectionCriteria.userVerification
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, UserVerificationRequirement);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticatorSelectionCriteria.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticatorSelectionCriteria.decode = function(decoder) {
    var packed;
    var val = new AuthenticatorSelectionCriteria();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.authenticatorAttachment = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.requireResidentKey = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.userVerification = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AuthenticatorSelectionCriteria.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticatorSelectionCriteria.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.authenticatorAttachment);
    packed = 0;
    packed |= (val.requireResidentKey & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.userVerification);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PublicKeyCredentialCreationOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PublicKeyCredentialCreationOptions.prototype.initDefaults_ = function() {
    this.relyingParty = null;
    this.user = null;
    this.challenge = null;
    this.publicKeyParameters = null;
    this.adjustedTimeout = null;
    this.excludeCredentials = null;
    this.authenticatorSelection = null;
    this.attestation = 0;
    this.hmacCreateSecret = false;
    this.userVerificationMethods = false;
    this.enforceProtectionPolicy = false;
    this.cableRegistrationData = null;
    this.protectionPolicy = 0;
  };
  PublicKeyCredentialCreationOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PublicKeyCredentialCreationOptions.validate = function(messageValidator, offset) {
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


    // validate PublicKeyCredentialCreationOptions.relyingParty
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PublicKeyCredentialRpEntity, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.user
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, PublicKeyCredentialUserEntity, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.challenge
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.publicKeyParameters
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(PublicKeyCredentialParameters), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.adjustedTimeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.excludeCredentials
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(PublicKeyCredentialDescriptor), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.authenticatorSelection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, AuthenticatorSelectionCriteria, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.attestation
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 56, AttestationConveyancePreference);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialCreationOptions.cableRegistrationData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, CableRegistration, true);
    if (err !== validator.validationError.NONE)
        return err;




    // validate PublicKeyCredentialCreationOptions.protectionPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 72, ProtectionPolicy);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PublicKeyCredentialCreationOptions.encodedSize = codec.kStructHeaderSize + 80;

  PublicKeyCredentialCreationOptions.decode = function(decoder) {
    var packed;
    var val = new PublicKeyCredentialCreationOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.relyingParty = decoder.decodeStructPointer(PublicKeyCredentialRpEntity);
    val.user = decoder.decodeStructPointer(PublicKeyCredentialUserEntity);
    val.challenge = decoder.decodeArrayPointer(codec.Uint8);
    val.publicKeyParameters = decoder.decodeArrayPointer(new codec.PointerTo(PublicKeyCredentialParameters));
    val.adjustedTimeout = decoder.decodeStructPointer(time$.TimeDelta);
    val.excludeCredentials = decoder.decodeArrayPointer(new codec.PointerTo(PublicKeyCredentialDescriptor));
    val.authenticatorSelection = decoder.decodeStructPointer(AuthenticatorSelectionCriteria);
    val.attestation = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.hmacCreateSecret = (packed >> 0) & 1 ? true : false;
    val.userVerificationMethods = (packed >> 1) & 1 ? true : false;
    val.enforceProtectionPolicy = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.cableRegistrationData = decoder.decodeStructPointer(CableRegistration);
    val.protectionPolicy = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PublicKeyCredentialCreationOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PublicKeyCredentialCreationOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PublicKeyCredentialRpEntity, val.relyingParty);
    encoder.encodeStructPointer(PublicKeyCredentialUserEntity, val.user);
    encoder.encodeArrayPointer(codec.Uint8, val.challenge);
    encoder.encodeArrayPointer(new codec.PointerTo(PublicKeyCredentialParameters), val.publicKeyParameters);
    encoder.encodeStructPointer(time$.TimeDelta, val.adjustedTimeout);
    encoder.encodeArrayPointer(new codec.PointerTo(PublicKeyCredentialDescriptor), val.excludeCredentials);
    encoder.encodeStructPointer(AuthenticatorSelectionCriteria, val.authenticatorSelection);
    encoder.encodeStruct(codec.Int32, val.attestation);
    packed = 0;
    packed |= (val.hmacCreateSecret & 1) << 0
    packed |= (val.userVerificationMethods & 1) << 1
    packed |= (val.enforceProtectionPolicy & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(CableRegistration, val.cableRegistrationData);
    encoder.encodeStruct(codec.Int32, val.protectionPolicy);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PublicKeyCredentialDescriptor(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PublicKeyCredentialDescriptor.prototype.initDefaults_ = function() {
    this.type = 0;
    this.id = null;
    this.transports = null;
  };
  PublicKeyCredentialDescriptor.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PublicKeyCredentialDescriptor.validate = function(messageValidator, offset) {
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


    // validate PublicKeyCredentialDescriptor.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PublicKeyCredentialType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialDescriptor.id
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PublicKeyCredentialDescriptor.transports
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, new codec.Enum(AuthenticatorTransport), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PublicKeyCredentialDescriptor.encodedSize = codec.kStructHeaderSize + 24;

  PublicKeyCredentialDescriptor.decode = function(decoder) {
    var packed;
    var val = new PublicKeyCredentialDescriptor();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.id = decoder.decodeArrayPointer(codec.Uint8);
    val.transports = decoder.decodeArrayPointer(new codec.Enum(AuthenticatorTransport));
    return val;
  };

  PublicKeyCredentialDescriptor.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PublicKeyCredentialDescriptor.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.id);
    encoder.encodeArrayPointer(new codec.Enum(AuthenticatorTransport), val.transports);
  };
  function Authenticator_MakeCredential_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_MakeCredential_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  Authenticator_MakeCredential_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_MakeCredential_Params.validate = function(messageValidator, offset) {
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


    // validate Authenticator_MakeCredential_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PublicKeyCredentialCreationOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Authenticator_MakeCredential_Params.encodedSize = codec.kStructHeaderSize + 8;

  Authenticator_MakeCredential_Params.decode = function(decoder) {
    var packed;
    var val = new Authenticator_MakeCredential_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(PublicKeyCredentialCreationOptions);
    return val;
  };

  Authenticator_MakeCredential_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_MakeCredential_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PublicKeyCredentialCreationOptions, val.options);
  };
  function Authenticator_MakeCredential_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_MakeCredential_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.credential = null;
  };
  Authenticator_MakeCredential_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_MakeCredential_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Authenticator_MakeCredential_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AuthenticatorStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Authenticator_MakeCredential_ResponseParams.credential
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, MakeCredentialAuthenticatorResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Authenticator_MakeCredential_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Authenticator_MakeCredential_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Authenticator_MakeCredential_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.credential = decoder.decodeStructPointer(MakeCredentialAuthenticatorResponse);
    return val;
  };

  Authenticator_MakeCredential_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_MakeCredential_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(MakeCredentialAuthenticatorResponse, val.credential);
  };
  function Authenticator_GetAssertion_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_GetAssertion_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  Authenticator_GetAssertion_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_GetAssertion_Params.validate = function(messageValidator, offset) {
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


    // validate Authenticator_GetAssertion_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PublicKeyCredentialRequestOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Authenticator_GetAssertion_Params.encodedSize = codec.kStructHeaderSize + 8;

  Authenticator_GetAssertion_Params.decode = function(decoder) {
    var packed;
    var val = new Authenticator_GetAssertion_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(PublicKeyCredentialRequestOptions);
    return val;
  };

  Authenticator_GetAssertion_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_GetAssertion_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PublicKeyCredentialRequestOptions, val.options);
  };
  function Authenticator_GetAssertion_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_GetAssertion_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.credential = null;
  };
  Authenticator_GetAssertion_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_GetAssertion_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Authenticator_GetAssertion_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AuthenticatorStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Authenticator_GetAssertion_ResponseParams.credential
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, GetAssertionAuthenticatorResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Authenticator_GetAssertion_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Authenticator_GetAssertion_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Authenticator_GetAssertion_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.credential = decoder.decodeStructPointer(GetAssertionAuthenticatorResponse);
    return val;
  };

  Authenticator_GetAssertion_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_GetAssertion_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(GetAssertionAuthenticatorResponse, val.credential);
  };
  function Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.prototype.initDefaults_ = function() {
  };
  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.validate = function(messageValidator, offset) {
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

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encodedSize = codec.kStructHeaderSize + 0;

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.decode = function(decoder) {
    var packed;
    var val = new Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.prototype.initDefaults_ = function() {
    this.available = false;
  };
  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.validate = function(messageValidator, offset) {
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

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.available = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.available & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Authenticator_Cancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Authenticator_Cancel_Params.prototype.initDefaults_ = function() {
  };
  Authenticator_Cancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Authenticator_Cancel_Params.validate = function(messageValidator, offset) {
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

  Authenticator_Cancel_Params.encodedSize = codec.kStructHeaderSize + 0;

  Authenticator_Cancel_Params.decode = function(decoder) {
    var packed;
    var val = new Authenticator_Cancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Authenticator_Cancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Authenticator_Cancel_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kAuthenticator_MakeCredential_Name = 0;
  var kAuthenticator_GetAssertion_Name = 1;
  var kAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name = 2;
  var kAuthenticator_Cancel_Name = 3;

  function AuthenticatorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Authenticator,
                                                   handleOrPtrInfo);
  }

  function AuthenticatorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Authenticator, associatedInterfacePtrInfo);
  }

  AuthenticatorAssociatedPtr.prototype =
      Object.create(AuthenticatorPtr.prototype);
  AuthenticatorAssociatedPtr.prototype.constructor =
      AuthenticatorAssociatedPtr;

  function AuthenticatorProxy(receiver) {
    this.receiver_ = receiver;
  }
  AuthenticatorPtr.prototype.makeCredential = function() {
    return AuthenticatorProxy.prototype.makeCredential
        .apply(this.ptr.getProxy(), arguments);
  };

  AuthenticatorProxy.prototype.makeCredential = function(options) {
    var params_ = new Authenticator_MakeCredential_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAuthenticator_MakeCredential_Name,
          codec.align(Authenticator_MakeCredential_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Authenticator_MakeCredential_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Authenticator_MakeCredential_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticatorPtr.prototype.getAssertion = function() {
    return AuthenticatorProxy.prototype.getAssertion
        .apply(this.ptr.getProxy(), arguments);
  };

  AuthenticatorProxy.prototype.getAssertion = function(options) {
    var params_ = new Authenticator_GetAssertion_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAuthenticator_GetAssertion_Name,
          codec.align(Authenticator_GetAssertion_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Authenticator_GetAssertion_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Authenticator_GetAssertion_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticatorPtr.prototype.isUserVerifyingPlatformAuthenticatorAvailable = function() {
    return AuthenticatorProxy.prototype.isUserVerifyingPlatformAuthenticatorAvailable
        .apply(this.ptr.getProxy(), arguments);
  };

  AuthenticatorProxy.prototype.isUserVerifyingPlatformAuthenticatorAvailable = function() {
    var params_ = new Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name,
          codec.align(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticatorPtr.prototype.cancel = function() {
    return AuthenticatorProxy.prototype.cancel
        .apply(this.ptr.getProxy(), arguments);
  };

  AuthenticatorProxy.prototype.cancel = function() {
    var params_ = new Authenticator_Cancel_Params();
    var builder = new codec.MessageV0Builder(
        kAuthenticator_Cancel_Name,
        codec.align(Authenticator_Cancel_Params.encodedSize));
    builder.encodeStruct(Authenticator_Cancel_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AuthenticatorStub(delegate) {
    this.delegate_ = delegate;
  }
  AuthenticatorStub.prototype.makeCredential = function(options) {
    return this.delegate_ && this.delegate_.makeCredential && this.delegate_.makeCredential(options);
  }
  AuthenticatorStub.prototype.getAssertion = function(options) {
    return this.delegate_ && this.delegate_.getAssertion && this.delegate_.getAssertion(options);
  }
  AuthenticatorStub.prototype.isUserVerifyingPlatformAuthenticatorAvailable = function() {
    return this.delegate_ && this.delegate_.isUserVerifyingPlatformAuthenticatorAvailable && this.delegate_.isUserVerifyingPlatformAuthenticatorAvailable();
  }
  AuthenticatorStub.prototype.cancel = function() {
    return this.delegate_ && this.delegate_.cancel && this.delegate_.cancel();
  }

  AuthenticatorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthenticator_Cancel_Name:
      var params = reader.decodeStruct(Authenticator_Cancel_Params);
      this.cancel();
      return true;
    default:
      return false;
    }
  };

  AuthenticatorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthenticator_MakeCredential_Name:
      var params = reader.decodeStruct(Authenticator_MakeCredential_Params);
      this.makeCredential(params.options).then(function(response) {
        var responseParams =
            new Authenticator_MakeCredential_ResponseParams();
        responseParams.status = response.status;
        responseParams.credential = response.credential;
        var builder = new codec.MessageV1Builder(
            kAuthenticator_MakeCredential_Name,
            codec.align(Authenticator_MakeCredential_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Authenticator_MakeCredential_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAuthenticator_GetAssertion_Name:
      var params = reader.decodeStruct(Authenticator_GetAssertion_Params);
      this.getAssertion(params.options).then(function(response) {
        var responseParams =
            new Authenticator_GetAssertion_ResponseParams();
        responseParams.status = response.status;
        responseParams.credential = response.credential;
        var builder = new codec.MessageV1Builder(
            kAuthenticator_GetAssertion_Name,
            codec.align(Authenticator_GetAssertion_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Authenticator_GetAssertion_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name:
      var params = reader.decodeStruct(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params);
      this.isUserVerifyingPlatformAuthenticatorAvailable().then(function(response) {
        var responseParams =
            new Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams();
        responseParams.available = response.available;
        var builder = new codec.MessageV1Builder(
            kAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name,
            codec.align(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAuthenticatorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAuthenticator_MakeCredential_Name:
        if (message.expectsResponse())
          paramsClass = Authenticator_MakeCredential_Params;
      break;
      case kAuthenticator_GetAssertion_Name:
        if (message.expectsResponse())
          paramsClass = Authenticator_GetAssertion_Params;
      break;
      case kAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name:
        if (message.expectsResponse())
          paramsClass = Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params;
      break;
      case kAuthenticator_Cancel_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Authenticator_Cancel_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAuthenticatorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAuthenticator_MakeCredential_Name:
        if (message.isResponse())
          paramsClass = Authenticator_MakeCredential_ResponseParams;
        break;
      case kAuthenticator_GetAssertion_Name:
        if (message.isResponse())
          paramsClass = Authenticator_GetAssertion_ResponseParams;
        break;
      case kAuthenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Name:
        if (message.isResponse())
          paramsClass = Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Authenticator = {
    name: 'blink.mojom.Authenticator',
    kVersion: 0,
    ptrClass: AuthenticatorPtr,
    proxyClass: AuthenticatorProxy,
    stubClass: AuthenticatorStub,
    validateRequest: validateAuthenticatorRequest,
    validateResponse: validateAuthenticatorResponse,
  };
  AuthenticatorStub.prototype.validator = validateAuthenticatorRequest;
  AuthenticatorProxy.prototype.validator = validateAuthenticatorResponse;
  exports.AuthenticatorStatus = AuthenticatorStatus;
  exports.AuthenticatorTransport = AuthenticatorTransport;
  exports.UserVerificationRequirement = UserVerificationRequirement;
  exports.AttestationConveyancePreference = AttestationConveyancePreference;
  exports.AuthenticatorAttachment = AuthenticatorAttachment;
  exports.ProtectionPolicy = ProtectionPolicy;
  exports.PublicKeyCredentialType = PublicKeyCredentialType;
  exports.CommonCredentialInfo = CommonCredentialInfo;
  exports.UvmEntry = UvmEntry;
  exports.MakeCredentialAuthenticatorResponse = MakeCredentialAuthenticatorResponse;
  exports.GetAssertionAuthenticatorResponse = GetAssertionAuthenticatorResponse;
  exports.PublicKeyCredentialRpEntity = PublicKeyCredentialRpEntity;
  exports.PublicKeyCredentialUserEntity = PublicKeyCredentialUserEntity;
  exports.PublicKeyCredentialParameters = PublicKeyCredentialParameters;
  exports.CableAuthentication = CableAuthentication;
  exports.CableRegistration = CableRegistration;
  exports.PublicKeyCredentialRequestOptions = PublicKeyCredentialRequestOptions;
  exports.AuthenticatorSelectionCriteria = AuthenticatorSelectionCriteria;
  exports.PublicKeyCredentialCreationOptions = PublicKeyCredentialCreationOptions;
  exports.PublicKeyCredentialDescriptor = PublicKeyCredentialDescriptor;
  exports.Authenticator = Authenticator;
  exports.AuthenticatorPtr = AuthenticatorPtr;
  exports.AuthenticatorAssociatedPtr = AuthenticatorAssociatedPtr;
})();