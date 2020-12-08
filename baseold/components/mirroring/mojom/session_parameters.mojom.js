// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/mirroring/mojom/session_parameters.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mirroring.mojom');
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', '../../../services/network/public/mojom/ip_address.mojom.js');
  }


  var SessionType = {};
  SessionType.AUDIO_ONLY = 0;
  SessionType.VIDEO_ONLY = SessionType.AUDIO_ONLY + 1;
  SessionType.AUDIO_AND_VIDEO = SessionType.VIDEO_ONLY + 1;
  SessionType.MIN_VALUE = 0,
  SessionType.MAX_VALUE = 2,

  SessionType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SessionType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SessionParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SessionParameters.prototype.initDefaults_ = function() {
    this.type = 0;
    this.receiverAddress = null;
    this.receiverModelName = null;
  };
  SessionParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SessionParameters.validate = function(messageValidator, offset) {
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


    // validate SessionParameters.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SessionType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SessionParameters.receiverAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SessionParameters.receiverModelName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SessionParameters.encodedSize = codec.kStructHeaderSize + 24;

  SessionParameters.decode = function(decoder) {
    var packed;
    var val = new SessionParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.receiverAddress = decoder.decodeStructPointer(ip_address$.IPAddress);
    val.receiverModelName = decoder.decodeStruct(codec.String);
    return val;
  };

  SessionParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SessionParameters.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.receiverAddress);
    encoder.encodeStruct(codec.String, val.receiverModelName);
  };
  exports.SessionType = SessionType;
  exports.SessionParameters = SessionParameters;
})();