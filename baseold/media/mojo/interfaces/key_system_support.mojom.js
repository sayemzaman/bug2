// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/key_system_support.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var content_decryption_module$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/content_decryption_module.mojom', 'content_decryption_module.mojom.js');
  }
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/media_types.mojom', 'media_types.mojom.js');
  }



  function KeySystemCapability(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeySystemCapability.prototype.initDefaults_ = function() {
    this.videoCodecs = null;
    this.supportsVp9Profile2 = false;
    this.encryptionSchemes = null;
    this.hwSecureVideoCodecs = null;
    this.hwSecureEncryptionSchemes = null;
    this.sessionTypes = null;
  };
  KeySystemCapability.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeySystemCapability.validate = function(messageValidator, offset) {
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


    // validate KeySystemCapability.videoCodecs
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(media_types$.VideoCodec), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate KeySystemCapability.encryptionSchemes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, new codec.Enum(media_types$.EncryptionMode), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate KeySystemCapability.hwSecureVideoCodecs
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, new codec.Enum(media_types$.VideoCodec), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate KeySystemCapability.hwSecureEncryptionSchemes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, new codec.Enum(media_types$.EncryptionMode), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate KeySystemCapability.sessionTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, new codec.Enum(content_decryption_module$.CdmSessionType), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  KeySystemCapability.encodedSize = codec.kStructHeaderSize + 48;

  KeySystemCapability.decode = function(decoder) {
    var packed;
    var val = new KeySystemCapability();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.videoCodecs = decoder.decodeArrayPointer(new codec.Enum(media_types$.VideoCodec));
    packed = decoder.readUint8();
    val.supportsVp9Profile2 = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.encryptionSchemes = decoder.decodeArrayPointer(new codec.Enum(media_types$.EncryptionMode));
    val.hwSecureVideoCodecs = decoder.decodeArrayPointer(new codec.Enum(media_types$.VideoCodec));
    val.hwSecureEncryptionSchemes = decoder.decodeArrayPointer(new codec.Enum(media_types$.EncryptionMode));
    val.sessionTypes = decoder.decodeArrayPointer(new codec.Enum(content_decryption_module$.CdmSessionType));
    return val;
  };

  KeySystemCapability.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeySystemCapability.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(media_types$.VideoCodec), val.videoCodecs);
    packed = 0;
    packed |= (val.supportsVp9Profile2 & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.Enum(media_types$.EncryptionMode), val.encryptionSchemes);
    encoder.encodeArrayPointer(new codec.Enum(media_types$.VideoCodec), val.hwSecureVideoCodecs);
    encoder.encodeArrayPointer(new codec.Enum(media_types$.EncryptionMode), val.hwSecureEncryptionSchemes);
    encoder.encodeArrayPointer(new codec.Enum(content_decryption_module$.CdmSessionType), val.sessionTypes);
  };
  function KeySystemSupport_IsKeySystemSupported_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeySystemSupport_IsKeySystemSupported_Params.prototype.initDefaults_ = function() {
    this.keySystem = null;
  };
  KeySystemSupport_IsKeySystemSupported_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeySystemSupport_IsKeySystemSupported_Params.validate = function(messageValidator, offset) {
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


    // validate KeySystemSupport_IsKeySystemSupported_Params.keySystem
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  KeySystemSupport_IsKeySystemSupported_Params.encodedSize = codec.kStructHeaderSize + 8;

  KeySystemSupport_IsKeySystemSupported_Params.decode = function(decoder) {
    var packed;
    var val = new KeySystemSupport_IsKeySystemSupported_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keySystem = decoder.decodeStruct(codec.String);
    return val;
  };

  KeySystemSupport_IsKeySystemSupported_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeySystemSupport_IsKeySystemSupported_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.keySystem);
  };
  function KeySystemSupport_IsKeySystemSupported_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeySystemSupport_IsKeySystemSupported_ResponseParams.prototype.initDefaults_ = function() {
    this.isSupported = false;
    this.keySystemCapability = null;
  };
  KeySystemSupport_IsKeySystemSupported_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeySystemSupport_IsKeySystemSupported_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate KeySystemSupport_IsKeySystemSupported_ResponseParams.keySystemCapability
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, KeySystemCapability, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  KeySystemSupport_IsKeySystemSupported_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  KeySystemSupport_IsKeySystemSupported_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new KeySystemSupport_IsKeySystemSupported_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isSupported = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.keySystemCapability = decoder.decodeStructPointer(KeySystemCapability);
    return val;
  };

  KeySystemSupport_IsKeySystemSupported_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeySystemSupport_IsKeySystemSupported_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isSupported & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(KeySystemCapability, val.keySystemCapability);
  };
  var kKeySystemSupport_IsKeySystemSupported_Name = 0;

  function KeySystemSupportPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(KeySystemSupport,
                                                   handleOrPtrInfo);
  }

  function KeySystemSupportAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        KeySystemSupport, associatedInterfacePtrInfo);
  }

  KeySystemSupportAssociatedPtr.prototype =
      Object.create(KeySystemSupportPtr.prototype);
  KeySystemSupportAssociatedPtr.prototype.constructor =
      KeySystemSupportAssociatedPtr;

  function KeySystemSupportProxy(receiver) {
    this.receiver_ = receiver;
  }
  KeySystemSupportPtr.prototype.isKeySystemSupported = function() {
    return KeySystemSupportProxy.prototype.isKeySystemSupported
        .apply(this.ptr.getProxy(), arguments);
  };

  KeySystemSupportProxy.prototype.isKeySystemSupported = function(keySystem) {
    var params_ = new KeySystemSupport_IsKeySystemSupported_Params();
    params_.keySystem = keySystem;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kKeySystemSupport_IsKeySystemSupported_Name,
          codec.align(KeySystemSupport_IsKeySystemSupported_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(KeySystemSupport_IsKeySystemSupported_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(KeySystemSupport_IsKeySystemSupported_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function KeySystemSupportStub(delegate) {
    this.delegate_ = delegate;
  }
  KeySystemSupportStub.prototype.isKeySystemSupported = function(keySystem) {
    return this.delegate_ && this.delegate_.isKeySystemSupported && this.delegate_.isKeySystemSupported(keySystem);
  }

  KeySystemSupportStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  KeySystemSupportStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kKeySystemSupport_IsKeySystemSupported_Name:
      var params = reader.decodeStruct(KeySystemSupport_IsKeySystemSupported_Params);
      this.isKeySystemSupported(params.keySystem).then(function(response) {
        var responseParams =
            new KeySystemSupport_IsKeySystemSupported_ResponseParams();
        responseParams.isSupported = response.isSupported;
        responseParams.keySystemCapability = response.keySystemCapability;
        var builder = new codec.MessageV1Builder(
            kKeySystemSupport_IsKeySystemSupported_Name,
            codec.align(KeySystemSupport_IsKeySystemSupported_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(KeySystemSupport_IsKeySystemSupported_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateKeySystemSupportRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kKeySystemSupport_IsKeySystemSupported_Name:
        if (message.expectsResponse())
          paramsClass = KeySystemSupport_IsKeySystemSupported_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateKeySystemSupportResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kKeySystemSupport_IsKeySystemSupported_Name:
        if (message.isResponse())
          paramsClass = KeySystemSupport_IsKeySystemSupported_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var KeySystemSupport = {
    name: 'media.mojom.KeySystemSupport',
    kVersion: 0,
    ptrClass: KeySystemSupportPtr,
    proxyClass: KeySystemSupportProxy,
    stubClass: KeySystemSupportStub,
    validateRequest: validateKeySystemSupportRequest,
    validateResponse: validateKeySystemSupportResponse,
  };
  KeySystemSupportStub.prototype.validator = validateKeySystemSupportRequest;
  KeySystemSupportProxy.prototype.validator = validateKeySystemSupportResponse;
  exports.KeySystemCapability = KeySystemCapability;
  exports.KeySystemSupport = KeySystemSupport;
  exports.KeySystemSupportPtr = KeySystemSupportPtr;
  exports.KeySystemSupportAssociatedPtr = KeySystemSupportAssociatedPtr;
})();