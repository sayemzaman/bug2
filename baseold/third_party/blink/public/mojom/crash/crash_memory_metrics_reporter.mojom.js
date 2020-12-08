// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/crash/crash_memory_metrics_reporter.mojom';
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



  function CrashMemoryMetricsReporter_SetSharedMemory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CrashMemoryMetricsReporter_SetSharedMemory_Params.prototype.initDefaults_ = function() {
    this.sharedMetricsBuffer = null;
  };
  CrashMemoryMetricsReporter_SetSharedMemory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CrashMemoryMetricsReporter_SetSharedMemory_Params.validate = function(messageValidator, offset) {
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


    // validate CrashMemoryMetricsReporter_SetSharedMemory_Params.sharedMetricsBuffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CrashMemoryMetricsReporter_SetSharedMemory_Params.encodedSize = codec.kStructHeaderSize + 8;

  CrashMemoryMetricsReporter_SetSharedMemory_Params.decode = function(decoder) {
    var packed;
    var val = new CrashMemoryMetricsReporter_SetSharedMemory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sharedMetricsBuffer = decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
    return val;
  };

  CrashMemoryMetricsReporter_SetSharedMemory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CrashMemoryMetricsReporter_SetSharedMemory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.sharedMetricsBuffer);
  };
  var kCrashMemoryMetricsReporter_SetSharedMemory_Name = 0;

  function CrashMemoryMetricsReporterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CrashMemoryMetricsReporter,
                                                   handleOrPtrInfo);
  }

  function CrashMemoryMetricsReporterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CrashMemoryMetricsReporter, associatedInterfacePtrInfo);
  }

  CrashMemoryMetricsReporterAssociatedPtr.prototype =
      Object.create(CrashMemoryMetricsReporterPtr.prototype);
  CrashMemoryMetricsReporterAssociatedPtr.prototype.constructor =
      CrashMemoryMetricsReporterAssociatedPtr;

  function CrashMemoryMetricsReporterProxy(receiver) {
    this.receiver_ = receiver;
  }
  CrashMemoryMetricsReporterPtr.prototype.setSharedMemory = function() {
    return CrashMemoryMetricsReporterProxy.prototype.setSharedMemory
        .apply(this.ptr.getProxy(), arguments);
  };

  CrashMemoryMetricsReporterProxy.prototype.setSharedMemory = function(sharedMetricsBuffer) {
    var params_ = new CrashMemoryMetricsReporter_SetSharedMemory_Params();
    params_.sharedMetricsBuffer = sharedMetricsBuffer;
    var builder = new codec.MessageV0Builder(
        kCrashMemoryMetricsReporter_SetSharedMemory_Name,
        codec.align(CrashMemoryMetricsReporter_SetSharedMemory_Params.encodedSize));
    builder.encodeStruct(CrashMemoryMetricsReporter_SetSharedMemory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CrashMemoryMetricsReporterStub(delegate) {
    this.delegate_ = delegate;
  }
  CrashMemoryMetricsReporterStub.prototype.setSharedMemory = function(sharedMetricsBuffer) {
    return this.delegate_ && this.delegate_.setSharedMemory && this.delegate_.setSharedMemory(sharedMetricsBuffer);
  }

  CrashMemoryMetricsReporterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCrashMemoryMetricsReporter_SetSharedMemory_Name:
      var params = reader.decodeStruct(CrashMemoryMetricsReporter_SetSharedMemory_Params);
      this.setSharedMemory(params.sharedMetricsBuffer);
      return true;
    default:
      return false;
    }
  };

  CrashMemoryMetricsReporterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCrashMemoryMetricsReporterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCrashMemoryMetricsReporter_SetSharedMemory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CrashMemoryMetricsReporter_SetSharedMemory_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCrashMemoryMetricsReporterResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CrashMemoryMetricsReporter = {
    name: 'blink.mojom.CrashMemoryMetricsReporter',
    kVersion: 0,
    ptrClass: CrashMemoryMetricsReporterPtr,
    proxyClass: CrashMemoryMetricsReporterProxy,
    stubClass: CrashMemoryMetricsReporterStub,
    validateRequest: validateCrashMemoryMetricsReporterRequest,
    validateResponse: null,
  };
  CrashMemoryMetricsReporterStub.prototype.validator = validateCrashMemoryMetricsReporterRequest;
  CrashMemoryMetricsReporterProxy.prototype.validator = null;
  exports.CrashMemoryMetricsReporter = CrashMemoryMetricsReporter;
  exports.CrashMemoryMetricsReporterPtr = CrashMemoryMetricsReporterPtr;
  exports.CrashMemoryMetricsReporterAssociatedPtr = CrashMemoryMetricsReporterAssociatedPtr;
})();