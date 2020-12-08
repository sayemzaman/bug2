// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/devtools/devtools_agent.mojom';
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
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function DevToolsMessage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsMessage.prototype.initDefaults_ = function() {
    this.data = null;
  };
  DevToolsMessage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsMessage.validate = function(messageValidator, offset) {
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


    // validate DevToolsMessage.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsMessage.encodedSize = codec.kStructHeaderSize + 16;

  DevToolsMessage.decode = function(decoder) {
    var packed;
    var val = new DevToolsMessage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  DevToolsMessage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsMessage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function DevToolsSessionState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsSessionState.prototype.initDefaults_ = function() {
    this.entries = null;
  };
  DevToolsSessionState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsSessionState.validate = function(messageValidator, offset) {
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


    // validate DevToolsSessionState.entries
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.NullableArrayOf(codec.Uint8), true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsSessionState.encodedSize = codec.kStructHeaderSize + 8;

  DevToolsSessionState.decode = function(decoder) {
    var packed;
    var val = new DevToolsSessionState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entries = decoder.decodeMapPointer(codec.String, new codec.NullableArrayOf(codec.Uint8));
    return val;
  };

  DevToolsSessionState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsSessionState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.NullableArrayOf(codec.Uint8), val.entries);
  };
  function DevToolsAgent_AttachDevToolsSession_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsAgent_AttachDevToolsSession_Params.prototype.initDefaults_ = function() {
    this.host = new associatedBindings.AssociatedInterfacePtrInfo();
    this.session = new associatedBindings.AssociatedInterfaceRequest();
    this.ioSession = new bindings.InterfaceRequest();
    this.reattachSessionState = null;
  };
  DevToolsAgent_AttachDevToolsSession_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsAgent_AttachDevToolsSession_Params.validate = function(messageValidator, offset) {
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


    // validate DevToolsAgent_AttachDevToolsSession_Params.host
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgent_AttachDevToolsSession_Params.session
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgent_AttachDevToolsSession_Params.ioSession
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgent_AttachDevToolsSession_Params.reattachSessionState
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, DevToolsSessionState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsAgent_AttachDevToolsSession_Params.encodedSize = codec.kStructHeaderSize + 24;

  DevToolsAgent_AttachDevToolsSession_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsAgent_AttachDevToolsSession_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    val.session = decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    val.ioSession = decoder.decodeStruct(codec.InterfaceRequest);
    val.reattachSessionState = decoder.decodeStructPointer(DevToolsSessionState);
    return val;
  };

  DevToolsAgent_AttachDevToolsSession_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsAgent_AttachDevToolsSession_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.host);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.session);
    encoder.encodeStruct(codec.InterfaceRequest, val.ioSession);
    encoder.encodeStructPointer(DevToolsSessionState, val.reattachSessionState);
  };
  function DevToolsAgent_InspectElement_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsAgent_InspectElement_Params.prototype.initDefaults_ = function() {
    this.point = null;
  };
  DevToolsAgent_InspectElement_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsAgent_InspectElement_Params.validate = function(messageValidator, offset) {
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


    // validate DevToolsAgent_InspectElement_Params.point
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsAgent_InspectElement_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevToolsAgent_InspectElement_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsAgent_InspectElement_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.point = decoder.decodeStructPointer(geometry$.Point);
    return val;
  };

  DevToolsAgent_InspectElement_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsAgent_InspectElement_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Point, val.point);
  };
  function DevToolsAgent_ReportChildWorkers_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsAgent_ReportChildWorkers_Params.prototype.initDefaults_ = function() {
    this.report = false;
    this.waitForDebugger = false;
  };
  DevToolsAgent_ReportChildWorkers_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsAgent_ReportChildWorkers_Params.validate = function(messageValidator, offset) {
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

  DevToolsAgent_ReportChildWorkers_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevToolsAgent_ReportChildWorkers_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsAgent_ReportChildWorkers_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.report = (packed >> 0) & 1 ? true : false;
    val.waitForDebugger = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DevToolsAgent_ReportChildWorkers_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsAgent_ReportChildWorkers_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.report & 1) << 0
    packed |= (val.waitForDebugger & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DevToolsAgent_ReportChildWorkers_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsAgent_ReportChildWorkers_ResponseParams.prototype.initDefaults_ = function() {
  };
  DevToolsAgent_ReportChildWorkers_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsAgent_ReportChildWorkers_ResponseParams.validate = function(messageValidator, offset) {
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

  DevToolsAgent_ReportChildWorkers_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  DevToolsAgent_ReportChildWorkers_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DevToolsAgent_ReportChildWorkers_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DevToolsAgent_ReportChildWorkers_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsAgent_ReportChildWorkers_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function DevToolsAgentHost_ChildWorkerCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsAgentHost_ChildWorkerCreated_Params.prototype.initDefaults_ = function() {
    this.workerDevtoolsAgent = new DevToolsAgentPtr();
    this.workerDevtoolsAgentHost = new bindings.InterfaceRequest();
    this.waitingForDebugger = false;
    this.url = null;
    this.name = null;
    this.devtoolsWorkerToken = null;
  };
  DevToolsAgentHost_ChildWorkerCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsAgentHost_ChildWorkerCreated_Params.validate = function(messageValidator, offset) {
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


    // validate DevToolsAgentHost_ChildWorkerCreated_Params.workerDevtoolsAgent
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgentHost_ChildWorkerCreated_Params.workerDevtoolsAgentHost
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgentHost_ChildWorkerCreated_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgentHost_ChildWorkerCreated_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsAgentHost_ChildWorkerCreated_Params.devtoolsWorkerToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DevToolsAgentHost_ChildWorkerCreated_Params.encodedSize = codec.kStructHeaderSize + 40;

  DevToolsAgentHost_ChildWorkerCreated_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsAgentHost_ChildWorkerCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.workerDevtoolsAgent = decoder.decodeStruct(new codec.Interface(DevToolsAgentPtr));
    val.workerDevtoolsAgentHost = decoder.decodeStruct(codec.InterfaceRequest);
    packed = decoder.readUint8();
    val.waitingForDebugger = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.name = decoder.decodeStruct(codec.String);
    val.devtoolsWorkerToken = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  DevToolsAgentHost_ChildWorkerCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsAgentHost_ChildWorkerCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(DevToolsAgentPtr), val.workerDevtoolsAgent);
    encoder.encodeStruct(codec.InterfaceRequest, val.workerDevtoolsAgentHost);
    packed = 0;
    packed |= (val.waitingForDebugger & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.devtoolsWorkerToken);
  };
  function DevToolsSession_DispatchProtocolCommand_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsSession_DispatchProtocolCommand_Params.prototype.initDefaults_ = function() {
    this.callId = 0;
    this.method = null;
    this.message = null;
  };
  DevToolsSession_DispatchProtocolCommand_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsSession_DispatchProtocolCommand_Params.validate = function(messageValidator, offset) {
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



    // validate DevToolsSession_DispatchProtocolCommand_Params.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsSession_DispatchProtocolCommand_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, DevToolsMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsSession_DispatchProtocolCommand_Params.encodedSize = codec.kStructHeaderSize + 24;

  DevToolsSession_DispatchProtocolCommand_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsSession_DispatchProtocolCommand_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.callId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.method = decoder.decodeStruct(codec.String);
    val.message = decoder.decodeStructPointer(DevToolsMessage);
    return val;
  };

  DevToolsSession_DispatchProtocolCommand_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsSession_DispatchProtocolCommand_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.callId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStructPointer(DevToolsMessage, val.message);
  };
  function DevToolsSessionHost_DispatchProtocolResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsSessionHost_DispatchProtocolResponse_Params.prototype.initDefaults_ = function() {
    this.message = null;
    this.callId = 0;
    this.updates = null;
  };
  DevToolsSessionHost_DispatchProtocolResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsSessionHost_DispatchProtocolResponse_Params.validate = function(messageValidator, offset) {
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


    // validate DevToolsSessionHost_DispatchProtocolResponse_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DevToolsMessage, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DevToolsSessionHost_DispatchProtocolResponse_Params.updates
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, DevToolsSessionState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsSessionHost_DispatchProtocolResponse_Params.encodedSize = codec.kStructHeaderSize + 24;

  DevToolsSessionHost_DispatchProtocolResponse_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsSessionHost_DispatchProtocolResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStructPointer(DevToolsMessage);
    val.callId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.updates = decoder.decodeStructPointer(DevToolsSessionState);
    return val;
  };

  DevToolsSessionHost_DispatchProtocolResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsSessionHost_DispatchProtocolResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DevToolsMessage, val.message);
    encoder.encodeStruct(codec.Int32, val.callId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(DevToolsSessionState, val.updates);
  };
  function DevToolsSessionHost_DispatchProtocolNotification_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevToolsSessionHost_DispatchProtocolNotification_Params.prototype.initDefaults_ = function() {
    this.message = null;
    this.updates = null;
  };
  DevToolsSessionHost_DispatchProtocolNotification_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevToolsSessionHost_DispatchProtocolNotification_Params.validate = function(messageValidator, offset) {
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


    // validate DevToolsSessionHost_DispatchProtocolNotification_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DevToolsMessage, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DevToolsSessionHost_DispatchProtocolNotification_Params.updates
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, DevToolsSessionState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevToolsSessionHost_DispatchProtocolNotification_Params.encodedSize = codec.kStructHeaderSize + 16;

  DevToolsSessionHost_DispatchProtocolNotification_Params.decode = function(decoder) {
    var packed;
    var val = new DevToolsSessionHost_DispatchProtocolNotification_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStructPointer(DevToolsMessage);
    val.updates = decoder.decodeStructPointer(DevToolsSessionState);
    return val;
  };

  DevToolsSessionHost_DispatchProtocolNotification_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevToolsSessionHost_DispatchProtocolNotification_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DevToolsMessage, val.message);
    encoder.encodeStructPointer(DevToolsSessionState, val.updates);
  };
  var kDevToolsAgent_AttachDevToolsSession_Name = 0;
  var kDevToolsAgent_InspectElement_Name = 1;
  var kDevToolsAgent_ReportChildWorkers_Name = 2;

  function DevToolsAgentPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevToolsAgent,
                                                   handleOrPtrInfo);
  }

  function DevToolsAgentAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevToolsAgent, associatedInterfacePtrInfo);
  }

  DevToolsAgentAssociatedPtr.prototype =
      Object.create(DevToolsAgentPtr.prototype);
  DevToolsAgentAssociatedPtr.prototype.constructor =
      DevToolsAgentAssociatedPtr;

  function DevToolsAgentProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevToolsAgentPtr.prototype.attachDevToolsSession = function() {
    return DevToolsAgentProxy.prototype.attachDevToolsSession
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsAgentProxy.prototype.attachDevToolsSession = function(host, session, ioSession, reattachSessionState) {
    var params_ = new DevToolsAgent_AttachDevToolsSession_Params();
    params_.host = host;
    params_.session = session;
    params_.ioSession = ioSession;
    params_.reattachSessionState = reattachSessionState;
    var builder = new codec.MessageV2Builder(
        kDevToolsAgent_AttachDevToolsSession_Name,
        codec.align(DevToolsAgent_AttachDevToolsSession_Params.encodedSize));
    builder.setPayload(DevToolsAgent_AttachDevToolsSession_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevToolsAgentPtr.prototype.inspectElement = function() {
    return DevToolsAgentProxy.prototype.inspectElement
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsAgentProxy.prototype.inspectElement = function(point) {
    var params_ = new DevToolsAgent_InspectElement_Params();
    params_.point = point;
    var builder = new codec.MessageV0Builder(
        kDevToolsAgent_InspectElement_Name,
        codec.align(DevToolsAgent_InspectElement_Params.encodedSize));
    builder.encodeStruct(DevToolsAgent_InspectElement_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevToolsAgentPtr.prototype.reportChildWorkers = function() {
    return DevToolsAgentProxy.prototype.reportChildWorkers
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsAgentProxy.prototype.reportChildWorkers = function(report, waitForDebugger) {
    var params_ = new DevToolsAgent_ReportChildWorkers_Params();
    params_.report = report;
    params_.waitForDebugger = waitForDebugger;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevToolsAgent_ReportChildWorkers_Name,
          codec.align(DevToolsAgent_ReportChildWorkers_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DevToolsAgent_ReportChildWorkers_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DevToolsAgent_ReportChildWorkers_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function DevToolsAgentStub(delegate) {
    this.delegate_ = delegate;
  }
  DevToolsAgentStub.prototype.attachDevToolsSession = function(host, session, ioSession, reattachSessionState) {
    return this.delegate_ && this.delegate_.attachDevToolsSession && this.delegate_.attachDevToolsSession(host, session, ioSession, reattachSessionState);
  }
  DevToolsAgentStub.prototype.inspectElement = function(point) {
    return this.delegate_ && this.delegate_.inspectElement && this.delegate_.inspectElement(point);
  }
  DevToolsAgentStub.prototype.reportChildWorkers = function(report, waitForDebugger) {
    return this.delegate_ && this.delegate_.reportChildWorkers && this.delegate_.reportChildWorkers(report, waitForDebugger);
  }

  DevToolsAgentStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevToolsAgent_AttachDevToolsSession_Name:
      var params = reader.decodeStruct(DevToolsAgent_AttachDevToolsSession_Params);
      this.attachDevToolsSession(params.host, params.session, params.ioSession, params.reattachSessionState);
      return true;
    case kDevToolsAgent_InspectElement_Name:
      var params = reader.decodeStruct(DevToolsAgent_InspectElement_Params);
      this.inspectElement(params.point);
      return true;
    default:
      return false;
    }
  };

  DevToolsAgentStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevToolsAgent_ReportChildWorkers_Name:
      var params = reader.decodeStruct(DevToolsAgent_ReportChildWorkers_Params);
      this.reportChildWorkers(params.report, params.waitForDebugger).then(function(response) {
        var responseParams =
            new DevToolsAgent_ReportChildWorkers_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kDevToolsAgent_ReportChildWorkers_Name,
            codec.align(DevToolsAgent_ReportChildWorkers_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DevToolsAgent_ReportChildWorkers_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDevToolsAgentRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevToolsAgent_AttachDevToolsSession_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevToolsAgent_AttachDevToolsSession_Params;
      break;
      case kDevToolsAgent_InspectElement_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevToolsAgent_InspectElement_Params;
      break;
      case kDevToolsAgent_ReportChildWorkers_Name:
        if (message.expectsResponse())
          paramsClass = DevToolsAgent_ReportChildWorkers_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevToolsAgentResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDevToolsAgent_ReportChildWorkers_Name:
        if (message.isResponse())
          paramsClass = DevToolsAgent_ReportChildWorkers_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DevToolsAgent = {
    name: 'blink.mojom.DevToolsAgent',
    kVersion: 0,
    ptrClass: DevToolsAgentPtr,
    proxyClass: DevToolsAgentProxy,
    stubClass: DevToolsAgentStub,
    validateRequest: validateDevToolsAgentRequest,
    validateResponse: validateDevToolsAgentResponse,
  };
  DevToolsAgentStub.prototype.validator = validateDevToolsAgentRequest;
  DevToolsAgentProxy.prototype.validator = validateDevToolsAgentResponse;
  var kDevToolsAgentHost_ChildWorkerCreated_Name = 0;

  function DevToolsAgentHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevToolsAgentHost,
                                                   handleOrPtrInfo);
  }

  function DevToolsAgentHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevToolsAgentHost, associatedInterfacePtrInfo);
  }

  DevToolsAgentHostAssociatedPtr.prototype =
      Object.create(DevToolsAgentHostPtr.prototype);
  DevToolsAgentHostAssociatedPtr.prototype.constructor =
      DevToolsAgentHostAssociatedPtr;

  function DevToolsAgentHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevToolsAgentHostPtr.prototype.childWorkerCreated = function() {
    return DevToolsAgentHostProxy.prototype.childWorkerCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsAgentHostProxy.prototype.childWorkerCreated = function(workerDevtoolsAgent, workerDevtoolsAgentHost, url, name, devtoolsWorkerToken, waitingForDebugger) {
    var params_ = new DevToolsAgentHost_ChildWorkerCreated_Params();
    params_.workerDevtoolsAgent = workerDevtoolsAgent;
    params_.workerDevtoolsAgentHost = workerDevtoolsAgentHost;
    params_.url = url;
    params_.name = name;
    params_.devtoolsWorkerToken = devtoolsWorkerToken;
    params_.waitingForDebugger = waitingForDebugger;
    var builder = new codec.MessageV0Builder(
        kDevToolsAgentHost_ChildWorkerCreated_Name,
        codec.align(DevToolsAgentHost_ChildWorkerCreated_Params.encodedSize));
    builder.encodeStruct(DevToolsAgentHost_ChildWorkerCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DevToolsAgentHostStub(delegate) {
    this.delegate_ = delegate;
  }
  DevToolsAgentHostStub.prototype.childWorkerCreated = function(workerDevtoolsAgent, workerDevtoolsAgentHost, url, name, devtoolsWorkerToken, waitingForDebugger) {
    return this.delegate_ && this.delegate_.childWorkerCreated && this.delegate_.childWorkerCreated(workerDevtoolsAgent, workerDevtoolsAgentHost, url, name, devtoolsWorkerToken, waitingForDebugger);
  }

  DevToolsAgentHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevToolsAgentHost_ChildWorkerCreated_Name:
      var params = reader.decodeStruct(DevToolsAgentHost_ChildWorkerCreated_Params);
      this.childWorkerCreated(params.workerDevtoolsAgent, params.workerDevtoolsAgentHost, params.url, params.name, params.devtoolsWorkerToken, params.waitingForDebugger);
      return true;
    default:
      return false;
    }
  };

  DevToolsAgentHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDevToolsAgentHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevToolsAgentHost_ChildWorkerCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevToolsAgentHost_ChildWorkerCreated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevToolsAgentHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DevToolsAgentHost = {
    name: 'blink.mojom.DevToolsAgentHost',
    kVersion: 0,
    ptrClass: DevToolsAgentHostPtr,
    proxyClass: DevToolsAgentHostProxy,
    stubClass: DevToolsAgentHostStub,
    validateRequest: validateDevToolsAgentHostRequest,
    validateResponse: null,
  };
  DevToolsAgentHostStub.prototype.validator = validateDevToolsAgentHostRequest;
  DevToolsAgentHostProxy.prototype.validator = null;
  var kDevToolsSession_DispatchProtocolCommand_Name = 0;

  function DevToolsSessionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevToolsSession,
                                                   handleOrPtrInfo);
  }

  function DevToolsSessionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevToolsSession, associatedInterfacePtrInfo);
  }

  DevToolsSessionAssociatedPtr.prototype =
      Object.create(DevToolsSessionPtr.prototype);
  DevToolsSessionAssociatedPtr.prototype.constructor =
      DevToolsSessionAssociatedPtr;

  function DevToolsSessionProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevToolsSessionPtr.prototype.dispatchProtocolCommand = function() {
    return DevToolsSessionProxy.prototype.dispatchProtocolCommand
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsSessionProxy.prototype.dispatchProtocolCommand = function(callId, method, message) {
    var params_ = new DevToolsSession_DispatchProtocolCommand_Params();
    params_.callId = callId;
    params_.method = method;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kDevToolsSession_DispatchProtocolCommand_Name,
        codec.align(DevToolsSession_DispatchProtocolCommand_Params.encodedSize));
    builder.encodeStruct(DevToolsSession_DispatchProtocolCommand_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DevToolsSessionStub(delegate) {
    this.delegate_ = delegate;
  }
  DevToolsSessionStub.prototype.dispatchProtocolCommand = function(callId, method, message) {
    return this.delegate_ && this.delegate_.dispatchProtocolCommand && this.delegate_.dispatchProtocolCommand(callId, method, message);
  }

  DevToolsSessionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevToolsSession_DispatchProtocolCommand_Name:
      var params = reader.decodeStruct(DevToolsSession_DispatchProtocolCommand_Params);
      this.dispatchProtocolCommand(params.callId, params.method, params.message);
      return true;
    default:
      return false;
    }
  };

  DevToolsSessionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDevToolsSessionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevToolsSession_DispatchProtocolCommand_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevToolsSession_DispatchProtocolCommand_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevToolsSessionResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DevToolsSession = {
    name: 'blink.mojom.DevToolsSession',
    kVersion: 0,
    ptrClass: DevToolsSessionPtr,
    proxyClass: DevToolsSessionProxy,
    stubClass: DevToolsSessionStub,
    validateRequest: validateDevToolsSessionRequest,
    validateResponse: null,
  };
  DevToolsSessionStub.prototype.validator = validateDevToolsSessionRequest;
  DevToolsSessionProxy.prototype.validator = null;
  var kDevToolsSessionHost_DispatchProtocolResponse_Name = 0;
  var kDevToolsSessionHost_DispatchProtocolNotification_Name = 1;

  function DevToolsSessionHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevToolsSessionHost,
                                                   handleOrPtrInfo);
  }

  function DevToolsSessionHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevToolsSessionHost, associatedInterfacePtrInfo);
  }

  DevToolsSessionHostAssociatedPtr.prototype =
      Object.create(DevToolsSessionHostPtr.prototype);
  DevToolsSessionHostAssociatedPtr.prototype.constructor =
      DevToolsSessionHostAssociatedPtr;

  function DevToolsSessionHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevToolsSessionHostPtr.prototype.dispatchProtocolResponse = function() {
    return DevToolsSessionHostProxy.prototype.dispatchProtocolResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsSessionHostProxy.prototype.dispatchProtocolResponse = function(message, callId, updates) {
    var params_ = new DevToolsSessionHost_DispatchProtocolResponse_Params();
    params_.message = message;
    params_.callId = callId;
    params_.updates = updates;
    var builder = new codec.MessageV0Builder(
        kDevToolsSessionHost_DispatchProtocolResponse_Name,
        codec.align(DevToolsSessionHost_DispatchProtocolResponse_Params.encodedSize));
    builder.encodeStruct(DevToolsSessionHost_DispatchProtocolResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevToolsSessionHostPtr.prototype.dispatchProtocolNotification = function() {
    return DevToolsSessionHostProxy.prototype.dispatchProtocolNotification
        .apply(this.ptr.getProxy(), arguments);
  };

  DevToolsSessionHostProxy.prototype.dispatchProtocolNotification = function(message, updates) {
    var params_ = new DevToolsSessionHost_DispatchProtocolNotification_Params();
    params_.message = message;
    params_.updates = updates;
    var builder = new codec.MessageV0Builder(
        kDevToolsSessionHost_DispatchProtocolNotification_Name,
        codec.align(DevToolsSessionHost_DispatchProtocolNotification_Params.encodedSize));
    builder.encodeStruct(DevToolsSessionHost_DispatchProtocolNotification_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DevToolsSessionHostStub(delegate) {
    this.delegate_ = delegate;
  }
  DevToolsSessionHostStub.prototype.dispatchProtocolResponse = function(message, callId, updates) {
    return this.delegate_ && this.delegate_.dispatchProtocolResponse && this.delegate_.dispatchProtocolResponse(message, callId, updates);
  }
  DevToolsSessionHostStub.prototype.dispatchProtocolNotification = function(message, updates) {
    return this.delegate_ && this.delegate_.dispatchProtocolNotification && this.delegate_.dispatchProtocolNotification(message, updates);
  }

  DevToolsSessionHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevToolsSessionHost_DispatchProtocolResponse_Name:
      var params = reader.decodeStruct(DevToolsSessionHost_DispatchProtocolResponse_Params);
      this.dispatchProtocolResponse(params.message, params.callId, params.updates);
      return true;
    case kDevToolsSessionHost_DispatchProtocolNotification_Name:
      var params = reader.decodeStruct(DevToolsSessionHost_DispatchProtocolNotification_Params);
      this.dispatchProtocolNotification(params.message, params.updates);
      return true;
    default:
      return false;
    }
  };

  DevToolsSessionHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDevToolsSessionHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevToolsSessionHost_DispatchProtocolResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevToolsSessionHost_DispatchProtocolResponse_Params;
      break;
      case kDevToolsSessionHost_DispatchProtocolNotification_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevToolsSessionHost_DispatchProtocolNotification_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevToolsSessionHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DevToolsSessionHost = {
    name: 'blink.mojom.DevToolsSessionHost',
    kVersion: 0,
    ptrClass: DevToolsSessionHostPtr,
    proxyClass: DevToolsSessionHostProxy,
    stubClass: DevToolsSessionHostStub,
    validateRequest: validateDevToolsSessionHostRequest,
    validateResponse: null,
  };
  DevToolsSessionHostStub.prototype.validator = validateDevToolsSessionHostRequest;
  DevToolsSessionHostProxy.prototype.validator = null;
  exports.DevToolsMessage = DevToolsMessage;
  exports.DevToolsSessionState = DevToolsSessionState;
  exports.DevToolsAgent = DevToolsAgent;
  exports.DevToolsAgentPtr = DevToolsAgentPtr;
  exports.DevToolsAgentAssociatedPtr = DevToolsAgentAssociatedPtr;
  exports.DevToolsAgentHost = DevToolsAgentHost;
  exports.DevToolsAgentHostPtr = DevToolsAgentHostPtr;
  exports.DevToolsAgentHostAssociatedPtr = DevToolsAgentHostAssociatedPtr;
  exports.DevToolsSession = DevToolsSession;
  exports.DevToolsSessionPtr = DevToolsSessionPtr;
  exports.DevToolsSessionAssociatedPtr = DevToolsSessionAssociatedPtr;
  exports.DevToolsSessionHost = DevToolsSessionHost;
  exports.DevToolsSessionHostPtr = DevToolsSessionHostPtr;
  exports.DevToolsSessionHostAssociatedPtr = DevToolsSessionHostAssociatedPtr;
})();