// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/tcp_socket.mojom';
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
  var address_list$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/address_list.mojom', 'address_list.mojom.js');
  }
  var ip_endpoint$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_endpoint.mojom', 'ip_endpoint.mojom.js');
  }
  var ssl_config$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ssl_config.mojom', 'ssl_config.mojom.js');
  }
  var tls_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/tls_socket.mojom', 'tls_socket.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var mutable_network_traffic_annotation_tag$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom', 'mutable_network_traffic_annotation_tag.mojom.js');
  }



  function TCPConnectedSocketOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocketOptions.prototype.initDefaults_ = function() {
    this.sendBufferSize = 0;
    this.receiveBufferSize = 0;
    this.noDelay = true;
  };
  TCPConnectedSocketOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocketOptions.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  TCPConnectedSocketOptions.encodedSize = codec.kStructHeaderSize + 16;

  TCPConnectedSocketOptions.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocketOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sendBufferSize = decoder.decodeStruct(codec.Int32);
    val.receiveBufferSize = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.noDelay = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocketOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocketOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.sendBufferSize);
    encoder.encodeStruct(codec.Int32, val.receiveBufferSize);
    packed = 0;
    packed |= (val.noDelay & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPBoundSocket_Listen_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_Listen_Params.prototype.initDefaults_ = function() {
    this.backlog = 0;
    this.socket = new bindings.InterfaceRequest();
  };
  TCPBoundSocket_Listen_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_Listen_Params.validate = function(messageValidator, offset) {
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



    // validate TCPBoundSocket_Listen_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_Listen_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPBoundSocket_Listen_Params.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_Listen_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.backlog = decoder.decodeStruct(codec.Uint32);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  TCPBoundSocket_Listen_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_Listen_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.backlog);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
  };
  function TCPBoundSocket_Listen_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_Listen_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  TCPBoundSocket_Listen_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_Listen_ResponseParams.validate = function(messageValidator, offset) {
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

  TCPBoundSocket_Listen_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPBoundSocket_Listen_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_Listen_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPBoundSocket_Listen_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_Listen_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPBoundSocket_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_Connect_Params.prototype.initDefaults_ = function() {
    this.remoteAddrList = null;
    this.tcpConnectedSocketOptions = null;
    this.socket = new bindings.InterfaceRequest();
    this.observer = new SocketObserverPtr();
  };
  TCPBoundSocket_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_Connect_Params.validate = function(messageValidator, offset) {
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


    // validate TCPBoundSocket_Connect_Params.remoteAddrList
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, address_list$.AddressList, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPBoundSocket_Connect_Params.tcpConnectedSocketOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, TCPConnectedSocketOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPBoundSocket_Connect_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPBoundSocket_Connect_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 20, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_Connect_Params.encodedSize = codec.kStructHeaderSize + 32;

  TCPBoundSocket_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.remoteAddrList = decoder.decodeStructPointer(address_list$.AddressList);
    val.tcpConnectedSocketOptions = decoder.decodeStructPointer(TCPConnectedSocketOptions);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    val.observer = decoder.decodeStruct(new codec.NullableInterface(SocketObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPBoundSocket_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(address_list$.AddressList, val.remoteAddrList);
    encoder.encodeStructPointer(TCPConnectedSocketOptions, val.tcpConnectedSocketOptions);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
    encoder.encodeStruct(new codec.NullableInterface(SocketObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPBoundSocket_Connect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_Connect_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.receiveStream = null;
    this.localAddr = null;
    this.peerAddr = null;
    this.sendStream = null;
  };
  TCPBoundSocket_Connect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_Connect_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate TCPBoundSocket_Connect_ResponseParams.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPBoundSocket_Connect_ResponseParams.peerAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPBoundSocket_Connect_ResponseParams.receiveStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPBoundSocket_Connect_ResponseParams.sendStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_Connect_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  TCPBoundSocket_Connect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_Connect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
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

  TCPBoundSocket_Connect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_Connect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.encodeStruct(codec.NullableHandle, val.receiveStream);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.peerAddr);
    encoder.encodeStruct(codec.NullableHandle, val.sendStream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_UpgradeToTLS_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_UpgradeToTLS_Params.prototype.initDefaults_ = function() {
    this.hostPortPair = null;
    this.options = null;
    this.trafficAnnotation = null;
    this.request = new bindings.InterfaceRequest();
    this.observer = new SocketObserverPtr();
  };
  TCPConnectedSocket_UpgradeToTLS_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_UpgradeToTLS_Params.validate = function(messageValidator, offset) {
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


    // validate TCPConnectedSocket_UpgradeToTLS_Params.hostPortPair
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPConnectedSocket_UpgradeToTLS_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, tls_socket$.TLSClientSocketOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPConnectedSocket_UpgradeToTLS_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPConnectedSocket_UpgradeToTLS_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPConnectedSocket_UpgradeToTLS_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 28, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPConnectedSocket_UpgradeToTLS_Params.encodedSize = codec.kStructHeaderSize + 40;

  TCPConnectedSocket_UpgradeToTLS_Params.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_UpgradeToTLS_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostPortPair = decoder.decodeStructPointer(network_param$.HostPortPair);
    val.options = decoder.decodeStructPointer(tls_socket$.TLSClientSocketOptions);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    val.observer = decoder.decodeStruct(new codec.NullableInterface(SocketObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_UpgradeToTLS_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_UpgradeToTLS_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.HostPortPair, val.hostPortPair);
    encoder.encodeStructPointer(tls_socket$.TLSClientSocketOptions, val.options);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.encodeStruct(new codec.NullableInterface(SocketObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_UpgradeToTLS_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_UpgradeToTLS_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.receiveStream = null;
    this.sendStream = null;
    this.sslInfo = null;
  };
  TCPConnectedSocket_UpgradeToTLS_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_UpgradeToTLS_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate TCPConnectedSocket_UpgradeToTLS_ResponseParams.receiveStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPConnectedSocket_UpgradeToTLS_ResponseParams.sendStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPConnectedSocket_UpgradeToTLS_ResponseParams.sslInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, network_param$.SSLInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPConnectedSocket_UpgradeToTLS_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  TCPConnectedSocket_UpgradeToTLS_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_UpgradeToTLS_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    val.receiveStream = decoder.decodeStruct(codec.NullableHandle);
    val.sendStream = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sslInfo = decoder.decodeStructPointer(network_param$.SSLInfo);
    return val;
  };

  TCPConnectedSocket_UpgradeToTLS_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_UpgradeToTLS_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.encodeStruct(codec.NullableHandle, val.receiveStream);
    encoder.encodeStruct(codec.NullableHandle, val.sendStream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(network_param$.SSLInfo, val.sslInfo);
  };
  function TCPConnectedSocket_SetSendBufferSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetSendBufferSize_Params.prototype.initDefaults_ = function() {
    this.sendBufferSize = 0;
  };
  TCPConnectedSocket_SetSendBufferSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetSendBufferSize_Params.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetSendBufferSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetSendBufferSize_Params.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetSendBufferSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sendBufferSize = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetSendBufferSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetSendBufferSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.sendBufferSize);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_SetSendBufferSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetSendBufferSize_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  TCPConnectedSocket_SetSendBufferSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetSendBufferSize_ResponseParams.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetSendBufferSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetSendBufferSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetSendBufferSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetSendBufferSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetSendBufferSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_SetReceiveBufferSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetReceiveBufferSize_Params.prototype.initDefaults_ = function() {
    this.receiveBufferSize = 0;
  };
  TCPConnectedSocket_SetReceiveBufferSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetReceiveBufferSize_Params.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetReceiveBufferSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetReceiveBufferSize_Params.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetReceiveBufferSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiveBufferSize = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetReceiveBufferSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetReceiveBufferSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.receiveBufferSize);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_SetReceiveBufferSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetReceiveBufferSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_SetNoDelay_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetNoDelay_Params.prototype.initDefaults_ = function() {
    this.noDelay = false;
  };
  TCPConnectedSocket_SetNoDelay_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetNoDelay_Params.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetNoDelay_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetNoDelay_Params.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetNoDelay_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.noDelay = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetNoDelay_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetNoDelay_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.noDelay & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_SetNoDelay_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetNoDelay_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  TCPConnectedSocket_SetNoDelay_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetNoDelay_ResponseParams.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetNoDelay_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetNoDelay_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetNoDelay_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetNoDelay_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetNoDelay_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPConnectedSocket_SetKeepAlive_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetKeepAlive_Params.prototype.initDefaults_ = function() {
    this.enable = false;
    this.delaySecs = 0;
  };
  TCPConnectedSocket_SetKeepAlive_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetKeepAlive_Params.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetKeepAlive_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetKeepAlive_Params.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetKeepAlive_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.enable = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.delaySecs = decoder.decodeStruct(codec.Int32);
    return val;
  };

  TCPConnectedSocket_SetKeepAlive_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetKeepAlive_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.enable & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.delaySecs);
  };
  function TCPConnectedSocket_SetKeepAlive_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPConnectedSocket_SetKeepAlive_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  TCPConnectedSocket_SetKeepAlive_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPConnectedSocket_SetKeepAlive_ResponseParams.validate = function(messageValidator, offset) {
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

  TCPConnectedSocket_SetKeepAlive_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPConnectedSocket_SetKeepAlive_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPConnectedSocket_SetKeepAlive_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPConnectedSocket_SetKeepAlive_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPConnectedSocket_SetKeepAlive_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SocketObserver_OnReadError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SocketObserver_OnReadError_Params.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  SocketObserver_OnReadError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SocketObserver_OnReadError_Params.validate = function(messageValidator, offset) {
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

  SocketObserver_OnReadError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SocketObserver_OnReadError_Params.decode = function(decoder) {
    var packed;
    var val = new SocketObserver_OnReadError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SocketObserver_OnReadError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SocketObserver_OnReadError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SocketObserver_OnWriteError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SocketObserver_OnWriteError_Params.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  SocketObserver_OnWriteError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SocketObserver_OnWriteError_Params.validate = function(messageValidator, offset) {
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

  SocketObserver_OnWriteError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SocketObserver_OnWriteError_Params.decode = function(decoder) {
    var packed;
    var val = new SocketObserver_OnWriteError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SocketObserver_OnWriteError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SocketObserver_OnWriteError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TCPServerSocket_Accept_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPServerSocket_Accept_Params.prototype.initDefaults_ = function() {
    this.observer = new SocketObserverPtr();
  };
  TCPServerSocket_Accept_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPServerSocket_Accept_Params.validate = function(messageValidator, offset) {
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


    // validate TCPServerSocket_Accept_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPServerSocket_Accept_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPServerSocket_Accept_Params.decode = function(decoder) {
    var packed;
    var val = new TCPServerSocket_Accept_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(new codec.NullableInterface(SocketObserverPtr));
    return val;
  };

  TCPServerSocket_Accept_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPServerSocket_Accept_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.NullableInterface(SocketObserverPtr), val.observer);
  };
  function TCPServerSocket_Accept_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPServerSocket_Accept_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.sendStream = null;
    this.remoteAddr = null;
    this.connectedSocket = new TCPConnectedSocketPtr();
    this.receiveStream = null;
  };
  TCPServerSocket_Accept_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPServerSocket_Accept_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate TCPServerSocket_Accept_ResponseParams.remoteAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPServerSocket_Accept_ResponseParams.connectedSocket
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPServerSocket_Accept_ResponseParams.sendStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TCPServerSocket_Accept_ResponseParams.receiveStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPServerSocket_Accept_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  TCPServerSocket_Accept_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPServerSocket_Accept_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    val.sendStream = decoder.decodeStruct(codec.NullableHandle);
    val.remoteAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.connectedSocket = decoder.decodeStruct(new codec.NullableInterface(TCPConnectedSocketPtr));
    val.receiveStream = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPServerSocket_Accept_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPServerSocket_Accept_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.encodeStruct(codec.NullableHandle, val.sendStream);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.remoteAddr);
    encoder.encodeStruct(new codec.NullableInterface(TCPConnectedSocketPtr), val.connectedSocket);
    encoder.encodeStruct(codec.NullableHandle, val.receiveStream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kTCPBoundSocket_Listen_Name = 0;
  var kTCPBoundSocket_Connect_Name = 1;

  function TCPBoundSocketPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TCPBoundSocket,
                                                   handleOrPtrInfo);
  }

  function TCPBoundSocketAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TCPBoundSocket, associatedInterfacePtrInfo);
  }

  TCPBoundSocketAssociatedPtr.prototype =
      Object.create(TCPBoundSocketPtr.prototype);
  TCPBoundSocketAssociatedPtr.prototype.constructor =
      TCPBoundSocketAssociatedPtr;

  function TCPBoundSocketProxy(receiver) {
    this.receiver_ = receiver;
  }
  TCPBoundSocketPtr.prototype.listen = function() {
    return TCPBoundSocketProxy.prototype.listen
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPBoundSocketProxy.prototype.listen = function(backlog, socket) {
    var params_ = new TCPBoundSocket_Listen_Params();
    params_.backlog = backlog;
    params_.socket = socket;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPBoundSocket_Listen_Name,
          codec.align(TCPBoundSocket_Listen_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPBoundSocket_Listen_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPBoundSocket_Listen_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TCPBoundSocketPtr.prototype.connect = function() {
    return TCPBoundSocketProxy.prototype.connect
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPBoundSocketProxy.prototype.connect = function(remoteAddrList, tcpConnectedSocketOptions, socket, observer) {
    var params_ = new TCPBoundSocket_Connect_Params();
    params_.remoteAddrList = remoteAddrList;
    params_.tcpConnectedSocketOptions = tcpConnectedSocketOptions;
    params_.socket = socket;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPBoundSocket_Connect_Name,
          codec.align(TCPBoundSocket_Connect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPBoundSocket_Connect_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPBoundSocket_Connect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TCPBoundSocketStub(delegate) {
    this.delegate_ = delegate;
  }
  TCPBoundSocketStub.prototype.listen = function(backlog, socket) {
    return this.delegate_ && this.delegate_.listen && this.delegate_.listen(backlog, socket);
  }
  TCPBoundSocketStub.prototype.connect = function(remoteAddrList, tcpConnectedSocketOptions, socket, observer) {
    return this.delegate_ && this.delegate_.connect && this.delegate_.connect(remoteAddrList, tcpConnectedSocketOptions, socket, observer);
  }

  TCPBoundSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TCPBoundSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTCPBoundSocket_Listen_Name:
      var params = reader.decodeStruct(TCPBoundSocket_Listen_Params);
      this.listen(params.backlog, params.socket).then(function(response) {
        var responseParams =
            new TCPBoundSocket_Listen_ResponseParams();
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kTCPBoundSocket_Listen_Name,
            codec.align(TCPBoundSocket_Listen_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPBoundSocket_Listen_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTCPBoundSocket_Connect_Name:
      var params = reader.decodeStruct(TCPBoundSocket_Connect_Params);
      this.connect(params.remoteAddrList, params.tcpConnectedSocketOptions, params.socket, params.observer).then(function(response) {
        var responseParams =
            new TCPBoundSocket_Connect_ResponseParams();
        responseParams.netError = response.netError;
        responseParams.localAddr = response.localAddr;
        responseParams.peerAddr = response.peerAddr;
        responseParams.receiveStream = response.receiveStream;
        responseParams.sendStream = response.sendStream;
        var builder = new codec.MessageV1Builder(
            kTCPBoundSocket_Connect_Name,
            codec.align(TCPBoundSocket_Connect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPBoundSocket_Connect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTCPBoundSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTCPBoundSocket_Listen_Name:
        if (message.expectsResponse())
          paramsClass = TCPBoundSocket_Listen_Params;
      break;
      case kTCPBoundSocket_Connect_Name:
        if (message.expectsResponse())
          paramsClass = TCPBoundSocket_Connect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTCPBoundSocketResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTCPBoundSocket_Listen_Name:
        if (message.isResponse())
          paramsClass = TCPBoundSocket_Listen_ResponseParams;
        break;
      case kTCPBoundSocket_Connect_Name:
        if (message.isResponse())
          paramsClass = TCPBoundSocket_Connect_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TCPBoundSocket = {
    name: 'network.mojom.TCPBoundSocket',
    kVersion: 0,
    ptrClass: TCPBoundSocketPtr,
    proxyClass: TCPBoundSocketProxy,
    stubClass: TCPBoundSocketStub,
    validateRequest: validateTCPBoundSocketRequest,
    validateResponse: validateTCPBoundSocketResponse,
  };
  TCPBoundSocketStub.prototype.validator = validateTCPBoundSocketRequest;
  TCPBoundSocketProxy.prototype.validator = validateTCPBoundSocketResponse;
  var kTCPConnectedSocket_UpgradeToTLS_Name = 0;
  var kTCPConnectedSocket_SetSendBufferSize_Name = 1;
  var kTCPConnectedSocket_SetReceiveBufferSize_Name = 2;
  var kTCPConnectedSocket_SetNoDelay_Name = 3;
  var kTCPConnectedSocket_SetKeepAlive_Name = 4;

  function TCPConnectedSocketPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TCPConnectedSocket,
                                                   handleOrPtrInfo);
  }

  function TCPConnectedSocketAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TCPConnectedSocket, associatedInterfacePtrInfo);
  }

  TCPConnectedSocketAssociatedPtr.prototype =
      Object.create(TCPConnectedSocketPtr.prototype);
  TCPConnectedSocketAssociatedPtr.prototype.constructor =
      TCPConnectedSocketAssociatedPtr;

  function TCPConnectedSocketProxy(receiver) {
    this.receiver_ = receiver;
  }
  TCPConnectedSocketPtr.prototype.upgradeToTLS = function() {
    return TCPConnectedSocketProxy.prototype.upgradeToTLS
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPConnectedSocketProxy.prototype.upgradeToTLS = function(hostPortPair, options, trafficAnnotation, request, observer) {
    var params_ = new TCPConnectedSocket_UpgradeToTLS_Params();
    params_.hostPortPair = hostPortPair;
    params_.options = options;
    params_.trafficAnnotation = trafficAnnotation;
    params_.request = request;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPConnectedSocket_UpgradeToTLS_Name,
          codec.align(TCPConnectedSocket_UpgradeToTLS_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPConnectedSocket_UpgradeToTLS_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPConnectedSocket_UpgradeToTLS_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TCPConnectedSocketPtr.prototype.setSendBufferSize = function() {
    return TCPConnectedSocketProxy.prototype.setSendBufferSize
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPConnectedSocketProxy.prototype.setSendBufferSize = function(sendBufferSize) {
    var params_ = new TCPConnectedSocket_SetSendBufferSize_Params();
    params_.sendBufferSize = sendBufferSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPConnectedSocket_SetSendBufferSize_Name,
          codec.align(TCPConnectedSocket_SetSendBufferSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPConnectedSocket_SetSendBufferSize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPConnectedSocket_SetSendBufferSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TCPConnectedSocketPtr.prototype.setReceiveBufferSize = function() {
    return TCPConnectedSocketProxy.prototype.setReceiveBufferSize
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPConnectedSocketProxy.prototype.setReceiveBufferSize = function(receiveBufferSize) {
    var params_ = new TCPConnectedSocket_SetReceiveBufferSize_Params();
    params_.receiveBufferSize = receiveBufferSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPConnectedSocket_SetReceiveBufferSize_Name,
          codec.align(TCPConnectedSocket_SetReceiveBufferSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPConnectedSocket_SetReceiveBufferSize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPConnectedSocket_SetReceiveBufferSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TCPConnectedSocketPtr.prototype.setNoDelay = function() {
    return TCPConnectedSocketProxy.prototype.setNoDelay
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPConnectedSocketProxy.prototype.setNoDelay = function(noDelay) {
    var params_ = new TCPConnectedSocket_SetNoDelay_Params();
    params_.noDelay = noDelay;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPConnectedSocket_SetNoDelay_Name,
          codec.align(TCPConnectedSocket_SetNoDelay_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPConnectedSocket_SetNoDelay_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPConnectedSocket_SetNoDelay_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TCPConnectedSocketPtr.prototype.setKeepAlive = function() {
    return TCPConnectedSocketProxy.prototype.setKeepAlive
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPConnectedSocketProxy.prototype.setKeepAlive = function(enable, delaySecs) {
    var params_ = new TCPConnectedSocket_SetKeepAlive_Params();
    params_.enable = enable;
    params_.delaySecs = delaySecs;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPConnectedSocket_SetKeepAlive_Name,
          codec.align(TCPConnectedSocket_SetKeepAlive_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPConnectedSocket_SetKeepAlive_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPConnectedSocket_SetKeepAlive_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TCPConnectedSocketStub(delegate) {
    this.delegate_ = delegate;
  }
  TCPConnectedSocketStub.prototype.upgradeToTLS = function(hostPortPair, options, trafficAnnotation, request, observer) {
    return this.delegate_ && this.delegate_.upgradeToTLS && this.delegate_.upgradeToTLS(hostPortPair, options, trafficAnnotation, request, observer);
  }
  TCPConnectedSocketStub.prototype.setSendBufferSize = function(sendBufferSize) {
    return this.delegate_ && this.delegate_.setSendBufferSize && this.delegate_.setSendBufferSize(sendBufferSize);
  }
  TCPConnectedSocketStub.prototype.setReceiveBufferSize = function(receiveBufferSize) {
    return this.delegate_ && this.delegate_.setReceiveBufferSize && this.delegate_.setReceiveBufferSize(receiveBufferSize);
  }
  TCPConnectedSocketStub.prototype.setNoDelay = function(noDelay) {
    return this.delegate_ && this.delegate_.setNoDelay && this.delegate_.setNoDelay(noDelay);
  }
  TCPConnectedSocketStub.prototype.setKeepAlive = function(enable, delaySecs) {
    return this.delegate_ && this.delegate_.setKeepAlive && this.delegate_.setKeepAlive(enable, delaySecs);
  }

  TCPConnectedSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TCPConnectedSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTCPConnectedSocket_UpgradeToTLS_Name:
      var params = reader.decodeStruct(TCPConnectedSocket_UpgradeToTLS_Params);
      this.upgradeToTLS(params.hostPortPair, params.options, params.trafficAnnotation, params.request, params.observer).then(function(response) {
        var responseParams =
            new TCPConnectedSocket_UpgradeToTLS_ResponseParams();
        responseParams.netError = response.netError;
        responseParams.receiveStream = response.receiveStream;
        responseParams.sendStream = response.sendStream;
        responseParams.sslInfo = response.sslInfo;
        var builder = new codec.MessageV1Builder(
            kTCPConnectedSocket_UpgradeToTLS_Name,
            codec.align(TCPConnectedSocket_UpgradeToTLS_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPConnectedSocket_UpgradeToTLS_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTCPConnectedSocket_SetSendBufferSize_Name:
      var params = reader.decodeStruct(TCPConnectedSocket_SetSendBufferSize_Params);
      this.setSendBufferSize(params.sendBufferSize).then(function(response) {
        var responseParams =
            new TCPConnectedSocket_SetSendBufferSize_ResponseParams();
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kTCPConnectedSocket_SetSendBufferSize_Name,
            codec.align(TCPConnectedSocket_SetSendBufferSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPConnectedSocket_SetSendBufferSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTCPConnectedSocket_SetReceiveBufferSize_Name:
      var params = reader.decodeStruct(TCPConnectedSocket_SetReceiveBufferSize_Params);
      this.setReceiveBufferSize(params.receiveBufferSize).then(function(response) {
        var responseParams =
            new TCPConnectedSocket_SetReceiveBufferSize_ResponseParams();
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kTCPConnectedSocket_SetReceiveBufferSize_Name,
            codec.align(TCPConnectedSocket_SetReceiveBufferSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPConnectedSocket_SetReceiveBufferSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTCPConnectedSocket_SetNoDelay_Name:
      var params = reader.decodeStruct(TCPConnectedSocket_SetNoDelay_Params);
      this.setNoDelay(params.noDelay).then(function(response) {
        var responseParams =
            new TCPConnectedSocket_SetNoDelay_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kTCPConnectedSocket_SetNoDelay_Name,
            codec.align(TCPConnectedSocket_SetNoDelay_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPConnectedSocket_SetNoDelay_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTCPConnectedSocket_SetKeepAlive_Name:
      var params = reader.decodeStruct(TCPConnectedSocket_SetKeepAlive_Params);
      this.setKeepAlive(params.enable, params.delaySecs).then(function(response) {
        var responseParams =
            new TCPConnectedSocket_SetKeepAlive_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kTCPConnectedSocket_SetKeepAlive_Name,
            codec.align(TCPConnectedSocket_SetKeepAlive_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPConnectedSocket_SetKeepAlive_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTCPConnectedSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTCPConnectedSocket_UpgradeToTLS_Name:
        if (message.expectsResponse())
          paramsClass = TCPConnectedSocket_UpgradeToTLS_Params;
      break;
      case kTCPConnectedSocket_SetSendBufferSize_Name:
        if (message.expectsResponse())
          paramsClass = TCPConnectedSocket_SetSendBufferSize_Params;
      break;
      case kTCPConnectedSocket_SetReceiveBufferSize_Name:
        if (message.expectsResponse())
          paramsClass = TCPConnectedSocket_SetReceiveBufferSize_Params;
      break;
      case kTCPConnectedSocket_SetNoDelay_Name:
        if (message.expectsResponse())
          paramsClass = TCPConnectedSocket_SetNoDelay_Params;
      break;
      case kTCPConnectedSocket_SetKeepAlive_Name:
        if (message.expectsResponse())
          paramsClass = TCPConnectedSocket_SetKeepAlive_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTCPConnectedSocketResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTCPConnectedSocket_UpgradeToTLS_Name:
        if (message.isResponse())
          paramsClass = TCPConnectedSocket_UpgradeToTLS_ResponseParams;
        break;
      case kTCPConnectedSocket_SetSendBufferSize_Name:
        if (message.isResponse())
          paramsClass = TCPConnectedSocket_SetSendBufferSize_ResponseParams;
        break;
      case kTCPConnectedSocket_SetReceiveBufferSize_Name:
        if (message.isResponse())
          paramsClass = TCPConnectedSocket_SetReceiveBufferSize_ResponseParams;
        break;
      case kTCPConnectedSocket_SetNoDelay_Name:
        if (message.isResponse())
          paramsClass = TCPConnectedSocket_SetNoDelay_ResponseParams;
        break;
      case kTCPConnectedSocket_SetKeepAlive_Name:
        if (message.isResponse())
          paramsClass = TCPConnectedSocket_SetKeepAlive_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TCPConnectedSocket = {
    name: 'network.mojom.TCPConnectedSocket',
    kVersion: 0,
    ptrClass: TCPConnectedSocketPtr,
    proxyClass: TCPConnectedSocketProxy,
    stubClass: TCPConnectedSocketStub,
    validateRequest: validateTCPConnectedSocketRequest,
    validateResponse: validateTCPConnectedSocketResponse,
  };
  TCPConnectedSocketStub.prototype.validator = validateTCPConnectedSocketRequest;
  TCPConnectedSocketProxy.prototype.validator = validateTCPConnectedSocketResponse;
  var kSocketObserver_OnReadError_Name = 0;
  var kSocketObserver_OnWriteError_Name = 1;

  function SocketObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SocketObserver,
                                                   handleOrPtrInfo);
  }

  function SocketObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SocketObserver, associatedInterfacePtrInfo);
  }

  SocketObserverAssociatedPtr.prototype =
      Object.create(SocketObserverPtr.prototype);
  SocketObserverAssociatedPtr.prototype.constructor =
      SocketObserverAssociatedPtr;

  function SocketObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  SocketObserverPtr.prototype.onReadError = function() {
    return SocketObserverProxy.prototype.onReadError
        .apply(this.ptr.getProxy(), arguments);
  };

  SocketObserverProxy.prototype.onReadError = function(netError) {
    var params_ = new SocketObserver_OnReadError_Params();
    params_.netError = netError;
    var builder = new codec.MessageV0Builder(
        kSocketObserver_OnReadError_Name,
        codec.align(SocketObserver_OnReadError_Params.encodedSize));
    builder.encodeStruct(SocketObserver_OnReadError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SocketObserverPtr.prototype.onWriteError = function() {
    return SocketObserverProxy.prototype.onWriteError
        .apply(this.ptr.getProxy(), arguments);
  };

  SocketObserverProxy.prototype.onWriteError = function(netError) {
    var params_ = new SocketObserver_OnWriteError_Params();
    params_.netError = netError;
    var builder = new codec.MessageV0Builder(
        kSocketObserver_OnWriteError_Name,
        codec.align(SocketObserver_OnWriteError_Params.encodedSize));
    builder.encodeStruct(SocketObserver_OnWriteError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SocketObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  SocketObserverStub.prototype.onReadError = function(netError) {
    return this.delegate_ && this.delegate_.onReadError && this.delegate_.onReadError(netError);
  }
  SocketObserverStub.prototype.onWriteError = function(netError) {
    return this.delegate_ && this.delegate_.onWriteError && this.delegate_.onWriteError(netError);
  }

  SocketObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSocketObserver_OnReadError_Name:
      var params = reader.decodeStruct(SocketObserver_OnReadError_Params);
      this.onReadError(params.netError);
      return true;
    case kSocketObserver_OnWriteError_Name:
      var params = reader.decodeStruct(SocketObserver_OnWriteError_Params);
      this.onWriteError(params.netError);
      return true;
    default:
      return false;
    }
  };

  SocketObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSocketObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSocketObserver_OnReadError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SocketObserver_OnReadError_Params;
      break;
      case kSocketObserver_OnWriteError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SocketObserver_OnWriteError_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSocketObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SocketObserver = {
    name: 'network.mojom.SocketObserver',
    kVersion: 0,
    ptrClass: SocketObserverPtr,
    proxyClass: SocketObserverProxy,
    stubClass: SocketObserverStub,
    validateRequest: validateSocketObserverRequest,
    validateResponse: null,
  };
  SocketObserverStub.prototype.validator = validateSocketObserverRequest;
  SocketObserverProxy.prototype.validator = null;
  var kTCPServerSocket_Accept_Name = 0;

  function TCPServerSocketPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TCPServerSocket,
                                                   handleOrPtrInfo);
  }

  function TCPServerSocketAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TCPServerSocket, associatedInterfacePtrInfo);
  }

  TCPServerSocketAssociatedPtr.prototype =
      Object.create(TCPServerSocketPtr.prototype);
  TCPServerSocketAssociatedPtr.prototype.constructor =
      TCPServerSocketAssociatedPtr;

  function TCPServerSocketProxy(receiver) {
    this.receiver_ = receiver;
  }
  TCPServerSocketPtr.prototype.accept = function() {
    return TCPServerSocketProxy.prototype.accept
        .apply(this.ptr.getProxy(), arguments);
  };

  TCPServerSocketProxy.prototype.accept = function(observer) {
    var params_ = new TCPServerSocket_Accept_Params();
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTCPServerSocket_Accept_Name,
          codec.align(TCPServerSocket_Accept_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPServerSocket_Accept_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPServerSocket_Accept_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TCPServerSocketStub(delegate) {
    this.delegate_ = delegate;
  }
  TCPServerSocketStub.prototype.accept = function(observer) {
    return this.delegate_ && this.delegate_.accept && this.delegate_.accept(observer);
  }

  TCPServerSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TCPServerSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTCPServerSocket_Accept_Name:
      var params = reader.decodeStruct(TCPServerSocket_Accept_Params);
      this.accept(params.observer).then(function(response) {
        var responseParams =
            new TCPServerSocket_Accept_ResponseParams();
        responseParams.netError = response.netError;
        responseParams.remoteAddr = response.remoteAddr;
        responseParams.connectedSocket = response.connectedSocket;
        responseParams.sendStream = response.sendStream;
        responseParams.receiveStream = response.receiveStream;
        var builder = new codec.MessageV1Builder(
            kTCPServerSocket_Accept_Name,
            codec.align(TCPServerSocket_Accept_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPServerSocket_Accept_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTCPServerSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTCPServerSocket_Accept_Name:
        if (message.expectsResponse())
          paramsClass = TCPServerSocket_Accept_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTCPServerSocketResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTCPServerSocket_Accept_Name:
        if (message.isResponse())
          paramsClass = TCPServerSocket_Accept_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TCPServerSocket = {
    name: 'network.mojom.TCPServerSocket',
    kVersion: 0,
    ptrClass: TCPServerSocketPtr,
    proxyClass: TCPServerSocketProxy,
    stubClass: TCPServerSocketStub,
    validateRequest: validateTCPServerSocketRequest,
    validateResponse: validateTCPServerSocketResponse,
  };
  TCPServerSocketStub.prototype.validator = validateTCPServerSocketRequest;
  TCPServerSocketProxy.prototype.validator = validateTCPServerSocketResponse;
  exports.TCPConnectedSocketOptions = TCPConnectedSocketOptions;
  exports.TCPBoundSocket = TCPBoundSocket;
  exports.TCPBoundSocketPtr = TCPBoundSocketPtr;
  exports.TCPBoundSocketAssociatedPtr = TCPBoundSocketAssociatedPtr;
  exports.TCPConnectedSocket = TCPConnectedSocket;
  exports.TCPConnectedSocketPtr = TCPConnectedSocketPtr;
  exports.TCPConnectedSocketAssociatedPtr = TCPConnectedSocketAssociatedPtr;
  exports.SocketObserver = SocketObserver;
  exports.SocketObserverPtr = SocketObserverPtr;
  exports.SocketObserverAssociatedPtr = SocketObserverAssociatedPtr;
  exports.TCPServerSocket = TCPServerSocket;
  exports.TCPServerSocketPtr = TCPServerSocketPtr;
  exports.TCPServerSocketAssociatedPtr = TCPServerSocketAssociatedPtr;
})();