// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/webauthn/virtual_authenticator.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.test.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }
  var authenticator$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/webauthn/authenticator.mojom', 'authenticator.mojom.js');
  }


  var ClientToAuthenticatorProtocol = {};
  ClientToAuthenticatorProtocol.U2F = 0;
  ClientToAuthenticatorProtocol.CTAP2 = ClientToAuthenticatorProtocol.U2F + 1;
  ClientToAuthenticatorProtocol.MIN_VALUE = 0,
  ClientToAuthenticatorProtocol.MAX_VALUE = 1,

  ClientToAuthenticatorProtocol.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  ClientToAuthenticatorProtocol.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function VirtualAuthenticatorOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorOptions.prototype.initDefaults_ = function() {
    this.protocol = 0;
    this.transport = 0;
    this.attachment = 0;
    this.hasResidentKey = false;
    this.hasUserVerification = false;
  };
  VirtualAuthenticatorOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorOptions.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticatorOptions.protocol
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ClientToAuthenticatorProtocol);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VirtualAuthenticatorOptions.transport
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, authenticator$.AuthenticatorTransport);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VirtualAuthenticatorOptions.attachment
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, authenticator$.AuthenticatorAttachment);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  VirtualAuthenticatorOptions.encodedSize = codec.kStructHeaderSize + 16;

  VirtualAuthenticatorOptions.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.protocol = decoder.decodeStruct(codec.Int32);
    val.transport = decoder.decodeStruct(codec.Int32);
    val.attachment = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.hasResidentKey = (packed >> 0) & 1 ? true : false;
    val.hasUserVerification = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VirtualAuthenticatorOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.protocol);
    encoder.encodeStruct(codec.Int32, val.transport);
    encoder.encodeStruct(codec.Int32, val.attachment);
    packed = 0;
    packed |= (val.hasResidentKey & 1) << 0
    packed |= (val.hasUserVerification & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RegisteredKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RegisteredKey.prototype.initDefaults_ = function() {
    this.keyHandle = null;
    this.applicationParameter = null;
    this.privateKey = null;
    this.counter = 0;
  };
  RegisteredKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RegisteredKey.validate = function(messageValidator, offset) {
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


    // validate RegisteredKey.keyHandle
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RegisteredKey.applicationParameter
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RegisteredKey.privateKey
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  RegisteredKey.encodedSize = codec.kStructHeaderSize + 32;

  RegisteredKey.decode = function(decoder) {
    var packed;
    var val = new RegisteredKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keyHandle = decoder.decodeArrayPointer(codec.Uint8);
    val.applicationParameter = decoder.decodeArrayPointer(codec.Uint8);
    val.privateKey = decoder.decodeArrayPointer(codec.Uint8);
    val.counter = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RegisteredKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RegisteredKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.keyHandle);
    encoder.encodeArrayPointer(codec.Uint8, val.applicationParameter);
    encoder.encodeArrayPointer(codec.Uint8, val.privateKey);
    encoder.encodeStruct(codec.Int32, val.counter);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VirtualAuthenticator_GetUniqueId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_GetUniqueId_Params.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticator_GetUniqueId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_GetUniqueId_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_GetUniqueId_Params.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticator_GetUniqueId_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_GetUniqueId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticator_GetUniqueId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_GetUniqueId_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticator_GetUniqueId_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_GetUniqueId_ResponseParams.prototype.initDefaults_ = function() {
    this.id = null;
  };
  VirtualAuthenticator_GetUniqueId_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_GetUniqueId_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticator_GetUniqueId_ResponseParams.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticator_GetUniqueId_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticator_GetUniqueId_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_GetUniqueId_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.String);
    return val;
  };

  VirtualAuthenticator_GetUniqueId_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_GetUniqueId_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
  };
  function VirtualAuthenticator_AddRegistration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_AddRegistration_Params.prototype.initDefaults_ = function() {
    this.key = null;
  };
  VirtualAuthenticator_AddRegistration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_AddRegistration_Params.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticator_AddRegistration_Params.key
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, RegisteredKey, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticator_AddRegistration_Params.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticator_AddRegistration_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_AddRegistration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeStructPointer(RegisteredKey);
    return val;
  };

  VirtualAuthenticator_AddRegistration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_AddRegistration_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(RegisteredKey, val.key);
  };
  function VirtualAuthenticator_AddRegistration_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_AddRegistration_ResponseParams.prototype.initDefaults_ = function() {
    this.added = false;
  };
  VirtualAuthenticator_AddRegistration_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_AddRegistration_ResponseParams.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_AddRegistration_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticator_AddRegistration_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_AddRegistration_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.added = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VirtualAuthenticator_AddRegistration_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_AddRegistration_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.added & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VirtualAuthenticator_GetRegistrations_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_GetRegistrations_Params.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticator_GetRegistrations_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_GetRegistrations_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_GetRegistrations_Params.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticator_GetRegistrations_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_GetRegistrations_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticator_GetRegistrations_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_GetRegistrations_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticator_GetRegistrations_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_GetRegistrations_ResponseParams.prototype.initDefaults_ = function() {
    this.keys = null;
  };
  VirtualAuthenticator_GetRegistrations_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_GetRegistrations_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticator_GetRegistrations_ResponseParams.keys
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(RegisteredKey), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticator_GetRegistrations_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticator_GetRegistrations_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_GetRegistrations_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keys = decoder.decodeArrayPointer(new codec.PointerTo(RegisteredKey));
    return val;
  };

  VirtualAuthenticator_GetRegistrations_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_GetRegistrations_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(RegisteredKey), val.keys);
  };
  function VirtualAuthenticator_ClearRegistrations_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_ClearRegistrations_Params.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticator_ClearRegistrations_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_ClearRegistrations_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_ClearRegistrations_Params.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticator_ClearRegistrations_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_ClearRegistrations_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticator_ClearRegistrations_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_ClearRegistrations_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticator_ClearRegistrations_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_ClearRegistrations_ResponseParams.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticator_ClearRegistrations_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_ClearRegistrations_ResponseParams.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_ClearRegistrations_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticator_ClearRegistrations_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_ClearRegistrations_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticator_ClearRegistrations_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_ClearRegistrations_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticator_SetUserPresence_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_SetUserPresence_Params.prototype.initDefaults_ = function() {
    this.present = false;
  };
  VirtualAuthenticator_SetUserPresence_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_SetUserPresence_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_SetUserPresence_Params.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticator_SetUserPresence_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_SetUserPresence_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.present = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VirtualAuthenticator_SetUserPresence_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_SetUserPresence_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.present & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VirtualAuthenticator_SetUserPresence_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_SetUserPresence_ResponseParams.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticator_SetUserPresence_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_SetUserPresence_ResponseParams.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_SetUserPresence_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticator_SetUserPresence_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_SetUserPresence_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticator_SetUserPresence_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_SetUserPresence_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticator_GetUserPresence_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_GetUserPresence_Params.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticator_GetUserPresence_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_GetUserPresence_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_GetUserPresence_Params.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticator_GetUserPresence_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_GetUserPresence_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticator_GetUserPresence_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_GetUserPresence_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticator_GetUserPresence_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticator_GetUserPresence_ResponseParams.prototype.initDefaults_ = function() {
    this.present = false;
  };
  VirtualAuthenticator_GetUserPresence_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticator_GetUserPresence_ResponseParams.validate = function(messageValidator, offset) {
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

  VirtualAuthenticator_GetUserPresence_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticator_GetUserPresence_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticator_GetUserPresence_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.present = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VirtualAuthenticator_GetUserPresence_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticator_GetUserPresence_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.present & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VirtualAuthenticatorManager_CreateAuthenticator_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_CreateAuthenticator_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  VirtualAuthenticatorManager_CreateAuthenticator_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_CreateAuthenticator_Params.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticatorManager_CreateAuthenticator_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VirtualAuthenticatorOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticatorManager_CreateAuthenticator_Params.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticatorManager_CreateAuthenticator_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_CreateAuthenticator_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(VirtualAuthenticatorOptions);
    return val;
  };

  VirtualAuthenticatorManager_CreateAuthenticator_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_CreateAuthenticator_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VirtualAuthenticatorOptions, val.options);
  };
  function VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.prototype.initDefaults_ = function() {
    this.authenticator = new VirtualAuthenticatorPtr();
  };
  VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.authenticator
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.authenticator = decoder.decodeStruct(new codec.Interface(VirtualAuthenticatorPtr));
    return val;
  };

  VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(VirtualAuthenticatorPtr), val.authenticator);
  };
  function VirtualAuthenticatorManager_GetAuthenticators_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_GetAuthenticators_Params.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticatorManager_GetAuthenticators_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_GetAuthenticators_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticatorManager_GetAuthenticators_Params.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticatorManager_GetAuthenticators_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_GetAuthenticators_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticatorManager_GetAuthenticators_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_GetAuthenticators_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticatorManager_GetAuthenticators_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.prototype.initDefaults_ = function() {
    this.authenticators = null;
  };
  VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.authenticators
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.Interface(VirtualAuthenticatorPtr), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_GetAuthenticators_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.authenticators = decoder.decodeArrayPointer(new codec.Interface(VirtualAuthenticatorPtr));
    return val;
  };

  VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Interface(VirtualAuthenticatorPtr), val.authenticators);
  };
  function VirtualAuthenticatorManager_RemoveAuthenticator_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_RemoveAuthenticator_Params.prototype.initDefaults_ = function() {
    this.id = null;
  };
  VirtualAuthenticatorManager_RemoveAuthenticator_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_RemoveAuthenticator_Params.validate = function(messageValidator, offset) {
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


    // validate VirtualAuthenticatorManager_RemoveAuthenticator_Params.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VirtualAuthenticatorManager_RemoveAuthenticator_Params.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticatorManager_RemoveAuthenticator_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_RemoveAuthenticator_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.String);
    return val;
  };

  VirtualAuthenticatorManager_RemoveAuthenticator_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_RemoveAuthenticator_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
  };
  function VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.prototype.initDefaults_ = function() {
    this.removed = false;
  };
  VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.validate = function(messageValidator, offset) {
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

  VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.removed = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.removed & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VirtualAuthenticatorManager_ClearAuthenticators_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_ClearAuthenticators_Params.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticatorManager_ClearAuthenticators_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_ClearAuthenticators_Params.validate = function(messageValidator, offset) {
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

  VirtualAuthenticatorManager_ClearAuthenticators_Params.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticatorManager_ClearAuthenticators_Params.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_ClearAuthenticators_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticatorManager_ClearAuthenticators_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_ClearAuthenticators_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.prototype.initDefaults_ = function() {
  };
  VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.validate = function(messageValidator, offset) {
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

  VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  var kVirtualAuthenticator_GetUniqueId_Name = 0;
  var kVirtualAuthenticator_AddRegistration_Name = 1;
  var kVirtualAuthenticator_GetRegistrations_Name = 2;
  var kVirtualAuthenticator_ClearRegistrations_Name = 3;
  var kVirtualAuthenticator_SetUserPresence_Name = 4;
  var kVirtualAuthenticator_GetUserPresence_Name = 5;

  function VirtualAuthenticatorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VirtualAuthenticator,
                                                   handleOrPtrInfo);
  }

  function VirtualAuthenticatorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VirtualAuthenticator, associatedInterfacePtrInfo);
  }

  VirtualAuthenticatorAssociatedPtr.prototype =
      Object.create(VirtualAuthenticatorPtr.prototype);
  VirtualAuthenticatorAssociatedPtr.prototype.constructor =
      VirtualAuthenticatorAssociatedPtr;

  function VirtualAuthenticatorProxy(receiver) {
    this.receiver_ = receiver;
  }
  VirtualAuthenticatorPtr.prototype.getUniqueId = function() {
    return VirtualAuthenticatorProxy.prototype.getUniqueId
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorProxy.prototype.getUniqueId = function() {
    var params_ = new VirtualAuthenticator_GetUniqueId_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticator_GetUniqueId_Name,
          codec.align(VirtualAuthenticator_GetUniqueId_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticator_GetUniqueId_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticator_GetUniqueId_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorPtr.prototype.addRegistration = function() {
    return VirtualAuthenticatorProxy.prototype.addRegistration
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorProxy.prototype.addRegistration = function(key) {
    var params_ = new VirtualAuthenticator_AddRegistration_Params();
    params_.key = key;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticator_AddRegistration_Name,
          codec.align(VirtualAuthenticator_AddRegistration_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticator_AddRegistration_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticator_AddRegistration_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorPtr.prototype.getRegistrations = function() {
    return VirtualAuthenticatorProxy.prototype.getRegistrations
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorProxy.prototype.getRegistrations = function() {
    var params_ = new VirtualAuthenticator_GetRegistrations_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticator_GetRegistrations_Name,
          codec.align(VirtualAuthenticator_GetRegistrations_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticator_GetRegistrations_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticator_GetRegistrations_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorPtr.prototype.clearRegistrations = function() {
    return VirtualAuthenticatorProxy.prototype.clearRegistrations
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorProxy.prototype.clearRegistrations = function() {
    var params_ = new VirtualAuthenticator_ClearRegistrations_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticator_ClearRegistrations_Name,
          codec.align(VirtualAuthenticator_ClearRegistrations_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticator_ClearRegistrations_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticator_ClearRegistrations_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorPtr.prototype.setUserPresence = function() {
    return VirtualAuthenticatorProxy.prototype.setUserPresence
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorProxy.prototype.setUserPresence = function(present) {
    var params_ = new VirtualAuthenticator_SetUserPresence_Params();
    params_.present = present;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticator_SetUserPresence_Name,
          codec.align(VirtualAuthenticator_SetUserPresence_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticator_SetUserPresence_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticator_SetUserPresence_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorPtr.prototype.getUserPresence = function() {
    return VirtualAuthenticatorProxy.prototype.getUserPresence
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorProxy.prototype.getUserPresence = function() {
    var params_ = new VirtualAuthenticator_GetUserPresence_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticator_GetUserPresence_Name,
          codec.align(VirtualAuthenticator_GetUserPresence_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticator_GetUserPresence_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticator_GetUserPresence_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function VirtualAuthenticatorStub(delegate) {
    this.delegate_ = delegate;
  }
  VirtualAuthenticatorStub.prototype.getUniqueId = function() {
    return this.delegate_ && this.delegate_.getUniqueId && this.delegate_.getUniqueId();
  }
  VirtualAuthenticatorStub.prototype.addRegistration = function(key) {
    return this.delegate_ && this.delegate_.addRegistration && this.delegate_.addRegistration(key);
  }
  VirtualAuthenticatorStub.prototype.getRegistrations = function() {
    return this.delegate_ && this.delegate_.getRegistrations && this.delegate_.getRegistrations();
  }
  VirtualAuthenticatorStub.prototype.clearRegistrations = function() {
    return this.delegate_ && this.delegate_.clearRegistrations && this.delegate_.clearRegistrations();
  }
  VirtualAuthenticatorStub.prototype.setUserPresence = function(present) {
    return this.delegate_ && this.delegate_.setUserPresence && this.delegate_.setUserPresence(present);
  }
  VirtualAuthenticatorStub.prototype.getUserPresence = function() {
    return this.delegate_ && this.delegate_.getUserPresence && this.delegate_.getUserPresence();
  }

  VirtualAuthenticatorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  VirtualAuthenticatorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVirtualAuthenticator_GetUniqueId_Name:
      var params = reader.decodeStruct(VirtualAuthenticator_GetUniqueId_Params);
      this.getUniqueId().then(function(response) {
        var responseParams =
            new VirtualAuthenticator_GetUniqueId_ResponseParams();
        responseParams.id = response.id;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticator_GetUniqueId_Name,
            codec.align(VirtualAuthenticator_GetUniqueId_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticator_GetUniqueId_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticator_AddRegistration_Name:
      var params = reader.decodeStruct(VirtualAuthenticator_AddRegistration_Params);
      this.addRegistration(params.key).then(function(response) {
        var responseParams =
            new VirtualAuthenticator_AddRegistration_ResponseParams();
        responseParams.added = response.added;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticator_AddRegistration_Name,
            codec.align(VirtualAuthenticator_AddRegistration_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticator_AddRegistration_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticator_GetRegistrations_Name:
      var params = reader.decodeStruct(VirtualAuthenticator_GetRegistrations_Params);
      this.getRegistrations().then(function(response) {
        var responseParams =
            new VirtualAuthenticator_GetRegistrations_ResponseParams();
        responseParams.keys = response.keys;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticator_GetRegistrations_Name,
            codec.align(VirtualAuthenticator_GetRegistrations_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticator_GetRegistrations_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticator_ClearRegistrations_Name:
      var params = reader.decodeStruct(VirtualAuthenticator_ClearRegistrations_Params);
      this.clearRegistrations().then(function(response) {
        var responseParams =
            new VirtualAuthenticator_ClearRegistrations_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticator_ClearRegistrations_Name,
            codec.align(VirtualAuthenticator_ClearRegistrations_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticator_ClearRegistrations_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticator_SetUserPresence_Name:
      var params = reader.decodeStruct(VirtualAuthenticator_SetUserPresence_Params);
      this.setUserPresence(params.present).then(function(response) {
        var responseParams =
            new VirtualAuthenticator_SetUserPresence_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticator_SetUserPresence_Name,
            codec.align(VirtualAuthenticator_SetUserPresence_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticator_SetUserPresence_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticator_GetUserPresence_Name:
      var params = reader.decodeStruct(VirtualAuthenticator_GetUserPresence_Params);
      this.getUserPresence().then(function(response) {
        var responseParams =
            new VirtualAuthenticator_GetUserPresence_ResponseParams();
        responseParams.present = response.present;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticator_GetUserPresence_Name,
            codec.align(VirtualAuthenticator_GetUserPresence_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticator_GetUserPresence_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVirtualAuthenticatorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVirtualAuthenticator_GetUniqueId_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticator_GetUniqueId_Params;
      break;
      case kVirtualAuthenticator_AddRegistration_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticator_AddRegistration_Params;
      break;
      case kVirtualAuthenticator_GetRegistrations_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticator_GetRegistrations_Params;
      break;
      case kVirtualAuthenticator_ClearRegistrations_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticator_ClearRegistrations_Params;
      break;
      case kVirtualAuthenticator_SetUserPresence_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticator_SetUserPresence_Params;
      break;
      case kVirtualAuthenticator_GetUserPresence_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticator_GetUserPresence_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVirtualAuthenticatorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVirtualAuthenticator_GetUniqueId_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticator_GetUniqueId_ResponseParams;
        break;
      case kVirtualAuthenticator_AddRegistration_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticator_AddRegistration_ResponseParams;
        break;
      case kVirtualAuthenticator_GetRegistrations_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticator_GetRegistrations_ResponseParams;
        break;
      case kVirtualAuthenticator_ClearRegistrations_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticator_ClearRegistrations_ResponseParams;
        break;
      case kVirtualAuthenticator_SetUserPresence_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticator_SetUserPresence_ResponseParams;
        break;
      case kVirtualAuthenticator_GetUserPresence_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticator_GetUserPresence_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VirtualAuthenticator = {
    name: 'blink.test.mojom.VirtualAuthenticator',
    kVersion: 0,
    ptrClass: VirtualAuthenticatorPtr,
    proxyClass: VirtualAuthenticatorProxy,
    stubClass: VirtualAuthenticatorStub,
    validateRequest: validateVirtualAuthenticatorRequest,
    validateResponse: validateVirtualAuthenticatorResponse,
  };
  VirtualAuthenticatorStub.prototype.validator = validateVirtualAuthenticatorRequest;
  VirtualAuthenticatorProxy.prototype.validator = validateVirtualAuthenticatorResponse;
  var kVirtualAuthenticatorManager_CreateAuthenticator_Name = 0;
  var kVirtualAuthenticatorManager_GetAuthenticators_Name = 1;
  var kVirtualAuthenticatorManager_RemoveAuthenticator_Name = 2;
  var kVirtualAuthenticatorManager_ClearAuthenticators_Name = 3;

  function VirtualAuthenticatorManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VirtualAuthenticatorManager,
                                                   handleOrPtrInfo);
  }

  function VirtualAuthenticatorManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VirtualAuthenticatorManager, associatedInterfacePtrInfo);
  }

  VirtualAuthenticatorManagerAssociatedPtr.prototype =
      Object.create(VirtualAuthenticatorManagerPtr.prototype);
  VirtualAuthenticatorManagerAssociatedPtr.prototype.constructor =
      VirtualAuthenticatorManagerAssociatedPtr;

  function VirtualAuthenticatorManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  VirtualAuthenticatorManagerPtr.prototype.createAuthenticator = function() {
    return VirtualAuthenticatorManagerProxy.prototype.createAuthenticator
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorManagerProxy.prototype.createAuthenticator = function(options) {
    var params_ = new VirtualAuthenticatorManager_CreateAuthenticator_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticatorManager_CreateAuthenticator_Name,
          codec.align(VirtualAuthenticatorManager_CreateAuthenticator_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticatorManager_CreateAuthenticator_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorManagerPtr.prototype.getAuthenticators = function() {
    return VirtualAuthenticatorManagerProxy.prototype.getAuthenticators
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorManagerProxy.prototype.getAuthenticators = function() {
    var params_ = new VirtualAuthenticatorManager_GetAuthenticators_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticatorManager_GetAuthenticators_Name,
          codec.align(VirtualAuthenticatorManager_GetAuthenticators_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticatorManager_GetAuthenticators_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticatorManager_GetAuthenticators_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorManagerPtr.prototype.removeAuthenticator = function() {
    return VirtualAuthenticatorManagerProxy.prototype.removeAuthenticator
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorManagerProxy.prototype.removeAuthenticator = function(id) {
    var params_ = new VirtualAuthenticatorManager_RemoveAuthenticator_Params();
    params_.id = id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticatorManager_RemoveAuthenticator_Name,
          codec.align(VirtualAuthenticatorManager_RemoveAuthenticator_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticatorManager_RemoveAuthenticator_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VirtualAuthenticatorManagerPtr.prototype.clearAuthenticators = function() {
    return VirtualAuthenticatorManagerProxy.prototype.clearAuthenticators
        .apply(this.ptr.getProxy(), arguments);
  };

  VirtualAuthenticatorManagerProxy.prototype.clearAuthenticators = function() {
    var params_ = new VirtualAuthenticatorManager_ClearAuthenticators_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVirtualAuthenticatorManager_ClearAuthenticators_Name,
          codec.align(VirtualAuthenticatorManager_ClearAuthenticators_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VirtualAuthenticatorManager_ClearAuthenticators_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function VirtualAuthenticatorManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  VirtualAuthenticatorManagerStub.prototype.createAuthenticator = function(options) {
    return this.delegate_ && this.delegate_.createAuthenticator && this.delegate_.createAuthenticator(options);
  }
  VirtualAuthenticatorManagerStub.prototype.getAuthenticators = function() {
    return this.delegate_ && this.delegate_.getAuthenticators && this.delegate_.getAuthenticators();
  }
  VirtualAuthenticatorManagerStub.prototype.removeAuthenticator = function(id) {
    return this.delegate_ && this.delegate_.removeAuthenticator && this.delegate_.removeAuthenticator(id);
  }
  VirtualAuthenticatorManagerStub.prototype.clearAuthenticators = function() {
    return this.delegate_ && this.delegate_.clearAuthenticators && this.delegate_.clearAuthenticators();
  }

  VirtualAuthenticatorManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  VirtualAuthenticatorManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVirtualAuthenticatorManager_CreateAuthenticator_Name:
      var params = reader.decodeStruct(VirtualAuthenticatorManager_CreateAuthenticator_Params);
      this.createAuthenticator(params.options).then(function(response) {
        var responseParams =
            new VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams();
        responseParams.authenticator = response.authenticator;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticatorManager_CreateAuthenticator_Name,
            codec.align(VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticatorManager_GetAuthenticators_Name:
      var params = reader.decodeStruct(VirtualAuthenticatorManager_GetAuthenticators_Params);
      this.getAuthenticators().then(function(response) {
        var responseParams =
            new VirtualAuthenticatorManager_GetAuthenticators_ResponseParams();
        responseParams.authenticators = response.authenticators;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticatorManager_GetAuthenticators_Name,
            codec.align(VirtualAuthenticatorManager_GetAuthenticators_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticatorManager_GetAuthenticators_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticatorManager_RemoveAuthenticator_Name:
      var params = reader.decodeStruct(VirtualAuthenticatorManager_RemoveAuthenticator_Params);
      this.removeAuthenticator(params.id).then(function(response) {
        var responseParams =
            new VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams();
        responseParams.removed = response.removed;
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticatorManager_RemoveAuthenticator_Name,
            codec.align(VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVirtualAuthenticatorManager_ClearAuthenticators_Name:
      var params = reader.decodeStruct(VirtualAuthenticatorManager_ClearAuthenticators_Params);
      this.clearAuthenticators().then(function(response) {
        var responseParams =
            new VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kVirtualAuthenticatorManager_ClearAuthenticators_Name,
            codec.align(VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVirtualAuthenticatorManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVirtualAuthenticatorManager_CreateAuthenticator_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticatorManager_CreateAuthenticator_Params;
      break;
      case kVirtualAuthenticatorManager_GetAuthenticators_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticatorManager_GetAuthenticators_Params;
      break;
      case kVirtualAuthenticatorManager_RemoveAuthenticator_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticatorManager_RemoveAuthenticator_Params;
      break;
      case kVirtualAuthenticatorManager_ClearAuthenticators_Name:
        if (message.expectsResponse())
          paramsClass = VirtualAuthenticatorManager_ClearAuthenticators_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVirtualAuthenticatorManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVirtualAuthenticatorManager_CreateAuthenticator_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticatorManager_CreateAuthenticator_ResponseParams;
        break;
      case kVirtualAuthenticatorManager_GetAuthenticators_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticatorManager_GetAuthenticators_ResponseParams;
        break;
      case kVirtualAuthenticatorManager_RemoveAuthenticator_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticatorManager_RemoveAuthenticator_ResponseParams;
        break;
      case kVirtualAuthenticatorManager_ClearAuthenticators_Name:
        if (message.isResponse())
          paramsClass = VirtualAuthenticatorManager_ClearAuthenticators_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VirtualAuthenticatorManager = {
    name: 'blink.test.mojom.VirtualAuthenticatorManager',
    kVersion: 0,
    ptrClass: VirtualAuthenticatorManagerPtr,
    proxyClass: VirtualAuthenticatorManagerProxy,
    stubClass: VirtualAuthenticatorManagerStub,
    validateRequest: validateVirtualAuthenticatorManagerRequest,
    validateResponse: validateVirtualAuthenticatorManagerResponse,
  };
  VirtualAuthenticatorManagerStub.prototype.validator = validateVirtualAuthenticatorManagerRequest;
  VirtualAuthenticatorManagerProxy.prototype.validator = validateVirtualAuthenticatorManagerResponse;
  exports.ClientToAuthenticatorProtocol = ClientToAuthenticatorProtocol;
  exports.VirtualAuthenticatorOptions = VirtualAuthenticatorOptions;
  exports.RegisteredKey = RegisteredKey;
  exports.VirtualAuthenticator = VirtualAuthenticator;
  exports.VirtualAuthenticatorPtr = VirtualAuthenticatorPtr;
  exports.VirtualAuthenticatorAssociatedPtr = VirtualAuthenticatorAssociatedPtr;
  exports.VirtualAuthenticatorManager = VirtualAuthenticatorManager;
  exports.VirtualAuthenticatorManagerPtr = VirtualAuthenticatorManagerPtr;
  exports.VirtualAuthenticatorManagerAssociatedPtr = VirtualAuthenticatorManagerAssociatedPtr;
})();