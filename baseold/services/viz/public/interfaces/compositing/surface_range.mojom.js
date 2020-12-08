// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/surface_range.mojom';
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
  var surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/surface_id.mojom', 'surface_id.mojom.js');
  }



  function SurfaceRange(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SurfaceRange.prototype.initDefaults_ = function() {
    this.start = null;
    this.end = null;
  };
  SurfaceRange.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SurfaceRange.validate = function(messageValidator, offset) {
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


    // validate SurfaceRange.start
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, surface_id$.SurfaceId, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SurfaceRange.end
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, surface_id$.SurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SurfaceRange.encodedSize = codec.kStructHeaderSize + 16;

  SurfaceRange.decode = function(decoder) {
    var packed;
    var val = new SurfaceRange();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.start = decoder.decodeStructPointer(surface_id$.SurfaceId);
    val.end = decoder.decodeStructPointer(surface_id$.SurfaceId);
    return val;
  };

  SurfaceRange.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SurfaceRange.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(surface_id$.SurfaceId, val.start);
    encoder.encodeStructPointer(surface_id$.SurfaceId, val.end);
  };
  exports.SurfaceRange = SurfaceRange;
})();