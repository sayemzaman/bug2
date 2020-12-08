// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/insecure_input/insecure_input_service.mojom';
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



  function InsecureInputService_DidEditFieldInInsecureContext_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InsecureInputService_DidEditFieldInInsecureContext_Params.prototype.initDefaults_ = function() {
  };
  InsecureInputService_DidEditFieldInInsecureContext_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InsecureInputService_DidEditFieldInInsecureContext_Params.validate = function(messageValidator, offset) {
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

  InsecureInputService_DidEditFieldInInsecureContext_Params.encodedSize = codec.kStructHeaderSize + 0;

  InsecureInputService_DidEditFieldInInsecureContext_Params.decode = function(decoder) {
    var packed;
    var val = new InsecureInputService_DidEditFieldInInsecureContext_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  InsecureInputService_DidEditFieldInInsecureContext_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InsecureInputService_DidEditFieldInInsecureContext_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kInsecureInputService_DidEditFieldInInsecureContext_Name = 0;

  function InsecureInputServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(InsecureInputService,
                                                   handleOrPtrInfo);
  }

  function InsecureInputServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        InsecureInputService, associatedInterfacePtrInfo);
  }

  InsecureInputServiceAssociatedPtr.prototype =
      Object.create(InsecureInputServicePtr.prototype);
  InsecureInputServiceAssociatedPtr.prototype.constructor =
      InsecureInputServiceAssociatedPtr;

  function InsecureInputServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  InsecureInputServicePtr.prototype.didEditFieldInInsecureContext = function() {
    return InsecureInputServiceProxy.prototype.didEditFieldInInsecureContext
        .apply(this.ptr.getProxy(), arguments);
  };

  InsecureInputServiceProxy.prototype.didEditFieldInInsecureContext = function() {
    var params_ = new InsecureInputService_DidEditFieldInInsecureContext_Params();
    var builder = new codec.MessageV0Builder(
        kInsecureInputService_DidEditFieldInInsecureContext_Name,
        codec.align(InsecureInputService_DidEditFieldInInsecureContext_Params.encodedSize));
    builder.encodeStruct(InsecureInputService_DidEditFieldInInsecureContext_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function InsecureInputServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  InsecureInputServiceStub.prototype.didEditFieldInInsecureContext = function() {
    return this.delegate_ && this.delegate_.didEditFieldInInsecureContext && this.delegate_.didEditFieldInInsecureContext();
  }

  InsecureInputServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kInsecureInputService_DidEditFieldInInsecureContext_Name:
      var params = reader.decodeStruct(InsecureInputService_DidEditFieldInInsecureContext_Params);
      this.didEditFieldInInsecureContext();
      return true;
    default:
      return false;
    }
  };

  InsecureInputServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateInsecureInputServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kInsecureInputService_DidEditFieldInInsecureContext_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = InsecureInputService_DidEditFieldInInsecureContext_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateInsecureInputServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var InsecureInputService = {
    name: 'blink.mojom.InsecureInputService',
    kVersion: 0,
    ptrClass: InsecureInputServicePtr,
    proxyClass: InsecureInputServiceProxy,
    stubClass: InsecureInputServiceStub,
    validateRequest: validateInsecureInputServiceRequest,
    validateResponse: null,
  };
  InsecureInputServiceStub.prototype.validator = validateInsecureInputServiceRequest;
  InsecureInputServiceProxy.prototype.validator = null;
  exports.InsecureInputService = InsecureInputService;
  exports.InsecureInputServicePtr = InsecureInputServicePtr;
  exports.InsecureInputServiceAssociatedPtr = InsecureInputServiceAssociatedPtr;
})();