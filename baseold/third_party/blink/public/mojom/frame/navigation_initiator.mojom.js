// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/navigation_initiator.mojom';
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


  var WebContentSecurityPolicyType = {};
  WebContentSecurityPolicyType.WebContentSecurityPolicyTypeReport = 0;
  WebContentSecurityPolicyType.WebContentSecurityPolicyTypeEnforce = WebContentSecurityPolicyType.WebContentSecurityPolicyTypeReport + 1;
  WebContentSecurityPolicyType.MIN_VALUE = 0,
  WebContentSecurityPolicyType.MAX_VALUE = 1,

  WebContentSecurityPolicyType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  WebContentSecurityPolicyType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SourceLocation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SourceLocation.prototype.initDefaults_ = function() {
    this.url = null;
    this.lineNumber = 0;
    this.columnNumber = 0;
  };
  SourceLocation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SourceLocation.validate = function(messageValidator, offset) {
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


    // validate SourceLocation.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SourceLocation.encodedSize = codec.kStructHeaderSize + 16;

  SourceLocation.decode = function(decoder) {
    var packed;
    var val = new SourceLocation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.String);
    val.lineNumber = decoder.decodeStruct(codec.Uint32);
    val.columnNumber = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  SourceLocation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SourceLocation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.Uint32, val.lineNumber);
    encoder.encodeStruct(codec.Uint32, val.columnNumber);
  };
  function CSPViolationParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPViolationParams.prototype.initDefaults_ = function() {
    this.directive = null;
    this.effectiveDirective = null;
    this.consoleMessage = null;
    this.blockedUrl = null;
    this.reportEndpoints = null;
    this.useReportingApi = false;
    this.afterRedirect = false;
    this.disposition = 0;
    this.header = null;
    this.sourceLocation = null;
  };
  CSPViolationParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPViolationParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolationParams.directive
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolationParams.effectiveDirective
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolationParams.consoleMessage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolationParams.blockedUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolationParams.reportEndpoints
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CSPViolationParams.header
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolationParams.disposition
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, WebContentSecurityPolicyType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CSPViolationParams.sourceLocation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, SourceLocation, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CSPViolationParams.encodedSize = codec.kStructHeaderSize + 64;

  CSPViolationParams.decode = function(decoder) {
    var packed;
    var val = new CSPViolationParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.directive = decoder.decodeStruct(codec.String);
    val.effectiveDirective = decoder.decodeStruct(codec.String);
    val.consoleMessage = decoder.decodeStruct(codec.String);
    val.blockedUrl = decoder.decodeStruct(codec.String);
    val.reportEndpoints = decoder.decodeArrayPointer(codec.String);
    packed = decoder.readUint8();
    val.useReportingApi = (packed >> 0) & 1 ? true : false;
    val.afterRedirect = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.disposition = decoder.decodeStruct(codec.Int32);
    val.header = decoder.decodeStruct(codec.String);
    val.sourceLocation = decoder.decodeStructPointer(SourceLocation);
    return val;
  };

  CSPViolationParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPViolationParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.directive);
    encoder.encodeStruct(codec.String, val.effectiveDirective);
    encoder.encodeStruct(codec.String, val.consoleMessage);
    encoder.encodeStruct(codec.String, val.blockedUrl);
    encoder.encodeArrayPointer(codec.String, val.reportEndpoints);
    packed = 0;
    packed |= (val.useReportingApi & 1) << 0
    packed |= (val.afterRedirect & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.disposition);
    encoder.encodeStruct(codec.String, val.header);
    encoder.encodeStructPointer(SourceLocation, val.sourceLocation);
  };
  function NavigationInitiator_SendViolationReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NavigationInitiator_SendViolationReport_Params.prototype.initDefaults_ = function() {
    this.violationParams = null;
  };
  NavigationInitiator_SendViolationReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NavigationInitiator_SendViolationReport_Params.validate = function(messageValidator, offset) {
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


    // validate NavigationInitiator_SendViolationReport_Params.violationParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CSPViolationParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NavigationInitiator_SendViolationReport_Params.encodedSize = codec.kStructHeaderSize + 8;

  NavigationInitiator_SendViolationReport_Params.decode = function(decoder) {
    var packed;
    var val = new NavigationInitiator_SendViolationReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.violationParams = decoder.decodeStructPointer(CSPViolationParams);
    return val;
  };

  NavigationInitiator_SendViolationReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NavigationInitiator_SendViolationReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CSPViolationParams, val.violationParams);
  };
  var kNavigationInitiator_SendViolationReport_Name = 0;

  function NavigationInitiatorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NavigationInitiator,
                                                   handleOrPtrInfo);
  }

  function NavigationInitiatorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NavigationInitiator, associatedInterfacePtrInfo);
  }

  NavigationInitiatorAssociatedPtr.prototype =
      Object.create(NavigationInitiatorPtr.prototype);
  NavigationInitiatorAssociatedPtr.prototype.constructor =
      NavigationInitiatorAssociatedPtr;

  function NavigationInitiatorProxy(receiver) {
    this.receiver_ = receiver;
  }
  NavigationInitiatorPtr.prototype.sendViolationReport = function() {
    return NavigationInitiatorProxy.prototype.sendViolationReport
        .apply(this.ptr.getProxy(), arguments);
  };

  NavigationInitiatorProxy.prototype.sendViolationReport = function(violationParams) {
    var params_ = new NavigationInitiator_SendViolationReport_Params();
    params_.violationParams = violationParams;
    var builder = new codec.MessageV0Builder(
        kNavigationInitiator_SendViolationReport_Name,
        codec.align(NavigationInitiator_SendViolationReport_Params.encodedSize));
    builder.encodeStruct(NavigationInitiator_SendViolationReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NavigationInitiatorStub(delegate) {
    this.delegate_ = delegate;
  }
  NavigationInitiatorStub.prototype.sendViolationReport = function(violationParams) {
    return this.delegate_ && this.delegate_.sendViolationReport && this.delegate_.sendViolationReport(violationParams);
  }

  NavigationInitiatorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNavigationInitiator_SendViolationReport_Name:
      var params = reader.decodeStruct(NavigationInitiator_SendViolationReport_Params);
      this.sendViolationReport(params.violationParams);
      return true;
    default:
      return false;
    }
  };

  NavigationInitiatorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNavigationInitiatorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNavigationInitiator_SendViolationReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NavigationInitiator_SendViolationReport_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNavigationInitiatorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NavigationInitiator = {
    name: 'blink.mojom.NavigationInitiator',
    kVersion: 0,
    ptrClass: NavigationInitiatorPtr,
    proxyClass: NavigationInitiatorProxy,
    stubClass: NavigationInitiatorStub,
    validateRequest: validateNavigationInitiatorRequest,
    validateResponse: null,
  };
  NavigationInitiatorStub.prototype.validator = validateNavigationInitiatorRequest;
  NavigationInitiatorProxy.prototype.validator = null;
  exports.WebContentSecurityPolicyType = WebContentSecurityPolicyType;
  exports.SourceLocation = SourceLocation;
  exports.CSPViolationParams = CSPViolationParams;
  exports.NavigationInitiator = NavigationInitiator;
  exports.NavigationInitiatorPtr = NavigationInitiatorPtr;
  exports.NavigationInitiatorAssociatedPtr = NavigationInitiatorAssociatedPtr;
})();