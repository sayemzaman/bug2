// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/net_log.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../../mojo/public/mojom/base/values.mojom.js');
  }


  var NetLogCaptureMode = {};
  NetLogCaptureMode.DEFAULT = 0;
  NetLogCaptureMode.INCLUDE_COOKIES_AND_CREDENTIALS = NetLogCaptureMode.DEFAULT + 1;
  NetLogCaptureMode.INCLUDE_SOCKET_BYTES = NetLogCaptureMode.INCLUDE_COOKIES_AND_CREDENTIALS + 1;
  NetLogCaptureMode.MIN_VALUE = 0,
  NetLogCaptureMode.MAX_VALUE = 2,

  NetLogCaptureMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  NetLogCaptureMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function NetLogExporter_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetLogExporter_Start_Params.prototype.initDefaults_ = function() {
    this.destination = null;
    this.extraConstants = null;
    this.captureMode = 0;
    this.maxFileSize = 0;
  };
  NetLogExporter_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetLogExporter_Start_Params.validate = function(messageValidator, offset) {
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


    // validate NetLogExporter_Start_Params.destination
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetLogExporter_Start_Params.extraConstants
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetLogExporter_Start_Params.captureMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, NetLogCaptureMode);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetLogExporter_Start_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetLogExporter_Start_Params.decode = function(decoder) {
    var packed;
    var val = new NetLogExporter_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.destination = decoder.decodeStructPointer(file$.File);
    val.extraConstants = decoder.decodeStructPointer(values$.DictionaryValue);
    val.captureMode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.maxFileSize = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  NetLogExporter_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetLogExporter_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.destination);
    encoder.encodeStructPointer(values$.DictionaryValue, val.extraConstants);
    encoder.encodeStruct(codec.Int32, val.captureMode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.maxFileSize);
  };
  function NetLogExporter_Start_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetLogExporter_Start_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  NetLogExporter_Start_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetLogExporter_Start_ResponseParams.validate = function(messageValidator, offset) {
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

  NetLogExporter_Start_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetLogExporter_Start_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetLogExporter_Start_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetLogExporter_Start_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetLogExporter_Start_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetLogExporter_Stop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetLogExporter_Stop_Params.prototype.initDefaults_ = function() {
    this.polledValues = null;
  };
  NetLogExporter_Stop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetLogExporter_Stop_Params.validate = function(messageValidator, offset) {
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


    // validate NetLogExporter_Stop_Params.polledValues
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetLogExporter_Stop_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetLogExporter_Stop_Params.decode = function(decoder) {
    var packed;
    var val = new NetLogExporter_Stop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.polledValues = decoder.decodeStructPointer(values$.DictionaryValue);
    return val;
  };

  NetLogExporter_Stop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetLogExporter_Stop_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(values$.DictionaryValue, val.polledValues);
  };
  function NetLogExporter_Stop_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetLogExporter_Stop_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  NetLogExporter_Stop_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetLogExporter_Stop_ResponseParams.validate = function(messageValidator, offset) {
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

  NetLogExporter_Stop_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetLogExporter_Stop_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetLogExporter_Stop_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetLogExporter_Stop_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetLogExporter_Stop_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kNetLogExporter_Start_Name = 0;
  var kNetLogExporter_Stop_Name = 1;

  function NetLogExporterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetLogExporter,
                                                   handleOrPtrInfo);
  }

  function NetLogExporterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetLogExporter, associatedInterfacePtrInfo);
  }

  NetLogExporterAssociatedPtr.prototype =
      Object.create(NetLogExporterPtr.prototype);
  NetLogExporterAssociatedPtr.prototype.constructor =
      NetLogExporterAssociatedPtr;

  function NetLogExporterProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetLogExporterPtr.prototype.start = function() {
    return NetLogExporterProxy.prototype.start
        .apply(this.ptr.getProxy(), arguments);
  };

  NetLogExporterProxy.prototype.start = function(destination, extraConstants, captureMode, maxFileSize) {
    var params_ = new NetLogExporter_Start_Params();
    params_.destination = destination;
    params_.extraConstants = extraConstants;
    params_.captureMode = captureMode;
    params_.maxFileSize = maxFileSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetLogExporter_Start_Name,
          codec.align(NetLogExporter_Start_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetLogExporter_Start_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetLogExporter_Start_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetLogExporterPtr.prototype.stop = function() {
    return NetLogExporterProxy.prototype.stop
        .apply(this.ptr.getProxy(), arguments);
  };

  NetLogExporterProxy.prototype.stop = function(polledValues) {
    var params_ = new NetLogExporter_Stop_Params();
    params_.polledValues = polledValues;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetLogExporter_Stop_Name,
          codec.align(NetLogExporter_Stop_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetLogExporter_Stop_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetLogExporter_Stop_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function NetLogExporterStub(delegate) {
    this.delegate_ = delegate;
  }
  NetLogExporterStub.prototype.start = function(destination, extraConstants, captureMode, maxFileSize) {
    return this.delegate_ && this.delegate_.start && this.delegate_.start(destination, extraConstants, captureMode, maxFileSize);
  }
  NetLogExporterStub.prototype.stop = function(polledValues) {
    return this.delegate_ && this.delegate_.stop && this.delegate_.stop(polledValues);
  }

  NetLogExporterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  NetLogExporterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetLogExporter_Start_Name:
      var params = reader.decodeStruct(NetLogExporter_Start_Params);
      this.start(params.destination, params.extraConstants, params.captureMode, params.maxFileSize).then(function(response) {
        var responseParams =
            new NetLogExporter_Start_ResponseParams();
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kNetLogExporter_Start_Name,
            codec.align(NetLogExporter_Start_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetLogExporter_Start_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetLogExporter_Stop_Name:
      var params = reader.decodeStruct(NetLogExporter_Stop_Params);
      this.stop(params.polledValues).then(function(response) {
        var responseParams =
            new NetLogExporter_Stop_ResponseParams();
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kNetLogExporter_Stop_Name,
            codec.align(NetLogExporter_Stop_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetLogExporter_Stop_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetLogExporterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetLogExporter_Start_Name:
        if (message.expectsResponse())
          paramsClass = NetLogExporter_Start_Params;
      break;
      case kNetLogExporter_Stop_Name:
        if (message.expectsResponse())
          paramsClass = NetLogExporter_Stop_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetLogExporterResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetLogExporter_Start_Name:
        if (message.isResponse())
          paramsClass = NetLogExporter_Start_ResponseParams;
        break;
      case kNetLogExporter_Stop_Name:
        if (message.isResponse())
          paramsClass = NetLogExporter_Stop_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetLogExporter = {
    name: 'network.mojom.NetLogExporter',
    kVersion: 0,
    ptrClass: NetLogExporterPtr,
    proxyClass: NetLogExporterProxy,
    stubClass: NetLogExporterStub,
    validateRequest: validateNetLogExporterRequest,
    validateResponse: validateNetLogExporterResponse,
  };
  NetLogExporter.kUnlimitedFileSize = 0xFFFFFFFFFFFFFFFF,
  NetLogExporterStub.prototype.validator = validateNetLogExporterRequest;
  NetLogExporterProxy.prototype.validator = validateNetLogExporterResponse;
  exports.NetLogCaptureMode = NetLogCaptureMode;
  exports.NetLogExporter = NetLogExporter;
  exports.NetLogExporterPtr = NetLogExporterPtr;
  exports.NetLogExporterAssociatedPtr = NetLogExporterAssociatedPtr;
})();