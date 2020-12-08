// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/service_worker_installed_scripts_manager.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function ServiceWorkerInstalledScriptsInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerInstalledScriptsInfo.prototype.initDefaults_ = function() {
    this.managerRequest = new bindings.InterfaceRequest();
    this.managerHostPtr = new ServiceWorkerInstalledScriptsManagerHostPtr();
    this.installedUrls = null;
  };
  ServiceWorkerInstalledScriptsInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerInstalledScriptsInfo.validate = function(messageValidator, offset) {
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


    // validate ServiceWorkerInstalledScriptsInfo.managerRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerInstalledScriptsInfo.managerHostPtr
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerInstalledScriptsInfo.installedUrls
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerInstalledScriptsInfo.encodedSize = codec.kStructHeaderSize + 24;

  ServiceWorkerInstalledScriptsInfo.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerInstalledScriptsInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.managerRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.managerHostPtr = decoder.decodeStruct(new codec.Interface(ServiceWorkerInstalledScriptsManagerHostPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.installedUrls = decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    return val;
  };

  ServiceWorkerInstalledScriptsInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerInstalledScriptsInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.managerRequest);
    encoder.encodeStruct(new codec.Interface(ServiceWorkerInstalledScriptsManagerHostPtr), val.managerHostPtr);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.installedUrls);
  };
  function ServiceWorkerScriptInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerScriptInfo.prototype.initDefaults_ = function() {
    this.scriptUrl = null;
    this.encoding = null;
    this.headers = null;
    this.body = null;
    this.metaData = null;
    this.bodySize = 0;
    this.metaDataSize = 0;
  };
  ServiceWorkerScriptInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerScriptInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerScriptInfo.scriptUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerScriptInfo.encoding
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerScriptInfo.headers
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerScriptInfo.body
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate ServiceWorkerScriptInfo.metaData
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 28, true)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ServiceWorkerScriptInfo.encodedSize = codec.kStructHeaderSize + 48;

  ServiceWorkerScriptInfo.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerScriptInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scriptUrl = decoder.decodeStructPointer(url$.Url);
    val.encoding = decoder.decodeStruct(codec.String);
    val.headers = decoder.decodeMapPointer(codec.String, codec.String);
    val.body = decoder.decodeStruct(codec.Handle);
    val.metaData = decoder.decodeStruct(codec.NullableHandle);
    val.bodySize = decoder.decodeStruct(codec.Uint64);
    val.metaDataSize = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  ServiceWorkerScriptInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerScriptInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.scriptUrl);
    encoder.encodeStruct(codec.String, val.encoding);
    encoder.encodeMapPointer(codec.String, codec.String, val.headers);
    encoder.encodeStruct(codec.Handle, val.body);
    encoder.encodeStruct(codec.NullableHandle, val.metaData);
    encoder.encodeStruct(codec.Uint64, val.bodySize);
    encoder.encodeStruct(codec.Uint64, val.metaDataSize);
  };
  function ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.prototype.initDefaults_ = function() {
    this.scriptUrl = null;
  };
  ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.validate = function(messageValidator, offset) {
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


    // validate ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.scriptUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.encodedSize = codec.kStructHeaderSize + 8;

  ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scriptUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.scriptUrl);
  };
  function ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.prototype.initDefaults_ = function() {
    this.scriptInfo = null;
  };
  ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.validate = function(messageValidator, offset) {
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


    // validate ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.scriptInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ServiceWorkerScriptInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.encodedSize = codec.kStructHeaderSize + 8;

  ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scriptInfo = decoder.decodeStructPointer(ServiceWorkerScriptInfo);
    return val;
  };

  ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ServiceWorkerScriptInfo, val.scriptInfo);
  };
  var kServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Name = 0;

  function ServiceWorkerInstalledScriptsManagerHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ServiceWorkerInstalledScriptsManagerHost,
                                                   handleOrPtrInfo);
  }

  function ServiceWorkerInstalledScriptsManagerHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ServiceWorkerInstalledScriptsManagerHost, associatedInterfacePtrInfo);
  }

  ServiceWorkerInstalledScriptsManagerHostAssociatedPtr.prototype =
      Object.create(ServiceWorkerInstalledScriptsManagerHostPtr.prototype);
  ServiceWorkerInstalledScriptsManagerHostAssociatedPtr.prototype.constructor =
      ServiceWorkerInstalledScriptsManagerHostAssociatedPtr;

  function ServiceWorkerInstalledScriptsManagerHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  ServiceWorkerInstalledScriptsManagerHostPtr.prototype.requestInstalledScript = function() {
    return ServiceWorkerInstalledScriptsManagerHostProxy.prototype.requestInstalledScript
        .apply(this.ptr.getProxy(), arguments);
  };

  ServiceWorkerInstalledScriptsManagerHostProxy.prototype.requestInstalledScript = function(scriptUrl) {
    var params_ = new ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params();
    params_.scriptUrl = scriptUrl;
    var builder = new codec.MessageV0Builder(
        kServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Name,
        codec.align(ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params.encodedSize));
    builder.encodeStruct(ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ServiceWorkerInstalledScriptsManagerHostStub(delegate) {
    this.delegate_ = delegate;
  }
  ServiceWorkerInstalledScriptsManagerHostStub.prototype.requestInstalledScript = function(scriptUrl) {
    return this.delegate_ && this.delegate_.requestInstalledScript && this.delegate_.requestInstalledScript(scriptUrl);
  }

  ServiceWorkerInstalledScriptsManagerHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Name:
      var params = reader.decodeStruct(ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params);
      this.requestInstalledScript(params.scriptUrl);
      return true;
    default:
      return false;
    }
  };

  ServiceWorkerInstalledScriptsManagerHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateServiceWorkerInstalledScriptsManagerHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceWorkerInstalledScriptsManagerHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ServiceWorkerInstalledScriptsManagerHost = {
    name: 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost',
    kVersion: 0,
    ptrClass: ServiceWorkerInstalledScriptsManagerHostPtr,
    proxyClass: ServiceWorkerInstalledScriptsManagerHostProxy,
    stubClass: ServiceWorkerInstalledScriptsManagerHostStub,
    validateRequest: validateServiceWorkerInstalledScriptsManagerHostRequest,
    validateResponse: null,
  };
  ServiceWorkerInstalledScriptsManagerHostStub.prototype.validator = validateServiceWorkerInstalledScriptsManagerHostRequest;
  ServiceWorkerInstalledScriptsManagerHostProxy.prototype.validator = null;
  var kServiceWorkerInstalledScriptsManager_TransferInstalledScript_Name = 0;

  function ServiceWorkerInstalledScriptsManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ServiceWorkerInstalledScriptsManager,
                                                   handleOrPtrInfo);
  }

  function ServiceWorkerInstalledScriptsManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ServiceWorkerInstalledScriptsManager, associatedInterfacePtrInfo);
  }

  ServiceWorkerInstalledScriptsManagerAssociatedPtr.prototype =
      Object.create(ServiceWorkerInstalledScriptsManagerPtr.prototype);
  ServiceWorkerInstalledScriptsManagerAssociatedPtr.prototype.constructor =
      ServiceWorkerInstalledScriptsManagerAssociatedPtr;

  function ServiceWorkerInstalledScriptsManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  ServiceWorkerInstalledScriptsManagerPtr.prototype.transferInstalledScript = function() {
    return ServiceWorkerInstalledScriptsManagerProxy.prototype.transferInstalledScript
        .apply(this.ptr.getProxy(), arguments);
  };

  ServiceWorkerInstalledScriptsManagerProxy.prototype.transferInstalledScript = function(scriptInfo) {
    var params_ = new ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params();
    params_.scriptInfo = scriptInfo;
    var builder = new codec.MessageV0Builder(
        kServiceWorkerInstalledScriptsManager_TransferInstalledScript_Name,
        codec.align(ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params.encodedSize));
    builder.encodeStruct(ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ServiceWorkerInstalledScriptsManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  ServiceWorkerInstalledScriptsManagerStub.prototype.transferInstalledScript = function(scriptInfo) {
    return this.delegate_ && this.delegate_.transferInstalledScript && this.delegate_.transferInstalledScript(scriptInfo);
  }

  ServiceWorkerInstalledScriptsManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceWorkerInstalledScriptsManager_TransferInstalledScript_Name:
      var params = reader.decodeStruct(ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params);
      this.transferInstalledScript(params.scriptInfo);
      return true;
    default:
      return false;
    }
  };

  ServiceWorkerInstalledScriptsManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateServiceWorkerInstalledScriptsManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceWorkerInstalledScriptsManager_TransferInstalledScript_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceWorkerInstalledScriptsManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ServiceWorkerInstalledScriptsManager = {
    name: 'blink.mojom.ServiceWorkerInstalledScriptsManager',
    kVersion: 0,
    ptrClass: ServiceWorkerInstalledScriptsManagerPtr,
    proxyClass: ServiceWorkerInstalledScriptsManagerProxy,
    stubClass: ServiceWorkerInstalledScriptsManagerStub,
    validateRequest: validateServiceWorkerInstalledScriptsManagerRequest,
    validateResponse: null,
  };
  ServiceWorkerInstalledScriptsManagerStub.prototype.validator = validateServiceWorkerInstalledScriptsManagerRequest;
  ServiceWorkerInstalledScriptsManagerProxy.prototype.validator = null;
  exports.ServiceWorkerInstalledScriptsInfo = ServiceWorkerInstalledScriptsInfo;
  exports.ServiceWorkerScriptInfo = ServiceWorkerScriptInfo;
  exports.ServiceWorkerInstalledScriptsManagerHost = ServiceWorkerInstalledScriptsManagerHost;
  exports.ServiceWorkerInstalledScriptsManagerHostPtr = ServiceWorkerInstalledScriptsManagerHostPtr;
  exports.ServiceWorkerInstalledScriptsManagerHostAssociatedPtr = ServiceWorkerInstalledScriptsManagerHostAssociatedPtr;
  exports.ServiceWorkerInstalledScriptsManager = ServiceWorkerInstalledScriptsManager;
  exports.ServiceWorkerInstalledScriptsManagerPtr = ServiceWorkerInstalledScriptsManagerPtr;
  exports.ServiceWorkerInstalledScriptsManagerAssociatedPtr = ServiceWorkerInstalledScriptsManagerAssociatedPtr;
})();