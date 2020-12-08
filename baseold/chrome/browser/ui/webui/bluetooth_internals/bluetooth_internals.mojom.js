// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/bluetooth_internals/bluetooth_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom');
  var adapter$ =
      mojo.internal.exposeNamespace('bluetooth.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'device/bluetooth/public/mojom/adapter.mojom', '../../../../../device/bluetooth/public/mojom/adapter.mojom.js');
  }



  function BluetoothInternalsHandler_GetAdapter_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothInternalsHandler_GetAdapter_Params.prototype.initDefaults_ = function() {
  };
  BluetoothInternalsHandler_GetAdapter_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothInternalsHandler_GetAdapter_Params.validate = function(messageValidator, offset) {
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

  BluetoothInternalsHandler_GetAdapter_Params.encodedSize = codec.kStructHeaderSize + 0;

  BluetoothInternalsHandler_GetAdapter_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothInternalsHandler_GetAdapter_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BluetoothInternalsHandler_GetAdapter_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothInternalsHandler_GetAdapter_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BluetoothInternalsHandler_GetAdapter_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothInternalsHandler_GetAdapter_ResponseParams.prototype.initDefaults_ = function() {
    this.adapter = new adapter$.AdapterPtr();
  };
  BluetoothInternalsHandler_GetAdapter_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothInternalsHandler_GetAdapter_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothInternalsHandler_GetAdapter_ResponseParams.adapter
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothInternalsHandler_GetAdapter_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothInternalsHandler_GetAdapter_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothInternalsHandler_GetAdapter_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.adapter = decoder.decodeStruct(new codec.NullableInterface(adapter$.AdapterPtr));
    return val;
  };

  BluetoothInternalsHandler_GetAdapter_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothInternalsHandler_GetAdapter_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.NullableInterface(adapter$.AdapterPtr), val.adapter);
  };
  var kBluetoothInternalsHandler_GetAdapter_Name = 0;

  function BluetoothInternalsHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BluetoothInternalsHandler,
                                                   handleOrPtrInfo);
  }

  function BluetoothInternalsHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BluetoothInternalsHandler, associatedInterfacePtrInfo);
  }

  BluetoothInternalsHandlerAssociatedPtr.prototype =
      Object.create(BluetoothInternalsHandlerPtr.prototype);
  BluetoothInternalsHandlerAssociatedPtr.prototype.constructor =
      BluetoothInternalsHandlerAssociatedPtr;

  function BluetoothInternalsHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  BluetoothInternalsHandlerPtr.prototype.getAdapter = function() {
    return BluetoothInternalsHandlerProxy.prototype.getAdapter
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothInternalsHandlerProxy.prototype.getAdapter = function() {
    var params_ = new BluetoothInternalsHandler_GetAdapter_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothInternalsHandler_GetAdapter_Name,
          codec.align(BluetoothInternalsHandler_GetAdapter_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothInternalsHandler_GetAdapter_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothInternalsHandler_GetAdapter_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BluetoothInternalsHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  BluetoothInternalsHandlerStub.prototype.getAdapter = function() {
    return this.delegate_ && this.delegate_.getAdapter && this.delegate_.getAdapter();
  }

  BluetoothInternalsHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  BluetoothInternalsHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBluetoothInternalsHandler_GetAdapter_Name:
      var params = reader.decodeStruct(BluetoothInternalsHandler_GetAdapter_Params);
      this.getAdapter().then(function(response) {
        var responseParams =
            new BluetoothInternalsHandler_GetAdapter_ResponseParams();
        responseParams.adapter = response.adapter;
        var builder = new codec.MessageV1Builder(
            kBluetoothInternalsHandler_GetAdapter_Name,
            codec.align(BluetoothInternalsHandler_GetAdapter_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothInternalsHandler_GetAdapter_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBluetoothInternalsHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBluetoothInternalsHandler_GetAdapter_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothInternalsHandler_GetAdapter_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBluetoothInternalsHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBluetoothInternalsHandler_GetAdapter_Name:
        if (message.isResponse())
          paramsClass = BluetoothInternalsHandler_GetAdapter_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BluetoothInternalsHandler = {
    name: 'mojom.BluetoothInternalsHandler',
    kVersion: 0,
    ptrClass: BluetoothInternalsHandlerPtr,
    proxyClass: BluetoothInternalsHandlerProxy,
    stubClass: BluetoothInternalsHandlerStub,
    validateRequest: validateBluetoothInternalsHandlerRequest,
    validateResponse: validateBluetoothInternalsHandlerResponse,
  };
  BluetoothInternalsHandlerStub.prototype.validator = validateBluetoothInternalsHandlerRequest;
  BluetoothInternalsHandlerProxy.prototype.validator = validateBluetoothInternalsHandlerResponse;
  exports.BluetoothInternalsHandler = BluetoothInternalsHandler;
  exports.BluetoothInternalsHandlerPtr = BluetoothInternalsHandlerPtr;
  exports.BluetoothInternalsHandlerAssociatedPtr = BluetoothInternalsHandlerAssociatedPtr;
})();