// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/engagement/site_engagement_details.mojom';
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



  function SiteEngagementDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SiteEngagementDetails.prototype.initDefaults_ = function() {
    this.origin = null;
    this.totalScore = 0;
    this.baseScore = 0;
    this.installedBonus = 0;
  };
  SiteEngagementDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SiteEngagementDetails.validate = function(messageValidator, offset) {
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


    // validate SiteEngagementDetails.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  SiteEngagementDetails.encodedSize = codec.kStructHeaderSize + 32;

  SiteEngagementDetails.decode = function(decoder) {
    var packed;
    var val = new SiteEngagementDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(url$.Url);
    val.totalScore = decoder.decodeStruct(codec.Double);
    val.baseScore = decoder.decodeStruct(codec.Double);
    val.installedBonus = decoder.decodeStruct(codec.Double);
    return val;
  };

  SiteEngagementDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SiteEngagementDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.origin);
    encoder.encodeStruct(codec.Double, val.totalScore);
    encoder.encodeStruct(codec.Double, val.baseScore);
    encoder.encodeStruct(codec.Double, val.installedBonus);
  };
  function SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.prototype.initDefaults_ = function() {
  };
  SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.validate = function(messageValidator, offset) {
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

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.encodedSize = codec.kStructHeaderSize + 0;

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.decode = function(decoder) {
    var packed;
    var val = new SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.info
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(SiteEngagementDetails), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeArrayPointer(new codec.PointerTo(SiteEngagementDetails));
    return val;
  };

  SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(SiteEngagementDetails), val.info);
  };
  function SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.score = 0;
  };
  SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.validate = function(messageValidator, offset) {
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


    // validate SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.encodedSize = codec.kStructHeaderSize + 16;

  SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.decode = function(decoder) {
    var packed;
    var val = new SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.score = decoder.decodeStruct(codec.Double);
    return val;
  };

  SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Double, val.score);
  };
  var kSiteEngagementDetailsProvider_GetSiteEngagementDetails_Name = 0;
  var kSiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Name = 1;

  function SiteEngagementDetailsProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SiteEngagementDetailsProvider,
                                                   handleOrPtrInfo);
  }

  function SiteEngagementDetailsProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SiteEngagementDetailsProvider, associatedInterfacePtrInfo);
  }

  SiteEngagementDetailsProviderAssociatedPtr.prototype =
      Object.create(SiteEngagementDetailsProviderPtr.prototype);
  SiteEngagementDetailsProviderAssociatedPtr.prototype.constructor =
      SiteEngagementDetailsProviderAssociatedPtr;

  function SiteEngagementDetailsProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  SiteEngagementDetailsProviderPtr.prototype.getSiteEngagementDetails = function() {
    return SiteEngagementDetailsProviderProxy.prototype.getSiteEngagementDetails
        .apply(this.ptr.getProxy(), arguments);
  };

  SiteEngagementDetailsProviderProxy.prototype.getSiteEngagementDetails = function() {
    var params_ = new SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSiteEngagementDetailsProvider_GetSiteEngagementDetails_Name,
          codec.align(SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SiteEngagementDetailsProviderPtr.prototype.setSiteEngagementBaseScoreForUrl = function() {
    return SiteEngagementDetailsProviderProxy.prototype.setSiteEngagementBaseScoreForUrl
        .apply(this.ptr.getProxy(), arguments);
  };

  SiteEngagementDetailsProviderProxy.prototype.setSiteEngagementBaseScoreForUrl = function(url, score) {
    var params_ = new SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params();
    params_.url = url;
    params_.score = score;
    var builder = new codec.MessageV0Builder(
        kSiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Name,
        codec.align(SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params.encodedSize));
    builder.encodeStruct(SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SiteEngagementDetailsProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  SiteEngagementDetailsProviderStub.prototype.getSiteEngagementDetails = function() {
    return this.delegate_ && this.delegate_.getSiteEngagementDetails && this.delegate_.getSiteEngagementDetails();
  }
  SiteEngagementDetailsProviderStub.prototype.setSiteEngagementBaseScoreForUrl = function(url, score) {
    return this.delegate_ && this.delegate_.setSiteEngagementBaseScoreForUrl && this.delegate_.setSiteEngagementBaseScoreForUrl(url, score);
  }

  SiteEngagementDetailsProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Name:
      var params = reader.decodeStruct(SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params);
      this.setSiteEngagementBaseScoreForUrl(params.url, params.score);
      return true;
    default:
      return false;
    }
  };

  SiteEngagementDetailsProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSiteEngagementDetailsProvider_GetSiteEngagementDetails_Name:
      var params = reader.decodeStruct(SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params);
      this.getSiteEngagementDetails().then(function(response) {
        var responseParams =
            new SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageV1Builder(
            kSiteEngagementDetailsProvider_GetSiteEngagementDetails_Name,
            codec.align(SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSiteEngagementDetailsProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSiteEngagementDetailsProvider_GetSiteEngagementDetails_Name:
        if (message.expectsResponse())
          paramsClass = SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params;
      break;
      case kSiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSiteEngagementDetailsProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSiteEngagementDetailsProvider_GetSiteEngagementDetails_Name:
        if (message.isResponse())
          paramsClass = SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SiteEngagementDetailsProvider = {
    name: 'mojom.SiteEngagementDetailsProvider',
    kVersion: 0,
    ptrClass: SiteEngagementDetailsProviderPtr,
    proxyClass: SiteEngagementDetailsProviderProxy,
    stubClass: SiteEngagementDetailsProviderStub,
    validateRequest: validateSiteEngagementDetailsProviderRequest,
    validateResponse: validateSiteEngagementDetailsProviderResponse,
  };
  SiteEngagementDetailsProviderStub.prototype.validator = validateSiteEngagementDetailsProviderRequest;
  SiteEngagementDetailsProviderProxy.prototype.validator = validateSiteEngagementDetailsProviderResponse;
  exports.SiteEngagementDetails = SiteEngagementDetails;
  exports.SiteEngagementDetailsProvider = SiteEngagementDetailsProvider;
  exports.SiteEngagementDetailsProviderPtr = SiteEngagementDetailsProviderPtr;
  exports.SiteEngagementDetailsProviderAssociatedPtr = SiteEngagementDetailsProviderAssociatedPtr;
})();