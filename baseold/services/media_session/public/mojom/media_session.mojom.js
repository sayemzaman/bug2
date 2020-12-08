// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/media_session/public/mojom/media_session.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }


  var MediaPlaybackState = {};
  MediaPlaybackState.kPaused = 0;
  MediaPlaybackState.kPlaying = MediaPlaybackState.kPaused + 1;
  MediaPlaybackState.MIN_VALUE = 0,
  MediaPlaybackState.MAX_VALUE = 1,

  MediaPlaybackState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  MediaPlaybackState.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MediaSessionAction = {};
  MediaSessionAction.kPlay = 0;
  MediaSessionAction.kPause = MediaSessionAction.kPlay + 1;
  MediaSessionAction.kPreviousTrack = MediaSessionAction.kPause + 1;
  MediaSessionAction.kNextTrack = MediaSessionAction.kPreviousTrack + 1;
  MediaSessionAction.kSeekBackward = MediaSessionAction.kNextTrack + 1;
  MediaSessionAction.kSeekForward = MediaSessionAction.kSeekBackward + 1;
  MediaSessionAction.kSkipAd = MediaSessionAction.kSeekForward + 1;
  MediaSessionAction.kStop = MediaSessionAction.kSkipAd + 1;
  MediaSessionAction.MIN_VALUE = 0,
  MediaSessionAction.MAX_VALUE = 7,

  MediaSessionAction.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  MediaSessionAction.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MediaSessionImageType = {};
  MediaSessionImageType.kArtwork = 0;
  MediaSessionImageType.kSourceIcon = MediaSessionImageType.kArtwork + 1;
  MediaSessionImageType.MIN_VALUE = 0,
  MediaSessionImageType.MAX_VALUE = 1,

  MediaSessionImageType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  MediaSessionImageType.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function MediaImage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaImage.prototype.initDefaults_ = function() {
    this.src = null;
    this.type = null;
    this.sizes = null;
  };
  MediaImage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaImage.validate = function(messageValidator, offset) {
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


    // validate MediaImage.src
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaImage.type
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaImage.sizes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(geometry$.Size), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaImage.encodedSize = codec.kStructHeaderSize + 24;

  MediaImage.decode = function(decoder) {
    var packed;
    var val = new MediaImage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.src = decoder.decodeStructPointer(url$.Url);
    val.type = decoder.decodeStructPointer(string16$.String16);
    val.sizes = decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Size));
    return val;
  };

  MediaImage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaImage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.src);
    encoder.encodeStructPointer(string16$.String16, val.type);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Size), val.sizes);
  };
  function MediaMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaMetadata.prototype.initDefaults_ = function() {
    this.title = null;
    this.artist = null;
    this.album = null;
    this.sourceTitle = null;
  };
  MediaMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaMetadata.validate = function(messageValidator, offset) {
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


    // validate MediaMetadata.title
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaMetadata.artist
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaMetadata.album
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaMetadata.sourceTitle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaMetadata.encodedSize = codec.kStructHeaderSize + 32;

  MediaMetadata.decode = function(decoder) {
    var packed;
    var val = new MediaMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStructPointer(string16$.String16);
    val.artist = decoder.decodeStructPointer(string16$.String16);
    val.album = decoder.decodeStructPointer(string16$.String16);
    val.sourceTitle = decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  MediaMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.title);
    encoder.encodeStructPointer(string16$.String16, val.artist);
    encoder.encodeStructPointer(string16$.String16, val.album);
    encoder.encodeStructPointer(string16$.String16, val.sourceTitle);
  };
  function MediaImageBitmap(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaImageBitmap.prototype.initDefaults_ = function() {
    this.width = 0;
    this.height = 0;
    this.pixelData = null;
  };
  MediaImageBitmap.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaImageBitmap.validate = function(messageValidator, offset) {
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




    // validate MediaImageBitmap.pixelData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaImageBitmap.encodedSize = codec.kStructHeaderSize + 16;

  MediaImageBitmap.decode = function(decoder) {
    var packed;
    var val = new MediaImageBitmap();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.width = decoder.decodeStruct(codec.Int32);
    val.height = decoder.decodeStruct(codec.Int32);
    val.pixelData = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  MediaImageBitmap.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaImageBitmap.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.width);
    encoder.encodeStruct(codec.Int32, val.height);
    encoder.encodeArrayPointer(codec.Uint8, val.pixelData);
  };
  function MediaSessionInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  MediaSessionInfo.SessionState = {};
  MediaSessionInfo.SessionState.kActive = 0;
  MediaSessionInfo.SessionState.kDucking = MediaSessionInfo.SessionState.kActive + 1;
  MediaSessionInfo.SessionState.kSuspended = MediaSessionInfo.SessionState.kDucking + 1;
  MediaSessionInfo.SessionState.kInactive = MediaSessionInfo.SessionState.kSuspended + 1;
  MediaSessionInfo.SessionState.MIN_VALUE = 0,
  MediaSessionInfo.SessionState.MAX_VALUE = 3,

  MediaSessionInfo.SessionState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  MediaSessionInfo.SessionState.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  MediaSessionInfo.prototype.initDefaults_ = function() {
    this.state = 0;
    this.forceDuck = false;
    this.isControllable = false;
    this.preferStopForGainFocusLoss = false;
    this.playbackState = 0;
  };
  MediaSessionInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16},
      {version: 1, numBytes: 24},
      {version: 2, numBytes: 24},
      {version: 4, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSessionInfo.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaSessionInfo.SessionState);
    if (err !== validator.validationError.NONE)
        return err;




    // version check MediaSessionInfo.playbackState
    if (!messageValidator.isFieldInStructVersion(offset, 1))
      return validator.validationError.NONE;
    // validate MediaSessionInfo.playbackState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, MediaPlaybackState);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  MediaSessionInfo.encodedSize = codec.kStructHeaderSize + 16;

  MediaSessionInfo.decode = function(decoder) {
    var packed;
    var val = new MediaSessionInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.forceDuck = (packed >> 0) & 1 ? true : false;
    val.isControllable = (packed >> 1) & 1 ? true : false;
    val.preferStopForGainFocusLoss = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.playbackState = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionInfo.encodedSize);
    encoder.writeUint32(4);
    encoder.encodeStruct(codec.Int32, val.state);
    packed = 0;
    packed |= (val.forceDuck & 1) << 0
    packed |= (val.isControllable & 1) << 1
    packed |= (val.preferStopForGainFocusLoss & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.playbackState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSessionDebugInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionDebugInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.owner = null;
    this.state = null;
  };
  MediaSessionDebugInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionDebugInfo.validate = function(messageValidator, offset) {
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


    // validate MediaSessionDebugInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSessionDebugInfo.owner
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSessionDebugInfo.state
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionDebugInfo.encodedSize = codec.kStructHeaderSize + 24;

  MediaSessionDebugInfo.decode = function(decoder) {
    var packed;
    var val = new MediaSessionDebugInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.owner = decoder.decodeStruct(codec.String);
    val.state = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaSessionDebugInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionDebugInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.owner);
    encoder.encodeStruct(codec.String, val.state);
  };
  function MediaSessionObserver_MediaSessionInfoChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionObserver_MediaSessionInfoChanged_Params.prototype.initDefaults_ = function() {
    this.info = null;
  };
  MediaSessionObserver_MediaSessionInfoChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionObserver_MediaSessionInfoChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionObserver_MediaSessionInfoChanged_Params.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionObserver_MediaSessionInfoChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionObserver_MediaSessionInfoChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionObserver_MediaSessionInfoChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(MediaSessionInfo);
    return val;
  };

  MediaSessionObserver_MediaSessionInfoChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionObserver_MediaSessionInfoChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaSessionInfo, val.info);
  };
  function MediaSessionObserver_MediaSessionMetadataChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionObserver_MediaSessionMetadataChanged_Params.prototype.initDefaults_ = function() {
    this.metadata = null;
  };
  MediaSessionObserver_MediaSessionMetadataChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionObserver_MediaSessionMetadataChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionObserver_MediaSessionMetadataChanged_Params.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionObserver_MediaSessionMetadataChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionObserver_MediaSessionMetadataChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionObserver_MediaSessionMetadataChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metadata = decoder.decodeStructPointer(MediaMetadata);
    return val;
  };

  MediaSessionObserver_MediaSessionMetadataChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionObserver_MediaSessionMetadataChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaMetadata, val.metadata);
  };
  function MediaSessionObserver_MediaSessionActionsChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionObserver_MediaSessionActionsChanged_Params.prototype.initDefaults_ = function() {
    this.action = null;
  };
  MediaSessionObserver_MediaSessionActionsChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionObserver_MediaSessionActionsChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionObserver_MediaSessionActionsChanged_Params.action
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(MediaSessionAction), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionObserver_MediaSessionActionsChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionObserver_MediaSessionActionsChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionObserver_MediaSessionActionsChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeArrayPointer(new codec.Enum(MediaSessionAction));
    return val;
  };

  MediaSessionObserver_MediaSessionActionsChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionObserver_MediaSessionActionsChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(MediaSessionAction), val.action);
  };
  function MediaSessionObserver_MediaSessionImagesChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionObserver_MediaSessionImagesChanged_Params.prototype.initDefaults_ = function() {
    this.images = null;
  };
  MediaSessionObserver_MediaSessionImagesChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionObserver_MediaSessionImagesChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionObserver_MediaSessionImagesChanged_Params.images
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, new codec.Enum(MediaSessionImageType), new codec.ArrayOf(new codec.PointerTo(MediaImage)), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionObserver_MediaSessionImagesChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionObserver_MediaSessionImagesChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionObserver_MediaSessionImagesChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.images = decoder.decodeMapPointer(new codec.Enum(MediaSessionImageType), new codec.ArrayOf(new codec.PointerTo(MediaImage)));
    return val;
  };

  MediaSessionObserver_MediaSessionImagesChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionObserver_MediaSessionImagesChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(new codec.Enum(MediaSessionImageType), new codec.ArrayOf(new codec.PointerTo(MediaImage)), val.images);
  };
  function MediaSession_GetMediaSessionInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_GetMediaSessionInfo_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_GetMediaSessionInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_GetMediaSessionInfo_Params.validate = function(messageValidator, offset) {
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

  MediaSession_GetMediaSessionInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_GetMediaSessionInfo_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_GetMediaSessionInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_GetMediaSessionInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_GetMediaSessionInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_GetMediaSessionInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_GetMediaSessionInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  MediaSession_GetMediaSessionInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_GetMediaSessionInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaSession_GetMediaSessionInfo_ResponseParams.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaSessionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_GetMediaSessionInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_GetMediaSessionInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaSession_GetMediaSessionInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(MediaSessionInfo);
    return val;
  };

  MediaSession_GetMediaSessionInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_GetMediaSessionInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaSessionInfo, val.info);
  };
  function MediaSession_GetDebugInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_GetDebugInfo_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_GetDebugInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_GetDebugInfo_Params.validate = function(messageValidator, offset) {
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

  MediaSession_GetDebugInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_GetDebugInfo_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_GetDebugInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_GetDebugInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_GetDebugInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_GetDebugInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_GetDebugInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  MediaSession_GetDebugInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_GetDebugInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaSession_GetDebugInfo_ResponseParams.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaSessionDebugInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_GetDebugInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_GetDebugInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaSession_GetDebugInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(MediaSessionDebugInfo);
    return val;
  };

  MediaSession_GetDebugInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_GetDebugInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaSessionDebugInfo, val.info);
  };
  function MediaSession_StartDucking_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_StartDucking_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_StartDucking_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_StartDucking_Params.validate = function(messageValidator, offset) {
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

  MediaSession_StartDucking_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_StartDucking_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_StartDucking_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_StartDucking_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_StartDucking_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_StopDucking_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_StopDucking_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_StopDucking_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_StopDucking_Params.validate = function(messageValidator, offset) {
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

  MediaSession_StopDucking_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_StopDucking_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_StopDucking_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_StopDucking_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_StopDucking_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_Suspend_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_Suspend_Params.prototype.initDefaults_ = function() {
    this.suspendType = 0;
  };
  MediaSession_Suspend_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_Suspend_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSession_Suspend_Params.suspendType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaSession.SuspendType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_Suspend_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_Suspend_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_Suspend_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.suspendType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSession_Suspend_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_Suspend_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.suspendType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSession_Resume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_Resume_Params.prototype.initDefaults_ = function() {
    this.suspendType = 0;
  };
  MediaSession_Resume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_Resume_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSession_Resume_Params.suspendType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaSession.SuspendType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_Resume_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_Resume_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_Resume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.suspendType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSession_Resume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_Resume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.suspendType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSession_AddObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_AddObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new MediaSessionObserverPtr();
  };
  MediaSession_AddObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_AddObserver_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSession_AddObserver_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_AddObserver_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_AddObserver_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_AddObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(new codec.Interface(MediaSessionObserverPtr));
    return val;
  };

  MediaSession_AddObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_AddObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(MediaSessionObserverPtr), val.observer);
  };
  function MediaSession_PreviousTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_PreviousTrack_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_PreviousTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_PreviousTrack_Params.validate = function(messageValidator, offset) {
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

  MediaSession_PreviousTrack_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_PreviousTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_PreviousTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_PreviousTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_PreviousTrack_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_NextTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_NextTrack_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_NextTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_NextTrack_Params.validate = function(messageValidator, offset) {
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

  MediaSession_NextTrack_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_NextTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_NextTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_NextTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_NextTrack_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_Seek_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_Seek_Params.prototype.initDefaults_ = function() {
    this.seekTime = null;
  };
  MediaSession_Seek_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_Seek_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSession_Seek_Params.seekTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_Seek_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_Seek_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_Seek_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.seekTime = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaSession_Seek_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_Seek_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.seekTime);
  };
  function MediaSession_Stop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_Stop_Params.prototype.initDefaults_ = function() {
    this.suspendType = 0;
  };
  MediaSession_Stop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_Stop_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSession_Stop_Params.suspendType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaSession.SuspendType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_Stop_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_Stop_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_Stop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.suspendType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSession_Stop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_Stop_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.suspendType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSession_SkipAd_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_SkipAd_Params.prototype.initDefaults_ = function() {
  };
  MediaSession_SkipAd_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_SkipAd_Params.validate = function(messageValidator, offset) {
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

  MediaSession_SkipAd_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaSession_SkipAd_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_SkipAd_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaSession_SkipAd_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_SkipAd_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaSession_GetMediaImageBitmap_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_GetMediaImageBitmap_Params.prototype.initDefaults_ = function() {
    this.image = null;
    this.minimumSizePx = 0;
    this.desiredSizePx = 0;
  };
  MediaSession_GetMediaImageBitmap_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_GetMediaImageBitmap_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSession_GetMediaImageBitmap_Params.image
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaImage, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  MediaSession_GetMediaImageBitmap_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaSession_GetMediaImageBitmap_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSession_GetMediaImageBitmap_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.image = decoder.decodeStructPointer(MediaImage);
    val.minimumSizePx = decoder.decodeStruct(codec.Int32);
    val.desiredSizePx = decoder.decodeStruct(codec.Int32);
    return val;
  };

  MediaSession_GetMediaImageBitmap_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_GetMediaImageBitmap_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaImage, val.image);
    encoder.encodeStruct(codec.Int32, val.minimumSizePx);
    encoder.encodeStruct(codec.Int32, val.desiredSizePx);
  };
  function MediaSession_GetMediaImageBitmap_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSession_GetMediaImageBitmap_ResponseParams.prototype.initDefaults_ = function() {
    this.image = null;
  };
  MediaSession_GetMediaImageBitmap_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSession_GetMediaImageBitmap_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaSession_GetMediaImageBitmap_ResponseParams.image
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaImageBitmap, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSession_GetMediaImageBitmap_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaSession_GetMediaImageBitmap_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaSession_GetMediaImageBitmap_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.image = decoder.decodeStructPointer(MediaImageBitmap);
    return val;
  };

  MediaSession_GetMediaImageBitmap_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSession_GetMediaImageBitmap_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaImageBitmap, val.image);
  };
  var kMediaSessionObserver_MediaSessionInfoChanged_Name = 0;
  var kMediaSessionObserver_MediaSessionMetadataChanged_Name = 1;
  var kMediaSessionObserver_MediaSessionActionsChanged_Name = 2;
  var kMediaSessionObserver_MediaSessionImagesChanged_Name = 3;

  function MediaSessionObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaSessionObserver,
                                                   handleOrPtrInfo);
  }

  function MediaSessionObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaSessionObserver, associatedInterfacePtrInfo);
  }

  MediaSessionObserverAssociatedPtr.prototype =
      Object.create(MediaSessionObserverPtr.prototype);
  MediaSessionObserverAssociatedPtr.prototype.constructor =
      MediaSessionObserverAssociatedPtr;

  function MediaSessionObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaSessionObserverPtr.prototype.mediaSessionInfoChanged = function() {
    return MediaSessionObserverProxy.prototype.mediaSessionInfoChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionObserverProxy.prototype.mediaSessionInfoChanged = function(info) {
    var params_ = new MediaSessionObserver_MediaSessionInfoChanged_Params();
    params_.info = info;
    var builder = new codec.MessageV0Builder(
        kMediaSessionObserver_MediaSessionInfoChanged_Name,
        codec.align(MediaSessionObserver_MediaSessionInfoChanged_Params.encodedSize));
    builder.encodeStruct(MediaSessionObserver_MediaSessionInfoChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionObserverPtr.prototype.mediaSessionMetadataChanged = function() {
    return MediaSessionObserverProxy.prototype.mediaSessionMetadataChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionObserverProxy.prototype.mediaSessionMetadataChanged = function(metadata) {
    var params_ = new MediaSessionObserver_MediaSessionMetadataChanged_Params();
    params_.metadata = metadata;
    var builder = new codec.MessageV0Builder(
        kMediaSessionObserver_MediaSessionMetadataChanged_Name,
        codec.align(MediaSessionObserver_MediaSessionMetadataChanged_Params.encodedSize));
    builder.encodeStruct(MediaSessionObserver_MediaSessionMetadataChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionObserverPtr.prototype.mediaSessionActionsChanged = function() {
    return MediaSessionObserverProxy.prototype.mediaSessionActionsChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionObserverProxy.prototype.mediaSessionActionsChanged = function(action) {
    var params_ = new MediaSessionObserver_MediaSessionActionsChanged_Params();
    params_.action = action;
    var builder = new codec.MessageV0Builder(
        kMediaSessionObserver_MediaSessionActionsChanged_Name,
        codec.align(MediaSessionObserver_MediaSessionActionsChanged_Params.encodedSize));
    builder.encodeStruct(MediaSessionObserver_MediaSessionActionsChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionObserverPtr.prototype.mediaSessionImagesChanged = function() {
    return MediaSessionObserverProxy.prototype.mediaSessionImagesChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionObserverProxy.prototype.mediaSessionImagesChanged = function(images) {
    var params_ = new MediaSessionObserver_MediaSessionImagesChanged_Params();
    params_.images = images;
    var builder = new codec.MessageV0Builder(
        kMediaSessionObserver_MediaSessionImagesChanged_Name,
        codec.align(MediaSessionObserver_MediaSessionImagesChanged_Params.encodedSize));
    builder.encodeStruct(MediaSessionObserver_MediaSessionImagesChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaSessionObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaSessionObserverStub.prototype.mediaSessionInfoChanged = function(info) {
    return this.delegate_ && this.delegate_.mediaSessionInfoChanged && this.delegate_.mediaSessionInfoChanged(info);
  }
  MediaSessionObserverStub.prototype.mediaSessionMetadataChanged = function(metadata) {
    return this.delegate_ && this.delegate_.mediaSessionMetadataChanged && this.delegate_.mediaSessionMetadataChanged(metadata);
  }
  MediaSessionObserverStub.prototype.mediaSessionActionsChanged = function(action) {
    return this.delegate_ && this.delegate_.mediaSessionActionsChanged && this.delegate_.mediaSessionActionsChanged(action);
  }
  MediaSessionObserverStub.prototype.mediaSessionImagesChanged = function(images) {
    return this.delegate_ && this.delegate_.mediaSessionImagesChanged && this.delegate_.mediaSessionImagesChanged(images);
  }

  MediaSessionObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaSessionObserver_MediaSessionInfoChanged_Name:
      var params = reader.decodeStruct(MediaSessionObserver_MediaSessionInfoChanged_Params);
      this.mediaSessionInfoChanged(params.info);
      return true;
    case kMediaSessionObserver_MediaSessionMetadataChanged_Name:
      var params = reader.decodeStruct(MediaSessionObserver_MediaSessionMetadataChanged_Params);
      this.mediaSessionMetadataChanged(params.metadata);
      return true;
    case kMediaSessionObserver_MediaSessionActionsChanged_Name:
      var params = reader.decodeStruct(MediaSessionObserver_MediaSessionActionsChanged_Params);
      this.mediaSessionActionsChanged(params.action);
      return true;
    case kMediaSessionObserver_MediaSessionImagesChanged_Name:
      var params = reader.decodeStruct(MediaSessionObserver_MediaSessionImagesChanged_Params);
      this.mediaSessionImagesChanged(params.images);
      return true;
    default:
      return false;
    }
  };

  MediaSessionObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaSessionObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaSessionObserver_MediaSessionInfoChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionObserver_MediaSessionInfoChanged_Params;
      break;
      case kMediaSessionObserver_MediaSessionMetadataChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionObserver_MediaSessionMetadataChanged_Params;
      break;
      case kMediaSessionObserver_MediaSessionActionsChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionObserver_MediaSessionActionsChanged_Params;
      break;
      case kMediaSessionObserver_MediaSessionImagesChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionObserver_MediaSessionImagesChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaSessionObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaSessionObserver = {
    name: 'media_session.mojom.MediaSessionObserver',
    kVersion: 0,
    ptrClass: MediaSessionObserverPtr,
    proxyClass: MediaSessionObserverProxy,
    stubClass: MediaSessionObserverStub,
    validateRequest: validateMediaSessionObserverRequest,
    validateResponse: null,
  };
  MediaSessionObserverStub.prototype.validator = validateMediaSessionObserverRequest;
  MediaSessionObserverProxy.prototype.validator = null;
  var kMediaSession_GetMediaSessionInfo_Name = 0;
  var kMediaSession_GetDebugInfo_Name = 1;
  var kMediaSession_StartDucking_Name = 2;
  var kMediaSession_StopDucking_Name = 3;
  var kMediaSession_Suspend_Name = 4;
  var kMediaSession_Resume_Name = 5;
  var kMediaSession_AddObserver_Name = 6;
  var kMediaSession_PreviousTrack_Name = 7;
  var kMediaSession_NextTrack_Name = 8;
  var kMediaSession_Seek_Name = 9;
  var kMediaSession_Stop_Name = 10;
  var kMediaSession_SkipAd_Name = 11;
  var kMediaSession_GetMediaImageBitmap_Name = 12;

  function MediaSessionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaSession,
                                                   handleOrPtrInfo);
  }

  function MediaSessionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaSession, associatedInterfacePtrInfo);
  }

  MediaSessionAssociatedPtr.prototype =
      Object.create(MediaSessionPtr.prototype);
  MediaSessionAssociatedPtr.prototype.constructor =
      MediaSessionAssociatedPtr;

  function MediaSessionProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaSessionPtr.prototype.getMediaSessionInfo = function() {
    return MediaSessionProxy.prototype.getMediaSessionInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.getMediaSessionInfo = function() {
    var params_ = new MediaSession_GetMediaSessionInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaSession_GetMediaSessionInfo_Name,
          codec.align(MediaSession_GetMediaSessionInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaSession_GetMediaSessionInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaSession_GetMediaSessionInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaSessionPtr.prototype.getDebugInfo = function() {
    return MediaSessionProxy.prototype.getDebugInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.getDebugInfo = function() {
    var params_ = new MediaSession_GetDebugInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaSession_GetDebugInfo_Name,
          codec.align(MediaSession_GetDebugInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaSession_GetDebugInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaSession_GetDebugInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaSessionPtr.prototype.startDucking = function() {
    return MediaSessionProxy.prototype.startDucking
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.startDucking = function() {
    var params_ = new MediaSession_StartDucking_Params();
    var builder = new codec.MessageV0Builder(
        kMediaSession_StartDucking_Name,
        codec.align(MediaSession_StartDucking_Params.encodedSize));
    builder.encodeStruct(MediaSession_StartDucking_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.stopDucking = function() {
    return MediaSessionProxy.prototype.stopDucking
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.stopDucking = function() {
    var params_ = new MediaSession_StopDucking_Params();
    var builder = new codec.MessageV0Builder(
        kMediaSession_StopDucking_Name,
        codec.align(MediaSession_StopDucking_Params.encodedSize));
    builder.encodeStruct(MediaSession_StopDucking_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.suspend = function() {
    return MediaSessionProxy.prototype.suspend
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.suspend = function(suspendType) {
    var params_ = new MediaSession_Suspend_Params();
    params_.suspendType = suspendType;
    var builder = new codec.MessageV0Builder(
        kMediaSession_Suspend_Name,
        codec.align(MediaSession_Suspend_Params.encodedSize));
    builder.encodeStruct(MediaSession_Suspend_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.resume = function() {
    return MediaSessionProxy.prototype.resume
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.resume = function(suspendType) {
    var params_ = new MediaSession_Resume_Params();
    params_.suspendType = suspendType;
    var builder = new codec.MessageV0Builder(
        kMediaSession_Resume_Name,
        codec.align(MediaSession_Resume_Params.encodedSize));
    builder.encodeStruct(MediaSession_Resume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.addObserver = function() {
    return MediaSessionProxy.prototype.addObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.addObserver = function(observer) {
    var params_ = new MediaSession_AddObserver_Params();
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kMediaSession_AddObserver_Name,
        codec.align(MediaSession_AddObserver_Params.encodedSize));
    builder.encodeStruct(MediaSession_AddObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.previousTrack = function() {
    return MediaSessionProxy.prototype.previousTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.previousTrack = function() {
    var params_ = new MediaSession_PreviousTrack_Params();
    var builder = new codec.MessageV0Builder(
        kMediaSession_PreviousTrack_Name,
        codec.align(MediaSession_PreviousTrack_Params.encodedSize));
    builder.encodeStruct(MediaSession_PreviousTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.nextTrack = function() {
    return MediaSessionProxy.prototype.nextTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.nextTrack = function() {
    var params_ = new MediaSession_NextTrack_Params();
    var builder = new codec.MessageV0Builder(
        kMediaSession_NextTrack_Name,
        codec.align(MediaSession_NextTrack_Params.encodedSize));
    builder.encodeStruct(MediaSession_NextTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.seek = function() {
    return MediaSessionProxy.prototype.seek
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.seek = function(seekTime) {
    var params_ = new MediaSession_Seek_Params();
    params_.seekTime = seekTime;
    var builder = new codec.MessageV0Builder(
        kMediaSession_Seek_Name,
        codec.align(MediaSession_Seek_Params.encodedSize));
    builder.encodeStruct(MediaSession_Seek_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.stop = function() {
    return MediaSessionProxy.prototype.stop
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.stop = function(suspendType) {
    var params_ = new MediaSession_Stop_Params();
    params_.suspendType = suspendType;
    var builder = new codec.MessageV0Builder(
        kMediaSession_Stop_Name,
        codec.align(MediaSession_Stop_Params.encodedSize));
    builder.encodeStruct(MediaSession_Stop_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.skipAd = function() {
    return MediaSessionProxy.prototype.skipAd
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.skipAd = function() {
    var params_ = new MediaSession_SkipAd_Params();
    var builder = new codec.MessageV0Builder(
        kMediaSession_SkipAd_Name,
        codec.align(MediaSession_SkipAd_Params.encodedSize));
    builder.encodeStruct(MediaSession_SkipAd_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionPtr.prototype.getMediaImageBitmap = function() {
    return MediaSessionProxy.prototype.getMediaImageBitmap
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionProxy.prototype.getMediaImageBitmap = function(image, minimumSizePx, desiredSizePx) {
    var params_ = new MediaSession_GetMediaImageBitmap_Params();
    params_.image = image;
    params_.minimumSizePx = minimumSizePx;
    params_.desiredSizePx = desiredSizePx;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaSession_GetMediaImageBitmap_Name,
          codec.align(MediaSession_GetMediaImageBitmap_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaSession_GetMediaImageBitmap_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaSession_GetMediaImageBitmap_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MediaSessionStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaSessionStub.prototype.getMediaSessionInfo = function() {
    return this.delegate_ && this.delegate_.getMediaSessionInfo && this.delegate_.getMediaSessionInfo();
  }
  MediaSessionStub.prototype.getDebugInfo = function() {
    return this.delegate_ && this.delegate_.getDebugInfo && this.delegate_.getDebugInfo();
  }
  MediaSessionStub.prototype.startDucking = function() {
    return this.delegate_ && this.delegate_.startDucking && this.delegate_.startDucking();
  }
  MediaSessionStub.prototype.stopDucking = function() {
    return this.delegate_ && this.delegate_.stopDucking && this.delegate_.stopDucking();
  }
  MediaSessionStub.prototype.suspend = function(suspendType) {
    return this.delegate_ && this.delegate_.suspend && this.delegate_.suspend(suspendType);
  }
  MediaSessionStub.prototype.resume = function(suspendType) {
    return this.delegate_ && this.delegate_.resume && this.delegate_.resume(suspendType);
  }
  MediaSessionStub.prototype.addObserver = function(observer) {
    return this.delegate_ && this.delegate_.addObserver && this.delegate_.addObserver(observer);
  }
  MediaSessionStub.prototype.previousTrack = function() {
    return this.delegate_ && this.delegate_.previousTrack && this.delegate_.previousTrack();
  }
  MediaSessionStub.prototype.nextTrack = function() {
    return this.delegate_ && this.delegate_.nextTrack && this.delegate_.nextTrack();
  }
  MediaSessionStub.prototype.seek = function(seekTime) {
    return this.delegate_ && this.delegate_.seek && this.delegate_.seek(seekTime);
  }
  MediaSessionStub.prototype.stop = function(suspendType) {
    return this.delegate_ && this.delegate_.stop && this.delegate_.stop(suspendType);
  }
  MediaSessionStub.prototype.skipAd = function() {
    return this.delegate_ && this.delegate_.skipAd && this.delegate_.skipAd();
  }
  MediaSessionStub.prototype.getMediaImageBitmap = function(image, minimumSizePx, desiredSizePx) {
    return this.delegate_ && this.delegate_.getMediaImageBitmap && this.delegate_.getMediaImageBitmap(image, minimumSizePx, desiredSizePx);
  }

  MediaSessionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaSession_StartDucking_Name:
      var params = reader.decodeStruct(MediaSession_StartDucking_Params);
      this.startDucking();
      return true;
    case kMediaSession_StopDucking_Name:
      var params = reader.decodeStruct(MediaSession_StopDucking_Params);
      this.stopDucking();
      return true;
    case kMediaSession_Suspend_Name:
      var params = reader.decodeStruct(MediaSession_Suspend_Params);
      this.suspend(params.suspendType);
      return true;
    case kMediaSession_Resume_Name:
      var params = reader.decodeStruct(MediaSession_Resume_Params);
      this.resume(params.suspendType);
      return true;
    case kMediaSession_AddObserver_Name:
      var params = reader.decodeStruct(MediaSession_AddObserver_Params);
      this.addObserver(params.observer);
      return true;
    case kMediaSession_PreviousTrack_Name:
      var params = reader.decodeStruct(MediaSession_PreviousTrack_Params);
      this.previousTrack();
      return true;
    case kMediaSession_NextTrack_Name:
      var params = reader.decodeStruct(MediaSession_NextTrack_Params);
      this.nextTrack();
      return true;
    case kMediaSession_Seek_Name:
      var params = reader.decodeStruct(MediaSession_Seek_Params);
      this.seek(params.seekTime);
      return true;
    case kMediaSession_Stop_Name:
      var params = reader.decodeStruct(MediaSession_Stop_Params);
      this.stop(params.suspendType);
      return true;
    case kMediaSession_SkipAd_Name:
      var params = reader.decodeStruct(MediaSession_SkipAd_Params);
      this.skipAd();
      return true;
    default:
      return false;
    }
  };

  MediaSessionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaSession_GetMediaSessionInfo_Name:
      var params = reader.decodeStruct(MediaSession_GetMediaSessionInfo_Params);
      this.getMediaSessionInfo().then(function(response) {
        var responseParams =
            new MediaSession_GetMediaSessionInfo_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageV1Builder(
            kMediaSession_GetMediaSessionInfo_Name,
            codec.align(MediaSession_GetMediaSessionInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaSession_GetMediaSessionInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaSession_GetDebugInfo_Name:
      var params = reader.decodeStruct(MediaSession_GetDebugInfo_Params);
      this.getDebugInfo().then(function(response) {
        var responseParams =
            new MediaSession_GetDebugInfo_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageV1Builder(
            kMediaSession_GetDebugInfo_Name,
            codec.align(MediaSession_GetDebugInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaSession_GetDebugInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaSession_GetMediaImageBitmap_Name:
      var params = reader.decodeStruct(MediaSession_GetMediaImageBitmap_Params);
      this.getMediaImageBitmap(params.image, params.minimumSizePx, params.desiredSizePx).then(function(response) {
        var responseParams =
            new MediaSession_GetMediaImageBitmap_ResponseParams();
        responseParams.image = response.image;
        var builder = new codec.MessageV1Builder(
            kMediaSession_GetMediaImageBitmap_Name,
            codec.align(MediaSession_GetMediaImageBitmap_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaSession_GetMediaImageBitmap_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMediaSessionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaSession_GetMediaSessionInfo_Name:
        if (message.expectsResponse())
          paramsClass = MediaSession_GetMediaSessionInfo_Params;
      break;
      case kMediaSession_GetDebugInfo_Name:
        if (message.expectsResponse())
          paramsClass = MediaSession_GetDebugInfo_Params;
      break;
      case kMediaSession_StartDucking_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_StartDucking_Params;
      break;
      case kMediaSession_StopDucking_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_StopDucking_Params;
      break;
      case kMediaSession_Suspend_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_Suspend_Params;
      break;
      case kMediaSession_Resume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_Resume_Params;
      break;
      case kMediaSession_AddObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_AddObserver_Params;
      break;
      case kMediaSession_PreviousTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_PreviousTrack_Params;
      break;
      case kMediaSession_NextTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_NextTrack_Params;
      break;
      case kMediaSession_Seek_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_Seek_Params;
      break;
      case kMediaSession_Stop_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_Stop_Params;
      break;
      case kMediaSession_SkipAd_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSession_SkipAd_Params;
      break;
      case kMediaSession_GetMediaImageBitmap_Name:
        if (message.expectsResponse())
          paramsClass = MediaSession_GetMediaImageBitmap_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaSessionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMediaSession_GetMediaSessionInfo_Name:
        if (message.isResponse())
          paramsClass = MediaSession_GetMediaSessionInfo_ResponseParams;
        break;
      case kMediaSession_GetDebugInfo_Name:
        if (message.isResponse())
          paramsClass = MediaSession_GetDebugInfo_ResponseParams;
        break;
      case kMediaSession_GetMediaImageBitmap_Name:
        if (message.isResponse())
          paramsClass = MediaSession_GetMediaImageBitmap_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MediaSession = {
    name: 'media_session.mojom.MediaSession',
    kVersion: 0,
    ptrClass: MediaSessionPtr,
    proxyClass: MediaSessionProxy,
    stubClass: MediaSessionStub,
    validateRequest: validateMediaSessionRequest,
    validateResponse: validateMediaSessionResponse,
  };
  MediaSession.SuspendType = {};
  MediaSession.SuspendType.kSystem = 0;
  MediaSession.SuspendType.kUI = MediaSession.SuspendType.kSystem + 1;
  MediaSession.SuspendType.kContent = MediaSession.SuspendType.kUI + 1;
  MediaSession.SuspendType.MIN_VALUE = 0,
  MediaSession.SuspendType.MAX_VALUE = 2,

  MediaSession.SuspendType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MediaSession.SuspendType.validate = function(enumValue) {
    var isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  MediaSessionStub.prototype.validator = validateMediaSessionRequest;
  MediaSessionProxy.prototype.validator = validateMediaSessionResponse;
  exports.MediaPlaybackState = MediaPlaybackState;
  exports.MediaSessionAction = MediaSessionAction;
  exports.MediaSessionImageType = MediaSessionImageType;
  exports.MediaImage = MediaImage;
  exports.MediaMetadata = MediaMetadata;
  exports.MediaImageBitmap = MediaImageBitmap;
  exports.MediaSessionInfo = MediaSessionInfo;
  exports.MediaSessionDebugInfo = MediaSessionDebugInfo;
  exports.MediaSessionObserver = MediaSessionObserver;
  exports.MediaSessionObserverPtr = MediaSessionObserverPtr;
  exports.MediaSessionObserverAssociatedPtr = MediaSessionObserverAssociatedPtr;
  exports.MediaSession = MediaSession;
  exports.MediaSessionPtr = MediaSessionPtr;
  exports.MediaSessionAssociatedPtr = MediaSessionAssociatedPtr;
})();