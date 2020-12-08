// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/oom_intervention/oom_intervention.mojom';
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
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }



  function DetectionArgs(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DetectionArgs.prototype.initDefaults_ = function() {
    this.blinkWorkloadThreshold = 0;
    this.privateFootprintThreshold = 0;
    this.swapThreshold = 0;
    this.virtualMemoryThresold = 0;
  };
  DetectionArgs.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DetectionArgs.validate = function(messageValidator, offset) {
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





    return validator.validationError.NONE;
  };

  DetectionArgs.encodedSize = codec.kStructHeaderSize + 32;

  DetectionArgs.decode = function(decoder) {
    var packed;
    var val = new DetectionArgs();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.blinkWorkloadThreshold = decoder.decodeStruct(codec.Uint64);
    val.privateFootprintThreshold = decoder.decodeStruct(codec.Uint64);
    val.swapThreshold = decoder.decodeStruct(codec.Uint64);
    val.virtualMemoryThresold = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  DetectionArgs.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DetectionArgs.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.blinkWorkloadThreshold);
    encoder.encodeStruct(codec.Uint64, val.privateFootprintThreshold);
    encoder.encodeStruct(codec.Uint64, val.swapThreshold);
    encoder.encodeStruct(codec.Uint64, val.virtualMemoryThresold);
  };
  function OomInterventionHost_OnHighMemoryUsage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OomInterventionHost_OnHighMemoryUsage_Params.prototype.initDefaults_ = function() {
  };
  OomInterventionHost_OnHighMemoryUsage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OomInterventionHost_OnHighMemoryUsage_Params.validate = function(messageValidator, offset) {
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

  OomInterventionHost_OnHighMemoryUsage_Params.encodedSize = codec.kStructHeaderSize + 0;

  OomInterventionHost_OnHighMemoryUsage_Params.decode = function(decoder) {
    var packed;
    var val = new OomInterventionHost_OnHighMemoryUsage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  OomInterventionHost_OnHighMemoryUsage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OomInterventionHost_OnHighMemoryUsage_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function OomIntervention_StartDetection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OomIntervention_StartDetection_Params.prototype.initDefaults_ = function() {
    this.host = new OomInterventionHostPtr();
    this.detectionArgs = null;
    this.rendererPauseEnabled = false;
    this.navigateAdsEnabled = false;
    this.purgeV8MemoryEnabled = false;
  };
  OomIntervention_StartDetection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OomIntervention_StartDetection_Params.validate = function(messageValidator, offset) {
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


    // validate OomIntervention_StartDetection_Params.host
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OomIntervention_StartDetection_Params.detectionArgs
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, DetectionArgs, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  OomIntervention_StartDetection_Params.encodedSize = codec.kStructHeaderSize + 24;

  OomIntervention_StartDetection_Params.decode = function(decoder) {
    var packed;
    var val = new OomIntervention_StartDetection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(new codec.Interface(OomInterventionHostPtr));
    val.detectionArgs = decoder.decodeStructPointer(DetectionArgs);
    packed = decoder.readUint8();
    val.rendererPauseEnabled = (packed >> 0) & 1 ? true : false;
    val.navigateAdsEnabled = (packed >> 1) & 1 ? true : false;
    val.purgeV8MemoryEnabled = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OomIntervention_StartDetection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OomIntervention_StartDetection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(OomInterventionHostPtr), val.host);
    encoder.encodeStructPointer(DetectionArgs, val.detectionArgs);
    packed = 0;
    packed |= (val.rendererPauseEnabled & 1) << 0
    packed |= (val.navigateAdsEnabled & 1) << 1
    packed |= (val.purgeV8MemoryEnabled & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kOomInterventionHost_OnHighMemoryUsage_Name = 0;

  function OomInterventionHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OomInterventionHost,
                                                   handleOrPtrInfo);
  }

  function OomInterventionHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OomInterventionHost, associatedInterfacePtrInfo);
  }

  OomInterventionHostAssociatedPtr.prototype =
      Object.create(OomInterventionHostPtr.prototype);
  OomInterventionHostAssociatedPtr.prototype.constructor =
      OomInterventionHostAssociatedPtr;

  function OomInterventionHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  OomInterventionHostPtr.prototype.onHighMemoryUsage = function() {
    return OomInterventionHostProxy.prototype.onHighMemoryUsage
        .apply(this.ptr.getProxy(), arguments);
  };

  OomInterventionHostProxy.prototype.onHighMemoryUsage = function() {
    var params_ = new OomInterventionHost_OnHighMemoryUsage_Params();
    var builder = new codec.MessageV0Builder(
        kOomInterventionHost_OnHighMemoryUsage_Name,
        codec.align(OomInterventionHost_OnHighMemoryUsage_Params.encodedSize));
    builder.encodeStruct(OomInterventionHost_OnHighMemoryUsage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OomInterventionHostStub(delegate) {
    this.delegate_ = delegate;
  }
  OomInterventionHostStub.prototype.onHighMemoryUsage = function() {
    return this.delegate_ && this.delegate_.onHighMemoryUsage && this.delegate_.onHighMemoryUsage();
  }

  OomInterventionHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOomInterventionHost_OnHighMemoryUsage_Name:
      var params = reader.decodeStruct(OomInterventionHost_OnHighMemoryUsage_Params);
      this.onHighMemoryUsage();
      return true;
    default:
      return false;
    }
  };

  OomInterventionHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateOomInterventionHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOomInterventionHost_OnHighMemoryUsage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OomInterventionHost_OnHighMemoryUsage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOomInterventionHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var OomInterventionHost = {
    name: 'blink.mojom.OomInterventionHost',
    kVersion: 0,
    ptrClass: OomInterventionHostPtr,
    proxyClass: OomInterventionHostProxy,
    stubClass: OomInterventionHostStub,
    validateRequest: validateOomInterventionHostRequest,
    validateResponse: null,
  };
  OomInterventionHostStub.prototype.validator = validateOomInterventionHostRequest;
  OomInterventionHostProxy.prototype.validator = null;
  var kOomIntervention_StartDetection_Name = 0;

  function OomInterventionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OomIntervention,
                                                   handleOrPtrInfo);
  }

  function OomInterventionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OomIntervention, associatedInterfacePtrInfo);
  }

  OomInterventionAssociatedPtr.prototype =
      Object.create(OomInterventionPtr.prototype);
  OomInterventionAssociatedPtr.prototype.constructor =
      OomInterventionAssociatedPtr;

  function OomInterventionProxy(receiver) {
    this.receiver_ = receiver;
  }
  OomInterventionPtr.prototype.startDetection = function() {
    return OomInterventionProxy.prototype.startDetection
        .apply(this.ptr.getProxy(), arguments);
  };

  OomInterventionProxy.prototype.startDetection = function(host, detectionArgs, rendererPauseEnabled, navigateAdsEnabled, purgeV8MemoryEnabled) {
    var params_ = new OomIntervention_StartDetection_Params();
    params_.host = host;
    params_.detectionArgs = detectionArgs;
    params_.rendererPauseEnabled = rendererPauseEnabled;
    params_.navigateAdsEnabled = navigateAdsEnabled;
    params_.purgeV8MemoryEnabled = purgeV8MemoryEnabled;
    var builder = new codec.MessageV0Builder(
        kOomIntervention_StartDetection_Name,
        codec.align(OomIntervention_StartDetection_Params.encodedSize));
    builder.encodeStruct(OomIntervention_StartDetection_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OomInterventionStub(delegate) {
    this.delegate_ = delegate;
  }
  OomInterventionStub.prototype.startDetection = function(host, detectionArgs, rendererPauseEnabled, navigateAdsEnabled, purgeV8MemoryEnabled) {
    return this.delegate_ && this.delegate_.startDetection && this.delegate_.startDetection(host, detectionArgs, rendererPauseEnabled, navigateAdsEnabled, purgeV8MemoryEnabled);
  }

  OomInterventionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOomIntervention_StartDetection_Name:
      var params = reader.decodeStruct(OomIntervention_StartDetection_Params);
      this.startDetection(params.host, params.detectionArgs, params.rendererPauseEnabled, params.navigateAdsEnabled, params.purgeV8MemoryEnabled);
      return true;
    default:
      return false;
    }
  };

  OomInterventionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateOomInterventionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOomIntervention_StartDetection_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OomIntervention_StartDetection_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOomInterventionResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var OomIntervention = {
    name: 'blink.mojom.OomIntervention',
    kVersion: 0,
    ptrClass: OomInterventionPtr,
    proxyClass: OomInterventionProxy,
    stubClass: OomInterventionStub,
    validateRequest: validateOomInterventionRequest,
    validateResponse: null,
  };
  OomInterventionStub.prototype.validator = validateOomInterventionRequest;
  OomInterventionProxy.prototype.validator = null;
  exports.DetectionArgs = DetectionArgs;
  exports.OomInterventionHost = OomInterventionHost;
  exports.OomInterventionHostPtr = OomInterventionHostPtr;
  exports.OomInterventionHostAssociatedPtr = OomInterventionHostAssociatedPtr;
  exports.OomIntervention = OomIntervention;
  exports.OomInterventionPtr = OomInterventionPtr;
  exports.OomInterventionAssociatedPtr = OomInterventionAssociatedPtr;
})();