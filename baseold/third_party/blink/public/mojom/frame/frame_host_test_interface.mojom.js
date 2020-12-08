// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/frame_host_test_interface.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function FrameHostTestInterface_Ping_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameHostTestInterface_Ping_Params.prototype.initDefaults_ = function() {
    this.sourceUrl = null;
    this.sourceEvent = null;
  };
  FrameHostTestInterface_Ping_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameHostTestInterface_Ping_Params.validate = function(messageValidator, offset) {
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


    // validate FrameHostTestInterface_Ping_Params.sourceUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameHostTestInterface_Ping_Params.sourceEvent
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameHostTestInterface_Ping_Params.encodedSize = codec.kStructHeaderSize + 16;

  FrameHostTestInterface_Ping_Params.decode = function(decoder) {
    var packed;
    var val = new FrameHostTestInterface_Ping_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceUrl = decoder.decodeStructPointer(url$.Url);
    val.sourceEvent = decoder.decodeStruct(codec.String);
    return val;
  };

  FrameHostTestInterface_Ping_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameHostTestInterface_Ping_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.sourceUrl);
    encoder.encodeStruct(codec.String, val.sourceEvent);
  };
  function FrameHostTestInterface_GetName_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameHostTestInterface_GetName_Params.prototype.initDefaults_ = function() {
  };
  FrameHostTestInterface_GetName_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameHostTestInterface_GetName_Params.validate = function(messageValidator, offset) {
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

  FrameHostTestInterface_GetName_Params.encodedSize = codec.kStructHeaderSize + 0;

  FrameHostTestInterface_GetName_Params.decode = function(decoder) {
    var packed;
    var val = new FrameHostTestInterface_GetName_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FrameHostTestInterface_GetName_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameHostTestInterface_GetName_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FrameHostTestInterface_GetName_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameHostTestInterface_GetName_ResponseParams.prototype.initDefaults_ = function() {
    this.name = null;
  };
  FrameHostTestInterface_GetName_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameHostTestInterface_GetName_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FrameHostTestInterface_GetName_ResponseParams.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameHostTestInterface_GetName_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FrameHostTestInterface_GetName_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FrameHostTestInterface_GetName_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  FrameHostTestInterface_GetName_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameHostTestInterface_GetName_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
  };
  var kFrameHostTestInterface_Ping_Name = 0;
  var kFrameHostTestInterface_GetName_Name = 1;

  function FrameHostTestInterfacePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FrameHostTestInterface,
                                                   handleOrPtrInfo);
  }

  function FrameHostTestInterfaceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FrameHostTestInterface, associatedInterfacePtrInfo);
  }

  FrameHostTestInterfaceAssociatedPtr.prototype =
      Object.create(FrameHostTestInterfacePtr.prototype);
  FrameHostTestInterfaceAssociatedPtr.prototype.constructor =
      FrameHostTestInterfaceAssociatedPtr;

  function FrameHostTestInterfaceProxy(receiver) {
    this.receiver_ = receiver;
  }
  FrameHostTestInterfacePtr.prototype.ping = function() {
    return FrameHostTestInterfaceProxy.prototype.ping
        .apply(this.ptr.getProxy(), arguments);
  };

  FrameHostTestInterfaceProxy.prototype.ping = function(sourceUrl, sourceEvent) {
    var params_ = new FrameHostTestInterface_Ping_Params();
    params_.sourceUrl = sourceUrl;
    params_.sourceEvent = sourceEvent;
    var builder = new codec.MessageV0Builder(
        kFrameHostTestInterface_Ping_Name,
        codec.align(FrameHostTestInterface_Ping_Params.encodedSize));
    builder.encodeStruct(FrameHostTestInterface_Ping_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FrameHostTestInterfacePtr.prototype.getName = function() {
    return FrameHostTestInterfaceProxy.prototype.getName
        .apply(this.ptr.getProxy(), arguments);
  };

  FrameHostTestInterfaceProxy.prototype.getName = function() {
    var params_ = new FrameHostTestInterface_GetName_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFrameHostTestInterface_GetName_Name,
          codec.align(FrameHostTestInterface_GetName_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FrameHostTestInterface_GetName_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FrameHostTestInterface_GetName_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FrameHostTestInterfaceStub(delegate) {
    this.delegate_ = delegate;
  }
  FrameHostTestInterfaceStub.prototype.ping = function(sourceUrl, sourceEvent) {
    return this.delegate_ && this.delegate_.ping && this.delegate_.ping(sourceUrl, sourceEvent);
  }
  FrameHostTestInterfaceStub.prototype.getName = function() {
    return this.delegate_ && this.delegate_.getName && this.delegate_.getName();
  }

  FrameHostTestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFrameHostTestInterface_Ping_Name:
      var params = reader.decodeStruct(FrameHostTestInterface_Ping_Params);
      this.ping(params.sourceUrl, params.sourceEvent);
      return true;
    default:
      return false;
    }
  };

  FrameHostTestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFrameHostTestInterface_GetName_Name:
      var params = reader.decodeStruct(FrameHostTestInterface_GetName_Params);
      this.getName().then(function(response) {
        var responseParams =
            new FrameHostTestInterface_GetName_ResponseParams();
        responseParams.name = response.name;
        var builder = new codec.MessageV1Builder(
            kFrameHostTestInterface_GetName_Name,
            codec.align(FrameHostTestInterface_GetName_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FrameHostTestInterface_GetName_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFrameHostTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFrameHostTestInterface_Ping_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FrameHostTestInterface_Ping_Params;
      break;
      case kFrameHostTestInterface_GetName_Name:
        if (message.expectsResponse())
          paramsClass = FrameHostTestInterface_GetName_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFrameHostTestInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFrameHostTestInterface_GetName_Name:
        if (message.isResponse())
          paramsClass = FrameHostTestInterface_GetName_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FrameHostTestInterface = {
    name: 'blink.mojom.FrameHostTestInterface',
    kVersion: 0,
    ptrClass: FrameHostTestInterfacePtr,
    proxyClass: FrameHostTestInterfaceProxy,
    stubClass: FrameHostTestInterfaceStub,
    validateRequest: validateFrameHostTestInterfaceRequest,
    validateResponse: validateFrameHostTestInterfaceResponse,
  };
  FrameHostTestInterfaceStub.prototype.validator = validateFrameHostTestInterfaceRequest;
  FrameHostTestInterfaceProxy.prototype.validator = validateFrameHostTestInterfaceResponse;
  exports.FrameHostTestInterface = FrameHostTestInterface;
  exports.FrameHostTestInterfacePtr = FrameHostTestInterfacePtr;
  exports.FrameHostTestInterfaceAssociatedPtr = FrameHostTestInterfaceAssociatedPtr;
})();