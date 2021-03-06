// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/latency/mojo/latency_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }


  var LatencyComponentType = {};
  LatencyComponentType.INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT = 0;
  LatencyComponentType.LATENCY_BEGIN_SCROLL_LISTENER_UPDATE_MAIN_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT + 1;
  LatencyComponentType.LATENCY_BEGIN_FRAME_RENDERER_MAIN_COMPONENT = LatencyComponentType.LATENCY_BEGIN_SCROLL_LISTENER_UPDATE_MAIN_COMPONENT + 1;
  LatencyComponentType.LATENCY_BEGIN_FRAME_RENDERER_INVALIDATE_COMPONENT = LatencyComponentType.LATENCY_BEGIN_FRAME_RENDERER_MAIN_COMPONENT + 1;
  LatencyComponentType.LATENCY_BEGIN_FRAME_RENDERER_COMPOSITOR_COMPONENT = LatencyComponentType.LATENCY_BEGIN_FRAME_RENDERER_INVALIDATE_COMPONENT + 1;
  LatencyComponentType.LATENCY_BEGIN_FRAME_UI_MAIN_COMPONENT = LatencyComponentType.LATENCY_BEGIN_FRAME_RENDERER_COMPOSITOR_COMPONENT + 1;
  LatencyComponentType.LATENCY_BEGIN_FRAME_UI_COMPOSITOR_COMPONENT = LatencyComponentType.LATENCY_BEGIN_FRAME_UI_MAIN_COMPONENT + 1;
  LatencyComponentType.LATENCY_BEGIN_FRAME_DISPLAY_COMPOSITOR_COMPONENT = LatencyComponentType.LATENCY_BEGIN_FRAME_UI_COMPOSITOR_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_SCROLL_UPDATE_ORIGINAL_COMPONENT = LatencyComponentType.LATENCY_BEGIN_FRAME_DISPLAY_COMPOSITOR_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_FIRST_SCROLL_UPDATE_ORIGINAL_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_SCROLL_UPDATE_ORIGINAL_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_FIRST_SCROLL_UPDATE_ORIGINAL_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_UI_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_UI_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_IMPL_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_FORWARD_SCROLL_UPDATE_TO_MAIN_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_IMPL_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_SCROLL_UPDATE_LAST_EVENT_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_FORWARD_SCROLL_UPDATE_TO_MAIN_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_ACK_RWH_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_SCROLL_UPDATE_LAST_EVENT_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERER_SWAP_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_ACK_RWH_COMPONENT + 1;
  LatencyComponentType.DISPLAY_COMPOSITOR_RECEIVED_FRAME_COMPONENT = LatencyComponentType.INPUT_EVENT_LATENCY_RENDERER_SWAP_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_GPU_SWAP_BUFFER_COMPONENT = LatencyComponentType.DISPLAY_COMPOSITOR_RECEIVED_FRAME_COMPONENT + 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_FRAME_SWAP_COMPONENT = LatencyComponentType.INPUT_EVENT_GPU_SWAP_BUFFER_COMPONENT + 1;
  LatencyComponentType.MIN_VALUE = 0,
  LatencyComponentType.MAX_VALUE = 21,

  LatencyComponentType.isKnownEnumValue = function(value) {
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
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
      return true;
    }
    return false;
  };

  LatencyComponentType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SourceEventType = {};
  SourceEventType.UNKNOWN = 0;
  SourceEventType.WHEEL = SourceEventType.UNKNOWN + 1;
  SourceEventType.MOUSE = SourceEventType.WHEEL + 1;
  SourceEventType.TOUCH = SourceEventType.MOUSE + 1;
  SourceEventType.INERTIAL = SourceEventType.TOUCH + 1;
  SourceEventType.KEY_PRESS = SourceEventType.INERTIAL + 1;
  SourceEventType.TOUCHPAD = SourceEventType.KEY_PRESS + 1;
  SourceEventType.FRAME = SourceEventType.TOUCHPAD + 1;
  SourceEventType.SCROLLBAR = SourceEventType.FRAME + 1;
  SourceEventType.OTHER = SourceEventType.SCROLLBAR + 1;
  SourceEventType.MIN_VALUE = 0,
  SourceEventType.MAX_VALUE = 9,

  SourceEventType.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  SourceEventType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function LatencyInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LatencyInfo.prototype.initDefaults_ = function() {
    this.traceName = null;
    this.latencyComponents = null;
    this.traceId = 0;
    this.ukmSourceId = 0;
    this.coalesced = false;
    this.began = false;
    this.terminated = false;
    this.sourceEventType = 0;
    this.scrollUpdateDelta = 0;
    this.predictedScrollUpdateDelta = 0;
  };
  LatencyInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LatencyInfo.validate = function(messageValidator, offset) {
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


    // validate LatencyInfo.traceName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate LatencyInfo.latencyComponents
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, new codec.Enum(LatencyComponentType), new codec.PointerTo(time$.TimeTicks), false);
    if (err !== validator.validationError.NONE)
        return err;







    // validate LatencyInfo.sourceEventType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, SourceEventType);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  LatencyInfo.encodedSize = codec.kStructHeaderSize + 48;

  LatencyInfo.decode = function(decoder) {
    var packed;
    var val = new LatencyInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.traceName = decoder.decodeStruct(codec.String);
    val.latencyComponents = decoder.decodeMapPointer(new codec.Enum(LatencyComponentType), new codec.PointerTo(time$.TimeTicks));
    val.traceId = decoder.decodeStruct(codec.Int64);
    val.ukmSourceId = decoder.decodeStruct(codec.Int64);
    packed = decoder.readUint8();
    val.coalesced = (packed >> 0) & 1 ? true : false;
    val.began = (packed >> 1) & 1 ? true : false;
    val.terminated = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sourceEventType = decoder.decodeStruct(codec.Int32);
    val.scrollUpdateDelta = decoder.decodeStruct(codec.Float);
    val.predictedScrollUpdateDelta = decoder.decodeStruct(codec.Float);
    return val;
  };

  LatencyInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LatencyInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.traceName);
    encoder.encodeMapPointer(new codec.Enum(LatencyComponentType), new codec.PointerTo(time$.TimeTicks), val.latencyComponents);
    encoder.encodeStruct(codec.Int64, val.traceId);
    encoder.encodeStruct(codec.Int64, val.ukmSourceId);
    packed = 0;
    packed |= (val.coalesced & 1) << 0
    packed |= (val.began & 1) << 1
    packed |= (val.terminated & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.sourceEventType);
    encoder.encodeStruct(codec.Float, val.scrollUpdateDelta);
    encoder.encodeStruct(codec.Float, val.predictedScrollUpdateDelta);
  };
  exports.LatencyComponentType = LatencyComponentType;
  exports.SourceEventType = SourceEventType;
  exports.LatencyInfo = LatencyInfo;
})();