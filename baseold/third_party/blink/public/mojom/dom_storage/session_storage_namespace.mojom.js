// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom';
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
  var storage_area$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/dom_storage/storage_area.mojom', 'storage_area.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }



  function SessionStorageNamespace_OpenArea_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SessionStorageNamespace_OpenArea_Params.prototype.initDefaults_ = function() {
    this.origin = null;
    this.area = new associatedBindings.AssociatedInterfaceRequest();
  };
  SessionStorageNamespace_OpenArea_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SessionStorageNamespace_OpenArea_Params.validate = function(messageValidator, offset) {
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


    // validate SessionStorageNamespace_OpenArea_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SessionStorageNamespace_OpenArea_Params.area
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SessionStorageNamespace_OpenArea_Params.encodedSize = codec.kStructHeaderSize + 16;

  SessionStorageNamespace_OpenArea_Params.decode = function(decoder) {
    var packed;
    var val = new SessionStorageNamespace_OpenArea_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.area = decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SessionStorageNamespace_OpenArea_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SessionStorageNamespace_OpenArea_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.area);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SessionStorageNamespace_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SessionStorageNamespace_Clone_Params.prototype.initDefaults_ = function() {
    this.cloneToNamespace = null;
  };
  SessionStorageNamespace_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SessionStorageNamespace_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate SessionStorageNamespace_Clone_Params.cloneToNamespace
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SessionStorageNamespace_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  SessionStorageNamespace_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new SessionStorageNamespace_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cloneToNamespace = decoder.decodeStruct(codec.String);
    return val;
  };

  SessionStorageNamespace_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SessionStorageNamespace_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.cloneToNamespace);
  };
  var kSessionStorageNamespace_OpenArea_Name = 0;
  var kSessionStorageNamespace_Clone_Name = 1;

  function SessionStorageNamespacePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SessionStorageNamespace,
                                                   handleOrPtrInfo);
  }

  function SessionStorageNamespaceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SessionStorageNamespace, associatedInterfacePtrInfo);
  }

  SessionStorageNamespaceAssociatedPtr.prototype =
      Object.create(SessionStorageNamespacePtr.prototype);
  SessionStorageNamespaceAssociatedPtr.prototype.constructor =
      SessionStorageNamespaceAssociatedPtr;

  function SessionStorageNamespaceProxy(receiver) {
    this.receiver_ = receiver;
  }
  SessionStorageNamespacePtr.prototype.openArea = function() {
    return SessionStorageNamespaceProxy.prototype.openArea
        .apply(this.ptr.getProxy(), arguments);
  };

  SessionStorageNamespaceProxy.prototype.openArea = function(origin, area) {
    var params_ = new SessionStorageNamespace_OpenArea_Params();
    params_.origin = origin;
    params_.area = area;
    var builder = new codec.MessageV2Builder(
        kSessionStorageNamespace_OpenArea_Name,
        codec.align(SessionStorageNamespace_OpenArea_Params.encodedSize));
    builder.setPayload(SessionStorageNamespace_OpenArea_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SessionStorageNamespacePtr.prototype.clone = function() {
    return SessionStorageNamespaceProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  SessionStorageNamespaceProxy.prototype.clone = function(cloneToNamespace) {
    var params_ = new SessionStorageNamespace_Clone_Params();
    params_.cloneToNamespace = cloneToNamespace;
    var builder = new codec.MessageV0Builder(
        kSessionStorageNamespace_Clone_Name,
        codec.align(SessionStorageNamespace_Clone_Params.encodedSize));
    builder.encodeStruct(SessionStorageNamespace_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SessionStorageNamespaceStub(delegate) {
    this.delegate_ = delegate;
  }
  SessionStorageNamespaceStub.prototype.openArea = function(origin, area) {
    return this.delegate_ && this.delegate_.openArea && this.delegate_.openArea(origin, area);
  }
  SessionStorageNamespaceStub.prototype.clone = function(cloneToNamespace) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(cloneToNamespace);
  }

  SessionStorageNamespaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSessionStorageNamespace_OpenArea_Name:
      var params = reader.decodeStruct(SessionStorageNamespace_OpenArea_Params);
      this.openArea(params.origin, params.area);
      return true;
    case kSessionStorageNamespace_Clone_Name:
      var params = reader.decodeStruct(SessionStorageNamespace_Clone_Params);
      this.clone(params.cloneToNamespace);
      return true;
    default:
      return false;
    }
  };

  SessionStorageNamespaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSessionStorageNamespaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSessionStorageNamespace_OpenArea_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SessionStorageNamespace_OpenArea_Params;
      break;
      case kSessionStorageNamespace_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SessionStorageNamespace_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSessionStorageNamespaceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SessionStorageNamespace = {
    name: 'blink.mojom.SessionStorageNamespace',
    kVersion: 0,
    ptrClass: SessionStorageNamespacePtr,
    proxyClass: SessionStorageNamespaceProxy,
    stubClass: SessionStorageNamespaceStub,
    validateRequest: validateSessionStorageNamespaceRequest,
    validateResponse: null,
  };
  SessionStorageNamespaceStub.prototype.validator = validateSessionStorageNamespaceRequest;
  SessionStorageNamespaceProxy.prototype.validator = null;
  exports.SessionStorageNamespace = SessionStorageNamespace;
  exports.SessionStorageNamespacePtr = SessionStorageNamespacePtr;
  exports.SessionStorageNamespaceAssociatedPtr = SessionStorageNamespaceAssociatedPtr;
})();