// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/document_interface_broker.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var appcache$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/appcache/appcache.mojom', '../appcache/appcache.mojom.js');
  }
  var credential_manager$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/credentialmanager/credential_manager.mojom', '../credentialmanager/credential_manager.mojom.js');
  }
  var frame_host_test_interface$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/frame/frame_host_test_interface.mojom', 'frame_host_test_interface.mojom.js');
  }
  var audio_context_manager$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/webaudio/audio_context_manager.mojom', '../webaudio/audio_context_manager.mojom.js');
  }
  var authenticator$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/webauthn/authenticator.mojom', '../webauthn/authenticator.mojom.js');
  }
  var virtual_authenticator$ =
      mojo.internal.exposeNamespace('blink.test.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/webauthn/virtual_authenticator.mojom', '../webauthn/virtual_authenticator.mojom.js');
  }



  function DocumentInterfaceBroker_GetAudioContextManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentInterfaceBroker_GetAudioContextManager_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  DocumentInterfaceBroker_GetAudioContextManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentInterfaceBroker_GetAudioContextManager_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentInterfaceBroker_GetAudioContextManager_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentInterfaceBroker_GetAudioContextManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  DocumentInterfaceBroker_GetAudioContextManager_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentInterfaceBroker_GetAudioContextManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DocumentInterfaceBroker_GetAudioContextManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentInterfaceBroker_GetAudioContextManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentInterfaceBroker_GetAuthenticator_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentInterfaceBroker_GetAuthenticator_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  DocumentInterfaceBroker_GetAuthenticator_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentInterfaceBroker_GetAuthenticator_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentInterfaceBroker_GetAuthenticator_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentInterfaceBroker_GetAuthenticator_Params.encodedSize = codec.kStructHeaderSize + 8;

  DocumentInterfaceBroker_GetAuthenticator_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentInterfaceBroker_GetAuthenticator_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DocumentInterfaceBroker_GetAuthenticator_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentInterfaceBroker_GetAuthenticator_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentInterfaceBroker_GetCredentialManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentInterfaceBroker_GetCredentialManager_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  DocumentInterfaceBroker_GetCredentialManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentInterfaceBroker_GetCredentialManager_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentInterfaceBroker_GetCredentialManager_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentInterfaceBroker_GetCredentialManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  DocumentInterfaceBroker_GetCredentialManager_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentInterfaceBroker_GetCredentialManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DocumentInterfaceBroker_GetCredentialManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentInterfaceBroker_GetCredentialManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentInterfaceBroker_GetFrameHostTestInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentInterfaceBroker_GetFrameHostTestInterface_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  DocumentInterfaceBroker_GetFrameHostTestInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentInterfaceBroker_GetFrameHostTestInterface_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentInterfaceBroker_GetFrameHostTestInterface_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentInterfaceBroker_GetFrameHostTestInterface_Params.encodedSize = codec.kStructHeaderSize + 8;

  DocumentInterfaceBroker_GetFrameHostTestInterface_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentInterfaceBroker_GetFrameHostTestInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DocumentInterfaceBroker_GetFrameHostTestInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentInterfaceBroker_GetFrameHostTestInterface_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentInterfaceBroker_RegisterAppCacheHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentInterfaceBroker_RegisterAppCacheHost_Params.prototype.initDefaults_ = function() {
    this.hostRequest = new bindings.InterfaceRequest();
    this.frontend = new appcache$.AppCacheFrontendPtr();
    this.hostId = null;
  };
  DocumentInterfaceBroker_RegisterAppCacheHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentInterfaceBroker_RegisterAppCacheHost_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentInterfaceBroker_RegisterAppCacheHost_Params.hostRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DocumentInterfaceBroker_RegisterAppCacheHost_Params.frontend
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DocumentInterfaceBroker_RegisterAppCacheHost_Params.hostId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentInterfaceBroker_RegisterAppCacheHost_Params.encodedSize = codec.kStructHeaderSize + 24;

  DocumentInterfaceBroker_RegisterAppCacheHost_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentInterfaceBroker_RegisterAppCacheHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.frontend = decoder.decodeStruct(new codec.Interface(appcache$.AppCacheFrontendPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.hostId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  DocumentInterfaceBroker_RegisterAppCacheHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentInterfaceBroker_RegisterAppCacheHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.hostRequest);
    encoder.encodeStruct(new codec.Interface(appcache$.AppCacheFrontendPtr), val.frontend);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.hostId);
  };
  var kDocumentInterfaceBroker_GetAudioContextManager_Name = 0;
  var kDocumentInterfaceBroker_GetAuthenticator_Name = 1;
  var kDocumentInterfaceBroker_GetCredentialManager_Name = 2;
  var kDocumentInterfaceBroker_GetFrameHostTestInterface_Name = 3;
  var kDocumentInterfaceBroker_GetVirtualAuthenticatorManager_Name = 4;
  var kDocumentInterfaceBroker_RegisterAppCacheHost_Name = 5;

  function DocumentInterfaceBrokerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DocumentInterfaceBroker,
                                                   handleOrPtrInfo);
  }

  function DocumentInterfaceBrokerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DocumentInterfaceBroker, associatedInterfacePtrInfo);
  }

  DocumentInterfaceBrokerAssociatedPtr.prototype =
      Object.create(DocumentInterfaceBrokerPtr.prototype);
  DocumentInterfaceBrokerAssociatedPtr.prototype.constructor =
      DocumentInterfaceBrokerAssociatedPtr;

  function DocumentInterfaceBrokerProxy(receiver) {
    this.receiver_ = receiver;
  }
  DocumentInterfaceBrokerPtr.prototype.getAudioContextManager = function() {
    return DocumentInterfaceBrokerProxy.prototype.getAudioContextManager
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentInterfaceBrokerProxy.prototype.getAudioContextManager = function(request) {
    var params_ = new DocumentInterfaceBroker_GetAudioContextManager_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kDocumentInterfaceBroker_GetAudioContextManager_Name,
        codec.align(DocumentInterfaceBroker_GetAudioContextManager_Params.encodedSize));
    builder.encodeStruct(DocumentInterfaceBroker_GetAudioContextManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DocumentInterfaceBrokerPtr.prototype.getAuthenticator = function() {
    return DocumentInterfaceBrokerProxy.prototype.getAuthenticator
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentInterfaceBrokerProxy.prototype.getAuthenticator = function(request) {
    var params_ = new DocumentInterfaceBroker_GetAuthenticator_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kDocumentInterfaceBroker_GetAuthenticator_Name,
        codec.align(DocumentInterfaceBroker_GetAuthenticator_Params.encodedSize));
    builder.encodeStruct(DocumentInterfaceBroker_GetAuthenticator_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DocumentInterfaceBrokerPtr.prototype.getCredentialManager = function() {
    return DocumentInterfaceBrokerProxy.prototype.getCredentialManager
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentInterfaceBrokerProxy.prototype.getCredentialManager = function(request) {
    var params_ = new DocumentInterfaceBroker_GetCredentialManager_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kDocumentInterfaceBroker_GetCredentialManager_Name,
        codec.align(DocumentInterfaceBroker_GetCredentialManager_Params.encodedSize));
    builder.encodeStruct(DocumentInterfaceBroker_GetCredentialManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DocumentInterfaceBrokerPtr.prototype.getFrameHostTestInterface = function() {
    return DocumentInterfaceBrokerProxy.prototype.getFrameHostTestInterface
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentInterfaceBrokerProxy.prototype.getFrameHostTestInterface = function(request) {
    var params_ = new DocumentInterfaceBroker_GetFrameHostTestInterface_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kDocumentInterfaceBroker_GetFrameHostTestInterface_Name,
        codec.align(DocumentInterfaceBroker_GetFrameHostTestInterface_Params.encodedSize));
    builder.encodeStruct(DocumentInterfaceBroker_GetFrameHostTestInterface_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DocumentInterfaceBrokerPtr.prototype.getVirtualAuthenticatorManager = function() {
    return DocumentInterfaceBrokerProxy.prototype.getVirtualAuthenticatorManager
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentInterfaceBrokerProxy.prototype.getVirtualAuthenticatorManager = function(request) {
    var params_ = new DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kDocumentInterfaceBroker_GetVirtualAuthenticatorManager_Name,
        codec.align(DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params.encodedSize));
    builder.encodeStruct(DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DocumentInterfaceBrokerPtr.prototype.registerAppCacheHost = function() {
    return DocumentInterfaceBrokerProxy.prototype.registerAppCacheHost
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentInterfaceBrokerProxy.prototype.registerAppCacheHost = function(hostRequest, frontend, hostId) {
    var params_ = new DocumentInterfaceBroker_RegisterAppCacheHost_Params();
    params_.hostRequest = hostRequest;
    params_.frontend = frontend;
    params_.hostId = hostId;
    var builder = new codec.MessageV0Builder(
        kDocumentInterfaceBroker_RegisterAppCacheHost_Name,
        codec.align(DocumentInterfaceBroker_RegisterAppCacheHost_Params.encodedSize));
    builder.encodeStruct(DocumentInterfaceBroker_RegisterAppCacheHost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DocumentInterfaceBrokerStub(delegate) {
    this.delegate_ = delegate;
  }
  DocumentInterfaceBrokerStub.prototype.getAudioContextManager = function(request) {
    return this.delegate_ && this.delegate_.getAudioContextManager && this.delegate_.getAudioContextManager(request);
  }
  DocumentInterfaceBrokerStub.prototype.getAuthenticator = function(request) {
    return this.delegate_ && this.delegate_.getAuthenticator && this.delegate_.getAuthenticator(request);
  }
  DocumentInterfaceBrokerStub.prototype.getCredentialManager = function(request) {
    return this.delegate_ && this.delegate_.getCredentialManager && this.delegate_.getCredentialManager(request);
  }
  DocumentInterfaceBrokerStub.prototype.getFrameHostTestInterface = function(request) {
    return this.delegate_ && this.delegate_.getFrameHostTestInterface && this.delegate_.getFrameHostTestInterface(request);
  }
  DocumentInterfaceBrokerStub.prototype.getVirtualAuthenticatorManager = function(request) {
    return this.delegate_ && this.delegate_.getVirtualAuthenticatorManager && this.delegate_.getVirtualAuthenticatorManager(request);
  }
  DocumentInterfaceBrokerStub.prototype.registerAppCacheHost = function(hostRequest, frontend, hostId) {
    return this.delegate_ && this.delegate_.registerAppCacheHost && this.delegate_.registerAppCacheHost(hostRequest, frontend, hostId);
  }

  DocumentInterfaceBrokerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDocumentInterfaceBroker_GetAudioContextManager_Name:
      var params = reader.decodeStruct(DocumentInterfaceBroker_GetAudioContextManager_Params);
      this.getAudioContextManager(params.request);
      return true;
    case kDocumentInterfaceBroker_GetAuthenticator_Name:
      var params = reader.decodeStruct(DocumentInterfaceBroker_GetAuthenticator_Params);
      this.getAuthenticator(params.request);
      return true;
    case kDocumentInterfaceBroker_GetCredentialManager_Name:
      var params = reader.decodeStruct(DocumentInterfaceBroker_GetCredentialManager_Params);
      this.getCredentialManager(params.request);
      return true;
    case kDocumentInterfaceBroker_GetFrameHostTestInterface_Name:
      var params = reader.decodeStruct(DocumentInterfaceBroker_GetFrameHostTestInterface_Params);
      this.getFrameHostTestInterface(params.request);
      return true;
    case kDocumentInterfaceBroker_GetVirtualAuthenticatorManager_Name:
      var params = reader.decodeStruct(DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params);
      this.getVirtualAuthenticatorManager(params.request);
      return true;
    case kDocumentInterfaceBroker_RegisterAppCacheHost_Name:
      var params = reader.decodeStruct(DocumentInterfaceBroker_RegisterAppCacheHost_Params);
      this.registerAppCacheHost(params.hostRequest, params.frontend, params.hostId);
      return true;
    default:
      return false;
    }
  };

  DocumentInterfaceBrokerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDocumentInterfaceBrokerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDocumentInterfaceBroker_GetAudioContextManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentInterfaceBroker_GetAudioContextManager_Params;
      break;
      case kDocumentInterfaceBroker_GetAuthenticator_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentInterfaceBroker_GetAuthenticator_Params;
      break;
      case kDocumentInterfaceBroker_GetCredentialManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentInterfaceBroker_GetCredentialManager_Params;
      break;
      case kDocumentInterfaceBroker_GetFrameHostTestInterface_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentInterfaceBroker_GetFrameHostTestInterface_Params;
      break;
      case kDocumentInterfaceBroker_GetVirtualAuthenticatorManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentInterfaceBroker_GetVirtualAuthenticatorManager_Params;
      break;
      case kDocumentInterfaceBroker_RegisterAppCacheHost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentInterfaceBroker_RegisterAppCacheHost_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDocumentInterfaceBrokerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DocumentInterfaceBroker = {
    name: 'blink.mojom.DocumentInterfaceBroker',
    kVersion: 0,
    ptrClass: DocumentInterfaceBrokerPtr,
    proxyClass: DocumentInterfaceBrokerProxy,
    stubClass: DocumentInterfaceBrokerStub,
    validateRequest: validateDocumentInterfaceBrokerRequest,
    validateResponse: null,
  };
  DocumentInterfaceBrokerStub.prototype.validator = validateDocumentInterfaceBrokerRequest;
  DocumentInterfaceBrokerProxy.prototype.validator = null;
  exports.DocumentInterfaceBroker = DocumentInterfaceBroker;
  exports.DocumentInterfaceBrokerPtr = DocumentInterfaceBrokerPtr;
  exports.DocumentInterfaceBrokerAssociatedPtr = DocumentInterfaceBrokerAssociatedPtr;
})();