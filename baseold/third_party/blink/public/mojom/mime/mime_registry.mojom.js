// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/mime/mime_registry.mojom';
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



  function MimeRegistry_GetMimeTypeFromExtension_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeRegistry_GetMimeTypeFromExtension_Params.prototype.initDefaults_ = function() {
    this.extension = null;
  };
  MimeRegistry_GetMimeTypeFromExtension_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeRegistry_GetMimeTypeFromExtension_Params.validate = function(messageValidator, offset) {
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


    // validate MimeRegistry_GetMimeTypeFromExtension_Params.extension
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeRegistry_GetMimeTypeFromExtension_Params.encodedSize = codec.kStructHeaderSize + 8;

  MimeRegistry_GetMimeTypeFromExtension_Params.decode = function(decoder) {
    var packed;
    var val = new MimeRegistry_GetMimeTypeFromExtension_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.extension = decoder.decodeStruct(codec.String);
    return val;
  };

  MimeRegistry_GetMimeTypeFromExtension_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeRegistry_GetMimeTypeFromExtension_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.extension);
  };
  function MimeRegistry_GetMimeTypeFromExtension_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeRegistry_GetMimeTypeFromExtension_ResponseParams.prototype.initDefaults_ = function() {
    this.mimeType = null;
  };
  MimeRegistry_GetMimeTypeFromExtension_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeRegistry_GetMimeTypeFromExtension_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MimeRegistry_GetMimeTypeFromExtension_ResponseParams.mimeType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeRegistry_GetMimeTypeFromExtension_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MimeRegistry_GetMimeTypeFromExtension_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MimeRegistry_GetMimeTypeFromExtension_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mimeType = decoder.decodeStruct(codec.String);
    return val;
  };

  MimeRegistry_GetMimeTypeFromExtension_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeRegistry_GetMimeTypeFromExtension_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mimeType);
  };
  var kMimeRegistry_GetMimeTypeFromExtension_Name = 0;

  function MimeRegistryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MimeRegistry,
                                                   handleOrPtrInfo);
  }

  function MimeRegistryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MimeRegistry, associatedInterfacePtrInfo);
  }

  MimeRegistryAssociatedPtr.prototype =
      Object.create(MimeRegistryPtr.prototype);
  MimeRegistryAssociatedPtr.prototype.constructor =
      MimeRegistryAssociatedPtr;

  function MimeRegistryProxy(receiver) {
    this.receiver_ = receiver;
  }
  MimeRegistryPtr.prototype.getMimeTypeFromExtension = function() {
    return MimeRegistryProxy.prototype.getMimeTypeFromExtension
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeRegistryProxy.prototype.getMimeTypeFromExtension = function(extension) {
    var params_ = new MimeRegistry_GetMimeTypeFromExtension_Params();
    params_.extension = extension;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMimeRegistry_GetMimeTypeFromExtension_Name,
          codec.align(MimeRegistry_GetMimeTypeFromExtension_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MimeRegistry_GetMimeTypeFromExtension_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MimeRegistry_GetMimeTypeFromExtension_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MimeRegistryStub(delegate) {
    this.delegate_ = delegate;
  }
  MimeRegistryStub.prototype.getMimeTypeFromExtension = function(extension) {
    return this.delegate_ && this.delegate_.getMimeTypeFromExtension && this.delegate_.getMimeTypeFromExtension(extension);
  }

  MimeRegistryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  MimeRegistryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMimeRegistry_GetMimeTypeFromExtension_Name:
      var params = reader.decodeStruct(MimeRegistry_GetMimeTypeFromExtension_Params);
      this.getMimeTypeFromExtension(params.extension).then(function(response) {
        var responseParams =
            new MimeRegistry_GetMimeTypeFromExtension_ResponseParams();
        responseParams.mimeType = response.mimeType;
        var builder = new codec.MessageV1Builder(
            kMimeRegistry_GetMimeTypeFromExtension_Name,
            codec.align(MimeRegistry_GetMimeTypeFromExtension_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MimeRegistry_GetMimeTypeFromExtension_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMimeRegistryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMimeRegistry_GetMimeTypeFromExtension_Name:
        if (message.expectsResponse())
          paramsClass = MimeRegistry_GetMimeTypeFromExtension_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMimeRegistryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMimeRegistry_GetMimeTypeFromExtension_Name:
        if (message.isResponse())
          paramsClass = MimeRegistry_GetMimeTypeFromExtension_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MimeRegistry = {
    name: 'blink.mojom.MimeRegistry',
    kVersion: 0,
    ptrClass: MimeRegistryPtr,
    proxyClass: MimeRegistryProxy,
    stubClass: MimeRegistryStub,
    validateRequest: validateMimeRegistryRequest,
    validateResponse: validateMimeRegistryResponse,
  };
  MimeRegistryStub.prototype.validator = validateMimeRegistryRequest;
  MimeRegistryProxy.prototype.validator = validateMimeRegistryResponse;
  exports.MimeRegistry = MimeRegistry;
  exports.MimeRegistryPtr = MimeRegistryPtr;
  exports.MimeRegistryAssociatedPtr = MimeRegistryAssociatedPtr;
})();