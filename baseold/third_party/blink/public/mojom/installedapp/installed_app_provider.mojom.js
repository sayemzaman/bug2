// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/installedapp/installed_app_provider.mojom';
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
  var related_application$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/installedapp/related_application.mojom', 'related_application.mojom.js');
  }



  function InstalledAppProvider_FilterInstalledApps_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InstalledAppProvider_FilterInstalledApps_Params.prototype.initDefaults_ = function() {
    this.relatedApps = null;
  };
  InstalledAppProvider_FilterInstalledApps_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InstalledAppProvider_FilterInstalledApps_Params.validate = function(messageValidator, offset) {
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


    // validate InstalledAppProvider_FilterInstalledApps_Params.relatedApps
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(related_application$.RelatedApplication), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InstalledAppProvider_FilterInstalledApps_Params.encodedSize = codec.kStructHeaderSize + 8;

  InstalledAppProvider_FilterInstalledApps_Params.decode = function(decoder) {
    var packed;
    var val = new InstalledAppProvider_FilterInstalledApps_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.relatedApps = decoder.decodeArrayPointer(new codec.PointerTo(related_application$.RelatedApplication));
    return val;
  };

  InstalledAppProvider_FilterInstalledApps_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InstalledAppProvider_FilterInstalledApps_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(related_application$.RelatedApplication), val.relatedApps);
  };
  function InstalledAppProvider_FilterInstalledApps_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InstalledAppProvider_FilterInstalledApps_ResponseParams.prototype.initDefaults_ = function() {
    this.installedApps = null;
  };
  InstalledAppProvider_FilterInstalledApps_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InstalledAppProvider_FilterInstalledApps_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate InstalledAppProvider_FilterInstalledApps_ResponseParams.installedApps
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(related_application$.RelatedApplication), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InstalledAppProvider_FilterInstalledApps_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  InstalledAppProvider_FilterInstalledApps_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new InstalledAppProvider_FilterInstalledApps_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.installedApps = decoder.decodeArrayPointer(new codec.PointerTo(related_application$.RelatedApplication));
    return val;
  };

  InstalledAppProvider_FilterInstalledApps_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InstalledAppProvider_FilterInstalledApps_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(related_application$.RelatedApplication), val.installedApps);
  };
  var kInstalledAppProvider_FilterInstalledApps_Name = 0;

  function InstalledAppProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(InstalledAppProvider,
                                                   handleOrPtrInfo);
  }

  function InstalledAppProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        InstalledAppProvider, associatedInterfacePtrInfo);
  }

  InstalledAppProviderAssociatedPtr.prototype =
      Object.create(InstalledAppProviderPtr.prototype);
  InstalledAppProviderAssociatedPtr.prototype.constructor =
      InstalledAppProviderAssociatedPtr;

  function InstalledAppProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  InstalledAppProviderPtr.prototype.filterInstalledApps = function() {
    return InstalledAppProviderProxy.prototype.filterInstalledApps
        .apply(this.ptr.getProxy(), arguments);
  };

  InstalledAppProviderProxy.prototype.filterInstalledApps = function(relatedApps) {
    var params_ = new InstalledAppProvider_FilterInstalledApps_Params();
    params_.relatedApps = relatedApps;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kInstalledAppProvider_FilterInstalledApps_Name,
          codec.align(InstalledAppProvider_FilterInstalledApps_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(InstalledAppProvider_FilterInstalledApps_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(InstalledAppProvider_FilterInstalledApps_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function InstalledAppProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  InstalledAppProviderStub.prototype.filterInstalledApps = function(relatedApps) {
    return this.delegate_ && this.delegate_.filterInstalledApps && this.delegate_.filterInstalledApps(relatedApps);
  }

  InstalledAppProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  InstalledAppProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kInstalledAppProvider_FilterInstalledApps_Name:
      var params = reader.decodeStruct(InstalledAppProvider_FilterInstalledApps_Params);
      this.filterInstalledApps(params.relatedApps).then(function(response) {
        var responseParams =
            new InstalledAppProvider_FilterInstalledApps_ResponseParams();
        responseParams.installedApps = response.installedApps;
        var builder = new codec.MessageV1Builder(
            kInstalledAppProvider_FilterInstalledApps_Name,
            codec.align(InstalledAppProvider_FilterInstalledApps_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(InstalledAppProvider_FilterInstalledApps_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateInstalledAppProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kInstalledAppProvider_FilterInstalledApps_Name:
        if (message.expectsResponse())
          paramsClass = InstalledAppProvider_FilterInstalledApps_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateInstalledAppProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kInstalledAppProvider_FilterInstalledApps_Name:
        if (message.isResponse())
          paramsClass = InstalledAppProvider_FilterInstalledApps_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var InstalledAppProvider = {
    name: 'blink.mojom.InstalledAppProvider',
    kVersion: 0,
    ptrClass: InstalledAppProviderPtr,
    proxyClass: InstalledAppProviderProxy,
    stubClass: InstalledAppProviderStub,
    validateRequest: validateInstalledAppProviderRequest,
    validateResponse: validateInstalledAppProviderResponse,
  };
  InstalledAppProviderStub.prototype.validator = validateInstalledAppProviderRequest;
  InstalledAppProviderProxy.prototype.validator = validateInstalledAppProviderResponse;
  exports.InstalledAppProvider = InstalledAppProvider;
  exports.InstalledAppProviderPtr = InstalledAppProviderPtr;
  exports.InstalledAppProviderAssociatedPtr = InstalledAppProviderAssociatedPtr;
})();