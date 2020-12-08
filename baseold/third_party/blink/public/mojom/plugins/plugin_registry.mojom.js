// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/plugins/plugin_registry.mojom';
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
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }



  function PluginMimeType(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PluginMimeType.prototype.initDefaults_ = function() {
    this.mimeType = null;
    this.description = null;
    this.fileExtensions = null;
  };
  PluginMimeType.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PluginMimeType.validate = function(messageValidator, offset) {
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


    // validate PluginMimeType.mimeType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PluginMimeType.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PluginMimeType.fileExtensions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PluginMimeType.encodedSize = codec.kStructHeaderSize + 24;

  PluginMimeType.decode = function(decoder) {
    var packed;
    var val = new PluginMimeType();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mimeType = decoder.decodeStruct(codec.String);
    val.description = decoder.decodeStructPointer(string16$.String16);
    val.fileExtensions = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  PluginMimeType.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PluginMimeType.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mimeType);
    encoder.encodeStructPointer(string16$.String16, val.description);
    encoder.encodeArrayPointer(codec.String, val.fileExtensions);
  };
  function PluginInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PluginInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.description = null;
    this.filename = null;
    this.backgroundColor = 0;
    this.mayUseExternalHandler = false;
    this.mimeTypes = null;
  };
  PluginInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PluginInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PluginInfo.name
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PluginInfo.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PluginInfo.filename
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PluginInfo.mimeTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(PluginMimeType), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PluginInfo.encodedSize = codec.kStructHeaderSize + 40;

  PluginInfo.decode = function(decoder) {
    var packed;
    var val = new PluginInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStructPointer(string16$.String16);
    val.description = decoder.decodeStructPointer(string16$.String16);
    val.filename = decoder.decodeStructPointer(file_path$.FilePath);
    val.backgroundColor = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.mayUseExternalHandler = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.mimeTypes = decoder.decodeArrayPointer(new codec.PointerTo(PluginMimeType));
    return val;
  };

  PluginInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PluginInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.name);
    encoder.encodeStructPointer(string16$.String16, val.description);
    encoder.encodeStructPointer(file_path$.FilePath, val.filename);
    encoder.encodeStruct(codec.Uint32, val.backgroundColor);
    packed = 0;
    packed |= (val.mayUseExternalHandler & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(PluginMimeType), val.mimeTypes);
  };
  function PluginRegistry_GetPlugins_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PluginRegistry_GetPlugins_Params.prototype.initDefaults_ = function() {
    this.refresh = false;
    this.mainFrameOrigin = null;
  };
  PluginRegistry_GetPlugins_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PluginRegistry_GetPlugins_Params.validate = function(messageValidator, offset) {
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



    // validate PluginRegistry_GetPlugins_Params.mainFrameOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PluginRegistry_GetPlugins_Params.encodedSize = codec.kStructHeaderSize + 16;

  PluginRegistry_GetPlugins_Params.decode = function(decoder) {
    var packed;
    var val = new PluginRegistry_GetPlugins_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.refresh = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.mainFrameOrigin = decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  PluginRegistry_GetPlugins_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PluginRegistry_GetPlugins_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.refresh & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(origin$.Origin, val.mainFrameOrigin);
  };
  function PluginRegistry_GetPlugins_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PluginRegistry_GetPlugins_ResponseParams.prototype.initDefaults_ = function() {
    this.plugins = null;
  };
  PluginRegistry_GetPlugins_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PluginRegistry_GetPlugins_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PluginRegistry_GetPlugins_ResponseParams.plugins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(PluginInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PluginRegistry_GetPlugins_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PluginRegistry_GetPlugins_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PluginRegistry_GetPlugins_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.plugins = decoder.decodeArrayPointer(new codec.PointerTo(PluginInfo));
    return val;
  };

  PluginRegistry_GetPlugins_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PluginRegistry_GetPlugins_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(PluginInfo), val.plugins);
  };
  var kPluginRegistry_GetPlugins_Name = 0;

  function PluginRegistryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PluginRegistry,
                                                   handleOrPtrInfo);
  }

  function PluginRegistryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PluginRegistry, associatedInterfacePtrInfo);
  }

  PluginRegistryAssociatedPtr.prototype =
      Object.create(PluginRegistryPtr.prototype);
  PluginRegistryAssociatedPtr.prototype.constructor =
      PluginRegistryAssociatedPtr;

  function PluginRegistryProxy(receiver) {
    this.receiver_ = receiver;
  }
  PluginRegistryPtr.prototype.getPlugins = function() {
    return PluginRegistryProxy.prototype.getPlugins
        .apply(this.ptr.getProxy(), arguments);
  };

  PluginRegistryProxy.prototype.getPlugins = function(refresh, mainFrameOrigin) {
    var params_ = new PluginRegistry_GetPlugins_Params();
    params_.refresh = refresh;
    params_.mainFrameOrigin = mainFrameOrigin;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPluginRegistry_GetPlugins_Name,
          codec.align(PluginRegistry_GetPlugins_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PluginRegistry_GetPlugins_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PluginRegistry_GetPlugins_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PluginRegistryStub(delegate) {
    this.delegate_ = delegate;
  }
  PluginRegistryStub.prototype.getPlugins = function(refresh, mainFrameOrigin) {
    return this.delegate_ && this.delegate_.getPlugins && this.delegate_.getPlugins(refresh, mainFrameOrigin);
  }

  PluginRegistryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PluginRegistryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPluginRegistry_GetPlugins_Name:
      var params = reader.decodeStruct(PluginRegistry_GetPlugins_Params);
      this.getPlugins(params.refresh, params.mainFrameOrigin).then(function(response) {
        var responseParams =
            new PluginRegistry_GetPlugins_ResponseParams();
        responseParams.plugins = response.plugins;
        var builder = new codec.MessageV1Builder(
            kPluginRegistry_GetPlugins_Name,
            codec.align(PluginRegistry_GetPlugins_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PluginRegistry_GetPlugins_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePluginRegistryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPluginRegistry_GetPlugins_Name:
        if (message.expectsResponse())
          paramsClass = PluginRegistry_GetPlugins_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePluginRegistryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPluginRegistry_GetPlugins_Name:
        if (message.isResponse())
          paramsClass = PluginRegistry_GetPlugins_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PluginRegistry = {
    name: 'blink.mojom.PluginRegistry',
    kVersion: 0,
    ptrClass: PluginRegistryPtr,
    proxyClass: PluginRegistryProxy,
    stubClass: PluginRegistryStub,
    validateRequest: validatePluginRegistryRequest,
    validateResponse: validatePluginRegistryResponse,
  };
  PluginRegistryStub.prototype.validator = validatePluginRegistryRequest;
  PluginRegistryProxy.prototype.validator = validatePluginRegistryResponse;
  exports.PluginMimeType = PluginMimeType;
  exports.PluginInfo = PluginInfo;
  exports.PluginRegistry = PluginRegistry;
  exports.PluginRegistryPtr = PluginRegistryPtr;
  exports.PluginRegistryAssociatedPtr = PluginRegistryAssociatedPtr;
})();