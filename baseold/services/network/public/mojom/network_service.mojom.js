// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_service.mojom';
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
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var memory_pressure_level$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/memory_pressure_level.mojom', '../../../../mojo/public/mojom/base/memory_pressure_level.mojom.js');
  }
  var read_only_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/read_only_buffer.mojom', '../../../../mojo/public/mojom/base/read_only_buffer.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../../mojo/public/mojom/base/values.mojom.js');
  }
  var cookie_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cookie_manager.mojom', 'cookie_manager.mojom.js');
  }
  var host_resolver$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/host_resolver.mojom', 'host_resolver.mojom.js');
  }
  var net_log$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/net_log.mojom', 'net_log.mojom.js');
  }
  var network_change_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_change_manager.mojom', 'network_change_manager.mojom.js');
  }
  var network_context$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_context.mojom', 'network_context.mojom.js');
  }
  var network_interface$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_interface.mojom', 'network_interface.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var network_quality_estimator_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_quality_estimator_manager.mojom', 'network_quality_estimator_manager.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', 'url_loader.mojom.js');
  }
  var url_loader_factory$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_factory.mojom', 'url_loader_factory.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }
  var application_state$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/application_state.mojom', '../../../../mojo/public/mojom/base/application_state.mojom.js');
  }



  function LoadInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LoadInfo.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.host = null;
    this.loadState = 0;
    this.stateParam = null;
    this.uploadPosition = 0;
    this.uploadSize = 0;
  };
  LoadInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LoadInfo.validate = function(messageValidator, offset) {
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




    // validate LoadInfo.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate LoadInfo.stateParam
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  LoadInfo.encodedSize = codec.kStructHeaderSize + 48;

  LoadInfo.decode = function(decoder) {
    var packed;
    var val = new LoadInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    val.routingId = decoder.decodeStruct(codec.Uint32);
    val.host = decoder.decodeStruct(codec.String);
    val.loadState = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.stateParam = decoder.decodeStructPointer(string16$.String16);
    val.uploadPosition = decoder.decodeStruct(codec.Uint64);
    val.uploadSize = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  LoadInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LoadInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.encodeStruct(codec.Uint32, val.routingId);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Uint32, val.loadState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(string16$.String16, val.stateParam);
    encoder.encodeStruct(codec.Uint64, val.uploadPosition);
    encoder.encodeStruct(codec.Uint64, val.uploadSize);
  };
  function HttpAuthStaticParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpAuthStaticParams.prototype.initDefaults_ = function() {
    this.supportedSchemes = null;
    this.gssapiLibraryName = null;
  };
  HttpAuthStaticParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpAuthStaticParams.validate = function(messageValidator, offset) {
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


    // validate HttpAuthStaticParams.supportedSchemes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpAuthStaticParams.gssapiLibraryName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpAuthStaticParams.encodedSize = codec.kStructHeaderSize + 16;

  HttpAuthStaticParams.decode = function(decoder) {
    var packed;
    var val = new HttpAuthStaticParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.supportedSchemes = decoder.decodeArrayPointer(codec.String);
    val.gssapiLibraryName = decoder.decodeStruct(codec.String);
    return val;
  };

  HttpAuthStaticParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpAuthStaticParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.supportedSchemes);
    encoder.encodeStruct(codec.String, val.gssapiLibraryName);
  };
  function HttpAuthDynamicParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpAuthDynamicParams.prototype.initDefaults_ = function() {
    this.serverWhitelist = null;
    this.delegateWhitelist = null;
    this.delegateByKdcPolicy = false;
    this.negotiateDisableCnameLookup = false;
    this.enableNegotiatePort = true;
    this.ntlmV2Enabled = false;
    this.allowGssapiLibraryLoad = true;
    this.androidNegotiateAccountType = null;
  };
  HttpAuthDynamicParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpAuthDynamicParams.validate = function(messageValidator, offset) {
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


    // validate HttpAuthDynamicParams.serverWhitelist
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpAuthDynamicParams.delegateWhitelist
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;






    // validate HttpAuthDynamicParams.androidNegotiateAccountType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HttpAuthDynamicParams.encodedSize = codec.kStructHeaderSize + 32;

  HttpAuthDynamicParams.decode = function(decoder) {
    var packed;
    var val = new HttpAuthDynamicParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serverWhitelist = decoder.decodeStruct(codec.String);
    val.delegateWhitelist = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.delegateByKdcPolicy = (packed >> 0) & 1 ? true : false;
    val.negotiateDisableCnameLookup = (packed >> 1) & 1 ? true : false;
    val.enableNegotiatePort = (packed >> 2) & 1 ? true : false;
    val.ntlmV2Enabled = (packed >> 3) & 1 ? true : false;
    val.allowGssapiLibraryLoad = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.androidNegotiateAccountType = decoder.decodeStruct(codec.String);
    return val;
  };

  HttpAuthDynamicParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpAuthDynamicParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.serverWhitelist);
    encoder.encodeStruct(codec.String, val.delegateWhitelist);
    packed = 0;
    packed |= (val.delegateByKdcPolicy & 1) << 0
    packed |= (val.negotiateDisableCnameLookup & 1) << 1
    packed |= (val.enableNegotiatePort & 1) << 2
    packed |= (val.ntlmV2Enabled & 1) << 3
    packed |= (val.allowGssapiLibraryLoad & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.androidNegotiateAccountType);
  };
  function EnvironmentVariable(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EnvironmentVariable.prototype.initDefaults_ = function() {
    this.name = null;
    this.value = null;
  };
  EnvironmentVariable.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EnvironmentVariable.validate = function(messageValidator, offset) {
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


    // validate EnvironmentVariable.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate EnvironmentVariable.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EnvironmentVariable.encodedSize = codec.kStructHeaderSize + 16;

  EnvironmentVariable.decode = function(decoder) {
    var packed;
    var val = new EnvironmentVariable();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(codec.String);
    return val;
  };

  EnvironmentVariable.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EnvironmentVariable.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.value);
  };
  function NetworkServiceParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceParams.prototype.initDefaults_ = function() {
    this.initialConnectionType = network_change_manager$.ConnectionType.CONNECTION_UNKNOWN;
    this.initialConnectionSubtype = network_change_manager$.ConnectionSubtype.SUBTYPE_UNKNOWN;
    this.environment = null;
  };
  NetworkServiceParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceParams.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceParams.initialConnectionType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, network_change_manager$.ConnectionType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceParams.initialConnectionSubtype
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, network_change_manager$.ConnectionSubtype);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceParams.environment
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(EnvironmentVariable), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkServiceParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.initialConnectionType = decoder.decodeStruct(codec.Int32);
    val.initialConnectionSubtype = decoder.decodeStruct(codec.Int32);
    val.environment = decoder.decodeArrayPointer(new codec.PointerTo(EnvironmentVariable));
    return val;
  };

  NetworkServiceParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.initialConnectionType);
    encoder.encodeStruct(codec.Int32, val.initialConnectionSubtype);
    encoder.encodeArrayPointer(new codec.PointerTo(EnvironmentVariable), val.environment);
  };
  function SSLPrivateKey_Sign_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SSLPrivateKey_Sign_Params.prototype.initDefaults_ = function() {
    this.algorithm = 0;
    this.input = null;
  };
  SSLPrivateKey_Sign_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SSLPrivateKey_Sign_Params.validate = function(messageValidator, offset) {
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



    // validate SSLPrivateKey_Sign_Params.input
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SSLPrivateKey_Sign_Params.encodedSize = codec.kStructHeaderSize + 16;

  SSLPrivateKey_Sign_Params.decode = function(decoder) {
    var packed;
    var val = new SSLPrivateKey_Sign_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.algorithm = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.input = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  SSLPrivateKey_Sign_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SSLPrivateKey_Sign_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.algorithm);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.input);
  };
  function SSLPrivateKey_Sign_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SSLPrivateKey_Sign_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.signature = null;
  };
  SSLPrivateKey_Sign_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SSLPrivateKey_Sign_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate SSLPrivateKey_Sign_ResponseParams.signature
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SSLPrivateKey_Sign_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SSLPrivateKey_Sign_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SSLPrivateKey_Sign_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.signature = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  SSLPrivateKey_Sign_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SSLPrivateKey_Sign_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.signature);
  };
  function AuthChallengeResponder_OnAuthCredentials_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthChallengeResponder_OnAuthCredentials_Params.prototype.initDefaults_ = function() {
    this.credentials = null;
  };
  AuthChallengeResponder_OnAuthCredentials_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthChallengeResponder_OnAuthCredentials_Params.validate = function(messageValidator, offset) {
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


    // validate AuthChallengeResponder_OnAuthCredentials_Params.credentials
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.AuthCredentials, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthChallengeResponder_OnAuthCredentials_Params.encodedSize = codec.kStructHeaderSize + 8;

  AuthChallengeResponder_OnAuthCredentials_Params.decode = function(decoder) {
    var packed;
    var val = new AuthChallengeResponder_OnAuthCredentials_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.credentials = decoder.decodeStructPointer(network_param$.AuthCredentials);
    return val;
  };

  AuthChallengeResponder_OnAuthCredentials_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthChallengeResponder_OnAuthCredentials_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.AuthCredentials, val.credentials);
  };
  function ClientCertificateResponder_ContinueWithCertificate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ClientCertificateResponder_ContinueWithCertificate_Params.prototype.initDefaults_ = function() {
    this.x509Certificate = null;
    this.providerName = null;
    this.algorithmPreferences = null;
    this.sslPrivateKey = new SSLPrivateKeyPtr();
  };
  ClientCertificateResponder_ContinueWithCertificate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClientCertificateResponder_ContinueWithCertificate_Params.validate = function(messageValidator, offset) {
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


    // validate ClientCertificateResponder_ContinueWithCertificate_Params.x509Certificate
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.X509Certificate, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ClientCertificateResponder_ContinueWithCertificate_Params.providerName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ClientCertificateResponder_ContinueWithCertificate_Params.algorithmPreferences
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 2, codec.Uint16, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ClientCertificateResponder_ContinueWithCertificate_Params.sslPrivateKey
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ClientCertificateResponder_ContinueWithCertificate_Params.encodedSize = codec.kStructHeaderSize + 32;

  ClientCertificateResponder_ContinueWithCertificate_Params.decode = function(decoder) {
    var packed;
    var val = new ClientCertificateResponder_ContinueWithCertificate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x509Certificate = decoder.decodeStructPointer(network_param$.X509Certificate);
    val.providerName = decoder.decodeStruct(codec.String);
    val.algorithmPreferences = decoder.decodeArrayPointer(codec.Uint16);
    val.sslPrivateKey = decoder.decodeStruct(new codec.Interface(SSLPrivateKeyPtr));
    return val;
  };

  ClientCertificateResponder_ContinueWithCertificate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClientCertificateResponder_ContinueWithCertificate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.X509Certificate, val.x509Certificate);
    encoder.encodeStruct(codec.String, val.providerName);
    encoder.encodeArrayPointer(codec.Uint16, val.algorithmPreferences);
    encoder.encodeStruct(new codec.Interface(SSLPrivateKeyPtr), val.sslPrivateKey);
  };
  function ClientCertificateResponder_ContinueWithoutCertificate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ClientCertificateResponder_ContinueWithoutCertificate_Params.prototype.initDefaults_ = function() {
  };
  ClientCertificateResponder_ContinueWithoutCertificate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClientCertificateResponder_ContinueWithoutCertificate_Params.validate = function(messageValidator, offset) {
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

  ClientCertificateResponder_ContinueWithoutCertificate_Params.encodedSize = codec.kStructHeaderSize + 0;

  ClientCertificateResponder_ContinueWithoutCertificate_Params.decode = function(decoder) {
    var packed;
    var val = new ClientCertificateResponder_ContinueWithoutCertificate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ClientCertificateResponder_ContinueWithoutCertificate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClientCertificateResponder_ContinueWithoutCertificate_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ClientCertificateResponder_CancelRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ClientCertificateResponder_CancelRequest_Params.prototype.initDefaults_ = function() {
  };
  ClientCertificateResponder_CancelRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClientCertificateResponder_CancelRequest_Params.validate = function(messageValidator, offset) {
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

  ClientCertificateResponder_CancelRequest_Params.encodedSize = codec.kStructHeaderSize + 0;

  ClientCertificateResponder_CancelRequest_Params.decode = function(decoder) {
    var packed;
    var val = new ClientCertificateResponder_CancelRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ClientCertificateResponder_CancelRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClientCertificateResponder_CancelRequest_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceClient_OnAuthRequired_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnAuthRequired_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.requestId = 0;
    this.firstAuthAttempt = false;
    this.url = null;
    this.authInfo = null;
    this.head = null;
    this.authChallengeResponder = new AuthChallengeResponderPtr();
  };
  NetworkServiceClient_OnAuthRequired_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnAuthRequired_Params.validate = function(messageValidator, offset) {
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





    // validate NetworkServiceClient_OnAuthRequired_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkServiceClient_OnAuthRequired_Params.authInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, network_param$.AuthChallengeInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnAuthRequired_Params.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, url_loader$.URLResponseHead, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnAuthRequired_Params.authChallengeResponder
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 40, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnAuthRequired_Params.encodedSize = codec.kStructHeaderSize + 48;

  NetworkServiceClient_OnAuthRequired_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnAuthRequired_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    val.routingId = decoder.decodeStruct(codec.Uint32);
    val.requestId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.firstAuthAttempt = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.authInfo = decoder.decodeStructPointer(network_param$.AuthChallengeInfo);
    val.head = decoder.decodeStructPointer(url_loader$.URLResponseHead);
    val.authChallengeResponder = decoder.decodeStruct(new codec.Interface(AuthChallengeResponderPtr));
    return val;
  };

  NetworkServiceClient_OnAuthRequired_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnAuthRequired_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.encodeStruct(codec.Uint32, val.routingId);
    encoder.encodeStruct(codec.Uint32, val.requestId);
    packed = 0;
    packed |= (val.firstAuthAttempt & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(network_param$.AuthChallengeInfo, val.authInfo);
    encoder.encodeStructPointer(url_loader$.URLResponseHead, val.head);
    encoder.encodeStruct(new codec.Interface(AuthChallengeResponderPtr), val.authChallengeResponder);
  };
  function NetworkServiceClient_OnCertificateRequested_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnCertificateRequested_Params.prototype.initDefaults_ = function() {
    this.windowId = null;
    this.processId = 0;
    this.routingId = 0;
    this.requestId = 0;
    this.certInfo = null;
    this.certResponder = new ClientCertificateResponderPtr();
  };
  NetworkServiceClient_OnCertificateRequested_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnCertificateRequested_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceClient_OnCertificateRequested_Params.windowId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;





    // validate NetworkServiceClient_OnCertificateRequested_Params.certInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, network_param$.SSLCertRequestInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnCertificateRequested_Params.certResponder
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 32, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnCertificateRequested_Params.encodedSize = codec.kStructHeaderSize + 40;

  NetworkServiceClient_OnCertificateRequested_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnCertificateRequested_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.windowId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.processId = decoder.decodeStruct(codec.Uint32);
    val.routingId = decoder.decodeStruct(codec.Uint32);
    val.requestId = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.certInfo = decoder.decodeStructPointer(network_param$.SSLCertRequestInfo);
    val.certResponder = decoder.decodeStruct(new codec.Interface(ClientCertificateResponderPtr));
    return val;
  };

  NetworkServiceClient_OnCertificateRequested_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnCertificateRequested_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.windowId);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.encodeStruct(codec.Uint32, val.routingId);
    encoder.encodeStruct(codec.Uint32, val.requestId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(network_param$.SSLCertRequestInfo, val.certInfo);
    encoder.encodeStruct(new codec.Interface(ClientCertificateResponderPtr), val.certResponder);
  };
  function NetworkServiceClient_OnSSLCertificateError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnSSLCertificateError_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.url = null;
    this.netError = 0;
    this.fatal = false;
    this.sslInfo = null;
  };
  NetworkServiceClient_OnSSLCertificateError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnSSLCertificateError_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkServiceClient_OnSSLCertificateError_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkServiceClient_OnSSLCertificateError_Params.sslInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, network_param$.SSLInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnSSLCertificateError_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkServiceClient_OnSSLCertificateError_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnSSLCertificateError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    val.routingId = decoder.decodeStruct(codec.Uint32);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.netError = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.fatal = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sslInfo = decoder.decodeStructPointer(network_param$.SSLInfo);
    return val;
  };

  NetworkServiceClient_OnSSLCertificateError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnSSLCertificateError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.encodeStruct(codec.Uint32, val.routingId);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.netError);
    packed = 0;
    packed |= (val.fatal & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(network_param$.SSLInfo, val.sslInfo);
  };
  function NetworkServiceClient_OnSSLCertificateError_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnSSLCertificateError_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
  };
  NetworkServiceClient_OnSSLCertificateError_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnSSLCertificateError_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceClient_OnSSLCertificateError_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceClient_OnSSLCertificateError_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnSSLCertificateError_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceClient_OnSSLCertificateError_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnSSLCertificateError_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceClient_OnFileUploadRequested_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnFileUploadRequested_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.async = false;
    this.filePaths = null;
  };
  NetworkServiceClient_OnFileUploadRequested_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnFileUploadRequested_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkServiceClient_OnFileUploadRequested_Params.filePaths
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(file_path$.FilePath), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnFileUploadRequested_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkServiceClient_OnFileUploadRequested_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnFileUploadRequested_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.async = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.filePaths = decoder.decodeArrayPointer(new codec.PointerTo(file_path$.FilePath));
    return val;
  };

  NetworkServiceClient_OnFileUploadRequested_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnFileUploadRequested_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    packed = 0;
    packed |= (val.async & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(file_path$.FilePath), val.filePaths);
  };
  function NetworkServiceClient_OnFileUploadRequested_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnFileUploadRequested_ResponseParams.prototype.initDefaults_ = function() {
    this.netError = 0;
    this.files = null;
  };
  NetworkServiceClient_OnFileUploadRequested_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnFileUploadRequested_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NetworkServiceClient_OnFileUploadRequested_ResponseParams.files
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(file$.File), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnFileUploadRequested_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkServiceClient_OnFileUploadRequested_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnFileUploadRequested_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.netError = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.files = decoder.decodeArrayPointer(new codec.PointerTo(file$.File));
    return val;
  };

  NetworkServiceClient_OnFileUploadRequested_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnFileUploadRequested_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(file$.File), val.files);
  };
  function NetworkServiceClient_OnCookieChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnCookieChange_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.url = null;
    this.frameUrl = null;
    this.cookie = null;
    this.blockedByPolicy = false;
  };
  NetworkServiceClient_OnCookieChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnCookieChange_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkServiceClient_OnCookieChange_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnCookieChange_Params.frameUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnCookieChange_Params.cookie
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, cookie_manager$.CanonicalCookie, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnCookieChange_Params.encodedSize = codec.kStructHeaderSize + 40;

  NetworkServiceClient_OnCookieChange_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnCookieChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Int32);
    val.routingId = decoder.decodeStruct(codec.Int32);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.frameUrl = decoder.decodeStructPointer(url$.Url);
    val.cookie = decoder.decodeStructPointer(cookie_manager$.CanonicalCookie);
    packed = decoder.readUint8();
    val.blockedByPolicy = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceClient_OnCookieChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnCookieChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.processId);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(url$.Url, val.frameUrl);
    encoder.encodeStructPointer(cookie_manager$.CanonicalCookie, val.cookie);
    packed = 0;
    packed |= (val.blockedByPolicy & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceClient_OnCookiesRead_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnCookiesRead_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.url = null;
    this.frameUrl = null;
    this.cookieList = null;
    this.blockedByPolicy = false;
  };
  NetworkServiceClient_OnCookiesRead_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnCookiesRead_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkServiceClient_OnCookiesRead_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnCookiesRead_Params.frameUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnCookiesRead_Params.cookieList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(cookie_manager$.CanonicalCookie), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnCookiesRead_Params.encodedSize = codec.kStructHeaderSize + 40;

  NetworkServiceClient_OnCookiesRead_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnCookiesRead_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Int32);
    val.routingId = decoder.decodeStruct(codec.Int32);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.frameUrl = decoder.decodeStructPointer(url$.Url);
    val.cookieList = decoder.decodeArrayPointer(new codec.PointerTo(cookie_manager$.CanonicalCookie));
    packed = decoder.readUint8();
    val.blockedByPolicy = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkServiceClient_OnCookiesRead_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnCookiesRead_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.processId);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(url$.Url, val.frameUrl);
    encoder.encodeArrayPointer(new codec.PointerTo(cookie_manager$.CanonicalCookie), val.cookieList);
    packed = 0;
    packed |= (val.blockedByPolicy & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkServiceClient_OnLoadingStateUpdate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnLoadingStateUpdate_Params.prototype.initDefaults_ = function() {
    this.infos = null;
  };
  NetworkServiceClient_OnLoadingStateUpdate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnLoadingStateUpdate_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceClient_OnLoadingStateUpdate_Params.infos
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(LoadInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnLoadingStateUpdate_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkServiceClient_OnLoadingStateUpdate_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnLoadingStateUpdate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.infos = decoder.decodeArrayPointer(new codec.PointerTo(LoadInfo));
    return val;
  };

  NetworkServiceClient_OnLoadingStateUpdate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnLoadingStateUpdate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(LoadInfo), val.infos);
  };
  function NetworkServiceClient_OnLoadingStateUpdate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnLoadingStateUpdate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkServiceClient_OnDataUseUpdate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnDataUseUpdate_Params.prototype.initDefaults_ = function() {
    this.networkTrafficAnnotationIdHash = 0;
    this.recvBytes = 0;
    this.sentBytes = 0;
  };
  NetworkServiceClient_OnDataUseUpdate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnDataUseUpdate_Params.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnDataUseUpdate_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkServiceClient_OnDataUseUpdate_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnDataUseUpdate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.networkTrafficAnnotationIdHash = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.recvBytes = decoder.decodeStruct(codec.Int64);
    val.sentBytes = decoder.decodeStruct(codec.Int64);
    return val;
  };

  NetworkServiceClient_OnDataUseUpdate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnDataUseUpdate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.networkTrafficAnnotationIdHash);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.recvBytes);
    encoder.encodeStruct(codec.Int64, val.sentBytes);
  };
  function NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.prototype.initDefaults_ = function() {
    this.serverAuthToken = null;
    this.canDelegate = false;
    this.authNegotiateAndroidAccountType = null;
    this.spn = null;
  };
  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.serverAuthToken
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.authNegotiateAndroidAccountType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.spn
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serverAuthToken = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.canDelegate = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.authNegotiateAndroidAccountType = decoder.decodeStruct(codec.String);
    val.spn = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.serverAuthToken);
    packed = 0;
    packed |= (val.canDelegate & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.authNegotiateAndroidAccountType);
    encoder.encodeStruct(codec.String, val.spn);
  };
  function NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.authToken = null;
  };
  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.authToken
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.authToken = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.authToken);
  };
  function NetworkServiceClient_OnFlaggedRequestCookies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnFlaggedRequestCookies_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.excludedCookies = null;
  };
  NetworkServiceClient_OnFlaggedRequestCookies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnFlaggedRequestCookies_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkServiceClient_OnFlaggedRequestCookies_Params.excludedCookies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(cookie_manager$.CookieWithStatus), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnFlaggedRequestCookies_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkServiceClient_OnFlaggedRequestCookies_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnFlaggedRequestCookies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Int32);
    val.routingId = decoder.decodeStruct(codec.Int32);
    val.excludedCookies = decoder.decodeArrayPointer(new codec.PointerTo(cookie_manager$.CookieWithStatus));
    return val;
  };

  NetworkServiceClient_OnFlaggedRequestCookies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnFlaggedRequestCookies_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.processId);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeArrayPointer(new codec.PointerTo(cookie_manager$.CookieWithStatus), val.excludedCookies);
  };
  function NetworkServiceClient_OnFlaggedResponseCookies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkServiceClient_OnFlaggedResponseCookies_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.excludedCookies = null;
  };
  NetworkServiceClient_OnFlaggedResponseCookies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkServiceClient_OnFlaggedResponseCookies_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkServiceClient_OnFlaggedResponseCookies_Params.excludedCookies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(cookie_manager$.CookieAndLineWithStatus), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkServiceClient_OnFlaggedResponseCookies_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkServiceClient_OnFlaggedResponseCookies_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkServiceClient_OnFlaggedResponseCookies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Int32);
    val.routingId = decoder.decodeStruct(codec.Int32);
    val.excludedCookies = decoder.decodeArrayPointer(new codec.PointerTo(cookie_manager$.CookieAndLineWithStatus));
    return val;
  };

  NetworkServiceClient_OnFlaggedResponseCookies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkServiceClient_OnFlaggedResponseCookies_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.processId);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeArrayPointer(new codec.PointerTo(cookie_manager$.CookieAndLineWithStatus), val.excludedCookies);
  };
  function NetworkService_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new NetworkServiceClientPtr();
    this.params = null;
  };
  NetworkService_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_SetClient_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_SetClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkService_SetClient_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NetworkServiceParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_SetClient_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(NetworkServiceClientPtr));
    val.params = decoder.decodeStructPointer(NetworkServiceParams);
    return val;
  };

  NetworkService_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(NetworkServiceClientPtr), val.client);
    encoder.encodeStructPointer(NetworkServiceParams, val.params);
  };
  function NetworkService_StartNetLog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_StartNetLog_Params.prototype.initDefaults_ = function() {
    this.file = null;
    this.captureMode = 0;
    this.constants = null;
  };
  NetworkService_StartNetLog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_StartNetLog_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_StartNetLog_Params.file
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkService_StartNetLog_Params.captureMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, net_log$.NetLogCaptureMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkService_StartNetLog_Params.constants
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_StartNetLog_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkService_StartNetLog_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_StartNetLog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.file = decoder.decodeStructPointer(file$.File);
    val.captureMode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.constants = decoder.decodeStructPointer(values$.DictionaryValue);
    return val;
  };

  NetworkService_StartNetLog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_StartNetLog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.file);
    encoder.encodeStruct(codec.Int32, val.captureMode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(values$.DictionaryValue, val.constants);
  };
  function NetworkService_SetSSLKeyLogFile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_SetSSLKeyLogFile_Params.prototype.initDefaults_ = function() {
    this.file = null;
  };
  NetworkService_SetSSLKeyLogFile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_SetSSLKeyLogFile_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_SetSSLKeyLogFile_Params.file
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_SetSSLKeyLogFile_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_SetSSLKeyLogFile_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_SetSSLKeyLogFile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.file = decoder.decodeStructPointer(file_path$.FilePath);
    return val;
  };

  NetworkService_SetSSLKeyLogFile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_SetSSLKeyLogFile_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.file);
  };
  function NetworkService_CreateNetworkContext_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateNetworkContext_Params.prototype.initDefaults_ = function() {
    this.context = new bindings.InterfaceRequest();
    this.params = null;
  };
  NetworkService_CreateNetworkContext_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateNetworkContext_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_CreateNetworkContext_Params.context
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkService_CreateNetworkContext_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, network_context$.NetworkContextParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateNetworkContext_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_CreateNetworkContext_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateNetworkContext_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.context = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.params = decoder.decodeStructPointer(network_context$.NetworkContextParams);
    return val;
  };

  NetworkService_CreateNetworkContext_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateNetworkContext_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.context);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(network_context$.NetworkContextParams, val.params);
  };
  function NetworkService_ConfigureStubHostResolver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_ConfigureStubHostResolver_Params.prototype.initDefaults_ = function() {
    this.stubResolverEnabled = false;
    this.dnsOverHttpsServers = null;
  };
  NetworkService_ConfigureStubHostResolver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_ConfigureStubHostResolver_Params.validate = function(messageValidator, offset) {
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



    // validate NetworkService_ConfigureStubHostResolver_Params.dnsOverHttpsServers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(host_resolver$.DnsOverHttpsServer), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_ConfigureStubHostResolver_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_ConfigureStubHostResolver_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_ConfigureStubHostResolver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.stubResolverEnabled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.dnsOverHttpsServers = decoder.decodeArrayPointer(new codec.PointerTo(host_resolver$.DnsOverHttpsServer));
    return val;
  };

  NetworkService_ConfigureStubHostResolver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_ConfigureStubHostResolver_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.stubResolverEnabled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(host_resolver$.DnsOverHttpsServer), val.dnsOverHttpsServers);
  };
  function NetworkService_DisableQuic_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_DisableQuic_Params.prototype.initDefaults_ = function() {
  };
  NetworkService_DisableQuic_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_DisableQuic_Params.validate = function(messageValidator, offset) {
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

  NetworkService_DisableQuic_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkService_DisableQuic_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_DisableQuic_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkService_DisableQuic_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_DisableQuic_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkService_SetUpHttpAuth_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_SetUpHttpAuth_Params.prototype.initDefaults_ = function() {
    this.httpAuthStaticParams = null;
  };
  NetworkService_SetUpHttpAuth_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_SetUpHttpAuth_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_SetUpHttpAuth_Params.httpAuthStaticParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, HttpAuthStaticParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_SetUpHttpAuth_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_SetUpHttpAuth_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_SetUpHttpAuth_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.httpAuthStaticParams = decoder.decodeStructPointer(HttpAuthStaticParams);
    return val;
  };

  NetworkService_SetUpHttpAuth_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_SetUpHttpAuth_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(HttpAuthStaticParams, val.httpAuthStaticParams);
  };
  function NetworkService_ConfigureHttpAuthPrefs_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_ConfigureHttpAuthPrefs_Params.prototype.initDefaults_ = function() {
    this.httpAuthDynamicParams = null;
  };
  NetworkService_ConfigureHttpAuthPrefs_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_ConfigureHttpAuthPrefs_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_ConfigureHttpAuthPrefs_Params.httpAuthDynamicParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, HttpAuthDynamicParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_ConfigureHttpAuthPrefs_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_ConfigureHttpAuthPrefs_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_ConfigureHttpAuthPrefs_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.httpAuthDynamicParams = decoder.decodeStructPointer(HttpAuthDynamicParams);
    return val;
  };

  NetworkService_ConfigureHttpAuthPrefs_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_ConfigureHttpAuthPrefs_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(HttpAuthDynamicParams, val.httpAuthDynamicParams);
  };
  function NetworkService_SetRawHeadersAccess_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_SetRawHeadersAccess_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.origins = null;
  };
  NetworkService_SetRawHeadersAccess_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_SetRawHeadersAccess_Params.validate = function(messageValidator, offset) {
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



    // validate NetworkService_SetRawHeadersAccess_Params.origins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(origin$.Origin), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_SetRawHeadersAccess_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_SetRawHeadersAccess_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_SetRawHeadersAccess_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.origins = decoder.decodeArrayPointer(new codec.PointerTo(origin$.Origin));
    return val;
  };

  NetworkService_SetRawHeadersAccess_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_SetRawHeadersAccess_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(origin$.Origin), val.origins);
  };
  function NetworkService_SetMaxConnectionsPerProxy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_SetMaxConnectionsPerProxy_Params.prototype.initDefaults_ = function() {
    this.maxConnections = 0;
  };
  NetworkService_SetMaxConnectionsPerProxy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_SetMaxConnectionsPerProxy_Params.validate = function(messageValidator, offset) {
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

  NetworkService_SetMaxConnectionsPerProxy_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_SetMaxConnectionsPerProxy_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_SetMaxConnectionsPerProxy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.maxConnections = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_SetMaxConnectionsPerProxy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_SetMaxConnectionsPerProxy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.maxConnections);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_GetNetworkChangeManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetNetworkChangeManager_Params.prototype.initDefaults_ = function() {
    this.networkChangeManager = new bindings.InterfaceRequest();
  };
  NetworkService_GetNetworkChangeManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetNetworkChangeManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_GetNetworkChangeManager_Params.networkChangeManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_GetNetworkChangeManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetNetworkChangeManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetNetworkChangeManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.networkChangeManager = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_GetNetworkChangeManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetNetworkChangeManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.networkChangeManager);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_GetNetworkQualityEstimatorManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetNetworkQualityEstimatorManager_Params.prototype.initDefaults_ = function() {
    this.networkQualityEstimatorManager = new bindings.InterfaceRequest();
  };
  NetworkService_GetNetworkQualityEstimatorManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetNetworkQualityEstimatorManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_GetNetworkQualityEstimatorManager_Params.networkQualityEstimatorManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_GetNetworkQualityEstimatorManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetNetworkQualityEstimatorManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetNetworkQualityEstimatorManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.networkQualityEstimatorManager = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_GetNetworkQualityEstimatorManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetNetworkQualityEstimatorManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.networkQualityEstimatorManager);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_GetDnsConfigChangeManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetDnsConfigChangeManager_Params.prototype.initDefaults_ = function() {
    this.dnsConfigChangeManager = new bindings.InterfaceRequest();
  };
  NetworkService_GetDnsConfigChangeManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetDnsConfigChangeManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_GetDnsConfigChangeManager_Params.dnsConfigChangeManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_GetDnsConfigChangeManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetDnsConfigChangeManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetDnsConfigChangeManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dnsConfigChangeManager = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_GetDnsConfigChangeManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetDnsConfigChangeManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.dnsConfigChangeManager);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_GetTotalNetworkUsages_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetTotalNetworkUsages_Params.prototype.initDefaults_ = function() {
  };
  NetworkService_GetTotalNetworkUsages_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetTotalNetworkUsages_Params.validate = function(messageValidator, offset) {
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

  NetworkService_GetTotalNetworkUsages_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkService_GetTotalNetworkUsages_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetTotalNetworkUsages_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkService_GetTotalNetworkUsages_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetTotalNetworkUsages_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkService_GetTotalNetworkUsages_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetTotalNetworkUsages_ResponseParams.prototype.initDefaults_ = function() {
    this.totalNetworkUsages = null;
  };
  NetworkService_GetTotalNetworkUsages_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetTotalNetworkUsages_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkService_GetTotalNetworkUsages_ResponseParams.totalNetworkUsages
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(network_context$.NetworkUsage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_GetTotalNetworkUsages_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetTotalNetworkUsages_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetTotalNetworkUsages_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.totalNetworkUsages = decoder.decodeArrayPointer(new codec.PointerTo(network_context$.NetworkUsage));
    return val;
  };

  NetworkService_GetTotalNetworkUsages_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetTotalNetworkUsages_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(network_context$.NetworkUsage), val.totalNetworkUsages);
  };
  function NetworkService_GetNetworkList_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetNetworkList_Params.prototype.initDefaults_ = function() {
    this.policy = 0;
  };
  NetworkService_GetNetworkList_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetNetworkList_Params.validate = function(messageValidator, offset) {
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

  NetworkService_GetNetworkList_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetNetworkList_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetNetworkList_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.policy = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_GetNetworkList_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetNetworkList_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.policy);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_GetNetworkList_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetNetworkList_ResponseParams.prototype.initDefaults_ = function() {
    this.networks = null;
  };
  NetworkService_GetNetworkList_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetNetworkList_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkService_GetNetworkList_ResponseParams.networks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(network_interface$.NetworkInterface), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_GetNetworkList_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetNetworkList_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetNetworkList_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.networks = decoder.decodeArrayPointer(new codec.PointerTo(network_interface$.NetworkInterface));
    return val;
  };

  NetworkService_GetNetworkList_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetNetworkList_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(network_interface$.NetworkInterface), val.networks);
  };
  function NetworkService_UpdateCRLSet_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_UpdateCRLSet_Params.prototype.initDefaults_ = function() {
    this.crlSet = null;
  };
  NetworkService_UpdateCRLSet_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_UpdateCRLSet_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_UpdateCRLSet_Params.crlSet
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, read_only_buffer$.ReadOnlyBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_UpdateCRLSet_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_UpdateCRLSet_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_UpdateCRLSet_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.crlSet = decoder.decodeStructPointer(read_only_buffer$.ReadOnlyBuffer);
    return val;
  };

  NetworkService_UpdateCRLSet_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_UpdateCRLSet_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(read_only_buffer$.ReadOnlyBuffer, val.crlSet);
  };
  function NetworkService_OnCertDBChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_OnCertDBChanged_Params.prototype.initDefaults_ = function() {
  };
  NetworkService_OnCertDBChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_OnCertDBChanged_Params.validate = function(messageValidator, offset) {
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

  NetworkService_OnCertDBChanged_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkService_OnCertDBChanged_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_OnCertDBChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkService_OnCertDBChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_OnCertDBChanged_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkService_AddCorbExceptionForPlugin_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_AddCorbExceptionForPlugin_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
  };
  NetworkService_AddCorbExceptionForPlugin_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_AddCorbExceptionForPlugin_Params.validate = function(messageValidator, offset) {
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

  NetworkService_AddCorbExceptionForPlugin_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_AddCorbExceptionForPlugin_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_AddCorbExceptionForPlugin_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_AddCorbExceptionForPlugin_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_AddCorbExceptionForPlugin_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_RemoveCorbExceptionForPlugin_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_RemoveCorbExceptionForPlugin_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
  };
  NetworkService_RemoveCorbExceptionForPlugin_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_RemoveCorbExceptionForPlugin_Params.validate = function(messageValidator, offset) {
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

  NetworkService_RemoveCorbExceptionForPlugin_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_RemoveCorbExceptionForPlugin_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_RemoveCorbExceptionForPlugin_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_RemoveCorbExceptionForPlugin_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_RemoveCorbExceptionForPlugin_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_AddExtraMimeTypesForCorb_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_AddExtraMimeTypesForCorb_Params.prototype.initDefaults_ = function() {
    this.mimeTypes = null;
  };
  NetworkService_AddExtraMimeTypesForCorb_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_AddExtraMimeTypesForCorb_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_AddExtraMimeTypesForCorb_Params.mimeTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_AddExtraMimeTypesForCorb_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_AddExtraMimeTypesForCorb_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_AddExtraMimeTypesForCorb_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mimeTypes = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  NetworkService_AddExtraMimeTypesForCorb_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_AddExtraMimeTypesForCorb_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.mimeTypes);
  };
  function NetworkService_OnMemoryPressure_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_OnMemoryPressure_Params.prototype.initDefaults_ = function() {
    this.memoryPressureLevel = 0;
  };
  NetworkService_OnMemoryPressure_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_OnMemoryPressure_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_OnMemoryPressure_Params.memoryPressureLevel
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, memory_pressure_level$.MemoryPressureLevel);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_OnMemoryPressure_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_OnMemoryPressure_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_OnMemoryPressure_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.memoryPressureLevel = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_OnMemoryPressure_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_OnMemoryPressure_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.memoryPressureLevel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_OnApplicationStateChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_OnApplicationStateChange_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  NetworkService_OnApplicationStateChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_OnApplicationStateChange_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_OnApplicationStateChange_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, application_state$.ApplicationState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_OnApplicationStateChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_OnApplicationStateChange_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_OnApplicationStateChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_OnApplicationStateChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_OnApplicationStateChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkService_SetEnvironment_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_SetEnvironment_Params.prototype.initDefaults_ = function() {
    this.environment = null;
  };
  NetworkService_SetEnvironment_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_SetEnvironment_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkService_SetEnvironment_Params.environment
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(EnvironmentVariable), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_SetEnvironment_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_SetEnvironment_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_SetEnvironment_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.environment = decoder.decodeArrayPointer(new codec.PointerTo(EnvironmentVariable));
    return val;
  };

  NetworkService_SetEnvironment_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_SetEnvironment_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(EnvironmentVariable), val.environment);
  };
  var kSSLPrivateKey_Sign_Name = 0;

  function SSLPrivateKeyPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SSLPrivateKey,
                                                   handleOrPtrInfo);
  }

  function SSLPrivateKeyAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SSLPrivateKey, associatedInterfacePtrInfo);
  }

  SSLPrivateKeyAssociatedPtr.prototype =
      Object.create(SSLPrivateKeyPtr.prototype);
  SSLPrivateKeyAssociatedPtr.prototype.constructor =
      SSLPrivateKeyAssociatedPtr;

  function SSLPrivateKeyProxy(receiver) {
    this.receiver_ = receiver;
  }
  SSLPrivateKeyPtr.prototype.sign = function() {
    return SSLPrivateKeyProxy.prototype.sign
        .apply(this.ptr.getProxy(), arguments);
  };

  SSLPrivateKeyProxy.prototype.sign = function(algorithm, input) {
    var params_ = new SSLPrivateKey_Sign_Params();
    params_.algorithm = algorithm;
    params_.input = input;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSSLPrivateKey_Sign_Name,
          codec.align(SSLPrivateKey_Sign_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SSLPrivateKey_Sign_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SSLPrivateKey_Sign_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SSLPrivateKeyStub(delegate) {
    this.delegate_ = delegate;
  }
  SSLPrivateKeyStub.prototype.sign = function(algorithm, input) {
    return this.delegate_ && this.delegate_.sign && this.delegate_.sign(algorithm, input);
  }

  SSLPrivateKeyStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SSLPrivateKeyStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSSLPrivateKey_Sign_Name:
      var params = reader.decodeStruct(SSLPrivateKey_Sign_Params);
      this.sign(params.algorithm, params.input).then(function(response) {
        var responseParams =
            new SSLPrivateKey_Sign_ResponseParams();
        responseParams.netError = response.netError;
        responseParams.signature = response.signature;
        var builder = new codec.MessageV1Builder(
            kSSLPrivateKey_Sign_Name,
            codec.align(SSLPrivateKey_Sign_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SSLPrivateKey_Sign_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSSLPrivateKeyRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSSLPrivateKey_Sign_Name:
        if (message.expectsResponse())
          paramsClass = SSLPrivateKey_Sign_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSSLPrivateKeyResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSSLPrivateKey_Sign_Name:
        if (message.isResponse())
          paramsClass = SSLPrivateKey_Sign_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SSLPrivateKey = {
    name: 'network.mojom.SSLPrivateKey',
    kVersion: 0,
    ptrClass: SSLPrivateKeyPtr,
    proxyClass: SSLPrivateKeyProxy,
    stubClass: SSLPrivateKeyStub,
    validateRequest: validateSSLPrivateKeyRequest,
    validateResponse: validateSSLPrivateKeyResponse,
  };
  SSLPrivateKeyStub.prototype.validator = validateSSLPrivateKeyRequest;
  SSLPrivateKeyProxy.prototype.validator = validateSSLPrivateKeyResponse;
  var kAuthChallengeResponder_OnAuthCredentials_Name = 0;

  function AuthChallengeResponderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AuthChallengeResponder,
                                                   handleOrPtrInfo);
  }

  function AuthChallengeResponderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AuthChallengeResponder, associatedInterfacePtrInfo);
  }

  AuthChallengeResponderAssociatedPtr.prototype =
      Object.create(AuthChallengeResponderPtr.prototype);
  AuthChallengeResponderAssociatedPtr.prototype.constructor =
      AuthChallengeResponderAssociatedPtr;

  function AuthChallengeResponderProxy(receiver) {
    this.receiver_ = receiver;
  }
  AuthChallengeResponderPtr.prototype.onAuthCredentials = function() {
    return AuthChallengeResponderProxy.prototype.onAuthCredentials
        .apply(this.ptr.getProxy(), arguments);
  };

  AuthChallengeResponderProxy.prototype.onAuthCredentials = function(credentials) {
    var params_ = new AuthChallengeResponder_OnAuthCredentials_Params();
    params_.credentials = credentials;
    var builder = new codec.MessageV0Builder(
        kAuthChallengeResponder_OnAuthCredentials_Name,
        codec.align(AuthChallengeResponder_OnAuthCredentials_Params.encodedSize));
    builder.encodeStruct(AuthChallengeResponder_OnAuthCredentials_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AuthChallengeResponderStub(delegate) {
    this.delegate_ = delegate;
  }
  AuthChallengeResponderStub.prototype.onAuthCredentials = function(credentials) {
    return this.delegate_ && this.delegate_.onAuthCredentials && this.delegate_.onAuthCredentials(credentials);
  }

  AuthChallengeResponderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthChallengeResponder_OnAuthCredentials_Name:
      var params = reader.decodeStruct(AuthChallengeResponder_OnAuthCredentials_Params);
      this.onAuthCredentials(params.credentials);
      return true;
    default:
      return false;
    }
  };

  AuthChallengeResponderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAuthChallengeResponderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAuthChallengeResponder_OnAuthCredentials_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AuthChallengeResponder_OnAuthCredentials_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAuthChallengeResponderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AuthChallengeResponder = {
    name: 'network.mojom.AuthChallengeResponder',
    kVersion: 0,
    ptrClass: AuthChallengeResponderPtr,
    proxyClass: AuthChallengeResponderProxy,
    stubClass: AuthChallengeResponderStub,
    validateRequest: validateAuthChallengeResponderRequest,
    validateResponse: null,
  };
  AuthChallengeResponderStub.prototype.validator = validateAuthChallengeResponderRequest;
  AuthChallengeResponderProxy.prototype.validator = null;
  var kClientCertificateResponder_ContinueWithCertificate_Name = 0;
  var kClientCertificateResponder_ContinueWithoutCertificate_Name = 1;
  var kClientCertificateResponder_CancelRequest_Name = 2;

  function ClientCertificateResponderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ClientCertificateResponder,
                                                   handleOrPtrInfo);
  }

  function ClientCertificateResponderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ClientCertificateResponder, associatedInterfacePtrInfo);
  }

  ClientCertificateResponderAssociatedPtr.prototype =
      Object.create(ClientCertificateResponderPtr.prototype);
  ClientCertificateResponderAssociatedPtr.prototype.constructor =
      ClientCertificateResponderAssociatedPtr;

  function ClientCertificateResponderProxy(receiver) {
    this.receiver_ = receiver;
  }
  ClientCertificateResponderPtr.prototype.continueWithCertificate = function() {
    return ClientCertificateResponderProxy.prototype.continueWithCertificate
        .apply(this.ptr.getProxy(), arguments);
  };

  ClientCertificateResponderProxy.prototype.continueWithCertificate = function(x509Certificate, providerName, algorithmPreferences, sslPrivateKey) {
    var params_ = new ClientCertificateResponder_ContinueWithCertificate_Params();
    params_.x509Certificate = x509Certificate;
    params_.providerName = providerName;
    params_.algorithmPreferences = algorithmPreferences;
    params_.sslPrivateKey = sslPrivateKey;
    var builder = new codec.MessageV0Builder(
        kClientCertificateResponder_ContinueWithCertificate_Name,
        codec.align(ClientCertificateResponder_ContinueWithCertificate_Params.encodedSize));
    builder.encodeStruct(ClientCertificateResponder_ContinueWithCertificate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ClientCertificateResponderPtr.prototype.continueWithoutCertificate = function() {
    return ClientCertificateResponderProxy.prototype.continueWithoutCertificate
        .apply(this.ptr.getProxy(), arguments);
  };

  ClientCertificateResponderProxy.prototype.continueWithoutCertificate = function() {
    var params_ = new ClientCertificateResponder_ContinueWithoutCertificate_Params();
    var builder = new codec.MessageV0Builder(
        kClientCertificateResponder_ContinueWithoutCertificate_Name,
        codec.align(ClientCertificateResponder_ContinueWithoutCertificate_Params.encodedSize));
    builder.encodeStruct(ClientCertificateResponder_ContinueWithoutCertificate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ClientCertificateResponderPtr.prototype.cancelRequest = function() {
    return ClientCertificateResponderProxy.prototype.cancelRequest
        .apply(this.ptr.getProxy(), arguments);
  };

  ClientCertificateResponderProxy.prototype.cancelRequest = function() {
    var params_ = new ClientCertificateResponder_CancelRequest_Params();
    var builder = new codec.MessageV0Builder(
        kClientCertificateResponder_CancelRequest_Name,
        codec.align(ClientCertificateResponder_CancelRequest_Params.encodedSize));
    builder.encodeStruct(ClientCertificateResponder_CancelRequest_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ClientCertificateResponderStub(delegate) {
    this.delegate_ = delegate;
  }
  ClientCertificateResponderStub.prototype.continueWithCertificate = function(x509Certificate, providerName, algorithmPreferences, sslPrivateKey) {
    return this.delegate_ && this.delegate_.continueWithCertificate && this.delegate_.continueWithCertificate(x509Certificate, providerName, algorithmPreferences, sslPrivateKey);
  }
  ClientCertificateResponderStub.prototype.continueWithoutCertificate = function() {
    return this.delegate_ && this.delegate_.continueWithoutCertificate && this.delegate_.continueWithoutCertificate();
  }
  ClientCertificateResponderStub.prototype.cancelRequest = function() {
    return this.delegate_ && this.delegate_.cancelRequest && this.delegate_.cancelRequest();
  }

  ClientCertificateResponderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kClientCertificateResponder_ContinueWithCertificate_Name:
      var params = reader.decodeStruct(ClientCertificateResponder_ContinueWithCertificate_Params);
      this.continueWithCertificate(params.x509Certificate, params.providerName, params.algorithmPreferences, params.sslPrivateKey);
      return true;
    case kClientCertificateResponder_ContinueWithoutCertificate_Name:
      var params = reader.decodeStruct(ClientCertificateResponder_ContinueWithoutCertificate_Params);
      this.continueWithoutCertificate();
      return true;
    case kClientCertificateResponder_CancelRequest_Name:
      var params = reader.decodeStruct(ClientCertificateResponder_CancelRequest_Params);
      this.cancelRequest();
      return true;
    default:
      return false;
    }
  };

  ClientCertificateResponderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateClientCertificateResponderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kClientCertificateResponder_ContinueWithCertificate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ClientCertificateResponder_ContinueWithCertificate_Params;
      break;
      case kClientCertificateResponder_ContinueWithoutCertificate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ClientCertificateResponder_ContinueWithoutCertificate_Params;
      break;
      case kClientCertificateResponder_CancelRequest_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ClientCertificateResponder_CancelRequest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateClientCertificateResponderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ClientCertificateResponder = {
    name: 'network.mojom.ClientCertificateResponder',
    kVersion: 0,
    ptrClass: ClientCertificateResponderPtr,
    proxyClass: ClientCertificateResponderProxy,
    stubClass: ClientCertificateResponderStub,
    validateRequest: validateClientCertificateResponderRequest,
    validateResponse: null,
  };
  ClientCertificateResponderStub.prototype.validator = validateClientCertificateResponderRequest;
  ClientCertificateResponderProxy.prototype.validator = null;
  var kNetworkServiceClient_OnAuthRequired_Name = 0;
  var kNetworkServiceClient_OnCertificateRequested_Name = 1;
  var kNetworkServiceClient_OnSSLCertificateError_Name = 2;
  var kNetworkServiceClient_OnFileUploadRequested_Name = 3;
  var kNetworkServiceClient_OnCookieChange_Name = 4;
  var kNetworkServiceClient_OnCookiesRead_Name = 5;
  var kNetworkServiceClient_OnLoadingStateUpdate_Name = 6;
  var kNetworkServiceClient_OnDataUseUpdate_Name = 7;
  var kNetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Name = 8;
  var kNetworkServiceClient_OnFlaggedRequestCookies_Name = 9;
  var kNetworkServiceClient_OnFlaggedResponseCookies_Name = 10;

  function NetworkServiceClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkServiceClient,
                                                   handleOrPtrInfo);
  }

  function NetworkServiceClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkServiceClient, associatedInterfacePtrInfo);
  }

  NetworkServiceClientAssociatedPtr.prototype =
      Object.create(NetworkServiceClientPtr.prototype);
  NetworkServiceClientAssociatedPtr.prototype.constructor =
      NetworkServiceClientAssociatedPtr;

  function NetworkServiceClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkServiceClientPtr.prototype.onAuthRequired = function() {
    return NetworkServiceClientProxy.prototype.onAuthRequired
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onAuthRequired = function(processId, routingId, requestId, url, firstAuthAttempt, authInfo, head, authChallengeResponder) {
    var params_ = new NetworkServiceClient_OnAuthRequired_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.requestId = requestId;
    params_.url = url;
    params_.firstAuthAttempt = firstAuthAttempt;
    params_.authInfo = authInfo;
    params_.head = head;
    params_.authChallengeResponder = authChallengeResponder;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnAuthRequired_Name,
        codec.align(NetworkServiceClient_OnAuthRequired_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnAuthRequired_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceClientPtr.prototype.onCertificateRequested = function() {
    return NetworkServiceClientProxy.prototype.onCertificateRequested
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onCertificateRequested = function(windowId, processId, routingId, requestId, certInfo, certResponder) {
    var params_ = new NetworkServiceClient_OnCertificateRequested_Params();
    params_.windowId = windowId;
    params_.processId = processId;
    params_.routingId = routingId;
    params_.requestId = requestId;
    params_.certInfo = certInfo;
    params_.certResponder = certResponder;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnCertificateRequested_Name,
        codec.align(NetworkServiceClient_OnCertificateRequested_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnCertificateRequested_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceClientPtr.prototype.onSSLCertificateError = function() {
    return NetworkServiceClientProxy.prototype.onSSLCertificateError
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onSSLCertificateError = function(processId, routingId, url, netError, sslInfo, fatal) {
    var params_ = new NetworkServiceClient_OnSSLCertificateError_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.url = url;
    params_.netError = netError;
    params_.sslInfo = sslInfo;
    params_.fatal = fatal;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceClient_OnSSLCertificateError_Name,
          codec.align(NetworkServiceClient_OnSSLCertificateError_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceClient_OnSSLCertificateError_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceClient_OnSSLCertificateError_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceClientPtr.prototype.onFileUploadRequested = function() {
    return NetworkServiceClientProxy.prototype.onFileUploadRequested
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onFileUploadRequested = function(processId, async, filePaths) {
    var params_ = new NetworkServiceClient_OnFileUploadRequested_Params();
    params_.processId = processId;
    params_.async = async;
    params_.filePaths = filePaths;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceClient_OnFileUploadRequested_Name,
          codec.align(NetworkServiceClient_OnFileUploadRequested_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceClient_OnFileUploadRequested_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceClient_OnFileUploadRequested_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceClientPtr.prototype.onCookieChange = function() {
    return NetworkServiceClientProxy.prototype.onCookieChange
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onCookieChange = function(processId, routingId, url, frameUrl, cookie, blockedByPolicy) {
    var params_ = new NetworkServiceClient_OnCookieChange_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.url = url;
    params_.frameUrl = frameUrl;
    params_.cookie = cookie;
    params_.blockedByPolicy = blockedByPolicy;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnCookieChange_Name,
        codec.align(NetworkServiceClient_OnCookieChange_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnCookieChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceClientPtr.prototype.onCookiesRead = function() {
    return NetworkServiceClientProxy.prototype.onCookiesRead
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onCookiesRead = function(processId, routingId, url, frameUrl, cookieList, blockedByPolicy) {
    var params_ = new NetworkServiceClient_OnCookiesRead_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.url = url;
    params_.frameUrl = frameUrl;
    params_.cookieList = cookieList;
    params_.blockedByPolicy = blockedByPolicy;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnCookiesRead_Name,
        codec.align(NetworkServiceClient_OnCookiesRead_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnCookiesRead_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceClientPtr.prototype.onLoadingStateUpdate = function() {
    return NetworkServiceClientProxy.prototype.onLoadingStateUpdate
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onLoadingStateUpdate = function(infos) {
    var params_ = new NetworkServiceClient_OnLoadingStateUpdate_Params();
    params_.infos = infos;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceClient_OnLoadingStateUpdate_Name,
          codec.align(NetworkServiceClient_OnLoadingStateUpdate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceClient_OnLoadingStateUpdate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceClient_OnLoadingStateUpdate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceClientPtr.prototype.onDataUseUpdate = function() {
    return NetworkServiceClientProxy.prototype.onDataUseUpdate
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onDataUseUpdate = function(networkTrafficAnnotationIdHash, recvBytes, sentBytes) {
    var params_ = new NetworkServiceClient_OnDataUseUpdate_Params();
    params_.networkTrafficAnnotationIdHash = networkTrafficAnnotationIdHash;
    params_.recvBytes = recvBytes;
    params_.sentBytes = sentBytes;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnDataUseUpdate_Name,
        codec.align(NetworkServiceClient_OnDataUseUpdate_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnDataUseUpdate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceClientPtr.prototype.onGenerateHttpNegotiateAuthToken = function() {
    return NetworkServiceClientProxy.prototype.onGenerateHttpNegotiateAuthToken
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onGenerateHttpNegotiateAuthToken = function(serverAuthToken, canDelegate, authNegotiateAndroidAccountType, spn) {
    var params_ = new NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params();
    params_.serverAuthToken = serverAuthToken;
    params_.canDelegate = canDelegate;
    params_.authNegotiateAndroidAccountType = authNegotiateAndroidAccountType;
    params_.spn = spn;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Name,
          codec.align(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceClientPtr.prototype.onFlaggedRequestCookies = function() {
    return NetworkServiceClientProxy.prototype.onFlaggedRequestCookies
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onFlaggedRequestCookies = function(processId, routingId, excludedCookies) {
    var params_ = new NetworkServiceClient_OnFlaggedRequestCookies_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.excludedCookies = excludedCookies;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnFlaggedRequestCookies_Name,
        codec.align(NetworkServiceClient_OnFlaggedRequestCookies_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnFlaggedRequestCookies_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceClientPtr.prototype.onFlaggedResponseCookies = function() {
    return NetworkServiceClientProxy.prototype.onFlaggedResponseCookies
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceClientProxy.prototype.onFlaggedResponseCookies = function(processId, routingId, excludedCookies) {
    var params_ = new NetworkServiceClient_OnFlaggedResponseCookies_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.excludedCookies = excludedCookies;
    var builder = new codec.MessageV0Builder(
        kNetworkServiceClient_OnFlaggedResponseCookies_Name,
        codec.align(NetworkServiceClient_OnFlaggedResponseCookies_Params.encodedSize));
    builder.encodeStruct(NetworkServiceClient_OnFlaggedResponseCookies_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkServiceClientStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkServiceClientStub.prototype.onAuthRequired = function(processId, routingId, requestId, url, firstAuthAttempt, authInfo, head, authChallengeResponder) {
    return this.delegate_ && this.delegate_.onAuthRequired && this.delegate_.onAuthRequired(processId, routingId, requestId, url, firstAuthAttempt, authInfo, head, authChallengeResponder);
  }
  NetworkServiceClientStub.prototype.onCertificateRequested = function(windowId, processId, routingId, requestId, certInfo, certResponder) {
    return this.delegate_ && this.delegate_.onCertificateRequested && this.delegate_.onCertificateRequested(windowId, processId, routingId, requestId, certInfo, certResponder);
  }
  NetworkServiceClientStub.prototype.onSSLCertificateError = function(processId, routingId, url, netError, sslInfo, fatal) {
    return this.delegate_ && this.delegate_.onSSLCertificateError && this.delegate_.onSSLCertificateError(processId, routingId, url, netError, sslInfo, fatal);
  }
  NetworkServiceClientStub.prototype.onFileUploadRequested = function(processId, async, filePaths) {
    return this.delegate_ && this.delegate_.onFileUploadRequested && this.delegate_.onFileUploadRequested(processId, async, filePaths);
  }
  NetworkServiceClientStub.prototype.onCookieChange = function(processId, routingId, url, frameUrl, cookie, blockedByPolicy) {
    return this.delegate_ && this.delegate_.onCookieChange && this.delegate_.onCookieChange(processId, routingId, url, frameUrl, cookie, blockedByPolicy);
  }
  NetworkServiceClientStub.prototype.onCookiesRead = function(processId, routingId, url, frameUrl, cookieList, blockedByPolicy) {
    return this.delegate_ && this.delegate_.onCookiesRead && this.delegate_.onCookiesRead(processId, routingId, url, frameUrl, cookieList, blockedByPolicy);
  }
  NetworkServiceClientStub.prototype.onLoadingStateUpdate = function(infos) {
    return this.delegate_ && this.delegate_.onLoadingStateUpdate && this.delegate_.onLoadingStateUpdate(infos);
  }
  NetworkServiceClientStub.prototype.onDataUseUpdate = function(networkTrafficAnnotationIdHash, recvBytes, sentBytes) {
    return this.delegate_ && this.delegate_.onDataUseUpdate && this.delegate_.onDataUseUpdate(networkTrafficAnnotationIdHash, recvBytes, sentBytes);
  }
  NetworkServiceClientStub.prototype.onGenerateHttpNegotiateAuthToken = function(serverAuthToken, canDelegate, authNegotiateAndroidAccountType, spn) {
    return this.delegate_ && this.delegate_.onGenerateHttpNegotiateAuthToken && this.delegate_.onGenerateHttpNegotiateAuthToken(serverAuthToken, canDelegate, authNegotiateAndroidAccountType, spn);
  }
  NetworkServiceClientStub.prototype.onFlaggedRequestCookies = function(processId, routingId, excludedCookies) {
    return this.delegate_ && this.delegate_.onFlaggedRequestCookies && this.delegate_.onFlaggedRequestCookies(processId, routingId, excludedCookies);
  }
  NetworkServiceClientStub.prototype.onFlaggedResponseCookies = function(processId, routingId, excludedCookies) {
    return this.delegate_ && this.delegate_.onFlaggedResponseCookies && this.delegate_.onFlaggedResponseCookies(processId, routingId, excludedCookies);
  }

  NetworkServiceClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkServiceClient_OnAuthRequired_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnAuthRequired_Params);
      this.onAuthRequired(params.processId, params.routingId, params.requestId, params.url, params.firstAuthAttempt, params.authInfo, params.head, params.authChallengeResponder);
      return true;
    case kNetworkServiceClient_OnCertificateRequested_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnCertificateRequested_Params);
      this.onCertificateRequested(params.windowId, params.processId, params.routingId, params.requestId, params.certInfo, params.certResponder);
      return true;
    case kNetworkServiceClient_OnCookieChange_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnCookieChange_Params);
      this.onCookieChange(params.processId, params.routingId, params.url, params.frameUrl, params.cookie, params.blockedByPolicy);
      return true;
    case kNetworkServiceClient_OnCookiesRead_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnCookiesRead_Params);
      this.onCookiesRead(params.processId, params.routingId, params.url, params.frameUrl, params.cookieList, params.blockedByPolicy);
      return true;
    case kNetworkServiceClient_OnDataUseUpdate_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnDataUseUpdate_Params);
      this.onDataUseUpdate(params.networkTrafficAnnotationIdHash, params.recvBytes, params.sentBytes);
      return true;
    case kNetworkServiceClient_OnFlaggedRequestCookies_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnFlaggedRequestCookies_Params);
      this.onFlaggedRequestCookies(params.processId, params.routingId, params.excludedCookies);
      return true;
    case kNetworkServiceClient_OnFlaggedResponseCookies_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnFlaggedResponseCookies_Params);
      this.onFlaggedResponseCookies(params.processId, params.routingId, params.excludedCookies);
      return true;
    default:
      return false;
    }
  };

  NetworkServiceClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkServiceClient_OnSSLCertificateError_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnSSLCertificateError_Params);
      this.onSSLCertificateError(params.processId, params.routingId, params.url, params.netError, params.sslInfo, params.fatal).then(function(response) {
        var responseParams =
            new NetworkServiceClient_OnSSLCertificateError_ResponseParams();
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kNetworkServiceClient_OnSSLCertificateError_Name,
            codec.align(NetworkServiceClient_OnSSLCertificateError_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceClient_OnSSLCertificateError_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceClient_OnFileUploadRequested_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnFileUploadRequested_Params);
      this.onFileUploadRequested(params.processId, params.async, params.filePaths).then(function(response) {
        var responseParams =
            new NetworkServiceClient_OnFileUploadRequested_ResponseParams();
        responseParams.netError = response.netError;
        responseParams.files = response.files;
        var builder = new codec.MessageV1Builder(
            kNetworkServiceClient_OnFileUploadRequested_Name,
            codec.align(NetworkServiceClient_OnFileUploadRequested_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceClient_OnFileUploadRequested_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceClient_OnLoadingStateUpdate_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnLoadingStateUpdate_Params);
      this.onLoadingStateUpdate(params.infos).then(function(response) {
        var responseParams =
            new NetworkServiceClient_OnLoadingStateUpdate_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkServiceClient_OnLoadingStateUpdate_Name,
            codec.align(NetworkServiceClient_OnLoadingStateUpdate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceClient_OnLoadingStateUpdate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Name:
      var params = reader.decodeStruct(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params);
      this.onGenerateHttpNegotiateAuthToken(params.serverAuthToken, params.canDelegate, params.authNegotiateAndroidAccountType, params.spn).then(function(response) {
        var responseParams =
            new NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams();
        responseParams.result = response.result;
        responseParams.authToken = response.authToken;
        var builder = new codec.MessageV1Builder(
            kNetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Name,
            codec.align(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetworkServiceClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkServiceClient_OnAuthRequired_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnAuthRequired_Params;
      break;
      case kNetworkServiceClient_OnCertificateRequested_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnCertificateRequested_Params;
      break;
      case kNetworkServiceClient_OnSSLCertificateError_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceClient_OnSSLCertificateError_Params;
      break;
      case kNetworkServiceClient_OnFileUploadRequested_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceClient_OnFileUploadRequested_Params;
      break;
      case kNetworkServiceClient_OnCookieChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnCookieChange_Params;
      break;
      case kNetworkServiceClient_OnCookiesRead_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnCookiesRead_Params;
      break;
      case kNetworkServiceClient_OnLoadingStateUpdate_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceClient_OnLoadingStateUpdate_Params;
      break;
      case kNetworkServiceClient_OnDataUseUpdate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnDataUseUpdate_Params;
      break;
      case kNetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Name:
        if (message.expectsResponse())
          paramsClass = NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Params;
      break;
      case kNetworkServiceClient_OnFlaggedRequestCookies_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnFlaggedRequestCookies_Params;
      break;
      case kNetworkServiceClient_OnFlaggedResponseCookies_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkServiceClient_OnFlaggedResponseCookies_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkServiceClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkServiceClient_OnSSLCertificateError_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceClient_OnSSLCertificateError_ResponseParams;
        break;
      case kNetworkServiceClient_OnFileUploadRequested_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceClient_OnFileUploadRequested_ResponseParams;
        break;
      case kNetworkServiceClient_OnLoadingStateUpdate_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceClient_OnLoadingStateUpdate_ResponseParams;
        break;
      case kNetworkServiceClient_OnGenerateHttpNegotiateAuthToken_Name:
        if (message.isResponse())
          paramsClass = NetworkServiceClient_OnGenerateHttpNegotiateAuthToken_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkServiceClient = {
    name: 'network.mojom.NetworkServiceClient',
    kVersion: 0,
    ptrClass: NetworkServiceClientPtr,
    proxyClass: NetworkServiceClientProxy,
    stubClass: NetworkServiceClientStub,
    validateRequest: validateNetworkServiceClientRequest,
    validateResponse: validateNetworkServiceClientResponse,
  };
  NetworkServiceClientStub.prototype.validator = validateNetworkServiceClientRequest;
  NetworkServiceClientProxy.prototype.validator = validateNetworkServiceClientResponse;
  var kNetworkService_SetClient_Name = 0;
  var kNetworkService_StartNetLog_Name = 1;
  var kNetworkService_SetSSLKeyLogFile_Name = 2;
  var kNetworkService_CreateNetworkContext_Name = 3;
  var kNetworkService_ConfigureStubHostResolver_Name = 4;
  var kNetworkService_DisableQuic_Name = 5;
  var kNetworkService_SetUpHttpAuth_Name = 6;
  var kNetworkService_ConfigureHttpAuthPrefs_Name = 7;
  var kNetworkService_SetRawHeadersAccess_Name = 8;
  var kNetworkService_SetMaxConnectionsPerProxy_Name = 9;
  var kNetworkService_GetNetworkChangeManager_Name = 10;
  var kNetworkService_GetNetworkQualityEstimatorManager_Name = 11;
  var kNetworkService_GetDnsConfigChangeManager_Name = 12;
  var kNetworkService_GetTotalNetworkUsages_Name = 13;
  var kNetworkService_GetNetworkList_Name = 14;
  var kNetworkService_UpdateCRLSet_Name = 15;
  var kNetworkService_OnCertDBChanged_Name = 16;
  var kNetworkService_AddCorbExceptionForPlugin_Name = 17;
  var kNetworkService_RemoveCorbExceptionForPlugin_Name = 18;
  var kNetworkService_AddExtraMimeTypesForCorb_Name = 19;
  var kNetworkService_OnMemoryPressure_Name = 20;
  var kNetworkService_OnApplicationStateChange_Name = 21;
  var kNetworkService_SetEnvironment_Name = 22;

  function NetworkServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkService,
                                                   handleOrPtrInfo);
  }

  function NetworkServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkService, associatedInterfacePtrInfo);
  }

  NetworkServiceAssociatedPtr.prototype =
      Object.create(NetworkServicePtr.prototype);
  NetworkServiceAssociatedPtr.prototype.constructor =
      NetworkServiceAssociatedPtr;

  function NetworkServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkServicePtr.prototype.setClient = function() {
    return NetworkServiceProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.setClient = function(client, params) {
    var params_ = new NetworkService_SetClient_Params();
    params_.client = client;
    params_.params = params;
    var builder = new codec.MessageV0Builder(
        kNetworkService_SetClient_Name,
        codec.align(NetworkService_SetClient_Params.encodedSize));
    builder.encodeStruct(NetworkService_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.startNetLog = function() {
    return NetworkServiceProxy.prototype.startNetLog
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.startNetLog = function(file, captureMode, constants) {
    var params_ = new NetworkService_StartNetLog_Params();
    params_.file = file;
    params_.captureMode = captureMode;
    params_.constants = constants;
    var builder = new codec.MessageV0Builder(
        kNetworkService_StartNetLog_Name,
        codec.align(NetworkService_StartNetLog_Params.encodedSize));
    builder.encodeStruct(NetworkService_StartNetLog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.setSSLKeyLogFile = function() {
    return NetworkServiceProxy.prototype.setSSLKeyLogFile
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.setSSLKeyLogFile = function(file) {
    var params_ = new NetworkService_SetSSLKeyLogFile_Params();
    params_.file = file;
    var builder = new codec.MessageV0Builder(
        kNetworkService_SetSSLKeyLogFile_Name,
        codec.align(NetworkService_SetSSLKeyLogFile_Params.encodedSize));
    builder.encodeStruct(NetworkService_SetSSLKeyLogFile_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.createNetworkContext = function() {
    return NetworkServiceProxy.prototype.createNetworkContext
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.createNetworkContext = function(context, params) {
    var params_ = new NetworkService_CreateNetworkContext_Params();
    params_.context = context;
    params_.params = params;
    var builder = new codec.MessageV0Builder(
        kNetworkService_CreateNetworkContext_Name,
        codec.align(NetworkService_CreateNetworkContext_Params.encodedSize));
    builder.encodeStruct(NetworkService_CreateNetworkContext_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.configureStubHostResolver = function() {
    return NetworkServiceProxy.prototype.configureStubHostResolver
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.configureStubHostResolver = function(stubResolverEnabled, dnsOverHttpsServers) {
    var params_ = new NetworkService_ConfigureStubHostResolver_Params();
    params_.stubResolverEnabled = stubResolverEnabled;
    params_.dnsOverHttpsServers = dnsOverHttpsServers;
    var builder = new codec.MessageV0Builder(
        kNetworkService_ConfigureStubHostResolver_Name,
        codec.align(NetworkService_ConfigureStubHostResolver_Params.encodedSize));
    builder.encodeStruct(NetworkService_ConfigureStubHostResolver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.disableQuic = function() {
    return NetworkServiceProxy.prototype.disableQuic
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.disableQuic = function() {
    var params_ = new NetworkService_DisableQuic_Params();
    var builder = new codec.MessageV0Builder(
        kNetworkService_DisableQuic_Name,
        codec.align(NetworkService_DisableQuic_Params.encodedSize));
    builder.encodeStruct(NetworkService_DisableQuic_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.setUpHttpAuth = function() {
    return NetworkServiceProxy.prototype.setUpHttpAuth
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.setUpHttpAuth = function(httpAuthStaticParams) {
    var params_ = new NetworkService_SetUpHttpAuth_Params();
    params_.httpAuthStaticParams = httpAuthStaticParams;
    var builder = new codec.MessageV0Builder(
        kNetworkService_SetUpHttpAuth_Name,
        codec.align(NetworkService_SetUpHttpAuth_Params.encodedSize));
    builder.encodeStruct(NetworkService_SetUpHttpAuth_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.configureHttpAuthPrefs = function() {
    return NetworkServiceProxy.prototype.configureHttpAuthPrefs
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.configureHttpAuthPrefs = function(httpAuthDynamicParams) {
    var params_ = new NetworkService_ConfigureHttpAuthPrefs_Params();
    params_.httpAuthDynamicParams = httpAuthDynamicParams;
    var builder = new codec.MessageV0Builder(
        kNetworkService_ConfigureHttpAuthPrefs_Name,
        codec.align(NetworkService_ConfigureHttpAuthPrefs_Params.encodedSize));
    builder.encodeStruct(NetworkService_ConfigureHttpAuthPrefs_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.setRawHeadersAccess = function() {
    return NetworkServiceProxy.prototype.setRawHeadersAccess
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.setRawHeadersAccess = function(processId, origins) {
    var params_ = new NetworkService_SetRawHeadersAccess_Params();
    params_.processId = processId;
    params_.origins = origins;
    var builder = new codec.MessageV0Builder(
        kNetworkService_SetRawHeadersAccess_Name,
        codec.align(NetworkService_SetRawHeadersAccess_Params.encodedSize));
    builder.encodeStruct(NetworkService_SetRawHeadersAccess_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.setMaxConnectionsPerProxy = function() {
    return NetworkServiceProxy.prototype.setMaxConnectionsPerProxy
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.setMaxConnectionsPerProxy = function(maxConnections) {
    var params_ = new NetworkService_SetMaxConnectionsPerProxy_Params();
    params_.maxConnections = maxConnections;
    var builder = new codec.MessageV0Builder(
        kNetworkService_SetMaxConnectionsPerProxy_Name,
        codec.align(NetworkService_SetMaxConnectionsPerProxy_Params.encodedSize));
    builder.encodeStruct(NetworkService_SetMaxConnectionsPerProxy_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.getNetworkChangeManager = function() {
    return NetworkServiceProxy.prototype.getNetworkChangeManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.getNetworkChangeManager = function(networkChangeManager) {
    var params_ = new NetworkService_GetNetworkChangeManager_Params();
    params_.networkChangeManager = networkChangeManager;
    var builder = new codec.MessageV0Builder(
        kNetworkService_GetNetworkChangeManager_Name,
        codec.align(NetworkService_GetNetworkChangeManager_Params.encodedSize));
    builder.encodeStruct(NetworkService_GetNetworkChangeManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.getNetworkQualityEstimatorManager = function() {
    return NetworkServiceProxy.prototype.getNetworkQualityEstimatorManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.getNetworkQualityEstimatorManager = function(networkQualityEstimatorManager) {
    var params_ = new NetworkService_GetNetworkQualityEstimatorManager_Params();
    params_.networkQualityEstimatorManager = networkQualityEstimatorManager;
    var builder = new codec.MessageV0Builder(
        kNetworkService_GetNetworkQualityEstimatorManager_Name,
        codec.align(NetworkService_GetNetworkQualityEstimatorManager_Params.encodedSize));
    builder.encodeStruct(NetworkService_GetNetworkQualityEstimatorManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.getDnsConfigChangeManager = function() {
    return NetworkServiceProxy.prototype.getDnsConfigChangeManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.getDnsConfigChangeManager = function(dnsConfigChangeManager) {
    var params_ = new NetworkService_GetDnsConfigChangeManager_Params();
    params_.dnsConfigChangeManager = dnsConfigChangeManager;
    var builder = new codec.MessageV0Builder(
        kNetworkService_GetDnsConfigChangeManager_Name,
        codec.align(NetworkService_GetDnsConfigChangeManager_Params.encodedSize));
    builder.encodeStruct(NetworkService_GetDnsConfigChangeManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.getTotalNetworkUsages = function() {
    return NetworkServiceProxy.prototype.getTotalNetworkUsages
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.getTotalNetworkUsages = function() {
    var params_ = new NetworkService_GetTotalNetworkUsages_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkService_GetTotalNetworkUsages_Name,
          codec.align(NetworkService_GetTotalNetworkUsages_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkService_GetTotalNetworkUsages_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkService_GetTotalNetworkUsages_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServicePtr.prototype.getNetworkList = function() {
    return NetworkServiceProxy.prototype.getNetworkList
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.getNetworkList = function(policy) {
    var params_ = new NetworkService_GetNetworkList_Params();
    params_.policy = policy;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkService_GetNetworkList_Name,
          codec.align(NetworkService_GetNetworkList_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkService_GetNetworkList_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkService_GetNetworkList_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServicePtr.prototype.updateCRLSet = function() {
    return NetworkServiceProxy.prototype.updateCRLSet
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.updateCRLSet = function(crlSet) {
    var params_ = new NetworkService_UpdateCRLSet_Params();
    params_.crlSet = crlSet;
    var builder = new codec.MessageV0Builder(
        kNetworkService_UpdateCRLSet_Name,
        codec.align(NetworkService_UpdateCRLSet_Params.encodedSize));
    builder.encodeStruct(NetworkService_UpdateCRLSet_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.onCertDBChanged = function() {
    return NetworkServiceProxy.prototype.onCertDBChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.onCertDBChanged = function() {
    var params_ = new NetworkService_OnCertDBChanged_Params();
    var builder = new codec.MessageV0Builder(
        kNetworkService_OnCertDBChanged_Name,
        codec.align(NetworkService_OnCertDBChanged_Params.encodedSize));
    builder.encodeStruct(NetworkService_OnCertDBChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.addCorbExceptionForPlugin = function() {
    return NetworkServiceProxy.prototype.addCorbExceptionForPlugin
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.addCorbExceptionForPlugin = function(processId) {
    var params_ = new NetworkService_AddCorbExceptionForPlugin_Params();
    params_.processId = processId;
    var builder = new codec.MessageV0Builder(
        kNetworkService_AddCorbExceptionForPlugin_Name,
        codec.align(NetworkService_AddCorbExceptionForPlugin_Params.encodedSize));
    builder.encodeStruct(NetworkService_AddCorbExceptionForPlugin_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.removeCorbExceptionForPlugin = function() {
    return NetworkServiceProxy.prototype.removeCorbExceptionForPlugin
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.removeCorbExceptionForPlugin = function(processId) {
    var params_ = new NetworkService_RemoveCorbExceptionForPlugin_Params();
    params_.processId = processId;
    var builder = new codec.MessageV0Builder(
        kNetworkService_RemoveCorbExceptionForPlugin_Name,
        codec.align(NetworkService_RemoveCorbExceptionForPlugin_Params.encodedSize));
    builder.encodeStruct(NetworkService_RemoveCorbExceptionForPlugin_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.addExtraMimeTypesForCorb = function() {
    return NetworkServiceProxy.prototype.addExtraMimeTypesForCorb
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.addExtraMimeTypesForCorb = function(mimeTypes) {
    var params_ = new NetworkService_AddExtraMimeTypesForCorb_Params();
    params_.mimeTypes = mimeTypes;
    var builder = new codec.MessageV0Builder(
        kNetworkService_AddExtraMimeTypesForCorb_Name,
        codec.align(NetworkService_AddExtraMimeTypesForCorb_Params.encodedSize));
    builder.encodeStruct(NetworkService_AddExtraMimeTypesForCorb_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.onMemoryPressure = function() {
    return NetworkServiceProxy.prototype.onMemoryPressure
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.onMemoryPressure = function(memoryPressureLevel) {
    var params_ = new NetworkService_OnMemoryPressure_Params();
    params_.memoryPressureLevel = memoryPressureLevel;
    var builder = new codec.MessageV0Builder(
        kNetworkService_OnMemoryPressure_Name,
        codec.align(NetworkService_OnMemoryPressure_Params.encodedSize));
    builder.encodeStruct(NetworkService_OnMemoryPressure_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.onApplicationStateChange = function() {
    return NetworkServiceProxy.prototype.onApplicationStateChange
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.onApplicationStateChange = function(state) {
    var params_ = new NetworkService_OnApplicationStateChange_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kNetworkService_OnApplicationStateChange_Name,
        codec.align(NetworkService_OnApplicationStateChange_Params.encodedSize));
    builder.encodeStruct(NetworkService_OnApplicationStateChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServicePtr.prototype.setEnvironment = function() {
    return NetworkServiceProxy.prototype.setEnvironment
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkServiceProxy.prototype.setEnvironment = function(environment) {
    var params_ = new NetworkService_SetEnvironment_Params();
    params_.environment = environment;
    var builder = new codec.MessageV0Builder(
        kNetworkService_SetEnvironment_Name,
        codec.align(NetworkService_SetEnvironment_Params.encodedSize));
    builder.encodeStruct(NetworkService_SetEnvironment_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkServiceStub.prototype.setClient = function(client, params) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client, params);
  }
  NetworkServiceStub.prototype.startNetLog = function(file, captureMode, constants) {
    return this.delegate_ && this.delegate_.startNetLog && this.delegate_.startNetLog(file, captureMode, constants);
  }
  NetworkServiceStub.prototype.setSSLKeyLogFile = function(file) {
    return this.delegate_ && this.delegate_.setSSLKeyLogFile && this.delegate_.setSSLKeyLogFile(file);
  }
  NetworkServiceStub.prototype.createNetworkContext = function(context, params) {
    return this.delegate_ && this.delegate_.createNetworkContext && this.delegate_.createNetworkContext(context, params);
  }
  NetworkServiceStub.prototype.configureStubHostResolver = function(stubResolverEnabled, dnsOverHttpsServers) {
    return this.delegate_ && this.delegate_.configureStubHostResolver && this.delegate_.configureStubHostResolver(stubResolverEnabled, dnsOverHttpsServers);
  }
  NetworkServiceStub.prototype.disableQuic = function() {
    return this.delegate_ && this.delegate_.disableQuic && this.delegate_.disableQuic();
  }
  NetworkServiceStub.prototype.setUpHttpAuth = function(httpAuthStaticParams) {
    return this.delegate_ && this.delegate_.setUpHttpAuth && this.delegate_.setUpHttpAuth(httpAuthStaticParams);
  }
  NetworkServiceStub.prototype.configureHttpAuthPrefs = function(httpAuthDynamicParams) {
    return this.delegate_ && this.delegate_.configureHttpAuthPrefs && this.delegate_.configureHttpAuthPrefs(httpAuthDynamicParams);
  }
  NetworkServiceStub.prototype.setRawHeadersAccess = function(processId, origins) {
    return this.delegate_ && this.delegate_.setRawHeadersAccess && this.delegate_.setRawHeadersAccess(processId, origins);
  }
  NetworkServiceStub.prototype.setMaxConnectionsPerProxy = function(maxConnections) {
    return this.delegate_ && this.delegate_.setMaxConnectionsPerProxy && this.delegate_.setMaxConnectionsPerProxy(maxConnections);
  }
  NetworkServiceStub.prototype.getNetworkChangeManager = function(networkChangeManager) {
    return this.delegate_ && this.delegate_.getNetworkChangeManager && this.delegate_.getNetworkChangeManager(networkChangeManager);
  }
  NetworkServiceStub.prototype.getNetworkQualityEstimatorManager = function(networkQualityEstimatorManager) {
    return this.delegate_ && this.delegate_.getNetworkQualityEstimatorManager && this.delegate_.getNetworkQualityEstimatorManager(networkQualityEstimatorManager);
  }
  NetworkServiceStub.prototype.getDnsConfigChangeManager = function(dnsConfigChangeManager) {
    return this.delegate_ && this.delegate_.getDnsConfigChangeManager && this.delegate_.getDnsConfigChangeManager(dnsConfigChangeManager);
  }
  NetworkServiceStub.prototype.getTotalNetworkUsages = function() {
    return this.delegate_ && this.delegate_.getTotalNetworkUsages && this.delegate_.getTotalNetworkUsages();
  }
  NetworkServiceStub.prototype.getNetworkList = function(policy) {
    return this.delegate_ && this.delegate_.getNetworkList && this.delegate_.getNetworkList(policy);
  }
  NetworkServiceStub.prototype.updateCRLSet = function(crlSet) {
    return this.delegate_ && this.delegate_.updateCRLSet && this.delegate_.updateCRLSet(crlSet);
  }
  NetworkServiceStub.prototype.onCertDBChanged = function() {
    return this.delegate_ && this.delegate_.onCertDBChanged && this.delegate_.onCertDBChanged();
  }
  NetworkServiceStub.prototype.addCorbExceptionForPlugin = function(processId) {
    return this.delegate_ && this.delegate_.addCorbExceptionForPlugin && this.delegate_.addCorbExceptionForPlugin(processId);
  }
  NetworkServiceStub.prototype.removeCorbExceptionForPlugin = function(processId) {
    return this.delegate_ && this.delegate_.removeCorbExceptionForPlugin && this.delegate_.removeCorbExceptionForPlugin(processId);
  }
  NetworkServiceStub.prototype.addExtraMimeTypesForCorb = function(mimeTypes) {
    return this.delegate_ && this.delegate_.addExtraMimeTypesForCorb && this.delegate_.addExtraMimeTypesForCorb(mimeTypes);
  }
  NetworkServiceStub.prototype.onMemoryPressure = function(memoryPressureLevel) {
    return this.delegate_ && this.delegate_.onMemoryPressure && this.delegate_.onMemoryPressure(memoryPressureLevel);
  }
  NetworkServiceStub.prototype.onApplicationStateChange = function(state) {
    return this.delegate_ && this.delegate_.onApplicationStateChange && this.delegate_.onApplicationStateChange(state);
  }
  NetworkServiceStub.prototype.setEnvironment = function(environment) {
    return this.delegate_ && this.delegate_.setEnvironment && this.delegate_.setEnvironment(environment);
  }

  NetworkServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkService_SetClient_Name:
      var params = reader.decodeStruct(NetworkService_SetClient_Params);
      this.setClient(params.client, params.params);
      return true;
    case kNetworkService_StartNetLog_Name:
      var params = reader.decodeStruct(NetworkService_StartNetLog_Params);
      this.startNetLog(params.file, params.captureMode, params.constants);
      return true;
    case kNetworkService_SetSSLKeyLogFile_Name:
      var params = reader.decodeStruct(NetworkService_SetSSLKeyLogFile_Params);
      this.setSSLKeyLogFile(params.file);
      return true;
    case kNetworkService_CreateNetworkContext_Name:
      var params = reader.decodeStruct(NetworkService_CreateNetworkContext_Params);
      this.createNetworkContext(params.context, params.params);
      return true;
    case kNetworkService_ConfigureStubHostResolver_Name:
      var params = reader.decodeStruct(NetworkService_ConfigureStubHostResolver_Params);
      this.configureStubHostResolver(params.stubResolverEnabled, params.dnsOverHttpsServers);
      return true;
    case kNetworkService_DisableQuic_Name:
      var params = reader.decodeStruct(NetworkService_DisableQuic_Params);
      this.disableQuic();
      return true;
    case kNetworkService_SetUpHttpAuth_Name:
      var params = reader.decodeStruct(NetworkService_SetUpHttpAuth_Params);
      this.setUpHttpAuth(params.httpAuthStaticParams);
      return true;
    case kNetworkService_ConfigureHttpAuthPrefs_Name:
      var params = reader.decodeStruct(NetworkService_ConfigureHttpAuthPrefs_Params);
      this.configureHttpAuthPrefs(params.httpAuthDynamicParams);
      return true;
    case kNetworkService_SetRawHeadersAccess_Name:
      var params = reader.decodeStruct(NetworkService_SetRawHeadersAccess_Params);
      this.setRawHeadersAccess(params.processId, params.origins);
      return true;
    case kNetworkService_SetMaxConnectionsPerProxy_Name:
      var params = reader.decodeStruct(NetworkService_SetMaxConnectionsPerProxy_Params);
      this.setMaxConnectionsPerProxy(params.maxConnections);
      return true;
    case kNetworkService_GetNetworkChangeManager_Name:
      var params = reader.decodeStruct(NetworkService_GetNetworkChangeManager_Params);
      this.getNetworkChangeManager(params.networkChangeManager);
      return true;
    case kNetworkService_GetNetworkQualityEstimatorManager_Name:
      var params = reader.decodeStruct(NetworkService_GetNetworkQualityEstimatorManager_Params);
      this.getNetworkQualityEstimatorManager(params.networkQualityEstimatorManager);
      return true;
    case kNetworkService_GetDnsConfigChangeManager_Name:
      var params = reader.decodeStruct(NetworkService_GetDnsConfigChangeManager_Params);
      this.getDnsConfigChangeManager(params.dnsConfigChangeManager);
      return true;
    case kNetworkService_UpdateCRLSet_Name:
      var params = reader.decodeStruct(NetworkService_UpdateCRLSet_Params);
      this.updateCRLSet(params.crlSet);
      return true;
    case kNetworkService_OnCertDBChanged_Name:
      var params = reader.decodeStruct(NetworkService_OnCertDBChanged_Params);
      this.onCertDBChanged();
      return true;
    case kNetworkService_AddCorbExceptionForPlugin_Name:
      var params = reader.decodeStruct(NetworkService_AddCorbExceptionForPlugin_Params);
      this.addCorbExceptionForPlugin(params.processId);
      return true;
    case kNetworkService_RemoveCorbExceptionForPlugin_Name:
      var params = reader.decodeStruct(NetworkService_RemoveCorbExceptionForPlugin_Params);
      this.removeCorbExceptionForPlugin(params.processId);
      return true;
    case kNetworkService_AddExtraMimeTypesForCorb_Name:
      var params = reader.decodeStruct(NetworkService_AddExtraMimeTypesForCorb_Params);
      this.addExtraMimeTypesForCorb(params.mimeTypes);
      return true;
    case kNetworkService_OnMemoryPressure_Name:
      var params = reader.decodeStruct(NetworkService_OnMemoryPressure_Params);
      this.onMemoryPressure(params.memoryPressureLevel);
      return true;
    case kNetworkService_OnApplicationStateChange_Name:
      var params = reader.decodeStruct(NetworkService_OnApplicationStateChange_Params);
      this.onApplicationStateChange(params.state);
      return true;
    case kNetworkService_SetEnvironment_Name:
      var params = reader.decodeStruct(NetworkService_SetEnvironment_Params);
      this.setEnvironment(params.environment);
      return true;
    default:
      return false;
    }
  };

  NetworkServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkService_GetTotalNetworkUsages_Name:
      var params = reader.decodeStruct(NetworkService_GetTotalNetworkUsages_Params);
      this.getTotalNetworkUsages().then(function(response) {
        var responseParams =
            new NetworkService_GetTotalNetworkUsages_ResponseParams();
        responseParams.totalNetworkUsages = response.totalNetworkUsages;
        var builder = new codec.MessageV1Builder(
            kNetworkService_GetTotalNetworkUsages_Name,
            codec.align(NetworkService_GetTotalNetworkUsages_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkService_GetTotalNetworkUsages_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkService_GetNetworkList_Name:
      var params = reader.decodeStruct(NetworkService_GetNetworkList_Params);
      this.getNetworkList(params.policy).then(function(response) {
        var responseParams =
            new NetworkService_GetNetworkList_ResponseParams();
        responseParams.networks = response.networks;
        var builder = new codec.MessageV1Builder(
            kNetworkService_GetNetworkList_Name,
            codec.align(NetworkService_GetNetworkList_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkService_GetNetworkList_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetworkServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkService_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_SetClient_Params;
      break;
      case kNetworkService_StartNetLog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_StartNetLog_Params;
      break;
      case kNetworkService_SetSSLKeyLogFile_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_SetSSLKeyLogFile_Params;
      break;
      case kNetworkService_CreateNetworkContext_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_CreateNetworkContext_Params;
      break;
      case kNetworkService_ConfigureStubHostResolver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_ConfigureStubHostResolver_Params;
      break;
      case kNetworkService_DisableQuic_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_DisableQuic_Params;
      break;
      case kNetworkService_SetUpHttpAuth_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_SetUpHttpAuth_Params;
      break;
      case kNetworkService_ConfigureHttpAuthPrefs_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_ConfigureHttpAuthPrefs_Params;
      break;
      case kNetworkService_SetRawHeadersAccess_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_SetRawHeadersAccess_Params;
      break;
      case kNetworkService_SetMaxConnectionsPerProxy_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_SetMaxConnectionsPerProxy_Params;
      break;
      case kNetworkService_GetNetworkChangeManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_GetNetworkChangeManager_Params;
      break;
      case kNetworkService_GetNetworkQualityEstimatorManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_GetNetworkQualityEstimatorManager_Params;
      break;
      case kNetworkService_GetDnsConfigChangeManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_GetDnsConfigChangeManager_Params;
      break;
      case kNetworkService_GetTotalNetworkUsages_Name:
        if (message.expectsResponse())
          paramsClass = NetworkService_GetTotalNetworkUsages_Params;
      break;
      case kNetworkService_GetNetworkList_Name:
        if (message.expectsResponse())
          paramsClass = NetworkService_GetNetworkList_Params;
      break;
      case kNetworkService_UpdateCRLSet_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_UpdateCRLSet_Params;
      break;
      case kNetworkService_OnCertDBChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_OnCertDBChanged_Params;
      break;
      case kNetworkService_AddCorbExceptionForPlugin_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_AddCorbExceptionForPlugin_Params;
      break;
      case kNetworkService_RemoveCorbExceptionForPlugin_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_RemoveCorbExceptionForPlugin_Params;
      break;
      case kNetworkService_AddExtraMimeTypesForCorb_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_AddExtraMimeTypesForCorb_Params;
      break;
      case kNetworkService_OnMemoryPressure_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_OnMemoryPressure_Params;
      break;
      case kNetworkService_OnApplicationStateChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_OnApplicationStateChange_Params;
      break;
      case kNetworkService_SetEnvironment_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_SetEnvironment_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkService_GetTotalNetworkUsages_Name:
        if (message.isResponse())
          paramsClass = NetworkService_GetTotalNetworkUsages_ResponseParams;
        break;
      case kNetworkService_GetNetworkList_Name:
        if (message.isResponse())
          paramsClass = NetworkService_GetNetworkList_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkService = {
    name: 'network.mojom.NetworkService',
    kVersion: 0,
    ptrClass: NetworkServicePtr,
    proxyClass: NetworkServiceProxy,
    stubClass: NetworkServiceStub,
    validateRequest: validateNetworkServiceRequest,
    validateResponse: validateNetworkServiceResponse,
  };
  NetworkServiceStub.prototype.validator = validateNetworkServiceRequest;
  NetworkServiceProxy.prototype.validator = validateNetworkServiceResponse;
  exports.LoadInfo = LoadInfo;
  exports.HttpAuthStaticParams = HttpAuthStaticParams;
  exports.HttpAuthDynamicParams = HttpAuthDynamicParams;
  exports.EnvironmentVariable = EnvironmentVariable;
  exports.NetworkServiceParams = NetworkServiceParams;
  exports.SSLPrivateKey = SSLPrivateKey;
  exports.SSLPrivateKeyPtr = SSLPrivateKeyPtr;
  exports.SSLPrivateKeyAssociatedPtr = SSLPrivateKeyAssociatedPtr;
  exports.AuthChallengeResponder = AuthChallengeResponder;
  exports.AuthChallengeResponderPtr = AuthChallengeResponderPtr;
  exports.AuthChallengeResponderAssociatedPtr = AuthChallengeResponderAssociatedPtr;
  exports.ClientCertificateResponder = ClientCertificateResponder;
  exports.ClientCertificateResponderPtr = ClientCertificateResponderPtr;
  exports.ClientCertificateResponderAssociatedPtr = ClientCertificateResponderAssociatedPtr;
  exports.NetworkServiceClient = NetworkServiceClient;
  exports.NetworkServiceClientPtr = NetworkServiceClientPtr;
  exports.NetworkServiceClientAssociatedPtr = NetworkServiceClientAssociatedPtr;
  exports.NetworkService = NetworkService;
  exports.NetworkServicePtr = NetworkServicePtr;
  exports.NetworkServiceAssociatedPtr = NetworkServiceAssociatedPtr;
})();