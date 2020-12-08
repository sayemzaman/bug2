// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/webaudio/audio_context_manager.mojom';
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



  function AudioContextManager_AudioContextAudiblePlaybackStarted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioContextManager_AudioContextAudiblePlaybackStarted_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  AudioContextManager_AudioContextAudiblePlaybackStarted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioContextManager_AudioContextAudiblePlaybackStarted_Params.validate = function(messageValidator, offset) {
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

  AudioContextManager_AudioContextAudiblePlaybackStarted_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioContextManager_AudioContextAudiblePlaybackStarted_Params.decode = function(decoder) {
    var packed;
    var val = new AudioContextManager_AudioContextAudiblePlaybackStarted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioContextManager_AudioContextAudiblePlaybackStarted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioContextManager_AudioContextAudiblePlaybackStarted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioContextManager_AudioContextAudiblePlaybackStopped_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioContextManager_AudioContextAudiblePlaybackStopped_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  AudioContextManager_AudioContextAudiblePlaybackStopped_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioContextManager_AudioContextAudiblePlaybackStopped_Params.validate = function(messageValidator, offset) {
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

  AudioContextManager_AudioContextAudiblePlaybackStopped_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioContextManager_AudioContextAudiblePlaybackStopped_Params.decode = function(decoder) {
    var packed;
    var val = new AudioContextManager_AudioContextAudiblePlaybackStopped_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioContextManager_AudioContextAudiblePlaybackStopped_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioContextManager_AudioContextAudiblePlaybackStopped_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAudioContextManager_AudioContextAudiblePlaybackStarted_Name = 0;
  var kAudioContextManager_AudioContextAudiblePlaybackStopped_Name = 1;

  function AudioContextManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioContextManager,
                                                   handleOrPtrInfo);
  }

  function AudioContextManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioContextManager, associatedInterfacePtrInfo);
  }

  AudioContextManagerAssociatedPtr.prototype =
      Object.create(AudioContextManagerPtr.prototype);
  AudioContextManagerAssociatedPtr.prototype.constructor =
      AudioContextManagerAssociatedPtr;

  function AudioContextManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioContextManagerPtr.prototype.audioContextAudiblePlaybackStarted = function() {
    return AudioContextManagerProxy.prototype.audioContextAudiblePlaybackStarted
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioContextManagerProxy.prototype.audioContextAudiblePlaybackStarted = function(id) {
    var params_ = new AudioContextManager_AudioContextAudiblePlaybackStarted_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kAudioContextManager_AudioContextAudiblePlaybackStarted_Name,
        codec.align(AudioContextManager_AudioContextAudiblePlaybackStarted_Params.encodedSize));
    builder.encodeStruct(AudioContextManager_AudioContextAudiblePlaybackStarted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioContextManagerPtr.prototype.audioContextAudiblePlaybackStopped = function() {
    return AudioContextManagerProxy.prototype.audioContextAudiblePlaybackStopped
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioContextManagerProxy.prototype.audioContextAudiblePlaybackStopped = function(id) {
    var params_ = new AudioContextManager_AudioContextAudiblePlaybackStopped_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kAudioContextManager_AudioContextAudiblePlaybackStopped_Name,
        codec.align(AudioContextManager_AudioContextAudiblePlaybackStopped_Params.encodedSize));
    builder.encodeStruct(AudioContextManager_AudioContextAudiblePlaybackStopped_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioContextManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioContextManagerStub.prototype.audioContextAudiblePlaybackStarted = function(id) {
    return this.delegate_ && this.delegate_.audioContextAudiblePlaybackStarted && this.delegate_.audioContextAudiblePlaybackStarted(id);
  }
  AudioContextManagerStub.prototype.audioContextAudiblePlaybackStopped = function(id) {
    return this.delegate_ && this.delegate_.audioContextAudiblePlaybackStopped && this.delegate_.audioContextAudiblePlaybackStopped(id);
  }

  AudioContextManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioContextManager_AudioContextAudiblePlaybackStarted_Name:
      var params = reader.decodeStruct(AudioContextManager_AudioContextAudiblePlaybackStarted_Params);
      this.audioContextAudiblePlaybackStarted(params.id);
      return true;
    case kAudioContextManager_AudioContextAudiblePlaybackStopped_Name:
      var params = reader.decodeStruct(AudioContextManager_AudioContextAudiblePlaybackStopped_Params);
      this.audioContextAudiblePlaybackStopped(params.id);
      return true;
    default:
      return false;
    }
  };

  AudioContextManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioContextManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioContextManager_AudioContextAudiblePlaybackStarted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioContextManager_AudioContextAudiblePlaybackStarted_Params;
      break;
      case kAudioContextManager_AudioContextAudiblePlaybackStopped_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioContextManager_AudioContextAudiblePlaybackStopped_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioContextManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioContextManager = {
    name: 'blink.mojom.AudioContextManager',
    kVersion: 0,
    ptrClass: AudioContextManagerPtr,
    proxyClass: AudioContextManagerProxy,
    stubClass: AudioContextManagerStub,
    validateRequest: validateAudioContextManagerRequest,
    validateResponse: null,
  };
  AudioContextManagerStub.prototype.validator = validateAudioContextManagerRequest;
  AudioContextManagerProxy.prototype.validator = null;
  exports.AudioContextManager = AudioContextManager;
  exports.AudioContextManagerPtr = AudioContextManagerPtr;
  exports.AudioContextManagerAssociatedPtr = AudioContextManagerAssociatedPtr;
})();