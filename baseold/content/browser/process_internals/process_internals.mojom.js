// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/browser/process_internals/process_internals.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function SiteInstanceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SiteInstanceInfo.prototype.initDefaults_ = function() {
    this.id = 0;
    this.locked = false;
    this.siteUrl = null;
  };
  SiteInstanceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SiteInstanceInfo.validate = function(messageValidator, offset) {
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




    // validate SiteInstanceInfo.siteUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SiteInstanceInfo.encodedSize = codec.kStructHeaderSize + 16;

  SiteInstanceInfo.decode = function(decoder) {
    var packed;
    var val = new SiteInstanceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.locked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.siteUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  SiteInstanceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SiteInstanceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    packed = 0;
    packed |= (val.locked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.siteUrl);
  };
  function FrameInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameInfo.prototype.initDefaults_ = function() {
    this.routingId = 0;
    this.processId = 0;
    this.siteInstance = null;
    this.lastCommittedUrl = null;
    this.subframes = null;
  };
  FrameInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameInfo.validate = function(messageValidator, offset) {
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




    // validate FrameInfo.siteInstance
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, SiteInstanceInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameInfo.lastCommittedUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameInfo.subframes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(FrameInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameInfo.encodedSize = codec.kStructHeaderSize + 32;

  FrameInfo.decode = function(decoder) {
    var packed;
    var val = new FrameInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId = decoder.decodeStruct(codec.Int32);
    val.processId = decoder.decodeStruct(codec.Int32);
    val.siteInstance = decoder.decodeStructPointer(SiteInstanceInfo);
    val.lastCommittedUrl = decoder.decodeStructPointer(url$.Url);
    val.subframes = decoder.decodeArrayPointer(new codec.PointerTo(FrameInfo));
    return val;
  };

  FrameInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStruct(codec.Int32, val.processId);
    encoder.encodeStructPointer(SiteInstanceInfo, val.siteInstance);
    encoder.encodeStructPointer(url$.Url, val.lastCommittedUrl);
    encoder.encodeArrayPointer(new codec.PointerTo(FrameInfo), val.subframes);
  };
  function WebContentsInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebContentsInfo.prototype.initDefaults_ = function() {
    this.title = null;
    this.rootFrame = null;
  };
  WebContentsInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebContentsInfo.validate = function(messageValidator, offset) {
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


    // validate WebContentsInfo.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebContentsInfo.rootFrame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, FrameInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebContentsInfo.encodedSize = codec.kStructHeaderSize + 16;

  WebContentsInfo.decode = function(decoder) {
    var packed;
    var val = new WebContentsInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStruct(codec.String);
    val.rootFrame = decoder.decodeStructPointer(FrameInfo);
    return val;
  };

  WebContentsInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebContentsInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStructPointer(FrameInfo, val.rootFrame);
  };
  function ProcessInternalsHandler_GetIsolationMode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessInternalsHandler_GetIsolationMode_Params.prototype.initDefaults_ = function() {
  };
  ProcessInternalsHandler_GetIsolationMode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessInternalsHandler_GetIsolationMode_Params.validate = function(messageValidator, offset) {
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

  ProcessInternalsHandler_GetIsolationMode_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProcessInternalsHandler_GetIsolationMode_Params.decode = function(decoder) {
    var packed;
    var val = new ProcessInternalsHandler_GetIsolationMode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProcessInternalsHandler_GetIsolationMode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessInternalsHandler_GetIsolationMode_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProcessInternalsHandler_GetIsolationMode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessInternalsHandler_GetIsolationMode_ResponseParams.prototype.initDefaults_ = function() {
    this.mode = null;
  };
  ProcessInternalsHandler_GetIsolationMode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessInternalsHandler_GetIsolationMode_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ProcessInternalsHandler_GetIsolationMode_ResponseParams.mode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProcessInternalsHandler_GetIsolationMode_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProcessInternalsHandler_GetIsolationMode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProcessInternalsHandler_GetIsolationMode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode = decoder.decodeStruct(codec.String);
    return val;
  };

  ProcessInternalsHandler_GetIsolationMode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessInternalsHandler_GetIsolationMode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mode);
  };
  function ProcessInternalsHandler_GetIsolatedOriginsSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessInternalsHandler_GetIsolatedOriginsSize_Params.prototype.initDefaults_ = function() {
  };
  ProcessInternalsHandler_GetIsolatedOriginsSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessInternalsHandler_GetIsolatedOriginsSize_Params.validate = function(messageValidator, offset) {
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

  ProcessInternalsHandler_GetIsolatedOriginsSize_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProcessInternalsHandler_GetIsolatedOriginsSize_Params.decode = function(decoder) {
    var packed;
    var val = new ProcessInternalsHandler_GetIsolatedOriginsSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProcessInternalsHandler_GetIsolatedOriginsSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessInternalsHandler_GetIsolatedOriginsSize_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.prototype.initDefaults_ = function() {
    this.size = 0;
  };
  ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.validate = function(messageValidator, offset) {
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

  ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.size);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ProcessInternalsHandler_GetAllWebContentsInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessInternalsHandler_GetAllWebContentsInfo_Params.prototype.initDefaults_ = function() {
  };
  ProcessInternalsHandler_GetAllWebContentsInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessInternalsHandler_GetAllWebContentsInfo_Params.validate = function(messageValidator, offset) {
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

  ProcessInternalsHandler_GetAllWebContentsInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProcessInternalsHandler_GetAllWebContentsInfo_Params.decode = function(decoder) {
    var packed;
    var val = new ProcessInternalsHandler_GetAllWebContentsInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProcessInternalsHandler_GetAllWebContentsInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessInternalsHandler_GetAllWebContentsInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.infos = null;
  };
  ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.infos
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(WebContentsInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.infos = decoder.decodeArrayPointer(new codec.PointerTo(WebContentsInfo));
    return val;
  };

  ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(WebContentsInfo), val.infos);
  };
  var kProcessInternalsHandler_GetIsolationMode_Name = 0;
  var kProcessInternalsHandler_GetIsolatedOriginsSize_Name = 1;
  var kProcessInternalsHandler_GetAllWebContentsInfo_Name = 2;

  function ProcessInternalsHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProcessInternalsHandler,
                                                   handleOrPtrInfo);
  }

  function ProcessInternalsHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProcessInternalsHandler, associatedInterfacePtrInfo);
  }

  ProcessInternalsHandlerAssociatedPtr.prototype =
      Object.create(ProcessInternalsHandlerPtr.prototype);
  ProcessInternalsHandlerAssociatedPtr.prototype.constructor =
      ProcessInternalsHandlerAssociatedPtr;

  function ProcessInternalsHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProcessInternalsHandlerPtr.prototype.getIsolationMode = function() {
    return ProcessInternalsHandlerProxy.prototype.getIsolationMode
        .apply(this.ptr.getProxy(), arguments);
  };

  ProcessInternalsHandlerProxy.prototype.getIsolationMode = function() {
    var params_ = new ProcessInternalsHandler_GetIsolationMode_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProcessInternalsHandler_GetIsolationMode_Name,
          codec.align(ProcessInternalsHandler_GetIsolationMode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProcessInternalsHandler_GetIsolationMode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProcessInternalsHandler_GetIsolationMode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProcessInternalsHandlerPtr.prototype.getIsolatedOriginsSize = function() {
    return ProcessInternalsHandlerProxy.prototype.getIsolatedOriginsSize
        .apply(this.ptr.getProxy(), arguments);
  };

  ProcessInternalsHandlerProxy.prototype.getIsolatedOriginsSize = function() {
    var params_ = new ProcessInternalsHandler_GetIsolatedOriginsSize_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProcessInternalsHandler_GetIsolatedOriginsSize_Name,
          codec.align(ProcessInternalsHandler_GetIsolatedOriginsSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProcessInternalsHandler_GetIsolatedOriginsSize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProcessInternalsHandlerPtr.prototype.getAllWebContentsInfo = function() {
    return ProcessInternalsHandlerProxy.prototype.getAllWebContentsInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  ProcessInternalsHandlerProxy.prototype.getAllWebContentsInfo = function() {
    var params_ = new ProcessInternalsHandler_GetAllWebContentsInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProcessInternalsHandler_GetAllWebContentsInfo_Name,
          codec.align(ProcessInternalsHandler_GetAllWebContentsInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProcessInternalsHandler_GetAllWebContentsInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProcessInternalsHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  ProcessInternalsHandlerStub.prototype.getIsolationMode = function() {
    return this.delegate_ && this.delegate_.getIsolationMode && this.delegate_.getIsolationMode();
  }
  ProcessInternalsHandlerStub.prototype.getIsolatedOriginsSize = function() {
    return this.delegate_ && this.delegate_.getIsolatedOriginsSize && this.delegate_.getIsolatedOriginsSize();
  }
  ProcessInternalsHandlerStub.prototype.getAllWebContentsInfo = function() {
    return this.delegate_ && this.delegate_.getAllWebContentsInfo && this.delegate_.getAllWebContentsInfo();
  }

  ProcessInternalsHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProcessInternalsHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProcessInternalsHandler_GetIsolationMode_Name:
      var params = reader.decodeStruct(ProcessInternalsHandler_GetIsolationMode_Params);
      this.getIsolationMode().then(function(response) {
        var responseParams =
            new ProcessInternalsHandler_GetIsolationMode_ResponseParams();
        responseParams.mode = response.mode;
        var builder = new codec.MessageV1Builder(
            kProcessInternalsHandler_GetIsolationMode_Name,
            codec.align(ProcessInternalsHandler_GetIsolationMode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProcessInternalsHandler_GetIsolationMode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kProcessInternalsHandler_GetIsolatedOriginsSize_Name:
      var params = reader.decodeStruct(ProcessInternalsHandler_GetIsolatedOriginsSize_Params);
      this.getIsolatedOriginsSize().then(function(response) {
        var responseParams =
            new ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams();
        responseParams.size = response.size;
        var builder = new codec.MessageV1Builder(
            kProcessInternalsHandler_GetIsolatedOriginsSize_Name,
            codec.align(ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kProcessInternalsHandler_GetAllWebContentsInfo_Name:
      var params = reader.decodeStruct(ProcessInternalsHandler_GetAllWebContentsInfo_Params);
      this.getAllWebContentsInfo().then(function(response) {
        var responseParams =
            new ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams();
        responseParams.infos = response.infos;
        var builder = new codec.MessageV1Builder(
            kProcessInternalsHandler_GetAllWebContentsInfo_Name,
            codec.align(ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateProcessInternalsHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProcessInternalsHandler_GetIsolationMode_Name:
        if (message.expectsResponse())
          paramsClass = ProcessInternalsHandler_GetIsolationMode_Params;
      break;
      case kProcessInternalsHandler_GetIsolatedOriginsSize_Name:
        if (message.expectsResponse())
          paramsClass = ProcessInternalsHandler_GetIsolatedOriginsSize_Params;
      break;
      case kProcessInternalsHandler_GetAllWebContentsInfo_Name:
        if (message.expectsResponse())
          paramsClass = ProcessInternalsHandler_GetAllWebContentsInfo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProcessInternalsHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProcessInternalsHandler_GetIsolationMode_Name:
        if (message.isResponse())
          paramsClass = ProcessInternalsHandler_GetIsolationMode_ResponseParams;
        break;
      case kProcessInternalsHandler_GetIsolatedOriginsSize_Name:
        if (message.isResponse())
          paramsClass = ProcessInternalsHandler_GetIsolatedOriginsSize_ResponseParams;
        break;
      case kProcessInternalsHandler_GetAllWebContentsInfo_Name:
        if (message.isResponse())
          paramsClass = ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProcessInternalsHandler = {
    name: 'mojom.ProcessInternalsHandler',
    kVersion: 0,
    ptrClass: ProcessInternalsHandlerPtr,
    proxyClass: ProcessInternalsHandlerProxy,
    stubClass: ProcessInternalsHandlerStub,
    validateRequest: validateProcessInternalsHandlerRequest,
    validateResponse: validateProcessInternalsHandlerResponse,
  };
  ProcessInternalsHandlerStub.prototype.validator = validateProcessInternalsHandlerRequest;
  ProcessInternalsHandlerProxy.prototype.validator = validateProcessInternalsHandlerResponse;
  exports.SiteInstanceInfo = SiteInstanceInfo;
  exports.FrameInfo = FrameInfo;
  exports.WebContentsInfo = WebContentsInfo;
  exports.ProcessInternalsHandler = ProcessInternalsHandler;
  exports.ProcessInternalsHandlerPtr = ProcessInternalsHandlerPtr;
  exports.ProcessInternalsHandlerAssociatedPtr = ProcessInternalsHandlerAssociatedPtr;
})();