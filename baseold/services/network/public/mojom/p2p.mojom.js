// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/p2p.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var network_interface$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_interface.mojom', 'network_interface.mojom.js');
  }
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', 'ip_address.mojom.js');
  }
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


  var P2PSocketType = {};

  P2PSocketType.isKnownEnumValue = function(value) {
    return false;
  };

  P2PSocketType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var P2PSocketOption = {};

  P2PSocketOption.isKnownEnumValue = function(value) {
    return false;
  };

  P2PSocketOption.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function P2PHostAndIPEndPoint(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PHostAndIPEndPoint.prototype.initDefaults_ = function() {
  };
  P2PHostAndIPEndPoint.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PHostAndIPEndPoint.validate = function(messageValidator, offset) {
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

  P2PHostAndIPEndPoint.encodedSize = codec.kStructHeaderSize + 0;

  P2PHostAndIPEndPoint.decode = function(decoder) {
    var packed;
    var val = new P2PHostAndIPEndPoint();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  P2PHostAndIPEndPoint.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PHostAndIPEndPoint.encodedSize);
    encoder.writeUint32(0);
  };
  function P2PPacketInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PPacketInfo.prototype.initDefaults_ = function() {
  };
  P2PPacketInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PPacketInfo.validate = function(messageValidator, offset) {
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

  P2PPacketInfo.encodedSize = codec.kStructHeaderSize + 0;

  P2PPacketInfo.decode = function(decoder) {
    var packed;
    var val = new P2PPacketInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  P2PPacketInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PPacketInfo.encodedSize);
    encoder.writeUint32(0);
  };
  function P2PPortRange(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PPortRange.prototype.initDefaults_ = function() {
  };
  P2PPortRange.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PPortRange.validate = function(messageValidator, offset) {
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

  P2PPortRange.encodedSize = codec.kStructHeaderSize + 0;

  P2PPortRange.decode = function(decoder) {
    var packed;
    var val = new P2PPortRange();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  P2PPortRange.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PPortRange.encodedSize);
    encoder.writeUint32(0);
  };
  function P2PSendPacketMetrics(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSendPacketMetrics.prototype.initDefaults_ = function() {
  };
  P2PSendPacketMetrics.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSendPacketMetrics.validate = function(messageValidator, offset) {
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

  P2PSendPacketMetrics.encodedSize = codec.kStructHeaderSize + 0;

  P2PSendPacketMetrics.decode = function(decoder) {
    var packed;
    var val = new P2PSendPacketMetrics();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  P2PSendPacketMetrics.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSendPacketMetrics.encodedSize);
    encoder.writeUint32(0);
  };
  function P2PNetworkNotificationClient_NetworkListChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PNetworkNotificationClient_NetworkListChanged_Params.prototype.initDefaults_ = function() {
    this.networks = null;
    this.defaultIpv4LocalAddress = null;
    this.defaultIpv6LocalAddress = null;
  };
  P2PNetworkNotificationClient_NetworkListChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PNetworkNotificationClient_NetworkListChanged_Params.validate = function(messageValidator, offset) {
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


    // validate P2PNetworkNotificationClient_NetworkListChanged_Params.networks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(network_interface$.NetworkInterface), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PNetworkNotificationClient_NetworkListChanged_Params.defaultIpv4LocalAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PNetworkNotificationClient_NetworkListChanged_Params.defaultIpv6LocalAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PNetworkNotificationClient_NetworkListChanged_Params.encodedSize = codec.kStructHeaderSize + 24;

  P2PNetworkNotificationClient_NetworkListChanged_Params.decode = function(decoder) {
    var packed;
    var val = new P2PNetworkNotificationClient_NetworkListChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.networks = decoder.decodeArrayPointer(new codec.PointerTo(network_interface$.NetworkInterface));
    val.defaultIpv4LocalAddress = decoder.decodeStructPointer(ip_address$.IPAddress);
    val.defaultIpv6LocalAddress = decoder.decodeStructPointer(ip_address$.IPAddress);
    return val;
  };

  P2PNetworkNotificationClient_NetworkListChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PNetworkNotificationClient_NetworkListChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(network_interface$.NetworkInterface), val.networks);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.defaultIpv4LocalAddress);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.defaultIpv6LocalAddress);
  };
  function P2PSocketManager_StartNetworkNotifications_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketManager_StartNetworkNotifications_Params.prototype.initDefaults_ = function() {
    this.client = new P2PNetworkNotificationClientPtr();
  };
  P2PSocketManager_StartNetworkNotifications_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketManager_StartNetworkNotifications_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketManager_StartNetworkNotifications_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketManager_StartNetworkNotifications_Params.encodedSize = codec.kStructHeaderSize + 8;

  P2PSocketManager_StartNetworkNotifications_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketManager_StartNetworkNotifications_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(P2PNetworkNotificationClientPtr));
    return val;
  };

  P2PSocketManager_StartNetworkNotifications_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketManager_StartNetworkNotifications_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(P2PNetworkNotificationClientPtr), val.client);
  };
  function P2PSocketManager_GetHostAddress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketManager_GetHostAddress_Params.prototype.initDefaults_ = function() {
    this.hostName = null;
    this.enableMdns = false;
  };
  P2PSocketManager_GetHostAddress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketManager_GetHostAddress_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketManager_GetHostAddress_Params.hostName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  P2PSocketManager_GetHostAddress_Params.encodedSize = codec.kStructHeaderSize + 16;

  P2PSocketManager_GetHostAddress_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketManager_GetHostAddress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostName = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.enableMdns = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  P2PSocketManager_GetHostAddress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketManager_GetHostAddress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.hostName);
    packed = 0;
    packed |= (val.enableMdns & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function P2PSocketManager_GetHostAddress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketManager_GetHostAddress_ResponseParams.prototype.initDefaults_ = function() {
    this.addresses = null;
  };
  P2PSocketManager_GetHostAddress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketManager_GetHostAddress_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate P2PSocketManager_GetHostAddress_ResponseParams.addresses
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ip_address$.IPAddress), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketManager_GetHostAddress_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  P2PSocketManager_GetHostAddress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new P2PSocketManager_GetHostAddress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addresses = decoder.decodeArrayPointer(new codec.PointerTo(ip_address$.IPAddress));
    return val;
  };

  P2PSocketManager_GetHostAddress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketManager_GetHostAddress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ip_address$.IPAddress), val.addresses);
  };
  function P2PSocketManager_CreateSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketManager_CreateSocket_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.socket = new bindings.InterfaceRequest();
    this.localAddress = null;
    this.portRange = null;
    this.remoteAddress = null;
    this.client = new P2PSocketClientPtr();
  };
  P2PSocketManager_CreateSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketManager_CreateSocket_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketManager_CreateSocket_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, P2PSocketType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketManager_CreateSocket_Params.localAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketManager_CreateSocket_Params.portRange
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, P2PPortRange, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketManager_CreateSocket_Params.remoteAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, P2PHostAndIPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketManager_CreateSocket_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 32, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketManager_CreateSocket_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketManager_CreateSocket_Params.encodedSize = codec.kStructHeaderSize + 40;

  P2PSocketManager_CreateSocket_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketManager_CreateSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    val.localAddress = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.portRange = decoder.decodeStructPointer(P2PPortRange);
    val.remoteAddress = decoder.decodeStructPointer(P2PHostAndIPEndPoint);
    val.client = decoder.decodeStruct(new codec.Interface(P2PSocketClientPtr));
    return val;
  };

  P2PSocketManager_CreateSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketManager_CreateSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddress);
    encoder.encodeStructPointer(P2PPortRange, val.portRange);
    encoder.encodeStructPointer(P2PHostAndIPEndPoint, val.remoteAddress);
    encoder.encodeStruct(new codec.Interface(P2PSocketClientPtr), val.client);
  };
  function P2PSocket_Send_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocket_Send_Params.prototype.initDefaults_ = function() {
    this.data = null;
    this.packetInfo = null;
    this.trafficAnnotation = null;
  };
  P2PSocket_Send_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocket_Send_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocket_Send_Params.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Int8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocket_Send_Params.packetInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, P2PPacketInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocket_Send_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocket_Send_Params.encodedSize = codec.kStructHeaderSize + 24;

  P2PSocket_Send_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocket_Send_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(codec.Int8);
    val.packetInfo = decoder.decodeStructPointer(P2PPacketInfo);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    return val;
  };

  P2PSocket_Send_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocket_Send_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Int8, val.data);
    encoder.encodeStructPointer(P2PPacketInfo, val.packetInfo);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
  };
  function P2PSocket_SetOption_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocket_SetOption_Params.prototype.initDefaults_ = function() {
    this.option = 0;
    this.value = 0;
  };
  P2PSocket_SetOption_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocket_SetOption_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocket_SetOption_Params.option
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, P2PSocketOption);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  P2PSocket_SetOption_Params.encodedSize = codec.kStructHeaderSize + 8;

  P2PSocket_SetOption_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocket_SetOption_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.option = decoder.decodeStruct(codec.Int32);
    val.value = decoder.decodeStruct(codec.Int32);
    return val;
  };

  P2PSocket_SetOption_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocket_SetOption_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.option);
    encoder.encodeStruct(codec.Int32, val.value);
  };
  function P2PSocketClient_SocketCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketClient_SocketCreated_Params.prototype.initDefaults_ = function() {
    this.localAddress = null;
    this.remoteAddress = null;
  };
  P2PSocketClient_SocketCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketClient_SocketCreated_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketClient_SocketCreated_Params.localAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketClient_SocketCreated_Params.remoteAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketClient_SocketCreated_Params.encodedSize = codec.kStructHeaderSize + 16;

  P2PSocketClient_SocketCreated_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketClient_SocketCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localAddress = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.remoteAddress = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    return val;
  };

  P2PSocketClient_SocketCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketClient_SocketCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddress);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.remoteAddress);
  };
  function P2PSocketClient_SendComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketClient_SendComplete_Params.prototype.initDefaults_ = function() {
    this.sendMetrics = null;
  };
  P2PSocketClient_SendComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketClient_SendComplete_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketClient_SendComplete_Params.sendMetrics
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, P2PSendPacketMetrics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketClient_SendComplete_Params.encodedSize = codec.kStructHeaderSize + 8;

  P2PSocketClient_SendComplete_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketClient_SendComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sendMetrics = decoder.decodeStructPointer(P2PSendPacketMetrics);
    return val;
  };

  P2PSocketClient_SendComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketClient_SendComplete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(P2PSendPacketMetrics, val.sendMetrics);
  };
  function P2PSocketClient_IncomingTcpConnection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketClient_IncomingTcpConnection_Params.prototype.initDefaults_ = function() {
    this.socketAddress = null;
    this.socket = new P2PSocketPtr();
    this.client = new bindings.InterfaceRequest();
  };
  P2PSocketClient_IncomingTcpConnection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketClient_IncomingTcpConnection_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketClient_IncomingTcpConnection_Params.socketAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketClient_IncomingTcpConnection_Params.socket
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketClient_IncomingTcpConnection_Params.client
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketClient_IncomingTcpConnection_Params.encodedSize = codec.kStructHeaderSize + 24;

  P2PSocketClient_IncomingTcpConnection_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketClient_IncomingTcpConnection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.socketAddress = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.socket = decoder.decodeStruct(new codec.Interface(P2PSocketPtr));
    val.client = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  P2PSocketClient_IncomingTcpConnection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketClient_IncomingTcpConnection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.socketAddress);
    encoder.encodeStruct(new codec.Interface(P2PSocketPtr), val.socket);
    encoder.encodeStruct(codec.InterfaceRequest, val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function P2PSocketClient_DataReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PSocketClient_DataReceived_Params.prototype.initDefaults_ = function() {
    this.socketAddress = null;
    this.data = null;
    this.timestamp = null;
  };
  P2PSocketClient_DataReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PSocketClient_DataReceived_Params.validate = function(messageValidator, offset) {
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


    // validate P2PSocketClient_DataReceived_Params.socketAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketClient_DataReceived_Params.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Int8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate P2PSocketClient_DataReceived_Params.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  P2PSocketClient_DataReceived_Params.encodedSize = codec.kStructHeaderSize + 24;

  P2PSocketClient_DataReceived_Params.decode = function(decoder) {
    var packed;
    var val = new P2PSocketClient_DataReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.socketAddress = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.data = decoder.decodeArrayPointer(codec.Int8);
    val.timestamp = decoder.decodeStructPointer(time$.TimeTicks);
    return val;
  };

  P2PSocketClient_DataReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PSocketClient_DataReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.socketAddress);
    encoder.encodeArrayPointer(codec.Int8, val.data);
    encoder.encodeStructPointer(time$.TimeTicks, val.timestamp);
  };
  var kP2PNetworkNotificationClient_NetworkListChanged_Name = 0;

  function P2PNetworkNotificationClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(P2PNetworkNotificationClient,
                                                   handleOrPtrInfo);
  }

  function P2PNetworkNotificationClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        P2PNetworkNotificationClient, associatedInterfacePtrInfo);
  }

  P2PNetworkNotificationClientAssociatedPtr.prototype =
      Object.create(P2PNetworkNotificationClientPtr.prototype);
  P2PNetworkNotificationClientAssociatedPtr.prototype.constructor =
      P2PNetworkNotificationClientAssociatedPtr;

  function P2PNetworkNotificationClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  P2PNetworkNotificationClientPtr.prototype.networkListChanged = function() {
    return P2PNetworkNotificationClientProxy.prototype.networkListChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PNetworkNotificationClientProxy.prototype.networkListChanged = function(networks, defaultIpv4LocalAddress, defaultIpv6LocalAddress) {
    var params_ = new P2PNetworkNotificationClient_NetworkListChanged_Params();
    params_.networks = networks;
    params_.defaultIpv4LocalAddress = defaultIpv4LocalAddress;
    params_.defaultIpv6LocalAddress = defaultIpv6LocalAddress;
    var builder = new codec.MessageV0Builder(
        kP2PNetworkNotificationClient_NetworkListChanged_Name,
        codec.align(P2PNetworkNotificationClient_NetworkListChanged_Params.encodedSize));
    builder.encodeStruct(P2PNetworkNotificationClient_NetworkListChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function P2PNetworkNotificationClientStub(delegate) {
    this.delegate_ = delegate;
  }
  P2PNetworkNotificationClientStub.prototype.networkListChanged = function(networks, defaultIpv4LocalAddress, defaultIpv6LocalAddress) {
    return this.delegate_ && this.delegate_.networkListChanged && this.delegate_.networkListChanged(networks, defaultIpv4LocalAddress, defaultIpv6LocalAddress);
  }

  P2PNetworkNotificationClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PNetworkNotificationClient_NetworkListChanged_Name:
      var params = reader.decodeStruct(P2PNetworkNotificationClient_NetworkListChanged_Params);
      this.networkListChanged(params.networks, params.defaultIpv4LocalAddress, params.defaultIpv6LocalAddress);
      return true;
    default:
      return false;
    }
  };

  P2PNetworkNotificationClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateP2PNetworkNotificationClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kP2PNetworkNotificationClient_NetworkListChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PNetworkNotificationClient_NetworkListChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateP2PNetworkNotificationClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var P2PNetworkNotificationClient = {
    name: 'network.mojom.P2PNetworkNotificationClient',
    kVersion: 0,
    ptrClass: P2PNetworkNotificationClientPtr,
    proxyClass: P2PNetworkNotificationClientProxy,
    stubClass: P2PNetworkNotificationClientStub,
    validateRequest: validateP2PNetworkNotificationClientRequest,
    validateResponse: null,
  };
  P2PNetworkNotificationClientStub.prototype.validator = validateP2PNetworkNotificationClientRequest;
  P2PNetworkNotificationClientProxy.prototype.validator = null;
  var kP2PSocketManager_StartNetworkNotifications_Name = 0;
  var kP2PSocketManager_GetHostAddress_Name = 1;
  var kP2PSocketManager_CreateSocket_Name = 2;

  function P2PSocketManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(P2PSocketManager,
                                                   handleOrPtrInfo);
  }

  function P2PSocketManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        P2PSocketManager, associatedInterfacePtrInfo);
  }

  P2PSocketManagerAssociatedPtr.prototype =
      Object.create(P2PSocketManagerPtr.prototype);
  P2PSocketManagerAssociatedPtr.prototype.constructor =
      P2PSocketManagerAssociatedPtr;

  function P2PSocketManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  P2PSocketManagerPtr.prototype.startNetworkNotifications = function() {
    return P2PSocketManagerProxy.prototype.startNetworkNotifications
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketManagerProxy.prototype.startNetworkNotifications = function(client) {
    var params_ = new P2PSocketManager_StartNetworkNotifications_Params();
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kP2PSocketManager_StartNetworkNotifications_Name,
        codec.align(P2PSocketManager_StartNetworkNotifications_Params.encodedSize));
    builder.encodeStruct(P2PSocketManager_StartNetworkNotifications_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PSocketManagerPtr.prototype.getHostAddress = function() {
    return P2PSocketManagerProxy.prototype.getHostAddress
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketManagerProxy.prototype.getHostAddress = function(hostName, enableMdns) {
    var params_ = new P2PSocketManager_GetHostAddress_Params();
    params_.hostName = hostName;
    params_.enableMdns = enableMdns;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kP2PSocketManager_GetHostAddress_Name,
          codec.align(P2PSocketManager_GetHostAddress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(P2PSocketManager_GetHostAddress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(P2PSocketManager_GetHostAddress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  P2PSocketManagerPtr.prototype.createSocket = function() {
    return P2PSocketManagerProxy.prototype.createSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketManagerProxy.prototype.createSocket = function(type, localAddress, portRange, remoteAddress, client, socket) {
    var params_ = new P2PSocketManager_CreateSocket_Params();
    params_.type = type;
    params_.localAddress = localAddress;
    params_.portRange = portRange;
    params_.remoteAddress = remoteAddress;
    params_.client = client;
    params_.socket = socket;
    var builder = new codec.MessageV0Builder(
        kP2PSocketManager_CreateSocket_Name,
        codec.align(P2PSocketManager_CreateSocket_Params.encodedSize));
    builder.encodeStruct(P2PSocketManager_CreateSocket_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function P2PSocketManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  P2PSocketManagerStub.prototype.startNetworkNotifications = function(client) {
    return this.delegate_ && this.delegate_.startNetworkNotifications && this.delegate_.startNetworkNotifications(client);
  }
  P2PSocketManagerStub.prototype.getHostAddress = function(hostName, enableMdns) {
    return this.delegate_ && this.delegate_.getHostAddress && this.delegate_.getHostAddress(hostName, enableMdns);
  }
  P2PSocketManagerStub.prototype.createSocket = function(type, localAddress, portRange, remoteAddress, client, socket) {
    return this.delegate_ && this.delegate_.createSocket && this.delegate_.createSocket(type, localAddress, portRange, remoteAddress, client, socket);
  }

  P2PSocketManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PSocketManager_StartNetworkNotifications_Name:
      var params = reader.decodeStruct(P2PSocketManager_StartNetworkNotifications_Params);
      this.startNetworkNotifications(params.client);
      return true;
    case kP2PSocketManager_CreateSocket_Name:
      var params = reader.decodeStruct(P2PSocketManager_CreateSocket_Params);
      this.createSocket(params.type, params.localAddress, params.portRange, params.remoteAddress, params.client, params.socket);
      return true;
    default:
      return false;
    }
  };

  P2PSocketManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PSocketManager_GetHostAddress_Name:
      var params = reader.decodeStruct(P2PSocketManager_GetHostAddress_Params);
      this.getHostAddress(params.hostName, params.enableMdns).then(function(response) {
        var responseParams =
            new P2PSocketManager_GetHostAddress_ResponseParams();
        responseParams.addresses = response.addresses;
        var builder = new codec.MessageV1Builder(
            kP2PSocketManager_GetHostAddress_Name,
            codec.align(P2PSocketManager_GetHostAddress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(P2PSocketManager_GetHostAddress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateP2PSocketManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kP2PSocketManager_StartNetworkNotifications_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocketManager_StartNetworkNotifications_Params;
      break;
      case kP2PSocketManager_GetHostAddress_Name:
        if (message.expectsResponse())
          paramsClass = P2PSocketManager_GetHostAddress_Params;
      break;
      case kP2PSocketManager_CreateSocket_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocketManager_CreateSocket_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateP2PSocketManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kP2PSocketManager_GetHostAddress_Name:
        if (message.isResponse())
          paramsClass = P2PSocketManager_GetHostAddress_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var P2PSocketManager = {
    name: 'network.mojom.P2PSocketManager',
    kVersion: 0,
    ptrClass: P2PSocketManagerPtr,
    proxyClass: P2PSocketManagerProxy,
    stubClass: P2PSocketManagerStub,
    validateRequest: validateP2PSocketManagerRequest,
    validateResponse: validateP2PSocketManagerResponse,
  };
  P2PSocketManagerStub.prototype.validator = validateP2PSocketManagerRequest;
  P2PSocketManagerProxy.prototype.validator = validateP2PSocketManagerResponse;
  var kP2PSocket_Send_Name = 0;
  var kP2PSocket_SetOption_Name = 1;

  function P2PSocketPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(P2PSocket,
                                                   handleOrPtrInfo);
  }

  function P2PSocketAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        P2PSocket, associatedInterfacePtrInfo);
  }

  P2PSocketAssociatedPtr.prototype =
      Object.create(P2PSocketPtr.prototype);
  P2PSocketAssociatedPtr.prototype.constructor =
      P2PSocketAssociatedPtr;

  function P2PSocketProxy(receiver) {
    this.receiver_ = receiver;
  }
  P2PSocketPtr.prototype.send = function() {
    return P2PSocketProxy.prototype.send
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketProxy.prototype.send = function(data, packetInfo, trafficAnnotation) {
    var params_ = new P2PSocket_Send_Params();
    params_.data = data;
    params_.packetInfo = packetInfo;
    params_.trafficAnnotation = trafficAnnotation;
    var builder = new codec.MessageV0Builder(
        kP2PSocket_Send_Name,
        codec.align(P2PSocket_Send_Params.encodedSize));
    builder.encodeStruct(P2PSocket_Send_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PSocketPtr.prototype.setOption = function() {
    return P2PSocketProxy.prototype.setOption
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketProxy.prototype.setOption = function(option, value) {
    var params_ = new P2PSocket_SetOption_Params();
    params_.option = option;
    params_.value = value;
    var builder = new codec.MessageV0Builder(
        kP2PSocket_SetOption_Name,
        codec.align(P2PSocket_SetOption_Params.encodedSize));
    builder.encodeStruct(P2PSocket_SetOption_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function P2PSocketStub(delegate) {
    this.delegate_ = delegate;
  }
  P2PSocketStub.prototype.send = function(data, packetInfo, trafficAnnotation) {
    return this.delegate_ && this.delegate_.send && this.delegate_.send(data, packetInfo, trafficAnnotation);
  }
  P2PSocketStub.prototype.setOption = function(option, value) {
    return this.delegate_ && this.delegate_.setOption && this.delegate_.setOption(option, value);
  }

  P2PSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PSocket_Send_Name:
      var params = reader.decodeStruct(P2PSocket_Send_Params);
      this.send(params.data, params.packetInfo, params.trafficAnnotation);
      return true;
    case kP2PSocket_SetOption_Name:
      var params = reader.decodeStruct(P2PSocket_SetOption_Params);
      this.setOption(params.option, params.value);
      return true;
    default:
      return false;
    }
  };

  P2PSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateP2PSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kP2PSocket_Send_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocket_Send_Params;
      break;
      case kP2PSocket_SetOption_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocket_SetOption_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateP2PSocketResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var P2PSocket = {
    name: 'network.mojom.P2PSocket',
    kVersion: 0,
    ptrClass: P2PSocketPtr,
    proxyClass: P2PSocketProxy,
    stubClass: P2PSocketStub,
    validateRequest: validateP2PSocketRequest,
    validateResponse: null,
  };
  P2PSocketStub.prototype.validator = validateP2PSocketRequest;
  P2PSocketProxy.prototype.validator = null;
  var kP2PSocketClient_SocketCreated_Name = 0;
  var kP2PSocketClient_SendComplete_Name = 1;
  var kP2PSocketClient_IncomingTcpConnection_Name = 2;
  var kP2PSocketClient_DataReceived_Name = 3;

  function P2PSocketClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(P2PSocketClient,
                                                   handleOrPtrInfo);
  }

  function P2PSocketClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        P2PSocketClient, associatedInterfacePtrInfo);
  }

  P2PSocketClientAssociatedPtr.prototype =
      Object.create(P2PSocketClientPtr.prototype);
  P2PSocketClientAssociatedPtr.prototype.constructor =
      P2PSocketClientAssociatedPtr;

  function P2PSocketClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  P2PSocketClientPtr.prototype.socketCreated = function() {
    return P2PSocketClientProxy.prototype.socketCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketClientProxy.prototype.socketCreated = function(localAddress, remoteAddress) {
    var params_ = new P2PSocketClient_SocketCreated_Params();
    params_.localAddress = localAddress;
    params_.remoteAddress = remoteAddress;
    var builder = new codec.MessageV0Builder(
        kP2PSocketClient_SocketCreated_Name,
        codec.align(P2PSocketClient_SocketCreated_Params.encodedSize));
    builder.encodeStruct(P2PSocketClient_SocketCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PSocketClientPtr.prototype.sendComplete = function() {
    return P2PSocketClientProxy.prototype.sendComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketClientProxy.prototype.sendComplete = function(sendMetrics) {
    var params_ = new P2PSocketClient_SendComplete_Params();
    params_.sendMetrics = sendMetrics;
    var builder = new codec.MessageV0Builder(
        kP2PSocketClient_SendComplete_Name,
        codec.align(P2PSocketClient_SendComplete_Params.encodedSize));
    builder.encodeStruct(P2PSocketClient_SendComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PSocketClientPtr.prototype.incomingTcpConnection = function() {
    return P2PSocketClientProxy.prototype.incomingTcpConnection
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketClientProxy.prototype.incomingTcpConnection = function(socketAddress, socket, client) {
    var params_ = new P2PSocketClient_IncomingTcpConnection_Params();
    params_.socketAddress = socketAddress;
    params_.socket = socket;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kP2PSocketClient_IncomingTcpConnection_Name,
        codec.align(P2PSocketClient_IncomingTcpConnection_Params.encodedSize));
    builder.encodeStruct(P2PSocketClient_IncomingTcpConnection_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PSocketClientPtr.prototype.dataReceived = function() {
    return P2PSocketClientProxy.prototype.dataReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PSocketClientProxy.prototype.dataReceived = function(socketAddress, data, timestamp) {
    var params_ = new P2PSocketClient_DataReceived_Params();
    params_.socketAddress = socketAddress;
    params_.data = data;
    params_.timestamp = timestamp;
    var builder = new codec.MessageV0Builder(
        kP2PSocketClient_DataReceived_Name,
        codec.align(P2PSocketClient_DataReceived_Params.encodedSize));
    builder.encodeStruct(P2PSocketClient_DataReceived_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function P2PSocketClientStub(delegate) {
    this.delegate_ = delegate;
  }
  P2PSocketClientStub.prototype.socketCreated = function(localAddress, remoteAddress) {
    return this.delegate_ && this.delegate_.socketCreated && this.delegate_.socketCreated(localAddress, remoteAddress);
  }
  P2PSocketClientStub.prototype.sendComplete = function(sendMetrics) {
    return this.delegate_ && this.delegate_.sendComplete && this.delegate_.sendComplete(sendMetrics);
  }
  P2PSocketClientStub.prototype.incomingTcpConnection = function(socketAddress, socket, client) {
    return this.delegate_ && this.delegate_.incomingTcpConnection && this.delegate_.incomingTcpConnection(socketAddress, socket, client);
  }
  P2PSocketClientStub.prototype.dataReceived = function(socketAddress, data, timestamp) {
    return this.delegate_ && this.delegate_.dataReceived && this.delegate_.dataReceived(socketAddress, data, timestamp);
  }

  P2PSocketClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PSocketClient_SocketCreated_Name:
      var params = reader.decodeStruct(P2PSocketClient_SocketCreated_Params);
      this.socketCreated(params.localAddress, params.remoteAddress);
      return true;
    case kP2PSocketClient_SendComplete_Name:
      var params = reader.decodeStruct(P2PSocketClient_SendComplete_Params);
      this.sendComplete(params.sendMetrics);
      return true;
    case kP2PSocketClient_IncomingTcpConnection_Name:
      var params = reader.decodeStruct(P2PSocketClient_IncomingTcpConnection_Params);
      this.incomingTcpConnection(params.socketAddress, params.socket, params.client);
      return true;
    case kP2PSocketClient_DataReceived_Name:
      var params = reader.decodeStruct(P2PSocketClient_DataReceived_Params);
      this.dataReceived(params.socketAddress, params.data, params.timestamp);
      return true;
    default:
      return false;
    }
  };

  P2PSocketClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateP2PSocketClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kP2PSocketClient_SocketCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocketClient_SocketCreated_Params;
      break;
      case kP2PSocketClient_SendComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocketClient_SendComplete_Params;
      break;
      case kP2PSocketClient_IncomingTcpConnection_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocketClient_IncomingTcpConnection_Params;
      break;
      case kP2PSocketClient_DataReceived_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PSocketClient_DataReceived_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateP2PSocketClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var P2PSocketClient = {
    name: 'network.mojom.P2PSocketClient',
    kVersion: 0,
    ptrClass: P2PSocketClientPtr,
    proxyClass: P2PSocketClientProxy,
    stubClass: P2PSocketClientStub,
    validateRequest: validateP2PSocketClientRequest,
    validateResponse: null,
  };
  P2PSocketClientStub.prototype.validator = validateP2PSocketClientRequest;
  P2PSocketClientProxy.prototype.validator = null;
  exports.P2PSocketType = P2PSocketType;
  exports.P2PSocketOption = P2PSocketOption;
  exports.P2PHostAndIPEndPoint = P2PHostAndIPEndPoint;
  exports.P2PPacketInfo = P2PPacketInfo;
  exports.P2PPortRange = P2PPortRange;
  exports.P2PSendPacketMetrics = P2PSendPacketMetrics;
  exports.P2PNetworkNotificationClient = P2PNetworkNotificationClient;
  exports.P2PNetworkNotificationClientPtr = P2PNetworkNotificationClientPtr;
  exports.P2PNetworkNotificationClientAssociatedPtr = P2PNetworkNotificationClientAssociatedPtr;
  exports.P2PSocketManager = P2PSocketManager;
  exports.P2PSocketManagerPtr = P2PSocketManagerPtr;
  exports.P2PSocketManagerAssociatedPtr = P2PSocketManagerAssociatedPtr;
  exports.P2PSocket = P2PSocket;
  exports.P2PSocketPtr = P2PSocketPtr;
  exports.P2PSocketAssociatedPtr = P2PSocketAssociatedPtr;
  exports.P2PSocketClient = P2PSocketClient;
  exports.P2PSocketClientPtr = P2PSocketClientPtr;
  exports.P2PSocketClientAssociatedPtr = P2PSocketClientAssociatedPtr;
})();