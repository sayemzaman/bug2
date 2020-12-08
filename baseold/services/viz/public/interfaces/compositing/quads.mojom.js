// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/quads.mojom';
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
  var vulkan_ycbcr_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/vulkan_ycbcr_info.mojom', '../../../../../gpu/ipc/common/vulkan_ycbcr_info.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var surface_range$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/surface_range.mojom', 'surface_range.mojom.js');
  }
  var shared_quad_state$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/shared_quad_state.mojom', 'shared_quad_state.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/color_space.mojom', '../../../../../ui/gfx/mojo/color_space.mojom.js');
  }
  var transform$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/transform.mojom', '../../../../../ui/gfx/mojo/transform.mojom.js');
  }


  var ProtectedVideoState = {};
  ProtectedVideoState.kClear = 0;
  ProtectedVideoState.kSoftwareProtected = ProtectedVideoState.kClear + 1;
  ProtectedVideoState.kHardwareProtected = ProtectedVideoState.kSoftwareProtected + 1;
  ProtectedVideoState.MIN_VALUE = 0,
  ProtectedVideoState.MAX_VALUE = 2,

  ProtectedVideoState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ProtectedVideoState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DebugBorderQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DebugBorderQuadState.prototype.initDefaults_ = function() {
    this.color = 0;
    this.width = 0;
  };
  DebugBorderQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DebugBorderQuadState.validate = function(messageValidator, offset) {
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

  DebugBorderQuadState.encodedSize = codec.kStructHeaderSize + 8;

  DebugBorderQuadState.decode = function(decoder) {
    var packed;
    var val = new DebugBorderQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.color = decoder.decodeStruct(codec.Uint32);
    val.width = decoder.decodeStruct(codec.Int32);
    return val;
  };

  DebugBorderQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DebugBorderQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.color);
    encoder.encodeStruct(codec.Int32, val.width);
  };
  function RenderPassQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderPassQuadState.prototype.initDefaults_ = function() {
    this.renderPassId = 0;
    this.maskResourceId = 0;
    this.forceAntiAliasingOff = false;
    this.maskUvRect = null;
    this.maskTextureSize = null;
    this.filtersScale = null;
    this.filtersOrigin = null;
    this.texCoordRect = null;
    this.backdropFilterQuality = 0;
  };
  RenderPassQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderPassQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    // validate RenderPassQuadState.maskUvRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderPassQuadState.maskTextureSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderPassQuadState.filtersScale
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Vector2dF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderPassQuadState.filtersOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderPassQuadState.texCoordRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  RenderPassQuadState.encodedSize = codec.kStructHeaderSize + 64;

  RenderPassQuadState.decode = function(decoder) {
    var packed;
    var val = new RenderPassQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.renderPassId = decoder.decodeStruct(codec.Uint64);
    val.maskResourceId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.forceAntiAliasingOff = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.maskUvRect = decoder.decodeStructPointer(geometry$.RectF);
    val.maskTextureSize = decoder.decodeStructPointer(geometry$.Size);
    val.filtersScale = decoder.decodeStructPointer(geometry$.Vector2dF);
    val.filtersOrigin = decoder.decodeStructPointer(geometry$.PointF);
    val.texCoordRect = decoder.decodeStructPointer(geometry$.RectF);
    val.backdropFilterQuality = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RenderPassQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderPassQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.renderPassId);
    encoder.encodeStruct(codec.Uint32, val.maskResourceId);
    packed = 0;
    packed |= (val.forceAntiAliasingOff & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.RectF, val.maskUvRect);
    encoder.encodeStructPointer(geometry$.Size, val.maskTextureSize);
    encoder.encodeStructPointer(geometry$.Vector2dF, val.filtersScale);
    encoder.encodeStructPointer(geometry$.PointF, val.filtersOrigin);
    encoder.encodeStructPointer(geometry$.RectF, val.texCoordRect);
    encoder.encodeStruct(codec.Float, val.backdropFilterQuality);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SolidColorQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SolidColorQuadState.prototype.initDefaults_ = function() {
    this.color = 0;
    this.forceAntiAliasingOff = false;
  };
  SolidColorQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SolidColorQuadState.validate = function(messageValidator, offset) {
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

  SolidColorQuadState.encodedSize = codec.kStructHeaderSize + 8;

  SolidColorQuadState.decode = function(decoder) {
    var packed;
    var val = new SolidColorQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.color = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.forceAntiAliasingOff = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SolidColorQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SolidColorQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.color);
    packed = 0;
    packed |= (val.forceAntiAliasingOff & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function StreamVideoQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StreamVideoQuadState.prototype.initDefaults_ = function() {
    this.resourceId = 0;
    this.resourceSizeInPixels = null;
    this.uvTopLeft = null;
    this.uvBottomRight = null;
    this.ycbcrInfo = null;
  };
  StreamVideoQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StreamVideoQuadState.validate = function(messageValidator, offset) {
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



    // validate StreamVideoQuadState.resourceSizeInPixels
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamVideoQuadState.uvTopLeft
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamVideoQuadState.uvBottomRight
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamVideoQuadState.ycbcrInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, vulkan_ycbcr_info$.VulkanYCbCrInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StreamVideoQuadState.encodedSize = codec.kStructHeaderSize + 40;

  StreamVideoQuadState.decode = function(decoder) {
    var packed;
    var val = new StreamVideoQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resourceId = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.resourceSizeInPixels = decoder.decodeStructPointer(geometry$.Size);
    val.uvTopLeft = decoder.decodeStructPointer(geometry$.PointF);
    val.uvBottomRight = decoder.decodeStructPointer(geometry$.PointF);
    val.ycbcrInfo = decoder.decodeStructPointer(vulkan_ycbcr_info$.VulkanYCbCrInfo);
    return val;
  };

  StreamVideoQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StreamVideoQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.resourceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.resourceSizeInPixels);
    encoder.encodeStructPointer(geometry$.PointF, val.uvTopLeft);
    encoder.encodeStructPointer(geometry$.PointF, val.uvBottomRight);
    encoder.encodeStructPointer(vulkan_ycbcr_info$.VulkanYCbCrInfo, val.ycbcrInfo);
  };
  function SurfaceQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SurfaceQuadState.prototype.initDefaults_ = function() {
    this.surfaceRange = null;
    this.defaultBackgroundColor = 0;
    this.stretchContentToFillBounds = false;
    this.isReflection = false;
  };
  SurfaceQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SurfaceQuadState.validate = function(messageValidator, offset) {
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


    // validate SurfaceQuadState.surfaceRange
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, surface_range$.SurfaceRange, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  SurfaceQuadState.encodedSize = codec.kStructHeaderSize + 16;

  SurfaceQuadState.decode = function(decoder) {
    var packed;
    var val = new SurfaceQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.surfaceRange = decoder.decodeStructPointer(surface_range$.SurfaceRange);
    val.defaultBackgroundColor = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.stretchContentToFillBounds = (packed >> 0) & 1 ? true : false;
    val.isReflection = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SurfaceQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SurfaceQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(surface_range$.SurfaceRange, val.surfaceRange);
    encoder.encodeStruct(codec.Uint32, val.defaultBackgroundColor);
    packed = 0;
    packed |= (val.stretchContentToFillBounds & 1) << 0
    packed |= (val.isReflection & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TextureQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextureQuadState.prototype.initDefaults_ = function() {
    this.resourceId = 0;
    this.premultipliedAlpha = false;
    this.yFlipped = false;
    this.nearestNeighbor = false;
    this.secureOutputOnly = false;
    this.resourceSizeInPixels = null;
    this.uvTopLeft = null;
    this.uvBottomRight = null;
    this.backgroundColor = 0;
    this.protectedVideoType = 0;
    this.vertexOpacity = null;
  };
  TextureQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextureQuadState.validate = function(messageValidator, offset) {
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



    // validate TextureQuadState.resourceSizeInPixels
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TextureQuadState.uvTopLeft
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextureQuadState.uvBottomRight
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TextureQuadState.vertexOpacity
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, codec.Float, false, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;





    // validate TextureQuadState.protectedVideoType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, ProtectedVideoState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextureQuadState.encodedSize = codec.kStructHeaderSize + 48;

  TextureQuadState.decode = function(decoder) {
    var packed;
    var val = new TextureQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resourceId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.premultipliedAlpha = (packed >> 0) & 1 ? true : false;
    val.yFlipped = (packed >> 1) & 1 ? true : false;
    val.nearestNeighbor = (packed >> 2) & 1 ? true : false;
    val.secureOutputOnly = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.resourceSizeInPixels = decoder.decodeStructPointer(geometry$.Size);
    val.uvTopLeft = decoder.decodeStructPointer(geometry$.PointF);
    val.uvBottomRight = decoder.decodeStructPointer(geometry$.PointF);
    val.backgroundColor = decoder.decodeStruct(codec.Uint32);
    val.protectedVideoType = decoder.decodeStruct(codec.Int32);
    val.vertexOpacity = decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  TextureQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextureQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.resourceId);
    packed = 0;
    packed |= (val.premultipliedAlpha & 1) << 0
    packed |= (val.yFlipped & 1) << 1
    packed |= (val.nearestNeighbor & 1) << 2
    packed |= (val.secureOutputOnly & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.resourceSizeInPixels);
    encoder.encodeStructPointer(geometry$.PointF, val.uvTopLeft);
    encoder.encodeStructPointer(geometry$.PointF, val.uvBottomRight);
    encoder.encodeStruct(codec.Uint32, val.backgroundColor);
    encoder.encodeStruct(codec.Int32, val.protectedVideoType);
    encoder.encodeArrayPointer(codec.Float, val.vertexOpacity);
  };
  function TileQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TileQuadState.prototype.initDefaults_ = function() {
    this.texCoordRect = null;
    this.textureSize = null;
    this.isPremultiplied = false;
    this.nearestNeighbor = false;
    this.forceAntiAliasingOff = false;
    this.resourceId = 0;
  };
  TileQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TileQuadState.validate = function(messageValidator, offset) {
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


    // validate TileQuadState.texCoordRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TileQuadState.textureSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  TileQuadState.encodedSize = codec.kStructHeaderSize + 24;

  TileQuadState.decode = function(decoder) {
    var packed;
    var val = new TileQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.texCoordRect = decoder.decodeStructPointer(geometry$.RectF);
    val.textureSize = decoder.decodeStructPointer(geometry$.Size);
    packed = decoder.readUint8();
    val.isPremultiplied = (packed >> 0) & 1 ? true : false;
    val.nearestNeighbor = (packed >> 1) & 1 ? true : false;
    val.forceAntiAliasingOff = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.resourceId = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  TileQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TileQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.RectF, val.texCoordRect);
    encoder.encodeStructPointer(geometry$.Size, val.textureSize);
    packed = 0;
    packed |= (val.isPremultiplied & 1) << 0
    packed |= (val.nearestNeighbor & 1) << 1
    packed |= (val.forceAntiAliasingOff & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.resourceId);
  };
  function YUVVideoQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  YUVVideoQuadState.prototype.initDefaults_ = function() {
    this.yaTexCoordRect = null;
    this.uvTexCoordRect = null;
    this.yaTexSize = null;
    this.uvTexSize = null;
    this.yPlaneResourceId = 0;
    this.uPlaneResourceId = 0;
    this.vPlaneResourceId = 0;
    this.aPlaneResourceId = 0;
    this.resourceOffset = 0;
    this.resourceMultiplier = 0;
    this.bitsPerChannel = 0;
    this.protectedVideoType = 0;
    this.videoColorSpace = null;
  };
  YUVVideoQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  YUVVideoQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate YUVVideoQuadState.yaTexCoordRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate YUVVideoQuadState.uvTexCoordRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate YUVVideoQuadState.yaTexSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate YUVVideoQuadState.uvTexSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;









    // validate YUVVideoQuadState.videoColorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, color_space$.ColorSpace, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate YUVVideoQuadState.protectedVideoType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 60, ProtectedVideoState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  YUVVideoQuadState.encodedSize = codec.kStructHeaderSize + 72;

  YUVVideoQuadState.decode = function(decoder) {
    var packed;
    var val = new YUVVideoQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.yaTexCoordRect = decoder.decodeStructPointer(geometry$.RectF);
    val.uvTexCoordRect = decoder.decodeStructPointer(geometry$.RectF);
    val.yaTexSize = decoder.decodeStructPointer(geometry$.Size);
    val.uvTexSize = decoder.decodeStructPointer(geometry$.Size);
    val.yPlaneResourceId = decoder.decodeStruct(codec.Uint32);
    val.uPlaneResourceId = decoder.decodeStruct(codec.Uint32);
    val.vPlaneResourceId = decoder.decodeStruct(codec.Uint32);
    val.aPlaneResourceId = decoder.decodeStruct(codec.Uint32);
    val.resourceOffset = decoder.decodeStruct(codec.Float);
    val.resourceMultiplier = decoder.decodeStruct(codec.Float);
    val.bitsPerChannel = decoder.decodeStruct(codec.Uint32);
    val.protectedVideoType = decoder.decodeStruct(codec.Int32);
    val.videoColorSpace = decoder.decodeStructPointer(color_space$.ColorSpace);
    return val;
  };

  YUVVideoQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(YUVVideoQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.RectF, val.yaTexCoordRect);
    encoder.encodeStructPointer(geometry$.RectF, val.uvTexCoordRect);
    encoder.encodeStructPointer(geometry$.Size, val.yaTexSize);
    encoder.encodeStructPointer(geometry$.Size, val.uvTexSize);
    encoder.encodeStruct(codec.Uint32, val.yPlaneResourceId);
    encoder.encodeStruct(codec.Uint32, val.uPlaneResourceId);
    encoder.encodeStruct(codec.Uint32, val.vPlaneResourceId);
    encoder.encodeStruct(codec.Uint32, val.aPlaneResourceId);
    encoder.encodeStruct(codec.Float, val.resourceOffset);
    encoder.encodeStruct(codec.Float, val.resourceMultiplier);
    encoder.encodeStruct(codec.Uint32, val.bitsPerChannel);
    encoder.encodeStruct(codec.Int32, val.protectedVideoType);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.videoColorSpace);
  };
  function VideoHoleQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoHoleQuadState.prototype.initDefaults_ = function() {
    this.overlayPlaneId = null;
  };
  VideoHoleQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoHoleQuadState.validate = function(messageValidator, offset) {
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


    // validate VideoHoleQuadState.overlayPlaneId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoHoleQuadState.encodedSize = codec.kStructHeaderSize + 8;

  VideoHoleQuadState.decode = function(decoder) {
    var packed;
    var val = new VideoHoleQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.overlayPlaneId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  VideoHoleQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoHoleQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.overlayPlaneId);
  };
  function DrawQuad(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DrawQuad.prototype.initDefaults_ = function() {
    this.rect = null;
    this.visibleRect = null;
    this.needsBlending = false;
    this.sqs = null;
    this.drawQuadState = null;
  };
  DrawQuad.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DrawQuad.validate = function(messageValidator, offset) {
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


    // validate DrawQuad.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DrawQuad.visibleRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DrawQuad.sqs
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, shared_quad_state$.SharedQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DrawQuad.drawQuadState
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 32, DrawQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DrawQuad.encodedSize = codec.kStructHeaderSize + 48;

  DrawQuad.decode = function(decoder) {
    var packed;
    var val = new DrawQuad();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rect = decoder.decodeStructPointer(geometry$.Rect);
    val.visibleRect = decoder.decodeStructPointer(geometry$.Rect);
    packed = decoder.readUint8();
    val.needsBlending = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sqs = decoder.decodeStructPointer(shared_quad_state$.SharedQuadState);
    val.drawQuadState = decoder.decodeStruct(DrawQuadState);
    return val;
  };

  DrawQuad.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DrawQuad.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.rect);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleRect);
    packed = 0;
    packed |= (val.needsBlending & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(shared_quad_state$.SharedQuadState, val.sqs);
    encoder.encodeStruct(DrawQuadState, val.drawQuadState);
  };

  function DrawQuadState(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  DrawQuadState.Tags = {
    debugBorderQuadState: 0,
    renderPassQuadState: 1,
    solidColorQuadState: 2,
    streamVideoQuadState: 3,
    surfaceQuadState: 4,
    textureQuadState: 5,
    tileQuadState: 6,
    yuvVideoQuadState: 7,
    videoHoleQuadState: 8,
  };

  DrawQuadState.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  DrawQuadState.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "debugBorderQuadState",
        "renderPassQuadState",
        "solidColorQuadState",
        "streamVideoQuadState",
        "surfaceQuadState",
        "textureQuadState",
        "tileQuadState",
        "yuvVideoQuadState",
        "videoHoleQuadState",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a DrawQuadState member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(DrawQuadState.prototype, "debugBorderQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.debugBorderQuadState) {
        throw new ReferenceError(
            "DrawQuadState.debugBorderQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.debugBorderQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "renderPassQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.renderPassQuadState) {
        throw new ReferenceError(
            "DrawQuadState.renderPassQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.renderPassQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "solidColorQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.solidColorQuadState) {
        throw new ReferenceError(
            "DrawQuadState.solidColorQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.solidColorQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "streamVideoQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.streamVideoQuadState) {
        throw new ReferenceError(
            "DrawQuadState.streamVideoQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.streamVideoQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "surfaceQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.surfaceQuadState) {
        throw new ReferenceError(
            "DrawQuadState.surfaceQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.surfaceQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "textureQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.textureQuadState) {
        throw new ReferenceError(
            "DrawQuadState.textureQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.textureQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "tileQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.tileQuadState) {
        throw new ReferenceError(
            "DrawQuadState.tileQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.tileQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "yuvVideoQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.yuvVideoQuadState) {
        throw new ReferenceError(
            "DrawQuadState.yuvVideoQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.yuvVideoQuadState;
      this.$data = value;
    }
  });
  Object.defineProperty(DrawQuadState.prototype, "videoHoleQuadState", {
    get: function() {
      if (this.$tag != DrawQuadState.Tags.videoHoleQuadState) {
        throw new ReferenceError(
            "DrawQuadState.videoHoleQuadState is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DrawQuadState.Tags.videoHoleQuadState;
      this.$data = value;
    }
  });


    DrawQuadState.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case DrawQuadState.Tags.debugBorderQuadState:
          encoder.encodeStructPointer(DebugBorderQuadState, val.debugBorderQuadState);
          break;
        case DrawQuadState.Tags.renderPassQuadState:
          encoder.encodeStructPointer(RenderPassQuadState, val.renderPassQuadState);
          break;
        case DrawQuadState.Tags.solidColorQuadState:
          encoder.encodeStructPointer(SolidColorQuadState, val.solidColorQuadState);
          break;
        case DrawQuadState.Tags.streamVideoQuadState:
          encoder.encodeStructPointer(StreamVideoQuadState, val.streamVideoQuadState);
          break;
        case DrawQuadState.Tags.surfaceQuadState:
          encoder.encodeStructPointer(SurfaceQuadState, val.surfaceQuadState);
          break;
        case DrawQuadState.Tags.textureQuadState:
          encoder.encodeStructPointer(TextureQuadState, val.textureQuadState);
          break;
        case DrawQuadState.Tags.tileQuadState:
          encoder.encodeStructPointer(TileQuadState, val.tileQuadState);
          break;
        case DrawQuadState.Tags.yuvVideoQuadState:
          encoder.encodeStructPointer(YUVVideoQuadState, val.yuvVideoQuadState);
          break;
        case DrawQuadState.Tags.videoHoleQuadState:
          encoder.encodeStructPointer(VideoHoleQuadState, val.videoHoleQuadState);
          break;
      }
      encoder.align();
    };


    DrawQuadState.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new DrawQuadState();
      var tag = decoder.readUint32();
      switch (tag) {
        case DrawQuadState.Tags.debugBorderQuadState:
          result.debugBorderQuadState = decoder.decodeStructPointer(DebugBorderQuadState);
          break;
        case DrawQuadState.Tags.renderPassQuadState:
          result.renderPassQuadState = decoder.decodeStructPointer(RenderPassQuadState);
          break;
        case DrawQuadState.Tags.solidColorQuadState:
          result.solidColorQuadState = decoder.decodeStructPointer(SolidColorQuadState);
          break;
        case DrawQuadState.Tags.streamVideoQuadState:
          result.streamVideoQuadState = decoder.decodeStructPointer(StreamVideoQuadState);
          break;
        case DrawQuadState.Tags.surfaceQuadState:
          result.surfaceQuadState = decoder.decodeStructPointer(SurfaceQuadState);
          break;
        case DrawQuadState.Tags.textureQuadState:
          result.textureQuadState = decoder.decodeStructPointer(TextureQuadState);
          break;
        case DrawQuadState.Tags.tileQuadState:
          result.tileQuadState = decoder.decodeStructPointer(TileQuadState);
          break;
        case DrawQuadState.Tags.yuvVideoQuadState:
          result.yuvVideoQuadState = decoder.decodeStructPointer(YUVVideoQuadState);
          break;
        case DrawQuadState.Tags.videoHoleQuadState:
          result.videoHoleQuadState = decoder.decodeStructPointer(VideoHoleQuadState);
          break;
      }
      decoder.align();

      return result;
    };


    DrawQuadState.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case DrawQuadState.Tags.debugBorderQuadState:
          

    // validate DrawQuadState.debugBorderQuadState
    err = messageValidator.validateStructPointer(data_offset, DebugBorderQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.renderPassQuadState:
          

    // validate DrawQuadState.renderPassQuadState
    err = messageValidator.validateStructPointer(data_offset, RenderPassQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.solidColorQuadState:
          

    // validate DrawQuadState.solidColorQuadState
    err = messageValidator.validateStructPointer(data_offset, SolidColorQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.streamVideoQuadState:
          

    // validate DrawQuadState.streamVideoQuadState
    err = messageValidator.validateStructPointer(data_offset, StreamVideoQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.surfaceQuadState:
          

    // validate DrawQuadState.surfaceQuadState
    err = messageValidator.validateStructPointer(data_offset, SurfaceQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.textureQuadState:
          

    // validate DrawQuadState.textureQuadState
    err = messageValidator.validateStructPointer(data_offset, TextureQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.tileQuadState:
          

    // validate DrawQuadState.tileQuadState
    err = messageValidator.validateStructPointer(data_offset, TileQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.yuvVideoQuadState:
          

    // validate DrawQuadState.yuvVideoQuadState
    err = messageValidator.validateStructPointer(data_offset, YUVVideoQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DrawQuadState.Tags.videoHoleQuadState:
          

    // validate DrawQuadState.videoHoleQuadState
    err = messageValidator.validateStructPointer(data_offset, VideoHoleQuadState, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  DrawQuadState.encodedSize = 16;
  exports.ProtectedVideoState = ProtectedVideoState;
  exports.DebugBorderQuadState = DebugBorderQuadState;
  exports.RenderPassQuadState = RenderPassQuadState;
  exports.SolidColorQuadState = SolidColorQuadState;
  exports.StreamVideoQuadState = StreamVideoQuadState;
  exports.SurfaceQuadState = SurfaceQuadState;
  exports.TextureQuadState = TextureQuadState;
  exports.TileQuadState = TileQuadState;
  exports.YUVVideoQuadState = YUVVideoQuadState;
  exports.VideoHoleQuadState = VideoHoleQuadState;
  exports.DrawQuad = DrawQuad;
  exports.DrawQuadState = DrawQuadState;
})();