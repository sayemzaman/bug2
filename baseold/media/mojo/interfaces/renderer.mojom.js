// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/renderer.mojom';
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
  var demuxer_stream$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/demuxer_stream.mojom', 'demuxer_stream.mojom.js');
  }
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function Renderer_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_Initialize_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
    this.streams = null;
    this.mediaUrl = null;
    this.firstPartyForCookies = null;
    this.allowCredentials = false;
  };
  Renderer_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_Initialize_Params.validate = function(messageValidator, offset) {
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


    // validate Renderer_Initialize_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Renderer_Initialize_Params.streams
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.Interface(demuxer_stream$.DemuxerStreamPtr), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Renderer_Initialize_Params.mediaUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Renderer_Initialize_Params.firstPartyForCookies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Renderer_Initialize_Params.encodedSize = codec.kStructHeaderSize + 40;

  Renderer_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new Renderer_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    val.streams = decoder.decodeArrayPointer(new codec.Interface(demuxer_stream$.DemuxerStreamPtr));
    val.mediaUrl = decoder.decodeStructPointer(url$.Url);
    val.firstPartyForCookies = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.allowCredentials = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Renderer_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
    encoder.encodeArrayPointer(new codec.Interface(demuxer_stream$.DemuxerStreamPtr), val.streams);
    encoder.encodeStructPointer(url$.Url, val.mediaUrl);
    encoder.encodeStructPointer(url$.Url, val.firstPartyForCookies);
    packed = 0;
    packed |= (val.allowCredentials & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Renderer_Initialize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_Initialize_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  Renderer_Initialize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_Initialize_ResponseParams.validate = function(messageValidator, offset) {
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

  Renderer_Initialize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Renderer_Initialize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Renderer_Initialize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Renderer_Initialize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_Initialize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Renderer_Flush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_Flush_Params.prototype.initDefaults_ = function() {
  };
  Renderer_Flush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_Flush_Params.validate = function(messageValidator, offset) {
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

  Renderer_Flush_Params.encodedSize = codec.kStructHeaderSize + 0;

  Renderer_Flush_Params.decode = function(decoder) {
    var packed;
    var val = new Renderer_Flush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Renderer_Flush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_Flush_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Renderer_Flush_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_Flush_ResponseParams.prototype.initDefaults_ = function() {
  };
  Renderer_Flush_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_Flush_ResponseParams.validate = function(messageValidator, offset) {
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

  Renderer_Flush_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  Renderer_Flush_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Renderer_Flush_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Renderer_Flush_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_Flush_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function Renderer_StartPlayingFrom_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_StartPlayingFrom_Params.prototype.initDefaults_ = function() {
    this.time = null;
  };
  Renderer_StartPlayingFrom_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_StartPlayingFrom_Params.validate = function(messageValidator, offset) {
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


    // validate Renderer_StartPlayingFrom_Params.time
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Renderer_StartPlayingFrom_Params.encodedSize = codec.kStructHeaderSize + 8;

  Renderer_StartPlayingFrom_Params.decode = function(decoder) {
    var packed;
    var val = new Renderer_StartPlayingFrom_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  Renderer_StartPlayingFrom_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_StartPlayingFrom_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.time);
  };
  function Renderer_SetPlaybackRate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_SetPlaybackRate_Params.prototype.initDefaults_ = function() {
    this.playbackRate = 0;
  };
  Renderer_SetPlaybackRate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_SetPlaybackRate_Params.validate = function(messageValidator, offset) {
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

  Renderer_SetPlaybackRate_Params.encodedSize = codec.kStructHeaderSize + 8;

  Renderer_SetPlaybackRate_Params.decode = function(decoder) {
    var packed;
    var val = new Renderer_SetPlaybackRate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.playbackRate = decoder.decodeStruct(codec.Double);
    return val;
  };

  Renderer_SetPlaybackRate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_SetPlaybackRate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.playbackRate);
  };
  function Renderer_SetVolume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_SetVolume_Params.prototype.initDefaults_ = function() {
    this.volume = 0;
  };
  Renderer_SetVolume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_SetVolume_Params.validate = function(messageValidator, offset) {
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

  Renderer_SetVolume_Params.encodedSize = codec.kStructHeaderSize + 8;

  Renderer_SetVolume_Params.decode = function(decoder) {
    var packed;
    var val = new Renderer_SetVolume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.volume = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Renderer_SetVolume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_SetVolume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.volume);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Renderer_SetCdm_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_SetCdm_Params.prototype.initDefaults_ = function() {
    this.cdmId = 0;
  };
  Renderer_SetCdm_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_SetCdm_Params.validate = function(messageValidator, offset) {
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

  Renderer_SetCdm_Params.encodedSize = codec.kStructHeaderSize + 8;

  Renderer_SetCdm_Params.decode = function(decoder) {
    var packed;
    var val = new Renderer_SetCdm_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cdmId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Renderer_SetCdm_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_SetCdm_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.cdmId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Renderer_SetCdm_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Renderer_SetCdm_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  Renderer_SetCdm_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Renderer_SetCdm_ResponseParams.validate = function(messageValidator, offset) {
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

  Renderer_SetCdm_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Renderer_SetCdm_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Renderer_SetCdm_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Renderer_SetCdm_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Renderer_SetCdm_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RendererClient_OnTimeUpdate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnTimeUpdate_Params.prototype.initDefaults_ = function() {
    this.time = null;
    this.maxTime = null;
    this.captureTime = null;
  };
  RendererClient_OnTimeUpdate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnTimeUpdate_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnTimeUpdate_Params.time
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererClient_OnTimeUpdate_Params.maxTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererClient_OnTimeUpdate_Params.captureTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnTimeUpdate_Params.encodedSize = codec.kStructHeaderSize + 24;

  RendererClient_OnTimeUpdate_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnTimeUpdate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time = decoder.decodeStructPointer(time$.TimeDelta);
    val.maxTime = decoder.decodeStructPointer(time$.TimeDelta);
    val.captureTime = decoder.decodeStructPointer(time$.TimeTicks);
    return val;
  };

  RendererClient_OnTimeUpdate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnTimeUpdate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.time);
    encoder.encodeStructPointer(time$.TimeDelta, val.maxTime);
    encoder.encodeStructPointer(time$.TimeTicks, val.captureTime);
  };
  function RendererClient_OnBufferingStateChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnBufferingStateChange_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  RendererClient_OnBufferingStateChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnBufferingStateChange_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnBufferingStateChange_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.BufferingState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnBufferingStateChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnBufferingStateChange_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnBufferingStateChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RendererClient_OnBufferingStateChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnBufferingStateChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RendererClient_OnEnded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnEnded_Params.prototype.initDefaults_ = function() {
  };
  RendererClient_OnEnded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnEnded_Params.validate = function(messageValidator, offset) {
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

  RendererClient_OnEnded_Params.encodedSize = codec.kStructHeaderSize + 0;

  RendererClient_OnEnded_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnEnded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  RendererClient_OnEnded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnEnded_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function RendererClient_OnError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnError_Params.prototype.initDefaults_ = function() {
  };
  RendererClient_OnError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnError_Params.validate = function(messageValidator, offset) {
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

  RendererClient_OnError_Params.encodedSize = codec.kStructHeaderSize + 0;

  RendererClient_OnError_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  RendererClient_OnError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnError_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function RendererClient_OnAudioConfigChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnAudioConfigChange_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  RendererClient_OnAudioConfigChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnAudioConfigChange_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnAudioConfigChange_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.AudioDecoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnAudioConfigChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnAudioConfigChange_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnAudioConfigChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(media_types$.AudioDecoderConfig);
    return val;
  };

  RendererClient_OnAudioConfigChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnAudioConfigChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.AudioDecoderConfig, val.config);
  };
  function RendererClient_OnVideoConfigChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnVideoConfigChange_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  RendererClient_OnVideoConfigChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnVideoConfigChange_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnVideoConfigChange_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.VideoDecoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnVideoConfigChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnVideoConfigChange_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnVideoConfigChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(media_types$.VideoDecoderConfig);
    return val;
  };

  RendererClient_OnVideoConfigChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnVideoConfigChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.VideoDecoderConfig, val.config);
  };
  function RendererClient_OnVideoNaturalSizeChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnVideoNaturalSizeChange_Params.prototype.initDefaults_ = function() {
    this.size = null;
  };
  RendererClient_OnVideoNaturalSizeChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnVideoNaturalSizeChange_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnVideoNaturalSizeChange_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnVideoNaturalSizeChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnVideoNaturalSizeChange_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnVideoNaturalSizeChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  RendererClient_OnVideoNaturalSizeChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnVideoNaturalSizeChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
  };
  function RendererClient_OnVideoOpacityChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnVideoOpacityChange_Params.prototype.initDefaults_ = function() {
    this.opaque = false;
  };
  RendererClient_OnVideoOpacityChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnVideoOpacityChange_Params.validate = function(messageValidator, offset) {
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

  RendererClient_OnVideoOpacityChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnVideoOpacityChange_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnVideoOpacityChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.opaque = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RendererClient_OnVideoOpacityChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnVideoOpacityChange_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.opaque & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RendererClient_OnStatisticsUpdate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnStatisticsUpdate_Params.prototype.initDefaults_ = function() {
    this.stats = null;
  };
  RendererClient_OnStatisticsUpdate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnStatisticsUpdate_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnStatisticsUpdate_Params.stats
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.PipelineStatistics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnStatisticsUpdate_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnStatisticsUpdate_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnStatisticsUpdate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.stats = decoder.decodeStructPointer(media_types$.PipelineStatistics);
    return val;
  };

  RendererClient_OnStatisticsUpdate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnStatisticsUpdate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.PipelineStatistics, val.stats);
  };
  function RendererClient_OnWaiting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererClient_OnWaiting_Params.prototype.initDefaults_ = function() {
    this.reason = 0;
  };
  RendererClient_OnWaiting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererClient_OnWaiting_Params.validate = function(messageValidator, offset) {
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


    // validate RendererClient_OnWaiting_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.WaitingReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererClient_OnWaiting_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererClient_OnWaiting_Params.decode = function(decoder) {
    var packed;
    var val = new RendererClient_OnWaiting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RendererClient_OnWaiting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererClient_OnWaiting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kRenderer_Initialize_Name = 0;
  var kRenderer_Flush_Name = 1;
  var kRenderer_StartPlayingFrom_Name = 2;
  var kRenderer_SetPlaybackRate_Name = 3;
  var kRenderer_SetVolume_Name = 4;
  var kRenderer_SetCdm_Name = 5;

  function RendererPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Renderer,
                                                   handleOrPtrInfo);
  }

  function RendererAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Renderer, associatedInterfacePtrInfo);
  }

  RendererAssociatedPtr.prototype =
      Object.create(RendererPtr.prototype);
  RendererAssociatedPtr.prototype.constructor =
      RendererAssociatedPtr;

  function RendererProxy(receiver) {
    this.receiver_ = receiver;
  }
  RendererPtr.prototype.initialize = function() {
    return RendererProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererProxy.prototype.initialize = function(client, streams, mediaUrl, firstPartyForCookies, allowCredentials) {
    var params_ = new Renderer_Initialize_Params();
    params_.client = client;
    params_.streams = streams;
    params_.mediaUrl = mediaUrl;
    params_.firstPartyForCookies = firstPartyForCookies;
    params_.allowCredentials = allowCredentials;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kRenderer_Initialize_Name,
          codec.align(Renderer_Initialize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(Renderer_Initialize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Renderer_Initialize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  RendererPtr.prototype.flush = function() {
    return RendererProxy.prototype.flush
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererProxy.prototype.flush = function() {
    var params_ = new Renderer_Flush_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kRenderer_Flush_Name,
          codec.align(Renderer_Flush_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Renderer_Flush_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Renderer_Flush_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  RendererPtr.prototype.startPlayingFrom = function() {
    return RendererProxy.prototype.startPlayingFrom
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererProxy.prototype.startPlayingFrom = function(time) {
    var params_ = new Renderer_StartPlayingFrom_Params();
    params_.time = time;
    var builder = new codec.MessageV0Builder(
        kRenderer_StartPlayingFrom_Name,
        codec.align(Renderer_StartPlayingFrom_Params.encodedSize));
    builder.encodeStruct(Renderer_StartPlayingFrom_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererPtr.prototype.setPlaybackRate = function() {
    return RendererProxy.prototype.setPlaybackRate
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererProxy.prototype.setPlaybackRate = function(playbackRate) {
    var params_ = new Renderer_SetPlaybackRate_Params();
    params_.playbackRate = playbackRate;
    var builder = new codec.MessageV0Builder(
        kRenderer_SetPlaybackRate_Name,
        codec.align(Renderer_SetPlaybackRate_Params.encodedSize));
    builder.encodeStruct(Renderer_SetPlaybackRate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererPtr.prototype.setVolume = function() {
    return RendererProxy.prototype.setVolume
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererProxy.prototype.setVolume = function(volume) {
    var params_ = new Renderer_SetVolume_Params();
    params_.volume = volume;
    var builder = new codec.MessageV0Builder(
        kRenderer_SetVolume_Name,
        codec.align(Renderer_SetVolume_Params.encodedSize));
    builder.encodeStruct(Renderer_SetVolume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererPtr.prototype.setCdm = function() {
    return RendererProxy.prototype.setCdm
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererProxy.prototype.setCdm = function(cdmId) {
    var params_ = new Renderer_SetCdm_Params();
    params_.cdmId = cdmId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kRenderer_SetCdm_Name,
          codec.align(Renderer_SetCdm_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Renderer_SetCdm_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Renderer_SetCdm_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function RendererStub(delegate) {
    this.delegate_ = delegate;
  }
  RendererStub.prototype.initialize = function(client, streams, mediaUrl, firstPartyForCookies, allowCredentials) {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize(client, streams, mediaUrl, firstPartyForCookies, allowCredentials);
  }
  RendererStub.prototype.flush = function() {
    return this.delegate_ && this.delegate_.flush && this.delegate_.flush();
  }
  RendererStub.prototype.startPlayingFrom = function(time) {
    return this.delegate_ && this.delegate_.startPlayingFrom && this.delegate_.startPlayingFrom(time);
  }
  RendererStub.prototype.setPlaybackRate = function(playbackRate) {
    return this.delegate_ && this.delegate_.setPlaybackRate && this.delegate_.setPlaybackRate(playbackRate);
  }
  RendererStub.prototype.setVolume = function(volume) {
    return this.delegate_ && this.delegate_.setVolume && this.delegate_.setVolume(volume);
  }
  RendererStub.prototype.setCdm = function(cdmId) {
    return this.delegate_ && this.delegate_.setCdm && this.delegate_.setCdm(cdmId);
  }

  RendererStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRenderer_StartPlayingFrom_Name:
      var params = reader.decodeStruct(Renderer_StartPlayingFrom_Params);
      this.startPlayingFrom(params.time);
      return true;
    case kRenderer_SetPlaybackRate_Name:
      var params = reader.decodeStruct(Renderer_SetPlaybackRate_Params);
      this.setPlaybackRate(params.playbackRate);
      return true;
    case kRenderer_SetVolume_Name:
      var params = reader.decodeStruct(Renderer_SetVolume_Params);
      this.setVolume(params.volume);
      return true;
    default:
      return false;
    }
  };

  RendererStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRenderer_Initialize_Name:
      var params = reader.decodeStruct(Renderer_Initialize_Params);
      this.initialize(params.client, params.streams, params.mediaUrl, params.firstPartyForCookies, params.allowCredentials).then(function(response) {
        var responseParams =
            new Renderer_Initialize_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV2Builder(
            kRenderer_Initialize_Name,
            codec.align(Renderer_Initialize_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(Renderer_Initialize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kRenderer_Flush_Name:
      var params = reader.decodeStruct(Renderer_Flush_Params);
      this.flush().then(function(response) {
        var responseParams =
            new Renderer_Flush_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kRenderer_Flush_Name,
            codec.align(Renderer_Flush_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Renderer_Flush_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kRenderer_SetCdm_Name:
      var params = reader.decodeStruct(Renderer_SetCdm_Params);
      this.setCdm(params.cdmId).then(function(response) {
        var responseParams =
            new Renderer_SetCdm_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kRenderer_SetCdm_Name,
            codec.align(Renderer_SetCdm_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Renderer_SetCdm_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateRendererRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRenderer_Initialize_Name:
        if (message.expectsResponse())
          paramsClass = Renderer_Initialize_Params;
      break;
      case kRenderer_Flush_Name:
        if (message.expectsResponse())
          paramsClass = Renderer_Flush_Params;
      break;
      case kRenderer_StartPlayingFrom_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Renderer_StartPlayingFrom_Params;
      break;
      case kRenderer_SetPlaybackRate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Renderer_SetPlaybackRate_Params;
      break;
      case kRenderer_SetVolume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Renderer_SetVolume_Params;
      break;
      case kRenderer_SetCdm_Name:
        if (message.expectsResponse())
          paramsClass = Renderer_SetCdm_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRendererResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kRenderer_Initialize_Name:
        if (message.isResponse())
          paramsClass = Renderer_Initialize_ResponseParams;
        break;
      case kRenderer_Flush_Name:
        if (message.isResponse())
          paramsClass = Renderer_Flush_ResponseParams;
        break;
      case kRenderer_SetCdm_Name:
        if (message.isResponse())
          paramsClass = Renderer_SetCdm_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Renderer = {
    name: 'media.mojom.Renderer',
    kVersion: 0,
    ptrClass: RendererPtr,
    proxyClass: RendererProxy,
    stubClass: RendererStub,
    validateRequest: validateRendererRequest,
    validateResponse: validateRendererResponse,
  };
  RendererStub.prototype.validator = validateRendererRequest;
  RendererProxy.prototype.validator = validateRendererResponse;
  var kRendererClient_OnTimeUpdate_Name = 0;
  var kRendererClient_OnBufferingStateChange_Name = 1;
  var kRendererClient_OnEnded_Name = 2;
  var kRendererClient_OnError_Name = 3;
  var kRendererClient_OnAudioConfigChange_Name = 4;
  var kRendererClient_OnVideoConfigChange_Name = 5;
  var kRendererClient_OnVideoNaturalSizeChange_Name = 6;
  var kRendererClient_OnVideoOpacityChange_Name = 7;
  var kRendererClient_OnStatisticsUpdate_Name = 8;
  var kRendererClient_OnWaiting_Name = 9;

  function RendererClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RendererClient,
                                                   handleOrPtrInfo);
  }

  function RendererClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RendererClient, associatedInterfacePtrInfo);
  }

  RendererClientAssociatedPtr.prototype =
      Object.create(RendererClientPtr.prototype);
  RendererClientAssociatedPtr.prototype.constructor =
      RendererClientAssociatedPtr;

  function RendererClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  RendererClientPtr.prototype.onTimeUpdate = function() {
    return RendererClientProxy.prototype.onTimeUpdate
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onTimeUpdate = function(time, maxTime, captureTime) {
    var params_ = new RendererClient_OnTimeUpdate_Params();
    params_.time = time;
    params_.maxTime = maxTime;
    params_.captureTime = captureTime;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnTimeUpdate_Name,
        codec.align(RendererClient_OnTimeUpdate_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnTimeUpdate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onBufferingStateChange = function() {
    return RendererClientProxy.prototype.onBufferingStateChange
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onBufferingStateChange = function(state) {
    var params_ = new RendererClient_OnBufferingStateChange_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnBufferingStateChange_Name,
        codec.align(RendererClient_OnBufferingStateChange_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnBufferingStateChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onEnded = function() {
    return RendererClientProxy.prototype.onEnded
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onEnded = function() {
    var params_ = new RendererClient_OnEnded_Params();
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnEnded_Name,
        codec.align(RendererClient_OnEnded_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnEnded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onError = function() {
    return RendererClientProxy.prototype.onError
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onError = function() {
    var params_ = new RendererClient_OnError_Params();
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnError_Name,
        codec.align(RendererClient_OnError_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onAudioConfigChange = function() {
    return RendererClientProxy.prototype.onAudioConfigChange
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onAudioConfigChange = function(config) {
    var params_ = new RendererClient_OnAudioConfigChange_Params();
    params_.config = config;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnAudioConfigChange_Name,
        codec.align(RendererClient_OnAudioConfigChange_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnAudioConfigChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onVideoConfigChange = function() {
    return RendererClientProxy.prototype.onVideoConfigChange
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onVideoConfigChange = function(config) {
    var params_ = new RendererClient_OnVideoConfigChange_Params();
    params_.config = config;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnVideoConfigChange_Name,
        codec.align(RendererClient_OnVideoConfigChange_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnVideoConfigChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onVideoNaturalSizeChange = function() {
    return RendererClientProxy.prototype.onVideoNaturalSizeChange
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onVideoNaturalSizeChange = function(size) {
    var params_ = new RendererClient_OnVideoNaturalSizeChange_Params();
    params_.size = size;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnVideoNaturalSizeChange_Name,
        codec.align(RendererClient_OnVideoNaturalSizeChange_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnVideoNaturalSizeChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onVideoOpacityChange = function() {
    return RendererClientProxy.prototype.onVideoOpacityChange
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onVideoOpacityChange = function(opaque) {
    var params_ = new RendererClient_OnVideoOpacityChange_Params();
    params_.opaque = opaque;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnVideoOpacityChange_Name,
        codec.align(RendererClient_OnVideoOpacityChange_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnVideoOpacityChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onStatisticsUpdate = function() {
    return RendererClientProxy.prototype.onStatisticsUpdate
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onStatisticsUpdate = function(stats) {
    var params_ = new RendererClient_OnStatisticsUpdate_Params();
    params_.stats = stats;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnStatisticsUpdate_Name,
        codec.align(RendererClient_OnStatisticsUpdate_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnStatisticsUpdate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererClientPtr.prototype.onWaiting = function() {
    return RendererClientProxy.prototype.onWaiting
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererClientProxy.prototype.onWaiting = function(reason) {
    var params_ = new RendererClient_OnWaiting_Params();
    params_.reason = reason;
    var builder = new codec.MessageV0Builder(
        kRendererClient_OnWaiting_Name,
        codec.align(RendererClient_OnWaiting_Params.encodedSize));
    builder.encodeStruct(RendererClient_OnWaiting_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RendererClientStub(delegate) {
    this.delegate_ = delegate;
  }
  RendererClientStub.prototype.onTimeUpdate = function(time, maxTime, captureTime) {
    return this.delegate_ && this.delegate_.onTimeUpdate && this.delegate_.onTimeUpdate(time, maxTime, captureTime);
  }
  RendererClientStub.prototype.onBufferingStateChange = function(state) {
    return this.delegate_ && this.delegate_.onBufferingStateChange && this.delegate_.onBufferingStateChange(state);
  }
  RendererClientStub.prototype.onEnded = function() {
    return this.delegate_ && this.delegate_.onEnded && this.delegate_.onEnded();
  }
  RendererClientStub.prototype.onError = function() {
    return this.delegate_ && this.delegate_.onError && this.delegate_.onError();
  }
  RendererClientStub.prototype.onAudioConfigChange = function(config) {
    return this.delegate_ && this.delegate_.onAudioConfigChange && this.delegate_.onAudioConfigChange(config);
  }
  RendererClientStub.prototype.onVideoConfigChange = function(config) {
    return this.delegate_ && this.delegate_.onVideoConfigChange && this.delegate_.onVideoConfigChange(config);
  }
  RendererClientStub.prototype.onVideoNaturalSizeChange = function(size) {
    return this.delegate_ && this.delegate_.onVideoNaturalSizeChange && this.delegate_.onVideoNaturalSizeChange(size);
  }
  RendererClientStub.prototype.onVideoOpacityChange = function(opaque) {
    return this.delegate_ && this.delegate_.onVideoOpacityChange && this.delegate_.onVideoOpacityChange(opaque);
  }
  RendererClientStub.prototype.onStatisticsUpdate = function(stats) {
    return this.delegate_ && this.delegate_.onStatisticsUpdate && this.delegate_.onStatisticsUpdate(stats);
  }
  RendererClientStub.prototype.onWaiting = function(reason) {
    return this.delegate_ && this.delegate_.onWaiting && this.delegate_.onWaiting(reason);
  }

  RendererClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRendererClient_OnTimeUpdate_Name:
      var params = reader.decodeStruct(RendererClient_OnTimeUpdate_Params);
      this.onTimeUpdate(params.time, params.maxTime, params.captureTime);
      return true;
    case kRendererClient_OnBufferingStateChange_Name:
      var params = reader.decodeStruct(RendererClient_OnBufferingStateChange_Params);
      this.onBufferingStateChange(params.state);
      return true;
    case kRendererClient_OnEnded_Name:
      var params = reader.decodeStruct(RendererClient_OnEnded_Params);
      this.onEnded();
      return true;
    case kRendererClient_OnError_Name:
      var params = reader.decodeStruct(RendererClient_OnError_Params);
      this.onError();
      return true;
    case kRendererClient_OnAudioConfigChange_Name:
      var params = reader.decodeStruct(RendererClient_OnAudioConfigChange_Params);
      this.onAudioConfigChange(params.config);
      return true;
    case kRendererClient_OnVideoConfigChange_Name:
      var params = reader.decodeStruct(RendererClient_OnVideoConfigChange_Params);
      this.onVideoConfigChange(params.config);
      return true;
    case kRendererClient_OnVideoNaturalSizeChange_Name:
      var params = reader.decodeStruct(RendererClient_OnVideoNaturalSizeChange_Params);
      this.onVideoNaturalSizeChange(params.size);
      return true;
    case kRendererClient_OnVideoOpacityChange_Name:
      var params = reader.decodeStruct(RendererClient_OnVideoOpacityChange_Params);
      this.onVideoOpacityChange(params.opaque);
      return true;
    case kRendererClient_OnStatisticsUpdate_Name:
      var params = reader.decodeStruct(RendererClient_OnStatisticsUpdate_Params);
      this.onStatisticsUpdate(params.stats);
      return true;
    case kRendererClient_OnWaiting_Name:
      var params = reader.decodeStruct(RendererClient_OnWaiting_Params);
      this.onWaiting(params.reason);
      return true;
    default:
      return false;
    }
  };

  RendererClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRendererClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRendererClient_OnTimeUpdate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnTimeUpdate_Params;
      break;
      case kRendererClient_OnBufferingStateChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnBufferingStateChange_Params;
      break;
      case kRendererClient_OnEnded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnEnded_Params;
      break;
      case kRendererClient_OnError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnError_Params;
      break;
      case kRendererClient_OnAudioConfigChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnAudioConfigChange_Params;
      break;
      case kRendererClient_OnVideoConfigChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnVideoConfigChange_Params;
      break;
      case kRendererClient_OnVideoNaturalSizeChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnVideoNaturalSizeChange_Params;
      break;
      case kRendererClient_OnVideoOpacityChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnVideoOpacityChange_Params;
      break;
      case kRendererClient_OnStatisticsUpdate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnStatisticsUpdate_Params;
      break;
      case kRendererClient_OnWaiting_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererClient_OnWaiting_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRendererClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RendererClient = {
    name: 'media.mojom.RendererClient',
    kVersion: 0,
    ptrClass: RendererClientPtr,
    proxyClass: RendererClientProxy,
    stubClass: RendererClientStub,
    validateRequest: validateRendererClientRequest,
    validateResponse: null,
  };
  RendererClientStub.prototype.validator = validateRendererClientRequest;
  RendererClientProxy.prototype.validator = null;
  exports.Renderer = Renderer;
  exports.RendererPtr = RendererPtr;
  exports.RendererAssociatedPtr = RendererAssociatedPtr;
  exports.RendererClient = RendererClient;
  exports.RendererClientPtr = RendererClientPtr;
  exports.RendererClientAssociatedPtr = RendererClientAssociatedPtr;
})();