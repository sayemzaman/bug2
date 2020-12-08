// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/geoposition.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var kBadLatitudeLongitude = 200;
  var kBadAltitude = -10000;
  var kBadAccuracy = -1;
  var kBadHeading = -1;
  var kBadSpeed = -1;

  function Geoposition(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  Geoposition.ErrorCode = {};
  Geoposition.ErrorCode.NONE = 0;
  Geoposition.ErrorCode.PERMISSION_DENIED = 1;
  Geoposition.ErrorCode.POSITION_UNAVAILABLE = 2;
  Geoposition.ErrorCode.TIMEOUT = 3;
  Geoposition.ErrorCode.LAST = Geoposition.ErrorCode.TIMEOUT;
  Geoposition.ErrorCode.MIN_VALUE = 0,
  Geoposition.ErrorCode.MAX_VALUE = 3,

  Geoposition.ErrorCode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  Geoposition.ErrorCode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  Geoposition.prototype.initDefaults_ = function() {
    this.valid = false;
    this.errorCode = Geoposition.ErrorCode.NONE;
    this.latitude = kBadLatitudeLongitude;
    this.longitude = kBadLatitudeLongitude;
    this.altitude = kBadAltitude;
    this.accuracy = kBadAccuracy;
    this.altitudeAccuracy = kBadAccuracy;
    this.heading = kBadHeading;
    this.speed = kBadSpeed;
    this.timestamp = null;
    this.errorMessage = null;
  };
  Geoposition.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Geoposition.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;










    // validate Geoposition.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Geoposition.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, Geoposition.ErrorCode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Geoposition.errorMessage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Geoposition.encodedSize = codec.kStructHeaderSize + 80;

  Geoposition.decode = function(decoder) {
    var packed;
    var val = new Geoposition();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.valid = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.errorCode = decoder.decodeStruct(codec.Int32);
    val.latitude = decoder.decodeStruct(codec.Double);
    val.longitude = decoder.decodeStruct(codec.Double);
    val.altitude = decoder.decodeStruct(codec.Double);
    val.accuracy = decoder.decodeStruct(codec.Double);
    val.altitudeAccuracy = decoder.decodeStruct(codec.Double);
    val.heading = decoder.decodeStruct(codec.Double);
    val.speed = decoder.decodeStruct(codec.Double);
    val.timestamp = decoder.decodeStructPointer(time$.Time);
    val.errorMessage = decoder.decodeStruct(codec.String);
    return val;
  };

  Geoposition.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Geoposition.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.valid & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.encodeStruct(codec.Double, val.latitude);
    encoder.encodeStruct(codec.Double, val.longitude);
    encoder.encodeStruct(codec.Double, val.altitude);
    encoder.encodeStruct(codec.Double, val.accuracy);
    encoder.encodeStruct(codec.Double, val.altitudeAccuracy);
    encoder.encodeStruct(codec.Double, val.heading);
    encoder.encodeStruct(codec.Double, val.speed);
    encoder.encodeStructPointer(time$.Time, val.timestamp);
    encoder.encodeStruct(codec.String, val.errorMessage);
  };
  exports.kBadLatitudeLongitude = kBadLatitudeLongitude;
  exports.kBadAltitude = kBadAltitude;
  exports.kBadAccuracy = kBadAccuracy;
  exports.kBadHeading = kBadHeading;
  exports.kBadSpeed = kBadSpeed;
  exports.Geoposition = Geoposition;
})();