// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/media_session/public/mojom/media_controller.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
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



  function MediaControllerManager_CreateMediaControllerForSession_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerManager_CreateMediaControllerForSession_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
    this.requestId = null;
  };
  MediaControllerManager_CreateMediaControllerForSession_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerManager_CreateMediaControllerForSession_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerManager_CreateMediaControllerForSession_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaControllerManager_CreateMediaControllerForSession_Params.requestId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerManager_CreateMediaControllerForSession_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaControllerManager_CreateMediaControllerForSession_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerManager_CreateMediaControllerForSession_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.requestId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  MediaControllerManager_CreateMediaControllerForSession_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerManager_CreateMediaControllerForSession_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.requestId);
  };
  function MediaControllerManager_CreateActiveMediaController_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerManager_CreateActiveMediaController_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
  };
  MediaControllerManager_CreateActiveMediaController_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerManager_CreateActiveMediaController_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerManager_CreateActiveMediaController_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerManager_CreateActiveMediaController_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaControllerManager_CreateActiveMediaController_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerManager_CreateActiveMediaController_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaControllerManager_CreateActiveMediaController_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerManager_CreateActiveMediaController_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaControllerManager_SuspendAllSessions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerManager_SuspendAllSessions_Params.prototype.initDefaults_ = function() {
  };
  MediaControllerManager_SuspendAllSessions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerManager_SuspendAllSessions_Params.validate = function(messageValidator, offset) {
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

  MediaControllerManager_SuspendAllSessions_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaControllerManager_SuspendAllSessions_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerManager_SuspendAllSessions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaControllerManager_SuspendAllSessions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerManager_SuspendAllSessions_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_Suspend_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Suspend_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Suspend_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Suspend_Params.validate = function(messageValidator, offset) {
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

  MediaController_Suspend_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Suspend_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Suspend_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Suspend_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Suspend_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_Resume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Resume_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Resume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Resume_Params.validate = function(messageValidator, offset) {
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

  MediaController_Resume_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Resume_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Resume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Resume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Resume_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_Stop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Stop_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Stop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Stop_Params.validate = function(messageValidator, offset) {
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

  MediaController_Stop_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Stop_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Stop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Stop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Stop_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_ToggleSuspendResume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_ToggleSuspendResume_Params.prototype.initDefaults_ = function() {
  };
  MediaController_ToggleSuspendResume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_ToggleSuspendResume_Params.validate = function(messageValidator, offset) {
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

  MediaController_ToggleSuspendResume_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_ToggleSuspendResume_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_ToggleSuspendResume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_ToggleSuspendResume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_ToggleSuspendResume_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_AddObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_AddObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new MediaControllerObserverPtr();
  };
  MediaController_AddObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_AddObserver_Params.validate = function(messageValidator, offset) {
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


    // validate MediaController_AddObserver_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaController_AddObserver_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_AddObserver_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_AddObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(new codec.Interface(MediaControllerObserverPtr));
    return val;
  };

  MediaController_AddObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_AddObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(MediaControllerObserverPtr), val.observer);
  };
  function MediaController_PreviousTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_PreviousTrack_Params.prototype.initDefaults_ = function() {
  };
  MediaController_PreviousTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_PreviousTrack_Params.validate = function(messageValidator, offset) {
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

  MediaController_PreviousTrack_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_PreviousTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_PreviousTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_PreviousTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_PreviousTrack_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_NextTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_NextTrack_Params.prototype.initDefaults_ = function() {
  };
  MediaController_NextTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_NextTrack_Params.validate = function(messageValidator, offset) {
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

  MediaController_NextTrack_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_NextTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_NextTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_NextTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_NextTrack_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_Seek_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Seek_Params.prototype.initDefaults_ = function() {
    this.seekTime = null;
  };
  MediaController_Seek_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Seek_Params.validate = function(messageValidator, offset) {
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


    // validate MediaController_Seek_Params.seekTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaController_Seek_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_Seek_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Seek_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.seekTime = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaController_Seek_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Seek_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.seekTime);
  };
  function MediaController_ObserveImages_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_ObserveImages_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.minimumSizePx = 0;
    this.desiredSizePx = 0;
    this.observer = new MediaControllerImageObserverPtr();
  };
  MediaController_ObserveImages_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_ObserveImages_Params.validate = function(messageValidator, offset) {
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


    // validate MediaController_ObserveImages_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionImageType);
    if (err !== validator.validationError.NONE)
        return err;




    // validate MediaController_ObserveImages_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaController_ObserveImages_Params.encodedSize = codec.kStructHeaderSize + 24;

  MediaController_ObserveImages_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_ObserveImages_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.minimumSizePx = decoder.decodeStruct(codec.Int32);
    val.desiredSizePx = decoder.decodeStruct(codec.Int32);
    val.observer = decoder.decodeStruct(new codec.Interface(MediaControllerImageObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaController_ObserveImages_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_ObserveImages_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.minimumSizePx);
    encoder.encodeStruct(codec.Int32, val.desiredSizePx);
    encoder.encodeStruct(new codec.Interface(MediaControllerImageObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaControllerObserver_MediaSessionInfoChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerObserver_MediaSessionInfoChanged_Params.prototype.initDefaults_ = function() {
    this.info = null;
  };
  MediaControllerObserver_MediaSessionInfoChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerObserver_MediaSessionInfoChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerObserver_MediaSessionInfoChanged_Params.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerObserver_MediaSessionInfoChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaControllerObserver_MediaSessionInfoChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerObserver_MediaSessionInfoChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(media_session$.MediaSessionInfo);
    return val;
  };

  MediaControllerObserver_MediaSessionInfoChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerObserver_MediaSessionInfoChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_session$.MediaSessionInfo, val.info);
  };
  function MediaControllerObserver_MediaSessionMetadataChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerObserver_MediaSessionMetadataChanged_Params.prototype.initDefaults_ = function() {
    this.metadata = null;
  };
  MediaControllerObserver_MediaSessionMetadataChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerObserver_MediaSessionMetadataChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerObserver_MediaSessionMetadataChanged_Params.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_session$.MediaMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerObserver_MediaSessionMetadataChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaControllerObserver_MediaSessionMetadataChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerObserver_MediaSessionMetadataChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metadata = decoder.decodeStructPointer(media_session$.MediaMetadata);
    return val;
  };

  MediaControllerObserver_MediaSessionMetadataChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerObserver_MediaSessionMetadataChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_session$.MediaMetadata, val.metadata);
  };
  function MediaControllerObserver_MediaSessionActionsChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerObserver_MediaSessionActionsChanged_Params.prototype.initDefaults_ = function() {
    this.action = null;
  };
  MediaControllerObserver_MediaSessionActionsChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerObserver_MediaSessionActionsChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerObserver_MediaSessionActionsChanged_Params.action
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(media_session$.MediaSessionAction), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerObserver_MediaSessionActionsChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaControllerObserver_MediaSessionActionsChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerObserver_MediaSessionActionsChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeArrayPointer(new codec.Enum(media_session$.MediaSessionAction));
    return val;
  };

  MediaControllerObserver_MediaSessionActionsChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerObserver_MediaSessionActionsChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(media_session$.MediaSessionAction), val.action);
  };
  function MediaControllerObserver_MediaSessionChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerObserver_MediaSessionChanged_Params.prototype.initDefaults_ = function() {
    this.requestId = null;
  };
  MediaControllerObserver_MediaSessionChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerObserver_MediaSessionChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerObserver_MediaSessionChanged_Params.requestId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerObserver_MediaSessionChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaControllerObserver_MediaSessionChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerObserver_MediaSessionChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  MediaControllerObserver_MediaSessionChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerObserver_MediaSessionChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.requestId);
  };
  function MediaControllerImageObserver_MediaControllerImageChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaControllerImageObserver_MediaControllerImageChanged_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.bitmap = null;
  };
  MediaControllerImageObserver_MediaControllerImageChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaControllerImageObserver_MediaControllerImageChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaControllerImageObserver_MediaControllerImageChanged_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_session$.MediaSessionImageType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaControllerImageObserver_MediaControllerImageChanged_Params.bitmap
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, media_session$.MediaImageBitmap, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaControllerImageObserver_MediaControllerImageChanged_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaControllerImageObserver_MediaControllerImageChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaControllerImageObserver_MediaControllerImageChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.bitmap = decoder.decodeStructPointer(media_session$.MediaImageBitmap);
    return val;
  };

  MediaControllerImageObserver_MediaControllerImageChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaControllerImageObserver_MediaControllerImageChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(media_session$.MediaImageBitmap, val.bitmap);
  };
  var kMediaControllerManager_CreateMediaControllerForSession_Name = 0;
  var kMediaControllerManager_CreateActiveMediaController_Name = 1;
  var kMediaControllerManager_SuspendAllSessions_Name = 2;

  function MediaControllerManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaControllerManager,
                                                   handleOrPtrInfo);
  }

  function MediaControllerManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaControllerManager, associatedInterfacePtrInfo);
  }

  MediaControllerManagerAssociatedPtr.prototype =
      Object.create(MediaControllerManagerPtr.prototype);
  MediaControllerManagerAssociatedPtr.prototype.constructor =
      MediaControllerManagerAssociatedPtr;

  function MediaControllerManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaControllerManagerPtr.prototype.createMediaControllerForSession = function() {
    return MediaControllerManagerProxy.prototype.createMediaControllerForSession
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerManagerProxy.prototype.createMediaControllerForSession = function(request, requestId) {
    var params_ = new MediaControllerManager_CreateMediaControllerForSession_Params();
    params_.request = request;
    params_.requestId = requestId;
    var builder = new codec.MessageV0Builder(
        kMediaControllerManager_CreateMediaControllerForSession_Name,
        codec.align(MediaControllerManager_CreateMediaControllerForSession_Params.encodedSize));
    builder.encodeStruct(MediaControllerManager_CreateMediaControllerForSession_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerManagerPtr.prototype.createActiveMediaController = function() {
    return MediaControllerManagerProxy.prototype.createActiveMediaController
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerManagerProxy.prototype.createActiveMediaController = function(request) {
    var params_ = new MediaControllerManager_CreateActiveMediaController_Params();
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kMediaControllerManager_CreateActiveMediaController_Name,
        codec.align(MediaControllerManager_CreateActiveMediaController_Params.encodedSize));
    builder.encodeStruct(MediaControllerManager_CreateActiveMediaController_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerManagerPtr.prototype.suspendAllSessions = function() {
    return MediaControllerManagerProxy.prototype.suspendAllSessions
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerManagerProxy.prototype.suspendAllSessions = function() {
    var params_ = new MediaControllerManager_SuspendAllSessions_Params();
    var builder = new codec.MessageV0Builder(
        kMediaControllerManager_SuspendAllSessions_Name,
        codec.align(MediaControllerManager_SuspendAllSessions_Params.encodedSize));
    builder.encodeStruct(MediaControllerManager_SuspendAllSessions_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaControllerManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaControllerManagerStub.prototype.createMediaControllerForSession = function(request, requestId) {
    return this.delegate_ && this.delegate_.createMediaControllerForSession && this.delegate_.createMediaControllerForSession(request, requestId);
  }
  MediaControllerManagerStub.prototype.createActiveMediaController = function(request) {
    return this.delegate_ && this.delegate_.createActiveMediaController && this.delegate_.createActiveMediaController(request);
  }
  MediaControllerManagerStub.prototype.suspendAllSessions = function() {
    return this.delegate_ && this.delegate_.suspendAllSessions && this.delegate_.suspendAllSessions();
  }

  MediaControllerManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaControllerManager_CreateMediaControllerForSession_Name:
      var params = reader.decodeStruct(MediaControllerManager_CreateMediaControllerForSession_Params);
      this.createMediaControllerForSession(params.request, params.requestId);
      return true;
    case kMediaControllerManager_CreateActiveMediaController_Name:
      var params = reader.decodeStruct(MediaControllerManager_CreateActiveMediaController_Params);
      this.createActiveMediaController(params.request);
      return true;
    case kMediaControllerManager_SuspendAllSessions_Name:
      var params = reader.decodeStruct(MediaControllerManager_SuspendAllSessions_Params);
      this.suspendAllSessions();
      return true;
    default:
      return false;
    }
  };

  MediaControllerManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaControllerManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaControllerManager_CreateMediaControllerForSession_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerManager_CreateMediaControllerForSession_Params;
      break;
      case kMediaControllerManager_CreateActiveMediaController_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerManager_CreateActiveMediaController_Params;
      break;
      case kMediaControllerManager_SuspendAllSessions_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerManager_SuspendAllSessions_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaControllerManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaControllerManager = {
    name: 'media_session.mojom.MediaControllerManager',
    kVersion: 0,
    ptrClass: MediaControllerManagerPtr,
    proxyClass: MediaControllerManagerProxy,
    stubClass: MediaControllerManagerStub,
    validateRequest: validateMediaControllerManagerRequest,
    validateResponse: null,
  };
  MediaControllerManagerStub.prototype.validator = validateMediaControllerManagerRequest;
  MediaControllerManagerProxy.prototype.validator = null;
  var kMediaController_Suspend_Name = 0;
  var kMediaController_Resume_Name = 1;
  var kMediaController_Stop_Name = 2;
  var kMediaController_ToggleSuspendResume_Name = 3;
  var kMediaController_AddObserver_Name = 4;
  var kMediaController_PreviousTrack_Name = 5;
  var kMediaController_NextTrack_Name = 6;
  var kMediaController_Seek_Name = 7;
  var kMediaController_ObserveImages_Name = 8;

  function MediaControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaController,
                                                   handleOrPtrInfo);
  }

  function MediaControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaController, associatedInterfacePtrInfo);
  }

  MediaControllerAssociatedPtr.prototype =
      Object.create(MediaControllerPtr.prototype);
  MediaControllerAssociatedPtr.prototype.constructor =
      MediaControllerAssociatedPtr;

  function MediaControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaControllerPtr.prototype.suspend = function() {
    return MediaControllerProxy.prototype.suspend
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.suspend = function() {
    var params_ = new MediaController_Suspend_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Suspend_Name,
        codec.align(MediaController_Suspend_Params.encodedSize));
    builder.encodeStruct(MediaController_Suspend_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.resume = function() {
    return MediaControllerProxy.prototype.resume
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.resume = function() {
    var params_ = new MediaController_Resume_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Resume_Name,
        codec.align(MediaController_Resume_Params.encodedSize));
    builder.encodeStruct(MediaController_Resume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.stop = function() {
    return MediaControllerProxy.prototype.stop
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.stop = function() {
    var params_ = new MediaController_Stop_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Stop_Name,
        codec.align(MediaController_Stop_Params.encodedSize));
    builder.encodeStruct(MediaController_Stop_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.toggleSuspendResume = function() {
    return MediaControllerProxy.prototype.toggleSuspendResume
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.toggleSuspendResume = function() {
    var params_ = new MediaController_ToggleSuspendResume_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_ToggleSuspendResume_Name,
        codec.align(MediaController_ToggleSuspendResume_Params.encodedSize));
    builder.encodeStruct(MediaController_ToggleSuspendResume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.addObserver = function() {
    return MediaControllerProxy.prototype.addObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.addObserver = function(observer) {
    var params_ = new MediaController_AddObserver_Params();
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kMediaController_AddObserver_Name,
        codec.align(MediaController_AddObserver_Params.encodedSize));
    builder.encodeStruct(MediaController_AddObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.previousTrack = function() {
    return MediaControllerProxy.prototype.previousTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.previousTrack = function() {
    var params_ = new MediaController_PreviousTrack_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_PreviousTrack_Name,
        codec.align(MediaController_PreviousTrack_Params.encodedSize));
    builder.encodeStruct(MediaController_PreviousTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.nextTrack = function() {
    return MediaControllerProxy.prototype.nextTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.nextTrack = function() {
    var params_ = new MediaController_NextTrack_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_NextTrack_Name,
        codec.align(MediaController_NextTrack_Params.encodedSize));
    builder.encodeStruct(MediaController_NextTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.seek = function() {
    return MediaControllerProxy.prototype.seek
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.seek = function(seekTime) {
    var params_ = new MediaController_Seek_Params();
    params_.seekTime = seekTime;
    var builder = new codec.MessageV0Builder(
        kMediaController_Seek_Name,
        codec.align(MediaController_Seek_Params.encodedSize));
    builder.encodeStruct(MediaController_Seek_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.observeImages = function() {
    return MediaControllerProxy.prototype.observeImages
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.observeImages = function(type, minimumSizePx, desiredSizePx, observer) {
    var params_ = new MediaController_ObserveImages_Params();
    params_.type = type;
    params_.minimumSizePx = minimumSizePx;
    params_.desiredSizePx = desiredSizePx;
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kMediaController_ObserveImages_Name,
        codec.align(MediaController_ObserveImages_Params.encodedSize));
    builder.encodeStruct(MediaController_ObserveImages_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaControllerStub.prototype.suspend = function() {
    return this.delegate_ && this.delegate_.suspend && this.delegate_.suspend();
  }
  MediaControllerStub.prototype.resume = function() {
    return this.delegate_ && this.delegate_.resume && this.delegate_.resume();
  }
  MediaControllerStub.prototype.stop = function() {
    return this.delegate_ && this.delegate_.stop && this.delegate_.stop();
  }
  MediaControllerStub.prototype.toggleSuspendResume = function() {
    return this.delegate_ && this.delegate_.toggleSuspendResume && this.delegate_.toggleSuspendResume();
  }
  MediaControllerStub.prototype.addObserver = function(observer) {
    return this.delegate_ && this.delegate_.addObserver && this.delegate_.addObserver(observer);
  }
  MediaControllerStub.prototype.previousTrack = function() {
    return this.delegate_ && this.delegate_.previousTrack && this.delegate_.previousTrack();
  }
  MediaControllerStub.prototype.nextTrack = function() {
    return this.delegate_ && this.delegate_.nextTrack && this.delegate_.nextTrack();
  }
  MediaControllerStub.prototype.seek = function(seekTime) {
    return this.delegate_ && this.delegate_.seek && this.delegate_.seek(seekTime);
  }
  MediaControllerStub.prototype.observeImages = function(type, minimumSizePx, desiredSizePx, observer) {
    return this.delegate_ && this.delegate_.observeImages && this.delegate_.observeImages(type, minimumSizePx, desiredSizePx, observer);
  }

  MediaControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaController_Suspend_Name:
      var params = reader.decodeStruct(MediaController_Suspend_Params);
      this.suspend();
      return true;
    case kMediaController_Resume_Name:
      var params = reader.decodeStruct(MediaController_Resume_Params);
      this.resume();
      return true;
    case kMediaController_Stop_Name:
      var params = reader.decodeStruct(MediaController_Stop_Params);
      this.stop();
      return true;
    case kMediaController_ToggleSuspendResume_Name:
      var params = reader.decodeStruct(MediaController_ToggleSuspendResume_Params);
      this.toggleSuspendResume();
      return true;
    case kMediaController_AddObserver_Name:
      var params = reader.decodeStruct(MediaController_AddObserver_Params);
      this.addObserver(params.observer);
      return true;
    case kMediaController_PreviousTrack_Name:
      var params = reader.decodeStruct(MediaController_PreviousTrack_Params);
      this.previousTrack();
      return true;
    case kMediaController_NextTrack_Name:
      var params = reader.decodeStruct(MediaController_NextTrack_Params);
      this.nextTrack();
      return true;
    case kMediaController_Seek_Name:
      var params = reader.decodeStruct(MediaController_Seek_Params);
      this.seek(params.seekTime);
      return true;
    case kMediaController_ObserveImages_Name:
      var params = reader.decodeStruct(MediaController_ObserveImages_Params);
      this.observeImages(params.type, params.minimumSizePx, params.desiredSizePx, params.observer);
      return true;
    default:
      return false;
    }
  };

  MediaControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaController_Suspend_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Suspend_Params;
      break;
      case kMediaController_Resume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Resume_Params;
      break;
      case kMediaController_Stop_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Stop_Params;
      break;
      case kMediaController_ToggleSuspendResume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_ToggleSuspendResume_Params;
      break;
      case kMediaController_AddObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_AddObserver_Params;
      break;
      case kMediaController_PreviousTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_PreviousTrack_Params;
      break;
      case kMediaController_NextTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_NextTrack_Params;
      break;
      case kMediaController_Seek_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Seek_Params;
      break;
      case kMediaController_ObserveImages_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_ObserveImages_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaControllerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaController = {
    name: 'media_session.mojom.MediaController',
    kVersion: 0,
    ptrClass: MediaControllerPtr,
    proxyClass: MediaControllerProxy,
    stubClass: MediaControllerStub,
    validateRequest: validateMediaControllerRequest,
    validateResponse: null,
  };
  MediaControllerStub.prototype.validator = validateMediaControllerRequest;
  MediaControllerProxy.prototype.validator = null;
  var kMediaControllerObserver_MediaSessionInfoChanged_Name = 0;
  var kMediaControllerObserver_MediaSessionMetadataChanged_Name = 1;
  var kMediaControllerObserver_MediaSessionActionsChanged_Name = 2;
  var kMediaControllerObserver_MediaSessionChanged_Name = 3;

  function MediaControllerObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaControllerObserver,
                                                   handleOrPtrInfo);
  }

  function MediaControllerObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaControllerObserver, associatedInterfacePtrInfo);
  }

  MediaControllerObserverAssociatedPtr.prototype =
      Object.create(MediaControllerObserverPtr.prototype);
  MediaControllerObserverAssociatedPtr.prototype.constructor =
      MediaControllerObserverAssociatedPtr;

  function MediaControllerObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaControllerObserverPtr.prototype.mediaSessionInfoChanged = function() {
    return MediaControllerObserverProxy.prototype.mediaSessionInfoChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerObserverProxy.prototype.mediaSessionInfoChanged = function(info) {
    var params_ = new MediaControllerObserver_MediaSessionInfoChanged_Params();
    params_.info = info;
    var builder = new codec.MessageV0Builder(
        kMediaControllerObserver_MediaSessionInfoChanged_Name,
        codec.align(MediaControllerObserver_MediaSessionInfoChanged_Params.encodedSize));
    builder.encodeStruct(MediaControllerObserver_MediaSessionInfoChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerObserverPtr.prototype.mediaSessionMetadataChanged = function() {
    return MediaControllerObserverProxy.prototype.mediaSessionMetadataChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerObserverProxy.prototype.mediaSessionMetadataChanged = function(metadata) {
    var params_ = new MediaControllerObserver_MediaSessionMetadataChanged_Params();
    params_.metadata = metadata;
    var builder = new codec.MessageV0Builder(
        kMediaControllerObserver_MediaSessionMetadataChanged_Name,
        codec.align(MediaControllerObserver_MediaSessionMetadataChanged_Params.encodedSize));
    builder.encodeStruct(MediaControllerObserver_MediaSessionMetadataChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerObserverPtr.prototype.mediaSessionActionsChanged = function() {
    return MediaControllerObserverProxy.prototype.mediaSessionActionsChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerObserverProxy.prototype.mediaSessionActionsChanged = function(action) {
    var params_ = new MediaControllerObserver_MediaSessionActionsChanged_Params();
    params_.action = action;
    var builder = new codec.MessageV0Builder(
        kMediaControllerObserver_MediaSessionActionsChanged_Name,
        codec.align(MediaControllerObserver_MediaSessionActionsChanged_Params.encodedSize));
    builder.encodeStruct(MediaControllerObserver_MediaSessionActionsChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerObserverPtr.prototype.mediaSessionChanged = function() {
    return MediaControllerObserverProxy.prototype.mediaSessionChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerObserverProxy.prototype.mediaSessionChanged = function(requestId) {
    var params_ = new MediaControllerObserver_MediaSessionChanged_Params();
    params_.requestId = requestId;
    var builder = new codec.MessageV0Builder(
        kMediaControllerObserver_MediaSessionChanged_Name,
        codec.align(MediaControllerObserver_MediaSessionChanged_Params.encodedSize));
    builder.encodeStruct(MediaControllerObserver_MediaSessionChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaControllerObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaControllerObserverStub.prototype.mediaSessionInfoChanged = function(info) {
    return this.delegate_ && this.delegate_.mediaSessionInfoChanged && this.delegate_.mediaSessionInfoChanged(info);
  }
  MediaControllerObserverStub.prototype.mediaSessionMetadataChanged = function(metadata) {
    return this.delegate_ && this.delegate_.mediaSessionMetadataChanged && this.delegate_.mediaSessionMetadataChanged(metadata);
  }
  MediaControllerObserverStub.prototype.mediaSessionActionsChanged = function(action) {
    return this.delegate_ && this.delegate_.mediaSessionActionsChanged && this.delegate_.mediaSessionActionsChanged(action);
  }
  MediaControllerObserverStub.prototype.mediaSessionChanged = function(requestId) {
    return this.delegate_ && this.delegate_.mediaSessionChanged && this.delegate_.mediaSessionChanged(requestId);
  }

  MediaControllerObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaControllerObserver_MediaSessionInfoChanged_Name:
      var params = reader.decodeStruct(MediaControllerObserver_MediaSessionInfoChanged_Params);
      this.mediaSessionInfoChanged(params.info);
      return true;
    case kMediaControllerObserver_MediaSessionMetadataChanged_Name:
      var params = reader.decodeStruct(MediaControllerObserver_MediaSessionMetadataChanged_Params);
      this.mediaSessionMetadataChanged(params.metadata);
      return true;
    case kMediaControllerObserver_MediaSessionActionsChanged_Name:
      var params = reader.decodeStruct(MediaControllerObserver_MediaSessionActionsChanged_Params);
      this.mediaSessionActionsChanged(params.action);
      return true;
    case kMediaControllerObserver_MediaSessionChanged_Name:
      var params = reader.decodeStruct(MediaControllerObserver_MediaSessionChanged_Params);
      this.mediaSessionChanged(params.requestId);
      return true;
    default:
      return false;
    }
  };

  MediaControllerObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaControllerObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaControllerObserver_MediaSessionInfoChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerObserver_MediaSessionInfoChanged_Params;
      break;
      case kMediaControllerObserver_MediaSessionMetadataChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerObserver_MediaSessionMetadataChanged_Params;
      break;
      case kMediaControllerObserver_MediaSessionActionsChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerObserver_MediaSessionActionsChanged_Params;
      break;
      case kMediaControllerObserver_MediaSessionChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerObserver_MediaSessionChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaControllerObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaControllerObserver = {
    name: 'media_session.mojom.MediaControllerObserver',
    kVersion: 0,
    ptrClass: MediaControllerObserverPtr,
    proxyClass: MediaControllerObserverProxy,
    stubClass: MediaControllerObserverStub,
    validateRequest: validateMediaControllerObserverRequest,
    validateResponse: null,
  };
  MediaControllerObserverStub.prototype.validator = validateMediaControllerObserverRequest;
  MediaControllerObserverProxy.prototype.validator = null;
  var kMediaControllerImageObserver_MediaControllerImageChanged_Name = 0;

  function MediaControllerImageObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaControllerImageObserver,
                                                   handleOrPtrInfo);
  }

  function MediaControllerImageObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaControllerImageObserver, associatedInterfacePtrInfo);
  }

  MediaControllerImageObserverAssociatedPtr.prototype =
      Object.create(MediaControllerImageObserverPtr.prototype);
  MediaControllerImageObserverAssociatedPtr.prototype.constructor =
      MediaControllerImageObserverAssociatedPtr;

  function MediaControllerImageObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaControllerImageObserverPtr.prototype.mediaControllerImageChanged = function() {
    return MediaControllerImageObserverProxy.prototype.mediaControllerImageChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerImageObserverProxy.prototype.mediaControllerImageChanged = function(type, bitmap) {
    var params_ = new MediaControllerImageObserver_MediaControllerImageChanged_Params();
    params_.type = type;
    params_.bitmap = bitmap;
    var builder = new codec.MessageV0Builder(
        kMediaControllerImageObserver_MediaControllerImageChanged_Name,
        codec.align(MediaControllerImageObserver_MediaControllerImageChanged_Params.encodedSize));
    builder.encodeStruct(MediaControllerImageObserver_MediaControllerImageChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaControllerImageObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaControllerImageObserverStub.prototype.mediaControllerImageChanged = function(type, bitmap) {
    return this.delegate_ && this.delegate_.mediaControllerImageChanged && this.delegate_.mediaControllerImageChanged(type, bitmap);
  }

  MediaControllerImageObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaControllerImageObserver_MediaControllerImageChanged_Name:
      var params = reader.decodeStruct(MediaControllerImageObserver_MediaControllerImageChanged_Params);
      this.mediaControllerImageChanged(params.type, params.bitmap);
      return true;
    default:
      return false;
    }
  };

  MediaControllerImageObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaControllerImageObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaControllerImageObserver_MediaControllerImageChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaControllerImageObserver_MediaControllerImageChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaControllerImageObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaControllerImageObserver = {
    name: 'media_session.mojom.MediaControllerImageObserver',
    kVersion: 0,
    ptrClass: MediaControllerImageObserverPtr,
    proxyClass: MediaControllerImageObserverProxy,
    stubClass: MediaControllerImageObserverStub,
    validateRequest: validateMediaControllerImageObserverRequest,
    validateResponse: null,
  };
  MediaControllerImageObserverStub.prototype.validator = validateMediaControllerImageObserverRequest;
  MediaControllerImageObserverProxy.prototype.validator = null;
  exports.MediaControllerManager = MediaControllerManager;
  exports.MediaControllerManagerPtr = MediaControllerManagerPtr;
  exports.MediaControllerManagerAssociatedPtr = MediaControllerManagerAssociatedPtr;
  exports.MediaController = MediaController;
  exports.MediaControllerPtr = MediaControllerPtr;
  exports.MediaControllerAssociatedPtr = MediaControllerAssociatedPtr;
  exports.MediaControllerObserver = MediaControllerObserver;
  exports.MediaControllerObserverPtr = MediaControllerObserverPtr;
  exports.MediaControllerObserverAssociatedPtr = MediaControllerObserverAssociatedPtr;
  exports.MediaControllerImageObserver = MediaControllerImageObserver;
  exports.MediaControllerImageObserverPtr = MediaControllerImageObserverPtr;
  exports.MediaControllerImageObserverAssociatedPtr = MediaControllerImageObserverAssociatedPtr;
})();