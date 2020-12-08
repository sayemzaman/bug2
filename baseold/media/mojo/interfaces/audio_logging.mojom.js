// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/audio_logging.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var audio_parameters$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/audio_parameters.mojom', 'audio_parameters.mojom.js');
  }


  var AudioLogComponent = {};
  AudioLogComponent.kInputController = 0;
  AudioLogComponent.kOutputController = AudioLogComponent.kInputController + 1;
  AudioLogComponent.kOutputStream = AudioLogComponent.kOutputController + 1;
  AudioLogComponent.MIN_VALUE = 0,
  AudioLogComponent.MAX_VALUE = 2,

  AudioLogComponent.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  AudioLogComponent.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AudioLog_OnCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnCreated_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.deviceId = null;
  };
  AudioLog_OnCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnCreated_Params.validate = function(messageValidator, offset) {
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


    // validate AudioLog_OnCreated_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, audio_parameters$.AudioParameters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioLog_OnCreated_Params.deviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioLog_OnCreated_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioLog_OnCreated_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params = decoder.decodeStructPointer(audio_parameters$.AudioParameters);
    val.deviceId = decoder.decodeStruct(codec.String);
    return val;
  };

  AudioLog_OnCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(audio_parameters$.AudioParameters, val.params);
    encoder.encodeStruct(codec.String, val.deviceId);
  };
  function AudioLog_OnStarted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnStarted_Params.prototype.initDefaults_ = function() {
  };
  AudioLog_OnStarted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnStarted_Params.validate = function(messageValidator, offset) {
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

  AudioLog_OnStarted_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioLog_OnStarted_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnStarted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioLog_OnStarted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnStarted_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioLog_OnStopped_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnStopped_Params.prototype.initDefaults_ = function() {
  };
  AudioLog_OnStopped_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnStopped_Params.validate = function(messageValidator, offset) {
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

  AudioLog_OnStopped_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioLog_OnStopped_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnStopped_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioLog_OnStopped_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnStopped_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioLog_OnClosed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnClosed_Params.prototype.initDefaults_ = function() {
  };
  AudioLog_OnClosed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnClosed_Params.validate = function(messageValidator, offset) {
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

  AudioLog_OnClosed_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioLog_OnClosed_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnClosed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioLog_OnClosed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnClosed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioLog_OnError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnError_Params.prototype.initDefaults_ = function() {
  };
  AudioLog_OnError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnError_Params.validate = function(messageValidator, offset) {
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

  AudioLog_OnError_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioLog_OnError_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioLog_OnError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnError_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioLog_OnSetVolume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnSetVolume_Params.prototype.initDefaults_ = function() {
    this.volume = 0;
  };
  AudioLog_OnSetVolume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnSetVolume_Params.validate = function(messageValidator, offset) {
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

  AudioLog_OnSetVolume_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioLog_OnSetVolume_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnSetVolume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.volume = decoder.decodeStruct(codec.Double);
    return val;
  };

  AudioLog_OnSetVolume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnSetVolume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.volume);
  };
  function AudioLog_OnProcessingStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnProcessingStateChanged_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  AudioLog_OnProcessingStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnProcessingStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate AudioLog_OnProcessingStateChanged_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioLog_OnProcessingStateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioLog_OnProcessingStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnProcessingStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  AudioLog_OnProcessingStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnProcessingStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
  };
  function AudioLog_OnLogMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLog_OnLogMessage_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  AudioLog_OnLogMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLog_OnLogMessage_Params.validate = function(messageValidator, offset) {
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


    // validate AudioLog_OnLogMessage_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioLog_OnLogMessage_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioLog_OnLogMessage_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLog_OnLogMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  AudioLog_OnLogMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLog_OnLogMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
  };
  function AudioLogFactory_CreateAudioLog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioLogFactory_CreateAudioLog_Params.prototype.initDefaults_ = function() {
    this.component = 0;
    this.componentId = 0;
    this.audioLogRequest = new bindings.InterfaceRequest();
  };
  AudioLogFactory_CreateAudioLog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioLogFactory_CreateAudioLog_Params.validate = function(messageValidator, offset) {
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


    // validate AudioLogFactory_CreateAudioLog_Params.component
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AudioLogComponent);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AudioLogFactory_CreateAudioLog_Params.audioLogRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioLogFactory_CreateAudioLog_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioLogFactory_CreateAudioLog_Params.decode = function(decoder) {
    var packed;
    var val = new AudioLogFactory_CreateAudioLog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.component = decoder.decodeStruct(codec.Int32);
    val.componentId = decoder.decodeStruct(codec.Int32);
    val.audioLogRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioLogFactory_CreateAudioLog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioLogFactory_CreateAudioLog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.component);
    encoder.encodeStruct(codec.Int32, val.componentId);
    encoder.encodeStruct(codec.InterfaceRequest, val.audioLogRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAudioLog_OnCreated_Name = 0;
  var kAudioLog_OnStarted_Name = 1;
  var kAudioLog_OnStopped_Name = 2;
  var kAudioLog_OnClosed_Name = 3;
  var kAudioLog_OnError_Name = 4;
  var kAudioLog_OnSetVolume_Name = 5;
  var kAudioLog_OnProcessingStateChanged_Name = 6;
  var kAudioLog_OnLogMessage_Name = 7;

  function AudioLogPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioLog,
                                                   handleOrPtrInfo);
  }

  function AudioLogAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioLog, associatedInterfacePtrInfo);
  }

  AudioLogAssociatedPtr.prototype =
      Object.create(AudioLogPtr.prototype);
  AudioLogAssociatedPtr.prototype.constructor =
      AudioLogAssociatedPtr;

  function AudioLogProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioLogPtr.prototype.onCreated = function() {
    return AudioLogProxy.prototype.onCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onCreated = function(params, deviceId) {
    var params_ = new AudioLog_OnCreated_Params();
    params_.params = params;
    params_.deviceId = deviceId;
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnCreated_Name,
        codec.align(AudioLog_OnCreated_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onStarted = function() {
    return AudioLogProxy.prototype.onStarted
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onStarted = function() {
    var params_ = new AudioLog_OnStarted_Params();
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnStarted_Name,
        codec.align(AudioLog_OnStarted_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnStarted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onStopped = function() {
    return AudioLogProxy.prototype.onStopped
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onStopped = function() {
    var params_ = new AudioLog_OnStopped_Params();
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnStopped_Name,
        codec.align(AudioLog_OnStopped_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnStopped_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onClosed = function() {
    return AudioLogProxy.prototype.onClosed
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onClosed = function() {
    var params_ = new AudioLog_OnClosed_Params();
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnClosed_Name,
        codec.align(AudioLog_OnClosed_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnClosed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onError = function() {
    return AudioLogProxy.prototype.onError
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onError = function() {
    var params_ = new AudioLog_OnError_Params();
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnError_Name,
        codec.align(AudioLog_OnError_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onSetVolume = function() {
    return AudioLogProxy.prototype.onSetVolume
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onSetVolume = function(volume) {
    var params_ = new AudioLog_OnSetVolume_Params();
    params_.volume = volume;
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnSetVolume_Name,
        codec.align(AudioLog_OnSetVolume_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnSetVolume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onProcessingStateChanged = function() {
    return AudioLogProxy.prototype.onProcessingStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onProcessingStateChanged = function(message) {
    var params_ = new AudioLog_OnProcessingStateChanged_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnProcessingStateChanged_Name,
        codec.align(AudioLog_OnProcessingStateChanged_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnProcessingStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioLogPtr.prototype.onLogMessage = function() {
    return AudioLogProxy.prototype.onLogMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogProxy.prototype.onLogMessage = function(message) {
    var params_ = new AudioLog_OnLogMessage_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kAudioLog_OnLogMessage_Name,
        codec.align(AudioLog_OnLogMessage_Params.encodedSize));
    builder.encodeStruct(AudioLog_OnLogMessage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioLogStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioLogStub.prototype.onCreated = function(params, deviceId) {
    return this.delegate_ && this.delegate_.onCreated && this.delegate_.onCreated(params, deviceId);
  }
  AudioLogStub.prototype.onStarted = function() {
    return this.delegate_ && this.delegate_.onStarted && this.delegate_.onStarted();
  }
  AudioLogStub.prototype.onStopped = function() {
    return this.delegate_ && this.delegate_.onStopped && this.delegate_.onStopped();
  }
  AudioLogStub.prototype.onClosed = function() {
    return this.delegate_ && this.delegate_.onClosed && this.delegate_.onClosed();
  }
  AudioLogStub.prototype.onError = function() {
    return this.delegate_ && this.delegate_.onError && this.delegate_.onError();
  }
  AudioLogStub.prototype.onSetVolume = function(volume) {
    return this.delegate_ && this.delegate_.onSetVolume && this.delegate_.onSetVolume(volume);
  }
  AudioLogStub.prototype.onProcessingStateChanged = function(message) {
    return this.delegate_ && this.delegate_.onProcessingStateChanged && this.delegate_.onProcessingStateChanged(message);
  }
  AudioLogStub.prototype.onLogMessage = function(message) {
    return this.delegate_ && this.delegate_.onLogMessage && this.delegate_.onLogMessage(message);
  }

  AudioLogStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioLog_OnCreated_Name:
      var params = reader.decodeStruct(AudioLog_OnCreated_Params);
      this.onCreated(params.params, params.deviceId);
      return true;
    case kAudioLog_OnStarted_Name:
      var params = reader.decodeStruct(AudioLog_OnStarted_Params);
      this.onStarted();
      return true;
    case kAudioLog_OnStopped_Name:
      var params = reader.decodeStruct(AudioLog_OnStopped_Params);
      this.onStopped();
      return true;
    case kAudioLog_OnClosed_Name:
      var params = reader.decodeStruct(AudioLog_OnClosed_Params);
      this.onClosed();
      return true;
    case kAudioLog_OnError_Name:
      var params = reader.decodeStruct(AudioLog_OnError_Params);
      this.onError();
      return true;
    case kAudioLog_OnSetVolume_Name:
      var params = reader.decodeStruct(AudioLog_OnSetVolume_Params);
      this.onSetVolume(params.volume);
      return true;
    case kAudioLog_OnProcessingStateChanged_Name:
      var params = reader.decodeStruct(AudioLog_OnProcessingStateChanged_Params);
      this.onProcessingStateChanged(params.message);
      return true;
    case kAudioLog_OnLogMessage_Name:
      var params = reader.decodeStruct(AudioLog_OnLogMessage_Params);
      this.onLogMessage(params.message);
      return true;
    default:
      return false;
    }
  };

  AudioLogStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioLogRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioLog_OnCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnCreated_Params;
      break;
      case kAudioLog_OnStarted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnStarted_Params;
      break;
      case kAudioLog_OnStopped_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnStopped_Params;
      break;
      case kAudioLog_OnClosed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnClosed_Params;
      break;
      case kAudioLog_OnError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnError_Params;
      break;
      case kAudioLog_OnSetVolume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnSetVolume_Params;
      break;
      case kAudioLog_OnProcessingStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnProcessingStateChanged_Params;
      break;
      case kAudioLog_OnLogMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLog_OnLogMessage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioLogResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioLog = {
    name: 'media.mojom.AudioLog',
    kVersion: 0,
    ptrClass: AudioLogPtr,
    proxyClass: AudioLogProxy,
    stubClass: AudioLogStub,
    validateRequest: validateAudioLogRequest,
    validateResponse: null,
  };
  AudioLogStub.prototype.validator = validateAudioLogRequest;
  AudioLogProxy.prototype.validator = null;
  var kAudioLogFactory_CreateAudioLog_Name = 0;

  function AudioLogFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioLogFactory,
                                                   handleOrPtrInfo);
  }

  function AudioLogFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioLogFactory, associatedInterfacePtrInfo);
  }

  AudioLogFactoryAssociatedPtr.prototype =
      Object.create(AudioLogFactoryPtr.prototype);
  AudioLogFactoryAssociatedPtr.prototype.constructor =
      AudioLogFactoryAssociatedPtr;

  function AudioLogFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioLogFactoryPtr.prototype.createAudioLog = function() {
    return AudioLogFactoryProxy.prototype.createAudioLog
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioLogFactoryProxy.prototype.createAudioLog = function(component, componentId, audioLogRequest) {
    var params_ = new AudioLogFactory_CreateAudioLog_Params();
    params_.component = component;
    params_.componentId = componentId;
    params_.audioLogRequest = audioLogRequest;
    var builder = new codec.MessageV0Builder(
        kAudioLogFactory_CreateAudioLog_Name,
        codec.align(AudioLogFactory_CreateAudioLog_Params.encodedSize));
    builder.encodeStruct(AudioLogFactory_CreateAudioLog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioLogFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioLogFactoryStub.prototype.createAudioLog = function(component, componentId, audioLogRequest) {
    return this.delegate_ && this.delegate_.createAudioLog && this.delegate_.createAudioLog(component, componentId, audioLogRequest);
  }

  AudioLogFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioLogFactory_CreateAudioLog_Name:
      var params = reader.decodeStruct(AudioLogFactory_CreateAudioLog_Params);
      this.createAudioLog(params.component, params.componentId, params.audioLogRequest);
      return true;
    default:
      return false;
    }
  };

  AudioLogFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioLogFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioLogFactory_CreateAudioLog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioLogFactory_CreateAudioLog_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioLogFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioLogFactory = {
    name: 'media.mojom.AudioLogFactory',
    kVersion: 0,
    ptrClass: AudioLogFactoryPtr,
    proxyClass: AudioLogFactoryProxy,
    stubClass: AudioLogFactoryStub,
    validateRequest: validateAudioLogFactoryRequest,
    validateResponse: null,
  };
  AudioLogFactoryStub.prototype.validator = validateAudioLogFactoryRequest;
  AudioLogFactoryProxy.prototype.validator = null;
  exports.AudioLogComponent = AudioLogComponent;
  exports.AudioLog = AudioLog;
  exports.AudioLogPtr = AudioLogPtr;
  exports.AudioLogAssociatedPtr = AudioLogAssociatedPtr;
  exports.AudioLogFactory = AudioLogFactory;
  exports.AudioLogFactoryPtr = AudioLogFactoryPtr;
  exports.AudioLogFactoryAssociatedPtr = AudioLogFactoryAssociatedPtr;
})();