// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/shared_quad_state.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var rrect_f$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/rrect_f.mojom', '../../../../../ui/gfx/mojo/rrect_f.mojom.js');
  }
  var transform$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/transform.mojom', '../../../../../ui/gfx/mojo/transform.mojom.js');
  }



  function SharedQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedQuadState.prototype.initDefaults_ = function() {
    this.quadToTargetTransform = null;
    this.quadLayerRect = null;
    this.visibleQuadLayerRect = null;
    this.roundedCornerBounds = null;
    this.clipRect = null;
    this.isClipped = false;
    this.areContentsOpaque = false;
    this.opacity = 0;
    this.blendMode = 0;
    this.sortingContextId = 0;
  };
  SharedQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedQuadState.validate = function(messageValidator, offset) {
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


    // validate SharedQuadState.quadToTargetTransform
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transform$.Transform, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.quadLayerRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.visibleQuadLayerRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.roundedCornerBounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, rrect_f$.RRectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.clipRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;






    return validator.validationError.NONE;
  };

  SharedQuadState.encodedSize = codec.kStructHeaderSize + 56;

  SharedQuadState.decode = function(decoder) {
    var packed;
    var val = new SharedQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.quadToTargetTransform = decoder.decodeStructPointer(transform$.Transform);
    val.quadLayerRect = decoder.decodeStructPointer(geometry$.Rect);
    val.visibleQuadLayerRect = decoder.decodeStructPointer(geometry$.Rect);
    val.roundedCornerBounds = decoder.decodeStructPointer(rrect_f$.RRectF);
    val.clipRect = decoder.decodeStructPointer(geometry$.Rect);
    packed = decoder.readUint8();
    val.isClipped = (packed >> 0) & 1 ? true : false;
    val.areContentsOpaque = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.opacity = decoder.decodeStruct(codec.Float);
    val.blendMode = decoder.decodeStruct(codec.Uint32);
    val.sortingContextId = decoder.decodeStruct(codec.Int32);
    return val;
  };

  SharedQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transform$.Transform, val.quadToTargetTransform);
    encoder.encodeStructPointer(geometry$.Rect, val.quadLayerRect);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleQuadLayerRect);
    encoder.encodeStructPointer(rrect_f$.RRectF, val.roundedCornerBounds);
    encoder.encodeStructPointer(geometry$.Rect, val.clipRect);
    packed = 0;
    packed |= (val.isClipped & 1) << 0
    packed |= (val.areContentsOpaque & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.opacity);
    encoder.encodeStruct(codec.Uint32, val.blendMode);
    encoder.encodeStruct(codec.Int32, val.sortingContextId);
  };
  exports.SharedQuadState = SharedQuadState;
})();