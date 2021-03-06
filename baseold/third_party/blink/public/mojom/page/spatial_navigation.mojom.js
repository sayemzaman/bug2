// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/page/spatial_navigation.mojom';
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



  function SpatialNavigationState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpatialNavigationState.prototype.initDefaults_ = function() {
    this.canExitFocus = false;
    this.canSelectElement = false;
    this.isFormFocused = false;
    this.hasNextFormElement = false;
    this.hasDefaultVideoControls = false;
  };
  SpatialNavigationState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpatialNavigationState.validate = function(messageValidator, offset) {
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

  SpatialNavigationState.encodedSize = codec.kStructHeaderSize + 8;

  SpatialNavigationState.decode = function(decoder) {
    var packed;
    var val = new SpatialNavigationState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.canExitFocus = (packed >> 0) & 1 ? true : false;
    val.canSelectElement = (packed >> 1) & 1 ? true : false;
    val.isFormFocused = (packed >> 2) & 1 ? true : false;
    val.hasNextFormElement = (packed >> 3) & 1 ? true : false;
    val.hasDefaultVideoControls = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SpatialNavigationState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpatialNavigationState.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.canExitFocus & 1) << 0
    packed |= (val.canSelectElement & 1) << 1
    packed |= (val.isFormFocused & 1) << 2
    packed |= (val.hasNextFormElement & 1) << 3
    packed |= (val.hasDefaultVideoControls & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SpatialNavigationHost_SpatialNavigationStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpatialNavigationHost_SpatialNavigationStateChanged_Params.prototype.initDefaults_ = function() {
    this.state = null;
  };
  SpatialNavigationHost_SpatialNavigationStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpatialNavigationHost_SpatialNavigationStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate SpatialNavigationHost_SpatialNavigationStateChanged_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SpatialNavigationState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SpatialNavigationHost_SpatialNavigationStateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  SpatialNavigationHost_SpatialNavigationStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new SpatialNavigationHost_SpatialNavigationStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStructPointer(SpatialNavigationState);
    return val;
  };

  SpatialNavigationHost_SpatialNavigationStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpatialNavigationHost_SpatialNavigationStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SpatialNavigationState, val.state);
  };
  var kSpatialNavigationHost_SpatialNavigationStateChanged_Name = 0;

  function SpatialNavigationHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SpatialNavigationHost,
                                                   handleOrPtrInfo);
  }

  function SpatialNavigationHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SpatialNavigationHost, associatedInterfacePtrInfo);
  }

  SpatialNavigationHostAssociatedPtr.prototype =
      Object.create(SpatialNavigationHostPtr.prototype);
  SpatialNavigationHostAssociatedPtr.prototype.constructor =
      SpatialNavigationHostAssociatedPtr;

  function SpatialNavigationHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  SpatialNavigationHostPtr.prototype.spatialNavigationStateChanged = function() {
    return SpatialNavigationHostProxy.prototype.spatialNavigationStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  SpatialNavigationHostProxy.prototype.spatialNavigationStateChanged = function(state) {
    var params_ = new SpatialNavigationHost_SpatialNavigationStateChanged_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kSpatialNavigationHost_SpatialNavigationStateChanged_Name,
        codec.align(SpatialNavigationHost_SpatialNavigationStateChanged_Params.encodedSize));
    builder.encodeStruct(SpatialNavigationHost_SpatialNavigationStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SpatialNavigationHostStub(delegate) {
    this.delegate_ = delegate;
  }
  SpatialNavigationHostStub.prototype.spatialNavigationStateChanged = function(state) {
    return this.delegate_ && this.delegate_.spatialNavigationStateChanged && this.delegate_.spatialNavigationStateChanged(state);
  }

  SpatialNavigationHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSpatialNavigationHost_SpatialNavigationStateChanged_Name:
      var params = reader.decodeStruct(SpatialNavigationHost_SpatialNavigationStateChanged_Params);
      this.spatialNavigationStateChanged(params.state);
      return true;
    default:
      return false;
    }
  };

  SpatialNavigationHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSpatialNavigationHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSpatialNavigationHost_SpatialNavigationStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SpatialNavigationHost_SpatialNavigationStateChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSpatialNavigationHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SpatialNavigationHost = {
    name: 'blink.mojom.SpatialNavigationHost',
    kVersion: 0,
    ptrClass: SpatialNavigationHostPtr,
    proxyClass: SpatialNavigationHostProxy,
    stubClass: SpatialNavigationHostStub,
    validateRequest: validateSpatialNavigationHostRequest,
    validateResponse: null,
  };
  SpatialNavigationHostStub.prototype.validator = validateSpatialNavigationHostRequest;
  SpatialNavigationHostProxy.prototype.validator = null;
  exports.SpatialNavigationState = SpatialNavigationState;
  exports.SpatialNavigationHost = SpatialNavigationHost;
  exports.SpatialNavigationHostPtr = SpatialNavigationHostPtr;
  exports.SpatialNavigationHostAssociatedPtr = SpatialNavigationHostAssociatedPtr;
})();