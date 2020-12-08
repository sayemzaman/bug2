// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/host_resolver.mojom';
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
  var address_list$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/address_list.mojom', 'address_list.mojom.js');
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
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', 'url_loader.mojom.js');
  }


  var OptionalSecureDnsMode = {};
  OptionalSecureDnsMode.NO_OVERRIDE = 0;
  OptionalSecureDnsMode.OFF = OptionalSecureDnsMode.NO_OVERRIDE + 1;
  OptionalSecureDnsMode.AUTOMATIC = OptionalSecureDnsMode.OFF + 1;
  OptionalSecureDnsMode.SECURE = OptionalSecureDnsMode.AUTOMATIC + 1;
  OptionalSecureDnsMode.MIN_VALUE = 0,
  OptionalSecureDnsMode.MAX_VALUE = 3,

  OptionalSecureDnsMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  OptionalSecureDnsMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var DnsQueryType = {};
  DnsQueryType.UNSPECIFIED = 0;
  DnsQueryType.A = DnsQueryType.UNSPECIFIED + 1;
  DnsQueryType.AAAA = DnsQueryType.A + 1;
  DnsQueryType.TXT = DnsQueryType.AAAA + 1;
  DnsQueryType.PTR = DnsQueryType.TXT + 1;
  DnsQueryType.SRV = DnsQueryType.PTR + 1;
  DnsQueryType.MIN_VALUE = 0,
  DnsQueryType.MAX_VALUE = 5,

  DnsQueryType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  DnsQueryType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DnsHost(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DnsHost.prototype.initDefaults_ = function() {
    this.hostname = null;
    this.address = null;
  };
  DnsHost.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DnsHost.validate = function(messageValidator, offset) {
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


    // validate DnsHost.hostname
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsHost.address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DnsHost.encodedSize = codec.kStructHeaderSize + 16;

  DnsHost.decode = function(decoder) {
    var packed;
    var val = new DnsHost();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostname = decoder.decodeStruct(codec.String);
    val.address = decoder.decodeStructPointer(ip_address$.IPAddress);
    return val;
  };

  DnsHost.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DnsHost.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.hostname);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.address);
  };
  function DnsOverHttpsServer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DnsOverHttpsServer.prototype.initDefaults_ = function() {
    this.serverTemplate = null;
    this.usePost = false;
  };
  DnsOverHttpsServer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DnsOverHttpsServer.validate = function(messageValidator, offset) {
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


    // validate DnsOverHttpsServer.serverTemplate
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DnsOverHttpsServer.encodedSize = codec.kStructHeaderSize + 16;

  DnsOverHttpsServer.decode = function(decoder) {
    var packed;
    var val = new DnsOverHttpsServer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serverTemplate = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.usePost = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DnsOverHttpsServer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DnsOverHttpsServer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.serverTemplate);
    packed = 0;
    packed |= (val.usePost & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DnsConfigOverrides(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  DnsConfigOverrides.Tristate = {};
  DnsConfigOverrides.Tristate.NO_OVERRIDE = 0;
  DnsConfigOverrides.Tristate.TRISTATE_TRUE = DnsConfigOverrides.Tristate.NO_OVERRIDE + 1;
  DnsConfigOverrides.Tristate.TRISTATE_FALSE = DnsConfigOverrides.Tristate.TRISTATE_TRUE + 1;
  DnsConfigOverrides.Tristate.MIN_VALUE = 0,
  DnsConfigOverrides.Tristate.MAX_VALUE = 2,

  DnsConfigOverrides.Tristate.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  DnsConfigOverrides.Tristate.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  DnsConfigOverrides.prototype.initDefaults_ = function() {
    this.nameservers = null;
    this.search = null;
    this.hosts = null;
    this.appendToMultiLabelName = DnsConfigOverrides.Tristate.NO_OVERRIDE;
    this.randomizePorts = DnsConfigOverrides.Tristate.NO_OVERRIDE;
    this.ndots = -1;
    this.attempts = -1;
    this.timeout = null;
    this.rotate = DnsConfigOverrides.Tristate.NO_OVERRIDE;
    this.useLocalIpv6 = DnsConfigOverrides.Tristate.NO_OVERRIDE;
    this.dnsOverHttpsServers = null;
    this.secureDnsMode = OptionalSecureDnsMode.NO_OVERRIDE;
  };
  DnsConfigOverrides.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DnsConfigOverrides.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.nameservers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ip_endpoint$.IPEndPoint), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.search
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.hosts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(DnsHost), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.appendToMultiLabelName
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, DnsConfigOverrides.Tristate);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.randomizePorts
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, DnsConfigOverrides.Tristate);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DnsConfigOverrides.timeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DnsConfigOverrides.rotate
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 48, DnsConfigOverrides.Tristate);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.useLocalIpv6
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 52, DnsConfigOverrides.Tristate);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.dnsOverHttpsServers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 8, new codec.PointerTo(DnsOverHttpsServer), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DnsConfigOverrides.secureDnsMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 64, OptionalSecureDnsMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DnsConfigOverrides.encodedSize = codec.kStructHeaderSize + 72;

  DnsConfigOverrides.decode = function(decoder) {
    var packed;
    var val = new DnsConfigOverrides();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nameservers = decoder.decodeArrayPointer(new codec.PointerTo(ip_endpoint$.IPEndPoint));
    val.search = decoder.decodeArrayPointer(codec.String);
    val.hosts = decoder.decodeArrayPointer(new codec.PointerTo(DnsHost));
    val.appendToMultiLabelName = decoder.decodeStruct(codec.Int32);
    val.randomizePorts = decoder.decodeStruct(codec.Int32);
    val.ndots = decoder.decodeStruct(codec.Int8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.attempts = decoder.decodeStruct(codec.Int32);
    val.timeout = decoder.decodeStructPointer(time$.TimeDelta);
    val.rotate = decoder.decodeStruct(codec.Int32);
    val.useLocalIpv6 = decoder.decodeStruct(codec.Int32);
    val.dnsOverHttpsServers = decoder.decodeArrayPointer(new codec.PointerTo(DnsOverHttpsServer));
    val.secureDnsMode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DnsConfigOverrides.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DnsConfigOverrides.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ip_endpoint$.IPEndPoint), val.nameservers);
    encoder.encodeArrayPointer(codec.String, val.search);
    encoder.encodeArrayPointer(new codec.PointerTo(DnsHost), val.hosts);
    encoder.encodeStruct(codec.Int32, val.appendToMultiLabelName);
    encoder.encodeStruct(codec.Int32, val.randomizePorts);
    encoder.encodeStruct(codec.Int8, val.ndots);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.attempts);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeout);
    encoder.encodeStruct(codec.Int32, val.rotate);
    encoder.encodeStruct(codec.Int32, val.useLocalIpv6);
    encoder.encodeArrayPointer(new codec.PointerTo(DnsOverHttpsServer), val.dnsOverHttpsServers);
    encoder.encodeStruct(codec.Int32, val.secureDnsMode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ResolveHostParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  ResolveHostParameters.Source = {};
  ResolveHostParameters.Source.ANY = 0;
  ResolveHostParameters.Source.SYSTEM = ResolveHostParameters.Source.ANY + 1;
  ResolveHostParameters.Source.DNS = ResolveHostParameters.Source.SYSTEM + 1;
  ResolveHostParameters.Source.MULTICAST_DNS = ResolveHostParameters.Source.DNS + 1;
  ResolveHostParameters.Source.LOCAL_ONLY = ResolveHostParameters.Source.MULTICAST_DNS + 1;
  ResolveHostParameters.Source.MIN_VALUE = 0,
  ResolveHostParameters.Source.MAX_VALUE = 4,

  ResolveHostParameters.Source.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  ResolveHostParameters.Source.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  ResolveHostParameters.prototype.initDefaults_ = function() {
    this.dnsQueryType = DnsQueryType.UNSPECIFIED;
    this.initialPriority = url_loader$.RequestPriority.kLowest;
    this.source = ResolveHostParameters.Source.ANY;
    this.allowCachedResponse = true;
    this.includeCanonicalName = false;
    this.loopbackOnly = false;
    this.isSpeculative = false;
    this.controlHandle = new bindings.InterfaceRequest();
    this.secureDnsModeOverride = OptionalSecureDnsMode.NO_OVERRIDE;
  };
  ResolveHostParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResolveHostParameters.validate = function(messageValidator, offset) {
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


    // validate ResolveHostParameters.dnsQueryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DnsQueryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ResolveHostParameters.initialPriority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, url_loader$.RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ResolveHostParameters.source
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ResolveHostParameters.Source);
    if (err !== validator.validationError.NONE)
        return err;



    // validate ResolveHostParameters.controlHandle
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;





    // validate ResolveHostParameters.secureDnsModeOverride
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, OptionalSecureDnsMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResolveHostParameters.encodedSize = codec.kStructHeaderSize + 24;

  ResolveHostParameters.decode = function(decoder) {
    var packed;
    var val = new ResolveHostParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dnsQueryType = decoder.decodeStruct(codec.Int32);
    val.initialPriority = decoder.decodeStruct(codec.Int32);
    val.source = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.allowCachedResponse = (packed >> 0) & 1 ? true : false;
    val.includeCanonicalName = (packed >> 1) & 1 ? true : false;
    val.loopbackOnly = (packed >> 2) & 1 ? true : false;
    val.isSpeculative = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.controlHandle = decoder.decodeStruct(codec.NullableInterfaceRequest);
    val.secureDnsModeOverride = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ResolveHostParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResolveHostParameters.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.dnsQueryType);
    encoder.encodeStruct(codec.Int32, val.initialPriority);
    encoder.encodeStruct(codec.Int32, val.source);
    packed = 0;
    packed |= (val.allowCachedResponse & 1) << 0
    packed |= (val.includeCanonicalName & 1) << 1
    packed |= (val.loopbackOnly & 1) << 2
    packed |= (val.isSpeculative & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableInterfaceRequest, val.controlHandle);
    encoder.encodeStruct(codec.Int32, val.secureDnsModeOverride);
  };
  function ResolveHostHandle_Cancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResolveHostHandle_Cancel_Params.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  ResolveHostHandle_Cancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResolveHostHandle_Cancel_Params.validate = function(messageValidator, offset) {
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

  ResolveHostHandle_Cancel_Params.encodedSize = codec.kStructHeaderSize + 8;

  ResolveHostHandle_Cancel_Params.decode = function(decoder) {
    var packed;
    var val = new ResolveHostHandle_Cancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ResolveHostHandle_Cancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResolveHostHandle_Cancel_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ResolveHostClient_OnComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResolveHostClient_OnComplete_Params.prototype.initDefaults_ = function() {
    this.result = 0;
    this.resolvedAddresses = null;
  };
  ResolveHostClient_OnComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResolveHostClient_OnComplete_Params.validate = function(messageValidator, offset) {
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



    // validate ResolveHostClient_OnComplete_Params.resolvedAddresses
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, address_list$.AddressList, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResolveHostClient_OnComplete_Params.encodedSize = codec.kStructHeaderSize + 16;

  ResolveHostClient_OnComplete_Params.decode = function(decoder) {
    var packed;
    var val = new ResolveHostClient_OnComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.resolvedAddresses = decoder.decodeStructPointer(address_list$.AddressList);
    return val;
  };

  ResolveHostClient_OnComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResolveHostClient_OnComplete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(address_list$.AddressList, val.resolvedAddresses);
  };
  function ResolveHostClient_OnTextResults_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResolveHostClient_OnTextResults_Params.prototype.initDefaults_ = function() {
    this.textResults = null;
  };
  ResolveHostClient_OnTextResults_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResolveHostClient_OnTextResults_Params.validate = function(messageValidator, offset) {
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


    // validate ResolveHostClient_OnTextResults_Params.textResults
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResolveHostClient_OnTextResults_Params.encodedSize = codec.kStructHeaderSize + 8;

  ResolveHostClient_OnTextResults_Params.decode = function(decoder) {
    var packed;
    var val = new ResolveHostClient_OnTextResults_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.textResults = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ResolveHostClient_OnTextResults_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResolveHostClient_OnTextResults_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.textResults);
  };
  function ResolveHostClient_OnHostnameResults_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResolveHostClient_OnHostnameResults_Params.prototype.initDefaults_ = function() {
    this.hosts = null;
  };
  ResolveHostClient_OnHostnameResults_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResolveHostClient_OnHostnameResults_Params.validate = function(messageValidator, offset) {
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


    // validate ResolveHostClient_OnHostnameResults_Params.hosts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(network_param$.HostPortPair), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResolveHostClient_OnHostnameResults_Params.encodedSize = codec.kStructHeaderSize + 8;

  ResolveHostClient_OnHostnameResults_Params.decode = function(decoder) {
    var packed;
    var val = new ResolveHostClient_OnHostnameResults_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hosts = decoder.decodeArrayPointer(new codec.PointerTo(network_param$.HostPortPair));
    return val;
  };

  ResolveHostClient_OnHostnameResults_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResolveHostClient_OnHostnameResults_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(network_param$.HostPortPair), val.hosts);
  };
  function MdnsListenClient_OnAddressResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsListenClient_OnAddressResult_Params.prototype.initDefaults_ = function() {
    this.updateType = 0;
    this.queryType = 0;
    this.endpoint = null;
  };
  MdnsListenClient_OnAddressResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsListenClient_OnAddressResult_Params.validate = function(messageValidator, offset) {
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


    // validate MdnsListenClient_OnAddressResult_Params.updateType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MdnsListenClient.UpdateType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnAddressResult_Params.queryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, DnsQueryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnAddressResult_Params.endpoint
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MdnsListenClient_OnAddressResult_Params.encodedSize = codec.kStructHeaderSize + 16;

  MdnsListenClient_OnAddressResult_Params.decode = function(decoder) {
    var packed;
    var val = new MdnsListenClient_OnAddressResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.updateType = decoder.decodeStruct(codec.Int32);
    val.queryType = decoder.decodeStruct(codec.Int32);
    val.endpoint = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    return val;
  };

  MdnsListenClient_OnAddressResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsListenClient_OnAddressResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.updateType);
    encoder.encodeStruct(codec.Int32, val.queryType);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.endpoint);
  };
  function MdnsListenClient_OnTextResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsListenClient_OnTextResult_Params.prototype.initDefaults_ = function() {
    this.updateType = 0;
    this.queryType = 0;
    this.textRecords = null;
  };
  MdnsListenClient_OnTextResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsListenClient_OnTextResult_Params.validate = function(messageValidator, offset) {
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


    // validate MdnsListenClient_OnTextResult_Params.updateType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MdnsListenClient.UpdateType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnTextResult_Params.queryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, DnsQueryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnTextResult_Params.textRecords
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MdnsListenClient_OnTextResult_Params.encodedSize = codec.kStructHeaderSize + 16;

  MdnsListenClient_OnTextResult_Params.decode = function(decoder) {
    var packed;
    var val = new MdnsListenClient_OnTextResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.updateType = decoder.decodeStruct(codec.Int32);
    val.queryType = decoder.decodeStruct(codec.Int32);
    val.textRecords = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  MdnsListenClient_OnTextResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsListenClient_OnTextResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.updateType);
    encoder.encodeStruct(codec.Int32, val.queryType);
    encoder.encodeArrayPointer(codec.String, val.textRecords);
  };
  function MdnsListenClient_OnHostnameResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsListenClient_OnHostnameResult_Params.prototype.initDefaults_ = function() {
    this.updateType = 0;
    this.queryType = 0;
    this.host = null;
  };
  MdnsListenClient_OnHostnameResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsListenClient_OnHostnameResult_Params.validate = function(messageValidator, offset) {
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


    // validate MdnsListenClient_OnHostnameResult_Params.updateType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MdnsListenClient.UpdateType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnHostnameResult_Params.queryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, DnsQueryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnHostnameResult_Params.host
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, network_param$.HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MdnsListenClient_OnHostnameResult_Params.encodedSize = codec.kStructHeaderSize + 16;

  MdnsListenClient_OnHostnameResult_Params.decode = function(decoder) {
    var packed;
    var val = new MdnsListenClient_OnHostnameResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.updateType = decoder.decodeStruct(codec.Int32);
    val.queryType = decoder.decodeStruct(codec.Int32);
    val.host = decoder.decodeStructPointer(network_param$.HostPortPair);
    return val;
  };

  MdnsListenClient_OnHostnameResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsListenClient_OnHostnameResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.updateType);
    encoder.encodeStruct(codec.Int32, val.queryType);
    encoder.encodeStructPointer(network_param$.HostPortPair, val.host);
  };
  function MdnsListenClient_OnUnhandledResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsListenClient_OnUnhandledResult_Params.prototype.initDefaults_ = function() {
    this.updateType = 0;
    this.queryType = 0;
  };
  MdnsListenClient_OnUnhandledResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsListenClient_OnUnhandledResult_Params.validate = function(messageValidator, offset) {
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


    // validate MdnsListenClient_OnUnhandledResult_Params.updateType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MdnsListenClient.UpdateType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MdnsListenClient_OnUnhandledResult_Params.queryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, DnsQueryType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MdnsListenClient_OnUnhandledResult_Params.encodedSize = codec.kStructHeaderSize + 8;

  MdnsListenClient_OnUnhandledResult_Params.decode = function(decoder) {
    var packed;
    var val = new MdnsListenClient_OnUnhandledResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.updateType = decoder.decodeStruct(codec.Int32);
    val.queryType = decoder.decodeStruct(codec.Int32);
    return val;
  };

  MdnsListenClient_OnUnhandledResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsListenClient_OnUnhandledResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.updateType);
    encoder.encodeStruct(codec.Int32, val.queryType);
  };
  function HostResolver_ResolveHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HostResolver_ResolveHost_Params.prototype.initDefaults_ = function() {
    this.host = null;
    this.optionalParameters = null;
    this.responseClient = new ResolveHostClientPtr();
  };
  HostResolver_ResolveHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HostResolver_ResolveHost_Params.validate = function(messageValidator, offset) {
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


    // validate HostResolver_ResolveHost_Params.host
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HostResolver_ResolveHost_Params.optionalParameters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ResolveHostParameters, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HostResolver_ResolveHost_Params.responseClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HostResolver_ResolveHost_Params.encodedSize = codec.kStructHeaderSize + 24;

  HostResolver_ResolveHost_Params.decode = function(decoder) {
    var packed;
    var val = new HostResolver_ResolveHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStructPointer(network_param$.HostPortPair);
    val.optionalParameters = decoder.decodeStructPointer(ResolveHostParameters);
    val.responseClient = decoder.decodeStruct(new codec.Interface(ResolveHostClientPtr));
    return val;
  };

  HostResolver_ResolveHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HostResolver_ResolveHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.HostPortPair, val.host);
    encoder.encodeStructPointer(ResolveHostParameters, val.optionalParameters);
    encoder.encodeStruct(new codec.Interface(ResolveHostClientPtr), val.responseClient);
  };
  function HostResolver_MdnsListen_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HostResolver_MdnsListen_Params.prototype.initDefaults_ = function() {
    this.host = null;
    this.queryType = 0;
    this.responseClient = new MdnsListenClientPtr();
  };
  HostResolver_MdnsListen_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HostResolver_MdnsListen_Params.validate = function(messageValidator, offset) {
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


    // validate HostResolver_MdnsListen_Params.host
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HostResolver_MdnsListen_Params.queryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, DnsQueryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HostResolver_MdnsListen_Params.responseClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HostResolver_MdnsListen_Params.encodedSize = codec.kStructHeaderSize + 24;

  HostResolver_MdnsListen_Params.decode = function(decoder) {
    var packed;
    var val = new HostResolver_MdnsListen_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStructPointer(network_param$.HostPortPair);
    val.queryType = decoder.decodeStruct(codec.Int32);
    val.responseClient = decoder.decodeStruct(new codec.Interface(MdnsListenClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HostResolver_MdnsListen_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HostResolver_MdnsListen_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.HostPortPair, val.host);
    encoder.encodeStruct(codec.Int32, val.queryType);
    encoder.encodeStruct(new codec.Interface(MdnsListenClientPtr), val.responseClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function HostResolver_MdnsListen_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HostResolver_MdnsListen_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  HostResolver_MdnsListen_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HostResolver_MdnsListen_ResponseParams.validate = function(messageValidator, offset) {
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

  HostResolver_MdnsListen_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HostResolver_MdnsListen_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HostResolver_MdnsListen_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HostResolver_MdnsListen_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HostResolver_MdnsListen_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.prototype.initDefaults_ = function() {
  };
  DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.validate = function(messageValidator, offset) {
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

  DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.encodedSize = codec.kStructHeaderSize + 0;

  DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.decode = function(decoder) {
    var packed;
    var val = new DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function DnsConfigChangeManager_RequestNotifications_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DnsConfigChangeManager_RequestNotifications_Params.prototype.initDefaults_ = function() {
    this.clientPtr = new DnsConfigChangeManagerClientPtr();
  };
  DnsConfigChangeManager_RequestNotifications_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DnsConfigChangeManager_RequestNotifications_Params.validate = function(messageValidator, offset) {
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


    // validate DnsConfigChangeManager_RequestNotifications_Params.clientPtr
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DnsConfigChangeManager_RequestNotifications_Params.encodedSize = codec.kStructHeaderSize + 8;

  DnsConfigChangeManager_RequestNotifications_Params.decode = function(decoder) {
    var packed;
    var val = new DnsConfigChangeManager_RequestNotifications_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.clientPtr = decoder.decodeStruct(new codec.Interface(DnsConfigChangeManagerClientPtr));
    return val;
  };

  DnsConfigChangeManager_RequestNotifications_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DnsConfigChangeManager_RequestNotifications_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(DnsConfigChangeManagerClientPtr), val.clientPtr);
  };
  var kResolveHostHandle_Cancel_Name = 0;

  function ResolveHostHandlePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ResolveHostHandle,
                                                   handleOrPtrInfo);
  }

  function ResolveHostHandleAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ResolveHostHandle, associatedInterfacePtrInfo);
  }

  ResolveHostHandleAssociatedPtr.prototype =
      Object.create(ResolveHostHandlePtr.prototype);
  ResolveHostHandleAssociatedPtr.prototype.constructor =
      ResolveHostHandleAssociatedPtr;

  function ResolveHostHandleProxy(receiver) {
    this.receiver_ = receiver;
  }
  ResolveHostHandlePtr.prototype.cancel = function() {
    return ResolveHostHandleProxy.prototype.cancel
        .apply(this.ptr.getProxy(), arguments);
  };

  ResolveHostHandleProxy.prototype.cancel = function(result) {
    var params_ = new ResolveHostHandle_Cancel_Params();
    params_.result = result;
    var builder = new codec.MessageV0Builder(
        kResolveHostHandle_Cancel_Name,
        codec.align(ResolveHostHandle_Cancel_Params.encodedSize));
    builder.encodeStruct(ResolveHostHandle_Cancel_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ResolveHostHandleStub(delegate) {
    this.delegate_ = delegate;
  }
  ResolveHostHandleStub.prototype.cancel = function(result) {
    return this.delegate_ && this.delegate_.cancel && this.delegate_.cancel(result);
  }

  ResolveHostHandleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kResolveHostHandle_Cancel_Name:
      var params = reader.decodeStruct(ResolveHostHandle_Cancel_Params);
      this.cancel(params.result);
      return true;
    default:
      return false;
    }
  };

  ResolveHostHandleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateResolveHostHandleRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kResolveHostHandle_Cancel_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResolveHostHandle_Cancel_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateResolveHostHandleResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ResolveHostHandle = {
    name: 'network.mojom.ResolveHostHandle',
    kVersion: 0,
    ptrClass: ResolveHostHandlePtr,
    proxyClass: ResolveHostHandleProxy,
    stubClass: ResolveHostHandleStub,
    validateRequest: validateResolveHostHandleRequest,
    validateResponse: null,
  };
  ResolveHostHandleStub.prototype.validator = validateResolveHostHandleRequest;
  ResolveHostHandleProxy.prototype.validator = null;
  var kResolveHostClient_OnComplete_Name = 0;
  var kResolveHostClient_OnTextResults_Name = 1;
  var kResolveHostClient_OnHostnameResults_Name = 2;

  function ResolveHostClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ResolveHostClient,
                                                   handleOrPtrInfo);
  }

  function ResolveHostClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ResolveHostClient, associatedInterfacePtrInfo);
  }

  ResolveHostClientAssociatedPtr.prototype =
      Object.create(ResolveHostClientPtr.prototype);
  ResolveHostClientAssociatedPtr.prototype.constructor =
      ResolveHostClientAssociatedPtr;

  function ResolveHostClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ResolveHostClientPtr.prototype.onComplete = function() {
    return ResolveHostClientProxy.prototype.onComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  ResolveHostClientProxy.prototype.onComplete = function(result, resolvedAddresses) {
    var params_ = new ResolveHostClient_OnComplete_Params();
    params_.result = result;
    params_.resolvedAddresses = resolvedAddresses;
    var builder = new codec.MessageV0Builder(
        kResolveHostClient_OnComplete_Name,
        codec.align(ResolveHostClient_OnComplete_Params.encodedSize));
    builder.encodeStruct(ResolveHostClient_OnComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResolveHostClientPtr.prototype.onTextResults = function() {
    return ResolveHostClientProxy.prototype.onTextResults
        .apply(this.ptr.getProxy(), arguments);
  };

  ResolveHostClientProxy.prototype.onTextResults = function(textResults) {
    var params_ = new ResolveHostClient_OnTextResults_Params();
    params_.textResults = textResults;
    var builder = new codec.MessageV0Builder(
        kResolveHostClient_OnTextResults_Name,
        codec.align(ResolveHostClient_OnTextResults_Params.encodedSize));
    builder.encodeStruct(ResolveHostClient_OnTextResults_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResolveHostClientPtr.prototype.onHostnameResults = function() {
    return ResolveHostClientProxy.prototype.onHostnameResults
        .apply(this.ptr.getProxy(), arguments);
  };

  ResolveHostClientProxy.prototype.onHostnameResults = function(hosts) {
    var params_ = new ResolveHostClient_OnHostnameResults_Params();
    params_.hosts = hosts;
    var builder = new codec.MessageV0Builder(
        kResolveHostClient_OnHostnameResults_Name,
        codec.align(ResolveHostClient_OnHostnameResults_Params.encodedSize));
    builder.encodeStruct(ResolveHostClient_OnHostnameResults_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ResolveHostClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ResolveHostClientStub.prototype.onComplete = function(result, resolvedAddresses) {
    return this.delegate_ && this.delegate_.onComplete && this.delegate_.onComplete(result, resolvedAddresses);
  }
  ResolveHostClientStub.prototype.onTextResults = function(textResults) {
    return this.delegate_ && this.delegate_.onTextResults && this.delegate_.onTextResults(textResults);
  }
  ResolveHostClientStub.prototype.onHostnameResults = function(hosts) {
    return this.delegate_ && this.delegate_.onHostnameResults && this.delegate_.onHostnameResults(hosts);
  }

  ResolveHostClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kResolveHostClient_OnComplete_Name:
      var params = reader.decodeStruct(ResolveHostClient_OnComplete_Params);
      this.onComplete(params.result, params.resolvedAddresses);
      return true;
    case kResolveHostClient_OnTextResults_Name:
      var params = reader.decodeStruct(ResolveHostClient_OnTextResults_Params);
      this.onTextResults(params.textResults);
      return true;
    case kResolveHostClient_OnHostnameResults_Name:
      var params = reader.decodeStruct(ResolveHostClient_OnHostnameResults_Params);
      this.onHostnameResults(params.hosts);
      return true;
    default:
      return false;
    }
  };

  ResolveHostClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateResolveHostClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kResolveHostClient_OnComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResolveHostClient_OnComplete_Params;
      break;
      case kResolveHostClient_OnTextResults_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResolveHostClient_OnTextResults_Params;
      break;
      case kResolveHostClient_OnHostnameResults_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResolveHostClient_OnHostnameResults_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateResolveHostClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ResolveHostClient = {
    name: 'network.mojom.ResolveHostClient',
    kVersion: 0,
    ptrClass: ResolveHostClientPtr,
    proxyClass: ResolveHostClientProxy,
    stubClass: ResolveHostClientStub,
    validateRequest: validateResolveHostClientRequest,
    validateResponse: null,
  };
  ResolveHostClientStub.prototype.validator = validateResolveHostClientRequest;
  ResolveHostClientProxy.prototype.validator = null;
  var kMdnsListenClient_OnAddressResult_Name = 0;
  var kMdnsListenClient_OnTextResult_Name = 1;
  var kMdnsListenClient_OnHostnameResult_Name = 2;
  var kMdnsListenClient_OnUnhandledResult_Name = 3;

  function MdnsListenClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MdnsListenClient,
                                                   handleOrPtrInfo);
  }

  function MdnsListenClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MdnsListenClient, associatedInterfacePtrInfo);
  }

  MdnsListenClientAssociatedPtr.prototype =
      Object.create(MdnsListenClientPtr.prototype);
  MdnsListenClientAssociatedPtr.prototype.constructor =
      MdnsListenClientAssociatedPtr;

  function MdnsListenClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  MdnsListenClientPtr.prototype.onAddressResult = function() {
    return MdnsListenClientProxy.prototype.onAddressResult
        .apply(this.ptr.getProxy(), arguments);
  };

  MdnsListenClientProxy.prototype.onAddressResult = function(updateType, queryType, endpoint) {
    var params_ = new MdnsListenClient_OnAddressResult_Params();
    params_.updateType = updateType;
    params_.queryType = queryType;
    params_.endpoint = endpoint;
    var builder = new codec.MessageV0Builder(
        kMdnsListenClient_OnAddressResult_Name,
        codec.align(MdnsListenClient_OnAddressResult_Params.encodedSize));
    builder.encodeStruct(MdnsListenClient_OnAddressResult_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MdnsListenClientPtr.prototype.onTextResult = function() {
    return MdnsListenClientProxy.prototype.onTextResult
        .apply(this.ptr.getProxy(), arguments);
  };

  MdnsListenClientProxy.prototype.onTextResult = function(updateType, queryType, textRecords) {
    var params_ = new MdnsListenClient_OnTextResult_Params();
    params_.updateType = updateType;
    params_.queryType = queryType;
    params_.textRecords = textRecords;
    var builder = new codec.MessageV0Builder(
        kMdnsListenClient_OnTextResult_Name,
        codec.align(MdnsListenClient_OnTextResult_Params.encodedSize));
    builder.encodeStruct(MdnsListenClient_OnTextResult_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MdnsListenClientPtr.prototype.onHostnameResult = function() {
    return MdnsListenClientProxy.prototype.onHostnameResult
        .apply(this.ptr.getProxy(), arguments);
  };

  MdnsListenClientProxy.prototype.onHostnameResult = function(updateType, queryType, host) {
    var params_ = new MdnsListenClient_OnHostnameResult_Params();
    params_.updateType = updateType;
    params_.queryType = queryType;
    params_.host = host;
    var builder = new codec.MessageV0Builder(
        kMdnsListenClient_OnHostnameResult_Name,
        codec.align(MdnsListenClient_OnHostnameResult_Params.encodedSize));
    builder.encodeStruct(MdnsListenClient_OnHostnameResult_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MdnsListenClientPtr.prototype.onUnhandledResult = function() {
    return MdnsListenClientProxy.prototype.onUnhandledResult
        .apply(this.ptr.getProxy(), arguments);
  };

  MdnsListenClientProxy.prototype.onUnhandledResult = function(updateType, queryType) {
    var params_ = new MdnsListenClient_OnUnhandledResult_Params();
    params_.updateType = updateType;
    params_.queryType = queryType;
    var builder = new codec.MessageV0Builder(
        kMdnsListenClient_OnUnhandledResult_Name,
        codec.align(MdnsListenClient_OnUnhandledResult_Params.encodedSize));
    builder.encodeStruct(MdnsListenClient_OnUnhandledResult_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MdnsListenClientStub(delegate) {
    this.delegate_ = delegate;
  }
  MdnsListenClientStub.prototype.onAddressResult = function(updateType, queryType, endpoint) {
    return this.delegate_ && this.delegate_.onAddressResult && this.delegate_.onAddressResult(updateType, queryType, endpoint);
  }
  MdnsListenClientStub.prototype.onTextResult = function(updateType, queryType, textRecords) {
    return this.delegate_ && this.delegate_.onTextResult && this.delegate_.onTextResult(updateType, queryType, textRecords);
  }
  MdnsListenClientStub.prototype.onHostnameResult = function(updateType, queryType, host) {
    return this.delegate_ && this.delegate_.onHostnameResult && this.delegate_.onHostnameResult(updateType, queryType, host);
  }
  MdnsListenClientStub.prototype.onUnhandledResult = function(updateType, queryType) {
    return this.delegate_ && this.delegate_.onUnhandledResult && this.delegate_.onUnhandledResult(updateType, queryType);
  }

  MdnsListenClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMdnsListenClient_OnAddressResult_Name:
      var params = reader.decodeStruct(MdnsListenClient_OnAddressResult_Params);
      this.onAddressResult(params.updateType, params.queryType, params.endpoint);
      return true;
    case kMdnsListenClient_OnTextResult_Name:
      var params = reader.decodeStruct(MdnsListenClient_OnTextResult_Params);
      this.onTextResult(params.updateType, params.queryType, params.textRecords);
      return true;
    case kMdnsListenClient_OnHostnameResult_Name:
      var params = reader.decodeStruct(MdnsListenClient_OnHostnameResult_Params);
      this.onHostnameResult(params.updateType, params.queryType, params.host);
      return true;
    case kMdnsListenClient_OnUnhandledResult_Name:
      var params = reader.decodeStruct(MdnsListenClient_OnUnhandledResult_Params);
      this.onUnhandledResult(params.updateType, params.queryType);
      return true;
    default:
      return false;
    }
  };

  MdnsListenClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMdnsListenClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMdnsListenClient_OnAddressResult_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MdnsListenClient_OnAddressResult_Params;
      break;
      case kMdnsListenClient_OnTextResult_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MdnsListenClient_OnTextResult_Params;
      break;
      case kMdnsListenClient_OnHostnameResult_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MdnsListenClient_OnHostnameResult_Params;
      break;
      case kMdnsListenClient_OnUnhandledResult_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MdnsListenClient_OnUnhandledResult_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMdnsListenClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MdnsListenClient = {
    name: 'network.mojom.MdnsListenClient',
    kVersion: 0,
    ptrClass: MdnsListenClientPtr,
    proxyClass: MdnsListenClientProxy,
    stubClass: MdnsListenClientStub,
    validateRequest: validateMdnsListenClientRequest,
    validateResponse: null,
  };
  MdnsListenClient.UpdateType = {};
  MdnsListenClient.UpdateType.ADDED = 0;
  MdnsListenClient.UpdateType.CHANGED = MdnsListenClient.UpdateType.ADDED + 1;
  MdnsListenClient.UpdateType.REMOVED = MdnsListenClient.UpdateType.CHANGED + 1;
  MdnsListenClient.UpdateType.MIN_VALUE = 0,
  MdnsListenClient.UpdateType.MAX_VALUE = 2,

  MdnsListenClient.UpdateType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MdnsListenClient.UpdateType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  MdnsListenClientStub.prototype.validator = validateMdnsListenClientRequest;
  MdnsListenClientProxy.prototype.validator = null;
  var kHostResolver_ResolveHost_Name = 0;
  var kHostResolver_MdnsListen_Name = 1;

  function HostResolverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(HostResolver,
                                                   handleOrPtrInfo);
  }

  function HostResolverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        HostResolver, associatedInterfacePtrInfo);
  }

  HostResolverAssociatedPtr.prototype =
      Object.create(HostResolverPtr.prototype);
  HostResolverAssociatedPtr.prototype.constructor =
      HostResolverAssociatedPtr;

  function HostResolverProxy(receiver) {
    this.receiver_ = receiver;
  }
  HostResolverPtr.prototype.resolveHost = function() {
    return HostResolverProxy.prototype.resolveHost
        .apply(this.ptr.getProxy(), arguments);
  };

  HostResolverProxy.prototype.resolveHost = function(host, optionalParameters, responseClient) {
    var params_ = new HostResolver_ResolveHost_Params();
    params_.host = host;
    params_.optionalParameters = optionalParameters;
    params_.responseClient = responseClient;
    var builder = new codec.MessageV0Builder(
        kHostResolver_ResolveHost_Name,
        codec.align(HostResolver_ResolveHost_Params.encodedSize));
    builder.encodeStruct(HostResolver_ResolveHost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  HostResolverPtr.prototype.mdnsListen = function() {
    return HostResolverProxy.prototype.mdnsListen
        .apply(this.ptr.getProxy(), arguments);
  };

  HostResolverProxy.prototype.mdnsListen = function(host, queryType, responseClient) {
    var params_ = new HostResolver_MdnsListen_Params();
    params_.host = host;
    params_.queryType = queryType;
    params_.responseClient = responseClient;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kHostResolver_MdnsListen_Name,
          codec.align(HostResolver_MdnsListen_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HostResolver_MdnsListen_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HostResolver_MdnsListen_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HostResolverStub(delegate) {
    this.delegate_ = delegate;
  }
  HostResolverStub.prototype.resolveHost = function(host, optionalParameters, responseClient) {
    return this.delegate_ && this.delegate_.resolveHost && this.delegate_.resolveHost(host, optionalParameters, responseClient);
  }
  HostResolverStub.prototype.mdnsListen = function(host, queryType, responseClient) {
    return this.delegate_ && this.delegate_.mdnsListen && this.delegate_.mdnsListen(host, queryType, responseClient);
  }

  HostResolverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHostResolver_ResolveHost_Name:
      var params = reader.decodeStruct(HostResolver_ResolveHost_Params);
      this.resolveHost(params.host, params.optionalParameters, params.responseClient);
      return true;
    default:
      return false;
    }
  };

  HostResolverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHostResolver_MdnsListen_Name:
      var params = reader.decodeStruct(HostResolver_MdnsListen_Params);
      this.mdnsListen(params.host, params.queryType, params.responseClient).then(function(response) {
        var responseParams =
            new HostResolver_MdnsListen_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kHostResolver_MdnsListen_Name,
            codec.align(HostResolver_MdnsListen_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HostResolver_MdnsListen_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateHostResolverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHostResolver_ResolveHost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = HostResolver_ResolveHost_Params;
      break;
      case kHostResolver_MdnsListen_Name:
        if (message.expectsResponse())
          paramsClass = HostResolver_MdnsListen_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHostResolverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHostResolver_MdnsListen_Name:
        if (message.isResponse())
          paramsClass = HostResolver_MdnsListen_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HostResolver = {
    name: 'network.mojom.HostResolver',
    kVersion: 0,
    ptrClass: HostResolverPtr,
    proxyClass: HostResolverProxy,
    stubClass: HostResolverStub,
    validateRequest: validateHostResolverRequest,
    validateResponse: validateHostResolverResponse,
  };
  HostResolverStub.prototype.validator = validateHostResolverRequest;
  HostResolverProxy.prototype.validator = validateHostResolverResponse;
  var kDnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Name = 0;

  function DnsConfigChangeManagerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DnsConfigChangeManagerClient,
                                                   handleOrPtrInfo);
  }

  function DnsConfigChangeManagerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DnsConfigChangeManagerClient, associatedInterfacePtrInfo);
  }

  DnsConfigChangeManagerClientAssociatedPtr.prototype =
      Object.create(DnsConfigChangeManagerClientPtr.prototype);
  DnsConfigChangeManagerClientAssociatedPtr.prototype.constructor =
      DnsConfigChangeManagerClientAssociatedPtr;

  function DnsConfigChangeManagerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DnsConfigChangeManagerClientPtr.prototype.onSystemDnsConfigChanged = function() {
    return DnsConfigChangeManagerClientProxy.prototype.onSystemDnsConfigChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  DnsConfigChangeManagerClientProxy.prototype.onSystemDnsConfigChanged = function() {
    var params_ = new DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params();
    var builder = new codec.MessageV0Builder(
        kDnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Name,
        codec.align(DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params.encodedSize));
    builder.encodeStruct(DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DnsConfigChangeManagerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DnsConfigChangeManagerClientStub.prototype.onSystemDnsConfigChanged = function() {
    return this.delegate_ && this.delegate_.onSystemDnsConfigChanged && this.delegate_.onSystemDnsConfigChanged();
  }

  DnsConfigChangeManagerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Name:
      var params = reader.decodeStruct(DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params);
      this.onSystemDnsConfigChanged();
      return true;
    default:
      return false;
    }
  };

  DnsConfigChangeManagerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDnsConfigChangeManagerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DnsConfigChangeManagerClient_OnSystemDnsConfigChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDnsConfigChangeManagerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DnsConfigChangeManagerClient = {
    name: 'network.mojom.DnsConfigChangeManagerClient',
    kVersion: 0,
    ptrClass: DnsConfigChangeManagerClientPtr,
    proxyClass: DnsConfigChangeManagerClientProxy,
    stubClass: DnsConfigChangeManagerClientStub,
    validateRequest: validateDnsConfigChangeManagerClientRequest,
    validateResponse: null,
  };
  DnsConfigChangeManagerClientStub.prototype.validator = validateDnsConfigChangeManagerClientRequest;
  DnsConfigChangeManagerClientProxy.prototype.validator = null;
  var kDnsConfigChangeManager_RequestNotifications_Name = 0;

  function DnsConfigChangeManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DnsConfigChangeManager,
                                                   handleOrPtrInfo);
  }

  function DnsConfigChangeManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DnsConfigChangeManager, associatedInterfacePtrInfo);
  }

  DnsConfigChangeManagerAssociatedPtr.prototype =
      Object.create(DnsConfigChangeManagerPtr.prototype);
  DnsConfigChangeManagerAssociatedPtr.prototype.constructor =
      DnsConfigChangeManagerAssociatedPtr;

  function DnsConfigChangeManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  DnsConfigChangeManagerPtr.prototype.requestNotifications = function() {
    return DnsConfigChangeManagerProxy.prototype.requestNotifications
        .apply(this.ptr.getProxy(), arguments);
  };

  DnsConfigChangeManagerProxy.prototype.requestNotifications = function(clientPtr) {
    var params_ = new DnsConfigChangeManager_RequestNotifications_Params();
    params_.clientPtr = clientPtr;
    var builder = new codec.MessageV0Builder(
        kDnsConfigChangeManager_RequestNotifications_Name,
        codec.align(DnsConfigChangeManager_RequestNotifications_Params.encodedSize));
    builder.encodeStruct(DnsConfigChangeManager_RequestNotifications_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DnsConfigChangeManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  DnsConfigChangeManagerStub.prototype.requestNotifications = function(clientPtr) {
    return this.delegate_ && this.delegate_.requestNotifications && this.delegate_.requestNotifications(clientPtr);
  }

  DnsConfigChangeManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDnsConfigChangeManager_RequestNotifications_Name:
      var params = reader.decodeStruct(DnsConfigChangeManager_RequestNotifications_Params);
      this.requestNotifications(params.clientPtr);
      return true;
    default:
      return false;
    }
  };

  DnsConfigChangeManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDnsConfigChangeManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDnsConfigChangeManager_RequestNotifications_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DnsConfigChangeManager_RequestNotifications_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDnsConfigChangeManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DnsConfigChangeManager = {
    name: 'network.mojom.DnsConfigChangeManager',
    kVersion: 0,
    ptrClass: DnsConfigChangeManagerPtr,
    proxyClass: DnsConfigChangeManagerProxy,
    stubClass: DnsConfigChangeManagerStub,
    validateRequest: validateDnsConfigChangeManagerRequest,
    validateResponse: null,
  };
  DnsConfigChangeManagerStub.prototype.validator = validateDnsConfigChangeManagerRequest;
  DnsConfigChangeManagerProxy.prototype.validator = null;
  exports.OptionalSecureDnsMode = OptionalSecureDnsMode;
  exports.DnsQueryType = DnsQueryType;
  exports.DnsHost = DnsHost;
  exports.DnsOverHttpsServer = DnsOverHttpsServer;
  exports.DnsConfigOverrides = DnsConfigOverrides;
  exports.ResolveHostParameters = ResolveHostParameters;
  exports.ResolveHostHandle = ResolveHostHandle;
  exports.ResolveHostHandlePtr = ResolveHostHandlePtr;
  exports.ResolveHostHandleAssociatedPtr = ResolveHostHandleAssociatedPtr;
  exports.ResolveHostClient = ResolveHostClient;
  exports.ResolveHostClientPtr = ResolveHostClientPtr;
  exports.ResolveHostClientAssociatedPtr = ResolveHostClientAssociatedPtr;
  exports.MdnsListenClient = MdnsListenClient;
  exports.MdnsListenClientPtr = MdnsListenClientPtr;
  exports.MdnsListenClientAssociatedPtr = MdnsListenClientAssociatedPtr;
  exports.HostResolver = HostResolver;
  exports.HostResolverPtr = HostResolverPtr;
  exports.HostResolverAssociatedPtr = HostResolverAssociatedPtr;
  exports.DnsConfigChangeManagerClient = DnsConfigChangeManagerClient;
  exports.DnsConfigChangeManagerClientPtr = DnsConfigChangeManagerClientPtr;
  exports.DnsConfigChangeManagerClientAssociatedPtr = DnsConfigChangeManagerClientAssociatedPtr;
  exports.DnsConfigChangeManager = DnsConfigChangeManager;
  exports.DnsConfigChangeManagerPtr = DnsConfigChangeManagerPtr;
  exports.DnsConfigChangeManagerAssociatedPtr = DnsConfigChangeManagerAssociatedPtr;
})();