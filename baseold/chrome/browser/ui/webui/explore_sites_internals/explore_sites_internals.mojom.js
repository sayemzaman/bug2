// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/explore_sites_internals/explore_sites_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('exploreSitesInternals.mojom');



  function PageHandler_GetProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetProperties_ResponseParams.properties
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  PageHandler_GetProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.properties);
  };
  function PageHandler_ClearCachedExploreSitesCatalog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearCachedExploreSitesCatalog_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ClearCachedExploreSitesCatalog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearCachedExploreSitesCatalog_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ClearCachedExploreSitesCatalog_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ClearCachedExploreSitesCatalog_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearCachedExploreSitesCatalog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ClearCachedExploreSitesCatalog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearCachedExploreSitesCatalog_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_ClearCachedExploreSitesCatalog_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.validate = function(messageValidator, offset) {
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

  PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearCachedExploreSitesCatalog_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageHandler_ForceNetworkRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ForceNetworkRequest_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ForceNetworkRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ForceNetworkRequest_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ForceNetworkRequest_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ForceNetworkRequest_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ForceNetworkRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ForceNetworkRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ForceNetworkRequest_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_ForceNetworkRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ForceNetworkRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  PageHandler_ForceNetworkRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ForceNetworkRequest_ResponseParams.validate = function(messageValidator, offset) {
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

  PageHandler_ForceNetworkRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_ForceNetworkRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ForceNetworkRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageHandler_ForceNetworkRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ForceNetworkRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageHandler_OverrideCountryCode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_OverrideCountryCode_Params.prototype.initDefaults_ = function() {
    this.countryCode = null;
  };
  PageHandler_OverrideCountryCode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_OverrideCountryCode_Params.validate = function(messageValidator, offset) {
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


    // validate PageHandler_OverrideCountryCode_Params.countryCode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_OverrideCountryCode_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_OverrideCountryCode_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_OverrideCountryCode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.countryCode = decoder.decodeStruct(codec.String);
    return val;
  };

  PageHandler_OverrideCountryCode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_OverrideCountryCode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.countryCode);
  };
  function PageHandler_OverrideCountryCode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_OverrideCountryCode_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  PageHandler_OverrideCountryCode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_OverrideCountryCode_ResponseParams.validate = function(messageValidator, offset) {
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

  PageHandler_OverrideCountryCode_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_OverrideCountryCode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_OverrideCountryCode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageHandler_OverrideCountryCode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_OverrideCountryCode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kPageHandler_GetProperties_Name = 0;
  var kPageHandler_ClearCachedExploreSitesCatalog_Name = 1;
  var kPageHandler_ForceNetworkRequest_Name = 2;
  var kPageHandler_OverrideCountryCode_Name = 3;

  function PageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageHandler,
                                                   handleOrPtrInfo);
  }

  function PageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageHandler, associatedInterfacePtrInfo);
  }

  PageHandlerAssociatedPtr.prototype =
      Object.create(PageHandlerPtr.prototype);
  PageHandlerAssociatedPtr.prototype.constructor =
      PageHandlerAssociatedPtr;

  function PageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageHandlerPtr.prototype.getProperties = function() {
    return PageHandlerProxy.prototype.getProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getProperties = function() {
    var params_ = new PageHandler_GetProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetProperties_Name,
          codec.align(PageHandler_GetProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.clearCachedExploreSitesCatalog = function() {
    return PageHandlerProxy.prototype.clearCachedExploreSitesCatalog
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.clearCachedExploreSitesCatalog = function() {
    var params_ = new PageHandler_ClearCachedExploreSitesCatalog_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_ClearCachedExploreSitesCatalog_Name,
          codec.align(PageHandler_ClearCachedExploreSitesCatalog_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_ClearCachedExploreSitesCatalog_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_ClearCachedExploreSitesCatalog_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.forceNetworkRequest = function() {
    return PageHandlerProxy.prototype.forceNetworkRequest
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.forceNetworkRequest = function() {
    var params_ = new PageHandler_ForceNetworkRequest_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_ForceNetworkRequest_Name,
          codec.align(PageHandler_ForceNetworkRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_ForceNetworkRequest_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_ForceNetworkRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.overrideCountryCode = function() {
    return PageHandlerProxy.prototype.overrideCountryCode
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.overrideCountryCode = function(countryCode) {
    var params_ = new PageHandler_OverrideCountryCode_Params();
    params_.countryCode = countryCode;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_OverrideCountryCode_Name,
          codec.align(PageHandler_OverrideCountryCode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_OverrideCountryCode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_OverrideCountryCode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  PageHandlerStub.prototype.getProperties = function() {
    return this.delegate_ && this.delegate_.getProperties && this.delegate_.getProperties();
  }
  PageHandlerStub.prototype.clearCachedExploreSitesCatalog = function() {
    return this.delegate_ && this.delegate_.clearCachedExploreSitesCatalog && this.delegate_.clearCachedExploreSitesCatalog();
  }
  PageHandlerStub.prototype.forceNetworkRequest = function() {
    return this.delegate_ && this.delegate_.forceNetworkRequest && this.delegate_.forceNetworkRequest();
  }
  PageHandlerStub.prototype.overrideCountryCode = function(countryCode) {
    return this.delegate_ && this.delegate_.overrideCountryCode && this.delegate_.overrideCountryCode(countryCode);
  }

  PageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_GetProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetProperties_Params);
      this.getProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetProperties_Name,
            codec.align(PageHandler_GetProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_ClearCachedExploreSitesCatalog_Name:
      var params = reader.decodeStruct(PageHandler_ClearCachedExploreSitesCatalog_Params);
      this.clearCachedExploreSitesCatalog().then(function(response) {
        var responseParams =
            new PageHandler_ClearCachedExploreSitesCatalog_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kPageHandler_ClearCachedExploreSitesCatalog_Name,
            codec.align(PageHandler_ClearCachedExploreSitesCatalog_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_ClearCachedExploreSitesCatalog_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_ForceNetworkRequest_Name:
      var params = reader.decodeStruct(PageHandler_ForceNetworkRequest_Params);
      this.forceNetworkRequest().then(function(response) {
        var responseParams =
            new PageHandler_ForceNetworkRequest_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kPageHandler_ForceNetworkRequest_Name,
            codec.align(PageHandler_ForceNetworkRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_ForceNetworkRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_OverrideCountryCode_Name:
      var params = reader.decodeStruct(PageHandler_OverrideCountryCode_Params);
      this.overrideCountryCode(params.countryCode).then(function(response) {
        var responseParams =
            new PageHandler_OverrideCountryCode_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kPageHandler_OverrideCountryCode_Name,
            codec.align(PageHandler_OverrideCountryCode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_OverrideCountryCode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageHandler_GetProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetProperties_Params;
      break;
      case kPageHandler_ClearCachedExploreSitesCatalog_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_ClearCachedExploreSitesCatalog_Params;
      break;
      case kPageHandler_ForceNetworkRequest_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_ForceNetworkRequest_Params;
      break;
      case kPageHandler_OverrideCountryCode_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_OverrideCountryCode_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPageHandler_GetProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetProperties_ResponseParams;
        break;
      case kPageHandler_ClearCachedExploreSitesCatalog_Name:
        if (message.isResponse())
          paramsClass = PageHandler_ClearCachedExploreSitesCatalog_ResponseParams;
        break;
      case kPageHandler_ForceNetworkRequest_Name:
        if (message.isResponse())
          paramsClass = PageHandler_ForceNetworkRequest_ResponseParams;
        break;
      case kPageHandler_OverrideCountryCode_Name:
        if (message.isResponse())
          paramsClass = PageHandler_OverrideCountryCode_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PageHandler = {
    name: 'explore_sites_internals.mojom.PageHandler',
    kVersion: 0,
    ptrClass: PageHandlerPtr,
    proxyClass: PageHandlerProxy,
    stubClass: PageHandlerStub,
    validateRequest: validatePageHandlerRequest,
    validateResponse: validatePageHandlerResponse,
  };
  PageHandlerStub.prototype.validator = validatePageHandlerRequest;
  PageHandlerProxy.prototype.validator = validatePageHandlerResponse;
  exports.PageHandler = PageHandler;
  exports.PageHandlerPtr = PageHandlerPtr;
  exports.PageHandlerAssociatedPtr = PageHandlerAssociatedPtr;
})();