// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/compositor_frame_sink.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var begin_frame_args$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/begin_frame_args.mojom', 'begin_frame_args.mojom.js');
  }
  var compositor_frame$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/compositor_frame.mojom', 'compositor_frame.mojom.js');
  }
  var local_surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/local_surface_id.mojom', 'local_surface_id.mojom.js');
  }
  var returned_resource$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/returned_resource.mojom', 'returned_resource.mojom.js');
  }
  var hit_test_region_list$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/hit_test/hit_test_region_list.mojom', '../hit_test/hit_test_region_list.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var presentation_feedback$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/presentation_feedback.mojom', '../../../../../ui/gfx/mojo/presentation_feedback.mojom.js');
  }
  var mailbox$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox.mojom', '../../../../../gpu/ipc/common/mailbox.mojom.js');
  }



  function CompositorFrameSink_SetNeedsBeginFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_SetNeedsBeginFrame_Params.prototype.initDefaults_ = function() {
    this.needsBeginFrame = false;
  };
  CompositorFrameSink_SetNeedsBeginFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_SetNeedsBeginFrame_Params.validate = function(messageValidator, offset) {
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

  CompositorFrameSink_SetNeedsBeginFrame_Params.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSink_SetNeedsBeginFrame_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_SetNeedsBeginFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.needsBeginFrame = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CompositorFrameSink_SetNeedsBeginFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_SetNeedsBeginFrame_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.needsBeginFrame & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.prototype.initDefaults_ = function() {
  };
  CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.validate = function(messageValidator, offset) {
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

  CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.encodedSize = codec.kStructHeaderSize + 0;

  CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CompositorFrameSink_SubmitCompositorFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_SubmitCompositorFrame_Params.prototype.initDefaults_ = function() {
    this.localSurfaceId = null;
    this.frame = null;
    this.hitTestRegionList = null;
    this.submitTime = 0;
  };
  CompositorFrameSink_SubmitCompositorFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_SubmitCompositorFrame_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_SubmitCompositorFrame_Params.localSurfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, local_surface_id$.LocalSurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_SubmitCompositorFrame_Params.frame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, compositor_frame$.CompositorFrame, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_SubmitCompositorFrame_Params.hitTestRegionList
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, hit_test_region_list$.HitTestRegionList, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CompositorFrameSink_SubmitCompositorFrame_Params.encodedSize = codec.kStructHeaderSize + 32;

  CompositorFrameSink_SubmitCompositorFrame_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_SubmitCompositorFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localSurfaceId = decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    val.frame = decoder.decodeStructPointer(compositor_frame$.CompositorFrame);
    val.hitTestRegionList = decoder.decodeStructPointer(hit_test_region_list$.HitTestRegionList);
    val.submitTime = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  CompositorFrameSink_SubmitCompositorFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_SubmitCompositorFrame_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceId);
    encoder.encodeStructPointer(compositor_frame$.CompositorFrame, val.frame);
    encoder.encodeStructPointer(hit_test_region_list$.HitTestRegionList, val.hitTestRegionList);
    encoder.encodeStruct(codec.Uint64, val.submitTime);
  };
  function CompositorFrameSink_SubmitCompositorFrameSync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_SubmitCompositorFrameSync_Params.prototype.initDefaults_ = function() {
    this.localSurfaceId = null;
    this.frame = null;
    this.hitTestRegionList = null;
    this.submitTime = 0;
  };
  CompositorFrameSink_SubmitCompositorFrameSync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_SubmitCompositorFrameSync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_SubmitCompositorFrameSync_Params.localSurfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, local_surface_id$.LocalSurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_SubmitCompositorFrameSync_Params.frame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, compositor_frame$.CompositorFrame, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_SubmitCompositorFrameSync_Params.hitTestRegionList
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, hit_test_region_list$.HitTestRegionList, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CompositorFrameSink_SubmitCompositorFrameSync_Params.encodedSize = codec.kStructHeaderSize + 32;

  CompositorFrameSink_SubmitCompositorFrameSync_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_SubmitCompositorFrameSync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localSurfaceId = decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    val.frame = decoder.decodeStructPointer(compositor_frame$.CompositorFrame);
    val.hitTestRegionList = decoder.decodeStructPointer(hit_test_region_list$.HitTestRegionList);
    val.submitTime = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  CompositorFrameSink_SubmitCompositorFrameSync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_SubmitCompositorFrameSync_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceId);
    encoder.encodeStructPointer(compositor_frame$.CompositorFrame, val.frame);
    encoder.encodeStructPointer(hit_test_region_list$.HitTestRegionList, val.hitTestRegionList);
    encoder.encodeStruct(codec.Uint64, val.submitTime);
  };
  function CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.prototype.initDefaults_ = function() {
    this.resources = null;
  };
  CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.resources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(returned_resource$.ReturnedResource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resources = decoder.decodeArrayPointer(new codec.PointerTo(returned_resource$.ReturnedResource));
    return val;
  };

  CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(returned_resource$.ReturnedResource), val.resources);
  };
  function CompositorFrameSink_DidNotProduceFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_DidNotProduceFrame_Params.prototype.initDefaults_ = function() {
    this.ack = null;
  };
  CompositorFrameSink_DidNotProduceFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_DidNotProduceFrame_Params.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSink_DidNotProduceFrame_Params.ack
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, begin_frame_args$.BeginFrameAck, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSink_DidNotProduceFrame_Params.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSink_DidNotProduceFrame_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_DidNotProduceFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ack = decoder.decodeStructPointer(begin_frame_args$.BeginFrameAck);
    return val;
  };

  CompositorFrameSink_DidNotProduceFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_DidNotProduceFrame_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(begin_frame_args$.BeginFrameAck, val.ack);
  };
  function CompositorFrameSink_DidAllocateSharedBitmap_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_DidAllocateSharedBitmap_Params.prototype.initDefaults_ = function() {
    this.buffer = null;
    this.id = null;
  };
  CompositorFrameSink_DidAllocateSharedBitmap_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_DidAllocateSharedBitmap_Params.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSink_DidAllocateSharedBitmap_Params.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSink_DidAllocateSharedBitmap_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSink_DidAllocateSharedBitmap_Params.encodedSize = codec.kStructHeaderSize + 16;

  CompositorFrameSink_DidAllocateSharedBitmap_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_DidAllocateSharedBitmap_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.id = decoder.decodeStructPointer(mailbox$.Mailbox);
    return val;
  };

  CompositorFrameSink_DidAllocateSharedBitmap_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_DidAllocateSharedBitmap_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.id);
  };
  function CompositorFrameSink_DidDeleteSharedBitmap_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSink_DidDeleteSharedBitmap_Params.prototype.initDefaults_ = function() {
    this.id = null;
  };
  CompositorFrameSink_DidDeleteSharedBitmap_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSink_DidDeleteSharedBitmap_Params.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSink_DidDeleteSharedBitmap_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSink_DidDeleteSharedBitmap_Params.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSink_DidDeleteSharedBitmap_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSink_DidDeleteSharedBitmap_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStructPointer(mailbox$.Mailbox);
    return val;
  };

  CompositorFrameSink_DidDeleteSharedBitmap_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSink_DidDeleteSharedBitmap_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.id);
  };
  function CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.prototype.initDefaults_ = function() {
    this.resources = null;
  };
  CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.resources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(returned_resource$.ReturnedResource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resources = decoder.decodeArrayPointer(new codec.PointerTo(returned_resource$.ReturnedResource));
    return val;
  };

  CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(returned_resource$.ReturnedResource), val.resources);
  };
  function CompositorFrameSinkClient_OnBeginFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSinkClient_OnBeginFrame_Params.prototype.initDefaults_ = function() {
    this.args = null;
    this.presentations = null;
  };
  CompositorFrameSinkClient_OnBeginFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSinkClient_OnBeginFrame_Params.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSinkClient_OnBeginFrame_Params.args
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, begin_frame_args$.BeginFrameArgs, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameSinkClient_OnBeginFrame_Params.presentations
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.Uint32, new codec.PointerTo(presentation_feedback$.PresentationFeedback), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSinkClient_OnBeginFrame_Params.encodedSize = codec.kStructHeaderSize + 16;

  CompositorFrameSinkClient_OnBeginFrame_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSinkClient_OnBeginFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.args = decoder.decodeStructPointer(begin_frame_args$.BeginFrameArgs);
    val.presentations = decoder.decodeMapPointer(codec.Uint32, new codec.PointerTo(presentation_feedback$.PresentationFeedback));
    return val;
  };

  CompositorFrameSinkClient_OnBeginFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSinkClient_OnBeginFrame_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(begin_frame_args$.BeginFrameArgs, val.args);
    encoder.encodeMapPointer(codec.Uint32, new codec.PointerTo(presentation_feedback$.PresentationFeedback), val.presentations);
  };
  function CompositorFrameSinkClient_OnBeginFramePausedChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.prototype.initDefaults_ = function() {
    this.paused = false;
  };
  CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.validate = function(messageValidator, offset) {
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

  CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSinkClient_OnBeginFramePausedChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.paused = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.paused & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CompositorFrameSinkClient_ReclaimResources_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameSinkClient_ReclaimResources_Params.prototype.initDefaults_ = function() {
    this.resources = null;
  };
  CompositorFrameSinkClient_ReclaimResources_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameSinkClient_ReclaimResources_Params.validate = function(messageValidator, offset) {
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


    // validate CompositorFrameSinkClient_ReclaimResources_Params.resources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(returned_resource$.ReturnedResource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameSinkClient_ReclaimResources_Params.encodedSize = codec.kStructHeaderSize + 8;

  CompositorFrameSinkClient_ReclaimResources_Params.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameSinkClient_ReclaimResources_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resources = decoder.decodeArrayPointer(new codec.PointerTo(returned_resource$.ReturnedResource));
    return val;
  };

  CompositorFrameSinkClient_ReclaimResources_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameSinkClient_ReclaimResources_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(returned_resource$.ReturnedResource), val.resources);
  };
  var kCompositorFrameSink_SetNeedsBeginFrame_Name = 0;
  var kCompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Name = 1;
  var kCompositorFrameSink_SubmitCompositorFrame_Name = 2;
  var kCompositorFrameSink_SubmitCompositorFrameSync_Name = 3;
  var kCompositorFrameSink_DidNotProduceFrame_Name = 4;
  var kCompositorFrameSink_DidAllocateSharedBitmap_Name = 5;
  var kCompositorFrameSink_DidDeleteSharedBitmap_Name = 6;

  function CompositorFrameSinkPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CompositorFrameSink,
                                                   handleOrPtrInfo);
  }

  function CompositorFrameSinkAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CompositorFrameSink, associatedInterfacePtrInfo);
  }

  CompositorFrameSinkAssociatedPtr.prototype =
      Object.create(CompositorFrameSinkPtr.prototype);
  CompositorFrameSinkAssociatedPtr.prototype.constructor =
      CompositorFrameSinkAssociatedPtr;

  function CompositorFrameSinkProxy(receiver) {
    this.receiver_ = receiver;
  }
  CompositorFrameSinkPtr.prototype.setNeedsBeginFrame = function() {
    return CompositorFrameSinkProxy.prototype.setNeedsBeginFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.setNeedsBeginFrame = function(needsBeginFrame) {
    var params_ = new CompositorFrameSink_SetNeedsBeginFrame_Params();
    params_.needsBeginFrame = needsBeginFrame;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSink_SetNeedsBeginFrame_Name,
        codec.align(CompositorFrameSink_SetNeedsBeginFrame_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSink_SetNeedsBeginFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkPtr.prototype.setWantsAnimateOnlyBeginFrames = function() {
    return CompositorFrameSinkProxy.prototype.setWantsAnimateOnlyBeginFrames
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.setWantsAnimateOnlyBeginFrames = function() {
    var params_ = new CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params();
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Name,
        codec.align(CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkPtr.prototype.submitCompositorFrame = function() {
    return CompositorFrameSinkProxy.prototype.submitCompositorFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.submitCompositorFrame = function(localSurfaceId, frame, hitTestRegionList, submitTime) {
    var params_ = new CompositorFrameSink_SubmitCompositorFrame_Params();
    params_.localSurfaceId = localSurfaceId;
    params_.frame = frame;
    params_.hitTestRegionList = hitTestRegionList;
    params_.submitTime = submitTime;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSink_SubmitCompositorFrame_Name,
        codec.align(CompositorFrameSink_SubmitCompositorFrame_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSink_SubmitCompositorFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkPtr.prototype.submitCompositorFrameSync = function() {
    return CompositorFrameSinkProxy.prototype.submitCompositorFrameSync
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.submitCompositorFrameSync = function(localSurfaceId, frame, hitTestRegionList, submitTime) {
    var params_ = new CompositorFrameSink_SubmitCompositorFrameSync_Params();
    params_.localSurfaceId = localSurfaceId;
    params_.frame = frame;
    params_.hitTestRegionList = hitTestRegionList;
    params_.submitTime = submitTime;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCompositorFrameSink_SubmitCompositorFrameSync_Name,
          codec.align(CompositorFrameSink_SubmitCompositorFrameSync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CompositorFrameSink_SubmitCompositorFrameSync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CompositorFrameSinkPtr.prototype.didNotProduceFrame = function() {
    return CompositorFrameSinkProxy.prototype.didNotProduceFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.didNotProduceFrame = function(ack) {
    var params_ = new CompositorFrameSink_DidNotProduceFrame_Params();
    params_.ack = ack;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSink_DidNotProduceFrame_Name,
        codec.align(CompositorFrameSink_DidNotProduceFrame_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSink_DidNotProduceFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkPtr.prototype.didAllocateSharedBitmap = function() {
    return CompositorFrameSinkProxy.prototype.didAllocateSharedBitmap
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.didAllocateSharedBitmap = function(buffer, id) {
    var params_ = new CompositorFrameSink_DidAllocateSharedBitmap_Params();
    params_.buffer = buffer;
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSink_DidAllocateSharedBitmap_Name,
        codec.align(CompositorFrameSink_DidAllocateSharedBitmap_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSink_DidAllocateSharedBitmap_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkPtr.prototype.didDeleteSharedBitmap = function() {
    return CompositorFrameSinkProxy.prototype.didDeleteSharedBitmap
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkProxy.prototype.didDeleteSharedBitmap = function(id) {
    var params_ = new CompositorFrameSink_DidDeleteSharedBitmap_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSink_DidDeleteSharedBitmap_Name,
        codec.align(CompositorFrameSink_DidDeleteSharedBitmap_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSink_DidDeleteSharedBitmap_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CompositorFrameSinkStub(delegate) {
    this.delegate_ = delegate;
  }
  CompositorFrameSinkStub.prototype.setNeedsBeginFrame = function(needsBeginFrame) {
    return this.delegate_ && this.delegate_.setNeedsBeginFrame && this.delegate_.setNeedsBeginFrame(needsBeginFrame);
  }
  CompositorFrameSinkStub.prototype.setWantsAnimateOnlyBeginFrames = function() {
    return this.delegate_ && this.delegate_.setWantsAnimateOnlyBeginFrames && this.delegate_.setWantsAnimateOnlyBeginFrames();
  }
  CompositorFrameSinkStub.prototype.submitCompositorFrame = function(localSurfaceId, frame, hitTestRegionList, submitTime) {
    return this.delegate_ && this.delegate_.submitCompositorFrame && this.delegate_.submitCompositorFrame(localSurfaceId, frame, hitTestRegionList, submitTime);
  }
  CompositorFrameSinkStub.prototype.submitCompositorFrameSync = function(localSurfaceId, frame, hitTestRegionList, submitTime) {
    return this.delegate_ && this.delegate_.submitCompositorFrameSync && this.delegate_.submitCompositorFrameSync(localSurfaceId, frame, hitTestRegionList, submitTime);
  }
  CompositorFrameSinkStub.prototype.didNotProduceFrame = function(ack) {
    return this.delegate_ && this.delegate_.didNotProduceFrame && this.delegate_.didNotProduceFrame(ack);
  }
  CompositorFrameSinkStub.prototype.didAllocateSharedBitmap = function(buffer, id) {
    return this.delegate_ && this.delegate_.didAllocateSharedBitmap && this.delegate_.didAllocateSharedBitmap(buffer, id);
  }
  CompositorFrameSinkStub.prototype.didDeleteSharedBitmap = function(id) {
    return this.delegate_ && this.delegate_.didDeleteSharedBitmap && this.delegate_.didDeleteSharedBitmap(id);
  }

  CompositorFrameSinkStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCompositorFrameSink_SetNeedsBeginFrame_Name:
      var params = reader.decodeStruct(CompositorFrameSink_SetNeedsBeginFrame_Params);
      this.setNeedsBeginFrame(params.needsBeginFrame);
      return true;
    case kCompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Name:
      var params = reader.decodeStruct(CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params);
      this.setWantsAnimateOnlyBeginFrames();
      return true;
    case kCompositorFrameSink_SubmitCompositorFrame_Name:
      var params = reader.decodeStruct(CompositorFrameSink_SubmitCompositorFrame_Params);
      this.submitCompositorFrame(params.localSurfaceId, params.frame, params.hitTestRegionList, params.submitTime);
      return true;
    case kCompositorFrameSink_DidNotProduceFrame_Name:
      var params = reader.decodeStruct(CompositorFrameSink_DidNotProduceFrame_Params);
      this.didNotProduceFrame(params.ack);
      return true;
    case kCompositorFrameSink_DidAllocateSharedBitmap_Name:
      var params = reader.decodeStruct(CompositorFrameSink_DidAllocateSharedBitmap_Params);
      this.didAllocateSharedBitmap(params.buffer, params.id);
      return true;
    case kCompositorFrameSink_DidDeleteSharedBitmap_Name:
      var params = reader.decodeStruct(CompositorFrameSink_DidDeleteSharedBitmap_Params);
      this.didDeleteSharedBitmap(params.id);
      return true;
    default:
      return false;
    }
  };

  CompositorFrameSinkStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCompositorFrameSink_SubmitCompositorFrameSync_Name:
      var params = reader.decodeStruct(CompositorFrameSink_SubmitCompositorFrameSync_Params);
      this.submitCompositorFrameSync(params.localSurfaceId, params.frame, params.hitTestRegionList, params.submitTime).then(function(response) {
        var responseParams =
            new CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams();
        responseParams.resources = response.resources;
        var builder = new codec.MessageV1Builder(
            kCompositorFrameSink_SubmitCompositorFrameSync_Name,
            codec.align(CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCompositorFrameSinkRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCompositorFrameSink_SetNeedsBeginFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSink_SetNeedsBeginFrame_Params;
      break;
      case kCompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSink_SetWantsAnimateOnlyBeginFrames_Params;
      break;
      case kCompositorFrameSink_SubmitCompositorFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSink_SubmitCompositorFrame_Params;
      break;
      case kCompositorFrameSink_SubmitCompositorFrameSync_Name:
        if (message.expectsResponse())
          paramsClass = CompositorFrameSink_SubmitCompositorFrameSync_Params;
      break;
      case kCompositorFrameSink_DidNotProduceFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSink_DidNotProduceFrame_Params;
      break;
      case kCompositorFrameSink_DidAllocateSharedBitmap_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSink_DidAllocateSharedBitmap_Params;
      break;
      case kCompositorFrameSink_DidDeleteSharedBitmap_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSink_DidDeleteSharedBitmap_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCompositorFrameSinkResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCompositorFrameSink_SubmitCompositorFrameSync_Name:
        if (message.isResponse())
          paramsClass = CompositorFrameSink_SubmitCompositorFrameSync_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CompositorFrameSink = {
    name: 'viz.mojom.CompositorFrameSink',
    kVersion: 0,
    ptrClass: CompositorFrameSinkPtr,
    proxyClass: CompositorFrameSinkProxy,
    stubClass: CompositorFrameSinkStub,
    validateRequest: validateCompositorFrameSinkRequest,
    validateResponse: validateCompositorFrameSinkResponse,
  };
  CompositorFrameSinkStub.prototype.validator = validateCompositorFrameSinkRequest;
  CompositorFrameSinkProxy.prototype.validator = validateCompositorFrameSinkResponse;
  var kCompositorFrameSinkClient_DidReceiveCompositorFrameAck_Name = 0;
  var kCompositorFrameSinkClient_OnBeginFrame_Name = 1;
  var kCompositorFrameSinkClient_OnBeginFramePausedChanged_Name = 2;
  var kCompositorFrameSinkClient_ReclaimResources_Name = 3;

  function CompositorFrameSinkClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CompositorFrameSinkClient,
                                                   handleOrPtrInfo);
  }

  function CompositorFrameSinkClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CompositorFrameSinkClient, associatedInterfacePtrInfo);
  }

  CompositorFrameSinkClientAssociatedPtr.prototype =
      Object.create(CompositorFrameSinkClientPtr.prototype);
  CompositorFrameSinkClientAssociatedPtr.prototype.constructor =
      CompositorFrameSinkClientAssociatedPtr;

  function CompositorFrameSinkClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  CompositorFrameSinkClientPtr.prototype.didReceiveCompositorFrameAck = function() {
    return CompositorFrameSinkClientProxy.prototype.didReceiveCompositorFrameAck
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkClientProxy.prototype.didReceiveCompositorFrameAck = function(resources) {
    var params_ = new CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params();
    params_.resources = resources;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSinkClient_DidReceiveCompositorFrameAck_Name,
        codec.align(CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkClientPtr.prototype.onBeginFrame = function() {
    return CompositorFrameSinkClientProxy.prototype.onBeginFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkClientProxy.prototype.onBeginFrame = function(args, presentations) {
    var params_ = new CompositorFrameSinkClient_OnBeginFrame_Params();
    params_.args = args;
    params_.presentations = presentations;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSinkClient_OnBeginFrame_Name,
        codec.align(CompositorFrameSinkClient_OnBeginFrame_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSinkClient_OnBeginFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkClientPtr.prototype.onBeginFramePausedChanged = function() {
    return CompositorFrameSinkClientProxy.prototype.onBeginFramePausedChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkClientProxy.prototype.onBeginFramePausedChanged = function(paused) {
    var params_ = new CompositorFrameSinkClient_OnBeginFramePausedChanged_Params();
    params_.paused = paused;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSinkClient_OnBeginFramePausedChanged_Name,
        codec.align(CompositorFrameSinkClient_OnBeginFramePausedChanged_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSinkClient_OnBeginFramePausedChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CompositorFrameSinkClientPtr.prototype.reclaimResources = function() {
    return CompositorFrameSinkClientProxy.prototype.reclaimResources
        .apply(this.ptr.getProxy(), arguments);
  };

  CompositorFrameSinkClientProxy.prototype.reclaimResources = function(resources) {
    var params_ = new CompositorFrameSinkClient_ReclaimResources_Params();
    params_.resources = resources;
    var builder = new codec.MessageV0Builder(
        kCompositorFrameSinkClient_ReclaimResources_Name,
        codec.align(CompositorFrameSinkClient_ReclaimResources_Params.encodedSize));
    builder.encodeStruct(CompositorFrameSinkClient_ReclaimResources_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CompositorFrameSinkClientStub(delegate) {
    this.delegate_ = delegate;
  }
  CompositorFrameSinkClientStub.prototype.didReceiveCompositorFrameAck = function(resources) {
    return this.delegate_ && this.delegate_.didReceiveCompositorFrameAck && this.delegate_.didReceiveCompositorFrameAck(resources);
  }
  CompositorFrameSinkClientStub.prototype.onBeginFrame = function(args, presentations) {
    return this.delegate_ && this.delegate_.onBeginFrame && this.delegate_.onBeginFrame(args, presentations);
  }
  CompositorFrameSinkClientStub.prototype.onBeginFramePausedChanged = function(paused) {
    return this.delegate_ && this.delegate_.onBeginFramePausedChanged && this.delegate_.onBeginFramePausedChanged(paused);
  }
  CompositorFrameSinkClientStub.prototype.reclaimResources = function(resources) {
    return this.delegate_ && this.delegate_.reclaimResources && this.delegate_.reclaimResources(resources);
  }

  CompositorFrameSinkClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCompositorFrameSinkClient_DidReceiveCompositorFrameAck_Name:
      var params = reader.decodeStruct(CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params);
      this.didReceiveCompositorFrameAck(params.resources);
      return true;
    case kCompositorFrameSinkClient_OnBeginFrame_Name:
      var params = reader.decodeStruct(CompositorFrameSinkClient_OnBeginFrame_Params);
      this.onBeginFrame(params.args, params.presentations);
      return true;
    case kCompositorFrameSinkClient_OnBeginFramePausedChanged_Name:
      var params = reader.decodeStruct(CompositorFrameSinkClient_OnBeginFramePausedChanged_Params);
      this.onBeginFramePausedChanged(params.paused);
      return true;
    case kCompositorFrameSinkClient_ReclaimResources_Name:
      var params = reader.decodeStruct(CompositorFrameSinkClient_ReclaimResources_Params);
      this.reclaimResources(params.resources);
      return true;
    default:
      return false;
    }
  };

  CompositorFrameSinkClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCompositorFrameSinkClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCompositorFrameSinkClient_DidReceiveCompositorFrameAck_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params;
      break;
      case kCompositorFrameSinkClient_OnBeginFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSinkClient_OnBeginFrame_Params;
      break;
      case kCompositorFrameSinkClient_OnBeginFramePausedChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSinkClient_OnBeginFramePausedChanged_Params;
      break;
      case kCompositorFrameSinkClient_ReclaimResources_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CompositorFrameSinkClient_ReclaimResources_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCompositorFrameSinkClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CompositorFrameSinkClient = {
    name: 'viz.mojom.CompositorFrameSinkClient',
    kVersion: 0,
    ptrClass: CompositorFrameSinkClientPtr,
    proxyClass: CompositorFrameSinkClientProxy,
    stubClass: CompositorFrameSinkClientStub,
    validateRequest: validateCompositorFrameSinkClientRequest,
    validateResponse: null,
  };
  CompositorFrameSinkClientStub.prototype.validator = validateCompositorFrameSinkClientRequest;
  CompositorFrameSinkClientProxy.prototype.validator = null;
  exports.CompositorFrameSink = CompositorFrameSink;
  exports.CompositorFrameSinkPtr = CompositorFrameSinkPtr;
  exports.CompositorFrameSinkAssociatedPtr = CompositorFrameSinkAssociatedPtr;
  exports.CompositorFrameSinkClient = CompositorFrameSinkClient;
  exports.CompositorFrameSinkClientPtr = CompositorFrameSinkClientPtr;
  exports.CompositorFrameSinkClientAssociatedPtr = CompositorFrameSinkClientAssociatedPtr;
})();