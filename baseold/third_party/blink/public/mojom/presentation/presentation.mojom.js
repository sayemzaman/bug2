// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/presentation/presentation.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var ScreenAvailability = {};
  ScreenAvailability.UNKNOWN = 0;
  ScreenAvailability.UNAVAILABLE = ScreenAvailability.UNKNOWN + 1;
  ScreenAvailability.SOURCE_NOT_SUPPORTED = ScreenAvailability.UNAVAILABLE + 1;
  ScreenAvailability.DISABLED = ScreenAvailability.SOURCE_NOT_SUPPORTED + 1;
  ScreenAvailability.AVAILABLE = ScreenAvailability.DISABLED + 1;
  ScreenAvailability.MIN_VALUE = 0,
  ScreenAvailability.MAX_VALUE = 4,

  ScreenAvailability.isKnownEnumValue = function(value) {
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

  ScreenAvailability.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PresentationConnectionState = {};
  PresentationConnectionState.CONNECTING = 0;
  PresentationConnectionState.CONNECTED = PresentationConnectionState.CONNECTING + 1;
  PresentationConnectionState.CLOSED = PresentationConnectionState.CONNECTED + 1;
  PresentationConnectionState.TERMINATED = PresentationConnectionState.CLOSED + 1;
  PresentationConnectionState.MIN_VALUE = 0,
  PresentationConnectionState.MAX_VALUE = 3,

  PresentationConnectionState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PresentationConnectionState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PresentationConnectionCloseReason = {};
  PresentationConnectionCloseReason.CONNECTION_ERROR = 0;
  PresentationConnectionCloseReason.CLOSED = PresentationConnectionCloseReason.CONNECTION_ERROR + 1;
  PresentationConnectionCloseReason.WENT_AWAY = PresentationConnectionCloseReason.CLOSED + 1;
  PresentationConnectionCloseReason.MIN_VALUE = 0,
  PresentationConnectionCloseReason.MAX_VALUE = 2,

  PresentationConnectionCloseReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PresentationConnectionCloseReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PresentationErrorType = {};
  PresentationErrorType.NO_AVAILABLE_SCREENS = 0;
  PresentationErrorType.PRESENTATION_REQUEST_CANCELLED = PresentationErrorType.NO_AVAILABLE_SCREENS + 1;
  PresentationErrorType.NO_PRESENTATION_FOUND = PresentationErrorType.PRESENTATION_REQUEST_CANCELLED + 1;
  PresentationErrorType.PREVIOUS_START_IN_PROGRESS = PresentationErrorType.NO_PRESENTATION_FOUND + 1;
  PresentationErrorType.UNKNOWN = PresentationErrorType.PREVIOUS_START_IN_PROGRESS + 1;
  PresentationErrorType.MIN_VALUE = 0,
  PresentationErrorType.MAX_VALUE = 4,

  PresentationErrorType.isKnownEnumValue = function(value) {
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

  PresentationErrorType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PresentationInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.id = null;
  };
  PresentationInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationInfo.validate = function(messageValidator, offset) {
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


    // validate PresentationInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationInfo.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationInfo.encodedSize = codec.kStructHeaderSize + 16;

  PresentationInfo.decode = function(decoder) {
    var packed;
    var val = new PresentationInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.id = decoder.decodeStruct(codec.String);
    return val;
  };

  PresentationInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.id);
  };
  function PresentationError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationError.prototype.initDefaults_ = function() {
    this.errorType = 0;
    this.message = null;
  };
  PresentationError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationError.validate = function(messageValidator, offset) {
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


    // validate PresentationError.errorType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PresentationErrorType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationError.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationError.encodedSize = codec.kStructHeaderSize + 16;

  PresentationError.decode = function(decoder) {
    var packed;
    var val = new PresentationError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  PresentationError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.message);
  };
  function PresentationConnectionResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationConnectionResult.prototype.initDefaults_ = function() {
    this.presentationInfo = null;
    this.connectionPtr = new PresentationConnectionPtr();
    this.connectionRequest = new bindings.InterfaceRequest();
  };
  PresentationConnectionResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationConnectionResult.validate = function(messageValidator, offset) {
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


    // validate PresentationConnectionResult.presentationInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationConnectionResult.connectionPtr
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationConnectionResult.connectionRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationConnectionResult.encodedSize = codec.kStructHeaderSize + 24;

  PresentationConnectionResult.decode = function(decoder) {
    var packed;
    var val = new PresentationConnectionResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationInfo = decoder.decodeStructPointer(PresentationInfo);
    val.connectionPtr = decoder.decodeStruct(new codec.Interface(PresentationConnectionPtr));
    val.connectionRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PresentationConnectionResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationConnectionResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationInfo, val.presentationInfo);
    encoder.encodeStruct(new codec.Interface(PresentationConnectionPtr), val.connectionPtr);
    encoder.encodeStruct(codec.InterfaceRequest, val.connectionRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PresentationConnection_OnMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationConnection_OnMessage_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  PresentationConnection_OnMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationConnection_OnMessage_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationConnection_OnMessage_Params.message
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, PresentationConnectionMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationConnection_OnMessage_Params.encodedSize = codec.kStructHeaderSize + 16;

  PresentationConnection_OnMessage_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationConnection_OnMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(PresentationConnectionMessage);
    return val;
  };

  PresentationConnection_OnMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationConnection_OnMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(PresentationConnectionMessage, val.message);
  };
  function PresentationConnection_DidChangeState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationConnection_DidChangeState_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  PresentationConnection_DidChangeState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationConnection_DidChangeState_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationConnection_DidChangeState_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PresentationConnectionState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationConnection_DidChangeState_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationConnection_DidChangeState_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationConnection_DidChangeState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PresentationConnection_DidChangeState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationConnection_DidChangeState_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PresentationConnection_DidClose_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationConnection_DidClose_Params.prototype.initDefaults_ = function() {
    this.reason = 0;
  };
  PresentationConnection_DidClose_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationConnection_DidClose_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationConnection_DidClose_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PresentationConnectionCloseReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationConnection_DidClose_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationConnection_DidClose_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationConnection_DidClose_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PresentationConnection_DidClose_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationConnection_DidClose_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PresentationService_SetController_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_SetController_Params.prototype.initDefaults_ = function() {
    this.controller = new PresentationControllerPtr();
  };
  PresentationService_SetController_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_SetController_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_SetController_Params.controller
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_SetController_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationService_SetController_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_SetController_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.controller = decoder.decodeStruct(new codec.Interface(PresentationControllerPtr));
    return val;
  };

  PresentationService_SetController_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_SetController_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PresentationControllerPtr), val.controller);
  };
  function PresentationService_SetReceiver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_SetReceiver_Params.prototype.initDefaults_ = function() {
    this.receiver = new PresentationReceiverPtr();
  };
  PresentationService_SetReceiver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_SetReceiver_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_SetReceiver_Params.receiver
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_SetReceiver_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationService_SetReceiver_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_SetReceiver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver = decoder.decodeStruct(new codec.Interface(PresentationReceiverPtr));
    return val;
  };

  PresentationService_SetReceiver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_SetReceiver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PresentationReceiverPtr), val.receiver);
  };
  function PresentationService_SetDefaultPresentationUrls_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_SetDefaultPresentationUrls_Params.prototype.initDefaults_ = function() {
    this.presentationUrls = null;
  };
  PresentationService_SetDefaultPresentationUrls_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_SetDefaultPresentationUrls_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_SetDefaultPresentationUrls_Params.presentationUrls
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_SetDefaultPresentationUrls_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationService_SetDefaultPresentationUrls_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_SetDefaultPresentationUrls_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationUrls = decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    return val;
  };

  PresentationService_SetDefaultPresentationUrls_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_SetDefaultPresentationUrls_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.presentationUrls);
  };
  function PresentationService_ListenForScreenAvailability_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_ListenForScreenAvailability_Params.prototype.initDefaults_ = function() {
    this.availabilityUrl = null;
  };
  PresentationService_ListenForScreenAvailability_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_ListenForScreenAvailability_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_ListenForScreenAvailability_Params.availabilityUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_ListenForScreenAvailability_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationService_ListenForScreenAvailability_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_ListenForScreenAvailability_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.availabilityUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  PresentationService_ListenForScreenAvailability_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_ListenForScreenAvailability_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.availabilityUrl);
  };
  function PresentationService_StopListeningForScreenAvailability_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_StopListeningForScreenAvailability_Params.prototype.initDefaults_ = function() {
    this.availabilityUrl = null;
  };
  PresentationService_StopListeningForScreenAvailability_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_StopListeningForScreenAvailability_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_StopListeningForScreenAvailability_Params.availabilityUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_StopListeningForScreenAvailability_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationService_StopListeningForScreenAvailability_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_StopListeningForScreenAvailability_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.availabilityUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  PresentationService_StopListeningForScreenAvailability_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_StopListeningForScreenAvailability_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.availabilityUrl);
  };
  function PresentationService_StartPresentation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_StartPresentation_Params.prototype.initDefaults_ = function() {
    this.presentationUrls = null;
  };
  PresentationService_StartPresentation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_StartPresentation_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_StartPresentation_Params.presentationUrls
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_StartPresentation_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationService_StartPresentation_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_StartPresentation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationUrls = decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    return val;
  };

  PresentationService_StartPresentation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_StartPresentation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.presentationUrls);
  };
  function PresentationService_StartPresentation_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_StartPresentation_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.error = null;
  };
  PresentationService_StartPresentation_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_StartPresentation_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PresentationService_StartPresentation_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationConnectionResult, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationService_StartPresentation_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, PresentationError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_StartPresentation_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  PresentationService_StartPresentation_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PresentationService_StartPresentation_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(PresentationConnectionResult);
    val.error = decoder.decodeStructPointer(PresentationError);
    return val;
  };

  PresentationService_StartPresentation_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_StartPresentation_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationConnectionResult, val.result);
    encoder.encodeStructPointer(PresentationError, val.error);
  };
  function PresentationService_ReconnectPresentation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_ReconnectPresentation_Params.prototype.initDefaults_ = function() {
    this.presentationUrls = null;
    this.presentationId = null;
  };
  PresentationService_ReconnectPresentation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_ReconnectPresentation_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_ReconnectPresentation_Params.presentationUrls
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationService_ReconnectPresentation_Params.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_ReconnectPresentation_Params.encodedSize = codec.kStructHeaderSize + 16;

  PresentationService_ReconnectPresentation_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_ReconnectPresentation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationUrls = decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    val.presentationId = decoder.decodeStruct(codec.String);
    return val;
  };

  PresentationService_ReconnectPresentation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_ReconnectPresentation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.presentationUrls);
    encoder.encodeStruct(codec.String, val.presentationId);
  };
  function PresentationService_ReconnectPresentation_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_ReconnectPresentation_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.error = null;
  };
  PresentationService_ReconnectPresentation_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_ReconnectPresentation_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PresentationService_ReconnectPresentation_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationConnectionResult, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationService_ReconnectPresentation_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, PresentationError, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_ReconnectPresentation_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  PresentationService_ReconnectPresentation_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PresentationService_ReconnectPresentation_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(PresentationConnectionResult);
    val.error = decoder.decodeStructPointer(PresentationError);
    return val;
  };

  PresentationService_ReconnectPresentation_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_ReconnectPresentation_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationConnectionResult, val.result);
    encoder.encodeStructPointer(PresentationError, val.error);
  };
  function PresentationService_CloseConnection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_CloseConnection_Params.prototype.initDefaults_ = function() {
    this.presentationUrl = null;
    this.presentationId = null;
  };
  PresentationService_CloseConnection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_CloseConnection_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_CloseConnection_Params.presentationUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationService_CloseConnection_Params.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_CloseConnection_Params.encodedSize = codec.kStructHeaderSize + 16;

  PresentationService_CloseConnection_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_CloseConnection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationUrl = decoder.decodeStructPointer(url$.Url);
    val.presentationId = decoder.decodeStruct(codec.String);
    return val;
  };

  PresentationService_CloseConnection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_CloseConnection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.presentationUrl);
    encoder.encodeStruct(codec.String, val.presentationId);
  };
  function PresentationService_Terminate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationService_Terminate_Params.prototype.initDefaults_ = function() {
    this.presentationUrl = null;
    this.presentationId = null;
  };
  PresentationService_Terminate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationService_Terminate_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationService_Terminate_Params.presentationUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationService_Terminate_Params.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationService_Terminate_Params.encodedSize = codec.kStructHeaderSize + 16;

  PresentationService_Terminate_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationService_Terminate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationUrl = decoder.decodeStructPointer(url$.Url);
    val.presentationId = decoder.decodeStruct(codec.String);
    return val;
  };

  PresentationService_Terminate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationService_Terminate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.presentationUrl);
    encoder.encodeStruct(codec.String, val.presentationId);
  };
  function PresentationController_OnScreenAvailabilityUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationController_OnScreenAvailabilityUpdated_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.availability = 0;
  };
  PresentationController_OnScreenAvailabilityUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationController_OnScreenAvailabilityUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationController_OnScreenAvailabilityUpdated_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationController_OnScreenAvailabilityUpdated_Params.availability
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ScreenAvailability);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationController_OnScreenAvailabilityUpdated_Params.encodedSize = codec.kStructHeaderSize + 16;

  PresentationController_OnScreenAvailabilityUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationController_OnScreenAvailabilityUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.availability = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PresentationController_OnScreenAvailabilityUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationController_OnScreenAvailabilityUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.availability);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PresentationController_OnDefaultPresentationStarted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationController_OnDefaultPresentationStarted_Params.prototype.initDefaults_ = function() {
    this.result = null;
  };
  PresentationController_OnDefaultPresentationStarted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationController_OnDefaultPresentationStarted_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationController_OnDefaultPresentationStarted_Params.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationConnectionResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationController_OnDefaultPresentationStarted_Params.encodedSize = codec.kStructHeaderSize + 8;

  PresentationController_OnDefaultPresentationStarted_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationController_OnDefaultPresentationStarted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(PresentationConnectionResult);
    return val;
  };

  PresentationController_OnDefaultPresentationStarted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationController_OnDefaultPresentationStarted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationConnectionResult, val.result);
  };
  function PresentationController_OnConnectionStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationController_OnConnectionStateChanged_Params.prototype.initDefaults_ = function() {
    this.presentationInfo = null;
    this.newState = 0;
  };
  PresentationController_OnConnectionStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationController_OnConnectionStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationController_OnConnectionStateChanged_Params.presentationInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationController_OnConnectionStateChanged_Params.newState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, PresentationConnectionState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationController_OnConnectionStateChanged_Params.encodedSize = codec.kStructHeaderSize + 16;

  PresentationController_OnConnectionStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationController_OnConnectionStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationInfo = decoder.decodeStructPointer(PresentationInfo);
    val.newState = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PresentationController_OnConnectionStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationController_OnConnectionStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationInfo, val.presentationInfo);
    encoder.encodeStruct(codec.Int32, val.newState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PresentationController_OnConnectionClosed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationController_OnConnectionClosed_Params.prototype.initDefaults_ = function() {
    this.presentationInfo = null;
    this.reason = 0;
    this.message = null;
  };
  PresentationController_OnConnectionClosed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationController_OnConnectionClosed_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationController_OnConnectionClosed_Params.presentationInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationController_OnConnectionClosed_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, PresentationConnectionCloseReason);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationController_OnConnectionClosed_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationController_OnConnectionClosed_Params.encodedSize = codec.kStructHeaderSize + 24;

  PresentationController_OnConnectionClosed_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationController_OnConnectionClosed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationInfo = decoder.decodeStructPointer(PresentationInfo);
    val.reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  PresentationController_OnConnectionClosed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationController_OnConnectionClosed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationInfo, val.presentationInfo);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.message);
  };
  function PresentationReceiver_OnReceiverConnectionAvailable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationReceiver_OnReceiverConnectionAvailable_Params.prototype.initDefaults_ = function() {
    this.info = null;
    this.controllerConnection = new PresentationConnectionPtr();
    this.receiverConnectionRequest = new bindings.InterfaceRequest();
  };
  PresentationReceiver_OnReceiverConnectionAvailable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationReceiver_OnReceiverConnectionAvailable_Params.validate = function(messageValidator, offset) {
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


    // validate PresentationReceiver_OnReceiverConnectionAvailable_Params.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PresentationInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationReceiver_OnReceiverConnectionAvailable_Params.controllerConnection
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationReceiver_OnReceiverConnectionAvailable_Params.receiverConnectionRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationReceiver_OnReceiverConnectionAvailable_Params.encodedSize = codec.kStructHeaderSize + 24;

  PresentationReceiver_OnReceiverConnectionAvailable_Params.decode = function(decoder) {
    var packed;
    var val = new PresentationReceiver_OnReceiverConnectionAvailable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(PresentationInfo);
    val.controllerConnection = decoder.decodeStruct(new codec.Interface(PresentationConnectionPtr));
    val.receiverConnectionRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PresentationReceiver_OnReceiverConnectionAvailable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationReceiver_OnReceiverConnectionAvailable_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PresentationInfo, val.info);
    encoder.encodeStruct(new codec.Interface(PresentationConnectionPtr), val.controllerConnection);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiverConnectionRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function PresentationConnectionMessage(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  PresentationConnectionMessage.Tags = {
    message: 0,
    data: 1,
  };

  PresentationConnectionMessage.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  PresentationConnectionMessage.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "message",
        "data",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a PresentationConnectionMessage member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(PresentationConnectionMessage.prototype, "message", {
    get: function() {
      if (this.$tag != PresentationConnectionMessage.Tags.message) {
        throw new ReferenceError(
            "PresentationConnectionMessage.message is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = PresentationConnectionMessage.Tags.message;
      this.$data = value;
    }
  });
  Object.defineProperty(PresentationConnectionMessage.prototype, "data", {
    get: function() {
      if (this.$tag != PresentationConnectionMessage.Tags.data) {
        throw new ReferenceError(
            "PresentationConnectionMessage.data is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = PresentationConnectionMessage.Tags.data;
      this.$data = value;
    }
  });


    PresentationConnectionMessage.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case PresentationConnectionMessage.Tags.message:
          encoder.encodeStruct(codec.String, val.message);
          break;
        case PresentationConnectionMessage.Tags.data:
          encoder.encodeArrayPointer(codec.Uint8, val.data);
          break;
      }
      encoder.align();
    };


    PresentationConnectionMessage.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new PresentationConnectionMessage();
      var tag = decoder.readUint32();
      switch (tag) {
        case PresentationConnectionMessage.Tags.message:
          result.message = decoder.decodeStruct(codec.String);
          break;
        case PresentationConnectionMessage.Tags.data:
          result.data = decoder.decodeArrayPointer(codec.Uint8);
          break;
      }
      decoder.align();

      return result;
    };


    PresentationConnectionMessage.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case PresentationConnectionMessage.Tags.message:
          

    // validate PresentationConnectionMessage.message
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case PresentationConnectionMessage.Tags.data:
          

    // validate PresentationConnectionMessage.data
    err = messageValidator.validateArrayPointer(data_offset, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  PresentationConnectionMessage.encodedSize = 16;
  var kPresentationConnection_OnMessage_Name = 0;
  var kPresentationConnection_DidChangeState_Name = 1;
  var kPresentationConnection_DidClose_Name = 2;

  function PresentationConnectionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PresentationConnection,
                                                   handleOrPtrInfo);
  }

  function PresentationConnectionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PresentationConnection, associatedInterfacePtrInfo);
  }

  PresentationConnectionAssociatedPtr.prototype =
      Object.create(PresentationConnectionPtr.prototype);
  PresentationConnectionAssociatedPtr.prototype.constructor =
      PresentationConnectionAssociatedPtr;

  function PresentationConnectionProxy(receiver) {
    this.receiver_ = receiver;
  }
  PresentationConnectionPtr.prototype.onMessage = function() {
    return PresentationConnectionProxy.prototype.onMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationConnectionProxy.prototype.onMessage = function(message) {
    var params_ = new PresentationConnection_OnMessage_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kPresentationConnection_OnMessage_Name,
        codec.align(PresentationConnection_OnMessage_Params.encodedSize));
    builder.encodeStruct(PresentationConnection_OnMessage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationConnectionPtr.prototype.didChangeState = function() {
    return PresentationConnectionProxy.prototype.didChangeState
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationConnectionProxy.prototype.didChangeState = function(state) {
    var params_ = new PresentationConnection_DidChangeState_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kPresentationConnection_DidChangeState_Name,
        codec.align(PresentationConnection_DidChangeState_Params.encodedSize));
    builder.encodeStruct(PresentationConnection_DidChangeState_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationConnectionPtr.prototype.didClose = function() {
    return PresentationConnectionProxy.prototype.didClose
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationConnectionProxy.prototype.didClose = function(reason) {
    var params_ = new PresentationConnection_DidClose_Params();
    params_.reason = reason;
    var builder = new codec.MessageV0Builder(
        kPresentationConnection_DidClose_Name,
        codec.align(PresentationConnection_DidClose_Params.encodedSize));
    builder.encodeStruct(PresentationConnection_DidClose_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PresentationConnectionStub(delegate) {
    this.delegate_ = delegate;
  }
  PresentationConnectionStub.prototype.onMessage = function(message) {
    return this.delegate_ && this.delegate_.onMessage && this.delegate_.onMessage(message);
  }
  PresentationConnectionStub.prototype.didChangeState = function(state) {
    return this.delegate_ && this.delegate_.didChangeState && this.delegate_.didChangeState(state);
  }
  PresentationConnectionStub.prototype.didClose = function(reason) {
    return this.delegate_ && this.delegate_.didClose && this.delegate_.didClose(reason);
  }

  PresentationConnectionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPresentationConnection_OnMessage_Name:
      var params = reader.decodeStruct(PresentationConnection_OnMessage_Params);
      this.onMessage(params.message);
      return true;
    case kPresentationConnection_DidChangeState_Name:
      var params = reader.decodeStruct(PresentationConnection_DidChangeState_Params);
      this.didChangeState(params.state);
      return true;
    case kPresentationConnection_DidClose_Name:
      var params = reader.decodeStruct(PresentationConnection_DidClose_Params);
      this.didClose(params.reason);
      return true;
    default:
      return false;
    }
  };

  PresentationConnectionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePresentationConnectionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPresentationConnection_OnMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationConnection_OnMessage_Params;
      break;
      case kPresentationConnection_DidChangeState_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationConnection_DidChangeState_Params;
      break;
      case kPresentationConnection_DidClose_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationConnection_DidClose_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePresentationConnectionResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PresentationConnection = {
    name: 'blink.mojom.PresentationConnection',
    kVersion: 0,
    ptrClass: PresentationConnectionPtr,
    proxyClass: PresentationConnectionProxy,
    stubClass: PresentationConnectionStub,
    validateRequest: validatePresentationConnectionRequest,
    validateResponse: null,
  };
  PresentationConnectionStub.prototype.validator = validatePresentationConnectionRequest;
  PresentationConnectionProxy.prototype.validator = null;
  var kPresentationService_SetController_Name = 0;
  var kPresentationService_SetReceiver_Name = 1;
  var kPresentationService_SetDefaultPresentationUrls_Name = 2;
  var kPresentationService_ListenForScreenAvailability_Name = 3;
  var kPresentationService_StopListeningForScreenAvailability_Name = 4;
  var kPresentationService_StartPresentation_Name = 5;
  var kPresentationService_ReconnectPresentation_Name = 6;
  var kPresentationService_CloseConnection_Name = 7;
  var kPresentationService_Terminate_Name = 8;

  function PresentationServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PresentationService,
                                                   handleOrPtrInfo);
  }

  function PresentationServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PresentationService, associatedInterfacePtrInfo);
  }

  PresentationServiceAssociatedPtr.prototype =
      Object.create(PresentationServicePtr.prototype);
  PresentationServiceAssociatedPtr.prototype.constructor =
      PresentationServiceAssociatedPtr;

  function PresentationServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  PresentationServicePtr.prototype.setController = function() {
    return PresentationServiceProxy.prototype.setController
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.setController = function(controller) {
    var params_ = new PresentationService_SetController_Params();
    params_.controller = controller;
    var builder = new codec.MessageV0Builder(
        kPresentationService_SetController_Name,
        codec.align(PresentationService_SetController_Params.encodedSize));
    builder.encodeStruct(PresentationService_SetController_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationServicePtr.prototype.setReceiver = function() {
    return PresentationServiceProxy.prototype.setReceiver
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.setReceiver = function(receiver) {
    var params_ = new PresentationService_SetReceiver_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kPresentationService_SetReceiver_Name,
        codec.align(PresentationService_SetReceiver_Params.encodedSize));
    builder.encodeStruct(PresentationService_SetReceiver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationServicePtr.prototype.setDefaultPresentationUrls = function() {
    return PresentationServiceProxy.prototype.setDefaultPresentationUrls
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.setDefaultPresentationUrls = function(presentationUrls) {
    var params_ = new PresentationService_SetDefaultPresentationUrls_Params();
    params_.presentationUrls = presentationUrls;
    var builder = new codec.MessageV0Builder(
        kPresentationService_SetDefaultPresentationUrls_Name,
        codec.align(PresentationService_SetDefaultPresentationUrls_Params.encodedSize));
    builder.encodeStruct(PresentationService_SetDefaultPresentationUrls_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationServicePtr.prototype.listenForScreenAvailability = function() {
    return PresentationServiceProxy.prototype.listenForScreenAvailability
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.listenForScreenAvailability = function(availabilityUrl) {
    var params_ = new PresentationService_ListenForScreenAvailability_Params();
    params_.availabilityUrl = availabilityUrl;
    var builder = new codec.MessageV0Builder(
        kPresentationService_ListenForScreenAvailability_Name,
        codec.align(PresentationService_ListenForScreenAvailability_Params.encodedSize));
    builder.encodeStruct(PresentationService_ListenForScreenAvailability_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationServicePtr.prototype.stopListeningForScreenAvailability = function() {
    return PresentationServiceProxy.prototype.stopListeningForScreenAvailability
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.stopListeningForScreenAvailability = function(availabilityUrl) {
    var params_ = new PresentationService_StopListeningForScreenAvailability_Params();
    params_.availabilityUrl = availabilityUrl;
    var builder = new codec.MessageV0Builder(
        kPresentationService_StopListeningForScreenAvailability_Name,
        codec.align(PresentationService_StopListeningForScreenAvailability_Params.encodedSize));
    builder.encodeStruct(PresentationService_StopListeningForScreenAvailability_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationServicePtr.prototype.startPresentation = function() {
    return PresentationServiceProxy.prototype.startPresentation
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.startPresentation = function(presentationUrls) {
    var params_ = new PresentationService_StartPresentation_Params();
    params_.presentationUrls = presentationUrls;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPresentationService_StartPresentation_Name,
          codec.align(PresentationService_StartPresentation_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PresentationService_StartPresentation_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PresentationService_StartPresentation_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PresentationServicePtr.prototype.reconnectPresentation = function() {
    return PresentationServiceProxy.prototype.reconnectPresentation
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.reconnectPresentation = function(presentationUrls, presentationId) {
    var params_ = new PresentationService_ReconnectPresentation_Params();
    params_.presentationUrls = presentationUrls;
    params_.presentationId = presentationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPresentationService_ReconnectPresentation_Name,
          codec.align(PresentationService_ReconnectPresentation_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PresentationService_ReconnectPresentation_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PresentationService_ReconnectPresentation_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PresentationServicePtr.prototype.closeConnection = function() {
    return PresentationServiceProxy.prototype.closeConnection
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.closeConnection = function(presentationUrl, presentationId) {
    var params_ = new PresentationService_CloseConnection_Params();
    params_.presentationUrl = presentationUrl;
    params_.presentationId = presentationId;
    var builder = new codec.MessageV0Builder(
        kPresentationService_CloseConnection_Name,
        codec.align(PresentationService_CloseConnection_Params.encodedSize));
    builder.encodeStruct(PresentationService_CloseConnection_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationServicePtr.prototype.terminate = function() {
    return PresentationServiceProxy.prototype.terminate
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationServiceProxy.prototype.terminate = function(presentationUrl, presentationId) {
    var params_ = new PresentationService_Terminate_Params();
    params_.presentationUrl = presentationUrl;
    params_.presentationId = presentationId;
    var builder = new codec.MessageV0Builder(
        kPresentationService_Terminate_Name,
        codec.align(PresentationService_Terminate_Params.encodedSize));
    builder.encodeStruct(PresentationService_Terminate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PresentationServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  PresentationServiceStub.prototype.setController = function(controller) {
    return this.delegate_ && this.delegate_.setController && this.delegate_.setController(controller);
  }
  PresentationServiceStub.prototype.setReceiver = function(receiver) {
    return this.delegate_ && this.delegate_.setReceiver && this.delegate_.setReceiver(receiver);
  }
  PresentationServiceStub.prototype.setDefaultPresentationUrls = function(presentationUrls) {
    return this.delegate_ && this.delegate_.setDefaultPresentationUrls && this.delegate_.setDefaultPresentationUrls(presentationUrls);
  }
  PresentationServiceStub.prototype.listenForScreenAvailability = function(availabilityUrl) {
    return this.delegate_ && this.delegate_.listenForScreenAvailability && this.delegate_.listenForScreenAvailability(availabilityUrl);
  }
  PresentationServiceStub.prototype.stopListeningForScreenAvailability = function(availabilityUrl) {
    return this.delegate_ && this.delegate_.stopListeningForScreenAvailability && this.delegate_.stopListeningForScreenAvailability(availabilityUrl);
  }
  PresentationServiceStub.prototype.startPresentation = function(presentationUrls) {
    return this.delegate_ && this.delegate_.startPresentation && this.delegate_.startPresentation(presentationUrls);
  }
  PresentationServiceStub.prototype.reconnectPresentation = function(presentationUrls, presentationId) {
    return this.delegate_ && this.delegate_.reconnectPresentation && this.delegate_.reconnectPresentation(presentationUrls, presentationId);
  }
  PresentationServiceStub.prototype.closeConnection = function(presentationUrl, presentationId) {
    return this.delegate_ && this.delegate_.closeConnection && this.delegate_.closeConnection(presentationUrl, presentationId);
  }
  PresentationServiceStub.prototype.terminate = function(presentationUrl, presentationId) {
    return this.delegate_ && this.delegate_.terminate && this.delegate_.terminate(presentationUrl, presentationId);
  }

  PresentationServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPresentationService_SetController_Name:
      var params = reader.decodeStruct(PresentationService_SetController_Params);
      this.setController(params.controller);
      return true;
    case kPresentationService_SetReceiver_Name:
      var params = reader.decodeStruct(PresentationService_SetReceiver_Params);
      this.setReceiver(params.receiver);
      return true;
    case kPresentationService_SetDefaultPresentationUrls_Name:
      var params = reader.decodeStruct(PresentationService_SetDefaultPresentationUrls_Params);
      this.setDefaultPresentationUrls(params.presentationUrls);
      return true;
    case kPresentationService_ListenForScreenAvailability_Name:
      var params = reader.decodeStruct(PresentationService_ListenForScreenAvailability_Params);
      this.listenForScreenAvailability(params.availabilityUrl);
      return true;
    case kPresentationService_StopListeningForScreenAvailability_Name:
      var params = reader.decodeStruct(PresentationService_StopListeningForScreenAvailability_Params);
      this.stopListeningForScreenAvailability(params.availabilityUrl);
      return true;
    case kPresentationService_CloseConnection_Name:
      var params = reader.decodeStruct(PresentationService_CloseConnection_Params);
      this.closeConnection(params.presentationUrl, params.presentationId);
      return true;
    case kPresentationService_Terminate_Name:
      var params = reader.decodeStruct(PresentationService_Terminate_Params);
      this.terminate(params.presentationUrl, params.presentationId);
      return true;
    default:
      return false;
    }
  };

  PresentationServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPresentationService_StartPresentation_Name:
      var params = reader.decodeStruct(PresentationService_StartPresentation_Params);
      this.startPresentation(params.presentationUrls).then(function(response) {
        var responseParams =
            new PresentationService_StartPresentation_ResponseParams();
        responseParams.result = response.result;
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kPresentationService_StartPresentation_Name,
            codec.align(PresentationService_StartPresentation_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PresentationService_StartPresentation_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPresentationService_ReconnectPresentation_Name:
      var params = reader.decodeStruct(PresentationService_ReconnectPresentation_Params);
      this.reconnectPresentation(params.presentationUrls, params.presentationId).then(function(response) {
        var responseParams =
            new PresentationService_ReconnectPresentation_ResponseParams();
        responseParams.result = response.result;
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kPresentationService_ReconnectPresentation_Name,
            codec.align(PresentationService_ReconnectPresentation_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PresentationService_ReconnectPresentation_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePresentationServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPresentationService_SetController_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_SetController_Params;
      break;
      case kPresentationService_SetReceiver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_SetReceiver_Params;
      break;
      case kPresentationService_SetDefaultPresentationUrls_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_SetDefaultPresentationUrls_Params;
      break;
      case kPresentationService_ListenForScreenAvailability_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_ListenForScreenAvailability_Params;
      break;
      case kPresentationService_StopListeningForScreenAvailability_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_StopListeningForScreenAvailability_Params;
      break;
      case kPresentationService_StartPresentation_Name:
        if (message.expectsResponse())
          paramsClass = PresentationService_StartPresentation_Params;
      break;
      case kPresentationService_ReconnectPresentation_Name:
        if (message.expectsResponse())
          paramsClass = PresentationService_ReconnectPresentation_Params;
      break;
      case kPresentationService_CloseConnection_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_CloseConnection_Params;
      break;
      case kPresentationService_Terminate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationService_Terminate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePresentationServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPresentationService_StartPresentation_Name:
        if (message.isResponse())
          paramsClass = PresentationService_StartPresentation_ResponseParams;
        break;
      case kPresentationService_ReconnectPresentation_Name:
        if (message.isResponse())
          paramsClass = PresentationService_ReconnectPresentation_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PresentationService = {
    name: 'blink.mojom.PresentationService',
    kVersion: 0,
    ptrClass: PresentationServicePtr,
    proxyClass: PresentationServiceProxy,
    stubClass: PresentationServiceStub,
    validateRequest: validatePresentationServiceRequest,
    validateResponse: validatePresentationServiceResponse,
  };
  PresentationServiceStub.prototype.validator = validatePresentationServiceRequest;
  PresentationServiceProxy.prototype.validator = validatePresentationServiceResponse;
  var kPresentationController_OnScreenAvailabilityUpdated_Name = 0;
  var kPresentationController_OnDefaultPresentationStarted_Name = 1;
  var kPresentationController_OnConnectionStateChanged_Name = 2;
  var kPresentationController_OnConnectionClosed_Name = 3;

  function PresentationControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PresentationController,
                                                   handleOrPtrInfo);
  }

  function PresentationControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PresentationController, associatedInterfacePtrInfo);
  }

  PresentationControllerAssociatedPtr.prototype =
      Object.create(PresentationControllerPtr.prototype);
  PresentationControllerAssociatedPtr.prototype.constructor =
      PresentationControllerAssociatedPtr;

  function PresentationControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  PresentationControllerPtr.prototype.onScreenAvailabilityUpdated = function() {
    return PresentationControllerProxy.prototype.onScreenAvailabilityUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationControllerProxy.prototype.onScreenAvailabilityUpdated = function(url, availability) {
    var params_ = new PresentationController_OnScreenAvailabilityUpdated_Params();
    params_.url = url;
    params_.availability = availability;
    var builder = new codec.MessageV0Builder(
        kPresentationController_OnScreenAvailabilityUpdated_Name,
        codec.align(PresentationController_OnScreenAvailabilityUpdated_Params.encodedSize));
    builder.encodeStruct(PresentationController_OnScreenAvailabilityUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationControllerPtr.prototype.onDefaultPresentationStarted = function() {
    return PresentationControllerProxy.prototype.onDefaultPresentationStarted
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationControllerProxy.prototype.onDefaultPresentationStarted = function(result) {
    var params_ = new PresentationController_OnDefaultPresentationStarted_Params();
    params_.result = result;
    var builder = new codec.MessageV0Builder(
        kPresentationController_OnDefaultPresentationStarted_Name,
        codec.align(PresentationController_OnDefaultPresentationStarted_Params.encodedSize));
    builder.encodeStruct(PresentationController_OnDefaultPresentationStarted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationControllerPtr.prototype.onConnectionStateChanged = function() {
    return PresentationControllerProxy.prototype.onConnectionStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationControllerProxy.prototype.onConnectionStateChanged = function(presentationInfo, newState) {
    var params_ = new PresentationController_OnConnectionStateChanged_Params();
    params_.presentationInfo = presentationInfo;
    params_.newState = newState;
    var builder = new codec.MessageV0Builder(
        kPresentationController_OnConnectionStateChanged_Name,
        codec.align(PresentationController_OnConnectionStateChanged_Params.encodedSize));
    builder.encodeStruct(PresentationController_OnConnectionStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PresentationControllerPtr.prototype.onConnectionClosed = function() {
    return PresentationControllerProxy.prototype.onConnectionClosed
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationControllerProxy.prototype.onConnectionClosed = function(presentationInfo, reason, message) {
    var params_ = new PresentationController_OnConnectionClosed_Params();
    params_.presentationInfo = presentationInfo;
    params_.reason = reason;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kPresentationController_OnConnectionClosed_Name,
        codec.align(PresentationController_OnConnectionClosed_Params.encodedSize));
    builder.encodeStruct(PresentationController_OnConnectionClosed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PresentationControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  PresentationControllerStub.prototype.onScreenAvailabilityUpdated = function(url, availability) {
    return this.delegate_ && this.delegate_.onScreenAvailabilityUpdated && this.delegate_.onScreenAvailabilityUpdated(url, availability);
  }
  PresentationControllerStub.prototype.onDefaultPresentationStarted = function(result) {
    return this.delegate_ && this.delegate_.onDefaultPresentationStarted && this.delegate_.onDefaultPresentationStarted(result);
  }
  PresentationControllerStub.prototype.onConnectionStateChanged = function(presentationInfo, newState) {
    return this.delegate_ && this.delegate_.onConnectionStateChanged && this.delegate_.onConnectionStateChanged(presentationInfo, newState);
  }
  PresentationControllerStub.prototype.onConnectionClosed = function(presentationInfo, reason, message) {
    return this.delegate_ && this.delegate_.onConnectionClosed && this.delegate_.onConnectionClosed(presentationInfo, reason, message);
  }

  PresentationControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPresentationController_OnScreenAvailabilityUpdated_Name:
      var params = reader.decodeStruct(PresentationController_OnScreenAvailabilityUpdated_Params);
      this.onScreenAvailabilityUpdated(params.url, params.availability);
      return true;
    case kPresentationController_OnDefaultPresentationStarted_Name:
      var params = reader.decodeStruct(PresentationController_OnDefaultPresentationStarted_Params);
      this.onDefaultPresentationStarted(params.result);
      return true;
    case kPresentationController_OnConnectionStateChanged_Name:
      var params = reader.decodeStruct(PresentationController_OnConnectionStateChanged_Params);
      this.onConnectionStateChanged(params.presentationInfo, params.newState);
      return true;
    case kPresentationController_OnConnectionClosed_Name:
      var params = reader.decodeStruct(PresentationController_OnConnectionClosed_Params);
      this.onConnectionClosed(params.presentationInfo, params.reason, params.message);
      return true;
    default:
      return false;
    }
  };

  PresentationControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePresentationControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPresentationController_OnScreenAvailabilityUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationController_OnScreenAvailabilityUpdated_Params;
      break;
      case kPresentationController_OnDefaultPresentationStarted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationController_OnDefaultPresentationStarted_Params;
      break;
      case kPresentationController_OnConnectionStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationController_OnConnectionStateChanged_Params;
      break;
      case kPresentationController_OnConnectionClosed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationController_OnConnectionClosed_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePresentationControllerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PresentationController = {
    name: 'blink.mojom.PresentationController',
    kVersion: 0,
    ptrClass: PresentationControllerPtr,
    proxyClass: PresentationControllerProxy,
    stubClass: PresentationControllerStub,
    validateRequest: validatePresentationControllerRequest,
    validateResponse: null,
  };
  PresentationControllerStub.prototype.validator = validatePresentationControllerRequest;
  PresentationControllerProxy.prototype.validator = null;
  var kPresentationReceiver_OnReceiverConnectionAvailable_Name = 0;

  function PresentationReceiverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PresentationReceiver,
                                                   handleOrPtrInfo);
  }

  function PresentationReceiverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PresentationReceiver, associatedInterfacePtrInfo);
  }

  PresentationReceiverAssociatedPtr.prototype =
      Object.create(PresentationReceiverPtr.prototype);
  PresentationReceiverAssociatedPtr.prototype.constructor =
      PresentationReceiverAssociatedPtr;

  function PresentationReceiverProxy(receiver) {
    this.receiver_ = receiver;
  }
  PresentationReceiverPtr.prototype.onReceiverConnectionAvailable = function() {
    return PresentationReceiverProxy.prototype.onReceiverConnectionAvailable
        .apply(this.ptr.getProxy(), arguments);
  };

  PresentationReceiverProxy.prototype.onReceiverConnectionAvailable = function(info, controllerConnection, receiverConnectionRequest) {
    var params_ = new PresentationReceiver_OnReceiverConnectionAvailable_Params();
    params_.info = info;
    params_.controllerConnection = controllerConnection;
    params_.receiverConnectionRequest = receiverConnectionRequest;
    var builder = new codec.MessageV0Builder(
        kPresentationReceiver_OnReceiverConnectionAvailable_Name,
        codec.align(PresentationReceiver_OnReceiverConnectionAvailable_Params.encodedSize));
    builder.encodeStruct(PresentationReceiver_OnReceiverConnectionAvailable_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PresentationReceiverStub(delegate) {
    this.delegate_ = delegate;
  }
  PresentationReceiverStub.prototype.onReceiverConnectionAvailable = function(info, controllerConnection, receiverConnectionRequest) {
    return this.delegate_ && this.delegate_.onReceiverConnectionAvailable && this.delegate_.onReceiverConnectionAvailable(info, controllerConnection, receiverConnectionRequest);
  }

  PresentationReceiverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPresentationReceiver_OnReceiverConnectionAvailable_Name:
      var params = reader.decodeStruct(PresentationReceiver_OnReceiverConnectionAvailable_Params);
      this.onReceiverConnectionAvailable(params.info, params.controllerConnection, params.receiverConnectionRequest);
      return true;
    default:
      return false;
    }
  };

  PresentationReceiverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePresentationReceiverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPresentationReceiver_OnReceiverConnectionAvailable_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PresentationReceiver_OnReceiverConnectionAvailable_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePresentationReceiverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PresentationReceiver = {
    name: 'blink.mojom.PresentationReceiver',
    kVersion: 0,
    ptrClass: PresentationReceiverPtr,
    proxyClass: PresentationReceiverProxy,
    stubClass: PresentationReceiverStub,
    validateRequest: validatePresentationReceiverRequest,
    validateResponse: null,
  };
  PresentationReceiverStub.prototype.validator = validatePresentationReceiverRequest;
  PresentationReceiverProxy.prototype.validator = null;
  exports.ScreenAvailability = ScreenAvailability;
  exports.PresentationConnectionState = PresentationConnectionState;
  exports.PresentationConnectionCloseReason = PresentationConnectionCloseReason;
  exports.PresentationErrorType = PresentationErrorType;
  exports.PresentationInfo = PresentationInfo;
  exports.PresentationError = PresentationError;
  exports.PresentationConnectionResult = PresentationConnectionResult;
  exports.PresentationConnectionMessage = PresentationConnectionMessage;
  exports.PresentationConnection = PresentationConnection;
  exports.PresentationConnectionPtr = PresentationConnectionPtr;
  exports.PresentationConnectionAssociatedPtr = PresentationConnectionAssociatedPtr;
  exports.PresentationService = PresentationService;
  exports.PresentationServicePtr = PresentationServicePtr;
  exports.PresentationServiceAssociatedPtr = PresentationServiceAssociatedPtr;
  exports.PresentationController = PresentationController;
  exports.PresentationControllerPtr = PresentationControllerPtr;
  exports.PresentationControllerAssociatedPtr = PresentationControllerAssociatedPtr;
  exports.PresentationReceiver = PresentationReceiver;
  exports.PresentationReceiverPtr = PresentationReceiverPtr;
  exports.PresentationReceiverAssociatedPtr = PresentationReceiverAssociatedPtr;
})();