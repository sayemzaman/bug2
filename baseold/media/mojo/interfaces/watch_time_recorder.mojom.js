// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/watch_time_recorder.mojom';
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
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/media_types.mojom', 'media_types.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../url/mojom/origin.mojom.js');
  }



  function PlaybackProperties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackProperties.prototype.initDefaults_ = function() {
    this.hasAudio = false;
    this.hasVideo = false;
    this.isBackground = false;
    this.isMuted = false;
    this.isMse = false;
    this.isEme = false;
    this.isEmbeddedMediaExperience = false;
  };
  PlaybackProperties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackProperties.validate = function(messageValidator, offset) {
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

  PlaybackProperties.encodedSize = codec.kStructHeaderSize + 8;

  PlaybackProperties.decode = function(decoder) {
    var packed;
    var val = new PlaybackProperties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.hasAudio = (packed >> 0) & 1 ? true : false;
    val.hasVideo = (packed >> 1) & 1 ? true : false;
    val.isBackground = (packed >> 2) & 1 ? true : false;
    val.isMuted = (packed >> 3) & 1 ? true : false;
    val.isMse = (packed >> 4) & 1 ? true : false;
    val.isEme = (packed >> 5) & 1 ? true : false;
    val.isEmbeddedMediaExperience = (packed >> 6) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PlaybackProperties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackProperties.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.hasAudio & 1) << 0
    packed |= (val.hasVideo & 1) << 1
    packed |= (val.isBackground & 1) << 2
    packed |= (val.isMuted & 1) << 3
    packed |= (val.isMse & 1) << 4
    packed |= (val.isEme & 1) << 5
    packed |= (val.isEmbeddedMediaExperience & 1) << 6
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SecondaryPlaybackProperties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SecondaryPlaybackProperties.prototype.initDefaults_ = function() {
    this.audioCodec = 0;
    this.videoCodec = 0;
    this.audioDecoderName = null;
    this.videoDecoderName = null;
    this.audioEncryptionScheme = 0;
    this.videoEncryptionScheme = 0;
    this.naturalSize = null;
  };
  SecondaryPlaybackProperties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SecondaryPlaybackProperties.validate = function(messageValidator, offset) {
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


    // validate SecondaryPlaybackProperties.audioCodec
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.AudioCodec);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SecondaryPlaybackProperties.videoCodec
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, media_types$.VideoCodec);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SecondaryPlaybackProperties.audioDecoderName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SecondaryPlaybackProperties.videoDecoderName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SecondaryPlaybackProperties.audioEncryptionScheme
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, media_types$.EncryptionMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SecondaryPlaybackProperties.videoEncryptionScheme
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, media_types$.EncryptionMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SecondaryPlaybackProperties.naturalSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SecondaryPlaybackProperties.encodedSize = codec.kStructHeaderSize + 40;

  SecondaryPlaybackProperties.decode = function(decoder) {
    var packed;
    var val = new SecondaryPlaybackProperties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audioCodec = decoder.decodeStruct(codec.Int32);
    val.videoCodec = decoder.decodeStruct(codec.Int32);
    val.audioDecoderName = decoder.decodeStruct(codec.String);
    val.videoDecoderName = decoder.decodeStruct(codec.String);
    val.audioEncryptionScheme = decoder.decodeStruct(codec.Int32);
    val.videoEncryptionScheme = decoder.decodeStruct(codec.Int32);
    val.naturalSize = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  SecondaryPlaybackProperties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SecondaryPlaybackProperties.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.audioCodec);
    encoder.encodeStruct(codec.Int32, val.videoCodec);
    encoder.encodeStruct(codec.String, val.audioDecoderName);
    encoder.encodeStruct(codec.String, val.videoDecoderName);
    encoder.encodeStruct(codec.Int32, val.audioEncryptionScheme);
    encoder.encodeStruct(codec.Int32, val.videoEncryptionScheme);
    encoder.encodeStructPointer(geometry$.Size, val.naturalSize);
  };
  function WatchTimeRecorder_RecordWatchTime_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_RecordWatchTime_Params.prototype.initDefaults_ = function() {
    this.key = 0;
    this.watchTime = null;
  };
  WatchTimeRecorder_RecordWatchTime_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_RecordWatchTime_Params.validate = function(messageValidator, offset) {
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


    // validate WatchTimeRecorder_RecordWatchTime_Params.key
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.WatchTimeKey);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WatchTimeRecorder_RecordWatchTime_Params.watchTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WatchTimeRecorder_RecordWatchTime_Params.encodedSize = codec.kStructHeaderSize + 16;

  WatchTimeRecorder_RecordWatchTime_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_RecordWatchTime_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.watchTime = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  WatchTimeRecorder_RecordWatchTime_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_RecordWatchTime_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.key);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.watchTime);
  };
  function WatchTimeRecorder_FinalizeWatchTime_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_FinalizeWatchTime_Params.prototype.initDefaults_ = function() {
    this.watchTimeKeys = null;
  };
  WatchTimeRecorder_FinalizeWatchTime_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_FinalizeWatchTime_Params.validate = function(messageValidator, offset) {
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


    // validate WatchTimeRecorder_FinalizeWatchTime_Params.watchTimeKeys
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(media_types$.WatchTimeKey), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WatchTimeRecorder_FinalizeWatchTime_Params.encodedSize = codec.kStructHeaderSize + 8;

  WatchTimeRecorder_FinalizeWatchTime_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_FinalizeWatchTime_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.watchTimeKeys = decoder.decodeArrayPointer(new codec.Enum(media_types$.WatchTimeKey));
    return val;
  };

  WatchTimeRecorder_FinalizeWatchTime_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_FinalizeWatchTime_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(media_types$.WatchTimeKey), val.watchTimeKeys);
  };
  function WatchTimeRecorder_OnError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_OnError_Params.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  WatchTimeRecorder_OnError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_OnError_Params.validate = function(messageValidator, offset) {
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


    // validate WatchTimeRecorder_OnError_Params.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.PipelineStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WatchTimeRecorder_OnError_Params.encodedSize = codec.kStructHeaderSize + 8;

  WatchTimeRecorder_OnError_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_OnError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WatchTimeRecorder_OnError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_OnError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WatchTimeRecorder_UpdateSecondaryProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_UpdateSecondaryProperties_Params.prototype.initDefaults_ = function() {
    this.secondaryProperties = null;
  };
  WatchTimeRecorder_UpdateSecondaryProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_UpdateSecondaryProperties_Params.validate = function(messageValidator, offset) {
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


    // validate WatchTimeRecorder_UpdateSecondaryProperties_Params.secondaryProperties
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SecondaryPlaybackProperties, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WatchTimeRecorder_UpdateSecondaryProperties_Params.encodedSize = codec.kStructHeaderSize + 8;

  WatchTimeRecorder_UpdateSecondaryProperties_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_UpdateSecondaryProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.secondaryProperties = decoder.decodeStructPointer(SecondaryPlaybackProperties);
    return val;
  };

  WatchTimeRecorder_UpdateSecondaryProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_UpdateSecondaryProperties_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SecondaryPlaybackProperties, val.secondaryProperties);
  };
  function WatchTimeRecorder_SetAutoplayInitiated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_SetAutoplayInitiated_Params.prototype.initDefaults_ = function() {
    this.value = false;
  };
  WatchTimeRecorder_SetAutoplayInitiated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_SetAutoplayInitiated_Params.validate = function(messageValidator, offset) {
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

  WatchTimeRecorder_SetAutoplayInitiated_Params.encodedSize = codec.kStructHeaderSize + 8;

  WatchTimeRecorder_SetAutoplayInitiated_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_SetAutoplayInitiated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.value = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WatchTimeRecorder_SetAutoplayInitiated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_SetAutoplayInitiated_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.value & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WatchTimeRecorder_OnDurationChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_OnDurationChanged_Params.prototype.initDefaults_ = function() {
    this.duration = null;
  };
  WatchTimeRecorder_OnDurationChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_OnDurationChanged_Params.validate = function(messageValidator, offset) {
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


    // validate WatchTimeRecorder_OnDurationChanged_Params.duration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WatchTimeRecorder_OnDurationChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  WatchTimeRecorder_OnDurationChanged_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_OnDurationChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.duration = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  WatchTimeRecorder_OnDurationChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_OnDurationChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.duration);
  };
  function WatchTimeRecorder_UpdateUnderflowCount_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WatchTimeRecorder_UpdateUnderflowCount_Params.prototype.initDefaults_ = function() {
    this.count = 0;
  };
  WatchTimeRecorder_UpdateUnderflowCount_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WatchTimeRecorder_UpdateUnderflowCount_Params.validate = function(messageValidator, offset) {
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

  WatchTimeRecorder_UpdateUnderflowCount_Params.encodedSize = codec.kStructHeaderSize + 8;

  WatchTimeRecorder_UpdateUnderflowCount_Params.decode = function(decoder) {
    var packed;
    var val = new WatchTimeRecorder_UpdateUnderflowCount_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.count = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WatchTimeRecorder_UpdateUnderflowCount_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WatchTimeRecorder_UpdateUnderflowCount_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.count);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kWatchTimeRecorder_RecordWatchTime_Name = 0;
  var kWatchTimeRecorder_FinalizeWatchTime_Name = 1;
  var kWatchTimeRecorder_OnError_Name = 2;
  var kWatchTimeRecorder_UpdateSecondaryProperties_Name = 3;
  var kWatchTimeRecorder_SetAutoplayInitiated_Name = 4;
  var kWatchTimeRecorder_OnDurationChanged_Name = 5;
  var kWatchTimeRecorder_UpdateUnderflowCount_Name = 6;

  function WatchTimeRecorderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WatchTimeRecorder,
                                                   handleOrPtrInfo);
  }

  function WatchTimeRecorderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WatchTimeRecorder, associatedInterfacePtrInfo);
  }

  WatchTimeRecorderAssociatedPtr.prototype =
      Object.create(WatchTimeRecorderPtr.prototype);
  WatchTimeRecorderAssociatedPtr.prototype.constructor =
      WatchTimeRecorderAssociatedPtr;

  function WatchTimeRecorderProxy(receiver) {
    this.receiver_ = receiver;
  }
  WatchTimeRecorderPtr.prototype.recordWatchTime = function() {
    return WatchTimeRecorderProxy.prototype.recordWatchTime
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.recordWatchTime = function(key, watchTime) {
    var params_ = new WatchTimeRecorder_RecordWatchTime_Params();
    params_.key = key;
    params_.watchTime = watchTime;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_RecordWatchTime_Name,
        codec.align(WatchTimeRecorder_RecordWatchTime_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_RecordWatchTime_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WatchTimeRecorderPtr.prototype.finalizeWatchTime = function() {
    return WatchTimeRecorderProxy.prototype.finalizeWatchTime
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.finalizeWatchTime = function(watchTimeKeys) {
    var params_ = new WatchTimeRecorder_FinalizeWatchTime_Params();
    params_.watchTimeKeys = watchTimeKeys;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_FinalizeWatchTime_Name,
        codec.align(WatchTimeRecorder_FinalizeWatchTime_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_FinalizeWatchTime_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WatchTimeRecorderPtr.prototype.onError = function() {
    return WatchTimeRecorderProxy.prototype.onError
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.onError = function(status) {
    var params_ = new WatchTimeRecorder_OnError_Params();
    params_.status = status;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_OnError_Name,
        codec.align(WatchTimeRecorder_OnError_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_OnError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WatchTimeRecorderPtr.prototype.updateSecondaryProperties = function() {
    return WatchTimeRecorderProxy.prototype.updateSecondaryProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.updateSecondaryProperties = function(secondaryProperties) {
    var params_ = new WatchTimeRecorder_UpdateSecondaryProperties_Params();
    params_.secondaryProperties = secondaryProperties;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_UpdateSecondaryProperties_Name,
        codec.align(WatchTimeRecorder_UpdateSecondaryProperties_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_UpdateSecondaryProperties_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WatchTimeRecorderPtr.prototype.setAutoplayInitiated = function() {
    return WatchTimeRecorderProxy.prototype.setAutoplayInitiated
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.setAutoplayInitiated = function(value) {
    var params_ = new WatchTimeRecorder_SetAutoplayInitiated_Params();
    params_.value = value;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_SetAutoplayInitiated_Name,
        codec.align(WatchTimeRecorder_SetAutoplayInitiated_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_SetAutoplayInitiated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WatchTimeRecorderPtr.prototype.onDurationChanged = function() {
    return WatchTimeRecorderProxy.prototype.onDurationChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.onDurationChanged = function(duration) {
    var params_ = new WatchTimeRecorder_OnDurationChanged_Params();
    params_.duration = duration;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_OnDurationChanged_Name,
        codec.align(WatchTimeRecorder_OnDurationChanged_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_OnDurationChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WatchTimeRecorderPtr.prototype.updateUnderflowCount = function() {
    return WatchTimeRecorderProxy.prototype.updateUnderflowCount
        .apply(this.ptr.getProxy(), arguments);
  };

  WatchTimeRecorderProxy.prototype.updateUnderflowCount = function(count) {
    var params_ = new WatchTimeRecorder_UpdateUnderflowCount_Params();
    params_.count = count;
    var builder = new codec.MessageV0Builder(
        kWatchTimeRecorder_UpdateUnderflowCount_Name,
        codec.align(WatchTimeRecorder_UpdateUnderflowCount_Params.encodedSize));
    builder.encodeStruct(WatchTimeRecorder_UpdateUnderflowCount_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WatchTimeRecorderStub(delegate) {
    this.delegate_ = delegate;
  }
  WatchTimeRecorderStub.prototype.recordWatchTime = function(key, watchTime) {
    return this.delegate_ && this.delegate_.recordWatchTime && this.delegate_.recordWatchTime(key, watchTime);
  }
  WatchTimeRecorderStub.prototype.finalizeWatchTime = function(watchTimeKeys) {
    return this.delegate_ && this.delegate_.finalizeWatchTime && this.delegate_.finalizeWatchTime(watchTimeKeys);
  }
  WatchTimeRecorderStub.prototype.onError = function(status) {
    return this.delegate_ && this.delegate_.onError && this.delegate_.onError(status);
  }
  WatchTimeRecorderStub.prototype.updateSecondaryProperties = function(secondaryProperties) {
    return this.delegate_ && this.delegate_.updateSecondaryProperties && this.delegate_.updateSecondaryProperties(secondaryProperties);
  }
  WatchTimeRecorderStub.prototype.setAutoplayInitiated = function(value) {
    return this.delegate_ && this.delegate_.setAutoplayInitiated && this.delegate_.setAutoplayInitiated(value);
  }
  WatchTimeRecorderStub.prototype.onDurationChanged = function(duration) {
    return this.delegate_ && this.delegate_.onDurationChanged && this.delegate_.onDurationChanged(duration);
  }
  WatchTimeRecorderStub.prototype.updateUnderflowCount = function(count) {
    return this.delegate_ && this.delegate_.updateUnderflowCount && this.delegate_.updateUnderflowCount(count);
  }

  WatchTimeRecorderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWatchTimeRecorder_RecordWatchTime_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_RecordWatchTime_Params);
      this.recordWatchTime(params.key, params.watchTime);
      return true;
    case kWatchTimeRecorder_FinalizeWatchTime_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_FinalizeWatchTime_Params);
      this.finalizeWatchTime(params.watchTimeKeys);
      return true;
    case kWatchTimeRecorder_OnError_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_OnError_Params);
      this.onError(params.status);
      return true;
    case kWatchTimeRecorder_UpdateSecondaryProperties_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_UpdateSecondaryProperties_Params);
      this.updateSecondaryProperties(params.secondaryProperties);
      return true;
    case kWatchTimeRecorder_SetAutoplayInitiated_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_SetAutoplayInitiated_Params);
      this.setAutoplayInitiated(params.value);
      return true;
    case kWatchTimeRecorder_OnDurationChanged_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_OnDurationChanged_Params);
      this.onDurationChanged(params.duration);
      return true;
    case kWatchTimeRecorder_UpdateUnderflowCount_Name:
      var params = reader.decodeStruct(WatchTimeRecorder_UpdateUnderflowCount_Params);
      this.updateUnderflowCount(params.count);
      return true;
    default:
      return false;
    }
  };

  WatchTimeRecorderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWatchTimeRecorderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWatchTimeRecorder_RecordWatchTime_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_RecordWatchTime_Params;
      break;
      case kWatchTimeRecorder_FinalizeWatchTime_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_FinalizeWatchTime_Params;
      break;
      case kWatchTimeRecorder_OnError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_OnError_Params;
      break;
      case kWatchTimeRecorder_UpdateSecondaryProperties_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_UpdateSecondaryProperties_Params;
      break;
      case kWatchTimeRecorder_SetAutoplayInitiated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_SetAutoplayInitiated_Params;
      break;
      case kWatchTimeRecorder_OnDurationChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_OnDurationChanged_Params;
      break;
      case kWatchTimeRecorder_UpdateUnderflowCount_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WatchTimeRecorder_UpdateUnderflowCount_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWatchTimeRecorderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WatchTimeRecorder = {
    name: 'media.mojom.WatchTimeRecorder',
    kVersion: 0,
    ptrClass: WatchTimeRecorderPtr,
    proxyClass: WatchTimeRecorderProxy,
    stubClass: WatchTimeRecorderStub,
    validateRequest: validateWatchTimeRecorderRequest,
    validateResponse: null,
  };
  WatchTimeRecorderStub.prototype.validator = validateWatchTimeRecorderRequest;
  WatchTimeRecorderProxy.prototype.validator = null;
  exports.PlaybackProperties = PlaybackProperties;
  exports.SecondaryPlaybackProperties = SecondaryPlaybackProperties;
  exports.WatchTimeRecorder = WatchTimeRecorder;
  exports.WatchTimeRecorderPtr = WatchTimeRecorderPtr;
  exports.WatchTimeRecorderAssociatedPtr = WatchTimeRecorderAssociatedPtr;
})();