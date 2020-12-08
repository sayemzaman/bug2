// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/proxy_lookup_client.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }
  var proxy_resolver$ =
      mojo.internal.exposeNamespace('proxyResolver.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/proxy_resolver/public/mojom/proxy_resolver.mojom', '../../../proxy_resolver/public/mojom/proxy_resolver.mojom.js');
  }



  function ProxyLookupClient_OnProxyLookupComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyLookupClient_OnProxyLookupComplete_Params.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.proxyInfo = null;
  };
  ProxyLookupClient_OnProxyLookupComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyLookupClient_OnProxyLookupComplete_Params.validate = function(messageValidator, offset) {
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



    // validate ProxyLookupClient_OnProxyLookupComplete_Params.proxyInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, proxy_resolver$.ProxyInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyLookupClient_OnProxyLookupComplete_Params.encodedSize = codec.kStructHeaderSize + 16;

  ProxyLookupClient_OnProxyLookupComplete_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyLookupClient_OnProxyLookupComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.proxyInfo = decoder.decodeStructPointer(proxy_resolver$.ProxyInfo);
    return val;
  };

  ProxyLookupClient_OnProxyLookupComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyLookupClient_OnProxyLookupComplete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(proxy_resolver$.ProxyInfo, val.proxyInfo);
  };
  var kProxyLookupClient_OnProxyLookupComplete_Name = 0;

  function ProxyLookupClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProxyLookupClient,
                                                   handleOrPtrInfo);
  }

  function ProxyLookupClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProxyLookupClient, associatedInterfacePtrInfo);
  }

  ProxyLookupClientAssociatedPtr.prototype =
      Object.create(ProxyLookupClientPtr.prototype);
  ProxyLookupClientAssociatedPtr.prototype.constructor =
      ProxyLookupClientAssociatedPtr;

  function ProxyLookupClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProxyLookupClientPtr.prototype.onProxyLookupComplete = function() {
    return ProxyLookupClientProxy.prototype.onProxyLookupComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyLookupClientProxy.prototype.onProxyLookupComplete = function(netError, proxyInfo) {
    var params_ = new ProxyLookupClient_OnProxyLookupComplete_Params();
    params_.netError = netError;
    params_.proxyInfo = proxyInfo;
    var builder = new codec.MessageV0Builder(
        kProxyLookupClient_OnProxyLookupComplete_Name,
        codec.align(ProxyLookupClient_OnProxyLookupComplete_Params.encodedSize));
    builder.encodeStruct(ProxyLookupClient_OnProxyLookupComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ProxyLookupClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ProxyLookupClientStub.prototype.onProxyLookupComplete = function(netError, proxyInfo) {
    return this.delegate_ && this.delegate_.onProxyLookupComplete && this.delegate_.onProxyLookupComplete(netError, proxyInfo);
  }

  ProxyLookupClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyLookupClient_OnProxyLookupComplete_Name:
      var params = reader.decodeStruct(ProxyLookupClient_OnProxyLookupComplete_Params);
      this.onProxyLookupComplete(params.netError, params.proxyInfo);
      return true;
    default:
      return false;
    }
  };

  ProxyLookupClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateProxyLookupClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProxyLookupClient_OnProxyLookupComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ProxyLookupClient_OnProxyLookupComplete_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProxyLookupClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ProxyLookupClient = {
    name: 'network.mojom.ProxyLookupClient',
    kVersion: 0,
    ptrClass: ProxyLookupClientPtr,
    proxyClass: ProxyLookupClientProxy,
    stubClass: ProxyLookupClientStub,
    validateRequest: validateProxyLookupClientRequest,
    validateResponse: null,
  };
  ProxyLookupClientStub.prototype.validator = validateProxyLookupClientRequest;
  ProxyLookupClientProxy.prototype.validator = null;
  exports.ProxyLookupClient = ProxyLookupClient;
  exports.ProxyLookupClientPtr = ProxyLookupClientPtr;
  exports.ProxyLookupClientAssociatedPtr = ProxyLookupClientAssociatedPtr;
})();