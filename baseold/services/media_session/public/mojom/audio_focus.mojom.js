// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/media_session/public/mojom/audio_focus.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaSession.mojom');
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var media_session$ =
      mojo.internal.exposeNamespace('mediaSession.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/media_session/public/mojom/media_session.mojom', 'media_session.mojom.js');
  }


  var EnforcementMode = {};
  EnforcementMode.kDefault = 0;
  EnforcementMode.kNone = EnforcementMode.kDefault + 1;
  EnforcementMode.kSingleGroup = EnforcementMode.kNone + 1;
  EnforcementMode.kSingleSession = EnforcementMode.kSingleGroup + 1;
  EnforcementMode.MIN_VALUE = 0,
  EnforcementMode.MAX_VALUE = 3,

  EnforcementMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  EnforcementMode.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AudioFocusType = {};
  AudioFocusType.kGain = 0;
  AudioFocusType.kGainTransientMayDuck = AudioFocusType.kGain + 1;
  AudioFocusType.kGainTransient = AudioFocusType.kGainTransientMayDuck + 1;
  AudioFocusType.kAmbient = AudioFocusType.kGainTransient + 1;
  AudioFocusType.MIN_VALUE = 0,
  AudioFocusType.MAX_VALUE = 3,

  AudioFocusType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  AudioFocusType.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AudioFocusRequestState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusRequestState.prototype.initDefaults_ = function() {
    this.sessionInfo = null;
    this.audioFocusType = 0;
    this.sourceName = null;
    this.requestId = null;
  };
  AudioFocusRequestState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusRequestState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24},
      {version: 2, numBytes: 32},
      {version: 3, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusRequestState.sessionInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusRequestState.audioFocusType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, AudioFocusType);
    if (err !== validator.validationError.NONE)
        return err;



    // version check AudioFocusRequestState.sourceName
    if (!messageValidator.isFieldInStructVersion(offset, 2))
      return validator.validationError.NONE;
    // validate AudioFocusRequestState.sourceName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;



    // version check AudioFocusRequestState.requestId
    if (!messageValidator.isFieldInStructVersion(offset, 3))
      return validator.validationError.NONE;
    // validate AudioFocusRequestState.requestId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusRequestState.encodedSize = codec.kStructHeaderSize + 32;

  AudioFocusRequestState.decode = function(decoder) {
    var packed;
    var val = new AudioFocusRequestState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sessionInfo = decoder.decodeStructPointer(media_session$.MediaSessionInfo);
    val.audioFocusType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sourceName = decoder.decodeStruct(codec.NullableString);
    val.requestId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AudioFocusRequestState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusRequestState.encodedSize);
    encoder.writeUint32(3);
    encoder.encodeStructPointer(media_session$.MediaSessionInfo, val.sessionInfo);
    encoder.encodeStruct(codec.Int32, val.audioFocusType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.sourceName);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.requestId);
  };
  function AudioFocusObserver_OnFocusGained_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusObserver_OnFocusGained_Params.prototype.initDefaults_ = function() {
    this.state = null;
  };
  AudioFocusObserver_OnFocusGained_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusObserver_OnFocusGained_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusObserver_OnFocusGained_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, AudioFocusRequestState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusObserver_OnFocusGained_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusObserver_OnFocusGained_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusObserver_OnFocusGained_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStructPointer(AudioFocusRequestState);
    return val;
  };

  AudioFocusObserver_OnFocusGained_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusObserver_OnFocusGained_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(AudioFocusRequestState, val.state);
  };
  function AudioFocusObserver_OnFocusLost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusObserver_OnFocusLost_Params.prototype.initDefaults_ = function() {
    this.state = null;
  };
  AudioFocusObserver_OnFocusLost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusObserver_OnFocusLost_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusObserver_OnFocusLost_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, AudioFocusRequestState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusObserver_OnFocusLost_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusObserver_OnFocusLost_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusObserver_OnFocusLost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStructPointer(AudioFocusRequestState);
    return val;
  };

  AudioFocusObserver_OnFocusLost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusObserver_OnFocusLost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(AudioFocusRequestState, val.state);
  };
  function AudioFocusRequestClient_RequestAudioFocus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusRequestClient_RequestAudioFocus_Params.prototype.initDefaults_ = function() {
    this.sessionInfo = null;
    this.type = 0;
  };
  AudioFocusRequestClient_RequestAudioFocus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusRequestClient_RequestAudioFocus_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusRequestClient_RequestAudioFocus_Params.sessionInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusRequestClient_RequestAudioFocus_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, AudioFocusType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusRequestClient_RequestAudioFocus_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioFocusRequestClient_RequestAudioFocus_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusRequestClient_RequestAudioFocus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sessionInfo = decoder.decodeStructPointer(media_session$.MediaSessionInfo);
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioFocusRequestClient_RequestAudioFocus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusRequestClient_RequestAudioFocus_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_session$.MediaSessionInfo, val.sessionInfo);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioFocusRequestClient_RequestAudioFocus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusRequestClient_RequestAudioFocus_ResponseParams.prototype.initDefaults_ = function() {
  };
  AudioFocusRequestClient_RequestAudioFocus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusRequestClient_RequestAudioFocus_ResponseParams.validate = function(messageValidator, offset) {
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

  AudioFocusRequestClient_RequestAudioFocus_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  AudioFocusRequestClient_RequestAudioFocus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioFocusRequestClient_RequestAudioFocus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioFocusRequestClient_RequestAudioFocus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusRequestClient_RequestAudioFocus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioFocusRequestClient_AbandonAudioFocus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusRequestClient_AbandonAudioFocus_Params.prototype.initDefaults_ = function() {
  };
  AudioFocusRequestClient_AbandonAudioFocus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusRequestClient_AbandonAudioFocus_Params.validate = function(messageValidator, offset) {
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

  AudioFocusRequestClient_AbandonAudioFocus_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioFocusRequestClient_AbandonAudioFocus_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusRequestClient_AbandonAudioFocus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioFocusRequestClient_AbandonAudioFocus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusRequestClient_AbandonAudioFocus_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioFocusRequestClient_MediaSessionInfoChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusRequestClient_MediaSessionInfoChanged_Params.prototype.initDefaults_ = function() {
    this.sessionInfo = null;
  };
  AudioFocusRequestClient_MediaSessionInfoChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusRequestClient_MediaSessionInfoChanged_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusRequestClient_MediaSessionInfoChanged_Params.sessionInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusRequestClient_MediaSessionInfoChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusRequestClient_MediaSessionInfoChanged_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusRequestClient_MediaSessionInfoChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sessionInfo = decoder.decodeStructPointer(media_session$.MediaSessionInfo);
    return val;
  };

  AudioFocusRequestClient_MediaSessionInfoChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusRequestClient_MediaSessionInfoChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_session$.MediaSessionInfo, val.sessionInfo);
  };
  function AudioFocusManager_RequestAudioFocus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_RequestAudioFocus_Params.prototype.initDefaults_ = function() {
    this.client = new bindings.InterfaceRequest();
    this.mediaSession = new media_session$.MediaSessionPtr();
    this.type = 0;
    this.sessionInfo = null;
  };
  AudioFocusManager_RequestAudioFocus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_RequestAudioFocus_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_RequestAudioFocus_Params.client
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestAudioFocus_Params.mediaSession
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestAudioFocus_Params.sessionInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, media_session$.MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestAudioFocus_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, AudioFocusType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_RequestAudioFocus_Params.encodedSize = codec.kStructHeaderSize + 24;

  AudioFocusManager_RequestAudioFocus_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_RequestAudioFocus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.InterfaceRequest);
    val.mediaSession = decoder.decodeStruct(new codec.Interface(media_session$.MediaSessionPtr));
    val.type = decoder.decodeStruct(codec.Int32);
    val.sessionInfo = decoder.decodeStructPointer(media_session$.MediaSessionInfo);
    return val;
  };

  AudioFocusManager_RequestAudioFocus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_RequestAudioFocus_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.client);
    encoder.encodeStruct(new codec.Interface(media_session$.MediaSessionPtr), val.mediaSession);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStructPointer(media_session$.MediaSessionInfo, val.sessionInfo);
  };
  function AudioFocusManager_RequestAudioFocus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_RequestAudioFocus_ResponseParams.prototype.initDefaults_ = function() {
    this.requestId = null;
  };
  AudioFocusManager_RequestAudioFocus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_RequestAudioFocus_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_RequestAudioFocus_ResponseParams.requestId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_RequestAudioFocus_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManager_RequestAudioFocus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_RequestAudioFocus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AudioFocusManager_RequestAudioFocus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_RequestAudioFocus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.requestId);
  };
  function AudioFocusManager_RequestGroupedAudioFocus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_RequestGroupedAudioFocus_Params.prototype.initDefaults_ = function() {
    this.client = new bindings.InterfaceRequest();
    this.mediaSession = new media_session$.MediaSessionPtr();
    this.type = 0;
    this.sessionInfo = null;
    this.groupId = null;
  };
  AudioFocusManager_RequestGroupedAudioFocus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_RequestGroupedAudioFocus_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_RequestGroupedAudioFocus_Params.client
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestGroupedAudioFocus_Params.mediaSession
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestGroupedAudioFocus_Params.sessionInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, media_session$.MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestGroupedAudioFocus_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, AudioFocusType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioFocusManager_RequestGroupedAudioFocus_Params.groupId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_RequestGroupedAudioFocus_Params.encodedSize = codec.kStructHeaderSize + 32;

  AudioFocusManager_RequestGroupedAudioFocus_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_RequestGroupedAudioFocus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.InterfaceRequest);
    val.mediaSession = decoder.decodeStruct(new codec.Interface(media_session$.MediaSessionPtr));
    val.type = decoder.decodeStruct(codec.Int32);
    val.sessionInfo = decoder.decodeStructPointer(media_session$.MediaSessionInfo);
    val.groupId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AudioFocusManager_RequestGroupedAudioFocus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_RequestGroupedAudioFocus_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.client);
    encoder.encodeStruct(new codec.Interface(media_session$.MediaSessionPtr), val.mediaSession);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStructPointer(media_session$.MediaSessionInfo, val.sessionInfo);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.groupId);
  };
  function AudioFocusManager_RequestGroupedAudioFocus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.prototype.initDefaults_ = function() {
    this.requestId = null;
  };
  AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.requestId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_RequestGroupedAudioFocus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.requestId);
  };
  function AudioFocusManager_GetFocusRequests_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_GetFocusRequests_Params.prototype.initDefaults_ = function() {
  };
  AudioFocusManager_GetFocusRequests_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_GetFocusRequests_Params.validate = function(messageValidator, offset) {
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

  AudioFocusManager_GetFocusRequests_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioFocusManager_GetFocusRequests_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_GetFocusRequests_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioFocusManager_GetFocusRequests_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_GetFocusRequests_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioFocusManager_GetFocusRequests_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_GetFocusRequests_ResponseParams.prototype.initDefaults_ = function() {
    this.requests = null;
  };
  AudioFocusManager_GetFocusRequests_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_GetFocusRequests_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_GetFocusRequests_ResponseParams.requests
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(AudioFocusRequestState), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_GetFocusRequests_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManager_GetFocusRequests_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_GetFocusRequests_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requests = decoder.decodeArrayPointer(new codec.PointerTo(AudioFocusRequestState));
    return val;
  };

  AudioFocusManager_GetFocusRequests_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_GetFocusRequests_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(AudioFocusRequestState), val.requests);
  };
  function AudioFocusManager_AddObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_AddObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new AudioFocusObserverPtr();
  };
  AudioFocusManager_AddObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_AddObserver_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_AddObserver_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_AddObserver_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManager_AddObserver_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_AddObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(new codec.Interface(AudioFocusObserverPtr));
    return val;
  };

  AudioFocusManager_AddObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_AddObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(AudioFocusObserverPtr), val.observer);
  };
  function AudioFocusManager_SetSourceName_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_SetSourceName_Params.prototype.initDefaults_ = function() {
    this.name = null;
  };
  AudioFocusManager_SetSourceName_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_SetSourceName_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_SetSourceName_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_SetSourceName_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManager_SetSourceName_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_SetSourceName_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  AudioFocusManager_SetSourceName_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_SetSourceName_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
  };
  function AudioFocusManager_SetEnforcementMode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManager_SetEnforcementMode_Params.prototype.initDefaults_ = function() {
    this.mode = 0;
  };
  AudioFocusManager_SetEnforcementMode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManager_SetEnforcementMode_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManager_SetEnforcementMode_Params.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, EnforcementMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManager_SetEnforcementMode_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManager_SetEnforcementMode_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManager_SetEnforcementMode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioFocusManager_SetEnforcementMode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManager_SetEnforcementMode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioFocusManagerDebug_GetDebugInfoForRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManagerDebug_GetDebugInfoForRequest_Params.prototype.initDefaults_ = function() {
    this.requestId = null;
  };
  AudioFocusManagerDebug_GetDebugInfoForRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManagerDebug_GetDebugInfoForRequest_Params.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManagerDebug_GetDebugInfoForRequest_Params.requestId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManagerDebug_GetDebugInfoForRequest_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManagerDebug_GetDebugInfoForRequest_Params.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManagerDebug_GetDebugInfoForRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AudioFocusManagerDebug_GetDebugInfoForRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManagerDebug_GetDebugInfoForRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.requestId);
  };
  function AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.debugInfo = null;
  };
  AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.debugInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionDebugInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.debugInfo = decoder.decodeStructPointer(media_session$.MediaSessionDebugInfo);
    return val;
  };

  AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_session$.MediaSessionDebugInfo, val.debugInfo);
  };
  var kAudioFocusObserver_OnFocusGained_Name = 0;
  var kAudioFocusObserver_OnFocusLost_Name = 1;

  function AudioFocusObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioFocusObserver,
                                                   handleOrPtrInfo);
  }

  function AudioFocusObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioFocusObserver, associatedInterfacePtrInfo);
  }

  AudioFocusObserverAssociatedPtr.prototype =
      Object.create(AudioFocusObserverPtr.prototype);
  AudioFocusObserverAssociatedPtr.prototype.constructor =
      AudioFocusObserverAssociatedPtr;

  function AudioFocusObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioFocusObserverPtr.prototype.onFocusGained = function() {
    return AudioFocusObserverProxy.prototype.onFocusGained
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusObserverProxy.prototype.onFocusGained = function(state) {
    var params_ = new AudioFocusObserver_OnFocusGained_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kAudioFocusObserver_OnFocusGained_Name,
        codec.align(AudioFocusObserver_OnFocusGained_Params.encodedSize));
    builder.encodeStruct(AudioFocusObserver_OnFocusGained_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioFocusObserverPtr.prototype.onFocusLost = function() {
    return AudioFocusObserverProxy.prototype.onFocusLost
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusObserverProxy.prototype.onFocusLost = function(state) {
    var params_ = new AudioFocusObserver_OnFocusLost_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kAudioFocusObserver_OnFocusLost_Name,
        codec.align(AudioFocusObserver_OnFocusLost_Params.encodedSize));
    builder.encodeStruct(AudioFocusObserver_OnFocusLost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioFocusObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioFocusObserverStub.prototype.onFocusGained = function(state) {
    return this.delegate_ && this.delegate_.onFocusGained && this.delegate_.onFocusGained(state);
  }
  AudioFocusObserverStub.prototype.onFocusLost = function(state) {
    return this.delegate_ && this.delegate_.onFocusLost && this.delegate_.onFocusLost(state);
  }

  AudioFocusObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioFocusObserver_OnFocusGained_Name:
      var params = reader.decodeStruct(AudioFocusObserver_OnFocusGained_Params);
      this.onFocusGained(params.state);
      return true;
    case kAudioFocusObserver_OnFocusLost_Name:
      var params = reader.decodeStruct(AudioFocusObserver_OnFocusLost_Params);
      this.onFocusLost(params.state);
      return true;
    default:
      return false;
    }
  };

  AudioFocusObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioFocusObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioFocusObserver_OnFocusGained_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusObserver_OnFocusGained_Params;
      break;
      case kAudioFocusObserver_OnFocusLost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusObserver_OnFocusLost_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioFocusObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioFocusObserver = {
    name: 'media_session.mojom.AudioFocusObserver',
    kVersion: 0,
    ptrClass: AudioFocusObserverPtr,
    proxyClass: AudioFocusObserverProxy,
    stubClass: AudioFocusObserverStub,
    validateRequest: validateAudioFocusObserverRequest,
    validateResponse: null,
  };
  AudioFocusObserverStub.prototype.validator = validateAudioFocusObserverRequest;
  AudioFocusObserverProxy.prototype.validator = null;
  var kAudioFocusRequestClient_RequestAudioFocus_Name = 0;
  var kAudioFocusRequestClient_AbandonAudioFocus_Name = 1;
  var kAudioFocusRequestClient_MediaSessionInfoChanged_Name = 2;

  function AudioFocusRequestClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioFocusRequestClient,
                                                   handleOrPtrInfo);
  }

  function AudioFocusRequestClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioFocusRequestClient, associatedInterfacePtrInfo);
  }

  AudioFocusRequestClientAssociatedPtr.prototype =
      Object.create(AudioFocusRequestClientPtr.prototype);
  AudioFocusRequestClientAssociatedPtr.prototype.constructor =
      AudioFocusRequestClientAssociatedPtr;

  function AudioFocusRequestClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioFocusRequestClientPtr.prototype.requestAudioFocus = function() {
    return AudioFocusRequestClientProxy.prototype.requestAudioFocus
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusRequestClientProxy.prototype.requestAudioFocus = function(sessionInfo, type) {
    var params_ = new AudioFocusRequestClient_RequestAudioFocus_Params();
    params_.sessionInfo = sessionInfo;
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioFocusRequestClient_RequestAudioFocus_Name,
          codec.align(AudioFocusRequestClient_RequestAudioFocus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioFocusRequestClient_RequestAudioFocus_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioFocusRequestClient_RequestAudioFocus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioFocusRequestClientPtr.prototype.abandonAudioFocus = function() {
    return AudioFocusRequestClientProxy.prototype.abandonAudioFocus
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusRequestClientProxy.prototype.abandonAudioFocus = function() {
    var params_ = new AudioFocusRequestClient_AbandonAudioFocus_Params();
    var builder = new codec.MessageV0Builder(
        kAudioFocusRequestClient_AbandonAudioFocus_Name,
        codec.align(AudioFocusRequestClient_AbandonAudioFocus_Params.encodedSize));
    builder.encodeStruct(AudioFocusRequestClient_AbandonAudioFocus_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioFocusRequestClientPtr.prototype.mediaSessionInfoChanged = function() {
    return AudioFocusRequestClientProxy.prototype.mediaSessionInfoChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusRequestClientProxy.prototype.mediaSessionInfoChanged = function(sessionInfo) {
    var params_ = new AudioFocusRequestClient_MediaSessionInfoChanged_Params();
    params_.sessionInfo = sessionInfo;
    var builder = new codec.MessageV0Builder(
        kAudioFocusRequestClient_MediaSessionInfoChanged_Name,
        codec.align(AudioFocusRequestClient_MediaSessionInfoChanged_Params.encodedSize));
    builder.encodeStruct(AudioFocusRequestClient_MediaSessionInfoChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioFocusRequestClientStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioFocusRequestClientStub.prototype.requestAudioFocus = function(sessionInfo, type) {
    return this.delegate_ && this.delegate_.requestAudioFocus && this.delegate_.requestAudioFocus(sessionInfo, type);
  }
  AudioFocusRequestClientStub.prototype.abandonAudioFocus = function() {
    return this.delegate_ && this.delegate_.abandonAudioFocus && this.delegate_.abandonAudioFocus();
  }
  AudioFocusRequestClientStub.prototype.mediaSessionInfoChanged = function(sessionInfo) {
    return this.delegate_ && this.delegate_.mediaSessionInfoChanged && this.delegate_.mediaSessionInfoChanged(sessionInfo);
  }

  AudioFocusRequestClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioFocusRequestClient_AbandonAudioFocus_Name:
      var params = reader.decodeStruct(AudioFocusRequestClient_AbandonAudioFocus_Params);
      this.abandonAudioFocus();
      return true;
    case kAudioFocusRequestClient_MediaSessionInfoChanged_Name:
      var params = reader.decodeStruct(AudioFocusRequestClient_MediaSessionInfoChanged_Params);
      this.mediaSessionInfoChanged(params.sessionInfo);
      return true;
    default:
      return false;
    }
  };

  AudioFocusRequestClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioFocusRequestClient_RequestAudioFocus_Name:
      var params = reader.decodeStruct(AudioFocusRequestClient_RequestAudioFocus_Params);
      this.requestAudioFocus(params.sessionInfo, params.type).then(function(response) {
        var responseParams =
            new AudioFocusRequestClient_RequestAudioFocus_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kAudioFocusRequestClient_RequestAudioFocus_Name,
            codec.align(AudioFocusRequestClient_RequestAudioFocus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioFocusRequestClient_RequestAudioFocus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAudioFocusRequestClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioFocusRequestClient_RequestAudioFocus_Name:
        if (message.expectsResponse())
          paramsClass = AudioFocusRequestClient_RequestAudioFocus_Params;
      break;
      case kAudioFocusRequestClient_AbandonAudioFocus_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusRequestClient_AbandonAudioFocus_Params;
      break;
      case kAudioFocusRequestClient_MediaSessionInfoChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusRequestClient_MediaSessionInfoChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioFocusRequestClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAudioFocusRequestClient_RequestAudioFocus_Name:
        if (message.isResponse())
          paramsClass = AudioFocusRequestClient_RequestAudioFocus_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AudioFocusRequestClient = {
    name: 'media_session.mojom.AudioFocusRequestClient',
    kVersion: 0,
    ptrClass: AudioFocusRequestClientPtr,
    proxyClass: AudioFocusRequestClientProxy,
    stubClass: AudioFocusRequestClientStub,
    validateRequest: validateAudioFocusRequestClientRequest,
    validateResponse: validateAudioFocusRequestClientResponse,
  };
  AudioFocusRequestClientStub.prototype.validator = validateAudioFocusRequestClientRequest;
  AudioFocusRequestClientProxy.prototype.validator = validateAudioFocusRequestClientResponse;
  var kAudioFocusManager_RequestAudioFocus_Name = 0;
  var kAudioFocusManager_RequestGroupedAudioFocus_Name = 4;
  var kAudioFocusManager_GetFocusRequests_Name = 1;
  var kAudioFocusManager_AddObserver_Name = 2;
  var kAudioFocusManager_SetSourceName_Name = 3;
  var kAudioFocusManager_SetEnforcementMode_Name = 5;

  function AudioFocusManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioFocusManager,
                                                   handleOrPtrInfo);
  }

  function AudioFocusManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioFocusManager, associatedInterfacePtrInfo);
  }

  AudioFocusManagerAssociatedPtr.prototype =
      Object.create(AudioFocusManagerPtr.prototype);
  AudioFocusManagerAssociatedPtr.prototype.constructor =
      AudioFocusManagerAssociatedPtr;

  function AudioFocusManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioFocusManagerPtr.prototype.requestAudioFocus = function() {
    return AudioFocusManagerProxy.prototype.requestAudioFocus
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerProxy.prototype.requestAudioFocus = function(client, mediaSession, sessionInfo, type) {
    var params_ = new AudioFocusManager_RequestAudioFocus_Params();
    params_.client = client;
    params_.mediaSession = mediaSession;
    params_.sessionInfo = sessionInfo;
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioFocusManager_RequestAudioFocus_Name,
          codec.align(AudioFocusManager_RequestAudioFocus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioFocusManager_RequestAudioFocus_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioFocusManager_RequestAudioFocus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioFocusManagerPtr.prototype.requestGroupedAudioFocus = function() {
    return AudioFocusManagerProxy.prototype.requestGroupedAudioFocus
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerProxy.prototype.requestGroupedAudioFocus = function(client, mediaSession, sessionInfo, type, groupId) {
    var params_ = new AudioFocusManager_RequestGroupedAudioFocus_Params();
    params_.client = client;
    params_.mediaSession = mediaSession;
    params_.sessionInfo = sessionInfo;
    params_.type = type;
    params_.groupId = groupId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioFocusManager_RequestGroupedAudioFocus_Name,
          codec.align(AudioFocusManager_RequestGroupedAudioFocus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioFocusManager_RequestGroupedAudioFocus_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioFocusManager_RequestGroupedAudioFocus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioFocusManagerPtr.prototype.getFocusRequests = function() {
    return AudioFocusManagerProxy.prototype.getFocusRequests
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerProxy.prototype.getFocusRequests = function() {
    var params_ = new AudioFocusManager_GetFocusRequests_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioFocusManager_GetFocusRequests_Name,
          codec.align(AudioFocusManager_GetFocusRequests_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioFocusManager_GetFocusRequests_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioFocusManager_GetFocusRequests_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioFocusManagerPtr.prototype.addObserver = function() {
    return AudioFocusManagerProxy.prototype.addObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerProxy.prototype.addObserver = function(observer) {
    var params_ = new AudioFocusManager_AddObserver_Params();
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kAudioFocusManager_AddObserver_Name,
        codec.align(AudioFocusManager_AddObserver_Params.encodedSize));
    builder.encodeStruct(AudioFocusManager_AddObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioFocusManagerPtr.prototype.setSourceName = function() {
    return AudioFocusManagerProxy.prototype.setSourceName
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerProxy.prototype.setSourceName = function(name) {
    var params_ = new AudioFocusManager_SetSourceName_Params();
    params_.name = name;
    var builder = new codec.MessageV0Builder(
        kAudioFocusManager_SetSourceName_Name,
        codec.align(AudioFocusManager_SetSourceName_Params.encodedSize));
    builder.encodeStruct(AudioFocusManager_SetSourceName_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioFocusManagerPtr.prototype.setEnforcementMode = function() {
    return AudioFocusManagerProxy.prototype.setEnforcementMode
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerProxy.prototype.setEnforcementMode = function(mode) {
    var params_ = new AudioFocusManager_SetEnforcementMode_Params();
    params_.mode = mode;
    var builder = new codec.MessageV0Builder(
        kAudioFocusManager_SetEnforcementMode_Name,
        codec.align(AudioFocusManager_SetEnforcementMode_Params.encodedSize));
    builder.encodeStruct(AudioFocusManager_SetEnforcementMode_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioFocusManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioFocusManagerStub.prototype.requestAudioFocus = function(client, mediaSession, sessionInfo, type) {
    return this.delegate_ && this.delegate_.requestAudioFocus && this.delegate_.requestAudioFocus(client, mediaSession, sessionInfo, type);
  }
  AudioFocusManagerStub.prototype.requestGroupedAudioFocus = function(client, mediaSession, sessionInfo, type, groupId) {
    return this.delegate_ && this.delegate_.requestGroupedAudioFocus && this.delegate_.requestGroupedAudioFocus(client, mediaSession, sessionInfo, type, groupId);
  }
  AudioFocusManagerStub.prototype.getFocusRequests = function() {
    return this.delegate_ && this.delegate_.getFocusRequests && this.delegate_.getFocusRequests();
  }
  AudioFocusManagerStub.prototype.addObserver = function(observer) {
    return this.delegate_ && this.delegate_.addObserver && this.delegate_.addObserver(observer);
  }
  AudioFocusManagerStub.prototype.setSourceName = function(name) {
    return this.delegate_ && this.delegate_.setSourceName && this.delegate_.setSourceName(name);
  }
  AudioFocusManagerStub.prototype.setEnforcementMode = function(mode) {
    return this.delegate_ && this.delegate_.setEnforcementMode && this.delegate_.setEnforcementMode(mode);
  }

  AudioFocusManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioFocusManager_AddObserver_Name:
      var params = reader.decodeStruct(AudioFocusManager_AddObserver_Params);
      this.addObserver(params.observer);
      return true;
    case kAudioFocusManager_SetSourceName_Name:
      var params = reader.decodeStruct(AudioFocusManager_SetSourceName_Params);
      this.setSourceName(params.name);
      return true;
    case kAudioFocusManager_SetEnforcementMode_Name:
      var params = reader.decodeStruct(AudioFocusManager_SetEnforcementMode_Params);
      this.setEnforcementMode(params.mode);
      return true;
    default:
      return false;
    }
  };

  AudioFocusManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioFocusManager_RequestAudioFocus_Name:
      var params = reader.decodeStruct(AudioFocusManager_RequestAudioFocus_Params);
      this.requestAudioFocus(params.client, params.mediaSession, params.sessionInfo, params.type).then(function(response) {
        var responseParams =
            new AudioFocusManager_RequestAudioFocus_ResponseParams();
        responseParams.requestId = response.requestId;
        var builder = new codec.MessageV1Builder(
            kAudioFocusManager_RequestAudioFocus_Name,
            codec.align(AudioFocusManager_RequestAudioFocus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioFocusManager_RequestAudioFocus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAudioFocusManager_RequestGroupedAudioFocus_Name:
      var params = reader.decodeStruct(AudioFocusManager_RequestGroupedAudioFocus_Params);
      this.requestGroupedAudioFocus(params.client, params.mediaSession, params.sessionInfo, params.type, params.groupId).then(function(response) {
        var responseParams =
            new AudioFocusManager_RequestGroupedAudioFocus_ResponseParams();
        responseParams.requestId = response.requestId;
        var builder = new codec.MessageV1Builder(
            kAudioFocusManager_RequestGroupedAudioFocus_Name,
            codec.align(AudioFocusManager_RequestGroupedAudioFocus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioFocusManager_RequestGroupedAudioFocus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAudioFocusManager_GetFocusRequests_Name:
      var params = reader.decodeStruct(AudioFocusManager_GetFocusRequests_Params);
      this.getFocusRequests().then(function(response) {
        var responseParams =
            new AudioFocusManager_GetFocusRequests_ResponseParams();
        responseParams.requests = response.requests;
        var builder = new codec.MessageV1Builder(
            kAudioFocusManager_GetFocusRequests_Name,
            codec.align(AudioFocusManager_GetFocusRequests_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioFocusManager_GetFocusRequests_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAudioFocusManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioFocusManager_RequestAudioFocus_Name:
        if (message.expectsResponse())
          paramsClass = AudioFocusManager_RequestAudioFocus_Params;
      break;
      case kAudioFocusManager_RequestGroupedAudioFocus_Name:
        if (message.expectsResponse())
          paramsClass = AudioFocusManager_RequestGroupedAudioFocus_Params;
      break;
      case kAudioFocusManager_GetFocusRequests_Name:
        if (message.expectsResponse())
          paramsClass = AudioFocusManager_GetFocusRequests_Params;
      break;
      case kAudioFocusManager_AddObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusManager_AddObserver_Params;
      break;
      case kAudioFocusManager_SetSourceName_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusManager_SetSourceName_Params;
      break;
      case kAudioFocusManager_SetEnforcementMode_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioFocusManager_SetEnforcementMode_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioFocusManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAudioFocusManager_RequestAudioFocus_Name:
        if (message.isResponse())
          paramsClass = AudioFocusManager_RequestAudioFocus_ResponseParams;
        break;
      case kAudioFocusManager_RequestGroupedAudioFocus_Name:
        if (message.isResponse())
          paramsClass = AudioFocusManager_RequestGroupedAudioFocus_ResponseParams;
        break;
      case kAudioFocusManager_GetFocusRequests_Name:
        if (message.isResponse())
          paramsClass = AudioFocusManager_GetFocusRequests_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AudioFocusManager = {
    name: 'media_session.mojom.AudioFocusManager',
    kVersion: 5,
    ptrClass: AudioFocusManagerPtr,
    proxyClass: AudioFocusManagerProxy,
    stubClass: AudioFocusManagerStub,
    validateRequest: validateAudioFocusManagerRequest,
    validateResponse: validateAudioFocusManagerResponse,
  };
  AudioFocusManagerStub.prototype.validator = validateAudioFocusManagerRequest;
  AudioFocusManagerProxy.prototype.validator = validateAudioFocusManagerResponse;
  var kAudioFocusManagerDebug_GetDebugInfoForRequest_Name = 0;

  function AudioFocusManagerDebugPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioFocusManagerDebug,
                                                   handleOrPtrInfo);
  }

  function AudioFocusManagerDebugAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioFocusManagerDebug, associatedInterfacePtrInfo);
  }

  AudioFocusManagerDebugAssociatedPtr.prototype =
      Object.create(AudioFocusManagerDebugPtr.prototype);
  AudioFocusManagerDebugAssociatedPtr.prototype.constructor =
      AudioFocusManagerDebugAssociatedPtr;

  function AudioFocusManagerDebugProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioFocusManagerDebugPtr.prototype.getDebugInfoForRequest = function() {
    return AudioFocusManagerDebugProxy.prototype.getDebugInfoForRequest
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioFocusManagerDebugProxy.prototype.getDebugInfoForRequest = function(requestId) {
    var params_ = new AudioFocusManagerDebug_GetDebugInfoForRequest_Params();
    params_.requestId = requestId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioFocusManagerDebug_GetDebugInfoForRequest_Name,
          codec.align(AudioFocusManagerDebug_GetDebugInfoForRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioFocusManagerDebug_GetDebugInfoForRequest_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AudioFocusManagerDebugStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioFocusManagerDebugStub.prototype.getDebugInfoForRequest = function(requestId) {
    return this.delegate_ && this.delegate_.getDebugInfoForRequest && this.delegate_.getDebugInfoForRequest(requestId);
  }

  AudioFocusManagerDebugStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  AudioFocusManagerDebugStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioFocusManagerDebug_GetDebugInfoForRequest_Name:
      var params = reader.decodeStruct(AudioFocusManagerDebug_GetDebugInfoForRequest_Params);
      this.getDebugInfoForRequest(params.requestId).then(function(response) {
        var responseParams =
            new AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams();
        responseParams.debugInfo = response.debugInfo;
        var builder = new codec.MessageV1Builder(
            kAudioFocusManagerDebug_GetDebugInfoForRequest_Name,
            codec.align(AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAudioFocusManagerDebugRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioFocusManagerDebug_GetDebugInfoForRequest_Name:
        if (message.expectsResponse())
          paramsClass = AudioFocusManagerDebug_GetDebugInfoForRequest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioFocusManagerDebugResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAudioFocusManagerDebug_GetDebugInfoForRequest_Name:
        if (message.isResponse())
          paramsClass = AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AudioFocusManagerDebug = {
    name: 'media_session.mojom.AudioFocusManagerDebug',
    kVersion: 0,
    ptrClass: AudioFocusManagerDebugPtr,
    proxyClass: AudioFocusManagerDebugProxy,
    stubClass: AudioFocusManagerDebugStub,
    validateRequest: validateAudioFocusManagerDebugRequest,
    validateResponse: validateAudioFocusManagerDebugResponse,
  };
  AudioFocusManagerDebugStub.prototype.validator = validateAudioFocusManagerDebugRequest;
  AudioFocusManagerDebugProxy.prototype.validator = validateAudioFocusManagerDebugResponse;
  exports.EnforcementMode = EnforcementMode;
  exports.AudioFocusType = AudioFocusType;
  exports.AudioFocusRequestState = AudioFocusRequestState;
  exports.AudioFocusObserver = AudioFocusObserver;
  exports.AudioFocusObserverPtr = AudioFocusObserverPtr;
  exports.AudioFocusObserverAssociatedPtr = AudioFocusObserverAssociatedPtr;
  exports.AudioFocusRequestClient = AudioFocusRequestClient;
  exports.AudioFocusRequestClientPtr = AudioFocusRequestClientPtr;
  exports.AudioFocusRequestClientAssociatedPtr = AudioFocusRequestClientAssociatedPtr;
  exports.AudioFocusManager = AudioFocusManager;
  exports.AudioFocusManagerPtr = AudioFocusManagerPtr;
  exports.AudioFocusManagerAssociatedPtr = AudioFocusManagerAssociatedPtr;
  exports.AudioFocusManagerDebug = AudioFocusManagerDebug;
  exports.AudioFocusManagerDebugPtr = AudioFocusManagerDebugPtr;
  exports.AudioFocusManagerDebugAssociatedPtr = AudioFocusManagerDebugAssociatedPtr;
})();