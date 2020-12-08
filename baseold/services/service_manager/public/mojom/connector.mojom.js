// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/service_manager/public/mojom/connector.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('serviceManager.mojom');
  var process_id$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/process_id.mojom', '../../../../mojo/public/mojom/base/process_id.mojom.js');
  }
  var token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/token.mojom', '../../../../mojo/public/mojom/base/token.mojom.js');
  }
  var constants$ =
      mojo.internal.exposeNamespace('serviceManager.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/service_manager/public/mojom/constants.mojom', 'constants.mojom.js');
  }
  var interface_provider$ =
      mojo.internal.exposeNamespace('serviceManager.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/service_manager/public/mojom/interface_provider.mojom', 'interface_provider.mojom.js');
  }
  var service_filter$ =
      mojo.internal.exposeNamespace('serviceManager.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/service_manager/public/mojom/service_filter.mojom', 'service_filter.mojom.js');
  }


  var ConnectResult = {};
  ConnectResult.SUCCEEDED = 0;
  ConnectResult.INVALID_ARGUMENT = ConnectResult.SUCCEEDED + 1;
  ConnectResult.ACCESS_DENIED = ConnectResult.INVALID_ARGUMENT + 1;
  ConnectResult.MIN_VALUE = 0,
  ConnectResult.MAX_VALUE = 2,

  ConnectResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ConnectResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BindInterfacePriority = {};
  BindInterfacePriority.kImportant = 0;
  BindInterfacePriority.kBestEffort = BindInterfacePriority.kImportant + 1;
  BindInterfacePriority.MIN_VALUE = 0,
  BindInterfacePriority.MAX_VALUE = 1,

  BindInterfacePriority.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  BindInterfacePriority.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Identity(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Identity.prototype.initDefaults_ = function() {
    this.name = null;
    this.instanceGroup = null;
    this.instanceId = null;
    this.globallyUniqueId = null;
  };
  Identity.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Identity.validate = function(messageValidator, offset) {
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


    // validate Identity.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Identity.instanceGroup
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, token$.Token, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Identity.instanceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, token$.Token, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Identity.globallyUniqueId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, token$.Token, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Identity.encodedSize = codec.kStructHeaderSize + 32;

  Identity.decode = function(decoder) {
    var packed;
    var val = new Identity();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.instanceGroup = decoder.decodeStructPointer(token$.Token);
    val.instanceId = decoder.decodeStructPointer(token$.Token);
    val.globallyUniqueId = decoder.decodeStructPointer(token$.Token);
    return val;
  };

  Identity.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Identity.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(token$.Token, val.instanceGroup);
    encoder.encodeStructPointer(token$.Token, val.instanceId);
    encoder.encodeStructPointer(token$.Token, val.globallyUniqueId);
  };
  function ServiceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceInfo.prototype.initDefaults_ = function() {
    this.sandboxType = null;
  };
  ServiceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceInfo.validate = function(messageValidator, offset) {
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


    // validate ServiceInfo.sandboxType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceInfo.encodedSize = codec.kStructHeaderSize + 8;

  ServiceInfo.decode = function(decoder) {
    var packed;
    var val = new ServiceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sandboxType = decoder.decodeStruct(codec.String);
    return val;
  };

  ServiceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.sandboxType);
  };
  function ProcessMetadata_SetPID_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessMetadata_SetPID_Params.prototype.initDefaults_ = function() {
    this.pid = null;
  };
  ProcessMetadata_SetPID_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessMetadata_SetPID_Params.validate = function(messageValidator, offset) {
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


    // validate ProcessMetadata_SetPID_Params.pid
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, process_id$.ProcessId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProcessMetadata_SetPID_Params.encodedSize = codec.kStructHeaderSize + 8;

  ProcessMetadata_SetPID_Params.decode = function(decoder) {
    var packed;
    var val = new ProcessMetadata_SetPID_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pid = decoder.decodeStructPointer(process_id$.ProcessId);
    return val;
  };

  ProcessMetadata_SetPID_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessMetadata_SetPID_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(process_id$.ProcessId, val.pid);
  };
  function Connector_BindInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_BindInterface_Params.prototype.initDefaults_ = function() {
    this.filter = null;
    this.interfaceName = null;
    this.interfacePipe = null;
    this.priority = 0;
  };
  Connector_BindInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_BindInterface_Params.validate = function(messageValidator, offset) {
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


    // validate Connector_BindInterface_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, service_filter$.ServiceFilter, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_BindInterface_Params.interfaceName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_BindInterface_Params.interfacePipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_BindInterface_Params.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, BindInterfacePriority);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_BindInterface_Params.encodedSize = codec.kStructHeaderSize + 24;

  Connector_BindInterface_Params.decode = function(decoder) {
    var packed;
    var val = new Connector_BindInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(service_filter$.ServiceFilter);
    val.interfaceName = decoder.decodeStruct(codec.String);
    val.interfacePipe = decoder.decodeStruct(codec.Handle);
    val.priority = decoder.decodeStruct(codec.Int32);
    return val;
  };

  Connector_BindInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_BindInterface_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(service_filter$.ServiceFilter, val.filter);
    encoder.encodeStruct(codec.String, val.interfaceName);
    encoder.encodeStruct(codec.Handle, val.interfacePipe);
    encoder.encodeStruct(codec.Int32, val.priority);
  };
  function Connector_BindInterface_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_BindInterface_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.identity = null;
  };
  Connector_BindInterface_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_BindInterface_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Connector_BindInterface_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ConnectResult);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_BindInterface_ResponseParams.identity
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Identity, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_BindInterface_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Connector_BindInterface_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Connector_BindInterface_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.identity = decoder.decodeStructPointer(Identity);
    return val;
  };

  Connector_BindInterface_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_BindInterface_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(Identity, val.identity);
  };
  function Connector_QueryService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_QueryService_Params.prototype.initDefaults_ = function() {
    this.serviceName = null;
  };
  Connector_QueryService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_QueryService_Params.validate = function(messageValidator, offset) {
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


    // validate Connector_QueryService_Params.serviceName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_QueryService_Params.encodedSize = codec.kStructHeaderSize + 8;

  Connector_QueryService_Params.decode = function(decoder) {
    var packed;
    var val = new Connector_QueryService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceName = decoder.decodeStruct(codec.String);
    return val;
  };

  Connector_QueryService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_QueryService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.serviceName);
  };
  function Connector_QueryService_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_QueryService_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  Connector_QueryService_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_QueryService_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Connector_QueryService_ResponseParams.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ServiceInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_QueryService_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Connector_QueryService_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Connector_QueryService_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(ServiceInfo);
    return val;
  };

  Connector_QueryService_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_QueryService_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ServiceInfo, val.info);
  };
  function Connector_WarmService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_WarmService_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  Connector_WarmService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_WarmService_Params.validate = function(messageValidator, offset) {
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


    // validate Connector_WarmService_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, service_filter$.ServiceFilter, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_WarmService_Params.encodedSize = codec.kStructHeaderSize + 8;

  Connector_WarmService_Params.decode = function(decoder) {
    var packed;
    var val = new Connector_WarmService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(service_filter$.ServiceFilter);
    return val;
  };

  Connector_WarmService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_WarmService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(service_filter$.ServiceFilter, val.filter);
  };
  function Connector_WarmService_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_WarmService_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.identity = null;
  };
  Connector_WarmService_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_WarmService_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Connector_WarmService_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ConnectResult);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_WarmService_ResponseParams.identity
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Identity, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_WarmService_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Connector_WarmService_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Connector_WarmService_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.identity = decoder.decodeStructPointer(Identity);
    return val;
  };

  Connector_WarmService_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_WarmService_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(Identity, val.identity);
  };
  function Connector_RegisterServiceInstance_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_RegisterServiceInstance_Params.prototype.initDefaults_ = function() {
    this.identity = null;
    this.service = null;
    this.metadataReceiver = new bindings.InterfaceRequest();
  };
  Connector_RegisterServiceInstance_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_RegisterServiceInstance_Params.validate = function(messageValidator, offset) {
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


    // validate Connector_RegisterServiceInstance_Params.identity
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Identity, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_RegisterServiceInstance_Params.service
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_RegisterServiceInstance_Params.metadataReceiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 12, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_RegisterServiceInstance_Params.encodedSize = codec.kStructHeaderSize + 16;

  Connector_RegisterServiceInstance_Params.decode = function(decoder) {
    var packed;
    var val = new Connector_RegisterServiceInstance_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.identity = decoder.decodeStructPointer(Identity);
    val.service = decoder.decodeStruct(codec.Handle);
    val.metadataReceiver = decoder.decodeStruct(codec.NullableInterfaceRequest);
    return val;
  };

  Connector_RegisterServiceInstance_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_RegisterServiceInstance_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Identity, val.identity);
    encoder.encodeStruct(codec.Handle, val.service);
    encoder.encodeStruct(codec.NullableInterfaceRequest, val.metadataReceiver);
  };
  function Connector_RegisterServiceInstance_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_RegisterServiceInstance_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  Connector_RegisterServiceInstance_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_RegisterServiceInstance_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Connector_RegisterServiceInstance_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ConnectResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_RegisterServiceInstance_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Connector_RegisterServiceInstance_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Connector_RegisterServiceInstance_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Connector_RegisterServiceInstance_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_RegisterServiceInstance_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Connector_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_Clone_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  Connector_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate Connector_Clone_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  Connector_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new Connector_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Connector_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Connector_FilterInterfaces_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Connector_FilterInterfaces_Params.prototype.initDefaults_ = function() {
    this.spec = null;
    this.source = null;
    this.sourceRequest = new bindings.InterfaceRequest();
    this.target = new interface_provider$.InterfaceProviderPtr();
  };
  Connector_FilterInterfaces_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Connector_FilterInterfaces_Params.validate = function(messageValidator, offset) {
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


    // validate Connector_FilterInterfaces_Params.spec
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_FilterInterfaces_Params.source
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Identity, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_FilterInterfaces_Params.sourceRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Connector_FilterInterfaces_Params.target
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 20, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Connector_FilterInterfaces_Params.encodedSize = codec.kStructHeaderSize + 32;

  Connector_FilterInterfaces_Params.decode = function(decoder) {
    var packed;
    var val = new Connector_FilterInterfaces_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.spec = decoder.decodeStruct(codec.String);
    val.source = decoder.decodeStructPointer(Identity);
    val.sourceRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.target = decoder.decodeStruct(new codec.Interface(interface_provider$.InterfaceProviderPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Connector_FilterInterfaces_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Connector_FilterInterfaces_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.spec);
    encoder.encodeStructPointer(Identity, val.source);
    encoder.encodeStruct(codec.InterfaceRequest, val.sourceRequest);
    encoder.encodeStruct(new codec.Interface(interface_provider$.InterfaceProviderPtr), val.target);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kProcessMetadata_SetPID_Name = 0;

  function ProcessMetadataPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProcessMetadata,
                                                   handleOrPtrInfo);
  }

  function ProcessMetadataAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProcessMetadata, associatedInterfacePtrInfo);
  }

  ProcessMetadataAssociatedPtr.prototype =
      Object.create(ProcessMetadataPtr.prototype);
  ProcessMetadataAssociatedPtr.prototype.constructor =
      ProcessMetadataAssociatedPtr;

  function ProcessMetadataProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProcessMetadataPtr.prototype.setPID = function() {
    return ProcessMetadataProxy.prototype.setPID
        .apply(this.ptr.getProxy(), arguments);
  };

  ProcessMetadataProxy.prototype.setPID = function(pid) {
    var params_ = new ProcessMetadata_SetPID_Params();
    params_.pid = pid;
    var builder = new codec.MessageV0Builder(
        kProcessMetadata_SetPID_Name,
        codec.align(ProcessMetadata_SetPID_Params.encodedSize));
    builder.encodeStruct(ProcessMetadata_SetPID_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ProcessMetadataStub(delegate) {
    this.delegate_ = delegate;
  }
  ProcessMetadataStub.prototype.setPID = function(pid) {
    return this.delegate_ && this.delegate_.setPID && this.delegate_.setPID(pid);
  }

  ProcessMetadataStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProcessMetadata_SetPID_Name:
      var params = reader.decodeStruct(ProcessMetadata_SetPID_Params);
      this.setPID(params.pid);
      return true;
    default:
      return false;
    }
  };

  ProcessMetadataStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateProcessMetadataRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProcessMetadata_SetPID_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ProcessMetadata_SetPID_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProcessMetadataResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ProcessMetadata = {
    name: 'service_manager.mojom.ProcessMetadata',
    kVersion: 0,
    ptrClass: ProcessMetadataPtr,
    proxyClass: ProcessMetadataProxy,
    stubClass: ProcessMetadataStub,
    validateRequest: validateProcessMetadataRequest,
    validateResponse: null,
  };
  ProcessMetadataStub.prototype.validator = validateProcessMetadataRequest;
  ProcessMetadataProxy.prototype.validator = null;
  var kConnector_BindInterface_Name = 0;
  var kConnector_QueryService_Name = 1;
  var kConnector_WarmService_Name = 2;
  var kConnector_RegisterServiceInstance_Name = 3;
  var kConnector_Clone_Name = 4;
  var kConnector_FilterInterfaces_Name = 5;

  function ConnectorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Connector,
                                                   handleOrPtrInfo);
  }

  function ConnectorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Connector, associatedInterfacePtrInfo);
  }

  ConnectorAssociatedPtr.prototype =
      Object.create(ConnectorPtr.prototype);
  ConnectorAssociatedPtr.prototype.constructor =
      ConnectorAssociatedPtr;

  function ConnectorProxy(receiver) {
    this.receiver_ = receiver;
  }
  ConnectorPtr.prototype.bindInterface = function() {
    return ConnectorProxy.prototype.bindInterface
        .apply(this.ptr.getProxy(), arguments);
  };

  ConnectorProxy.prototype.bindInterface = function(filter, interfaceName, interfacePipe, priority) {
    var params_ = new Connector_BindInterface_Params();
    params_.filter = filter;
    params_.interfaceName = interfaceName;
    params_.interfacePipe = interfacePipe;
    params_.priority = priority;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kConnector_BindInterface_Name,
          codec.align(Connector_BindInterface_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Connector_BindInterface_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Connector_BindInterface_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ConnectorPtr.prototype.queryService = function() {
    return ConnectorProxy.prototype.queryService
        .apply(this.ptr.getProxy(), arguments);
  };

  ConnectorProxy.prototype.queryService = function(serviceName) {
    var params_ = new Connector_QueryService_Params();
    params_.serviceName = serviceName;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kConnector_QueryService_Name,
          codec.align(Connector_QueryService_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Connector_QueryService_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Connector_QueryService_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ConnectorPtr.prototype.warmService = function() {
    return ConnectorProxy.prototype.warmService
        .apply(this.ptr.getProxy(), arguments);
  };

  ConnectorProxy.prototype.warmService = function(filter) {
    var params_ = new Connector_WarmService_Params();
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kConnector_WarmService_Name,
          codec.align(Connector_WarmService_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Connector_WarmService_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Connector_WarmService_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ConnectorPtr.prototype.registerServiceInstance = function() {
    return ConnectorProxy.prototype.registerServiceInstance
        .apply(this.ptr.getProxy(), arguments);
  };

  ConnectorProxy.prototype.registerServiceInstance = function(identity, service, metadataReceiver) {
    var params_ = new Connector_RegisterServiceInstance_Params();
    params_.identity = identity;
    params_.service = service;
    params_.metadataReceiver = metadataReceiver;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kConnector_RegisterServiceInstance_Name,
          codec.align(Connector_RegisterServiceInstance_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Connector_RegisterServiceInstance_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Connector_RegisterServiceInstance_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ConnectorPtr.prototype.clone = function() {
    return ConnectorProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  ConnectorProxy.prototype.clone = function(request) {
    var params_ = new Connector_Clone_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kConnector_Clone_Name,
        codec.align(Connector_Clone_Params.encodedSize));
    builder.encodeStruct(Connector_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConnectorPtr.prototype.filterInterfaces = function() {
    return ConnectorProxy.prototype.filterInterfaces
        .apply(this.ptr.getProxy(), arguments);
  };

  ConnectorProxy.prototype.filterInterfaces = function(spec, source, sourceRequest, target) {
    var params_ = new Connector_FilterInterfaces_Params();
    params_.spec = spec;
    params_.source = source;
    params_.sourceRequest = sourceRequest;
    params_.target = target;
    var builder = new codec.MessageV0Builder(
        kConnector_FilterInterfaces_Name,
        codec.align(Connector_FilterInterfaces_Params.encodedSize));
    builder.encodeStruct(Connector_FilterInterfaces_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ConnectorStub(delegate) {
    this.delegate_ = delegate;
  }
  ConnectorStub.prototype.bindInterface = function(filter, interfaceName, interfacePipe, priority) {
    return this.delegate_ && this.delegate_.bindInterface && this.delegate_.bindInterface(filter, interfaceName, interfacePipe, priority);
  }
  ConnectorStub.prototype.queryService = function(serviceName) {
    return this.delegate_ && this.delegate_.queryService && this.delegate_.queryService(serviceName);
  }
  ConnectorStub.prototype.warmService = function(filter) {
    return this.delegate_ && this.delegate_.warmService && this.delegate_.warmService(filter);
  }
  ConnectorStub.prototype.registerServiceInstance = function(identity, service, metadataReceiver) {
    return this.delegate_ && this.delegate_.registerServiceInstance && this.delegate_.registerServiceInstance(identity, service, metadataReceiver);
  }
  ConnectorStub.prototype.clone = function(request) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(request);
  }
  ConnectorStub.prototype.filterInterfaces = function(spec, source, sourceRequest, target) {
    return this.delegate_ && this.delegate_.filterInterfaces && this.delegate_.filterInterfaces(spec, source, sourceRequest, target);
  }

  ConnectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kConnector_Clone_Name:
      var params = reader.decodeStruct(Connector_Clone_Params);
      this.clone(params.request);
      return true;
    case kConnector_FilterInterfaces_Name:
      var params = reader.decodeStruct(Connector_FilterInterfaces_Params);
      this.filterInterfaces(params.spec, params.source, params.sourceRequest, params.target);
      return true;
    default:
      return false;
    }
  };

  ConnectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kConnector_BindInterface_Name:
      var params = reader.decodeStruct(Connector_BindInterface_Params);
      this.bindInterface(params.filter, params.interfaceName, params.interfacePipe, params.priority).then(function(response) {
        var responseParams =
            new Connector_BindInterface_ResponseParams();
        responseParams.result = response.result;
        responseParams.identity = response.identity;
        var builder = new codec.MessageV1Builder(
            kConnector_BindInterface_Name,
            codec.align(Connector_BindInterface_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Connector_BindInterface_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kConnector_QueryService_Name:
      var params = reader.decodeStruct(Connector_QueryService_Params);
      this.queryService(params.serviceName).then(function(response) {
        var responseParams =
            new Connector_QueryService_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageV1Builder(
            kConnector_QueryService_Name,
            codec.align(Connector_QueryService_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Connector_QueryService_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kConnector_WarmService_Name:
      var params = reader.decodeStruct(Connector_WarmService_Params);
      this.warmService(params.filter).then(function(response) {
        var responseParams =
            new Connector_WarmService_ResponseParams();
        responseParams.result = response.result;
        responseParams.identity = response.identity;
        var builder = new codec.MessageV1Builder(
            kConnector_WarmService_Name,
            codec.align(Connector_WarmService_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Connector_WarmService_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kConnector_RegisterServiceInstance_Name:
      var params = reader.decodeStruct(Connector_RegisterServiceInstance_Params);
      this.registerServiceInstance(params.identity, params.service, params.metadataReceiver).then(function(response) {
        var responseParams =
            new Connector_RegisterServiceInstance_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kConnector_RegisterServiceInstance_Name,
            codec.align(Connector_RegisterServiceInstance_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Connector_RegisterServiceInstance_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateConnectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kConnector_BindInterface_Name:
        if (message.expectsResponse())
          paramsClass = Connector_BindInterface_Params;
      break;
      case kConnector_QueryService_Name:
        if (message.expectsResponse())
          paramsClass = Connector_QueryService_Params;
      break;
      case kConnector_WarmService_Name:
        if (message.expectsResponse())
          paramsClass = Connector_WarmService_Params;
      break;
      case kConnector_RegisterServiceInstance_Name:
        if (message.expectsResponse())
          paramsClass = Connector_RegisterServiceInstance_Params;
      break;
      case kConnector_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Connector_Clone_Params;
      break;
      case kConnector_FilterInterfaces_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Connector_FilterInterfaces_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateConnectorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kConnector_BindInterface_Name:
        if (message.isResponse())
          paramsClass = Connector_BindInterface_ResponseParams;
        break;
      case kConnector_QueryService_Name:
        if (message.isResponse())
          paramsClass = Connector_QueryService_ResponseParams;
        break;
      case kConnector_WarmService_Name:
        if (message.isResponse())
          paramsClass = Connector_WarmService_ResponseParams;
        break;
      case kConnector_RegisterServiceInstance_Name:
        if (message.isResponse())
          paramsClass = Connector_RegisterServiceInstance_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Connector = {
    name: 'service_manager.mojom.Connector',
    kVersion: 0,
    ptrClass: ConnectorPtr,
    proxyClass: ConnectorProxy,
    stubClass: ConnectorStub,
    validateRequest: validateConnectorRequest,
    validateResponse: validateConnectorResponse,
  };
  ConnectorStub.prototype.validator = validateConnectorRequest;
  ConnectorProxy.prototype.validator = validateConnectorResponse;
  exports.ConnectResult = ConnectResult;
  exports.BindInterfacePriority = BindInterfacePriority;
  exports.Identity = Identity;
  exports.ServiceInfo = ServiceInfo;
  exports.ProcessMetadata = ProcessMetadata;
  exports.ProcessMetadataPtr = ProcessMetadataPtr;
  exports.ProcessMetadataAssociatedPtr = ProcessMetadataAssociatedPtr;
  exports.Connector = Connector;
  exports.ConnectorPtr = ConnectorPtr;
  exports.ConnectorAssociatedPtr = ConnectorAssociatedPtr;
})();