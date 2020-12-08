// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/unhandled_tap_notifier/unhandled_tap_notifier.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }



  function UnhandledTapInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnhandledTapInfo.prototype.initDefaults_ = function() {
    this.tappedPositionInViewport = null;
    this.fontSizeInPixels = 0;
    this.elementTextRunLength = 0;
  };
  UnhandledTapInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnhandledTapInfo.validate = function(messageValidator, offset) {
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


    // validate UnhandledTapInfo.tappedPositionInViewport
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  UnhandledTapInfo.encodedSize = codec.kStructHeaderSize + 16;

  UnhandledTapInfo.decode = function(decoder) {
    var packed;
    var val = new UnhandledTapInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tappedPositionInViewport = decoder.decodeStructPointer(geometry$.Point);
    val.fontSizeInPixels = decoder.decodeStruct(codec.Uint32);
    val.elementTextRunLength = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  UnhandledTapInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnhandledTapInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Point, val.tappedPositionInViewport);
    encoder.encodeStruct(codec.Uint32, val.fontSizeInPixels);
    encoder.encodeStruct(codec.Uint32, val.elementTextRunLength);
  };
  function UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.prototype.initDefaults_ = function() {
    this.unhandledTapInfo = null;
  };
  UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.validate = function(messageValidator, offset) {
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


    // validate UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.unhandledTapInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, UnhandledTapInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.encodedSize = codec.kStructHeaderSize + 8;

  UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.decode = function(decoder) {
    var packed;
    var val = new UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.unhandledTapInfo = decoder.decodeStructPointer(UnhandledTapInfo);
    return val;
  };

  UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(UnhandledTapInfo, val.unhandledTapInfo);
  };
  var kUnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Name = 0;

  function UnhandledTapNotifierPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UnhandledTapNotifier,
                                                   handleOrPtrInfo);
  }

  function UnhandledTapNotifierAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UnhandledTapNotifier, associatedInterfacePtrInfo);
  }

  UnhandledTapNotifierAssociatedPtr.prototype =
      Object.create(UnhandledTapNotifierPtr.prototype);
  UnhandledTapNotifierAssociatedPtr.prototype.constructor =
      UnhandledTapNotifierAssociatedPtr;

  function UnhandledTapNotifierProxy(receiver) {
    this.receiver_ = receiver;
  }
  UnhandledTapNotifierPtr.prototype.showUnhandledTapUIIfNeeded = function() {
    return UnhandledTapNotifierProxy.prototype.showUnhandledTapUIIfNeeded
        .apply(this.ptr.getProxy(), arguments);
  };

  UnhandledTapNotifierProxy.prototype.showUnhandledTapUIIfNeeded = function(unhandledTapInfo) {
    var params_ = new UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params();
    params_.unhandledTapInfo = unhandledTapInfo;
    var builder = new codec.MessageV0Builder(
        kUnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Name,
        codec.align(UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params.encodedSize));
    builder.encodeStruct(UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UnhandledTapNotifierStub(delegate) {
    this.delegate_ = delegate;
  }
  UnhandledTapNotifierStub.prototype.showUnhandledTapUIIfNeeded = function(unhandledTapInfo) {
    return this.delegate_ && this.delegate_.showUnhandledTapUIIfNeeded && this.delegate_.showUnhandledTapUIIfNeeded(unhandledTapInfo);
  }

  UnhandledTapNotifierStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Name:
      var params = reader.decodeStruct(UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params);
      this.showUnhandledTapUIIfNeeded(params.unhandledTapInfo);
      return true;
    default:
      return false;
    }
  };

  UnhandledTapNotifierStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateUnhandledTapNotifierRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUnhandledTapNotifierResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var UnhandledTapNotifier = {
    name: 'blink.mojom.UnhandledTapNotifier',
    kVersion: 0,
    ptrClass: UnhandledTapNotifierPtr,
    proxyClass: UnhandledTapNotifierProxy,
    stubClass: UnhandledTapNotifierStub,
    validateRequest: validateUnhandledTapNotifierRequest,
    validateResponse: null,
  };
  UnhandledTapNotifierStub.prototype.validator = validateUnhandledTapNotifierRequest;
  UnhandledTapNotifierProxy.prototype.validator = null;
  exports.UnhandledTapInfo = UnhandledTapInfo;
  exports.UnhandledTapNotifier = UnhandledTapNotifier;
  exports.UnhandledTapNotifierPtr = UnhandledTapNotifierPtr;
  exports.UnhandledTapNotifierAssociatedPtr = UnhandledTapNotifierAssociatedPtr;
})();