// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/previews_resource_loading_hints.mojom';
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



  function PreviewsResourceLoadingHints(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PreviewsResourceLoadingHints.prototype.initDefaults_ = function() {
    this.ukmSourceId = 0;
    this.subresourcesToBlock = null;
  };
  PreviewsResourceLoadingHints.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PreviewsResourceLoadingHints.validate = function(messageValidator, offset) {
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



    // validate PreviewsResourceLoadingHints.subresourcesToBlock
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PreviewsResourceLoadingHints.encodedSize = codec.kStructHeaderSize + 16;

  PreviewsResourceLoadingHints.decode = function(decoder) {
    var packed;
    var val = new PreviewsResourceLoadingHints();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ukmSourceId = decoder.decodeStruct(codec.Int64);
    val.subresourcesToBlock = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  PreviewsResourceLoadingHints.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PreviewsResourceLoadingHints.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.ukmSourceId);
    encoder.encodeArrayPointer(codec.String, val.subresourcesToBlock);
  };
  function PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.prototype.initDefaults_ = function() {
    this.previewsResourceLoadingHints = null;
  };
  PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.validate = function(messageValidator, offset) {
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


    // validate PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.previewsResourceLoadingHints
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PreviewsResourceLoadingHints, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.encodedSize = codec.kStructHeaderSize + 8;

  PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.decode = function(decoder) {
    var packed;
    var val = new PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.previewsResourceLoadingHints = decoder.decodeStructPointer(PreviewsResourceLoadingHints);
    return val;
  };

  PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PreviewsResourceLoadingHints, val.previewsResourceLoadingHints);
  };
  var kPreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Name = 0;

  function PreviewsResourceLoadingHintsReceiverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PreviewsResourceLoadingHintsReceiver,
                                                   handleOrPtrInfo);
  }

  function PreviewsResourceLoadingHintsReceiverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PreviewsResourceLoadingHintsReceiver, associatedInterfacePtrInfo);
  }

  PreviewsResourceLoadingHintsReceiverAssociatedPtr.prototype =
      Object.create(PreviewsResourceLoadingHintsReceiverPtr.prototype);
  PreviewsResourceLoadingHintsReceiverAssociatedPtr.prototype.constructor =
      PreviewsResourceLoadingHintsReceiverAssociatedPtr;

  function PreviewsResourceLoadingHintsReceiverProxy(receiver) {
    this.receiver_ = receiver;
  }
  PreviewsResourceLoadingHintsReceiverPtr.prototype.setResourceLoadingHints = function() {
    return PreviewsResourceLoadingHintsReceiverProxy.prototype.setResourceLoadingHints
        .apply(this.ptr.getProxy(), arguments);
  };

  PreviewsResourceLoadingHintsReceiverProxy.prototype.setResourceLoadingHints = function(previewsResourceLoadingHints) {
    var params_ = new PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params();
    params_.previewsResourceLoadingHints = previewsResourceLoadingHints;
    var builder = new codec.MessageV0Builder(
        kPreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Name,
        codec.align(PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params.encodedSize));
    builder.encodeStruct(PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PreviewsResourceLoadingHintsReceiverStub(delegate) {
    this.delegate_ = delegate;
  }
  PreviewsResourceLoadingHintsReceiverStub.prototype.setResourceLoadingHints = function(previewsResourceLoadingHints) {
    return this.delegate_ && this.delegate_.setResourceLoadingHints && this.delegate_.setResourceLoadingHints(previewsResourceLoadingHints);
  }

  PreviewsResourceLoadingHintsReceiverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Name:
      var params = reader.decodeStruct(PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params);
      this.setResourceLoadingHints(params.previewsResourceLoadingHints);
      return true;
    default:
      return false;
    }
  };

  PreviewsResourceLoadingHintsReceiverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePreviewsResourceLoadingHintsReceiverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PreviewsResourceLoadingHintsReceiver_SetResourceLoadingHints_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePreviewsResourceLoadingHintsReceiverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PreviewsResourceLoadingHintsReceiver = {
    name: 'blink.mojom.PreviewsResourceLoadingHintsReceiver',
    kVersion: 0,
    ptrClass: PreviewsResourceLoadingHintsReceiverPtr,
    proxyClass: PreviewsResourceLoadingHintsReceiverProxy,
    stubClass: PreviewsResourceLoadingHintsReceiverStub,
    validateRequest: validatePreviewsResourceLoadingHintsReceiverRequest,
    validateResponse: null,
  };
  PreviewsResourceLoadingHintsReceiverStub.prototype.validator = validatePreviewsResourceLoadingHintsReceiverRequest;
  PreviewsResourceLoadingHintsReceiverProxy.prototype.validator = null;
  exports.PreviewsResourceLoadingHints = PreviewsResourceLoadingHints;
  exports.PreviewsResourceLoadingHintsReceiver = PreviewsResourceLoadingHintsReceiver;
  exports.PreviewsResourceLoadingHintsReceiverPtr = PreviewsResourceLoadingHintsReceiverPtr;
  exports.PreviewsResourceLoadingHintsReceiverAssociatedPtr = PreviewsResourceLoadingHintsReceiverAssociatedPtr;
})();