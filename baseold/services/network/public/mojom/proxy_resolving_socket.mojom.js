// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/proxy_resolving_socket.mojom';
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
  var ip_endpoint$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_endpoint.mojom', 'ip_endpoint.mojom.js');
  }
  var mutable_network_traffic_annotation_tag$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom', 'mutable_network_traffic_annotation_tag.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var ssl_config$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ssl_config.mojom', 'ssl_config.mojom.js');
  }
  var tcp_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/tcp_socket.mojom', 'tcp_socket.mojom.js');
  }
  var tls_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/tls_socket.mojom', 'tls_socket.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }



  function ProxyResolvingSocketOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyResolvingSocketOptions.prototype.initDefaults_ = function() {
    this.useTls = false;
    this.fakeTlsHandshake = false;
  };
  ProxyResolvingSocketOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyResolvingSocketOptions.validate = function(messageValidator, offset) {
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

  ProxyResolvingSocketOptions.encodedSize = codec.kStructHeaderSize + 8;

  ProxyResolvingSocketOptions.decode = function(decoder) {
    var packed;
    var val = new ProxyResolvingSocketOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.useTls = (packed >> 0) & 1 ? true : false;
    val.fakeTlsHandshake = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProxyResolvingSocketOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyResolvingSocketOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.useTls & 1) << 0
    packed |= (val.fakeTlsHandshake & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ProxyResolvingSocket_UpgradeToTLS_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyResolvingSocket_UpgradeToTLS_Params.prototype.initDefaults_ = function() {
    this.hostPortPair = null;
    this.trafficAnnotation = null;
    this.request = new bindings.InterfaceRequest();
    this.observer = new tcp_socket$.SocketObserverPtr();
  };
  ProxyResolvingSocket_UpgradeToTLS_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyResolvingSocket_UpgradeToTLS_Params.validate = function(messageValidator, offset) {
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


    // validate ProxyResolvingSocket_UpgradeToTLS_Params.hostPortPair
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocket_UpgradeToTLS_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocket_UpgradeToTLS_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocket_UpgradeToTLS_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 20, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyResolvingSocket_UpgradeToTLS_Params.encodedSize = codec.kStructHeaderSize + 32;

  ProxyResolvingSocket_UpgradeToTLS_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyResolvingSocket_UpgradeToTLS_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostPortPair = decoder.decodeStructPointer(network_param$.HostPortPair);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    val.observer = decoder.decodeStruct(new codec.NullableInterface(tcp_socket$.SocketObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProxyResolvingSocket_UpgradeToTLS_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyResolvingSocket_UpgradeToTLS_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.HostPortPair, val.hostPortPair);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.encodeStruct(new codec.NullableInterface(tcp_socket$.SocketObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ProxyResolvingSocket_UpgradeToTLS_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyResolvingSocket_UpgradeToTLS_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.receiveStream = null;
    this.sendStream = null;
  };
  ProxyResolvingSocket_UpgradeToTLS_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyResolvingSocket_UpgradeToTLS_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate ProxyResolvingSocket_UpgradeToTLS_ResponseParams.receiveStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocket_UpgradeToTLS_ResponseParams.sendStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyResolvingSocket_UpgradeToTLS_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  ProxyResolvingSocket_UpgradeToTLS_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProxyResolvingSocket_UpgradeToTLS_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    val.receiveStream = decoder.decodeStruct(codec.NullableHandle);
    val.sendStream = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProxyResolvingSocket_UpgradeToTLS_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyResolvingSocket_UpgradeToTLS_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.encodeStruct(codec.NullableHandle, val.receiveStream);
    encoder.encodeStruct(codec.NullableHandle, val.sendStream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.options = null;
    this.trafficAnnotation = null;
    this.socket = new bindings.InterfaceRequest();
    this.observer = new tcp_socket$.SocketObserverPtr();
  };
  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.validate = function(messageValidator, offset) {
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


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ProxyResolvingSocketOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 28, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.encodedSize = codec.kStructHeaderSize + 40;

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.decode = function(decoder) {
    var packed;
    var val = new ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.options = decoder.decodeStructPointer(ProxyResolvingSocketOptions);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    val.observer = decoder.decodeStruct(new codec.NullableInterface(tcp_socket$.SocketObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(ProxyResolvingSocketOptions, val.options);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
    encoder.encodeStruct(new codec.NullableInterface(tcp_socket$.SocketObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.receiveStream = null;
    this.localAddr = null;
    this.peerAddr = null;
    this.sendStream = null;
  };
  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.peerAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.receiveStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.sendStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    val.receiveStream = decoder.decodeStruct(codec.NullableHandle);
    val.localAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.peerAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.sendStream = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.encodeStruct(codec.NullableHandle, val.receiveStream);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.peerAddr);
    encoder.encodeStruct(codec.NullableHandle, val.sendStream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kProxyResolvingSocket_UpgradeToTLS_Name = 0;

  function ProxyResolvingSocketPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProxyResolvingSocket,
                                                   handleOrPtrInfo);
  }

  function ProxyResolvingSocketAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProxyResolvingSocket, associatedInterfacePtrInfo);
  }

  ProxyResolvingSocketAssociatedPtr.prototype =
      Object.create(ProxyResolvingSocketPtr.prototype);
  ProxyResolvingSocketAssociatedPtr.prototype.constructor =
      ProxyResolvingSocketAssociatedPtr;

  function ProxyResolvingSocketProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProxyResolvingSocketPtr.prototype.upgradeToTLS = function() {
    return ProxyResolvingSocketProxy.prototype.upgradeToTLS
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyResolvingSocketProxy.prototype.upgradeToTLS = function(hostPortPair, trafficAnnotation, request, observer) {
    var params_ = new ProxyResolvingSocket_UpgradeToTLS_Params();
    params_.hostPortPair = hostPortPair;
    params_.trafficAnnotation = trafficAnnotation;
    params_.request = request;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProxyResolvingSocket_UpgradeToTLS_Name,
          codec.align(ProxyResolvingSocket_UpgradeToTLS_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProxyResolvingSocket_UpgradeToTLS_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProxyResolvingSocket_UpgradeToTLS_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProxyResolvingSocketStub(delegate) {
    this.delegate_ = delegate;
  }
  ProxyResolvingSocketStub.prototype.upgradeToTLS = function(hostPortPair, trafficAnnotation, request, observer) {
    return this.delegate_ && this.delegate_.upgradeToTLS && this.delegate_.upgradeToTLS(hostPortPair, trafficAnnotation, request, observer);
  }

  ProxyResolvingSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProxyResolvingSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyResolvingSocket_UpgradeToTLS_Name:
      var params = reader.decodeStruct(ProxyResolvingSocket_UpgradeToTLS_Params);
      this.upgradeToTLS(params.hostPortPair, params.trafficAnnotation, params.request, params.observer).then(function(response) {
        var responseParams =
            new ProxyResolvingSocket_UpgradeToTLS_ResponseParams();
        responseParams.netError = response.netError;
        responseParams.receiveStream = response.receiveStream;
        responseParams.sendStream = response.sendStream;
        var builder = new codec.MessageV1Builder(
            kProxyResolvingSocket_UpgradeToTLS_Name,
            codec.align(ProxyResolvingSocket_UpgradeToTLS_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProxyResolvingSocket_UpgradeToTLS_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateProxyResolvingSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProxyResolvingSocket_UpgradeToTLS_Name:
        if (message.expectsResponse())
          paramsClass = ProxyResolvingSocket_UpgradeToTLS_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProxyResolvingSocketResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProxyResolvingSocket_UpgradeToTLS_Name:
        if (message.isResponse())
          paramsClass = ProxyResolvingSocket_UpgradeToTLS_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProxyResolvingSocket = {
    name: 'network.mojom.ProxyResolvingSocket',
    kVersion: 0,
    ptrClass: ProxyResolvingSocketPtr,
    proxyClass: ProxyResolvingSocketProxy,
    stubClass: ProxyResolvingSocketStub,
    validateRequest: validateProxyResolvingSocketRequest,
    validateResponse: validateProxyResolvingSocketResponse,
  };
  ProxyResolvingSocketStub.prototype.validator = validateProxyResolvingSocketRequest;
  ProxyResolvingSocketProxy.prototype.validator = validateProxyResolvingSocketResponse;
  var kProxyResolvingSocketFactory_CreateProxyResolvingSocket_Name = 0;

  function ProxyResolvingSocketFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProxyResolvingSocketFactory,
                                                   handleOrPtrInfo);
  }

  function ProxyResolvingSocketFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProxyResolvingSocketFactory, associatedInterfacePtrInfo);
  }

  ProxyResolvingSocketFactoryAssociatedPtr.prototype =
      Object.create(ProxyResolvingSocketFactoryPtr.prototype);
  ProxyResolvingSocketFactoryAssociatedPtr.prototype.constructor =
      ProxyResolvingSocketFactoryAssociatedPtr;

  function ProxyResolvingSocketFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProxyResolvingSocketFactoryPtr.prototype.createProxyResolvingSocket = function() {
    return ProxyResolvingSocketFactoryProxy.prototype.createProxyResolvingSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  ProxyResolvingSocketFactoryProxy.prototype.createProxyResolvingSocket = function(url, options, trafficAnnotation, socket, observer) {
    var params_ = new ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params();
    params_.url = url;
    params_.options = options;
    params_.trafficAnnotation = trafficAnnotation;
    params_.socket = socket;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProxyResolvingSocketFactory_CreateProxyResolvingSocket_Name,
          codec.align(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProxyResolvingSocketFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  ProxyResolvingSocketFactoryStub.prototype.createProxyResolvingSocket = function(url, options, trafficAnnotation, socket, observer) {
    return this.delegate_ && this.delegate_.createProxyResolvingSocket && this.delegate_.createProxyResolvingSocket(url, options, trafficAnnotation, socket, observer);
  }

  ProxyResolvingSocketFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProxyResolvingSocketFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProxyResolvingSocketFactory_CreateProxyResolvingSocket_Name:
      var params = reader.decodeStruct(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params);
      this.createProxyResolvingSocket(params.url, params.options, params.trafficAnnotation, params.socket, params.observer).then(function(response) {
        var responseParams =
            new ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams();
        responseParams.result = response.result;
        responseParams.localAddr = response.localAddr;
        responseParams.peerAddr = response.peerAddr;
        responseParams.receiveStream = response.receiveStream;
        responseParams.sendStream = response.sendStream;
        var builder = new codec.MessageV1Builder(
            kProxyResolvingSocketFactory_CreateProxyResolvingSocket_Name,
            codec.align(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateProxyResolvingSocketFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProxyResolvingSocketFactory_CreateProxyResolvingSocket_Name:
        if (message.expectsResponse())
          paramsClass = ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProxyResolvingSocketFactoryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProxyResolvingSocketFactory_CreateProxyResolvingSocket_Name:
        if (message.isResponse())
          paramsClass = ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProxyResolvingSocketFactory = {
    name: 'network.mojom.ProxyResolvingSocketFactory',
    kVersion: 0,
    ptrClass: ProxyResolvingSocketFactoryPtr,
    proxyClass: ProxyResolvingSocketFactoryProxy,
    stubClass: ProxyResolvingSocketFactoryStub,
    validateRequest: validateProxyResolvingSocketFactoryRequest,
    validateResponse: validateProxyResolvingSocketFactoryResponse,
  };
  ProxyResolvingSocketFactoryStub.prototype.validator = validateProxyResolvingSocketFactoryRequest;
  ProxyResolvingSocketFactoryProxy.prototype.validator = validateProxyResolvingSocketFactoryResponse;
  exports.ProxyResolvingSocketOptions = ProxyResolvingSocketOptions;
  exports.ProxyResolvingSocket = ProxyResolvingSocket;
  exports.ProxyResolvingSocketPtr = ProxyResolvingSocketPtr;
  exports.ProxyResolvingSocketAssociatedPtr = ProxyResolvingSocketAssociatedPtr;
  exports.ProxyResolvingSocketFactory = ProxyResolvingSocketFactory;
  exports.ProxyResolvingSocketFactoryPtr = ProxyResolvingSocketFactoryPtr;
  exports.ProxyResolvingSocketFactoryAssociatedPtr = ProxyResolvingSocketFactoryAssociatedPtr;
})();