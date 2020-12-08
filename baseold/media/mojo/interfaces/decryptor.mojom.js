// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/interfaces/decryptor.mojom';
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



  function Decryptor_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_Initialize_Params.prototype.initDefaults_ = function() {
    this.audioPipe = null;
    this.videoPipe = null;
    this.decryptPipe = null;
    this.decryptedPipe = null;
  };
  Decryptor_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_Initialize_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_Initialize_Params.audioPipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_Initialize_Params.videoPipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_Initialize_Params.decryptPipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_Initialize_Params.decryptedPipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_Initialize_Params.encodedSize = codec.kStructHeaderSize + 16;

  Decryptor_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audioPipe = decoder.decodeStruct(codec.Handle);
    val.videoPipe = decoder.decodeStruct(codec.Handle);
    val.decryptPipe = decoder.decodeStruct(codec.Handle);
    val.decryptedPipe = decoder.decodeStruct(codec.Handle);
    return val;
  };

  Decryptor_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.audioPipe);
    encoder.encodeStruct(codec.Handle, val.videoPipe);
    encoder.encodeStruct(codec.Handle, val.decryptPipe);
    encoder.encodeStruct(codec.Handle, val.decryptedPipe);
  };
  function Decryptor_Decrypt_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_Decrypt_Params.prototype.initDefaults_ = function() {
    this.streamType = 0;
    this.encrypted = null;
  };
  Decryptor_Decrypt_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_Decrypt_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_Decrypt_Params.streamType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.StreamType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_Decrypt_Params.encrypted
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, media_types$.DecoderBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_Decrypt_Params.encodedSize = codec.kStructHeaderSize + 16;

  Decryptor_Decrypt_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_Decrypt_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.streamType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.encrypted = decoder.decodeStructPointer(media_types$.DecoderBuffer);
    return val;
  };

  Decryptor_Decrypt_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_Decrypt_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.streamType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(media_types$.DecoderBuffer, val.encrypted);
  };
  function Decryptor_Decrypt_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_Decrypt_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.buffer = null;
  };
  Decryptor_Decrypt_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_Decrypt_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Decryptor_Decrypt_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_Decrypt_ResponseParams.buffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, media_types$.DecoderBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_Decrypt_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Decryptor_Decrypt_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Decryptor_Decrypt_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.buffer = decoder.decodeStructPointer(media_types$.DecoderBuffer);
    return val;
  };

  Decryptor_Decrypt_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_Decrypt_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(media_types$.DecoderBuffer, val.buffer);
  };
  function Decryptor_CancelDecrypt_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_CancelDecrypt_Params.prototype.initDefaults_ = function() {
    this.streamType = 0;
  };
  Decryptor_CancelDecrypt_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_CancelDecrypt_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_CancelDecrypt_Params.streamType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.StreamType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_CancelDecrypt_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_CancelDecrypt_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_CancelDecrypt_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.streamType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Decryptor_CancelDecrypt_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_CancelDecrypt_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.streamType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Decryptor_InitializeAudioDecoder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_InitializeAudioDecoder_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  Decryptor_InitializeAudioDecoder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_InitializeAudioDecoder_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_InitializeAudioDecoder_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.AudioDecoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_InitializeAudioDecoder_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_InitializeAudioDecoder_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_InitializeAudioDecoder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(media_types$.AudioDecoderConfig);
    return val;
  };

  Decryptor_InitializeAudioDecoder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_InitializeAudioDecoder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.AudioDecoderConfig, val.config);
  };
  function Decryptor_InitializeAudioDecoder_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_InitializeAudioDecoder_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  Decryptor_InitializeAudioDecoder_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_InitializeAudioDecoder_ResponseParams.validate = function(messageValidator, offset) {
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

  Decryptor_InitializeAudioDecoder_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_InitializeAudioDecoder_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Decryptor_InitializeAudioDecoder_ResponseParams();
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

  Decryptor_InitializeAudioDecoder_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_InitializeAudioDecoder_ResponseParams.encodedSize);
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
  function Decryptor_InitializeVideoDecoder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_InitializeVideoDecoder_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  Decryptor_InitializeVideoDecoder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_InitializeVideoDecoder_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_InitializeVideoDecoder_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.VideoDecoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_InitializeVideoDecoder_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_InitializeVideoDecoder_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_InitializeVideoDecoder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(media_types$.VideoDecoderConfig);
    return val;
  };

  Decryptor_InitializeVideoDecoder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_InitializeVideoDecoder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.VideoDecoderConfig, val.config);
  };
  function Decryptor_InitializeVideoDecoder_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_InitializeVideoDecoder_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  Decryptor_InitializeVideoDecoder_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_InitializeVideoDecoder_ResponseParams.validate = function(messageValidator, offset) {
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

  Decryptor_InitializeVideoDecoder_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_InitializeVideoDecoder_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Decryptor_InitializeVideoDecoder_ResponseParams();
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

  Decryptor_InitializeVideoDecoder_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_InitializeVideoDecoder_ResponseParams.encodedSize);
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
  function Decryptor_DecryptAndDecodeAudio_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_DecryptAndDecodeAudio_Params.prototype.initDefaults_ = function() {
    this.encrypted = null;
  };
  Decryptor_DecryptAndDecodeAudio_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_DecryptAndDecodeAudio_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_DecryptAndDecodeAudio_Params.encrypted
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.DecoderBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_DecryptAndDecodeAudio_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_DecryptAndDecodeAudio_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_DecryptAndDecodeAudio_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.encrypted = decoder.decodeStructPointer(media_types$.DecoderBuffer);
    return val;
  };

  Decryptor_DecryptAndDecodeAudio_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_DecryptAndDecodeAudio_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.DecoderBuffer, val.encrypted);
  };
  function Decryptor_DecryptAndDecodeAudio_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_DecryptAndDecodeAudio_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.audioBuffers = null;
  };
  Decryptor_DecryptAndDecodeAudio_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_DecryptAndDecodeAudio_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Decryptor_DecryptAndDecodeAudio_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_DecryptAndDecodeAudio_ResponseParams.audioBuffers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(media_types$.AudioBuffer), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_DecryptAndDecodeAudio_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Decryptor_DecryptAndDecodeAudio_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Decryptor_DecryptAndDecodeAudio_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.audioBuffers = decoder.decodeArrayPointer(new codec.PointerTo(media_types$.AudioBuffer));
    return val;
  };

  Decryptor_DecryptAndDecodeAudio_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_DecryptAndDecodeAudio_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(media_types$.AudioBuffer), val.audioBuffers);
  };
  function Decryptor_DecryptAndDecodeVideo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_DecryptAndDecodeVideo_Params.prototype.initDefaults_ = function() {
    this.encrypted = null;
  };
  Decryptor_DecryptAndDecodeVideo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_DecryptAndDecodeVideo_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_DecryptAndDecodeVideo_Params.encrypted
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.DecoderBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_DecryptAndDecodeVideo_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_DecryptAndDecodeVideo_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_DecryptAndDecodeVideo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.encrypted = decoder.decodeStructPointer(media_types$.DecoderBuffer);
    return val;
  };

  Decryptor_DecryptAndDecodeVideo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_DecryptAndDecodeVideo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.DecoderBuffer, val.encrypted);
  };
  function Decryptor_DecryptAndDecodeVideo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_DecryptAndDecodeVideo_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.videoFrame = null;
    this.releaser = new FrameResourceReleaserPtr();
  };
  Decryptor_DecryptAndDecodeVideo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_DecryptAndDecodeVideo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Decryptor_DecryptAndDecodeVideo_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_DecryptAndDecodeVideo_ResponseParams.videoFrame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, media_types$.VideoFrame, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Decryptor_DecryptAndDecodeVideo_ResponseParams.releaser
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_DecryptAndDecodeVideo_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  Decryptor_DecryptAndDecodeVideo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Decryptor_DecryptAndDecodeVideo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.videoFrame = decoder.decodeStructPointer(media_types$.VideoFrame);
    val.releaser = decoder.decodeStruct(new codec.NullableInterface(FrameResourceReleaserPtr));
    return val;
  };

  Decryptor_DecryptAndDecodeVideo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_DecryptAndDecodeVideo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(media_types$.VideoFrame, val.videoFrame);
    encoder.encodeStruct(new codec.NullableInterface(FrameResourceReleaserPtr), val.releaser);
  };
  function Decryptor_ResetDecoder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_ResetDecoder_Params.prototype.initDefaults_ = function() {
    this.streamType = 0;
  };
  Decryptor_ResetDecoder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_ResetDecoder_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_ResetDecoder_Params.streamType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.StreamType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_ResetDecoder_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_ResetDecoder_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_ResetDecoder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.streamType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Decryptor_ResetDecoder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_ResetDecoder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.streamType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Decryptor_DeinitializeDecoder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Decryptor_DeinitializeDecoder_Params.prototype.initDefaults_ = function() {
    this.streamType = 0;
  };
  Decryptor_DeinitializeDecoder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Decryptor_DeinitializeDecoder_Params.validate = function(messageValidator, offset) {
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


    // validate Decryptor_DeinitializeDecoder_Params.streamType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, Decryptor.StreamType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Decryptor_DeinitializeDecoder_Params.encodedSize = codec.kStructHeaderSize + 8;

  Decryptor_DeinitializeDecoder_Params.decode = function(decoder) {
    var packed;
    var val = new Decryptor_DeinitializeDecoder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.streamType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Decryptor_DeinitializeDecoder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Decryptor_DeinitializeDecoder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.streamType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kDecryptor_Initialize_Name = 0;
  var kDecryptor_Decrypt_Name = 1;
  var kDecryptor_CancelDecrypt_Name = 2;
  var kDecryptor_InitializeAudioDecoder_Name = 3;
  var kDecryptor_InitializeVideoDecoder_Name = 4;
  var kDecryptor_DecryptAndDecodeAudio_Name = 5;
  var kDecryptor_DecryptAndDecodeVideo_Name = 6;
  var kDecryptor_ResetDecoder_Name = 7;
  var kDecryptor_DeinitializeDecoder_Name = 8;

  function DecryptorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Decryptor,
                                                   handleOrPtrInfo);
  }

  function DecryptorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Decryptor, associatedInterfacePtrInfo);
  }

  DecryptorAssociatedPtr.prototype =
      Object.create(DecryptorPtr.prototype);
  DecryptorAssociatedPtr.prototype.constructor =
      DecryptorAssociatedPtr;

  function DecryptorProxy(receiver) {
    this.receiver_ = receiver;
  }
  DecryptorPtr.prototype.initialize = function() {
    return DecryptorProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.initialize = function(audioPipe, videoPipe, decryptPipe, decryptedPipe) {
    var params_ = new Decryptor_Initialize_Params();
    params_.audioPipe = audioPipe;
    params_.videoPipe = videoPipe;
    params_.decryptPipe = decryptPipe;
    params_.decryptedPipe = decryptedPipe;
    var builder = new codec.MessageV0Builder(
        kDecryptor_Initialize_Name,
        codec.align(Decryptor_Initialize_Params.encodedSize));
    builder.encodeStruct(Decryptor_Initialize_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DecryptorPtr.prototype.decrypt = function() {
    return DecryptorProxy.prototype.decrypt
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.decrypt = function(streamType, encrypted) {
    var params_ = new Decryptor_Decrypt_Params();
    params_.streamType = streamType;
    params_.encrypted = encrypted;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDecryptor_Decrypt_Name,
          codec.align(Decryptor_Decrypt_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Decryptor_Decrypt_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Decryptor_Decrypt_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DecryptorPtr.prototype.cancelDecrypt = function() {
    return DecryptorProxy.prototype.cancelDecrypt
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.cancelDecrypt = function(streamType) {
    var params_ = new Decryptor_CancelDecrypt_Params();
    params_.streamType = streamType;
    var builder = new codec.MessageV0Builder(
        kDecryptor_CancelDecrypt_Name,
        codec.align(Decryptor_CancelDecrypt_Params.encodedSize));
    builder.encodeStruct(Decryptor_CancelDecrypt_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DecryptorPtr.prototype.initializeAudioDecoder = function() {
    return DecryptorProxy.prototype.initializeAudioDecoder
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.initializeAudioDecoder = function(config) {
    var params_ = new Decryptor_InitializeAudioDecoder_Params();
    params_.config = config;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDecryptor_InitializeAudioDecoder_Name,
          codec.align(Decryptor_InitializeAudioDecoder_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Decryptor_InitializeAudioDecoder_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Decryptor_InitializeAudioDecoder_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DecryptorPtr.prototype.initializeVideoDecoder = function() {
    return DecryptorProxy.prototype.initializeVideoDecoder
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.initializeVideoDecoder = function(config) {
    var params_ = new Decryptor_InitializeVideoDecoder_Params();
    params_.config = config;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDecryptor_InitializeVideoDecoder_Name,
          codec.align(Decryptor_InitializeVideoDecoder_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Decryptor_InitializeVideoDecoder_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Decryptor_InitializeVideoDecoder_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DecryptorPtr.prototype.decryptAndDecodeAudio = function() {
    return DecryptorProxy.prototype.decryptAndDecodeAudio
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.decryptAndDecodeAudio = function(encrypted) {
    var params_ = new Decryptor_DecryptAndDecodeAudio_Params();
    params_.encrypted = encrypted;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDecryptor_DecryptAndDecodeAudio_Name,
          codec.align(Decryptor_DecryptAndDecodeAudio_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Decryptor_DecryptAndDecodeAudio_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Decryptor_DecryptAndDecodeAudio_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DecryptorPtr.prototype.decryptAndDecodeVideo = function() {
    return DecryptorProxy.prototype.decryptAndDecodeVideo
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.decryptAndDecodeVideo = function(encrypted) {
    var params_ = new Decryptor_DecryptAndDecodeVideo_Params();
    params_.encrypted = encrypted;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDecryptor_DecryptAndDecodeVideo_Name,
          codec.align(Decryptor_DecryptAndDecodeVideo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Decryptor_DecryptAndDecodeVideo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Decryptor_DecryptAndDecodeVideo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DecryptorPtr.prototype.resetDecoder = function() {
    return DecryptorProxy.prototype.resetDecoder
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.resetDecoder = function(streamType) {
    var params_ = new Decryptor_ResetDecoder_Params();
    params_.streamType = streamType;
    var builder = new codec.MessageV0Builder(
        kDecryptor_ResetDecoder_Name,
        codec.align(Decryptor_ResetDecoder_Params.encodedSize));
    builder.encodeStruct(Decryptor_ResetDecoder_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DecryptorPtr.prototype.deinitializeDecoder = function() {
    return DecryptorProxy.prototype.deinitializeDecoder
        .apply(this.ptr.getProxy(), arguments);
  };

  DecryptorProxy.prototype.deinitializeDecoder = function(streamType) {
    var params_ = new Decryptor_DeinitializeDecoder_Params();
    params_.streamType = streamType;
    var builder = new codec.MessageV0Builder(
        kDecryptor_DeinitializeDecoder_Name,
        codec.align(Decryptor_DeinitializeDecoder_Params.encodedSize));
    builder.encodeStruct(Decryptor_DeinitializeDecoder_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DecryptorStub(delegate) {
    this.delegate_ = delegate;
  }
  DecryptorStub.prototype.initialize = function(audioPipe, videoPipe, decryptPipe, decryptedPipe) {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize(audioPipe, videoPipe, decryptPipe, decryptedPipe);
  }
  DecryptorStub.prototype.decrypt = function(streamType, encrypted) {
    return this.delegate_ && this.delegate_.decrypt && this.delegate_.decrypt(streamType, encrypted);
  }
  DecryptorStub.prototype.cancelDecrypt = function(streamType) {
    return this.delegate_ && this.delegate_.cancelDecrypt && this.delegate_.cancelDecrypt(streamType);
  }
  DecryptorStub.prototype.initializeAudioDecoder = function(config) {
    return this.delegate_ && this.delegate_.initializeAudioDecoder && this.delegate_.initializeAudioDecoder(config);
  }
  DecryptorStub.prototype.initializeVideoDecoder = function(config) {
    return this.delegate_ && this.delegate_.initializeVideoDecoder && this.delegate_.initializeVideoDecoder(config);
  }
  DecryptorStub.prototype.decryptAndDecodeAudio = function(encrypted) {
    return this.delegate_ && this.delegate_.decryptAndDecodeAudio && this.delegate_.decryptAndDecodeAudio(encrypted);
  }
  DecryptorStub.prototype.decryptAndDecodeVideo = function(encrypted) {
    return this.delegate_ && this.delegate_.decryptAndDecodeVideo && this.delegate_.decryptAndDecodeVideo(encrypted);
  }
  DecryptorStub.prototype.resetDecoder = function(streamType) {
    return this.delegate_ && this.delegate_.resetDecoder && this.delegate_.resetDecoder(streamType);
  }
  DecryptorStub.prototype.deinitializeDecoder = function(streamType) {
    return this.delegate_ && this.delegate_.deinitializeDecoder && this.delegate_.deinitializeDecoder(streamType);
  }

  DecryptorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDecryptor_Initialize_Name:
      var params = reader.decodeStruct(Decryptor_Initialize_Params);
      this.initialize(params.audioPipe, params.videoPipe, params.decryptPipe, params.decryptedPipe);
      return true;
    case kDecryptor_CancelDecrypt_Name:
      var params = reader.decodeStruct(Decryptor_CancelDecrypt_Params);
      this.cancelDecrypt(params.streamType);
      return true;
    case kDecryptor_ResetDecoder_Name:
      var params = reader.decodeStruct(Decryptor_ResetDecoder_Params);
      this.resetDecoder(params.streamType);
      return true;
    case kDecryptor_DeinitializeDecoder_Name:
      var params = reader.decodeStruct(Decryptor_DeinitializeDecoder_Params);
      this.deinitializeDecoder(params.streamType);
      return true;
    default:
      return false;
    }
  };

  DecryptorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDecryptor_Decrypt_Name:
      var params = reader.decodeStruct(Decryptor_Decrypt_Params);
      this.decrypt(params.streamType, params.encrypted).then(function(response) {
        var responseParams =
            new Decryptor_Decrypt_ResponseParams();
        responseParams.status = response.status;
        responseParams.buffer = response.buffer;
        var builder = new codec.MessageV1Builder(
            kDecryptor_Decrypt_Name,
            codec.align(Decryptor_Decrypt_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Decryptor_Decrypt_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDecryptor_InitializeAudioDecoder_Name:
      var params = reader.decodeStruct(Decryptor_InitializeAudioDecoder_Params);
      this.initializeAudioDecoder(params.config).then(function(response) {
        var responseParams =
            new Decryptor_InitializeAudioDecoder_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kDecryptor_InitializeAudioDecoder_Name,
            codec.align(Decryptor_InitializeAudioDecoder_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Decryptor_InitializeAudioDecoder_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDecryptor_InitializeVideoDecoder_Name:
      var params = reader.decodeStruct(Decryptor_InitializeVideoDecoder_Params);
      this.initializeVideoDecoder(params.config).then(function(response) {
        var responseParams =
            new Decryptor_InitializeVideoDecoder_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kDecryptor_InitializeVideoDecoder_Name,
            codec.align(Decryptor_InitializeVideoDecoder_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Decryptor_InitializeVideoDecoder_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDecryptor_DecryptAndDecodeAudio_Name:
      var params = reader.decodeStruct(Decryptor_DecryptAndDecodeAudio_Params);
      this.decryptAndDecodeAudio(params.encrypted).then(function(response) {
        var responseParams =
            new Decryptor_DecryptAndDecodeAudio_ResponseParams();
        responseParams.status = response.status;
        responseParams.audioBuffers = response.audioBuffers;
        var builder = new codec.MessageV1Builder(
            kDecryptor_DecryptAndDecodeAudio_Name,
            codec.align(Decryptor_DecryptAndDecodeAudio_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Decryptor_DecryptAndDecodeAudio_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDecryptor_DecryptAndDecodeVideo_Name:
      var params = reader.decodeStruct(Decryptor_DecryptAndDecodeVideo_Params);
      this.decryptAndDecodeVideo(params.encrypted).then(function(response) {
        var responseParams =
            new Decryptor_DecryptAndDecodeVideo_ResponseParams();
        responseParams.status = response.status;
        responseParams.videoFrame = response.videoFrame;
        responseParams.releaser = response.releaser;
        var builder = new codec.MessageV1Builder(
            kDecryptor_DecryptAndDecodeVideo_Name,
            codec.align(Decryptor_DecryptAndDecodeVideo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Decryptor_DecryptAndDecodeVideo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDecryptorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDecryptor_Initialize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Decryptor_Initialize_Params;
      break;
      case kDecryptor_Decrypt_Name:
        if (message.expectsResponse())
          paramsClass = Decryptor_Decrypt_Params;
      break;
      case kDecryptor_CancelDecrypt_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Decryptor_CancelDecrypt_Params;
      break;
      case kDecryptor_InitializeAudioDecoder_Name:
        if (message.expectsResponse())
          paramsClass = Decryptor_InitializeAudioDecoder_Params;
      break;
      case kDecryptor_InitializeVideoDecoder_Name:
        if (message.expectsResponse())
          paramsClass = Decryptor_InitializeVideoDecoder_Params;
      break;
      case kDecryptor_DecryptAndDecodeAudio_Name:
        if (message.expectsResponse())
          paramsClass = Decryptor_DecryptAndDecodeAudio_Params;
      break;
      case kDecryptor_DecryptAndDecodeVideo_Name:
        if (message.expectsResponse())
          paramsClass = Decryptor_DecryptAndDecodeVideo_Params;
      break;
      case kDecryptor_ResetDecoder_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Decryptor_ResetDecoder_Params;
      break;
      case kDecryptor_DeinitializeDecoder_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Decryptor_DeinitializeDecoder_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDecryptorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDecryptor_Decrypt_Name:
        if (message.isResponse())
          paramsClass = Decryptor_Decrypt_ResponseParams;
        break;
      case kDecryptor_InitializeAudioDecoder_Name:
        if (message.isResponse())
          paramsClass = Decryptor_InitializeAudioDecoder_ResponseParams;
        break;
      case kDecryptor_InitializeVideoDecoder_Name:
        if (message.isResponse())
          paramsClass = Decryptor_InitializeVideoDecoder_ResponseParams;
        break;
      case kDecryptor_DecryptAndDecodeAudio_Name:
        if (message.isResponse())
          paramsClass = Decryptor_DecryptAndDecodeAudio_ResponseParams;
        break;
      case kDecryptor_DecryptAndDecodeVideo_Name:
        if (message.isResponse())
          paramsClass = Decryptor_DecryptAndDecodeVideo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Decryptor = {
    name: 'media.mojom.Decryptor',
    kVersion: 0,
    ptrClass: DecryptorPtr,
    proxyClass: DecryptorProxy,
    stubClass: DecryptorStub,
    validateRequest: validateDecryptorRequest,
    validateResponse: validateDecryptorResponse,
  };
  Decryptor.Status = {};

  Decryptor.Status.isKnownEnumValue = function(value) {
    return false;
  };

  Decryptor.Status.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  Decryptor.StreamType = {};

  Decryptor.StreamType.isKnownEnumValue = function(value) {
    return false;
  };

  Decryptor.StreamType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  DecryptorStub.prototype.validator = validateDecryptorRequest;
  DecryptorProxy.prototype.validator = validateDecryptorResponse;

  function FrameResourceReleaserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FrameResourceReleaser,
                                                   handleOrPtrInfo);
  }

  function FrameResourceReleaserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FrameResourceReleaser, associatedInterfacePtrInfo);
  }

  FrameResourceReleaserAssociatedPtr.prototype =
      Object.create(FrameResourceReleaserPtr.prototype);
  FrameResourceReleaserAssociatedPtr.prototype.constructor =
      FrameResourceReleaserAssociatedPtr;

  function FrameResourceReleaserProxy(receiver) {
    this.receiver_ = receiver;
  }

  function FrameResourceReleaserStub(delegate) {
    this.delegate_ = delegate;
  }

  FrameResourceReleaserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FrameResourceReleaserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateFrameResourceReleaserRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateFrameResourceReleaserResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var FrameResourceReleaser = {
    name: 'media.mojom.FrameResourceReleaser',
    kVersion: 0,
    ptrClass: FrameResourceReleaserPtr,
    proxyClass: FrameResourceReleaserProxy,
    stubClass: FrameResourceReleaserStub,
    validateRequest: validateFrameResourceReleaserRequest,
    validateResponse: null,
  };
  FrameResourceReleaserStub.prototype.validator = validateFrameResourceReleaserRequest;
  FrameResourceReleaserProxy.prototype.validator = null;
  exports.Decryptor = Decryptor;
  exports.DecryptorPtr = DecryptorPtr;
  exports.DecryptorAssociatedPtr = DecryptorAssociatedPtr;
  exports.FrameResourceReleaser = FrameResourceReleaser;
  exports.FrameResourceReleaserPtr = FrameResourceReleaserPtr;
  exports.FrameResourceReleaserAssociatedPtr = FrameResourceReleaserAssociatedPtr;
})();