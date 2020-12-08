// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojo/rrect_f.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gfx.mojom');
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../geometry/mojo/geometry.mojom.js');
  }


  var RRectFType = {};
  RRectFType.kEmpty = 0;
  RRectFType.kRect = RRectFType.kEmpty + 1;
  RRectFType.kSingle = RRectFType.kRect + 1;
  RRectFType.kSimple = RRectFType.kSingle + 1;
  RRectFType.kOval = RRectFType.kSimple + 1;
  RRectFType.kComplex = RRectFType.kOval + 1;
  RRectFType.MIN_VALUE = 0,
  RRectFType.MAX_VALUE = 5,

  RRectFType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  RRectFType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function RRectF(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RRectF.prototype.initDefaults_ = function() {
    this.type = 0;
    this.rect = null;
    this.upperLeft = null;
    this.upperRight = null;
    this.lowerRight = null;
    this.lowerLeft = null;
  };
  RRectF.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RRectF.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RRectF.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, RRectFType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RRectF.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RRectF.upperLeft
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Vector2dF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RRectF.upperRight
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Vector2dF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RRectF.lowerRight
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Vector2dF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RRectF.lowerLeft
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Vector2dF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RRectF.encodedSize = codec.kStructHeaderSize + 48;

  RRectF.decode = function(decoder) {
    var packed;
    var val = new RRectF();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.rect = decoder.decodeStructPointer(geometry$.RectF);
    val.upperLeft = decoder.decodeStructPointer(geometry$.Vector2dF);
    val.upperRight = decoder.decodeStructPointer(geometry$.Vector2dF);
    val.lowerRight = decoder.decodeStructPointer(geometry$.Vector2dF);
    val.lowerLeft = decoder.decodeStructPointer(geometry$.Vector2dF);
    return val;
  };

  RRectF.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RRectF.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.RectF, val.rect);
    encoder.encodeStructPointer(geometry$.Vector2dF, val.upperLeft);
    encoder.encodeStructPointer(geometry$.Vector2dF, val.upperRight);
    encoder.encodeStructPointer(geometry$.Vector2dF, val.lowerRight);
    encoder.encodeStructPointer(geometry$.Vector2dF, val.lowerLeft);
  };
  exports.RRectFType = RRectFType;
  exports.RRectF = RRectF;
})();