// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/app_banner/app_banner.mojom';
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


  var AppBannerPromptReply = {};
  AppBannerPromptReply.NONE = 0;
  AppBannerPromptReply.CANCEL = AppBannerPromptReply.NONE + 1;
  AppBannerPromptReply.MIN_VALUE = 0,
  AppBannerPromptReply.MAX_VALUE = 1,

  AppBannerPromptReply.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AppBannerPromptReply.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AppBannerController_BannerPromptRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppBannerController_BannerPromptRequest_Params.prototype.initDefaults_ = function() {
    this.service = new AppBannerServicePtr();
    this.event = new bindings.InterfaceRequest();
    this.requireGesture = false;
    this.platform = null;
  };
  AppBannerController_BannerPromptRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppBannerController_BannerPromptRequest_Params.validate = function(messageValidator, offset) {
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


    // validate AppBannerController_BannerPromptRequest_Params.service
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppBannerController_BannerPromptRequest_Params.event
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppBannerController_BannerPromptRequest_Params.platform
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  AppBannerController_BannerPromptRequest_Params.encodedSize = codec.kStructHeaderSize + 24;

  AppBannerController_BannerPromptRequest_Params.decode = function(decoder) {
    var packed;
    var val = new AppBannerController_BannerPromptRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.service = decoder.decodeStruct(new codec.Interface(AppBannerServicePtr));
    val.event = decoder.decodeStruct(codec.InterfaceRequest);
    packed = decoder.readUint8();
    val.requireGesture = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.platform = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  AppBannerController_BannerPromptRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppBannerController_BannerPromptRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(AppBannerServicePtr), val.service);
    encoder.encodeStruct(codec.InterfaceRequest, val.event);
    packed = 0;
    packed |= (val.requireGesture & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.platform);
  };
  function AppBannerController_BannerPromptRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppBannerController_BannerPromptRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.reply = 0;
  };
  AppBannerController_BannerPromptRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppBannerController_BannerPromptRequest_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AppBannerController_BannerPromptRequest_ResponseParams.reply
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AppBannerPromptReply);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppBannerController_BannerPromptRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AppBannerController_BannerPromptRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AppBannerController_BannerPromptRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reply = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AppBannerController_BannerPromptRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppBannerController_BannerPromptRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reply);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AppBannerEvent_BannerAccepted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppBannerEvent_BannerAccepted_Params.prototype.initDefaults_ = function() {
    this.platform = null;
  };
  AppBannerEvent_BannerAccepted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppBannerEvent_BannerAccepted_Params.validate = function(messageValidator, offset) {
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


    // validate AppBannerEvent_BannerAccepted_Params.platform
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppBannerEvent_BannerAccepted_Params.encodedSize = codec.kStructHeaderSize + 8;

  AppBannerEvent_BannerAccepted_Params.decode = function(decoder) {
    var packed;
    var val = new AppBannerEvent_BannerAccepted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.platform = decoder.decodeStruct(codec.String);
    return val;
  };

  AppBannerEvent_BannerAccepted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppBannerEvent_BannerAccepted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.platform);
  };
  function AppBannerEvent_BannerDismissed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppBannerEvent_BannerDismissed_Params.prototype.initDefaults_ = function() {
  };
  AppBannerEvent_BannerDismissed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppBannerEvent_BannerDismissed_Params.validate = function(messageValidator, offset) {
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

  AppBannerEvent_BannerDismissed_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppBannerEvent_BannerDismissed_Params.decode = function(decoder) {
    var packed;
    var val = new AppBannerEvent_BannerDismissed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppBannerEvent_BannerDismissed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppBannerEvent_BannerDismissed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AppBannerService_DisplayAppBanner_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppBannerService_DisplayAppBanner_Params.prototype.initDefaults_ = function() {
  };
  AppBannerService_DisplayAppBanner_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppBannerService_DisplayAppBanner_Params.validate = function(messageValidator, offset) {
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

  AppBannerService_DisplayAppBanner_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppBannerService_DisplayAppBanner_Params.decode = function(decoder) {
    var packed;
    var val = new AppBannerService_DisplayAppBanner_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppBannerService_DisplayAppBanner_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppBannerService_DisplayAppBanner_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kAppBannerController_BannerPromptRequest_Name = 0;

  function AppBannerControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppBannerController,
                                                   handleOrPtrInfo);
  }

  function AppBannerControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppBannerController, associatedInterfacePtrInfo);
  }

  AppBannerControllerAssociatedPtr.prototype =
      Object.create(AppBannerControllerPtr.prototype);
  AppBannerControllerAssociatedPtr.prototype.constructor =
      AppBannerControllerAssociatedPtr;

  function AppBannerControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppBannerControllerPtr.prototype.bannerPromptRequest = function() {
    return AppBannerControllerProxy.prototype.bannerPromptRequest
        .apply(this.ptr.getProxy(), arguments);
  };

  AppBannerControllerProxy.prototype.bannerPromptRequest = function(service, event, platform, requireGesture) {
    var params_ = new AppBannerController_BannerPromptRequest_Params();
    params_.service = service;
    params_.event = event;
    params_.platform = platform;
    params_.requireGesture = requireGesture;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAppBannerController_BannerPromptRequest_Name,
          codec.align(AppBannerController_BannerPromptRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AppBannerController_BannerPromptRequest_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AppBannerController_BannerPromptRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AppBannerControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  AppBannerControllerStub.prototype.bannerPromptRequest = function(service, event, platform, requireGesture) {
    return this.delegate_ && this.delegate_.bannerPromptRequest && this.delegate_.bannerPromptRequest(service, event, platform, requireGesture);
  }

  AppBannerControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  AppBannerControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppBannerController_BannerPromptRequest_Name:
      var params = reader.decodeStruct(AppBannerController_BannerPromptRequest_Params);
      this.bannerPromptRequest(params.service, params.event, params.platform, params.requireGesture).then(function(response) {
        var responseParams =
            new AppBannerController_BannerPromptRequest_ResponseParams();
        responseParams.reply = response.reply;
        var builder = new codec.MessageV1Builder(
            kAppBannerController_BannerPromptRequest_Name,
            codec.align(AppBannerController_BannerPromptRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AppBannerController_BannerPromptRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAppBannerControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppBannerController_BannerPromptRequest_Name:
        if (message.expectsResponse())
          paramsClass = AppBannerController_BannerPromptRequest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppBannerControllerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAppBannerController_BannerPromptRequest_Name:
        if (message.isResponse())
          paramsClass = AppBannerController_BannerPromptRequest_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AppBannerController = {
    name: 'blink.mojom.AppBannerController',
    kVersion: 0,
    ptrClass: AppBannerControllerPtr,
    proxyClass: AppBannerControllerProxy,
    stubClass: AppBannerControllerStub,
    validateRequest: validateAppBannerControllerRequest,
    validateResponse: validateAppBannerControllerResponse,
  };
  AppBannerControllerStub.prototype.validator = validateAppBannerControllerRequest;
  AppBannerControllerProxy.prototype.validator = validateAppBannerControllerResponse;
  var kAppBannerEvent_BannerAccepted_Name = 0;
  var kAppBannerEvent_BannerDismissed_Name = 1;

  function AppBannerEventPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppBannerEvent,
                                                   handleOrPtrInfo);
  }

  function AppBannerEventAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppBannerEvent, associatedInterfacePtrInfo);
  }

  AppBannerEventAssociatedPtr.prototype =
      Object.create(AppBannerEventPtr.prototype);
  AppBannerEventAssociatedPtr.prototype.constructor =
      AppBannerEventAssociatedPtr;

  function AppBannerEventProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppBannerEventPtr.prototype.bannerAccepted = function() {
    return AppBannerEventProxy.prototype.bannerAccepted
        .apply(this.ptr.getProxy(), arguments);
  };

  AppBannerEventProxy.prototype.bannerAccepted = function(platform) {
    var params_ = new AppBannerEvent_BannerAccepted_Params();
    params_.platform = platform;
    var builder = new codec.MessageV0Builder(
        kAppBannerEvent_BannerAccepted_Name,
        codec.align(AppBannerEvent_BannerAccepted_Params.encodedSize));
    builder.encodeStruct(AppBannerEvent_BannerAccepted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AppBannerEventPtr.prototype.bannerDismissed = function() {
    return AppBannerEventProxy.prototype.bannerDismissed
        .apply(this.ptr.getProxy(), arguments);
  };

  AppBannerEventProxy.prototype.bannerDismissed = function() {
    var params_ = new AppBannerEvent_BannerDismissed_Params();
    var builder = new codec.MessageV0Builder(
        kAppBannerEvent_BannerDismissed_Name,
        codec.align(AppBannerEvent_BannerDismissed_Params.encodedSize));
    builder.encodeStruct(AppBannerEvent_BannerDismissed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AppBannerEventStub(delegate) {
    this.delegate_ = delegate;
  }
  AppBannerEventStub.prototype.bannerAccepted = function(platform) {
    return this.delegate_ && this.delegate_.bannerAccepted && this.delegate_.bannerAccepted(platform);
  }
  AppBannerEventStub.prototype.bannerDismissed = function() {
    return this.delegate_ && this.delegate_.bannerDismissed && this.delegate_.bannerDismissed();
  }

  AppBannerEventStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppBannerEvent_BannerAccepted_Name:
      var params = reader.decodeStruct(AppBannerEvent_BannerAccepted_Params);
      this.bannerAccepted(params.platform);
      return true;
    case kAppBannerEvent_BannerDismissed_Name:
      var params = reader.decodeStruct(AppBannerEvent_BannerDismissed_Params);
      this.bannerDismissed();
      return true;
    default:
      return false;
    }
  };

  AppBannerEventStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAppBannerEventRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppBannerEvent_BannerAccepted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppBannerEvent_BannerAccepted_Params;
      break;
      case kAppBannerEvent_BannerDismissed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppBannerEvent_BannerDismissed_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppBannerEventResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AppBannerEvent = {
    name: 'blink.mojom.AppBannerEvent',
    kVersion: 0,
    ptrClass: AppBannerEventPtr,
    proxyClass: AppBannerEventProxy,
    stubClass: AppBannerEventStub,
    validateRequest: validateAppBannerEventRequest,
    validateResponse: null,
  };
  AppBannerEventStub.prototype.validator = validateAppBannerEventRequest;
  AppBannerEventProxy.prototype.validator = null;
  var kAppBannerService_DisplayAppBanner_Name = 0;

  function AppBannerServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppBannerService,
                                                   handleOrPtrInfo);
  }

  function AppBannerServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppBannerService, associatedInterfacePtrInfo);
  }

  AppBannerServiceAssociatedPtr.prototype =
      Object.create(AppBannerServicePtr.prototype);
  AppBannerServiceAssociatedPtr.prototype.constructor =
      AppBannerServiceAssociatedPtr;

  function AppBannerServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppBannerServicePtr.prototype.displayAppBanner = function() {
    return AppBannerServiceProxy.prototype.displayAppBanner
        .apply(this.ptr.getProxy(), arguments);
  };

  AppBannerServiceProxy.prototype.displayAppBanner = function() {
    var params_ = new AppBannerService_DisplayAppBanner_Params();
    var builder = new codec.MessageV0Builder(
        kAppBannerService_DisplayAppBanner_Name,
        codec.align(AppBannerService_DisplayAppBanner_Params.encodedSize));
    builder.encodeStruct(AppBannerService_DisplayAppBanner_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AppBannerServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  AppBannerServiceStub.prototype.displayAppBanner = function() {
    return this.delegate_ && this.delegate_.displayAppBanner && this.delegate_.displayAppBanner();
  }

  AppBannerServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppBannerService_DisplayAppBanner_Name:
      var params = reader.decodeStruct(AppBannerService_DisplayAppBanner_Params);
      this.displayAppBanner();
      return true;
    default:
      return false;
    }
  };

  AppBannerServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAppBannerServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppBannerService_DisplayAppBanner_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AppBannerService_DisplayAppBanner_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppBannerServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AppBannerService = {
    name: 'blink.mojom.AppBannerService',
    kVersion: 0,
    ptrClass: AppBannerServicePtr,
    proxyClass: AppBannerServiceProxy,
    stubClass: AppBannerServiceStub,
    validateRequest: validateAppBannerServiceRequest,
    validateResponse: null,
  };
  AppBannerServiceStub.prototype.validator = validateAppBannerServiceRequest;
  AppBannerServiceProxy.prototype.validator = null;
  exports.AppBannerPromptReply = AppBannerPromptReply;
  exports.AppBannerController = AppBannerController;
  exports.AppBannerControllerPtr = AppBannerControllerPtr;
  exports.AppBannerControllerAssociatedPtr = AppBannerControllerAssociatedPtr;
  exports.AppBannerEvent = AppBannerEvent;
  exports.AppBannerEventPtr = AppBannerEventPtr;
  exports.AppBannerEventAssociatedPtr = AppBannerEventAssociatedPtr;
  exports.AppBannerService = AppBannerService;
  exports.AppBannerServicePtr = AppBannerServicePtr;
  exports.AppBannerServiceAssociatedPtr = AppBannerServiceAssociatedPtr;
})();