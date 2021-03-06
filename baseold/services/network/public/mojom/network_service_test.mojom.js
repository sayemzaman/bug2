// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_service_test.mojom';
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
  var memory_pressure_level$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/memory_pressure_level.mojom', '../../../../mojo/public/mojom/base/memory_pressure_level.mojom.js');
  }
  var network_change_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_change_manager.mojom', 'network_change_manager.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var network_types$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_types.mojom', 'network_types.mojom.js');
  }


  var ResolverType = {};
  ResolverType.kResolverTypeFail = 0;
  ResolverType.kResolverTypeSystem = ResolverType.kResolverTypeFail + 1;
  ResolverType.kResolverTypeIPLiteral = ResolverType.kResolverTypeSystem + 1;
  ResolverType.kResolverTypeDirectLookup = ResolverType.kResolverTypeIPLiteral + 1;
  ResolverType.MIN_VALUE = 0,
  ResolverType.MAX_VALUE = 3,

  ResolverType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ResolverType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Rule(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Rule.prototype.initDefaults_ = function() {
    this.resolverType = 0;
    this.hostPattern = null;
    this.replacement = null;
  };
  Rule.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Rule.validate = function(messageValidator, offset) {
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


    // validate Rule.resolverType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ResolverType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Rule.hostPattern
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Rule.replacement
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Rule.encodedSize = codec.kStructHeaderSize + 24;

  Rule.decode = function(decoder) {
    var packed;
    var val = new Rule();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resolverType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.hostPattern = decoder.decodeStruct(codec.String);
    val.replacement = decoder.decodeStruct(codec.String);
    return val;
  };

  Rule.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Rule.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.resolverType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.hostPattern);
    encoder.encodeStruct(codec.String, val.replacement);
  };
  function NetworkServiceTest_AddRules_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_AddRules_Params.prototype.initDefaults_ = function() {
    this.rules = null;
  };
  NetworkServiceTest_AddRules_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_AddRules_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_AddRules_Params.rules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Rule), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_AddRules_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_AddRules_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_AddRules_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rules = decoder.decodeArrayPointer(new codec.PointerTo(Rule));
    return val;
  };

  NetworkServiceTest_AddRules_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_AddRules_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Rule), val.rules);
  };
  function NetworkServiceTest_AddRules_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_AddRules_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_AddRules_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_AddRules_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_AddRules_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_AddRules_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_AddRules_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_AddRules_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_AddRules_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_SimulateNetworkChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SimulateNetworkChange_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  NetworkServiceTest_SimulateNetworkChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SimulateNetworkChange_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_SimulateNetworkChange_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, network_change_manager$.ConnectionType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_SimulateNetworkChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_SimulateNetworkChange_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SimulateNetworkChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_SimulateNetworkChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SimulateNetworkChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_SimulateNetworkChange_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SimulateNetworkChange_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_SimulateNetworkChange_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SimulateNetworkChange_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_SimulateNetworkChange_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_SimulateNetworkChange_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SimulateNetworkChange_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_SimulateNetworkChange_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SimulateNetworkChange_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_SimulateNetworkQualityChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SimulateNetworkQualityChange_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  NetworkServiceTest_SimulateNetworkQualityChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SimulateNetworkQualityChange_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_SimulateNetworkQualityChange_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, network_types$.EffectiveConnectionType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_SimulateNetworkQualityChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_SimulateNetworkQualityChange_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SimulateNetworkQualityChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_SimulateNetworkQualityChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SimulateNetworkQualityChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_SimulateCrash_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SimulateCrash_Params.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_SimulateCrash_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SimulateCrash_Params.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_SimulateCrash_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_SimulateCrash_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SimulateCrash_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_SimulateCrash_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SimulateCrash_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_MockCertVerifierSetDefaultResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.prototype.initDefaults_ = function() {
    this.defaultResult = 0;
  };
  NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_MockCertVerifierSetDefaultResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.defaultResult = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.defaultResult);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.prototype.initDefaults_ = function() {
    this.cert = null;
    this.hostPattern = null;
    this.verifyResult = null;
    this.rv = 0;
  };
  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.cert
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.X509Certificate, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.hostPattern
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.verifyResult
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, network_param$.CertVerifyResult, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cert = decoder.decodeStructPointer(network_param$.X509Certificate);
    val.hostPattern = decoder.decodeStruct(codec.String);
    val.verifyResult = decoder.decodeStructPointer(network_param$.CertVerifyResult);
    val.rv = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.X509Certificate, val.cert);
    encoder.encodeStruct(codec.String, val.hostPattern);
    encoder.encodeStructPointer(network_param$.CertVerifyResult, val.verifyResult);
    encoder.encodeStruct(codec.Int32, val.rv);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_SetShouldRequireCT_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SetShouldRequireCT_Params.prototype.initDefaults_ = function() {
    this.required = 0;
  };
  NetworkServiceTest_SetShouldRequireCT_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SetShouldRequireCT_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_SetShouldRequireCT_Params.required
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NetworkServiceTest.ShouldRequireCT);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_SetShouldRequireCT_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_SetShouldRequireCT_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SetShouldRequireCT_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.required = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_SetShouldRequireCT_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SetShouldRequireCT_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.required);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_SetShouldRequireCT_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SetShouldRequireCT_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_SetShouldRequireCT_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SetShouldRequireCT_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_SetShouldRequireCT_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_SetShouldRequireCT_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SetShouldRequireCT_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_SetShouldRequireCT_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SetShouldRequireCT_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_SetTransportSecurityStateSource_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SetTransportSecurityStateSource_Params.prototype.initDefaults_ = function() {
    this.reportingPort = 0;
  };
  NetworkServiceTest_SetTransportSecurityStateSource_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SetTransportSecurityStateSource_Params.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_SetTransportSecurityStateSource_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_SetTransportSecurityStateSource_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SetTransportSecurityStateSource_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reportingPort = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_SetTransportSecurityStateSource_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SetTransportSecurityStateSource_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.reportingPort);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_CrashOnResolveHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_CrashOnResolveHost_Params.prototype.initDefaults_ = function() {
    this.host = null;
  };
  NetworkServiceTest_CrashOnResolveHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_CrashOnResolveHost_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_CrashOnResolveHost_Params.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_CrashOnResolveHost_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_CrashOnResolveHost_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_CrashOnResolveHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkServiceTest_CrashOnResolveHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_CrashOnResolveHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
  };
  function NetworkServiceTest_CrashOnGetCookieList_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_CrashOnGetCookieList_Params.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_CrashOnGetCookieList_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_CrashOnGetCookieList_Params.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_CrashOnGetCookieList_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_CrashOnGetCookieList_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_CrashOnGetCookieList_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_CrashOnGetCookieList_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_CrashOnGetCookieList_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_GetLatestMemoryPressureLevel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_GetLatestMemoryPressureLevel_Params.prototype.initDefaults_ = function() {
  };
  NetworkServiceTest_GetLatestMemoryPressureLevel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_GetLatestMemoryPressureLevel_Params.validate = function(messageValidator, offset) {
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

  NetworkServiceTest_GetLatestMemoryPressureLevel_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceTest_GetLatestMemoryPressureLevel_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_GetLatestMemoryPressureLevel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceTest_GetLatestMemoryPressureLevel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_GetLatestMemoryPressureLevel_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.prototype.initDefaults_ = function() {
    this.memoryPressureLevel = 0;
  };
  NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.memoryPressureLevel
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, memory_pressure_level$.MemoryPressureLevel);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.memoryPressureLevel = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.memoryPressureLevel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceTest_GetEnvironmentVariableValue_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_GetEnvironmentVariableValue_Params.prototype.initDefaults_ = function() {
    this.name = null;
  };
  NetworkServiceTest_GetEnvironmentVariableValue_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_GetEnvironmentVariableValue_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_GetEnvironmentVariableValue_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_GetEnvironmentVariableValue_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_GetEnvironmentVariableValue_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_GetEnvironmentVariableValue_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkServiceTest_GetEnvironmentVariableValue_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_GetEnvironmentVariableValue_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
  };
  function NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.prototype.initDefaults_ = function() {
    this.value = null;
  };
  NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.value);
  };
  var kNetworkServiceTest_AddRules_Name = 0;
  var kNetworkServiceTest_SimulateNetworkChange_Name = 1;
  var kNetworkServiceTest_SimulateNetworkQualityChange_Name = 2;
  var kNetworkServiceTest_SimulateCrash_Name = 3;
  var kNetworkServiceTest_MockCertVerifierSetDefaultResult_Name = 4;
  var kNetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Name = 5;
  var kNetworkServiceTest_SetShouldRequireCT_Name = 6;
  var kNetworkServiceTest_SetTransportSecurityStateSource_Name = 7;
  var kNetworkServiceTest_CrashOnResolveHost_Name = 8;
  var kNetworkServiceTest_CrashOnGetCookieList_Name = 9;
  var kNetworkServiceTest_GetLatestMemoryPressureLevel_Name = 10;
  var kNetworkServiceTest_GetEnvironmentVariableValue_Name = 11;

  function NetworkServiceTestPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkServiceTest,
                                                   handleOrPtrInfo);
  }

  function NetworkServiceTestAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkServiceTest, associatedInterfacePtrInfo);
  }

  NetworkServiceTestAssociatedPtr.prototype =
      Object.create(NetworkServiceTestPtr.prototype);
  NetworkServiceTestAssociatedPtr.prototype.constructor =
      NetworkServiceTestAssociatedPtr;

  function NetworkServiceTestProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkServiceTestPtr.prototype.addRules = function() {
    return NetworkServiceTestProxy.prototype.addRules
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.addRules = function(rules) {
    var params_ = new NetworkServiceTest_AddRules_Params();
    params_.rules = rules;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_AddRules_Name,
          codec.align(NetworkServiceTest_AddRules_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_AddRules_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_AddRules_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.simulateNetworkChange = function() {
    return NetworkServiceTestProxy.prototype.simulateNetworkChange
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.simulateNetworkChange = function(type) {
    var params_ = new NetworkServiceTest_SimulateNetworkChange_Params();
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_SimulateNetworkChange_Name,
          codec.align(NetworkServiceTest_SimulateNetworkChange_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_SimulateNetworkChange_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_SimulateNetworkChange_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.simulateNetworkQualityChange = function() {
    return NetworkServiceTestProxy.prototype.simulateNetworkQualityChange
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.simulateNetworkQualityChange = function(type) {
    var params_ = new NetworkServiceTest_SimulateNetworkQualityChange_Params();
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_SimulateNetworkQualityChange_Name,
          codec.align(NetworkServiceTest_SimulateNetworkQualityChange_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_SimulateNetworkQualityChange_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.simulateCrash = function() {
    return NetworkServiceTestProxy.prototype.simulateCrash
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.simulateCrash = function() {
    var params_ = new NetworkServiceTest_SimulateCrash_Params();
    var builder = new codec.MessageV0Builder(
        kNetworkServiceTest_SimulateCrash_Name,
        codec.align(NetworkServiceTest_SimulateCrash_Params.encodedSize));
    builder.encodeStruct(NetworkServiceTest_SimulateCrash_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceTestPtr.prototype.mockCertVerifierSetDefaultResult = function() {
    return NetworkServiceTestProxy.prototype.mockCertVerifierSetDefaultResult
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.mockCertVerifierSetDefaultResult = function(defaultResult) {
    var params_ = new NetworkServiceTest_MockCertVerifierSetDefaultResult_Params();
    params_.defaultResult = defaultResult;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_MockCertVerifierSetDefaultResult_Name,
          codec.align(NetworkServiceTest_MockCertVerifierSetDefaultResult_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_MockCertVerifierSetDefaultResult_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.mockCertVerifierAddResultForCertAndHost = function() {
    return NetworkServiceTestProxy.prototype.mockCertVerifierAddResultForCertAndHost
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.mockCertVerifierAddResultForCertAndHost = function(cert, hostPattern, verifyResult, rv) {
    var params_ = new NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params();
    params_.cert = cert;
    params_.hostPattern = hostPattern;
    params_.verifyResult = verifyResult;
    params_.rv = rv;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Name,
          codec.align(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.setShouldRequireCT = function() {
    return NetworkServiceTestProxy.prototype.setShouldRequireCT
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.setShouldRequireCT = function(required) {
    var params_ = new NetworkServiceTest_SetShouldRequireCT_Params();
    params_.required = required;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_SetShouldRequireCT_Name,
          codec.align(NetworkServiceTest_SetShouldRequireCT_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_SetShouldRequireCT_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_SetShouldRequireCT_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.setTransportSecurityStateSource = function() {
    return NetworkServiceTestProxy.prototype.setTransportSecurityStateSource
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.setTransportSecurityStateSource = function(reportingPort) {
    var params_ = new NetworkServiceTest_SetTransportSecurityStateSource_Params();
    params_.reportingPort = reportingPort;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_SetTransportSecurityStateSource_Name,
          codec.align(NetworkServiceTest_SetTransportSecurityStateSource_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_SetTransportSecurityStateSource_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.crashOnResolveHost = function() {
    return NetworkServiceTestProxy.prototype.crashOnResolveHost
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.crashOnResolveHost = function(host) {
    var params_ = new NetworkServiceTest_CrashOnResolveHost_Params();
    params_.host = host;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceTest_CrashOnResolveHost_Name,
        codec.align(NetworkServiceTest_CrashOnResolveHost_Params.encodedSize));
    builder.encodeStruct(NetworkServiceTest_CrashOnResolveHost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceTestPtr.prototype.crashOnGetCookieList = function() {
    return NetworkServiceTestProxy.prototype.crashOnGetCookieList
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.crashOnGetCookieList = function() {
    var params_ = new NetworkServiceTest_CrashOnGetCookieList_Params();
    var builder = new codec.MessageV0Builder(
        kNetworkServiceTest_CrashOnGetCookieList_Name,
        codec.align(NetworkServiceTest_CrashOnGetCookieList_Params.encodedSize));
    builder.encodeStruct(NetworkServiceTest_CrashOnGetCookieList_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceTestPtr.prototype.getLatestMemoryPressureLevel = function() {
    return NetworkServiceTestProxy.prototype.getLatestMemoryPressureLevel
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.getLatestMemoryPressureLevel = function() {
    var params_ = new NetworkServiceTest_GetLatestMemoryPressureLevel_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_GetLatestMemoryPressureLevel_Name,
          codec.align(NetworkServiceTest_GetLatestMemoryPressureLevel_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_GetLatestMemoryPressureLevel_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceTestPtr.prototype.getEnvironmentVariableValue = function() {
    return NetworkServiceTestProxy.prototype.getEnvironmentVariableValue
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceTestProxy.prototype.getEnvironmentVariableValue = function(name) {
    var params_ = new NetworkServiceTest_GetEnvironmentVariableValue_Params();
    params_.name = name;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceTest_GetEnvironmentVariableValue_Name,
          codec.align(NetworkServiceTest_GetEnvironmentVariableValue_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceTest_GetEnvironmentVariableValue_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function NetworkServiceTestStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkServiceTestStub.prototype.addRules = function(rules) {
    return this.delegate_ && this.delegate_.addRules && this.delegate_.addRules(rules);
  }
  NetworkServiceTestStub.prototype.simulateNetworkChange = function(type) {
    return this.delegate_ && this.delegate_.simulateNetworkChange && this.delegate_.simulateNetworkChange(type);
  }
  NetworkServiceTestStub.prototype.simulateNetworkQualityChange = function(type) {
    return this.delegate_ && this.delegate_.simulateNetworkQualityChange && this.delegate_.simulateNetworkQualityChange(type);
  }
  NetworkServiceTestStub.prototype.simulateCrash = function() {
    return this.delegate_ && this.delegate_.simulateCrash && this.delegate_.simulateCrash();
  }
  NetworkServiceTestStub.prototype.mockCertVerifierSetDefaultResult = function(defaultResult) {
    return this.delegate_ && this.delegate_.mockCertVerifierSetDefaultResult && this.delegate_.mockCertVerifierSetDefaultResult(defaultResult);
  }
  NetworkServiceTestStub.prototype.mockCertVerifierAddResultForCertAndHost = function(cert, hostPattern, verifyResult, rv) {
    return this.delegate_ && this.delegate_.mockCertVerifierAddResultForCertAndHost && this.delegate_.mockCertVerifierAddResultForCertAndHost(cert, hostPattern, verifyResult, rv);
  }
  NetworkServiceTestStub.prototype.setShouldRequireCT = function(required) {
    return this.delegate_ && this.delegate_.setShouldRequireCT && this.delegate_.setShouldRequireCT(required);
  }
  NetworkServiceTestStub.prototype.setTransportSecurityStateSource = function(reportingPort) {
    return this.delegate_ && this.delegate_.setTransportSecurityStateSource && this.delegate_.setTransportSecurityStateSource(reportingPort);
  }
  NetworkServiceTestStub.prototype.crashOnResolveHost = function(host) {
    return this.delegate_ && this.delegate_.crashOnResolveHost && this.delegate_.crashOnResolveHost(host);
  }
  NetworkServiceTestStub.prototype.crashOnGetCookieList = function() {
    return this.delegate_ && this.delegate_.crashOnGetCookieList && this.delegate_.crashOnGetCookieList();
  }
  NetworkServiceTestStub.prototype.getLatestMemoryPressureLevel = function() {
    return this.delegate_ && this.delegate_.getLatestMemoryPressureLevel && this.delegate_.getLatestMemoryPressureLevel();
  }
  NetworkServiceTestStub.prototype.getEnvironmentVariableValue = function(name) {
    return this.delegate_ && this.delegate_.getEnvironmentVariableValue && this.delegate_.getEnvironmentVariableValue(name);
  }

  NetworkServiceTestStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkServiceTest_SimulateCrash_Name:
      var params = reader.decodeStruct(NetworkServiceTest_SimulateCrash_Params);
      this.simulateCrash();
      return true;
    case kNetworkServiceTest_CrashOnResolveHost_Name:
      var params = reader.decodeStruct(NetworkServiceTest_CrashOnResolveHost_Params);
      this.crashOnResolveHost(params.host);
      return true;
    case kNetworkServiceTest_CrashOnGetCookieList_Name:
      var params = reader.decodeStruct(NetworkServiceTest_CrashOnGetCookieList_Params);
      this.crashOnGetCookieList();
      return true;
    default:
      return false;
    }
  };

  NetworkServiceTestStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkServiceTest_AddRules_Name:
      var params = reader.decodeStruct(NetworkServiceTest_AddRules_Params);
      this.addRules(params.rules).then(function(response) {
        var responseParams =
            new NetworkServiceTest_AddRules_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_AddRules_Name,
            codec.align(NetworkServiceTest_AddRules_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_AddRules_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_SimulateNetworkChange_Name:
      var params = reader.decodeStruct(NetworkServiceTest_SimulateNetworkChange_Params);
      this.simulateNetworkChange(params.type).then(function(response) {
        var responseParams =
            new NetworkServiceTest_SimulateNetworkChange_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_SimulateNetworkChange_Name,
            codec.align(NetworkServiceTest_SimulateNetworkChange_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_SimulateNetworkChange_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_SimulateNetworkQualityChange_Name:
      var params = reader.decodeStruct(NetworkServiceTest_SimulateNetworkQualityChange_Params);
      this.simulateNetworkQualityChange(params.type).then(function(response) {
        var responseParams =
            new NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_SimulateNetworkQualityChange_Name,
            codec.align(NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_MockCertVerifierSetDefaultResult_Name:
      var params = reader.decodeStruct(NetworkServiceTest_MockCertVerifierSetDefaultResult_Params);
      this.mockCertVerifierSetDefaultResult(params.defaultResult).then(function(response) {
        var responseParams =
            new NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_MockCertVerifierSetDefaultResult_Name,
            codec.align(NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Name:
      var params = reader.decodeStruct(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params);
      this.mockCertVerifierAddResultForCertAndHost(params.cert, params.hostPattern, params.verifyResult, params.rv).then(function(response) {
        var responseParams =
            new NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Name,
            codec.align(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_SetShouldRequireCT_Name:
      var params = reader.decodeStruct(NetworkServiceTest_SetShouldRequireCT_Params);
      this.setShouldRequireCT(params.required).then(function(response) {
        var responseParams =
            new NetworkServiceTest_SetShouldRequireCT_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_SetShouldRequireCT_Name,
            codec.align(NetworkServiceTest_SetShouldRequireCT_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_SetShouldRequireCT_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_SetTransportSecurityStateSource_Name:
      var params = reader.decodeStruct(NetworkServiceTest_SetTransportSecurityStateSource_Params);
      this.setTransportSecurityStateSource(params.reportingPort).then(function(response) {
        var responseParams =
            new NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_SetTransportSecurityStateSource_Name,
            codec.align(NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_GetLatestMemoryPressureLevel_Name:
      var params = reader.decodeStruct(NetworkServiceTest_GetLatestMemoryPressureLevel_Params);
      this.getLatestMemoryPressureLevel().then(function(response) {
        var responseParams =
            new NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams();
        responseParams.memoryPressureLevel = response.memoryPressureLevel;
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_GetLatestMemoryPressureLevel_Name,
            codec.align(NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceTest_GetEnvironmentVariableValue_Name:
      var params = reader.decodeStruct(NetworkServiceTest_GetEnvironmentVariableValue_Params);
      this.getEnvironmentVariableValue(params.name).then(function(response) {
        var responseParams =
            new NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams();
        responseParams.value = response.value;
        var builder = new codec.MessageV1Builder(
            kNetworkServiceTest_GetEnvironmentVariableValue_Name,
            codec.align(NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetworkServiceTestRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkServiceTest_AddRules_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_AddRules_Params;
      break;
      case kNetworkServiceTest_SimulateNetworkChange_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_SimulateNetworkChange_Params;
      break;
      case kNetworkServiceTest_SimulateNetworkQualityChange_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_SimulateNetworkQualityChange_Params;
      break;
      case kNetworkServiceTest_SimulateCrash_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceTest_SimulateCrash_Params;
      break;
      case kNetworkServiceTest_MockCertVerifierSetDefaultResult_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_MockCertVerifierSetDefaultResult_Params;
      break;
      case kNetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params;
      break;
      case kNetworkServiceTest_SetShouldRequireCT_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_SetShouldRequireCT_Params;
      break;
      case kNetworkServiceTest_SetTransportSecurityStateSource_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_SetTransportSecurityStateSource_Params;
      break;
      case kNetworkServiceTest_CrashOnResolveHost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceTest_CrashOnResolveHost_Params;
      break;
      case kNetworkServiceTest_CrashOnGetCookieList_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceTest_CrashOnGetCookieList_Params;
      break;
      case kNetworkServiceTest_GetLatestMemoryPressureLevel_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_GetLatestMemoryPressureLevel_Params;
      break;
      case kNetworkServiceTest_GetEnvironmentVariableValue_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceTest_GetEnvironmentVariableValue_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkServiceTestResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkServiceTest_AddRules_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_AddRules_ResponseParams;
        break;
      case kNetworkServiceTest_SimulateNetworkChange_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_SimulateNetworkChange_ResponseParams;
        break;
      case kNetworkServiceTest_SimulateNetworkQualityChange_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams;
        break;
      case kNetworkServiceTest_MockCertVerifierSetDefaultResult_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams;
        break;
      case kNetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams;
        break;
      case kNetworkServiceTest_SetShouldRequireCT_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_SetShouldRequireCT_ResponseParams;
        break;
      case kNetworkServiceTest_SetTransportSecurityStateSource_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_SetTransportSecurityStateSource_ResponseParams;
        break;
      case kNetworkServiceTest_GetLatestMemoryPressureLevel_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams;
        break;
      case kNetworkServiceTest_GetEnvironmentVariableValue_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkServiceTest = {
    name: 'network.mojom.NetworkServiceTest',
    kVersion: 0,
    ptrClass: NetworkServiceTestPtr,
    proxyClass: NetworkServiceTestProxy,
    stubClass: NetworkServiceTestStub,
    validateRequest: validateNetworkServiceTestRequest,
    validateResponse: validateNetworkServiceTestResponse,
  };
  NetworkServiceTest.ShouldRequireCT = {};
  NetworkServiceTest.ShouldRequireCT.RESET = 0;
  NetworkServiceTest.ShouldRequireCT.REQUIRE = 1;
  NetworkServiceTest.ShouldRequireCT.DONT_REQUIRE = 2;
  NetworkServiceTest.ShouldRequireCT.MIN_VALUE = 0,
  NetworkServiceTest.ShouldRequireCT.MAX_VALUE = 2,

  NetworkServiceTest.ShouldRequireCT.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  NetworkServiceTest.ShouldRequireCT.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  NetworkServiceTestStub.prototype.validator = validateNetworkServiceTestRequest;
  NetworkServiceTestProxy.prototype.validator = validateNetworkServiceTestResponse;
  exports.ResolverType = ResolverType;
  exports.Rule = Rule;
  exports.NetworkServiceTest = NetworkServiceTest;
  exports.NetworkServiceTestPtr = NetworkServiceTestPtr;
  exports.NetworkServiceTestAssociatedPtr = NetworkServiceTestAssociatedPtr;
})();