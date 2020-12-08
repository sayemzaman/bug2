// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/filter_operation.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');
  var paint_filter$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/paint_filter.mojom', 'paint_filter.mojom.js');
  }
  var blur_image_filter_tile_mode$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/interfaces/blur_image_filter_tile_mode.mojom', '../../../../../skia/public/interfaces/blur_image_filter_tile_mode.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }


  var FilterType = {};
  FilterType.GRAYSCALE = 0;
  FilterType.SEPIA = FilterType.GRAYSCALE + 1;
  FilterType.SATURATE = FilterType.SEPIA + 1;
  FilterType.HUE_ROTATE = FilterType.SATURATE + 1;
  FilterType.INVERT = FilterType.HUE_ROTATE + 1;
  FilterType.BRIGHTNESS = FilterType.INVERT + 1;
  FilterType.CONTRAST = FilterType.BRIGHTNESS + 1;
  FilterType.OPACITY = FilterType.CONTRAST + 1;
  FilterType.BLUR = FilterType.OPACITY + 1;
  FilterType.DROP_SHADOW = FilterType.BLUR + 1;
  FilterType.COLOR_MATRIX = FilterType.DROP_SHADOW + 1;
  FilterType.ZOOM = FilterType.COLOR_MATRIX + 1;
  FilterType.REFERENCE = FilterType.ZOOM + 1;
  FilterType.SATURATING_BRIGHTNESS = FilterType.REFERENCE + 1;
  FilterType.ALPHA_THRESHOLD = FilterType.SATURATING_BRIGHTNESS + 1;
  FilterType.FILTER_TYPE_LAST = FilterType.ALPHA_THRESHOLD;
  FilterType.MIN_VALUE = 0,
  FilterType.MAX_VALUE = 14,

  FilterType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      return true;
    }
    return false;
  };

  FilterType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FilterOperation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilterOperation.prototype.initDefaults_ = function() {
    this.type = 0;
    this.amount = 0;
    this.outerThreshold = 0;
    this.dropShadowColor = 0;
    this.dropShadowOffset = null;
    this.imageFilter = null;
    this.matrix = null;
    this.zoomInset = 0;
    this.blurTileMode = 0;
    this.shape = null;
  };
  FilterOperation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilterOperation.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FilterType);
    if (err !== validator.validationError.NONE)
        return err;




    // validate FilterOperation.dropShadowOffset
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FilterOperation.imageFilter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, paint_filter$.PaintFilter, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.matrix
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Float, true, [20], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FilterOperation.blurTileMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, blur_image_filter_tile_mode$.BlurTileMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.shape
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.PointerTo(geometry$.Rect), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FilterOperation.encodedSize = codec.kStructHeaderSize + 56;

  FilterOperation.decode = function(decoder) {
    var packed;
    var val = new FilterOperation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.amount = decoder.decodeStruct(codec.Float);
    val.outerThreshold = decoder.decodeStruct(codec.Float);
    val.dropShadowColor = decoder.decodeStruct(codec.Uint32);
    val.dropShadowOffset = decoder.decodeStructPointer(geometry$.Point);
    val.imageFilter = decoder.decodeStructPointer(paint_filter$.PaintFilter);
    val.matrix = decoder.decodeArrayPointer(codec.Float);
    val.zoomInset = decoder.decodeStruct(codec.Int32);
    val.blurTileMode = decoder.decodeStruct(codec.Int32);
    val.shape = decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Rect));
    return val;
  };

  FilterOperation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilterOperation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Float, val.amount);
    encoder.encodeStruct(codec.Float, val.outerThreshold);
    encoder.encodeStruct(codec.Uint32, val.dropShadowColor);
    encoder.encodeStructPointer(geometry$.Point, val.dropShadowOffset);
    encoder.encodeStructPointer(paint_filter$.PaintFilter, val.imageFilter);
    encoder.encodeArrayPointer(codec.Float, val.matrix);
    encoder.encodeStruct(codec.Int32, val.zoomInset);
    encoder.encodeStruct(codec.Int32, val.blurTileMode);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Rect), val.shape);
  };
  exports.FilterType = FilterType;
  exports.FilterOperation = FilterOperation;
})();