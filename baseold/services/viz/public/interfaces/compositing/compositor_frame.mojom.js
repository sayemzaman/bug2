// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/compositor_frame.mojom';
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
  var compositor_frame_metadata$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/compositor_frame_metadata.mojom', 'compositor_frame_metadata.mojom.js');
  }
  var render_pass$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/render_pass.mojom', 'render_pass.mojom.js');
  }
  var transferable_resource$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/transferable_resource.mojom', 'transferable_resource.mojom.js');
  }



  function CompositorFrame(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrame.prototype.initDefaults_ = function() {
    this.metadata = null;
    this.resources = null;
    this.passes = null;
  };
  CompositorFrame.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrame.validate = function(messageValidator, offset) {
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


    // validate CompositorFrame.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, compositor_frame_metadata$.CompositorFrameMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrame.resources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(transferable_resource$.TransferableResource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrame.passes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(render_pass$.RenderPass), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrame.encodedSize = codec.kStructHeaderSize + 24;

  CompositorFrame.decode = function(decoder) {
    var packed;
    var val = new CompositorFrame();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metadata = decoder.decodeStructPointer(compositor_frame_metadata$.CompositorFrameMetadata);
    val.resources = decoder.decodeArrayPointer(new codec.PointerTo(transferable_resource$.TransferableResource));
    val.passes = decoder.decodeArrayPointer(new codec.PointerTo(render_pass$.RenderPass));
    return val;
  };

  CompositorFrame.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrame.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(compositor_frame_metadata$.CompositorFrameMetadata, val.metadata);
    encoder.encodeArrayPointer(new codec.PointerTo(transferable_resource$.TransferableResource), val.resources);
    encoder.encodeArrayPointer(new codec.PointerTo(render_pass$.RenderPass), val.passes);
  };
  exports.CompositorFrame = CompositorFrame;
})();